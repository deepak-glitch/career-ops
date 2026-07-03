# Evaluación: NewsBreak — Applied AI Engineer, Advertising Agents

**Fecha:** 2026-07-03
**Arquetipo:** Applied AI / LLM Engineer + AI Solutions / Forward Deployed Engineer
**Score:** 4.1/5
**URL:** https://job-boards.greenhouse.io/newsbreak/jobs/4690262006
**Legitimacy:** High Confidence
**Location:** Mountain View, CA — on-site (US-based; work auth required)
**Region:** US
**PDF:** output/2026-07-03/cv-deepak-mallampati-newsbreak-applied-ai-engineer-advertising-agents-2026-07-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer — build agentic AI product features |
| Domain | Agentic / advertising — AI-driven account-management & optimization platform |
| Function | Build + ship — design agent workflows, diagnostic models, reliability safeguards |
| Seniority | Entry–mid IC ("fresh graduates are acceptable" with foundational knowledge) |
| Remote | On-site, Mountain View, CA |
| Team size | Ad delivery + product collaboration |
| TL;DR | Build an AI-driven advertiser account-management platform with LLM agents (RAG, tool-use, memory, orchestration, structured outputs), long-running services, and K8s deployment. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| LLMs, RAG, tool-use, memory handling, agent orchestration | Conductor–subagent agentic framework; healthcare RAG (dense + cross-encoder re-rank); 25+ AI agents @ Vanguard; LangChain/LangGraph | ✅ Strong (1:1) |
| Structured/schema-validated LLM outputs + modern model API integration | Structured outputs, content safety; GPT-4o/GPT-5/Claude/Gemini API integration | ✅ Strong |
| REST/API integration + long-running service development | 12 APIs/microservices; FastAPI; p95 1.5s→800ms | ✅ Strong |
| Kubernetes or similar deployment | Docker, Kubernetes, Terraform, CI/CD | ✅ Strong |
| Production-quality code, async/concurrent programming | Async batch orchestration, exponential-backoff retry, 60% fewer failed runs | ✅ Strong |
| Machine learning & AI fundamentals | PyTorch/TensorFlow, NER/classification, drift detection | ✅ Strong |
| Advertising or recommendation system concepts | Not directly — healthcare/fintech domains | ⚠️ Gap (domain) |

**Gaps + mitigation:**
1. **Advertising / recsys domain** — not a hard blocker; the role is fundamentally an agentic-AI build role, not an ads-science role. Mitigation: emphasize transferable "diagnostic + optimization agent" pattern (health-scoring models → account-health models), and fast-learner framing (JD accepts fresh grads).
2. **On-site Mountain View, CA** — Deepak is Kent, OH but open to relocation. Flag logistics; not a score veto (US role).
3. **Work authorization** — F-1 OPT (authorized now; future sponsorship). Flag honestly.

Net: **near-complete** fit on the technical core (agentic orchestration + RAG + structured outputs + K8s + async services). Domain is the only real delta, and the JD is explicitly entry-friendly.

## C) Nivel y Estrategia

- **JD level:** Entry–mid IC (fresh grads acceptable). **Candidate level:** at/above — 4+ yrs with production agentic + RAG + microservices depth exceeds the floor comfortably.
- **Sell-senior-without-lying:** Position as "agentic-AI builder who ships reliable production services" — conductor–subagent orchestration + 25+ agents @ Vanguard + observability/guardrails directly match the platform-reliability emphasis.
- **If down-leveled:** Comp band already entry-friendly; anchor on production agentic experience for the upper half of the range.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (JD-disclosed) | **$135,000–$185,000 USD/yr** | JD (Greenhouse) |
| vs. Deepak target ($100–130K) | Above target across the band | profile |
| Company | NewsBreak — content platform, 40M+ MAU | JD / public |
| Demand | Agentic AI product engineers = very high demand | Market context |

Comp disclosed and above target; entry-friendly posting with strong upside.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Regulated-RAG framing | Reframe as "agentic-AI builder shipping reliable production LLM services" | Mirror JD's agent + reliability center |
| 2 | Bullets | Agentic + RAG scattered | Cluster orchestration + tool-use + memory + structured outputs into one line | Exact JD building blocks |
| 3 | Diagnostic/optimization | Risk/health ML present | Frame patient no-show/health-scoring as "diagnostic + optimization models" | JD wants account-health diagnostics |
| 4 | Infra | Docker/K8s present | Surface long-running services + async + observability | JD emphasizes reliability/safeguards |
| 5 | Projects | career-ops/MangaLens | Foreground as shipped AI-native products | Signals ship-fast builder |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Agent orchestration | Conductor–subagent framework | Complex multi-step objectives | Reliable autonomous workflows | Context-scoped subagents | 42% token reduction, accuracy held | Decomposition beats bigger context |
| 2 | RAG + tool-use | Healthcare RAG | Hallucination on domain queries | Improve relevance/grounding | Dense retrieval + cross-encoder re-rank | Reduced hallucination | Hybrid retrieval + re-rank is the workhorse |
| 3 | Reliability / safeguards | Automation infra | Failing production runs | Fault tolerance | Retry + backoff + batch orchestration | 60% fewer failed runs | Reliability is a first-class feature |
| 4 | Diagnostic/optimization models | Patient no-show / care-engagement risk | Predict + prioritize | Recall on high-risk | 15–20% recall gains | Better targeting | Diagnostic scoring transfers across domains |
| 5 | Long-running services / API | 12 APIs/microservices @ Vanguard | New AI capabilities at scale | Low latency | p95 1.5s→800ms, 100K+ req/day | Faster integration | API discipline scales product velocity |
| 6 | Ship fast | career-ops + MangaLens | Idea → working product | Autonomous pipeline / live extension | Shipped both end-to-end | Real users / autonomous runs | AI-native building compresses idea→ship |

**Case study:** Conductor–subagent agentic framework — maps 1:1 to the JD's "AI agent workflows + reliability safeguards" for account optimization.
**Red-flag Qs:** "No ads background?" → "Right — my edge is the agentic + diagnostic-scoring pattern, which transfers directly; I ramp fast on domain." "Work authorization?" → "F-1 OPT, authorized now, sponsorship later, open about it." "Relocate to Mountain View?" → yes.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on Greenhouse boards API, full JD | Positive |
| Tech specificity | High (RAG, tool-use, memory, orchestration, structured outputs, K8s, async) | Positive |
| Requirements realism | Coherent entry–mid agentic-build scope | Positive |
| Company | NewsBreak — established, 40M+ MAU, broad live hiring | Positive |
| Salary | Disclosed ($135–185K) | Positive |
| Location clarity | Explicit Mountain View, CA | Positive |

**Context:** First-party posting, disclosed comp, specific agentic stack, explicitly entry-friendly = high-confidence real role.

## H) Draft Application Answers

**Why this role?**
> "I build production agentic-AI systems — a conductor–subagent orchestration framework, 25+ AI agents on Vanguard's internal platform, and RAG pipelines with measurable hallucination reduction. This role's account-optimization agents (RAG, tool-use, memory, structured outputs, reliability safeguards) are exactly the systems I ship, and I move fast: I've shipped career-ops (an autonomous AI pipeline) and MangaLens (a live Chrome extension) end-to-end."

**Relevant experience with agent workflows + reliability:**
> "At Vanguard I built AI agents and backend services across 25+ agents and 12 microservices, cutting p95 latency 1.5s→800ms and serving 100K+ requests/day. My agentic framework decomposes objectives into context-scoped subagents (42% token reduction with accuracy held), and I harden pipelines with retry/backoff orchestration (60% fewer failed runs) plus RAGAS/BERTScore eval dashboards — the reliability and observability this platform needs."

**Structured outputs / diagnostic models:**
> "I use schema-validated structured outputs and content-safety guardrails in production, and I've built diagnostic/optimization models (patient no-show and care-engagement risk, 15–20% recall gains on high-risk categories) — the same diagnose-then-tune pattern this advertiser account-health platform calls for."

**Work authorization:**
> "US-based, F-1 OPT — authorized to work now; sponsorship needed longer-term, and I'm upfront about that. Open to relocating to Mountain View."

---

## Keywords extraídas

Applied AI, LLM, RAG, tool-use, memory, agent orchestration, structured outputs, schema validation, model API integration, REST API, long-running services, Kubernetes, async programming, FastAPI, microservices, observability, reliability, advertising agents, optimization, diagnostic models
