# Evaluación: Glean — Software Engineer, Agentic Runtime

**Fecha:** 2026-04-24
**Arquetipo:** AI Platform / LLMOps + Agentic / Automation
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4616929005
**Legitimacy:** High Confidence
**Location:** San Francisco Bay Area (hybrid 3-4 days/week in SF Bay offices)
**PDF:** output/2026-04-24/cv-deepak-mallampati-glean-agentic-runtime-2026-04-24.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | AI Platform / LLMOps — agentic runtime services (session lifecycle, tool exec, memory, guardrails) |
| Domain | Agentic runtime infrastructure |
| Function | Build runtime services, optimize latency/cost, harden platform, observability |
| Seniority | Mid (3+ yrs) |
| Remote | Hybrid SF Bay 3-4 days/week |
| Team | Agentic Runtime |
| Location | **San Francisco Bay Area (hybrid 3-4d)** |
| Comp | $170,000 – $265,000 |
| TL;DR | Good fit. Mid-level (3+ yrs) is a slight stretch but close. Agentic multi-turn, tool execution, guardrails, observability = direct matches. Python/Go acceptable; LLM runtime substance is strong. Palo Alto 3-4d on-site is the friction. Apply. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 3+ yrs production distributed systems / cloud-native | **MEDIUM** | cv.md L22-30 2.5 yrs Applied AI; cv.md L33-39 1 yr DevOps intern (distributed CI/CD + SQL + Grafana) — ~3.5 yrs calendar |
| Python / Go / Java / C++ | **STRONG** | cv.md L12 Python strong; C++ (Arduino); Go learnable |
| Session lifecycle + streaming + tool exec + memory | **STRONG** | cv.md L26 agentic workflows w/ tool discipline; L71-72 multi-agent claims w/ schema contracts between agents |
| Multi-turn orchestration + model routing | **STRONG** | cv.md L59-60 Manga Lens: multi-provider routing (Claude / GPT-4o / GPT-4.1 Nano / Ollama) w/ per-provider payload handling |
| Latency/cost optimization | **MEDIUM** | cv.md L28 post-deploy defect -30%; cv.md L37-38 query time -20%, retrieval latency -25% (SQL) |
| Fault isolation + retries + timeouts + circuit-breaking | **MEDIUM** | cv.md L59-60 multi-provider failure isolation; cv.md L28 structured logging; circuit-breaking not explicit |
| Observability / tracing / SLOs | **MEDIUM** | cv.md L28 structured logging; L37-38 Grafana dashboards + DMVs |
| Integrations w/ OpenAI, Anthropic, Gemini | **STRONG** | cv.md L60 4-provider integration in production (Chrome Web Store) |
| Kubernetes + GCP/AWS/Azure (preferred) | **WEAK** | Docker yes; K8s and cloud orchestration adjacent |

**Gaps:**
1. **Kubernetes + cloud-native orchestration** — adjacent (Docker, CI/CD, Grafana), but no K8s in production at Progress.
2. **Palo Alto on-site 3-4d** — relocation friction.
3. **Circuit-breaking / fault isolation at platform scale** — analog via multi-provider payload isolation in Manga Lens; not at enterprise platform scale.

## C) Nivel y Estrategia

- **JD:** Mid (3+ yrs).
- **Sell:** Lead with Manga Lens multi-provider runtime (model routing + fault isolation + streaming) + Progress agentic tool discipline (tool-use + grounding) + Agentic Claims (schema contracts = guardrails analog).
- **If downleveled:** Accept mid IC at $170-210K band; comp floor comfortably above target.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Glean Agentic Runtime | $170K – $265K | JD |
| Mid SWE SF Bay | $170K – $230K | Levels.fyi |
| Runtime / platform demand | Very high | Qualitative |

Comp floor $170K — well above target.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer — shipped multi-provider agentic runtime (4 LLM vision providers w/ per-provider failure isolation) + production RAG and agentic pipelines. 3+ yrs building Python backend + Docker deployment. Ready to own runtime services for enterprise agents." | Mirror JD: runtime + tool exec + fault isolation + providers |
| 2 | Competencies | Lead: Agentic Runtime, Multi-Provider Routing, Fault Isolation, Tool Execution, Guardrails, Python, Docker, Structured Logging, LLM APIs | JD ordering |
| 3 | Experience | Lead with Progress FastAPI + Docker packaging + structured logging + defect reduction -30% | Match JD "production distributed" |
| 4 | Projects | Lead with Manga Lens (multi-provider runtime + fault isolation + streaming) → Agentic Claims (schema contracts = guardrails) → Progress agentic tool discipline | Runtime pattern |
| 5 | Location | "Kent, OH — Open to SF Bay relocation / hybrid. F-1 OPT (sponsorship welcomed)." | On-site JD signal |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Multi-provider integration | Manga Lens — Claude + GPT-4o + GPT-4.1 Nano + Ollama w/ per-provider payload handling (WebP cloud, JPEG Ollama to avoid CUDA crash) | Each provider has a failure mode the others don't — isolate payload early |
| 2 | Tool execution + agentic orchestration | Progress agentic healthcare queries w/ tool discipline | Tool discipline needs schema + tool-call fail-closed |
| 3 | Guardrails + memory + streaming | Agentic Claims JSON schema contracts between agents | Schema contracts at agent boundaries = zero cascading hallucination |
| 4 | Fault isolation + retries | Manga Lens per-provider retry + fallback | Silent fallback is worse than explicit error; surface the degraded state |
| 5 | Observability | Progress structured logging + post-deploy defect reduction (-30%) | Structured logs w/o alerting = log spam |
| 6 | Latency / cost | Progress RAG + inference packaging | Cost is latency in disguise for LLM calls |

**Case study:** Manga Lens multi-provider runtime (Chrome Web Store) + Progress agentic tool discipline — runtime patterns mapped to Glean's agentic runtime.

**Red-flag questions:**
- "Kubernetes production?" → "Docker + compose yes; K8s ramp is 2-4 weeks for runtime operator-style work. Have shipped multi-tenant logging + alerting in Progress."
- "SF Bay on-site?" → "Open to relocation. Can start hybrid with a bridge month."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Fresh scan 2026-04-24 | Positive |
| JD specificity | Names session lifecycle, streaming, tool execution, memory, guardrails, Gemini | Positive |
| Salary transparency | $170K-$265K | Positive |
| Layoffs | None | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

Score 3.6 < 4.5 — omitted.

---

## Keywords extraídas

Glean, Agentic Runtime, Software Engineer, agent orchestration, tool execution, guardrails, memory, streaming, fault isolation, circuit-breaking, Python, Go, Kubernetes, GCP, LLM routing, observability, multi-turn.
