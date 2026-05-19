# Legion Health — Founding Engineer (AI-Native Mental Health Care)

**Fecha:** 2026-05-19
**Arquetipo:** Applied AI / LLM Engineer (Founding)
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/legionhealth/ffdd2b52-eb21-489e-b124-3c0804231424
**Legitimacy:** High Confidence
**Location:** San Francisco — In-person 5 days/week
**Region:** US
**PDF:** output/2026-05-19/cv-deepak-mallampati-legion-health-founding-engineer-2026-05-19.pdf
**Verification:** confirmed via Ashby GraphQL 2026-05-19

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | Legion Health — AI-native mental health care; runs own psychiatric practice; YC-backed; $3.3M+ ARR, $7M+ raised |
| Role | Founding Engineer (Product + Agent Systems) |
| Location | San Francisco — In-person 5 days/week (the JD says "In-Person in SF" explicitly) |
| Comp | Not stated in JD; founding equity expected |
| Visa sponsorship | Not stated |
| Domain | Autonomous mental healthcare agents — scheduling, intake, benefits, paperwork, clinician copilots, risk detection |
| Stack | LLM agent systems, product + workflow + integrations + reliability layer |
| Seniority | Founding (not gated by years; gated by ownership signal) |
| Existing patients | 2,200+ on a small team — real deployment |

**TL;DR:** Y-Combinator-backed mental-health AI company with a real psychiatric practice and 2,200+ patients in production. The role is a Founding Engineer owning core product + agent systems. Healthcare domain + agent systems + clinician copilot framing is a 1:1 archetype match for Deepak. The structural friction is **SF in-person 5d/wk** (relocation + F-1 OPT) and **comp opacity** (founding equity-heavy is common at this stage). Founding role means years floor is not the issue — ownership and shipping speed are.

## B — CV Match

| JD Requirement | CV Evidence | Strength |
|---|---|---|
| Founding-level ownership | Manga Lens (solo Chrome Web Store ship) + E-Farming founder | Strong |
| Product + agent systems | Claims Processing 5-stage multi-agent + Progress Solutions agentic workflows | Strong (1:1) |
| Agent reliability + guardrails | Schema-validated JSON contracts + grounding + evals | Strong |
| Clinician workflow integration | Progress Solutions HIPAA-conscious governance + clinical RAG | Strong |
| Differential reasoning support / treatment planning | Adjacent via Claims Processing risk-scoring patterns | Moderate |
| Real-time note scaffolding | Adjacent — clinical RAG patterns transfer | Moderate |
| Patient messaging / scheduling / billing | Adjacent via E-Farming co-op workflow + Progress Solutions stakeholder docs | Adjacent |
| AI teammates that show reasoning | Claims Processing audit-ready explainable risk scoring | Strong |
| Escalation handling | Schema-validated contracts force human-in-the-loop edges | Moderate |
| End-to-end ownership | Multiple solo shipped products | Strong |
| In-person SF 5d/wk | Currently US-based (Kent, OH) — F-1 OPT compatible with relocation | Aligned w/ relocation cost |

**Gaps & mitigation:**

1. **SF 5d/wk in-person** — Relocation cost. Frame: "Targeting SF; ready to relocate immediately for the right founding seat."
2. **Mental health clinical domain** — Not Deepak's direct background. Pitch: "Healthcare AI generalist with HIPAA + clinical RAG depth — mental health adds modality, not paradigm."
3. **Comp opacity** — Ask for base + equity split in screen one. Founding equity-heavy is common but base must cover SF cost of living.
4. **Visa** — Ask in screen one.

## C — Level and Strategy

JD: Founding (no years floor; ownership signal). Deepak: Two solo shipped products + production LLM work. Aligned for founding bar.

**Sell the ownership + shipping cadence:**
- "Manga Lens — solo on Chrome Web Store, 4 AI providers, per-provider failure isolation. Weekly-cadence shipping."
- "Claims Processing — 5-stage multi-agent pipeline with schema-validated contracts. Same pattern Legion needs for intake/scheduling/auth/billing/risk-detection agents."
- "Progress Solutions clinical RAG — production HIPAA-conscious governance. Direct fit for mental-health PHI handling."

The CTO is Princeton CS + Microsoft Power Automate background. Pitch should emphasize: end-to-end product ownership, shipping cadence, agent reliability (his Power Automate background = workflow agents).

## D — Comp and Demand

| Source | Range | Notes |
|---|---|---|
| Legion JD | Not stated | Ask: base, equity %, vesting cliff |
| Levels.fyi — YC Founding Engineer SF | $150-200K base + 0.3-1.5% equity | Common band |
| Glassdoor — SF Founding Engineer | $140-220K base + equity | Comparable |
| Target band | $130-220K base + meaningful equity | Within target if base ≥ $140K |

## E — CV Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Applied AI engineer..." | Lead with "Founding-cadence builder: solo shipped Manga Lens (Chrome Web Store), 5-stage agent system, production clinical RAG. Ready to own product + agent systems for an AI-native healthcare company." | Mirror Legion CTO's framing |
| 2 | Manga Lens project | Generic | Surface solo ship + per-provider isolation + 29 sites | Founding ownership signal |
| 3 | Claims Processing | Tech-heavy | Reframe as "AI teammates that show reasoning + escalate cleanly" — Legion's exact language | JD echo |
| 4 | Progress Solutions Healthcare | Buried | Promote HIPAA-conscious governance + clinical RAG up front | Mental health relevance |
| 5 | Skills order | Current | Lead Python + agent systems + RAG + LangChain + schema contracts + Docker | Founding stack |

## F — Interview Plan

| # | JD Requirement | STAR+R | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Founding ownership | Manga Lens | No solo Chrome AI vision translation extension existed | Ship to public marketplace | TypeScript + Manifest V3 + 4 providers + 29 sites + per-provider failure isolation | Live on Chrome Web Store | Founding cadence is fewer abstractions, more shipping |
| 2 | Agent reliability | Claims Processing | Multi-agent claim adjudication | Avoid cascade hallucinations | Schema-validated JSON contracts + RAG-grounded validation | 30% hallucination reduction; audit traces | Schemas catch what evals miss |
| 3 | Show-the-reasoning AI | Claims Processing risk scoring | Stakeholders need to trust agent decisions | Make reasoning auditable | Audit-ready explainable risk scoring with rationale traces | Stakeholder sign-off | Trust is not a feature — it's a contract |
| 4 | Clinician workflow | Progress Solutions clinical RAG | Healthcare clinical knowledge retrieval | Make retrieval precision measurable | Grounded-alignment metric + structured logs | ~35% precision; >90% alignment | Workflow work is co-design, not handoff |
| 5 | HIPAA / PHI | Progress Solutions HIPAA governance | Sensitive PHI in evals + production | De-id + lineage + audit trails | Lineage logs + system-limitation docs + stakeholder docs | Stakeholder sign-off on rollout | Translation work is the actual deliverable |
| 6 | Build-test-ship cadence | Multiple solo shipped projects | Real users, real timelines | Weekly cadence | Manga Lens v1→v2 with new sites/providers; Dream Decoder iterative | Public users; visible improvements | Cadence beats elegance |
| 7 | Red flag — clinical mental health depth | Honest answer | Not a clinical background | Be direct | "Healthcare AI generalist with HIPAA + clinical RAG depth — mental health adds modality, not paradigm. Ready to ramp on clinical specifics with clinician partners." | Aligned expectations | Clinical depth is on-the-job; AI depth is the floor |

## G — Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Ashby active; today's GraphQL fetch returned full JD | Positive |
| Description quality | CTO bio + concrete numbers (2,200+ patients, $3.3M ARR, $7M raised) + GitHub link | Positive |
| Funding | YC-backed; $7M+ raised; $3.3M+ ARR — real revenue | Positive |
| Reposting | No prior Legion Health entry | Positive |
| Comp | Not stated | Concerning |
| Visa | Not stated | Concerning |
| In-person 5d/wk | Costly for relocation candidates | Neutral (typical founding) |

**Assessment:** High Confidence. Real YC-backed AI-native healthcare company with production deployment and revenue. CTO is technical and public (GitHub link in JD). Comp opacity is typical for founding seats.

## H — Apply or Skip

**Score: 3.5/5** — Apply.

Apply if:
- Base + equity covers SF cost of living (base ≥ $140K + ≥ 0.5% equity is the rough founding floor)
- Visa sponsorship is reasonable
- Relocation timeline is workable

Skip if:
- Base offered below $130K (founding equity alone is not enough without runway)
- Visa is a hard no
- CTO unwilling to clarify clinical-mental-health gap framing

## Keywords (ATS)

founding engineer, agent systems, AI-native healthcare, mental health AI, clinician copilot, autonomous agents, HIPAA, PHI, clinical RAG, schema contracts, agent reliability, escalation, scheduling agents, intake, benefits, paperwork, billing, risk detection, follow-ups, patient messaging, Python, TypeScript, FastAPI, LangChain, applied AI
