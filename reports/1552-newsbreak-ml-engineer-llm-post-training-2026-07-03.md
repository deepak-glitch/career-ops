# Evaluación: NewsBreak — Machine Learning Engineer, LLM Post-Training

**Fecha:** 2026-07-03
**Arquetipo:** ML Engineer (Applied AI Systems)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/newsbreak/jobs/4688409006
**Legitimacy:** High Confidence
**Location:** Mountain View, CA — on-site (US-based; work auth required)
**Region:** US
**PDF:** output/2026-07-03/cv-deepak-mallampati-newsbreak-ml-engineer-llm-post-training-2026-07-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) — LLM post-training / RL specialist |
| Domain | ML / model training — content-intelligence platform (40M+ MAU) |
| Function | Build — own the full LLM post-training pipeline (CPT/SFT/RL) |
| Seniority | Mid–senior IC (no explicit YOE floor; "lead full post-training pipeline") |
| Remote | On-site, Mountain View, CA |
| Team size | Not stated (LLM Post-Training team) |
| TL;DR | Own end-to-end LLM post-training with heavy RL (RLHF/PPO/GRPO/DPO), design training data across all stages, and run large-scale distributed training on GPU clusters. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| Post-training methods: CPT, SFT | Fine-tuning (LoRA, QLoRA, PEFT); Qwen3-27B via 4-bit QLoRA on H100 (SFT-style instruction tuning) | ✅ Partial (SFT yes; CPT not shown) |
| Demonstrated, practical RL experience (RLHF, PPO, GRPO, DPO) | Content-safety guardrails, eval frameworks — but **no explicit RLHF/PPO/GRPO/DPO** | ⚠️ Gap (core requirement) |
| PyTorch, Hugging Face TRL/Accelerate, DeepSpeed, FSDP, vLLM | PyTorch, Hugging Face Transformers; vLLM/DeepSpeed/FSDP not explicitly listed | ⚠️ Partial |
| Data engineering: dataset design, sourcing, cleaning, filtering, labeling, synthetic/preference data | Curated 361-example instruction dataset; end-to-end preprocessing pipelines; privacy-preserving data workflows | ✅ Strong |
| Distributed training (data/tensor/pipeline parallelism, FSDP) | Trained on single H100; **no multi-node distributed training** shown | ⚠️ Gap |
| Evaluation + reward-model pipelines to prevent regressions | RAGAS, BERTScore, custom domain metrics; latency/accuracy dashboards; regression detection | ✅ Strong |
| Tokenization, attention, chat templates, alignment failure modes | GenAI/LLM depth (transformers, prompt eng, content safety) | ✅ Adjacent |

**Gaps + mitigation:**
1. **RL post-training (RLHF/PPO/GRPO/DPO) — hard blocker for the core.** This is the role's center of gravity. Deepak's finetuning is SFT/QLoRA, not RL. Mitigation: foreground eval + reward-signal + data-curation work (transferable to reward modeling), and be honest that RL is a growth area, not a proven track record. This is the main reason the score sits at threshold, not higher.
2. **Multi-node distributed training (FSDP/tensor/pipeline parallelism)** — trained on single H100. Mitigation: emphasize infra fluency (Docker/K8s, cloud) and framework familiarity; acknowledge cluster-scale as ramp-up.
3. **vLLM / DeepSpeed / TRL** — not on CV. Mitigation: adjacent HF/PyTorch depth; fast-learner framing.

Net: **strong on SFT + data + evals**, but the JD's RL-first, cluster-scale post-training core is a genuine gap. Borderline role.

## C) Nivel y Estrategia

- **JD level:** Mid–senior IC, RL specialist. **Candidate level for this archetype:** at-level on applied ML/finetuning, below-level on RL post-training specifically.
- **Sell-without-lying:** Lead with data + evaluation depth (preference/reward-signal design, regression pipelines) and SFT/QLoRA experience — the parts of post-training Deepak genuinely owns. Do NOT overclaim RLHF.
- **If down-leveled:** Reasonable, given the RL gap; negotiate a ramp plan with clear reward-modeling milestones.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (JD-disclosed) | **$150,000–$230,000 USD/yr** + benefits/401k | JD (Greenhouse) |
| vs. Deepak target ($100–130K) | Above target across the band | profile |
| Company | NewsBreak — content-intelligence platform, 40M+ MAU | JD / public |
| Demand | LLM post-training / RL engineers = very hot, supply-constrained niche | Market context |

Comp disclosed and strong. The RL-specialist niche is in high demand, which also means the bar on demonstrated RL is high.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated RAG framing | Add "LLM finetuning (QLoRA/SFT), evaluation & reward-signal design, data curation" | Mirror post-training vocabulary |
| 2 | Skills | Fine-tuning line present | Surface PyTorch + HF Transformers + finetuning + evals as a "model training" cluster | JD leads with training stack |
| 3 | Experience | Qwen3 QLoRA buried in research | Elevate QLoRA/H100 finetuning + instruction-dataset design | Closest proof to SFT/data |
| 4 | Evals | RAGAS/BERTScore present | Reframe as "regression-prevention eval pipelines" | JD asks for eval/reward pipelines |
| 5 | Honesty | — | Note RL as active learning area | Avoid overclaiming a core gap |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | SFT / finetuning | Qwen3 QLoRA (Story Director) | Controllable long-form generation | Condition on narrative schema | 4-bit QLoRA on H100, 361-example curated set | Structured-generation model | Small curated sets + QLoRA go far |
| 2 | Data design/curation | Instruction-dataset + preprocessing pipelines | Model-ready data from raw sources | Clean, normalize, curate | End-to-end preprocessing; 361-example schema | Reproducible training data | Data quality dominates outcomes |
| 3 | Eval / regression prevention | Eval + monitoring framework | Catch regressions pre-release | Benchmark iterations | RAGAS/BERTScore + custom metrics + dashboards | Regressions surfaced pre-deploy | Evals are the safety net for training |
| 4 | Reward/preference signals | Privacy–utility scoring framework | Benchmark six configs objectively | Composite scoring | Quantified privacy/utility trade-offs | Optimal operating point identified | Designing scoring rubrics ≈ reward design |
| 5 | Alignment/safety failure modes | Vanguard content controls | Reduce unsafe outputs | Guardrails + policy compliance | 42% fewer unsafe outputs | Safe, policy-compliant responses | Alignment is a measurable product metric |
| 6 | Scale / infra | Agentic + microservices infra | Reliable multi-step workflows | Fault tolerance + throughput | Retry logic, 100K+ req/day, Docker/K8s | 60% fewer failed runs | Infra discipline transfers to training pipelines |

**Case study:** Qwen3 QLoRA Story Director — the strongest post-training-adjacent proof (finetuning + curated data + schema conditioning).
**Red-flag Qs:** "Have you done RLHF/PPO in production?" → honest: "My finetuning is SFT/QLoRA and I've designed eval and preference-scoring frameworks; RL post-training is where I'd ramp, and my data + eval foundation makes that ramp fast." "On-site Mountain View?" → open to relocation.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on Greenhouse boards API, full structured JD returned | Positive |
| Tech specificity | Very high (named RL algos, frameworks, parallelism strategies) | Positive |
| Requirements realism | Coherent, specialized post-training scope | Positive |
| Company | NewsBreak — established platform, 40M+ MAU, multiple live eng roles | Positive |
| Salary | Disclosed ($150–230K) | Positive |
| Location clarity | Explicit Mountain View, CA | Positive |

**Context:** First-party Greenhouse posting, disclosed comp, highly specific specialist stack, part of a broad, live engineering hiring slate = high-confidence real role.

## H) Draft Application Answers

_(Score 3.0 < 4.5 — full drafts deferred; PDF tailored. Positioning line: "Applied ML engineer strong on SFT/QLoRA finetuning, training-data curation, and regression-prevention eval pipelines; ramping into RL post-training on a solid PyTorch/HF foundation.")_

---

## Keywords extraídas

LLM post-training, SFT, RLHF, PPO, GRPO, DPO, reward modeling, PyTorch, Hugging Face, TRL, DeepSpeed, FSDP, vLLM, distributed training, QLoRA, finetuning, dataset curation, preference data, evaluation pipelines, tokenization, alignment
