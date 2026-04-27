# Evaluación: Urrly — AI Automation Engineer (Remote)

**Fecha:** 2026-04-27
**Arquetipo:** AI Solutions / Forward Deployed Engineer + AI Platform / MLOps Engineer (internal automation flavor)
**Score:** 4.0/5
**URL:** https://urrly.breezy.hr/p/d6e8f8609e72-ai-automation-engineer-remote
**Legitimacy:** High Confidence
**Location:** Remote — US-only (PT hours overlap, 9–3 PT)
**PDF:** output/2026-04-27/cv-deepak-mallampati-urrly-ai-automation-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | AI Automation / Internal Forward Deployed (first AI hire) |
| Domain | Health-Tech ($100M+ raised); internal AI tooling + workflow automation across teams |
| Function | Build/deploy/iterate; embed with Sales, Ops, Eng, Finance, Customer Success to find pain points and ship automated workflows |
| Seniority | Mid IC (first AI hire, comp band suggests 3-5 yrs pragmatic builder) |
| Remote | Fully remote — US-only, must overlap 9–3 PT |
| Team | Reports into leadership (first AI Automation Engineer) |
| TL;DR | Embedded AI builder for an internal-automation mandate at a well-funded Health-Tech: ship fast, iterate with internal stakeholders, prioritize impact over papers/demos. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| AI/automation across teams (build + deploy) | RAG + agentic workflows + predictive ML + FastAPI+Docker packaging across healthcare ops (cv.md L25-L29) |
| "Test, build, deploy — and repeat" | Independent shipping: Manga Lens (Chrome Web Store), Dream Decoder full-stack, agentic claims pipeline (cv.md L60-L72) |
| Python proficiency | Python listed as primary stack; FastAPI/Flask/scikit-learn/XGBoost/LangChain (cv.md L12-L14) |
| Workflow automation tooling | Multi-agent claims pipeline (Intake → Validation → Consistency → Duplicate → Risk) with schema-validated JSON contracts (cv.md L72) |
| Health-Tech domain (Urrly is health-tech) | 2.5+ yrs healthcare AI at Progress Solutions: HIPAA-conscious, EHR pipelines, eligibility/care navigation agents (cv.md L25-L30) |
| Data privacy & security | HIPAA-conscious data governance, de-identification, audit trails (cv.md L30) |
| Startup / small eng team mindset | Founder of E-Farming marketplace; ships independently; multi-stack (cv.md L86) |
| Internal-tools deployment | FastAPI/Flask packaging for internal stakeholders + non-technical Suvidha web interface (cv.md L47) |

**Gaps:**
1. **"Best models out there" — model selection breadth.** Mitigation: cv.md already lists Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama in Manga Lens (L60); demonstrates multi-provider judgment.
2. **Robot Framework/Selenium (one ZipRecruiter excerpt mentions automation frameworks).** Mitigation: not core to "AI Automation"; Deepak's automation is LLM/agentic workflow automation, not QA-test automation. Frame as different flavor, more current.
3. **First AI hire needs strong communication.** Mitigation: stakeholder-facing system-limitation docs at Progress Solutions (cv.md L30) + Student Manager comms experience (cv.md L52).

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC, "first AI hire" with strong shipping bias.
- **Vender mid:** "2.5 yrs of *production* healthcare AI — multi-stack (Python/FastAPI/Docker/RAG/Agentic/scikit-learn/XGBoost) — measurable outcomes (~35% retrieval precision, ~25% agent stability gain, 15-20% recall on high-risk classes). I ship and iterate; I don't write papers." This positioning fits the JD's "ships, not chases papers" language verbatim.
- **Si downleveled:** Accept if remote-US + clear ownership of internal AI charter; first-hire equity upside is meaningful at $100M+ Health-Tech.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Stated comp | **$180,000 – $225,000** (ZipRecruiter mirror) |
| Market for AI Automation Engineer (US Remote) | $140-200K mid-IC (ZipRecruiter ranges $86-163K and $91-200K cited in Apr 2026) — Urrly comp is at top of band |
| Health-Tech Applied AI demand | Strong — Urrly has $100M+ raised; first-hire role suggests near-term scaling |
| Fit ratio | High — JD stated comp matches Deepak's target band |

Sources: ZipRecruiter Urrly listing; ZipRecruiter aggregate "AI Automation" Apr 2026 ranges; tripleten.com career roadmap.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ years) building healthcare RAG..." | "Applied AI / Automation engineer with 2.5+ yrs shipping production AI in Health-Tech: RAG, agentic workflows, predictive ML, and FastAPI/Docker packaging — focused on internal tools and team-multiplier automation, not research papers." | Mirror JD's "ships, not papers" framing + bridge to internal automation |
| 2 | Skills | LLM/GenAI stack first | Add explicit "Workflow Automation, Internal Tooling, LLM-driven process automation" line | JD title verbatim |
| 3 | Bullets reorder | Progress Solutions L25 (RAG) first | Lead with **agentic LLM workflows for multi-step queries** (L26) — closer to "automate workflows" framing | JD priority |
| 4 | Projects | Pixel synthesis listed early | Bring **Agentic Healthcare Claims Pipeline** to top — schema-validated multi-agent automation matches JD's "automate workflows" thesis | Workflow automation proof |
| 5 | LinkedIn headline | "Applied AI Engineer" | "Applied AI / Automation Engineer — Healthcare AI, Agentic Workflows, FastAPI/Docker" | ATS keyword density for Urrly + similar |

## F) Plan de Entrevistas

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Spot pain point → automated workflow" | Healthcare claims agentic pipeline | Manual claims triage was hallucination-prone | Build multi-agent pipeline | Schema-validated JSON contracts between agents (Intake→Validation→Consistency→Duplicate→Risk) | Cascading hallucinations eliminated; auditable reasoning traces | Lesson: schema contracts at agent boundaries are non-negotiable; treat LLM outputs as untrusted by default |
| 2 | Iterate fast | Manga Lens multi-provider integration | Single provider had CUDA crashes on tall webtoon panels | Ship a reliable multi-provider pipeline in production | Viewport-slice screenshots + WebP/JPEG payload routing per provider + 7-day cache + 29 selector configs | Shipped to Chrome Web Store; sustained user base | Lesson: per-provider payload tuning beats trying to standardize; ship asymmetrically |
| 3 | Prod LLM/GenAI | RAG retrieval gains | Clinical knowledge retrieval was returning irrelevant docs | Improve precision without hurting latency | Recursive semantic chunking + transformer embeddings | ~35% precision gain, ~30% irrelevant retrieval reduction, >90% grounded alignment | Lesson: chunking strategy matters more than model swap |
| 4 | Predictive ML | Patient no-show / engagement | Unbalanced classes → recall on high-risk patients was poor | Ship calibrated XGBoost with threshold tuning | Class weighting + stratified sampling + threshold calibration | 15-20% recall gain on high-risk cohort while precision >90% | Lesson: precision-recall tradeoff is a product decision, not a model knob |
| 5 | Docker / production | FastAPI inference packaging | Inference services lacked observability | Container + structured logging + load sim | FastAPI/Flask + Docker + structured logs + load simulation | ~30% post-deploy defect reduction | Lesson: load simulation pre-deploy catches cold-start bugs no unit test will |
| 6 | First hire / scope ambiguity | E-Farming marketplace | No technical team, undefined product | Ship a marketplace solo end-to-end | PHP/MySQL + Bootstrap; cart, reviews, blog | Onboarded 80-120 active users | Lesson: when scope is open, ship a thin slice fast and let users define priorities |
| 7 | Cross-team partnership | Stakeholder-facing limitation docs | Clinical teams misunderstood model uncertainty | Document system limitations honestly | Audit trails, lineage docs, limitation matrices | Reduced over-reliance on outputs in clinical reviews | Lesson: communicating *what your AI can't do* builds more trust than overselling capability |

**Case study to present:** Agentic Healthcare Claims Pipeline (verbatim "automate workflows" match).
**Red flag answer:** "Why no formal Senior title?" — "I optimized for shipping density, not titles. 2.5 yrs of production healthcare AI with measurable outcomes is the case I'd rather make."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Breezy.hr + ZipRecruiter mirror | Positive |
| Description quality | Specific: "automate tools/tasks/workflows", "ships not papers", "best models", US-only PT hours | Positive |
| Comp transparency | $180-225K stated | Positive |
| Company funding | $100M+ raised (Health-Tech) | Positive |
| Hiring signals | First AI Automation Engineer — "first hire" pattern is ghost-job-low | Positive |
| Reposting | Not seen in scan-history (new add 2026-04-27) | Neutral |

**Context:** Urrly itself appears to be a recruiter/staffing brand on Breezy hosting roles for portfolio companies; the listing reads as on behalf of an unnamed Health-Tech client. Verify direct W-2 vs. through-Urrly during recruiter screen. This is a process/legitimacy note, not a red flag.

## H) Draft Application Answers

(Score 4.0/5 — under the 4.5 threshold, no draft answers required by mode. CV tailoring + cover letter outline below.)

**Cover-letter angle (1 paragraph):** "I build healthcare AI that ships — RAG, agentic workflows, predictive ML, FastAPI/Docker — with measurable outcomes (~35% retrieval precision, ~25% agent stability, 15-20% recall on high-risk patients). What drew me to this role: 'ships not papers' is exactly how I work, and Urrly's Health-Tech mandate is the same domain I've spent 2.5 years inside. I want to own the internal-AI charter end-to-end."

---

## Keywords extraídas

AI Automation Engineer, workflow automation, internal tools, Python, FastAPI, Docker, RAG, agentic workflows, LLM application development, prompt engineering, multi-agent pipeline, predictive ML, scikit-learn, XGBoost, Health-Tech, HIPAA, embedded delivery, ships not papers, first AI hire, Pacific time zone, multi-provider LLM integration, structured outputs, schema-validated agents.
