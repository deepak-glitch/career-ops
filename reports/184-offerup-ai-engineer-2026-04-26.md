# Evaluación: OfferUp — AI Engineer (Hybrid @ Bellevue, WA or Remote @ Florida)

**Fecha:** 2026-04-26
**Arquetipo:** Applied AI / LLM Engineer + Generative AI / RAG Engineer
**Score:** 4.2/5
**URL:** https://job-boards.greenhouse.io/offerup/jobs/7739995
**Legitimacy:** High Confidence
**Location:** Hybrid @ Bellevue, WA or Remote @ Florida
**PDF:** output/2026-04-26/cv-deepak-mallampati-offerup-ai-engineer-2026-04-26.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Applied AI / LLM Engineer (primary) + Generative AI / RAG Engineer (secondary) |
| Domain | Marketplace AI: search ranking, personalization, trust & safety, fraud detection |
| Function | Build production agentic + RAG systems on the Data team |
| Seniority | Mid (2–4 yrs production AI/ML; 2+ yrs Python) |
| Remote | Hybrid Bellevue, WA OR Remote Florida only |
| Team | Data team (DE + DS + AI Engineers); reports into Engineering org |
| TL;DR | Mid-level Applied AI Engineer owning RAG pipelines, agentic workflows, and LLM integrations across OfferUp's marketplace surfaces — direct archetype match. |

## B) Match con CV

| JD requirement | CV / project line | Match |
|---|---|---|
| 2–4 yrs production AI/ML | "Applied AI engineer (2.5+ years)" (cv.md:8) | ✅ |
| 2+ yrs Python | Python listed as primary language (cv.md:12); FastAPI/Flask services (cv.md:28) | ✅ |
| Agentic frameworks (LangChain, LangGraph), function calling | "agentic LLM workflows ... structured reasoning, tool discipline, and grounding rules" (cv.md:26); Manga Lens 4-provider orchestration (cv.md:60); Agentic Healthcare Claims with schema-validated JSON contracts (cv.md:71-72) | ✅ |
| RAG (vector search, semantic chunking, rerankers) | "recursive semantic chunking and transformer-based embeddings; ~35% retrieval precision" (cv.md:25); RAG-grounded CPT/ICD validation (cv.md:71-72) | ✅ |
| LLM APIs, prompt engineering, structured outputs | "structured outputs, prompt engineering, evaluation pipelines" (cv.md:13); Dream Decoder structured prompt transformation layers (cv.md:65-66) | ✅ |
| Async Python (asyncio, streaming), Pydantic | FastAPI services (cv.md:28); cloud-ready inference packaging | ⚠ Partial — async/Pydantic not explicitly cited; framing in cover letter |
| Strong SQL for large-scale data | "SQL (T-SQL, PostgreSQL, SQLite)" (cv.md:12); ESI Order-to-Cash T-SQL stored procs (cv.md:35) | ✅ |
| Bachelor's CS/Math/Stats | Master's at Kent State (cv.md:91-93) | ✅ |
| LLMOps tooling (Ragas, DeepEval, LangSmith, Arize) — *helpful* | Eval pipelines + evaluation discipline (cv.md:13, 26); not specific tools | ⚠ Adjacent |
| AWS deployment (cloud) — *helpful* | Docker + cloud-ready deployment (cv.md:17) | ⚠ Adjacent |
| GraphRAG / knowledge graphs (Neo4j) — *helpful* | NetworkX graph analysis (cv.md:77-78) | ⚠ Adjacent |

**Gaps + mitigation:**
- *Async Python / Pydantic explicit experience.* Mitigation: FastAPI app dev implies Pydantic; mention in cover letter ("FastAPI services use Pydantic for schema validation").
- *Specific LLMOps eval tools (Ragas, DeepEval, LangSmith).* Mitigation: cite Healthcare Claims agent JSON contract schema as eval discipline + offer to ramp on LangSmith in week 1.
- *AWS specifics.* Mitigation: containerized FastAPI services are cloud-portable; mention learning trajectory.

## C) Nivel y Estrategia

JD asks for 2–4 yrs production AI/ML. Deepak has 2.5+ yrs at Progress Solutions delivering RAG + agentic in healthcare. Squarely mid-level.

**Sell mid-level confidently:**
- "I've owned RAG pipelines end-to-end in regulated healthcare — same problem shape as marketplace search & T&S, just different domain language."
- "Agentic Healthcare Claims with schema-validated JSON contracts is the closest analog to OfferUp's marketplace agentic workflows."
- "Manga Lens (Chrome extension shipped to Web Store, 4-provider orchestration) demonstrates production multi-LLM integration discipline."

**If downleveled or band feedback:** $140–160K base maps to OfferUp's posted range; counter with delta only if offer comes below $140K.

## D) Comp y Demanda

| Datapoint | Source |
|---|---|
| Posted band: $140,000–$160,000 base + equity | JD content |
| Levels.fyi Bellevue AI Engineer mid: $145–185K base, $180–250K total | WebSearch (Levels, Blind comparators) |
| F-1 OPT visa note | Not addressed in JD; ask in screen |
| Demand: high (RAG + agentic + marketplace AI is hot in 2026) | WebSearch trends |

Posted band is at lower end of market for Bellevue; equity + benefits offset. Worth asking about visa sponsorship before late-stage interview.

## E) Plan de Personalización

| # | Section | Current | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | "Applied AI engineer ... healthcare-focused RAG" | Lead with "Applied AI engineer (2.5+ yrs) shipping production RAG pipelines, agentic LLM workflows, and LLM API integrations behind FastAPI services — comfortable owning end-to-end from data → eval → deploy." | Mirror JD: production RAG + agentic + LLM APIs + production ownership |
| 2 | Experience bullet 1 | RAG ~35% precision | Reorder to lead with RAG + agentic (top 2 bullets) | JD lists RAG + agentic as critical projects |
| 3 | Skills | Long Python list | Add "LangChain / LangGraph (agentic patterns), RAG (semantic chunking, embeddings, rerankers), structured outputs, evals" as a bolded line | ATS keyword density |
| 4 | Project order | Manga Lens first | Promote Agentic Healthcare Claims (multi-agent + JSON contracts) above Manga Lens | Direct archetype proof |
| 5 | LinkedIn headline | — | "Applied AI Engineer | RAG, Agentic LLM Workflows, Production AI Systems" | Recruiter scan match |

## F) Plan de Entrevistas (STAR+R)

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | RAG production | Healthcare RAG ~35% precision | EHR + clinical docs unstructured | Improve retrieval precision for clinician questions | Recursive semantic chunking + transformer embeddings + reranking | ~35% retrieval precision gain, >90% grounded alignment | Chunk granularity matters more than embedding model; learned to instrument retrieval-level evals before tuning generation |
| 2 | Agentic workflows + tool use | Healthcare Claims multi-agent | Multi-step claim review | Reduce hallucinations + cascading errors | Schema-validated JSON contracts between agents (Intake → Validation → Consistency → Dup → Risk) | >30% hallucination reduction; audit-ready reasoning traces | JSON contracts at agent boundaries are cheaper than prompt engineering for stability |
| 3 | LLM API multi-provider integration | Manga Lens shipped | Browser extension w/ webtoon translation | Robust translation across Claude, GPT-4o, GPT-4.1, Ollama | Per-provider payload handling (WebP cloud, JPEG Ollama), 7-day cache, narrowed permissions | Shipped to Chrome Web Store; 29 sites supported | Multi-provider orchestration needs explicit capability matrix; learned to write provider-feature compatibility tests |
| 4 | Predictive ML / ranking-adjacent | No-show / risk prediction | High-risk patient identification | Improve recall on high-risk categories | XGBoost + class weighting + threshold calibration | 15–20% recall gain; precision >90% | Threshold calibration on imbalanced data is where most "model improvements" actually come from |
| 5 | Production packaging + ownership | FastAPI/Flask + Docker | Deploy AI services for clinic users | Reliable inference, safe rollouts | Docker, structured logging, load simulation | ~30% post-deploy defect reduction | Logging discipline at service boundaries beats fancy observability tooling for small teams |
| 6 | Domain ramp (marketplace) | Cross-domain prior — healthcare → marketplace | Both involve user trust + ranking | Demonstrate domain ramp speed | Frame healthcare safety/grounding as analogous to T&S | Past delivery shows fast ramp on regulated domain | Constraints transfer: HIPAA discipline → marketplace fraud detection |

**Red-flag answers:**
- *"Why OfferUp / consumer marketplace from healthcare?"* → "RAG, agentic workflows, and trust/safety are domain-agnostic shapes; I want to apply the discipline I built in HIPAA-conscious systems to higher-volume consumer surfaces."
- *"F-1 OPT?"* → "I'm currently on F-1 OPT, US-based, and open about long-term sponsorship — happy to align on timing in the screen."
- *"Bellevue/FL only — can you commit?"* → "Florida remote works; happy to confirm address policy."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting age | First published 2026-03-20, updated 2026-04-23 (5 weeks, recently refreshed) | Positive |
| Apply button | Active on Greenhouse | Positive |
| Tech specificity | Names LangChain, LangGraph, RAG patterns, asyncio, Pydantic, vector search, AWS, LangSmith, Arize, Ragas, DeepEval, NeMo, Neo4j/FalkorDB | Positive |
| Comp transparency | $140–160K explicit + equity disclosed | Positive |
| Team / scope | Names Data team, DE + DS + AI Eng cross-functional, listed business KPIs (conversion, retention, fraud reduction) | Positive |
| Repost detection | Not seen prior in scan-history | Neutral |
| Layoffs / freeze | OfferUp had restructuring rounds 2023–2024; Data team appears actively investing per JD | Neutral — note in screen |
| Role-company fit | Marketplace native role, fits OfferUp's stated direction | Positive |

**Context Notes:** OfferUp is a public-facing local marketplace; Data team AI investment is well-described. Florida remote restriction is unusual but legitimate (likely tax/entity scope).

## H) Draft Application Answers

*(Score 4.2 ≥ 4.0 — drafts available; lighter than 4.5+ tier.)*

**"Why OfferUp?"** I want to apply RAG + agentic discipline at consumer scale. Healthcare taught me to ground generation against authoritative sources and design agent contracts that fail loudly. Marketplace search, T&S, and fraud detection are the same problem shape with different stakes — I'd ship reliably from week one.

**"Tell us about a hard AI system you owned."** Agentic Healthcare Claims pipeline: five agents (Intake → Validation → Consistency → Duplicate → Fraud Risk) with schema-validated JSON contracts at every boundary. RAG-grounded against vector-indexed CPT/ICD policies. Approximate-nearest-neighbor for duplicate detection. Audit trail for every decision. Reduced hallucinated outputs >30%.

**"OPT / sponsorship?"** US-based, F-1 OPT, open about future sponsorship. Happy to align on timeline in the screen.

---

## Keywords extraídas

AI Engineer, RAG, agentic, LangChain, LangGraph, LLM, retrieval-augmented generation, vector search, semantic chunking, rerankers, structured outputs, prompt engineering, Pydantic, asyncio, Python, SQL, marketplace, trust & safety, fraud detection, personalization, search ranking, AWS, evals, observability, LangSmith, Arize Phoenix, OfferUp
