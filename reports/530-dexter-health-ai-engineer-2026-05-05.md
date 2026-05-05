# Evaluación: dexter health — AI Engineer

**Fecha:** 2026-05-05
**Arquetipo:** Applied AI / LLM Engineer (primary) + AI Solutions / Forward Deployed Engineer (secondary)
**Score:** 3.3/5
**URL:** https://remotive.com/remote/jobs/ai-ml/ai-engineer-4498339
**Legitimacy:** Proceed with Caution
**Location:** Worldwide — Remote (German nice-to-have suggests DACH-anchored startup)
**PDF:** output/2026-05-05/cv-deepak-mallampati-dexter-health-2026-05-05.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer + AI Solutions/FDE |
| Domain | Healthcare automation (elderly care workflows preferred) |
| Function | Build (turn product concepts into production AI features) + Deploy (integrate into existing backend) |
| Seniority | Not stated explicitly (high-trust startup, ownership mindset) — implied mid IC |
| Remote | Worldwide remote (German nice-to-have) |
| Comp | Not disclosed |

**TL;DR:** Healthcare AI startup hiring an Applied AI engineer to ship LLM-powered features (Claude Code, Codex, Cursor, Copilot tooling), build evaluation harnesses, and integrate into backend systems — DACH-anchored but worldwide remote.

## B) Match con CV

| JD Requirement | CV Match | Status |
|----------------|----------|--------|
| Strong Python / backend SWE | "Python, FastAPI, Flask, SQL (T-SQL, PostgreSQL, SQLite)" + 3+ shipped Python services | ✅ Strong |
| LLM tooling (Claude Code/Codex/Cursor/Copilot) + commercial & open-source models | Manga Lens project: "Integrates four AI vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local)" — multi-provider expertise | ✅ Strong |
| LLM systems w/ structured outputs + validation | Progress Solutions "agentic LLM workflows … structured reasoning, tool discipline, grounding rules" + Healthcare Claims project "schema-validated JSON contracts between agents" | ✅ Strong |
| Evaluation/testing frameworks for AI outputs | Progress Solutions "Retrieval-grounded response alignment exceeded 90% in evaluation" + Suvidha "85% alignment between AI-selected highlights and human-curated key moments" | ✅ Strong |
| Healthcare software/data | Progress Solutions: healthcare RAG + agentic + risk ML + HIPAA governance; Suvidha: video summarization in nonprofit health context | ✅ Strong (signature match) |
| Elderly care workflows | Not in CV (general healthcare only) | Mild gap (mitigable: Healthcare Claims + Patient Records app are adjacent) |
| Self-hosted LLMs | Manga Lens "Ollama/minicpm-v local" — direct match | ✅ Strong |
| Backend integration / debug across stack | "Packaged ML/LLM inference as FastAPI/Flask RESTful services, containerized with Docker" + Dream Decoder full-stack FastAPI+React | ✅ Strong |
| German | Not in CV | Gap (nice-to-have only) |

**Gap mitigation:** Elderly-care-specific gap is small — pitch the Healthcare Claims fraud/risk system + Patient Records app as proof of regulated-care domain affinity. German is non-blocking. Self-hosted LLM box is checked by Ollama in Manga Lens.

## C) Nivel y Estrategia

JD nivel: Implied mid IC ("ownership mindset", "rapid shipping", "high-trust startup"). No explicit YOE floor disclosed.
Deepak natural nivel for Applied AI/LLM: Junior-Mid (2.5y). Reasonable fit assuming the startup is calibrated for ~2-4y.

**Sell senior:** Lean on multi-provider LLM expertise (Manga Lens), production RAG with measurable precision gains (~35%), and HIPAA-conscious healthcare experience (Progress Solutions). The signature line: "I've shipped LLM systems with multi-provider routing, evaluation harnesses, and healthcare data governance — including the Manga Lens Chrome extension that's live on the Web Store."

**Si me downlevelan:** Acceptable if comp is at or above Deepak's $85K floor (but worldwide-remote DACH startups often pay €50-80K, which is below target). Negotiate review at 6 months tied to shipped feature impact.

## D) Comp y Demanda

Not disclosed. DACH-anchored healthcare startups typically range €60-100K for mid Applied AI engineers (worldwide-remote often anchored to local market). Likely below Deepak's $100-130K USD target. **Action:** ask comp + sponsorship in screening before investing in tailored cover letter.

LLM tooling roles (Claude Code/Cursor/Copilot integration) are in high demand 2026 — Deepak's multi-provider experience is a real differentiator.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ years) building healthcare-focused RAG…" | "Applied AI engineer building healthcare LLM features with multi-provider routing (Claude/GPT/Ollama), evaluation harnesses, and HIPAA-conscious data governance" | Mirrors JD's emphasis on Claude/Codex/Cursor + healthcare + evaluation |
| 2 | Skills (LLM bullet) | Generic LLM list | Reorder to: "multi-provider LLM routing (Claude Sonnet, GPT-4o, Ollama/minicpm-v), structured outputs, evaluation pipelines, grounding, agentic workflows" | Matches JD's tool list verbatim |
| 3 | Manga Lens project | Buried mid-list | Promote to first project (it's the most JD-relevant) — emphasize 4-provider integration + local Ollama | JD explicitly names Cursor/Copilot/Ollama-style stack |
| 4 | Progress Solutions bullet 2 | "agentic LLM workflows…25% stability improvement" | Add "structured-output validation + grounding rules cut hallucinations >30%" framing | JD: "structured outputs and validation" |
| 5 | Cover letter angle | n/a | Lead with Manga Lens shipped Chrome Web Store + healthcare RAG + Ollama local-LLM expertise — signal "ships fast, owns end-to-end" | JD: "rapid shipping + ownership mindset" |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----|-----|---|---|---|---|---|
| 1 | Multi-provider LLM systems | Manga Lens vision-provider router | Chrome ext needed translation across 4 providers + cost/quality tradeoffs | Pick optimal model per page type | Built provider-abstraction layer + WebP/JPEG payload routing (Ollama crashed on WebP) | Live on Chrome Web Store | "Provider-abstraction layer is worth the day-1 overhead — saved a week when GPT-4o-mini prices changed" |
| 2 | Evaluation harness for AI outputs | Suvidha video summarization | 5,000+ recorded sessions, no ground-truth labels | Validate AI highlight selection | Built human-curated keyframe set + alignment scoring | 85% alignment, 60-70% review-time reduction | "Human-curated reference set is cheaper than annotators — small N is enough for directional eval" |
| 3 | Structured outputs + validation | Healthcare Claims agentic pipeline | Multi-agent claims pipeline (Intake → Validation → Fraud) prone to cascading hallucinations | Hard contracts between agents | Schema-validated JSON contracts + RAG-grounded CPT/ICD validation | Audit-ready risk scoring with reasoning traces | "Schema validation between agents is the cheapest 80% safety win — beats prompt engineering for hallucination control" |
| 4 | Healthcare data + HIPAA | Progress Solutions RAG | Clinical knowledge retrieval needed contextual grounding | Improve precision without leaking PHI | Recursive semantic chunking + transformer embeddings + de-identification | ~35% precision gain, >90% grounded alignment, HIPAA audit trail | "PHI de-identification at chunk-time is cheaper than re-running indexing post-leak — design it into the pipeline" |
| 5 | Self-hosted LLM | Manga Lens Ollama integration | Privacy-conscious users want local inference | Support self-hosted minicpm-v alongside cloud | JPEG payload conversion (Ollama crashed on WebP), parameter tuning per local model | Stable local inference path | "Local-LLM payload bugs eat a day if you don't unify input format upfront" |
| 6 | Backend integration debug | Progress Solutions FastAPI deployment | LLM/ML inference services hit production load issues | Reduce post-deploy defects | FastAPI + Docker + structured logging + load simulation | ~30% defect reduction post-deploy | "Load simulation in staging is 5x cheaper than the first production hotfix" |

**Story bank update:** Manga Lens multi-provider routing + Healthcare Claims schema contracts are net-new — append to `interview-prep/story-bank.md`.

**Red-flag questions to anticipate:**
- "Are you OK with worldwide remote and possibly Berlin/DACH timezone overlap?" → "I'm US ET, can do up to 3-4hr overlap with CET (10am-2pm CET = 4-8am ET)."
- "Visa sponsorship for relocation?" → Not the right framing; ask reverse: "Will payroll be US W2 or contractor? I'm on F-1 OPT and need US-based employment to maintain authorization."

## G) Posting Legitimacy

**Assessment:** **Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Remotive aggregator | Positive |
| Description quality | Specific tools named (Claude Code, Codex, Cursor, Copilot, Ollama) + specific domain (healthcare/elderly care) + clear responsibilities | Positive |
| Comp transparency | Not disclosed (DACH norm — worldwide remote anchored to local market) | Concerning |
| Visa/work-auth clarity | Silent on sponsorship — need to verify in screen | Concerning |
| Company info | "dexter health" — small/early-stage; minimal public footprint visible from JD alone | Concerning |
| Reposting pattern | First-time entry | Neutral |

Real role with strong stack/JD specificity, but small company + comp opacity + sponsorship silence warrant a screening conversation before investing in tailored cover letter.

## H) Draft Application Answers

(Score 3.3 < 4.5 — skipping H per oferta.md rule. If user prioritizes this role, generate H separately.)

---

## Keywords extraídas

AI Engineer, LLM, Claude Code, Codex, Cursor, Copilot, Ollama, structured outputs, evaluation framework, RAG, healthcare AI, elderly care, Python, backend integration, debugging, self-hosted LLM, multi-provider, agentic workflows, production AI features, ownership, rapid shipping, dexter health
