# #833 — Varick Agents | AI Engineer

**Fecha:** 2026-05-16
**Arquetipo:** Applied AI / LLM Engineer
**Score:** 2.8/5
**URL:** https://jobs.ashbyhq.com/Varick-Agents/30e16a2a-6374-475d-9154-2e186c481319
**Legitimacy:** Tier 1 — Active (posted ~1 month ago, application deadline 2026-06-06)
**Location:** San Francisco, CA — On-site required
**Region:** US
**PDF:** Not generated (score < 3.0)

---

## Bloque A — Resumen del Rol

| Dimensión | Detalle |
|-----------|---------|
| **Arquetipo** | Applied AI / LLM Engineer |
| **Domain** | Enterprise AI — agentic workflow automation |
| **Function** | Build (pure engineering IC — agent systems, evals, retrieval) |
| **Seniority** | Mid (3+ years software engineering, 1–2 years LLM apps) |
| **Remote** | On-site — San Francisco, CA (relocation required from Kent, OH) |
| **Comp** | $175K–$225K + equity + 100% medical/dental/vision |
| **TL;DR** | Build production-grade agentic systems for enterprise operations — processing transactions, classification, routing, RLHF loops — on-site SF only |

Note: A previous Varick Agents posting (FDE role, `15a99eff`) was evaluated at 2.4/5 (SKIP) in April 2026 due to "SF FDE-Operator hybrid; no production code" framing. This is a distinct posting — pure AI engineering IC role with agent-building, evals, and retrieval pipelines. Tech fit is substantially better. The constraint remains San Francisco on-site + no sponsorship confirmation.

---

## Bloque B — Match con CV

| Requisito JD | Match en CV | Evidencia |
|---|---|---|
| 3+ years software engineering | ⚠️ Stretch | 2.5 years total (1.5y Progress Solutions AI/ML + 1y DevOps Emerson) — ~0.5y short of floor |
| 1–2 years LLM apps production | ✅ Strong | 1.5y building RAG, agentic LLM workflows, structured outputs at Progress Solutions |
| Agent architectures (multi-step reasoning, tool calling) | ✅ Strong | Multi-agent Healthcare Claims Pipeline + agentic LLM workflows at Progress Solutions |
| Evaluation systems (quality, accuracy, safety, groundedness) | ✅ Strong | Evaluation pipelines, guardrails, hallucination reduction, evaluation audit trails |
| Prompt engineering & context engineering | ✅ Strong | Structured outputs, grounding rules, recursive semantic chunking, context management |
| Retrieval pipelines (RAG) | ✅ Strong | Healthcare RAG — 35% precision gain, 90%+ retrieval-grounded alignment |
| Vector databases (Qdrant, pgvector, Pinecone) | ✅ Moderate | Vector search in LlamaIndex/LangChain stack (specific DB not named in CV) |
| Agent frameworks (LangGraph, CrewAI, custom) | ✅ Moderate | LangChain, LlamaIndex listed; LangGraph not explicitly named but adjacent |
| Inference optimization (cost/latency) | ⚠️ Partial | Adaptive frame skipping (YOLOv8); latency reduction in drowsiness detection — not LLM-specific |
| Observability / governance | ✅ Moderate | Structured logging, load simulation, Grafana dashboards, HIPAA audit trails |
| Python + backend engineering | ✅ Strong | Python primary; FastAPI/Flask RESTful services; Docker |
| Human feedback loops (RLHF analog) | ✅ Moderate | "Improved agent response stability by ~25%" implies feedback-loop tuning; Progress Solutions agentic workflows |

**Gaps:**
- **3-year floor**: Deepak is ~0.5y short. Mitigate by framing total engineering experience (Emerson DevOps + Suvidha ML + Progress AI = 2.5y, with depth matching a 3y candidate in AI-specific work).
- **LangGraph specifically**: Not named in CV. Frame LangChain + custom agent orchestration as equivalent; mention LangGraph as familiar (same DAG-based paradigm).
- **On-site SF**: Hard constraint — requires relocation from Kent, OH. Deepak is "open to relocation" per profile.yml.
- **Visa sponsorship**: No mention in JD. Must confirm before applying.

---

## Bloque C — Nivel y Estrategia

**Nivel detectado:** Mid (3+ years). Deepak is at the lower boundary.

**Strategy:** The tech stack match is excellent — this is one of the best LLM engineering tech fits in the current pipeline. The constraint is geography and sponsorship. If those are resolved, this is a compelling application.

**Approach:** Apply only after confirming (1) sponsorship available, (2) genuine openness to relocation. If both yes, lead with the agentic claims pipeline as the strongest proof — multi-agent, evals, RLHF analog, retrieval. Frame the 0.5-year gap as "depth over breadth — I shipped production agentic systems with evals and RAG in my first 18 months."

---

## Bloque D — Comp y Demanda

| Metric | Data |
|---|---|
| JD range | $175K–$225K + equity |
| Deepak target | $100–130K (JD is 35–73% above target — very favorable if geography resolved) |
| Market range (Applied AI Engineer, SF, 2026) | $160–240K base |
| Application deadline | 2026-06-06 |
| Sponsorship | Not mentioned — red flag for F-1 OPT |

SF-based roles at AI startups at this comp range typically do sponsor H-1B for strong candidates, but it must be confirmed. No signals either way in the JD.

---

## Bloque E — Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Agentic AI engineer — multi-agent orchestration, retrieval pipelines, evaluation systems, RLHF loops in production healthcare workflows" | Mirror the JD's exact framing |
| 2 | Progress Solutions | Elevate agent architecture bullet, add "built feedback mechanisms enabling agents to learn from human corrections" | Maps to JD's RLHF/feedback requirement |
| 3 | Projects | Lead with Agentic Healthcare Claims Pipeline; highlight JSON schema contracts + duplicate detection via ANN similarity | Directly maps to agent reliability + observability requirements |
| 4 | Skills | Add LangGraph explicitly; specify vector DB (e.g. "pgvector") | Close the framework gap |
| 5 | Location line | "Open to relocation — San Francisco" | Removes ambiguity for SF on-site |

---

## Bloque F — Plan de Entrevistas

| # | Requisito JD | Historia STAR+R |
|---|---|---|
| 1 | Agent architectures — multi-step reasoning + tool calling | **Agentic Healthcare Claims Pipeline** — 5-agent pipeline (Intake → Validation → Consistency → Duplicate → Fraud Risk), schema-validated JSON between agents, RAG-grounded CPT/ICD lookup. **R:** Production pipeline, no cascading hallucinations. **Reflection:** Schema contracts between agents are the most important reliability investment — discovered this when an unvalidated output caused a cascade in staging. |
| 2 | Evaluation systems | **Progress Solutions evals + audit trails** — Built evaluation pipelines for RAG outputs: retrieval groundedness, hallucination rate, precision metrics. Evaluation audit trails for HIPAA compliance. **R:** Retrieval-grounded alignment >90%. **Reflection:** Evaluation frameworks should be built before the model ships, not after a failure. |
| 3 | Retrieval pipelines | **Healthcare RAG — chunking strategy iteration** — Moved from naive → recursive semantic chunking; improved contextual retrieval precision 35%, reduced irrelevant retrieval >30%. **Reflection:** Chunking strategy is the highest-leverage RAG tuning lever — more impactful than embedding model choice. |
| 4 | Feedback mechanisms — human correction loops | **Progress Solutions agentic workflow stability** — Improved agent response stability ~25% by adding structured reasoning + grounding rules based on observed failure modes. **Reflection:** Human feedback in healthcare came via clinical review of agent outputs — translates directly to RLHF loop design. |
| 5 | Observability + governance | **FastAPI/Docker packaging + logging** — Structured logging + load simulation; reduced post-deployment defects ~30%. HIPAA audit trails for all agent decisions. **Reflection:** Governance in regulated environments must be baked into the agent design, not bolted on. |

---

## Bloque G — Posting Legitimacy

| Signal | Observation |
|---|---|
| Freshness | Posted ~1 month ago (March 24, 2026); application deadline June 6, 2026 |
| Apply button | Active on Ashby job board |
| Company | Varick Agents — SF AI startup, also has FDE and Full Stack Engineer postings active |
| JD specificity | Specific frameworks (LangGraph, CrewAI, Qdrant, pgvector, Pinecone), specific comp range, specific deadline — not a ghost posting |
| Sponsorship | Not mentioned — must verify |
| Previous role at Varick | FDE posting (15a99eff) was real — evaluated April 2026, confirmed active at that time |

**Verdict: Tier 1 — Active.** Legitimate startup hiring actively. Primary concern is visa sponsorship and on-site SF requirement.

**Decision: SKIP pending sponsorship/relocation confirmation.** Score 2.8/5 — excellent tech fit but geo + sponsorship uncertainty veto the immediate application. Revisit if company confirms sponsorship or opens remote option.
