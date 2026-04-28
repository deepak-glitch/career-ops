# Evaluación: Arlo — Applied AI Engineer

**Fecha:** 2026-04-28
**Arquetipo:** Applied AI / LLM Engineer (healthcare insurance, member-facing LLM product)
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/Arlo/18923aa2-a029-43d8-8fd6-1cf883f14ef8
**Legitimacy:** High Confidence
**Location:** New York City, NY — On-site
**PDF:** output/2026-04-28/cv-deepak-mallampati-arlo-applied-ai-2026-04-28.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | **Applied AI Engineer** — full-stack LLM product features for healthcare members |
| Domain | Healthcare payer / health plan AI-native platform |
| Function | Build conversational AI for member health Q&A, claims-data-driven proactive outreach, intelligent triage |
| Seniority | IC, "demonstrated experience shipping full-stack AI products" — mid IC range |
| Location | NYC, on-site (full-time, in-office) |
| Comp | $210K–$230K base + performance bonus + equity |
| Visa | Not stated; verify F-1 OPT/H-1B in screen |
| TL;DR | Strong stack + domain fit (healthcare RAG, claims data, agentic, FastAPI, evals); NYC on-site = relocation from OH; comp band healthy. F-1 OPT visibility upfront. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Ship full-stack AI products end-to-end | Manga Lens (Chrome Web Store, MV3 + 4-vendor LLM vision pipeline, cv.md L60); Dream Decoder (FastAPI + React/TS, multimodal, cv.md L66) |
| Backend infra + production LLM apps | Healthcare RAG @ Progress Solutions w/ FastAPI/Flask + Docker + structured logging (cv.md L25-28) |
| LLM safety, guardrails, red-teaming, evaluation | Healthcare RAG eval pipelines (>90% groundedness, ~35% precision, cv.md L25); multi-agent claims pipeline w/ schema-validated JSON contracts to prevent cascading hallucinations (cv.md L72) |
| Python | Primary language (cv.md L12) |
| PostgreSQL / SQL | Postgres + SQLite + T-SQL (cv.md L12); Patient Records app (cv.md L83); Emerson SQL/T-SQL stored-procedure tuning (cv.md L35) |
| TypeScript / React (nice-to-have) | Dream Decoder React/TS/Vite (cv.md L66); Manga Lens TS service workers (cv.md L60) |
| AWS / cloud deployment (nice-to-have) | Docker + cloud-ready deployment + observability (cv.md L17); ML/LLM inference packaged as containerized FastAPI (cv.md L28) |
| Conversational AI for patients (24/7 health Q&A) | Healthcare RAG for clinical knowledge retrieval + agentic LLM workflows for eligibility/care navigation/documentation (cv.md L25-26) |
| Claims-data-driven proactive outreach (analyze claims for personalized campaigns) | Agentic Healthcare Claims pipeline (Intake → Validation → Consistency → Duplicate Detection → Fraud Risk Scoring) with RAG-grounded CPT/ICD validation (cv.md L72) — directly transferable to claims-driven member outreach |
| Intelligent triage to appropriate care | Multi-agent healthcare workflow (eligibility checks, care workflow navigation) + predictive ML (no-show / care engagement scoring, 15-20% recall on high-risk categories, cv.md L26-27) |
| Cursor / Copilot AI-assisted engineering | Common engineering practice; not a portfolio-discriminating skill |
| Startup, end-to-end ownership | 4 indie projects shipped + healthcare RAG owned data → prompts → models → evals → API → Docker (cv.md L25-30, L60-72) |

**Gaps:**
1. **NYC on-site relocation** — Deepak in Kent, OH. Mitigation: explicitly express willingness to relocate; comp band ($210-230K) supports relocation.
2. **Member-facing product UX experience** — Arlo's user is a health-plan member. Deepak's prior work was clinician/SME-facing. Mitigation: Manga Lens public Chrome Web Store users + Dream Decoder UX = consumer-facing pattern in practice.
3. **No formal LLM red-teaming title** — mitigation: schema-validated JSON contracts + groundedness evals + audit-ready reasoning traces in claims pipeline = practical red-teaming + guardrails.

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC. Comp band $210-230K + bonus + equity = competitive NYC mid-IC pay.
- **Vender:** "Applied AI engineer (Master's, 2.5 yrs) shipping production LLM systems in HIPAA-conscious healthcare — RAG (~35% retrieval precision gain), multi-agent claims pipeline with schema-validated JSON contracts (>30% hallucination reduction), and 4 indie products including a public Chrome Web Store extension. Comfortable owning end-to-end member-facing AI features."
- **Si downleveled:** Accept — $210K floor is strong; healthcare-payer + LLM product is the highest-leverage domain on Deepak's CV.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | $210K–$230K base + performance bonus + equity (NYC mid-IC range) |
| Funding / stage | Arlo (joinarlo.com) — Series Seed; raised $4M for AI-powered underwriting (Fierce Healthcare, 2024) |
| Visa | Not specified in JD; verify in screen — small Seed-stage payers are H-1B variable |
| Demand trend | Member-facing healthcare LLM is one of the most-funded 2025-2026 verticals (Hippocratic AI, Abridge, Suki, etc.) |
| Aggregator listing | Ashby + General Catalyst job board + LinkedIn + Glassdoor + JoinRise |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Applied AI engineer (Master's, 2.5 yrs) shipping production LLM systems in HIPAA-conscious healthcare — RAG, multi-agent claims pipelines with schema-validated JSON contracts, and 4 public products. Comfortable owning end-to-end member-facing AI features." | Mirror "end-to-end" + healthcare + LLM + member-facing |
| 2 | Bullets | Reorder Progress Solutions: RAG (cv.md L25) → agentic (L26) → predictive ML for risk (L27) → FastAPI/Docker (L28) | JD priority: LLM apps + claims data + intelligent triage |
| 3 | Skills | Move RAG, Agentic Workflows, LLM Safety/Guardrails, Evaluation Pipelines, Structured Outputs, Healthcare AI, FastAPI, PostgreSQL to top | Keyword density: LLM safety/guardrails/red-teaming + Python + Postgres |
| 4 | Projects | Lead with Agentic Healthcare Claims pipeline (claims data → outreach analog) → Dream Decoder (full-stack FastAPI+React+multimodal) → Manga Lens (Chrome Web Store full-stack ship) | Each maps directly to "full-stack AI products" + claims-data analysis + member UX |
| 5 | Footer | "US-based, F-1 OPT — open to sponsorship; willing to relocate to NYC" | F-1 OPT + relocation visibility upfront for on-site role |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Full-stack AI products in healthcare | Healthcare RAG @ Progress Solutions | Clinicians needed grounded retrieval over policy + EHR docs in HIPAA env | LangChain-built recursive semantic chunking + transformer embeddings + RAG-grounded eval pipelines + FastAPI/Docker packaging | Production RAG signed off by clinical SMEs | ~35% precision gain; >90% groundedness; ~30% defect reduction post-deploy | Clinical-SME loops > pure offline metrics for HIPAA-conscious products |
| 2 | Claims-data → personalized outreach | Agentic Healthcare Claims & Fraud Risk pipeline | Manual claims review = high cost + cascading hallucinations from naïve LLM chaining | 5-agent pipeline (Intake → Validation → Consistency → Duplicate Detection → Fraud Risk) w/ schema-validated JSON contracts + RAG-grounded CPT/ICD validation + ANN duplicate detection | Production-ready multi-agent system w/ explainable risk scoring + audit traces | >30% hallucination reduction; ~25% agent stability gain | Schema contracts + RAG grounding > free-form chaining for high-stakes claims; same pattern transfers to outreach segmentation |
| 3 | Intelligent triage to appropriate care | Predictive ML pipelines @ Progress Solutions | Care-team capacity wasted on low-risk patient outreach + high-risk under-served | scikit-learn + XGBoost models for no-show + care engagement + support prioritization w/ class weighting + threshold calibration | Production triage-supporting models | 15-20% recall gain on high-risk; >90% precision | Threshold tuning + class weights matter more than model choice for imbalanced healthcare cohorts |
| 4 | Conversational AI for member health Q&A | Agentic LLM workflows @ Progress Solutions | Members need eligibility / care-pathway / documentation Q&A 24/7 | Agentic workflows w/ structured reasoning, tool discipline, grounding rules | Stable conversational layer w/ ~25% response stability gain | ~25% stability + grounded answers | Tool discipline + grounding rules turn brittle LLM chains into auditable conversational agents |
| 5 | LLM safety / guardrails / evals | Multi-agent claims pipeline + healthcare RAG eval | High-stakes domain w/ regulatory audit needs | Schema-validated JSON contracts between agents, RAG grounding, eval audit trails, system-limitation docs, SME-curated retrieval evals | Audit-ready production AI system | >30% hallucination reduction; >90% groundedness | Eval pipelines + schema contracts = practical guardrails; "red-teaming" is the muscle behind these contracts |
| 6 | Build & ship public consumer-facing AI | Manga Lens Chrome Web Store ship | Independent end-to-end browser extension w/ 4-vendor LLM vision pipeline | Manifest V3, content scripts, service workers, captureVisibleTab, multi-section pipeline w/ coordinate remapping, 7-day cache | Public Chrome Web Store ship across 29 manga/webtoon sites | Active users + reviews + privacy policy | Public ship + visible tradeoffs (WebP vs JPEG per vendor) build user trust |

**Story Bank:** Append "Multi-agent claims pipeline w/ schema-validated JSON contracts" + "Healthcare RAG with clinical-SME eval loops" + "Predictive ML for high-risk patient triage" to story-bank.md.

**Red-flag questions:**
- "Years of experience shipping full-stack AI?" → "2.5 yrs core SWE/MLE in healthcare AI, plus 4 shipped indie products including a Chrome Web Store extension. End-to-end means data → prompts → models → evals → API → Docker — done that across both client work and indie projects."
- "Why on-site NYC?" → "Healthcare-payer LLM product is the highest-leverage domain on my CV. Willing to relocate; on-site collaboration with Arlo's clinical and product teams is exactly where I want to spend my next 2 years."
- "Visa?" → "F-1 OPT, US-based now. Open to H-1B sponsorship — happy to discuss timing once we're aligned on technical fit."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Ashby + General Catalyst portfolio job board (GC is Arlo's lead investor) | Positive |
| Apply button | Active (verified via General Catalyst aggregator) | Positive |
| Description quality | Specific (full-stack AI, LLM safety/guardrails/red-teaming, conversational AI, claims-data outreach, triage; Python/Postgres/TS/React stack) | Positive |
| Salary transparency | $210-230K + bonus + equity disclosed | Positive |
| Realistic requirements | "Demonstrated experience" rather than rigid yrs floor; nice-to-haves clearly separated | Positive |
| Layoffs / freeze | None reported; Arlo is Seed-stage growing | Positive |
| Role market context | Member-facing healthcare LLM is well-funded 2025-2026 vertical | Positive |
| VC backing | General Catalyst (lead) — high-credibility healthcare investor | Positive |
| Visa policy disclosure | Not stated — verify in screen | Neutral |

**Assessment:** **High Confidence** — Arlo is real, GC-backed Seed health-plan startup. JD specific, comp transparent, multi-board listing. Visa policy unknown but US-based on-site role compatible with current F-1 OPT pending H-1B conversation.

## H) Draft Application Answers

(score 4.0 < 4.5 — H block omitted per modes/oferta.md threshold; will tailor in /career-ops apply if applying)

---

## Keywords extraídas

Applied AI Engineer, Full-Stack AI, LLM Safety, Guardrails, Red-Teaming, Evaluation Frameworks, Conversational AI, Claims Data, Intelligent Triage, Member-Facing AI, Healthcare Payer, Health Plan, Python, PostgreSQL, FastAPI, TypeScript, React, AWS, Cursor, Copilot, NYC, On-Site, $210K-$230K, RAG, Agentic Workflows, HIPAA.
