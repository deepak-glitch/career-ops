# Evaluación: Bjak — Applied AI Engineer

**Fecha:** 2026-06-17
**Arquetipo:** Applied AI / LLM Engineer + Generative AI / RAG Engineer
**Score:** 3.3/5
**URL:** https://himalayas.app/companies/bjak/jobs/applied-ai-engineer-1718778854
**Legitimacy:** Proceed with Caution
**Location:** Remote — Switzerland timezone (±0h), Bjak HQ in Malaysia
**Region:** Intl
**PDF:** output-intl/2026-06-17/cv-deepak-mallampati-bjak-2026-06-17.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (primary) + Generative AI / RAG (secondary) |
| Domain | Insurance / financial-services SaaS (largest SE Asia insurance portal) |
| Function | Build (end-to-end AI features) + reliability |
| Seniority | Mid-IC |
| Remote | Remote, Switzerland TZ ±0h |
| Team size | Not disclosed; product/AI team |

**TL;DR:** Bjak is hiring an Applied AI Engineer to ship features end-to-end across prompts, tools, memory, agent workflows, inference (vLLM), vector DBs, and eval. Strong shape match for Deepak. The Switzerland TZ + non-US employer make it less attractive than US-remote roles for an F-1 OPT candidate, but Deepak should evaluate if Bjak hires contractors/remote without sponsorship.

## B) Match con CV

| JD requirement | CV proof (line) |
|----------------|----------------|
| Build AI features end-to-end (model → product) | cv.md L25 (agentic LLM systems in prod) + L47 (12 APIs, p95 800ms) + Manga Lens live ext |
| Prompts, tools, memory, agent workflows | cv.md L25 (conductor–subagent orchestration; tool-scoped subagents) |
| Structured / predictable outputs | cv.md L29 (RAGAS/BERTScore/custom metrics) + L46 (42% unsafe outputs reduction) |
| Cross-layer debug (model, orchestration, infra, UX) | cv.md L25 (Progress) + L65 (Manga Lens browser ext = UX + LLM + infra) |
| Optimize latency / cost / reliability | cv.md L30 (prompt compression, semantic caching, model routing) + L47 (p95 1.5s → 800ms) |
| Lightweight eval frameworks (real-world perf) | cv.md L29 (structured LLM eval and monitoring framework) |
| Python, PyTorch/JAX | cv.md L13 (PyTorch/TensorFlow/Keras) + L18 (Python) |
| LLM APIs (OpenAI/LLaMA/Qwen) | cv.md L12 (GPT-4o, GPT-5, Claude, Gemini, LLaMA) + L38 (Qwen3-27B QLoRA on H100) |
| Inference serving (vLLM) | — (no vLLM shipped; adjacent via model routing) |
| Vector databases | cv.md L14 (FAISS, Pinecone, Weaviate) |
| Prompt engineering, training, fine-tuning | cv.md L12 + L38 (QLoRA fine-tuning shipped) |
| Strong ML foundation + neural network architecture | cv.md L13 + L34-39 (privacy-preserving ML pipeline + research) |

**Gaps:**
1. **vLLM** (soft) — Deepak has done model routing + semantic caching, not vLLM specifically. *Mitigation:* 1-week ramp; mention adjacent inference work.
2. **JAX** (soft) — JD says "PyTorch/JAX"; Deepak is PyTorch. *Mitigation:* JAX optional, PyTorch experience qualifies.
3. **Switzerland TZ** (logistical) — Deepak is US-Eastern (UTC-5/-4 with DST). Switzerland is UTC+1/+2 → 6-7h gap. *Mitigation:* willing to overlap mornings; large async block.
4. **Bjak is SE Asia / Malaysia HQ** — work-auth: Deepak is F-1 OPT US. Bjak would need to hire as remote contractor or international employee. *Mitigation:* clarify pay structure (USD vs local) and any tax/EOR setup.

## C) Nivel y Estrategia

**Detected level:** Mid-IC. Deepak's level matches well.

**Plan "vender senior sin mentir":**
- Lead with conductor-subagent + 42% token reduction (mirrors "shape model outputs into predictable system behaviors").
- Manga Lens shipped ext = cross-layer ownership (model + orchestration + UX).
- Frame RAGAS/BERTScore + Vanguard 27% task-success lift as the "lightweight eval framework measuring real-world performance" they describe.

**Plan "si me downlevelan":** Bjak is product-engineering shop; downlevel risk is low. If comp comes in soft, ask for ESOP/equity weighting.

## D) Comp y Demanda

| Source | Range |
|--------|-------|
| Bjak Glassdoor (Malaysia HQ AI eng) | RM 120-220K (~$25-50K USD) — Malaysia local band |
| Bjak remote-EU postings (Himalayas / Glassdoor) | $70-130K USD typical for remote Applied AI mid-IC, EU TZ |
| Bjak Switzerland TZ band (estimated) | $80-140K USD remote |
| Levels.fyi (Applied AI mid-IC EU-remote 2026) | €70-120K (~$75-130K USD) |

JD does not disclose. Estimate: **$80-130K USD** remote, depending on contract structure. Substantially below US-remote bands ($125-170K).

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years..." | "Applied AI engineer who ships LLM features end-to-end — shaping model outputs, instrumenting evals, and debugging across the model/orchestration/infra/UX stack." | Mirror Bjak's exact framing. |
| 2 | Skills order | LLMs first | Lead with "LLMs, vLLM-adjacent inference, vector DBs, agent workflows, lightweight evals" | JD names vLLM + vector DBs + evals. |
| 3 | Progress bullet | Keep | Append "with structured-output contracts that make agent outputs predictable in production" | Mirrors "transform raw model outputs into structured, predictable system behaviors". |
| 4 | Manga Lens callout | Already in projects | Move next to skills as "shipped browser extension across 29+ sites — full model/orchestration/UX debugging in production" | Direct proof of cross-layer debug. |
| 5 | Footer | "Kent, OH" | Add "Available remote, willing to overlap CET mornings" | Surface TZ flexibility. |

LinkedIn: Headline "Applied AI Engineer | End-to-End LLM Features"; Featured: Manga Lens + career-ops.

## F) Plan de Entrevistas

| # | JD Req | STAR+R | S | T | A | R | Reflection |
|---|--------|--------|---|---|---|---|------------|
| 1 | End-to-end AI feature shipping | Manga Lens | Untranslated manga blocked global readers | Ship inline translation across browsers | Built OCR + LLM + UX, shipped Chrome Web Store | Live on 29+ sites, real users | UX is half the model decision |
| 2 | Shape model outputs into predictable behavior | Progress conductor-subagent | Multi-step agent outputs drifted | Make outputs predictable + auditable | Structured-output contracts + tool budgets per subagent | 42% token reduction, accuracy held | Contracts > prompts for production agents |
| 3 | Lightweight eval framework, real-world perf | Vanguard model comparison | 25+ agents needed cross-model selection | Pick GPT-4o vs Claude vs Gemini honestly | Built eval harness with task-success metrics | 27% task-success lift after model swap | Eval-driven model selection beats vibes every time |
| 4 | Cross-layer debug (model/orch/infra/UX) | Manga Lens browser ext | Translation glitched on certain sites | Find whether bug was OCR, model, or DOM | Walked the stack, instrumented each layer | Identified DOM mutation race, fixed in extension layer | Reproducing the user's exact path is half the debug |
| 5 | Optimize latency / cost / reliability | Vanguard APIs | p95 latency 1.5s, blocking other features | Cut to 800ms without quality loss | Prompt compression + semantic caching + model routing | p95 800ms, 12 APIs in prod | Caching the embedding query is the cheapest 30% you'll ever get |
| 6 | Vector DBs / RAG | Progress healthcare RAG | Clinical Q&A hallucinating on long docs | Cut hallucination, ground answers | Dense retrieval + cross-encoder rerank + RAGAS evals | Hallucination materially down | Rerank wins on long-form medical |

Case study: **Manga Lens** — directly the kind of "user-facing AI feature debugged across layers" Bjak describes.

Red-flag: "Why apply remote from US for a Switzerland-TZ role?" → "I want to ship AI features end-to-end at a company where the loop is short. Bjak's tech and pace fit; I'm comfortable on CET mornings + async PM for the time-zone overlap."

## G) Posting Legitimacy

**Assessment:** **Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Aggregator visibility | Himalayas listing; need to verify direct Bjak ATS | Concerning |
| Tech specificity | vLLM, PyTorch/JAX, vector DBs, structured outputs — high specificity | Positive |
| Realism | Mid-IC, multi-layer ownership | Positive |
| Internal contradictions | None | Neutral |
| Company hiring signals | Bjak is a real SE Asia insurance/finance portal (10M+ users), active hiring 2026 | Positive |
| Salary transparency | Not disclosed (Malaysia + EU remote) | Concerning |
| TZ + employer location mismatch | Malaysia HQ, Swiss-TZ remote — unusual; check sponsorship/contractor structure | Concerning |
| Application deadline | July 26, 2026 — concrete deadline, suggests active hiring | Positive |

**Context notes:** Bjak is a legitimate insurance/finance scale-up. The Swiss-TZ-from-Malaysia structure is unusual; likely EOR-based contractor model. Verify pay band and tax structure before deep customization.

## H) Draft Application Answers

(Score 3.0-3.9 — short drafts)

**Q: Why Bjak?**
> Bjak runs the loop I want — model behavior shaping, eval, and UX in the same engineer's head. I've been running that loop at Progress (healthcare RAG + agentic workflows) and on Manga Lens (a Chrome extension I ship to real readers). Insurance has the structured-output + reliability bar that rewards eval discipline, and I want to build there.

**Q: TZ overlap?**
> I'm US Eastern; willing to overlap CET 9am-1pm (3am-7am ET) on standup days and async-heavy the rest. I prefer written-first communication so this maps to how I already work.

---

## Keywords extraídas

Applied AI Engineer, LLM features, vLLM, inference serving, vector databases, prompt engineering, fine-tuning, structured outputs, agent workflows, evaluation frameworks, latency optimization, model routing, semantic caching, end-to-end AI, Python, PyTorch, JAX, Bjak, insurance, Switzerland remote
