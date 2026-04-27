# Evaluación: Ascertain — Forward Deployed Engineer (Remote)

**Fecha:** 2026-04-27
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer (Healthcare)
**Score:** 4.1/5
**URL:** https://jobs.ashbyhq.com/ascertain/d7dbc66f-2c0b-4ee0-9b92-305a243994bb
**Legitimacy:** High Confidence
**Location:** Remote-friendly (US); NYC hybrid option for NYC-based; healthcare AI platform
**PDF:** output/2026-04-27/cv-deepak-mallampati-ascertain-fde-remote-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | FDE + Applied AI (healthcare AI agents → admin work automation) |
| Domain | Healthcare AI agents for care-team admin work; deployed at major health systems and large specialty groups |
| Function | Embedded customer delivery + AI agent build/iterate at health systems |
| Seniority | Mid IC ($130K-$175K floor implies ~3-5 yrs) |
| Remote | Remote-friendly US (NYC hybrid optional); F-1 OPT US-W2 friendly |
| Team | Forward Deployed (small, customer-facing) |
| TL;DR | Embed with health systems and specialty groups; build, ship, and iterate AI agents that automate the administrative burden on care teams; healthcare-domain-fit FDE role. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Healthcare AI agents (admin automation) | Built RAG systems for clinical knowledge retrieval + healthcare documentation search at Progress Solutions (cv.md L25); agentic LLM workflows for eligibility checks, care workflow navigation, documentation clarification (cv.md L26) |
| FDE / customer-embedded delivery | Suvidha non-technical-staff Flask API (cv.md L47); Progress Solutions stakeholder-facing system-limitation docs (cv.md L30) |
| Multi-step agentic workflows | Multi-agent healthcare claims pipeline (Intake → Validation → Consistency → Duplicate → Risk) with schema-validated JSON contracts (cv.md L72); ~25% agent stability improvement (cv.md L26) |
| Predictive ML for healthcare ops | Patient no-show, care engagement scoring, support prioritization (cv.md L27); 15-20% recall gains on high-risk categories |
| Production deployment + Docker + FastAPI | FastAPI/Flask + Docker + structured logging + load sim → ~30% defect reduction (cv.md L28) |
| HIPAA-conscious data | De-identification, lineage, audit trails, system-limitation docs (cv.md L30) |
| Iterate fast with customers | Independent shipping of Manga Lens to Chrome Web Store + Dream Decoder full-stack (cv.md L60, L66) |

**Gaps:**
1. **Years floor** — JD-implied ~3-5 yrs vs Deepak's 2.5 yrs. Mitigation: emphasize that 2.5 yrs is *all* healthcare AI (not a transition), and that the agentic + RAG + predictive ML stack matches verbatim.
2. **Direct enterprise health-system deployment** — Progress Solutions is healthcare-tech but Ascertain deploys *into* the health system. Mitigation: Progress Solutions is a healthcare consultancy/SaaS — same domain language (HIPAA, EHR, eligibility, clinical documentation).
3. **NYC-located preference** — Deepak is OH; remote-friendly clause covers it. Mitigation: state F-1 OPT US-remote-ready with optional NYC travel for kickoff workshops.

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC. JD floor of ~$130K + healthcare specialty + customer-facing implies 3+ yrs ideally.
- **Vender mid:** Lead with "2.5 yrs of *production healthcare AI* — RAG (~35% retrieval precision), agentic LLM workflows for eligibility/care navigation (~25% stability), predictive ML for no-show/engagement (15-20% recall gain), HIPAA-conscious deployment with audit trails." This is one of the highest archetype-fit roles in this batch.
- **Si downleveled:** Accept if remote-US + clear $130K floor; healthcare AI-agent work compounds Deepak's specialization.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Ascertain FDE (per JD aggregator) | $130K-$175K base + meaningful equity + comprehensive health benefits |
| Funding / stage | Healthcare AI agent startup; deployed in major US health systems and large specialty groups |
| Visa | Not explicit — US-remote + comprehensive benefits implies US-W2 path; F-1 OPT confirmation needed |
| Demand trend | Healthcare AI agent companies (Hippocratic, Abridge, Suki, Ambience, Ascertain) are 2025-2026's hottest healthcare-AI segment; staff hours saved is the metric |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Forward-deployed Applied AI engineer for healthcare — RAG + agentic LLM workflows + predictive ML + HIPAA-conscious deployment, 2.5 yrs production at Progress Solutions." | Mirror JD: FDE + healthcare + agentic |
| 2 | Bullets | Surface healthcare RAG (~35%), agentic LLM workflows (eligibility/care navigation, ~25% stability), patient no-show/engagement ML (15-20% recall gain) | Three direct healthcare-AI proof points |
| 3 | Skills | Move RAG, agentic workflows, healthcare AI, HIPAA, FastAPI, Docker to top | JD keyword-first |
| 4 | Projects | Healthcare claims agentic pipeline first, healthcare RAG second, video summarization third (transferable healthcare-data skill) | Healthcare-first ordering |
| 5 | Footer | "US-based, F-1 OPT — remote-US ready; NYC-flex" | Match Ascertain's location model |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Healthcare RAG | Progress Solutions clinical retrieval | Clinicians needed grounded answers from clinical knowledge base | Recursive semantic chunking + transformer embeddings + eval-first | Production RAG with audit trail | ~35% retrieval precision; >90% groundedness | Eval-first builds clinician trust |
| 2 | Agentic workflows for healthcare ops | Eligibility / care workflow navigation agents | Multi-step healthcare queries needed structured reasoning + tool discipline | Structured reasoning + grounding rules + handoff contracts | Agentic LLM workflows for eligibility, care navigation, documentation clarification | ~25% agent stability + ~30% hallucination reduction | Tool discipline + grounding > free-form agent loops |
| 3 | Predictive ML for admin work | Patient no-show / care engagement | Care teams needed risk-tiered patient lists | Class weighting + stratified sampling + threshold calibration with scikit-learn / XGBoost | Production scikit-learn / XGBoost models | 15-20% recall gain on high-risk categories, >90% precision | Calibrated thresholds beat raw accuracy in clinical risk-tiering |
| 4 | Multi-agent system for healthcare | Healthcare claims agentic pipeline | Need fraud risk + duplicate detection + consistency checks | Multi-agent pipeline with schema-validated JSON contracts | Intake → Validation → Consistency → Duplicate → Risk pipeline | Audit-ready reasoning traces; cascading hallucination prevented | Schema contracts between agents = production-grade reliability |
| 5 | HIPAA-conscious deploy | Progress Solutions data governance | HIPAA-conscious stack with PII / PHI flowing through inference | De-identification + data lineage + audit trails + system-limit docs | Documented governance; eval pipelines | Ongoing | Documenting *what the system can't do* is as important as what it can |
| 6 | Customer-embedded iteration | Suvidha video summarization | Non-technical staff needed quick highlight extraction across 5,000+ sessions | Hierarchical abstractive summarization + Flask API | Production Flask service with web UI | 60-70% review time cut; ~85% highlight alignment | Build for the user's actual workflow, not the engineer's mental model |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Ashby today + Remotive 4495049 cross-post | Positive |
| Apply button | Active on jobs.ashbyhq.com/ascertain | Positive |
| Description quality | Names specific scope (admin work for care teams), concrete customer base (major health systems, specialty groups), measurable impact (hundreds of staff hours/week saved) | Positive |
| Salary transparency | Disclosed via aggregator ($130K-$175K) | Positive |
| Reposting | NYC FDE variant + Remote FDE variant (Founding Forward Deployed Engineer NYC also active) — scaling team | Positive |
| Layoffs / freeze | None — Ascertain is in deployment-growth phase | Positive |
| Role market context | Healthcare AI agent companies are in highest 2025-2026 demand; FDE is the GTM-adjacent IC role | Positive |

**Assessment:** **High Confidence** — actively recruiting, scaling team (NYC + Remote variants), well-funded (deployed at major health systems), JD is technology- and customer-specific, salary disclosed.

---

## Keywords extraídas

Forward Deployed Engineer, Healthcare AI, AI Agents, Care Teams, Admin Automation, RAG, LLM, Agentic Workflows, FastAPI, Docker, Python, HIPAA, EHR, Patient Risk, Predictive ML, scikit-learn, XGBoost, Embeddings, Customer-Embedded, Remote US, NYC, Health Systems, Specialty Groups
