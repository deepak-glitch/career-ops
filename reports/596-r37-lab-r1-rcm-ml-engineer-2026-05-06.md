# Evaluación: R37 Lab (R1 RCM / Phare Health) — ML Engineer

**Fecha:** 2026-05-06
**Arquetipo:** ML Engineer (Applied AI Systems) (primary) + Applied AI / LLM Engineer (secondary)
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/phare-r1-r37/0b315831-5eef-42a3-93be-45967f13a969
**Legitimacy:** High Confidence
**Location:** New York, NY | Remote — US-based; talent hubs SF / NYC / Austin / Chicago for in-person final interview with travel arranged
**PDF:** output/2026-05-06/cv-deepak-mallampati-r37-lab-r1-rcm-ml-engineer-2026-05-06.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | ML Engineer (Applied AI Systems) + Applied AI / LLM Engineer |
| Domain | AI-native Healthcare Revenue Operating System — agentic AI over medical records / payer logic / financial workflows; production at 95 of top 100 US health systems; 180M+ claims, 550M+ patient encounters, 1.2B+ workflow actions/year |
| Function | Build (lead early-phase ML systems; own internal ML dev environment — instrumentation, benchmarking, experimentation; bring scientific rigor to production) |
| Seniority | L2 → Staff hiring across levels; minimum 5 yrs SWE + 2 yrs ML stated as floor (with explicit L2 entry tier) |
| Remote | US-Remote with NYC primary + SF/Austin/Chicago hubs; on-site final interview travel arranged |
| Team size | R37 Lab is R1's "AI innovation engine" + Phare Health acquisition; partners with Research Scientists + ML Platform/Ops |
| Comp | $140,000 – $300,000 base + annual bonus + equity (US disclosure) |
| TL;DR | R1 RCM (NASDAQ-listed) + Phare Health combined "R37 Lab" — first AI-native healthcare RCM operating system at national scale; ML Engineer role spanning L2–Staff with Mid-level entry; healthcare RAG + agentic AI thesis 1:1; comp $140-300K + equity; US-Remote with NYC primary; 5-yr SWE floor is the soft seniority gap (Deepak ~2.5y SWE + ~2.5y ML) but explicit L2 ladder slot makes Mid entry plausible. |

## B) Match con CV

| JD Requirement | CV evidence | Match |
|---|---|---|
| Build training + inference infrastructure for fast-moving research team (experiment tracking + benchmarking) | FastAPI/Flask + Docker packaging at Progress Solutions; HIPAA-conscious evaluation audit trails; Manga Lens multi-provider abstraction + cost-aware payload routing | Strong |
| Design + develop scalable AI systems for retrieval, ranking, categorization, generative AI over large-scale unstructured healthcare data | Healthcare RAG at Progress Solutions (~35% retrieval precision, recursive semantic chunking, transformer embeddings); Agentic Healthcare Claims (5-stage pipeline with vector-indexed CPT/ICD policies + ANN duplicate detection); Suvidha document Q&A with RAG | Strong (1:1) |
| Design + build + operate AI/ML systems end-to-end (problem framing → model → production → improvement) | Progress Solutions full lifecycle (RAG + agentic + predictive ML + FastAPI/Docker + monitoring); Manga Lens MV3 solo ship + maintenance; Suvidha Flask API + non-technical UI | Strong |
| Define evaluation datasets, metrics, validation strategies tied to real outcomes | Progress Solutions: ~35% retrieval precision, >90% grounded alignment, 15-20% recall on high-risk patient categories at >90% precision via class weighting + threshold calibration; Suvidha: ~85% highlight alignment with human curation | Strong |
| Design ranking + triage models routing work between AI agents and human operators | Agentic Healthcare Claims explainable risk scoring with audit-ready reasoning traces; Patient no-show / care engagement scoring routes high-risk cases for human review | Strong |
| Establish feedback loops + data flywheels for continuous improvement | Progress Solutions iteration loop on retrieval precision + grounded alignment; Suvidha non-technical user feedback loop | Medium-Strong |
| Partner with software engineers, product, clinicians, operators on measurable business value | Weekly stakeholder calls with clinical SMEs at Progress Solutions; HIPAA system-limitation docs; Suvidha non-technical staff Flask UI | Strong |
| Prototype + scale 0→1 then harden for real-world production | E-Farming founder (PHP/MySQL/Bootstrap solo 0→1 + 80-120 onboarded users); Manga Lens 0→1 Chrome Web Store + per-domain selector configs for 29 sites; Agentic Healthcare Claims 0→1 multi-agent design | Strong |
| Mentor other AI/ML engineers; promote best practices | Student Manager role (150+ students; ~20% ramp-up time reduction via formalized onboarding); founder-led E-Farming team coordination | Medium |
| 5 yrs SWE + 2 yrs ML minimum | Deepak: ~2.5 yrs SWE (Emerson + Progress + Suvidha + projects) + ~2.5 yrs ML (Suvidha + Progress + projects) — soft seniority gap on SWE side, explicit L2 entry tier acknowledges Mid candidates | Medium (soft gap) |
| Healthcare data scale (180M+ claims, 550M+ encounters) | Progress Solutions HIPAA-conscious EHR + appointments + tickets; Agentic Healthcare Claims with CPT/ICD policy validation; project depth fits but never operated at billion-row scale | Medium-Strong |
| In-person final interview at SF/NYC/Austin/Chicago | F-1 OPT US-domestic travel = OK; relocation to NYC possible; Kent OH base accommodates short-trip interview | Strong |

**Gaps:**
1. **5-yr SWE floor (soft).** Deepak's ~2.5y SWE total + ~2.5y ML total = ~5 yr blended technical experience, but the JD frames "5 yrs SWE with 2 yrs ML" as additive. Mitigation: lead with breadth-of-stack (RAG + agentic + predictive ML + FastAPI + Docker + Jenkins + Grafana + multi-provider AI vision) + L2 entry tier explicitly acknowledges Mid candidates. Frame as "L2 with stretch to L3 over 12 months."
2. **No billion-row production-scale ops.** Progress Solutions / Suvidha / Manga Lens are mid-scale. Mitigation: project-depth reasoning shows scaling principles (semantic chunking strategy choice, schema-validated JSON contracts to prevent cascading hallucinations, multi-provider abstraction with cost-aware routing) — engineering reasoning is the proxy.
3. **No explicit Research Scientist handoff history.** Mitigation: Stakeholder calls with clinical SMEs at Progress Solutions + non-technical UI rollout at Suvidha demonstrate cross-discipline handoff discipline; framework would be 2-week ramp.
4. **Mentoring at AI/ML engineering tier.** Mitigation: Student Manager (150+ students, ~20% onboarding reduction) + founder-led E-Farming team coordination; ML-mentoring scope can grow into the seat over the first 6 months.

## C) Nivel y Estrategia

- **JD level:** L2 → Staff range; floor 5y SWE + 2y ML (the JD explicitly says "We are hiring across several seniority levels ranging from Mid-level up to Staff").
- **My level for this archetype:** Mid (L2-fit per ladder definition: "Independently delivers a complete end-to-end project, owning design, implementation, and delivery of scoped work").
- **Sell mid-without-stretching:** Lead with (a) production healthcare RAG + agentic + predictive ML at Progress Solutions — directly maps to retrieval/ranking/categorization/generative AI over unstructured healthcare data; (b) Agentic Healthcare Claims 5-stage pipeline with schema-validated JSON contracts — proves agent-to-human routing + audit-ready explainability; (c) Manga Lens public ship — proves 0→1 + 7-day cache + multi-provider abstraction; (d) Master's CS Kent State 2025 — meets education bar; (e) HIPAA-conscious data governance — directly relevant to claim/encounter data.
- **If down-leveled to L2:** Comp at L2 likely $140-180K base + equity; accept upper-tier ($170-180K) with 6-month review for L3 stretch given multi-domain depth.
- **Negotiation lever:** Comp range disclosed ($140-300K); for L2 anchor at $170-180K base + standard equity.

## D) Comp y Demanda

| Item | Value | Source |
|---|---|---|
| R37 Lab / R1 RCM ML Engineer comp (disclosed) | $140,000 – $300,000 base + annual bonus + equity | JD via Ashby GraphQL |
| Remote-US Mid ML Engineer (Healthcare AI) market | $150-200K base + bonus + equity | Glassdoor / Levels.fyi 2026 |
| R1 RCM brand | NASDAQ-listed (~$5-7B market cap historical band; private after Nov 2024 take-private by TowerBrook + CD&R) — credibly resourced | Public market reporting |
| Phare Health acquisition | Phare (clinical reasoning AI) acquired by R1; rebranded R37 Lab as "AI innovation engine" — fresh M&A capital + product traction | Press 2025 |
| Healthcare RCM AI demand | High — RCM automation is a top-3 healthcare AI spending vertical 2026 | Sector |
| Hiring scope | Mid → Staff across multiple seats; in-person final at SF/NYC/Austin/Chicago hubs | JD |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic Applied AI summary | "ML engineer building production healthcare AI: HIPAA-conscious RAG + agentic + predictive ML + FastAPI/Docker; targeting R37 Lab's ML Engineer seat — healthcare RCM + retrieval/ranking/categorization/generative AI over EHR + claims at national scale; L2-fit per ladder definition (independent end-to-end ownership)." | JD-mirrored language; signals L2-ladder fit |
| 2 | Hero metrics | ~35% retrieval precision; >90% grounded alignment; 15-20% recall on high-risk; ~30% post-deploy defect reduction | Lead with retrieval-precision + grounded-alignment metrics; reorder bullets to put RAG first, agentic second, predictive ML third — matches R37's stated work order | JD names these capabilities in this order |
| 3 | Projects | Generic ordering | Reorder: Agentic Healthcare Claims first (5-stage + schema contracts + RAG-grounded CPT/ICD + audit-ready) → Manga Lens (multi-provider + cost-aware routing) → Pixel Character Synthesis (LoRA + ControlNet + LLM agent orchestrator) | Healthcare claims project is 1:1 fit with JD's "automate medical coding, billing, follow-up" mission |
| 4 | Skills section | Generic categories | Add "Evaluation Pipelines + Audit Trails" + "Schema Contracts + Agent Routing" + "HIPAA Data Governance" as explicit categories | JD names "evaluation datasets, metrics, validation strategies tied to real outcomes" + "audit-ready reasoning traces" |
| 5 | Education | Master's at Kent State, focus area unspecified | Specify "Focus: Applied Machine Learning, NLP, Database Systems" + add Bachelor's KL University | Education bar is clear; explicit focus matches JD's "scientific rigor" framing |

## F) Plan de Entrevistas

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Healthcare RAG over unstructured data | Progress Solutions clinical knowledge retrieval | Healthcare client struggling with documentation search precision; legacy keyword retrieval missing 40%+ of relevant context | Build production RAG + raise retrieval precision + reduce hallucination | Recursive semantic chunking + transformer embeddings + grounded prompting + evaluation pipeline | ~35% retrieval precision lift, >90% grounded alignment, >30% hallucination reduction | Chunking strategy choice (recursive vs fixed) is the highest-leverage decision in healthcare RAG; would now also instrument retrieval-recall@k for clinical specialty axes earlier |
| 2 | Agentic AI + agent-to-human routing | Agentic Healthcare Claims | Manual claims review costly + error-prone; need agentic pipeline with audit trail | Multi-agent claims processing with explainable risk routing | 5-stage agents (Intake → Validation → Consistency → Duplicate → Risk Scoring) with schema-validated JSON contracts + RAG-grounded CPT/ICD policy retrieval + ANN duplicate detection | Cascading hallucinations prevented via schema contracts; audit-ready reasoning traces enable human-operator review | Schema-validated JSON contracts between agents are non-negotiable for production agentic systems; would now add latency-budget contracts per agent + circuit-breakers |
| 3 | Predictive ML for ranking + triage | Progress Solutions patient no-show + care-engagement scoring | High no-show rates degrade clinic operations + patient outcomes | Production predictive pipeline ranking high-risk patients for outreach | Feature engineering on EHR + appointments + tickets; class weighting + stratified sampling + threshold calibration on scikit-learn / XGBoost | Recall +15-20% on high-risk categories at >90% precision; downstream instability -40% via dataset reliability work | Threshold calibration > raw model accuracy when downstream routing is a binary decision; would now instrument prevalence drift + recalibrate quarterly |
| 4 | Production hardening + 0→1 ship | Manga Lens Chrome Web Store | Solo 0→1 product idea (real-time AI manga translation) | Ship to Chrome Web Store + handle scale + multi-provider | MV3 service workers + multi-section capture + 7-day cache + per-domain selector configs (29 sites) + multi-provider integration (Claude + GPT-4o-mini + GPT-4.1-Nano + Ollama) + cost-aware payload routing | Public Chrome Web Store ship; multi-provider abstraction with circuit-breaker fallback | Cost-aware payload routing (WebP for cloud, JPEG for Ollama to avoid CUDA crash) is the kind of provider-specific gotcha that only surfaces post-ship; would now build provider-quirk regression tests pre-launch |
| 5 | Scientific rigor in production environment | Suvidha video summarization | 5,000+ recorded sessions, no automated review | Hierarchical summarization + timestamp-aligned clips + Flask deployment for non-technical staff | Transformer-based abstractive summarization + RAG-grounded Q&A + Flask API + lightweight UI | 60-70% manual review time reduction; ~85% highlight alignment with human curation | Non-technical-user evaluation loop (alignment with human curation) was more useful than ROUGE/BLEU; would now also instrument inter-rater agreement to set a true ceiling |
| 6 | Enterprise data governance + compliance | Emerson Synthesis Order-to-Cash + Progress Solutions HIPAA | Compliance-sensitive O&G ERP + healthcare data | Optimize + harden financial-module ops with RBAC + audit logging | T-SQL + Jenkins CI/CD + RBAC + audit logging at Emerson; HIPAA-conscious de-identification + lineage at Progress Solutions | ~20% query speedup, >30% deploy-error reduction, ~25% incident-recurrence drop | Cross-domain compliance discipline (O&G + healthcare) compounds — reusable patterns: lineage docs, RBAC matrices, auditable deploy lanes |

**Story bank append:** All 6 stories are reusable across healthcare AI evals; append to `interview-prep/story-bank.md` after this batch.

**Case study to lead with:** Agentic Healthcare Claims Processing & Fraud Risk Intelligence System — 1:1 with R37 Lab's "automate medical coding, billing, follow-up" mission.

**Red-flag prep:**
- *"You only have 2.5 yrs vs our 5-yr SWE floor — why should we consider you?"* → "I read your ladder doc; L2 says independent end-to-end project ownership, and that's exactly what Progress Solutions + Manga Lens + Agentic Healthcare Claims demonstrate. I'm asking for the L2 entry tier you explicitly listed; happy to take a 6-month review for L3 with concrete promotion criteria."
- *"You don't have billion-row production scale — concern?"* → "Right, my projects max out at the mid-scale; what I do bring is the engineering reasoning behind scale (chunking strategy, schema contracts to prevent cascading hallucinations, multi-provider abstraction with cost-aware routing). I'd pair with platform engineers on the first 6 months to learn your scale patterns."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Listed on Ashby; isListed=true via GraphQL | Positive |
| Apply button | Active (Ashby SPA + GraphQL surfaces full JD) | Positive |
| Tech specificity | Detailed (retrieval, ranking, categorization, generative AI; experiment tracking; benchmarking; schema-driven evaluation; HIPAA + healthcare RCM context) | Positive |
| Salary transparency | $140-300K base + annual bonus + equity disclosed | Positive |
| Company hiring health | R1 RCM is profitable healthcare RCM leader; recent Phare acquisition + R37 Lab rebrand + take-private capital | Positive |
| Reposting | Not detected in scan-history.tsv | Positive |
| Hiring flow | Defined: intro call → tech deep-dives (pseudo-coding + systems design, not Leetcode) → in-person final at hub → references → offer | Positive |
| Role market context | Healthcare RCM AI is a top spending vertical for 2026 | Positive |

**Context Notes:** Real, active, well-funded posting at a national-scale healthcare AI org. Strong fit for the healthcare-AI thesis. Apply with L2 entry framing.

## H) Draft Application Answers

(Score 3.5/5 — H block reserved for ≥4.5; skipped here per `modes/oferta.md`. Save tailored cover letter for screen call.)

---

## Keywords extraídas

ML Engineer, Applied AI Engineer, RAG, Retrieval-Augmented Generation, Agentic AI, Generative AI, Healthcare RCM, Revenue Cycle Management, Medical Coding, Billing Automation, R1 RCM, R37 Lab, Phare Health, Schema Contracts, Multi-Agent Pipeline, Evaluation Pipelines, Experiment Tracking, Benchmarking, FastAPI, Docker, scikit-learn, XGBoost, Vector Search, Embeddings, HIPAA, EHR, NYC, Remote-US
