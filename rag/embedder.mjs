// embedder.mjs — pluggable text→vector embedder.
//
// Primary backend: a local neural sentence-embedding model (all-MiniLM-L6-v2)
// via transformers.js. Runs entirely on-device: no API key, no per-query cost,
// fully offline after a one-time model download (~90MB, cached under rag/.models).
//
// Fallback backend: a zero-dependency feature-hashing TF embedder. It is NOT
// semantic (it matches words, not meaning), but it keeps the whole RAG pipeline
// runnable when the neural model/library is unavailable. The active backend is
// always reported via embedder.backend so callers can be honest about quality.

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MODEL = 'Xenova/all-MiniLM-L6-v2';
const NEURAL_DIM = 384;
const HASH_DIM = 384; // keep fallback vectors the same width as the neural model

let _pipe = null;       // cached transformers.js pipeline
let _backend = null;    // 'neural:<pkg>' | 'hashing-fallback'

// ---- neural backend -------------------------------------------------------

async function tryLoadNeural() {
  // transformers.js shipped under two package names over time; accept either.
  for (const pkg of ['@huggingface/transformers', '@xenova/transformers']) {
    try {
      const mod = await import(pkg);
      // Cache downloaded model weights inside the repo so re-runs are offline.
      if (mod.env) {
        mod.env.cacheDir = join(__dirname, '.models');
        mod.env.allowLocalModels = true;
      }
      const pipe = await mod.pipeline('feature-extraction', MODEL);
      _backend = `neural:${pkg}`;
      return pipe;
    } catch {
      // package not installed or model fetch failed — try the next candidate
    }
  }
  return null;
}

// ---- hashing fallback backend ---------------------------------------------

function hashEmbed(text) {
  const vec = new Float32Array(HASH_DIM);
  const tokens = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  for (const tok of tokens) {
    // djb2 hash → bucket; sign hash → reduce collisions cancelling out
    let h = 5381, s = 7;
    for (let i = 0; i < tok.length; i++) {
      h = ((h << 5) + h + tok.charCodeAt(i)) >>> 0;
      s = ((s << 5) + s + tok.charCodeAt(i)) >>> 0;
    }
    vec[h % HASH_DIM] += (s & 1) ? 1 : -1;
  }
  // L2-normalize so cosine similarity is just a dot product
  let norm = 0;
  for (let i = 0; i < HASH_DIM; i++) norm += vec[i] * vec[i];
  norm = Math.sqrt(norm) || 1;
  return Array.from(vec, (x) => x / norm);
}

// ---- public API -----------------------------------------------------------

/** Ensure a backend is loaded. Returns the resolved backend id. */
export async function init() {
  if (_backend) return _backend;
  _pipe = await tryLoadNeural();
  if (!_pipe) _backend = 'hashing-fallback';
  return _backend;
}

/** The resolved backend id, or null before init(). */
export function backend() {
  return _backend;
}

/** The embedding dimensionality of the active backend. */
export function dim() {
  return _backend && _backend.startsWith('neural') ? NEURAL_DIM : HASH_DIM;
}

/** Embed a single string → number[] (L2-normalized). */
export async function embed(text) {
  await init();
  if (_pipe) {
    const out = await _pipe(text, { pooling: 'mean', normalize: true });
    return Array.from(out.data);
  }
  return hashEmbed(text);
}

/** Embed many strings sequentially → number[][]. onProgress(done,total) optional. */
export async function embedAll(texts, onProgress) {
  await init();
  const out = [];
  for (let i = 0; i < texts.length; i++) {
    out.push(await embed(texts[i]));
    if (onProgress && (i % 16 === 0 || i === texts.length - 1)) onProgress(i + 1, texts.length);
  }
  return out;
}
