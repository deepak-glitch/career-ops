# Evaluación: Rhino Federated Computing — Forward Deployed Engineer, AI

**Fecha:** 2026-04-22
**Arquetipo:** AI Solutions / Forward Deployed Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.2/5
**URL:** https://job-boards.greenhouse.io/rhinofederatedcomputing/jobs/4001057009
**Legitimacy:** High Confidence
**Location:** Boston, MA — primary Boston; "other locations for highly qualified candidates only"
**PDF:** output/2026-04-22/cv-deepak-mallampati-rhino-fde-2026-04-22.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Forward Deployed AI Engineer (federated learning + privacy-preserving AI) |
| Domain | Rhino Federated Computing — Federated Computing Platform (FCP) for healthcare/life-sciences data collaboration |
| Function | Deploy federated AI pipelines at customer sites; coding + config support (hyperparams, eval, experiment mgmt, privacy testing, AIOps); customer onboarding + training |
| Seniority | Mid-senior (related lead-role posting asks 5+ years + MS/PhD; this IC-level FDE likely 3-5 years) |
| Remote | Boston (preferred) + customer travel |
| Comp | Not disclosed on extract |
| TL;DR | Federated learning + healthcare context is a rare strong fit for Deepak's HIPAA + healthcare RAG background. Role is FDE with mid-level bar. Boston relocation feasible (profile.yml open to relocation). Skill match is strong; federated learning is the learning-curve gap. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Applied AI / ML engineering, production experience | **STRONG** | cv.md L8 2.5+ years; L25-30 production RAG + risk models |
| Deploy federated AI pipelines (training, inference, deployment, monitoring) | **STRONG** (federated specifically is gap) | cv.md L25-30 full ML lifecycle; L17-18 MLOps + observability |
| Customer-facing technical delivery | **MEDIUM** | cv.md L26 stakeholder-facing system-limitation docs; student-manager coordination L50-55 |
| Healthcare / life-sciences domain | **STRONG** | cv.md L22-30 Progress Solutions Healthcare; HIPAA-conscious governance L30; L83-84 patient records |
| Deep learning frameworks (PyTorch, TensorFlow, JAX) | **MEDIUM (PyTorch strong)** | cv.md L14 PyTorch; no TF or JAX |
| AI/MLOps ecosystems | **MEDIUM** | cv.md L17-18 MLOps/LLMOps + CI/CD + observability |
| Project management + executive communications | **MEDIUM** | cv.md L50-55 coordinating 150+ students; no direct customer exec |
| Federated learning / privacy-preserving AI / secure distributed | **GAP** | Not cited; closest is HIPAA-conscious de-identification L30 |
| LLM frameworks (GPT, Gemini, Claude, LangChain, agentic) — preferred | **STRONG** | cv.md L13-14 LangChain, agentic, LlamaIndex; L59-60 Claude + GPT-4o |
| Hyperparameter tuning, evaluation, experiment management | **STRONG** | cv.md L27 class weighting, stratified sampling, threshold calibration; L25 eval pipelines |

**Gaps & mitigation:**
1. **Federated learning specifically** — Mitigation: frame HIPAA-conscious governance + de-identification + audit trails as precursor mindset. Commit to FedML/Flower study pre-interview.
2. **5+ years preferred** — Mitigation: density of end-to-end ownership; healthcare domain depth.
3. **PhD/MS in quantitative field** — cv.md L91 Kent State MS ✓.
4. **TensorFlow / JAX** — Mitigation: PyTorch depth + willingness to cross-train.

## C) Nivel y Estrategia

- **JD level:** Mid-senior IC (the related Lead posting says 5+ years; this IC likely 3+).
- **Candidate level:** Mid (2.5+ years).
- **Sell-up plan:** Lead with healthcare production + HIPAA discipline + measurable outcomes. Federated learning is adjacent to HIPAA-conscious de-identification philosophy.
- **Downlevel plan:** Accept if comp ≥ $120K and scope includes federated learning build-out.

## D) Comp y Demanda

| Data | Value | Source |
|------|-------|--------|
| Market (Mid-Senior FDE + healthcare AI, Boston) | $140-180K base + equity | Levels.fyi 2026 |
| JD comp | Not disclosed | JD |
| Demand | Niche but growing (privacy-preserving AI + federated for healthcare) | Market |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ years) shipping healthcare-focused RAG + risk-prediction ML + HIPAA-conscious data governance; end-to-end ownership from EHR preprocessing to FastAPI/Docker deployment with measurable gains in retrieval precision and high-risk recall." | Mirrors Rhino healthcare + production + privacy framing |
| 2 | Skills reorder | "Healthcare AI (HIPAA-conscious)", "federated-learning-adjacent", "MLOps", "PyTorch" near top | Matches JD priorities |
| 3 | Progress Solutions L30 | Emphasize de-identification + data lineage + audit trails | Federated-learning adjacency |
| 4 | Project callout | Agentic Healthcare Claims Processing + Patient Records App | Proof of healthcare domain work |
| 5 | Education | MS Kent State — call out explicitly (JD prefers MS) | Matches JD preferred qualification |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | HIPAA-conscious data governance | Progress Solutions healthcare RAG | Clinical data regulated; lineage required | HIPAA-conscious RAG | De-identification + data lineage docs + audit trails + stakeholder-facing limitation docs | >98% dataset reliability | Governance is first-class infrastructure |
| 2 | Deploy AI pipelines at customer sites | FastAPI + Docker + Load Sim | Inference service needed to serve clinical models | Production-grade packaging | FastAPI + Docker + structured logging + load simulation | ~30% fewer post-deploy defects | Packaging discipline = customer trust |
| 3 | Risk + predictive ML at scale | Patient no-show + risk prediction | Class imbalance, high-risk categories | Improve recall without precision loss | scikit-learn + XGBoost, class weighting, stratified sampling, threshold calibration | Recall +15-20% on high-risk, precision >90% | Class-weight vs threshold trade-off must be measured |
| 4 | Federated learning-adjacent (de-identification + privacy) | EHR preprocessing pipelines | Raw EHR extracts needed careful governance | HIPAA-conscious preprocessing | De-identification + lineage + evaluation audit + limitation docs | Downstream model instability -40%, dataset reliability >98% | Federated learning extends the same privacy-first mindset to distributed training |
| 5 | Customer-facing technical delivery | Stakeholder + student coordination | 150+ student coordination | Reliable coordination + feedback loops | Formal onboarding + attendance/participation tracking + trend surfacing | Coordination delays -30%, logistical issues -25% | Customer delivery rewards same skills: cadence + docs + feedback loops |
| 6 | Agentic orchestration in customer workflows | Agentic Healthcare Claims | Cascading hallucinations in multi-agent workflows | Prevent via schema-validated JSON contracts | 5-agent pipeline (Intake → Validation → Consistency → Dedup → Fraud) + RAG grounding + ANN similarity | Audit-ready reasoning traces | Contracts between agents = customer trust in agentic systems |

**Recommended case study:** Progress Solutions healthcare RAG + HIPAA governance (directly matches Rhino's privacy-first + healthcare context).

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Description quality | Detailed, named hyperparams + AIOps + privacy testing | Positive |
| Role-company fit | Federated computing platform + FDE fits | Positive |
| Comp transparency | Not disclosed from extract | Neutral |
| Greenhouse active | URL resolves via Greenhouse | Positive |
| Company real | Rhino Federated Computing (formerly Rhino Health) has public presence, Boston-based | Positive |
| Reposting pattern | Related "Team Lead" + "Data" FDE postings exist — active hiring push not ghost pattern | Positive |

## H) Draft Application Answers

**Why Rhino?**
"Federated learning is the logical extension of the HIPAA-conscious governance I've built at Progress Solutions — de-identification, data lineage, audit trails, and stakeholder-facing limitation docs. Moving from centralized-but-careful to truly-distributed training matches where healthcare AI has to go. I want to build the pipelines that make it boring, fast, and auditable for customer sites."

**Federated learning experience?**
"Not production-level yet. Closest is HIPAA-conscious preprocessing and audit trails at Progress. I'm planning to ship a Flower or FedML demo tied to my patient-records app before an interview loop so we can discuss concrete design choices."

**Boston relocation?**
"Kent, OH today on F-1 OPT; open to relocating to Boston. Want to clarify the sponsorship timeline early."

---

## Keywords extraídas

Forward Deployed AI Engineer, federated learning, privacy-preserving AI, HIPAA, healthcare AI, applied AI, MLOps, AIOps, PyTorch, TensorFlow, JAX, hyperparameter tuning, evaluation pipelines, LangChain, agentic frameworks, customer delivery, production deployment, distributed computing
