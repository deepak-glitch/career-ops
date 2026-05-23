#!/usr/bin/env node
// scripts/append-scan-history-overnight.mjs <historyFile> <date> <portal-tag> <entries-json>
// entries-json: [{url, title, company, status?}]
import { appendFileSync } from 'fs';

const [file, date, portal, json] = process.argv.slice(2);
const entries = JSON.parse(json);
const rows = entries.map(e =>
  [e.url, date, portal, e.title, e.company, e.status || 'added'].join('\t')
).join('\n') + '\n';
appendFileSync(file, rows, 'utf-8');
console.log(`appended ${entries.length} rows to ${file}`);
