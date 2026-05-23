#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const file = process.argv[2];
const marker = process.argv[3];
const additions = process.argv.slice(4).join('\n');
const content = readFileSync(file, 'utf-8');
const idx = content.indexOf(marker);
if (idx === -1) { console.error('marker not found:', marker); process.exit(1); }
const after = content.indexOf('\n', idx) + 1;
const updated = content.slice(0, after) + additions + '\n' + content.slice(after);
writeFileSync(file, updated, 'utf-8');
console.log('inserted', additions.split('\n').length, 'lines after marker');
