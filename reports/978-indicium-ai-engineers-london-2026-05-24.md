# Evaluación: Indicium AI — AI Engineers (London)

**Fecha:** 2026-05-24
**Arquetipo:** Applied AI / LLM Engineer | AI Solutions / Forward Deployed Engineer
**Score:** 3.3/5
**URL:** https://job-boards.eu.greenhouse.io/indiciumai/jobs/4684638101
**Legitimacy:** High Confidence
**Location:** London, UK — In-office/Hybrid (verify cadence in JD)
**Region:** Intl
**PDF:** output-intl/2026-05-24/cv-deepak-mallampati-indicium-ai-engineers-london-2026-05-24.pdf
**Verification:** unconfirmed (batch mode)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Production LLM systems engineer — orchestration, multi-agent, RAG, tool integration |
| Domain | Applied AI consultancy — build production-grade AI systems for enterprise clients |
| Function | Design, build, deploy multi-agent LLM apps; orchestration layer; cost/latency/quality tradeoffs |
| Seniority | Mid–Senior IC (3+ yrs implied) |
| Remote | London, UK — in-office/hybrid (verify cadence) |
| Comp | Not disclosed |
| Stage | Boutique applied-AI consultancy with UK + LATAM presence |
| TL;DR | Very strong topical fit (LLM apps, RAG, multi-agent, Python, cloud, vector DBs) but UK location + visa friction + likely senior bar cap the score. F-1 OPT → UK Skilled Worker requirement is real. |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| Build LLM applications in production | ✅ — Progress Solutions: RAG for clinical retrieval (~35% precision gain), agentic LLM workflows for healthcare queries (~25% stability gain) |
| Practical RAG implementation | ✅ — Recursive semantic chunking + transformer embeddings + grounding >90% alignment (Progress Solutions); Suvidha doc Q&A RAG (~30% hallucination reduction, >85% accuracy) |
| Multi-step workflow / multi-agent orchestration | ✅ — Agentic Healthcare Claims (5-stage pipeline with schema-validated JSON contracts between agents); Pixel Synthesis LLM orchestrator decomposing prompts into generation tasks |
| Strong Python | ✅ — Primary language across all roles |
| Cloud platform knowledge (AWS/GCP/Azure) | ⚠️ — Docker + FastAPI ready for cloud deploy; no specific named-cloud production deployment listed on CV |
| Production API development | ✅ — FastAPI/Flask RESTful services with structured logging + load simulation (Progress Solutions); Flask API at Suvidha; Bottle CRUD app |
| Vector / graph databases | ✅ — Vector indexing for RAG; ANN duplicate detection in claims pipeline; NetworkX graph work in geospatial analysis |
| LLM frameworks (Claude Agents SDK, LangGraph, Strands) | ⚠️ — Used LangChain, LlamaIndex (CV). Claude Agents SDK / LangGraph / Strands not on CV but framework concepts are 1:1 transferable |
| Latency/cost/quality tradeoffs | ⚠️ — Implicit (multi-provider Manga Lens with WebP for cloud + JPEG for Ollama; eval pipelines at Progress Solutions); not explicitly named as a discipline |
| CI/CD and deployment tools | ✅ — Jenkins CI/CD at Emerson (~35–40% release-cycle improvement); Docker containerization at Progress Solutions |
| Data tools (pandas, SQL) | ✅ — Pandas + NumPy + T-SQL/PostgreSQL/SQLite on CV |

**Gaps + mitigation:**
- *Production cloud deployment (AWS/GCP/Azure specifically named)*: bridge via Docker + FastAPI + structured logging is cloud-ready; commit in cover letter to ramp on whichever cloud Indicium standardizes on.
- *Named LLM frameworks (Claude Agents SDK, LangGraph, Strands)*: position as toolchain choice — "I've built equivalent orchestration with LangChain/LlamaIndex + custom JSON-contract patterns. Framework swap is days, not months."
- *UK Skilled Worker visa from F-1 OPT*: real friction. Address head-on in cover letter; if Indicium has a US entity or remote-from-US option, propose that timeline.
- *Senior bar implied (~3+ yrs)*: Deepak is 2.5 yrs but with measurable production outcomes (precision, hallucination, recall, defect reduction). Frame as "Mid IC with senior-shape outcomes."

## C) Nivel y Estrategia

- Detected: Mid–Senior IC, production LLM apps focused. Deepak natural: Mid IC with production RAG + agentic + ML systems in regulated healthcare.
- **Vender:** "I've shipped multi-agent LLM systems in production — 5-stage healthcare claims pipeline with schema contracts between agents, RAG with ~35% retrieval precision gains, agentic workflows with >30% hallucination reduction. The orchestration patterns transfer; the framework choice (Claude Agents SDK vs LangGraph) is a config concern, not a rewrite."
- **Si downlevelan:** Accept if comp is fair for UK mid-IC; ask for explicit 6-month review tied to first production client deployment.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| Indicium AI Engineer band | Not disclosed | JD |
| UK London Mid AI Engineer (3-5 yrs) | £60K–£90K base | Glassdoor 2026, Levels.fyi |
| UK consultancy AI Engineer premium | +10-20% over in-house | Industry |
| Visa cost (UK Skilled Worker) | £~5K-£10K employer + ISC charge | UK Gov 2026 |
| LLM orchestration demand | Very high; growing fast 2026 | Industry trends |

Counter-anchor: £70K–£85K base for mid-IC London hybrid.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Healthcare RAG / agentic / predictive ML" | "Applied AI engineer building production multi-agent LLM systems — 5-stage healthcare claims pipeline with schema-validated JSON contracts, RAG with ~35% retrieval precision gains, agentic workflows with >30% hallucination reduction. FastAPI/Docker production discipline, eval harness mindset, cost/latency/quality tradeoff awareness." | Lead with multi-agent + production framing matching Indicium's JD |
| 2 | Projects order | Default | **Agentic Healthcare Claims** → **Dream Decoder (multimodal orchestration)** → **Manga Lens (multi-provider)** → **Pixel Synthesis (LLM orchestrator)** | Front-load multi-agent + orchestration evidence |
| 3 | Skills | Generic order | Promote `LLM application development`, `RAG`, `agentic workflows`, `multi-agent systems`, `LangChain`, `LlamaIndex`, `vector search`, `embeddings`, `Python`, `FastAPI`, `Docker`, `CI/CD` to top | ATS hits for Indicium's stack |
| 4 | Experience bullets | Healthcare-first | Reframe Progress Solutions bullets to lead with "production multi-agent + RAG + grounding" rather than "healthcare RAG" | Bridge regulated-healthcare → enterprise consulting |
| 5 | Cover letter | None | Required — open with: "Indicium's positioning — production-grade LLM systems with multi-agent orchestration, RAG, and disciplined cost/latency/quality tradeoffs — matches what I've shipped. The 5-stage agentic claims pipeline I built used schema-validated JSON contracts between agents specifically to prevent cascading hallucinations; the RAG layer hit ~35% retrieval precision gains via recursive semantic chunking. Toolchain swap (LangChain → Claude Agents SDK / LangGraph) is days." Acknowledge UK visa transparency. | Direct topical hit + tool-swap framing + visa honesty |

## F) Plan de Entrevistas (STAR+R)

| # | JD req | STAR+R |
|---|---|---|
| 1 | Multi-agent orchestration | S: Agentic Healthcare Claims pipeline. T: Multi-stage claims processing without cascading hallucinations. A: 5 agents (Intake Normalization, Validation, Consistency Analysis, Duplicate Detection, Fraud Risk Scoring) with **schema-validated JSON contracts between agents**; RAG-grounded CPT/ICD validation against vector-indexed policies; ANN duplicate detection; explainable risk scoring with reasoning traces. R: Audit-ready outputs; contracts prevented cascading hallucinations. Reflection: Schema contracts are the unsung hero of multi-agent systems — they make failures localizable and the whole pipeline debuggable. Framework choice (LangChain vs LangGraph vs Claude SDK) matters far less than the contract discipline. |
| 2 | RAG in production | S: Progress Solutions clinical knowledge RAG. T: Retrieval precision for HIPAA-conscious clinical search. A: Recursive semantic chunking; transformer embeddings; grounding rules; evaluation pipelines. R: ~35% retrieval precision gain; >30% irrelevant retrieval reduction; >90% retrieval-grounded response alignment. Reflection: Chunking strategy was the biggest lever — naive sentence-split lost ~15pp of precision. Semantic + recursive is the production default. |
| 3 | LLM orchestration / cost/latency/quality tradeoffs | S: Manga Lens multi-provider AI vision. T: Ship a Chrome extension that integrates 4 vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama). A: Provider abstraction with per-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash); 7-day translation cache; per-domain selector configs for 29 sites; narrowed host permissions for privacy. R: Shipped to Chrome Web Store; live across 29 manga/webtoon sites. Reflection: Per-provider payload handling is what made cost-tier swapping viable — without it, every provider needed its own pipeline. The cache + dedup cut cost by an order of magnitude on tall webtoon panels. |
| 4 | Production Python + FastAPI APIs | S: Progress Solutions ML/LLM inference services. T: Productionize predictive ML + RAG + agentic outputs in HIPAA-conscious environment. A: Packaged with FastAPI/Flask + Docker; structured logging; load simulation; HIPAA-conscious de-identification + audit trails. R: ~30% post-deployment defect reduction. Reflection: Production discipline (logging, load sim, audit trails) is the through-line — the framework (FastAPI vs Flask) and the deploy target (Docker vs K8s) are downstream concerns. |
| 5 | CI/CD + deployment | S: Emerson Synthesis ERP. T: Schema updates + stored-procedure deploys in a compliance-sensitive oil & gas ERP. A: Jenkins CI/CD; version-controlled SQL scripts; rollback checkpoints; performance dashboards via SQL Server DMVs + Grafana. R: ~35–40% release cycle improvement; >30% deployment error reduction; ~25% incident recurrence reduction. Reflection: Rollback checkpoints + dashboards turned deploys from event-risk into routine — that pattern transfers directly to LLM app deploys where prompt regression can be invisible without eval-on-deploy gates. |
| 6 | Computer vision / multimodal | S: YOLOv8 Driver Drowsiness Detection + Suvidha video summarization. T: Real-time fatigue monitoring + 5,000+ recorded sessions for video review reduction. A: Replaced two-stage CNN with unified YOLOv8 (~30% latency reduction); sliding-window confidence aggregation (~25% false positive reduction); transformer-based hierarchical summarization with timestamp-aligned clip extraction at Suvidha. R: 60–70% manual review-time reduction; ~85% highlight alignment with human curation. Reflection: Unifying detection + classification cut the failure surface; timestamp alignment was what made the summaries verifiable and trustable. |

Red-flag Q "Why Indicium / why applied AI consultancy?" → "I've spent 2.5 years shipping production LLM systems in a regulated domain (HIPAA-conscious healthcare). Indicium's positioning — production-grade multi-agent + RAG + orchestration discipline for enterprise clients — is the natural next move. Regulated-healthcare experience transfers as a discipline (audit trails, eval gates, low-tolerance for hallucination), not just a vertical."

Red-flag Q "Only 2.5 years — senior bar?" → "The measurable outcomes — ~35% retrieval precision gain, >30% hallucination reduction, 15–20% recall gains on high-risk patient categories, ~30% post-deploy defect reduction — are senior-shape. I've owned end-to-end delivery across data, prompts, models, eval, APIs, and Docker deploy. I'm direct about the tenure gap and confident about the production track record."

Red-flag Q "UK Skilled Worker visa from F-1 OPT?" → "I'm currently US-based on F-1 OPT and would need UK Skilled Worker sponsorship to relocate. Happy to discuss timing transparently; if Indicium has a remote-from-US option during the sponsorship process, that could de-risk the timeline."

Case study to lead with: **Agentic Healthcare Claims** (multi-agent + schema contracts + RAG grounding — direct hit on Indicium's job description).

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Active on Greenhouse; recently surfaced via Level 3 WebSearch | Positive |
| JD specificity | Names concrete frameworks (Claude Agents SDK, LangGraph, Strands), vector/graph DBs, cloud platforms, multi-agent orchestration | Strong positive |
| Realism | Mid-senior bar + Python + production LLM + cloud is realistic and achievable | Positive |
| Apply form | Greenhouse EU board active with form | Positive |
| Comp transparency | No range disclosed | Neutral (common for consultancies) |
| Reposting | First appearance in scan-history | Positive |
| Company viability | Boutique applied-AI consultancy; UK + Lisbon presence; active hiring across geos | Positive |
| Role-company fit | LLM application engineering matches consultancy's stated practice areas | Positive |

Concrete framework list + active Greenhouse form + multi-geo presence = High Confidence.

## H) Draft Application Answers

(Score 3.3 — below the 4.5 threshold for full Block H. Cover letter outline lives in Block E row 5.)

---

## Keywords extraídas

AI Engineer, LLM applications, production-grade AI, multi-agent orchestration, RAG, retrieval-augmented generation, Claude Agents SDK, LangGraph, Strands, LangChain, LlamaIndex, vector databases, graph databases, Python, FastAPI, AWS, GCP, Azure, CI/CD, Docker, embeddings, semantic retrieval, latency cost quality, evaluation, grounding, agentic workflows, London, consultancy
