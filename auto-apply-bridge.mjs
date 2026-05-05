#!/usr/bin/env node
// auto-apply-bridge: a tiny localhost HTTP server that exposes career-ops
// data to the Chrome extension.
//
// Endpoints:
//   GET  /jobs                List of evaluated apps ready to fill
//   GET  /resolve?url=<url>   Per-URL: applicant + narratives + resumePdfUrl
//   GET  /pdf?slug=<slug>     Stream the tailored resume PDF
//   POST /audit               Append a fill/submit event to data/auto-apply/audit.tsv
//   GET  /health              Liveness check
//
// Why a bridge instead of bundling data into the extension? The pipeline,
// reports, PDFs, profile, and docx files all change every day -- the bridge
// keeps the extension thin and the data fresh.
//
// Listens on 127.0.0.1:7777 by default (override with PORT=...).

import { createServer } from "node:http";
import {
  readFileSync,
  existsSync,
  appendFileSync,
  mkdirSync,
  createReadStream,
  statSync,
  readdirSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadApplicant } from "./lib/auto-apply/applicant.mjs";
import {
  resolveResume,
  findReportForUrl,
  reportSlug,
  findPdfForSlug,
} from "./lib/auto-apply/resume.mjs";
import { detectPortal } from "./lib/auto-apply/portals.mjs";
import { buildAnswers, loadReportContext } from "./lib/auto-apply/answers.mjs";

const __filename = fileURLToPath(import.meta.url);
const PROJECT_ROOT = dirname(__filename);
const PORT = parseInt(process.env.PORT || "7777", 10);

// --- data sources ------------------------------------------------------

function loadTrackerRows() {
  const path = join(PROJECT_ROOT, "data", "applications.md");
  if (!existsSync(path)) return [];
  const text = readFileSync(path, "utf8");
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("| ")) continue;
    const cols = line.split("|").map((c) => c.trim());
    // ['', num, date, company, role, score, status, pdf, report, notes, '']
    if (cols.length < 10) continue;
    if (cols[1] === "#" || cols[1].startsWith("---")) continue;
    rows.push({
      num: cols[1],
      date: cols[2],
      company: cols[3],
      role: cols[4],
      score: cols[5],
      status: cols[6],
      pdf: cols[7],
      report: cols[8],
      notes: cols[9],
    });
  }
  return rows;
}

function reportFileFromTrackerCell(cell) {
  // Tracker format: "[123](reports/123-foo-2026-04-20.md)"
  const m = cell.match(/\(reports\/([^)]+)\)/);
  return m ? m[1] : null;
}

function urlFromReportFile(reportFile) {
  if (!reportFile) return null;
  const path = join(PROJECT_ROOT, "reports", reportFile);
  if (!existsSync(path)) return null;
  const m = readFileSync(path, "utf8").match(/\*\*URL:\*\*\s*(\S+)/);
  return m ? m[1] : null;
}

function listJobs() {
  const rows = loadTrackerRows();
  const ready = rows.filter((r) => /^evaluated$/i.test(r.status));
  const out = [];
  for (const r of ready) {
    const reportFile = reportFileFromTrackerCell(r.report);
    const url = urlFromReportFile(reportFile);
    if (!url) continue;
    const slug = reportFile ? reportSlug(reportFile) : null;
    const pdfPath = slug ? findPdfForSlug(slug) : null;
    const score = parseFloat((r.score || "").split("/")[0]) || null;
    const prefillPath = slug
      ? join(PROJECT_ROOT, "data", "auto-apply", "prefilled", `${slug}.json`)
      : null;
    let prefillSummary = null;
    if (prefillPath && existsSync(prefillPath)) {
      try {
        prefillSummary = JSON.parse(readFileSync(prefillPath, "utf8")).summary;
      } catch {}
    }
    out.push({
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
  }
  // Sort: highest score first, then most recent.
  out.sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || (b.date > a.date ? 1 : -1));
  return out;
}

function findPrefillForUrl(url) {
  const dir = join(PROJECT_ROOT, "data", "auto-apply", "prefilled");
  if (!existsSync(dir)) return null;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".json")) continue;
    try {
      const data = JSON.parse(readFileSync(join(dir, f), "utf8"));
      if (data.url === url) return data;
    } catch {}
  }
  return null;
}

// --- response helpers --------------------------------------------------

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(res, body, status = 200) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    ...CORS_HEADERS,
  });
  res.end(JSON.stringify(body));
}

function notFound(res, msg = "not found") {
  json(res, { error: msg }, 404);
}

function badRequest(res, msg) {
  json(res, { error: msg }, 400);
}

// --- handlers ----------------------------------------------------------

function handleHealth(res) {
  json(res, { ok: true, project: PROJECT_ROOT, port: PORT });
}

function handleJobs(res) {
  json(res, { jobs: listJobs() });
}

function handlePrefill(req, res, urlObj) {
  const target = urlObj.searchParams.get("url");
  if (!target) return badRequest(res, "missing ?url=");
  const data = findPrefillForUrl(target);
  if (!data) return notFound(res, "no prefill for this url; run scrape-forms.py + prefill.mjs");
  // Replace absolute filesystem path with the bridge URL the extension can fetch.
  if (data.resumeSlug) {
    data.resumePdfUrl = `/pdf?slug=${encodeURIComponent(data.resumeSlug)}`;
  }
  json(res, data);
}

function handleResolve(req, res, urlObj) {
  const target = urlObj.searchParams.get("url");
  if (!target) return badRequest(res, "missing ?url=");
  const applicant = loadApplicant();
  const resolved = resolveResume(target);
  const reportFile = resolved.report?.file || null;
  const report = loadReportContext(reportFile);
  const portal = detectPortal(target);
  const slug = resolved.slug;
  const pdfUrl = slug ? `/pdf?slug=${encodeURIComponent(slug)}` : null;
  // Pre-build the *narrative* answers the extension may use for textareas.
  // We don't try to enumerate fields here -- the extension does its own
  // discovery in-page. We just hand over raw data + drafts.
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
  json(res, {
    url: target,
    portal,
    report: report
      ? {
          num: report.num,
          file: report.file,
          company: report.company,
          role: report.role,
          sectionG: report.sectionG,
        }
      : null,
    slug,
    resumePdfUrl: pdfUrl,
    applicant: applicant.fields,
    drafts,
  });
}

function handlePdf(req, res, urlObj) {
  const slug = urlObj.searchParams.get("slug");
  const pathParam = urlObj.searchParams.get("path");
  let pdfPath = null;
  if (slug) pdfPath = findPdfForSlug(slug);
  else if (pathParam) {
    // Whitelist: must live under output/ or be the canonical CV.
    const safe = join(PROJECT_ROOT, "output", pathParam.replace(/^\/+/, ""));
    if (existsSync(safe) && safe.startsWith(join(PROJECT_ROOT, "output"))) {
      pdfPath = safe;
    }
  }
  if (!pdfPath || !existsSync(pdfPath)) return notFound(res, "pdf not found");
  const stat = statSync(pdfPath);
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Length": stat.size,
    "Content-Disposition": `inline; filename="${pdfPath.split("/").pop()}"`,
    ...CORS_HEADERS,
  });
  createReadStream(pdfPath).pipe(res);
}

function handleAudit(req, res) {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    let payload;
    try {
      payload = JSON.parse(body || "{}");
    } catch {
      return badRequest(res, "invalid json");
    }
    const dir = join(PROJECT_ROOT, "data", "auto-apply");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const tsvPath = join(dir, "audit.tsv");
    if (!existsSync(tsvPath)) {
      appendFileSync(
        tsvPath,
        "ts\tevent\turl\tportal\tcompany\trole\tslug\tfilled\tskipped\tneedsReview\tnotes\n"
      );
    }
    const row = [
      new Date().toISOString(),
      payload.event || "fill",
      payload.url || "",
      payload.portal || "",
      payload.company || "",
      payload.role || "",
      payload.slug || "",
      payload.filled ?? "",
      payload.skipped ?? "",
      payload.needsReview ?? "",
      (payload.notes || "").replace(/\t/g, " ").replace(/\n/g, " "),
    ].join("\t");
    appendFileSync(tsvPath, row + "\n");
    json(res, { ok: true });
  });
}

// --- server ------------------------------------------------------------

const server = createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, CORS_HEADERS);
    return res.end();
  }
  const urlObj = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const path = urlObj.pathname;
  try {
    if (path === "/health") return handleHealth(res);
    if (path === "/jobs" && req.method === "GET") return handleJobs(res);
    if (path === "/resolve" && req.method === "GET")
      return handleResolve(req, res, urlObj);
    if (path === "/prefill" && req.method === "GET")
      return handlePrefill(req, res, urlObj);
    if (path === "/pdf" && req.method === "GET")
      return handlePdf(req, res, urlObj);
    if (path === "/audit" && req.method === "POST")
      return handleAudit(req, res);
    return notFound(res);
  } catch (err) {
    console.error("bridge error:", err);
    json(res, { error: err.message || String(err) }, 500);
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`auto-apply bridge listening on http://127.0.0.1:${PORT}`);
  console.log(`  GET  /health`);
  console.log(`  GET  /jobs`);
  console.log(`  GET  /resolve?url=<jobUrl>`);
  console.log(`  GET  /prefill?url=<jobUrl>`);
  console.log(`  GET  /pdf?slug=<slug>`);
  console.log(`  POST /audit`);
});
