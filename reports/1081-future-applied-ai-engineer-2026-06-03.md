# Evaluación: Future — Applied AI Engineer

**Fecha:** 2026-06-03
**Arquetipo:** Applied AI / LLM Engineer
**Score:** 4.3/5
**URL:** https://job-boards.greenhouse.io/future/jobs/4683133005
**Legitimacy:** High Confidence
**Location:** Remote (Continental US) — no travel
**Region:** US
**PDF:** output/2026-06-03/cv-deepak-mallampati-future-applied-ai-engineer-2026-06-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer — build + deploy AI agents (tool-calling, API orchestration, streaming) at a fitness coaching platform |
| Domain | LLM agents in production (consumer/fitness), AWS Bedrock stack, evaluation frameworks |
| Function | Own full lifecycle: prototype → validate → deploy → monitor → iterate; design eval systems + quality scoring |
| Seniority | "Production experience" — mid IC (no explicit YoE floor) |
| Remote | Remote Continental US, no travel required |
| Comp | **$215K – $250K USD** base + equity + benefits |
| TL;DR | Very strong fit. Future's stack (Python + LangChain/LangGraph + AWS Bedrock + Langfuse + evals + schema design + async streaming) maps 1:1 to Deepak's Progress production stack (agentic + RAG + RAGAS/BERTScore evals + FastAPI + schema contracts). Continental-US remote eliminates relocation friction. Score 4.3 reflects (a) clean archetype + tech stack overlap, (b) full-remote, (c) explicit production LLM + evals + observability checklist that mirrors his Progress work. |

## B) Match con CV

| Requisito JD | Línea CV | Mapping |
|--------------|----------|---------|
| "Strong Python production experience" | Progress (FastAPI/Flask + Docker + structured logging) + Vanguard (12 APIs/microservices) + Healthcare Claims (LangChain + FastAPI + pgvector) | Strong |
| "LLM/agent framework (LangChain/LangGraph or similar)" | CV Skills: "LangChain/LangGraph"; Progress: "agentic LLM systems on conductor–subagent orchestration"; Healthcare Claims: "LangChain + schema-validated JSON contracts" | Strong |
| "Hands-on LLM: prompting, tool-calling, structured outputs, evaluation" | Vanguard: prompt optimization across GPT-4o/Claude/Gemini, 27% success ↑; Progress: structured eval with RAGAS + BERTScore + custom domain metrics | Strong |
| "Async Python, HTTP APIs, streaming (SSE, webhooks)" | Vanguard 12 APIs/microservices p95 800ms; Progress FastAPI + structured logging | Strong (async/streaming inferred from FastAPI stack) |
| "Data validation and schema design" | Healthcare Claims: "schema-validated JSON contracts between agents to prevent cascading hallucinations"; Pydantic standard in FastAPI stack | Strong |
| "Cross-layer debugging" | Vanguard p95 1.5s → 800ms latency tuning + Emerson ERP deadlock + stored proc tuning | Strong |
| "AWS Bedrock/ECR/CloudFront/S3/Cognito" (nice-to-have) | CV: "AWS (EC2, S3, Lambda, Bedrock, SageMaker)" + Progress automation infrastructure | Strong |
| "Langfuse, OpenTelemetry, Datadog" (nice-to-have) | Progress: "LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics) paired with latency and accuracy dashboards" | Moderate (specific tools not used; concept covered) |
| "Eval frameworks knowledge" (nice-to-have) | Progress RAGAS + BERTScore + custom domain metrics | Strong |
| "Terraform/CDK" (nice-to-have) | CV: Terraform listed; Emerson Jenkins CI/CD | Moderate |
| "Optimize reliability, latency, cost in production" | Vanguard p95 latency -47%; Progress prompt compression + semantic caching + model routing; agentic 42% token reduction | Strong |

**Gaps & mitigation:**
1. **Langfuse / OpenTelemetry specifically** — not in CV. Mitigation: equivalence ("custom LLM eval + dashboards" = same telemetry discipline, different tooling).
2. **Fitness/consumer domain** — Deepak's domains are healthcare + finance + enterprise. Mitigation: consumer LLM = same prompt + eval + cost-optimization muscle; healthcare is the harder regulatory cousin.

## C) Nivel y Estrategia

**Nivel detectado:** Mid IC (~2-5 YoE). No hard floor — JD prizes production LLM proof points over years.
**Candidate fit:** Strong. Progress + Vanguard + Healthcare Claims = exactly the bundle Future asks for.

**Sell mid:**
- "I've shipped production agentic + RAG at Progress with a structured eval harness (RAGAS, BERTScore, custom metrics) — same observability discipline Future calls out with Langfuse/OTel/Datadog."
- "Healthcare Claims pipeline was 5 agents chained with schema-validated JSON contracts — that's the tool-calling + structured-output + cross-agent reliability work in the JD."
- "Vanguard work was 12 APIs/microservices at 100K+ daily requests; latency-tuned 1.5s → 800ms. That's the reliability/latency/cost optimization checklist."

**If pushed on Langfuse/OTel specifically:** "Different tool, same discipline. I built a custom RAGAS + BERTScore + custom-domain-metrics framework with latency + accuracy dashboards. Langfuse is a swap, not a ramp."

## D) Comp y Demanda

| Métrica | Valor | Fuente |
|---------|-------|--------|
| Banda publicada | $215K–$250K USD + equity | JD |
| Mercado Applied AI Eng remote-US 2026 | $180-260K base; eq variable | Levels.fyi + Blind |
| Demanda | High — Applied AI Engineer is top demand IC role 2026 | scan-history.tsv frequency |
| Future reputation | Mid-size consumer fitness; AWS-heavy stack; well-funded | LinkedIn / public press |

**Negotiation:** Target $235-245K (top of band) + equity. Comp is published narrow → focus on equity + signing.

## E) Plan de Personalización

| # | Sección | Estado | Cambio | Por qué |
|---|---------|--------|--------|---------|
| 1 | Summary | Generic 4+ years | "Applied AI engineer who ships production LLM agents with tool-calling + structured outputs + RAGAS/BERTScore evals + AWS Bedrock; latency-tuned APIs from 1.5s → 800ms at 100K+ daily requests" | Mirror JD priorities word-for-word |
| 2 | Lead bullet | Progress agentic generic | Lead with "agentic LLM systems with tool discipline + grounding + schema-validated handoffs" — keep "42% token reduction" as the hero number | JD asks "tool-calling + structured outputs + reliability/latency/cost" |
| 3 | Skills order | Generic | LangChain/LangGraph first; AWS Bedrock + Lambda + S3 second; eval harnesses third | Match Future's exact stack |
| 4 | Healthcare Claims project | "5-stage multi-agent" | Add "schema-validated JSON contracts + RAG-grounded validation — same shape as tool-calling agent design" | Make the project legible as agent-framework experience |
| 5 | Vanguard bullet | "27% improvement" | Add "across GPT-4o, Claude Sonnet, Gemini — informed model-routing decisions" — surfaces model-evaluation muscle | JD asks "evaluation systems + quality scoring" |

LinkedIn: Headline → "Applied AI Engineer — production LLM agents, RAG, evals."

## F) Plan de Entrevistas

| # | Requisito | STAR+R |
|---|-----------|--------|
| 1 | "Build + deploy AI agents with tool-calling + streaming" | **S**: Progress healthcare query agent; **T**: multi-step clinical lookups needing structured tool calls; **A**: conductor–subagent + tool discipline + grounding; **R**: 42% token reduction, response stability +25%, hallucinations >30% reduced; **Reflection**: structured tool outputs are downstream cheaper to debug than freeform reasoning chains. |
| 2 | "Design evaluation systems + quality scoring" | **S**: Progress LLM monitoring framework; **T**: regressions surfacing post-deploy; **A**: RAGAS + BERTScore + custom domain metrics + latency/accuracy dashboards; **R**: regressions caught pre-release; **Reflection**: domain-specific metrics catch what general benchmarks miss; build them BEFORE the first prompt iteration. |
| 3 | "Own full lifecycle: prototype → deploy → monitor" | **S**: Healthcare Claims pipeline ground-up; **T**: cascading hallucinations between agents; **A**: schema-validated JSON contracts at every boundary + RAG-grounded CPT/ICD validation; **R**: zero cascade failures; **Reflection**: schema contracts ARE the eval — if they fail, the agent fails fast. |
| 4 | "Optimize reliability, latency, cost" | **S**: Vanguard APIs at 100K+/day; **T**: p95 latency 1.5s blocking shipping; **A**: prompt compression + semantic caching + model routing; **R**: p95 1.5s → 800ms (-47%); **Reflection**: cost optimization unblocked scale that latency optimization alone couldn't. |
| 5 | "Async Python + HTTP APIs + streaming" | **S**: Vanguard 12 APIs/microservices; **T**: streaming responses for AI agents; **A**: FastAPI async + structured logging; **R**: p95 800ms; **Reflection**: structured logging at the API boundary is the cheapest streaming-debug investment. |
| 6 | "Schema design + data validation" | **S**: Healthcare Claims; **T**: agent-to-agent contract drift; **A**: Pydantic + JSON Schema at every step + version-pinned schemas; **R**: zero cascade; **Reflection**: version-pinning the schemas was non-obvious but eliminated 90% of "agent A worked yesterday" reports. |

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Active GH posting; Apply button live | Positive |
| Description quality | Very specific stack (Langfuse, OTel, Datadog, Bedrock, ECR, CloudFront, S3, Cognito, Pydantic, Terraform/CDK); explicit comp band; specific responsibilities | Positive |
| Company hiring signals | Future is mid-size venture-backed fitness coaching; AWS-heavy stack; no layoff signal | Positive |
| Reposting | First time seen in scan-history | Neutral |
| Role market | Applied AI Engineer remote-US is the #1 demand bucket 2026 | Positive |

## H) Draft Application Answers
(skip — score 4.3 < 4.5 threshold)

---

## Keywords extraídas

Applied AI Engineer, Future, Python, LangChain, LangGraph, AWS Bedrock, ECR, CloudFront, S3, Cognito, Pydantic, JSON Schema, Langfuse, OpenTelemetry, Datadog, Terraform, CDK, tool-calling, structured outputs, evaluation, async, SSE, webhooks, streaming, agents, RAG, schema design, observability, remote, Continental US
