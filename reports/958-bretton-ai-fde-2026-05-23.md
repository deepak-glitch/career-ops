# Evaluación: Bretton AI — Forward Deployed Engineer

**Fecha:** 2026-05-23
**Arquetipo:** AI Solutions / Forward Deployed Engineer
**Score:** 3.4/5
**URL:** https://www.ycombinator.com/companies/bretton-ai/jobs/E8Bd0s3-forward-deployed-engineer
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — on-site, with travel to customer (banks/fintechs)
**Region:** US
**PDF:** output/2026-05-23/cv-deepak-mallampati-bretton-ai-fde-2026-05-23.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | AI Solutions / FDE — financial compliance vertical (AML/KYC/Sanctions) |
| Domain | AI agents for AML/KYC/Sanctions at banks, fintechs, payments |
| Function | Deploy agents in regulated environments; partner with compliance teams |
| Seniority | "3+ years required" / inconsistent "2+ years SWE" within JD |
| Remote | SF on-site + customer travel |
| Comp | $150K–$200K base + meaningful equity |
| Sponsorship | "US citizen/visa only" — friction signal, but F-1 OPT EAD typically qualifies |
| Stage | YC S23 + $95M raised (Greylock / Thomson Reuters Ventures) + 34 ppl |
| TL;DR | Series-stage compliance-AI FDE role with great brand and band. Tech (Python/APIs/data pipelines/LLMs) is a clean match. F-1 OPT EAD usually satisfies "US visa" gate but should be screened upfront. Deepak's Healthcare Claims project is the closest possible analog. |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| 2+ / 3+ yrs SWE (JD is inconsistent) | ✅ at 2.5y; ⚠️ borderline if 3y is hard floor |
| Python | ✅ — Python primary across Progress Solutions, Suvidha, projects |
| APIs (REST) + data pipelines | ✅ — FastAPI/Flask + Pandas/NumPy EHR pipelines at Progress Solutions |
| Cloud infra | ⚠️ — Docker yes; AWS/GCP deep is partial |
| LLMs / modern AI systems | ✅ — RAG, agentic, multi-provider in projects + work |
| Build agents for regulated/financial workflows | ✅ Direct — Healthcare Claims Processing (Intake → Validation → Consistency → Duplicate → Fraud Scoring) with schema-validated JSON contracts + audit-ready reasoning traces. AML/KYC ≈ claims fraud structurally. |
| Customer-facing / solutions / implementation | ✅ — clinical stakeholder work at Progress Solutions; "explain AI to non-tech" recurring pattern |
| US citizen / visa only | ⚠️ — F-1 OPT EAD is US work auth (no sponsorship needed during OPT); flag for clarification |
| Strong communication w/ non-tech | ✅ — clinician + PM stakeholder work |

**Gaps + mitigation:**
- *Visa gate*: clarify upfront in cover letter ("F-1 OPT EAD — US work authorization, no sponsorship required during OPT window"). If "US citizen ONLY" is strict (some financial compliance vendors require), this becomes a hard veto.
- *3+ yrs floor*: lean on Manga Lens / Dream Decoder + Emerson internship + Progress Solutions = 3+ yrs combined applied technical work.
- *Cloud infra depth*: pitch Docker + observability/logging at Progress Solutions; offer AWS familiarity from project deploys.

## C) Nivel y Estrategia

- Detected level: mid IC (3+ yrs nominal). Deepak's 2.5y FTE + 2 internships + 4 shipped projects clears the substance bar even if the years counter is borderline.
- **Vender:** lead with the Healthcare Claims Processing project — multi-agent, JSON-contracted, fraud-scored, audit-ready, RAG-grounded. This is a near-1:1 architectural twin of AML/KYC agent pipelines. Pair with FastAPI inference services and 30% post-deploy defect reduction.
- **Risk:** "US citizen/visa only" wording. Worth a 5-line cover-letter clarification + a recruiter screen check.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| Bretton band | $150K–$200K + equity | JD |
| SF FDE mid IC norm | $150–220K + equity | Levels.fyi SF early/mid-stage |
| Compliance AI vertical | Premium of ~5–10% over generic FDE | Industry comp |
| Equity | "Meaningful" — not specified | JD |

Band is fair-to-strong for the stage; brand investors (Greylock, TRV) signal solid fundraise + likely Series A/B trajectory.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Applied AI in healthcare" | "Applied AI engineer who ships agentic, audit-traceable AI pipelines in regulated domains (healthcare claims, RAG-grounded validation)" | Compliance signal |
| 2 | Top metric | retrieval precision | Lead with ">30% hallucination reduction" + "schema-validated JSON contracts between agents" + "audit-ready reasoning traces" | Mirrors AML evidence requirements |
| 3 | Healthcare Claims project | (currently buried) | Move to top of Projects; expand bullets on Intake → Validation → Duplicate → Fraud Risk + RAG-grounded CPT/ICD | Closest analog to AML/KYC/Sanctions |
| 4 | Bullets | Generic | Add 1 explicit "audit-ready + explainable scoring" line | Regulated framing |
| 5 | Cover letter | None | Required — F-1 OPT EAD line up top + 1-pager on Healthcare Claims = AML analog | Visa + bridge |

## F) Plan de Entrevistas (STAR+R)

| # | JD requirement | STAR+R |
|---|---|---|
| 1 | Build agent for regulated workflow | S: Healthcare Claims Processing multi-agent. T: Reliable fraud-scoring + audit trail. A: Intake → Validation → Consistency → Duplicate → Fraud-scoring with schema-validated JSON contracts between agents + ANN duplicate detection. R: explainable risk scoring, audit-ready reasoning. Reflection: between-agent JSON contracts prevent cascading hallucinations better than longer prompts. |
| 2 | RAG-grounded validation | S: Clinical knowledge RAG. T: Trust-worthy retrieval. A: Recursive semantic chunking + transformer embeddings + grounding rules + retrieval-grounded alignment scoring. R: 35% retrieval precision uplift + >90% grounded alignment. Reflection: grounding score is the only metric that matters in regulated retrieval. |
| 3 | Ship Python inference services | S: ML/LLM serving at Progress Solutions. T: Stable inference under load. A: FastAPI/Flask + Docker + structured logging + load simulation. R: ~30% defect reduction post-deploy. Reflection: observability ≥ model quality in regulated stacks. |
| 4 | Translate workflows ↔ agent behavior | S: Care engagement scoring. T: Translate clinician intent into ML threshold. A: Shadowed care team, mapped intent to features, ran threshold sweeps. R: 15–20% recall gain on high-risk + held precision >90%. Reflection: PMs say "high risk"; clinicians say "this name." Encode both. |
| 5 | Connector/configurator design | S: Suvidha video summarization API. T: Reusable across 5k+ sessions. A: Flask-based API + lightweight UI for non-tech. R: 60–70% manual review time saved. Reflection: configurators ship when ops can self-serve the 80% case. |

Red-flag Q on visa: "I'm on F-1 OPT with an EAD, which is US work authorization — no sponsorship is needed during my OPT window. I can share the exact validity dates and post-OPT timeline upfront."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Funding | $95M+ raised (Greylock, YC, Thomson Reuters Ventures) | Strong Positive |
| Team size | 34 — past early-startup risk band | Positive |
| Customers | Robinhood + Mercury named as clients | Strong Positive |
| Comp transparency | $150–200K + meaningful equity disclosed | Positive |
| JD specificity | Names Python/APIs/data pipelines/LLMs + concrete deliverables | Positive |
| Inconsistency | "3+ years" header vs "2+ years SWE" body | Minor Neutral |

Real, well-funded, named customers; minor JD wording inconsistency is normal.

## H) Draft Application Answers

(Score 3.4 — drafts kept brief; cover letter carries the visa + analog framing.)

**Why Bretton AI?**
> "Compliance AI is the same architecture as healthcare-claims AI — agentic, schema-contracted, RAG-grounded, audit-traceable. I built a multi-agent Claims Processing system (Intake → Validation → Consistency → Duplicate → Fraud Risk) with explicit JSON contracts between agents and explainable scoring. AML/KYC/Sanctions is the same shape: high-stakes, regulator-readable, false-positive-sensitive. I'd carry that pattern over directly."

---

## Keywords extraídas

forward deployed engineer, FDE, AI agent, AML, KYC, sanctions, financial compliance, agentic workflow, schema-validated JSON contracts, audit-ready, RAG, retrieval-augmented generation, fraud detection, Python, FastAPI, data pipelines, LLMs, customer-facing, banks, fintech, regulated AI, F-1 OPT
