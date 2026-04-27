# Evaluación: dv01 — AI ML Engineer (Remote)

**Fecha:** 2026-04-27
**Arquetipo:** Applied AI / LLM Engineer + ML Engineer (Applied AI Systems) — fintech document AI
**Score:** 3.5/5
**URL:** https://job-boards.greenhouse.io/dv01/jobs/8191101002
**Legitimacy:** High Confidence
**Location:** Remote-first (US-based — NYC HQ; "home, cafe, or hotel")
**PDF:** output/2026-04-27/cv-deepak-mallampati-dv01-ai-ml-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI / Document AI + ML Engineer |
| Domain | Structured finance ($16T+ market) — banking document parsing/classification |
| Function | Build/architect end-to-end AI/ML for unstructured document understanding |
| Seniority | Mid IC (3+ yrs Python production + 3 yrs ML model dev + 1 yr GenAI) |
| Remote | Remote-first US |
| Team | Cross-functional with domain experts, PMs, engineers, designers |
| TL;DR | Build document parsers and classifiers for banking docs to unlock data ingestion at speed/reliability — fintech-flavored applied AI with MLOps discipline. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| End-to-end AI/ML + MLOps + CI/CD + monitoring | FastAPI/Flask + Docker + structured logging + load sim → ~30% defect reduction (cv.md L28); Jenkins CI/CD at Energy Solutions (cv.md L36) |
| Document parsing & classification | RAG over clinical knowledge + healthcare documentation search (cv.md L25); document Q&A with semantic chunking + embedding retrieval (cv.md L46) |
| 3+ yrs Python production code | 2.5 yrs Progress Solutions Python + Suvidha + Energy Solutions PL/SQL/Jenkins; rounded with project portfolio (cv.md L22-L46, projects L60-L84) |
| 3 yrs ML model dev (PyTorch/TF) | scikit-learn + XGBoost (Progress Solutions L27); PyTorch + Hugging Face Transformers + Diffusers (skills L14) |
| 1 yr generative AI focus | RAG + agentic LLM workflows + structured outputs at Progress Solutions (cv.md L25-26); Manga Lens 4-provider integration (cv.md L60) |
| MLflow / experiment tracking | Not explicit in CV. **Gap.** Mitigation: evaluation audit trails + model lineage docs (cv.md L30) demonstrate equivalent discipline |
| Clean, testable, maintainable code | Schema-validated JSON contracts between agents (cv.md L72); HIPAA-conscious lineage (L30) |
| Collaborative environment | Stakeholder-facing limitation docs + cross-team Student Manager (cv.md L30, L52) |

**Gaps:**
1. **MLflow specifically** — not on CV. Mitigation: experience with equivalent (audit trails, evaluation pipelines, lineage docs); easy to upskill.
2. **Years floor: 3+ yrs Python prod** — Deepak has 2.5 yrs Progress + ~3 mo Suvidha + Energy Solutions intern (T-SQL/Jenkins). Borderline. Mitigation: portfolio shows breadth (full-stack Dream Decoder, Manga Lens shipped to Chrome Web Store).
3. **Banking document domain** — Deepak's domain is healthcare. Mitigation: same problem class (document parsing + classification under regulatory constraints — HIPAA → financial compliance is transferable).

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC (3+/3/1 stack; $145-160K). Slightly above Deepak's 2.5 yrs.
- **Vender mid:** "2.5 yrs of *production* healthcare AI: RAG over unstructured clinical docs, document semantic search, agentic LLM workflows, predictive ML — all with MLOps discipline (Docker, FastAPI, structured logging, audit trails, ~30% defect reduction). Banking docs are the same problem class as clinical docs under HIPAA."
- **Si downleveled:** Accept; comp band ($145-160K) is reasonable for transition into fintech document AI; remote-US fits F-1 OPT.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Stated comp | **$145K – $160K base** |
| Market for AI/ML Engineer (Remote-US, mid) | $130-180K typical (Levels.fyi 2026); dv01 is at mid-band |
| Fintech AI demand | Strong — structured finance modernization is active 2025-2026 |
| Fit ratio | High mid — comp is reasonable, not aggressive |

Sources: WebSearch dv01 Greenhouse + nerdhunt mirror; aggregate ranges ZipRecruiter Apr 2026.

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Mention "document AI / unstructured document understanding" alongside healthcare RAG | dv01 thesis match |
| 2 | Skills | Add "MLflow (familiar)" if true; otherwise emphasize "experiment tracking, evaluation pipelines, audit trails" | JD requirement |
| 3 | Bullets | Lead Progress Solutions with **document semantic search + RAG over EHR/policy docs** framing | Map to banking docs |
| 4 | Projects | Bring **Agentic Healthcare Claims Pipeline** to top — multi-stage classification + extraction matches dv01 | Document classification proof |
| 5 | LinkedIn | Add "Document AI / Document Understanding" as keyword in headline | ATS for dv01-class roles |

## F) Plan de Entrevistas

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Document parsing/classification | Healthcare claims agentic pipeline | Manual claims triage error-prone | Multi-stage extraction + classification | Schema-validated JSON contracts; CPT/ICD validation via vector index | Reduced cascading errors; auditable | Lesson: classification + validation in one model is brittle; split with schema contracts |
| 2 | End-to-end MLOps | FastAPI inference packaging | Inference services lacked observability | Container + structured logging + load sim | FastAPI/Flask + Docker + structured logs | ~30% post-deploy defect reduction | Lesson: load sim pre-deploy is the cheapest insurance |
| 3 | Generative AI prod | RAG retrieval gains | Clinical retrieval imprecise | Semantic chunking + embeddings | Recursive chunking + transformer embeddings | ~35% precision, ~30% irrelevant reduction | Lesson: chunking > model choice for retrieval |
| 4 | Predictive ML | No-show prediction | Unbalanced classes | XGBoost with threshold tuning | Class weights + stratified sampling | 15-20% recall on high-risk while precision >90% | Lesson: P-R tradeoff is a product call |
| 5 | CI/CD discipline | Jenkins SQL deploy at Energy Solutions | Schema deploy errors | Pipeline + rollback checkpoints | Jenkins + version-controlled SQL | >30% deploy error reduction | Lesson: rollback checkpoints prevent panic during incidents |
| 6 | Cross-team collab | Limitation docs at Progress Solutions | Clinical over-trust of AI | Stakeholder-facing limitation matrices | Audit trails + lineage docs | Reduced misuse | Lesson: documenting limits builds more trust than overselling |

**Case study:** Agentic Healthcare Claims Pipeline — direct analog to banking document classification.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Description quality | Specific tech (Python/PyTorch/TF/MLflow), specific domain (banking documents), specific years floor | Positive |
| Comp transparency | $145-160K stated | Positive |
| Company maturity | dv01 is established structured-finance data co; profile on BuiltIn NYC | Positive |
| Hiring signals | Multiple ML Engineer / MLOps Platform Engineer roles open simultaneously — active team scaling | Positive |
| Reposting | New add to scan-history; not seen previously | Neutral |

## H) Draft Application Answers

(Score 3.5/5 — below 4.5 threshold; no draft answers required.)

---

## Keywords extraídas

AI ML Engineer, document parsing, document classification, banking documents, structured finance, Python production, PyTorch, TensorFlow, MLflow, MLOps, CI/CD, generative AI, RAG, semantic chunking, embeddings, FastAPI, Docker, end-to-end ML, evaluation pipelines, audit trails, dv01, fintech AI, NYC remote.
