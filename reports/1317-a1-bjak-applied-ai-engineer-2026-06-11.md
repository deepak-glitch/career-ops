# Evaluación: A1 (Bjak) — Applied AI Engineer

**Fecha:** 2026-06-11
**Arquetipo:** Applied AI / LLM Engineer
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/bjakcareer/e128c8a0-fb9c-47bf-be19-10dd58375ad4
**Legitimacy:** High Confidence
**Location:** Seoul, Korea — Remote (isRemote: true)
**Region:** Intl
**PDF:** output-intl/2026-06-11/cv-deepak-mallampati-a1-bjak-applied-ai-engineer-2026-06-11.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (encaje directo) |
| Domain | Consumer AI — proactive AI smart assistant (long-running workflows, persistent context) |
| Function | Build (model → system → user experience, end-to-end ownership) |
| Seniority | Mid IC ("Applied AI Engineer"; no Senior/Staff qualifier) |
| Remote | Remote (Seoul, Korea entity; `isRemote: true`) |
| Team size | Not stated (early product team, "A1") |
| Published | 2026-06-02 (fresh, ~9 días) |
| TL;DR | Turn model capabilities into reliable product behavior — prompts, tools, memory, agent workflows, evals — for a consumer AI assistant. Textbook Applied AI role. |

## B) Match con CV

| Requisito del JD | Evidencia en `cv.md` | Fuerza |
|------------------|----------------------|--------|
| Ship AI features end-to-end (model → system → UX) | End-to-end delivery data→API; MangaLens (shipped Chrome extension, 29+ sites) | Fuerte |
| Design/iterate prompts, tools, **memory, agent workflows** | Conductor–subagent orchestration; 25+ AI agents at Vanguard; LangChain/LangGraph | Fuerte |
| Turn raw model outputs into structured, reliable behavior | "structured outputs / reliability" — agentic workflows with safeguards, content controls | Fuerte |
| Lightweight **evaluation frameworks** for real-world perf | LLM eval framework: RAGAS, BERTScore, custom domain metrics, dashboards | Fuerte |
| Optimize **latency, cost, production reliability** | Prompt compression, semantic caching, model routing; p95 1.5s→800ms; −42% tokens | Fuerte |
| Python | Core language | Fuerte |
| LLMs (OpenAI-style APIs, **LLaMA, Qwen**) | GPT-4o/5, Claude, Gemini, LLaMA; **fine-tuned Qwen3 via 4-bit QLoRA on H100** | Fuerte (Qwen directo) |
| PyTorch / JAX | PyTorch, TensorFlow, Keras | Medio (PyTorch sí; **JAX gap**) |
| Inference / serving (e.g. **vLLM**) | Model serving, inference cost optimization, semantic caching | Medio (serving sí; **vLLM no explícito**) |
| Vector DB | FAISS, Pinecone, Weaviate; hybrid search, cross-encoder re-rank | Fuerte |
| Fine-tuning / deploying ML models | LoRA/QLoRA/PEFT; Qwen3-27B QLoRA; BERT/RoBERTa fine-tune | Fuerte |

**Gaps:**
1. **JAX** (nice-to-have). *Mitigación:* strong PyTorch base; JAX is learnable; emphasize framework-agnostic ML depth.
2. **vLLM** specifically (nice-to-have). *Mitigación:* has serving + inference-optimization experience (semantic caching, model routing); vLLM is a quick ramp. Mention in cover letter as "serving stack I'm eager to deepen."
3. **Consumer-scale assistant domain** vs. regulated-enterprise background. *Mitigación:* reliability-under-non-determinism is exactly Deepak's strength (eval frameworks, guardrails, retry infra) — reframe regulated rigor as an asset for "reliable long-running workflows."

## C) Nivel y Estrategia

- **Nivel JD:** mid Applied AI IC, "own problems end-to-end." **Nivel natural de Deepak:** mid Applied AI — excelente encaje, top-archetype.
- **Vender sin mentir:** lead with the **Qwen QLoRA fine-tuning** + **agentic eval/reliability** stack — directly mirrors "non-deterministic model behavior" + "lightweight evaluation frameworks." Position the conductor–subagent framework as proof of "memory + agent workflows."
- **Si downlevelan:** comp undisclosed; treat as relocation/visa conversation (Korea entity). Negotiate remote-from-US viability explicitly.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp específica | No disclosed (Ashby posting-api returned empty compensation tiers) | Ashby posting-api |
| Market context | Applied AI Engineer comp varies widely for a Korea-based remote startup; no reliable public figure | — |
| Demand | High globally for Applied AI / LLM product engineers | General market |

*No salary published; no company-verified figure available — stated honestly rather than estimated.*

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises" | Add "ships reliable LLM product behavior — prompts, tools, memory, agents — under non-deterministic conditions" | Mirror JD opening |
| 2 | Skills | Fine-tuning line | Surface **Qwen / LLaMA + QLoRA** prominently | JD names LLaMA, Qwen explicitly |
| 3 | Experience | Inference optimization bullet | Add serving/vLLM-adjacent framing (semantic caching, model routing) | JD lists vLLM/inference serving |
| 4 | Projects | MangaLens | Frame as end-to-end shipped AI product (model→UX) | "ship AI features end-to-end" |
| 5 | Eval framework bullet | RAGAS/BERTScore | Promote — "lightweight eval frameworks for real-world performance" | Exact JD phrase |

**LinkedIn:** headline → "Applied AI Engineer | Agentic LLM systems, fine-tuning (QLoRA), eval & reliability"; add Qwen, vLLM (learning), JAX (learning) to interests; pin MangaLens + Story Director LLM (Qwen3 QLoRA).

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Reliable behavior under non-determinism | Agentic eval framework | LLM regressions invisible pre-deploy | Build measurable reliability | RAGAS + BERTScore + custom metrics + dashboards | Caught regressions before release | Treat model behavior as a testable surface |
| 2 | Prompts/tools/memory/agent workflows | Conductor–subagent framework | Single LLM overloaded on multi-step tasks | Decompose into autonomous subagents | Context-scoped orchestration with memory | −42% tokens, sustained accuracy | Context scoping > raw model scale |
| 3 | Fine-tuning / deploying ML | Story Director LLM | Needed controllable long-form generation | Fine-tune Qwen3 | 4-bit QLoRA on H100, 6-stage schema | Controllable narrative generation | Data schema design drives fine-tune quality |
| 4 | Latency / cost / production reliability | Vanguard APIs + caching | p95 latency too high, cost pressure | Optimize serving | Prompt compression, semantic caching, model routing | p95 1.5s→800ms, −42% tokens | Caching + routing are the cheapest wins |
| 5 | End-to-end product ownership | MangaLens | Untranslated manga inaccessible | Ship an inline AI translator | Real-time translation across 29+ sites, live on Chrome Web Store | Shipped, in-market product | Owning model→UX forces real reliability |
| 6 | Debug across full stack | Automation infra | Flaky multi-step prod runs | End-to-end reliability | Scheduled orchestration + exponential backoff | −60% failed runs | Debug the orchestration layer, not just the model |

**Case study a presentar:** Story Director LLM (Qwen3 QLoRA) — perfect for a team listing LLaMA/Qwen + fine-tuning.
**Red-flag Qs:** "Korea-based role on F-1 OPT?" → confirm remote viability + timezone overlap honestly; "vLLM/JAX experience?" → acknowledge gap, show adjacent serving/PyTorch depth + fast-ramp evidence.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Published 2026-06-02 (~9 días) — fresh | Positive |
| Apply / live status | Present in Bjak Ashby posting-api active job board (in-memory verify) | Positive |
| Tech specificity | Names Python, PyTorch/JAX, vLLM, vector DB, LLaMA/Qwen; clear end-to-end scope | Positive |
| Requirements realism | Coherent mid Applied AI IC; no contradiction | Positive |
| Company signals | A1 product under Bjak careers board; active multi-role hiring | Neutral-Positive |
| Reposting | No prior A1/Bjak Applied AI entry in scan-history | Neutral |
| Salary transparency | Omitted | Neutral (Low reliability) |

**Context Notes:** Early consumer-AI product team; some org opacity (A1 posted under Bjak's Ashby board) is normal for a sub-brand. A sibling "ML Engineer (Diffusion/Vision)" posting was found delisted during this run — that role expired, not this one; this Applied AI posting is independently verified live.

## H) Draft Application Answers

*(Score 4.0 < 4.5 — full draft answers deferred; cover-letter hook prepared:)* Lead with **Qwen3 QLoRA fine-tuning** + the **agentic conductor–subagent framework** + **RAGAS/BERTScore eval stack** as direct evidence for "reliable behavior under non-deterministic models." Acknowledge vLLM/JAX as fast-ramp gaps; state F-1 OPT remote viability openly.

---

## Keywords extraídas
Applied AI Engineer, LLM, agentic workflows, prompts, tools, memory, evaluation frameworks, Python, PyTorch, JAX, vLLM, inference serving, vector DB, LLaMA, Qwen, fine-tuning, QLoRA, latency optimization, cost optimization, production reliability, end-to-end, non-deterministic, structured outputs
