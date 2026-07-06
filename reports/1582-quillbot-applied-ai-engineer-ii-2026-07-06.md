# Evaluación: QuillBot (Learneo) — Applied AI Engineer II

**Fecha:** 2026-07-06
**Arquetipo:** AI Platform / MLOps Engineer
**Score:** 3.4/5
**URL:** https://job-boards.greenhouse.io/quillbot/jobs/8045409
**Legitimacy:** High Confidence
**Location:** India — Remote (virtual-first; role eligible for hire in India)
**Region:** Intl
**PDF:** output-intl/2026-07-06/cv-deepak-mallampati-quillbot-2026-07-06.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Platform / MLOps Engineer |
| Domain | LLMOps / ML infrastructure (writing-assistant AI, 56M users) |
| Function | Build / operate (MLOps, deployment, monitoring) |
| Seniority | Mid (Level II, 3+ yrs) |
| Remote | Remote — India-eligible (virtual-first: US/CA/IN/DE/NL) |
| Team | MLOps team (with data scientists, researchers, SWEs) |
| TL;DR | Own the infrastructure keeping ML models reliable in production — on-prem MLOps, deployment, monitoring, CI/CD, model optimization. |

## B) Match con CV

| Requisito JD | Evidencia CV | Fit |
|--------------|--------------|-----|
| 3+ yrs MLOps / full-stack ML | 4+ yrs AI/ML engineering (Progress, Vanguard, Kent State) | ✅ Strong |
| Python / Scientific Python / CUDA | Python, PyTorch, TensorFlow, Pandas/NumPy | ✅ Strong |
| Kubernetes, Docker, Linux | Docker, Kubernetes, Terraform (Skills) | ✅ Strong |
| GCP / AWS / Azure | AWS (EC2/S3/Lambda/Bedrock/SageMaker), Azure OpenAI, GCP Vertex | ✅ Strong |
| CI/CD workflows | Jenkins, Azure DevOps CI/CD (Skills) | ✅ Strong |
| Model deployment, monitoring, observability | Model monitoring & observability; RAGAS/BERTScore eval framework; latency/accuracy dashboards (Progress) | ✅ Strong |
| Model training/validation/eval settings + unit/integration testing | LLM eval + monitoring framework; drift detection; A/B testing | ✅ Good |
| Optimize models for performance/throughput | Prompt compression, semantic caching, model routing to hit SLA (Progress); p95 1.5s→800ms (Vanguard) | ✅ Strong |
| MLflow / W&B | MLflow, Weights & Biases (Skills) | ✅ Strong |

**Gaps & mitigation:**
1. *On-prem MLOps specifically* — Deepak's experience skews cloud (AWS/Azure/GCP); on-prem K8s is adjacent, mitigable (same K8s/Docker/CI-CD skills). Nice-to-have, not a blocker.
2. *Deep low-level CUDA optimization* — listed as one option; Deepak has inference-cost/latency optimization but not heavy CUDA kernel work. Soft gap.
3. **Location / work authorization** — role is *eligible for hire in India*. Deepak is US-based on F-1 OPT; taking an India-eligible role implies working from India (or India-based employment), which conflicts with maintaining US OPT status. This is the primary friction — flag before investing.

This is the **strongest skills match of today's batch** — near 1:1 on the MLOps toolchain.

## C) Nivel y Estrategia

Level II / 3+ yrs is squarely in Deepak's band (4+ yrs + MS). He can credibly present as a mid MLOps engineer with production LLM-serving discipline (SLA optimization, monitoring, eval frameworks). The technical bar is comfortably met. The **open question is not competence but location/authorization** — this is an India-hire role, so the decision hinges on whether Deepak would relocate/work from India (giving up US OPT) or whether QuillBot's virtual-first setup could accommodate a US-based hire (JD says eligible for hire in India — treat US-based as unlikely; confirm with recruiter).

## D) Comp y Demanda

QuillBot/Learneo India MLOps roles: market-based, likely ₹25–45 LPA + bonus (approximate India mid-MLOps band — verify). MLOps demand remains strong globally. US comp comparison not applicable (India-based role). If Deepak's constraint is a US-based role, comp is moot until location is resolved.

## E) Plan de Personalización

| # | Sección | Actual | Cambio propuesto | Por qué |
|---|---------|--------|------------------|---------|
| 1 | Summary | "Applied AI Engineer... RAG/LLM" | Lead with production MLOps: reliability, monitoring, CI/CD, model serving at scale | Mirror the ops-first JD |
| 2 | Skills order | GenAI first | Surface MLOps/Cloud/Infra block to the top | ATS keyword priority (K8s, CI/CD, MLflow) |
| 3 | Progress bullets | Agentic + RAG lead | Elevate SLA optimization, semantic caching, monitoring dashboards | Direct JD-responsibility match |
| 4 | Vanguard bullet | Feature integration | Emphasize p95 1.5s→800ms + 100k req/day reliability | Uptime/performance-at-scale proof |
| 5 | Keywords | — | Add on-prem MLOps, throughput optimization, model handover | Coverage of JD language |

**LinkedIn:** headline → "MLOps / Applied AI Engineer — production LLM serving, monitoring, CI/CD"; feature RAGAS/MLflow eval framework.

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-------------|-----------------|---|---|---|---|------------|
| 1 | Reliable model serving at scale | Progress LLM SLA program | Growing per-query cost/latency risked SLA breaches | Sustain SLA while cutting cost | Prompt compression + semantic caching + model routing | Held SLA targets, cut per-query overhead | Caching TTL tuning matters more than model choice for tail latency |
| 2 | Monitoring/observability | Eval + monitoring framework | No pre-deploy regression signal | Catch regressions before release | Built RAGAS/BERTScore + latency/accuracy dashboards | Surfaced regressions pre-deploy | Domain metrics beat generic ones for LLM drift |
| 3 | CI/CD + throughput | Vanguard microservices | p95 latency 1.5s hurt UX | Cut latency | Refactored 12 APIs, async + caching | p95 → 800ms, +40% integration speed | Profiling before optimizing avoided premature work |
| 4 | Fault-tolerant infra | Agentic automation infra | Failed production runs | Improve reliability | Scheduled batch orchestration + exponential-backoff retries | −60% failed runs | Idempotency + retries are the cheapest reliability wins |

Case study to present: the **LLM evaluation + monitoring framework** (RAGAS/BERTScore/dashboards) — closest to "model training/validation/eval settings + testing." Red-flag question: "This role is India-based — are you able to work from India?" → answer honestly re: current US OPT status and openness.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Updated 2026-07-03 (3 days), live Greenhouse API | Positive |
| Description quality | Specific responsibilities, named stack (Linux/Docker/K8s/CI-CD), team context, EEO + privacy notice | Positive |
| Company hiring | QuillBot/Learneo (56M users) actively hiring; virtual-first across 5 countries | Positive |
| Comp transparency | Market-based statement, no number, but structured total-comp framework | Neutral |

**Context:** Established profitable product (Learneo/Course Hero group). Real, active, well-specified role. Only caveat for this candidate is geography.

## H) Draft Application Answers
_(Score 3.4 < 4.5 — draft answers not required. Location/authorization must be resolved with recruiter before applying.)_

## Keywords extraídas
MLOps, Applied AI Engineer, machine learning infrastructure, Kubernetes, Docker, Linux, CI/CD, model deployment, monitoring, observability, GCP, AWS, Azure, Python, CUDA, model optimization, throughput, MLflow, on-prem, production ML, model handover, unit testing, integration testing
