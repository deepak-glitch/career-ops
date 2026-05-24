# Evaluación: Remote People — AI Engineer

**Fecha:** 2026-05-24
**Arquetipo:** Applied AI / LLM Engineer | AI Platform / MLOps Engineer
**Score:** 3.5/5
**URL:** https://job-boards.greenhouse.io/remotepeople/jobs/4843110101
**Legitimacy:** High Confidence
**Location:** Lisbon (Office) or Europe Remote
**Region:** Intl
**PDF:** output-intl/2026-05-24/cv-deepak-mallampati-remote-people-ai-engineer-2026-05-24.pdf
**Verification:** unconfirmed (batch mode)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI Engineer building LLM + RAG features end-to-end on a HR-tech SaaS platform |
| Domain | HR-tech / global-payroll SaaS — Remote People builds infra for borderless teams (NOT a recruitment agency; this is their own Data & AI team) |
| Function | End-to-end AI feature lifecycle: framing → data prep → modeling → evaluation → deployment → monitoring |
| Seniority | Mid (3+ yrs SWE / 1+ yr AI/ML) |
| Remote | Lisbon (Office) OR Europe Remote |
| Comp | Not disclosed (applicant asked to state expected salary) |
| Stage | Established SaaS player in the global-payroll space |
| TL;DR | Direct Python + FastAPI + RAG + LLM stack match; SaaS product context fits Deepak's portfolio shape. EU-remote opens visa paths (Portugal D8 / EU Blue Card) less brittle than UK. Score limited by 1 yr AI/ML floor matching exactly + AWS preference (Deepak's deploy work is Docker-centric, not AWS-deep). |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| Build/deploy LLM + RAG architectures for real business problems | ✅ — Healthcare RAG with ~35% retrieval precision lift, >30% irrelevant retrieval reduction (Progress Solutions) |
| End-to-end AI feature lifecycle (framing → deploy → monitor) | ✅ — Progress Solutions: data prep (EHR Pandas/NumPy), modeling (scikit-learn/XGBoost), evaluation (audit trails), deploy (FastAPI/Docker), monitoring (structured logging) |
| Cloud infrastructure, preferably AWS | ⚠️ — Docker + Jenkins + Grafana strong; AWS is in skills list but not a hero metric on resume |
| 3+ yrs SWE | ⚠️ — ~2.5 yrs professional + Master's + portfolio depth — at the edge |
| 1+ yr AI/ML | ✅ — Progress Solutions (Jul 2025 → present) + Suvidha ML role + portfolio |
| Strong Python + async + FastAPI | ✅ — FastAPI in Progress Solutions, Pixel Synthesis, Dream Decoder; Flask at Suvidha |
| Hands-on AI coding tools in production | ✅ — Manga Lens (multi-provider AI vision in Chrome Web Store), Healthcare Agentic Claims |
| MLOps (preferred) | ⚠️ — Docker, structured logging, load simulation, Jenkins CI/CD at Emerson; not full MLflow/W&B stack |
| Vector DBs (Pinecone, Weaviate, Elasticsearch) (preferred) | ⚠️ — pgvector in skills; semantic chunking + embeddings deployed; not specific to Pinecone/Weaviate |
| PyTorch / TensorFlow / LangChain (preferred) | ✅ — PyTorch + LangChain + LlamaIndex on the CV |
| SaaS product experience (preferred) | ✅ — E-Farming marketplace (founder), Manga Lens (Chrome Web Store), Dream Decoder (full-stack FastAPI + React) |
| Async distributed cross-functional environment | ✅ — Healthcare cross-functional (clinicians, PMs, compliance); remote-first Progress Solutions context |
| Strong written communication | ✅ — System-limitation docs, evaluation audit trails, stakeholder-facing docs |

**Gaps + mitigation:**
- *AWS depth*: lean on Docker + cloud-ready deployment language in the CV; mention 1-week ramp plan in cover letter (EC2/S3/Lambda + IAM basics). Don't fabricate certifications.
- *Specific vector DB (Pinecone/Weaviate)*: bridge from pgvector + embeddings deployed at Progress Solutions. The retrieval mechanics transfer; provider-swap is a configuration concern.
- *Years-of-SWE*: tight. Counter with shipped portfolio (Manga Lens public, multiple FastAPI APIs in production) — output, not tenure.
- *EU work auth from F-1 OPT*: Portugal D8 (digital nomad), EU Blue Card, or contractor structure are all viable; flag honestly in application.

## C) Nivel y Estrategia

- Detected: Mid (3+ yrs SWE / 1+ yr AI/ML). Deepak natural: 2.5 yrs SWE + 1 yr explicit AI/ML role — sits on the line.
- **Vender:** "I've shipped the exact stack — Python + FastAPI + RAG + agentic LLM workflows in a HIPAA-conscious SaaS-shaped product context — with measurable lift (~35% retrieval precision, >30% hallucination reduction, ~30% defect reduction). I think in eval harnesses and grounding, not just model choice."
- **Si downlevelan:** "Junior AI Engineer" framing is acceptable if comp is fair; ask for explicit promotion criteria at 6/12 months tied to features shipped and evaluation infra contributed.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| Remote People JD band | Not disclosed (applicant supplies expected) | JD |
| Lisbon AI Engineer (mid) | €45K–€70K base | Glassdoor 2026, Landing.jobs |
| EU-remote AI Engineer (mid, non-FAANG) | €55K–€85K base | Levels.fyi 2026 |
| Global SaaS premium | +10–15% | Industry |
| Equity | Likely limited (post-Series funded global-payroll SaaS) | Inference |

Expected-salary-from-applicant pattern is a soft yellow flag (anchors low). Counter-anchor with "based on EU-remote AI engineer market for the role scope you describe, I'm targeting the €70K–€85K base range plus equity; happy to discuss structure."

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Healthcare-focused RAG / agentic / predictive ML" | "Applied AI engineer building end-to-end LLM + RAG features in Python — production FastAPI services, ~35% retrieval precision lift, agentic workflows with >30% hallucination reduction, ~30% post-deploy defect reduction. Comfortable owning the full AI feature lifecycle from framing through monitoring." | Mirror JD's end-to-end language |
| 2 | Projects order | Default | **Agentic Healthcare Claims** → Manga Lens → Dream Decoder → YOLO | Lead with multi-agent + RAG, then full-stack SaaS-shape projects |
| 3 | Skills | Generic order | Promote `Python`, `FastAPI`, `async`, `RAG`, `LangChain`, `vector search`, `Docker`, `MLOps`, `AWS-ready` to top | ATS keyword match |
| 4 | Experience bullets | Healthcare first | Reorder: RAG retrieval → agentic workflows → FastAPI/Docker → predictive ML → EHR data prep → governance | Match JD bullet order |
| 5 | Cover letter | None | Required — open with: "I've shipped the end-to-end AI feature lifecycle in Python — framing with stakeholders, EHR data prep, RAG + agentic LLM modeling, eval harnesses, FastAPI/Docker deployment, structured-log monitoring. Remote People's HR-tech context is the same shape: real business problem, real users, evaluation discipline matters." Close with EU work-auth note (D8 / Blue Card paths). | Direct lifecycle bridge + visa transparency |

## F) Plan de Entrevistas (STAR+R)

| # | JD req | STAR+R |
|---|---|---|
| 1 | End-to-end AI feature lifecycle | S: Progress Solutions RAG feature for clinical knowledge retrieval. T: Build the feature end-to-end. A: Framed with clinicians, prepped EHR extracts (Pandas/NumPy, >98% reliability), built recursive semantic chunking + transformer embeddings, eval harness against ground-truth Q&A, FastAPI deploy on Docker, structured-log monitoring. R: ~35% retrieval precision lift, >30% irrelevant retrieval reduction, >90% response alignment. Reflection: Investing in the eval harness early let us iterate on chunking strategy with confidence — the model swap was the easy part. |
| 2 | Strong Python + async + FastAPI | S: Pixel Character Synthesis + Healthcare Claims pipelines. T: Serve generation/inference at low latency. A: Async FastAPI endpoints, Docker containerization, request batching where it helped. R: Production-ready service surface for non-engineer consumers. Reflection: Async pays off most where I/O dominates — for GPU-bound paths, the queue depth matters more than the framework. |
| 3 | RAG architectures for real business problems | S: Document Q&A RAG at Suvidha Foundation. T: Reduce hallucinations on summarization + Q&A over recorded sessions. A: Semantic chunking + embedding retrieval; grounding rules. R: ~30% hallucination reduction, >85% contextual accuracy in controlled tests. Reflection: The "real business problem" framing matters — RAG without a clear eval target turns into vibes-based iteration. |
| 4 | MLOps + production monitoring | S: Progress Solutions FastAPI/Docker deploy. T: Ship ML/LLM inference reliably in HIPAA-conscious env. A: Containerization, structured logging, load simulation, eval audit trails. R: ~30% post-deployment defect reduction. Reflection: Logging at the contract boundary (input/output schema, grounding sources used) made incidents debuggable; endpoint-only logs hide the interesting failures. |
| 5 | Cross-functional async distributed environment | S: Healthcare cross-functional delivery. T: Coordinate clinicians, PMs, compliance on AI feature adoption. A: System-limitation docs + evaluation audit trails + structured demos; async written-first comms. R: HIPAA-conscious production deployment with stakeholder trust. Reflection: Async distributed work lives or dies on writing quality — docs are the meeting that scales. |
| 6 | Vector DBs + retrieval | S: Healthcare RAG retrieval stack. T: Choose embedding + storage for clinical documentation. A: Transformer embeddings + semantic chunking; vector store deployed; eval against precision/recall targets. R: ~35% precision lift. Reflection: Provider-swap (pgvector ↔ Pinecone ↔ Weaviate) is mostly a config + cost decision once retrieval evals are wired — the harder choice is chunking + reranking. |

Red-flag Q "Why us / why HR-tech?" → "Remote People sits at the intersection of three things I care about: real-business AI (not demo-ware), distributed teams (the customer is async by nature), and a domain where retrieval accuracy maps to compliance outcomes. My healthcare work has the same shape — high-stakes structured data, multi-stakeholder review."

Red-flag Q "Salary expectations?" → "Based on EU-remote AI engineer market for the scope you described, I'm targeting €70K–€85K base plus equity. Open to discussing structure once the role scope is fully clear."

Red-flag Q "EU work auth?" → "I'm on F-1 OPT in the US. For an EU-remote role I can explore Portugal D8 or EU Blue Card paths, or a contractor structure to start — I'd like to understand which fits Remote People's hiring model best."

Case study to lead with: **Healthcare RAG system at Progress Solutions** — end-to-end lifecycle with measurable retrieval lift.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| JD specificity | Names tech (Python, FastAPI, RAG, LangChain, vector DBs), lifecycle stages, role responsibilities concretely | Positive |
| Realism | 3+ yrs SWE / 1+ yr AI/ML is a sensible mid-bar | Positive |
| Apply form | Greenhouse direct application active | Positive |
| Direct hire vs agency | Remote People itself is the employer (their own Data & AI team) — not third-party recruitment | Positive |
| Comp transparency | Not disclosed; applicant asked to supply expected salary | Concerning (legitimate but counter-anchor) |
| Stage | Established global-payroll SaaS player | Positive |
| Reposting | First appearance in scan-history | Positive |
| Visa friction | EU role; F-1 OPT candidate needs D8 / Blue Card / contractor structure | Concerning (legitimacy-neutral; affects fit) |

Direct-hire posting on a major ATS with concrete tech specifics. Confidence high.

## H) Draft Application Answers

(Score 3.5 — below the 4.5 threshold for full Block H. Cover letter and salary script live in Blocks E + F above.)

---

## Keywords extraídas

AI Engineer, LLM, RAG, retrieval-augmented generation, Python, FastAPI, async, AWS, MLOps, vector database, Pinecone, Weaviate, Elasticsearch, LangChain, PyTorch, embeddings, evaluation, monitoring, SaaS, cross-functional, distributed teams, remote
