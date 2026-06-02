// query.mjs — ask a question against the RAG index.
//
// Usage:
//   node rag/query.mjs "what proof points do I have for agentic RAG?"
//   node rag/query.mjs -k 8 "which roles scored 4.0+ and why?"
//   node rag/query.mjs --llm "summarize my Vanguard experience"   # generate w/ Gemini if key set
//
// Default mode is retrieval + an extractive, fully-grounded answer (zero cost).
// --llm adds a generated answer via @google/generative-ai when GEMINI_API_KEY
// (or GOOGLE_API_KEY) is set; otherwise it falls back to extractive.

import 'dotenv/config'; // load GEMINI_API_KEY / GEMINI_MODEL from .env (for --llm)
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve, relative } from 'node:path';
import { existsSync } from 'node:fs';
import { loadIndex, search } from './engine.mjs';
import * as embedder from './embedder.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INDEX = join(__dirname, 'index.json');

function parseArgs(argv) {
  let k = 5, llm = false;
  const q = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '-k') k = parseInt(argv[++i], 10) || 5;
    else if (argv[i] === '--llm') llm = true;
    else q.push(argv[i]);
  }
  return { k, llm, query: q.join(' ').trim() };
}

// Pull the most query-relevant sentences out of the retrieved chunks.
function extractiveAnswer(hits, query) {
  const terms = new Set((query.toLowerCase().match(/[a-z0-9]+/g) || []));
  const sentences = [];
  for (const h of hits) {
    for (const s of h.text.split(/(?<=[.!?])\s+/)) {
      const overlap = (s.toLowerCase().match(/[a-z0-9]+/g) || []).filter((w) => terms.has(w)).length;
      if (overlap > 0) sentences.push({ s: s.trim(), overlap, source: h.source });
    }
  }
  sentences.sort((a, b) => b.overlap - a.overlap);
  return sentences.slice(0, 4);
}

async function generateWithGemini(query, hits) {
  const key = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!key) return null;
  try {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-2.0-flash' });
    const context = hits.map((h, i) => `[${i + 1}] (${h.source})\n${h.text}`).join('\n\n');
    const prompt =
      `Answer the question using ONLY the context below. Cite sources as [n]. ` +
      `If the context doesn't contain the answer, say so.\n\n` +
      `CONTEXT:\n${context}\n\nQUESTION: ${query}\n\nANSWER:`;
    const res = await model.generateContent(prompt);
    return res.response.text();
  } catch (e) {
    return `(LLM generation unavailable: ${e.message})`;
  }
}

async function main() {
  const { k, llm, query } = parseArgs(process.argv.slice(2));
  if (!query) {
    console.error('Usage: node rag/query.mjs [-k N] [--llm] "your question"');
    process.exit(1);
  }
  if (!existsSync(INDEX)) {
    console.error('✖ No index found. Build it first: node rag/ingest.mjs');
    process.exit(1);
  }

  const index = loadIndex(INDEX);
  await embedder.init();
  if (embedder.backend() !== index.model) {
    console.warn(`⚠  index built with ${index.model} but ${embedder.backend()} is active — rebuild for best results.`);
  }

  const hits = await search(index, query, k);

  console.log(`\n❓ ${query}`);
  console.log(`📂 ${index.chunks.length} chunks · backend=${index.model}\n`);
  console.log('— Retrieved evidence —');
  hits.forEach((h, i) => {
    const snippet = h.text.replace(/\s+/g, ' ').slice(0, 220);
    console.log(`[${i + 1}] ${(h.score).toFixed(3)}  ${h.source}\n    ${snippet}${h.text.length > 220 ? '…' : ''}`);
  });

  console.log('\n— Answer —');
  if (llm) {
    const gen = await generateWithGemini(query, hits);
    if (gen) { console.log(gen.trim()); return; }
    console.log('(no GEMINI_API_KEY set — falling back to extractive)\n');
  }
  const ext = extractiveAnswer(hits, query);
  if (!ext.length) {
    console.log('No directly matching sentences. See the retrieved evidence above.');
  } else {
    for (const e of ext) console.log(`• ${e.s}  — ${relative(ROOT, resolve(ROOT, e.source)).replace(/\\/g, '/')}`);
  }
}

main().catch((e) => { console.error('✖ query failed:', e); process.exit(1); });
