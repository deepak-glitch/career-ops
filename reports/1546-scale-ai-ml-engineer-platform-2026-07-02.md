# Evaluación: Scale AI — Machine Learning Engineer, Platform

**Fecha:** 2026-07-02
**Arquetipo:** Generative AI / RAG Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.2/5
**URL:** https://job-boards.greenhouse.io/scaleai/jobs/4711544005
**Legitimacy:** High Confidence
**Location:** London, UK (on-site/hybrid — city-specific listing); no sponsorship stated
**Region:** Intl
**PDF:** output-intl/2026-07-02/cv-deepak-mallampati-scale-ai-platform-2026-07-02.pdf
**Verification:** confirmed (Greenhouse board live with Apply, fetched 2026-07-02)

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Generative AI / RAG Engineer + ML Engineer (Applied AI Systems) |
| Domain | ML platform — knowledge representation (ontologies, knowledge graphs), RAG retrieval, enterprise data integration |
| Function | Build — own ML components full-lifecycle (research → production); design RAG pipelines + evaluation frameworks + backend services |
| Seniority | Mid-Senior (5+ years production ML/AI) |
| Remote | London, UK — city-specific → on-site/hybrid assumed |
| Team size | Cross-team collaboration; unspecified |
| TL;DR | 5+yr ML platform engineer to build production RAG + knowledge-graph retrieval and eval infra at Scale AI London. |

## B) Match con CV

| JD requirement | CV evidence | Verdict |
|----------------|-------------|---------|
| **RAG pipelines** (chunking, embedding, indexing, reranking) | "high-performance RAG pipelines … dense vector retrieval with cross-encoder re-ranking"; Document Chunking Strategies (Skills) | ✅ Strong |
| Embeddings + **vector indexing** | FAISS, Pinecone, Weaviate; Semantic & Hybrid Search | ✅ Strong |
| Context retrieval balancing recall/precision/latency/cost | "Optimized inference cost and latency through prompt compression, semantic caching, model routing" | ✅ Strong |
| **Evaluation frameworks** for retrieval quality | RAGAS, BERTScore eval framework; 92% precision / −40% hallucination (CV summary) | ✅ Strong |
| Backend services for ML/LLM production | "Built 12 APIs and microservices … p95 1.5s→800ms" (Vanguard); FastAPI | ✅ Strong |
| Knowledge representation / **ontologies, knowledge graphs** | Not in CV — no explicit KG/ontology work | ❌ Gap |
| 5+ yrs production ML | 4+ yrs (Progress, Vanguard, Emerson, KSU) | ⚠️ Slightly under |
| MS/PhD or equivalent | M.S. CS Kent State 2025 | ✅ Meets |

**Gaps & mitigation:**
1. **Knowledge graphs / ontologies** — *nice-to-have leaning hard-preferred here.* Candidate has strong retrieval/RAG but no explicit KG. Mitigate: frame semantic/hybrid search + document chunking as retrieval-graph-adjacent; note fast ramp (already fluent in embeddings + reranking, the harder half). Honest: this is the weakest dimension.
2. **5+ years** — *soft blocker* (candidate ~4+). Mitigate: density of production RAG/eval work at Vanguard + Progress compensates; lead with 100k+ daily requests, 25+ agents scale.
3. **Location London + F-1 OPT** — *soft blocker.* UK role, no sponsorship stated; candidate is US-based on OPT. Would require UK relocation + visa. Flag, don't veto.

## C) Nivel y Estrategia

- **JD level:** mid-senior (5+ yr). **Candidate natural level:** mid (4+ yr) with senior-density RAG/eval work.
- **Sell without inflating:** anchor on *production retrieval at scale* — cross-encoder reranking, semantic caching, RAGAS eval, 100k+ req/day. Position the KG gap as "retrieval systems I've shipped are one representation layer away from KG-backed retrieval."
- **If down-leveled:** acceptable if comp is fair for London; negotiate 6-month review and explicit KG onboarding.

## D) Comp y Demanda

| Item | Finding | Source |
|------|---------|--------|
| JD comp | Not listed | JD |
| Market (ML Eng, London, 5+ yr) | ~£70–110k base typical; Scale AI pays competitively, often top-of-band + equity | General market knowledge (Levels.fyi/Glassdoor UK — verify live) |
| Company reputation | Scale AI — well-funded, high-profile; active London expansion | Market context |
| Demand | High — RAG/retrieval platform roles in strong demand | Market context |

No comp in posting; ranges indicative. Sponsorship not mentioned — verify before investing.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises" | Lead with "production RAG + retrieval platform, eval-driven" | Mirrors JD platform framing |
| 2 | Bullets | RAG bullet mid-list | Promote reranking + chunking to top | JD lists chunking→reranking explicitly |
| 3 | Skills | Vector Search line present | Elevate FAISS/Pinecone/Weaviate + hybrid search | Direct keyword match |
| 4 | Bullets | eval framework | Foreground retrieval-quality metrics | JD: "evaluation frameworks and metrics for retrieval quality" |
| 5 | Add | (none) | One line acknowledging knowledge-graph/semantic-search interest | Bridges the KG gap honestly |

Top LinkedIn: headline → "RAG / Retrieval Platform Engineer — embeddings, reranking, eval infra."

## F) Plan de Entrevistas

| # | JD requisito | Historia STAR+R | S | T | A | R | Reflection |
|---|-------------|-----------------|---|---|---|---|------------|
| 1 | RAG pipeline design | Healthcare RAG w/ reranking | Domain queries hallucinated | Lift relevance, cut hallucination | Dense retrieval + cross-encoder rerank | −40% hallucination, 92% precision | Reranking earns its latency cost on domain data |
| 2 | Retrieval quality eval | RAGAS/BERTScore framework | No objective retrieval metric | Benchmark retrieval | Custom domain metrics + dashboards | Regressions caught pre-deploy | Retrieval quality must be measured, not felt |
| 3 | Latency/cost tradeoff | Inference optimization | SLA under cost pressure | Hold SLA, cut cost | Prompt compression + semantic caching + model routing | Per-query overhead down, SLA held | Caching is the cheapest latency win |
| 4 | Backend for ML/LLM | 12 APIs at Vanguard | p95 too high | Cut latency | Microservices refactor | 1.5s→800ms, 100k+ req/day | Service boundaries drive latency more than models |
| 5 | Full-lifecycle ownership | Agentic system end-to-end | Research→prod gap | Own lifecycle | Orchestration + monitoring + eval | Shipped, −42% tokens | Owning eval + monitoring is what makes research ship |

Case study: **production RAG with cross-encoder reranking + RAGAS eval**. Red-flag Qs: "5+ years?" → density argument; "KG experience?" → honest + adjacency + fast-ramp.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Greenhouse board, active Apply | Positive |
| Description quality | Highly specific (chunking, embedding, reranking, KG, eval frameworks); realistic; clear scope | Positive |
| Comp transparency | Not listed (common for Scale AI EU) | Neutral |
| Company signals | Scale AI actively hiring/expanding; no adverse layoff signal for London platform | Positive |
| Reposting | Multiple Scale AI roles in scan-history (25 reports) — active recurring hiring, distinct roles | Neutral |
| Role market context | Mid-senior platform role; fills in weeks-to-months | Positive |

**Context Notes:** Established, well-funded employer with a detailed, role-specific JD. Only caveats: no comp, no sponsorship note, UK location.

## H) Draft Application Answers

Not generated (score 3.2 < 4.5 threshold).

---

## Keywords extraídas

machine learning, RAG, retrieval, embeddings, vector indexing, reranking, chunking, knowledge graph, ontology, semantic search, evaluation framework, retrieval quality, backend services, LLM production, Python, recall, precision, latency, model lifecycle, platform engineering
