#!/usr/bin/env node
// cleanup-low-scores.mjs — Move entries with score < 3.0 out of the active
// tracker. Reports are preserved under reports/below-threshold/ (needed by
// patterns analysis), applications.md row is deleted, any stray PDF is
// removed, and the action is logged to data/discarded.tsv for audit.
//
// Safe to run multiple times — idempotent.
// Run:  node cleanup-low-scores.mjs
//       node cleanup-low-scores.mjs --dry-run   (preview without changes)

import { readFileSync, writeFileSync, existsSync, renameSync, mkdirSync, unlinkSync, appendFileSync } from 'fs';
import { join } from 'path';

const DRY = process.argv.includes('--dry-run');
const APPLICATIONS = 'data/applications.md';
const DISCARDED_LOG = 'data/discarded.tsv';
const ARCHIVE_DIR = 'reports/below-threshold';
const THRESHOLD = 3.0;

if (!existsSync(APPLICATIONS)) {
  console.error(`Not found: ${APPLICATIONS}`);
  process.exit(1);
}

if (!DRY) mkdirSync(ARCHIVE_DIR, { recursive: true });

const lines = readFileSync(APPLICATIONS, 'utf-8').split('\n');
const kept = [];
const discarded = [];
const today = new Date().toISOString().slice(0, 10);

// Ensure discarded log has a header
if (!DRY && !existsSync(DISCARDED_LOG)) {
  writeFileSync(DISCARDED_LOG, 'discarded_date\tnum\tdate_evaluated\tcompany\trole\tscore\tstatus\treport_path\tnote\n');
}

for (const line of lines) {
  const m = line.match(/^\|\s*(\d+)\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([\d.]+)\/5\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*\[[^\]]+\]\(([^)]+)\)\s*\|\s*(.+?)\s*\|\s*$/);
  if (!m) {
    kept.push(line);
    continue;
  }
  const [, num, evalDate, company, role, score, status, pdf, reportPath, note] = m;
  const s = parseFloat(score);
  if (s >= THRESHOLD) {
    kept.push(line);
    continue;
  }
  discarded.push({ num, evalDate, company: company.trim(), role: role.trim(), score: s, status: status.trim(), pdf: pdf.trim(), reportPath: reportPath.trim(), note: note.trim() });
}

if (discarded.length === 0) {
  console.log('✅ No entries below threshold. Nothing to clean.');
  process.exit(0);
}

console.log(`Found ${discarded.length} entries below ${THRESHOLD}/5:`);
for (const d of discarded) {
  console.log(`  #${d.num}  ${d.company.padEnd(28)}  ${d.role.slice(0, 40).padEnd(40)}  ${d.score}/5`);
}

if (DRY) {
  console.log('\n(dry run — re-run without --dry-run to apply)');
  process.exit(0);
}

// Rewrite applications.md without the low-score rows
writeFileSync(APPLICATIONS, kept.join('\n'), 'utf-8');

// Move each report file to archive + log to discarded.tsv + delete any stray PDF
for (const d of discarded) {
  const src = d.reportPath;
  if (existsSync(src)) {
    const dest = join(ARCHIVE_DIR, src.replace(/^reports\//, ''));
    try {
      renameSync(src, dest);
    } catch (err) {
      console.error(`  ⚠️  couldn't move ${src}: ${err.message}`);
    }
  }
  // Best-effort: remove the PDF if policy slipped
  const reportSlug = (d.reportPath.match(/reports\/\d+-(.+?)-\d{4}-\d{2}-\d{2}\.md/) || [])[1];
  if (reportSlug) {
    const pdfPath = `output/${d.evalDate}/cv-deepak-mallampati-${reportSlug}-${d.evalDate}.pdf`;
    if (existsSync(pdfPath)) {
      try { unlinkSync(pdfPath); } catch {}
    }
  }
  // Log
  const row = [today, d.num, d.evalDate, d.company, d.role, `${d.score}/5`, d.status, d.reportPath, d.note].join('\t');
  appendFileSync(DISCARDED_LOG, row + '\n');
}

console.log(`\n✅ Moved ${discarded.length} report(s) to ${ARCHIVE_DIR}/`);
console.log(`✅ Removed ${discarded.length} row(s) from ${APPLICATIONS}`);
console.log(`✅ Logged to ${DISCARDED_LOG}`);
console.log(`\nRun 'node verify-pipeline.mjs' to confirm clean state.`);
