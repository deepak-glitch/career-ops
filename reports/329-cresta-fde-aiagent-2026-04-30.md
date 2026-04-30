# Evaluación: Cresta — Senior Forward Deployed Engineer (AI Agent)

**Fecha:** 2026-04-30
**Arquetipo:** Agentic / Automation + AI Solutions / Forward Deployed
**Score:** 3.4/5
**URL:** https://job-boards.greenhouse.io/cresta/jobs/4759347008
**Legitimacy:** High Confidence
**Location:** Remote — United States
**PDF:** output/2026-04-30/cv-deepak-mallampati-cresta-fde-aiagent-2026-04-30.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Agentic / Automation (LLM agents, RAG, function-calling) + AI Solutions / Forward Deployed |
| Domain | Contact-center AI — agent assistance for customer-facing teams |
| Function | Deploy AI agents into customer environments + technical advisory |
| Seniority | Senior IC — 3+ years (lower band than typical Senior FDE) |
| Remote | Fully Remote — United States |
| Team size | Not stated; sits inside Customer Engineering / Forward Deployed pod |
| TL;DR | Customer-facing agent-builder role at Cresta deploying LangChain-style LLM agents (function calling + RAG) into enterprise contact centers; comp $185-235K + bonus + equity. |

## B) Match con CV

| Requisito JD | Match en CV | Tipo |
|--------------|-------------|------|
| 3+ years software dev / consulting / AI/ML / FDE | 2.5 yrs at Progress Solutions + relevant project portfolio | Soft gap (close) |
| Python proficiency | Primary language | Direct |
| Golang | Not in CV | Hard gap |
| LLMs + prompt engineering | Healthcare RAG + agentic workflows + structured outputs | Direct |
| AI agent frameworks, function-calling, RAG | 5-agent claims pipeline (schema-validated JSON contracts) + LangChain on healthcare RAG + Agentic Pixel orchestrator (LLM decomposes tasks) | Direct |
| Cloud (AWS/GCP/Azure), DevOps (CI/CD, containers, monitoring) | Docker + Jenkins CI/CD + Grafana monitoring | Direct |
| API / webhook / data pipeline integration | FastAPI + REST + Pandas pipelines | Direct |
| Performance optimization | Reduced post-deploy defects ~30%; cut review time 60-70% | Direct |
| Customer-facing technical advisor | Stakeholder docs at Progress Solutions; Manga Lens public ship | Adjacent |

**Gaps:**
1. **Golang** — Hard gap. Cresta core platform uses Go. Mitigation: acknowledge + commit to ramp; emphasize Python-side agent / RAG / function-calling depth as primary value.
2. **3+ years exactly** — Soft gap (candidate 2.5). Mitigation: lead with concrete agent-shipped artifacts (5-agent claims pipeline + Pixel orchestrator + Manga Lens multi-provider) — title says "Senior" but the requirements floor is reachable.
3. **Contact-center / voice domain** — No direct exposure. Mitigation: structured-reasoning / tool-discipline narrative from healthcare workflows transfers; acknowledge domain ramp.

## C) Nivel y Estrategia

JD title is Senior with a 3+ floor. Candidate is at 2.5. The gap is small and the agent-stack 1:1 match is strong.

**Sell senior without lying:** "I've shipped a 5-agent claims processing pipeline with schema-validated JSON contracts between agents (pydantic) to prevent cascading hallucinations, with audit-ready reasoning traces. I've also shipped an LLM-orchestrator agent for generative pixel-art that decomposes high-level prompts into bounded generation tasks. I've deployed agentic LLM workflows for multi-step healthcare queries — eligibility checks, care navigation, documentation clarification — and cut hallucinations >30% via tool discipline and grounding rules. The agent-systems shape is what I do."

**If downleveled to "FDE" (no Senior):** Accept. Negotiate bonus + equity, 6-month review explicit.

## D) Comp y Demanda

| Dimension | Data | Source |
|-----------|------|--------|
| Cresta Senior FDE comp | $185,000 - $235,000 + bonus + equity | JD |
| Market Senior FDE remote-US | $180-280K + RSUs/bonus | Levels.fyi |
| Cresta funding | Series C, ~$273M raised, contact-center AI leader | TechCrunch / Crunchbase |
| Demand for AI Agent FDE | Surging | Industry trend (300% FDE growth since 2024) |

Comp is at-market for the level. Bonus + equity push it to ~$220-280K OTE.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare RAG / predictive ML | Reframe around "AI agent FDE — 5-agent claims pipeline, LLM orchestrator, agentic workflows for multi-step queries" | Direct archetype hit |
| 2 | Skills | LangChain mid | Move LangChain + LangGraph + function calling + RAG to top | JD primary stack |
| 3 | Projects | Claims pipeline 1st | Lead with claims pipeline (5-agent + schema contracts); follow with Pixel orchestrator | JD-primary artifacts |
| 4 | Experience | Generic bullets | Tighten "agentic LLM workflows" bullet — name eligibility, navigation, documentation; emphasize tool discipline + grounding rules | JD vocabulary |
| 5 | Header | Kent OH | Add "Open to Remote-US" sublabel | JD specifies Remote-US |

LinkedIn: pin claims pipeline; headline → "Applied AI engineer | LLM agents + RAG + function-calling | shipped 5-agent claims pipeline with schema-validated contracts".

## F) Plan de Entrevistas

| # | JD requisito | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | AI agent frameworks + RAG + function calling | 5-agent claims pipeline | Healthcare claims processing — adjudication, fraud detection | Build a multi-agent pipeline that won't cascade hallucinations | Schema-validated JSON contracts (pydantic) between agents; RAG-grounded CPT/ICD validation; ANN duplicate detection; audit reasoning traces | Pipeline shipped with explainable risk scoring | Lesson: between-agent contracts (typed JSON) are the single biggest ROI for agent reliability. Free-text handoff is hallucination-amplifying. |
| 2 | Customer requirements + POC demos | Healthcare agentic LLM workflows at Progress Solutions | Multi-step queries (eligibility, care navigation, documentation) had inconsistent answers | Stabilize agent responses for clinicians | Structured reasoning + tool discipline + grounding rules; eval pipeline | Cut hallucinations >30%; lifted response stability ~25% | Lesson: stakeholder docs (system limitations) up-front = fewer escalations later. |
| 3 | Performance optimization + monitoring | Manga Lens performance tuning | 4 AI vision providers, CUDA crashes on PNG, latency spikes | Stabilize prod | Per-provider payload routing (WebP cloud, JPEG Ollama), 7-day cache, viewport-slice screenshots with coordinate remapping | Live on Chrome Web Store, 29 selectors | Lesson: provider-specific quirks belong in the SDK layer, not the call site. |
| 4 | Cloud + DevOps | Docker + Jenkins + Grafana at Emerson | Order-to-Cash platform deployments errored | Cut deployment errors | Built CI/CD pipelines with version-controlled SQL + rollback checkpoints + Grafana DMV dashboards | Deployment errors >30% lower; release cycle 35-40% faster; incident recurrence ~25% lower | Lesson: rollback checkpoints + dashboards together are what make on-call humane. |
| 5 | API + webhook integration | FastAPI healthcare services | Healthcare ML/LLM models needed prod-grade serving | Ship reliable inference | FastAPI + Docker + structured logging + load simulation | ~30% post-deploy defect reduction | Lesson: load simulation catches LLM payload-shape regressions unit tests miss. |

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Cresta Greenhouse board | Direct corp board | Positive |
| Salary + bonus + equity disclosed | $185-235K explicit | Positive |
| Tech specificity | Python+Go, LLM, RAG, function calling, AWS/GCP/Azure | Positive |
| Visa sponsorship asked | Application question; signals real eval | Neutral |
| Cresta product fit | Contact-center AI agent platform; FDE role plausibly central | Positive |
| Posting age | Not visible | Neutral |
| Reposting | This appears as a current US-Remote variant; #257 was the Australia variant (separate role) | Neutral |

## H) Draft Application Answers

Not generated (score 3.4 — under 4.5 threshold).

---

## Keywords extraídas

Cresta, Senior Forward Deployed Engineer, AI Agent, LLM, Function Calling, RAG, Retrieval-Augmented Generation, Python, Golang, AWS, GCP, Azure, DevOps, CI/CD, Docker, API, Webhook, Data Pipeline, Customer-Facing, Technical Advisor, Contact Center AI, Remote-US, $185-235K, Bonus + Equity.
