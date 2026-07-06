# Evaluación: Jobgether — AI Engineer (Remote, International)

**Fecha:** 2026-07-06
**Arquetipo:** Generative AI / RAG Engineer
**Score:** 3.6/5
**URL:** https://jobs.lever.co/jobgether/1e2d0a50-1865-46be-9cc6-52c10ab8b6a5
**Legitimacy:** Proceed with Caution
**Location:** Remote — International (categorized Hungary; remote-first, no country lock stated)
**Region:** Intl
**PDF:** output-intl/2026-07-06/cv-deepak-mallampati-jobgether-2026-07-06.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Generative AI / RAG Engineer |
| Domain | LLMOps / GenAI in high-scale AdTech (billions of real-time events) |
| Function | Build — LLM components, retrieval, embeddings, automation workflows |
| Seniority | Mid IC (no years stated; scope reads mid-level) |
| Remote | Remote-first, international |
| Team | Cross-functional (engineers, analysts, product); flat structure |
| TL;DR | Build and optimize LLM-powered components — retrieval, embeddings, conversational interfaces, automation — over high-throughput AdTech data. |

## B) Match con CV

| Requisito JD | Evidencia CV | Fit |
|--------------|--------------|-----|
| LLM inference, embeddings, vector databases | RAG pipelines w/ dense retrieval + cross-encoder re-ranking (Progress); FAISS/Pinecone/Weaviate (Skills) | ✅ Strong |
| Strong Python + NumPy/Pandas | Python; Pandas, NumPy (Skills; Data Eng) | ✅ Strong |
| SQL / relational data systems | PostgreSQL, SQL (Skills) | ✅ Strong |
| Ranking models / retrieval | Cross-encoder re-ranking, hybrid search (Skills; Progress) | ✅ Strong |
| Distributed / containerized (Kubernetes a plus) | Docker, Kubernetes (Skills) | ✅ Good |
| Evaluate new AI models/frameworks | Evaluated GPT-4o/Claude/Gemini; RAGAS/BERTScore eval framework | ✅ Strong |
| Optimize data infra for scalable LLM usage | Semantic caching, prompt compression, model routing to hold SLA (Progress) | ✅ Strong |
| Bonus: Java, time-series, real-time/ads systems | Java (Skills); regression/anomaly on sensor time-series (Emerson) | ✅ Partial |

**Gaps & mitigation:**
- **AdTech / real-time bidding domain** (nice-to-have): No direct ads experience. Mitigation — frame Vanguard's 100k+ requests/day and Progress SLA/latency work (p95 1.5s→800ms) as high-throughput, low-latency production experience that transfers directly.
- **Time-series at ad scale** (bonus): Emerson sensor forecasting is adjacent; position as foundational, not a blocker.

## C) Nivel y Estrategia

- **JD level vs candidate:** Mid IC. Deepak's 4+ yrs (Progress, Vanguard, Kent State) sits at or slightly above; no over-leveling risk.
- **Sell:** Lead with production RAG + retrieval optimization at throughput (semantic caching, cross-encoder re-ranking, SLA-bound latency). This is the exact stack the JD prioritizes.
- **If down-leveled:** Comp is unspecified ("competitive, international remote"); negotiate on total package + scope, request 6-month review.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Stated comp | Not disclosed ("competitive, aligned with international remote engineering roles") | JD |
| Market (EU remote AI Eng, mid) | ~€55–85k depending on country | Levels.fyi / Glassdoor EU (general) |
| Demand | High — GenAI/RAG IC roles remain in strong demand | Market |

Comp opacity is the main unknown. Confirm range early.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated framing | Lead with LLM retrieval + embeddings + high-throughput production | Mirror JD's GenAI/AdTech scale language |
| 2 | Bullets | RAG general | Surface cross-encoder re-ranking + semantic caching + SLA latency first | JD explicitly lists ranking + vector DB + scale |
| 3 | Skills | Broad list | Move FAISS/Pinecone/Weaviate + embeddings to top | ATS keyword match |
| 4 | Bonus | — | Add Java + time-series adjacency line | Hits JD bonus criteria |
| 5 | LinkedIn | — | Headline: "Applied AI / RAG Engineer — production retrieval at scale" | Recruiter search alignment |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-------------|-----------------|---|---|---|---|------------|
| 1 | Retrieval + re-ranking | RAG over healthcare corpora | Hallucination on domain queries | Lift answer relevance | Dense retrieval + cross-encoder re-rank | Materially reduced hallucination | Chunking strategy mattered more than model size |
| 2 | Scale / low latency | Vanguard APIs | 100k+ req/day, p95 1.5s | Cut latency | 12 microservices, caching | p95 → 800ms | Cache invalidation was the hard part |
| 3 | Optimize LLM infra cost | Progress inference | SLA cost pressure | Hold SLA, cut cost | Prompt compression, semantic caching, model routing | Sustained SLA at lower per-query cost | Routing cheap vs capable models by task |
| 4 | Evaluate new models | Vanguard model bake-off | GPT-4o vs Claude vs Gemini | Pick best per task | Structured eval on internal sets | +27% task success | Eval harness paid for itself across projects |

- **Case study:** MangaLens (shipped, real-time inline AI) or career-ops (autonomous pipeline) to show end-to-end delivery.
- **Red-flag Qs:** "Why an AdTech role?" → high-throughput, low-latency production is the through-line, ads is a new domain I'm eager to learn.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|--------|---------|--------|
| Apply button | Active Lever posting, API-resolvable | Positive |
| Tech specificity | Names LLM inference, embeddings, vector DBs, ranking, K8s | Positive |
| Employer identity | Jobgether is a remote job-matching platform; some postings are talent-pool/aggregated rather than a single named end-employer | Concerning |
| Comp transparency | Not disclosed | Neutral |
| Reposting | Not previously in scan-history | Positive |

**Context Notes:** Jobgether both hires for itself and aggregates roles. The JD reads like a genuine internal AdTech GenAI role (specific stack, scale claims), but confirm the actual hiring entity and whether this is a live req vs pipeline posting before investing heavily.

## H) Draft Application Answers

Not generated (score < 4.5).

---

## Keywords extraídas

LLM inference, embeddings, vector database, RAG, retrieval, ranking models, Python, NumPy, Pandas, SQL, Kubernetes, containerized, generative AI, conversational interfaces, automation workflows, real-time, high-throughput, low-latency, distributed systems, Java
