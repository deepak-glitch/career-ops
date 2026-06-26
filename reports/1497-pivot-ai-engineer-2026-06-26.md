# Evaluación: Pivot — AI Engineer

**Fecha:** 2026-06-26
**Arquetipo:** Applied AI / LLM Engineer
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/Pivot/6294beb0-744a-40bb-a119-33978298e951
**Legitimacy:** High Confidence
**Location:** Paris, France (on-site/hybrid — no remote stated)
**Region:** Intl
**PDF:** output-intl/2026-06-26/cv-deepak-mallampati-pivot-ai-engineer-2026-06-26.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | **Applied AI / LLM Engineer** (secondary: AI Platform / MLOps) |
| Domain | LLMOps + Agentic (procurement AI: document understanding, copilots, anomaly detection) |
| Function | Build (ship AI features end-to-end + lay AI engineering foundations) |
| Seniority | Mid/Senior IC — "among the first AI engineers" but **5+ yrs SWE / 2+ yrs AI in prod** |
| Remote | On-site/hybrid **Paris** (no remote language in JD) |
| Team size | ~70 employees, 25+ countries; this is a *founding* AI-engineering hire |
| TL;DR | Series-B procurement-AI startup ($70M raised) hiring one of its first AI engineers to build the LLM/agent/RAG layer end-to-end. Excellent technical fit; the blocker is Paris-based + F-1 OPT relocation/work-auth. |

## B) Match con CV

| JD Requirement | CV Evidence | Verdict |
|----------------|-------------|---------|
| 2+ yrs shipping AI/ML to production | Progress Solutions (agentic LLM, RAG) + Vanguard intern (25+ agents, 100k req/day) | ✅ Strong |
| Modern LLM stack: RAG, embeddings, vector DBs, agents, eval tooling | "RAG Architecture", FAISS/Pinecone/Weaviate, cross-encoder re-ranking, LangGraph multi-agent, RAGAS/BERTScore | ✅ Direct hit |
| LLM app & orchestration layer (prompts→retrieval→tool calling→agents→structured outputs) | Conductor–subagent orchestration framework, structured outputs, 42% token reduction | ✅ Strong |
| AI engineering foundations: evals, dataset/prompt versioning, observability, safe rollout | "LLM evaluation and monitoring framework (RAGAS, BERTScore, custom metrics)", MLflow/W&B, model monitoring | ✅ Strong |
| Scalable AI architecture: model routing, caching, retries, async, vector storage, pipelines | "prompt compression, semantic caching, model routing"; "exponential-backoff retry", batch orchestration | ✅ Strong |
| Enterprise quality/trust: accuracy, latency, cost, auditability, fallbacks | p95 1.5s→800ms, SLA targets, 99.9% uptime, audit logging, content safety | ✅ Strong |
| Python (or backend lang) + backend systems, micro-services, event-driven | Python, FastAPI, Docker/K8s, Kafka, PostgreSQL/Mongo/Redis | ✅ Strong |
| MLOps fundamentals: eval pipelines, dataset versioning, monitoring, drift, safe deploy | Drift Detection, model monitoring, CI/CD, MLflow | ✅ Strong |
| Fraud / anomaly detection | Emerson: anomaly detection, equipment-failure prediction; classification models | ✅ Adjacent |
| Document understanding over enterprise corpora | RAG over large-scale healthcare/regulatory document corpora, 92% precision | ✅ Strong |

**Gaps:**

1. **5+ years total software engineering** *(nice-to-have, soft)* — CV shows ~4+ years AI/ML. Adjacent: depth (banking/healthcare regulated production, agentic systems) exceeds many 5-yr generalists. *Mitigation:* lead with production scale (100k req/day, 99.9% uptime) and breadth of stack rather than tenure.
2. **Procurement / fintech-ops domain** *(nice-to-have)* — no direct procurement experience. Adjacent: banking + regulated-enterprise RAG, financial NER (Emerson BERT/RoBERTa 89% F1). *Mitigation:* one-line cover note connecting regulated-finance RAG to procurement workflows.
3. **Location — Paris, on-site/hybrid + F-1 OPT** *(HARD practical blocker for this candidate)* — Deepak is US-based on F-1 OPT; this role needs FR/EU work authorization and relocation. JD states no remote option. *Mitigation:* only viable if Pivot sponsors EU relocation or opens a remote arrangement — must be confirmed before investing. This is the dominant reason the score is 3.5 and not 4.5.

## C) Nivel y Estrategia

- **JD level:** Mid/Senior founding IC (5+ yrs SWE / 2+ yrs AI prod). **Candidate's natural level for this archetype:** mid Applied-AI IC with strong production depth.
- **"Sell senior without lying":** Frame the conductor–subagent orchestration framework and the RAGAS eval framework as *exactly* the "AI engineering foundations" Pivot wants a founding hire to stand up. Emphasize zero-to-one ownership (career-ops, MangaLens shipped solo) — matches "comfortable starting from zero."
- **If down-leveled:** Acceptable if comp is fair and the role is genuinely founding-scope. Negotiate a 6-month scope/title review tied to shipping the orchestration + eval layer.

## D) Comp y Demanda

| Data point | Finding | Source |
|------------|---------|--------|
| Paris AI/ML Engineer base | ~€55k–€85k typical; senior/founding startup ~€70k–€110k + equity | Market (Glassdoor/Levels FR, qualitative) |
| Pivot funding | $70M total ($40M Series B), tier-1 investors | JD |
| Role demand | "AI Engineer / Applied AI Engineer" among fastest-growing 2026 titles | Market trend research |
| Note | No comp in JD; equity meaningful at this stage. **WebSearch not run for live FR salary tables this pass — figures are qualitative; verify before negotiation.** | — |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Banking and regulated enterprises" | Add "LLM application & orchestration layer, evals, and safe rollout for enterprise AI" | Mirror JD's founding-AI-eng language |
| 2 | Bullets | RAG + agentic first | Reorder: orchestration → RAG → evals/observability → cost/latency | Match JD priority order |
| 3 | Skills | Long list | Surface "structured outputs, tool calling, model routing, vector storage, eval pipelines" | ATS keyword alignment |
| 4 | Projects | MangaLens/career-ops | Frame both as zero-to-one shipped products | "Comfortable starting from zero" |
| 5 | Footer | US/F-1 OPT | For this Intl role, state openness to relocation + need for EU sponsorship honestly | Don't bury the work-auth reality |

**LinkedIn:** headline → "Applied AI Engineer · LLM orchestration, RAG & evals for regulated enterprises"; add "structured outputs / agent frameworks / MLOps" to skills; pin career-ops + MangaLens.

## F) Plan de Entrevistas

| # | JD Requirement | Historia STAR+R | S | T | A | R | Reflection |
|---|----------------|-----------------|---|---|---|---|------------|
| 1 | LLM orchestration layer | Conductor–subagent framework | Complex multi-step objectives blew token budgets | Cut cost without losing accuracy | Decomposed into context-scoped subagents | 42% token reduction, accuracy held | Orchestration boundaries matter more than model choice |
| 2 | RAG + document understanding | Healthcare RAG corpus | Hallucinations on domain queries | Lift relevance, cut hallucination | Dense retrieval + cross-encoder re-rank | 92% precision, 40% hallucination drop | Re-ranking was the highest-leverage lever |
| 3 | Evals / observability foundations | RAGAS eval framework | No pre-deploy regression signal | Catch regressions before release | RAGAS+BERTScore+custom metrics + dashboards | Surfaced regressions pre-deploy | Evals-as-tests changed release confidence |
| 4 | Cost/latency/scale | Vanguard platform | p95 1.5s, rising load | Hit SLA at scale | Caching, model routing, 12 microservices | p95→800ms, 100k req/day | Caching + routing beat raw scaling |
| 5 | Safe rollout / trust | Content safety controls | Unsafe model outputs | Policy-compliant responses | Safeguards + content controls | 42% fewer unsafe outputs | Guardrails are a product feature, not an afterthought |
| 6 | Anomaly/fraud adjacency | Emerson failure prediction | Equipment failures unpredicted | Predict failures/anomalies | Regression/classification on sensor data | Working anomaly models | Domain features beat fancy models |

**Case study to present:** career-ops (autonomous, zero-to-one, eval-driven) — maps directly to "founding AI engineer who starts from zero."
**Red-flag Qs:** "Why a Paris on-site role from the US?" → be direct about relocation interest + sponsorship need. "Only 4 yrs?" → counter with production scale + founding ownership.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting state | Ashby `isListed: true`, live JD reachable via GraphQL | Positive |
| Description quality | Specific stack (RAG, vector DBs, agents, evals, model routing), clear 6-12mo scope, named customers (DoorDash, Lemonade, Wolt, Flix) and investors | Positive |
| Requirements realism | 5+ yrs SWE / 2+ yrs AI prod — coherent, no entry-vs-staff contradiction | Positive |
| Company hiring signals | Series B $70M, 70 employees, 25+ countries — actively scaling | Positive |
| Reposting | Not previously in scan-history reports (genuinely net-new) | Neutral |
| Comp transparency | No salary in JD (common for early-stage FR startups) | Neutral |

**Context Notes:** Founding AI-eng roles at well-funded startups legitimately stay open longer while the company finds the right zero-to-one builder. No ghost-job indicators.

---

## Keywords extraídas

LLM orchestration, RAG, embeddings, vector database, agent frameworks, structured outputs, tool calling, evals, eval pipelines, dataset versioning, prompt versioning, observability, model routing, semantic caching, MLOps, drift detection, document understanding, anomaly detection, FastAPI, Python, micro-services, event-driven, safe deployment, procurement AI
