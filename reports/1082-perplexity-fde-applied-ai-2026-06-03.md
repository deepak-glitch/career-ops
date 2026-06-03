# Evaluación: Perplexity — Member of Technical Staff (Forward Deployed Engineer, Applied AI)

**Fecha:** 2026-06-03
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/perplexity/aa511ea8-96e3-42ba-b28f-5e222170bcee
**Legitimacy:** High Confidence
**Location:** New York City — On-site (MTS title implies high in-office expectation)
**Region:** US
**PDF:** output/2026-06-03/cv-deepak-mallampati-perplexity-fde-applied-ai-2026-06-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | FDE Applied AI — embed with enterprise customers; integrate Perplexity API Platform + Perplexity Computer (agentic) into customer systems |
| Domain | Enterprise integration — API Platform (search/retrieval) + Perplexity Computer (agentic execution across tools) |
| Function | Design + deploy end-to-end integrations; build production agent workflows; partner with Sales/Product for expansion |
| Seniority | **5+ years** software engineering / FDE / solutions eng — senior IC floor |
| Remote | NYC on-site (location field "New York City") |
| Comp | **$205K – $335K USD** + equity |
| TL;DR | Archetype perfect, comp top-tier, but **5+ YoE gate is a real stretch** (Deepak ~3). Stack overlap is strong (Python, LLM, agentic, evals, APIs). Worth applying as a "punching above weight" play given the upside; expect FDE-2 / Member of Technical Staff downlevel conversation. NYC-on-site + F-1 OPT add complexity. Score 3.3 reflects strong stack fit pulled down by hard YoE gate + on-site location. |

## B) Match con CV

| Requisito JD | Línea CV | Mapping |
|--------------|----------|---------|
| "5+ years software / FDE / SE" | Vanguard (1 yr intern) + Progress (10 mo) + Kent State research (3 mo) + Emerson (10 mo) + Suvidha (3 mo) ≈ ~3 YoE | **Hard gap** |
| "Strong Python + JS/TS/Java" | Python (Progress, Vanguard); TypeScript (Manga Lens, React); Java listed | Strong |
| "APIs + distributed systems + auth + latency" | Vanguard 12 APIs/microservices, p95 800ms; Healthcare Claims FastAPI + pgvector; Emerson RBAC | Strong |
| "Production LLM systems: prompt eng, agents, evals, deploy at scale" | Progress agentic + RAG + evals (RAGAS/BERTScore); Vanguard prompt eng + 25+ agents + 100K+ daily requests | Strong |
| "Automated end-to-end workflows replacing manual processes" | Progress fault-tolerant automation infrastructure (60% failure reduction); Healthcare Claims multi-stage automated pipeline | Strong |
| "High ownership + ambiguity + rapid prototyping" | Manga Lens solo Chrome Web Store ship; career-ops autonomous pipeline | Strong |
| "Communication with technical + executive" | Vanguard cross-functional (20+ teams); Progress stakeholder-facing system docs | Moderate (more internal than exec) |
| "Search systems / RAG / AI APIs" (nice-to-have) | Progress RAG with cross-encoder re-ranking, healthcare corpora at scale | Strong |
| "Developer tools / platform eng" (nice-to-have) | Vanguard internal AI platform | Strong |
| "High-scale low-latency design" (nice-to-have) | Vanguard 100K+/day, p95 800ms | Moderate |

**Gaps & mitigation:**
1. **5+ YoE hard gate** — biggest gap. Mitigation: position production-LLM tenure (Progress + Vanguard ≈ 2 yrs of pure LLM work) + Kent State research + Emerson enterprise as compressed-seniority signal. Lead with shipped artifacts (Manga Lens, Healthcare Claims, career-ops) not years.
2. **NYC on-site + F-1 OPT** — JD doesn't mention sponsorship. Mitigation: state F-1 OPT openly; check with recruiter pre-onsite.
3. **Executive-stakeholder communication** — more internal/clinical than C-suite. Mitigation: frame Vanguard 20+ teams as executive-adjacent.

## C) Nivel y Estrategia

**Nivel detectado:** Senior IC / MTS (5+ YoE). Deepak punches one level below.
**Candidate fit:** Stack fits, years don't. Strategy: apply as a stretch role; if invited, lead with shipped product proof; accept downlevel to MTS-1 / FDE-2 with $190-225K base.

**Sell mid:**
- "Years on a CV understate what I've shipped. I've built agentic systems with conductor–subagent orchestration + schema contracts (Progress), 25+ production agents across 20+ teams (Vanguard), a multi-agent Healthcare Claims pipeline solo, and a Chrome extension live on the store with 4 AI vision providers."
- "Perplexity Computer is agentic execution across tools — that's the same architecture as Progress's conductor–subagent + Healthcare Claims schema-validated multi-agent. Same shape, different protocol."
- "I've worked in two regulated enterprises (Vanguard financial services, Progress healthcare) — that's the customer fluency the FDE role needs."

**If pushed on YoE:** "Treat this as a stretch — and let the project work do the talking. If it makes more sense as a one-level-down hire, I'm open."

## D) Comp y Demanda

| Métrica | Valor | Fuente |
|---------|-------|--------|
| Banda publicada | $205-335K USD + equity | JD |
| Mercado FDE NYC senior IC | $220-300K base | Levels.fyi cohort |
| Demanda | Top-tier — Perplexity hiring FDE cohorts | scan-history.tsv |
| Perplexity reputation | Top-tier valuation; aggressive comp; equity-heavy | Public news |

**Negotiation:** At downlevel (MTS-1) target $200-225K base + equity. At full level: $250-285K + equity.

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | "Applied AI engineer who ships end-to-end agentic integrations into enterprise systems — production LLM, RAG, schema-validated multi-agent pipelines, latency-tuned APIs" | Mirror Perplexity FDE responsibilities |
| 2 | Lead bullet | "agentic LLM systems on conductor–subagent orchestration ... integrated with production data pipelines and observability tooling" | Map to "Perplexity Computer" agentic + integration framing |
| 3 | Vanguard bullet | Lead with "12 APIs/microservices powering AI capabilities, p95 1.5s → 800ms, supporting 100K+ requests daily across 20+ internal teams" | High-scale low-latency + integration breadth |
| 4 | Projects order | claims,manga,dream,yolo | Keep claims (multi-agent integration pattern) first |
| 5 | Skills | Surface "structured tool calling, workflow orchestration, agent skill design" front and center | Match Perplexity Computer vocabulary |

## F) Plan de Entrevistas

| # | Requisito | STAR+R |
|---|-----------|--------|
| 1 | "End-to-end integrations between LLM platform + enterprise systems" | **S**: Vanguard internal AI platform; **T**: 20+ teams w/ heterogeneous data; **A**: 12 APIs + structured logging + cross-team eval; **R**: 100K+ daily req, p95 800ms, +27% success across model evals; **Reflection**: API contracts are the integration — eval harnesses make them auditable. |
| 2 | "Agent-driven workflows across tools" | **S**: Healthcare Claims 5-stage agentic; **T**: cascading hallucinations across agent handoffs; **A**: schema-validated JSON contracts + RAG-grounded validation; **R**: zero cascade; **Reflection**: contracts not LLM judgement are the deterministic floor. |
| 3 | "Debug across APIs + infrastructure + external deps" | **S**: Emerson Synthesis ERP; **T**: deadlocks + stored proc latency; **A**: DMV-driven Grafana dashboards + index/partition tuning; **R**: deadlocks -15%, latency -25%; **Reflection**: telemetry-first debugging works the same in LLM + traditional stacks. |
| 4 | "Prototype + ship reusable patterns" | **S**: Manga Lens; **T**: 4 AI vision providers, 29 sites, MV3 constraints; **A**: per-provider abstraction + per-domain configs; **R**: live on store; **Reflection**: per-provider abstraction was the reusable pattern that 3 future providers slotted into for free. |
| 5 | "Partner with Sales + Product for expansion" | **S**: Progress stakeholder-facing system limitation docs; **T**: skeptical clinical stakeholders; **A**: audit-ready risk-scoring + de-identification artifacts; **R**: zero PII exposure, stakeholder adoption; **Reflection**: trust artifacts unlock expansion faster than feature lists. |
| 6 | "5+ YoE level rebuttal" | Frame production-LLM tenure (Progress + Vanguard ~2 yrs LLM-pure) + 4 shipped projects + 25+ agents in prod as compressed-seniority signal. |

**Red-flag prep:** "Why apply when you're under 5 YoE?" → "I'm a stretch on years and a fit on the work. If the panel signals a downlevel, I'm open to MTS-1 / FDE-2." | "F-1 OPT?" → "Currently on OPT; need sponsorship — happy to confirm Perplexity's policy early."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Ashby posting; comp band published | Positive |
| Description quality | Very detailed: 5+ YoE, Python+TS/Java, APIs + distributed systems + LLM specifics, comp $205-335K | Positive |
| Company hiring | Perplexity hiring aggressively across FDE roles; well-funded series; no layoff signal | Positive |
| Reposting | Multiple Perplexity FDE roles seen in scan-history; expansion pattern | Positive |
| Role market | FDE Applied AI = #1 demand 2026 | Positive |

## H) Draft Application Answers
(skip — score 3.3 < 4.5)

---

## Keywords extraídas

Forward Deployed Engineer, Member of Technical Staff, Perplexity, API Platform, Perplexity Computer, agentic workflows, enterprise integration, Python, TypeScript, Java, LLM production, prompt engineering, agent workflows, evaluation, RAG, system design, distributed systems, low-latency, search, retrieval, AI APIs
