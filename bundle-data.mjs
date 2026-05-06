#!/usr/bin/env node
// bundle-data.mjs — snapshot all the data the extension needs so it can run
// without the local bridge.
//
// Writes to extension/data/:
//   jobs.json          — list of evaluated jobs (same shape as /jobs)
//   applicant.json     — parsed personal info + master resume facts
//   resolved/{slug}.json — { applicant, drafts, report } per job (the /resolve payload)
//   prefilled/{slug}.json — copies of any pre-built per-field answers
//   pdfs/{slug}.pdf    — tailored resume PDFs
//
// Usage:
//   node bundle-data.mjs                 # bundle jobs with score >= 4.0
//   node bundle-data.mjs --min-score 3.5 # lower threshold
//   node bundle-data.mjs --max 50        # cap how many jobs
//   node bundle-data.mjs --all           # include every evaluated job
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  copyFileSync,
  rmSync,
  readdirSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadApplicant } from "./lib/auto-apply/applicant.mjs";
import {
  resolveResume,
  reportSlug,
  findPdfForSlug,
} from "./lib/auto-apply/resume.mjs";
import { detectPortal } from "./lib/auto-apply/portals.mjs";
import { buildAnswers, loadReportContext } from "./lib/auto-apply/answers.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const TRACKER_PATH = join(ROOT, "data", "applications.md");
const REPORTS_DIR = join(ROOT, "reports");
const PREFILLED_SRC = join(ROOT, "data", "auto-apply", "prefilled");
const BUNDLE_DIR = join(ROOT, "extension", "data");
const BUNDLE_PDFS = join(BUNDLE_DIR, "pdfs");
const BUNDLE_RESOLVED = join(BUNDLE_DIR, "resolved");
const BUNDLE_PREFILLED = join(BUNDLE_DIR, "prefilled");

function parseArgs(argv) {
  // Default: bundle every Evaluated job in the tracker. Use --min-score to
  // shrink the bundle (e.g. for size-sensitive distribution).
  const args = { minScore: 0, max: 0, all: true };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--min-score") { args.minScore = parseFloat(argv[++i]); args.all = false; }
    else if (a === "--max") args.max = parseInt(argv[++i], 10);
    else if (a === "--all") { args.all = true; args.minScore = 0; }
  }
  return args;
}

function loadTrackerRows() {
  if (!existsSync(TRACKER_PATH)) return [];
  const text = readFileSync(TRACKER_PATH, "utf8");
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("| ")) continue;
    const cols = line.split("|").map((c) => c.trim());
    if (cols.length < 10) continue;
    if (cols[1] === "#" || cols[1].startsWith("---")) continue;
    rows.push({
      num: cols[1], date: cols[2], company: cols[3], role: cols[4],
      score: cols[5], status: cols[6], pdf: cols[7],
      report: cols[8], notes: cols[9],
    });
  }
  return rows;
}

function reportFileFromTrackerCell(cell) {
  const m = cell.match(/\(reports\/([^)]+)\)/);
  return m ? m[1] : null;
}

function urlFromReportFile(reportFile) {
  if (!reportFile) return null;
  const path = join(REPORTS_DIR, reportFile);
  if (!existsSync(path)) return null;
  const m = readFileSync(path, "utf8").match(/\*\*URL:\*\*\s*(\S+)/);
  return m ? m[1] : null;
}

function buildResolvedPayload(url, applicant) {
  const resolved = resolveResume(url);
  const report = loadReportContext(resolved.report?.file || null);
  // Pre-compute the same narrative drafts the bridge would produce.
  const dummyFields = [
    { kind: "textarea", label: "Cover Letter", name: "", id: "" },
    { kind: "textarea", label: "Why do you want to join us?", name: "", id: "" },
    { kind: "textarea", label: "Why this role?", name: "", id: "" },
    { kind: "textarea", label: "Tell us about yourself", name: "", id: "" },
    { kind: "text", label: "Notice period", name: "", id: "" },
    { kind: "text", label: "Where did you hear about us?", name: "", id: "" },
  ];
  const drafts = {};
  for (const item of buildAnswers(dummyFields, applicant, report, null)) {
    if (item.value && item.confidence === "draft") {
      drafts[item.field.label] = item.value;
    }
  }
  return {
    url,
    portal: detectPortal(url),
    report: report ? {
      num: report.num,
      file: report.file,
      company: report.company,
      role: report.role,
    } : null,
    slug: resolved.slug,
    resumePdfUrl: resolved.slug ? `data/pdfs/${resolved.slug}.pdf` : null,
    applicant: applicant.fields,
    drafts,
  };
}

function ensureDir(d) {
  if (existsSync(d)) rmSync(d, { recursive: true, force: true });
  mkdirSync(d, { recursive: true });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log(`bundling jobs with score >= ${args.minScore}${args.max ? ` (max ${args.max})` : ""}`);

  ensureDir(BUNDLE_DIR);
  mkdirSync(BUNDLE_PDFS, { recursive: true });
  mkdirSync(BUNDLE_RESOLVED, { recursive: true });
  mkdirSync(BUNDLE_PREFILLED, { recursive: true });

  const applicant = loadApplicant();
  // Trim the master-resume / personal-info raw text from the bundled
  // applicant payload (the field map is the only thing the extension uses).
  writeFileSync(
    join(BUNDLE_DIR, "applicant.json"),
    JSON.stringify({ fields: applicant.fields }, null, 2)
  );

  const rows = loadTrackerRows();
  const ready = rows.filter((r) => /^evaluated$/i.test(r.status));
  const jobs = [];
  let pdfCount = 0, prefillCount = 0;
  for (const r of ready) {
    const reportFile = reportFileFromTrackerCell(r.report);
    const url = urlFromReportFile(reportFile);
    if (!url) continue;
    const slug = reportFile ? reportSlug(reportFile) : null;
    if (!slug) continue;
    const score = parseFloat((r.score || "").split("/")[0]) || null;
    if (!args.all && (score == null || score < args.minScore)) continue;
    const pdfPath = findPdfForSlug(slug);
    let prefillSummary = null;
    const srcPrefill = join(PREFILLED_SRC, `${slug}.json`);
    if (existsSync(srcPrefill)) {
      const dst = join(BUNDLE_PREFILLED, `${slug}.json`);
      copyFileSync(srcPrefill, dst);
      try {
        prefillSummary = JSON.parse(readFileSync(dst, "utf8")).summary;
        prefillCount++;
      } catch {}
    }
    if (pdfPath) {
      copyFileSync(pdfPath, join(BUNDLE_PDFS, `${slug}.pdf`));
      pdfCount++;
    }
    // Per-job resolved snapshot (applicant + drafts + report ref).
    const resolved = buildResolvedPayload(url, applicant);
    writeFileSync(
      join(BUNDLE_RESOLVED, `${slug}.json`),
      JSON.stringify(resolved, null, 2)
    );
    jobs.push({
      num: parseInt(r.num, 10),
      company: r.company,
      role: r.role,
      score,
      scoreLabel: r.score,
      date: r.date,
      url,
      slug,
      portal: detectPortal(url),
      reportFile,
      hasPdf: Boolean(pdfPath),
      hasPrefill: Boolean(prefillSummary),
      prefillSummary,
      notes: r.notes,
    });
    if (args.max && jobs.length >= args.max) break;
  }
  // Default sort: most recent first, matching the popup's default view.
  jobs.sort((a, b) =>
    (b.date || "").localeCompare(a.date || "")
    || (b.score ?? 0) - (a.score ?? 0)
  );
  writeFileSync(
    join(BUNDLE_DIR, "jobs.json"),
    JSON.stringify({
      bundledAt: new Date().toISOString(),
      jobCount: jobs.length,
      pdfCount,
      prefillCount,
      jobs,
    }, null, 2)
  );

  console.log(`✓ bundled ${jobs.length} jobs · ${pdfCount} PDFs · ${prefillCount} prefilled answer files`);
  console.log(`  → extension/data/`);
}

main();
