# Evaluación: Axiomatic AI — Applied AI Engineer

**Fecha:** 2026-05-03
**Arquetipo:** Applied AI / LLM Engineer (R&D-to-product bridge)
**Score:** 3.9/5
**URL:** https://job-boards.greenhouse.io/axiomaticai/jobs/4720346101
**Legitimacy:** High Confidence
**Location:** Barcelona, Spain / Boston, US / Open to Remote
**PDF:** output/2026-05-03/cv-deepak-mallampati-axiomatic-ai-applied-ai-engineer-2026-05-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (R&D ↔ product) |
| Domain | Verifiable / interpretable AI for scientific research (deep learning + formal logic) |
| Function | Build — turn research prototypes into production-ready LLM/agent systems |
| Seniority | Mid (3+ y SE experience) |
| Remote | Boston US / Barcelona / Open to Remote |
| Team size | Small R&D + product (specifics not stated) |
| TL;DR | Bridge between R&D scientists and product engineers — productionize LLM and agent prototypes for verifiable scientific AI; strong stack match. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| 3+y SE experience | ⚠️ 2.5y at Progress Solutions + Emerson internship | ~3y combined; light gap |
| Python (primary) | ✅ Strong | cv.md Skills + Progress Solutions |
| Agent frameworks (LangChain, PydanticAI) | ✅ LangChain | cv.md Skills + Agentic Healthcare Claims project |
| LLM APIs (OpenAI, Anthropic, HuggingFace) | ✅ All three | Manga Lens (Claude/GPT-4o), Dream Decoder (Perplexity), HF Transformers |
| FastAPI / REST | ✅ Strong | Progress Solutions, Dream Decoder, Pixel Engine |
| Git, shared codebases | ✅ | Implicit, all projects |
| Docker / CI/CD | ✅ Docker; ✅ CI/CD (Jenkins at Emerson) | Multiple projects |
| Bridge research → product | ✅ Suvidha Foundation hierarchical summarization productionized as Flask API | Direct analog |
| Reliability / latency / cost optimization | ✅ ~30% post-deploy defect reduction; Manga Lens 7-day cache; YOLOv8 latency -30% | Multiple proof points |

**Gaps:**
1. **Years of SE experience (soft)** — JD says "3+y SE"; Deepak has ~2.5y of focused AI/ML SE + ~10mo Emerson. Mitigation: highlight ~3y combined and lead with productionization proof points.
2. **PydanticAI specifically** — not on CV; mitigation: easy to demo via small project; mention LangChain experience as foundation.
3. **Visa sponsorship** — JD mentions sponsorship question on application; not explicitly stated as available. Boston US is preferred; Barcelona is non-US. **Open to Remote** is the safest framing for F-1 OPT.

## C) Nivel y Estrategia

JD targets 3+y mid; Deepak's natural band fits. Sell the productionization angle (FastAPI services, Docker, CI/CD, ~30% defect reduction) — directly answers the "research-to-production bridge" framing.

If downleveled: comp range not disclosed; ask for $135K+ base for Boston-equiv or pro-rated remote.

## D) Comp y Demanda

Axiomatic AI is a Boston-area research startup (founded ex-MIT). Comparable mid-level Applied AI Engineer roles in Boston: $130-180K base + equity (Glassdoor + Levels). Open-to-remote may discount 10-15%. Demand for "research-to-production" Applied AI engineers is strong in 2026.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "healthcare-focused RAG..." | Lead with "research prototypes → production-ready LLM/agent systems" framing | Mirror JD top line |
| 2 | Skills (LLM) | Lists LangChain | Promote "LangChain + LLM APIs (OpenAI/Anthropic/HuggingFace) + FastAPI + Docker" front | Stack 1:1 |
| 3 | Experience bullets | Defect reduction is bullet 4 | Promote "Packaged ML/LLM as FastAPI/Flask + Docker" to bullet 1 | Direct match for productionization |
| 4 | Projects | Manga Lens has multi-provider LLM | Add line "multi-provider LLM orchestration with payload-aware encoding" | Signals real-world LLM API integration |
| 5 | Footer | Standard | "US-based, F-1 OPT, open to sponsorship" + "open to Boston, remote, or Barcelona EU" | Match JD's open-to-remote stance |

## F) Plan de Entrevistas

| # | Requisito JD | STAR+R | S | T | A | R | Reflection |
|---|--------------|--------|---|---|---|---|------------|
| 1 | Bridge R&D → product | Suvidha video summarization | Hierarchical transformer summaries needed for non-tech staff | Production-grade pipeline w/ timestamp alignment | Built Flask API + lightweight UI; 60-70% review time saved | 85% highlight alignment | Treating non-technical staff as the real customer changed the API contract — minimized clicks per insight |
| 2 | LangChain agent workflows | Agentic Healthcare Claims | Multi-agent claims pipeline w/ schema-validated handoffs | Prevent cascading hallucinations across agents | JSON schema contracts between agents + RAG-grounded CPT/ICD validation | Audit-ready reasoning traces | Schema validation between agents is the cheapest hallucination defense |
| 3 | OpenAI/Anthropic/HF integration | Manga Lens | Translate manga panels in real time across 4 vision providers | Provider-agnostic UX | Per-provider payload encoding (WebP cloud, JPEG Ollama) + 7-day cache + 29 site selectors | Shipped to Chrome Web Store | Providers diverge on subtle constraints (CUDA crashes on WebP) — abstraction layer must be honest about capability deltas |
| 4 | FastAPI productionization | Progress Solutions ML/LLM packaging | Multi-team need for ML/LLM behind APIs | Deploy under HIPAA constraints | FastAPI/Flask + Docker + structured logging + load simulation | ~30% defect reduction post-deploy | Logging schema decisions made at packaging time pay off 5x in incident response |
| 5 | Reliability / evals | Healthcare RAG retrieval evals | Need to ground LLM responses on clinical content | Build evaluation pipeline | ~35% retrieval precision gain, >30% irrelevant retrieval reduction, >90% grounding alignment | Reproducible eval harness | Evals come before prompts — measuring first kept us from over-tuning to demo cases |
| 6 | Cost / latency optimization | YOLOv8 drowsiness detection | Two-stage CNN was too slow for real-time | Unified detection+classification | Single YOLOv8 model + sliding window + adaptive frame skipping | -30% inference latency, -25% false positives | Architecture simplification beats parameter tuning at the latency margin |

**Case study:** Healthcare Claims agentic pipeline — directly mirrors Axiomatic's "verifiable AI" theme via schema contracts + audit traces.

**Red-flag questions:**
- "Why only 3y experience?" → "I started focused on production AI immediately; my Emerson DBA work taught the production discipline that healthcare AI later required."
- "Why leave healthcare?" → "Healthcare RAG taught me that the real bottleneck is research-to-production translation — Axiomatic productizes exactly that across all sciences."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active Greenhouse JSON returned full data | Positive |
| Description quality | Specific stack (LangChain/PydanticAI/FastAPI/Docker), explicit y-band, R&D ↔ product framing, named tooling preferences | Positive |
| Company signals | Axiomatic AI is a real ex-MIT spin-out building verifiable AI for science; small but funded | Positive |
| Reposting | First time in scan-history | Positive |
| Role market context | Applied AI Engineer with research-to-production framing is in high demand 2026 | Positive |

**Context Notes:** Boston / Barcelona / Open to Remote = real geographic flexibility. "Visa sponsorship" question on app means it is a genuine consideration, not a blocker.

---

## Keywords extraídas

Applied AI Engineer, LLM, agent, LangChain, PydanticAI, OpenAI API, Anthropic API, HuggingFace, FastAPI, REST, Docker, CI/CD, Python, production reliability, latency, cost optimization, R&D-to-product, verifiable AI, deep learning, formal logic, scientific research, evaluation
