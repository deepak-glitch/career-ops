# Evaluación: Scale AI — AI Infrastructure Engineer, Model Serving Platform (USA, SF / NYC)

**Fecha:** 2026-07-03
**Arquetipo:** AI Platform / MLOps Engineer
**Score:** 3.4/5
**URL:** https://job-boards.greenhouse.io/scaleai/jobs/4520320005
**Legitimacy:** High Confidence
**Location:** San Francisco, CA; New York, NY — US (in-office)
**Region:** US
**PDF:** output/2026-07-03/cv-deepak-mallampati-scale-ai-model-serving-2026-07-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Platform / MLOps — LLM serving infrastructure |
| Domain | ML Infrastructure — scalable, reliable, efficient serving of LLMs (internal + external) |
| Function | Build — fault-tolerant, high-performance LLM serving systems + observability |
| Seniority | Mid-Senior IC (4+ years; External Dept: Research) |
| Remote | In-office SF / NYC (US) |
| Team | ML Infrastructure |
| TL;DR | Design and build the platform that serves LLM workloads at scale — routing, streaming, load balancing, observability — bridging research and engineering. |

## B) Match con CV

| Requisito JD | Línea(s) del CV | Match |
|--------------|-----------------|-------|
| 4+ yrs large-scale, high-performance backend systems | 4+ yrs AI/ML; 12 APIs & microservices, p95 1.5s→800ms, 100k+ req/day (Vanguard) | ⚠️ Partial (backend real, but not distributed-serving-infra scale) |
| Python / Go / Rust / C++ | Python (primary); JavaScript/TypeScript, Java | ⚠️ Partial (Python strong; Go/Rust/C++ not cited) |
| LLM serving & routing (rate limiting, token streaming, load balancing, budgets) | "Optimized inference cost & latency through prompt compression, semantic caching, and model routing" (Progress) | ✅ Direct (routing + caching + cost/latency) |
| LLM capabilities (reasoning, tool calling, prompt templates) | Agentic LLM systems, tool-using subagents, prompt engineering | ✅ Direct |
| Containers & orchestration (Docker, Kubernetes) | Docker, Kubernetes (Skills) | ✅ Direct |
| Cloud (AWS, GCP) + IaC (Terraform) | AWS (EC2/S3/Lambda/Bedrock/SageMaker), GCP Vertex AI, Terraform | ✅ Strong |
| Monitoring & observability | LLM eval/monitoring framework, latency/accuracy dashboards, model monitoring | ✅ Direct |
| Nice-to-have: vLLM, SGLang, TensorRT-LLM, TGI | Not cited | ❌ Gap |

**Gaps:**
1. **Deep distributed model-serving frameworks (vLLM/SGLang/TensorRT-LLM)** — *nice-to-have but signals the core of this role.* Deepak has serving concepts (routing, caching, streaming-adjacent) but not the named GPU-serving stacks. Mitigation: emphasize inference cost/latency optimization + model routing + semantic caching as the transferable core; note fast ramp on serving frameworks.
2. **Systems languages (Go/Rust/C++) at scale** — *nice-to-have.* Python-primary. Mitigation: lead with Python serving + infra breadth; Go/Rust learnable given systems fundamentals.
3. **Backend at "serving-platform" scale** — *soft gap.* 100k+ req/day is real but below hyperscale LLM-serving. Mitigation: frame p95 1.5s→800ms + reliability engineering (−60% failed runs) as production-serving discipline.

## C) Nivel y Estrategia

- **JD level:** Mid-senior platform IC (4+ yrs) bridging research and serving infra.
- **Candidate level:** Mid IC with strong MLOps/observability + inference optimization; a reach on deep serving-framework internals.
- **Sell senior-without-lying:** "Ships and optimizes LLM inference in production — routing, semantic caching, cost/latency SLAs — with full observability." Lead p95 1.5s→800ms, model routing, dashboards. Be honest that vLLM/TensorRT are ramp items, not current depth.
- **If downleveled:** Reasonable given the framework gap; accept if comp is fair and there's a clear path into serving-framework ownership.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| JD salary | $180K – $225K base + equity | Greenhouse JD (pay transparency) |
| US ML/Platform Infra Engineer (mid-senior, SF/NY) | ~$180K–$260K base + equity | Levels.fyi / market (general) |
| Role demand | High — LLM serving/inference infra is a top 2026 hiring priority | market trend |

Comp disclosed and in-band; Scale AI is a well-capitalized, brand-name employer.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | Lead "AI platform engineer — LLM inference optimization, routing, caching, observability at production scale" | Mirror model-serving-platform framing |
| 2 | Bullets | Foreground inference cost/latency optimization (routing, semantic caching), 12 APIs/microservices, p95 1.5s→800ms | Direct serving-infra proof |
| 3 | Metrics | Surface p95 1.5s→800ms, −60% failed runs, 100k+ req/day | Concrete reliability/perf proof |
| 4 | Skills | Promote Docker/Kubernetes, Terraform, AWS/GCP, model monitoring, model routing to top; add "LLM serving" | JD keywords |
| 5 | Footer | "US-based, F-1 OPT — authorized now; open to SF/NYC" | US in-office; clean auth |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | LLM serving/routing, cost/latency | Inference optimization (Progress) | Per-query cost & latency over SLA | Cut cost without hurting quality | Prompt compression + semantic caching + model routing | SLA sustained at lower per-query overhead | Route to the cheapest model that still passes evals |
| 2 | High-performance backend | 12 APIs & microservices (Vanguard) | Slow, fragile integrations | Fast, reliable services | Built microservices powering AI capabilities | p95 1.5s→800ms, 100k+ req/day | Measure p95, not averages |
| 3 | Observability | LLM eval/monitoring framework | Regressions unseen | Health + regression visibility | RAGAS/BERTScore + latency/accuracy dashboards | Regressions caught pre-deploy | You can't operate what you can't observe |
| 4 | Reliability at scale | Automation infra (Progress) | Failed batch runs | Fault tolerance | Scheduled orchestration + exponential-backoff retries | −60% failed runs | Design for retry before scale |
| 5 | Cloud + IaC | AWS/GCP + Terraform | Reproducible infra | Consistent environments | Provisioned + deployed on AWS/GCP with Terraform | Repeatable deploys | Infra as code or infra as chaos |

Case study: Inference cost/latency optimization (routing + semantic caching) — the closest analog to the serving-platform mandate. Red-flag Q: "Have you run vLLM/TensorRT in prod?" → honest: "Not those frameworks specifically — I've owned routing, caching, and latency SLAs; the serving-framework internals are a fast ramp on top of that foundation."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on Greenhouse API; updated 2026-07-02 (1 day old) | Positive |
| Description quality | Specific serving stack (vLLM/SGLang/TensorRT), named team (ML Infra), clear 6-12mo scope, pay transparency | Positive |
| Company hiring signals | Scale AI actively hiring across ML infra + research | Positive |
| Reposting | Distinct from prior Scale roles processed (#450 New Grad, #470 Applied AI, #1496 ML Research, #1546 ML Eng Platform) — new infra team | Neutral |
| Market context | LLM-serving infra is a legitimately hard, in-demand hire | Positive |

**Context Notes:** Very fresh (updated yesterday), disclosed $180–225K, pay-transparency compliant. Legitimate, active req.

---

## Keywords extraídas

LLM serving, model serving, inference, vLLM, SGLang, TensorRT-LLM, routing, token streaming, rate limiting, load balancing, Kubernetes, Docker, Terraform, AWS, GCP, observability, monitoring, backend systems, semantic caching, ML infrastructure, platform engineering, San Francisco, New York
