# Evaluación: Hightouch — Software Engineer, AI Agents

**Fecha:** 2026-05-16
**Arquetipo:** Applied AI / Agentic Workflows (data agents)
**Score:** 3.7/5
**URL:** https://job-boards.greenhouse.io/hightouch/jobs/5542602004
**Legitimacy:** High Confidence
**Location:** Remote — North America
**Region:** US
**PDF:** output/2026-05-16/cv-deepak-mallampati-hightouch-swe-ai-agents-2026-05-16.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | Applied AI / Agentic Workflows (data + marketing automation) |
| Domain | Composable Customer Data Platform (CDP) — marketing/analytics data agents |
| Function | Build production data agents that leverage company data for analytics + marketing |
| Seniority | Senior-leaning IC ("strong backend architecture knowledge"; "architectural decisions") |
| Remote | Remote — North America |
| Comp | $180K – $320K USD/year (wide range — mid-to-senior IC band) |
| TL;DR | Build agentic data agents on top of Hightouch's CDP for analytics + marketing automation; "product-minded AI engineer" framing. |

## B) Match con CV

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| Strong backend architecture | Progress: data pipelines, FastAPI/Flask, Docker, eval frameworks; Emerson: T-SQL stored procs, Jenkins CI/CD, partition-aware indexing | Strong 1:1 |
| Product intuition + business acumen | Suvidha founder-mode + Progress stakeholder-facing system-limitation docs | Moderate (no marketing-domain) |
| Creativity with LLM applications | Production RAG + agentic + structured outputs + eval frameworks | Strong |
| LLM/AI experience (nice-to-have) | 2.5y at Progress: RAG, agentic, LLM workflows, FastAPI inference | Strong 1:1 |
| Prototype rapidly + architect production | Healthcare Claims 5-stage agent + production FastAPI/Docker services | Strong 1:1 |
| Data agents for analytics/marketing | Healthcare data + EHR pipelines; analytics agents not directly built; marketing domain is new | **Adjacent gap** |
| Backend at scale | Emerson Synthesis Order-to-Cash + Progress production AI | Moderate |
| "No programming interviews" — emphasizes system design | System design experience via Progress + Emerson; can articulate | Strong fit for their interview style |

### Gaps + mitigation
1. **Marketing/CDP domain experience** — moderate gap. Mitigation: data pipelines + structured outputs + audit trails translate; emphasize "data agent" pattern from Healthcare Claims (5-stage policy lookup IS an analytics agent for codes/policies).
2. **Senior architecture lane** — soft gap (range top is $320K which IS senior, but range bottom $180K is mid). Mitigation: 2.5y at Progress + full lifecycle ownership + production discipline = senior-mid IC.
3. **Marketing-specific business acumen** — gap. Mitigation: lean on Suvidha product instincts + Progress non-tech-stakeholder delivery; acknowledge marketing is new but data-agent patterns are general.

## C) Nivel y Estrategia

**Detected level (JD):** Mid-to-senior IC ($180K-$320K). Architectural decisions imply senior-leaning, but range bottom is reachable.
**Candidate natural level:** Mid IC. Stretch toward senior.

**Sell senior without lying:**
- "I've made the architectural decisions on production AI systems end-to-end at Progress — data pipelines, RAG, agentic, inference services, eval frameworks. That's the full stack of a data agent."
- "Backend rigor from Emerson: T-SQL stored procs, partition-aware indexing, Jenkins CI/CD, audit logging. Composable-CDP friendly."
- "Product-minded: Suvidha was a personal product I built end-to-end (60-70% review time cut for end users)."

**If down-leveled:** $180K floor + remote North America is strong; agentic data agents are a sticky, growing category at Hightouch.

## D) Comp y Demanda

| Source | Range | Note |
|--------|-------|------|
| Hightouch JD | $180K-$320K | Posted, transparent, wide |
| Levels.fyi Hightouch SWE (mid-to-senior, remote NA) | $190K-$300K | Confirms range |
| Composable CDP / analytics AI demand | Strong (Census, Hightouch, Rudderstack, Hex) | Healthy 2026 |
| Agentic data IC at $180-220K base | Active band, growing | Hightouch sits in this band |

Hightouch is Series C-stage (last raise ~$95M, profitable trajectory). Remote-NA fully remote is a positive lifestyle signal.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | Generic AI engineer | "Applied AI engineer building production agentic + RAG systems with backend rigor; full lifecycle from data pipelines to inference APIs" | Match Hightouch "product-minded backend AI" framing |
| 2 | Skills | Long list | Surface: agentic workflows, RAG, vector search, FastAPI, Docker, Python, SQL/T-SQL, ETL, evaluation frameworks, structured outputs | JD top stack + data-engineering bridge |
| 3 | Progress bullets | Generic Applied AI | Lead with "agentic LLM workflows + structured reasoning + eval frameworks + customer-facing iteration" | Hightouch "data agents that leverage company data" framing |
| 4 | Emerson bullets | DBA-leaning | Reframe: "Backend architecture: T-SQL stored procs + partition-aware indexing + audit logging for compliance — composable, version-controlled, observable" | Backend architecture credibility |
| 5 | Healthcare Claims project | Standard | Reframe: "Agentic data pipeline: 5 stages with schema-validated contracts + RAG-grounded lookups + explainable outputs — the same shape as a marketing/analytics data agent" | Bridge healthcare → marketing/analytics |

## F) Plan de Entrevistas (STAR+R)

| # | JD Requirement | Story | STAR+R |
|---|----------------|-------|--------|
| 1 | Backend architecture | Emerson Synthesis Order-to-Cash | S: 100s of T-SQL stored procs, multi-financial-module ERP. T: optimize + maintain. A: tuned procs + partition-aware indexing + version-controlled SQL + Jenkins CI/CD + rollback checkpoints. R: ~20% query time + ~25% latency + >30% fewer deploy errors. Reflection: profile + observability before optimizing. |
| 2 | Agentic data agent | Healthcare Claims 5-stage agent | S: noisy claims pipeline. T: build reliable multi-step agent. A: schema-validated JSON contracts + RAG-grounded ICD/CPT + explainable scores. R: audit-ready production pipeline. Reflection: contracts > prompts. |
| 3 | RAG + retrieval at scale | Clinical RAG | S: ~30% irrelevant retrieval. T: improve precision. A: recursive semantic chunking + transformer embeddings + retrieval-aligned eval. R: ~35% precision lift, >90% grounded alignment. Reflection: eval set IS the product. |
| 4 | Production AI services | FastAPI/Docker inference | S: ML models needed productionizing. T: serve reliably at scale. A: FastAPI + Docker + structured logging + load sim. R: ~30% defect reduction. Reflection: observability is the first deliverable. |
| 5 | Product intuition | Suvidha founder-mode | S: built end-to-end personal product. T: deliver real value to end users. A: rapid iteration + customer feedback + system-limitation docs. R: 60-70% review time cut, ~98% data reliability. Reflection: every feature is a hypothesis — instrument it. |
| 6 | Speed + reliability tradeoffs | Progress consulting cadence | S: client AI deliverables on tight cycles. T: balance velocity + production rigor. A: timeboxed prototypes + early eval set + structured outputs from day 1. R: shorter cycles, fewer rework loops. Reflection: build the eval before the model. |

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active on Greenhouse 2026-05-16 | Positive |
| Apply button | WebFetch confirmed application form live | Positive |
| Tech specificity | Names LLM frameworks, agentic, backend architecture, product mindset | Positive |
| Comp transparency | Explicit $180K-$320K | Positive |
| Requirements realism | Mid-to-senior IC reasonable; range matches stage | Positive |
| Company hiring signals | Hightouch hiring across multiple SE/AI roles consistently | Positive |
| Reposting | Hightouch frequently posts AI/SE roles — Software Engineer AI Agents variant is new vs prior SE roles | Neutral (distinct from #340 marketing-DS variant) |

**Context Notes:** Hightouch has been actively building agentic data products (multiple AI Strategy Consultant, AI Solutions Engineer, and now SWE AI Agents postings). This SWE variant is the engineering-heavy track and distinct from the customer-facing solutions roles. Real, active opening.

## H) Draft Application Answers (score < 4.5 — informational only)

**Why Hightouch?**
> Data agents are the right shape for production AI right now — they sit on top of data that customers already trust, and the agent's job is to make it actionable. Hightouch's CDP foundation is the right wedge. My 2.5 years at Progress building agentic + RAG + ML serving in healthcare (a domain where data trust is non-negotiable) translates directly: same patterns, different vertical.

**Most relevant project:**
> Agentic Healthcare Claims Processing pipeline. Five stages with schema-validated JSON contracts, RAG-grounded code lookups against vector-indexed policy docs, and explainable risk scores with audit-ready reasoning traces. Same agent shape as a marketing/analytics data agent: schema, retrieval, structured outputs, eval framework.

**Authorization:**
> US-based (Kent, OH), F-1 OPT, open to sponsorship. Remote-NA ready immediately.

---

## Keywords extraídas

Software Engineer AI Agents, Hightouch, composable CDP, data agents, agentic workflows, LLM applications, backend architecture, RAG, vector search, Python, FastAPI, Docker, SQL, ETL, evaluation frameworks, structured outputs, product-minded, remote North America
