# Evaluation: ghSMART — Machine Learning Engineer (LLMs / AI)

**Fecha:** 2026-06-02
**Arquetipo:** ML Engineer (Applied AI Systems) + Applied AI / LLM Engineer (hybrid)
**Score:** 3/5
**URL:** https://jobs.lever.co/ghsmartjobs/1dc7e2fc-2ae8-4e6d-8d59-17b97507f8d6
**Legitimacy:** Proceed with Caution
**Location:** Remote — USA
**Region:** US
**PDF:** output/2026-06-02/cv-deepak-mallampati-ghsmart-ml-engineer-llm-2026-06-02.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | ML Engineer (Applied AI Systems) + Applied AI / LLM Engineer (hybrid) |
| Domain | People analytics / HR-tech — ML + LLMs over a structured leadership-assessment dataset |
| Function | Build (design, build, and extend ML and LLM models in production) |
| Seniority | Senior (cached snapshot: "senior level", ~5 years experience required) |
| Remote | Full remote — USA |
| Comp (cached) | $160,000 – $175,000 / year |
| Cloud | Azure (named requirement) |
| Team size | Not captured (full JD unavailable) |
| TL;DR | A senior, remote-US ML/LLM engineering seat at a well-established leadership-advisory firm, building models that turn ghSMART's proprietary structured executive-assessment data into high-accuracy insights. Strong domain-skill overlap, but the posting appears to be closed and the JD asks for senior depth + Azure that sits at the top edge of the candidate's profile. |

**Extraction note:** The Lever posting at this ID is no longer served (individual API lookup returns "Document not found"; the live board lists only 7 unrelated roles — Leadership Advisors, Assistant Controller, Research Associate). The role details below are reconstructed from a cached search snapshot and ghSMART public material, not the live JD. Treat specifics as approximate.

## B) Match con CV

Mapped against `cv.md`. Requirements are inferred from the cached snapshot ("design, build, and extend ML models — LLMs and traditional ML — that deliver high-accuracy insights from ghSMART's structured leadership dataset; remote; ~5 yrs; Azure").

| JD requirement (inferred) | CV evidence | Verdict |
|---|---|---|
| Build & extend **LLM models** in production | "Architected production-grade agentic LLM systems… reducing token consumption by 42%"; "high-performance RAG pipelines… reduce hallucination" (Progress Solutions) | Strong |
| Build & extend **traditional ML** models | "supervised regression and classification models… equipment-failure prediction, anomaly detection, capacity forecasting" (Emerson); Random Forest AUC 0.689, weighted-F1 0.895 (KSU) | Strong |
| Deliver **high-accuracy insights from structured data** | Privacy-preserving ML on clinical structured data, 99% baseline predictive performance retained; NER 89% F1 (Emerson) | Strong |
| **Azure** cloud | Skills: "Azure (OpenAI, AI Services, Content Safety)" listed; CI/CD via Azure DevOps | Adequate (listed, but no Azure-anchored production metric) |
| ~**5 years** experience | CV summary states "4+ years"; first full-time AI role Jul 2025, internships/RA before | Below floor (~4 yrs vs 5) |
| LLM **evaluation / quality** | "LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics)" | Strong |
| Production discipline / serving | "12 APIs and microservices… p95 1.5s → 800ms"; FastAPI; Docker/K8s (Vanguard) | Strong |
| Regulated / sensitive-data handling | HIPAA/SOC2/PCI; PII masking; differential privacy; banking + healthcare | Strong (transfers well to confidential exec-assessment data) |

**Gaps and mitigation:**

1. **Experience floor (~5 yrs vs ~4 yrs)** — *Soft blocker.* Mitigation: lead with depth, not tenure. The Progress Solutions + Vanguard + KSU + Emerson arc spans production LLM agents, RAG, evals, and classical ML — broader than many 5-year linear ML resumes. Cover-letter line: "Four years spanning production LLM agents, RAG, classical ML, and rigorous evals across banking and healthcare."
2. **People-analytics / HR-assessment domain** — *Nice-to-have, not a blocker.* No HR-tech experience, but the core task (modeling structured, sensitive, high-stakes personal data with privacy controls) maps directly to the clinical privacy-preserving pipeline (re-ID risk 3.38% → 0.32%). Frame the regulated-data rigor as the transferable asset.
3. **Azure-as-primary** — *Soft.* Azure is listed (Azure OpenAI, AI Services, Content Safety, Azure DevOps) but the strongest production metrics are AWS-anchored (Vanguard). Mitigation: name the Azure OpenAI / Content Safety work explicitly; note AWS Bedrock/SageMaker fluency transfers, and cloud-agnostic patterns (Docker, K8s, Terraform) are in the stack.
4. **"Insights" framing vs pure engineering** — Consulting firms blend ML with analytics storytelling. Candidate's evals/dashboards work ("latency and accuracy dashboards", "privacy–utility scoring framework") shows comfort translating models into decision-ready outputs — emphasize this.

## C) Nivel y Estrategia

**Detected level vs natural level.** The role reads **Senior** (5 yrs, "design/build/extend", own the model layer over a proprietary dataset). Candidate's natural level for the ML/Applied-AI archetype is **mid-to-upper-mid (L3/L4)** with genuine senior-flavored production work (agentic orchestration, 42% token reduction, eval frameworks) but only ~1 year of post-degree full-time tenure.

**Sell senior without lying.**
- Lead with ownership scope: "architected production-grade agentic LLM systems" and "established an LLM evaluation and monitoring framework" are senior-signal verbs backed by metrics.
- Anchor on the proprietary-data parallel: ghSMART monetizes a unique structured dataset; the candidate's differentiator is extracting reliable signal from sensitive, high-stakes structured data (clinical re-ID reduction, privacy–utility tradeoff quantification).
- Use the eval/observability story as the seniority proof: junior engineers ship models, senior engineers ship the framework that decides which model ships.

**If down-leveled.** Accept a "ML Engineer" (non-senior) title if comp stays in the $160k+ band and there's a written 6-month review with promotion criteria. The $160k–$175k cached band is already strong for the candidate's tenure, so a down-level with full comp is an acceptable outcome — do not trade comp for title.

## D) Comp y Demanda

| Data point | Value | Source |
|---|---|---|
| Cached posting band | $160,000 – $175,000 / yr | Search snapshot of this posting |
| Remote ML engineer (US) average | ~$180,000 / yr | Aggregator search (Glassdoor/Levels-class) |
| Remote ML/LLM market depth | 800+ remote ML roles live; strong, sustained demand | Glassdoor/Remotive/ZipRecruiter aggregates |

**Read:** The $160k–$175k band sits slightly below the ~$180k remote-US ML average, which is expected — ghSMART is a consulting/advisory firm, not a frontier-AI lab, and the dataset/insights focus is closer to applied ML than research. For a ~4-year candidate, this band is **at or above** fair market and a meaningful step up. Negotiation room exists toward the $175k ceiling and possibly above given the LLM + privacy/regulated-data combination, which is scarcer than generic ML. Use the geographic-discount pushback only if they try to trim for location: the role is output-based and explicitly remote.

## E) Plan de Personalización

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | "production-grade Generative AI and LLM systems for banking and regulated enterprises" | Add "and traditional ML (classification, risk, forecasting)" + "turning structured, sensitive datasets into reliable, high-accuracy insights" | Mirrors JD's "LLMs and traditional ML" + "insights from structured leadership dataset" |
| 2 | Skills (top) | GenAI/LLM listed first | Surface "Azure (OpenAI, AI Services, Content Safety)" into the first visible cloud cluster | Azure is a named requirement; recruiter may scan only the top |
| 3 | Progress Solutions bullets | RAG/agentic-led | Reorder so the **eval/monitoring framework** bullet (RAGAS/BERTScore/dashboards) is high — signals "high-accuracy insights" ownership | JD centers on accuracy/reliability of insights |
| 4 | KSU privacy bullet | Mid-resume | Promote the structured-data privacy result (re-ID 3.38% → 0.32%, 99% utility retained) | Direct proxy for confidential exec-assessment data |
| 5 | Emerson classical-ML bullet | Buried | Keep visible — proves traditional-ML breadth (regression, classification, anomaly detection, forecasting) alongside the LLM stack | JD explicitly wants "LLMs **and** traditional ML"; the Emerson line is the cleanest classical-ML proof point |

## F) Plan de Entrevistas

6 STAR+R stories mapped to the inferred requirements:

| # | JD Requirement | Story STAR+R | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Build/extend LLM models in production | Agentic LLM orchestration (Progress) | Complex multi-step healthcare objectives overran context/cost | Cut token cost without losing accuracy | Built conductor–subagent framework, context-scoped subagents | 42% token reduction, accuracy sustained | Decomposition beats bigger prompts; scope is the lever |
| 2 | High-accuracy insights from structured data | Privacy-preserving clinical ML (KSU) | Sensitive structured patient data, re-ID risk | Analyze without exposing identities | k-anonymity + l-diversity + DP, privacy–utility scoring | re-ID 3.38% → 0.32%, 99% utility retained | Quantify the privacy/accuracy tradeoff, don't assume it |
| 3 | Traditional ML | Equipment-failure / anomaly models (Emerson) | Operational sensor data, failure prediction | Predict failures, forecast capacity | Supervised regression/classification + feature engineering | Production-ready predictive pipelines | Classical ML still wins on structured tabular signal |
| 4 | LLM evaluation / reliability | Eval & monitoring framework (Progress) | No principled way to compare model iterations | Catch regressions pre-deploy | RAGAS/BERTScore/custom metrics + accuracy dashboards | Regressions surfaced before release | The eval harness is the real senior deliverable |
| 5 | Production serving discipline | 12 APIs / latency cut (Vanguard) | Slow internal AI services at scale | Hit SLA at 100k+ req/day | FastAPI microservices, caching, routing | p95 1.5s → 800ms | Latency is a product feature, not an afterthought |
| 6 | Regulated / sensitive data | Safeguards + content controls (Vanguard) | Unsafe model outputs in a regulated bank | Reduce unsafe outputs, keep quality | Content controls, PII redaction, policy guardrails | Unsafe outputs −42% | Compliance-by-design transfers to confidential exec data |

**Recommended case study:** Privacy-Preserving Clinical ML Pipeline — closest analogue to ghSMART's confidential structured-assessment dataset; demonstrates rigor on exactly the kind of data the role models.

**Red-flag questions to prepare:**
- "You list 4+ years but most of it is internships/RA — what's your real senior production tenure?" → Answer with scope: agentic systems, eval frameworks, 100k+ req/day production, owned end-to-end.
- "This is Azure-first; your metrics are AWS." → Name the Azure OpenAI / Content Safety / Azure DevOps work; note cloud-agnostic tooling (Docker, K8s, Terraform).
- "Do you need visa sponsorship?" → F-1 OPT authorized now; future sponsorship required — confirm ghSMART's policy early (consulting firms vary).

## G) Posting Legitimacy

**Assessment: Proceed with Caution.**

| Signal | Finding | Weight |
|--------|---------|--------|
| Company identity | ghSMART — real, well-established leadership-advisory firm | Positive |
| Posting source | Direct corporate Lever board (`ghsmartjobs`), not a staffing mill | Positive |
| Liveness | Specific posting ID returns 403 / "Document not found"; live board serves only 7 unrelated reqs (no ML/AI seat) | Concerning |
| JD provenance | Full JD unreadable; requirements reconstructed from cached search snapshot + public material | Concerning |
| Comp | $160k–$175k cached band is market-realistic, not "too good to be true" | Positive |
| Ghost/evergreen patterns | No perpetual-posting or resume-harvesting signals; single direct (now-closed) req | Positive |

**Context Notes:** This is a **liveness/staleness** concern, not a fraud concern. ghSMART is legitimate; the specific ML/LLM req appears filled or pulled. The decisive issue is that there is currently nothing to apply to. Treat this evaluation as a profile-fit signal. If interested, set a watch for the ML/AI req to reopen and, before any apply effort, confirm (a) the live JD's actual seniority/cloud requirements and (b) sponsorship policy.

---

## Verification (adversarial)

Three independent adversarial judges reviewed the original evaluation. The decisive, independently-confirmed issue is a **dead/closed posting** (Lever API "Document not found" + 403; the live ghSMART board lists 7 unrelated roles and no ML/AI seat). The underlying profile fit is genuinely strong, but it is matched against an inferred JD and a req that is not currently applyable. Net effect: caps at borderline.

| Lens | Adjusted score | Recommendation | Core finding |
|------|----------------|----------------|--------------|
| score-calibration | 3.2 | borderline | Seniority gap under-credited (~1 yr true FT vs ~5 yr senior floor). Dead posting + inferred JD aren't reflected in the original 3.8. Every "Strong" verdict rests on assumed requirements; Azure-primary unproven (all top metrics AWS); sponsorship unknown at a consulting firm. Fit alone lands low-3s; liveness/inference pull it to borderline. |
| hard-gates | 2.8 | skip | Liveness gate is effectively disqualifying for an "apply" verdict — you cannot apply to a non-existent req. JD reconstructed from cache, so seniority/comp/Azure are unverified inferences; header should carry `Verification: unconfirmed`. Location + comp gates non-binding (remote-US, $160k+). Honest call: strong fit IF the req reopens; today, park/skip. |
| legitimacy | 3.5 | borderline | CONFIRMED dead posting via the ghSMART Lever API (7 active reqs, none ML; this ID returns 403). NOT a staffing-mill / evergreen scam — legitimate firm, single closed req, realistic comp — so the concern is staleness, not fraud (warrants borderline, not skip). Visa sponsorship unresolved; experience floor a genuine stretch. Action: do not tailor/apply against this URL; watch for reopen. |

- **Original score:** 3.8
- **Verified score (official):** 3/5
- **Final verdict:** **BORDERLINE.** Underlying profile fit is strong (LLM + traditional ML + structured/regulated-data rigor, remote-US, comp above the candidate's bar), but the specific posting appears closed and the JD is reconstructed from cache. Do not invest apply effort against this exact URL. Treat as a profile-fit signal: if a ghSMART ML/LLM req reopens, confirm the live seniority/cloud requirements and sponsorship policy first, then apply with the tailored CV.

---

## Keywords extraídas

machine learning engineer, LLMs, traditional ML, structured data, leadership assessment, people analytics, high-accuracy insights, RAG, agentic LLM, LLM evaluation, RAGAS, BERTScore, Azure OpenAI, Azure AI Services, model monitoring, classification, regression, anomaly detection, privacy-preserving ML, differential privacy, FastAPI, Docker, Kubernetes, remote
