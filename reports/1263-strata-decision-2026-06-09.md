# Evaluación: Strata Decision Technology — Applied Machine Learning Engineer

**Fecha:** 2026-06-09
**Arquetipo:** ML Engineer (Applied AI Systems)
**Score:** 3.5/5
**URL:** https://job-boards.greenhouse.io/stratacareers/jobs/7452181003
**Legitimacy:** High Confidence
**Location:** Chicago, IL — Hybrid (2 days/wk on-site; remote candidates considered if willing to relocate within 40 mi)
**Region:** US
**PDF:** output/2026-06-09/cv-deepak-mallampati-strata-decision-2026-06-09.pdf

---

## A) Resumen del Rol

| | |
|---|---|
| Arquetipo | ML Engineer (Applied) — research-to-production |
| Domain | Healthcare analytics / financial operations (hospital systems) |
| Function | Translate research (arXiv) → production ML models |
| Seniority | Mid IC (years not explicit; weighted by depth) |
| Remote | Chicago hybrid 2d/wk (relocate within 40 mi) |
| Comp | $117K–$150K |
| Tech | Python, PyTorch, NumPy, Pandas, Polars, PyMC, AWS, Snowflake, Docker |
| TL;DR | Healthcare-fintech platform hiring an applied ML engineer to take regression/embedding/causal-inference models from paper to production. |

## B) Match con CV

| Req | CV evidence | Match |
|-----|-------------|-------|
| Python ML implementation | PyTorch/TensorFlow; production ML at Progress, KSU, Emerson | ✅ |
| Regression + classification | Emerson supervised regression/classification on operational data | ✅ |
| Embeddings | RAG dense retrieval + cross-encoder re-ranking; FAISS/Pinecone/Weaviate | ✅ |
| Research → production | KSU privacy-ML pipeline + IEEE paper; QLoRA fine-tune | ✅ |
| Healthcare domain | Healthcare RAG (Progress) + clinical readmission ML (KSU) | ✅ |
| AWS, Docker | AWS (Bedrock/SageMaker/S3/Lambda), Docker, Terraform | ✅ |
| Causal inference / PyMC | Not in CV (probabilistic privacy work is adjacent) | △ |
| Snowflake / Polars | Not in CV (Spark/Databricks/Pandas analog) | △ |

**Gaps:**
1. **Causal inference / PyMC** — soft. Mitigate: frame KSU differential-privacy / Bayesian-ε work + privacy–utility scoring as probabilistic modeling.
2. **Snowflake / Polars** — soft tooling. Mitigate: Spark/Databricks + Pandas transfer directly.
3. **Chicago hybrid relocation** — Deepak in Kent OH on F-1 OPT. Mitigate: state "open to Chicago relocation, F-1 OPT (authorized now)".

## C) Nivel y Estrategia

- JD level: mid applied-ML IC. Deepak ~4y → on-band.
- Sell: "I ship research into production" — KSU IEEE paper → working privacy pipeline retaining 99% baseline AUC; QLoRA fine-tune on H100.
- Comp band ($117–150K) is below market for AI/ML; anchor at top of band given healthcare + production depth.

## D) Comp y Demanda

| Metric | Value | Source |
|--------|-------|--------|
| Posted band | $117–150K | JD direct |
| Market Applied ML (Chicago) | $130–175K | Glassdoor/Levels 2026 |
| Healthcare-analytics ML demand | Steady (hospital cost/ops AI) | qualitative |
| Risk | Hybrid mandate + below-market band | qualitative |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | "Applied ML engineer translating research into production for regulated healthcare" | mirrors JD |
| 2 | Skills | Surface regression, embeddings, PyTorch, AWS, Pandas first | direct echo |
| 3 | KSU bullet | Lead with research→production + privacy/Bayesian framing (causal proxy) | covers PyMC gap |
| 4 | Emerson | Foreground regression/classification on operational data | regression req |
| 5 | Footer | "Open to Chicago relocation; F-1 OPT, authorized now" | location clarity |

## F) Plan de Entrevistas

| # | Req | Story | S | T | A | R | Reflection |
|---|-----|-------|---|---|---|---|------------|
| 1 | Research → production | KSU privacy-ML pipeline | Sensitive clinical data, re-ID risk | Anonymize w/o losing utility | k-anon+l-div+DP across 4 ε | Re-ID 3.38%→0.32%, kept 99% AUC | Quantify privacy–utility trade-off explicitly |
| 2 | Embeddings/retrieval | Progress healthcare RAG | Domain hallucination | Lift relevance | Dense + cross-encoder re-rank | Material hallucination drop, 92% precision | Re-ranking is the lever |
| 3 | Regression at scale | Emerson operational ML | Equipment-failure prediction | Predictive models | Feature eng + supervised regression/classification | Production-ready pipelines | Clean features beat fancy models |
| 4 | Production discipline | Progress eval framework | Silent model regressions | Catch pre-deploy | RAGAS+BERTScore + latency dashboards | Regressions surfaced before release | Observability from day 1 |

**Case study:** KSU privacy-ML pipeline (research→prod) + MangaLens (shipped).

**Red flags:** "PyMC/causal depth?" → "Bayesian ε-sweep + privacy–utility scoring at KSU; ramp on PyMC in weeks."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Live on Greenhouse, active form | Positive |
| Comp transparent | $117–150K disclosed | Positive |
| Tech specificity | Strong — names Polars, PyMC, Snowflake, causal inference | Positive |
| Company | Strata Decision — established healthcare-fintech (Roper-owned) | Positive |
| Reposting | None in scan-history | Positive |

**Assessment:** **High Confidence** — established employer, specific JD, disclosed comp, active apply.

## H) Draft Application Answers

**Why this role?** "I take ML from paper to production — at KSU I implemented a privacy-preserving clinical pipeline (re-ID risk 3.38%→0.32%, 99% of baseline AUC retained) and wrote it up IEEE-style; at Progress I run healthcare RAG with cross-encoder re-ranking at 92% precision. Strata's research-to-production mandate in healthcare analytics is exactly that loop."
**Location:** "Open to Chicago relocation. F-1 OPT, authorized to work in the US now; sponsorship needed longer-term."

## Keywords extraídas

Applied ML, regression, embeddings, causal inference, optimization, PyTorch, NumPy, Pandas, Polars, PyMC, AWS, Snowflake, Docker, healthcare analytics, research to production, Chicago
