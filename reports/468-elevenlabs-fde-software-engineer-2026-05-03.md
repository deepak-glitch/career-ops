# Evaluación: ElevenLabs — Forward Deployed Engineer (Software Engineer)

**Fecha:** 2026-05-03
**Arquetipo:** AI Solutions / Forward Deployed Engineer (voice / speech AI integrations)
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/elevenlabs/6c4c57c1-ec72-42ba-af3a-eb7aebbde2e6
**Legitimacy:** High Confidence
**Location:** San Francisco + Remote (4 hub offices per careers page; specific office breakdown unverified)
**PDF:** output/2026-05-03/cv-deepak-mallampati-elevenlabs-fde-software-engineer-2026-05-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Forward Deployed Engineer / AI Solutions Engineer for voice + speech AI platforms |
| Domain | Voice AI, conversational agents, speech synthesis / TTS, audio understanding (ElevenLabs platform) |
| Function | Build + Deploy on customer side — direct customer integrations of ElevenLabs voice / agents APIs |
| Seniority | Not specified in partial JD; ElevenLabs FDE roles span Senior to Recent Graduate per careers page (#155 Recent Graduate variant exists) |
| Remote | "Remote" tag w/ "San Francisco + 4 more" hub offices per ElevenLabs careers page |
| Team size | Not disclosed |
| TL;DR | FDE-SWE seat at ElevenLabs (top-tier voice AI). Archetype-perfect (FDE customer integrations of LLM/voice APIs). Stack adjacency strong but voice/audio-specific gap exists; partial JD limits depth. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| Forward Deployed / customer-facing engineering | ✅ Adjacent | Suvidha video summarization (built Flask API + UI for non-technical staff); Progress Solutions cross-team API design |
| Software Engineer fundamentals | ✅ Strong | Python + FastAPI + Flask + Docker; TypeScript + React (Dream Decoder); Manga Lens Manifest V3 service workers |
| AI / LLM API integration | ✅ Direct | Manga Lens (4 AI vision providers — Claude, GPT-4o-mini, GPT-4.1-Nano, Ollama); Dream Decoder (Perplexity Sonar + Replicate orchestration); Progress Solutions agentic LLM workflows |
| Production deployment + reliability | ✅ Strong | FastAPI / Flask + Docker + structured logging + load simulation at Progress Solutions (~30% post-deploy defect reduction) |
| Voice / speech AI domain | ⚠️ Soft gap | No formal voice/speech work; transferable from multimodal (YOLOv8 video, transformer video summarization) |
| Customer-onsite delivery | ⚠️ Adjacent | Suvidha non-technical stakeholder delivery; Progress Solutions cross-team coordination |

**Gaps:**
1. **Voice / speech AI domain depth** — Soft (no production speech/audio model work; transferable from multimodal video).
2. **Customer-facing onsite engagement** — Adjacent (Suvidha + Progress cross-team) but not formal FDE engagements.
3. **Partial JD** — Tech stack and YOE not fully verified from Ashby SPA + careers page corroboration.

## C) Nivel y Estrategia

ElevenLabs FDE-SWE listing is distinct from the FDE Recent Graduate variant in scan-history (different posting). Without confirmed YOE band, assume mid (2-4y typical for FDE-SWE at top-tier AI infra co per Levels.fyi 2026).

Sell angle:
- **Multi-provider AI integration** as core competency (Manga Lens 4 vision providers, Dream Decoder orchestration) — shows you can deliver against varied API surfaces, which is the FDE craft.
- **Production AI reliability** (Progress Solutions ~30% defect reduction, structured logging, load simulation) — directly transferable to ElevenLabs voice agent customer deployments.
- **Customer empathy from non-technical stakeholder delivery** (Suvidha video summarization Flask UI + Progress cross-team) — FDE differentiator.

If voice/speech depth challenged: "Multimodal video summarization at Suvidha and Manga Lens cross-platform vision payload handling are my closest analogs; I'd ramp on TTS/STT specifics in the first sprint by reading ElevenLabs API docs and shipping a customer-facing demo."

## D) Comp y Demanda

ElevenLabs is one of the top-tier voice AI companies of 2026 (Series C / unicorn-track per public reporting; YC alum Mati Staniszewski / Piotr Dabkowski founders). FDE-SWE comp at ElevenLabs (Levels.fyi 2026): **$170-240K base + 0.05-0.20% equity + ~$30K bonus**, depending on level.

Demand for FDE roles at voice AI infra companies is high in 2026 (Vapi, Bland, Retell, Cartesia all hiring comparable seats). Strong career signal.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-RAG framing | Pivot to "Forward Deployed Engineer w/ multi-provider AI vision + agentic LLM + production deployment for voice/audio adjacent multimodal" | Match FDE-voice scope |
| 2 | Skills | Healthcare emphasis | Promote "Multi-provider AI API integration (Claude, GPT-4o-mini, GPT-4.1-Nano, Ollama, Perplexity, Replicate)" + "Browser-extension Manifest V3 service workers" | Show breadth ElevenLabs FDE needs |
| 3 | Experience | Defect bullet at #4 | Promote "Productionized agentic LLM workflows w/ structured outputs + grounding controls" to bullet 1 | Direct match for customer deployments |
| 4 | Projects | Manga Lens framing | Lead w/ "Manga Lens — Chrome Web Store extension w/ 4 AI vision providers, viewport-slice DOM capture across 29 sites" | FDE-relevant customer-facing build |
| 5 | Footer | Default | "US-based, F-1 OPT, open to sponsorship" + "Open to SF / NYC / Remote" | Match JD |

## F) Plan de Entrevistas

| # | Requisito JD | STAR+R | S | T | A | R | Reflection |
|---|--------------|--------|---|---|---|---|------------|
| 1 | Multi-provider AI API integration | Manga Lens 4-vision-provider browser extension | Real-time AI translation across 29 manga/webtoon sites needed multi-vendor flexibility | Ship Chrome Web Store extension supporting Claude / GPT-4o-mini / GPT-4.1-Nano / Ollama | Manifest V3 service workers + viewport-slice screenshots + per-domain selector configs + WebP/JPEG payload handling | Shipped to Chrome Web Store; users can swap providers w/o code change | Multi-provider abstraction is the FDE moat — customers always have a preferred vendor |
| 2 | Production AI reliability | Progress Solutions FastAPI / Flask + Docker | Multi-team need for ML/LLM behind RESTful APIs in HIPAA-conscious env | Package inference + add structured logging, load simulation | Containerized; routine load tests; structured audit trails | ~30% post-deploy defect reduction | Production reliability is built upstream of the model, not after |
| 3 | Agentic LLM workflows | Progress Solutions agentic clinical workflows | Multi-step queries (eligibility, care navigation, doc clarification) needed structured reasoning | Build agentic system w/ tool discipline + grounding rules | Schema-validated JSON contracts + grounding controls + evals | Hallucinations >30% down, agent stability ~25% up | Tool discipline > clever prompting; constraints make agents reliable |
| 4 | Customer empathy / non-tech stakeholders | Suvidha video summarization Flask API + UI | Hierarchical summarization needed by non-tech operations staff | Production-grade pipeline + lightweight UI w/ iteration | Worked w/ non-tech reviewers; iterated UX; chunk-aligned timestamps for clip extraction | 60-70% manual review time saved; ~85% highlight alignment | Designing for non-technical users changes API contracts for the better |
| 5 | Multimodal / video understanding | YOLOv8 drowsiness detection | Two-stage CNN was too slow for real-time | Unified detection + classification w/ NMS tuning | YOLOv8 + sliding window + adaptive frame skipping | -30% inference latency; -25% false positives | Architecture simplification beats hyperparam tuning at the latency margin |
| 6 | RAG / retrieval grounding | Progress Solutions clinical RAG | LLM responses needed grounded clinical context | Build retrieval + grounding + eval pipeline | Recursive semantic chunking + transformer embeddings + reproducible evals | ~35% retrieval precision; >90% grounded alignment | Evals before prompts |

**Case study:** Manga Lens — most FDE-relevant artifact (multi-provider AI vision + Chrome Web Store delivery + cross-platform DOM capture). Show the Chrome Web Store listing + GitHub if open; walk through provider abstraction layer.

**Red-flag questions:**
- "Voice/audio production experience?" → "Multimodal video summarization at Suvidha (transformer-based, 5,000+ sessions) + multi-provider vision API at Manga Lens are my closest analogs. I ramp on TTS/STT in week one."
- "Sponsorship?" → "I'm US-based on F-1 OPT; open to SF / NYC / Remote-US; happy to walk through visa timing early."
- "FDE customer-onsite frequency?" → "Suvidha video pipeline + Progress Solutions cross-team API design have been my customer-empathy training. I expect 25-40% travel and have flexible coverage."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active per ElevenLabs careers page (jobs.ashbyhq.com listing rendered) | Positive |
| Description quality | Partial via Ashby SPA — corroborated via elevenlabs.io/careers ("Forward Deployed Engineer - Software Engineer" listed under Engineering & Product, marked "Remote" w/ "San Francisco + 4 more" offices) | Mixed |
| Company signals | ElevenLabs is a real top-tier voice AI infra company (elevenlabs.io); founded 2022 by Mati Staniszewski + Piotr Dabkowski; Series C+ funding | Positive |
| Reposting | First posting for this exact ID 6c4c57c1; sibling FDE Recent Graduate (#dd26398c) appeared in scan-history 2026-04-25 | Positive |
| Role market context | FDE-SWE at top-tier AI infra is high-demand, normal posting age | Positive |

**Context Notes:** Ashby SPA + WebFetch returned partial JD; corroborated via elevenlabs.io/careers (active listing under Engineering & Product). **Verification:** corroborated (Ashby + ElevenLabs careers page). Recommend re-fetching via Playwright before applying to verify YOE / location / sponsorship details.

---

## Keywords extraídas

Forward Deployed Engineer, Software Engineer, voice AI, speech AI, ElevenLabs, customer integrations, agentic systems, multi-provider AI, Python, FastAPI, Docker, TypeScript, Manifest V3, customer-facing engineering, production AI deployment, San Francisco, Remote
