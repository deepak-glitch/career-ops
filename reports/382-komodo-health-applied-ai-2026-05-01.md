# Evaluación: Komodo Health — Applied AI Engineer

**Fecha:** 2026-05-01
**Arquetipo:** Applied AI / LLM Engineer + Generative AI/RAG — healthcare data platform
**Score:** 4.2/5
**URL:** https://job-boards.greenhouse.io/komodohealth/jobs/8512178002
**Legitimacy:** High Confidence
**Location:** San Francisco, CA / NYC — Hybrid; Remote-US also eligible (lower band)
**PDF:** output/2026-05-01/cv-deepak-mallampati-komodo-health-applied-ai-2026-05-01.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM + RAG — healthcare data exploration |
| Domain | Healthcare data platform — Komodo's Healthcare Map |
| Function | Build/ship — design + deploy end-to-end AI features (agents, RAG, internal tools) |
| Seniority | Mid IC builder; 12-month plan emphasizes shipping production AI, designing agent-based pipelines, and building internal AI productivity tools |
| Remote | Hybrid SF or NYC; Remote-US eligible (~$166-195K band) |
| Comp | $191-224K Bay/NYC; $166-195K Remote-US (verbatim from posting) |
| Stack | Python, LLMs, agent frameworks (CrewAI, Strands, vLLM, OpenAI APIs), eval/monitoring; Spark/Snowflake/Databricks preferred |

**TL;DR:** Healthcare data company shipping applied AI on a clinical map. Direct 1:1 to Deepak's healthcare RAG + agentic workflows + FastAPI/Docker deploy stack from Progress. Sponsorship question is in the application = open to non-citizens. Hybrid SF/NYC primary, Remote-US viable at slightly lower band. Strong score with healthcare bullseye.

## B) Match con CV

| JD requirement | CV evidence | Fit |
|----------------|-------------|-----|
| Production-grade AI systems | Healthcare RAG, agentic LLM workflows, FastAPI/Docker services at Progress (~30% post-deploy defect reduction) | 1:1 |
| Strong Python | Primary language across Progress + projects | 1:1 |
| LLM, prompt engineering, agent-based architecture | Agentic Claims (5-stage pipeline w/ schema-validated JSON contracts); >30% hallucination reduction | 1:1 |
| Modern GenAI tooling (vLLM, CrewAI, Strands, OpenAI) | Frontier LLMs in Manga Lens (4 providers); LangChain/LlamaIndex from CV; vLLM/CrewAI named gap | Partial |
| AI capability integration across backend + product | FastAPI/Flask packaging; Manga Lens MV3 + Dream Decoder full-stack | 1:1 |
| Evaluation frameworks + monitoring | Eval audit trails at Progress; >90% retrieval-grounded alignment | 1:1 |
| Cross-functional collaboration | Stakeholder system-limitation docs + HIPAA-conscious governance at Progress | 1:1 |
| Healthcare data expertise (preferred) | Healthcare RAG + Patient No-Show + EHR preprocessing at Progress; Patient Records app | 1:1 |
| Distributed compute (Spark/Snowflake/Databricks, preferred) | None direct — Pandas/NumPy only | Gap |

**Gaps:**
1. **vLLM / CrewAI / Strands explicit** — soft gap; show frontier LLM provider abstraction (Manga Lens 4 providers) and LangChain experience as adjacent. Mitigate by spinning up a CrewAI demo prior to interview.
2. **Spark/Snowflake/Databricks** — preferred, not required. Mention readiness to ramp; cite walk-forward validation/feature engineering depth from Patient No-Show as transferable.

## C) Nivel y Estrategia

**Detected level:** Mid IC builder (12-month plan = ship features, design pipelines, build internal tools — not staff scope). Natural level for Deepak: 1:1.

**Sell as:** "Applied AI engineer with production healthcare RAG and agentic claims workflows. ~35% retrieval precision and >30% hallucination reduction in HIPAA-conscious environments map directly to Komodo's Healthcare Map. Manga Lens shows multi-provider LLM abstraction at production quality."

**If downleveled:** Accept if comp lands in the $180K+ band; negotiate a 6-month review with explicit promotion criteria tied to shipping the first agent pipeline.

## D) Comp y Demanda

| Field | Value | Source |
|-------|-------|--------|
| JD posted band (Bay/NYC) | $191,000-$224,000 | JD verbatim |
| JD posted band (Remote-US) | $166,000-$195,000 | JD verbatim |
| 2026 market median (Applied AI Engineer, healthcare, mid IC) | $170-220K base + equity | Glassdoor + Levels.fyi |
| Komodo Health Glassdoor signal | 3.7-3.9 stars; PE-funded; healthcare data unicorn | Glassdoor public data |
| Demand trend | Healthcare AI roles trending up; Komodo specifically expanding agent and GenAI surfaces | Industry trend 2026 |

**F-1 OPT:** Application includes immigration question, no auto-veto. Komodo has historically sponsored H-1B (LCA records). Verify in screen.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic Applied AI summary | Lead with healthcare RAG (~35% retrieval precision) + agentic workflows + HIPAA-conscious governance | JD bullseye is healthcare data + agent pipelines |
| 2 | Skills | Mixed list | Promote "agentic workflows, vLLM-ready, CrewAI patterns, RAG eval pipelines" to top | Mirrors JD vocabulary |
| 3 | Experience bullet (Progress) | Generic RAG bullet | Add explicit "agent-based pipelines with grounding rules and tool discipline" framing | Matches JD's "agent-based AI pipelines" |
| 4 | Projects | Manga Lens listed first | Promote Agentic Claims project to first slot for this app | Healthcare + agent + RAG = identical archetype |
| 5 | LinkedIn headline | Generic | "Applied AI Engineer — Healthcare RAG + Agentic Workflows + LLM Eval" | Matches recruiter search terms |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|------|--------|---|---|---|---|---|
| 1 | Ship production AI features | Healthcare RAG at Progress | EHR + clinical doc retrieval needed | Build production RAG with HIPAA-conscious governance | Recursive semantic chunking + transformer embeddings + grounding rules | ~35% retrieval precision; >90% grounded alignment | Trade-off: embedding model size vs latency — settled on smaller model + caching |
| 2 | Design agent-based pipelines | Agentic Claims pipeline | Multi-stage claims processing | Design 5-stage agent pipeline (Intake → Validation → Consistency → Duplicate → Risk) | Schema-validated JSON contracts between agents | Audit-ready explainable scoring; cascading hallucinations prevented | Schema contracts > free-form prompts at every agent boundary |
| 3 | Build internal AI productivity tools | Manga Lens shipped solo | 0-to-1 consumer Chrome extension | MV3 + 4 vision providers + per-provider failure isolation | Cost-aware payload routing (WebP/JPEG) | Shipped to Chrome Web Store; live users | Multi-provider abstraction de-risks vendor outages — applies to Komodo's internal tools |
| 4 | LLM eval frameworks | Hallucination reduction at Progress | Need defensible eval | Build retrieval-grounded eval audit trails | Stakeholder system-limitation docs + ground-truth comparisons | >90% retrieval-grounded alignment | Eval before deploy is non-negotiable — caught a 15% drift early |
| 5 | Healthcare domain | Patient No-Show prediction | High-risk patient prioritization | scikit-learn + XGBoost + threshold calibration | Class weighting + stratified sampling | +15-20% recall on high-risk categories, precision held >90% | Domain-aware feature engineering (e.g. appointment-history lookbacks) beat off-the-shelf |
| 6 | Cross-functional collab | Progress stakeholder docs | Healthcare ops needed AI without engineering training | Authored system-limitation docs + audit trail walkthroughs | HIPAA-conscious governance memos | Adoption by 2 ops teams without tickets back to eng | Translation of "what the model can/can't do" is half the job |

**Story Bank:** Append #1 (Healthcare RAG), #2 (Agentic Claims), #3 (Manga Lens shipping discipline) to interview-prep/story-bank.md if not already there.

**Case study:** Lead with **Agentic Healthcare Claims**. It's the bullseye for Komodo: agent pipeline + healthcare + grounded retrieval + audit-ready outputs.

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Apply button | Active; sponsorship question in app | Positive |
| Description specificity | Names vLLM, CrewAI, Strands, OpenAI; 12-month plan; agent pipelines + internal tools + production AI features | Positive |
| Comp transparency | Two explicit bands disclosed (Bay/NYC + Remote-US) | Positive |
| Company hiring signals | Komodo expanding AI product surface; multiple AI roles open Q1-Q2 2026 | Positive |
| Reposting | Komodo has multiple Applied AI variants (Staff role co-listed); core role is ongoing | Neutral |
| Role market context | Healthcare GenAI roles fill in 6-10 weeks at series-D unicorns | Neutral |

**Context:** Healthcare data companies (Komodo, Datavant, IQVIA) are actively building agentic pipelines on top of clinical data. This is a real, fundable hire — not a ghost job.

## H) Draft Application Answers

(Score 4.2 → include for high-priority apply)

**Q: Why Komodo?**
> "Komodo's Healthcare Map is exactly the data substrate I've been building agentic LLM workflows on top of in my work at Progress — clinical knowledge retrieval with HIPAA-conscious governance, RAG eval pipelines, and grounded responses. I want to ship the next layer: agent-based pipelines that turn the Map into productivity tools clinicians and analysts actually use, not dashboards they ignore."

**Q: Most relevant project?**
> "Agentic Healthcare Claims Processing System — five-agent pipeline (Intake → Validation → Consistency → Duplicate → Risk) with schema-validated JSON contracts between agents to prevent cascading hallucinations. RAG-grounded CPT/ICD validation + audit-ready explainable scoring. Translates 1:1 to Komodo's agent-based AI pipelines goal."

**Q: Sponsorship?**
> "I'm currently on F-1 OPT, US-based, eligible to start immediately. I'd need standard H-1B sponsorship in the future — open to discussing timing."

---

## Keywords extraídas

Applied AI Engineer, healthcare data, Healthcare Map, RAG, agent-based AI pipelines, LLM, prompt engineering, vLLM, CrewAI, Strands, OpenAI APIs, evaluation frameworks, monitoring, internal AI productivity tools, Python, Spark, Snowflake, Databricks, healthcare data expertise, HIPAA, production AI, cross-functional, generative AI
