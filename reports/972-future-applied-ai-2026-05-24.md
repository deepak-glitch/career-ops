# Evaluación: Future — Applied AI Engineer

**Fecha:** 2026-05-24
**Arquetipo:** Applied AI / LLM Engineer | Generative AI / RAG Engineer
**Score:** 4.2/5
**URL:** https://job-boards.greenhouse.io/future/jobs/4683133005
**Legitimacy:** High Confidence
**Location:** Remote (Continental US)
**Region:** US
**PDF:** output/2026-05-24/cv-deepak-mallampati-future-applied-ai-2026-05-24.pdf
**Verification:** unconfirmed (batch mode)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer building agentic features end-to-end |
| Domain | Consumer health/fitness — AI-powered personal coaching at scale |
| Function | Build, ship, evaluate, monitor LLM agents in production |
| Seniority | Production-experienced IC (no explicit YoE; band reads mid+) |
| Remote | Fully remote (Continental US) |
| Comp | $215,000–$250,000 base + equity + health/401k/PTO |
| Stage | Post-merger with Autograph (Tom Brady); "nation's largest personal training sessions provider" |
| TL;DR | Direct 1:1 with Deepak's archetype — Python + LangChain/LangGraph + tool-calling + structured output + evaluation + AWS Bedrock — applied to a consumer coaching product. Remote-US, transparent comp, full agentic lifecycle ownership. Strong fit. |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| Python with production systems | ✅ FastAPI/Flask packaging of ML/LLM inference, Docker, structured logging — Progress Solutions |
| LLM prompt engineering, tool-calling, structured output | ✅ Agentic Healthcare Claims (schema-validated JSON contracts between agents); agentic LLM workflows w/ structured reasoning + grounding |
| Evaluation frameworks (Langfuse, rubric scoring) | ✅ Evaluation audit trails + retrieval-grounded response alignment >90%; eval pipelines in `Skills` |
| LangChain/LangGraph or equivalents | ✅ LangChain, LlamaIndex listed in CV skills; agentic orchestration in Claims pipeline |
| Async Python, HTTP APIs, streaming (SSE, webhooks) | ✅ FastAPI services; ⚠️ SSE specific not documented (closest: streaming responses in Dream Decoder via Replicate APIs) |
| Pydantic / JSON Schema for validation | ✅ "schema-validated JSON contracts between agents to prevent cascading hallucinations" — Agentic Claims |
| Cross-layer debugging | ✅ Pre-prod load simulation → ~30% post-deploy defect reduction |
| AWS Bedrock, ECR, CloudFront, S3, Cognito | ⚠️ Docker shipped, cloud-ready deployment listed; ❌ Bedrock-specific not in CV |
| Observability: Langfuse, OpenTelemetry, Datadog | ⚠️ Grafana + structured logging shipped (Emerson DMV dashboards + Progress); Langfuse not used |
| LLM eval + automated scoring | ✅ ">90% retrieval-grounded response alignment in evaluation" — direct |
| Terraform/CDK | ❌ Not in CV (Docker yes, IaC no) |

**Gaps + mitigation:**
- *AWS Bedrock*: "I've shipped multi-provider AI vision (4 providers in Manga Lens: Claude, GPT-4o mini, GPT-4.1 Nano, Ollama). Wiring up Bedrock is the same adapter pattern — model identifier swap + IAM auth. Familiar with AWS as the cloud surface; Bedrock is days, not weeks."
- *Langfuse*: "Used structured logging + Grafana for observability; Langfuse is the LLM-specific layer up. Trace/span model maps cleanly to the eval audit trails I already write."
- *Terraform*: "Docker + CI/CD with Jenkins shipped; IaC is the next abstraction. Will pick up Terraform week one."

## C) Nivel y Estrategia

- Detected: production-experienced Applied AI IC; no explicit YoE floor → bottom-up band.
- **Vender:** "2.5y shipping production AI agents in healthcare — schema-validated multi-agent pipelines, RAG with ~35% precision gain, ~30% hallucination reduction, FastAPI+Docker packaging. Master's CS, Kent State May 2025. The Future stack — Python + LangChain/LangGraph + tool-calling + evaluation — is exactly what I've been building."
- **Si downlevelan:** $215–250K band already strong for remote-US Applied AI mid; accept mid-band if equity is meaningful and 6-month review is on the table.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| Future JD band | $215K–$250K base + equity | JD |
| Remote-US Applied AI Engineer mid market | $180K–$240K base (frontier-lab/well-funded consumer outliers $250–$320K) | Levels.fyi 2026, Blind |
| Future stage | Recently merged with Autograph (Tom Brady) — well-capitalized consumer co | Crunchbase / press |
| Healthcare/regulated bonus | Wellness-adjacent but not HIPAA | — |
| F-1 OPT signal | "Future sponsorship" question in form (standard) — no explicit "no sponsorship" red flag | JD form |

Band is at/above market for remote-US Applied AI. Strong negotiation position with Master's + agentic + RAG + Manga Lens shipped product.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Healthcare RAG + agentic" | "Applied AI engineer shipping production LLM agents — tool-calling, structured outputs, evaluation pipelines, LangChain/LangGraph stacks. Healthcare RAG with ~35% precision gain. FastAPI + Docker packaging." | JD-mirror first line |
| 2 | Project order | Healthcare first | Agentic Claims → Dream Decoder (multimodal orchestration) → Manga Lens (multi-provider) → Healthcare RAG | Lead with agentic + orchestration |
| 3 | Skills | Generic | Surface `tool-calling`, `structured outputs`, `Pydantic/JSON Schema`, `LangChain/LangGraph`, `async Python`, `streaming APIs`, `Langfuse (familiar)`, `AWS` | ATS hits |
| 4 | Bullet emphasis | RAG metrics | Add: "schema-validated JSON contracts between agents to prevent cascading hallucinations" (top of Agentic Claims) | Pydantic + tool discipline match |
| 5 | Cover letter | None | "I've spent 2.5y shipping production LLM agents — multi-agent claims with schema contracts, RAG with measurable retrieval gains, FastAPI+Docker packaging. The Future stack reads like my project list. Excited to ship agents that touch real users at coaching scale." | Domain bridge + stack mirror |

## F) Plan de Entrevistas (STAR+R)

| # | JD req | STAR+R |
|---|---|---|
| 1 | Build & deploy AI agents w/ tool-calling + structured outputs | S: Agentic Healthcare Claims. T: Multi-step claims processing w/o cascading hallucinations. A: 5-agent pipeline (Intake → Validation → Consistency → Duplicate → Fraud Risk) with schema-validated JSON contracts between agents; RAG-grounded CPT/ICD lookup; audit-ready reasoning traces. R: explainable risk scoring; structured contracts prevented agent drift. Reflection: schema discipline is the cheapest reliability investment in multi-agent. |
| 2 | Evaluation frameworks + quality scoring | S: Healthcare RAG eval pipeline. T: Catch grounding regressions before prod. A: Retrieval-grounded response alignment scoring + audit trails + system-limitation docs. R: >90% alignment in eval; ~30% hallucination reduction. Reflection: eval gates ship faster than eval afterthoughts. |
| 3 | Own lifecycle: experiment → deploy → monitor → iterate | S: Healthcare ML/LLM inference packaging. T: Reliable production deployment. A: FastAPI + Flask REST + Docker + structured logging + load sim + audit logs. R: ~30% defect reduction post-deploy; dataset reliability >98%. Reflection: pre-prod load sim catches what unit tests miss. |
| 4 | Async Python, HTTP APIs, orchestration | S: Dream Decoder. T: Multimodal dream-to-image pipeline. A: FastAPI + intermediate structured prompt transformation + Perplexity Sonar (text) + Replicate (images). R: ~30% contextual alignment improvement; ~25–30% first-pass image success. Reflection: orchestration ≠ chaining — structure intermediate state explicitly. |
| 5 | Multi-provider / framework agility | S: Manga Lens. T: Real-time AI translation across 4 vision providers. A: TS + MV3, multi-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash), 7-day translation cache, per-domain selector configs for 29 sites. R: shipped to Chrome Web Store. Reflection: provider abstraction lives at the request layer, not the prompt layer. |
| 6 | Cross-functional comm + JIT learning | S: Progress Solutions cross-functional. T: Healthcare PMs + clinicians + compliance. A: Structured eval reports + stakeholder demos + HIPAA-conscious data lineage docs. R: production deployment with clean handoff. Reflection: stakeholder docs are the deploy unblocker. |

Red-flag Q "AWS Bedrock?" → "Multi-provider AI vision shipped (Claude/GPT-4o mini/GPT-4.1 Nano/Ollama). Bedrock is the same adapter pattern over IAM auth — days to wire up, not weeks."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| JD specificity | Names Python+LangChain/LangGraph+Bedrock+Langfuse+Pydantic — concrete, current stack | Strong Positive |
| Comp transparency | $215K–$250K disclosed | Strong Positive |
| Apply form | Active Greenhouse posting | Positive |
| Stage | Recently merged w/ Autograph; well-capitalized consumer co | Positive |
| Realism | Tools-vs-tasks consistent; remote-US standard for Applied AI mid | Strong Positive |
| Visa | Standard sponsorship question — no explicit "no sponsorship" red flag | Neutral |

Legitimate, current, well-resourced Applied AI hire at a consumer health company.

## H) Draft Application Answers

**Why Future?**
> "I've spent the last 2.5y shipping production LLM agents in healthcare — a 5-agent claims pipeline with schema-validated JSON contracts, RAG with ~35% precision improvement and ~30% hallucination reduction, FastAPI+Docker packaging that cut post-deploy defects ~30%. The Future stack — Python + LangChain/LangGraph + tool-calling + evaluation + Bedrock — reads like the next chapter of what I've been building. Coaching at scale is a perfect surface for agentic AI: real users, real workflows, measurable outcomes."

**Work authorization?**
> "F-1 OPT — US-authorized via EAD now; future sponsorship required. Open about the timeline up front."

**What would you build in your first 90 days?**
> "Week 1–2: wire myself into the eval harness; ship one rubric-based scorer and one prompt cache for an existing agent. Week 3–6: ship a small, end-to-end agent feature — tool-calling + Pydantic schema + Langfuse traces + production rollout behind a flag. Week 7–12: own one production agent's reliability budget (latency p95, cost per session, hallucination rate). Treat the eval suite as the ship gate."

---

## Keywords extraídas

applied AI engineer, LLM, Python, LangChain, LangGraph, tool calling, structured output, Pydantic, JSON Schema, evaluation, Langfuse, AWS Bedrock, async Python, streaming, SSE, agentic, remote US, observability, prompt caching, OpenTelemetry
