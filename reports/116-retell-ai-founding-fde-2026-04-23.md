# Evaluación: Retell AI — Founding Forward Deployed AI Engineer

**Fecha:** 2026-04-23
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Agentic / Automation (voice)
**Score:** 3.4/5
**URL:** https://www.workatastartup.com/jobs/73417
**Legitimacy:** High Confidence
**Location:** In-person (Retell AI office — location not explicit in JD excerpt; SF HQ likely per YC). **Verify with recruiter.** F-1 OPT possibly supported (YC startup); confirm.
**PDF:** output/2026-04-23/cv-deepak-mallampati-retell-ai-founding-fde-2026-04-23.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | AI Solutions / FDE — voice AI agents for contact centers (sales, support, engagement, retention) |
| Domain | Voice AI / conversational AI — build agents for enterprise customers |
| Function | Embed with largest enterprise customers; backend integrations + custom AI deployment + workshop leads |
| Seniority | Founding-level IC — hybrid across eng + product + CS |
| Remote | **In-person** (SF office likely; verify) |
| Team size | Small (founding-stage); $4.7M seed, $10M ARR in 15 mo |
| Location | **Likely SF — verify on-site 5d/wk expectation** |
| TL;DR | Retell AI is an OpenAI-featured GPT-4o voice-agent platform with strong traction ($10M ARR). Role matches FDE archetype and Deepak has agentic + RAG + customer flow experience. Voice (ASR/TTS/telephony) is an explicit gap. In-person requirement may block remote-preference. Apply selectively; strong if Deepak can relocate. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Work with largest enterprise customers | **MEDIUM** | cv.md L30 stakeholder-facing at Progress; no enterprise-scale customer reps |
| Embed with customer teams | **MEDIUM** | Adjacent via Progress clinical ops delivery |
| Backend integrations + custom AI deployment | **STRONG** | cv.md L28 FastAPI/Flask + Docker production services; L60 Manga Lens multi-provider integration |
| Lead customer workshops + feedback → roadmap | **WEAK** | No formal customer workshop facilitation track record |
| Partner with sales to close deals | **WEAK** | No prior pre-sales / sales-engineering experience |
| Accountable + collaborative + fast-moving | **STRONG** | cv.md L59-87 shipped projects solo; L52 Student Manager coordination |
| Technical expert + trusted advisor posture | **MEDIUM** | Progress Solutions stakeholder-facing; junior title on CV is a signal gap |
| Juggle multiple projects + hit deadlines | **STRONG** | cv.md L22-30 concurrent RAG + agentic + predictive ML + inference services |
| Voice AI / conversational AI specific | **WEAK** | Agentic conversational experience (eligibility/care agent) but not voice/ASR/TTS |
| Contact center / call center domain | **WEAK** | No direct contact-center experience |
| LLM / AI agents / tool use | **STRONG** | cv.md L25-26 agentic LLM workflows + tool discipline + grounding |

**Gaps:**
1. **Voice AI stack (ASR, TTS, telephony, SIP/WebRTC)** — explicit domain of Retell; not in CV. Hard gap.
2. **Enterprise customer partnership at scale** — adjacent but not proven.
3. **Pre-sales / sales partnership** — no track record.
4. **"Founding" posture** — requires high-agency, full-time in-person intensity; matches Deepak's shipped-solo portfolio but the in-person signal is a logistical blocker.

## C) Nivel y Estrategia

- **JD level:** Founding FDE — senior-leaning IC with high ownership. **Deepak:** 2.5 yr Applied AI + shipped solo delivery.
- **Strategy:** Lead with agentic LLM workflows + structured outputs + grounding (core voice-agent primitives). Name ASR/TTS gap upfront + propose 30-60-90 ramp (integrate Deepgram/ElevenLabs APIs in week 1; own a full customer engagement by week 12).
- **If downleveled:** Retell has a parallel "Senior FDE" posting (job 68665) — this one is likely less senior. If downleveled further, decline.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Retell AI Founding FDE | Undisclosed (YC seed norm) | JD |
| Comparable voice-AI YC seed FDE | $130-180K + 0.1-0.5% equity | Levels.fyi YC seed companies |
| Retell funding | $4.7M seed + $10M ARR (15 mo); Altman Capital + YC | TechCrunch, OpenAI blog |
| Deepak target | $100-130K | config/profile.yml |

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer — agentic LLM workflows, RAG, structured outputs, production inference services. Eager to bring agent-delivery discipline to voice AI." | Mirror agent + customer + production |
| 2 | Skills: LLM & GenAI | Move agentic workflows, tool discipline, grounding, structured outputs to top | Voice agents need these |
| 3 | Progress Solutions bullet 2 | Lead with agentic workflows for eligibility + care navigation (customer-facing agent pattern) | Direct voice-agent analog |
| 4 | Projects | Lead with Agentic Claims (multi-agent, schema contracts) + Dream Decoder (multimodal APIs coordination) | Agent orchestration |
| 5 | Voice AI ramp | Add line: "Studying Deepgram / ElevenLabs / Retell voice SDKs — 2-week ramp commitment" | Honest gap + mitigation |
| 6 | Location | "Open to SF relocation if required — F-1 OPT (sponsorship welcomed)" | In-person signal |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Agent for enterprise customer | Agentic Claims — multi-agent w/ JSON schema contracts | Schema contracts prevent cascading hallucination |
| 2 | Backend integration + deployment | Progress FastAPI + Docker — 30% post-deploy defect reduction | Load sim catches what unit tests miss |
| 3 | Multi-provider integration | Manga Lens — 4 vision providers (Claude, GPT-4o, GPT-4.1, Ollama) with per-provider payload handling | Per-provider quirks (WebP vs JPEG, CUDA stability) are where the work really is |
| 4 | Customer workflow translation | Progress clinical ops → eligibility agent | Start from the failure mode, not the happy path |
| 5 | Juggle multiple projects | Progress concurrent RAG + agentic + predictive ML + inference services | Timeboxing + shared eval harness |
| 6 | Ambiguity / fast movement | Manga Lens shipped solo to Chrome Store | Working prototype beats spec doc |
| 7 | Voice-specific (ramp plan) | Dream Decoder multi-modal (Perplexity Sonar + Replicate image) coordination | Ship → learn → ship is faster than plan → spec → ship |

**Case study:** Agentic Claims (agent orchestration + schema contracts) + Dream Decoder (multi-provider coordination) — best analogs for voice-agent delivery.

**Red flag questions:**
- "Voice AI experience?" → "Zero direct. My agentic LLM workflows and multi-provider integration transfer 1:1 to voice-agent tooling. Deepgram + ElevenLabs + Retell SDK ramp in 2 weeks."
- "In-person?" → (verify first). If blocker, ask about phased relocation or compressed on-site (e.g., 2 weeks/month).

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on workatastartup.com | Positive |
| JD specificity | Names voice agents + enterprise integrations + customer workshops + sales partnership | Positive |
| Salary transparency | Not disclosed (YC seed norm) | Neutral |
| Company hiring signals | OpenAI case study published; $10M ARR; Altman Capital + YC | Positive |
| Reposting pattern | Parallel "Founding Senior FDE" (jobs/1okdYK9) + "Founding Senior SWE" (jobs/68665) + "Founding Senior MLE" (jobs/74521) — org build-out | Positive |
| Press coverage | TechCrunch (2024), OpenAI GPT-4o case study | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why Retell AI?** > "Voice AI is the next frontier for enterprise agent delivery, and Retell AI's GPT-4o + Altman Capital backing + $10M ARR traction is the fastest-moving surface in the category. My agentic LLM experience (5-stage claims pipeline w/ schema contracts, tool discipline, grounding) transfers directly to voice-agent orchestration. I'm ready to ramp on Deepgram/ElevenLabs/telephony in week 1 and own a full customer engagement by week 12."

**Experience honesty:** > "Voice AI stack (ASR/TTS/telephony) is a hard gap. My Dream Decoder project (multi-provider coordination across Perplexity Sonar + Replicate image) is the closest analog. Committing to a 2-week voice SDK ramp."

**Location:** > "Open to SF relocation if the role requires in-person. F-1 OPT — sponsorship welcomed."

---

## Keywords extraídas

Voice AI, conversational AI, AI voice agent, Founding Forward Deployed Engineer, Retell, enterprise customer, backend integration, customer workshop, sales partnership, contact center, call center automation, GPT-4o, ASR, TTS, telephony, agent orchestration, customer success, technical advisor, workflow integration.
