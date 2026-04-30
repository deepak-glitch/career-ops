# Evaluación: NVIDIA — Applied AI Engineer, Silicon Co-Design Group, New College Grad 2026

**Fecha:** 2026-04-30
**Arquetipo:** Applied AI / LLM Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.7/5
**URL:** https://jobs.anitab.org/companies/nvidia/jobs/76096622-applied-ai-engineer-silicon-co-design-group-new-college-grad-2026
**Legitimacy:** High Confidence
**Location:** Santa Clara, CA — On-site (NVIDIA HQ)
**PDF:** output/2026-04-30/cv-deepak-mallampati-nvidia-silicon-codesign-newgrad-2026-04-30.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (RAG + agents + LLM productionization) + ML Engineer |
| Domain | Silicon co-design — applying AI/ML to chip design and validation workflows |
| Function | Build (AI assistants for hardware engineers) |
| Seniority | New College Grad 2026 — explicitly entry-level |
| Remote | Santa Clara, CA — On-site |
| Team size | Cross-functional silicon teams; Silicon Co-design Engineering Team |
| TL;DR | NVIDIA new-grad role applying AI/ML/GenAI (LLMs + RAG + agents) to accelerate silicon co-design and validation; M.S./Ph.D. floor; $100-189K + equity. |

## B) Match con CV

| Requisito JD | Match en CV | Tipo |
|--------------|-------------|------|
| M.S. or Ph.D. (or completing within 6 months) in CS/EE/CE | M.S. Computer Science, Kent State (May 2025) | Direct |
| Strong Python | Primary language, 2.5+ yrs production | Direct |
| C/C++ | Arduino C++ project | Adjacent |
| Tcl / Perl / Bash | Bash via Docker / Jenkins workflows | Partial |
| ML foundation (model dev + eval); Transformers / LLMs | Agentic LLM workflows + RAG + Hugging Face Transformers | Direct |
| At least one of CNN/RNN/GNN concepts | YOLOv8 (CNN-based detection) + GNN-style NetworkX road-graph community detection | Direct |
| PyTorch / TensorFlow | PyTorch (Pixel agent + Suvidha video summarization) | Direct |
| Agentic systems (RAG + tool-calling + fine-tuning) | 5-agent claims pipeline + LangChain + RAG + structured outputs | Direct |
| Data + MLOps pipelines | Pandas/NumPy preprocessing pipelines + FastAPI/Flask serving + Docker | Direct |
| Cross-functional partnership | Stakeholder docs at Progress Solutions; Student Manager 150+ students | Adjacent |

**Gaps:**
1. **Silicon / EDA domain** — No prior chip-design exposure. Mitigation: emphasize transferable agentic + RAG + MLOps shape, willingness to learn EDA-tool ecosystem; PhD/EE candidates dominate this lane, MS-CS is non-traditional but viable.
2. **Tcl / Perl** — Light. Mitigation: Bash + scripting fluency; Tcl pickup is fast.
3. **Santa Clara on-site** — Relocation required from Kent OH. F-1 OPT compatible; logistics manageable.

## C) Nivel y Estrategia

JD floor is M.S. (or Ph.D., or completing within 6 months). Candidate has M.S. completed May 2025 — clean fit on credentials. NCG 2026 cohort is the right band.

**Sell new-grad with edge:** "I've already shipped agentic LLM + RAG production systems in healthcare — 5-agent claims pipeline with schema-validated contracts, healthcare RAG with ~35% retrieval precision lift, agentic workflows with >30% hallucination reduction. I'm bringing the agent + RAG + MLOps stack you described, and I'm hungry to apply it to silicon co-design where I haven't worked before."

Senior-track talk doesn't apply (NCG role). Frame is "MS-CS new grad with shipped Applied AI systems."

## D) Comp y Demanda

| Dimension | Data | Source |
|-----------|------|--------|
| NVIDIA NCG salary range | $100,000 - $189,000 + equity + benefits | JD |
| NVIDIA new-grad SWE comp | $130-180K base + sign-on + RSUs | Levels.fyi |
| Demand for AI-applied-to-EDA | Growing (Applied Intuition, Synopsys, Cadence, NVIDIA all building AI-EDA stacks) | Industry trend |
| Application deadline | Accepting until at least 2026-04-27 (today is 04-30 — verify still open) | JD |

**Verify the deadline** — JD says "at least until April 27, 2026"; that's already past. NVIDIA typically rolls deadlines forward for hot reqs, but apply ASAP.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare RAG | Reframe to "Applied AI engineer (M.S. CS, Kent State, May 2025) with shipped agentic LLM + RAG + MLOps systems — bringing agents + RAG + eval to a new domain" | NCG + AI/MLOps cross-domain |
| 2 | Education | Education at bottom | Move M.S. mention into the summary first sentence | NCG roles screen on degree first |
| 3 | Skills | LangChain mid | Surface PyTorch + Hugging Face Transformers + LLMs + RAG + Python + C++ early | JD primary stack |
| 4 | Projects | Claims pipeline 1st | Lead with claims pipeline (5-agent + schema contracts) — direct match for "AI assistants and agentic systems for SCG engineers using RAG, tool-calling, and fine-tuned models" | JD vocabulary 1:1 |
| 5 | Header | Kent OH | "Open to Relocation — Santa Clara, CA" sublabel | On-site role |

LinkedIn: pin claims pipeline + Pixel orchestrator; headline → "Applied AI engineer | M.S. CS Kent State '25 | LLM agents + RAG + MLOps shipped in healthcare".

## F) Plan de Entrevistas

| # | JD requisito | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | AI assistants + agentic systems with RAG + tool-calling | 5-agent claims pipeline | Healthcare claims adjudication needed multi-step reasoning | Build a multi-agent system with reliable handoffs | Schema-validated JSON contracts (pydantic) between 5 agents (Intake, Validation, Consistency, Duplicate, Risk Scoring); RAG-grounded CPT/ICD validation; ANN duplicate detection; explainable risk scoring with audit traces | Pipeline running with audit-ready reasoning | Lesson: typed-contract handoffs between agents are a 10x reliability lever vs free-text — directly applicable to silicon-engineering agents |
| 2 | LLM application development + RAG | Healthcare RAG at Progress Solutions | Clinical knowledge retrieval was returning irrelevant docs | Lift retrieval precision and reduce hallucination | Recursive semantic chunking + transformer embeddings + grounding rules | ~35% retrieval precision lift, >30% irrelevant-retrieval reduction, >90% grounded alignment | Lesson: chunking strategy is more important than embedding model for domain-specific corpora |
| 3 | Scalable data + MLOps pipelines | Predictive ML pipelines (no-show / care engagement) | Predictive ML for high-risk patient categories needed prod-grade serving | Build a MLOps pipeline with monitoring + thresholds | scikit-learn / XGBoost; class weighting + stratified sampling + threshold calibration; FastAPI/Docker serving + structured logging | Recall +15-20% on high-risk; precision >90%; ~30% post-deploy defect cut | Lesson: threshold calibration AFTER deploy is where most engineering teams under-invest |
| 4 | Cross-functional partnership with hardware/silicon teams | Stakeholder system-limitation docs at Progress Solutions | Clinicians needed to know what the agent could and couldn't do | Surface model limits transparently | Wrote stakeholder-facing system-limitation docs alongside evaluation audit trails | Reduced misuse and post-launch escalations | Lesson: documenting "what this AI cannot do" matters more than benchmarks for cross-functional adoption |
| 5 | C++ / model deployment | Manga Lens multi-provider routing + YOLOv8 detection | Multi-provider AI vision with CUDA crash on PNG; YOLOv8 detection latency | Stabilize prod inference | Per-provider payload routing (WebP cloud, JPEG Ollama); YOLOv8 unified detect+classify cut latency ~30% | Live shipping multi-provider extension; YOLOv8 stable in real-time | Lesson: provider quirks and model-arch choice both matter — production AI is 50% inference plumbing |

**Case study to lead with:** 5-agent claims pipeline (most direct match for "AI assistants and agentic systems").

**Red-flag answer prep:**
- Q: "Why CS instead of EE for silicon AI?" — A: "AI/ML is the lever moving silicon co-design forward; the EDA domain knowledge is learnable, the agent + RAG + MLOps shape is harder to acquire and is what I've shipped."
- Q: "F-1 OPT — sponsorship timeline?" — A: "F-1 OPT now; STEM extension eligible; H-1B sponsorship needed for long term. NVIDIA sponsors regularly."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| AnitaB.org official board (NVIDIA partner channel) | Real opening | Positive |
| NVIDIA New College Grad 2026 cohort | Established annual program | Positive |
| Salary disclosed ($100-189K + equity) | Transparent | Positive |
| Tech specificity | RAG, tool-calling, fine-tuning, PyTorch, Transformers — concrete stack | Positive |
| Application deadline (2026-04-27) | Already passed by 3 days — verify rolling acceptance | **Concerning** (small) |
| NVIDIA hiring momentum | Strong AI/ML hiring 2026 | Positive |
| Reposting | First time seen 2026-04-25 (scan-history); persistent listing | Neutral |

**Action:** Apply ASAP and treat the deadline as the binding signal. If rejection by deadline filter, look for the 2026 NCG follow-up requisitions NVIDIA typically posts.

## H) Draft Application Answers

Not generated (score 3.7 — under 4.5 threshold; PDF generated).

---

## Keywords extraídas

NVIDIA, Applied AI Engineer, Silicon Co-Design, New College Grad 2026, Master's, M.S., Ph.D., LLMs, GenAI, RAG, Tool-calling, Fine-tuning, PyTorch, TensorFlow, Transformers, CNN, RNN, GNN, Python, C++, Tcl, Perl, Bash, MLOps, Data Pipelines, AI Assistants, Agentic Systems, Cross-functional, Santa Clara, On-site, $100-189K, Equity.
