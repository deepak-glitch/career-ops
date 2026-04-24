# Evaluación: Glean — Machine Learning Engineer, LLM Evals & Observability

**Fecha:** 2026-04-24
**Arquetipo:** AI Platform / LLMOps + Applied AI / LLM Engineer
**Score:** 3.8/5
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4669417005
**Legitimacy:** High Confidence
**Location:** San Francisco Bay Area (hybrid 3-4 days/week in Palo Alto)
**PDF:** output/2026-04-24/cv-deepak-mallampati-glean-ml-evals-observability-2026-04-24.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | AI Platform / LLMOps — evals + observability for production LLM agents |
| Domain | Enterprise work-AI quality gating |
| Function | Build eval datasets, pipelines, LLM-judge scoring, trace observability |
| Seniority | Mid (2+ yrs) |
| Remote | Hybrid SF Bay 3-4 days/week Palo Alto |
| Team | AI quality / observability |
| Location | **San Francisco Bay Area (hybrid, Palo Alto 3-4d)** |
| Comp | $200,000 – $300,000 |
| TL;DR | **Best fit in this batch.** Mid-level (2+ yrs) = Deepak's natural level. Evals + LLM-judge + trace observability are direct matches to Progress RAG eval harness (90% grounded alignment) + agentic grounding. Go + Python backend is a partial match (strong Python, Go learnable). Palo Alto 3-4 day on-site is the one friction — negotiate or plan relocation. Apply. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 2+ yrs SWE w/ strong coding fundamentals | **STRONG** | cv.md L22-30 2.5 yrs Applied AI shipping production |
| Backend Go + Python | **MEDIUM** | cv.md L12 Python strong; Go learnable (not in cv.md) |
| Distributed data pipelines | **MEDIUM** | cv.md L29 EHR preprocessing pipelines + Pandas/NumPy; L37 T-SQL pipeline optimization |
| LLM evaluation + NLP + RLHF | **STRONG** | cv.md L25-26 RAG eval harness w/ 90% grounded alignment; L46 hierarchical NLP |
| LLM-judge scoring | **STRONG** | cv.md L26 structured reasoning + grounding rules; agentic response stability scoring (~25% gain) |
| Evaluation datasets + golden sets | **STRONG** | cv.md L25 eval pipelines + threshold calibration; cv.md L27 stratified sampling |
| Observability / traces / dashboards | **MEDIUM** | cv.md L28 structured logging; cv.md L37-38 Grafana dashboards (DB performance) |
| Analytical rigor — connecting offline metrics to user experience | **STRONG** | cv.md L25 retrieval precision + alignment tied to downstream user query success |
| Cross-functional collab | **STRONG** | cv.md L30 stakeholder-facing docs |

**Gaps:**
1. **Go backend experience** — Python-first; Go learnable with ramp. Frame: "Happy to ramp on Go; have shipped Python distributed pipelines."
2. **Large-scale distributed systems** — Progress is enterprise but not internet-scale; adjacent.
3. **Palo Alto 3-4d on-site** — Deepak is Kent, OH; requires relocation or hybrid re-negotiation.

## C) Nivel y Estrategia

- **JD:** Mid IC (2+ yrs). Natural level match.
- **Sell:** Lead with Progress RAG eval harness (90% grounded alignment + 35% retrieval precision gain) + agentic grounding (>30% hallucination reduction + ~25% stability gain). These are exactly the LLM-judge + eval-pipeline + trace patterns the JD calls out.
- **If downleveled:** Accept; $200K floor is well above target.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Glean Mid ML Evals | $200K – $300K | JD |
| Mid ML Evals SF Bay | $180K – $240K | Levels.fyi |
| Deepak target | $100K – $130K | config/profile.yml |
| LLMOps demand | Very high | Qualitative — every foundation lab + enterprise ships eval + observability |

Comp floor $200K — well above target.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer — 2.5 yrs production RAG + LLM eval frameworks in regulated healthcare. Shipped eval harness with 90% grounded alignment + 35% retrieval precision gain. Ready to scale LLM-judge + observability to enterprise." | Mirror JD: evals + observability + LLM-judge + grounded quality |
| 2 | Competencies | Lead: LLM Evaluation, Grounding, Eval Pipelines, Observability, RAG, Python, FastAPI, Structured Logging | JD ordering |
| 3 | Experience bullet 1 | Lead with RAG 35% precision + 90% grounded alignment + eval pipeline | Direct match |
| 4 | Experience bullet 2 | Lead with agentic grounding rules + >30% hallucination reduction | Direct match |
| 5 | Projects | Lead with Agentic Claims (JSON schema contracts = LLM-judge analog) + Dream Decoder (structured prompt transform = trace observability analog) | Eval + structured quality |
| 6 | Location | "Kent, OH — Open to Palo Alto relocation / hybrid. F-1 OPT (sponsorship welcomed)." | On-site JD signal |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Eval datasets + golden sets | Progress RAG eval harness — 90% grounded alignment + stratified sampling | Build the harness before any tuning loop |
| 2 | LLM-judge scoring | Progress agentic grounding rules + response stability (~25% gain) | LLM-judge needs human-anchored rubric, else score-inflation |
| 3 | Offline → online metric correlation | Progress retrieval precision + alignment tied to clinician query success | Offline metric is a proxy; watch user behavior first |
| 4 | Observability / tracing | Progress structured logging + post-deploy defect reduction (~30%) | Traces without alerting = log spam |
| 5 | Distributed pipelines | Progress EHR preprocessing — dataset reliability >98%, instability -40% | Pipeline reliability > model performance for downstream quality |
| 6 | Cross-functional | Progress stakeholder limitation docs | Surface system boundaries FIRST |

**Case study:** Progress RAG eval harness (90% grounded alignment + 35% retrieval precision gain + stratified sampling) — direct 1:1 with JD's "LLM-powered judges scoring correctness, completeness, quality against human judgment."

**Red-flag questions:**
- "Go experience?" → "Python-first. Have shipped Python distributed pipelines; Go ramp is 4-6 weeks to productive for backend APIs. Happy to dual-language."
- "Palo Alto on-site?" → "Open to relocation / hybrid. Can plan 3-4d in-office with a bridge month."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Fresh scan 2026-04-24 | Positive |
| JD specificity | Names LLM-judge, golden sets, golden datasets, launch gating, observability, trace enrichment | Positive |
| Salary transparency | $200K-$300K | Positive |
| Layoffs | None | Positive |
| Reposting | Multiple Glean ML roles = scaling | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

Score 3.8 < 4.5 — omitted.

---

## Keywords extraídas

Glean, LLM Evals, observability, golden sets, evaluation dataset, LLM-judge, launch gating, trace enrichment, agentic evaluation, Python, Go, distributed pipelines, RLHF, NLP, Palo Alto, mid-level, AI quality.
