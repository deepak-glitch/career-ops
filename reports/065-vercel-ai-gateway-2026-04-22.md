# Evaluación: Vercel — Software Engineer, AI Gateway

**Fecha:** 2026-04-22
**Arquetipo:** AI Platform / MLOps + Agentic
**Score:** 3.3/5
**URL:** https://job-boards.greenhouse.io/vercel/jobs/5798406004
**Legitimacy:** High Confidence
**Location:** Hybrid — San Francisco or New York City (anchor M/T/F)
**PDF:** output/cv-deepak-mallampati-vercel-ai-gateway-2026-04-22.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | AI Platform — unified API gateway for AI inference, failover, provider integrations |
| Domain | Vercel AI Gateway — TS/JS platform for high-volume inference routing |
| Function | Design + maintain AI Gateway platform with unified API endpoints; rate limiting, failover, provider integrations; scalable backend / distributed systems; OSS engagement |
| Seniority | **5+ yrs** relevant experience |
| Remote | Hybrid SF / NYC — anchor M/T/F |
| Location | Hybrid — SF or NYC |
| TL;DR | AI Platform / Gateway role — multi-provider API abstraction, failover, rate-limiting. Manga Lens (4-provider extension) is a near-perfect demo. 5+ yrs is a stretch (Deepak ~3-4 equiv). Comp disclosed ($196-294K). |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| **5+ yrs relevant experience** | **STRETCH** | cv.md: 2.5 yrs Progress Solutions + 10 mo Emerson + projects — ~3-4 yrs equivalent |
| JavaScript / TypeScript proficiency | **STRONG** | cv.md L12 TypeScript; L59-60 Manga Lens MV3 + content scripts; L65-66 Dream Decoder React/TS |
| Backend dev + APIs + cloud infra | **STRONG** | cv.md L28 FastAPI/Flask + Docker; L17 Docker, CI/CD, RESTful APIs, cloud-ready |
| AI/ML integrations, API gateways, distributed systems | **STRONG** | cv.md L59-60 Manga Lens 4-provider abstraction + 7-day cache + per-domain configs; L66 multimodal API orchestration |
| Rate limiting, failover, provider integrations | **STRONG** | cv.md L59-60 Manga Lens multi-provider fallbacks (cloud vs local Ollama); payload handling (WebP cloud, JPEG Ollama) |
| Write tested efficient code for high-volume AI inference | **PARTIAL** | cv.md L28 load simulation + ~30% fewer post-deploy defects; no explicit high-volume scaling |
| Open-source project contribution | **PARTIAL** | Manga Lens is shipped; not highlighted as OSS in cv.md. E-Farming was a founder product |
| Collaborative + cross-functional | **STRONG** | cv.md L52-55 Kent State 150+ students; L30 stakeholder docs |
| Hybrid SF/NYC | **BLOCKER-LIGHT** | Open to relocation |
| F-1 OPT | **FLAG** | Vercel's sponsorship posture is confirmed (app form asks about it) |

**Gaps:**
1. **5+ yrs** — stretch.
2. **OSS contribution** — soft spot.
3. **High-volume distributed-systems scaling** (gateway-scale throughput) — ramp.

## C) Nivel y Estrategia

- **JD level:** Senior-ish (5+ yrs). **Deepak:** 2.5 yrs core — below floor but not by as much as Agent role.
- **Strategy:** Lead with **multi-provider API abstraction** (Manga Lens, 4 providers with per-provider payload contracts + caching) + **Dream Decoder** (multimodal API orchestration) + Emerson-era DMV + Grafana observability. Frame Manga Lens as the closest OSS-style publication (Chrome Web Store).
- **If downleveled:** $150-180K base.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Vercel posted band | $196K - $294K base (SF) + equity + healthcare + WFH budget | JD |
| Vercel SE NYC median | ~$205K total | Levels.fyi |
| Demand for AI Gateway / multi-provider | Very high | Market (every AI app needs a gateway layer) |

## E) Plan de Personalización

| # | Sección | Propuesto | Por qué |
|---|---------|-----------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ yrs) shipping production multi-provider AI integrations — Manga Lens Chrome Web Store wraps 4 vision providers (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama) behind a unified content-script API, per-domain configs for 29 sites, 7-day cache, per-provider payload handling (WebP cloud, JPEG local). Python + TypeScript + FastAPI + Docker; production packaging with ~30% fewer defects; observability with Grafana + DMVs. Open to SF/NYC hybrid." | Mirror JD: gateway / multi-provider / APIs |
| 2 | Competencies | "Multi-Provider API Abstraction", "Failover + Caching", "TypeScript + Backend", "API Gateways", "Distributed Systems", "Observability (Grafana, DMV)", "Production Packaging (FastAPI + Docker)", "OSS Shipping" | JD vocabulary |
| 3 | Projects | Lead with **Manga Lens** + **Dream Decoder** (multimodal API orchestration w/ Replicate + Perplexity Sonar) + **Agentic Claims** (schema-validated contracts) + Emerson Grafana / DMV observability | Match JD priorities |
| 4 | Cover letter | "Vercel AI Gateway is what I've already been building, just at bigger scale. Manga Lens on the Chrome Web Store is a live multi-provider AI gateway for webtoon translation — 4 vision providers (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v), per-provider payload contracts (WebP for cloud vs JPEG for Ollama to avoid CUDA crash), 7-day translation cache, narrowed host permissions, per-domain selector configs for 29 sites. Backend-side, I ship FastAPI + Docker services with structured logging and load sim (~30% fewer post-deploy defects). 5+ yrs is a stretch on paper; the gateway patterns are in my shipping record." | Direct JD quote + demo from a live product |

## F) Plan de Entrevistas

| # | Requisito JD | Historia | S | T | A | R | Reflection |
|---|-------------|----------|---|---|---|---|------------|
| 1 | Unified API endpoints / provider integrations / failover | Manga Lens Chrome Web Store | Webtoon translation UX needed 4 providers | Build unified gateway | MV3 + content scripts + service workers + 4 providers + per-domain configs + 7-day cache + WebP/JPEG payload contracts + Ollama CUDA-crash guard | Shipped to Chrome Web Store | Gateway = provider abstraction + payload contract + cache + circuit-style fallback |
| 2 | High-volume AI inference / rate limiting | FastAPI + Docker @ Progress Solutions | LLM inference under clinical load | Productionize | FastAPI + Docker + structured logging + load sim + health checks | ~30% fewer post-deploy defects | Rate-limit patterns and structured logging compound into observability |
| 3 | Observability / distributed systems | Grafana + DMVs @ Emerson | SQL Server platform unmonitored | Build observability | DMV queries → Grafana dashboards for long-running queries, deadlocks, CPU/IO contention | ~25% fewer incident recurrences, ~30% faster resolution | Measure-first is the only stable scaling strategy |
| 4 | OSS / public project shipping | Manga Lens Chrome Web Store | Independent publication with privacy policy | Productize solo | End-to-end shipping + store listing + privacy policy + narrowed host permissions | Published to Chrome Web Store | Solo shipping = OSS mentality compressed into a product |
| 5 | Backend + APIs | Agentic Claims pipeline | Multi-step claim processing | Build + harden | FastAPI + Docker + schema-validated JSON contracts + RAG-grounded validation | >30% hallucination reduction | Schema contracts between services are the core of distributed-system reliability |
| 6 | Product + UX sensibility | Dream Decoder | Multimodal creative app | Coordinate APIs | Perplexity Sonar interpretation + Replicate image models + React/TS/Vite/Tailwind + structured prompt transformation | ~30% alignment improvement, ~25-30% first-pass image success | UX shapes the API abstraction, not the other way around |

**Case study:** Manga Lens — direct analog to Vercel AI Gateway (multi-provider, failover patterns, caching, host permissions, payload contracts).
**Red-flag prep:**
- "5+ yrs?" → "2.5 yrs core + 10 mo intern + projects ≈ 3-4 yrs equivalent. Gateway patterns are in the shipping record — Manga Lens is production."
- "High-volume distributed systems?" → "Honest ramp; FastAPI + Docker + Grafana is the foundation."
- "OSS contribution?" → "Manga Lens to Chrome Web Store is solo publication with privacy policy. Happy to ramp on broader OSS."
- "Sponsorship?" → "F-1 OPT now; future H-1B needed."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active GH; Apply live | Positive |
| Tech specificity | Explicit — unified API, rate limiting, failover, OSS, distributed | Positive |
| Requirements realism | 5+ yrs + backend + AI integration = sensible | Positive |
| Salary transparency | $196-294K disclosed | Positive |
| Company posture | Vercel — growing AI infra surface (SDK, Gateway, Agent, v0) | Positive |
| Sponsorship | App form asks about visa — not ruled out | Neutral |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why Vercel?**
> Vercel is shipping one of the few AI-platform layers I actually use. Manga Lens (my Chrome Web Store extension) already implements the core AI Gateway patterns: unified API across 4 vision providers (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v), per-provider payload handling (WebP for cloud to minimize bandwidth, JPEG for Ollama to avoid CUDA crash), 7-day translation cache, per-domain selector configs for 29 sites, narrowed host permissions. At Progress Solutions I package LLM services with FastAPI + Docker + structured logging + load sim (~30% fewer post-deploy defects). Emerson gave me Grafana + DMV-based distributed observability.

**Why this role?**
> AI Gateway is the problem I already solve at Manga Lens scale. Your 5+ yrs bar is honest — I'm at 2.5 yrs core + projects — but the gateway patterns are already in my shipping record.

**Relevant project:**
> Manga Lens Chrome Web Store extension. Published independently. Four AI vision providers, unified API, payload contracts, 7-day cache, per-domain configs for 29 sites.

**Why good fit?**
> Multi-provider AI integration + TypeScript + backend + observability + shipping discipline. SF/NYC hybrid OK. F-1 OPT, future sponsorship needed.

**How did you hear?**
> Vercel careers on Greenhouse — AI Gateway posting matches Manga Lens patterns directly.

## Keywords extraídas

Vercel, AI Gateway, unified API, rate limiting, failover, provider integrations, TypeScript, JavaScript, backend, distributed systems, cloud infrastructure, API gateway, open source, scalability, high-volume, AI inference, 5+ yrs.

---

**Recommendation: Apply (with tailoring).** 3.3/5 — 5+ yrs is a stretch, but Manga Lens is a near-perfect case study. Worth a shot because the narrative is rare (an applied-AI engineer who has actually shipped a multi-provider gateway to end users).
