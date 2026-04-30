# Evaluación: LaunchDarkly — SDK Software Engineer, AI

**Fecha:** 2026-04-30
**Arquetipo:** AI Platform / MLOps Engineer (hybrid: Applied AI / LLM Engineer)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/launchdarkly/jobs/7647797003
**Legitimacy:** High Confidence
**Location:** Remote — US (zoned salary)
**PDF:** output/2026-04-30/cv-deepak-mallampati-launchdarkly-sdk-ai-2026-04-30.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | AI Platform / MLOps Engineer (hybrid: Applied AI / LLM Engineer) |
| Domain | Developer-tooling SDKs + AI feature flagging |
| Function | Build (open-source SDK) |
| Seniority | Senior IC — explicit 5+ years Python and TypeScript |
| Remote | Fully Remote (US, salary zones 1/2/3) |
| Team size | Not stated; sits inside the AI SDK product squad |
| TL;DR | Senior IC role building open-source AI SDKs (Python + TypeScript) atop LaunchDarkly's feature-flag platform, with primary integrations against OpenAI / Vercel AI SDKs. |

## B) Match con CV

| Requisito JD | Match en CV | Tipo |
|--------------|-------------|------|
| 5+ years Python + TypeScript | 2.5 yrs Python (Progress Solutions, Suvidha) + TypeScript on Manga Lens / Dream Decoder | Gap (seniority) |
| Build libraries / packages for developers | Manga Lens (Chrome extension shipped solo, Manifest V3 + service workers + 4-provider abstraction) | Adjacent |
| AI SDKs experience (OpenAI, Vercel AI) | Multi-provider integration (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) on Manga Lens | Adjacent |
| Unit / integration / load tests + benchmarks | FastAPI inference services with structured logging + load simulation; ~30% defect reduction post-deploy | Direct |
| Open-source contribution | Manga Lens is publicly shipped on Chrome Web Store; private GH portfolio | Partial |
| Dev-experience advocacy | Dream Decoder structured-prompt layer (~30% alignment, ~25-30% first-pass success) — DX-style impact framing | Adjacent |

**Gaps:**
1. **5+ years experience** — Hard band, candidate has 2.5. Mitigation: lead with shipped SDK-style artifact (Manga Lens) + measurable dev-impact metrics; acknowledge the band and offer a contractor / "trial" angle if recruiter reachable.
2. **Open-source maintainer track record** — Light. Mitigation: link to Manga Lens repo (if public) and articulate how multi-provider abstraction maps to AI SDK design choices (provider routing, fallback, cache).
3. **Vercel AI SDK specifics** — Not in CV. Mitigation: note prior multi-provider routing work; commit to ramp.

## C) Nivel y Estrategia

The JD asks for Senior 5+. Candidate sits at Mid (2.5). Realistically a downlevel to "AI SDK Engineer" or a "L3 → L2" reframing is required.

**Sell senior without lying:** "I've shipped a public AI SDK-shaped product (Manga Lens, Chrome Web Store) end-to-end with 4-provider abstraction, payload routing, cache, and Manifest V3 service workers. The shape of the work matches your SDK roadmap; the years count is light, but the artifact is real."

**If downleveled:** Accept. Negotiate Zone 2/3 base with explicit 6-month review and L3 promotion criteria documented up front.

## D) Comp y Demanda

| Dimension | Data | Source |
|-----------|------|--------|
| LaunchDarkly Senior SDK Eng (Zone 1) | $171,200 - $235,400 | JD |
| LaunchDarkly Senior SDK Eng (Zone 2) | $154,100 - $211,860 | JD |
| LaunchDarkly Senior SDK Eng (Zone 3) | $145,500 - $200,090 | JD |
| Market Senior SDK Eng remote-US | $160-220K + RSUs | Levels.fyi (general) |
| Demand for AI SDK roles | Rising — every infra company is shipping AI guardrails / experimentation | Industry trend |

LaunchDarkly comp is competitive within zone. Plus RSUs.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare RAG / agentic | Reframe around "shipped multi-provider AI SDK on Chrome Web Store + production FastAPI services" | Aligns to SDK / DX archetype |
| 2 | Skills | LangChain top | Move TypeScript + Manifest V3 + multi-provider routing higher | JD primary stack |
| 3 | Projects | Manga Lens 3rd | Lead Manga Lens; expand multi-provider routing + payload abstraction detail | Direct artifact-match |
| 4 | Experience bullet ordering | RAG first | Lead with "FastAPI / Docker production services + structured logging + load sim" | DX-leaning |
| 5 | Header | Kent OH | Add "Open to Remote-US (Zone 2/3)" sublabel | Comp-zone honesty |

LinkedIn: pin Manga Lens; headline → "Applied AI engineer | shipped multi-provider AI SDK (Manga Lens, Chrome Web Store) | Python / TypeScript".

## F) Plan de Entrevistas

| # | JD requisito | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Build libraries / packages | Manga Lens multi-provider abstraction | 4 AI vision providers, each with quirks (CUDA crash on PNG → JPEG fallback) | Build a unified inference layer | Wrote a provider-router with payload normalization, 7-day cache, per-domain selectors, Manifest V3 service workers | Shipped to Chrome Web Store; 29 site selectors; multi-provider failover working in prod | Lesson: provider quirks (CUDA / payload format) belong in the SDK, not the caller. SDK design must absorb backend instability. |
| 2 | AI SDK experience | Dream Decoder structured-prompt transformation layer | Naive direct-prompt orchestration was producing inconsistent images | Lift contextual alignment + first-pass success | Inserted intermediate structured-prompt layer between user input and image-gen API | ~30% alignment lift; ~25-30% first-pass success lift over baseline | Lesson: "prompt" is an SDK boundary — exposing structured types beats free-text concatenation. |
| 3 | Unit / integration / load tests | FastAPI ML/LLM services at Progress Solutions | Healthcare inference services going to prod with HIPAA constraints | Cut post-deploy defects | Built structured logging + load simulation + container-level smoke tests | ~30% post-deployment defect reduction | Lesson: load tests catch payload-shape regressions that unit tests miss in LLM systems. |
| 4 | Open-source contribution | Manga Lens public release | Solo Chrome extension | Ship publicly | Wrote privacy policy, narrowed host permissions, listed on Chrome Web Store | Live with users | Lesson: getting through review (permissions, privacy) is the hard part of public-SDK work. |
| 5 | Dev-experience advocacy | Multi-provider routing DX | Each provider had a different SDK shape | Hide provider differences from caller | Built a single function-call surface for all 4 providers | Caller code stays stable when providers change | Lesson: stable caller surface = SDK contract. |

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting on LaunchDarkly's own Greenhouse board | Direct corp board, structured | Positive |
| Salary disclosure (3 zones) | Transparent comp policy | Positive |
| Tech specificity | Names Python, TypeScript, OpenAI, Vercel AI SDK explicitly | Positive |
| Visa sponsorship question | Application asks; signals real evaluation | Neutral |
| Public AI feature roadmap at LaunchDarkly | LaunchDarkly is shipping AI guardrails/experimentation as a product line | Positive |
| Posting age | Not visible on page | Neutral |

LaunchDarkly is a Series D feature-flag platform expanding into AI feature flagging — this role plausibly maps to that product line.

## H) Draft Application Answers

Not generated (score 3.0 — borderline; no auto-draft for sub-3.5).

---

## Keywords extraídas

LaunchDarkly, SDK, AI SDK, Python, TypeScript, OpenAI, Vercel AI, Feature Flags, Open-source, Library, Package, Developer Experience, DX, Unit Tests, Integration Tests, Load Tests, Benchmarks, Remote-US, Zoned Salary, Manga Lens, Multi-Provider Routing, FastAPI, Docker.
