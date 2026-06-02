// engine.mjs — corpus-agnostic RAG core: chunk → embed → store → search.
//
// Knows nothing about jobs or career-ops. It takes documents ({id, text, meta})
// and turns them into a searchable vector index. ingest.mjs feeds it the
// career-ops corpus; you could feed it any folder of text just as easily.

import { writeFileSync, readFileSync } from 'node:fs';
import * as embedder from './embedder.mjs';

// ---- chunking -------------------------------------------------------------

/**
 * Split text into overlapping chunks, preferring to break on blank lines and
 * markdown headings so a chunk stays semantically coherent. Overlap preserves
 * context that would otherwise be severed at a chunk boundary.
 */
export function chunkText(text, { target = 900, overlap = 150 } = {}) {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const chunks = [];
  let buf = '';
  const flush = () => {
    const t = buf.trim();
    if (t) chunks.push(t);
    buf = '';
  };
  for (const block of blocks) {
    if (buf && (buf.length + block.length + 2) > target) {
      flush();
      // carry the tail of the previous chunk forward as overlap
      const prev = chunks[chunks.length - 1] || '';
      buf = prev.length > overlap ? prev.slice(prev.length - overlap) + '\n\n' : '';
    }
    buf += (buf ? '\n\n' : '') + block;
    // a single huge block: hard-split it
    while (buf.length > target * 1.6) {
      chunks.push(buf.slice(0, target).trim());
      buf = buf.slice(target - overlap);
    }
  }
  flush();
  return chunks;
}

// ---- similarity -----------------------------------------------------------

/** Cosine similarity of two equal-length vectors (assumed L2-normalized → dot). */
export function cosine(a, b) {
  let dot = 0;
  for (let i = 0; i < a.length; i++) dot += a[i] * b[i];
  return dot;
}

// ---- index build / persist / load -----------------------------------------

/**
 * Build an index from documents: [{ id, text, meta }].
 * Returns { model, dim, createdAt, chunks: [{ id, source, title, text, vector }] }.
 */
export async function buildIndex(docs, { onProgress, createdAt } = {}) {
  const backend = await embedder.init();
  const records = [];
  for (const doc of docs) {
    const parts = chunkText(doc.text);
    parts.forEach((text, i) => {
      records.push({
        id: `${doc.id}#${i}`,
        source: doc.meta?.source || doc.id,
        title: doc.meta?.title || doc.id,
        text,
      });
    });
  }
  const vectors = await embedder.embedAll(records.map((r) => r.text), onProgress);
  records.forEach((r, i) => { r.vector = vectors[i]; });
  return {
    model: backend,
    dim: embedder.dim(),
    createdAt: createdAt || null, // caller stamps this (Date.* is unavailable in some runtimes)
    chunks: records,
  };
}

export function saveIndex(index, path) {
  writeFileSync(path, JSON.stringify(index), 'utf-8');
}

export function loadIndex(path) {
  return JSON.parse(readFileSync(path, 'utf-8'));
}

/** Retrieve the top-k most similar chunks to a query string. */
export async function search(index, query, k = 5) {
  const qv = await embedder.embed(query);
  const scored = index.chunks.map((c) => ({ ...c, score: cosine(qv, c.vector) }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k).map(({ vector, ...rest }) => rest); // drop bulky vector
}
