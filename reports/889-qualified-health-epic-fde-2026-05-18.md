# Qualified Health PBC — Forward Deployed Engineer, Epic Specialist

**Fecha:** 2026-05-18
**Arquetipo:** AI Solutions / Forward Deployed Engineer | Applied AI / LLM Engineer
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/qualified-health-pbc/88dc8b6a-8aaf-4f0a-8c1a-a0249d647dd4
**Legitimacy:** High Confidence
**Location:** United States — Remote (up to 30% travel)
**Region:** US
**PDF:** output/2026-05-18/cv-deepak-mallampati-qualified-health-epic-fde-2026-05-18.pdf
**Verification:** confirmed via Ashby GraphQL 2026-05-18

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | Qualified Health PBC (Generative AI in healthcare; safe AI governance, healthcare agent creation, real-time monitoring) |
| Role | Forward Deployed Engineer, **Epic Specialist** |
| Location | US — Remote with up to 30% travel to health system client sites |
| Employment | Full-time |
| Comp | Not stated in Ashby compensation tier (likely $150-200K + equity per QH band) |
| Visa sponsorship | Not stated |
| Domain | Healthcare AI integration — Epic EHR, clinical workflows |
| Stack | Epic Bridges, FHIR R4, CDS Hooks, SMART on FHIR, SendMessage/MDM T02; "AI clinical workflows" platform |
| Seniority | Implicit mid-senior (deep Epic implementation experience expected) |

**TL;DR:** This is a deeply specialized Epic + clinical informatics FDE role. The dominant requirement is "individuals who have lived inside health systems or Epic implementation environments and understand, from the inside, how clinical workflows get built". Deepak has **healthcare AI experience but not Epic implementation experience** — that's the central, near-mandatory gate. Same company as the previously-evaluated #854 (Qualified Health Healthcare AI Solutions Engineer), but this role is **far more Epic-domain-specific**. Score is lower than the FDE archetype + healthcare AI alignment would normally suggest because the Epic specialization is a real binding constraint.

---

## B — CV Match & Gaps

**Strong matches:**
- "Generative AI in healthcare" — Deepak's whole thesis (HIPAA-conscious, Clinical RAG, Agentic Claims).
- "Embedded at health system client sites" — Clinical RAG at Progress Solutions is an embedded healthcare client pattern (smaller scale, different tooling).
- "AI outputs need to surface (In Basket, CDS card, AVS note)" — Deepak can articulate the agent → user surface decision via Agentic Claims pipeline.
- "Hands-on, client-facing solution-design role" — Manga Lens (sole ship) + Clinical RAG (embedded) show shipping discipline.

**Gaps / risks:**
- **Epic implementation experience** — Deepak has **none**. This is the central gate; JD says "individuals who have lived inside health systems or Epic implementation environments". This is a real blocker.
- Epic Bridges, FHIR R4, CDS Hooks, SMART on FHIR, MDM T02 — none of these are on Deepak's CV. They're learnable but not weeks of learnable.
- "Travel up to 30%" — acceptable but a lifestyle factor.
- Implicit mid-senior level + Epic depth makes this a stretch.

**Mitigation:**
- Frame Clinical RAG + Agentic Claims as transferable healthcare-AI-in-clinical-workflow experience.
- Be upfront in screen: "I don't have Epic build experience, but I have shipped clinical AI at Progress Solutions and I can ramp on Epic Bridges + FHIR + CDS Hooks quickly". Honest framing > overselling.
- Position as a **secondary apply** behind roles where the Epic gate is not central.

---

## C — Level and Strategy

- JD level: mid-senior with explicit Epic implementation expertise.
- Deepak's natural level: mid for healthcare AI generally; **junior for Epic specifically**.
- Realistic outcome: high risk of being filtered for missing Epic experience. Apply only as a stretch + cover letter that openly acknowledges the gap and pitches healthcare AI integration breadth instead.

## D — Comp & Demand

| Datum | Value | Source |
|---|---|---|
| Posted range | Not disclosed (QH typically $150-220K + equity per glassdoor) | Inferred |
| Healthcare AI integration engineer market | $140-200K mid; $200-260K senior | Levels.fyi 2026 |
| QH stage | Series B-stage healthcare AI (real-time AI governance) | Public funding history |
| Epic FDE demand | High but specialized (narrow funnel) | Industry trend |

Likely competitive but the Epic specialty narrows the candidate pool — both ways. Comp risk: if no band, ask early.

## E — Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "healthcare RAG…" | "Healthcare AI engineer shipping production clinical AI (~35% retrieval precision, >30% hallucination reduction) with deep stakeholder embedding — ramping Epic interfaces (FHIR, CDS Hooks, SMART on FHIR) as fast-learning bridge experience" | Acknowledge Epic gap openly; lead with healthcare AI proof |
| 2 | Bullets | RAG-first | Reorder: clinical AI shipping → agentic workflows → healthcare stakeholder embedding → ML/CV | Match JD's healthcare-workflow framing |
| 3 | Projects | Mixed | Lead with Clinical RAG (clinical workflow embedded) + Agentic Claims (healthcare ops) + No-show ML (clinical risk) | All three are healthcare-clinical |
| 4 | Skills | grouped | Top line: "Clinical AI integration: RAG, agents, HIPAA-conscious; ramping Epic Bridges / FHIR / CDS Hooks" | Honest framing of current vs target |
| 5 | Cover letter | n/a | Open: "I don't have Epic build experience — I have shipped healthcare AI (Clinical RAG ~35% precision; Agentic Claims >30% hallucination reduction) and I can ramp Epic Bridges + FHIR + CDS Hooks in weeks. The 'live inside health systems' instinct is real on my end." | Open with the gap acknowledgement; the JD rewards honesty |

## F — Interview Plan (STAR+R)

| # | JD Hook | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Hands-on, client-facing, solution-design role" | Clinical RAG at Progress Solutions | Embedded healthcare client with broken EHR documentation search | Improve retrieval precision + grounding | Recursive semantic chunking + transformer embeddings + offline eval harness | ~35% precision, >90% grounding | Eval harness precedes retrieval tuning; embedding with the customer surfaces real gaps |
| 2 | "AI outputs need to surface (In Basket, CDS card, AVS note)" | Agentic Healthcare Claims | Multi-step claims with brittle outputs into ops queues | Resilient agent system with clear output surfaces | Schema-validated JSON contracts + RAG-grounded CPT/ICD + audit traces | >30% hallucination reduction | Output surface is part of the contract, not an afterthought |
| 3 | "Translate field learnings — edge cases, clinical feedback" | Patient No-show ML | High-risk miss rate too low | Improve recall on high-risk categories | scikit-learn + XGBoost + class weighting + threshold calibration + clinical feedback loop | 15-20% recall gain, >90% precision held | Calibration > raw accuracy when clinicians have to act on the output |
| 4 | "End-to-end testing and validation — from platform output through Epic interface to point of care" | Clinical RAG eval harness | Need to catch retrieval regressions before clinicians see them | Offline eval harness on stored questions | Curated eval set + precision/recall metrics + regression gates on PRs | Caught regressions before deploy | Validation gates are the difference between "ML demo" and "clinical product" |

## G — Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Ashby GraphQL full record 2026-05-18 (isListed: true) | Active | Positive |
| Detailed clinical AI integration specifics (FHIR R4, CDS Hooks, SMART on FHIR) | Active | Positive |
| Qualified Health is established Series B in healthcare AI | Active | Positive |
| Travel + remote policy clear | Active | Positive |
| No compensation transparency | Mild caveat | Neutral |

Active, real role; the Epic specialty narrows but doesn't undermine legitimacy.

## H — Draft Application Answers

Not generated (score 3.1; below 4.5 trigger). **Apply only as a stretch.** The Epic gate is real and Deepak's Epic experience is zero. Better to apply to QH's other AI Solutions Engineer (#854) or other clinical-AI FDE roles without Epic depth gate. If applying here, lead with the honest gap acknowledgement.

---

## Keywords (ATS)

Forward Deployed Engineer, Epic Specialist, healthcare AI, FHIR R4, CDS Hooks, SMART on FHIR, Epic Bridges, clinical informatics, clinical workflows, AI clinical workflows, Qualified Health, generative AI healthcare, embedded client engineer, RAG, agentic workflows, MDM T02, In Basket, AVS note.
