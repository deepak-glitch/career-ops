# Evaluación: PerfectServe — Software Engineer, Full Stack AI (US-Remote)

**Fecha:** 2026-04-22
**Arquetipo:** Applied AI / LLM Engineer (RAG + LLM API integration, PHI/compliance) — primary
**Score:** 4.3/5
**URL:** https://job-boards.greenhouse.io/perfectserve/jobs/5830849004
**Legitimacy:** High Confidence
**Location:** US — **Remote-first**. 5+ years SWE required.
**Verification:** confirmed (WebFetch Greenhouse direct)
**PDF:** output/cv-deepak-mallampati-perfectserve-2026-04-22.pdf
**Date:** 2026-04-22

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Applied AI / LLM Engineer + Full-Stack AI in regulated healthcare SaaS |
| Domain | PerfectServe — healthcare communications/collaboration platform (500+ hospitals, 30K+ practices, PHI-handling) |
| Function | Design AI integration patterns, integrate LLM APIs (OpenAI/Anthropic/Bedrock), build RAG/vector search/embedding pipelines, latency/cost/hallucination safeguards, model evals, PHI security |
| Seniority | 5+ yrs (senior band) — but builder-oriented, not research-oriented |
| Remote | **US-Remote first** (explicit) |
| Location | Remote, US — any timezone likely OK |
| TL;DR | Best archetype fit in this batch. Healthcare + LLM APIs + RAG + vector search + PHI + AWS + evals matches Deepak's profile exactly — healthcare RAG (~35% retrieval precision, >90% grounded alignment), >30% hallucination reduction, FastAPI/Docker packaging, HIPAA-conscious governance. Only watch-out: **5+ yrs required** and Deepak has 2.5+ yrs. Framing as "senior-mid stretch" is the strategy. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 5+ yrs SWE | **STRETCH** | cv.md L22-23 Progress Solutions 2.5+ yrs + Emerson 10 mo + Suvidha 3 mo + grad research + founder = 3.5-4 yrs equivalent; frame carefully |
| Python backend | **STRONG** | cv.md L12 Python + FastAPI + Flask |
| LLM API integration (OpenAI/Anthropic/Bedrock) | **STRONG** | cv.md L59-60 Manga Lens 4 AI vision providers (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama); L65-66 Dream Decoder Perplexity + Replicate |
| RAG systems, vector search, embeddings | **STRONG** | cv.md L25 recursive semantic chunking + transformer embeddings, ~35% retrieval precision; L46 doc Q&A RAG; article-digest proof points (see cv.md) |
| Latency/cost/hallucination safeguards | **STRONG** | cv.md L26 grounding rules + tool discipline; L72 schema-validated JSON contracts; >30% hallucination reduction |
| Model evaluation / benchmarking | **STRONG** | cv.md L25 retrieval-grounded alignment >90%; eval audit trails (L30) |
| Observability / monitoring | **STRONG** | cv.md L28 structured logging + load sim; cv.md L38 Grafana dashboards |
| PHI / security-conscious | **STRONG** | cv.md L30 HIPAA-conscious governance, de-identification, data lineage, audit trails |
| AWS cloud-native | **PARTIAL** | cv.md L17 cloud-ready; Docker. No explicit AWS line; should clarify |
| Product-minded systems thinking | **STRONG** | cv.md L59-87 multi-project product shipping track record |
| Build vs buy advisory | **PARTIAL** | Not explicit in CV; founder + multi-provider work implies it |

**Gaps:**
1. **5+ yrs nominal gap.** Primary risk. Mitigation: "5 yrs" often = senior-level signal; Deepak's 2.5 yrs of AI-ship + independent product launches + MS = hit senior individual contributor shape. Frame as "senior IC level AI work."
2. **AWS specifically.** Minor. Mitigation: Docker + cloud-ready generalizes; AWS Bedrock via LLM API integration is straightforward; honest ramp story.
3. **Architecture + stakeholder advisory.** Partial. Mitigation: Student Manager coordination + founder + HIPAA stakeholder docs signal the shape.

## C) Nivel y Estrategia

- **JD level:** Senior (5+ yrs). **Deepak:** Junior-Mid (2.5 yrs). **Strategy:** Apply and lean hard into the match density. 5-year bars are often flexible for candidates with dense matching proof. "I'm officially 2.5 yrs but I've shipped the shape of what you're hiring for: healthcare RAG with ~35% retrieval precision gain, >90% grounded alignment, agentic workflows with >30% hallucination reduction, multi-provider LLM integration across shipped products, HIPAA-conscious governance. Happy to discuss level."
- **If downleveled:** Accept if remote US + comp stays above $100K. Comp band is $130-$170K so downlevel to $120-130K is realistic.
- **Dominant angle:** Healthcare + PHI + LLM API integration is *exactly* Deepak's Progress Solutions work — cover letter must name it in the first sentence.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Posted band | **$130K - $170K USD** | Greenhouse JD |
| Health-SaaS AI engineer (5 yr) US-remote | $130K-$180K | Market data |
| Demand for healthcare + LLM engineers | Very high | Market |
| PerfectServe reputation | 20+ yrs, 500+ hospitals, 30K+ practices; mid-size stable | Crunchbase / reviews |

**Above target** ($100-130K). Apply strong.

## E) Plan de Personalización

| # | Sección | Propuesto | Por qué |
|---|---------|-----------|---------|
| 1 | Summary | "Applied AI engineer building healthcare RAG, agentic LLM workflows, and production-ready LLM-API integrations across OpenAI / Anthropic / local inference. Measured: ~35% contextual retrieval precision gain, >90% grounded response alignment, >30% hallucination reduction, ~30% fewer post-deploy defects. HIPAA-conscious governance — de-identification, lineage docs, audit trails. Full-stack: FastAPI + Docker + Python." | Mirror JD exactly |
| 2 | Competencies | "Healthcare AI", "LLM API Integration (OpenAI/Anthropic/Bedrock)", "RAG + Vector Search", "Embeddings", "Hallucination Reduction", "PHI / HIPAA", "FastAPI + Docker", "AWS-ready", "Evaluation + Benchmarking", "Observability" | JD phrasing |
| 3 | Projects | Lead with **Agentic Healthcare Claims** + **Healthcare RAG at Progress Solutions** + **Manga Lens (4 LLM API integration)** | Match JD |
| 4 | Cover letter | "PerfectServe is building exactly what I've been shipping at Progress Solutions — healthcare RAG + agentic LLM workflows + HIPAA-conscious governance. My metrics: ~35% retrieval precision, >90% grounded alignment, >30% hallucination reduction. The 5-yr bar: I'm 2.5 yrs but the shape of my work is what you're hiring for — happy to walk through it." | Address the gap + density |

## F) Plan de Entrevistas

| # | Requisito JD | Historia | S | T | A | R | Reflection |
|---|-------------|----------|---|---|---|---|------------|
| 1 | RAG + vector search + embeddings | Healthcare RAG @ Progress Solutions | Clinical retrieval noisy, no grounding metric | Productionize with eval harness | Recursive semantic chunking + transformer embeddings + eval harness + FastAPI + Docker | ~35% retrieval precision, >30% irrelevant cut, >90% grounded alignment | Eval harness is what makes RAG shippable |
| 2 | LLM API integration across providers | Manga Lens 4 vision providers | Real-time manga translation | Ship cross-provider Chrome extension | Claude Sonnet + GPT-4o mini + GPT-4.1 Nano + Ollama minicpm-v + per-provider payload handling + 7-day cache | Chrome Web Store shipped, 29 site configs | Provider abstraction layer pays compounding dividends |
| 3 | Hallucination reduction | Agentic Claims | Multi-agent claims reasoning hallucinated | Schema-contract + RAG grounding | 5-stage pipeline: Intake → Validation → Consistency → Duplicate → Risk; schema-validated JSON contracts; RAG-grounded CPT/ICD | >30% hallucination reduction, ~25% agent stability gain | Contracts prevent cascading hallucinations |
| 4 | PHI / HIPAA security | HIPAA governance @ Progress Solutions | PHI data in evals + RAG indexes | Audit-ready data lineage | De-identification + lineage docs + evaluation audit trails + stakeholder-facing limitation docs | Audit-ready | Compliance docs ARE the engineering |
| 5 | Observability + cost | FastAPI + Docker + load sim + Grafana | Post-deploy defects + no runtime visibility | Add observability | Structured logging, load simulation, DMV + Grafana dashboards at Emerson; ~30% fewer defects, ~25% fewer incident recurrences | Measurable reliability win | Ship with dashboards, not after |
| 6 | Build vs buy advisory | Dream Decoder + Manga Lens | Pick Perplexity/Replicate vs custom models; pick Claude vs GPT-4o per latency/cost | Scope build/buy | Evaluated cost/latency per provider, mixed-vendor architecture with provider abstraction | Multi-provider cost/latency optimization | Build/buy is about integration shape, not just capability |

**Case study:** Healthcare RAG @ Progress Solutions + Agentic Claims — both directly land what PerfectServe's builder role asks for. Open with: "Here's exactly what you described in the JD — here's what I shipped."
**Red-flag prep:**
- "Only 2.5 yrs?" → "Dense match: 2.5 yrs of LLM API integration + RAG + HIPAA + FastAPI/Docker — plus independent product shipping. Shape of work > year count."
- "AWS specifically?" → "Docker + cloud-ready pattern generalizes; AWS Bedrock via LLM API is straightforward ramp."
- "Build/buy?" → "At Progress Solutions I've evaluated provider choice + architecture tradeoffs; at Manga Lens I built my own provider abstraction for four vendors."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active Greenhouse | Positive |
| Tech specificity | Named providers (OpenAI/Anthropic/Bedrock), RAG + vector + embeddings + evals | Positive |
| Role-company fit | PerfectServe is healthcare comms SaaS at scale; AI integration is a clear new bet | Positive |
| Salary transparency | **$130-$170K USD band published** | Positive |
| Requirements realism | 5+ yrs + Python + AWS + regulated-env experience — realistic senior IC bar | Positive |
| Company reputation | 20+ yrs, 500+ hospitals, 30K+ practices; no major 2025-2026 layoff news surfaced | Positive |
| Employee reviews | Mixed — some reports of support-center management friction; engineering reviews quieter. Neutral signal. | Neutral |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why PerfectServe?**
> PerfectServe is building what I've been shipping — healthcare RAG + LLM API integration + HIPAA-conscious governance. At Progress Solutions I delivered RAG with ~35% retrieval precision gain, >90% grounded response alignment, agentic workflows with >30% hallucination reduction, and FastAPI/Docker packaging with ~30% fewer post-deploy defects. PerfectServe's scope (LLM API integration across OpenAI/Anthropic/Bedrock, RAG/vector search, PHI safety, evals) is the same scope — at a 500-hospital / 30K-practice scale I'd love to grow into.

**On the 5-year experience bar:**
> I'm officially 2.5 yrs (Progress Solutions, healthcare AI), plus Emerson DB/DevOps and Suvidha ML work, plus independent shipping (Manga Lens on Chrome Web Store, Dream Decoder, Agentic Claims pipeline, E-Farming founder). The shape of what I've shipped is senior-IC — happy to walk through the evidence and discuss level.

**Do you require visa sponsorship?**
> Currently on F-1 OPT — authorized to work in the US now; future sponsorship required. Happy to discuss timing.

## Keywords extraídas

PerfectServe, Software Engineer Full Stack AI, Applied AI, RAG, vector search, embeddings, OpenAI, Anthropic, AWS Bedrock, LLM API, healthcare, HIPAA, PHI, SaaS, Python, FastAPI, Docker, AWS, observability, model evaluation, hallucination reduction, cost controls, Remote, US-Remote.

---

**Recommendation: Strong apply.** 4.3/5 — highest-match primary archetype in this batch. Published $130-$170K comp, US-remote, healthcare + LLM API + RAG + HIPAA alignment is near-exact. 5-yr bar is the only stretch — frame with density of proof.
