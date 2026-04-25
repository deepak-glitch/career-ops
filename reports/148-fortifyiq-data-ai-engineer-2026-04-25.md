# Evaluación: FortifyIQ — Data & AI Engineer (Remote)

**Fecha:** 2026-04-25
**Arquetipo:** ML Engineer (Applied AI Systems) + AI Platform / MLOps Engineer
**Score:** 3.3/5
**URL:** https://job-boards.greenhouse.io/fortifyiq/jobs/4661408005
**Legitimacy:** Proceed with Caution
**Location:** Remote (verify time-zone in screen)
**PDF:** output/2026-04-25/cv-deepak-mallampati-fortifyiq-data-ai-engineer-2026-04-25.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | ML Engineer (data pipelines + applied AI for semiconductor industry) |
| Domain | Semiconductor — silicon design, verification, manufacturing analytics |
| Function | Build data pipelines, train predictive models (yield/performance/anomaly), automate analytics, dashboards |
| Seniority | 3–5 yrs explicitly required (Deepak 2.5 = stretch) |
| Remote | Remote (no specific TZ stated in fetched JD) |
| Team | Collaborative w/ design + software teams |
| Location | **Remote — verify time zone in screen** |
| Comp | Not stated — query in screen |
| Posting Signals | Specific tools (Python, TF/PyTorch/Sklearn, Pandas, Airflow/Spark); domain-specific (semiconductor) |
| TL;DR | **Mixed fit.** Tech stack matches well (Python, PyTorch/TF/Sklearn, Pandas, SQL, Airflow). Predictive ML for yield/anomaly maps to Deepak's no-show / care-engagement risk modeling. But semiconductor is foreign domain — no proof point in cv.md. 3–5 yrs floor is stretch (Deepak 2.5). No comp band stated = unknown. Apply if open to ramping into chip-design analytics; otherwise hold. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Python + ML frameworks (TF/PyTorch/Sklearn) | **STRONG** | cv.md L12 Python; L14 scikit-learn, XGBoost, PyTorch, Hugging Face |
| Pandas, NumPy, SQL data manipulation | **STRONG** | cv.md L16 Pandas, NumPy; L29 EHR preprocessing pipelines, dataset reliability >98% |
| Airflow / Spark workflow orchestration | **MEDIUM** | cv.md L18 CI/CD, REST APIs; no explicit Airflow ship — Jenkins discipline transfers |
| Data engineering 3-5 yrs | **MEDIUM (stretch)** | cv.md 2.5 yrs Progress + intern contexts; 2.5 < 3 floor |
| ML model training (predictive: yield, performance, anomaly) | **STRONG** | cv.md L27 patient no-show + care engagement scoring + 15-20% recall lift on high-risk; XGBoost + threshold calibration |
| Pipeline automation + integration into engineering processes | **STRONG** | cv.md L28 packaged ML/LLM as FastAPI/Flask; L18 CI/CD pipelines |
| Dashboards + visualization | **STRONG** | cv.md L37 SQL Server DMVs + Grafana dashboards |
| Document code/models/processes | **STRONG** | cv.md L30 evaluation audit trails, system-limitation docs, lineage |
| BS in EE/CS | **STRONG** | cv.md MS CS Kent State; BTech CS KL University |
| Semiconductor domain | **WEAK** | No proof point — adjacent via data-engineering discipline only |
| Statistical modeling | **STRONG** | cv.md L27 class weighting, stratified sampling, threshold calibration; walk-forward validation |
| Cloud (AWS/Azure/GCP) | **MEDIUM** | cv.md L17 cloud-ready deployment; no explicit cloud ship |
| Git proficiency, MLOps familiarity | **STRONG** | cv.md L17 MLOps/LLMOps; L18 CI/CD, observability |

**Gaps:**
1. **Semiconductor domain knowledge** — no prior chip-design/verification work. Mitigation: ML pipeline discipline transfers across regulated domains (HIPAA → semiconductor); explicitly offer to ramp on chip terminology.
2. **3+ yrs floor** — 0.5 yr stretch. Mitigation: MS + production ML shipped > raw years; can offer paid trial 2 weeks.
3. **Airflow/Spark explicit ship** — adjacent. Mitigation: Jenkins CI/CD orchestration discipline transfers; FastAPI + Docker patterns are workflow-orchestration-adjacent.
4. **No comp data in JD** — unknown. Risk: may be below Deepak's $100K floor for fully-remote bands.

## C) Nivel y Estrategia

- **JD:** 3–5 yrs data eng / applied AI. Deepak at 2.5 = stretch.
- **Sell:** "Predictive ML at production scale — patient no-show risk, care engagement, fraud risk; +15–20% recall on high-risk cohorts via class weighting + threshold calibration. Pipeline discipline (Pandas, Docker, CI/CD, Grafana). MS CS, F-1 OPT, US-based."
- **If downleveled:** Accept if comp ≥ $100K + 6-month review; decline if < $90K (semiconductor + remote should not be a discount band).

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| FortifyIQ Data & AI Engineer | Not stated | JD silent |
| Remote US Data Engineer 3-5 yrs | $115K–$160K | Levels.fyi remote bands |
| Remote US ML Engineer 3-5 yrs | $130K–$180K | Levels.fyi remote bands |
| Deepak target | $100K–$130K | config/profile.yml |
| Comp risk | Unknown — could be below floor for non-tech vertical | Inference |

**Comp opacity is the biggest red flag** — ask in screen before investing time.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI / ML engineer (2.5+ yrs + MS CS) shipping production predictive ML pipelines: patient no-show risk + care engagement (+15-20% recall on high-risk), agentic workflows (>30% hallucination cut), and FastAPI + Docker packaging. Strong data-engineering discipline (Pandas, SQL, Grafana) on regulated production data." | Lead w/ predictive-ML angle (closest to FortifyIQ's yield/anomaly framing) |
| 2 | Competencies | Predictive ML, scikit-learn / XGBoost / PyTorch, Pandas / NumPy / SQL, Pipeline Automation, FastAPI / Docker, Dashboards (Grafana), Audit Trails, MLOps | JD checklist |
| 3 | Experience | Progress first (predictive ML + recall lift on high-risk); Emerson second (T-SQL + Jenkins CI/CD pipelines + Grafana dashboards) | Direct analog to "automate data analysis tasks + integrate into engineering processes" |
| 4 | Projects | Agentic Claims (multi-agent + RAG-grounded validation) — anomaly + risk scoring analog; Drowsiness Detection — production CV anomaly detection | Closest cross-vertical analogs |
| 5 | Location line | "Kent, OH (ET). Remote-friendly. F-1 OPT, sponsorship welcomed." | TZ + work auth |

## F) Plan de Entrevistas

| # | JD Requirement | STAR+R Story | Reflection |
|---|----------------|--------------|------------|
| 1 | Predictive ML model training (yield/anomaly) | S: Progress patient no-show risk model. T: improve recall on high-risk cohorts. A: XGBoost + class weighting + stratified sampling + threshold calibration. R: +15–20% recall on high-risk, precision held >90%. Reflection: threshold + class-weight choice matters more than model selection on imbalanced production data. |
| 2 | Build + maintain data pipelines | S: Progress EHR preprocessing pipeline. T: clean + transform large EHR + appointment + ticket datasets. A: Pandas + NumPy preprocessing; QA gates; documented schema; lineage. R: dataset reliability >98%, downstream model instability -40%. Reflection: dataset reliability is a contract problem, not a code problem. |
| 3 | Automate recurring analysis + integrate into engineering | S: Emerson Jenkins CI/CD for SQL deploys. T: cut deploy errors + cycle time. A: schema versioning + rollback checkpoints + structured release validation. R: deploy errors -30%, release cycle -35-40%. Reflection: automation pays off when it adds rollback + observability, not just forward speed. |
| 4 | Dashboards + visualization for reporting | S: Emerson SQL Server DMVs + Grafana. T: surface long-running queries, deadlocks, CPU/IO contention. A: dashboard design + alerting on contention thresholds. R: incident recurrence -25%, root-cause -30%. Reflection: dashboards earn their keep when they shorten incidents, not when they show pretty trends. |
| 5 | Document code/models/processes | S: Progress system-limitation docs + lineage. T: HIPAA + clinical ops adoption. A: audit trails + de-identification playbook + lineage docs. R: adoption w/o over-claim. Reflection: governance docs reduce change-resistance more than they reduce risk. |
| 6 | Statistical modeling + walk-forward validation | S: Manga Lens cache + dedup + per-domain selector tuning. T: avoid retranslating panels. A: walk-forward eval over real screenshots; selector A/B per domain. R: 29 sites supported. Reflection: walk-forward eval keeps you honest on time-aware data. |

**Case study:** Progress no-show + care engagement risk model — predictive ML w/ class imbalance + threshold calibration + production deployment is the direct analog to chip yield/anomaly modeling.

**Red-flag questions:**
- "Semiconductor domain?" → "No prior chip experience. ML + data pipeline discipline transfers across regulated domains. I learn domain vocabulary in 2-4 weeks; offer paid trial."
- "2.5 yrs vs 3+ floor?" → "MS CS + production ML shipped + measurable lift. Happy to do a paid trial 2 weeks."
- "Comp?" → "Targeting $100K+ remote. What's the band for this role?"

## G) Posting Legitimacy

**Assessment:** **Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live + accepting applications (verified via direct fetch 2026-04-25) | Positive |
| Description quality | Specific tools (TF/PyTorch/Sklearn, Pandas, Airflow/Spark); specific outcomes (yield/performance/anomaly) | Positive |
| Comp transparency | **Not stated** | Concern |
| Sponsorship policy | Not visible in fetched extract | Neutral |
| Reposting check | Not seen previously in scan-history | Neutral |
| Domain niche | Semiconductor — small market = legitimate but may extend posting age | Neutral |
| Company directness | Direct FortifyIQ Greenhouse careers page | Positive |

**Context Notes:** Niche domain (semiconductor data eng) legitimately stays open longer than mainstream tech roles. No comp transparency is the biggest risk factor — verify before investing time.

## H) Draft Application Answers

*(Skipped — score 3.3 below 4.5 threshold.)*

---

## Keywords extraídas
Data & AI Engineer, semiconductor, silicon design, verification, manufacturing, yield, performance, anomaly detection, Python, TensorFlow, PyTorch, scikit-learn, Pandas, NumPy, SQL, Airflow, Spark, MLOps, dashboards, Grafana, Remote.
