# Evaluación: Pragmatike (undisclosed client) — AI Infrastructure Engineer (GPU), Remote EMEA

**Fecha:** 2026-06-26
**Arquetipo:** AI Platform / MLOps Engineer
**Score:** 3.0/5
**URL:** https://jobs.ashbyhq.com/pragmatike/ee36336a-f7ff-49ab-b79b-f4d29b819006
**Legitimacy:** Proceed with Caution
**Location:** Fully remote (EMEA timezone); recruiter listed in Ukraine
**Region:** Intl
**PDF:** output-intl/2026-06-26/cv-deepak-mallampati-pragmatike-2026-06-26.pdf
**Verification:** confirmed (Ashby GraphQL `isListed=true`, fetched 2026-06-26)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | AI Platform / MLOps Engineer |
| Domain | GPU-powered, decentralized AI-native cloud infrastructure (model serving at scale) |
| Function | Build / operate — production model-serving infrastructure |
| Seniority | Mid-senior (strong ownership, on-call) |
| Remote | Fully remote, EMEA timezone |
| Team size | Fast-scaling startup (undisclosed; hired via Pragmatike recruiting agency) |
| Comp | Not posted |
| TL;DR | Design and operate production model-serving infra (vLLM/TGI/Triton), deployment pipelines, autoscaling, and observability for low-latency AI inference at scale. |

## B) Match con CV

| JD requirement | CV evidence | Fit |
|----------------|-------------|-----|
| Production model serving (vLLM/TGI/Triton) | MLOps stack (Docker, K8s, SageMaker/Bedrock); inference cost/latency optimization, model routing, semantic caching | Medium-Strong (serving experience, but not explicitly vLLM/Triton) |
| Deployment pipelines, blue/green & canary | CI/CD (Jenkins, Azure DevOps); "automation infrastructure… 60% fewer failed runs" | Medium-Strong |
| Autoscaling, multi-model serving, routing | "model routing"; "100,000+ requests daily" scale | Medium |
| Observability (latency/throughput/GPU/cost) | "model monitoring & observability"; "latency and accuracy dashboards" | Strong |
| Distributed GPU systems, memory/throughput tuning | Fine-tuning on H100 (QLoRA); not core GPU-infra ops | Medium (gap) |

**Gaps & mitigation:**
1. **Deep low-level GPU serving infra (vLLM/TGI/Triton internals, kernel/throughput tuning)** — partial blocker. Candidate has the adjacent MLOps + inference-optimization layer but not deep serving-framework internals. Mitigation: highlight H100 fine-tuning, latency optimization, model routing; commit to ramping on vLLM/Triton. Honest framing — don't overclaim.
2. **EMEA timezone + work authorization** — candidate is US-based on F-1 OPT; an EMEA-remote role is a real logistical/visa mismatch. Per profile policy: flag, do not veto. This caps practical fit.

## C) Nivel y Estrategia

- JD wants an infra-serving specialist with production ownership and on-call. Candidate's natural archetype is closer to Applied AI / MLOps at the application layer than core inference-infra.
- Sell-truthfully: lead with observability + inference cost/latency optimization (genuine overlap), be candid about ramping on serving-framework internals.
- If pursued: only worthwhile if the client supports remote-from-US / async EMEA overlap, otherwise the timezone/visa friction outweighs the fit.

## D) Comp y Demanda

| Metric | Data | Source |
|--------|------|--------|
| Posted comp | None | Ashby JD |
| Market (EMEA remote, AI infra) | Wide range; undisclosed-client recruiter postings often vague | Market estimate |
| Demand | GPU/inference-infra roles in high demand 2025–26 | Qualitative |

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | Add "production inference optimization + ML observability at scale" | Match serving/observability |
| 2 | Experience | Surface model routing, semantic caching, latency wins | Direct overlap |
| 3 | Skills | Pull MLOps/serving/observability + GPU (H100) forward; add vLLM/Triton as learning targets | JD keywords |
| 4 | Projects | De-emphasize app-layer; emphasize infra reliability | Infra role |
| 5 | Keywords | "model serving, vLLM, Triton, inference, autoscaling, observability" | ATS |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Low-latency inference | Inference optimization | High per-query cost/latency | Hit SLA | Prompt compression, semantic caching, routing | Sustained SLA, lower overhead | Caching + routing beat raw scaling |
| 2 | Observability | Eval/monitoring framework | No pre-deploy signal | Track health | Latency/accuracy dashboards | Regressions caught early | You can't operate what you can't see |
| 3 | Reliable pipelines | Automation infra | Failing prod runs | Reliability | Backoff/retry + batch orchestration | 60% fewer failures | On-call pain drops when retries are designed in |

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Listing | `isListed=true`, fetched today | Positive |
| Description quality | Specific frameworks (vLLM/TGI/Triton), clear responsibilities | Positive |
| Hiring entity | Recruiting agency (Pragmatike) for an **undisclosed** client | Concerning |
| Comp | Not disclosed | Neutral |
| Reposting | First appearance | Neutral |

Context: Recruiter-fronted "undisclosed client" postings are common and legitimate, but the candidate cannot research the actual employer's stability/reputation pre-application. Recommend asking the recruiter to name the client and confirm remote-from-US viability before investing.

## H) Draft Application Answers

(Score 3.0 < 4.5 — drafts deferred.)

---

## Keywords extraídas

AI infrastructure engineer, GPU, model serving, vLLM, TGI, Triton, inference, autoscaling, multi-model serving, request routing, blue/green, canary, deployment pipelines, observability, MLOps, model registry, CI/CD, low-latency, remote EMEA, distributed systems
