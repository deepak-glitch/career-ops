// ingest.mjs — build the RAG index from a corpus of markdown/text files.
//
// Usage:
//   node rag/ingest.mjs                  # default career-ops corpus
//   node rag/ingest.mjs --limit 40       # cap reports/ for a fast run
//   node rag/ingest.mjs path/a.md dir/   # custom files/dirs (reusable engine)
//
// Output: rag/index.json

import { readFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, resolve } from 'node:path';
import { buildIndex, saveIndex } from './engine.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Default career-ops corpus: who you are + what you've evaluated.
const DEFAULT_SOURCES = [
  'cv.md',
  'article-digest.md',
  'modes/_profile.md',
  'data/applications.md',
  'reports', // directory → all *.md inside
];

function walk(p, acc) {
  const st = statSync(p);
  if (st.isDirectory()) {
    for (const name of readdirSync(p)) walk(join(p, name), acc);
  } else if (/\.(md|markdown|txt)$/i.test(p)) {
    acc.push(p);
  }
  return acc;
}

function firstHeading(text, fallback) {
  const m = text.match(/^#\s+(.+)$/m) || text.match(/^\*\*(.+?)\*\*/m);
  return (m ? m[1] : fallback).trim().slice(0, 120);
}

function parseArgs(argv) {
  const paths = [];
  let limit = Infinity;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--limit') limit = parseInt(argv[++i], 10) || Infinity;
    else paths.push(argv[i]);
  }
  return { paths: paths.length ? paths : DEFAULT_SOURCES, limit };
}

async function main() {
  const { paths, limit } = parseArgs(process.argv.slice(2));

  // Resolve sources → flat list of files (relative to ROOT).
  const files = [];
  for (const p of paths) {
    const abs = resolve(ROOT, p);
    if (!existsSync(abs)) { console.warn(`⚠  skip (not found): ${p}`); continue; }
    walk(abs, files);
  }

  // Reports are the bulk; apply --limit to them (newest first by filename).
  const reports = files.filter((f) => /[\\/]reports[\\/]/.test(f)).sort().reverse();
  const others = files.filter((f) => !/[\\/]reports[\\/]/.test(f));
  const chosen = [...others, ...reports.slice(0, limit === Infinity ? reports.length : limit)];

  const docs = chosen.map((abs) => {
    const text = readFileSync(abs, 'utf-8');
    const rel = relative(ROOT, abs).replace(/\\/g, '/');
    return { id: rel, text, meta: { source: rel, title: firstHeading(text, rel) } };
  });

  console.log(`📚 Ingesting ${docs.length} documents (${others.length} core + ${chosen.length - others.length}/${reports.length} reports)…`);

  const index = await buildIndex(docs, {
    createdAt: new Date().toISOString(),
    onProgress: (done, total) => process.stdout.write(`\r🧮 embedding ${done}/${total} chunks   `),
  });
  process.stdout.write('\n');

  const outDir = __dirname;
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, 'index.json');
  saveIndex(index, outPath);

  const mb = (statSync(outPath).size / 1e6).toFixed(2);
  console.log(`✅ Index built: ${index.chunks.length} chunks · backend=${index.model} · dim=${index.dim} · ${mb} MB`);
  console.log(`   → ${relative(ROOT, outPath).replace(/\\/g, '/')}`);
  if (index.model === 'hashing-fallback') {
    console.log('ℹ  Neural model not loaded — using lexical fallback. Run: npm i @huggingface/transformers');
  }
}

main().catch((e) => { console.error('✖ ingest failed:', e); process.exit(1); });
