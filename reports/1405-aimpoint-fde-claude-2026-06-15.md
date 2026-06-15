# Evaluación: Aimpoint Digital — Forward Deployed AI Engineer (Claude 2026, US)

**Fecha:** 2026-06-15
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer
**Score:** 3.6/5
**URL:** https://aimpoint-digital.breezy.hr/p/6845c658955b-forward-deployed-ai-engineer-claude-2026--us
**Legitimacy:** Trusted
**Location:** US — Remote (Atlanta, GA HQ option) — US
**Region:** US
**PDF:** output/2026-06-15/cv-deepak-mallampati-aimpoint-fde-claude-2026-06-15.pdf
**Verification:** confirmed (Breezy public JD 2026-06-15)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | FDE + Applied AI — consulting practice deploying Claude into enterprise clients |
| Domain | Enterprise AI consulting — RAG, agents, guardrails, governance |
| Function | Client-facing build + deploy (discovery → architecture → ship) |
| Seniority | Senior IC (L5 implied; "high-impact" + client-leading) |
| Remote | US Remote (or Atlanta HQ option) |
| Comp | Not disclosed |
| TL;DR | Anthropic-partner consultancy hiring a Claude-specialist FDE to architect agentic + RAG solutions for enterprises. Deepak's RAG (92% precision, 40% hallucination cut) + agentic (42% token reduction) + Claude/LangGraph stack land cleanly on the JD; the main wedge is "consulting / forward-deployed" framing of his existing in-house work. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| Production app dev, APIs, data pipelines, enterprise systems | 12 APIs/microservices; 100K+ daily reqs; HIPAA/SOC2/PCI scoped | ✅ Fuerte |
| Claude / LLM: prompt eng, tool use, RAG, agents, evals, prod deploy | Claude Sonnet in stack; multi-model eval (+27%); agentic conductor–subagent (−42% tokens); RAG (92% precision); RAGAS/BERTScore evals | ✅ Fuerte |
| Python primary | Python primary | ✅ |
| TypeScript / React preferred | TS + React in stack | ✅ |
| FastAPI, LangGraph, LlamaIndex familiarity | FastAPI + LangChain/LangGraph in stack; vector stores FAISS/Pinecone/Weaviate | ✅ Fuerte |
| AWS / Azure / GCP / Snowflake / Databricks | AWS (EC2/S3/Lambda/Bedrock/SageMaker), Azure OpenAI, GCP Vertex; Spark/Databricks/Kafka | ✅ Fuerte |
| Client-facing, navigate ambiguity, translate business → tech | Vanguard (20+ teams, model selection), Progress (healthcare clients), founder-grade ownership | ✅ Buena |
| Consulting / FDE background | Internal-build track record; consulting framing requires positioning | ⚠️ Parcial |
| Amazon Bedrock, model routing, AI safety eval (preferred) | AWS Bedrock in stack; model routing in Vanguard work; content safety (−42% unsafe outputs) | ✅ Fuerte |
| Regulated/enterprise-scale AI deployment (preferred) | Banking (Vanguard), healthcare (Progress), HIPAA/SOC2/PCI | ✅ Fuerte |
| Human-in-the-loop workflow design (preferred) | Conductor–subagent orchestration; content safety controls | ✅ Buena |
| F-1 OPT (work authorization) | Open to OPT — JD doesn't address sponsorship explicitly | ⚠️ Verify |

**Gaps y mitigación:**
1. **External consulting / client-facing FDE framing** — *Soft gap.* Mitigación: in cover letter and CV bullets, reframe Vanguard "20+ internal teams" + "model selection guidance" as consultative work; emphasize cross-functional translation (product/platform/data eng).
2. **Visa sponsorship not addressed in JD** — *Verify gap.* Mitigación: ask recruiter on first call; many consultancy firms sponsor OPT → STEM-OPT → H-1B path for high-ROI talent.
3. **Seniority signal (L5)** — *Soft gap.* Mitigación: Deepak's outcomes (99.9% uptime, 100K+ req/day, 42% token reduction) are senior-grade by impact; pair with founder/IC ownership story.

## C) Nivel y Estrategia

1. **Nivel detectado:** Senior IC (L5). **Nivel del candidato:** MS + 4 yrs applied AI — at level by outcomes, slightly below by years.
2. **Vender senior sin mentir:** Lead with the rare combo — "I ship Claude-based agentic + RAG into regulated enterprise clients with measurable wins (RAG 92% precision, agentic −42% tokens, +27% multi-model eval)." Aimpoint values client-translation skill; pair that with the FastAPI/LangGraph/Bedrock stack overlap.
3. **Si me downlevelan:** Accept L4 with explicit promotion criteria for L5 within 12 months; comp negotiation as senior given Claude depth.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Aimpoint Digital — Sr/FDE comp | Not public; consulting firm comp varies | — |
| US FDE / Applied AI Eng (senior) | ~$170k–$230k base + bonus | Levels.fyi 2026 |
| Anthropic partner ecosystem demand | Rising — Claude enterprise consulting in early growth | Anthropic partner directory 2026 |
| Aimpoint Digital company size | Boutique consultancy (~100–200 ppl), Atlanta HQ | LinkedIn 2026 |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI Engineer ... banking & regulated enterprises" | "Forward Deployed AI Engineer with 4+ yrs shipping Claude-based RAG, agentic, and guardrail systems for regulated enterprises (banking, healthcare); end-to-end client delivery from discovery to production." | Direct mirror of JD framing |
| 2 | Skills first row | "GPT-4o, GPT-5, Claude Sonnet, Gemini, LLaMA" | Lead with "Claude (Sonnet, Opus)" + "Anthropic Bedrock, tool use, agents, evaluation" | Front-load Claude/Anthropic specificity |
| 3 | Progress top bullet | "agentic LLM systems on conductor–subagent" | Add "Claude-anchored agentic stack with HITL guardrails and observability for healthcare clients" | Mirror JD agentic + guardrail language |
| 4 | Vanguard bullet | "evaluated GPT-4o, Claude, Gemini" | "Designed model-routing evaluation (Claude vs GPT-4o vs Gemini) for 25+ internal agents; +27% task success" | Highlight model-routing JD requirement |
| 5 | Footer | "Kent, OH" | "Kent, OH — Remote US (open to relocation)" + "F-1 OPT, open to sponsorship" | Address location + auth explicitly |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R |
|---|-----------------|-----------------|
| 1 | Architect Claude-enabled agentic workflows | **S:** Progress healthcare agentic platform. **T:** Reduce tokens & hallucination. **A:** Conductor–subagent orchestration with context-scoped subagents. **R:** −42% tokens, sustained accuracy. **Reflection:** Subagent context budgets matter more than prompt engineering at orchestrator level. |
| 2 | Design RAG systems + guardrails | **S:** Healthcare doc RAG over millions of regulatory docs. **T:** 92% precision, low hallucination. **A:** Hybrid retrieval + cross-encoder re-ranking + RAGAS evals + content-safety filters. **R:** 92% precision, −40% hallucination. **Reflection:** Reranker > chunk size for precision lifts. |
| 3 | Lead discovery → process mapping | **S:** Vanguard 25+ agents across 20+ teams. **T:** Translate biz problem → AI feature. **A:** Discovery interviews, prioritization, prototype → production handoff. **R:** Adoption across 20+ teams, 100K+ req/day. **Reflection:** Without an outcomes-first scoping doc, agents drift. |
| 4 | Production-ready solutions with observability | **S:** Same Vanguard platform. **T:** Reliable SLA. **A:** RAGAS/BERTScore dashboards, prompt compression, semantic caching. **R:** p95 1.5s → 800ms; 99.9% uptime. **Reflection:** Eval-first deployment catches regressions models don't catch themselves. |
| 5 | Reusable patterns / reference architectures | **S:** Multiple healthcare client onboarding at Progress. **T:** Avoid rebuilding RAG from scratch. **A:** Modular pipeline (chunker, retriever, reranker, eval) with config swap per client. **R:** Faster onboard, consistent precision floor. **Reflection:** Reference arch saves more time on the third client than on the first. |
| 6 | Translate business → technical solution | **S:** Vanguard model-selection decision. **T:** Pick GPT-4o vs Claude vs Gemini for cost/safety/quality. **A:** Built evaluation harness with biz-aligned metrics. **R:** +27% task success. **Reflection:** Comp framing in business terms (cost-per-success) won the room. |

## G) Posting Legitimacy

**Assessment:** Trusted

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Breezy.hr posting | Positive |
| Description quality | Very specific: Claude, LangGraph, LlamaIndex, Bedrock, governance, observability | Positive |
| Company footprint | Aimpoint Digital is established analytics/AI consultancy (Atlanta) with public Anthropic partner status | Positive |
| Comp transparency | Not disclosed | Concerning |
| Reposting | "Claude 2026" tag suggests dedicated practice line | Positive |
| Sponsorship | Not addressed in JD | Neutral (clarify) |

**Context Notes:** Aimpoint is a real, mid-size consultancy. JD is detailed and technically specific — not a ghost post. Comp non-disclosure is normal for consulting firms.

## H) Draft Application Answers

(Score 3.6/5 ≥ 3.0 — PDF generated. Score < 4.5 — full draft answers skipped. Use Block E/F to customize the application if proceeding.)

---

## Keywords extraídas

forward deployed AI engineer, Claude, Anthropic, RAG, agentic workflows, tool use, guardrails, governance, AWS Bedrock, FastAPI, LangGraph, LlamaIndex, Python, TypeScript, React, Snowflake, Databricks, enterprise AI consulting, HITL, observability, evaluation, model routing, regulated industries
