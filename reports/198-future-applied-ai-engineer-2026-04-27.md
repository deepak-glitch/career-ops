# Evaluación: Future — Applied AI Engineer

**Fecha:** 2026-04-27
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / LLMOps
**Score:** 4.1/5
**URL:** https://job-boards.greenhouse.io/future/jobs/4683133005
**Legitimacy:** High Confidence
**Location:** Remote-United States — Continental US (no travel required)
**PDF:** output/2026-04-27/cv-deepak-mallampati-future-applied-ai-engineer-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI Engineer (Agents + LLMOps + Evals) |
| Domain | Consumer/Enterprise AI agents serving real users |
| Function | Build + ship agents end-to-end (proto → eval → deploy → monitor) |
| Seniority | Mid IC (Python production experience) |
| Remote | Remote-first, continental US |
| Team | Agent / Applied AI |
| TL;DR | Ship agents that serve real users — own the loop from prototype to staging to prod monitoring; design eval harnesses (Langfuse), tool integrations (Pydantic), and reliability/cost. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Tool-calling LLMs + structured output | Agentic LLM workflows w/ structured reasoning + tool discipline (cv.md L26) |
| Eval harnesses (Langfuse-style) | Evaluation pipelines, retrieval-grounded alignment >90% (cv.md L13, L25) |
| Full loop: proto → eval → deploy → monitor | PSI: built + containerized + logged + monitored (cv.md L28) |
| LangChain / LangGraph adjacent agent frameworks | LangChain in skills list (cv.md L14); agentic claims pipeline custom (cv.md L72) |
| Pydantic API + tool integrations | FastAPI services (Pydantic native) + REST APIs (cv.md L17) |
| Strong Python on production systems | 2.5+ yrs Python in healthcare AI (cv.md L8, L22-30) |
| Reliability / latency / cost | YOLOv8 latency cut ~30%, Docker + structured logging (cv.md L28, L69) |

**Gaps:**
1. Langfuse-specific tracing — adjacent (Grafana + structured logs); mitigate by demonstrating eval harness from PSI.
2. Token budget / prompt caching at scale — adjacent (multi-provider Manga Lens shows cost-aware design); mitigate via "structured prompt transforms" Dream Decoder pattern.

## C) Nivel y Estrategia

- Strong mid IC fit. Salary band $215K-$250K — aligns with target if accept negotiation.
- Vender: lead with full-loop ownership (data → API → Docker → eval → monitor) on healthcare AI.
- Si downlevelan: not needed — JD title aligns with Deepak's natural level.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Salary (JD-stated) | $215K-$250K base + equity |
| Demand | Agent-builder roles = peak demand 2026; remote-US = competitive |
| Visa | "Continental US" = F-1 OPT ok; verify H-1B sponsorship for bridge |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | Lead with "Applied AI engineer building tool-calling agents end-to-end with eval harnesses" | Mirror JD framing |
| 2 | Bullets | PSI agentic + RAG + Docker bullets first; emphasize eval discipline | JD priorities |
| 3 | Projects | Agentic Claims (schema contracts) + Dream Decoder (prompt transforms) | Direct agent + reliability evidence |
| 4 | Skills | Move LangChain, structured outputs, evaluation, guardrails to top | JD keywords |
| 5 | Footer | "Remote-US, F-1 OPT, no travel required" | Match JD remote model |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Tool-calling agents | Claims pipeline | Cascading hallucinations | Schema-validated JSON between agents | Multi-agent w/ RAG-grounded validation | Audit-ready traces | Schema = contract |
| 2 | Eval harnesses | Healthcare RAG | Clinicians need grounded retrieval | Build chunker + eval | Recursive chunker + grounding rules | 35% retrieval gain, >90% grounded | Eval-first earns trust |
| 3 | Full loop (proto → prod) | PSI predictive ML | Recall stuck on high-risk cohorts | Threshold calibration loop | Class-weighted XGBoost + walk-forward + Docker deploy | 15-20% recall gain, 30% defect reduction | Production discipline = velocity |
| 4 | Reliability / latency | YOLOv8 drowsiness | Two-stage CNN slow | Unify into one model + sliding-window | YOLOv8 + confidence smoothing | 30% latency drop, 25% FP cut | Latency = UX |
| 5 | Tool integrations | Manga Lens | 4 vision providers, mismatched payloads | Provider abstraction + payload normalization | WebP for cloud, JPEG for Ollama | Live in Chrome Web Store | Provider abstraction = velocity |
| 6 | Cost-aware design | Dream Decoder | Naïve prompts fail | Intermediate prompt transforms | Sonar + Replicate orchestration w/ structure | 30% alignment, 25-30% first-pass | Structure-first = lower cost |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Salary transparency | $215K-$250K + equity stated | Positive |
| JD specificity | Names Langfuse, Pydantic, prompt caching, token budgets | Positive |
| Remote model | Continental US + no travel | Positive |
| Company maturity | Funded consumer AI app (longevity / wellness) | Positive |
| Apply button | Active on Greenhouse | Positive |

**Assessment: High Confidence.** Concrete tooling references, transparent comp, clear remote model.

## Keywords extraídas

Applied AI Engineer, agents, tool-calling, structured output, Langfuse, Pydantic, evaluation, prompt caching, token budget, LangChain, LangGraph, Python, remote-US, RAG.
