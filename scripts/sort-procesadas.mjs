#!/usr/bin/env node
// One-off: sort the Procesadas section of a pipeline file chronologically (oldest → newest).
// Pendientes is left untouched.
// Usage: node scripts/sort-procesadas.mjs [path/to/pipeline.md]

import { readFileSync, writeFileSync } from 'fs';

const path = process.argv[2] || 'data/pipeline.md';
const text = readFileSync(path, 'utf-8');

const procIdx = text.indexOf('## Procesadas');
if (procIdx === -1) {
  console.error(`No "## Procesadas" section in ${path}`);
  process.exit(1);
}

const before = text.slice(0, procIdx);
const proc = text.slice(procIdx);

// Split Procesadas into header + date sections.
// Date section pattern: starts with "### YYYY-MM-DD" line, continues until next "### " or EOF.
const dateRe = /^### (\d{4}-\d{2}-\d{2}).*$/m;
const lines = proc.split('\n');

// Find the first "### YYYY-MM-DD" line — anything before that is the header (e.g. "## Procesadas\n\n")
let firstDateLine = lines.findIndex(l => /^### \d{4}-\d{2}-\d{2}/.test(l));
if (firstDateLine === -1) {
  console.error(`No "### YYYY-MM-DD" sections in Procesadas of ${path} — nothing to sort`);
  process.exit(0);
}

const header = lines.slice(0, firstDateLine).join('\n');
const body = lines.slice(firstDateLine);

// Walk body and accumulate sections, keyed by date.
// If multiple ### YYYY-MM-DD sections exist for same date, MERGE their contents.
const sections = new Map(); // date -> array of body lines (excluding the ### header)
let currentDate = null;
let currentLines = [];

const flush = () => {
  if (currentDate) {
    const existing = sections.get(currentDate) || [];
    sections.set(currentDate, existing.concat(currentLines));
  }
};

for (const line of body) {
  const m = line.match(/^### (\d{4}-\d{2}-\d{2})/);
  if (m) {
    flush();
    currentDate = m[1];
    currentLines = [];
  } else {
    currentLines.push(line);
  }
}
flush();

// Sort dates oldest → newest
const sortedDates = [...sections.keys()].sort();

// Rebuild Procesadas
const rebuilt = [header];
for (const date of sortedDates) {
  rebuilt.push(`### ${date}`);
  // Trim leading/trailing blank lines from each section body
  let secLines = sections.get(date);
  while (secLines.length && secLines[0].trim() === '') secLines.shift();
  while (secLines.length && secLines[secLines.length - 1].trim() === '') secLines.pop();
  rebuilt.push(secLines.join('\n'));
  rebuilt.push(''); // blank line between sections
}

const newProc = rebuilt.join('\n').replace(/\n{3,}/g, '\n\n'); // collapse triple blanks
writeFileSync(path, before + newProc, 'utf-8');

console.log(`Sorted ${sortedDates.length} date sections in ${path}`);
console.log(`Order: ${sortedDates[0]} → ${sortedDates[sortedDates.length - 1]}`);
