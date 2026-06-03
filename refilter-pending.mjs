#!/usr/bin/env node
// refilter-pending.mjs
// Re-applies the CURRENT portals.yml title_filter to every `- [ ]` row in the
// Pending section of both pipelines and removes the ones that no longer pass
// (e.g. after the filter is tightened). Removed URLs are marked status=filtered
// in scan-history so they don't resurface. Empty date subsections are dropped.
//
// Use after editing title_filter to retroactively clean already-queued URLs.
//   node refilter-pending.mjs            # apply
//   node refilter-pending.mjs --dry-run  # preview only

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const REPO = process.cwd();
const DRY = process.argv.includes('--dry-run');

// Same matcher scan.mjs uses (word-boundary, case-insensitive; negative wins).
function buildTitleFilter(tf) {
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const toRegex = (kw) => new RegExp(`\\b${esc(kw.toLowerCase())}\\b`);
  const positive = (tf?.positive || []).map(toRegex);
  const negative = (tf?.negative || []).map(toRegex);
  return (title) => {
    const l = (title || '').toLowerCase();
    return (positive.length === 0 || positive.some((r) => r.test(l))) && !negative.some((r) => r.test(l));
  };
}

function loadScanHistory(p) {
  if (!fs.existsSync(p)) return { header: 'url\tfirst_seen\tportal\ttitle\tcompany\tstatus', byUrl: new Map() };
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
  const byUrl = new Map();
  for (const l of lines.slice(1)) {
    if (!l.trim()) continue;
    const c = l.split('\t');
    byUrl.set(c[0], { url: c[0], first_seen: c[1], portal: c[2], title: c[3], company: c[4], status: c[5] || 'added' });
  }
  return { header: lines[0], byUrl };
}
function saveScanHistory(p, header, byUrl) {
  const rows = [...byUrl.values()].map((r) => `${r.url}\t${r.first_seen}\t${r.portal}\t${r.title}\t${r.company}\t${r.status}`);
  fs.writeFileSync(p, [header, ...rows].join('\n') + '\n');
}

function stripEmptySubsections(lines) {
  const groups = []; let cur = { header: null, lines: [] };
  for (const line of lines) {
    if (/^### /.test(line)) { groups.push(cur); cur = { header: line, lines: [] }; }
    else cur.lines.push(line);
  }
  groups.push(cur);
  const out = []; let dropped = 0;
  for (const g of groups) {
    const hasItems = g.lines.some((l) => /^- (\[ \]|\[x\]|\[!\])/.test(l));
    if (g.header === null) out.push(...g.lines);
    else if (hasItems) { out.push(g.header); out.push(...g.lines); }
    else dropped++;
  }
  return { lines: out, dropped };
}

function refilter(pipelinePath, historyPath, track, passes) {
  const file = path.join(REPO, pipelinePath);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const h = raw.match(/^## (?:Pending|Pendientes)\b.*$/m);
  if (!h) return null;
  const start = raw.indexOf(h[0]) + h[0].length;
  const after = raw.slice(start);
  const next = after.match(/^## /m);
  const end = next ? start + next.index : raw.length;
  const block = raw.slice(start, end);

  const { header, byUrl } = loadScanHistory(path.join(REPO, historyPath));
  let histDirty = false;
  const removed = [];
  const kept = [];
  for (const line of block.split('\n')) {
    const m = line.match(/^- \[ \] (\S+)\s*\|(.*)$/);
    if (!m) { kept.push(line); continue; }
    const url = m[1];
    const fields = m[2].split('|').map((s) => s.trim());
    const role = fields[1] || ''; // url | company | ROLE | location
    if (passes(role)) { kept.push(line); continue; }
    removed.push({ url, role });
    const r = byUrl.get(url);
    if (r) { if (r.status !== 'filtered') { r.status = 'filtered'; histDirty = true; } }
  }
  const stripped = stripEmptySubsections(kept);

  if (!DRY) {
    fs.writeFileSync(file, raw.slice(0, start) + stripped.lines.join('\n') + raw.slice(end));
    if (histDirty) saveScanHistory(path.join(REPO, historyPath), header, byUrl);
  }
  return { track, removed, dropped: stripped.dropped };
}

const cfg = yaml.load(fs.readFileSync(path.join(REPO, 'portals.yml'), 'utf8'));
const passes = buildTitleFilter(cfg.title_filter);

const results = [
  refilter('data/pipeline.md', 'data/scan-history.tsv', 'US', passes),
  refilter('data/intl/pipeline.md', 'data/intl/scan-history.tsv', 'Intl', passes),
].filter(Boolean);

console.log(`refilter-pending${DRY ? ' (dry-run)' : ''}:`);
for (const r of results) {
  console.log(`  ${r.track}: removed ${r.removed.length} non-passing, dropped ${r.dropped} empty subsections`);
  for (const x of r.removed) console.log(`    - ${x.role}`);
}
