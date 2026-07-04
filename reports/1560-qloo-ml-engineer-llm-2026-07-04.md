# Evaluación: Qloo — Machine Learning Engineer (LLM / Personalization)

**Fecha:** 2026-07-04
**Arquetipo:** Applied AI / LLM Engineer ∩ ML Engineer (Applied AI Systems) — LLM + recommendation systems
**Score:** 3.8/5
**URL:** https://jobs.lever.co/qloo/dc353e19-b91e-4c78-b2d0-1e59690d7e4e
**Legitimacy:** Legit — Confident
**Location:** New York City — hybrid (Full Time)
**Region:** US
**PDF:** output/2026-07-04/cv-deepak-mallampati-qloo-ml-engineer-llm-2026-07-04.pdf
**Verification:** JD extracted via Lever public API (`/v0/postings/qloo/{id}?mode=json`) — title, NYC/hybrid location, full responsibilities + qualifications confirmed. Comp not disclosed in the JD body ("We Offer" section not populated in API payload). Net-new discovery this run (Level-3 Lever search); not previously in scan-history.

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer + ML Engineer — ship LLM-powered personalization/recommendation systems |
| Domain | Taste AI / cultural-intelligence graph (Qloo — 500M+ entity records; LLMs grounded on structured taste graph, no PII) |
| Function | Build + ship — design/deploy production ML, productionize RAG + agent workflows, integrate LLMs with entity graph |
| Seniority | Mid IC ("Machine Learning Engineer", reports to LLM Research Lead) — not Senior/Staff |
| Remote | Hybrid — New York City |
| Team size | Not specified — Research + Data Engineering collaboration, LLM Research team |
| TL;DR | Mid-level ML/LLM engineer building production RAG + agent systems that ground generative AI in Qloo's structured taste graph. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| Strong **Python + ML frameworks (PyTorch, CUDA, Kubeflow/Metaflow)** | 4+ yrs Python; PyTorch/TensorFlow/Keras; QLoRA fine-tune Qwen3-27B on H100 | ✅ Strong |
| **LLMs — APIs (OpenAI, Anthropic) and/or OSS (HuggingFace)** | GPT-4o/GPT-5/Claude/Gemini/LLaMA; HF Transformers; model routing across GPT-4o/Claude/Gemini at Vanguard | ✅ Strong (bullseye) |
| **RAG, agent workflows, prompt / tool orchestration** | Healthcare RAG (92% precision, hallucination ↓); conductor–subagent agentic framework (42% token cut) | ✅ Strong |
| **Retrieval systems, embeddings, vector search** | FAISS/Pinecone/Weaviate; dense retrieval + cross-encoder re-ranking; semantic/hybrid search | ✅ Strong |
| **Deploy ML in production** | Vanguard internal AI platform — 100k+ req/day across 20+ teams; 12 APIs, p95 1.5s→800ms | ✅ Strong |
| **Model eval / optimize cost, latency, performance** | RAGAS + BERTScore + custom-metric eval framework; prompt compression + semantic caching + model routing | ✅ Strong |
| **AI-native dev workflows (Claude Code, Cursor)** | career-ops built on Claude Code; MangaLens shipped with agentic coding tools | ✅ Strong (bullseye) |
| **Data pipelines (Airflow), large-scale data (Spark, S3, SQL)** | Spark, Databricks, Kafka, PostgreSQL/MongoDB/Redis; batch orchestration + retry logic | ⚠️ Partial (Spark/S3/SQL ✅; Airflow not explicit — Kafka/scheduled-batch adjacent) |
| **AWS or similar cloud** | AWS (EC2, S3, Lambda, Bedrock, SageMaker) | ✅ Strong |
| **Recommendation / ranking / personalization systems** | Ranking via cross-encoder re-ranking; no dedicated recsys/personalization product experience | ⚠️ Partial (retrieval/ranking transferable; not a recsys specialist) |

**Gaps + mitigation:**
1. **Recommendation-systems / personalization domain** (partial, nice-to-have) — mitigation: frame retrieval + cross-encoder re-ranking + hybrid search as the ranking backbone recsys shares; lead with "LLM grounded on structured knowledge" (exactly Qloo's thesis) via healthcare-RAG grounding work.
2. **Airflow** (partial) — mitigation: surface Kafka + scheduled batch orchestration + exponential-backoff retry as equivalent pipeline-orchestration experience; Airflow is a fast ramp.
3. **NYC hybrid relocation** (candidate in Kent, OH) — not a blocker for a US-based F-1 OPT candidate; note relocation willingness. Remote dimension scored 3.0 per location policy (hybrid outside current city).

## C) Nivel y Estrategia

- **JD level:** Mid IC ML Engineer reporting to LLM Research Lead. **Candidate level:** 4+ yrs mid IC with production LLM/RAG systems — a direct fit; not down-level risk.
- **Sell-without-lying:** Lead with the exact overlap — "I build LLM features grounded on structured data" maps 1:1 to Qloo's "ground generative AI in the taste graph." Pair the healthcare-RAG grounding + eval framework (reliability/explainability) with the agentic orchestration work (agent workflows/tool orchestration).
- **If down-leveled:** Not a level concern — comp/scope are the levers. Negotiate on the LLM+RAG production depth.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (ML Eng, LLM, NYC, mid) | ~$150k–$210k base typical NYC mid-ML range + equity | Market context (WebSearch) |
| Company | Qloo — established Taste AI / cultural-intelligence API company, NYC | JD + company profile |
| Demand | LLM-grounded-on-structured-data + recsys demand strong; production RAG/agent builders scarce | Market context |

Comp not disclosed in the API payload ("We Offer" section unpopulated). NYC mid-level ML ranges typically $150k–$210k base + equity; confirm in first screen.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated GenAI framing | Add "grounds LLMs on structured knowledge; ships RAG + agent systems to production" | Mirror Qloo's grounding/explainability thesis |
| 2 | Skills | Retrieval listed | Surface embeddings + vector search + cross-encoder re-ranking + hybrid search up top | JD leads with retrieval/embeddings/recsys |
| 3 | Bullets | Agentic framework bullet | Emphasize agent workflows + tool/prompt orchestration | JD: RAG, agent workflows, prompt/tool orchestration |
| 4 | Skills | Claude/Cursor implicit | Surface Claude Code / Cursor explicitly | JD requires AI-native dev workflows |
| 5 | Footer | — | "US-based, F-1 OPT — open to NYC relocation" | NYC hybrid; honest work-auth |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Ground LLMs on structured data | Healthcare RAG + grounding | Hallucination on domain queries | Grounded, precise answers over structured corpora | Dense retrieval + cross-encoder re-ranking + eval gates | 92% precision, hallucination ↓ | Grounding is a retrieval+re-ranking problem before it's a prompting one |
| 2 | RAG + agent workflows + tool orchestration | Conductor–subagent agentic framework | Complex multi-step objectives | Reliable autonomous execution | Context-scoped subagents + tool routing + retry/backoff | 42% token cut, sustained accuracy | Orchestration + fallback is what makes agents production-safe |
| 3 | Model eval / cost + latency optimization | LLM eval + inference optimization | Regressions + SLA cost pressure | Benchmark iterations, cut per-query cost | RAGAS + BERTScore + custom metrics; prompt compression + semantic caching + model routing | Regressions caught pre-release; latency/cost ↓ | Evals are the release gate; caching+routing are the cost gate |
| 4 | Deploy ML in production at scale | Vanguard internal AI platform | 20+ teams need LLM capabilities | Ship scalable production services | 12 APIs/microservices; p95 1.5s→800ms | 100k+ req/day across 20+ teams | Production ML is a latency + reliability discipline, not a notebook |
| 5 | AI-native dev workflows (Claude Code/Cursor) | career-ops autonomous pipeline | Repetitive job-search toil | Automate end to end | Built on Claude Code / agentic tooling | Hours → unattended overnight workflow | AI-native tooling is now a build multiplier |

**Case study:** Healthcare RAG + eval framework — the clearest analog to "ground generative AI in real-world structured data with reliability and explainability."
**Red-flag Qs:** "Recsys experience?" → honest: retrieval/ranking/hybrid-search backbone is transferable; eager to go deep on personalization. "Based in NYC?" → US-based, F-1 OPT, open to NYC relocation.

## G) Posting Legitimacy

**Assessment:** Legit — Confident

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on Qloo's Lever board — served via public API, active req | Positive |
| Tech specificity | High — names PyTorch/CUDA/Kubeflow, RAG, agent workflows, Airflow, Spark/S3, Claude Code/Cursor | Positive |
| Requirements realism | Coherent mid-IC scope; reports to LLM Research Lead; realistic YOE-to-tech fit | Positive |
| Company | Qloo — established Taste AI API company (500M+ records, real product) | Positive |
| Reposting | No prior Qloo entry in scan-history — first appearance | Neutral |
| Work-auth fit | US (NYC) role — fine for F-1 OPT now; future sponsorship needed | Positive (candidate-specific) |
| Salary | Not disclosed in API payload | Neutral |

**Context:** No ghost-job signals — specific modern stack, coherent mid-IC scope, real product/company, active Lever board. US-based hybrid role is a clean work-auth fit for F-1 OPT (short-term), with relocation to NYC the only logistics item.

## H) Draft Application Answers

_(Score 3.8 < 4.5 — no full drafts. PDF tailored. Strong apply candidate: lead with LLM-grounded-on-structured-data + production RAG/agent depth; confirm NYC relocation + comp band in first screen.)_

---

## Keywords extraídas

Machine Learning Engineer, LLM, RAG, retrieval-augmented generation, agent workflows, prompt orchestration, tool orchestration, embeddings, vector search, recommendation systems, personalization, PyTorch, CUDA, Kubeflow, HuggingFace, OpenAI, Anthropic, Airflow, Spark, S3, AWS, Claude Code, Cursor, model evaluation, latency optimization, taste graph, grounding, explainability
