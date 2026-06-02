# rag/ — local, zero-cost RAG engine

A small **Retrieval-Augmented Generation** engine that runs entirely on your
machine. No API keys, no per-query cost, fully offline after a one-time model
download. The core is corpus-agnostic — it ships pointed at the career-ops
data, but you can repoint it at any folder of `.md`/`.txt` files.

## Why RAG?

An LLM only knows its training data. RAG lets it answer from *your* documents by
**retrieving** the most relevant passages first and handing them to the model as
grounded context. Answers cite real sources instead of hallucinating.

## How it works

```
            ingest                                   query
  docs ─► chunk ─► embed ─► index.json      "question" ─► embed ─► cosine search
          (engine) (embedder)  (vectors)              (embedder)   (top-k chunks)
                                                                        │
                                                          ┌─────────────┴───────────┐
                                                     extractive answer      --llm: generate
                                                     (cited sentences)      (Gemini, grounded)
```

- **embedder.mjs** — text → 384-dim vector. Primary backend: `all-MiniLM-L6-v2`
  via [transformers.js], cached under `rag/.models`. Falls back to a pure-JS
  feature-hashing embedder if the model/library is unavailable, so the pipeline
  never hard-fails. The active backend is always reported.
- **engine.mjs** — corpus-agnostic core: `chunkText` (overlapping, heading-aware
  splits), `cosine` similarity, and `buildIndex` / `search`.
- **ingest.mjs** — builds `rag/index.json` from a corpus.
- **query.mjs** — retrieves top-k chunks and answers (extractive by default,
  or LLM-generated with `--llm`).

## Usage

```bash
# 1. Build the index (first run downloads ~90MB model, then it's offline)
npm run rag:ingest                 # default career-ops corpus
npm run rag:ingest -- --limit 40   # cap reports/ for a fast run
node rag/ingest.mjs docs/ notes.md # custom corpus (reusable engine)

# 2. Ask questions
npm run rag:query -- "what proof points do I have for agentic RAG?"
node rag/query.mjs -k 8 "which roles scored 4.0+ and why?"
node rag/query.mjs --llm "summarize my Vanguard experience"   # needs GEMINI_API_KEY
```

The index (`rag/index.json`) and model cache (`rag/.models/`) are gitignored —
rebuild them anytime with `npm run rag:ingest`.

## Default corpus

`cv.md`, `article-digest.md`, `modes/_profile.md`, `data/applications.md`, and
every report in `reports/`. So you can ask things like *"which forward-deployed
roles fit me best and why?"* and get answers grounded in your own evaluations.

[transformers.js]: https://github.com/huggingface/transformers.js
