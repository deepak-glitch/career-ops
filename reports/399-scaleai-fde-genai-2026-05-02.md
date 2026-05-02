# Evaluación: Scale AI — Forward Deployed Engineer, GenAI

**Fecha:** 2026-05-02
**Arquetipo:** AI Solutions / Forward Deployed Engineer (primary) + Applied AI / LLM Engineer (secondary)
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/scaleai/jobs/4593571005
**Legitimacy:** High Confidence
**Location:** San Francisco, CA / New York, NY — Hybrid (in-office expected)
**PDF:** output/2026-05-02/cv-deepak-mallampati-scaleai-fde-genai-2026-05-02.pdf
**Verification:** unconfirmed (batch mode)

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | AI Solutions / FDE + Applied AI / LLM |
| Domain | GenAI data infra for top AI labs and government agencies |
| Function | Build customer-facing data integrations + full-stack delivery |
| Seniority | 2+ yrs minimum (well within reach) |
| Remote | Hybrid SF or NYC |
| Comp | $179.4K-$224.25K base (SF/NY/Seattle band) |
| TL;DR | Scale AI's GenAI customer-facing engineering team. Builds data solutions for top AI labs + gov customers. Mid-IC bar (2+ yrs), strong comp band, archetype-aligned (FDE + GenAI), but US in-office 3-5d/wk in SF or NYC. F-1 OPT works for SF/NYC roles in principle; sponsorship likely standard but not stated explicitly. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| 2+ yrs shipping production engineering | cv.md L22-30: 2.5y at Progress Solutions shipping RAG, agentic, and ML pipelines |
| GenAI / LLM familiarity | cv.md L13: LLM application development, RAG, agentic workflows, structured outputs, evaluation pipelines, embeddings, vector search |
| Convert business concepts → engineering solutions | cv.md L26-27: care navigation workflows, no-show risk, support prioritization translated from clinician asks |
| Strong coding + technical comms | cv.md L60 (Manga Lens shipped solo, multi-provider integration discipline); cv.md L66 (Dream Decoder full-stack) |
| Adapt to evolving GenAI | cv.md L62 (Pixel Engine ongoing — Stable Diffusion + LoRA + ControlNet + LLM agent orchestrator); article-digest mentions retrieval / agentic iteration cycles |
| Full-stack: interfaces → backend | cv.md L66 (FastAPI + React/TypeScript/Vite/Tailwind end-to-end); L60 (Chrome extension Manifest V3) |
| Distributed systems / large-scale data (nice-to-have) | cv.md L17, L29: pipelines, observability, structured logging, ~98% data reliability |
| ML / AI familiarity (nice-to-have) | cv.md L11-15: scikit-learn, XGBoost, PyTorch, Hugging Face, LangChain, LlamaIndex |
| Enterprise customer engagement (nice-to-have) | Light gap — internal stakeholders at Progress Solutions; not strict enterprise customer-facing |
| Cloud infra (nice-to-have) | cv.md L17 cloud-ready deployment; light on direct AWS/GCP fluency |

**Gaps:**
1. **Enterprise customer-facing experience** — soft gap. Bridge via "stakeholder communication for clinicians + system-limitation docs" (cv.md L30) and Manga Lens ship discipline.
2. **Cloud infra hands-on (AWS/GCP/Azure)** — soft. Frame Docker + CI/CD as transferable.
3. **In-office hybrid SF/NYC vs Kent, OH** — relocation needed; F-1 OPT compatible but logistical.

## C) Nivel y Estrategia

- JD nivel: Mid-IC FDE GenAI (2+ yrs explicit)
- Candidato natural: Junior-Mid (2.5 yrs CV + MS Kent State May 2025)
- **"Sell senior without lying":** Lead with (a) shipped Chrome Web Store product solo (multi-provider integration), (b) RAG +35% retrieval precision in regulated/audit-traced setting, (c) full-stack FastAPI + React/Vite/Tailwind delivery on Dream Decoder. Reference Manga Lens as proof of "fast-paced experimentation + iteration cycles" for GenAI pace.
- **"Si me downlevelan":** Accept FDE I title at $160-180K base + relocation; negotiate 6-mo review for FDE II.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| Scale AI JD (verbatim) | $179.4K-$224.25K SF/NY/Seattle | Mid-band |
| Levels.fyi (Scale AI L4 SWE) | $185-235K base + equity | Aligned |
| Scale AI Series F valuation | $13.8B (2024) | Strong runway |
| FDE comp at top labs (SF/NYC) | $180-260K base | Competitive |

## E) Plan de Personalización

| # | Section | Current | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | "Healthcare-focused RAG + agentic" | "Applied AI engineer (M.S. CS Kent State, 2.5y production) shipping GenAI pipelines + agentic LLM workflows + full-stack delivery, comfortable converting ambiguous business asks into deployed integrations." | Mirrors Scale AI FDE GenAI positioning |
| 2 | Lead bullet (Progress Solutions) | RAG technical | Lead with "RAG +35% retrieval precision + agentic workflows >30% hallucination reduction; FastAPI/Docker production services with structured logging" | Maps to Scale AI's "ship at scale" + "data integrations" |
| 3 | Projects ordering | Various | Lead with Manga Lens (shipped solo, multi-provider integration discipline = data integration analog) + Dream Decoder (full-stack interfaces + backend + multimodal API orchestration) + Healthcare Claims Pipeline (multi-agent + audit) | FDE GenAI signals: ship + integration + audit |
| 4 | Skills | Generic | Surface "data integrations", "structured outputs", "evaluation pipelines", "vector search / embeddings" first | FDE GenAI buyers care about reliability + integration |
| 5 | Footer | "Kent, OH" | "US-based, F-1 OPT, open to sponsorship — willing to relocate to SF/NYC" | Match Scale's hybrid expectation |

## F) Plan de Entrevistas

| # | Requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Convert ambiguous business ask → engineered solution | Healthcare no-show prediction at Progress Solutions | Clinic ops asked "predict no-shows" — vague, no spec | Operationalize a working risk model integrated into ops workflow | scikit-learn + XGBoost + class weighting + threshold calibration; integrated as FastAPI service called by ops dashboard | +15-20% recall on high-risk categories; precision >90%; deployed to ops daily | Translation from "what if you could predict X" to deployed model is the FDE pattern — JD phrasing → schema → model → API → integration → monitor |
| 2 | Ship at scale / iteration cycles | Manga Lens Chrome Extension | No browser-native multi-provider AI translation existed | Ship to Chrome Web Store solo with 4 providers | Manifest V3 SW + content scripts, 4 vision providers (Claude/GPT-4o mini/4.1 Nano/Ollama), per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crash), 7-day cache, 29 site selectors | Live on Chrome Web Store; 29 supported sites | Multi-provider fallback exposes integration sharp edges; per-provider routing was the unlock |
| 3 | Full-stack delivery (interfaces → backend) | Dream Decoder | Wanted dream-interpretation app w/ multimodal output | Ship full-stack from React UI → FastAPI → multimodal APIs | React + TypeScript + Vite + Tailwind frontend; FastAPI backend; Perplexity Sonar for interpretation; Replicate for 16:9 imagery; intermediate structured-prompt transformation layer between text and image | +30% contextual alignment, +25-30% first-pass image success | Structured prompt rewriting is undervalued — it's a router, not a hack |
| 4 | Distributed / large-scale data familiarity | EHR preprocessing at Progress | EHR extracts arrived inconsistent across sources | Raise dataset reliability for downstream models | Pandas + NumPy preprocessing pipelines; schema normalization; dedup + lineage docs | >98% reliability; -40% downstream model instability | At any scale, the data pipeline is the model — model instability traces back to ETL hygiene |
| 5 | Customer/stakeholder communication | Stakeholder docs at Progress | Clinicians flagged AI outputs as "uninterpretable" | Make outputs trustable | System-limitation docs + evaluation audit trails + de-identification | Adoption stuck (production) | Domain experts evaluate AI on traceability, not accuracy alone |
| 6 | Why Scale AI / GenAI specifically | "Top labs + government" framing | — | — | — | — | "Healthcare AI taught me audit-traced + reliability discipline. Scale's customers (top labs + gov) need the same. The patterns transfer." |

**Story Bank:** Add stories #1, #2, #3 to interview-prep/story-bank.md if not present.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Active on Greenhouse board | Positive |
| Apply button | Working | Positive |
| Description quality | Specific responsibilities, named tech stack, named customers (top AI labs, gov agencies) | Positive |
| Salary transparency | Explicit $179.4K-$224.25K with state/region note | Positive |
| Funding | Series F $13.8B (2024); strong runway | Positive |
| Reposting pattern | Family of FDE roles posted across Scale boards (one ID closed, this one active) | Neutral |
| Sponsorship | "Are you legally authorized to work" + future sponsorship clarifier — implies F-1 OPT acceptable initially | Neutral |

## H) Draft Application Answers

**Why Scale AI / FDE GenAI:**
"Scale's customers — top AI labs and government agencies — need the same audit-traced, reliable deployment discipline I built at Progress Solutions for HIPAA-conscious healthcare AI. RAG +35% precision and >30% hallucination reduction in agentic workflows came from treating evaluation, grounding, and data lineage as first-class. I want to bring that discipline to GenAI integrations at the frontier."

**Most relevant project (1 of):**
"Manga Lens — Chrome Web Store extension, shipped solo. Multi-provider AI vision integration (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama local) with per-provider payload routing (WebP for cloud, JPEG for Ollama after a CUDA crash). 29 site selectors, 7-day translation cache, narrowed Manifest V3 host permissions for privacy. Same integration discipline FDE GenAI work needs — figure out the customer's stack, ship the pattern, document the constraints."

**Visa:**
"F-1 OPT through 2026 (US-based now, willing to relocate to SF or NYC). Open to H-1B sponsorship. Currently work-authorized in the US."

---

## Keywords extraídas

forward deployed engineer, GenAI, Scale AI, applied AI, data integrations, full-stack, Python, TypeScript, React, Node.js, MongoDB, distributed systems, large-scale data, machine learning, RAG, agentic workflows, structured outputs, vector search, evaluation pipelines, San Francisco, New York, hybrid
