# Evaluación: Ascertain — Applied AI Engineer (Voice Agents)

**Fecha:** 2026-05-19
**Arquetipo:** Applied AI / LLM Engineer + Agentic / Automation
**Score:** 3.9/5
**URL:** https://jobs.ashbyhq.com/ascertain/e2b09339-b7cb-42d1-a666-68908329ceb8
**Legitimacy:** High Confidence
**Location:** NYC or Remote (Hybrid for NYC-based)
**Region:** US
**PDF:** output/2026-05-19/cv-deepak-mallampati-ascertain-applied-ai-2026-05-19.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | Applied AI / LLM Engineer + Agentic (hybrid) |
| Domain | Healthcare admin automation (prior authorization, payer workflows) |
| Function | Build (voice agents + RAG + eval infra; ownership end-to-end) |
| Seniority | Mid IC (4+ yrs SWE; 2+ yrs Python) |
| Remote | NYC HQ; remote-friendly nationally; hybrid for NYC-based team members |
| Team size | Early-stage; Northwell Health + Deerfield Management backed |
| Comp | $130K–$175K + meaningful equity |
| TL;DR | Ascertain (Northwell-backed) needs one of their first dedicated AI engineers to ship voice-agent + LLM pipelines that automate prior-authorization payer calls — direct 1:1 with Deepak's agentic Claims + RAG + structured-output proof points. |

## B) Match con CV

| Requirement | Match | CV evidence |
|-------------|-------|-------------|
| 4+ years SWE owning prod systems E2E | Stretch (2.5y + heavy project portfolio) | Progress Solutions Jul 2025–present + Manga Lens (Chrome Store ship) + Dream Decoder + Agentic Pixel + Healthcare Claims — effective end-to-end ownership |
| 2+ years professional Python (APIs, services, data workflows) | Direct | FastAPI/Flask RESTful services in healthcare prod; "containerized with Docker, structured logging, load simulation" |
| Hands-on LLM-based apps / RAG in real production | Direct | Healthcare RAG (~35% precision gain in HIPAA-conscious env); Agentic Claims with audit-ready reasoning |
| Comfort with ambiguity, shipping v1 | Direct | Manga Lens solo MVP-to-Chrome-Store; founder of E-Farming (PHP/MySQL marketplace) |
| **Preferred: voice/conversational systems** | Gap | No direct telephony/Twilio experience — mitigation below |
| **Preferred: QA + eval frameworks for agentic** | Direct | RAG eval (>90% grounded alignment); Agentic Claims schema-validated boundaries; 30% post-deploy defect reduction |
| **Preferred: REST APIs + 3rd-party integrations** | Direct | FastAPI/Flask APIs; multi-provider integration in Manga Lens (Claude/GPT-4o/GPT-4.1/Ollama) |
| **Preferred: Observability + monitoring** | Direct | "Structured logging and load simulation" + "30% defect reduction" |
| **Preferred: CI/CD** | Direct | Jenkins CI/CD pipelines @ Emerson with deployment error reduction |
| **Preferred: SQL/NoSQL for interaction data** | Direct | T-SQL stored proc work + PostgreSQL/SQLite + EHR data preprocessing |
| **Preferred: healthcare/payer/RCM/prior auth** | Direct | Healthcare Claims agentic pipeline (CPT/ICD validation + fraud risk + duplicate detection) + clinical RAG + HIPAA governance |

**Gaps:**
1. **Telephony / voice agents** (Twilio, STT/TTS, IVR) — Honest gap. Mitigation: highlight transferable structured-output discipline + grounding + eval rigor. Frame as "the LLM + agent layer is the hard part; I can ramp Twilio/Deepgram in 1-2 weeks given the API surface."
2. **4+ years SWE band** — Soft stretch (2.5y professional + dense portfolio). Master's CS + production healthcare AI + multi-app ship history bridges credibly.

## C) Nivel y Estrategia

- **Detected level:** Mid-IC (4+y SWE band). Deepak's natural band is 2-4y; this is a 1-1.5y stretch but reasonable given depth.
- **Vender mid sin mentir:** Lead with "I've shipped agentic LLM pipelines with schema-validated JSON between agents to prevent hallucination cascades — directly applicable to your prior-auth voice agent multi-turn handoffs." Then state telephony as 1-2 week ramp, not a multi-month gap.
- **Downlevel plan:** Accept $130K floor + meaningful equity + voice-agent ownership; explicit 6-month review for $150K+.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD stated | $130K–$175K + meaningful equity | NYC-rooted band, with remote acceptable |
| Levels.fyi NYC/Remote-US AI Eng L3 | $145K–$230K total | Ascertain mid-range |
| Glassdoor NYC mid-AI | $135K–$200K base | Aligns |
| Demand trend | High | Healthcare admin AI growing rapidly post-2024 GenAI; Ascertain + competitors (Notable, Anterior, Cohere Health) scaling |

Comp fair for early-stage healthcare AI with strong backers (Northwell + Deerfield). Equity has real upside given customer traction.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic Applied AI | "Applied AI engineer shipping production agentic LLM systems with grounding controls and audit-ready reasoning — currently in HIPAA-conscious healthcare workflows" | Mirrors Ascertain's mission framing |
| 2 | Skills | Comprehensive | Bold "agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding" | ATS keyword match |
| 3 | Bullet order | Chronological | Lead with agentic LLM workflows + RAG + FastAPI/Docker (matches JD top 3 bullets) | JD priority order |
| 4 | Projects | Healthcare Claims buried | Lead with Healthcare Claims (multi-agent + schema-validated + RAG + fraud scoring) | Direct analog to prior-auth voice agents (multi-step, structured capture) |
| 5 | Cover note | n/a | "Schema-validated JSON contracts between agents in my Claims pipeline directly map to multi-turn payer-call structured capture you're building" | Concrete + relevant |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|------------------|-----------------|---|---|---|---|------------|
| 1 | Voice agents w/ structured capture | Agentic Healthcare Claims | Multi-step claim processing required structured handoffs | Build agent pipeline w/ inter-step contracts | Intake → Validation → Consistency → Duplicate → Risk; schema-validated JSON | Audit-ready outputs; no cascading hallucinations | Strong schemas at every agent boundary > LLM upgrade |
| 2 | LLM + speech-to-text + TTS + telephony E2E | Manga Lens 4-provider abstraction | Cloud + local providers each have different IO contracts | Build provider-agnostic abstraction | WebP vs JPEG payloads per provider; coordinate remapping; 7-day cache | Live on Chrome Web Store | Abstract over messy 3rd-party APIs early |
| 3 | Evaluation/QA + regression catch | Healthcare RAG eval | "What if retrieval ranks wrong doc?" | Build eval rubric w/ grounded-alignment scoring | Lineage + 90%+ grounded-response alignment + RAG evals | Caught hallucinations before prod | Eval rubric is the safety net, not the model |
| 4 | RESTful APIs + integrations | FastAPI/Flask packaging | ML models lived as notebooks | Package as services | FastAPI w/ Docker, structured logs, load sim | 30% post-deploy defect reduction | Backend discipline applied to ML services |
| 5 | Instrument everything | Progress Solutions observability | Silent production failures | Add structured logs + audit | Logging + load sim + lineage | 30% defect reduction + faster RCA | Observability before scale, not after |
| 6 | Ambiguity + ship v1 | Manga Lens Chrome Web Store | No spec, no PM | Self-define scope; ship MVP | Manifest V3 + content scripts + service workers + 4-provider | Shipped to Chrome Web Store solo | Constraint-driven scoping keeps velocity |
| 7 | Healthcare ops translation | HIPAA governance @ Progress Solutions | Clinicians distrust AI | Add lineage + system-limitation docs | De-id pipeline + clinician-facing docs + audit trail | Adoption + trust gains | Docs are product for regulated buyers |

**Case study:** Lead with Agentic Healthcare Claims (multi-agent + schema-validated JSON + RAG-grounded CPT/ICD). Direct mirror of Ascertain's prior-auth voice-agent multi-step capture.

**Red flag questions:**
- "Have you built voice agents specifically?" → "Not telephony stack, but the agent + LLM + structured-output + eval layer is what I've shipped in production. Twilio/Deepgram + STT/TTS is an API ramp, not a system-design ramp."
- "Why mid-IC for 4+y band?" → "2.5y professional + Master's + multi-app shipped + healthcare-AI metrics 1:1 with bar; 4y stretch is fair given depth."
- "F-1 OPT sponsorship?" → "Authorized to work now; H-1B sponsorship needed within 36 months. Northwell/Deerfield healthcare ecosystem typically navigates."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Live Ashby GraphQL 2026-05-19 | Positive |
| Apply button | Active | Positive |
| Tech specificity | Voice agents + LLM + RAG + telephony + Twilio + STT/TTS + EHR + payer portals | Positive |
| Requirements realism | 4+y SWE + 2+y Python is realistic mid-IC | Positive |
| Salary transparency | $130K–$175K + equity | Positive |
| Company backing | Northwell Health (NY's largest health system) + Deerfield Management | Positive |
| Layoff signal | None found 2026 | Positive |
| Customer traction | "Saving hundreds of staff hours every week" + named-customer language | Positive |

**Context notes:** Ascertain has a separate FDE role (#216 evaluated 2026-04-27, 4.1/5) — this Applied AI Engineer is a DIFFERENT role (build-side, not customer-deploy). Both posted concurrently; signal of healthy hiring.

## H) Draft Application Answers

Not generated (3.9 < 4.5 threshold). For application: lead with Healthcare Claims schema-validated agents + state telephony ramp plan in cover letter.

---

## Keywords extraídas

voice agents, LLM, RAG, agentic systems, prior authorization, telephony, speech-to-text, text-to-speech, IVR, Twilio, structured data capture, evaluation infrastructure, observability, Python, APIs, REST, CI/CD, healthcare, payer, EHR, HIPAA, prompt engineering, guardrails
