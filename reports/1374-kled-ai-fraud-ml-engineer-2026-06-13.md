# Kled AI — Fraud/ML Engineer (ML Engineer, Fraud Detection & Data Quality)

**Fecha:** 2026-06-13
**Arquetipo:** Computer Vision / Multimodal Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.2/5
**URL:** https://jobs.ashbyhq.com/kled-ai/68d5c6f6-a22c-4b81-a0f1-bcc28de93144
**Legitimacy:** Trustworthy
**Location:** United States — Remote (verify on-site/hybrid in screen)
**Region:** US
**PDF:** output/2026-06-13/cv-deepak-mallampati-kled-ai-fraud-ml-engineer-2026-06-13.pdf

## Block A — Context & Fit

Kled is a consumer data-network startup ("largest opt-in human data network") — users upload real photos/videos/documents and get paid; Kled filters, standardizes, and licenses that data to frontier AI labs. Traction: #1 App Store Finance with zero paid marketing, 200K+ contributors, 1.5–3M uploads/day, $5M+ raised from SpaceX/Airbnb/Coinbase/xAI/OpenAI/Anthropic-tier investors. The role is **adversarial ML at scale** for Trust & Safety: AI-generated image/video detection, reverse-image-search plagiarism rejection, duplicate fingerprinting (vector + perceptual hashing), copyright-risk detection, EXIF/metadata tampering, fraud/device clustering, and human-in-the-loop verification pipelines. Stack: PostgreSQL (Supabase, 100s of millions of media files), S3, Deno/TypeScript edge functions, Python detection pipelines. US-based, full-time. Strong on vector-search + production-ML overlap; the adversarial-CV / deepfake-detection specialization is the real gap.

## Block B — Match con CV

| JD Hook | CV/Proof Point | Strength |
|---|---|---|
| 3+ years CV/ML (PyTorch or TensorFlow) | PyTorch/TensorFlow/Keras core; YOLOv8 drowsiness detection; transformer video summarization | Strong (CV experience is project-led, not most-recent) |
| Production ML deployment | Progress agentic LLM systems; Vanguard 25+ agents @ 100K+ req/day; Emerson supervised ML | Strong |
| Strong SQL / PostgreSQL | PostgreSQL, MongoDB, Redis in CV | Strong |
| Vector search (FAISS, pgvector, Pinecone) | FAISS, Pinecone, Weaviate; semantic + hybrid search; cross-encoder re-ranking | Strong |
| Image processing (OpenCV, PIL) | YOLOv8 CV pipeline + video summarization (speech-to-text + clip extraction) | Adjacent (OpenCV/PIL not explicit) |
| Backend systems (TypeScript/Deno) | JavaScript/TypeScript, FastAPI, 12 APIs/microservices @ Vanguard | Partial (Deno new) |
| Human-in-the-loop verification pipelines | Vanguard content safety + HITL escalation; Progress eval/monitoring framework | Strong |
| Fraud network / device clustering | Anomaly detection @ Emerson (equipment failure, anomaly detection) | Adjacent |

**Gaps & mitigation:**
1. **AI-generated image/video (deepfake) detection — no direct experience.** *Mitigation:* frame YOLOv8 CV + transformer video pipeline as the multimodal foundation; AIGC detection is a fine-tune/transfer problem on a CV base he has shipped. Honest "bonus, not held."
2. **Reverse image search / perceptual hashing / copyright pipelines.** *Mitigation:* map to vector-search + duplicate-fingerprinting strength (FAISS/pgvector); perceptual hashing is a 1-week ramp on top of existing embedding work.
3. **Deno/TypeScript edge functions.** *Mitigation:* TS already in stack; Deno is a runtime delta, not a language delta.

## Block C — North Star Alignment

3.2/5 — the production-ML + vector-search + PostgreSQL core is a clean match, and the company is high-signal (App Store #1, frontier-lab investors, real revenue model). Capped below 3.5 because the role's center of gravity is **adversarial CV / Trust & Safety** (AIGC detection, deepfakes, copyright), which Deepak has touched only through older project-based CV work, not production. Worth a tailored apply that leads with vector-search + production-ML reliability and frames CV as transferable.

## Block D — Compensation

JD: **not disclosed.** US seed-stage ML Engineer (Trust & Safety / CV) typically runs **$140K–$200K base + early-stage equity** (Levels.fyi seed-stage band, SF/remote). $5M+ raise suggests cash-conservative but equity-rich. 2/5 pending disclosure — anchor at $150–190K in screen.

## Block E — Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | LLM/RAG-led | Lead with production ML at scale + vector search + multimodal (CV + video) | Mirror "adversarial ML at scale" framing |
| 2 | Skills order | Gen-AI first | Surface PyTorch/TensorFlow + FAISS/Pinecone/pgvector + PostgreSQL + OpenCV/YOLOv8 at top | Direct JD vocabulary |
| 3 | Experience | Progress 1st | Foreground YOLOv8 CV pipeline + video summarization project alongside production ML | Maps to image/video detection scope |
| 4 | Proof metrics | Scattered | Hero: 92% precision @ scale, vector retrieval, 5,000+ video pipeline, 89% F1 NER | Scale + multimodal credibility |
| 5 | Footer | Location | "US-based, F-1 OPT, authorized now" | US role — clean work-auth line |

## Block F — Plan de Entrevistas

| # | JD Requirement | STAR+R Story | Reflection |
|---|----------------|-------------|------------|
| 1 | Production ML at scale | Vanguard 25+ agents @ 100K+ req/day; Progress RAG over large corpora | Platform primitives beat per-case bespoke models |
| 2 | Vector search / duplicate fingerprinting | FAISS/Pinecone semantic + hybrid search + cross-encoder re-ranking @ Progress | Re-ranking precision mattered more than recall at scale |
| 3 | Image/video detection (multimodal) | YOLOv8 drowsiness detection + transformer video summarization (5,000+ videos) | Timestamp-aligned multimodal pipelines generalize to verification |
| 4 | Anomaly / fraud clustering | Emerson anomaly detection on operational sensor data | Feature engineering drove signal more than model complexity |
| 5 | Human-in-the-loop verification | Vanguard content safety + HITL escalation (−42% unsafe outputs) | HITL is a routing problem; auto-resolve the easy 90% |

**Case study to present:** YOLOv8 CV pipeline + transformer video summarization (multimodal at scale) paired with FAISS/Pinecone vector-search retrieval.

**Red-flag Qs:** "Deepfake/AIGC detection experience?" → Project-based CV + multimodal foundation; transferable, ramp fast. "Remote or on-site?" → US-based OPT, authorized now; flexible. "Comp expectations?" → $150–190K + equity; flexible on structure.

## Block G — Posting Legitimacy

**Tier: Trustworthy.**

| Signal | Finding | Weight |
|--------|---------|--------|
| Description quality | Highly specific scope (8+ named detection systems), named stack, concrete example | Positive |
| Funding / traction | $5M+ raised, named tier-1 investors, #1 App Store, 1.5–3M uploads/day | Positive |
| Compensation | Not disclosed | Concerning |
| Apply state | Active Ashby posting, GraphQL returns live jobPosting | Positive |
| Reposting | No prior reposting anomaly in scan-history | Neutral |

## H) Draft Application Answers

Not generated (score 3.2 < 4.5 threshold).

## Keywords extraídas

Fraud detection, ML engineer, adversarial ML, computer vision, PyTorch, TensorFlow, AI-generated image detection, deepfake detection, reverse image search, perceptual hashing, vector search, FAISS, pgvector, Pinecone, PostgreSQL, Supabase, OpenCV, Trust & Safety, human-in-the-loop, device clustering, Deno, TypeScript
