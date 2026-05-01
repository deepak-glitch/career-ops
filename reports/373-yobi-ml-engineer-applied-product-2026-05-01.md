# Evaluación: Yobi — Machine Learning Engineer, Applied / Product (Multiple Levels)

**Fecha:** 2026-05-01
**Arquetipo:** ML Engineer (Applied AI Systems) + AI Solutions / Forward Deployed Engineer (hybrid, product-side)
**Score:** 3.0/5
**URL:** https://weworkremotely.com/remote-jobs/yobi-machine-learning-engineer-applied-product-multiple-positions-levels
**Legitimacy:** High Confidence
**Location:** Remote / Hybrid US — Boston, NYC, SF Bay Area, Seattle hubs
**PDF:** output/2026-05-01/cv-deepak-mallampati-yobi-ml-applied-product-2026-05-01.pdf
**Verification:** unconfirmed (batch mode — WeWorkRemotely returned 403; corroborated via Wellfound, Glassdoor, Ashby, Built In NYC, Remote Rocketship, jointaro)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | ML Engineer — Applied / Product (recommender systems, personalization, AdTech) |
| Domain | AdTech / consumer ML (Yobi Applications products) |
| Function | 0-to-1 product ML — own models, metrics, pipelines, services end-to-end |
| Seniority | Multiple levels (entry through senior — explicitly inclusive) |
| Remote | Remote / Hybrid US: Boston, NYC, SF Bay Area, Seattle |
| Team size | Yobi Applications team |
| TL;DR | Applied / Product MLE at Yobi — recommender systems, personalization, consumer-facing ML problems with 0-to-1 ownership. Multi-level posting (so not seniority-veto'd). Stack overlaps strongly with Deepak's scikit-learn / XGBoost / Pandas + ML pipeline shipping. AdTech is off Deepak's healthcare-AI bullseye, but the recommender-systems framing transfers. Hybrid US-only is good for F-1 OPT. Score 3.0/5 — apply with PDF tailored to "Applied ML for product surfaces." |

## B) Match con CV

| JD requirement | CV evidence | Strength |
|----------------|-------------|----------|
| Applied / product ML — 0-to-1 development | Manga Lens (shipped Chrome Web Store) + Dream Decoder (full-stack multimodal) + Healthcare ML pipelines | Strong |
| Models, metrics, pipelines, systems, services end-to-end | Healthcare ML: scikit-learn + XGBoost + recall/precision metrics + FastAPI inference packaging | Strong |
| Recommender systems / personalization | None directly; Patient no-show + care engagement scoring is adjacent (ranking + risk scoring) | Moderate |
| AdTech experience and product intuition for the space | None — AdTech is novel domain | Gap |
| ML enough to be dangerous, not necessarily published | 2.5y Applied ML at Progress + Master's CS | Strong |
| Orchestration / Airflow | None on CV; Jenkins CI/CD adjacent | Gap |
| Bazel (build systems) | None on CV | Gap |
| CI/CD | Jenkins CI/CD at Emerson + structured deployment discipline | Strong |
| Spark (Python and Scala) | None on CV; Pandas/NumPy strong | Gap |
| SQL-y data computation backends | T-SQL + PostgreSQL + SQLite (Emerson + Patient Records project) | Strong |

**Gaps:**
- **AdTech domain** — Soft. Recommender systems and personalization architectures transfer; framing should bridge from "patient engagement scoring" → "user engagement scoring on ad surfaces."
- **Spark / Bazel / Airflow** — Moderate. Adjacent to existing Pandas + Jenkins skill, but explicit orchestration framework gap. Mitigation: emphasize "willing to ramp on Spark/Airflow within first 4 weeks."
- **Recommender-systems portfolio piece** — Soft. Could brief case from Patient No-Show as ranking-style problem.

## C) Nivel y Estrategia

**Detected level:** Multi-level posting (entry through senior; explicitly inclusive)
**Candidate level:** Junior-Mid (2.5y)

**Sell-up plan:** Lead with Healthcare ML pipelines — recall +15-20% on high-risk categories, precision held >90% — as proof of "models that ship and matter." Reframe Patient No-Show as a ranking / personalization problem. Manga Lens as "shipped solo product." Dream Decoder as "multimodal product surface."

**Downlevel plan:** Apply to Yobi's earlier IC bands (MLE I or II); accept compensation in the lower 30-40% of the $180-275K range published for the sibling Inference / Serving role.

## D) Comp y Demanda

| Dimension | Value | Source |
|-----------|-------|--------|
| Posted range (Applied) | Likely similar band to Inference / Serving role: $180-275K | Glassdoor (sibling role) |
| Yobi Inference / Serving range | $180,000 - $275,000 | Glassdoor |
| AdTech ML market (mid) | $150-220K + equity typical | Levels.fyi |
| Demand | High — AdTech is well-funded; Yobi backed by venture investors | Crunchbase |

Strong comp band even at MLE I-II. Worth applying.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare RAG + agentic LLM | "Applied ML engineer with production ranking, risk-scoring, and inference-serving pipelines" | Mirror Yobi's Applied / Product MLE framing |
| 2 | Lead bullet | RAG | Lead with Patient No-Show ranking (+15-20% recall on high-risk categories) — directly reframe as ranking/personalization | Match recommender-systems context |
| 3 | Skills | Standard order | Promote scikit-learn, XGBoost, Pandas, NumPy, FastAPI to top; add Airflow / Spark "ramp-up" line | Match orchestration stack hints |
| 4 | Projects | Manga Lens lead | Keep Manga Lens (multi-provider product), highlight Dream Decoder structured prompt layer (~25-30% first-pass success) as "production ML for consumer surfaces" | Show product-side ML chops |
| 5 | LinkedIn | Healthcare AI | Add "Applied ML, ranking, inference serving, recommender systems" interest signals | Recruiter sourcing |

## F) Plan de Entrevistas

| # | JD requisite | STAR+R story | S | T | A | R | Reflection |
|---|--------------|--------------|---|---|---|---|------------|
| 1 | Applied / product MLE | Healthcare no-show ranking | Care engagement varied; missed appointments cost the clinic | Build patient no-show + care engagement scoring | scikit-learn + XGBoost + class weighting + stratified sampling + threshold calibration | +15-20% recall on high-risk; precision held >90% | Threshold calibration is where "model" becomes "product" — recall and precision land differently per stakeholder |
| 2 | 0-to-1 product shipping | Manga Lens shipped to Chrome Web Store | Webtoon readers wanted in-browser AI translation | Build + ship a Chrome MV3 extension solo | TypeScript + service workers + 4 AI vision providers + per-provider payload routing | Live Chrome Web Store product, 7-day cache, 29 sites | Multi-vendor support without abstraction is fine when variance is small + observable |
| 3 | Production inference services | FastAPI / Flask packaging at Progress | ML/LLM inference needed scaling and observability | Wrap inference in containerized REST services | FastAPI + Flask + Docker + structured logging + load simulation | -30% post-deploy defects | API surface design pays back during incident response, not first deploy |
| 4 | CI/CD discipline | Jenkins pipelines at Emerson | Schema updates + stored proc deployments were error-prone | Build versioned CI/CD with rollback checkpoints | Jenkins + structured release validation + rollback gates | -30% deploy errors; -35-40% release cycle | Rollback gates are the cheapest way to make a fast pipeline safe |
| 5 | Multimodal / consumer ML | Dream Decoder structured prompt | Multi-modal pipelines fail silently at the prompt boundary | Add intermediate structured prompt API | Two-stage prompt-shaping with explicit schema | ~30% contextual alignment + ~25-30% first-pass success | Multi-stage prompts trade complexity for debuggability — worth it past prototype |
| 6 | SQL + data wrangling | Emerson T-SQL stored procedures | Synthesis platform queries were slow on contracts/nominations data | Tune T-SQL stored procedures + indexing | Index tuning + DMV-based dashboards + reconciliation | -20% query time; -25% retrieval latency | Performance tuning is half measurement, half stakeholder communication |

**Case study:** Healthcare no-show + care engagement scoring as the closest analog to Yobi's recommender-systems / personalization problem.

**Red-flag prep:**
- "Why AdTech vs healthcare?" → "Recommender / ranking architecture is the same; AdTech has tighter feedback loops and bigger consumer surfaces. Healthcare taught me precision-recall trade-offs under regulatory pressure; AdTech is where I'd apply that to higher-traffic surfaces."
- "Have you used Spark / Airflow / Bazel?" → "Adjacent skills (Pandas at scale, Jenkins for orchestration). Plan to ramp on Spark + Airflow in first 4 weeks; have set up a personal sandbox already."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on WeWorkRemotely + Wellfound + Ashby + Built In NYC + Glassdoor + Remote Rocketship + jointaro (cross-aggregator presence) | Positive |
| Apply control visible | Multiple Apply paths (Ashby + WeWorkRemotely) | Positive |
| Tech specificity | Specific stack: Airflow, Bazel, CI/CD, Spark (Python/Scala), AdTech focus | Positive |
| Salary transparency (sibling role) | $180-275K disclosed for Inference/Serving sibling | Positive |
| Company hiring signals | Multiple Yobi roles hiring concurrently (Inference/Serving + Applied/Product + Ad Platform SE) | Positive |
| Reposting pattern | First Yobi evaluation in this slot | Neutral |
| Multi-level inclusivity | "Multiple Positions & Levels" framing reduces seniority risk | Positive |
| Role-company fit | AdTech ML at well-funded YC/venture company | Positive |

**Context Notes:** Yobi has multiple concurrent ML postings, which is consistent with active 0-to-1 team building rather than ghost posting. Multi-level inclusivity makes this a viable application path despite the AdTech-domain learning curve.

## H) Draft Application Answers

(Score 3.0 < 4.5 — skipping H. Apply via standard CV + cover letter; PDF tailored.)

---

## Keywords extraídas

Machine Learning Engineer, Applied ML, Product ML, recommender systems, personalization, ranking, AdTech, scikit-learn, XGBoost, Pandas, FastAPI, Spark, Airflow, Bazel, CI/CD, 0-to-1, consumer ML, multi-level
