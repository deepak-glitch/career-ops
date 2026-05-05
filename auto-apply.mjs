#!/usr/bin/env node
// auto-apply: open a job posting in Playwright, fill the application form
// using applicant data + tailored resume, and STOP at submit for human review.
//
// Usage:
//   node auto-apply.mjs <job-url>            # interactive: visible browser
//   node auto-apply.mjs --headless <url>     # ci/dry-run
//   node auto-apply.mjs --plan <url>         # discover fields + print plan, no fill
//   node auto-apply.mjs --report <num> <url> # force a specific report's CV
//
// Hard rules:
//   * Never click Submit. Ever. Pause and let the human review.
//   * Never skip a field. If a value isn't known, mark it `needs-review`,
//     fill what we have, and surface the gap loudly at the end.
//   * Cover all major portals (Greenhouse, Ashby, Lever, Workday, Breezy,
//     SmartRecruiters, Workable, iCIMS, Taleo, Jobvite, BambooHR,
//     SuccessFactors, Wellfound, LinkedIn) with a generic fallback.

import { chromium } from "playwright";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadApplicant } from "./lib/auto-apply/applicant.mjs";
import { resolveResume, findReportForUrl, reportSlug } from "./lib/auto-apply/resume.mjs";
import {
  detectPortal,
  clickApplyEntryPoint,
  discoverFields,
  locateSubmit,
} from "./lib/auto-apply/portals.mjs";
import { buildAnswers, loadReportContext } from "./lib/auto-apply/answers.mjs";

// Node-safe CSS attribute-value escaper (CSS.escape only exists in browsers).
function cssEscape(s) {
  return String(s).replace(/(["\\])/g, "\\$1");
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseArgs(argv) {
  const args = { headless: false, plan: false, url: null, reportFile: null };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--headless") args.headless = true;
    else if (a === "--plan") args.plan = true;
    else if (a === "--report") args.reportFile = argv[++i];
    else if (a === "--help" || a === "-h") {
      printUsage();
      process.exit(0);
    } else rest.push(a);
  }
  args.url = rest[0] || null;
  return args;
}

function printUsage() {
  console.log(`auto-apply -- fill job application forms; STOPS at submit

Usage:
  node auto-apply.mjs <job-url>               Interactive (visible browser)
  node auto-apply.mjs --headless <url>        Headless plan-and-fill
  node auto-apply.mjs --plan <url>            Discover fields + print plan only
  node auto-apply.mjs --report <file> <url>   Force a specific report's tailored CV

Examples:
  node auto-apply.mjs https://job-boards.greenhouse.io/anthropic/jobs/4985877008
  node auto-apply.mjs --plan https://jobs.lever.co/palantir/abc-123
`);
}

async function tryFill(page, field, value) {
  // Radio groups don't need a top-level selector; we look up by `name`.
  // Other kinds need a selector.
  if (field.kind !== "radio" && !field.selector) return false;
  const loc = field.selector ? page.locator(field.selector).first() : null;
  if (loc && (await loc.count()) === 0) return false;
  try {
    if (field.kind === "select") {
      // Try by label, then by value, then case-insensitive partial.
      try {
        await loc.selectOption({ label: value });
        return true;
      } catch {}
      try {
        await loc.selectOption({ value });
        return true;
      } catch {}
      const options = await loc.locator("option").allTextContents();
      const target = value.toLowerCase();
      const match = options.find((o) => o.toLowerCase().includes(target));
      if (match) {
        await loc.selectOption({ label: match });
        return true;
      }
      return false;
    }
    if (field.kind === "checkbox") {
      const want = /^(yes|true|1|on)$/i.test(String(value));
      if (want) await loc.check();
      else await loc.uncheck();
      return true;
    }
    if (field.kind === "radio") {
      const want = String(value).toLowerCase().trim();
      const groupName = field.name;
      if (!groupName) return false;
      const radios = page.locator(`input[type="radio"][name="${cssEscape(groupName)}"]`);
      const count = await radios.count();
      for (let i = 0; i < count; i++) {
        const r = radios.nth(i);
        const id = await r.getAttribute("id");
        const v = ((await r.getAttribute("value")) || "").toLowerCase().trim();
        let labelText = "";
        if (id) {
          const lab = page.locator(`label[for="${cssEscape(id)}"]`);
          if ((await lab.count()) > 0) labelText = (await lab.textContent()) || "";
        }
        // Also check the parent label (common pattern: <label><input/>Text</label>).
        if (!labelText) {
          const parentLabel = r.locator("xpath=ancestor::label[1]");
          if ((await parentLabel.count()) > 0) {
            labelText = (await parentLabel.first().textContent()) || "";
          }
        }
        labelText = labelText.toLowerCase().trim();
        if (
          v === want ||
          v.includes(want) ||
          want.includes(v) ||
          labelText === want ||
          labelText.includes(want)
        ) {
          await r.check({ force: true });
          return true;
        }
      }
      return false;
    }
    if (field.kind === "file") {
      if (!value || !existsSync(value)) return false;
      await loc.setInputFiles(value);
      return true;
    }
    // text / textarea / date / number / url / tel
    await loc.fill(String(value));
    return true;
  } catch {
    return false;
  }
}

function fmtPlan(plan) {
  const lines = [];
  for (const item of plan) {
    const { field, value, source, confidence } = item;
    const cf = confidence.padEnd(13);
    const tag = `[${cf}]`;
    const v =
      value === null
        ? "<missing>"
        : String(value).split("\n")[0].slice(0, 80) + (String(value).length > 80 ? "…" : "");
    lines.push(
      `  ${tag} ${field.kind.padEnd(8)} ${(field.label || field.name || field.id).slice(0, 50).padEnd(50)} → ${v}` +
        (source ? `  (${source})` : "")
    );
  }
  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.url) {
    printUsage();
    process.exit(1);
  }

  const applicant = loadApplicant();
  const resolved = resolveResume(args.url);
  let reportFile = resolved.report?.file || args.reportFile || null;
  if (args.reportFile) {
    // Allow --report to override; reload PDF from its slug.
    reportFile = args.reportFile;
  }
  const report = loadReportContext(reportFile);
  const resumePdf = resolved.pdf;

  console.log("URL:        ", args.url);
  console.log("Portal:     ", detectPortal(args.url));
  console.log("Report:     ", report?.file || "<none found — using fallback CV>");
  console.log("Company:    ", report?.company || "<unknown>");
  console.log("Role:       ", report?.role || "<unknown>");
  console.log("Resume PDF: ", resumePdf || "<none — generate with `npm run pdf`>");
  console.log();

  const browser = await chromium.launch({ headless: args.headless });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage();

  try {
    await page.goto(args.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(1500);

    const portal = detectPortal(args.url);
    const clicked = await clickApplyEntryPoint(page, portal);
    if (clicked) {
      console.log(`Clicked ${portal} apply entry point.`);
      await page.waitForTimeout(1500);
    }

    const fields = await discoverFields(page);
    console.log(`Discovered ${fields.length} form field(s) on ${portal} portal.`);
    if (fields.length === 0) {
      console.log("No form fields found. The page may require login, captcha, or a JS-driven flow.");
      console.log("Leaving the browser open for manual inspection — close it when done.");
      if (!args.headless) await page.waitForTimeout(60_000);
      return;
    }

    const plan = buildAnswers(fields, applicant, report, resumePdf);

    console.log("\n=== FILL PLAN ===");
    console.log(fmtPlan(plan));

    if (args.plan) {
      console.log("\n--plan mode: not filling. Exiting.");
      return;
    }

    console.log("\n=== FILLING ===");
    let filled = 0, missed = 0, needsReview = 0;
    for (const item of plan) {
      if (item.value === null) {
        missed++;
        if (item.confidence === "needs-review") needsReview++;
        continue;
      }
      const ok = await tryFill(page, item.field, item.value);
      if (ok) {
        filled++;
        const pretty = String(item.value).split("\n")[0].slice(0, 60);
        console.log(`  ✓ ${item.field.label || item.field.name}: ${pretty}`);
      } else {
        missed++;
        console.log(`  ✗ ${item.field.label || item.field.name}  [${item.field.kind}] (could not fill)`);
      }
    }

    // Persist the plan for audit / debugging.
    const auditDir = join(__dirname, "data", "auto-apply");
    if (!existsSync(auditDir)) mkdirSync(auditDir, { recursive: true });
    const auditFile = join(auditDir, `${Date.now()}-${detectPortal(args.url)}.json`);
    writeFileSync(
      auditFile,
      JSON.stringify(
        {
          url: args.url,
          portal,
          report: report?.file,
          resumePdf,
          plan: plan.map((p) => ({
            label: p.field.label,
            kind: p.field.kind,
            value: p.value,
            source: p.source,
            confidence: p.confidence,
          })),
        },
        null,
        2
      )
    );
    console.log(`\nFill plan saved → ${auditFile}`);

    const submit = await locateSubmit(page);
    console.log("\n=== READY ===");
    console.log(`Filled: ${filled}   Skipped: ${missed}   Needs review: ${needsReview}`);
    if (submit) {
      console.log(`Submit button located: ${submit.selector}  (NOT clicked — review and submit manually)`);
    } else {
      console.log("Submit button not located. Scroll the form to confirm before clicking.");
    }
    if (needsReview > 0) {
      console.log("\nGAPS that need your review:");
      for (const item of plan) {
        if (item.confidence === "needs-review" && item.value === null) {
          console.log(`  • ${item.field.label || item.field.name || item.field.id}  [${item.field.kind}]`);
        }
        if (item.confidence === "draft") {
          console.log(`  • DRAFT: ${item.field.label}`);
        }
      }
    }
    if (!args.headless) {
      console.log("\nBrowser stays open for 5 minutes. Review, edit, submit when ready.");
      await page.waitForTimeout(5 * 60 * 1000);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("auto-apply failed:", err);
  process.exit(1);
});
