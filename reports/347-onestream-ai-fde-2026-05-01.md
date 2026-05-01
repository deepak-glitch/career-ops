# Evaluación: OneStream Software — AI Forward Deployed Engineer

**Fecha:** 2026-05-01
**Arquetipo:** AI Solutions / Forward Deployed Engineer (FP&A / Finance domain)
**Score:** 3.0/5
**URL:** https://remotive.com/remote/jobs/ai-ml/ai-forward-deployed-engineer-3992641
**Legitimacy:** Proceed with Caution
**Location:** Remote — USA only (up to 25% travel)
**PDF:** output/2026-05-01/cv-deepak-mallampati-onestream-fde-2026-05-01.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | AI Solutions / Forward Deployed Engineer (FP&A / EPM platform-bound) |
| Domain | Corporate finance — FP&A, CPM, EPM — applied AI/ML on OneStream platform |
| Function | Deploy + consult — translate finance team needs into AI/ML solutions on OneStream |
| Seniority | Early-Mid (0-2 yrs SE + 1-2 yrs Applied AI/ML) — fits Deepak's profile |
| Remote | Remote — USA only; up to 25% travel |
| Team size | Not specified; likely embedded in OneStream's AI / Genesis team |
| TL;DR | OneStream's AI FDE deploys applied-AI extensions on their EPM platform for finance customers; the seniority bar is unusually low for a true FDE role. |

## B) Match con CV

| Requirement | CV evidence | Fit |
|---|---|---|
| 0-2 yrs SE + 1-2 yrs applied AI/ML | Progress Solutions Jr. AI/ML Engineer (~9 mo + ongoing) + Emerson Database/DevOps (10 mo) (cv.md L22-39) | Strong |
| Python and/or C# | Python primary across all projects; C# is gap | Partial |
| SQL + data modeling | T-SQL stored procedures at Emerson (cv.md L35); SQL listed (cv.md L12) | Strong |
| ETL/ELT pipelines | EHR extracts + appointment histories + support ticket logs preprocessing (cv.md L29) | Strong |
| REST API + security basics | FastAPI/Flask REST + Docker + structured logging (cv.md L28); Patient Records Bottle/SQLite app (cv.md L83-84) | Strong |
| Data visualization | Grafana dashboards at Emerson (cv.md L37) | Adjacent |
| Applied AI/ML | scikit-learn / XGBoost predictive ML + LLM RAG / agentic (cv.md L25-27) | Strong |
| OneStream platform experience | Hard gap — Deepak has zero exposure to OneStream / Genesis Marketplace | Gap |
| FP&A / CPM / EPM domain | Hard gap — domain is corporate finance | Gap |
| Solution architecture & deployment | FastAPI packaging + Docker + structured logging + HIPAA governance (cv.md L28-30) | Strong |
| Forward Deployed Engineering experience (direct requirement) | Not titled FDE before; Suvidha + Progress are FDE-adjacent in spirit | Partial |
| Bachelor's CS / Data Science | M.S. Kent State (cv.md L91-94) | Strong |
| 25% travel | Operationally fine | Strong |

**Gaps:**
- OneStream platform is the hardest gap. Mitigation: position learning curve as 4-6 weeks via Genesis Marketplace docs; demonstrate fast-ramp from analogous platform onboarding (e.g., Emerson Synthesis Order-to-Cash mental model).
- FP&A / CPM / EPM domain. Mitigation: lean on Emerson's compliance-sensitive financial-modules work (RBAC + audit logging in oil & gas finance) to bridge.
- "FDE background as a direct requirement" is unusual at 0-2 yrs. Mitigation: reframe Suvidha (3-mo nonprofit delivery to non-technical staff) + Progress Solutions stakeholder-facing work as FDE-equivalent customer delivery.
- C# gap. Mitigation: not blocking — Python/SQL is acceptable per JD ("and/or").

## C) Nivel y Estrategia

- JD level: 0-2 SE + 1-2 ML — Deepak fits cleanly. The ceiling is OneStream-platform learning curve, not seniority.
- Strategy: emphasize the rare combination of Mid Applied-AI shipping + Emerson compliance-finance ERP foundation; pitch as "rare candidate who can do FDE delivery on a finance platform without a ramp on data-systems thinking." Structure ramp commitment: 30 days OneStream certification + first customer pair-shadow.
- If they pass: light disappointment — comp is decent but FP&A is off the healthcare/agentic bullseye.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| JD | $120K-$149K USD | Reasonable for early-Mid US Remote FDE |
| Levels.fyi (OneStream Eng) | ~$120K-$160K base | Public data sparse — use Glassdoor secondary |
| Glassdoor (FDE / Solutions Engineer EPM) | ~$110K-$150K base | OneStream sits at market median |
| Market (US Remote FDE entry-Mid) | ~$110K-$150K base | OneStream is fair |

Demand context: OneStream is a CPM/EPM platform vendor scaling AI overlays on Genesis Marketplace. AI-FDE on legacy enterprise platforms is a growth motion across the industry (Workday, Anaplan, OneStream, Boomi all hiring AI FDEs in 2026).

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare-focused RAG | "Applied AI engineer w/ enterprise data foundations + healthcare AI shipping; ramp-fast on FP&A/EPM platforms" | Opens the finance-domain door |
| 2 | Emerson bullet | T-SQL + Jenkins | Reframe as "compliance-sensitive financial-modules data pipeline w/ RBAC + audit logging" | Bridges to corporate finance |
| 3 | Progress Solutions | RAG / agentic | Promote ETL/ELT (EHR extracts, appointment histories, support ticket logs) above LLM novelty | OneStream JD prioritizes ETL/ELT + REST + Python |
| 4 | Skills | LangChain mid-list | Promote SQL + Python + ETL/ELT + REST + Docker to top | Mirrors JD top-priorities |
| 5 | Cover letter | Healthcare-AI framing | Lead with Emerson finance-data delivery + Progress AI shipping → bridge to OneStream Genesis Marketplace | Recruiter needs finance-credibility up front |

LinkedIn: pin Emerson Synthesis ERP + Patient Records Bottle/SQLite as data-systems credibility; highlight FastAPI Docker work; explicit "Open to AI Forward Deployed roles, US Remote" in About.

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | ETL/ELT + data modeling | Progress preprocessing pipeline | EHR extracts + appointment histories + support ticket logs were inconsistent | Raise dataset reliability | Pandas/NumPy preprocessing pipeline; schema validation; lineage docs | >98% reliability; ~40% reduction in downstream model instability | A clean schema is cheaper than a more powerful model — every time |
| 2 | SQL + financial-modules RBAC | Emerson Synthesis Order-to-Cash | Compliance-sensitive O2C in oil & gas | Tune queries + ship audit logging | T-SQL tuning + RBAC + audit logging + reconciliation queries | ~20% query latency cut; compliant audit trails | Compliance and performance are not opposed — RBAC at the data layer often clarifies the query plan |
| 3 | Applied AI/ML in production | Patient no-show prediction | High-risk no-shows hurt care | Improve recall on high-risk categories | scikit-learn/XGBoost + class weighting + threshold calibration | 15-20% recall gain, precision >90% | The default threshold is rarely the right one — recall calibration is where domain knowledge pays off |
| 4 | REST API + Docker delivery | Progress FastAPI service | LLM/ML inference needed productionizing | Container-first deploy w/ logging | FastAPI + Flask + Docker + structured logs + load simulation | ~30% post-deploy defect reduction | A logging contract makes you a faster engineer the second time you ship |
| 5 | Customer-facing translation | Suvidha video summarization | Nonprofit had non-technical staff w/ 5,000+ session backlog | Shorten manual review w/ a tool the staff could actually run | Hierarchical transformer summarization + Flask UI for non-technical users | 60-70% review-time reduction; ~85% highlight alignment | Building for non-technical operators is FDE work in spirit — the lesson translates to FP&A teams |
| 6 | Hypothesis-driven problem solving | Manga Lens multi-provider routing | Latency vs cost vs reliability across 4 vision providers | Provider-aware payload routing | WebP for cloud, JPEG for local Ollama; 7-day cache; per-domain selectors | Live on Chrome Web Store; 29 sites covered | Hypothesis-first lets you skip 80% of A/B noise — the same applies to picking ETL transforms |

**Red flag prep:**
- "Why no OneStream experience?" → "I haven't touched it yet — but I learned Synthesis ERP at Emerson and shipped useful tooling within a quarter; I'd plan a 4-6 week deep ramp on Genesis Marketplace + a customer-paired shadow on the first deployment."
- "Why FP&A?" → "AI on enterprise platforms is the unit economics story of 2026 — finance teams need grounded LLMs more than most because they cannot tolerate hallucination. My HIPAA-grade healthcare AI work is the closest analog to FP&A's compliance bar."

## G) Posting Legitimacy

**Assessment: Proceed with Caution.**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Remotive listing 1 month old | Concerning (mid-tier) |
| Description quality | Specific tech (Python/C#, REST, Genesis Marketplace, FP&A); explicit seniority floor | Positive |
| Salary transparency | $120K-$149K published | Positive |
| Reposting | First in scan-history; OneStream careers page lists similar AI FDE roles | Neutral |
| OneStream context | Public post-Series-late stage; AI-FDE is a real org motion (announced 2025) | Positive |
| Visa sponsorship | Not mentioned | Neutral |
| Internal contradictions | "0-2 yrs SE" + "Forward Deployed Engineering background as direct requirement" is mildly contradictory at this seniority | Concerning |

**Context:** 1 month posting age + the contradiction (entry seniority + "FDE direct requirement") suggests either a niche unicorn search or a posting kept open for pipeline. Worth verifying live status before applying.

---

## Keywords extraídas

AI Forward Deployed Engineer · OneStream · Genesis Marketplace · FP&A · CPM · EPM · enterprise software · applied AI · machine learning · SQL · data modeling · ETL · ELT · REST API · Python · C# · solution architecture · containerization · Docker · cloud-native · forward deployed · finance teams · executive presentation · hypothesis-driven · cross-functional · USA Remote · 25% travel
