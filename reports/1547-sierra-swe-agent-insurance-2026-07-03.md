# Evaluación: Sierra — Software Engineer, Agent - Insurance (USA, San Francisco)

**Fecha:** 2026-07-03
**Arquetipo:** Applied AI / Agentic (Agent Engineering)
**Score:** 3.8/5
**URL:** https://jobs.ashbyhq.com/sierra/000618f7-e0d0-43dc-ae15-2b20d948852f
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — US (primarily in-person)
**Region:** US
**PDF:** output/2026-07-03/cv-deepak-mallampati-sierra-swe-agent-insurance-2026-07-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / Agentic — production AI agent engineering |
| Domain | Enterprise AI agents for Financial Services / Insurance (claims, coverage, life insurance) |
| Function | Build + Deploy — ship production agents, own the Agent Development Life Cycle (ADLC) end-to-end |
| Seniority | Mid IC (no Senior/Staff in title; "build & scale end-to-end production systems") |
| Remote | Primarily in-person, San Francisco (US-based; growing global offices) |
| Team | Agent Engineering — Financial Services (Insurance vertical) |
| TL;DR | Build, tune, and evolve mission-critical AI agents in production for insurers — from pilot to deployment to continuous iteration — while embedding with enterprise customers to solve claims/coverage moments. |

## B) Match con CV

| Requisito JD | Línea(s) del CV | Match |
|--------------|-----------------|-------|
| Design & deliver production-grade AI agents (not prototypes) | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework" (Progress); "25+ AI agents and workflows" (Vanguard) | ✅ Strong |
| Own the Agent Development Life Cycle (build/tune/evolve in prod) | Agentic systems + LLM eval/monitoring framework (RAGAS, BERTScore, custom metrics) + latency/accuracy dashboards | ✅ Direct |
| Build/scale end-to-end production systems | 12 APIs & microservices, p95 1.5s→800ms, 100k+ requests/day across 20+ teams (Vanguard) | ✅ Direct |
| Comfort working directly with customers | Cross-functional delivery across 20+ internal teams; partnered with product/platform/data | ⚠️ Partial (internal stakeholders, not external enterprise customers) |
| Financial Services / insurance security & compliance (fair lending, PII) | Banking RAG at 92% precision over millions of regulatory docs; PII masking/redaction, HIPAA/SOC2/PCI DSS, audit logging | ✅ Strong (banking + regulated) |
| AI/LLM in production (even better) | GPT-4o/Claude/Gemini eval, prompt optimization, content safety (−42% unsafe outputs) | ✅ Direct |
| Founder / founding-engineer mindset, high agency | Shipped MangaLens (Chrome Web Store, 29+ sites) solo; career-ops autonomous pipeline | ✅ Adjacent |

**Gaps:**
1. **External enterprise customer engagement** — *nice-to-have but central to the role.* Deepak's customer work is internal (20+ teams at Vanguard), not external enterprise. Mitigation: frame internal-platform delivery as a customer relationship (SLAs, 100k+ req/day consumers), and lead with agency/shipping proof (MangaLens public launch).
2. **Insurance-domain specifics (claims, coverage, life)** — *nice-to-have.* No insurance experience, but banking + healthcare regulated delivery transfers directly. Mitigation: emphasize PII/compliance discipline and regulated-domain RAG.
3. **In-person SF relocation** — Deepak is Kent, OH (F-1 OPT). Per location policy this is friction, not a veto; SF is a US-entity in-person role → clean work-auth story. Mitigation: signal willingness to relocate to SF in the application.

## C) Nivel y Estrategia

- **JD level:** Mid IC agent engineer — builder with full ADLC ownership.
- **Candidate level:** Mid IC with production agentic + eval discipline — a clean fit.
- **Sell senior-without-lying:** Lead with "ships production agentic systems end-to-end with eval/monitoring rigor" — conductor–subagent framework (−42% tokens), 25+ agents, RAGAS/BERTScore harness, p95 1.5s→800ms. The ADLC framing maps 1:1 to Deepak's build→eval→monitor loop.
- **If downleveled:** Accept if comp lands in range ($180K+); the equity and brand (Bret Taylor/Clay Bavor) justify it. Negotiate a 6-month scope review on agent ownership.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| JD salary | $180K – $390K + equity | Ashby posting (compensation API) |
| US Agent/Applied AI Engineer (mid, SF) | ~$180K–$300K base + equity | Levels.fyi / market (general) |
| Role demand | Very high — AI agent engineering is among the fastest-growing 2026 IC titles | market trend |

Comp is disclosed and strong; the band is wide (spans multiple levels). FinServ is one of Sierra's fastest-growing verticals — healthy hiring signal.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | Lead "Applied AI engineer — ships production AI agents in regulated finance/healthcare, from pilot to production with eval rigor" | Mirror Sierra's ADLC + FinServ framing |
| 2 | Bullets | Foreground conductor–subagent agentic framework, 25+ agents, RAGAS/BERTScore eval harness | Direct agent-engineering proof |
| 3 | Metrics | Surface 92% precision banking RAG, −42% tokens, −42% unsafe outputs, p95 1.5s→800ms | Concrete production + safety proof |
| 4 | Skills | Promote Multi-Agent Systems, LangGraph, RAGAS/eval, content safety, PII masking to top | JD keywords (agents, prod, FinServ compliance) |
| 5 | Footer | "US-based, F-1 OPT — authorized to work in the US now; open to SF relocation" | In-person SF role; clean auth story |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Production agents, full ADLC | Conductor–subagent framework (Progress) | Complex multi-step objectives blew token budgets | Ship reliable autonomous agents | Built conductor–subagent orchestration decomposing objectives into context-scoped subagents | −42% tokens with sustained accuracy | Design the decomposition boundary before scaling agents |
| 2 | Regulated FinServ delivery | Banking regulatory RAG | Millions of regulatory docs, low tolerance for hallucination | High-precision retrieval | Dense retrieval + cross-encoder re-rank | 92% precision, −40% hallucination | In regulated domains, grounding beats cleverness |
| 3 | Eval/monitoring in prod | LLM eval framework (Progress) | Regressions slipping to prod | Catch before release | RAGAS + BERTScore + custom metrics + dashboards | Regressions surfaced pre-deploy | Evals are the contract, not an afterthought |
| 4 | Scale/reliability | 12 APIs & microservices (Vanguard) | Slow, fragile integrations | Fast, reliable services | Built microservices + retry/backoff infra | p95 1.5s→800ms, 100k+ req/day, −60% failed runs | Reliability is a feature you build first |
| 5 | High agency / ownership | MangaLens | Readers blocked by language barrier | Ship a real product solo | Built + launched Chrome extension end-to-end | Live on Web Store across 29+ sites | Shipping publicly forces real-world robustness |

Case study: Conductor–subagent agentic framework — the strongest signal for an ADLC-owning agent engineer. Red-flag Q: "Have you worked with external enterprise customers?" → honest: "My customers were 20+ internal teams consuming 100k+ requests/day with real SLAs; I ramp fast on external engagement and I've shipped a public product solo."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on Ashby posting-api; active full-time req with disclosed comp | Positive |
| Description quality | Specific ADLC/agent scope, named team (Agent Engineering — FinServ), example projects, clear comp band | Positive |
| Company hiring signals | Sierra scaling FinServ across Insurance + Financial Services verticals; multiple parallel agent-engineering reqs | Positive |
| Reposting | Distinct from prior Sierra roles processed (#710 Agent Builder, #751 Healthcare, #756 Data Platform) — new vertical, not a repost | Neutral |
| Market context | Agent engineering fills in normal cycles at well-funded labs | Positive |

**Context Notes:** Bret Taylor (OpenAI board chair) / Clay Bavor founding team; disclosed $180–390K + equity. Multi-vertical FinServ expansion is a growth signal, not ghost-posting.

---

## Keywords extraídas

AI agents, agentic, Agent Development Life Cycle, ADLC, production LLM, financial services, insurance, claims, RAG, retrieval, evals, RAGAS, BERTScore, content safety, PII, fair lending, compliance, multi-agent, orchestration, prompt engineering, customer-facing, enterprise AI, San Francisco
