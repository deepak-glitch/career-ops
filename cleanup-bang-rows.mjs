#!/usr/bin/env node
// cleanup-bang-rows.mjs
// One-shot + idempotent cleanup of `- [!]` rows that have accumulated in
// `data/pipeline.md` and `data/intl/pipeline.md` Pending sections.
//
// Three categories:
//   1. FALSE error  — row says "moved to Processed (#NNN)" (or legacy
//                     "moved to Procesadas (#NNN)") and that report exists
//                     on disk. The Pending row is bookkeeping cruft;
//                     drop it and mark URL in scan-history with status=processed.
//   2. DEAD URL     — 404 / closed / "no longer accepting" / expired / archived.
//                     Drop row, mark scan-history status=dead.
//   3. FILTER SLIP  — scanner shouldn't have added it (wrong location, wrong
//                     seniority, pre-sales, mis-routed, etc.). Drop row, mark
//                     scan-history status=filtered.
// Anything that doesn't match all three buckets is KEPT for manual review.
//
// Writes audit log to data/cleanup-{ISO}.log.

import fs from 'node:fs';
import path from 'node:path';

const REPO = process.cwd();
const PIPELINES = [
  { pipelinePath: 'data/pipeline.md',      historyPath: 'data/scan-history.tsv',      track: 'US' },
  { pipelinePath: 'data/intl/pipeline.md', historyPath: 'data/intl/scan-history.tsv', track: 'Intl' },
];

// Match both English (new) and Spanish (legacy) breadcrumbs.
const PROCESADAS_RE = /moved to (?:Processed|Procesadas) \(#(\d+)\)/i;
const DUPLICATE_RE = /(?:duplicate of #\d+|already evaluated|not re-evaluated|routed to Intl track \(#\d+\)|routed to US track \(#\d+\)|re-eval \d{4}-\d{2}-\d{2})/i;
const DEAD_RE = /(?:closed|expired|no longer accepting|CLOSED\/MISSING|archived|removed|page no longer|posting closed|page returns unrelated|GraphQL returned CLOSED|\b404\b|\b410\b|page renamed)/i;
const FILTER_RE = /(?:filter slip|senior gate|on-site only|hard blocker|pre-sales|Solutions Engineer|Customer Support|mis-routed|US Person|negative list|new-grad bar|Romania|Tel Aviv|Spain location|Israel|Switzerland|Australia|Brazil location|Mexico location|UK location|rerouted|F-1 OPT|aggregator|not a hireable role|skipped: |not a paid job|seniority filter|unpaid 8-week)/i;

function extractUrl(line) {
  const m = line.match(/^- \[!\] (\S+)/);
  return m ? m[1] : null;
}

function extractMeta(line) {
  const noPrefix = line.replace(/^- \[!\] \S+\s*\|?\s*/, '');
  const parts = noPrefix.split('|').map(s => s.trim());
  const company = parts[0] || '';
  const title = parts[1] || '';
  const locationAndNotes = parts[2] || '';
  const location = locationAndNotes.split('--')[0].trim();
  return { company, title, location };
}

function inferPortal(url) {
  if (!url) return 'unknown';
  if (url.includes('ashbyhq.com'))     return 'ashby';
  if (url.includes('greenhouse.io'))   return 'greenhouse';
  if (url.includes('lever.co'))        return 'lever';
  if (url.includes('breezy.hr'))       return 'breezy';
  if (url.includes('teamtailor.com'))  return 'teamtailor';
  if (url.includes('ycombinator.com')) return 'yc';
  if (url.includes('workatastartup'))  return 'yc';
  if (url.includes('himalayas.app'))   return 'himalayas';
  if (url.includes('wellfound.com'))   return 'wellfound';
  if (url.includes('angel.co'))        return 'wellfound';
  return 'other';
}

function reportExists(num, reportsDir) {
  const padded = String(num).padStart(3, '0');
  if (!fs.existsSync(reportsDir)) return false;
  return fs.readdirSync(reportsDir).some(f => f.startsWith(`${padded}-`));
}

function loadScanHistory(p) {
  if (!fs.existsSync(p)) {
    return { headerLine: 'url\tfirst_seen\tportal\ttitle\tcompany\tstatus', byUrl: new Map() };
  }
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
  const headerLine = lines[0];
  const byUrl = new Map();
  for (const l of lines.slice(1)) {
    if (!l.trim()) continue;
    const cols = l.split('\t');
    byUrl.set(cols[0], {
      url: cols[0], first_seen: cols[1], portal: cols[2],
      title: cols[3], company: cols[4], status: cols[5] || 'added'
    });
  }
  return { headerLine, byUrl };
}

function saveScanHistory(p, headerLine, byUrl) {
  const rows = [...byUrl.values()];
  const out = [headerLine, ...rows.map(r =>
    `${r.url}\t${r.first_seen}\t${r.portal}\t${r.title}\t${r.company}\t${r.status}`
  )].join('\n') + '\n';
  fs.writeFileSync(p, out);
}

function stripEmptySubsections(lines) {
  // Split into groups by ### headers. Drop any group whose body has no
  // list items (- [ ], - [x], - [!]). The pre-prelude (before first ###)
  // is always kept.
  const groups = [];
  let current = { header: null, lines: [] };
  for (const line of lines) {
    if (/^### /.test(line)) {
      groups.push(current);
      current = { header: line, lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  groups.push(current);

  let droppedSubsections = 0;
  const result = [];
  for (const g of groups) {
    const hasItems = g.lines.some(l => /^- (\[ \]|\[x\]|\[!\])/.test(l));
    if (g.header === null) {
      result.push(...g.lines);
    } else if (hasItems) {
      result.push(g.header);
      result.push(...g.lines);
    } else {
      droppedSubsections++;
    }
  }
  return { lines: result, droppedSubsections };
}

function cleanup(pipelineCfg, today, reportsDir) {
  const pipelineFile = path.join(REPO, pipelineCfg.pipelinePath);
  const historyFile = path.join(REPO, pipelineCfg.historyPath);
  if (!fs.existsSync(pipelineFile)) return null;

  const raw = fs.readFileSync(pipelineFile, 'utf8');
  // Accept both English (new) and Spanish (legacy) header forms.
  const headerMatch = raw.match(/^## (?:Pending|Pendientes)\b.*$/m);
  if (!headerMatch) return null;
  const headerStart = raw.indexOf(headerMatch[0]);
  const blockStart = headerStart + headerMatch[0].length;
  const afterHeader = raw.slice(blockStart);
  const nextHeading = afterHeader.match(/^## /m);
  const blockEnd = nextHeading ? blockStart + nextHeading.index : raw.length;
  const block = raw.slice(blockStart, blockEnd);

  const lines = block.split('\n');
  const kept = [];
  const audit = { done: [], doneReportMissing: [], duplicate: [], dead: [], filter: [], unmatched: [] };

  const { headerLine: histHeader, byUrl: histMap } = loadScanHistory(historyFile);
  let histDirty = false;

  function upsertHistory(url, line, status) {
    if (!url) return;
    if (histMap.has(url)) {
      const r = histMap.get(url);
      if (r.status !== status) { r.status = status; histDirty = true; }
    } else {
      const meta = extractMeta(line);
      histMap.set(url, {
        url, first_seen: today, portal: inferPortal(url),
        title: meta.title, company: meta.company, status
      });
      histDirty = true;
    }
  }

  for (const line of lines) {
    if (!line.startsWith('- [!]')) {
      kept.push(line);
      continue;
    }
    const url = extractUrl(line);

    const procesadasMatch = line.match(PROCESADAS_RE);
    if (procesadasMatch) {
      const num = parseInt(procesadasMatch[1], 10);
      const exists = reportExists(num, reportsDir);
      audit.done.push({ url, num, line });
      if (!exists) audit.doneReportMissing.push({ url, num, line });
      upsertHistory(url, line, 'processed');
      continue;
    }
    if (DUPLICATE_RE.test(line)) {
      audit.duplicate.push({ url, line });
      upsertHistory(url, line, 'processed');
      continue;
    }
    if (DEAD_RE.test(line)) {
      audit.dead.push({ url, line });
      upsertHistory(url, line, 'dead');
      continue;
    }
    if (FILTER_RE.test(line)) {
      audit.filter.push({ url, line });
      upsertHistory(url, line, 'filtered');
      continue;
    }

    // Generic reason-prefix classification — catches breadcrumbs the specific
    // regexes above miss. Overnight agents misuse `- [!]` for PERMANENT
    // dispositions ("filtered: ...", "re-routed ...", "error: not found"),
    // which then pile up under Pending looking like a backlog. Reason text is
    // everything after "- [!] <url> |".
    const reason = line.replace(/^- \[!\] \S+\s*\|?\s*/, '').trim();
    if (/^filtered:/i.test(reason)) {
      audit.filter.push({ url, line });
      upsertHistory(url, line, 'filtered');
      continue;
    }
    if (/^(re-?routed|routed to)\b/i.test(reason)) {
      audit.duplicate.push({ url, line });            // resolved in the other track
      upsertHistory(url, line, 'processed');
      continue;
    }
    if (/^error:/i.test(reason) &&
        /(not found|no JD|no longer|unknown|does not exist|missing|deleted|removed|\b404\b|\b410\b)/i.test(reason)) {
      audit.dead.push({ url, line });                 // permanent error (not a retry)
      upsertHistory(url, line, 'dead');
      continue;
    }
    // A bare/transient "error: ..." (timeout, rate-limit) is KEPT for retry —
    // that is the only legitimate use of `- [!]`.

    audit.unmatched.push({ url, line });
    kept.push(line);
  }

  const stripped = stripEmptySubsections(kept);
  const newBlock = stripped.lines.join('\n');
  const newRaw = raw.slice(0, blockStart) + newBlock + raw.slice(blockEnd);
  fs.writeFileSync(pipelineFile, newRaw);

  if (histDirty) {
    saveScanHistory(historyFile, histHeader, histMap);
  }

  return { track: pipelineCfg.track, audit, histDirty, droppedSubsections: stripped.droppedSubsections };
}

const today = new Date().toISOString().slice(0, 10);
const reportsDir = path.join(REPO, 'reports');
const results = PIPELINES.map(p => cleanup(p, today, reportsDir)).filter(Boolean);

const isoStamp = new Date().toISOString().replace(/[:.]/g, '-');
const auditPath = path.join(REPO, 'data', `cleanup-${isoStamp}.log`);

const out = [
  `# Pipeline cleanup audit log`,
  `Run: ${new Date().toISOString()}`,
  ``
];
for (const r of results) {
  out.push(`## ${r.track} pipeline`);
  out.push(`- Deleted (already in Processed):  ${r.audit.done.length}  (report-already-removed by cleanup-low-scores: ${r.audit.doneReportMissing.length})`);
  out.push(`- Deleted (duplicate/rerouted):     ${r.audit.duplicate.length}`);
  out.push(`- Deleted (dead URL):               ${r.audit.dead.length}`);
  out.push(`- Deleted (filter slip):            ${r.audit.filter.length}`);
  out.push(`- Kept (unmatched, manual review):  ${r.audit.unmatched.length}`);
  out.push(`- Empty subsections dropped:        ${r.droppedSubsections}`);
  out.push(`- scan-history.tsv updated:         ${r.histDirty ? 'yes' : 'no'}`);
  out.push('');

  if (r.audit.unmatched.length) {
    out.push(`### ${r.track} — Kept unmatched (manual review)`);
    for (const u of r.audit.unmatched) out.push(`- ${u.line.substring(0, 250)}`);
    out.push('');
  }
  if (r.audit.doneReportMissing.length) {
    out.push(`### ${r.track} — Deleted (Processed; report file already removed by cleanup-low-scores)`);
    for (const u of r.audit.doneReportMissing) out.push(`- #${u.num}: ${u.url}`);
    out.push('');
  }
}
fs.writeFileSync(auditPath, out.join('\n'));

console.log('Pipeline cleanup complete.');
for (const r of results) {
  console.log(`  ${r.track}: done=${r.audit.done.length} (report_already_removed=${r.audit.doneReportMissing.length}), duplicate=${r.audit.duplicate.length}, dead=${r.audit.dead.length}, filter=${r.audit.filter.length}, kept_unmatched=${r.audit.unmatched.length}, empty_subsections_dropped=${r.droppedSubsections}`);
}
console.log(`Audit log: ${path.relative(REPO, auditPath)}`);
