# Evaluación: WisdomAI — Software Engineer, NLP/Machine Learning

**Fecha:** 2026-04-23
**Arquetipo:** Applied AI / LLM Engineer + Agentic / Automation
**Score:** 3.7/5
**URL:** https://jobs.ashbyhq.com/Wisdom%20AI/4091fbd2-b705-4414-9aef-287d7eb10d71
**Legitimacy:** High Confidence
**Location:** San Mateo, CA — Likely hybrid (SF Bay). No secondary locations listed. **Verify F-1 OPT support with recruiter** (WisdomAI is US-incorporated, Fortune 100 customers, typical sponsorship posture).
**PDF:** output/2026-04-23/cv-deepak-mallampati-wisdomai-nlp-ml-engineer-2026-04-23.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Applied AI / LLM Engineer + Agentic — enterprise analytics over data via GenAI |
| Domain | Data access / insights via GenAI; LLM code-gen, document understanding, context synthesis, agentic query processing |
| Function | Build agentic pipelines for analytical workloads; design + run eval frameworks; shape product with founders |
| Seniority | Mid IC (BS/MS OK) — compensation band suggests room for mid-to-senior |
| Remote | San Mateo (likely hybrid); JD does not explicitly call out remote |
| Team size | Early-stage; team ex-Glean/Apple/Rubrik/Google/Meta |
| Location | **San Mateo, CA (hybrid)** |
| Comp | $150K – $300K (wide band) |
| TL;DR | Strong archetype fit (LLM + agentic + eval pipelines + RAG/retrieval). Product maps to enterprise-analytics-as-service built on GenAI — exactly the pattern Deepak shipped in healthcare at Progress. BS/MS OK signals mid-level entry is fine. Apply. Two flags: San Mateo on-site expectation (verify remote), and the $150-300K band implies both mid and senior IC slots — anchor downleveling if required. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Build workflows / agentic pipelines for complex analytical workloads | **STRONG** | cv.md L26 agentic LLM workflows for healthcare eligibility + care nav; L71-72 multi-agent claims pipeline |
| Design evaluation framework + run evals on query processing engine | **STRONG** | cv.md L25 eval pipelines + 90% grounded alignment; L27 threshold calibration + stratified eval |
| Work closely with customers + founders to define product/eng roadmap | **MEDIUM** | cv.md L30 stakeholder-facing docs; no direct founder-facing experience |
| Shape engineering culture + tech stack | **MEDIUM** | Shipped-solo portfolio (cv.md L59-87) shows architectural ownership |
| Strong analytical skills + hard NLP | **STRONG** | cv.md L44-46 NLP video summarization (hierarchical abstractive + Q&A); L25 RAG semantic chunking |
| Search / retrieval + LLMs + eval pipelines | **STRONG** | cv.md L25-26 retrieval precision gain (~35%); cv.md L13 embeddings, vector search, semantic retrieval |
| Startup / fast-paced experience | **STRONG** | cv.md L59-87 shipped solo (Manga Lens, Pixel Character, Dream Decoder); L86 E-Farming founder experience |
| BS / MS CS | **STRONG** | cv.md L91 Master's @ Kent State |
| LLM code-gen (product feature) | **MEDIUM** | Daily user of LLM code-gen tools; not built a code-gen system per se |
| Document understanding | **STRONG** | cv.md L44-46 document Q&A with RAG; cv.md L46 ~85% contextual accuracy |
| Context synthesis | **STRONG** | cv.md L66 Dream Decoder "intermediate structured prompt transformation layers" — direct synthesis |

**Gaps:**
1. **LLM code-gen product experience** — adjacent (heavy LLM-for-code user) but not a built feature. Mention Dream Decoder's structured prompt transformation layer as analog.
2. **Enterprise analytics customer scale** — adjacent via Progress; Fortune 100 reps are a level up.
3. **On-site San Mateo expectation** — verify with recruiter; Deepak is in Kent, OH.

## C) Nivel y Estrategia

- **JD level:** Mid IC (BS/MS OK). Comp band $150-300K suggests mid + senior slots open.
- **Strategy:** Lead with RAG + retrieval precision + eval framework + agentic healthcare claims. Name document understanding (Suvidha + Manga Lens vision-to-text) as direct product-layer match. Propose to contribute to eval framework early as an integration demonstration.
- **If downleveled:** Anchor at mid-band ($150-200K); role is already at the low end of the wide comp range for Deepak's experience.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| WisdomAI Software Engineer NLP/ML | $150K – $300K | JD |
| Mid-level NLP/ML Engineer SF Bay | $155-220K | Levels.fyi SF Bay |
| WisdomAI customers | Fortune 100 companies | JD |
| Deepak target | $100-130K | config/profile.yml |

Comp floor ($150K) is comfortably above Deepak's $100-130K target.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer — 2.5 yrs production RAG + agentic workflows + eval frameworks. Built retrieval + document Q&A + multi-agent systems with measurable gains." | Mirror JD: agentic + eval + retrieval |
| 2 | Top skills | Move RAG, semantic retrieval, embeddings, vector search, evaluation pipelines, agentic workflows to top | JD ordering |
| 3 | Progress Solutions bullet 1 | Lead with RAG 35% retrieval precision + 90% alignment | Direct match |
| 4 | Progress Solutions bullet 2 | Lead with agentic workflows + structured reasoning + tool discipline | Agentic product match |
| 5 | Projects | Lead with Agentic Claims (5-stage agentic analytical pipeline) → Dream Decoder (structured prompt transformation = context synthesis analog) → Suvidha (document Q&A + hierarchical NLP) | Product match |
| 6 | Location line | "Kent, OH — Open to SF Bay relocation / hybrid. F-1 OPT (sponsorship welcomed)." | On-site signal |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Agentic pipelines for analytical workloads | Agentic Claims — 5-stage multi-agent w/ schema contracts + RAG-grounded policy validation | Schema contracts between agents prevent cascading hallucination |
| 2 | Eval framework design | Progress RAG — 90% grounded alignment + retrieval precision eval harness | Eval harness before any tuning |
| 3 | Hard NLP / retrieval | Progress semantic chunking + embeddings — 35% precision gain | Chunking strategy > embedding model choice |
| 4 | Document understanding | Suvidha hierarchical summarization + document Q&A | Hierarchy beats flat for long context |
| 5 | Context synthesis | Dream Decoder intermediate structured prompt transformation | Explicit structure at the prompt layer = reproducibility |
| 6 | Customer / founder collaboration | Progress stakeholder limitation docs | Say what the system can't do first |
| 7 | Shape engineering culture | Shipped-solo portfolio = architectural ownership reps | Ownership is a muscle, not a title |

**Case study:** Agentic Claims (multi-agent analytical pipeline) + Progress RAG (35% precision + 90% alignment) — direct 1:1 with WisdomAI's query-processing engine.

**Red flag questions:**
- "Fortune 100 customer reps?" → "Not directly yet; Progress healthcare stakeholders are comparable complexity + regulation. Eager for Fortune 100 direct reps."
- "LLM code-gen?" → "Daily user of LLM code-gen in my shipped portfolio; haven't built a code-gen product. Closest work is Dream Decoder's structured prompt transformation layer — same pattern."
- "San Mateo on-site?" → Negotiate: hybrid with 1-week monthly on-site if required; open to relocation.

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Ashby (WisdomAI canonical board) | Positive |
| JD specificity | Names code-gen, document understanding, context synthesis, LLM agents, team ex-Glean/Apple/etc. | Positive |
| Salary transparency | $150K-$300K disclosed (CA required) | Positive |
| Company hiring signals | Fortune 100 customers + multiple openings | Positive |
| Reposting pattern | Fresh posting; team is clearly scaling | Neutral |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why WisdomAI?** > "WisdomAI's thesis — making data access universal via GenAI + agentic analytical pipelines — is the same pattern I shipped in healthcare: 5-stage agentic claims processing with JSON schema contracts, RAG-grounded policy validation, and explainable scoring. I've hit 35% retrieval precision gain and 90% grounded alignment in production. Ready to bring that rigor to query processing over Fortune 100 data."

**Relevant project:** > "Agentic Healthcare Claims Processing & Fraud Risk Intelligence — multi-agent pipeline (Intake Normalization → Validation → Consistency Analysis → Duplicate Detection → Fraud Risk Scoring) with schema-validated JSON contracts and RAG-grounded policy retrieval. Direct parallel to WisdomAI's agentic query-processing engine."

**Experience honesty:** > "2.5 yr AI-core, open to mid-level slot. Fortune 100 direct reps is the growth I want from this role."

**Work authorization:** > "US-based (Kent, OH). Open to SF Bay hybrid / relocation. F-1 OPT — sponsorship welcomed."

---

## Keywords extraídas

NLP, Machine Learning, LLM, agentic pipelines, document understanding, context synthesis, code-generation, search, retrieval, evaluation framework, query processing, enterprise analytics, GenAI, Fortune 100, WisdomAI, RAG, embeddings, vector search.
