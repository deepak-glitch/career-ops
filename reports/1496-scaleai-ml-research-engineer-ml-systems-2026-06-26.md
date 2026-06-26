# Evaluación: Scale AI — ML Research Engineer, ML Systems

**Fecha:** 2026-06-26
**Arquetipo:** ML Engineer (Applied AI Systems) / AI Platform · MLOps — distributed-training-infra specialty
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/scaleai/jobs/4534631005
**Legitimacy:** High Confidence
**Location:** San Francisco, CA / Seattle, WA / New York, NY — on-site (per JD subtitle)
**Region:** US
**Verification:** confirmed (Greenhouse content API live 2026-06-26, full JD + comp band returned; updated 2026-06-25)
**PDF:** output/2026-06-26/cv-deepak-mallampati-scaleai-ml-research-engineer-ml-systems-1496-2026-06-26.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | ML Systems / platform engineer — build & optimize Scale's distributed LLM training+inference framework (RLXF) |
| Domain | ML infrastructure / platform — large-scale distributed training & inference, data-curation tooling |
| Function | Build — profile/optimize training & inference framework, integrate SOTA system techniques |
| Seniority | IC; band spans multiple levels ($189.6K–$237K base) |
| Remote | On-site, one of SF / Seattle / NY (per posting subtitle) |
| Comp | **$189,600 – $237,000 base** + equity + benefits (health/dental/vision, retirement, L&D stipend, PTO, commuter) |
| TL;DR | A real, full-time, well-compensated role at a premier AI company — and US-based, so F-1 OPT works without sponsorship. **But the core of the job is deep ML-systems infra: multi-node LLM training/inference, large-scale distributed ML systems, CUDA/flash-attention-level optimization** — which is *not* Deepak's track. His strength is applied AI (production RAG, agentic, MLOps, inference cost/latency optimization), adjacent but not the kernel-/distributed-training depth this role centers on. Plus "Research Engineer" titles often lean PhD. Elite comp + company pull it up; the central skills gap pulls it down. Scored at the 3.0 apply floor — a genuine reach, apply only with eyes open and a systems-learning story. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Estado |
|------------------|-----------------|--------|
| Strong software engineering, PyTorch/transformers | PyTorch/TensorFlow; transformers; FastAPI; 12 APIs/microservices | ✅ Good |
| **Multi-node LLM training & inference** | Single-GPU H100 QLoRA fine-tuning; inference optimization (compression, caching, routing) | ❌ Gap — no multi-node training |
| **Large-scale distributed ML systems** | Production AI services, batch orchestration, 100K+ req/day | ⚠️ Distributed *serving*, not distributed *training framework* |
| **CUDA, flash attention** | Not in CV | ❌ Hard gap |
| Profile & optimize training/inference framework | Inference cost/latency optimization (p95 1.5s→800ms); semantic caching; model routing | ⚠️ Application-level, not framework-internals |
| Post-training methods (RLHF, instruction tuning, tool use, agents) — nice-to-have | Agentic conductor–subagent framework; QLoRA fine-tuning; content-safety/guardrails | ✅ Strong on the nice-to-have |
| Cross-functional communication | Partnered across 20+ internal teams | ✅ Strong |
| US work authorization (FTE, equity) | F-1 OPT (US-authorized now; future sponsorship) | ✅ Works now ⚠️ sponsorship later |

**Gaps & mitigation:**
1. **Multi-node training + CUDA/flash-attention (hard blocker on the primary requirement).** Not bridgeable with framing alone. Mitigation is honest: position the *nice-to-have* post-training/agentic strengths as the entry wedge and pitch fast ramp on systems internals — but recognize a systems-focused screen will likely prioritize candidates with explicit distributed-training experience.
2. **Distributed serving ≠ distributed training framework.** Deepak has shipped high-throughput inference services; he has not built the trainer/inference framework internals. Frame the transferable profiling/optimization mindset, but don't overstate.
3. **"Research Engineer" PhD lean.** Counter with H100 QLoRA + IEEE paper as research credibility; MS is below typical bar for the title.
4. **Future sponsorship** — US-based FTE works on OPT now; flag the longer-term H-1B/sponsorship need early.

## C) Nivel y Estrategia

JD level: IC across a wide band ($189.6K–$237K covers several levels). Deepak's natural level for *this* archetype is below the systems-infra bar — his depth is applied AI, not training-framework internals.

- **"Sell senior without lying":** lead with measurable production wins (p95 1.5s→800ms, 42% token reduction via agentic decomposition, 60% fewer failed runs) to show real systems-optimization instinct and production discipline. Pair with H100 QLoRA + the post-training nice-to-haves (RLHF-adjacent guardrails, agents) where he genuinely matches.
- **"If downleveled":** accept a lower level if it opens the ML-systems learning curve; ask for explicit ramp expectations on distributed training, and a 6-month checkpoint. Given the gap, downlevel is the realistic path, not the premium band.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Base | $189,600 – $237,000 | JD (pay-transparency band, SF/NY/Seattle) |
| Equity | Yes (Board-approved grants) | JD |
| Benefits | Health/dental/vision, retirement, L&D stipend, PTO, commuter | JD |
| Market context | This band is top-quartile for ML/infra IC in SF/NY; Scale comp is competitive vs. Levels.fyi peers | General market knowledge (not freshly searched) |

Comp is a clear strength — top-quartile base + equity. Demand for ML-systems/training-infra engineers remains high; the constraint is candidate fit, not market demand.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI Engineer… RAG/agentic" | Add "ML systems & inference optimization — profiling, latency/cost reduction, GPU fine-tuning (H100 QLoRA)" | Mirror JD's systems-optimization framing |
| 2 | Bullets order | RAG/agentic first | Surface inference-optimization (p95 1.5s→800ms), token reduction (-42%), H100 fine-tuning first | Match JD priorities (profile/optimize) |
| 3 | Skills | Broad applied-AI list | Foreground PyTorch, transformers, GPU/CUDA-adjacent, MLOps; de-emphasize non-ML | ATS alignment to ML-systems |
| 4 | Post-training | Implicit | Make RLHF/instruction-tuning/agents explicit (the JD nice-to-have he matches) | Convert nice-to-have into a wedge |
| 5 | Honesty | — | Do not claim multi-node training/CUDA kernels he lacks | Integrity; avoids interview blow-ups |

LinkedIn: add "ML systems / inference optimization" to headline; pin H100 QLoRA + inference-latency project; list PyTorch/transformers prominently.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Profile & optimize inference | Cut p95 latency 1.5s→800ms | High-latency LLM service | Hit SLA | Prompt compression + semantic caching + model routing | -47% p95, SLA held | Learned routing beat raw model swaps; profiling first |
| 2 | Optimize training/compute | H100 QLoRA fine-tune of Qwen3-27B | Controllable long-form gen | Fine-tune under compute budget | 4-bit QLoRA, curated 361-ex dataset, 6-stage schema | Working controllable model | Data curation, not compute, was the bottleneck |
| 3 | Post-training / agents (nice-to-have) | Agentic conductor–subagent framework | Multi-step objectives, token blow-up | Decompose into context-scoped subagents | Orchestration + retry/backoff | -42% tokens, accuracy held | Context scoping is the real lever for cost |
| 4 | Distributed/reliable systems | Fault-tolerant automation infra | Flaky batch runs | Improve reliability | Scheduled orchestration + exponential backoff | -60% failed runs | Reliability is design, not heroics |

- **Case study to present:** the inference-optimization work (latency/cost) — closest legitimate bridge to "profile & optimize the framework."
- **Red-flag questions:** "Have you built a distributed training framework / written CUDA?" → answer honestly: "Not at kernel/multi-node-training level; my systems work is inference-side optimization and reliability. Here's how I'd ramp." Don't bluff.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Updated 2026-06-25; apply active via Greenhouse | Positive |
| Description quality | Specific platform (RLXF), concrete stack (CUDA, flash attention), clear scope | Positive |
| Comp transparency | Full base band + equity + benefits disclosed | Positive |
| Company hiring signals | Scale AI actively hiring across ML/infra; core business | Positive |
| Role market context | Senior-ish infra IC roles take longer to fill — normal | Context |

**Context Notes:** Multi-location band spanning several levels is standard Scale pay-transparency practice; not a red flag.

## H) Draft Application Answers

Not generated (score 3.0 — below the 4.5 draft-answers threshold; PDF generated, but recommend applying only with a clear systems-ramp story).

---

## Keywords extraídas
ML systems, distributed training, multi-node, LLM inference, CUDA, flash attention, PyTorch, transformers, model optimization, RLHF, instruction tuning, post-training, training framework, data curation, GPU optimization, software engineering, Scale AI, RLXF, profiling
