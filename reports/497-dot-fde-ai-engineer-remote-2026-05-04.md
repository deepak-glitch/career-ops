# Evaluación: Dot — Forward Deployed AI Engineer (Remote)

**Fecha:** 2026-05-04
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Generative AI / RAG Engineer
**Score:** 3.2/5
**URL:** https://www.workatastartup.com/jobs/87890
**Legitimacy:** High Confidence
**Location:** Remote (verify time-zone overlap; customer mix Airbyte/Babbel/Duolingo/Fastly/Flix/GLS suggests EU-leaning roster — confirm in screen)
**PDF:** output/2026-05-04/cv-deepak-mallampati-dot-fde-ai-engineer-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | FDE + Applied AI for an AI data assistant (chat with company data via Slack/Teams/web) |
| Domain | AI analytics / NL-to-SQL-style assistant trained on company data |
| Function | Customer enablement engineer — diagnose issues, build lightweight tooling, feed learnings back to product |
| Seniority | Not stated explicitly — implied Mid IC |
| Remote | Remote (confirmed in title) — time-zone scope to verify |
| Team | Customer-facing AI org, customer roster mostly EU (Airbyte, Babbel, Duolingo, Fastly, Flix, GLS) |
| TL;DR | Make Dot's AI data assistant work reliably for real customers — sit between product, engineering, and customer success; build workarounds, unblock data teams, scale enablement. |

## B) Match con CV

| JD requisito | CV evidence |
|---|---|
| AI assistant on company data | Healthcare RAG with semantic chunking + transformer embeddings + grounded eval (cv.md L25); Suvidha Q&A RAG with semantic chunking (cv.md L46) |
| Diagnose issues live in customer environments | Stakeholder-facing system-limitation docs + audit trails at Progress Solutions (cv.md L30) |
| Lightweight tooling / workarounds | Manga Lens multi-provider abstraction with per-provider failure isolation (cv.md L60) |
| Customer-facing technical comms | Suvidha Flask API + lightweight web UI for non-technical staff (cv.md L47); stakeholder limitation docs (cv.md L30) |
| Python | Python production stack across roles (cv.md L12) |
| Slack/Teams enablement context | Limited direct experience; Manga Lens shows shipped browser-extension UX experience |
| Data analytics + LLM grounding | Healthcare RAG (~35% retrieval precision, >90% groundedness) + agentic LLM (>30% hallucination reduction) (cv.md L25-26) |

**Gaps:**
1. **Customer roster is EU-leaning** — Time-zone overlap with EU may be required; F-1 OPT keeps Deepak ET-based, which is workable for AM EU overlap but tight.
2. **Sponsorship not stated** — Small-team European-leaning startups often don't sponsor; flag in screen.
3. **Pure customer-enablement framing (vs technical depth)** — Deepak's superpower is technical depth; this role rewards technical empathy + customer presence.
4. **No prior data-team enablement work** — Mitigation: stakeholder-facing healthcare workflow is structurally similar.

## C) Nivel y Estrategia

- **Detected level:** Mid IC (implied; remote role with technical-customer focus).
- **Vender:** "2.5 yrs production Applied AI: healthcare RAG with ~35% retrieval-precision gain, agentic LLM workflows with >30% hallucination cut, stakeholder-facing system-limitation docs. Built Manga Lens browser extension solo with 4 vision providers and per-provider failure isolation. Comfortable diagnosing live, shipping workarounds, and feeding learnings into product."
- **Si downleveled:** Ask about $100K-$130K base + token equity; remote-first is the offer.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | Not disclosed in JD; Dot is YC-funded so likely $90K-$140K base + equity |
| Funding | YC; customer roster includes Airbyte, Babbel, Duolingo, Fastly, Flix, GLS — credible enterprise signal |
| Visa | Not stated; flag in screen |
| Demand | NL-to-data analytics is hot; Dot competes with Hex, Julius, Glean |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | Lead with "RAG + grounding + customer-embedded delivery + lightweight tooling" | Mirror JD verbatim |
| 2 | Bullets | Surface healthcare RAG (~35%), stakeholder docs, Manga Lens multi-provider isolation, agentic LLM (>30% hall reduction) | Direct JD asks |
| 3 | Skills | Python, RAG, embeddings, vector search, FastAPI, Docker, Slack/Teams patterns | Keyword pass |
| 4 | Projects | Manga Lens first (multi-provider customer-facing), Dream Decoder second (structured prompts), claims pipeline third | All show product-facing reliability |
| 5 | Footer | "Remote-first; F-1 OPT US-base; ET-zone with EU AM overlap" | Match JD location |

## F) Plan de Entrevistas

| # | Requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Diagnose live customer issues | Healthcare RAG retrieval drift | Clinicians flagged drops in answer relevance week-over-week | Recreated query slices, ran eval harness, isolated chunking step | Restored alignment to >90% with new chunking thresholds | Drift signals integrated into ongoing eval audit trail | Live diagnostics need an eval harness from day one |
| 2 | Lightweight tooling for unblock | Manga Lens per-provider failure isolation | 4 vision providers, each with payload quirks (CUDA crash on JPEG, etc) | Built provider-shim layer with per-provider payload encode + 7-day cache | Shipped to Chrome Web Store, 29 sites supported | Provider failures stopped breaking user sessions | Provider redundancy + dedup beats single-provider reliance |
| 3 | Feed learnings back to product | Agentic LLM hallucination loop | Multi-step healthcare queries had cascading hallucinations | Schema-validated JSON contracts between agents + tool-discipline rules | Production agentic pipeline | >30% hallucination reduction, ~25% stability gain | Tool discipline + grounding > free-form agent loops |
| 4 | Python ownership | Multi-agent claims pipeline | 5-stage pipeline needed schema discipline | Schema-validated JSON contracts, RAG-grounded CPT/ICD validation, ANN duplicate detection | Production agentic claims processing | Audit-ready, explainable risk scoring | Schemas prevent cascading agent failures |
| 5 | Customer-facing comms | Stakeholder limitation docs at Progress | Clinicians needed honest scope of what model couldn't do | Wrote system-limitation docs + walkthroughs + audit trails | HIPAA-conscious adoption | Clinician trust unlocked deployment | Doc the unknowns; trust > raw accuracy |
| 6 | Remote/async excellence | Suvidha Foundation Flask API | 5,000+ recorded sessions, async non-technical staff | Built Flask + lightweight web UI | Async highlight extraction service | 60-70% manual review time cut, ~85% alignment | Async tooling > synchronous handoffs |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on YC WaaS + main YC pages reference it | Positive |
| Apply button | Active | Positive |
| Description quality | Names customers (Airbyte, Babbel, Duolingo, Fastly, Flix, GLS), specific FDE-enablement framing | Positive |
| Salary transparency | Not disclosed | Neutral |
| Reposting | One canonical posting; FDE role consistent with Dot's product motion | Positive |
| Layoffs / freeze | None — YC-funded growth | Positive |
| Role market context | NL-to-data analytics + customer enablement is one of the top-5 GenAI tracks | Positive |

**Assessment:** **High Confidence** — YC-backed, named enterprise customers, FDE motion is core to Dot's GTM.

---

## H) Draft Application Answers (score 3.2 — included for ready-to-apply)

**Why are you interested in Dot?**
> Dot is solving the problem I've been working on in healthcare — letting non-technical users actually trust an AI assistant grounded in their company's data. At Progress Solutions I built a clinical-knowledge RAG system with ~35% contextual retrieval precision gain and >90% grounded alignment, and authored stakeholder-facing system-limitation docs because clinicians need to know what the AI can't do. That's the same trust-and-grounding work Dot's enablement role asks for. The remote-first FDE motion plus the Airbyte/Duolingo/Fastly customer roster is exactly the scale I want to learn at next.

**Describe a time you built a workaround to unblock a customer.**
> Manga Lens has 4 AI vision providers, each with a different failure mode — Ollama crashes CUDA on JPEG payloads, OpenAI rate-limits on long sessions, etc. Real users were getting half-translated panels because one provider would silently fail mid-page. I built a provider-shim layer with per-provider payload encoders (WebP for cloud, JPEG for Ollama with size guards), 7-day translation cache for retry, and silent fallback chains. Shipped to Chrome Web Store with 29-site selector configs. The lesson: provider redundancy plus dedup beats single-provider reliance — and the user never sees the chaos underneath.

---

## Keywords extraídas

Forward Deployed AI Engineer, Customer Enablement, Remote, RAG, Grounding, Slack, Teams, AI Data Assistant, Python, LLM, FastAPI, Lightweight Tooling, Workaround, Diagnose, Customer Success, YC, Airbyte, Babbel, Duolingo, Fastly, Flix, GLS
