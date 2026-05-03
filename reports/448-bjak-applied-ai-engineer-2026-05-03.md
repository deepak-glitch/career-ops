# Evaluación: Bjak (A1) — Applied AI Engineer

**Fecha:** 2026-05-03
**Arquetipo:** Applied AI / LLM Engineer (heavier ML-systems lean)
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/bjakcareer/2410bf26-de9e-471b-9a2c-5bfa2cad4d00
**Legitimacy:** Proceed with Caution
**Location:** United States (Ashby locationName)
**PDF:** output/2026-05-03/cv-deepak-mallampati-bjak-applied-ai-engineer-2026-05-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (ML-systems heavy) |
| Domain | A1 — proactive AI assistant (context across conversations + planning + memory) |
| Function | Build AI features end-to-end (model → system → UX) |
| Seniority | Mid (no exact y stated) |
| Remote | US-filed Ashby record |
| Team | Small, "world-class" team — collective decision-making |
| TL;DR | Ship LLM-powered agent product end-to-end (prompts, tools, memory, agent workflows, eval frameworks, vLLM serving). Mid-IC. Heavier ML/systems lean than typical Applied AI roles. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| Build AI features model→system→UX | ✅ Healthcare RAG + agentic workflows shipped end-to-end | Progress Solutions |
| Prompts, tools, memory, agent workflows | ✅ Agentic Healthcare Claims pipeline w/ schema contracts | cv.md Projects |
| Structured / reliable / predictable outputs | ✅ Schema-validated JSON contracts between agents | Direct match |
| Debug across stack (model/orch/infra/UX) | ✅ Multi-provider Manga Lens (CUDA crash debugging across providers) | cv.md Projects |
| Latency, cost, production reliability | ✅ ~30% post-deploy defect reduction; YOLOv8 -30% latency | Multiple |
| Lightweight eval frameworks | ✅ Healthcare RAG eval pipeline; >90% grounding alignment | Progress Solutions |
| Python | ✅ Strong | Skills |
| PyTorch / JAX | ⚠️ PyTorch yes; **JAX no** | Gap |
| LLM APIs (OpenAI, LLaMA, Qwen) | ✅ OpenAI/Anthropic; ⚠️ no LLaMA/Qwen self-host | Mitigatable (Ollama exp via Manga Lens) |
| Inference / serving (vLLM) | ⚠️ Docker/FastAPI yes; **vLLM no** | Hard gap |
| Vector DB | ✅ pgvector + LangChain | cv.md Skills |
| Fine-tuning / training | ⚠️ Stable Diffusion + LoRA in Pixel project; no production fine-tuning | Partial |
| Production-quality code | ✅ HIPAA-conscious, structured logging, audit trails | Progress Solutions |

**Gaps:**
1. **JAX experience** — not on CV. Not a hard blocker since PyTorch/JAX are interchangeable for most use cases; mention via "open to learn JAX in role".
2. **vLLM serving** — JD lists vLLM specifically. Mitigation: Ollama experience (Manga Lens) + FastAPI/Docker production deployment shows the same general competency.
3. **Production fine-tuning** — Pixel Synthesis project uses LoRA but isn't production. Mitigation: lead with the "agent reliability + schema contracts" angle, not the model training angle.

## C) Nivel y Estrategia

Mid-IC; Deepak fits if framed as "agent reliability + production LLM" rather than "model training + serving infra". The role emphasizes "magical AI product" and "small world-class team" — startup velocity. Strategy: emphasize end-to-end shipping (Manga Lens to Chrome Web Store solo, healthcare RAG production).

If downleveled or asked about JAX/vLLM: honest about gap, offer 1-2 weeks of bring-up time.

## D) Comp y Demanda

Bjak is a Malaysian fintech (insurance comparison & financial services). The "A1" branding suggests a US-incorporated AI subsidiary. Comp: US Applied AI Engineer mid-band $130-180K base + equity. **Caveat:** Bjak's primary market is SEA; US-filed posting may be remote-US for an offshore team (verify on screening call). Salary may be lower than pure US-domestic startup band.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "healthcare-focused RAG..." | Lead with "ship AI features end-to-end (model → system → UX); production LLM with reliability + latency discipline" | Mirrors JD top line |
| 2 | Skills (LLM) | LangChain prominent | Add "agent workflows: prompts, tools, memory; eval frameworks" | Direct match for "prompts, tools, memory" language |
| 3 | Projects | Agentic Healthcare first | Promote Manga Lens "multi-provider failure isolation + per-provider payload encoding" | Signals debugging across model/infra/UX |
| 4 | Skills (Inference) | Docker/FastAPI listed | Add "Ollama (local LLM serving), HF Transformers, vector DB (pgvector)" | Closer to vLLM-class self-host serving |
| 5 | Footer | Standard | "US-based, F-1 OPT, open to sponsorship" | Bjak likely sponsors international; lead with status |

## F) Plan de Entrevistas

| # | Requisito JD | STAR+R | S | T | A | R | Reflection |
|---|--------------|--------|---|---|---|---|------------|
| 1 | Ship AI features end-to-end | Manga Lens | Manga panels untranslated for non-Japanese readers | Multi-provider Chrome extension | Manifest V3 + 4 vision providers + 7-day cache + 29 site selectors | Shipped to Chrome Web Store solo | Solo end-to-end shipping forces ruthless scope discipline |
| 2 | Prompts, tools, memory, agent workflows | Agentic Healthcare Claims | Cascading hallucinations across agents | Multi-agent claims pipeline | Schema-validated JSON contracts between agents + RAG-grounded CPT/ICD validation | Audit-ready risk scoring | Schema contracts > prompt engineering for agent reliability |
| 3 | Debug across stack (model/orch/infra/UX) | Manga Lens CUDA crash | WebP payloads crashed local Ollama | Per-provider payload abstraction | JPEG for Ollama, WebP for cloud, dedup at coordinate-remap layer | Stable across providers | Provider deltas hide in payload encoding, not the API surface |
| 4 | Optimize latency / cost / reliability | YOLOv8 drowsiness | Two-stage CNN too slow real-time | Unified detection+classification | Single YOLOv8 + adaptive frame skipping + sliding window FP suppression | -30% inference latency, -25% false positives | Architecture simplification > parameter tuning at the latency margin |
| 5 | Lightweight eval frameworks | Healthcare RAG evals | Need to ground LLM responses | Build eval pipeline | ~35% retrieval precision, >30% irrelevant retrieval reduction, >90% grounding alignment | Reproducible eval harness | Evals come before prompts |
| 6 | Production reliability | Progress Solutions FastAPI/Docker | ML/LLM behind APIs under HIPAA | Deploy under regulated constraints | FastAPI/Flask + Docker + structured logging + load simulation | ~30% defect reduction post-deploy | Logging schema decisions made at packaging time pay off 5x |

**Case study:** Healthcare Claims agentic pipeline + Manga Lens multi-provider abstraction.

**Red-flag questions:**
- "How would you build memory for an AI assistant?" → "Schema-typed conversation summary + per-thread vector store + reflection-on-write hook to deduplicate facts. I built schema-validated JSON contracts between agents in healthcare claims; the same pattern applies to memory writes."
- "Have you used vLLM?" → "I've productionized models behind FastAPI + Docker (HIPAA stack) and used Ollama locally for Manga Lens. vLLM is the natural next step for higher-throughput serving — happy to ramp up in week one."

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active Ashby JSON; descriptive 3500+ char JD | Positive |
| Description quality | Specific stack (PyTorch/JAX/vLLM/Vector DB), explicit role outcomes | Positive |
| Company signals | Bjak is a well-known Malaysian fintech ($300M+ raised); A1 product is a real internal AI initiative | Positive |
| US-filing | locationName = "United States" but company is Malaysia-HQ; ambiguity on actual work location | Concerning |
| Reposting | First in scan-history | Positive |
| Role market context | Applied AI Engineer for proactive AI assistant is a real product role | Positive |

**Context Notes:** The US-filed posting at a Malaysia-HQ company may mean (a) genuine remote-US hire for SEA-based product, or (b) remote-anywhere posting tagged US for ATS reasons. Verify on screening call: where does the team sit, and is W-2 US employment offered?

---

## Keywords extraídas

Applied AI Engineer, A1, Bjak, agent workflows, prompts, tools, memory, structured outputs, eval frameworks, latency optimization, cost optimization, production reliability, Python, PyTorch, JAX, LLM APIs, vLLM, vector DB, fine-tuning, deployment, ML systems
