# Evaluación: Zapier — Engineer, Applied AI

**Fecha:** 2026-07-06
**Arquetipo:** AI Platform / MLOps Engineer (primary) + Applied AI / LLM Engineer
**Score:** 4.2/5
**URL:** https://jobs.ashbyhq.com/zapier/38434b88-086c-424b-8d18-8d006e0b71b8
**Legitimacy:** High Confidence
**Location:** Remote — NAMER (North America)
**Region:** US
**PDF:** output/2026-07-06/cv-deepak-mallampati-zapier-applied-ai-2026-07-06.pdf
**Verification:** confirmed via Ashby GraphQL (jobPosting live, comp band + full JD returned)

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Platform / MLOps Engineer (primary) + Applied AI / LLM |
| Domain | Developer platform / workflow automation (AI Platform team) |
| Function | Build — shared LLM/ML infra: LLM proxy, observability, ML Ops |
| Seniority | Mid IC (title "Engineer, Applied AI" — no Senior/Lead) |
| Remote | Remote (NAMER) |
| Comp | $191.5K–$287.3K + equity + bonus (multiple ranges) |

**TL;DR:** Build and evolve the shared AI Platform that other Zapier teams rely on — an LLM proxy server, observability tooling, and ML Ops platform capabilities — focused on how models are accessed, monitored, evaluated, deployed, governed, and operated in production (LLM Ops / ML Ops). Requires 4+ years software engineering incl. production AI/ML systems and ≥1 year of LLM Ops / ML Ops / platform-infra work. This is a near-ideal fit: US-remote (clean for F-1 OPT), top-tier comp, and an archetype (AI Platform/MLOps) that maps directly to Deepak's LLM eval/monitoring framework, model-routing/caching cost work, and Vanguard internal-AI-platform experience.

## B) Match con CV

| Requisito del JD | Evidencia en CV | Match |
|------------------|-----------------|-------|
| 4+ yrs software eng incl. production AI/ML systems | 4+ yrs production GenAI/LLM (Progress Solutions, Vanguard, Emerson) | Strong |
| ≥1 yr LLM Ops / ML Ops / platform-infra | LLM eval+monitoring framework (RAGAS/BERTScore + latency/accuracy dashboards); Vanguard internal AI platform (25+ agents, observability tooling) | Strong |
| Model access, monitoring, evaluation, deployment | "structured LLM evaluation and monitoring framework… benchmark iterations pre-deployment, surface regressions" | Strong |
| Operate models in prod: reliability, latency, cost | "prompt compression, semantic caching, model routing… sustaining SLA while reducing per-query overhead"; p95 1.5s→800ms | Strong |
| Backend systems / developer tooling / internal platforms | Vanguard: 12 APIs+microservices, internal AI platform, 100k+ req/day across 20+ teams | Strong |
| Full lifecycle: build, test, deploy, scale ML/LLM | MLflow, W&B, Docker/K8s, CI/CD (Jenkins, Azure DevOps); fault-tolerant automation infra | Strong |
| Governance / safety in production | Content Safety, PII masking, prompt-injection mitigation, audit logging; unsafe-output reduction 42% (Vanguard) | Strong |
| LLM proxy / model routing | Model routing + semantic caching for inference cost/latency | Moderate–Strong |

**Gaps & mitigation:**
1. **Pure platform-infra depth (LLM proxy server as a product):** Deepak's platform work is embedded in application delivery (Vanguard internal platform, eval framework) rather than owning a standalone LLM-gateway product. Mitigation: lead with the LLM eval/monitoring framework and the model-routing/caching cost work — these are exactly the "paved road" primitives the JD describes. Low risk given the ≥1-year bar (not senior-platform).
2. **Company scale / "highly leveraged" framing:** Role explicitly partners with more senior engineers, so mid-IC positioning fits; no over-claim needed.

## C) Nivel y Estrategia

- **JD level:** Mid IC ("Engineer, Applied AI"; 4+ yrs, ≥1 yr LLM/ML Ops; explicitly "partner with more senior engineers"). Not a senior/staff title.
- **Candidate's natural level:** Direct match — 4+ yrs production LLM systems with genuine LLM Ops surface area (evals, monitoring, cost/latency, governance).
- **"Sell senior without lying":** Lead with the LLM evaluation+monitoring framework (evals as the CI of LLM systems) and inference-cost engineering (semantic caching + model routing, p95 1.5s→800ms) — platform primitives, not one-off features. Reinforce with Vanguard internal-AI-platform scale (100k+ req/day, 25+ agents).
- **"If down-leveled":** Comp band is broad and high; even the lower range is excellent. Anchor on production LLM-Ops ownership to hold the mid band.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp | $191.5K–$287.3K + equity + bonus (multiple ranges) | JD (Ashby comp band) |
| Market — Applied AI / AI Platform Eng, US remote | ~$180k–$250k+ total | Built In 2026 (remote AI Engineer avg ~$202k TC) |
| Demand — LLM Ops / ML Ops platform | High and rising (platform paved-road roles) | Market context |

Comp is at/above US-remote market for the archetype and well above EU-equivalents. For a US-based F-1 OPT candidate this is a rational, high-value target with no location or authorization friction.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises" | Add "LLM Ops / ML Ops platform work — evals, observability, model routing, and cost control in production" | Mirror JD's platform framing |
| 2 | Skills | MLOps mid-list | Surface Model Monitoring & Observability, MLflow/W&B, model routing, semantic caching first | ATS keyword match to LLM Ops |
| 3 | Experience | RAG-led ordering | Lead Progress Solutions eval-framework + cost/latency bullets, then Vanguard platform bullets | Direct proof of JD's #1 ask (operate models in prod) |
| 4 | Projects | MangaLens/career-ops | Keep career-ops (autonomous pipeline, observability) as platform-thinking proof | Shows infra/paved-road mindset |
| 5 | LinkedIn | — | Add "LLM Ops, ML Ops, model observability, LLM evals" to headline | Recruiter search match |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Operate models in prod (reliability/cost/latency) | Inference cost/latency optimization | Per-query cost + latency breaching SLA | Cut cost/latency without quality loss | Prompt compression + semantic caching + model routing | Sustained SLA, lower per-query overhead (p95 1.5s→800ms at Vanguard) | Routing + caching beat model downsizing for cost/quality balance |
| 2 | Evaluation / monitoring platform | LLM eval+monitoring framework | No pre-deploy regression signal | Benchmark iterations, catch regressions | RAGAS/BERTScore + latency/accuracy dashboards | Regressions caught before release | Evals are the CI of LLM systems — the core platform primitive |
| 3 | Shared platform for many teams | Vanguard internal AI platform | 20+ teams needed reliable AI building blocks | Provide reusable agents/APIs | 12 APIs + 25+ agents on shared platform | 100k+ requests/day across 20+ teams | Paved-road infra multiplies other engineers' output |
| 4 | Governance / safety in production | Content controls at Vanguard | Unsafe/non-compliant outputs risk | Enforce safe, policy-compliant responses | Safeguards + content controls | Unsafe outputs down 42% with quality held | Governance is a platform guarantee, not a per-feature bolt-on |

**Case study to present:** The LLM evaluation+monitoring framework (RAGAS/BERTScore + latency/accuracy dashboards) — a reusable platform primitive that surfaces regressions before release, exactly the "paved road" Zapier's AI Platform team builds.
**Red-flag Qs:** None on authorization (US-remote, F-1 OPT works now). Ask how the LLM proxy/observability stack is currently split across teams to scope the "highly leveraged" mandate.

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Ashby GraphQL returns live jobPosting with full JD at eval time | Positive |
| Description quality | Specific, credible platform scope (LLM proxy, observability, ML Ops); explicit comp band $191.5K–$287.3K + equity + bonus | Positive |
| Company signals | Zapier — well-known, profitable, remote-first automation company; established Ashby board | Positive |
| Reposting | No prior Zapier report for this role; distinct AI Platform posting | Neutral |
| Contradictions | None internal; requirements consistent with a mid-IC platform role | Neutral |

**Context:** Reputable public company, transparent comp, live Ashby posting — strong legitimacy on every axis. No scam or ghost-posting signals.

## H) Draft Application Answers

Not generated — score < 4.5.

---

## Keywords extraídas

Applied AI Engineer, AI Platform, LLM Ops, ML Ops, LLM proxy, model observability, monitoring, evaluation, RAGAS, BERTScore, model routing, semantic caching, deployment, governance, reliability, latency, cost optimization, Python, backend, developer tooling, internal platform, production AI/ML, remote NAMER

**Recommendation:** ✅ Apply. Near-ideal fit — US-remote (clean for F-1 OPT), top-tier comp, and an AI Platform / MLOps archetype that maps directly to Deepak's LLM eval/monitoring framework, inference-cost engineering, and Vanguard internal-AI-platform experience. Lead with platform primitives (evals, observability, routing/caching). Score 4.2/5.
