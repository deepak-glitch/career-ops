#!/usr/bin/env node
// cleanup-bang-rows.mjs
// One-shot + idempotent cleanup of `- [!]` rows that have accumulated in
// `data/pipeline.md` and `data/intl/pipeline.md` Pendientes sections.
//
// Three categories:
//   1. FALSE error  — row says "moved to Procesadas (#NNN)" and that report
//                     exists on disk. The Pendientes row is bookkeeping cruft;
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

const PROCESADAS_RE = /moved to Procesadas \(#(\d+)\)/i;
const DEAD_RE = /\b(closed|expired|no longer accepting|CLOSED\/MISSING|archived|removed|page no longer|posting closed|page returns unrelated|GraphQL returned CLOSED|404|410|page renamed)\b/i;
const FILTER_RE = /\b(filter slip|senior gate|on-site only|hard blocker|pre-sales|Solutions Engineer|Customer Support|mis-routed|US Person|negative list|new-grad bar|Romania|Tel Aviv|Spain location|Israel|Switzerland|Australia|Brazil location|Mexico location|UK location|rerouted|F-1 OPT|aggregator)\b/i;

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

function cleanup(pipelineCfg, today, reportsDir) {
  const pipelineFile = path.join(REPO, pipelineCfg.pipelinePath);
  const historyFile = path.join(REPO, pipelineCfg.historyPath);
  if (!fs.existsSync(pipelineFile)) return null;

  const raw = fs.readFileSync(pipelineFile, 'utf8');
  const headerMatch = raw.match(/^## Pendientes\b.*$/m);
  if (!headerMatch) return null;
  const headerStart = raw.indexOf(headerMatch[0]);
  const blockStart = headerStart + headerMatch[0].length;
  const afterHeader = raw.slice(blockStart);
  const nextHeading = afterHeader.match(/^## /m);
  const blockEnd = nextHeading ? blockStart + nextHeading.index : raw.length;
  const block = raw.slice(blockStart, blockEnd);

  const lines = block.split('\n');
  const kept = [];
  const audit = { done: [], dead: [], filter: [], unmatched: [], reportMissing: [] };

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
      if (reportExists(num, reportsDir)) {
        audit.done.push({ url, num, line });
        upsertHistory(url, line, 'processed');
        continue;
      } else {
        audit.reportMissing.push({ url, num, line });
        kept.push(line);
        continue;
      }
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
    audit.unmatched.push({ url, line });
    kept.push(line);
  }

  const newBlock = kept.join('\n');
  const newRaw = raw.slice(0, blockStart) + newBlock + raw.slice(blockEnd);
  fs.writeFileSync(pipelineFile, newRaw);

  if (histDirty) {
    saveScanHistory(historyFile, histHeader, histMap);
  }

  return { track: pipelineCfg.track, audit, histDirty };
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
  out.push(`- Deleted (already in Procesadas):  ${r.audit.done.length}`);
  out.push(`- Deleted (dead URL):               ${r.audit.dead.length}`);
  out.push(`- Deleted (filter slip):            ${r.audit.filter.length}`);
  out.push(`- Kept (unmatched, manual review):  ${r.audit.unmatched.length}`);
  out.push(`- Kept (report file missing):       ${r.audit.reportMissing.length}`);
  out.push(`- scan-history.tsv updated:         ${r.histDirty ? 'yes' : 'no'}`);
  out.push('');

  if (r.audit.unmatched.length) {
    out.push(`### ${r.track} — Kept unmatched (manual review)`);
    for (const u of r.audit.unmatched) out.push(`- ${u.line.substring(0, 250)}`);
    out.push('');
  }
  if (r.audit.reportMissing.length) {
    out.push(`### ${r.track} — Kept (Procesadas report file missing on disk)`);
    for (const u of r.audit.reportMissing) out.push(`- #${u.num}: ${u.url}`);
    out.push('');
  }
}
fs.writeFileSync(auditPath, out.join('\n'));

console.log('Pipeline cleanup complete.');
for (const r of results) {
  console.log(`  ${r.track}: done=${r.audit.done.length}, dead=${r.audit.dead.length}, filter=${r.audit.filter.length}, kept_unmatched=${r.audit.unmatched.length}, kept_report_missing=${r.audit.reportMissing.length}`);
}
console.log(`Audit log: ${path.relative(REPO, auditPath)}`);
