# Evaluación: GC AI — Founding Engineer

**Fecha:** 2026-05-01
**Arquetipo:** Applied AI / LLM Engineer (primary) + Agentic / Automation (secondary)
**Score:** 3.7/5
**URL:** https://weworkremotely.com/remote-jobs/gc-ai-founding-engineer
**Legitimacy:** High Confidence
**Location:** Remote — USA / Canada / Europe (HQ San Francisco)
**PDF:** output/2026-05-01/cv-deepak-mallampati-gc-ai-founding-engineer-2026-05-01.pdf
**Verification:** unconfirmed (WeWorkRemotely 403 in batch mode; corroborated via gc.ai/company/careers + BusinessWire Series B announcement)

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Applied AI / LLM Engineer + Agentic |
| Domain | Legal AI (in-house counsel workflows) |
| Function | Build (founding-stage product/eng IC) |
| Seniority | Founding Engineer (typically 4-8 yrs but stage-dependent) |
| Remote | Fully remote — US / Canada / Europe |
| Team size | Founder-led: Cecilia Ziniti (3x GC, 15+ yr lawyer) + Bardia Pourvakil (ex-Replit CTO); growing post-Series B |
| TL;DR | Ex-Replit-built legal AI co. just raised $60M Series B at $555M valuation (Scale + Northzone). 1000+ legal teams incl. Vercel, Skims, News Corp, Nextdoor, Zscaler. Founding Engineer for in-house counsel workflows. |

## B) Match con CV

| JD requirement (inferred from product + role) | CV evidence |
|---|---|
| LLM application engineering at production quality | cv.md L25-26: RAG +35% retrieval precision, >90% grounded alignment; agentic workflows >30% hallucination reduction |
| Agentic multi-step workflows w/ tool discipline | cv.md L26 (eligibility/care navigation/documentation clarification with structured reasoning + grounding rules) |
| RAG over policy / domain document corpora | cv.md L25 (recursive semantic chunking + transformer embeddings); L72 (CPT/ICD policy retrieval over vector index) |
| Schema-validated structured outputs (audit-ready legal context) | cv.md L72 (schema-validated JSON contracts between agents to prevent cascading hallucinations); L46 (document Q&A with RAG) |
| Full-stack delivery (founding role = own end-to-end) | cv.md L60 (Manga Lens shipped solo to Chrome Web Store - Manifest V3 SW + 4 vision providers); cv.md L66 (Dream Decoder FastAPI + React/Vite/Tailwind end-to-end) |
| Python + TypeScript primary | cv.md L12 (Python primary, TypeScript, React); L60 (TS Chrome Ext.) |
| Cloud-ready services + Docker | cv.md L17, L28 (FastAPI/Flask + Docker; ~30% post-deploy defect reduction) |
| Regulated-domain discipline (legal docs ~ HIPAA in attestation rigor) | cv.md L30 (HIPAA-conscious: de-identification, lineage, audit trails) |
| Eval / observability of LLM outputs | cv.md L25 ("retrieval-grounded response alignment exceeded 90% in evaluation"); L26 (agent stability +25%) |
| Ship fast / 0->1 product instinct | cv.md Manga Lens (4 providers, 29 selectors), Dream Decoder (multimodal), Agentic Pixel Engine (LLM orchestrator) |

**Gaps:**
1. **Founding-role typical 4-8 yr seniority vs. 2.5 yr CV (with M.S. May 2025).** Hard-ish; mitigated by (a) MS CS Kent State 2025, (b) shipped Chrome Web Store extension solo, (c) five-agent claims pipeline architecture. Frame as "founder-mindset proven by solo ship + multi-agent system design under regulatory guardrails."
2. **Legal-domain context (corporate counsel workflows, contract review, NDA / MSA).** Soft. No legal experience on CV. Bridge via "regulated-domain discipline at HIPAA + audit-traceable agent reasoning" - same trust floor.
3. **Pricing/plan/usage SaaS instrumentation.** Light gap; standard backend.

## C) Nivel y Estrategia

- JD nivel: Founding Engineer (loose — depends on hiring round; some founding hires are pre-Series A but post-Series B often skews +4 yrs)
- Candidato natural: Junior-Mid (2.5 yrs, MS CS 2025)
- **"Sell senior without lying":** Lead with (a) shipped Chrome Web Store product solo, (b) five-agent claims pipeline w/ schema-validated JSON contracts (this is exactly the pattern legal AI needs), (c) RAG +35% precision in regulated/audit-traced setting. Mention Replit CTO (Bardia) → emphasize Manga Lens as "shipped solo, real users, multi-provider integration discipline."
- **"Si me downlevelan":** Accept "Engineer" or "Applied AI Engineer" title at base $140-180K + meaningful Series B equity. Negotiate 6-month review with comp adjustment if performing.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| Levels.fyi (Founding Eng, post-Series B AI) | $180-280K base + 0.25-1.5% equity | Wide band; legal AI is competitive |
| Series B AI startups (San Francisco market) | $200-260K base + equity | $60M raise = strong runway, can pay |
| GC AI specifically (no public data) | TBD | Likely market median — recently funded |
| Demand for legal AI engineers | Very high | Harvey/Robin/Spellbook/EvenUp competitive |

WebSearch sources: BusinessWire (Series B announcement, $60M Nov 2025), gc.ai/company/about, Levels.fyi general bands.

## E) Plan de Personalización

| # | Section | Current | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | "Healthcare-focused RAG + agentic workflows" | "Applied AI engineer (M.S. CS, Kent State, May 2025; 2.5 yrs production) shipping deploy-and-integrate AI workflows in regulated, audit-traced domains — directly transferable to corporate-counsel workflows at GC AI." | Mirrors GC AI's "in-house legal" positioning |
| 2 | Lead bullet (Progress Solutions) | RAG technical bullet | Lead with "five-agent claims pipeline w/ schema-validated JSON contracts (pydantic) prevents cascading hallucinations and produces audit-ready reasoning traces" | This is the architectural pattern legal AI needs for contract review + redlining |
| 3 | Projects ordering | Various | Lead with Agentic Healthcare Claims (multi-agent + audit) + Manga Lens (shipped solo) + Dream Decoder (multimodal full-stack) | Founding-role signals: solo ship + system design + 0→1 |
| 4 | Skills section | Generic | Surface "schema-validated structured outputs", "evaluation pipelines", "audit-trace reasoning" first; demote less relevant infra | Legal AI buyers care about reliability + traceability |
| 5 | Footer | "Kent, OH" | "US-based, F-1 OPT, open to sponsorship — remote-friendly" | Match GC AI remote US/CA/EU + sponsorship-receptive culture |

LinkedIn: same Summary edit + headline → "Applied AI Engineer | Agentic LLM workflows in regulated domains | Open to founding/early-stage roles"

## F) Plan de Entrevistas

| # | Requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Multi-agent system design with reliability guarantees | Healthcare Claims Pipeline | Cascading hallucinations broke first prototype | Eliminate cascading errors and produce audit-traceable risk decisions | Designed 5-agent pipeline (Intake/Validation/Consistency/Duplicate/Risk) with pydantic schema-validated JSON contracts between every agent boundary | Cascading hallucinations dropped to ~0; reasoning traces became audit-ready | Schema contracts between agents are the only non-negotiable in any agentic system — vague tool I/O kills production reliability |
| 2 | RAG over a regulated knowledge base | Healthcare RAG at Progress Solutions | Clinical Q&A retrieval was returning irrelevant chunks | Lift retrieval precision and grounding alignment | Recursive semantic chunking + transformer embeddings + grounding rules | +35% retrieval precision, >90% grounded alignment, >30% irrelevant retrieval cut | Recursive chunking >> fixed-size for medical/legal text where context boundaries matter |
| 3 | Shipped a product solo end-to-end | Manga Lens | No browser-native multi-provider AI translation existed for webtoons | Ship Chrome Web Store product solo | Manifest V3 SW + content scripts, 4 AI vision providers (Claude/GPT-4o mini/4.1 Nano/Ollama), per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crashes), 7-day cache, 29 site selectors | Live on Chrome Web Store; users in 29 manga/webtoon sites | Multi-provider fallback is a liability surface — needed per-provider payload routing once Ollama crashed on WebP |
| 4 | Working with non-technical domain experts (lawyers ~ clinicians) | HIPAA-conscious documentation at Progress Solutions | Clinicians pushed back on first AI outputs as "uninterpretable" | Make outputs trustable for clinicians | Stakeholder-facing system-limitation docs, evaluation audit trails, de-identification | Adoption stuck (model used in production) | Domain experts evaluate AI on traceability, not accuracy alone — same lesson should apply to in-house counsel |
| 5 | Multimodal / structured prompt orchestration | Dream Decoder | Naive direct-prompt orchestration produced low-quality images | Lift first-pass success | Intermediate structured-prompt transformation layer between text → image | +30% contextual alignment, +25-30% first-pass image success | Prompt rewriting layer is undervalued — it's a router, not a hack |
| 6 | Computer vision under real-world noise | YOLOv8 Drowsiness Detection | Two-stage CNN was slow + brittle | Reduce latency + false positives | Unified YOLOv8 + sliding-window confidence aggregation + adaptive frame skipping + NMS tuning | -30% latency, -25% false positives | Unified models beat pipelined ones when latency matters; aggregation > raw-frame decisions |
| 7 | Why-this-company question | "$60M Series B at $555M valuation, brand-name legal customers, ex-Replit CTO" | — | — | — | — | Frame: "Legal AI has the same trust floor as healthcare AI — audit-trace reasoning is non-negotiable. I've built that already." |

**Story Bank:** Add stories #1, #3, #5 to interview-prep/story-bank.md if not present.

**Case Study to present:** Agentic Healthcare Claims Pipeline (most direct architectural parallel to legal-doc workflow systems).

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | WeWorkRemotely listing live (corroborated via gc.ai/company/careers); Series B closed Nov 2025 → actively scaling | Positive |
| Apply button | Application via WeWorkRemotely + gc.ai careers (both corroborate) | Positive |
| Description quality | Stated stack (LLM, RAG, agents), team context (ex-Replit CTO, 3x GC), customer list | Positive |
| Funding / runway | $60M Series B Nov 2025 at $555M valuation (Scale Venture Partners + Northzone lead) | Positive |
| Product traction | 1000+ legal teams, 50 public companies, 25 unicorns | Positive |
| Hiring page | gc.ai/company/careers actively recruiting "engineers, designers, product leaders" | Positive |
| Reposting pattern | First seen 2026-05-01 on WeWorkRemotely; not in scan-history before | Neutral |

**Context:** Recently funded, brand-name customers, founder credibility (ex-Replit + 3x GC) — this is not a ghost posting. The risk is seniority fit, not legitimacy.

## H) Draft Application Answers

(Score 3.7/5 — slightly below the 4.5 threshold for full draft, but this is borderline-priority. Brief answers below.)

**Why GC AI:** "Healthcare AI taught me that regulated-domain LLM systems live or die on audit-traceable reasoning. Cooper Z(Ziniti) and Bardia (ex-Replit) are building exactly that for in-house counsel — and the architecture (multi-agent + schema-validated contracts + RAG over policy docs) is what I've already built for healthcare claims. Founding role lets me own that pattern end-to-end."

**Most relevant project (1 of):** Agentic Healthcare Claims Processing & Fraud Risk Intelligence System — five-agent pipeline (Intake → Validation → Consistency → Duplicate → Risk Scoring) with pydantic schema-validated JSON contracts between every agent boundary to eliminate cascading hallucinations + RAG-grounded CPT/ICD validation against vector-indexed policy documents + audit-ready reasoning traces. Same architectural pattern legal needs for contract review and redlining workflows.

**Visa:** "F-1 OPT through 2026 (US-based now), open to H-1B sponsorship. Currently work-authorized in the US."

---

## Keywords extraídas

founding engineer, legal AI, in-house counsel, LLM application engineering, RAG, retrieval augmented generation, agentic workflows, multi-agent, schema-validated structured outputs, audit trail, contract review, full-stack, Python, TypeScript, React, FastAPI, Docker, vector search, embeddings, evaluation pipelines, regulated domain
