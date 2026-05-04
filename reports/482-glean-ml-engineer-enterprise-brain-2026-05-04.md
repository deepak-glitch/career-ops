# Evaluación: Glean — Machine Learning Engineer, Enterprise Brain

**Fecha:** 2026-05-04
**Arquetipo:** ML Engineer (Applied AI Systems) + Generative AI / RAG Engineer (LLM-focused)
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4632997005
**Legitimacy:** High Confidence
**Location:** San Francisco Bay Area (Palo Alto or SF) — Hybrid 4 days/week in office
**PDF:** output/2026-05-04/cv-deepak-mallampati-glean-ml-engineer-enterprise-brain-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) + Generative AI / RAG Engineer |
| Domain | Enterprise AI search and knowledge graph — LLM-driven personalization, ranking, evals |
| Function | Build + Deploy — production ML/LLM models, evaluation frameworks, scalable pipelines |
| Seniority | Mid IC (3+ years industry AI/ML) |
| Remote | Hybrid 4 days/week in Palo Alto or SF Bay Area office |
| Team size | Not disclosed; Enterprise Brain is a high-leverage ML team inside Glean's core product |
| TL;DR | High-comp Mid IC ML role at the leader in enterprise AI search. Stack 1:1 (ML + LLM + RAG + evals + Python/PyTorch) but **3+ YOE bar** is a mild stretch on Deepak's ~2.5y wall-clock and **4-day in-office Palo Alto/SF** is real relocation friction from Kent, OH. Comp ($200K-300K base + equity) compensates. Apply with realistic expectations. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| 3+ years industry AI/ML Engineering | ⚠️ ~2.5y wall-clock, deep on RAG/agentic | Progress Solutions Jul 2025-present (10mo intensive LLM) + Energy Solutions 22mo backend/data pipelines; cv.md:22-39 |
| BA/BS in CS, math, sciences | ✅ MS Kent State + B.Tech CS | cv.md:91-94 |
| Search, recommendation, NLP, large-scale ML | ✅ Direct (RAG retrieval + ranking + healthcare ML) | cv.md:25-27 RAG retrieval precision +35%; patient no-show prediction recall +15-20% |
| Production-ready models shipped end-to-end | ✅ Strong | FastAPI + Docker packaging at Progress Solutions, ~30% defect reduction; cv.md:28 |
| ML evaluation, benchmarking, data quality | ✅ Direct | "evaluation pipelines" + ">90% grounded alignment in evaluation" + "raised dataset reliability >98%"; cv.md:13, 25, 29 |
| Python (ML frameworks: TensorFlow, PyTorch, sklearn) | ✅ Direct | Python, scikit-learn, XGBoost, PyTorch, Hugging Face Transformers; cv.md:12, 14 |
| Go / Java / C++ similar languages | ⚠️ Partial | C++ (Arduino), TypeScript, no Go production; cv.md:12 |
| LLM workflows, reasoning/planning/personalization | ✅ Direct | Agentic LLM workflows for multi-step healthcare queries with structured reasoning + tool discipline; cv.md:26 |
| RL + fine-tuning methods | ⚠️ Adjacent | Stable Diffusion fine-tuning + LoRA in pixel character project; no production RLHF/PPO; cv.md:62 |
| Knowledge graph development | ⚠️ Adjacent | NetworkX + community detection on geospatial road graph; cv.md:77; no enterprise KG production |
| Customer-focused mindset | ✅ Strong | HIPAA-conscious stakeholder docs + Suvidha non-tech UI delivery; cv.md:30, 47 |

**Gaps:**
1. **3+ YOE wall-clock** — Soft. Deepak is ~2.5y but the LLM/RAG depth is post-2024 cohort-equivalent. Frame as "mid-cohort ML engineer with 10 months production-grade LLM/RAG plus 22 months backend data engineering — comparable depth to many 3y ICs."
2. **4 day/wk in-office Palo Alto/SF** — Hard relocation friction. Deepak is Kent, OH; relocation possible per profile.yml but adds ramp time. Acknowledge openness up-front in cover letter.
3. **Enterprise knowledge graph + RL fine-tuning depth** — Soft. Adjacent experience (NetworkX, LoRA fine-tuning); ramp-up week 1-4 with internal docs.
4. **Go / Java production code** — Soft. Python is primary; the JD says "Python, Go, Java, C++, **or similar**" — Python qualifies.

## C) Nivel y Estrategia

JD targets a Mid IC at a hyper-competitive enterprise AI leader. Deepak is technically aligned on the stack (RAG + LLM + evals + production packaging) but ~6mo short on wall-clock YOE.

**Sell Mid w/o lying:**
- Lead with Progress Solutions production RAG (~35% retrieval precision, >90% grounded alignment) + agentic workflows (~25% stability gain) + structured eval frameworks.
- Frame the no-show / engagement scoring ML pipelines as evidence of "design, build, ship production models."
- Emphasize the multi-provider Manga Lens production deployment (Chrome Web Store) as solo end-to-end shipping discipline.

**Plan if downleveled:**
- Accept "ML Engineer I" or new-grad equivalent if comp is $180K+ base. Negotiate 6-month review with promo criteria tied to one Enterprise Brain workstream owned end-to-end.

## D) Comp y Demanda

**Comp:** Disclosed. **$200,000 - $300,000 base** + variable + equity + benefits. Top quartile for Mid ML IC in SF/Bay Area.

**Demand:** Glean is a unicorn ($4B+ valuation 2024-2025) with active enterprise expansion. ML hiring continues 2026 alongside Enterprise Brain product line. WebSearch shows no recent layoff news; positive growth signals via Series F funding rounds and enterprise customer wins (Reddit, Pinterest, Workday).

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic Applied AI | Mirror "ML/LLM workflows for reasoning, planning, personalization; production-ready ranking and evaluation pipelines" | JD verbatim language — ATS keyword match |
| 2 | Skills | Mixed Python/JS/CV | Promote Python + PyTorch + Hugging Face + LangChain/LlamaIndex + RAG/evaluation pipelines | Direct alignment with required skills |
| 3 | Experience bullets | Healthcare-tilted | Reframe RAG bullet as "designed retrieval ranking + signal extraction; +35% precision via embeddings + recursive chunking" | Match search/ranking framing |
| 4 | Projects | CV-heavy | Lead with Healthcare Claims Multi-Agent (schema contracts, RAG validation, audit-ready) | Mirror enterprise reliability theme |
| 5 | Footer | Kent OH location | Add "Open to relocation, Bay Area" | Pre-empt 4-day in-office concern |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Build production RAG with eval | Healthcare clinical RAG | Knowledge retrieval app w/ generic context retrieval missing 50% of queries | Improve precision + grounding | Recursive semantic chunking + transformer embeddings + grounded eval harness | +35% precision, >90% grounded alignment | Eval-first design saves rework; would add eval baseline before retrieval changes |
| 2 | Ship LLM workflows for reasoning | Agentic healthcare workflows | Multi-step eligibility/care-nav queries hallucinating | Build tool-disciplined agent | Structured reasoning + grounding rules + JSON contracts | +25% stability, >30% hallucination reduction | Schema contracts beat prompt-only orchestration; would add HITL tier-2 escalation earlier |
| 3 | Production model design + deploy | Patient no-show prediction | Class-imbalanced patient appointment data | Recall on high-risk while holding precision | Class weighting + stratified sampling + threshold calibration | +15-20% recall, >90% precision | Threshold calibration matters more than algorithm choice in clinical workflows |
| 4 | ML evaluation + benchmarking | Suvidha video summarization eval | Need to validate AI-selected highlights vs human curation | Quantify alignment | Hierarchical summarization + human-aligned eval set | ~85% alignment, 60-70% review-time reduction | Building the eval set is the hard part; would invest more upfront on rubric design |
| 5 | Python + ML frameworks shipped | Manga Lens multi-provider | Solo Chrome extension w/ 4 AI vision providers | Failure isolation across providers | Multi-provider abstraction + per-provider payload handling | Shipped to Chrome Web Store w/ 29 sites | Abstraction beats early provider lock-in; per-provider failure modes are real |
| 6 | Knowledge graph adjacent | Geospatial road network | OSM XML + 20k node graph | Routing + community structure | NetworkX DiGraph + Dijkstra + Louvain communities + MST | -30% runtime via subgraph scoping | Sparse graphs benefit more from scoping than algorithmic optimization |

**Case study:** Healthcare Claims Multi-Agent (schema-validated agents + RAG-grounded CPT/ICD validation + audit-ready risk scoring) — most directly mappable to Enterprise Brain's reliability + grounding theme.

**Red-flag prep:**
- "Why are you ~2.5 years in?" → "Wall-clock 2.5y but ~10 months intensive production LLM. Master's added depth on the ML foundations the JD asks for."
- "Why move from Kent to SF/Palo Alto?" → "Glean's enterprise AI thesis is the next chapter; the in-office team velocity is the reason to relocate."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Glean Greenhouse board; Apply button present; no posting date stamp visible | Neutral |
| Description quality | Concrete ML stack (TensorFlow/PyTorch, ML evaluation frameworks, knowledge graph), specific responsibilities, comp disclosed ($200-300K) | Positive |
| Company signals | Glean is well-funded enterprise AI search leader; Series F $4B+ valuation; active hiring; no layoff news in WebSearch | Positive |
| Reposting | Distinct URL from prior Glean entries (#055 Software Engineer AI Infrastructure, #124 ML Engineer LLM Evals, #129/#130 Founding FDE); this is a separate Enterprise Brain product team role | Positive |
| Realism | 3+ YOE + ML + LLM + production ranking is realistic for a Mid IC | Positive |
| Salary transparency | Disclosed and within market for SF Mid ML IC | Positive |

**Context Notes:** Glean has been a consistent hiring presence (multiple distinct ML/FDE/SE postings over the past month per applications.md). This posting is a distinct Enterprise Brain team role — not a duplicate. **Verification:** confirmed (Greenhouse direct fetch).

## H) Draft Application Answers

(skipped — score below 4.5 threshold)

---

## Keywords extraídas

Machine Learning Engineer, Enterprise Brain, LLM workflows, reasoning, planning, personalization, RAG, retrieval-augmented generation, ranking, evaluation pipelines, benchmarking, ML evaluation, Python, PyTorch, TensorFlow, scikit-learn, knowledge graph, search, recommendation, NLP, production ML, Palo Alto, SF Bay Area, Hybrid 4 days, $200K-300K, Mid IC, Glean
