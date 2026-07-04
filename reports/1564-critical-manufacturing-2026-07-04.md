# Evaluación: Critical Manufacturing — AI Engineer (MCP / AI Infrastructure)

**Fecha:** 2026-07-04
**Arquetipo:** AI Platform / MLOps Engineer (MCP servers, LLM tooling, observability)
**Score:** 3.6/5
**URL:** https://careers.criticalmanufacturing.com/_/j/80884AD24A
**Legitimacy:** Proceed with Caution
**Location:** Porto (Maia), Portugal — Intl (on-site HQ)
**Region:** Intl
**PDF:** output-intl/2026-07-04/cv-deepak-mallampati-critical-manufacturing-2026-07-04.pdf
**Verification:** unconfirmed (batch mode — careers page live in Workable index; JD corroborated via aggregators; Playwright/direct fetch blocked by proxy)

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Platform / MLOps Engineer (MCP, LLM tool integration, model observability) |
| Domain | Enterprise — MES / Industry 4.0 software (semiconductor, electronics, medical devices) |
| Function | Build — MCP servers, tooling for model observability/telemetry, retraining pipelines |
| Seniority | Mid IC ("no leadership required, just solid execution within a collaborative team") |
| Remote | On-site — Porto (Maia), Portugal HQ |
| Team | Existing AI engineering team building reliable AI infrastructure for manufacturing systems |
| TL;DR | Build and maintain Model Context Protocol (MCP) servers connecting LLMs to manufacturing tools/data, plus observability, telemetry, and retraining pipelines — hands-on AI-infra IC work. |

## B) Match con CV

Leído `cv.md`.

| Requisito JD | Línea(s) del CV | Match |
|--------------|-----------------|-------|
| Implement/maintain MCP servers connecting LLMs to tools/data | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework" (tool-calling/tool integration core) | ✅ Strong (agentic tool-integration; MCP-adjacent) |
| Define clear interfaces for tool integration; map workflows into tools/prompts | Prompt optimization across GPT-4o/Claude/Gemini; 12 APIs/microservices | ✅ Direct |
| Model observability, telemetry, retraining pipelines | "LLM evaluation and monitoring framework (RAGAS, BERTScore, custom metrics) + latency/accuracy dashboards" | ✅ Direct |
| Safe/reliable model access to business logic | Content controls/safeguards at Vanguard (unsafe outputs −42%); prompt-injection mitigation (skills) | ✅ Direct |
| Excellent SWE fundamentals: VCS, testing, code review, docs | 12 APIs/microservices; IEEE paper; Git/Jira/Confluence; CI/CD (Jenkins, Azure DevOps) | ✅ Strong |
| Optimize server performance | "prompt compression, semantic caching, model routing … sustaining SLA"; p95 1.5s→800ms | ✅ Direct |
| Collaborate under technical leadership, cross-team (Product/Data/Platform) | "Partnered with product, platform, and data engineering teams … 20+ internal teams" | ✅ Direct |

**Gaps:**
1. **Manufacturing / MES (Industry 4.0) domain** — *nice-to-have.* No semiconductor/MES background. Mitigation: emphasize fast ramp on proprietary platforms (Vanguard internal AI platform, 25+ agents) and regulated-domain delivery (banking, healthcare) as evidence of learning complex domains quickly.
2. **On-site Porto, Portugal (relocation + work authorization)** — *hard logistical blocker for a US-based F-1 OPT candidate.* Mitigation: only pursue if open to EU relocation; acknowledge authorization/relocation honestly. Flagged per work-auth policy — does not veto the technical score.
3. **Explicit MCP protocol experience** — *adjacent, not literal.* Deepak's agentic tool-integration + orchestration is the closest analog; MCP is a thin, learnable protocol layer over tool-calling he already does. Mitigation: frame conductor–subagent + tool-calling work as directly transferable to MCP server implementation.

## C) Nivel y Estrategia

- **JD level:** Mid IC — "solid execution," "no leadership required," works "under technical leadership."
- **Candidate level:** Clean mid-IC fit; Deepak's agentic + eval/observability + backend work maps almost 1:1 to the MCP-server + observability + retraining charter.
- **Sell without lying:** Lead with "builds the AI infrastructure LLMs run on — tool integration, evals, observability, retraining." Cite RAGAS/BERTScore monitoring framework, conductor–subagent tool orchestration, semantic caching/model routing for server perf.
- **If offered:** Comp in Portugal will be well below US bands; only makes sense with relocation intent. Negotiate relocation support + confirm EU work-authorization path.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| JD salary | Not listed | JD |
| AI/ML Engineer, Porto | ~€35k–€60k gross/yr (mid) | Glassdoor / Portugal market (general) |
| MCP / LLM-infra role demand | Rising sharply in 2026 (MCP adoption) | market trend |

Comp undisclosed (common in PT postings). Portugal bands are materially lower than US; the draw here is the MCP/AI-infra charter, not compensation. Cited ranges are general market, not company-confirmed.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | Lead "AI infrastructure engineer — tool integration (MCP-style), LLM observability, evals, and retraining pipelines" | Mirror JD's MCP + observability + retraining framing |
| 2 | Bullets | Foreground conductor–subagent tool orchestration + RAGAS/BERTScore monitoring + semantic caching/model routing | Direct hits on tool interfaces, observability, server perf |
| 3 | Skills | Promote LLM tooling, monitoring/observability, evals, Python, FastAPI, Docker/K8s | JD infra keywords |
| 4 | Metrics | Surface 42% token cut, unsafe outputs −42%, p95 1.5s→800ms | Reliability + performance proof |
| 5 | Footer | Acknowledge EU relocation openness / authorization honestly (non-US role) | Work-auth transparency policy |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | MCP servers / tool integration | Conductor–subagent tool orchestration | LLMs needed safe access to many tools | Ship reliable tool-calling infra | Built context-scoped subagents with tool interfaces | 42% token cut, sustained accuracy | Clean tool contracts beat clever prompts |
| 2 | Model observability / telemetry | LLM eval & monitoring framework | No visibility into model regressions | Instrument evals + dashboards | Built RAGAS/BERTScore + latency/accuracy dashboards | Caught regressions pre-deploy | Observability is a feature, not an afterthought |
| 3 | Retraining pipelines | Fault-tolerant automation infra | Failed/unreliable batch runs | Reliable pipelines | Scheduled orchestration + backoff retries | 60% fewer failed runs | Build the retry path first |
| 4 | Server performance optimization | Inference cost/latency work | SLA pressure at scale | Cut per-query overhead | Prompt compression, semantic caching, model routing | Held SLA, p95 1.5s→800ms | Cache the boring 80% |
| 5 | Safe/reliable model access | Vanguard content controls | Unsafe/off-policy outputs | Enforce safe responses | Built safeguards + policy controls | Unsafe outputs −42%, quality held | Guardrails at the boundary, not the model |

Case study: RAGAS/BERTScore monitoring framework + conductor–subagent tool orchestration — the two-part story for an AI-infra/MCP role. Red-flag Q: "Have you built MCP servers specifically?" → honest: "I've built the agentic tool-integration and orchestration MCP standardizes — implementing MCP servers is a protocol layer over work I already do daily."

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | careers.criticalmanufacturing.com posting live in current Workable index; ITJobs mirror expired | Neutral |
| Description quality | Specific and current (MCP servers, observability, telemetry, retraining, named cross-teams) — clearly role-specific, low boilerplate | Positive |
| Company hiring signals | Critical Manufacturing established MES vendor (Porto HQ), multiple concurrent engineering openings | Positive |
| Reposting | AI Engineer + related roles appear across multiple boards (Glassdoor, ITJobs) | Neutral |
| Market context | AI-infra/MCP IC role fits a scaling AI team; on-site HQ role fills in normal cycles | Positive |

**Context Notes:** One aggregator mirror (ITJobs) expired, but the canonical careers page is live and the JD is highly specific/current (MCP is a 2025–2026 concept), which argues against a stale ghost post. Direct-page verification was blocked (proxy/JS SPA), hence "Proceed with Caution" rather than "High Confidence." On-site Porto + relocation/authorization is the primary practical hurdle for this candidate, not legitimacy.

---

## Keywords extraídas

MCP, Model Context Protocol, AI infrastructure, LLM, tool integration, model observability, telemetry, retraining pipelines, prompt engineering, evals, RAGAS, software engineering fundamentals, testing, code review, Python, manufacturing, MES, Industry 4.0, semantic caching, model routing
