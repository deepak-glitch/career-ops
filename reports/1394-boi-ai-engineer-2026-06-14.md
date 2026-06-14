# Evaluación: Board of Innovation (BOI) — AI Engineer

**Fecha:** 2026-06-14
**Arquetipo:** Applied AI / LLM Engineer + AI Solutions / Forward Deployed (híbrido)
**Score:** 3.4/5
**URL:** https://apply.workable.com/boardofinnovation/j/531B141B6C
**Legitimacy:** High Confidence
**Location:** Belgium HQ (Antwerp) — exact base TBD; perm/contractor based on location & work auth
**Region:** Intl
**PDF:** output-intl/2026-06-14/cv-deepak-mallampati-boi-ai-engineer-2026-06-14.pdf
**Verification:** unconfirmed body (Workable JD body empty in WebFetch; details corroborated via WebSearch surfacing same posting)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Applied AI / LLM Engineer + Solutions/FDE (client-facing) |
| Domain | Applied AI for large/scale-up clients; production AI products with business impact |
| Function | Build agentic systems, RAG, evals, observability; client conversations from scoping → delivery |
| Seniority | Mid (3+ años producción de sistemas AI) |
| Remote | Belgium HQ; setup final depende de location/work auth (perm vs contractor) |
| Team | Engineering (collaborates con strategists, designers) |
| Comp | No revelada |
| TL;DR | Strong skills + archetype match (agents, MCP, tool use, RAG, evals, structured outputs) at 3+ yr level — fits Deepak; Intl/EU work-auth is the binding friction. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| 3+ yrs shipping AI in production | ~4 yrs (Progress + Vanguard + Kent State + Emerson) | ✅ Excede |
| Python fluency | Python primary | ✅ Fuerte |
| Modern LLM patterns: agents, MCP, skills, tool use | "agentic LLM systems", "conductor–subagent orchestration", 25+ AI agents @ Vanguard | ✅ Fuerte |
| Retrieval / RAG | Healthcare RAG, dense + cross-encoder, 92% precision | ✅ Fuerte |
| Structured outputs + evals | RAGAS + BERTScore + custom domain metrics + dashboards | ✅ Fuerte |
| Software engineering hygiene (CI/CD, testing, VC) | Jenkins/Azure DevOps, Docker, Git, MLflow/W&B | ✅ Fuerte |
| Accuracy / latency / cost / maintainability trade-offs | "prompt compression, semantic caching, model routing"; p95 1.5s→800ms | ✅ Fuerte |
| Evals + observability + feedback loops | Custom LLM evaluation/monitoring framework + dashboards | ✅ Fuerte |
| Client conversations (scoping → delivery) | Internal partnering 20+ teams; not external consulting | ⚠️ Parcial |
| CS/math/eng degree | M.S. CS, Kent State | ✅ |

**Gaps y mitigación:**
1. **External client-facing scoping** — *Nice-to-have.* Mitigación: reframe Vanguard cross-functional partnering (product/platform/data, 20+ teams) y Progress Solutions stakeholder partnering como customer-adjacent.
2. **EU work authorization / location** — *Friction.* JD explicita perm-vs-contractor depende de location y "local compliance"; BOI HQ Antwerp. Deepak es US-based F-1 OPT; preguntar si contractor remote (US-based) está abierto o si requieren EU.
3. **MCP specifically** — Mencionado en JD; CV no menciona MCP por nombre pero la línea agentic + tool use cubre el patrón.

## C) Nivel y Estrategia

1. **Nivel detectado:** Mid (3+ yrs). **Nivel del candidato:** ~4 yrs — fit directo, sin down-level risk.
2. **Vender:** Liderar con agentic orchestration (-42% tokens), RAG en producción (92% precision), eval framework (RAGAS/BERTScore custom), and "ship AI to 20+ internal teams" como proxy de client delivery.
3. **Si downlevelan:** Improbable; el JD calibra en 3+ con énfasis en "real software engineer" (CI/CD, testing) — Deepak califica.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp | No revelada (perm vs contractor variable) | JD |
| Funding/Status | BOI established Belgian innovation consultancy, applied-AI practice growing | WebSearch |
| Demanda | High — applied AI for enterprise is BOI's growth axis | WebSearch |
| Market (Applied AI Mid, EU) | ~€55-85K base perm; €450-650/day contractor | EU mid market |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | regulated-enterprise framing | "Applied AI engineer — agents, MCP-style tool use, RAG, structured outputs, evals" | Mirror JD exactly |
| 2 | Hero metrics | mixed | -42% tokens (agentic), 92% precision RAG, +27% task success, eval framework | Maps to agents + RAG + evals asks |
| 3 | Skills order | generic GenAI first | Promote LangChain/LangGraph, agents/tool use, RAG, RAGAS/evals, FastAPI | ATS + JD priorities |
| 4 | Experience | Progress first | Surface Vanguard agents (25+) + eval/safeguards (+27% task, -42% unsafe) | Direct match |
| 5 | Footer | US location | "US-based (F-1 OPT); open to EU contractor or US-remote setup per BOI flexibility" | Transparency on auth |

## F) Plan de Entrevistas (STAR+R)

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Agents + tool use | Conductor–subagent orchestration | Multi-step objectives blew token budgets | Cut cost, hold accuracy | Context-scoped subagents w/ tool use | -42% tokens, accuracy held | Scoped subagents beat mega-prompts |
| 2 | RAG / retrieval | Healthcare RAG | Hallucination on domain queries | Lift precision | Dense + cross-encoder re-rank | 92% precision, -40% halluc. | Re-ranking biggest lever |
| 3 | Evals + feedback loops | LLM eval framework | Catch regressions pre-deploy | Trust iterations | RAGAS + BERTScore + custom + dashboards | Surfaced regressions early | Eval-first iteration beats eyeballing |
| 4 | Accuracy/latency/cost trade-offs | Vanguard API perf | Reduce latency at scale | SLA-safe | Prompt compression + semantic cache + model routing | p95 1.5s→800ms; cost down | Caching at the right key was free latency |
| 5 | Software hygiene | Vanguard delivery | Ship reliably to 20+ teams | Maintainable | CI/CD + testing + observability | 99.9% uptime, 100k+ req/day | Observability up front saved firefighting |
| 6 | Client scoping | Cross-functional partnering | Translate AI to product/platform/data | Align + ship | Partnered across functions | Adopted across teams | Explaining trade-offs simply built trust |

**Case study:** Agentic Healthcare orchestration (-42% tokens) + Vanguard 25+ agent platform — both demonstrate BOI's "applied AI products with measurable business impact" framing.
**Red-flag Qs:** "EU vs remote?" → US-based F-1 OPT; open to US-remote contractor or EU contractor if BOI supports; ask flexibility. "MCP specifically?" → familiar con tool-use patterns; happy to adopt MCP spec.

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Workable listing live 2026-06-14; corroborated via WebSearch surfacing same role | Positive |
| Description quality | Specific (agents, MCP, tool use, retrieval, evals, structured outputs) | Positive |
| Realistic requirements | 3+ yrs + Python + LLM eng — coherente para mid Applied AI | Positive |
| Flexibility disclosure | Perm vs contractor based on location/auth — pragmatic, real | Positive |
| Company hiring signals | BOI applied-AI practice growing, multiple AI roles open | Positive |

**Context Notes:** Workable JD body returned empty via WebFetch — body inferred from public search corroboration. **Verification:** unconfirmed body, posting itself confirmed live.

## H) Draft Application Answers
_(score < 4.5 — drafts omitted; queda como aplicable a discreción del usuario si EU contractor es viable)_

---

## Keywords extraídas
applied AI, AI engineer, agents, MCP, tool use, retrieval, RAG, structured outputs, evals, Python, LLM engineering, observability, feedback loops, CI/CD, testing, software hygiene, client scoping, accuracy, latency, cost, maintainability, Belgium, BOI
