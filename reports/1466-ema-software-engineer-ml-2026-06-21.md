# Evaluación: Ema — Software Engineer, Machine Learning

**Fecha:** 2026-06-21
**Arquetipo:** ML Engineer (Applied AI Systems) (+ Applied AI / LLM Engineer)
**Score:** 3.9/5
**URL:** https://jobs.ashbyhq.com/ema/9728a171-9617-4533-9f03-10c14c3b6ca5
**Legitimacy:** High Confidence
**Location:** San Francisco Bay Area (on-site / no remote tag) — relocation
**Region:** US
**PDF:** output/2026-06-21/cv-deepak-mallampati-ema-software-engineer-ml-2026-06-21.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) with LLM/NLP/IR depth |
| Domain | Agentic AI platform ("Universal AI Employee") — NLP, retrieval, ranking, reasoning, dialog, code-gen |
| Function | Conceptualize → develop → deploy ML models (mid-level IC) |
| Seniority | Mid IC (full ML lifecycle ownership; no explicit YoE band) |
| Remote | SF Bay Area, no remote tag — assume on-site/hybrid |
| Team | Well-funded startup (Accel, Prosus, Section32; ex-Google/Coinbase/Okta founders) |

**TL;DR:** Ema is building an agentic "Universal AI Employee" platform and is hiring an ML Engineer to own the full model lifecycle behind its NLP, retrieval, ranking, reasoning, dialog and code-generation systems — Transformer models, RL, ensemble learning, agent-based systems, plus A/B testing and automated validation. The technical surface maps almost one-to-one onto Deepak's profile (RAG with cross-encoder re-ranking, multi-agent orchestration, transformer/NLP work, eval frameworks). It's a US entity (Silicon Valley HQ), which is friendly to F-1 OPT. The two drags: it reads as on-site SF Bay Area (relocation from Kent, OH) and the competitive bar of an elite-pedigree, well-funded startup.

## B) Match con CV

| JD requirement | CV proof |
|----------------|----------|
| Develop/deploy ML models for NLP, retrieval, ranking, reasoning, dialog | cv.md — RAG (dense retrieval + cross-encoder re-ranking), agentic LLM systems, NLP/NER/summarization |
| Transformer-based models, agent-based systems | cv.md — Progress conductor–subagent orchestration; Vanguard 25+ AI agents; HF Transformers, BERT/RoBERTa fine-tuning |
| RL / ensemble learning | cv.md — Emerson regression/classification; QLoRA fine-tuning (Qwen3); broad ML toolkit (PyTorch/TF) |
| Process/analyze large complex datasets | cv.md — Spark/Databricks, Kafka, document chunking over millions of regulatory docs |
| Full ML lifecycle (data → features → train → validate → deploy) | cv.md — end-to-end pipelines at Progress/Vanguard/KSU |
| A/B testing + statistical validation | cv.md — A/B Testing, RAGAS/BERTScore eval, drift detection |
| Automated testing/validation of ML solutions | cv.md — structured LLM eval + monitoring framework, regressions surfaced pre-deploy |
| Communicate ML workings to stakeholders | cv.md — partnered with product/platform/data eng across 20+ teams |
| Advanced Python | cv.md — Python primary, FastAPI, 12 APIs/microservices |

**Gaps:**
1. **On-site SF Bay Area** — *Logistical, not technical.* Relocation from Ohio required; no remote tag. *Mitigation:* Deepak is US-based (F-1 OPT) and can relocate; confirm relocation/remote flexibility in screening.
2. **Deep RL at production scale** — *Soft.* JD lists RL among "such as" techniques; Deepak's RL is lighter than his RAG/agents depth. *Mitigation:* lead with agentic + retrieval/ranking, which are the platform's core.

*(No hard blockers — strong technical fit; main friction is location.)*

## C) Nivel y Estrategia

**Detected level:** Mid IC owning full ML lifecycle. Deepak is a precise fit (4+ yrs, production GenAI).

**Plan "vender senior sin mentir":**
- Frame around the platform's core loop: retrieval + ranking + agents + evals shipped in production (Progress/Vanguard, 100k+ daily requests, 99.9% uptime).
- Emphasize transformer/NLP depth (HF, BERT/RoBERTa, QLoRA) plus the eval discipline (RAGAS/BERTScore) the JD explicitly asks for.

**Plan "si me downlevelan":** Strong startup equity context; if leveled mid, focus on scope (owning a model surface) and learning velocity rather than title.

## D) Comp y Demanda

| Item | Finding | Source |
|------|---------|--------|
| Stated band | Not disclosed in JD | JD (Ashby) |
| Market (mid ML eng, SF Bay Area startup) | ~$160k–$210k base + equity typical | Levels.fyi / market (2026) |
| Position vs market | Likely competitive given funding tier | Inference |
| Company signals | Backed by Accel, Naspers/Prosus, Section32; angels Sandberg, Moskovitz | JD |
| Demand trend | Enterprise agentic AI hiring strong in 2026 | Market context |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated framing | Add "NLP, retrieval, ranking & reasoning systems in production" | Mirror the JD's model surface |
| 2 | Agents bullet | Token-reduction lead | Lead with agent-based systems + reasoning/dialog | Matches "agent-based systems" |
| 3 | Retrieval bullet | Hallucination metric | Foreground retrieval + cross-encoder ranking | JD lists retrieval + ranking explicitly |
| 4 | Eval bullet | Buried | Surface A/B testing + automated validation (RAGAS/BERTScore) | JD calls out A/B + automated validation |
| 5 | Transformers | Skills line | Surface HF Transformers + BERT/RoBERTa/QLoRA fine-tuning | JD names Transformer-based models |

**LinkedIn:** add "NLP", "information retrieval", "ranking", "agent-based systems", "model evaluation" to Skills.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Retrieval + ranking | Healthcare RAG | Hallucination on domain queries | Ground answers in corpus | Dense retrieval + cross-encoder re-ranking | 92% precision, 40% fewer hallucinations | Ranking quality is the lever |
| 2 | Agent-based systems | Progress conductor–subagent | Objectives exceeded context budget | Reliable autonomous execution | Context-scoped subagents under a conductor | 42% token cut, accuracy held | Composable agents scale better |
| 3 | Transformer models / fine-tuning | QLoRA Qwen3 | Need controllable long-form gen | Condition model on narrative schema | 4-bit QLoRA on H100, 361-example set | Controllable structured output | PEFT makes large models tractable |
| 4 | A/B testing + validation | RAGAS/BERTScore framework | No pre-deploy quality gate | Catch regressions early | Structured eval + dashboards | Regressions surfaced pre-deploy | Evals turn vibes into a release gate |
| 5 | Large dataset processing | Vanguard/Progress pipelines | Millions of regulatory docs | Make corpus model-ready | Spark/Databricks, chunking, Kafka | 100k+ daily requests served | Data plumbing is half of ML |
| 6 | Stakeholder communication | Vanguard cross-team | Platform served 20+ teams | Align product + eng | Partnered across product/platform/data | Org-wide adoption | Translate ML into business terms |

**Case study to present:** Progress agentic + RAG production system (retrieval, ranking, agents, evals in one stack).

**Red-flag questions:** "Are you open to relocating to the Bay Area?" → "Yes — US-based on F-1 OPT, open to relocation; happy to discuss timeline and sponsorship." / "How deep is your RL?" → honest: lighter than my retrieval/agents work, but I ramp fast and the platform core is retrieval+agents, where I'm strongest.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live Ashby posting, GraphQL-resolvable | Positive |
| Tech specificity | NLP, IR, ranking, reasoning, dialog, code-gen, Transformers, RL, agents | Positive |
| Requirements realism | Full-lifecycle mid IC; coherent | Positive |
| Salary transparency | No band disclosed | Neutral |
| Company signals | Named investors (Accel/Prosus/Section32) + founder pedigree; SV HQ + global offices | Positive |
| Reposting pattern | First appearance in scan-history | Neutral |

**Context Notes:** Well-funded, named-investor startup with a specific, coherent JD = strong legitimacy. Confirm comp band and on-site/relocation expectations in first screen.

## H) Draft Application Answers

*(Score 3.9 < 4.5 — full draft answers not auto-generated. Screening priorities: relocation/remote flexibility, comp band, and framing retrieval+agents as the platform core. Talking points in Blocks C and F.)*

---

## Keywords extraídas

Machine Learning Engineer, NLP, information retrieval, ranking, reasoning, dialog, code generation, Transformer models, reinforcement learning, ensemble learning, agent-based systems, RAG, cross-encoder re-ranking, A/B testing, model validation, RAGAS, BERTScore, Python, agentic AI, large-scale datasets
