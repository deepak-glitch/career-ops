# Evaluación: StackAI — Forward Deployed Engineer, Healthcare

**Fecha:** 2026-05-04
**Arquetipo:** AI Solutions / Forward Deployed Engineer (healthcare-tilted) + Generative AI / RAG Engineer
**Score:** 3.6/5
**URL:** https://jobs.ashbyhq.com/stack-ai/f6b1d010-12ea-460e-aebb-85e2f7e6de45
**Legitimacy:** High Confidence
**Location:** NYC Office — 307 7th Ave (on-site implied; payer/provider customer travel 10-20%)
**PDF:** output/2026-05-04/cv-deepak-mallampati-stackai-fde-healthcare-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed Engineer (healthcare) + RAG Engineer |
| Domain | Healthcare AI — RAG pipelines, LLM workflows, EHR integrations, claims processing, prior auth |
| Function | Build + Deploy + Customer-facing — co-design, deploy, evangelize at enterprise events |
| Seniority | Mid IC (3+ yrs explicit; stretch 0.5y for Deepak's 2.5y) |
| Remote | NYC on-site (no remote signal in JD); 10-20% travel |
| Team size | Strategic accounts focus — small, tight FDE team typical for StackAI |
| TL;DR | Healthcare-bullseye FDE for an established YC RAG platform. Stack 1:1 (RAG, LLM, Python+React, EHR, PHI). NYC on-site is the friction. **Note:** different posting from StackAI #142 (FDE generic, 2026-04-24, scored 3.2) — this is healthcare-specialized variant that maps better to Deepak. Apply if NYC relocation acceptable. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| 3+ yrs DS/SWE/SE/GenAI | ⚠️ Stretch (2.5y) | cv.md:22-39 (10mo Progress + 22mo Energy Solutions) |
| Healthcare enterprise — payer/provider | ✅ Direct | Progress Solutions clinical RAG + EHR pipelines; cv.md:25-30 |
| EHR integrations, claims workflows, PHI | ✅ Direct | cv.md:29 (EHR extracts) + cv.md:30 (HIPAA-conscious de-identification) + Healthcare Claims project cv.md:71-72 |
| RAG pipelines | ✅ Direct (+35% precision) | cv.md:25 |
| LLM workflows, agentic | ✅ Direct (>30% hallucination reduction) | cv.md:26 |
| Python backend | ✅ Direct | FastAPI/Flask + Docker; cv.md:12, 28 |
| React/Next.js TS frontend | ✅ Adjacent | TypeScript + React in Dream Decoder + Manga Lens; cv.md:12, 60-66 |
| Customer-facing — pitch, demo, evangelize | ⚠️ Soft | Suvidha non-tech UI + stakeholder docs (cv.md:30); no formal pre-sales |
| FHIR/HL7/X12/EDI | ⚠️ Adjacent | Healthcare Claims project mentions CPT/ICD vector retrieval; no explicit FHIR yet |
| Epic/Cerner/athenahealth | ⚠️ Gap | Generic EHR exposure; no platform-specific |
| Strategic enterprise / F500 | ⚠️ Gap | Mid-market healthcare via Progress Solutions; no F500 logo |
| Travel 10-20% | ✅ Acceptable | F-1 OPT US-domestic travel OK |

**Gaps:**
1. **3+ yrs floor (2.5y stretch)** — Soft. Frame healthcare RAG depth + measurable gains as compensating signal.
2. **Pre-sales / pitching** — Soft. Bridge with Manga Lens (shipped + 29-site selector configs) and Dream Decoder full-stack demos.
3. **FHIR/HL7/Epic** — Soft. Commit to ramp on FHIR week 1; CPT/ICD work is closest analogue.
4. **NYC on-site** — Hard relocation friction from Kent OH. Acknowledge openness up-front in cover.

## C) Nivel y Estrategia

JD targets a Mid IC FDE with healthcare account experience. Deepak fits stack-wise but needs to bridge the YOE gap and pre-sales optics.

**Sell Mid w/o lying:**
- Lead with healthcare RAG and clinical knowledge retrieval (+35% precision, >90% grounded alignment).
- Frame agentic Healthcare Claims as "claims-workflow LLM workflow with PHI-conscious data governance."
- Position founder origin (E-Farming) as customer-facing pre-sales adjacency.

**If downleveled:**
- Accept "Associate FDE" if base ≥ $130K. Negotiate review at 6 months tied to one healthcare account owned end-to-end.

## D) Comp y Demanda

**Comp:** Disclosed: **$120K – $200K + Equity + Commission**. NYC on-site comp is moderate by Manhattan standards — ~$150K landing point realistic for Deepak's profile.

**Demand:** StackAI is YC-backed with active enterprise traction. WebSearch shows multiple FDE postings open across regions. No layoff news.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic Applied AI | "FDE-track applied AI engineer with healthcare RAG (+35% precision), HIPAA-conscious LLM workflows, and EHR-grounded agentic claims work. Open to NYC relocation." | JD verbatim — payer/provider hooks |
| 2 | Skills | Mixed | Promote: RAG, LLM workflows, EHR integrations, PHI/HIPAA, claims processing, Python+TS+React | Mirror JD requirements |
| 3 | Experience bullets | Generic | Reframe RAG bullet: "Built clinical knowledge retrieval RAG with recursive semantic chunking; +35% precision; HIPAA-conscious data governance; audit-ready logging." | Mirrors "PHI/RAG" and "auditability" |
| 4 | Projects | CV-heavy | Lead with Healthcare Claims (CPT/ICD RAG + multi-agent JSON contracts) + Dream Decoder (FastAPI+React full-stack) | Healthcare claims and full-stack signal |
| 5 | Footer | Kent OH | Add "Open to NYC relocation; F-1 OPT, US-based" | Pre-empt on-site concern |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | RAG pipelines for healthcare | Progress Solutions clinical RAG | Generic clinical Q&A retrieval missing context | +35% precision target | Recursive semantic chunking + transformer embeddings + grounded eval | +35% precision, >90% grounded alignment | Eval set built early > clever chunking late |
| 2 | LLM workflows for claims | Healthcare Claims multi-agent system | Hallucinations cascading across agent steps | Schema-stable agent chain | Schema-validated JSON contracts between agents + RAG-grounded CPT/ICD | Stable multi-agent pipeline with audit-ready reasoning | Contract-first agent design > prompt iteration |
| 3 | EHR + PHI handling | Progress Solutions EHR pipelines + HIPAA governance | EHR extracts with PHI risk | Reliable, de-identified preprocessing | Pandas pipelines + de-identification + audit trails | >98% dataset reliability, -40% downstream instability | Lineage docs save 10x debug time later |
| 4 | Python + React full-stack | Dream Decoder | Multimodal creative app needed | Coordinated FastAPI + React/TS frontend | FastAPI backend + React/Vite/Tailwind UI + structured prompt layers | +30% contextual alignment, +25-30% first-pass success | Structured prompts > free-form prompts always |
| 5 | Customer-facing pitching | Manga Lens shipped to Chrome Store | Production extension w/ 29 site configs | Privacy-policy compliance + multi-provider fallback | Multi-provider abstraction + per-domain selectors + 7-day cache | Shipped, available to public users | Shipping forces edge-case rigor early |
| 6 | Strategic enterprise account | Energy Solutions oil & gas compliance | F100 ERP — contracts, nominations, billing | Reduce query latency + deployment errors | T-SQL tuning + Jenkins CI/CD + RBAC | -20% query time, -30% deploy errors | Compliance environments reward structure over speed |

**Case study:** Healthcare Claims Multi-Agent + Progress Solutions clinical RAG — direct mapping to "claims processing, prior authorization, clinical documentation."

**Red-flag prep:**
- "3+ yrs but you have 2.5?" → "Wall-clock 2.5y, but production healthcare RAG, agentic LLM, and HIPAA-conscious deployment depth covers most 3y FDE bars."
- "Why NYC?" → "StackAI healthcare verticalization is where I want to deploy. NYC on-site is the cost; I'm in."
- "FHIR experience?" → "CPT/ICD vector retrieval and EHR pipelines are closest. Will ramp FHIR week one."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on StackAI Ashby board; GraphQL fetch returned full JD | Positive |
| Description quality | Concrete healthcare workflows, specific stack (Python + React/Next.js), comp disclosed | Positive |
| Company signals | StackAI is YC-backed with multiple enterprise FDE postings open; no layoff news | Positive |
| Reposting | Distinct from #142 (StackAI generic FDE 2026-04-24) — this is healthcare-specialized variant | Neutral |
| Realism | 3+ yrs + healthcare + RAG is a coherent FDE bar | Positive |
| Salary transparency | Disclosed: $120K-$200K + equity + commission | Positive |

**Context Notes:** StackAI specialization on healthcare verticals is a known 2026 strategic move per WebSearch corroboration. **Verification:** confirmed (Ashby GraphQL direct).

## H) Draft Application Answers

(skipped — score 3.6 below 4.5 threshold; cover-letter sketch below)

> "Healthcare RAG and HIPAA-conscious LLM workflow is what I do today: I built clinical knowledge retrieval at Progress Solutions (+35% precision, >90% grounded alignment) and an agentic Healthcare Claims system with schema-validated JSON contracts between agents for CPT/ICD validation. StackAI's payer/provider verticalization — claims processing, prior auth, clinical documentation — maps cleanly. I'm in Kent OH today, US-based on F-1 OPT, and open to NYC relocation."

---

## Keywords extraídas

Forward Deployed Engineer, Healthcare, RAG, LLM workflows, EHR integrations, PHI, HIPAA, claims processing, prior authorization, clinical documentation, FHIR, HL7, X12, EDI, Epic, Cerner, athenahealth, payer, provider, Python, FastAPI, React, Next.js, TypeScript, StackAI, NYC, $120-200K, mid IC, agentic
