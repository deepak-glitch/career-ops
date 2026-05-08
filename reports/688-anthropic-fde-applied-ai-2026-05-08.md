# Evaluación: Anthropic — Forward Deployed Engineer, Applied AI

**Fecha:** 2026-05-08
**Arquetipo:** AI Solutions / Forward Deployed Engineer (primary) + Applied AI / LLM Engineer (secondary)
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/anthropic/jobs/4985877008
**Legitimacy:** High Confidence
**Location:** Boston MA / Chicago IL / NYC NY / Seattle WA / San Francisco CA / Washington DC — Hybrid (25% in-office minimum)
**PDF:** output/2026-05-08/cv-deepak-mallampati-anthropic-fde-applied-ai-2026-05-08.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | FDE primary + Applied AI / LLM Engineer secondary |
| Domain | Frontier AI lab — enterprise customer deployment |
| Function | Build production apps inside customer systems using Claude |
| Seniority | Mid (3+ years) |
| Remote | Hybrid 25% in-office across 6 US cities |
| Comp | $200K – $300K |
| Travel | ~25% to customer sites |

**TL;DR:** Frontier-AI-lab FDE hybrid 25% across 6 US cities, $200-300K, 3+y; building MCP servers, sub-agents, agent skills inside enterprise customer systems with Claude. Anthropic explicitly sponsors visas. Strong archetype 1:1 with Deepak's agentic + RAG work — only friction is the 3+y floor (Deepak is at 2.5y) and the relocation requirement.

## B) Match con CV

| JD Requirement | CV Match | Source |
|---|---|---|
| "3+ years technical, customer-facing roles" | 1y Progress Solutions Applied AI + 1y Emerson Database/DevOps (customer-facing through enterprise stakeholders) + 0.5y student manager + portfolio shipping | cv.md — slight stretch (~2.5y core IC, ~3.5y total work) |
| "Production applications using Claude" | Manga Lens uses Claude Sonnet as primary vision provider in Chrome ext production | cv.md Projects |
| "MCP servers, sub-agents, and agent skills" | Agentic Healthcare Claims: 5-stage agent pipeline w/ JSON-schema contracts (sub-agents); RAG retrieval (skills) | cv.md Projects |
| "Python (mandatory)" | Python primary across all projects | cv.md Skills |
| "TypeScript, Java, or other languages (preferred)" | TypeScript shipped (Manga Lens, Dream Decoder); Java not in CV | cv.md Projects |
| "LLM production experience" | Healthcare RAG (~35% retrieval precision gain), agentic LLM workflows (>30% hallucination reduction), Manga Lens (4-provider production), Dream Decoder | cv.md Summary |
| "Agent development and evaluation frameworks" | Agentic Healthcare Claims (multi-agent w/ JSON-schema validation); evaluation pipeline rigor (>90% retrieval-grounded alignment) | cv.md Projects |
| "Enterprise deployment support" | Progress Solutions (HIPAA-conscious data governance, FastAPI/Docker enterprise packaging) | cv.md Experience |
| "Identify repeatable deployment patterns" | Multi-provider integration abstraction (Manga Lens 4 vision providers) | cv.md Projects |
| "Travel ~25%" | OK; F-1 OPT must stay US-based — all 6 cities are US | cv.md Location |
| "Visa sponsorship" | Anthropic sponsors visas; F-1 OPT compatible | JD |

**Gaps & mitigation:**
1. **3+ years floor (Deepak is at 2.5y core)** — Soft gap. Mitigation: frame "1y healthcare AI production at Progress Solutions + 1y enterprise database/DevOps at Emerson + 6mo Suvidha ML + 4 shipped portfolio projects = 3y+ engineering depth"; Manga Lens production ship signals senior-IC velocity.
2. **MCP-specific experience** — Soft gap. Anthropic launched MCP recently; Deepak hasn't shipped an MCP server but has shipped multi-agent JSON-contract systems (Healthcare Claims) which is the same conceptual model. Build a tiny MCP server demo in 2 days as a portfolio piece if interview progresses.
3. **Customer-facing track record** — Soft gap. Mitigation: Progress Solutions stakeholder-facing system-limitation docs + Emerson cross-functional work + Suvidha non-technical staff API design = early customer-facing exposure. Frame as "enterprise stakeholder communication" experience.
4. **Java** — Nice-to-have. Skip mention.
5. **Relocation** — Friction. Boston/NYC are most accessible from Kent OH; SF/Seattle/DC require coastal move. Note: 25% in-office is hybrid-light, easier than 5d/wk.

## C) Nivel y Estrategia

- **JD level:** Mid IC (3+y), enterprise-facing
- **Deepak's natural level:** Mid IC builder, 2.5y core

**"Vender senior sin mentir":**
- Lead with: "I've shipped 4 production Applied-AI projects (Manga Lens live on Chrome Web Store, Healthcare RAG with measurable retrieval gains, Agentic Claims with JSON-contract multi-agent design, Dream Decoder full-stack multimodal) — Anthropic's stack (Claude + agents + evals) is what I'm already building with."
- Position Manga Lens as proof of "production applications using Claude in customer systems" — Claude Sonnet is one of 4 providers in a shipped extension with real Chrome Web Store users.
- Position Healthcare RAG as proof of "enterprise deployment patterns" — HIPAA-conscious, audit-trail evaluation, FastAPI/Docker packaging.
- Position Agentic Healthcare Claims as proof of "MCP servers, sub-agents, agent skills" conceptual readiness — schema-validated agent boundaries are exactly the MCP design pattern.

**"Si me downlevelan":** Accept "Forward Deployed Engineer I" or junior-FDE band ($200-220K) for 6 months with explicit promotion criteria (1 enterprise deployment shipped + 2 MCP servers + customer-NPS proxy) → mid FDE at 6-month review.

## D) Comp y Demanda

| Data | Value | Source |
|---|---|---|
| Stated band | $200K – $300K base + bonus + equity | JD |
| Anthropic FDE 2026 market | $200-280K base typical for Mid FDE at frontier labs (Anthropic, OpenAI) | Levels.fyi 2026 frontier-lab FDE bands |
| Visa sponsorship | Yes, Anthropic sponsors (F-1 OPT compatible) | JD |
| Equity | "Offers equity" (Anthropic equity is competitive given valuation) | JD |
| Hybrid 25% | One of the lighter in-office requirements at frontier labs (vs Anthropic's 4d/wk for some teams) | JD |
| Demand | Anthropic FDE roles consistently fill 6-12 wk; frontier-lab FDE is one of the fastest-growing 2026 categories | Inferred from Anthropic 2026 hiring trajectory |

Comp is in-band for mid FDE at top-tier AI lab. Below the L5 IC band ($300-400K) but above market for 3y FDE generalist. Visa sponsorship is the standout positive vs many peers.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|--------------|------------------|---------|
| 1 | Summary | Applied AI engineer (2.5+ years) building healthcare-focused RAG | "Applied AI engineer (2.5+y) shipping production Claude-powered systems — Healthcare RAG (~35% retrieval precision gain), agentic LLM workflows (>30% hallucination reduction), shipped Chrome extension using Claude Sonnet across multi-provider production. Comfortable owning the full delivery loop from prompt/eval design to FastAPI/Docker deployment in regulated environments." | Mirror JD's "production applications using Claude" + "enterprise deployment" |
| 2 | Skills ordering | LLM & GenAI mid-list | Lead with "Claude / LLM agent design (MCP-pattern multi-agent w/ JSON-schema contracts, RAG, evals, structured outputs, guardrails)" | Match JD priority |
| 3 | Manga Lens bullet | "four AI vision providers" | "Production deployment of Claude Sonnet (one of 4 providers) in shipped Chrome extension with multi-provider payload abstraction; first published to Chrome Web Store in 2025; addresses real-time visual translation across 29 manga/webtoon sites." | Foreground Claude as primary provider |
| 4 | Healthcare RAG bullet | Standard | Add: "HIPAA-conscious eval audit trails + system-limitation docs prepared for stakeholder review — the kind of artifacts an enterprise FDE delivers." | Map to "enterprise deployment support" |
| 5 | Agentic Claims bullet | Standard | Reframe: "Multi-agent pipeline with JSON-schema contracts between agents — same design pattern as MCP servers and sub-agent skills; explainable risk scoring with audit-ready reasoning traces." | Anchor to MCP terminology |

LinkedIn changes:
1. Headline: "Applied AI Engineer | Production Claude + Agents + RAG | M.S. CS"
2. Featured: Manga Lens Chrome Web Store + Healthcare RAG case study
3. About: open with "I ship Claude-powered systems in regulated domains"
4. Skills: Anthropic Claude, MCP, agent design, RAG, evals, FastAPI, Docker
5. Open to: Boston, NYC, SF, DC, Seattle, Chicago (25% hybrid)

## F) Plan de Entrevistas

| # | JD Requirement | Story (S/T/A/R + Reflection) |
|---|---|---|
| 1 | "Build production applications using Claude" | **Manga Lens.** S: Multi-provider AI extension across consumer manga readers needed reliable cloud + local fallback. T: Integrate Claude Sonnet as the primary cloud vision provider. A: Built provider-abstraction layer with WebP for Claude, GPT-4o, GPT-4.1; JPEG fallback for local Ollama/MiniCPM; 7-day translation cache; per-domain selector configs for 29 sites. R: Live on Chrome Web Store with real users; Claude is the highest-quality provider in the abstraction. **Reflection:** Provider-specific payload trade-offs (image format, prompt format) are the recurring abstraction-leak — pin them at the boundary, never bury them. |
| 2 | "Deliver MCP servers, sub-agents, agent skills" | **Agentic Healthcare Claims.** S: Claims fraud pipeline kept cascading hallucinations across agents. T: Build a 5-stage multi-agent system that doesn't compound errors. A: Defined JSON-schema contracts between every agent (Intake → Validation → Consistency → Duplicate → Risk Scoring); RAG-grounded CPT/ICD policy validation; ANN duplicate detection; explainable risk scoring with audit traces. R: Cascade-hallucination eliminated; reasoning traces reviewable by claims auditors. **Reflection:** The schema is the contract — without it, agents drift; with it, you can hot-swap providers (same MCP design philosophy). |
| 3 | "Identify repeatable deployment patterns" | **Healthcare RAG.** S: Each new clinical knowledge domain needed retrieval tuning. T: Build a deployment pattern that generalizes. A: Recursive semantic chunking + transformer embeddings + grounded eval pipeline (>90% alignment) packaged as FastAPI service in Docker. R: ~35% retrieval precision gain; pattern reused across no-show prediction + care engagement scoring. **Reflection:** The eval harness is the deliverable — without measurable alignment, you can't ship into a regulated domain. |
| 4 | "Customer-facing technical communication" | **Progress Solutions stakeholder docs.** S: Healthcare clients needed system-limitation transparency for HIPAA review. T: Translate model-card details into stakeholder-facing language. A: Wrote evaluation audit trails + system-limitation docs covering hallucination rates, retrieval gaps, fallback behavior. R: Docs accepted in HIPAA review without rework. **Reflection:** Customers don't want "we use RAG" — they want "here's what fails and what we do about it"; lead with the failure modes. |
| 5 | "Agent development and evaluation frameworks" | **Agentic LLM workflows for multi-step healthcare queries.** S: Multi-step queries (eligibility check → care nav → doc clarification) had ~30% hallucinated linkages. T: Add structured reasoning + tool discipline + grounding. A: Defined tool boundaries, structured intermediate states, retrieval-grounded eval for each agent step. R: ~30% hallucination reduction, ~25% response-stability gain. **Reflection:** Tool discipline (every agent action goes through a typed boundary) is what made the eval tractable. |
| 6 | "3+ years experience" — Red flag | "I'm at 2.5 years core IC + 1 year enterprise database/DevOps before that — and 4 shipped Applied AI projects (Manga Lens live, Healthcare RAG, Agentic Claims, Dream Decoder) close the gap. The portfolio is the proof of senior shipping velocity." |
| 7 | Red-flag: "Why FDE not pure-IC?" | "I want customer feedback compounding into the product — at Progress Solutions I worked closest with the AI when stakeholder docs forced honesty about failure modes; FDE is that loop at frontier-lab scale." |

Case study: **Manga Lens Chrome Web Store ship + Agentic Healthcare Claims** — together they demonstrate Claude in production + MCP-pattern multi-agent design.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Greenhouse w/ working application form | Positive |
| Description quality | Specific terms (MCP servers, sub-agents, agent skills); 6 named cities; clear comp band; visa sponsorship policy stated | Positive |
| Salary disclosed | $200-300K + equity + bonus | Positive |
| Visa policy | Explicit sponsor language ("we sponsor visas...will make every reasonable effort") | Positive |
| Company hiring signals | Anthropic 2026 = aggressive growth (FDE category is strategic priority post-Claude 4 / Sonnet 4.6 launch) | Positive |
| Reposting | Anthropic FDE has multiple variants in scan-history; this specific job ID is fresh | Positive |
| Niche/seniority | 3+y FDE at frontier lab is a competitive but real role; typically fills 6-10 weeks | Neutral |

Context: Anthropic is the company building the model Deepak uses daily; the FDE/Applied AI category is one of their named 2026 investment areas. This posting is real.

## H) Draft Application Answers

(Score 3.6 < 4.5 threshold — application drafts deferred. Generate if Deepak prioritizes this and decides to apply.)

---

## Keywords extraídas

Anthropic, Forward Deployed Engineer, Applied AI, Claude, MCP servers, sub-agents, agent skills, production applications, Python, TypeScript, LLM, agent development, evaluation frameworks, enterprise deployment, customer-facing, repeatable deployment patterns, Boston, Chicago, New York City, Seattle, San Francisco, Washington DC, hybrid, visa sponsorship, frontier AI
