# Lotus Health AI — AI Engineer

**Fecha:** 2026-05-18
**Arquetipo:** Applied AI / LLM Engineer | Generative AI / RAG Engineer
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/lotushealth/1d89d1ed-ed4d-448c-82e4-234124cadc31
**Legitimacy:** High Confidence
**Location:** San Francisco — In-person (OnSite, FullTime)
**Region:** US
**PDF:** output/2026-05-18/cv-deepak-mallampati-lotus-health-ai-engineer-2026-05-18.pdf
**Verification:** confirmed via Ashby GraphQL 2026-05-18

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | Lotus Health AI (consumer primary-care app) |
| Role | AI Engineer (generalist) |
| Location | San Francisco — OnSite, 5d/wk (implied) |
| Employment | Full-time |
| Comp | Not disclosed in JD (Ashby returned no compensation tier) |
| Visa sponsorship | Not stated in JD (omission noted given F-1 OPT) |
| Domain | Consumer healthcare — primary care + clinical AI |
| Investors | Kleiner Perkins, CRV, clinicians at Harvard / Stanford |

**TL;DR:** AI-driven primary care app hiring a generalist AI Engineer to own retrieval, evals, agent workflows, data pipelines, voice/video multimodal — fast-execution startup with consumer-app heritage. Healthcare AI is 1:1 with Deepak's archetype; relocation to SF and unstated visa status are the binding constraints.

---

## B — CV Match & Gaps

**Strong matches (1:1 to JD):**
- "Build and iterate on AI agent workflows handling multi-step clinical reasoning, tool use, structured decision-making" → Agentic Healthcare Claims pipeline (multi-agent, JSON contracts, RAG-grounded CPT/ICD validation, audit traces).
- "Improve knowledge bases so that citations resolve to original data" → Clinical RAG at Progress Solutions (~35% retrieval precision, >30% hallucination reduction, ~90% retrieval-grounded alignment).
- "Rebuild data pipelines to eliminate stale data, support clinician and patient corrections, ensure full traceability" → EHR preprocessing pipelines (Pandas/NumPy), >98% dataset reliability, ~40% reduction in downstream model instability.
- "Real-time voice and video AI for multimodal patient interactions" → Adjacent: Manga Lens (multi-provider vision pipeline, real-time capture), Dream Decoder (multimodal API orchestration), YOLOv8 video analytics.
- Python + LLM APIs + production deployment + FastAPI + Docker — full stack on Deepak's strongest side.

**Gaps / risks:**
- "Real-time voice + video" specifically (WebRTC/streaming TTS/ASR pipelines) — not in CV; mitigation: vision-pipeline and real-time YOLOv8 video analytics show the lower-level skills.
- "Model training and fine-tuning" — Deepak has LoRA on Stable Diffusion but no production fine-tuning of an LLM; mitigate by reframing LoRA + adapter work.
- SF on-site, 5d/wk — relocation required from Kent, OH.
- Visa sponsorship not stated in JD — needs to be confirmed pre-application.

**Mitigation:**
- Lead with healthcare RAG + agentic claims as the "AI Agents and Product Intelligence" + "Knowledge Base and Search" proof.
- Frame Dream Decoder + Manga Lens as the multimodal/real-time foundation; YOLOv8 pipeline as real-time inference under latency budget.
- Acknowledge fine-tuning depth honestly; show LoRA work + evaluation discipline.

---

## C — Level and Strategy

- JD nivel: generalist mid IC; "close to the core system" and "involved in product decisions from day 1." No explicit years requirement.
- Deepak's natural level: mid (2.5y professional + 7 strong projects); maps to consumer-app early generalist comfortably.
- "Sell senior" via: end-to-end ownership across data/RAG/agents/evals (Progress Solutions), measurable outcomes (~35%, >30%, 15-20%, ~30%), and a shipped consumer product (Manga Lens, Chrome Web Store).
- If downleveled: accept if base ≥ $150K, ask for ownership of one product area (e.g., retrieval/knowledge base) and 6-month review.

## D — Comp & Demand

| Datum | Value | Source |
|---|---|---|
| Posted range | Not disclosed | Ashby GraphQL — `compensationTierSummary: null` |
| SF generalist AI Engineer median (mid) | ~$160-200K base + equity | Levels.fyi 2026 |
| KP/CRV seed–Series A early eng | $140-180K base + 0.4-1.5% equity (early hires) | crunchbase, founders comp data |
| Healthcare consumer AI density | Growing — Hims/Forward/Galileo cohort | WebSearch |

Band must be elicited in screen. KP/CRV-backed seed–early-Series A → expect $140-180K base + equity-heavy.

## E — Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "healthcare RAG…" | Lead with "Applied AI engineer building production LLM features in regulated healthcare, with retrieval/evals/agentic depth and multimodal experience" | Mirror Lotus's generalist + voice/video framing |
| 2 | Bullets | Order: RAG → agents → ML → APIs | Reorder: agentic workflows → knowledge-base/retrieval → data pipelines/lineage → FastAPI/Docker | Their first 3 buckets are "AI Agents," "Knowledge Base," "Data Ingestion" |
| 3 | Projects | Agentic Claims first | Promote Claims to first; add 1-line note on multimodal vision pipelines (Manga Lens) as the "real-time multi-provider" proof | Maps to "real-time voice and video AI" wording |
| 4 | Skills | LangChain/LlamaIndex grouped | Split out "Production LLM apps: RAG, agentic, evals, structured outputs" as top line | Match JD verbatim |
| 5 | Cover letter | n/a | Open: "I build agentic LLM systems that turn clinical/EHR unstructured input into reliable, audit-traceable decisions — and I ship multimodal consumer products end-to-end" | Connect their generalist + consumer + healthcare DNA |

## F — Interview Plan (STAR+R)

| # | JD Hook | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | AI agents & product intelligence | Agentic Healthcare Claims pipeline | Multi-step claims processing with brittle handoffs | Build resilient multi-agent system | Schema-validated JSON contracts + RAG-grounded CPT/ICD + ANN duplicate search + explainable scoring | Cascading hallucinations eliminated; audit-ready traces | Contracts > prompts for inter-agent reliability |
| 2 | Knowledge base / retrieval improvements | Clinical RAG at Progress Solutions | Documentation search across heterogeneous EHR notes | Improve precision + reduce irrelevant retrieval | Recursive semantic chunking + transformer embeddings + evaluation harness | ~35% retrieval precision lift; >30% irrelevant reduction; >90% grounded alignment | Eval harness must precede retrieval tuning |
| 3 | Data ingestion & integrity | EHR preprocessing pipelines | Stale, inconsistent EHR feeds | Improve reliability + lineage | Pandas/NumPy preprocessing + lineage docs + de-identification + audit trails | Dataset reliability >98%; downstream instability cut ~40% | Lineage docs prevent silent drift |
| 4 | Real-time multimodal | Manga Lens Chrome extension | Real-time AI vision pipeline shipped on Chrome Web Store | Multi-provider, low-latency capture | 4 vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama) + viewport-slice capture + 7-day cache | Shipped product; multi-provider abstraction beats vendor lock-in | Real-time consumer AI = latency budget + caching, not just model quality |
| 5 | Fast execution, fast learning | Dream Decoder multimodal app | Naive prompt → noisy first-pass images | Improve alignment | Intermediate structured prompt transformation layer | ~30% better alignment; ~25-30% first-pass success | Two-stage prompts beat one-shot for multimodal |
| 6 | Healthcare + safety | Agentic LLM workflows at Progress | Eligibility/care-nav queries needed stability + grounding | Add tool discipline + grounding rules | Structured reasoning + tool discipline + grounding | ~25% improvement in stability | Tool discipline matters more than model size |

## G — Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Ashby GraphQL full record 2026-05-18 | Active | Positive |
| Specific tech / use cases (retrieval, agents, voice/video, evals) | Active | Positive |
| Investors named (KP, CRV) | Active | Positive |
| Comp band hidden | Mixed | Neutral |
| Posting age | Not extracted | Neutral |
| In-office 5d/wk + generalist scope | Common at consumer seed/Series A | Positive |

Context: Section "What this role is not" (no big-co scope, no formal hierarchy, no ticket queue) is an honest red-flag-for-some-good-for-others signal — typical of YC/KP early hires. Reads authentic.

## H — Draft Application Answers

Not generated automatically (score 3.5; below 4.0/5 "strong apply" threshold). Apply only if Deepak (a) can relocate to SF and (b) confirms visa sponsorship via recruiter outreach first.

---

## Keywords (ATS)

AI Engineer, Applied AI, RAG, retrieval, evaluations, agentic workflows, knowledge base, multi-step clinical reasoning, data pipelines, lineage, traceability, voice AI, multimodal, real-time, embeddings, vector search, fine-tuning, FastAPI, Docker, Python, healthcare AI, Kleiner Perkins, CRV, generalist, end-to-end ownership.
