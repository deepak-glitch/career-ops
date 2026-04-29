# Panopto — AI Engineer

**Fecha:** 2026-04-29
**Arquetipo:** Applied AI / LLM Engineer (Product AI features at scale)
**Score:** 3.3/5
**URL:** https://jobs.lever.co/panopto/4c4fe959-597b-493f-bc08-a3a268153a32
**Legitimacy:** Proceed with Caution
**Location:** Remote — US
**PDF:** output/2026-04-29/cv-deepak-mallampati-panopto-ai-engineer-2026-04-29.pdf

---

## Block A — Job Snapshot

- **Company:** Panopto (visual / audio learning platform; established product, university + enterprise customers)
- **Title:** AI Engineer
- **Location:** Remote — US
- **Experience:** "Experienced AI Engineer" — implied senior; 6-Month and 1-Year success metrics suggest mid-to-senior
- **Comp:** $130K-$140K (USD, salaried)
- **Stack:** LLM providers (Anthropic explicitly named); intelligent search, AI tutoring features; Python (implied); not fully specified
- **Mission alignment:** "Bridge engineer" — define technical direction for AI features, mentor "classical" engineers into "AI bridge engineers"; ship intelligent search, AI tutoring at scale

## Block B — CV Match

| Criterion | Match | Evidence |
|-----------|-------|----------|
| Applied AI / LLM | Strong | Healthcare RAG + agentic workflows + production ML (cv.md L25-28) |
| Production AI shipping | Strong | Manga Lens on Chrome Web Store + FastAPI/Docker services (cv.md L28, L60) |
| LLM providers (Anthropic) | Match | Manga Lens uses Claude Sonnet as one of 4 providers (cv.md L60) |
| Intelligent search / RAG | Direct hit | Healthcare RAG with semantic chunking + retrieval precision +35% (cv.md L25) |
| AI tutoring (educational AI) | Decent | Suvidha video summarization + Q&A with RAG for non-technical staff (cv.md L43-47) |
| Mentoring "classical" engineers | Soft | Student Manager experience — coordinated 150+ students, ramp-up reduction (cv.md L52-55) |
| "Experienced" / mid-senior band | Soft gap | 2.5+ yrs at Progress Solutions; depth is strong but title may bias to 4-6 yrs |

## Block C — Scoring

| Dimension | Score | Notes |
|-----------|-------|-------|
| CV match | 4.0 | Strong RAG / search / multi-provider LLM fit |
| North Star alignment | 4.5 | Direct Applied AI / LLM Engineer archetype |
| Comp | 3.0 | $130-140K Remote US is mid-band for AI Engineer; below market for senior |
| Cultural signals | 3.5 | Established product (Panopto well-known in EdTech); "elevate the craft" framing |
| Red flags | -1.0 | Posting age ~4 months (created Dec 2025); "experienced" suggests 4+ yrs ask; mentor responsibility |
| **Global** | **3.3** | Apply with strong RAG/search positioning; acknowledge experience gap honestly |

## Block D — JD Hooks → Proof Points

| JD Hook | Proof Point Source |
|---------|-------------------|
| "Define technical direction and architecture for AI-powered features" | Agentic claims pipeline architecture with schema contracts (cv.md L71) |
| "LLM providers (Anthropic)" | Manga Lens — Claude Sonnet integration, multi-provider abstraction (cv.md L60) |
| "Intelligent search" | Healthcare RAG with semantic chunking + ~35% retrieval precision gain (cv.md L25) |
| "AI tutoring" / education | Suvidha video summarization + Q&A with RAG for non-technical staff (cv.md L43-47) |
| "Maintainability, scalability, cost control" | FastAPI/Docker packaging + structured logging + load simulation; ~30% defect reduction (cv.md L28) |
| "Bridge engineers" / mentoring | Student Manager — 150+ student coordination, ~20% ramp-up time reduction (cv.md L52-55) |

## Block E — Red Flags

- **Posting age** — Created ~Dec 2025 (per Lever timestamp); ~4 months old. Not necessarily ghost (slow EdTech hiring cycles), but reduces freshness signal.
- **"Experienced" / "raising the bar across Panopto"** — Suggests senior expectation; 2.5 yrs is a stretch.
- **"Bridge engineer" mentoring** — Mentoring classical engineers into AI is a real responsibility; would need to lean on Suvidha + student manager experience.
- **Comp $130-140K** — Fair for mid-level Remote US but below market for true senior.
- **F-1 OPT not addressed** — Need to clarify in screening.

## Block F — Action Plan

1. **Apply: Yes.** Tailor PDF emphasizing RAG + multi-provider LLM (Manga Lens) + structured outputs + production packaging.
2. **Cover letter:** Lead with intelligent search hook (Healthcare RAG + semantic chunking) and AI tutoring hook (Suvidha video summarization for non-technical staff).
3. **Comp ask:** Anchor at $145K base; willing to discuss equity at lower base.
4. **Sponsorship clarification:** Ask in first call.
5. **Reframe seniority gap:** "I've shipped 6 production AI systems end-to-end across healthcare, multimodal, and consumer contexts in 2.5 years — depth-per-year is strong even if total years are below the median ask."

## Block G — Posting Legitimacy

| Signal | Observation |
|--------|-------------|
| Posting age | ~4 months (Lever createdAt ~Dec 2025); not closed but staler than ideal |
| Apply button | Live (Lever API responsive) |
| Tech specificity | Medium — Anthropic named, intelligent search + AI tutoring concrete; broader stack vague |
| Realistic requirements | Mostly — "experienced" is the soft signal of seniority |
| Layoff / hiring news | Panopto is a private EdTech; no recent layoff news |
| Reposting pattern | Single posting, not republished |
| Salary transparency | Yes — $130-140K disclosed |

**Tier:** Proceed with Caution — real role, but 4-month-old posting + senior framing combined suggest the role may be filtering for a specific profile that's hard to find. Still worth applying.

## Block H — STAR+R Stories

**S (Situation):** Healthcare client needed clinical knowledge retrieval that wouldn't surface irrelevant documents to clinicians.
**T (Task):** Build a RAG system with measurable retrieval precision gains.
**A (Action):** Implemented recursive semantic chunking + transformer-based embeddings; tuned ranking with grounding rules; built evaluation pipeline tracking retrieval precision and grounded response alignment.
**R (Result):** ~35% retrieval precision improvement, >30% irrelevant retrieval reduction, >90% grounded response alignment.
**R (Reflection):** Panopto's "intelligent search" feature is the same problem at education scale — lecture content + transcripts as the corpus, learners as the query. The discipline (chunking strategy + ranking + grounding evaluation) transfers directly.
