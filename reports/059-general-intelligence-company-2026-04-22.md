# Evaluación: General Intelligence Company of NY — Applied AI Engineer - Agent

**Fecha:** 2026-04-22
**Arquetipo:** Applied AI / LLM Engineer + Agentic / Automation — primary archetype (backend + applied LLM + agent evals + productionization)
**Score:** 3.7/5
**URL:** https://jobs.ashbyhq.com/generalintelligencecompany/4bc5d479-3bba-432d-887f-423847aa650a
**Legitimacy:** High Confidence
**Location:** New York — **On-site**. 4+ yrs backend engineering preferred.
**Verification:** confirmed (Ashby GraphQL direct — full description, $250-$300K + 0.3-0.6% equity)
**PDF:** output/cv-deepak-mallampati-general-intelligence-company-2026-04-22.pdf
**Date:** 2026-04-22

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Applied AI / LLM Engineer + Agentic (Cofounder agent — autonomous business agents) |
| Domain | General Intelligence Company of NY — Cofounder agent; autonomous agents that "run entire businesses" across Gmail, Slack, Notion, Linear, Google Workspace |
| Function | End-to-end agent improvements: prompting, tool selection, planning, memory, safety/guardrails, recovery paths; build eval pipelines (offline + online + experimentation); productionize applied LLM techniques; improve backend systems (orchestration, retries, memory, observability) |
| Seniority | 4+ yrs backend (Python preferred) — impact over years |
| Remote | **On-site NY** |
| Location | New York, NY — on-site |
| TL;DR | Strong archetype fit. Agent reliability + evals + RAG + memory + observability = Deepak's Agentic Claims + Healthcare RAG profile. Published $250-300K + 0.3-0.6% equity = high band. 4+ yrs bar is a stretch; Deepak at 2.5. NY on-site + F-1 OPT sponsorship is the real friction. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 4+ yrs backend (Python preferred) | **STRETCH** | cv.md L22-23 Progress Solutions 2.5+ yrs + Emerson 10 mo + Suvidha 3 mo; 3.5-4 yrs equivalent |
| Hands-on LLM (prompting, function-calling, retrieval, embeddings, eval design, production) | **STRONG** | cv.md L25-28 Healthcare RAG; L26 agentic workflows; L72 5-stage pipeline with schema contracts |
| Eval harnesses + regression suites + task success metrics + cost/runtime | **STRONG** | cv.md L25 retrieval-grounded alignment >90%; L30 evaluation audit trails; L26 agent response stability ~25% |
| Distributed systems fundamentals | **PARTIAL** | cv.md L28 FastAPI + Docker + logging + load sim; L37-38 SQL DMV + Grafana; not distributed-systems scale |
| Hypothesis → prototype → measured improvement → rollout | **STRONG** | cv.md L25-28 all metrics are rollout-with-measure; L72 schema-validated agents |
| Agent frameworks, tool orchestration, memory | **STRONG** | cv.md L26 tool discipline, grounding; L72 multi-agent pipeline; L62 LLM-based agent orchestrator |
| RAG production (chunking, retrieval quality, freshness) | **STRONG** | cv.md L25 recursive semantic chunking, ~35% precision gain |
| Redis, Postgres/Supabase, queues | **PARTIAL** | cv.md L12 SQL (T-SQL, PostgreSQL, SQLite); Redis/queues not explicit |
| Observability (Datadog, OpenTelemetry) | **PARTIAL** | cv.md L17 observability/logging; L38 Grafana; no Datadog/OTel specifically |
| NY on-site | **BLOCKER-LIGHT** | Kent OH → NY relocation + F-1 OPT sponsorship |

**Gaps:**
1. **4+ yrs bar.** Medium. Mitigation: JD says "impact over years"; dense match in LLM + evals + agent + RAG is the right framing.
2. **Distributed-systems scale + queues/Redis.** Medium. Mitigation: FastAPI + SQL + DMV + Grafana = foundations; ramp story on Celery/Arq/Redis.
3. **NY on-site + F-1 OPT.** Real friction. Mitigation: relocation + sponsorship conversation early.

## C) Nivel y Estrategia

- **JD level:** Mid-Senior (4+ yrs). **Deepak:** 2.5 yrs with dense agent + eval + RAG + schema-validation proof. Stretch but viable.
- **Strategy:** Lead with Agentic Claims (schema-validated multi-agent pipeline with audit traces) + Healthcare RAG eval harness. Frame "impact over years" literally — concrete metrics for every agent improvement (~35% retrieval precision, >30% hallucination reduction, ~25% stability gain, ~30% fewer defects).
- **If downleveled:** Not expected at this band; if happens, comp band has room for a downlevel to $200-$225K.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Posted band | **$250K-$300K + 0.3-0.6% equity** | Ashby direct |
| Co-founder seniority of surrounding roles | "Fullstack Engineer - Cofounder" $225-$300K; "Senior Platform Engineer - Cofounder" $250-290K; "Agents Research Lead" $400-600K | Ashby list |
| Demand for applied-agent + eval engineers | Very high | Market |

**Well above target.** NY top-of-market comp.

## E) Plan de Personalización

| # | Sección | Propuesto | Por qué |
|---|---------|-----------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ yrs) shipping production agent systems + evaluation harnesses end-to-end — healthcare RAG (~35% retrieval precision, >90% grounded alignment), agentic claims pipeline with schema-validated JSON contracts (>30% hallucination reduction, ~25% stability gain), FastAPI + Docker packaging (~30% fewer post-deploy defects). Python backend; eval harnesses + regression + audit traces." | Mirror JD exactly |
| 2 | Competencies | "Agent Reliability", "Evaluation Harnesses", "Function/Tool Calling", "Retrieval / RAG", "Multi-Agent Orchestration", "Schema-Validated Contracts", "Audit / Observability", "Python Backend", "Hallucination Reduction" | JD keywords |
| 3 | Projects | Lead with **Agentic Claims 5-stage pipeline** (exact shape: schema contracts + RAG + audit) + **Healthcare RAG** (eval + chunking + embeddings + grounding) + **Dream Decoder** (prompt transformation as agent-like orchestration) | Top match |
| 4 | Cover letter | "GIC's Cofounder agent is exactly the shape of system I've been shipping — agent reliability via schema-validated JSON contracts between stages, RAG-grounded retrieval, eval harnesses, audit traces. At Progress Solutions: healthcare RAG (~35% retrieval precision, >90% grounded alignment); Agentic Claims pipeline (5-stage, >30% hallucination reduction). Python backend, FastAPI + Docker + structured logging + load sim (~30% fewer post-deploy defects). 2.5 yrs of impact-per-year that would compound at GIC. Open to relocating to NY." | Hit JD vocabulary |

## F) Plan de Entrevistas

| # | Requisito JD | Historia | S | T | A | R | Reflection |
|---|-------------|----------|---|---|---|---|------------|
| 1 | Agent improvements end-to-end | Agentic Claims pipeline | Multi-step claims reasoning fragile + hallucinates | Design + ship reliable agent pipeline | 5-stage: Intake → Validation → Consistency → Duplicate → Risk; schema-validated JSON contracts between agents; RAG-grounded CPT/ICD; audit-ready reasoning traces | >30% hallucination reduction, ~25% agent stability gain | Contracts prevent cascading errors; audit traces ARE the eval |
| 2 | Evaluation pipelines (offline + online + A/B) | Healthcare RAG + eval harness | Clinical retrieval had no grounding metric | Build eval harness | Retrieval-grounded alignment metric + regression suite + eval audit trail | >90% grounded alignment; measurable improvement rollouts | Eval harness = the product, model is the swap |
| 3 | RAG in production (chunking, retrieval quality) | Healthcare RAG | Clinical retrieval noisy | Productionize | Recursive semantic chunking + transformer embeddings + grounding rules | ~35% retrieval precision gain, >30% irrelevant cut | Retrieval quality IS RAG quality |
| 4 | Backend reliability (orchestration, retries, memory) | FastAPI + Docker packaging @ Progress Solutions | Post-deploy defects | Reliable inference services | Structured logging + load simulation + Docker + idempotent endpoints | ~30% fewer post-deploy defects | Packaging + logging = reliability |
| 5 | Observability + tracing | Grafana + SQL DMV @ Emerson | Deadlocks + query latency | Dashboard + RCA | DMV queries + Grafana dashboards + incident playbooks | ~25% fewer recurrences, ~30% faster RCA | Dashboards before tuning |
| 6 | Data pipelines (Gmail/Slack/Notion-like integrations) | Manga Lens multi-provider | 4 AI providers + 29 site configs | Build provider abstraction | Per-domain selectors + per-provider payload handling + 7-day cache + dedup | Shipped Chrome Web Store | Provider abstraction compounds |

**Case study:** Agentic Claims pipeline — schema-validated + RAG + audit. Opening line: "Here's the shape of Cofounder agent I've already shipped: 5 agents, schema-validated JSON contracts, RAG-grounded CPT/ICD, audit traces. Scale is different; discipline isn't."
**Red-flag prep:**
- "Only 2.5 yrs vs 4+?" → "Dense match + MS + independent shipping. Impact over years is the JD bar itself."
- "Queues/Redis?" → "Ramp story; foundations strong."
- "NY on-site + F-1 OPT?" → "Open to NY relocation; OPT now, future sponsorship needed."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active Ashby GraphQL | Positive |
| Tech specificity | Python + LLM + RAG + evals + Redis + Postgres + queues + observability + Datadog/OTel | Positive |
| Salary transparency | **$250-$300K + 0.3-0.6% equity published** | Positive |
| Requirements realism | 4+ yrs + dense LLM + backend systems — realistic | Positive |
| Company posture | Multiple Cofounder titles ("Fullstack Engineer - Cofounder", "Senior Platform Engineer - Cofounder") suggests early + ambitious; high equity bands | Positive |
| Mission language | "build autonomous agents that run entire businesses" | Neutral — ambitious framing common at seed/Series-A agent startups |
| Company size | Small (judging by cofounder-named roles) | Neutral |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why General Intelligence Company?**
> The Cofounder agent is exactly the shape of system I've shipped in healthcare. At Progress Solutions: healthcare RAG with ~35% retrieval precision gain and >90% grounded response alignment; Agentic Claims pipeline (5-stage, schema-validated JSON contracts between agents, RAG-grounded CPT/ICD validation, audit-ready reasoning traces) with >30% hallucination reduction and ~25% agent stability gain. FastAPI + Docker packaging with ~30% fewer post-deploy defects. Eval harnesses + regression + audit traces are how I've been operating. GIC is the right scale-up of that mental model.

**Experience bar (4+ yrs)?**
> 2.5 yrs at Progress Solutions on healthcare RAG + agentic systems + FastAPI/Docker. Plus Emerson DB/DevOps, Suvidha transformer summarization, and independent shipping (Manga Lens on Chrome Web Store with multi-provider abstraction, Dream Decoder full-stack multimodal with prompt-transformation layers, Agentic Claims pipeline, E-Farming founder). The JD says "impact over years" — that's my favorite framing; happy to walk through density of proof.

**NY on-site + visa:**
> Open to relocating to NY. F-1 OPT now, future sponsorship needed.

## Keywords extraídas

General Intelligence Company, Applied AI Engineer, Agent, Cofounder agent, agent reliability, evaluation pipelines, offline evals, online metrics, A/B testing, function calling, tool orchestration, retrieval, RAG, multi-agent, memory, caching, embeddings, hallucination reduction, backend, Python, distributed systems, observability, Datadog, OpenTelemetry, NY, on-site.

---

**Recommendation: Apply.** 3.7/5 — primary archetype match (Applied AI + Agentic), above-target comp ($250-300K + equity), JD's "impact over years" language opens the 4+ yr door. NY on-site + F-1 OPT + distributed-systems ramp are the friction points.
