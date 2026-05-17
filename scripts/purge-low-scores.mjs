#!/usr/bin/env node
// Remove any line containing a low-score marker `X.X/5` where X is 0/1/2.
// Targets pipeline files only (the - [x] Procesadas lines that recorded
// low-score evaluations). Idempotent.
// Usage: node scripts/purge-low-scores.mjs

import { readFileSync, writeFileSync, existsSync } from 'fs';

const FILES = ['data/pipeline.md', 'data/intl/pipeline.md'];
const LOW_RE = /\|\s*[012]\.\d\/5\s*\|/;

for (const path of FILES) {
  if (!existsSync(path)) continue;
  const lines = readFileSync(path, 'utf-8').split('\n');
  const kept = [];
  let removed = 0;
  for (const l of lines) {
    if (LOW_RE.test(l)) {
      removed++;
      continue;
    }
    kept.push(l);
  }
  // Collapse runs of blank lines that may result
  const out = kept.join('\n').replace(/\n{3,}/g, '\n\n');
  writeFileSync(path, out, 'utf-8');
  console.log(`${path}: removed ${removed} low-score line(s)`);
}
