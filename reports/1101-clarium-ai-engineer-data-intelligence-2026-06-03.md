# Evaluación: Clarium — AI Engineer, Data Intelligence

**Fecha:** 2026-06-03
**Arquetipo:** Applied AI / LLM Engineer (with strong ML/data engineering overlap)
**Score:** 4.3/5
**URL:** https://jobs.ashbyhq.com/clarium/83332693-7e11-41db-8b62-8225cb818abf
**Legitimacy:** High Confidence
**Location:** Remote/US (NYC co-working available; distributed team across time zones)
**Region:** US
**PDF:** output/2026-06-03/cv-deepak-mallampati-clarium-ai-engineer-data-intelligence-2026-06-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer — early-career hire on senior Data Products team building a master-data enrichment pipeline that blends LLMs + deterministic ML + production engineering. |
| Domain | Healthcare supply-chain RegTech / Data Intelligence. Founded 2020, $43M raised (Series A led by Northzone, with General Catalyst, Kaiser Permanente Ventures, etc.). Clients include Yale New Haven Health, Stanford, Geisinger, Cleveland Clinic, Kaiser Permanente. |
| Function | Build & own classification + entity-resolution workflows; build eval harnesses (Braintrust); write production Python/SQL; audit data quality; ship root-cause fixes. |
| Seniority | **Junior / early-career** explicitly — "first junior hire on the team". Comfort with ambiguity expected. |
| Remote | **Fully remote, US** with optional NYC co-working space. Distributed across multiple time zones. |
| Comp | **$150K – $180K base + ISOs + benefits** (medical/vision/dental + 401K + unlimited PTO). |
| TL;DR | Near-ideal fit. Junior seniority on a senior team, fully-remote US, comp band aligned with mid-IC AI roles, and the stack (Python, SQL, Postgres, classification, entity resolution, LLM-based pipelines, eval frameworks like Braintrust) maps 1:1 to Deepak's Progress + Vanguard + Kent State work. Healthcare-adjacent (supply chain) extends his regulated-healthcare background. |

## B) Match con CV

| Requisito JD | Línea CV | Mapping |
|--------------|----------|---------|
| "Design and own classification and entity resolution workflows that combine deterministic logic and LLMs" | Progress — agentic LLM systems on conductor–subagent framework; RAG with cross-encoder re-rank; Emerson — BERT/RoBERTa NER (89% F1); Kent State — record-linkage / entity-resolution privacy work | **Strong** — exactly the LLM + deterministic blend |
| "Build and operate evaluation harnesses, label sets, and regression suites" (Braintrust) | Progress — structured LLM evaluation framework with RAGAS + BERTScore + custom domain metrics + latency dashboards; Vanguard — internal eval datasets +27% | **Strong** — direct eval-framework experience |
| "Write production Python and SQL; majority of time in code" | Python across all roles; PostgreSQL/Redis; FastAPI APIs; Vanguard 12 APIs/microservices p95 1.5s → 800ms | **Strong** |
| "Strong SQL — complex joins, window functions, performance tuning, data modeling" | PostgreSQL + Data Engineering skills (Spark, Databricks, Kafka, Pandas) | **Strong** (CV-listed) |
| "Analyze complex datasets using statistics and ML to surface actionable insights" | Kent State privacy–utility benchmarking (6 configs, composite scoring); Emerson regression/classification on operational pipeline-storage data | **Strong** |
| "Proactively audit data for quality issues … treat silent bugs as real failures" | Kent State quantified utility cost (0.90 → 0.19) under aggressive DP; Privacy-pipeline re-identification 3.38% → 0.32% | **Strong** — quantified data-quality discipline |
| Nice: "LLM integrations, prompt evaluation, classification at scale" | Vanguard prompt optimization +27%; Progress agentic + RAG; MangaLens shipped LLM-translation Chrome extension across 29+ sites | **Strong** |
| Nice: "Eval frameworks (Braintrust, Promptfoo, equivalent)" | RAGAS, BERTScore, custom metrics — equivalent class of tooling | **Moderate** (Braintrust not named; transferable) |
| Nice: "Prior work in healthcare, supply chain, or another domain where data quality has direct operational consequences" | Progress healthcare corpora; HIPAA exposure; Vanguard financial-services data | **Strong** (healthcare + regulated data) |
| Need: "Production observability, CI/CD" | Jenkins + Azure DevOps + MLflow + W&B + model-monitoring dashboards | **Strong** |
| Nice: "Temporal, Snowflake, AWS, Sigma" | AWS (EC2/S3/Lambda/Bedrock/SageMaker); Snowflake not on CV but Spark/Databricks transferable | **Moderate** (AWS yes; Temporal/Sigma no) |

### Gaps & Mitigation

1. **Braintrust specifically** — not on CV. *Mitigation:* mention RAGAS + custom-metric framework as functionally equivalent; offer a fast on-ramp ("Braintrust is the production cousin of what I built at Progress").
2. **Temporal / Sigma** — not on CV. *Mitigation:* "Nice-to-have", not a blocker; cite Spark/Databricks/Airflow-style orchestration experience.
3. **Snowflake** — not on CV. *Mitigation:* PostgreSQL + Databricks transferable; demonstrate willingness to learn warehouse-specific SQL.

## C) Nivel y Estrategia

**JD nivel:** Junior / early-career hire explicitly. "First junior hire on the team."
**Deepak nivel para arquetipo:** Mid-IC (MS + 3 production AI roles) — comfortably matches or slightly over-qualifies.

**Vender mid-IC en tono junior:**
- Lead with: "I built and operationalized the exact stack you're hiring for — Python/SQL pipelines with LLM + deterministic logic, eval harnesses with custom domain metrics, and entity-resolution / record-linkage work."
- Emphasize: ownership without hand-holding (career-ops portfolio + Kent State paper authorship + Progress fault-tolerant infra reducing failed runs 60%).
- Frame the "first junior hire" angle as **leverage**: short feedback loops + real stakes + ownership match Deepak's strongest growth conditions.

**Si me downlevelan / compress band:** Comp band $150-180K is already at mid-IC ceiling — no real downlevel risk. Negotiate at $170K+ given multi-year production experience.

## D) Comp y Demanda

| Métrica | Valor | Fuente |
|---------|-------|--------|
| Target base | $150K – $180K | JD explicit |
| Equity | ISOs proportionate to salary | JD explicit |
| Healthcare RegTech AI Engineer (US remote, mid-IC) market range | $140K – $200K base | Levels.fyi / public Series-A startup bands |
| Healthcare-adjacent AI engineering demand | Sustained-high (post-2024 health-tech AI investment wave) | General market context |

**Reputation note:** Clarium ($43M Series A, Northzone-led) is well-capitalized for an early-stage Series A. Customer roster (Yale, Stanford, Kaiser) is premium. ISOs at this stage with Northzone-led financing have material upside if the company executes.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "AI/ML Engineer with 4+ years building production-grade Generative AI and LLM systems for banking and regulated enterprises…" | "AI/ML Engineer with 4+ years shipping production data + LLM pipelines for regulated domains (healthcare, financial services). Built classification, entity-resolution, and evaluation harnesses (RAGAS/BERTScore/custom metrics) on top of PostgreSQL + Python at Progress and Vanguard. Quantified data-quality outcomes: hallucination reduction 40%, re-identification risk 3.38% → 0.32%, failed-pipeline runs −60%." | Mirrors JD language: "classification + entity resolution + eval harnesses + production data quality." |
| 2 | Skills order | Generative AI first | Move "Data Engineering" + "Python / SQL / PostgreSQL" + "Eval frameworks" higher; keep GenAI section but reorder bullets so LLM-integration sits next to classification/dedup terminology | JD asks for SQL + production Python BEFORE LLM specialization |
| 3 | Progress bullets | RAG + agentic + privacy + automation infra + LLM eval + inference cost | Lead with **LLM evaluation framework (RAGAS + BERTScore + custom domain metrics + dashboards)** and **fault-tolerant automation infra (−60% failed runs)** — these mirror Braintrust + data-quality JD requirements | JD's first two bullets are eval harnesses + production reliability |
| 4 | Kent State bullets | Privacy pipeline + utility scoring + Qwen3 fine-tuning | Lead with **record-linkage risk 3.38% → 0.32%** + **composite privacy-utility scoring framework (6 configs)** — these read as entity-resolution + classification + eval at scale | Direct map to JD's "classification, ranking, deduplication" + "evaluation harnesses" |
| 5 | Vanguard bullets | 25+ agents + prompt opt +27% + safeguards −42% + 12 APIs + 800ms p95 + 100K req/day | Re-anchor on **prompt evaluation (+27% on internal eval datasets)** + **12 APIs / SLA-friendly latency** | "Prompt evaluation … at scale" is JD nice-to-have; SLA latency aligns with "Production observability" need |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | "Design classification + entity resolution combining deterministic + LLM logic" | **Progress agentic RAG with cross-encoder re-rank** | Healthcare doc corpus with noisy queries | Reduce hallucination + lift answer relevance | Built conductor–subagent orchestration + dense retrieval + cross-encoder re-rank + classification gates | 40% hallucination reduction; 92% precision on regulatory docs | "I'd add explicit confidence thresholds earlier to short-circuit low-quality retrievals before the LLM ever sees them." |
| 2 | "Build evaluation harnesses, label sets, regression suites" | **Progress LLM eval framework** | Need pre-deploy benchmarks | Standardize eval across model iterations | RAGAS + BERTScore + custom domain metrics + latency dashboards | Surfaced regressions before release; informed every model-swap decision | "Custom domain metrics paid off more than off-the-shelf; I'd start there next time." |
| 3 | "Audit data for quality issues; ship root-cause fixes" | **Kent State privacy-utility scoring** | Six anonymization configurations with unclear tradeoffs | Quantify privacy + utility on one axis | Composite scoring framework benchmarking 6 configs | Identified k=3/l=2 as optimal (0.70 priv / 0.71 util); quantified DP's steep cost | "I learned 'silent' utility loss (attribute error 5.8 → 38.5) is more dangerous than visible failures." |
| 4 | "Production Python and SQL" | **Vanguard 12 APIs + latency optimization** | Backend services across 20+ teams | Sustain SLA at scale | FastAPI + caching + model routing | p95 1.5s → 800ms; 100K req/day | "Routing logic should be config-driven, not hardcoded — I'd rebuild it on a feature-flag system." |
| 5 | "Comfort in ambiguity; scope a problem, plan, execute without hand-holding" | **career-ops autonomous job-search pipeline** | No spec, no PM, no design partner | Build a working overnight automation | Multi-mode pipeline + scan + PDF gen + evaluation + tracker, all in `.mjs` | Shipped + uses it daily | "Scoping the data contract upfront was the difference between iteration speed and rework." |
| 6 | "Genuine, non-negotiable commitment to data quality" | **Privacy-preserving pipeline re-identification risk** | Clinical data with re-identification risk | Quantify + reduce risk without losing utility | k-anonymity + l-diversity + DP + Random Forest baseline | Re-identification 3.38% → 0.32%; unique exposure 0.94% → 0%; AUC 0.689 vs 0.696 (99% retention) | "Data-quality work pays compounding interest — the framework I built is reusable for any sensitive-data project." |

**Case study to lead with:** Progress LLM evaluation framework + Kent State privacy-utility scoring — both demonstrate eval-harness building + quantified data-quality discipline (the JD's two opening bullets).

**Red-flag Qs to anticipate:**
- "Why early-career hire when you've been at Vanguard?" → "I want depth on data-intelligence problems with senior teammates; Clarium's first-junior-hire framing matches exactly the growth conditions I performed best in."
- "Do you know Braintrust specifically?" → "No, but I built the same primitives at Progress with RAGAS/BERTScore/custom metrics — I'd ramp in days, not weeks."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active Ashby JD with intact apply flow; description specifies team composition + tooling (Braintrust, Temporal, Snowflake, Sigma, Postgres) | Positive |
| Description quality | Names specific stack, tools, frameworks (Braintrust by name); explicit comp band $150-180K; clear 6/12-month scope; equity terms named (ISO); team is described concretely ("first junior hire on the team") | Positive |
| Company hiring signals | $43M raised, Series A led by Northzone (April 2024 round per public PR); customer roster (Yale, Stanford, Kaiser) consistent with active growth | Positive |
| Reposting detection | First time this exact URL appears in scan history; Clarium is a brand-new entry | Positive |
| Role market context | "First junior hire on a senior team" is a common, legitimate hiring pattern for Series A teams scaling data orgs; comp band aligns with NYC-remote AI mid-IC | Positive |

**Context Notes:** Comp band is unusually high for "first junior hire" framing — Clarium is positioning to attract early-career engineers with mid-IC depth. The JD's emphasis on production code over notebooks suggests they've been burned by ML-research-flavored junior hires before.

## H) Draft Application Answers

(Score 4.3/5 — under 4.5 threshold; brief answers below for use if needed.)

**"Why Clarium?"**
> "Clarium sits at the intersection of three things I've spent four years building toward: data-intelligence pipelines that combine deterministic logic with LLMs, healthcare-adjacent regulated data work, and eval-driven engineering discipline. At Progress I built the exact stack you're describing — RAGAS + custom domain metrics + cross-encoder re-rank over healthcare corpora — and at Vanguard I shipped 12 APIs powering 100K requests/day. The 'first junior hire on a senior team' framing is the growth condition I've performed best in, and I'd treat the master-data enrichment pipeline as a place to compound rather than just learn."

**"What's a non-obvious data-quality bug you caught?"**
> "At Kent State on the privacy-preserving pipeline, I noticed that aggressive differential privacy was silently destroying attribute fidelity even though predictive AUC held. Visible metric (AUC 0.689 vs baseline 0.696) said 'fine' but attribute error spiked from 5.8 to 38.5 at ε=0.1. I built a composite privacy-utility score that surfaced this so the team picked k=3/l=2 instead. Silent failures are more dangerous than loud ones."

---

## Keywords extraídas

classification, entity resolution, deduplication, LLM, RAG, prompt evaluation, Braintrust, Promptfoo, evaluation harness, regression suite, Python, SQL, PostgreSQL, production observability, CI/CD, healthcare, supply chain, data quality, statistics, ML, multimodal, vector search, semantic search, Snowflake, Temporal, AWS, Sigma, master data enrichment, agentic systems
