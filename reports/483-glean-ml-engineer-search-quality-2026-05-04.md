# Evaluación: Glean — Machine Learning Engineer, Search Quality

**Fecha:** 2026-05-04
**Arquetipo:** ML Engineer (Applied AI Systems) + Generative AI / RAG Engineer (search-ranking-tilted)
**Score:** 3.8/5
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4006735005
**Legitimacy:** High Confidence
**Location:** San Francisco Bay Area — Hybrid 3-4 days/week in SF Bay Area offices
**PDF:** output/2026-05-04/cv-deepak-mallampati-glean-ml-engineer-search-quality-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) + Generative AI / RAG Engineer |
| Domain | Enterprise AI search — ranking models, signals, LLM-domain-adaptation, search+LLM Q&A |
| Function | Build + Deploy — production ranking models, signals, LLM domain adaptation |
| Seniority | Mid IC (2+ years experience — fits Deepak cleanly) |
| Remote | Hybrid 3-4 days/week in SF Bay Area office |
| Team size | Search Quality team (mentor junior engineers — small-team signal) |
| TL;DR | Best Glean role for Deepak today. **2+ YOE bar matches**, ranking + LLM + search aligns with RAG/grounding work, comp $140-265K + equity. SF Hybrid 3-4 days = real relocation friction but lower than Enterprise Brain's 4-day. Apply with relocation flexibility framing. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| 2+ years relevant experience | ✅ Direct | ~2.5y wall-clock (Progress Solutions 10mo + Energy Solutions 22mo); cv.md:22-39 |
| BA/BS in CS, math, sciences | ✅ MS Kent + B.Tech CS | cv.md:91-94 |
| Background in search, recommendations, NLP, ML systems | ✅ Direct (RAG retrieval + ranking + healthcare ML) | cv.md:25 RAG +35% precision; cv.md:27 patient no-show ML; cv.md:46 doc Q&A RAG |
| Strong analytical + data skills | ✅ Strong | EHR pipelines, dataset reliability >98%, downstream instability -40%; cv.md:29 |
| Production model design + deploy | ✅ Direct | FastAPI + Docker packaging at Progress Solutions, ~30% defect reduction; cv.md:28 |
| Proficiency in ML frameworks | ✅ Strong | scikit-learn, XGBoost, PyTorch, Hugging Face Transformers; cv.md:14 |
| Coding: Python, Go, Java, C++, similar | ✅ Direct | Python primary; C++ (Arduino), TypeScript also; cv.md:12 |
| Invent new signals + train ranking models | ⚠️ Adjacent | Recursive semantic chunking + transformer embeddings for retrieval ranking; no formal LTR (LambdaMART/XGBoost-rank) production | 
| Domain-adapt LLMs for customer-specific content | ✅ Direct | Healthcare-specific RAG + clinical knowledge retrieval; cv.md:25 |
| Combine LLMs with search for complex Q&A | ✅ Direct | Document Q&A with RAG (Suvidha) + clinical knowledge retrieval (Progress Solutions); cv.md:46, 25 |
| Maintainable, testable production code | ✅ Strong | Structured logging + load simulation + audit trails; cv.md:28, 30 |
| Mentor junior engineers | ⚠️ Partial | Onboarding for 150+ students at Kent State; no IC-mentor production role yet; cv.md:55 |
| Customer-focused mindset | ✅ Strong | HIPAA-conscious stakeholder docs; non-tech UI for Suvidha; cv.md:30, 47 |

**Gaps:**
1. **Formal Learning-to-Rank (LTR) production experience** — Soft. Bridge with transformer embeddings + recursive chunking for retrieval ranking; commit to ramp on LambdaMART/XGBoost-rank in week 1.
2. **Mentor experience as IC** — Soft. Frame the Kent State 150+ student coordination + Suvidha non-tech UI as adjacent stakeholder/mentoring scaffolding.
3. **3-4 day in-office SF Bay Area** — Hard relocation friction. Acknowledge openness up-front.
4. **Search at Glean's enterprise scale** — Soft. Healthcare RAG is enterprise-relevant scale (HIPAA + audit trails).

## C) Nivel y Estrategia

JD targets a Mid IC (2+ YOE) where Deepak fits cleanly on YOE and stack. Search-quality + LLM + ranking is a direct extension of his RAG retrieval work.

**Sell Mid w/o lying:**
- Lead with retrieval ranking gains (+35% precision via recursive semantic chunking + transformer embeddings) framed as "signal invention + ranking quality."
- Frame agentic LLM workflows as "LLM domain-adaptation for healthcare-specific reasoning" — direct match for "domain-adapt language models for customer-specific content."
- Emphasize Suvidha document Q&A RAG as combining LLMs with search.

**Plan if downleveled:**
- Accept "ML Engineer I" if comp is $160K+ base. Negotiate review at 6 months tied to one Search Quality signal owned end-to-end.

## D) Comp y Demanda

**Comp:** Disclosed. **$140,000 - $265,000 base** + variable + equity + benefits. Wide band — bottom = junior+1, top = senior. Mid landing point realistic at ~$190-220K for Deepak's profile.

**Demand:** Glean Series F $4B+ valuation (2024-2025). Search Quality is a foundational team — typically retains hiring even in slower cycles. No layoff news in WebSearch.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-tilted | "Mid ML/LLM engineer specializing in retrieval ranking, RAG grounding, and search+LLM Q&A. Production gains in retrieval precision (+35%) and grounded alignment (>90%). Open to SF relocation." | JD verbatim — ATS keyword match + relocation pre-empt |
| 2 | Skills | Mixed | Promote: retrieval ranking, embeddings, vector search, RAG, evaluation pipelines, LLM domain adaptation, transformer embeddings | Direct alignment |
| 3 | Experience bullets | Generic | Reframe RAG bullet: "designed retrieval ranking signals; recursive semantic chunking + transformer embeddings; +35% retrieval precision; grounded alignment >90% in eval" | Mirror "invent new signals + train ranking models" |
| 4 | Projects | CV-heavy | Lead with Suvidha doc Q&A RAG + Healthcare Claims Multi-Agent (RAG-grounded CPT/ICD validation) | Search+LLM Q&A theme |
| 5 | Footer | Kent OH | Add "Open to SF Bay Area relocation" | Pre-empt 3-4 day in-office concern |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Invent new signals to improve search personalization | Healthcare clinical RAG signal design | Generic context retrieval missing 50% of clinical queries | Improve precision via signal engineering | Recursive semantic chunking + transformer embeddings + grounded eval harness | +35% retrieval precision, >90% grounded alignment | Eval harness drives signal investment ROI; would A/B test signal additions earlier |
| 2 | Train ranking models to capture signal interactions | Patient no-show prediction | Class-imbalanced patient appointment data | Recall on high-risk while holding precision | Class weighting + stratified sampling + threshold calibration | +15-20% recall, >90% precision | Threshold calibration > algorithm choice in clinical workflows |
| 3 | Domain-adapt LLMs for customer-specific content | Healthcare-specific agentic workflows | Multi-step eligibility/care-nav queries hallucinating | Build domain-aware tool-disciplined agent | Structured reasoning + healthcare grounding rules + JSON contracts | +25% stability, >30% hallucination reduction | Domain grounding > base-model swap; would build domain eval set day 1 |
| 4 | Combine LLMs with search for complex Q&A | Suvidha doc Q&A with RAG | Long-form documents with hallucinated answers | Grounded answer accuracy | Semantic chunking + embedding retrieval + grounded generation | -30% hallucinations, >85% contextual accuracy | Retrieval is the bottleneck, not generation; would invest more in chunk strategy |
| 5 | Production model design + deploy | FastAPI + Docker LLM/ML packaging | ML/LLM inference services with no observability | Production-ready packaging + load testing | FastAPI/Flask + Docker + structured logging + load simulation | -30% post-deploy defects | Logging schema is hardest part; would standardize trace IDs day 1 |
| 6 | Maintainable + testable production code | Manga Lens multi-provider abstraction | 4 AI vision providers w/ different payload formats | Failure isolation per provider | Multi-provider abstraction + per-provider payload handling + 7-day cache | Shipped to Chrome Web Store; 29 sites supported | Per-provider failure modes are real; abstraction must be opinionated |
| 7 | Mentor junior engineers | Kent State student coordination + Suvidha UI for non-tech | 150+ students; Suvidha non-tech reviewers | Reduce coordination delays + ramp time | Structured scheduling + Flask UI + onboarding docs | -30% coordination delays, -20% ramp time | Mentoring is mostly about removing ambiguity; would document FAQs upfront |

**Case study:** Suvidha Foundation document Q&A with RAG + Progress Solutions clinical RAG — mapped to "combine LLMs with search systems for complex question-answering." Walk through: chunking strategy, embedding choice, retrieval precision metrics, grounding eval set design.

**Red-flag prep:**
- "Have you worked on enterprise-scale search?" → "Healthcare RAG at Progress Solutions is enterprise-scale: HIPAA, audit trails, SLOs. The retrieval precision gain transfers."
- "Why move from Kent to SF Bay Area?" → "Glean's enterprise search thesis is where I want to grow next. In-office velocity is the reason to relocate, not against it."
- "Mentoring experience?" → "Coordinated 150+ students at Kent State; built non-tech-friendly Suvidha UI. Both required removing ambiguity for less-experienced peers — that's most of mentoring in practice."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Glean Greenhouse board; Apply button present | Neutral |
| Description quality | Concrete responsibilities (signals, ranking, LLM domain adaptation, Q&A); specific stack; salary disclosed ($140-265K); reasonable seniority spread | Positive |
| Company signals | Glean Series F $4B+ valuation; active 2026 hiring; no layoff news; multiple distinct ML/FDE roles open simultaneously per applications.md | Positive |
| Reposting | Distinct URL from prior Glean entries (#055, #124, #129, #130, #482); this is a separate Search Quality team role | Positive |
| Realism | 2+ YOE + ML + search/recs/NLP is realistic Mid IC bar | Positive |
| Salary transparency | Disclosed; wide band typical for Mid roles | Positive |

**Context Notes:** Glean is a consistent enterprise AI hiring presence. Search Quality is a foundational team likely to backfill steadily. **Verification:** confirmed (Greenhouse direct fetch).

## H) Draft Application Answers

(skipped — score below 4.5 threshold; below is a quick "why Glean / why this role" sketch for cover letter use if the score warrants application)

> "I've spent the last year shipping production RAG and agentic LLM workflows that take a generic retrieval baseline from ~50% precision to ~35-percentage-point gains via recursive semantic chunking and transformer embeddings, with grounded alignment above 90% in evaluation. Glean's Search Quality team is the closest production analog to that work at enterprise scale, and the JD's combination of ranking, LLM domain adaptation, and search+LLM Q&A maps cleanly to what I do day to day. I'm based in Kent, OH today and open to SF Bay Area relocation."

---

## Keywords extraídas

Machine Learning Engineer, Search Quality, ranking models, signals, personalization, LLM domain adaptation, RAG, search+LLM Q&A, retrieval, embeddings, vector search, evaluation, Python, PyTorch, scikit-learn, NLP, production ML, mentor, SF Bay Area, Hybrid, $140-265K, Mid IC, Glean, enterprise search
