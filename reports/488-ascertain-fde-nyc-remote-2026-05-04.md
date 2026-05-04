# Evaluación: Ascertain — Forward Deployed Engineer (NYC or Remote)

**Fecha:** 2026-05-04
**Arquetipo:** AI Solutions / Forward Deployed Engineer (healthcare) + Generative AI / RAG Engineer
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/ascertain/8585e400-f993-46ef-b443-2ad6bbe485b9
**Legitimacy:** High Confidence
**Location:** NYC or Remote-US (occasional travel to customer sites)
**PDF:** output/2026-05-04/cv-deepak-mallampati-ascertain-fde-nyc-remote-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed Engineer + RAG Engineer |
| Domain | Healthcare AI agents — prior authorization, referral, billing workflows; EHR + payer portals |
| Function | Build + Deploy + Customer-facing — own full deployment arc, write production code, lead working sessions |
| Seniority | Mid IC (3-5 yrs explicit; stretch 0.5y for Deepak's 2.5y) |
| Remote | NYC or Remote-US — occasional customer-site travel |
| Team size | Small FDE team typical for Series-A healthcare AI |
| TL;DR | Direct healthcare-FDE bullseye for Deepak. Different posting variant than #216 (Remote-only, 2026-04-27, scored 4.1). Same comp band, same stack (Python + LLM + EHR + PHI). NYC-or-Remote flexibility is a plus. **Note:** if applying, choose Remote variant first; this NYC/Remote variant is a backup ID. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| 3-5 yrs production code | ⚠️ Stretch (2.5y) | cv.md:22-39 |
| Python fluent | ✅ Direct | cv.md:12 |
| SQL + REST APIs + full-stack | ✅ Direct | T-SQL/PostgreSQL/SQLite + FastAPI/Flask + React/TS; cv.md:12-17 |
| Underspecified-problem track record | ✅ Strong | E-Farming (founded), Manga Lens (shipped solo), Suvidha (greenfield video summarization); cv.md:60, 75, 86 |
| Strong written + verbal communication | ✅ Strong | Stakeholder-facing system-limitation docs (cv.md:30); 150+ student coordination (cv.md:52) |
| EHR + claims + EDI (X12 270/271, 278, 837), HL7/FHIR | ⚠️ Adjacent | EHR pipelines + Healthcare Claims CPT/ICD RAG; no explicit EDI/X12/FHIR yet |
| LLMs + agent frameworks (prompt, eval, tools, retrieval, guardrails) | ✅ Direct | Agentic LLM workflows (cv.md:26), Healthcare Claims multi-agent (cv.md:71-72), RAG (cv.md:25) |
| OAuth, webhooks, browser automation, PDF/document parsing | ⚠️ Adjacent | Manga Lens (Chrome Manifest V3 + service workers + viewport-slice screenshots) — strong proxy for browser automation; no explicit OAuth |
| Embedded engineer w/ enterprise customers | ⚠️ Soft | Stakeholder docs at Progress Solutions; no formal embedded engagement |
| Travel to customer sites | ✅ Acceptable | F-1 OPT US-domestic OK |

**Gaps:**
1. **3-5 yrs floor (2.5y)** — Soft. Compensate with healthcare RAG depth + measurable gains.
2. **EDI/X12/FHIR specific** — Soft. Bridge with CPT/ICD vector retrieval; commit to ramp week 1.
3. **Embedded customer engagement** — Soft. Frame founder origin (E-Farming, 80-120 active users) + Suvidha non-tech UI as customer-facing adjacency.

## C) Nivel y Estrategia

JD targets a Mid IC FDE with healthcare ops fluency. Deepak fits stack-wise; the gap is YOE (-0.5y) and EDI specificity.

**Sell Mid w/o lying:**
- Lead with healthcare RAG (+35% precision) and agentic Healthcare Claims work (CPT/ICD RAG validation).
- Frame founder origin (E-Farming) as embedded customer engagement adjacency.
- Position Manga Lens shipping to Chrome Web Store as evidence of full-stack ownership under ambiguity.

**If downleveled:**
- Accept "Associate FDE" if base ≥ $130K. Negotiate 6-month review tied to one customer deployment owned end-to-end.

## D) Comp y Demanda

**Comp:** Disclosed: **$130K – $175K**. Same band as #216. Realistic landing for Deepak: ~$140-150K base.

**Demand:** Ascertain is Series-A healthcare AI, backed by Northwell Health and Deerfield Management. WebSearch shows multiple FDE postings (2026-04-27 #216, this NYC/Remote variant) — consistent hiring signal.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic | "Healthcare-focused FDE-track engineer with RAG (+35% precision), agentic LLM workflows, EHR pipelines, and HIPAA-conscious deployment. Open to NYC or Remote-US." | JD verbatim |
| 2 | Skills | Mixed | Promote: RAG, agent frameworks, EHR, prior auth, claims, OAuth/webhooks, browser automation | Mirror JD requirements |
| 3 | Experience bullets | Generic | Reframe RAG bullet: "Built clinical knowledge RAG; recursive semantic chunking + transformer embeddings; +35% precision, >90% grounded alignment; HIPAA-conscious data governance." | Direct match |
| 4 | Projects | CV-heavy | Lead with Healthcare Claims (CPT/ICD RAG + multi-agent) + Manga Lens (Chrome extension, browser automation) | Healthcare claims + browser automation signal |
| 5 | Footer | Kent OH | Add "Open to NYC relocation or Remote-US; F-1 OPT, US-based" | Pre-empt location concern |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | RAG for healthcare | Progress Solutions clinical RAG | Generic context retrieval | +35% precision target | Recursive semantic chunking + transformer embeddings | +35% precision, >90% grounded | Eval-set design front-loads ROI |
| 2 | Agentic LLM with guardrails + tool use | Healthcare Claims multi-agent | Hallucination cascade across agents | Schema-stable agent chain | Schema-validated JSON contracts + RAG-grounded CPT/ICD | Stable pipeline w/ audit-ready trace | Contracts > prompts |
| 3 | Underspecified-problem ownership | E-Farming founder | Greenfield AgriTech marketplace, no spec | Onboard 80-120 users phase 1 | PHP/MySQL/Bootstrap + cart/reviews/community | 80-120 active users | Founder shipping > tickets |
| 4 | Browser automation + PDF parsing | Manga Lens | 29 webtoon sites, panel capture | Reliable real-time capture | Manifest V3 + viewport-slice + coordinate remap + 7-day cache | Shipped Chrome Web Store | Per-domain selector configs > generic DOM |
| 5 | Customer-embedded technical voice | Progress Solutions stakeholder docs | HIPAA + audit trail expectations | Reduce stakeholder ambiguity | System-limitation docs + lineage docs + governance trails | Reduced stakeholder back-and-forth | Document constraints early, not at handoff |
| 6 | Build cross-stack production | Dream Decoder | Multimodal creative app | FastAPI + React/Vite/Tailwind | Structured prompt transformation layers | +30% alignment, +25-30% first-pass success | Cross-stack ownership = full feedback loop |

**Case study:** Healthcare Claims Multi-Agent + Progress Solutions EHR pipelines — direct mapping to "prior authorization, referral, claims, EDI, EHR APIs."

**Red-flag prep:**
- "3-5 yrs but you have 2.5?" → "Healthcare RAG + agentic depth covers most 3y FDE bars. I'd rather close the gap with output, not waiting."
- "Customer-embedded?" → "E-Farming founder onboarded 80-120 users phase one. Suvidha required non-tech UX. Both are embedded customer work."
- "Why Ascertain?" → "Northwell-backed, real prior-auth pain, healthcare AI agents in production. That's the work I want."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Ascertain Ashby board; GraphQL fetch returned full JD | Positive |
| Description quality | Concrete healthcare workflows (prior auth, referral, claims, RCM); specific tech (X12 EDI, FHIR, Athena/Epic/eClinicalWorks); explicit anti-fit ("not for you if...") | Positive |
| Company signals | Series A; Northwell + Deerfield backing; multiple FDE postings (#216 + this) | Positive |
| Reposting | Distinct from #216 (Remote-only variant) — this is NYC/Remote variant; consistent role family | Neutral |
| Realism | 3-5 yrs + healthcare + LLM agent is a coherent FDE bar | Positive |
| Salary transparency | Disclosed: $130K-$175K | Positive |

**Context Notes:** Ascertain has been hiring consistently across role variants. **Verification:** confirmed (Ashby GraphQL direct).

## H) Draft Application Answers

(skipped — score 4.0 below 4.5 threshold; cover-letter sketch below)

> "Healthcare AI agents with prior auth, referral, and claims is the exact problem space I work in: I built clinical knowledge RAG at Progress Solutions (+35% precision, >90% grounded alignment) and an agentic Healthcare Claims pipeline with schema-validated JSON contracts between agents for CPT/ICD validation. Ascertain's full-arc FDE model — embed with practices, build integrations, ship into production — maps cleanly to how I work. Open to NYC relocation or Remote-US."

---

## Keywords extraídas

Forward Deployed Engineer, healthcare AI agents, prior authorization, referral, claims, EDI, X12, HL7, FHIR, EHR APIs, Athena, eClinicalWorks, Epic, payer portals, RAG, LLM agents, prompt design, evals, guardrails, OAuth, webhooks, browser automation, PDF parsing, Python, SQL, REST, full-stack, Ascertain, NYC, Remote-US, $130-175K, mid IC
