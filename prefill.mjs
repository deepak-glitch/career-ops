#!/usr/bin/env node
// prefill.mjs — turn scraped form schemas into ready-to-use answer files.
//
// Reads each schema in data/auto-apply/forms/{slug}.json (produced by
// scrape-forms.py via Scrapling), applies the same answer logic as the
// runtime auto-apply path, and writes:
//
//     data/auto-apply/prefilled/{slug}.json
//
// Each output records, per field: the chosen value, source, confidence,
// and (for selects/radios) the matched option label/value so the extension
// can fill without re-running discovery in-page if it doesn't want to.
//
// Usage:
//   node prefill.mjs                # all schemas
//   node prefill.mjs --slug <slug>  # single slug
//   node prefill.mjs --force        # rewrite even if newer than schema
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  statSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadApplicant } from "./lib/auto-apply/applicant.mjs";
import { resolveResume } from "./lib/auto-apply/resume.mjs";
import { buildAnswers, loadReportContext } from "./lib/auto-apply/answers.mjs";
import { detectPortal } from "./lib/auto-apply/portals.mjs";

const __filename = fileURLToPath(import.meta.url);
const PROJECT_ROOT = dirname(__filename);
const FORMS_DIR = join(PROJECT_ROOT, "data", "auto-apply", "forms");
const OUT_DIR = join(PROJECT_ROOT, "data", "auto-apply", "prefilled");

function parseArgs(argv) {
  const args = { slug: null, force: false, all: true };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug") { args.slug = argv[++i]; args.all = false; }
    else if (a === "--force") args.force = true;
  }
  return args;
}

// Pick the option whose label or value best matches `target` (string).
function pickOption(options, target) {
  if (!options || options.length === 0) return null;
  const want = String(target).toLowerCase().trim();
  // 1. exact
  const exact = options.find(
    (o) => o.value === target || o.label === target
  );
  if (exact) return exact;
  // 2. case-insensitive equal
  const ci = options.find(
    (o) => o.value?.toLowerCase() === want || o.label?.toLowerCase() === want
  );
  if (ci) return ci;
  // 3. label contains target
  const partial = options.find((o) =>
    (o.label || "").toLowerCase().includes(want)
  );
  if (partial) return partial;
  return null;
}

function buildPrefillForSchema(schema, applicant, report, resumePdf) {
  const fields = schema.fields.map((f) => ({
    kind: f.kind,
    label: f.label || "",
    name: f.name || "",
    id: f.id || "",
  }));
  const answers = buildAnswers(fields, applicant, report, resumePdf);

  // For selects and radios, augment the chosen value with the actual option
  // entry from the schema so the extension can apply it directly.
  const out = answers.map((item, idx) => {
    const schemaField = schema.fields[idx];
    const o = {
      label: schemaField.label,
      kind: schemaField.kind,
      name: schemaField.name,
      id: schemaField.id,
      required: schemaField.required,
      value: item.value,
      source: item.source,
      confidence: item.confidence,
    };
    if (
      (schemaField.kind === "select" || schemaField.kind === "radio") &&
      schemaField.options &&
      item.value != null
    ) {
      const opt = pickOption(schemaField.options, item.value);
      if (opt) o.matchedOption = opt;
      else {
        // No matching option -- downgrade confidence so the extension flags it.
        o.confidence = "needs-review";
        o.value = null;
        o.source = `${o.source} (no matching option)`;
      }
    }
    return o;
  });

  // Summary stats so the popup can show "all-fields-ready" badges.
  const summary = {
    total: out.length,
    high: out.filter((x) => x.confidence === "high").length,
    draft: out.filter((x) => x.confidence === "draft").length,
    needsReview: out.filter((x) => x.confidence === "needs-review").length,
    resumeReady: Boolean(resumePdf),
  };
  return { summary, fields: out };
}

function processSlug(slug, force) {
  const schemaPath = join(FORMS_DIR, `${slug}.json`);
  if (!existsSync(schemaPath)) {
    console.log(`  ! ${slug}: no schema (run scrape-forms.py first)`);
    return { ok: false };
  }
  const outPath = join(OUT_DIR, `${slug}.json`);
  if (existsSync(outPath) && !force) {
    const schemaTime = statSync(schemaPath).mtimeMs;
    const outTime = statSync(outPath).mtimeMs;
    if (outTime >= schemaTime) return { ok: true, cached: true };
  }
  const schema = JSON.parse(readFileSync(schemaPath, "utf8"));
  const applicant = loadApplicant();
  const resolved = resolveResume(schema.url);
  const report = loadReportContext(resolved.report?.file || null);
  const portal = schema.portal || detectPortal(schema.url);
  const prefill = buildPrefillForSchema(schema, applicant, report, resolved.pdf);
  const payload = {
    url: schema.url,
    portal,
    slug,
    company: schema.company || report?.company || null,
    role: schema.role || report?.role || null,
    resumePdfPath: resolved.pdf,
    resumeSlug: resolved.slug,
    builtAt: new Date().toISOString(),
    summary: prefill.summary,
    fields: prefill.fields,
  };
  writeFileSync(outPath, JSON.stringify(payload, null, 2));
  return { ok: true, payload };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  let slugs = [];
  if (args.slug) {
    slugs = [args.slug];
  } else {
    if (!existsSync(FORMS_DIR)) {
      console.log("no forms dir; run scrape-forms.py first");
      return;
    }
    slugs = readdirSync(FORMS_DIR)
      .filter((f) => f.endsWith(".json") && !f.endsWith(".error.json"))
      .map((f) => f.replace(/\.json$/, ""));
  }

  let ok = 0, cached = 0, err = 0;
  for (const slug of slugs) {
    try {
      const r = processSlug(slug, args.force);
      if (r.ok && r.cached) cached++;
      else if (r.ok) {
        ok++;
        const s = r.payload.summary;
        console.log(
          `  ✓ ${slug}  total=${s.total} high=${s.high} draft=${s.draft} review=${s.needsReview} resume=${s.resumeReady ? "✓" : "✗"}`
        );
      } else err++;
    } catch (e) {
      err++;
      console.log(`  ✗ ${slug}: ${e.message}`);
    }
  }
  console.log(`\nprefilled: ${ok} new · ${cached} cached · ${err} errors`);
}

main();
