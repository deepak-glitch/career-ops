# Evaluación: Scale AI — Software Engineer, New Grad

**Fecha:** 2026-05-03
**Arquetipo:** AI Solutions / Forward Deployed (data labeling infra + customer-RAG tooling)
**Score:** 3.5/5
**URL:** https://job-boards.greenhouse.io/scaleai/jobs/4605996005
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — On-site
**PDF:** output/2026-05-03/cv-deepak-mallampati-scale-ai-software-engineer-new-grad-2026-05-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Internal AI Platform (labeling-ops tooling, RAG customer apps, fraud-detection, ML quality estimation) |
| Domain | AI data infrastructure (data labeling at 100k-labeler scale) |
| Function | Build internal tooling + integrate ML/RAG into operations stack |
| Seniority | New Grad (Fall 2025 / Spring 2026 BS) — internship experience required |
| Remote | San Francisco, CA — On-site |
| Comp | $124,000 - $155,000 USD base (SF) |
| TL;DR | Tier-1 AI infra company hiring new-grad SWEs to build labeling QA tools, contributor acquisition, fraud detection, and customer-facing RAG apps. Strong stack 1:1 (Python/TS/React/MongoDB), good comp, but SF on-site relocation friction for F-1 OPT Kent-OH-based candidate. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| Bachelor's in CS/related (Fall 2025 or Spring 2026 grad) | ⚠️ Master's May 2025 (graduated) — slightly older grad band | cv.md L91-92 |
| Previous internship experience | ✅ Energy Solutions Intl (Emerson) Database/DevOps Intern + Suvidha Foundation ML | cv.md L33, L42 |
| Python | ✅ Strong | cv.md L12 (Python, FastAPI, Flask) |
| TypeScript / React | ✅ Manga Lens TS Chrome extension; Dream Decoder React/TS/Vite | cv.md L60, L66 |
| MongoDB | ⚠️ Soft — primary stack is Postgres/SQLite; can quickly adapt | cv.md L17 (PostgreSQL/SQLite) |
| Full-stack web development | ✅ Manga Lens, Dream Decoder, Patient Records, E-Farming | cv.md L60, L66, L83, L86 |
| Large-scale data processing | ✅ EHR extracts + 5,000+ video sessions + 20k-node OSM graph | cv.md L29, L44, L78 |
| API integration | ✅ FastAPI/Flask services, multi-provider AI vision orchestration | cv.md L28, L60 |
| RAG application (customer-service example) | ✅ Healthcare RAG with ~35% precision gain + Suvidha doc Q&A RAG | cv.md L25, L46 |
| ML model integration (churn prediction example) | ✅ Patient no-show + care engagement scoring (XGBoost/scikit-learn) | cv.md L27 |
| Quality estimation using models | ✅ Highlight alignment 85% + threshold calibration on imbalanced data | cv.md L45, L27 |

**Gaps:**
1. **Geographic / on-site (medium)** — SF on-site role; Deepak is Kent, OH (F-1 OPT US-based). Relocation feasible on F-1 OPT but adds friction; Scale AI offers internal sponsorship for strong hires.
2. **Grad-year band (soft)** — JD says "Fall 2025 or Spring 2026 Bachelor's" — Deepak graduated Master's May 2025, slightly outside the strict band but matches the "new grad with internship experience" spirit. Lead with graduation date in cover note.
3. **MongoDB (soft)** — Postgres-heavy CV; mention via the Manga Lens cache work or preprocessing pipelines as fast adaptation path.

## C) Nivel y Estrategia

This is a tier-1 AI infrastructure new-grad role at a publicly visible, well-funded company (Scale AI). Bar is high (Levels: top-tier base + early IPO equity exposure). Deepak's profile reads slightly senior to "new grad" — Master's + 2.5y at Progress Solutions — which may push the resume into the lateral pile rather than the strict new-grad pile. Frame as "new grad with shipped production experience": positions him favorably vs CS BS-only peers without internships.

**Vender senior sin mentir:** lead with Manga Lens (solo end-to-end shipping = a customer-RAG analog), Healthcare RAG (35% precision = Scale AI customer service RAG analog), and Healthcare Claims agentic pipeline (multi-agent schema contracts = labeling QA analog).

**If downleveled:** accept new-grad band ($124-155K is fair for SF L3); negotiate sign-on or relocation credit instead of base; ask for visa sponsorship runway (H-1B sponsorship in Year 1 is a real win at Scale AI).

## D) Comp y Demanda

$124K-155K base (SF L3 new grad band) is at-market — Levels.fyi shows Scale AI L3 TC ~$170-220K with sign-on + RSU; published base is the floor. Demand for new-grad AI infra roles at Scale is high (~5,000+ apps per cycle), but new-grad-specific bands are gated to early-career applicants — Deepak's Master's + 2.5y is competitive vs the median CS BS applicant. Source: Levels.fyi Scale AI L3 (2026 Q1 snapshots), Glassdoor confirms $130-160K range.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-AI-heavy framing | Open with "Applied AI engineer with shipped LLM-powered customer apps and ML labeling-ops tooling" — emphasize Manga Lens + Healthcare RAG as customer-RAG analogs | JD opens with customer service RAG example |
| 2 | Experience bullet | Progress Solutions order | Move RAG bullet to top, agentic + ML pipelines second | JD highlights RAG first, ML second |
| 3 | Projects | Default order | Lead with Healthcare Claims (multi-agent schema contracts ≈ labeling QA), then Manga Lens (multi-provider integration ≈ customer-facing tooling) | Schema-validated pipelines map to QA infra |
| 4 | Skills | "Healthcare AI (HIPAA-conscious)" | Keep but add "Internal AI Platform Tooling" as adjacent domain | JD is platform/tooling, not direct healthcare |
| 5 | LinkedIn headline | "Applied AI Engineer" | Add "| Production RAG, Agentic Pipelines, ML Infra Tooling" | Aligns with JD vocab |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-------------|-----------------|---|---|---|---|------------|
| 1 | Customer-service RAG (1000s of questions) | Healthcare RAG | Clinical knowledge retrieval at Progress | Improve precision + groundedness | Recursive semantic chunking + transformer embeddings + grounding rules | ~35% retrieval precision, >90% alignment | Realized chunking strategy matters more than embedding choice; would A/B test chunking earlier next time |
| 2 | ML model integration (churn prediction example) | Patient no-show ML | Care-team capacity wasted on no-shows | Predict no-show risk class-weighted | XGBoost + scikit-learn + threshold calibration | +15-20% recall on high-risk while precision >90% | Class imbalance was the silent killer; learned to spec precision-recall tradeoffs upfront |
| 3 | Quality estimation using models | Suvidha highlight alignment | Manual highlight curation = hours per video | Match human curation automatically | Transformer summarization + timestamp alignment | ~85% AI-human agreement, 60-70% review-time savings | Model alignment ≠ user trust — needed a UI confidence indicator |
| 4 | Tooling for 100k labelers | Manga Lens multi-provider | Rate limits + provider downtime would break translation | Per-provider failure isolation | Provider abstraction + payload policies (WebP for cloud, JPEG for Ollama) | Solo-shipped to Chrome Web Store with 4 providers, 29 sites | Failure-isolation architecture is non-negotiable when external APIs vary in reliability |
| 5 | Fraud-detection tools | Healthcare Claims fraud risk | Fraud signals scattered across claim metadata | Multi-stage agent pipeline | Schema-validated JSON contracts between agents (Intake/Validation/Consistency/Duplicate/Risk) | Audit-ready reasoning traces, eliminated cascading hallucinations | Agent-to-agent contracts are the difference between "demo magic" and production-trustworthy |
| 6 | Full-stack web development | Dream Decoder | Multi-provider creative orchestration | Coordinated text + image pipeline with prompt transform layer | FastAPI + React/Vite/Tailwind + structured prompt transform | ~30% contextual alignment, ~25-30% first-pass image success | Intermediate prompt layers are higher-leverage than direct prompt tuning |

**Story bank append:** All 6 already present at story-bank.md (covered in #444 Continued + earlier).

## G) Posting Legitimacy

**Assessment:** **High Confidence** — Real, active opening at a tier-1 well-known AI infra company.

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active on Greenhouse with full JD body, salary, and Apply form | Positive |
| Apply button | Active (verified via WebFetch) | Positive |
| Tech specificity | Names specific stack (Python, TS, React, MongoDB) + specific use cases (churn, fraud, RAG, labeling QA) | Positive |
| Salary transparency | $124-155K USD published (SF CA pay-transparency law compliant) | Positive |
| Reposting | First time seen on this URL ID | Positive |
| Company hiring signals | Scale AI completed major customer-government deal late 2025; expanding labeling ops; 5,000+ open new-grad applicants per cycle is normal | Positive |
| Description specificity | Concrete examples (1000s of customer questions for RAG; 100k labelers; specific tools) | Positive |

**Context Notes:** None concerning. Standard tier-1 tech new-grad posting.

## H) Draft Application Answers

(Score 3.5/5 → not 4.5+ threshold; skip Block H. If applying anyway, lead with: "Master's CS Kent State May 2025; 2.5 years applied AI at Progress Solutions shipping healthcare RAG, agentic LLM workflows, and predictive ML pipelines — eager to bring that production discipline to Scale AI's labeling-ops infrastructure." Open Manga Lens link as proof of solo-shipping a customer-facing RAG-adjacent product.)

---

## Keywords extraídas
software engineer, new grad, AI, RAG, customer service, fraud detection, ML model integration, churn prediction, quality estimation, Python, TypeScript, React, MongoDB, full-stack, large-scale data processing, API integration, labeling, contributor acquisition, internal tooling, San Francisco
