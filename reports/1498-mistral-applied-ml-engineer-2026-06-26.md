# Evaluación: Mistral AI — Applied AI, Machine Learning Engineer

**Fecha:** 2026-06-26
**Arquetipo:** Applied AI / LLM Engineer (primary) + AI Solutions / Forward Deployed Engineer (secondary)
**Score:** 3.6/5
**URL:** https://jobs.lever.co/mistral/e6accd7d-27d5-45f0-9f35-3454064374af
**Legitimacy:** High Confidence
**Location:** Seoul, South Korea — On-site (new APAC market entry)
**Region:** Intl
**PDF:** output-intl/2026-06-26/cv-deepak-mallampati-mistral-applied-ml-engineer-2026-06-26.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Applied AI / LLM Engineer + Forward Deployed Engineer |
| Domain | Applied AI / agentic + LLMOps (customer deployment of frontier LLMs) |
| Function | Build + deploy + consult (hands-on production integration with customers) |
| Seniority | Mid IC (2+ yrs IC, PhD/master) — matches candidate's natural level |
| Remote | On-site Seoul (Solutions team; Mistral's first Korea footprint) |
| Team size | Applied AI Engineering team (Solutions org); Mistral ~250+ globally |
| TL;DR | Customer-facing Applied AI engineer deploying Mistral LLMs into production at Korean enterprises — fine-tuning, RAG, agentic use cases, open-source contributions. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Veredicto |
|------------------|-----------------|-----------|
| PhD/master en AI/data science | M.S. Computer Science, Kent State (GPA 3.70), ML/GenAI research assistant | ✅ Strong |
| 2+ yrs IC en AI products | 4+ yrs (Progress Solutions, Vanguard, Emerson) | ✅ Exceeds |
| Fine-tuning LLMs | Qwen3-27B 4-bit QLoRA on H100; LoRA/QLoRA/PEFT in skills | ✅ Strong |
| Advanced RAG / agentic use cases | Healthcare RAG w/ cross-encoder re-ranking; conductor–subagent agentic systems (−42% tokens) | ✅ Bullseye |
| Deep ML/LLM concepts | NER, summarization, drift detection, RAGAS/BERTScore evals | ✅ Strong |
| Deploy LLM/NLP apps | 12 APIs/microservices @ Vanguard, 100k+ req/day; FastAPI packaging | ✅ Strong |
| Python | Primary language | ✅ |
| PyTorch deep learning | PyTorch/TensorFlow/Keras in skills | ✅ |
| LangChain + vector DBs | LangChain/LangGraph; FAISS/Pinecone/Weaviate | ✅ Strong |
| API + back-end + front-end integration | FastAPI/Flask + React | ⚠️ Partial (front-end light) |
| Open-source contributions (ideal) | MangaLens Chrome ext (live, 29+ sites); career-ops | ✅ Demonstrable |
| Customer/Forward-Deployed experience (ideal) | Client-facing healthcare/enterprise delivery; cross-team @ Vanguard | ⚠️ Adjacent (not formal FDE title) |

**Gaps:**
1. **Formal customer-facing/pre-sales title** — *nice-to-have.* Adjacent experience (cross-functional delivery, enterprise stakeholders). Mitigation: frame Progress Solutions + Vanguard work as embedded delivery; lead with MangaLens as a shipped product owned end-to-end.
2. **Front-end depth** — *nice-to-have* here (role is ML-weighted, front-end is "best integration" not core). React covers the baseline. Mitigation: emphasize full-stack delivery via FastAPI + React in healthcare RAG demos.
3. **Korean-market / on-site Seoul** — *hard logistical blocker* (see Red Flags). Not a skills gap.

## C) Nivel y Estrategia

- **JD level:** mid IC (2+ yrs). **Candidate natural level for Applied AI:** mid-to-senior — strong overlap; no down-level risk on skills.
- **"Sell senior without lying":** lead with measurable production outcomes — 40% hallucination reduction / 92% precision over millions of regulatory docs, 42% token reduction via agentic orchestration, RAGAS/BERTScore eval framework. These signal production discipline beyond years.
- **"If down-leveled":** comp at a frontier lab + equity is the draw; accept mid IC if equity and 6-month review are clear. But location economics (see D) dominate this decision, not level.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Mistral SWE base (Paris) | €114K–€142K+ | Levels.fyi |
| Mistral SWE total (Paris) | up to €250K+ senior | jobsbyculture / Levels.fyi |
| Mistral US median (H1B LCA FY26) | $225K | h1bgrader |
| Seoul-based comp | Not disclosed; competitive cash + equity + perks ($200 meals, $90 gym, $120 transit) | JD |
| Demand trend | Very high — frontier-lab Applied AI / FDE roles are among the hottest 2026 segments | market |

Comp is competitive for a well-funded frontier lab; Seoul-localized figure unknown. Equity (BSPCE) is the negotiation lever.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises" | Add "deploying LLMs into customer production environments across industries" | Mirror JD's customer-deployment framing |
| 2 | Hero metrics | 40% hallucination / 92% precision | Keep, lead with them | Direct RAG/eval proof |
| 3 | Agentic bullet | conductor–subagent (−42% tokens) | Promote to top of experience | Matches "agentic use cases" |
| 4 | Fine-tuning | QLoRA Qwen3-27B | Surface in summary skills line | Matches "Fine Tuning LLMs" |
| 5 | Open-source | MangaLens | Add to summary as shipped OSS product | Matches "ideally OSS contributions" |

**LinkedIn top 5:** headline → "Applied AI Engineer | LLM deployment, RAG, agentic systems"; feature MangaLens; add Mistral/open-weights to interests; surface QLoRA fine-tuning; add "Forward Deployed / Applied AI" to about.

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Advanced RAG | Healthcare RAG | Hallucinations on clinical queries | Lift answer relevance | Dense retrieval + cross-encoder re-rank | 40% hallucination ↓, 92% precision | Re-ranking beat bigger context windows on cost |
| 2 | Agentic use cases | Conductor–subagent system | Complex multi-step objectives, high token cost | Sustain accuracy, cut cost | Context-scoped subagents, orchestration | 42% token reduction | Scoping context per subagent > one giant prompt |
| 3 | Fine-tuning LLMs | Qwen3-27B QLoRA | Controllable long-form generation | Condition on narrative schema | 4-bit QLoRA on H100, 361-example set | Shipped controllable generation | Small curated sets + QLoRA rival full FT |
| 4 | Deploy LLM apps | Vanguard AI platform | Internal AI platform scale | Ship reliable APIs | 12 APIs/microservices | p95 1.5s→800ms, 100k+ req/day | Latency budget is a product feature |
| 5 | Evals | LLM eval framework | No pre-deploy regression signal | Benchmark iterations | RAGAS, BERTScore, custom metrics | Caught regressions pre-release | Evals must gate deploys, not follow them |
| 6 | Customer/FDE | MangaLens shipped product | Translation barrier for readers | Ship usable product | Chrome ext across 29+ sites | Live on Web Store | Owning end-to-end teaches what "production" means |

- **Case study to present:** Healthcare RAG (retrieval + re-ranking + evals) — closest to "advanced RAG + production integration."
- **Red-flag Qs:** "Why relocate to Seoul?" → frame APAC frontier-AI growth + greenfield market. "F-1 OPT?" → honest: US-authorized now, Seoul role needs Korean work visa; ask about relocation/visa support.

## G) Posting Legitimacy

**Assessment: High Confidence**

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Posted ~June 2026 via Lever (createdAt recent); active Apply | Positive |
| Description quality | Specific stack (PyTorch, LangChain, vector DBs, fine-tuning), clear scope, interview process partially listed | Positive |
| Corroboration | Asiae news (2026-06-15): Mistral confirmed entering Korea, posting Seoul Solutions roles | Positive |
| Company hiring | Well-funded; actively expanding APAC (Singapore + Seoul); no layoffs found | Positive |
| Reposting | Net-new in scan-history; no prior Seoul Mistral entries | Neutral |
| Market context | Applied AI / FDE roles fill in weeks at frontier labs | Positive |

**Context Notes:** New-market entry role — on-site Seoul reflects genuine local go-to-market need, not a ghost posting. The Korea launch is publicly reported.

## H) Draft Application Answers

Not generated (score 3.6 < 4.5 threshold). Generate live via `apply` mode if the candidate decides to pursue despite the relocation/visa hurdle.

---

## Red Flags (resumen)

- **Location / work authorization (major):** Seoul on-site; candidate is US-based on F-1 OPT. Requires relocation + Korean work visa. Does not veto the score (per profile policy: flag, don't auto-reject) but is the decisive practical factor.
- **Customer-facing intensity:** role is hands-on deployment + some pre-sales; candidate's client-facing experience is adjacent, not titled FDE.

## Keywords extraídas

Applied AI Engineer, LLM deployment, fine-tuning, QLoRA, RAG, agentic, LangChain, vector databases, PyTorch, Python, customer integration, pre-sales, open-source, GenAI, production deployment, evals, NLP, frontier models, Mistral, APIs
