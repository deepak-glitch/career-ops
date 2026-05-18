# Forus (Ashby org: tandem) — Applied AI Engineer

**Fecha:** 2026-05-18
**Arquetipo:** Applied AI / LLM Engineer | AI Solutions / Forward Deployed
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/tandem/09564102-1713-4941-bbd5-77eaac9ca88e
**Legitimacy:** High Confidence
**Location:** New York office (SoHo) — In-person, 5d/wk
**Region:** US
**PDF:** output/2026-05-18/cv-deepak-mallampati-forus-applied-ai-engineer-2026-05-18.pdf
**Verification:** confirmed via Ashby GraphQL 2026-05-18

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | Forus (Ashby slug: `tandem`) |
| Role | Applied AI Engineer |
| Location | NYC SoHo — in person, 5d/wk |
| Employment | Full-time |
| Comp | $170K – $300K + equity |
| Visa sponsorship | Not stated (omission is a soft concern given F-1 OPT) |
| Domain | AI-first pharma access platform (insurance, affordability, fulfillment) |
| Investors | Thrive Capital, General Catalyst, Accel |

**TL;DR:** Healthcare/pharma AI-native startup with PMF, hiring an Applied AI IC to own LLM/agentic features end-to-end. Strong archetype fit; the binding constraints are NYC in-person 5d/wk and unstated visa policy.

---

## B — CV Match & Gaps

**Strong matches:**
- "AI augmentation and automation projects" across classification, extraction, summarization, RAG, agentic workflows — 1:1 with Deepak's healthcare RAG + agentic claims work (~35% retrieval precision, >30% hallucination reduction).
- "Probabilistic triggering of workflows" and "state machines that drive system decisions and handle failure modes" — maps to multi-agent claims pipeline (Intake → Validation → Fraud scoring).
- "Make our data and ML pipelines robust to variation and inconsistency in input data formats (e.g., clinical documentation structure)" — direct EHR/claims preprocessing experience.
- Python + LLM APIs + production deployment + FastAPI + Docker — full stack listed (Python, React, TypeScript, PostgreSQL, K8s) covers Deepak's strong side; K8s is light but Docker is solid.

**Gaps / risks:**
- React + TypeScript front-end depth is light (Deepak has React/TS in Dream Decoder; not "core").
- Kubernetes not deeply in Deepak's CV — Docker yes, K8s lightly.
- No explicit "fine-tuning" production claim (he has LoRA on Stable Diffusion, which counts).
- NYC in-person 5d/wk = relocation required from Kent, OH.

**Mitigation:**
- Frame Dream Decoder (FastAPI + React/TypeScript/Vite/Tailwind) as the full-stack proof.
- Frame Agentic Claims (multi-agent JSON contracts, RAG-grounded validation, audit-ready traces) as the pharma-process analog.

---

## C — Level and Strategy

- JD nivel: mid-to-senior IC, "end-to-end responsibility," "act like an owner."
- Deepak's natural level: mid (2.5y professional + 6 strong projects). Compensation band ($170-300K) suggests they level by signal.
- "Sell senior" via: Manga Lens shipped Chrome extension (sole-author, 4-provider AI integration), Agentic Claims (multi-agent JSON contracts), measured outcomes (~35%, ~30%, 15-20%).
- If downleveled: accept if base ≥ $170K, ask for 6-month review with concrete promo criteria (own one product area).

## D — Comp & Demand

| Datum | Value | Source |
|---|---|---|
| Posted range | $170K – $300K + equity | Ashby compensationTierSummary |
| NYC Applied AI Engineer median (mid) | ~$185-220K base + 15-25% bonus + equity | Levels.fyi, Glassdoor 2026 estimates |
| NYC Applied AI Engineer P75 (senior) | ~$240-275K base | Levels.fyi |
| Forus stage | Series with Thrive/GC/Accel | TechCrunch coverage |

Band is healthy for Deepak's level; midpoint ($235K) is achievable with strong signal.

## E — Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "healthcare RAG…" | Lead with "Applied AI engineer building production LLM features in regulated domains (healthcare, pharma access)" | Mirror Forus's pharma-access domain |
| 2 | Bullets | Order: RAG → agentic → ML → APIs | Reorder: agentic workflows → RAG → structured extraction → ML pipelines → FastAPI/Docker | Their JD lists workflows + extraction first |
| 3 | Projects | Agentic Claims listed | Promote Agentic Claims to first; reframe as "multi-agent state machine with JSON contracts and audit-ready traces for healthcare claims" | Maps to "state machine that handles failure modes" |
| 4 | Skills | LangChain/LlamaIndex grouped | Split out "Production LLM apps: RAG, agentic, structured outputs, evals" as a top line | Match JD phrasing exactly |
| 5 | Cover letter | n/a | Open with: "I build agentic LLM systems that turn clinical/insurance unstructured input into reliable, auditable decisions" | Match Forus's actual product surface |

## F — Interview Plan (STAR+R)

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "End-to-end responsibility" | RAG for clinical knowledge retrieval | Documentation search across heterogeneous EHR notes | Improve precision and reduce irrelevant retrieval | Recursive semantic chunking + transformer embeddings + evaluation harness | ~35% retrieval precision, >30% irrelevant reduction, ~90% grounding alignment | Lesson: evaluation harness must precede retrieval tuning, not follow |
| 2 | "Agentic workflows / state machines" | Agentic Healthcare Claims Pipeline | Multi-step claims with brittle handoffs | Build resilient multi-agent pipeline | Schema-validated JSON contracts between agents + RAG-grounded CPT/ICD validation + ANN duplicate search + explainable risk scoring | Cascading hallucinations eliminated; audit-ready traces | Reflection: contracts > prompts for inter-agent reliability |
| 3 | "Production LLM apps, RAG, evals" | Agentic LLM workflows at Progress Solutions | Multi-step queries (eligibility, care nav) | Improve stability + grounding | Structured reasoning + tool discipline + grounding rules | ~25% improvement in response stability | Tool discipline matters more than model choice |
| 4 | "Structured extraction" | Dream Decoder intermediate prompt layer | First-pass image generation was noisy | Improve alignment | Intermediate structured prompt transformation layer | ~30% better alignment, ~25-30% first-pass success | Two-stage prompts beat one-shot for multimodal |
| 5 | "Real-world iteration" | YOLOv8 drowsiness pipeline | Two-stage CNN was slow | Unify and stabilize | YOLOv8 unified + sliding-window aggregation + NMS tuning | ~30% latency cut, ~25% false-positive reduction | Real-time aggregation matters more than per-frame accuracy |
| 6 | "Full-stack (Python, React, TS)" | Manga Lens Chrome extension | Real-time AI manga translation | Ship shippable consumer product | Manifest V3 + service workers + 4-provider vision pipeline + dedup + 7-day cache | Shipped on Chrome Web Store | Multi-provider abstraction beats single-vendor lock-in |

## G — Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Ashby GraphQL returned full record 2026-05-18 | Active | Positive |
| Compensation transparent ($170-300K) | Active | Positive |
| Specific tech (Python, React, TS, Postgres, K8s) | Active | Positive |
| Investors named (Thrive, GC, Accel) | Active | Positive |
| Description quality (specific use cases: pharma access, insurance, affordability) | Active | Positive |
| Team page / hiring history | Not checked here | Neutral |

Context: "All full-time roles are in person in New York" is explicit and unusual — a real constraint, not a ghost-job flag. Forus may be the public-facing brand using Ashby org "tandem".

## H — Draft Application Answers

Not generated (score 3.4 < 4.5 threshold). Apply only if Deepak can relocate to NYC and confirm visa sponsorship.

---

## Keywords (ATS)

Applied AI Engineer, LLM, RAG, agentic workflows, state machine, structured extraction, multi-step automation, healthcare AI, pharma access, evaluation framework, FastAPI, Docker, Python, React, TypeScript, PostgreSQL, Kubernetes, prompt engineering, fine-tuning, production AI, end-to-end ownership, AI-native, schema validation, audit traces.
