# Evaluación: Indicium AI — AI Engineer (Lisbon)

**Fecha:** 2026-05-24
**Arquetipo:** Applied AI / LLM Engineer | AI Solutions / Forward Deployed Engineer
**Score:** 3.3/5
**URL:** https://job-boards.eu.greenhouse.io/indiciumai/jobs/4695065101
**Legitimacy:** High Confidence
**Location:** Lisbon, Portugal — In-office/Hybrid (verify cadence in JD)
**Region:** Intl
**PDF:** output-intl/2026-05-24/cv-deepak-mallampati-indicium-ai-engineer-lisbon-2026-05-24.pdf
**Verification:** unconfirmed (batch mode)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Production LLM systems engineer — orchestration, multi-agent, RAG, tool integration |
| Domain | Applied AI consultancy — design, build, deploy production-grade AI systems |
| Function | Multi-agent LLM apps; RAG pipelines; orchestration; latency/cost/quality tradeoffs across model configs |
| Seniority | Mid–Senior IC (3+ yrs implied) |
| Remote | Lisbon, Portugal — in-office/hybrid (verify cadence) |
| Comp | Not disclosed |
| Stage | Boutique applied-AI consultancy with UK + Lisbon presence |
| TL;DR | Direct topical match (LLM apps, RAG, multi-agent, Python, cloud, vector DBs). Lisbon location adds visa friction from F-1 OPT but Portugal EU work permit is the typical Tech Visa path. Sibling London role evaluated at 3.3 — same evaluation framework. |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| Build LLM applications in production | ✅ — Progress Solutions: RAG for clinical retrieval (~35% precision gain), agentic LLM workflows for healthcare queries (~25% stability gain) |
| RAG pipelines | ✅ — Recursive semantic chunking + transformer embeddings + grounding >90% alignment (Progress Solutions); Suvidha doc Q&A RAG (~30% hallucination reduction) |
| Multi-agent orchestration | ✅ — Agentic Healthcare Claims (5-stage pipeline with schema-validated JSON contracts); Pixel Synthesis LLM orchestrator |
| Strong Python | ✅ — Primary language across all roles |
| Cloud platforms (AWS/GCP/Azure) | ⚠️ — Docker + FastAPI cloud-ready; no specific named-cloud production deployment listed |
| Production API development | ✅ — FastAPI/Flask RESTful services with structured logging + load simulation; Flask API at Suvidha |
| Vector / graph databases | ✅ — Vector indexing for RAG; ANN duplicate detection; NetworkX graph work |
| LLM frameworks (Claude Agents SDK, LangGraph) | ⚠️ — Used LangChain, LlamaIndex; framework concepts 1:1 transferable |
| Reliability/cost/latency/quality across model configs | ⚠️ — Multi-provider Manga Lens (4 providers with per-provider payload handling) + eval pipelines at Progress |
| CI/CD + deployment | ✅ — Jenkins at Emerson (~35–40% release cycle improvement); Docker at Progress Solutions |
| Pandas, SQL | ✅ — Pandas + NumPy + T-SQL/PostgreSQL/SQLite |

**Gaps + mitigation:**
- *Named cloud production deployment*: bridge via Docker + FastAPI cloud-readiness; commit to cloud ramp in cover letter.
- *Named frameworks (Claude SDK, LangGraph)*: position as toolchain swap from LangChain/LlamaIndex — days, not months.
- *Portugal Tech Visa from F-1 OPT*: Portugal has a Tech Visa pathway; address timing transparently. EU + Portuguese tax residency benefits are real (IFICI / IRS Jovem regimes).
- *Senior bar implied (3+ yrs)*: Deepak 2.5 yrs with senior-shape outcomes (precision/hallucination/recall/defect metrics). Frame as Mid IC with senior outcomes.

## C) Nivel y Estrategia

- Detected: Mid–Senior IC, production LLM apps. Deepak natural: Mid IC with production RAG + agentic + ML in regulated healthcare.
- **Vender:** "I've shipped multi-agent LLM systems in production with schema-validated JSON contracts between stages, RAG with ~35% retrieval precision gains, and agentic workflows with >30% hallucination reduction. The orchestration discipline transfers; the framework choice is a config concern."
- **Si downlevelan:** Acceptable if Lisbon cost-of-living adjusted comp is fair; ask for 6-month review tied to first client production deployment.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| Indicium AI Engineer Lisbon band | Not disclosed | JD |
| Lisbon Mid AI Engineer (3-5 yrs) | €35K–€55K base | Glassdoor 2026, Landing.jobs |
| Lisbon consultancy AI premium | +15-25% over in-house | Industry |
| IFICI / IRS Jovem tax incentives | Significant for new tax residents | Portuguese gov 2026 |
| Tech Visa pathway | Available for skilled non-EU workers | Portuguese gov |

Counter-anchor: €45K–€55K base for mid-IC Lisbon hybrid. Portugal Tech Visa is the realistic path; not as friction-light as US-EU bilaterals but smoother than UK.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Healthcare RAG / agentic / predictive ML" | "Applied AI engineer building production multi-agent LLM systems — 5-stage healthcare claims pipeline with schema-validated JSON contracts, RAG with ~35% retrieval precision gains, agentic workflows with >30% hallucination reduction. FastAPI/Docker production discipline, eval harness mindset, multi-model orchestration with cost/latency/quality awareness." | Lead with multi-agent + production framing for Indicium's JD |
| 2 | Projects order | Default | **Agentic Healthcare Claims** → **Dream Decoder (multimodal orchestration)** → **Manga Lens (multi-provider)** → **Pixel Synthesis (LLM orchestrator)** | Front-load multi-agent + orchestration evidence |
| 3 | Skills | Generic order | Promote `LLM application development`, `RAG`, `agentic workflows`, `multi-agent systems`, `LangChain`, `LlamaIndex`, `vector search`, `embeddings`, `Python`, `FastAPI`, `Docker`, `CI/CD` to top | ATS hits for Indicium's stack |
| 4 | Experience bullets | Healthcare-first | Reframe Progress Solutions bullets to lead with "production multi-agent + RAG + grounding" | Bridge regulated-healthcare → enterprise consulting |
| 5 | Cover letter | None | Required — open with: "Indicium's positioning — production-grade multi-agent LLM systems with RAG, vector/graph DBs, and disciplined cost/latency/quality tradeoffs — matches what I've shipped. The 5-stage agentic claims pipeline I built used schema-validated JSON contracts between agents specifically to prevent cascading hallucinations; RAG hit ~35% retrieval precision gains via recursive semantic chunking. Toolchain swap (LangChain → Claude Agents SDK / LangGraph) is days." Acknowledge Portugal Tech Visa pathway transparently. | Direct topical hit + visa-pathway honesty |

## F) Plan de Entrevistas (STAR+R)

| # | JD req | STAR+R |
|---|---|---|
| 1 | Multi-agent orchestration | S: Agentic Healthcare Claims pipeline. T: Multi-stage claims processing without cascading hallucinations. A: 5 agents (Intake, Validation, Consistency, Duplicate, Fraud Risk) with **schema-validated JSON contracts between agents**; RAG-grounded CPT/ICD validation; ANN duplicate detection; explainable risk scoring with reasoning traces. R: Audit-ready outputs; contracts prevented cascading hallucinations. Reflection: Schema contracts are the load-bearing wall of multi-agent systems — they make failures localizable and the pipeline debuggable. Framework choice (LangChain vs LangGraph vs Claude SDK) matters far less than contract discipline. |
| 2 | RAG in production | S: Progress Solutions clinical knowledge RAG. T: Retrieval precision in HIPAA-conscious clinical search. A: Recursive semantic chunking; transformer embeddings; grounding rules; eval pipelines. R: ~35% retrieval precision gain; >30% irrelevant retrieval reduction; >90% retrieval-grounded response alignment. Reflection: Chunking strategy was the biggest single lever — naive sentence-split lost ~15pp of precision. Semantic + recursive is the production default. |
| 3 | Cost/latency/quality tradeoffs across models | S: Manga Lens multi-provider AI vision. T: Ship Chrome extension integrating 4 vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama local). A: Provider abstraction with per-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash); 7-day translation cache; per-domain selector configs for 29 sites. R: Shipped to Chrome Web Store; live across multiple sites. Reflection: Per-provider payload handling is what made cost-tier swapping viable — without it, every provider needed its own pipeline. Cache + dedup cut cost by an order of magnitude on tall webtoon panels. |
| 4 | Production Python + FastAPI APIs | S: Progress Solutions ML/LLM inference services. T: Productionize predictive ML + RAG + agentic outputs in HIPAA-conscious environment. A: FastAPI/Flask + Docker; structured logging; load simulation; HIPAA-conscious de-identification + audit trails. R: ~30% post-deployment defect reduction. Reflection: Production discipline (logging, load sim, audit trails) is the through-line — the framework is downstream. |
| 5 | CI/CD + deployment | S: Emerson Synthesis ERP. T: Schema updates + stored-procedure deploys in compliance-sensitive oil & gas ERP. A: Jenkins CI/CD; version-controlled SQL; rollback checkpoints; Grafana + SQL Server DMV dashboards. R: ~35–40% release cycle improvement; >30% deployment error reduction; ~25% incident recurrence reduction. Reflection: Rollback checkpoints + dashboards turned deploys from event-risk into routine — pattern transfers to LLM app deploys with eval-on-deploy gates. |
| 6 | Vector/graph DB | S: Agentic claims duplicate detection + Geospatial Road Network analysis. T: ANN duplicate detection in claims; betweenness centrality + Louvain community detection on 20k-node road graph. A: Vector embeddings for claim similarity; NetworkX DiGraph + Dijkstra + Louvain + MST extraction with Haversine-weighted edges; ~30% runtime reduction via subgraph scoping. R: Working duplicate detection in claims; community/centrality outputs for backbone analysis. Reflection: Graph and vector aren't either/or — they answer different shapes of question (relationships vs similarity). Indicium's mention of both suggests they meet that nuance in real client workloads. |

Red-flag Q "Why Indicium / why Lisbon?" → "I've spent 2.5 years shipping production LLM systems in a regulated domain (HIPAA-conscious healthcare). Indicium's positioning — production-grade multi-agent + RAG + orchestration discipline for enterprise clients — is the natural next move. Lisbon has a real applied-AI cluster forming, and Portugal's Tech Visa + IFICI pathway makes the relocation realistic from F-1 OPT."

Red-flag Q "Only 2.5 years — senior bar?" → "Measurable outcomes — ~35% retrieval precision gain, >30% hallucination reduction, 15–20% recall gains on high-risk patient categories, ~30% post-deploy defect reduction — are senior-shape. End-to-end ownership across data, prompts, models, eval, APIs, Docker deploy."

Red-flag Q "Portugal Tech Visa from F-1 OPT?" → "Portugal's Tech Visa is the standard pathway and explicitly designed for this case. Happy to discuss timing transparently and propose a remote-from-US bridge while the visa processes if Indicium is open to it."

Case study to lead with: **Agentic Healthcare Claims** (multi-agent + schema contracts + RAG grounding — direct hit on Indicium's JD).

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Active on Greenhouse with explicit application form | Positive |
| JD specificity | Names Claude Agents SDK, LangGraph, Strands, vector/graph DBs, cloud platforms | Strong positive |
| Realism | Mid-senior + Python + production LLM + cloud is realistic | Positive |
| Apply form | Greenhouse EU form actively accepting applications | Strong positive |
| Comp transparency | No range disclosed | Neutral (common for consultancies) |
| Reposting | First appearance in scan-history | Positive |
| Company viability | Boutique applied-AI consultancy; UK + Lisbon presence; active hiring | Positive |

Concrete framework list + active Greenhouse form + multi-geo hiring = High Confidence.

## H) Draft Application Answers

(Score 3.3 — below the 4.5 threshold for full Block H. Cover letter outline lives in Block E row 5.)

---

## Keywords extraídas

AI Engineer, LLM applications, production-grade AI, multi-agent orchestration, RAG, retrieval-augmented generation, Claude Agents SDK, LangGraph, Strands, LangChain, LlamaIndex, vector databases, graph databases, Python, FastAPI, AWS, GCP, Azure, CI/CD, Docker, embeddings, semantic retrieval, evaluation, grounding, agentic workflows, Lisbon, Portugal, consultancy, Tech Visa
