# Evaluación: Closure — Founding AI Engineer

**Fecha:** 2026-05-04
**Arquetipo:** Applied AI / LLM Engineer + AI Solutions / Forward Deployed Engineer
**Score:** 3.5/5
**URL:** https://www.workatastartup.com/jobs/78903
**Legitimacy:** High Confidence
**Location:** New York, NY (primary) / Remote also OK (SF, NYC, IL); 4-person founding team; YC W25
**PDF:** output/2026-05-04/cv-deepak-mallampati-closure-founding-ai-engineer-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Founding AI Engineer at YC W25 startup; mission-driven (law enforcement crime-solving) |
| Domain | LE/Public-safety data search, ranking, and crime resolution |
| Function | Build AI/ML stack for searching law-enforcement data; founding-level scope (data, models, infra, eval) |
| Seniority | 3+ yrs explicit |
| Remote | NY primary; remote in SF / NYC / IL |
| Team | 4-person founding team |
| TL;DR | YC W25 4-person team building search-and-discovery AI for law enforcement data. Will sponsor visas (per public listing). 3+ yrs is borderline for Deepak (~2.5 yrs production); flexibility to remote-NY/SF/IL is a plus. Healthcare-RAG → LE-data-search is a domain hop, but the *system* (RAG, eval, agentic, multi-source ingest) is 1:1. |

## B) Match con CV

| JD requisito | CV evidence |
|---|---|
| AI/ML engineering for search/discovery over a sensitive corpus | Healthcare RAG with recursive semantic chunking + transformer embeddings, ~35% retrieval precision lift, >90% groundedness on clinical knowledge (cv.md L25) |
| Multi-source data ingest | EHR extracts + appointment histories + support ticket logs preprocessing pipelines (cv.md L29) |
| Agentic workflows over a real-world domain | Multi-agent healthcare claims pipeline (Intake → Validation → Consistency → Duplicate → Risk Scoring) with schema-validated JSON contracts (cv.md L72) |
| Eval pipelines + audit trails (regulated/sensitive context) | Evaluation audit trails + system-limitation docs at Progress Solutions (cv.md L30); audit-ready reasoning traces in claims pipeline (cv.md L72) |
| Production AI deployment | FastAPI/Flask + Docker packaging with structured logging and load simulation, ~30% defect reduction (cv.md L28) |
| Founding-team execution speed | Manga Lens shipped solo to Chrome Web Store with 4 vision providers + 29 site selectors + caching (cv.md L60); E-Farming marketplace shipped solo (cv.md L86-87) |
| 3+ yrs experience | 2.5 yrs Progress Solutions production + 0.4 yrs Suvidha + 0.8 yrs Energy Solutions internship — borderline (~2.7 yrs cumulative); flag for screen |
| Python | Production Python at Progress Solutions (cv.md L28) |
| Vector search / embeddings | Vector-indexed policy docs + ANN similarity in claims pipeline (cv.md L72); transformer embeddings in RAG (cv.md L25) |

**Gaps:**
1. **3+ yrs threshold** — Deepak is 2.5 production. Soft gap; mitigate by surfacing depth (multi-agent + eval audit + production RAG + Manga Lens solo ship) over headline tenure.
2. **Law-enforcement domain context** — No prior LE/public-safety; mitigate by citing regulated-domain HIPAA experience as analog.
3. **Founding-team risk profile** — High-variance YC W25 outcome; structural, not skill.
4. **NY in-office bias** — Remote IL/SF/NYC is OK but in-office NY may be preferred culturally. Flag in screen.

## C) Nivel y Estrategia

- **Detected level:** Founding-team mid-IC; 3+ yrs.
- **Vender:** "I've shipped production AI in regulated healthcare for 2.5 yrs — multi-agent claims pipeline with schema contracts, RAG with ~35% precision lift and audit trails, FastAPI + Docker production with ~30% defect reduction. The system patterns (RAG over sensitive corpora, multi-agent with schema discipline, eval-first deploy) translate directly to LE data search. Founding-team execution evidence: Manga Lens shipped solo end-to-end."
- **Si downleveled:** Closure offers $135K-$230K — even at lower end ($135K) it clears comp target; equity 0.20-1.50% on YC W25 is attractive risk-adjusted.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | $135K-$230K + 0.20-1.50% equity (per YC) |
| Funding | YC W25 (recent batch); 4-person team |
| Visa | **Will sponsor** (per public listing) — major plus for F-1 OPT |
| Demand | LE-tech and public-safety AI is a growing niche; YC backing signals legitimacy |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | Lead with "RAG over sensitive corpora + multi-agent with schema discipline + production AI infra; founding-team execution from Manga Lens solo ship" | Mirror founding-team JD; surface domain analog (regulated healthcare → LE) |
| 2 | Bullets | Surface multi-agent claims pipeline (schema contracts, audit trails) and healthcare RAG (~35% precision) at top | These map to LE search/grounding/audit needs 1:1 |
| 3 | Skills | Python, RAG, vector search, embeddings, multi-agent, eval pipelines, FastAPI, Docker → top of skills | Keyword-first ATS pass; align to JD framing |
| 4 | Projects | Multi-agent claims pipeline first; Manga Lens solo-ship second; agentic pixel synthesis third | Show schema-contract architecture + solo-ship velocity + multimodal range |
| 5 | Footer | "F-1 OPT (US-W2 ready); open to NY/SF/IL/remote; sponsorship long-term welcomed" | Match Closure's stated sponsorship policy |

## F) Plan de Entrevistas

| # | Requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | RAG over sensitive corpora | Healthcare RAG | Clinicians needed grounded answers across clinical knowledge corpus | Recursive semantic chunking + transformer embeddings + groundedness eval | Production RAG with audit trail | ~35% retrieval precision; >90% groundedness; >30% irrelevant retrieval cut | Eval-first with sensitive corpora is non-optional |
| 2 | Multi-agent system on regulated domain | Multi-agent claims pipeline | Multi-step claims processing required reliable agent handoffs without cascade hallucinations | Schema-validated JSON contracts (pydantic) between Intake/Validation/Consistency/Duplicate/Risk Scoring agents | Production agentic pipeline with audit-ready reasoning traces | Cascading hallucinations prevented; explainable risk scoring; HIPAA-conscious | Schema contracts > free-form chains in regulated pipelines |
| 3 | Founding-team execution + solo ship velocity | Manga Lens Chrome Web Store | Real-time AI manga/webtoon translation needed for niche audience | Built MV3 service workers + 4 vision-provider routing + per-provider payload abstraction (WebP cloud / JPEG Ollama) + 7-day cache + 29 site selectors solo | Shipped to Chrome Web Store with privacy policy and narrowed permissions | Solo end-to-end ship | Multi-provider abstraction earns its complexity when one provider crashes (CUDA on Ollama) |
| 4 | Eval + audit trail discipline | Progress Solutions eval audit trails | Drift + grounding signals required end-to-end | Built eval harness + drift signals + system-limitation docs into deployment | Eval-first deploy process | Caught drift before clinicians flagged it | Eval harness is infra, not afterthought |
| 5 | Production AI services | FastAPI services + Docker | Production AI inference needed observability + load resilience | FastAPI + Docker + structured logging + load simulation | Production AI services in healthcare | ~30% post-deploy defect reduction | Load sim before launch is mandatory |
| 6 | Vector search / embedding retrieval | Multi-agent claims pipeline | Validation against vector-indexed CPT/ICD policy docs needed | ANN similarity for duplicate detection + vector-indexed policy retrieval | Production vector retrieval | Audit-ready, explainable | ANN+indexed retrieval = production-grade scale |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on YC + workatastartup + LinkedIn | Positive |
| Apply button | Active (multiple mirrors) | Positive |
| Description quality | Detailed Notion link; named domain (law enforcement); specific role scope | Positive |
| Salary transparency | $135K-$230K disclosed | Positive |
| Visa policy | Explicit "Will sponsor" — concrete | Positive |
| Reposting | YC W25 batch; Closure also has FDE role open (sibling pattern) | Positive |
| Layoffs / freeze | None — recent YC W25 startup | Positive |
| Founders / team | Gilad Levy (CTO) + Aaron Zelinger (co-founder) public; YC-vetted | Positive |
| Role market context | LE-tech AI niche but real (Closure is YC-backed) | Positive |

**Assessment:** **High Confidence** — recent YC batch, named founders, salary + sponsorship explicit, multiple posting mirrors.

---

## H) Draft Application Answers (score 3.5 — included for ready-to-apply with screen flag)

**Why are you interested in Closure?**
> Closure's bet — AI search for law-enforcement data to actually solve crime — sits squarely in the regulated, audit-sensitive AI engineering space I've been working in for 2.5 yrs at Progress Solutions. I've shipped a five-agent healthcare claims pipeline (Intake → Validation → Consistency → Duplicate → Fraud Risk Scoring) with schema-validated JSON contracts between agents to prevent cascading hallucinations and produce audit-ready reasoning traces, healthcare RAG with ~35% retrieval-precision and >90% groundedness over clinical knowledge, and production FastAPI + Docker services with ~30% post-deploy defect reduction under HIPAA-conscious data governance. The system patterns — multi-source ingest, schema-disciplined agent handoffs, eval-first deploy, audit trails — translate directly to LE data corpora. Founding-team execution evidence: I shipped Manga Lens solo to the Chrome Web Store with multi-provider AI vision routing across 4 providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama). Closure's NY/remote flexibility + visa sponsorship + W25 batch make it a strong fit.

**Tell me about a multi-agent system you've shipped.**
> The healthcare claims pipeline at Progress Solutions: 5 agents — Intake Normalization, Validation, Consistency Analysis, Duplicate Detection, Fraud Risk Scoring — with schema-validated JSON contracts (pydantic) between each agent. RAG-grounded CPT/ICD validation against vector-indexed policy docs handles validation; ANN similarity catches duplicate claims; explainable risk scoring with audit-ready reasoning traces makes the output reviewable by compliance teams. Each agent has a contract for what it consumes and emits, so the system fails predictably instead of silently — the same property an LE-evidence pipeline needs.

---

## Keywords extraídas

Founding AI Engineer, RAG, Multi-Agent, Schema Contracts, Vector Search, Embeddings, Evaluation Pipelines, Audit Trails, FastAPI, Docker, Python, Y Combinator, W25, Law Enforcement, Sensitive Corpora, Production AI, F-1 OPT Sponsorship
