# Evaluación: Snorkel AI — Applied AI Engineer, AI Solutions

**Fecha:** 2026-04-28
**Arquetipo:** Applied AI / LLM Engineer (Customer-Facing AI Solutions)
**Score:** 3.7/5
**URL:** https://job-boards.greenhouse.io/snorkelai/jobs/5709067004
**Legitimacy:** High Confidence
**Location:** Hybrid — New York City, NY / Redwood City, CA / San Francisco, CA
**PDF:** output/2026-04-28/cv-deepak-mallampati-snorkelai-ai-solutions-2026-04-28.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI / FDE-style — customer-facing AI/ML implementation w/ Python + RAG + LangGraph |
| Domain | Enterprise AI Solutions (Snorkel platform: data-centric AI + foundation model fine-tuning) |
| Function | Build AI/ML solutions for customers; production Python; RAG; LangGraph/LlamaIndex/CrewAI; vector DBs |
| Seniority | 3+ yrs customer-facing AI/ML implementation (0.5-yr stretch from 2.5) |
| Location | Hybrid — NYC / Redwood City / SF |
| Comp | $172K–$300K USD + equity (Tier 1) |
| TL;DR | Excellent stack overlap (Python + RAG + agentic + Hugging Face + vector DBs). Customer-facing axis is closest to FDE archetype on Deepak's list. 0.5-yr stretch + Snorkel-specific weak-supervision tooling is rampable. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| 3+ yrs customer-facing AI/ML | 2.5 yrs Progress Solutions + clinical SME collab + indie shipping (cv.md L22-30, L60-66) — 0.5-yr stretch |
| Python + SE fundamentals (modular, testing, profiling, packaging) | Python + FastAPI/Flask + Docker + structured logging (cv.md L12-13, L29) |
| pydantic, mypy, pytest, poetry, FastAPI, msgspec | FastAPI on CV; pydantic schema-validated JSON contracts in agentic pipeline (cv.md L26); pytest + typing implicit in production work |
| Ray, Airflow (ML orchestration) | **GAP** — no Ray/Airflow specific; transferable from FastAPI + Docker + scheduled inference |
| scikit-learn (classical ML) | Care engagement scoring + patient no-show risk models w/ classical ML (cv.md L27-28) |
| PyTorch (deep learning) | YOLOv8 drowsiness detection + transformer-based video summarization (cv.md L43-46) |
| Hugging Face Transformers | Healthcare RAG transformer embeddings (cv.md L25); Manga Lens multi-vendor (cv.md L60) |
| FAISS, Chroma, Weaviate | Vector retrieval for healthcare RAG (cv.md L25); claims pipeline ANN (cv.md L72) |
| LlamaIndex, LangGraph, CrewAI | Agentic workflows + multi-agent orchestration (cv.md L26, L72) — framework-equivalent |
| pandas, Spark | pandas on CV; Spark **light gap**, transferable from data pipeline experience |

**Gaps:**
1. **3+ yrs customer-facing** — 0.5-yr stretch. Mitigation: clinical SME collaboration on RAG eval + 3 shipped products = customer-facing equivalent.
2. **Snorkel weak-supervision tooling** — proprietary, ramp item.
3. **Ray + Spark** — light gap; orchestration concepts transfer from FastAPI + Docker.

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC (3+ yrs); BS quantitative.
- **Vender:** "Applied AI engineer with healthcare-regulated RAG (~35% precision), agentic workflows (>30% hallucination reduction), production FastAPI/Docker, plus 3 shipped indie AI products." Frame customer-facing as clinical-SME collab + Manga Lens public ship.
- **Si downleveled:** Accept; comp band starts at $172K (Tier 1) which is competitive for mid IC.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | $172K–$300K + equity (wide band; Tier 1 SF Bay) |
| Funding / stage | Snorkel AI — Series C+, established, profitable enterprise AI |
| Visa | Application asks "Do you require sponsorship now or in the future?" — soft positive |
| Demand trend | Data-centric AI + foundation-model fine-tuning is a real enterprise budget line (regulated industries especially) |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Applied AI engineer (Master's, 2.5 yrs) building production LLM/RAG and agentic systems in regulated healthcare; FastAPI + Docker; classical ML + foundation models." | Mirror "Applied AI stack across classical ML, deep learning, foundation models" |
| 2 | Bullets | Lead Progress Solutions with healthcare RAG + agentic workflows + clinical SME collab + audit trails | Customer-facing + JD-keyword first |
| 3 | Skills | Move RAG, LangGraph/LangChain, LlamaIndex, FAISS, Hugging Face, Python, FastAPI, scikit-learn, PyTorch, Docker to top | JD-keyword density |
| 4 | Projects | Healthcare claims agentic pipeline + care engagement scoring + Manga Lens shipped + Dream Decoder eval | Customer-facing + production-shipped |
| 5 | Footer | "US-based, F-1 OPT — open to sponsorship; NYC/SF/Redwood hybrid OK" | Address location + visa upfront |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | RAG + vector DB + retrieval accuracy | Healthcare RAG @ Progress | Clinical knowledge retrieval w/ low-recall baseline | Recursive semantic chunking + transformer embeddings + retrieval-grounded eval | Production RAG + audit trail | ~35% retrieval precision; >90% groundedness | Eval-first chunking + grounded answers > naive embedding baseline |
| 2 | Agentic / orchestration | Healthcare claims agentic pipeline | Manual review w/ cascading hallucination risk | 5-agent pipeline + schema-validated JSON contracts + RAG grounding | Production multi-agent system | >30% hallucination reduction; ~25% stability | Schema contracts > free-form loops |
| 3 | Customer-facing AI/ML implementation | Care engagement + no-show risk @ Progress | Clinical stakeholders need explainable risk models | scikit-learn + threshold tuning + feature explanations + clinical SME review | Production model w/ clinical sign-off | 15-20% recall gain on high-risk cohorts | Clinical SME review > pure ML metrics in regulated domains |
| 4 | Foundation models + Hugging Face | Manga Lens 4-vendor + healthcare RAG embeddings | Multi-provider LLM + embeddings stack | Per-provider abstraction + payload routing + cache | Shipped Chrome Web Store | 29 sites + active users | Abstract at provider boundary |
| 5 | Production engineering | Progress FastAPI/Docker | HIPAA-conscious inference services | Structured logging + load sim + Docker | ~30% defect reduction | Logging + load-sim before launch saves on-call cost |

**Story Bank:** Append "Customer-facing clinical SME collab" + "Schema-contract agent pipeline" to story-bank.md.

**Red-flag questions:**
- "Snorkel weak-supervision experience?" → "No direct Snorkel platform, but data-centric ML mindset (eval-first, SME-in-the-loop, audit trails) is the same philosophy. Eager to ramp on Snorkel's specific weak-supervision primitives."
- "Customer-facing track record?" → "Clinical SMEs at Progress Solutions (radiologists, claims reviewers) + Manga Lens public shipping (29 sites, active users). Comfortable owning customer interactions, demos, scoping."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Live Greenhouse + Snorkel careers | Positive |
| Apply button | Active | Positive |
| Description quality | Specific (Python stack, vector DBs, LangGraph/LlamaIndex/CrewAI, Tier 1 comp) | Positive |
| Salary transparency | $172K–$300K disclosed | Positive |
| Visa policy | App asks visa question — soft positive | Positive |
| Layoffs / freeze | None at Snorkel | Positive |
| Role market context | Customer-facing Applied AI is core Snorkel revenue function | Positive |

**Assessment:** **High Confidence** — Snorkel established, comp transparent, stack-coherent.

## H) Draft Application Answers

**Q: Why this role?**
> "Snorkel's data-centric AI mindset matches how I've shipped production LLM systems for 2.5 years: eval-first, SME-in-the-loop, audit trails over vibe iteration. Healthcare RAG + agentic workflows + classical risk models — the full applied stack — and customer-facing clinical SME collaboration. Ready to translate that into Snorkel-platform AI solutions for regulated enterprises."

**Q: Most relevant project?**
> "Agentic Healthcare Claims pipeline: 5-agent system (Intake → Validation → Consistency → Duplicate Detection → Risk Scoring) with schema-validated JSON contracts that prevent cascading hallucinations. Built with FastAPI + Docker + RAG grounding on CPT/ICD; clinical SMEs validated each agent's outputs. Same pattern (data-centric eval + SME loops + production rigor) applies directly to Snorkel customer engagements."

**Q: Work authorization?**
> "US-based on F-1 OPT; authorized to work in the United States now. Will require future sponsorship — open to discussing timing during the screen."

---

## Keywords extraídas

Applied AI Engineer, AI Solutions, Customer-Facing, Python, FastAPI, pydantic, pytest, scikit-learn, PyTorch, Hugging Face Transformers, FAISS, Chroma, Weaviate, LlamaIndex, LangGraph, CrewAI, RAG, Agentic, Snorkel AI, Foundation Models, NYC/SF/Redwood Hybrid, Mid IC.
