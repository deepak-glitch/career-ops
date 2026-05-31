#!/usr/bin/env node
// Process Level 3 WebSearch results - dedup, filter, route US/Intl
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import yaml from 'js-yaml';

const TODAY = '2026-05-31';
const cfg = yaml.load(readFileSync('portals.yml', 'utf8'));

// Build URL sets from scan-history
const seenUS = new Set();
const seenIntl = new Set();
for (const line of readFileSync('data/scan-history.tsv', 'utf8').split('\n')) {
  const url = line.split('\t')[0];
  if (url) seenUS.add(url);
}
for (const line of readFileSync('data/intl/scan-history.tsv', 'utf8').split('\n')) {
  const url = line.split('\t')[0];
  if (url) seenIntl.add(url);
}

// Title filter
const tfPos = cfg.title_filter.positive.map(s => s.toLowerCase());
const tfNeg = cfg.title_filter.negative.map(s => s.toLowerCase());
function titlePassesFilter(title) {
  const t = title.toLowerCase();
  for (const n of tfNeg) if (t.includes(n.toLowerCase().trim())) return { pass: false, reason: 'neg:' + n };
  for (const p of tfPos) if (t.includes(p.toLowerCase().trim())) return { pass: true };
  return { pass: false, reason: 'no-positive' };
}

// Location classifier — looks at title+snippet for US|Intl|Unknown signals
function classifyLocation(title, snippet, url) {
  const t = (title + ' ' + (snippet || '') + ' ' + (url || '')).toLowerCase();
  // Strong intl signals
  const intlSignals = ['london', 'uk ', ' uk', 'united kingdom', 'berlin', 'paris', 'munich', 'amsterdam', 'madrid', 'barcelona', 'lisbon', 'stockholm', 'dublin', 'copenhagen', 'helsinki', 'oslo', 'zurich', 'milan', 'vienna', 'warsaw', 'prague', 'brussels', 'india', 'bangalore', 'singapore', 'japan', 'tokyo', 'australia', 'sydney', 'toronto', 'vancouver', 'montreal', 'canada', 'brazil', 'mexico', 'sao paulo', 'argentina', 'emea', 'europe', 'global'];
  // Strong US signals
  const usSignals = ['new york', 'san francisco', 'los angeles', 'seattle', 'boston', 'chicago', 'austin', 'atlanta', 'denver', 'sunnyvale', 'mountain view', 'palo alto', 'menlo park', 'cambridge', 'brooklyn', 'remote us', 'remote - us', 'remote, us', 'remote (us', 'united states', 'us remote', 'usa', ', ca', ', ny', ', ma', ', wa', ', tx', ', il', ', co', ', ga', ', fl'];
  let intlScore = 0, usScore = 0;
  for (const s of intlSignals) if (t.includes(s)) intlScore += 1;
  for (const s of usSignals) if (t.includes(s)) usScore += 1;
  if (intlScore > usScore && intlScore > 0) return 'Intl';
  if (usScore > 0) return 'US';
  return 'Unknown'; // default route to US (allow_unknown: true)
}

// Collected candidates from all 51 queries (input via stdin JSON)
const candidates = JSON.parse(readFileSync(process.argv[2], 'utf8'));

const log = [];
const addUSrows = [];
const addIntlrows = [];
const histUSrows = [];
const histIntlrows = [];

for (const q of candidates) {
  const stat = { name: q.name, results: q.results.length, new: 0, addedUS: 0, addedIntl: 0, filtered: 0 };
  for (const r of q.results) {
    const url = r.url;
    if (!url) continue;
    // Dedup against both
    if (seenUS.has(url) || seenIntl.has(url)) continue;
    stat.new += 1;
    // Title filter
    const tf = titlePassesFilter(r.title);
    if (!tf.pass) {
      stat.filtered += 1;
      const portalLabel = `WebSearch L3 — portals.yml: ${q.name}`;
      const histLine = `${url}\t${TODAY}\t${portalLabel}\t${r.title}\t${r.company || ''}\tskipped_title`;
      histUSrows.push(histLine);
      seenUS.add(url);
      continue;
    }
    // Classify location
    const loc = classifyLocation(r.title, r.snippet, url);
    const portalLabel = `WebSearch L3 — portals.yml: ${q.name}`;
    if (loc === 'Intl') {
      addIntlrows.push(`- [ ] ${url} | ${r.company || 'Unknown'} | ${r.title} | ${r.locationGuess || 'verify in JD'}`);
      histIntlrows.push(`${url}\t${TODAY}\t${portalLabel}\t${r.title}\t${r.company || ''}\tadded`);
      seenIntl.add(url);
      stat.addedIntl += 1;
    } else {
      // US or Unknown -> US (allow_unknown)
      addUSrows.push(`- [ ] ${url} | ${r.company || 'Unknown'} | ${r.title} | ${r.locationGuess || 'verify in JD'}`);
      histUSrows.push(`${url}\t${TODAY}\t${portalLabel}\t${r.title}\t${r.company || ''}\tadded`);
      seenUS.add(url);
      stat.addedUS += 1;
    }
  }
  log.push(stat);
}

// Persist scan-history additions
if (histUSrows.length) appendFileSync('data/scan-history.tsv', '\n' + histUSrows.join('\n'));
if (histIntlrows.length) appendFileSync('data/intl/scan-history.tsv', '\n' + histIntlrows.join('\n'));

// Append to pipeline.md (US)
if (addUSrows.length) {
  let pl = readFileSync('data/pipeline.md', 'utf8');
  // Insert under existing ### 2026-05-31 in Pendientes
  const dateHeader = `### ${TODAY}`;
  const pendIdx = pl.indexOf('## Pendientes');
  const procIdx = pl.indexOf('## Procesadas');
  if (pendIdx >= 0 && procIdx > pendIdx) {
    const pending = pl.slice(pendIdx, procIdx);
    if (pending.includes(dateHeader)) {
      // Insert after the date header line
      const dh = pending.indexOf(dateHeader);
      const afterHeader = pending.indexOf('\n', dh) + 1;
      const newPending = pending.slice(0, afterHeader) + addUSrows.join('\n') + '\n' + pending.slice(afterHeader);
      pl = pl.slice(0, pendIdx) + newPending + pl.slice(procIdx);
    } else {
      // Append a new date header at end of Pendientes
      const newPending = pending + `\n${dateHeader}\n` + addUSrows.join('\n') + '\n';
      pl = pl.slice(0, pendIdx) + newPending + pl.slice(procIdx);
    }
    writeFileSync('data/pipeline.md', pl);
  }
}

// Append to intl pipeline
if (addIntlrows.length) {
  let pl = readFileSync('data/intl/pipeline.md', 'utf8');
  const dateHeader = `### ${TODAY}`;
  const pendIdx = pl.indexOf('## Pendientes');
  const procIdx = pl.indexOf('## Procesadas');
  if (pendIdx >= 0 && procIdx > pendIdx) {
    const pending = pl.slice(pendIdx, procIdx);
    if (pending.includes(dateHeader)) {
      const dh = pending.indexOf(dateHeader);
      const afterHeader = pending.indexOf('\n', dh) + 1;
      const newPending = pending.slice(0, afterHeader) + addIntlrows.join('\n') + '\n' + pending.slice(afterHeader);
      pl = pl.slice(0, pendIdx) + newPending + pl.slice(procIdx);
    } else {
      const newPending = pending + `\n${dateHeader}\n` + addIntlrows.join('\n') + '\n';
      pl = pl.slice(0, pendIdx) + newPending + pl.slice(procIdx);
    }
    writeFileSync('data/intl/pipeline.md', pl);
  }
}

console.log(JSON.stringify(log, null, 2));
console.log('\n=== Summary ===');
let totals = { results: 0, new: 0, addedUS: 0, addedIntl: 0, filtered: 0 };
for (const s of log) {
  console.log(`${s.name} | results=${s.results} new=${s.new} addedUS=${s.addedUS} addedIntl=${s.addedIntl} filtered=${s.filtered}`);
  totals.results += s.results; totals.new += s.new; totals.addedUS += s.addedUS; totals.addedIntl += s.addedIntl; totals.filtered += s.filtered;
}
console.log(`TOTALS: results=${totals.results} new=${totals.new} addedUS=${totals.addedUS} addedIntl=${totals.addedIntl} filtered=${totals.filtered}`);
