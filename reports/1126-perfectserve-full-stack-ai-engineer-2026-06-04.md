# Evaluación: PerfectServe — Software Engineer – Full Stack AI (US-Remote)

**Fecha:** 2026-06-04
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / MLOps Engineer
**Score:** 3.7/5
**URL:** https://job-boards.greenhouse.io/perfectserve/jobs/5830849004
**Legitimacy:** High Confidence
**Location:** Remote — United States
**Region:** US
**PDF:** output/2026-06-04/cv-deepak-mallampati-perfectserve-full-stack-ai-engineer-2026-06-04.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Applied AI / LLM Engineer (primary) + AI Platform / MLOps (secondary) |
| Domain | Healthcare communications (regulated, PHI-handling) SaaS |
| Function | Build — design and integrate LLM/RAG features across the SaaS platform |
| Seniority | Mid-IC ("Software Engineer" title, 5+ yrs requirement) |
| Remote | Fully Remote — US |
| Team size | Not stated; established 400+ employee company |
| TL;DR | Embed LLM APIs (OpenAI/Anthropic/Bedrock), RAG, vector search, and evaluation/observability into a regulated healthcare-communications SaaS. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Fit |
|------------------|-----------------|-----|
| 5+ yrs SWE with strong Python backend | 4+ yrs production AI/ML in Python (Vanguard intern + Progress + Emerson + research) | ⚠️ Slight YOE gap |
| Production experience with LLM APIs (OpenAI/Anthropic/Bedrock) | Evaluated GPT-4o/Claude Sonnet/Gemini at Vanguard; agentic LLM systems at Progress | ✅ Strong |
| RAG systems, vector databases, embeddings | RAG over healthcare corpora w/ cross-encoder re-ranking; FAISS/Pinecone/Weaviate | ✅ Strong |
| Latency, inference-cost, hallucination guardrails | p95 1.5s→800ms; prompt compression + semantic caching; 42% unsafe-output reduction; 40% hallucination cut | ✅ Strong |
| Model evaluation, benchmarking, observability | RAGAS + BERTScore + custom-metric evaluation framework at Progress | ✅ Strong |
| Cloud-native architecture (AWS preferred) | AWS EC2/S3/Lambda/Bedrock/SageMaker | ✅ Strong |
| Experience in regulated / security-conscious envs | HIPAA, SOC 2, PCI DSS; privacy-preserving clinical ML pipelines; Vanguard (banking) | ✅ Strong |
| Product-minded, executive-comm comfortable | Partnered product/platform/data-eng teams at Vanguard across 20+ stakeholders | ✅ |

**Gaps + mitigación:**
1. **YOE: 4 vs 5+ requested.** Mitigation: density of recent production AI work (agentic systems, RAG at scale, eval frameworks) substitutes for one extra year. Lead with the *measurable* outcomes.
2. **Healthcare-comm domain (clinical messaging/scheduling).** Healthcare-AI adjacency strong (clinical readmission research, healthcare RAG at Progress), but specific clinical-comm workflow exposure is light. Mitigation: cite Progress's healthcare corpus work plus clinical privacy research; frame as transferable.

## C) Nivel y Estrategia

- **JD level:** Mid-IC SWE with strong AI/cloud chops; not Senior in title but 5+ yrs typically implies Mid-to-Sr range.
- **Candidate natural level:** Mid Applied AI / LLM Engineer.
- **Sell-senior-without-lying:** Lead with the Vanguard scale (100k+ req/day, 25+ agents, 12 APIs) and the Progress agentic-system depth (42% token reduction, 60% fewer failed runs, full eval framework) — both prove production-grade reliability + regulated-domain experience.
- **If downleveled:** Acceptable if comp is at top of band and review at 6 months is clear.

## D) Comp y Demanda

| Métrica | Dato | Fuente |
|---------|------|--------|
| JD stated range | $130,000 – $170,000 USD | JD |
| Mid-IC AI Engineer (US Remote) median 2026 | $150-180k base | Levels.fyi / Glassdoor benchmarks |
| Healthcare AI demand | Sustained strong — HIPAA-safe LLM features are an active build area | Market (qualitative) |
| PerfectServe size / funding | $100M+ revenue, 400+ employees, established player | Company filings / LinkedIn |

JD comp aligns with mid-IC market; healthcare-comm SaaS is a defensive vertical (revenue scale, regulatory moat).

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI Engineer… banking/regulated" | "Applied AI Engineer with 4+ yrs production LLM/RAG in regulated healthcare + banking; ships LLM API integrations, vector search, and eval/observability frameworks" | Mirror JD's exact stack + regulated framing |
| 2 | Skills | Vector search mid-block | Lead with LLM APIs (OpenAI/Anthropic/Bedrock), RAG, vector DBs, evals, AWS | JD lists these in exact order |
| 3 | Progress experience | "agentic LLM systems on conductor-subagent" | Surface "LLM API integration + RAG + eval framework" first, agentic detail second | Bring the JD-exact phrases forward |
| 4 | Vanguard experience | "12 APIs/microservices, p95 800ms" | Lead with "production LLM integration", then API count/latency | Latency + cost language is JD priority |
| 5 | Compliance line | "HIPAA, SOC 2, PCI DSS" | Promote to top competencies; pair with "PHI handling, audit logging" | Healthcare-comm = PHI-first design |

**LinkedIn:** add "RAG", "LLM APIs", "AWS Bedrock", "Healthcare AI" to headline keywords; pin agentic + RAG work.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | LLM API integration (OpenAI/Anthropic) | Vanguard multi-model eval | Internal teams needed best LLM choice | Compare GPT-4o vs Claude vs Gemini on internal tasks | Built eval harness, ran A/B, tracked task success | 27% lift in task success; informed model-selection policy | Routing per task type beats one-size-fits-all |
| 2 | RAG + vector DB + embeddings | Healthcare RAG at Progress | Domain-specific queries hallucinated | Build retrieval w/ cross-encoder re-ranking | Dense retrieval + re-ranking, chunking strategy iterations | Hallucination -40%, precision 92% on regulated docs | Re-ranking buys more accuracy than prompt-tuning |
| 3 | Hallucination guardrails + observability | Eval + monitoring framework | No way to catch regressions pre-deploy | Stand up RAGAS + BERTScore + domain metrics + dashboards | Daily eval runs, regression alerts, latency dashboards | Caught regressions before release; faster confident deploys | Observability before scale, not after |
| 4 | Latency + inference cost optimization | Prompt compression + semantic caching | Per-query cost was unsustainable | Compress prompts, cache by semantic similarity, route by model | Sustained SLA + per-query overhead down materially | Caching + routing is 80% of cost wins |
| 5 | Regulated / PHI handling | Privacy-preserving clinical ML | Patient data needed analysis without PII exposure | K-anonymity + L-diversity + Laplace DP | Re-identification 3.38%→0.32%; 99% baseline AUC preserved | Quantified the privacy-utility tradeoff | Privacy is a tunable knob, not binary |
| 6 | Cloud-native AWS | Vanguard + Progress AWS stack | Production LLM workloads on AWS | EC2/S3/Lambda/Bedrock/SageMaker; containerized via Docker+K8s | 99.9% uptime at enterprise scale | AWS-native primitives > custom infra for LLMs |

- **Case study:** Healthcare RAG pipeline at Progress — closest JD analog (regulated + LLM + retrieval + eval).
- **Red-flag Qs:** "Only 4 yrs vs 5+?" → density argument with measurable outcomes. "Clinical-comm specifics?" → healthcare AI adjacency + transferable PHI handling.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Greenhouse posting, Apply active, no `?error=true` redirect | Positive |
| Description quality | Names exact stack (OpenAI/Anthropic/Bedrock/RAG/AWS); clear 6-12mo scope (build LLM features + standards) | Positive |
| Company hiring signals | PerfectServe — established healthcare-comm SaaS, $100M+ revenue, 400+ employees | Positive |
| Reposting | Not previously seen for this URL in scan-history | Neutral |
| Role market context | Build-out of LLM features in regulated SaaS is a common, well-funded 2026 motion | Positive |

**Context Notes:** Standard mid-IC SWE-AI build role at an established company. No ghost-job signals.

## Keywords extraídas

LLM APIs, OpenAI, Anthropic, AWS Bedrock, RAG, vector database, embeddings, semantic search, hallucination guardrails, model evaluation, observability, latency optimization, inference cost, PHI, HIPAA, healthcare communications, Python, FastAPI, AWS, cloud-native
