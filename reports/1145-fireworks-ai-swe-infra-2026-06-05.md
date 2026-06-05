# Evaluación: Fireworks AI — Software Engineer, AI Infrastructure

**Fecha:** 2026-06-05
**Arquetipo:** AI Platform / MLOps Engineer
**Score:** 3.5/5
**URL:** https://job-boards.greenhouse.io/fireworksai/jobs/4056271009
**Legitimacy:** High Confidence
**Location:** New York, NY; San Mateo, CA — Hybrid (M/W/F in-office)
**Region:** US
**PDF:** output/2026-06-05/cv-deepak-mallampati-fireworks-ai-swe-infra-2026-06-05.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | AI Platform / MLOps Engineer |
| Domain | GenAI inference infrastructure (Series C $4B valuation, Benchmark/Sequoia) |
| Function | Scalable backend for distributed training, inference, data pipelines + LLM CI/CD + control plane |
| Seniority | Mid (3+ yrs required, 5+ preferred) |
| Remote | Hybrid — M/W/F in NY or San Mateo office |
| Comp | $175,000 – $220,000 + equity |
| TL;DR | Build LLM CI/CD pipelines, model-serving control plane, and inference cost/perf infra at a top-tier LLM inference platform. |

## B) Match con CV

| JD Requirement | CV Evidence | Fit |
|---|---|---|
| 3+ yrs SWE (infra / ML systems) | 4+ yrs across Progress, Vanguard, Emerson | ✅ |
| Python (strong) | Production Python across all roles | ✅✅ |
| ML infrastructure (PyTorch, MLflow, Vertex AI, SageMaker, K8s) | PyTorch + TensorFlow, MLflow, Bedrock/SageMaker, Docker/K8s, Terraform | ✅✅ |
| LLM CI/CD pipeline | RAGAS + BERTScore eval framework, latency/accuracy dashboards, regression detection | ✅ |
| Model serving + control plane | FastAPI APIs at Vanguard (12 services, 100K req/day), model routing | ✅ Adjacent |
| Inference cost/perf optimization | Prompt compression, semantic caching, model routing, p95 1.5→0.8s | ✅ |
| LLM basics (context length, prefill, KV cache) | Implicit from RAG/agentic + caching work; not explicit in CV | ⚠️ Surface-level |
| Open-source inference engines (vLLM, Sglang, TRT-LLM) | Not in CV — managed/Bedrock inference background | ❌ Gap |
| Go (alt language) | Not in CV; Python primary | ⚠️ Gap |
| Open-source contributions | MangaLens (Chrome Web Store, 29+ sites) + career-ops public | ✅ Partial |
| 5+ yrs (preferred) | 4+ yrs | ⚠️ Slightly under preferred band |

**Gaps:**
- vLLM/Sglang/TRT-LLM depth — biggest gap; mitigable via QLoRA quantization adjacency + semantic caching/routing wins.
- Go — preferred-alt; Python alone keeps Deepak in scope (req says "Python, Go, or similar").
- LLM internals (KV cache, prefill, speculative decoding) — surface-level only; honest framing as "fast ramp on engine internals."
- F-1 OPT + NY/SF hybrid — US entity, M/W/F flex; manageable.

## C) Nivel y Estrategia

Required floor (3+ yrs) fits cleanly; preferred (5+ yrs + open-source engine depth) is a stretch. The role straddles MLOps platform and inference infra — Deepak's MLOps / eval / API / cost-perf wins land squarely; the gap is the inference-engine internals layer. Lead with LLM CI/CD + RAGAS + model routing + p95 wins; honestly position inference-engine internals as a fast-ramp area, leveraging the QLoRA H100 fine-tune as proof of low-level comfort.

## D) Comp y Demanda

| Metric | Source | Note |
|---|---|---|
| SWE AI Infra NY/SF mid | Levels.fyi 2026 / JD posted | $175–220K base matches NY/SF mid band; below FAANG L5 but solid for Series C |
| Fireworks AI | Series C $4B (Benchmark, Sequoia, Lightspeed) | Strong; PyTorch/Vertex AI veterans |
| LLM inference platform demand | Very high — vLLM/TGI/SGLang scarcity is industry-wide | Strong |

## E) Plan de Personalización

| # | CV Section | Change |
|---|---|---|
| 1 | Summary | Lead "AI Platform / MLOps Engineer — production LLM CI/CD, evaluation, model routing, and cost-perf optimization" |
| 2 | Progress bullet | Promote evaluation framework (RAGAS, BERTScore, latency dashboards) + inference cost/latency wins |
| 3 | Vanguard bullet | Surface p95 1.5→0.8s + 100K req/day scale |
| 4 | Skills | Hoist PyTorch, MLflow, K8s, Docker, Bedrock/SageMaker, semantic caching, model routing |
| 5 | Projects | Lead MangaLens as shipped open-source artifact; mention QLoRA H100 fine-tune |
| 6 | Footer | "US-based, F-1 OPT, open to sponsorship; flexible NY or SF hybrid" |

LinkedIn headline → "AI Platform / MLOps Engineer | LLM CI/CD, evaluation, inference cost-perf in production."

## F) Plan de Entrevistas

| # | JD Req | STAR+R Story | Reflection |
|---|---|---|---|
| 1 | LLM CI/CD | RAGAS + BERTScore eval framework with latency dashboards at Progress | Evals are the seatbelt for release velocity |
| 2 | Model serving | 12 APIs at Vanguard, p95 1.5→0.8s, 100K req/day | API surface is the product |
| 3 | Inference cost/latency | Prompt compression + semantic caching + model routing | Routing wins more than tuning |
| 4 | ML infra (PyTorch + K8s) | QLoRA Qwen3-27B on H100 + Docker/K8s deployment | Low-level comfort earns infra trust |
| 5 | Open-source signal | MangaLens (Chrome Web Store, live across 29+ sites) | Shipped > theoretical |
| 6 | Inference engines (vLLM/Sglang) | Honest: adjacency via QLoRA/quantization; ramp plan | Acknowledge the gap, demonstrate ramp |

Case study: LLM evaluation + cost-perf pipeline at Progress. Red-flag prep: "How deep is your vLLM experience?" → "Adjacent — QLoRA quantization and caching/routing wins; engine internals are my ramp area."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Date freshness | Live on Greenhouse, picked up by daily API scan today | Positive |
| Description specificity | Concrete (LLM CI/CD, control plane, MLflow/Vertex AI/SageMaker, vLLM/Sglang/TRT-LLM by name) | Positive |
| Compensation disclosed | $175–220K + equity (NY pay-transparency compliant) | Positive |
| Company hiring health | Series C $4B (Benchmark, Sequoia, Lightspeed, Index, Evantic); PyTorch/Vertex AI alumni | Positive |
| Reposting | New posting; no prior history | Positive |
| Role market context | Standard infra role; 4–8 wk close | Neutral |

**Assessment:** High Confidence. Verification: greenhouse-api Level-2 fetch + WebFetch corroboration.

## H) Draft Application Answers

Skipped — score 3.5/5 (threshold for H is ≥4.5/5).

---

## Keywords extraídas

LLM inference, CI/CD pipeline, control plane, model serving, vLLM, Sglang, TRT-LLM, PyTorch, MLflow, Vertex AI, SageMaker, Kubernetes, semantic caching, model routing, RAGAS, BERTScore, KV cache, prefill, GenAI infrastructure, Series C, NY/SF hybrid
