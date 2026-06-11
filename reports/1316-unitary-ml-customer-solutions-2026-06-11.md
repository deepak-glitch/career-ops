# Evaluación: Unitary — Machine Learning Engineer, Customer Solutions

**Fecha:** 2026-06-11
**Arquetipo:** AI Solutions / Forward Deployed Engineer (híbrido con Applied AI / LLM)
**Score:** 3.8/5
**URL:** https://apply.workable.com/unitary/j/A01F1A4001
**Legitimacy:** High Confidence
**Location:** United Kingdom — Remote (remote-first; ~3 offsites/year in Europe)
**Region:** Intl
**PDF:** output-intl/2026-06-11/cv-deepak-mallampati-unitary-ml-customer-solutions-2026-06-11.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed Engineer + Applied AI / LLM |
| Domain | Enterprise / Trust & Safety (content moderation at scale) |
| Function | Deploy + consult (customer-facing delivery of AI automation) |
| Seniority | Mid IC (no Senior/Staff qualifier; "early employee", versatile generalist) |
| Remote | Full remote (UK entity; remote-first, EU + NA team; 3 offsites/yr) |
| Team size | ~20 people, Europe + North America |
| Funding | ~$25M VC (Creandum, Plural); analyses millions of images/videos daily |
| TL;DR | Build customer-facing "Virtual Agents" that automate manual customer/marketplace ops — FDE-style delivery with an agentic-AI and MLOps backbone. |

## B) Match con CV

| Requisito del JD | Evidencia en `cv.md` | Fuerza |
|------------------|----------------------|--------|
| Strong Python + ML Engineering, applying AI to customer problems | "AI Engineer — Progress Solutions": production agentic LLM systems, RAG pipelines; "AI Engineer Intern — Vanguard": 12 APIs/microservices, 100k+ requests/day | Fuerte |
| Develop **agentic AI systems** that automate human processes | Conductor–subagent orchestration framework, context-scoped subagents executing autonomously (−42% tokens); 25+ AI agents at Vanguard | Fuerte |
| Kubernetes deployment + deploy infra independently | Skills: Docker, **Kubernetes**, Terraform, CI/CD (Jenkins, Azure DevOps) | Medio-Fuerte |
| Problem-solving + project management; analyse workflows, design automated solutions | End-to-end delivery from data → API; automation infra with retry logic (−60% failed runs) | Fuerte |
| Customer-facing, strong communication, lead technical deliveries | Partnered with product/platform/data teams; delivered LLM apps for 20+ internal teams | Medio (interno, no externo cliente) |
| MLOps practices + monitoring ML in production (nice-to-have) | LLM eval/monitoring framework (RAGAS, BERTScore), latency/accuracy dashboards, MLflow/W&B | Fuerte |
| CI/CD (nice-to-have) | Jenkins, Azure DevOps | Fuerte |
| LLMs + current AI advancements (nice-to-have) | GPT-4o/5, Claude, Gemini, LLaMA; LangChain/LangGraph | Fuerte |

**Gaps:**
1. **External client-facing delivery** (not a hard blocker). Deepak's customer collaboration has been internal-stakeholder (product/platform teams), not external enterprise customers. *Mitigación:* frame Vanguard/Progress cross-team delivery + career-ops (shipped product) as evidence of translating ambiguous requirements into working systems; lean on the consultative RAG/eval work.
2. **Trust & Safety / content-moderation domain** (nice-to-have). *Mitigación:* Vanguard content-safety work — "safeguards and content controls… reducing unsafe outputs by 42%" — maps directly to T&S. Lead with this in the cover letter.
3. **Fully-remote international-team experience** (nice-to-have). *Mitigación:* career-ops + distributed collaboration; explicitly state comfort with EU/NA overlap.

## C) Nivel y Estrategia

- **Nivel JD:** mid IC generalist ("early employee", "get stuck into whatever needs doing"). **Nivel natural de Deepak para FDE/Applied AI:** mid — buen encaje, sin downlevel.
- **Vender sin mentir:** posicionar como "Applied AI engineer who has shipped agentic LLM systems and content-safety controls in regulated enterprises, and who ships end-to-end from model to API." The conductor–subagent framework + 42% unsafe-output reduction is the lead.
- **Si downlevelan:** comp UK undisclosed — accept only with clear scope + 6-month review. Given F-1 OPT, treat as a relocation/sponsorship conversation up front (see Red Flags).

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp específica | No disclosed in JD ("competitive salary + equity, occupational pension") | JD (Workable) |
| Market context — UK ML Engineer (mid) | ~£60–90k base typical for mid ML at London startups; equity on top | General UK market knowledge — not company-verified |
| Demand | High — agentic AI + T&S is an active hiring area; $25M raise signals runway | JD + funding note |

*No company-specific salary figure is published; the above UK range is market context only, not a Unitary quote.*

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "AI/ML Engineer… banking and regulated enterprises" | Add "ships customer-facing agentic AI that automates manual operations workflows" | Mirror "Virtual Agents that automate processes" |
| 2 | Experience bullet 1 | Conductor–subagent framework | Surface as "automates multi-step human workflows autonomously" | Direct JD language match |
| 3 | Content-safety bullet | Vanguard 42% unsafe-output reduction | Promote near top | T&S domain hook |
| 4 | Skills | Kubernetes buried in MLOps line | Pull Kubernetes + CI/CD forward | JD calls out K8s explicitly |
| 5 | Projects | career-ops | Frame as shipped, autonomous product (self-service tooling analogy) | "develop self-service tools that empower customers" |

**LinkedIn:** headline → "Applied AI Engineer | Agentic systems & content-safety for regulated enterprises"; add Kubernetes + Trust & Safety keywords; feature MangaLens (shipped product) and career-ops.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Agentic automation of human workflows | Conductor–subagent framework | Complex multi-step objectives overloaded a single LLM | Decompose into autonomous subagents | Built context-scoped orchestration | −42% tokens, sustained accuracy | Scoping context per subagent matters more than model size |
| 2 | Content-safety / T&S | Vanguard safeguards | Unsafe model outputs risk in finance | Add content controls without hurting quality | Engineered policy-compliant guardrails | −42% unsafe outputs | Guardrails must be measured, not assumed |
| 3 | MLOps / monitoring in prod | LLM eval framework | No way to catch regressions pre-deploy | Build eval+monitoring | RAGAS, BERTScore, latency/accuracy dashboards | Caught regressions before release | Evals are a product, not a one-off |
| 4 | Customer delivery under ambiguity | Vanguard platform APIs | 20+ teams, unclear specs | Translate to working services | 12 APIs/microservices, p95 1.5s→800ms | +40% faster integration | Ship a thin slice, iterate with the consumer |
| 5 | K8s / infra independence | Automation infra | Flaky production runs | Reliability via orchestration | Scheduled batch + exponential-backoff retry | −60% failed runs | Idempotency + backoff beat heroics |
| 6 | RAG / retrieval quality | Healthcare RAG | Hallucination on domain queries | Improve grounding | Dense retrieval + cross-encoder re-rank | Materially reduced hallucination | Re-ranking is the cheapest precision lever |

**Case study a presentar:** career-ops (autonomous, end-to-end shipped pipeline) — best analogue for "self-service tools that empower customers independently."
**Red-flag Qs:** "Why a UK role on F-1 OPT?" → be honest about relocation/sponsorship timeline; "Customer-facing experience?" → reframe cross-team delivery + shipped products.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting state | `state: published` confirmed via Workable v2 API (live, in-memory verify) | Positive |
| Apply flow | Active Workable application endpoint | Positive |
| Tech specificity | Names Python, K8s, agentic AI, MLOps, CI/CD; clear first-6-months scope (hands-on → self-service tooling) | Positive |
| Requirements realism | Coherent mid-IC generalist; no entry/staff contradiction | Positive |
| Company signals | $25M raised (Creandum, Plural); operating at scale (millions of media/day) | Positive |
| Reposting | No prior Unitary entry in scan-history | Neutral |
| Salary transparency | Omitted (common in UK) | Neutral (Low reliability) |

**Context Notes:** Early-stage startup; generalist breadth in JD is genuine role-shaping, not vagueness. Legitimate active opening.

## H) Draft Application Answers

*(Score 3.8 < 4.5 — full draft answers deferred; cover-letter hook prepared:)* Lead with the Vanguard content-safety result (−42% unsafe outputs) + the conductor–subagent agentic framework as direct evidence for "build Virtual Agents that automate workflows" in a Trust & Safety company. Flag F-1 OPT / relocation openness honestly.

---

## Keywords extraídas
Machine Learning Engineer, Customer Solutions, agentic AI, Virtual Agents, workflow automation, Python, Kubernetes, MLOps, CI/CD, LLMs, monitoring, Trust & Safety, content moderation, self-service tooling, remote-first, startup, customer-facing delivery, production reliability, model deployment, evaluation
