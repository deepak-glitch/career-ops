# Evaluación: Together AI — Forward Deployed Engineer (Inference & Post-Training)

**Fecha:** 2026-06-05
**Arquetipo:** AI Platform / MLOps Engineer (× Forward Deployed)
**Score:** 3.1/5
**URL:** https://job-boards.greenhouse.io/togetherai/jobs/5131941007
**Legitimacy:** High Confidence
**Location:** San Francisco — Onsite 4 days/wk (flexible remote otherwise)
**Region:** US
**PDF:** output/2026-06-05/cv-deepak-mallampati-together-ai-fde-inference-2026-06-05.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | AI Platform / MLOps × FDE (specialist) |
| Domain | LLM inference + post-training infrastructure |
| Function | Customer-embedded inference optimization + post-training guidance |
| Seniority | Mid–senior specialist (5+ yrs) |
| Remote | Onsite 4 days/wk in SF (flexible remote otherwise) |
| Comp | $270,000 – $300,000 OTE + equity + benefits |
| TL;DR | Primary technical contact for strategic accounts, tuning inference engines (vLLM/TensorRT-LLM/SGLang) and guiding post-training (LoRA/SFT/DPO/RLHF/GRPO) pipelines. |

## B) Match con CV

| JD Requirement | CV Evidence | Fit |
|---|---|---|
| Strong Python, production | Vanguard APIs, Progress agentic systems | ✅ |
| Inference cost/latency optimization | Prompt compression, semantic caching, model routing, p95 1.5→0.8s | ✅ Adjacent |
| Post-training (LoRA, SFT) | QLoRA fine-tune Qwen3-27B on H100; LoRA/PEFT in skills | ✅ Partial |
| Post-training (DPO, RLHF, GRPO) | Not in CV | ❌ Gap |
| Expert inference engines (vLLM, TensorRT-LLM, SGLang) | Not in CV — uses managed/Bedrock inference | ❌ Gap |
| KV cache, speculative decoding, tensor/pipeline parallelism, quantization | 4-bit QLoRA quantization only | ⚠️ Thin |
| Customer-facing technical lead | Vanguard cross-team; adjacent | ⚠️ Adjacent |
| 5+ yrs technical | 4+ yrs | ⚠️ Slightly under |

**Gaps:**
- Inference-engine depth (vLLM/TensorRT-LLM/SGLang) is the core of the role and is Deepak's biggest gap — hard-ish blocker for a specialist FDE; mitigate only partially via QLoRA/quantization adjacency.
- DPO/RLHF/GRPO not demonstrated. SFT/LoRA are; honestly position as "post-training fundamentals, preference-optimization is a fast-ramp area."
- Onsite 4d/wk SF — relocation for F-1 OPT candidate; feasible (US entity) but high friction.

## C) Nivel y Estrategia

Detected level (5+y specialist) sits slightly above Deepak's 4y and demands inference-systems depth he hasn't shipped. Honest strategy: do **not** oversell vLLM/TensorRT expertise. Lead with the optimization wins he *does* own (semantic caching, model routing, prompt compression, QLoRA on H100) and frame as a fast learner on engine internals. Realistically this is a stretch role; apply only if Deepak wants to pivot hard into inference infra.

## D) Comp y Demanda

| Metric | Source | Note |
|---|---|---|
| Inference-infra FDE OTE | Levels.fyi/Blind 2026 | $270–300K OTE competitive; senior specialist band |
| Together AI funding | Public — well-funded (Series B, NVIDIA-backed) | Strong runway |
| Inference-optimization demand | Very high but PhD/deep-systems gated | Narrow specialist pool |

## E) Plan de Personalización

| # | CV Section | Change |
|---|---|---|
| 1 | Summary | Lead "AI engineer with production inference cost/latency optimization (caching, routing, compression) + QLoRA post-training" |
| 2 | Progress bullet | Promote semantic caching + model routing + SLA latency wins |
| 3 | KSU bullet | Promote QLoRA/4-bit quantization on H100 as post-training proof |
| 4 | Skills | Surface quantization, model optimization, inference; de-emphasize CV/NLP breadth |
| 5 | Footer | "US-based (F-1 OPT); open to SF onsite" |

LinkedIn headline → "AI Engineer | LLM inference optimization + post-training (QLoRA, caching, routing)."

## F) Plan de Entrevistas

| # | JD Req | STAR+R Story | Reflection |
|---|---|---|---|
| 1 | Inference cost/latency | Semantic caching + model routing sustaining SLA at lower per-query cost | Routing beats brute-force scaling |
| 2 | Post-training | QLoRA fine-tune Qwen3-27B, 361-example schema, H100 | Data curation > epochs |
| 3 | Quantization | 4-bit QLoRA tradeoffs measured | Quantization is a utility–accuracy dial |
| 4 | Customer technical lead | Vanguard model-selection guidance across 20+ teams | Be the translation layer |
| 5 | Eval rigor | RAGAS/BERTScore pre-deploy benchmarking | Catch regressions before release |
| 6 | Production reliability | Exponential-backoff retry infra, 60% fewer failed runs | Reliability is a feature |

Case study: KSU QLoRA fine-tuning — present as post-training depth. Red-flag prep: "Have you run vLLM/TensorRT-LLM in production?" → honest "No — I've optimized inference via caching/routing/compression and done 4-bit QLoRA; engine internals are my explicit ramp target."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Date freshness | Live Greenhouse posting, Apply active | Positive |
| Description specificity | Highly specific (named engines, post-training methods, OTE) | Positive |
| Compensation disclosed | $270–300K OTE + equity stated | Positive |
| Company hiring health | Together AI well-funded; expanding | Positive |
| Reposting | First seen for this jid | Neutral |
| Role market context | Specialist FDE can take longer to fill | Neutral |

**Assessment:** High Confidence. Verification: live JD via WebFetch (Greenhouse active).

## H) Draft Application Answers

Skipped — score 3.1/5 (threshold for H is ≥4.5/5).

---

## Keywords extraídas

Forward Deployed Engineer, inference, post-training, vLLM, TensorRT-LLM, SGLang, KV cache, speculative decoding, tensor parallelism, quantization, LoRA, SFT, DPO, RLHF, GRPO, Python, open-source LLM, customer-facing, SLA, model optimization
