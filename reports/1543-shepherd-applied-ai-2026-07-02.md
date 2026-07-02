# Evaluación: Shepherd — Software Engineer, Applied AI

**Fecha:** 2026-07-02
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / MLOps Engineer
**Score:** 3.7/5
**URL:** https://jobs.ashbyhq.com/shepherd/26959124-aab2-446e-aa4d-7265c83e0be5
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — remote policy unstated; likely hybrid/in-office (SF HQ)
**Region:** US
**PDF:** output/2026-07-02/cv-deepak-mallampati-shepherd-applied-ai-2026-07-02.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer + AI Platform / MLOps Engineer |
| Domain | AI-native commercial insurance — underwriting & pricing engine; risk evaluation, policy pricing, business ops |
| Function | Design & ship production AI systems at the intersection of product engineering, AI infrastructure, and real-world insurance workflows; pursue "fully autonomous underwriting" (first fully agentic submission in the industry: email in, price out, no human until last mile) |
| Seniority | "Software Engineer" (not Senior) — but comp band ($170–220K) signals a solid/senior-leaning IC bar |
| Remote | Unstated in brief; SF HQ → assume hybrid/in-office. F-1 OPT: relocation feasible, not terminal |
| Company stage | Series B ($42M, Mar 2026; total >$60M) — Intact Private Capital (lead + carrier partner), Spark, Costanoa, Y Combinator, Susa |
| TL;DR | Production Applied AI role building agentic underwriting/pricing systems in a regulated financial-services domain. Maps directly onto Deepak's agentic + RAG + MLOps + regulated-domain strengths. Main drags: SF location (relocation), F-1 sponsorship risk at a Series-B startup, and a senior-leaning comp band against a mid IC profile. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence (`cv.md`) | Match |
|----------------|-------------|-------|
| Ship production AI systems (agentic) | Conductor–subagent agentic LLM framework, 42% token reduction, 25+ AI agents at Vanguard | ✅ Strong |
| "Fully autonomous underwriting" / agentic pipeline (email in → price out) | Decomposition of complex objectives into context-scoped autonomous subagents across multi-step workflows | ✅ Strong (direct analog) |
| AI infrastructure / production serving | 12 APIs & microservices; p95 1.5s→800ms; 100K+ requests/day; Docker/Kubernetes/Terraform | ✅ Strong |
| Risk evaluation / pricing models (ML) | Regression/classification for equipment-failure prediction, anomaly detection, forecasting (Emerson); privacy–utility risk scoring | ⚠️ Partial (predictive ML present; not insurance-pricing specific) |
| Real-world regulated workflows (insurance ≈ regulated financial services) | 4+ yrs GenAI for banking/regulated enterprises; HIPAA/SOC 2/PCI DSS; audit logging; Vanguard financial-services context | ✅ Strong |
| Grounding / reliability for high-stakes decisions | RAG with cross-encoder re-rank, 92% precision, 40% hallucination reduction; RAGAS/BERTScore eval framework | ✅ Strong |
| Integrate real-time external data (Procore/Autodesk/OpenSpace/DroneDeploy) | Integrated production data pipelines & observability tooling; Kafka/Spark/Databricks data engineering | ⚠️ Partial (integration experience yes; these specific construction-tech APIs no) |
| Python / backend / product engineering | Python, FastAPI, React, JavaScript/TypeScript | ✅ Strong |
| Cloud AI stack (Bedrock/SageMaker adjacent) | AWS (Bedrock, SageMaker, Lambda, S3), Azure OpenAI, GCP Vertex | ✅ Strong |
| LLM evaluation & monitoring for production | RAGAS, BERTScore, custom domain metrics; latency/accuracy dashboards; drift detection | ✅ Strong |

**Gaps + mitigation:**
1. **Insurance-domain specificity (⚠️)** — no prior underwriting/pricing work, but banking/financial-services regulated experience (Vanguard, compliance stack) transfers cleanly; insurance is a regulated-financial-services adjacency, not a cold start.
2. **Construction-tech data sources (⚠️)** — Procore/Autodesk/OpenSpace/DroneDeploy are new integrations, but Deepak has production data-pipeline + API integration experience; ramp is small.
3. **Seniority vs. comp band (⚠️)** — title is "Software Engineer" (buildable scope), but $170–220K signals a strong IC bar. Deepak is ~4 yrs, mid IC — competitive on the technical core, slightly under the implied experience ceiling.
4. **Location / F-1 OPT (⚠️→ note, not veto)** — SF HQ, remote policy unstated; Deepak is OH, open to relocation (feasible). F-1 OPT future-sponsorship at a Series-B startup is a real, undisclosed risk — flag early.

Net: **strong technical fit** across the three load-bearing axes (agentic production systems, RAG/reliability, MLOps in a regulated domain). The agentic-underwriting thesis is an almost 1:1 map to the conductor–subagent work. Drags are contextual (location, sponsorship, comp-band seniority), not core-skill gaps.

## C) Nivel y Estrategia

- **JD level:** IC "Software Engineer, Applied AI" with buildable production scope, but a comp band that reads solid/senior-leaning. **Candidate level:** mid IC builder (~4 yrs) with directly relevant agentic + production depth — competitive on the technical core.
- **Sell-strong-without-lying:** Lead with the agentic orchestration work (conductor–subagent, 42% token reduction, 25+ agents) as the direct analog to "fully autonomous underwriting," then MLOps discipline (12 APIs, p95 800ms, 100K+ req/day, Docker/K8s/Terraform) and reliability/eval (92% precision, 40% hallucination reduction, RAGAS/BERTScore). Frame banking/financial-services + compliance (HIPAA/SOC 2/PCI, audit logging) as the regulated-domain bridge to insurance.
- **Recommendation:** Apply. Strong core fit and disclosed comp well above target. Surface the F-1 sponsorship question early (Series-B startups vary widely) and confirm remote/hybrid policy before investing in relocation planning.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (JD-disclosed) | **$170,000–$220,000 USD/yr + equity** | JD (Ashby) |
| vs. Deepak target ($100–130K) | Well above target — strong upside; reflects SF market + IC bar | profile.yml |
| Company | Shepherd — AI-native commercial insurance platform; Series B $42M (Mar 2026), total >$60M | JD / brief |
| Investors | Intact Private Capital (lead + carrier partner), Spark Capital, Costanoa, Y Combinator, Susa | JD / brief |
| Demand | Agentic underwriting/insurtech is an active AI application area; carrier-backed Series B signals real distribution | Market context |

Comp is well above target with equity upside. The consideration is fit/context (location, sponsorship), not money.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Regulated-healthcare RAG framing | Reframe to "production agentic AI systems for regulated financial services" + reliability | Mirror underwriting/pricing + insurance-as-regulated-finance |
| 2 | Bullets | Agentic conductor–subagent | Foreground as the autonomous-workflow / decisioning analog to autonomous underwriting | Direct hook to "email in, price out, no human until last mile" |
| 3 | Bullets | Vanguard 12 APIs / latency | Lead MLOps: production serving, latency, throughput, IaC | JD = AI infrastructure + product engineering |
| 4 | Skills | Compliance (HIPAA/SOC2/PCI) | Keep prominent + frame audit logging for high-stakes decisioning | Insurance = regulated, auditable pricing decisions |
| 5 | Skills | Data engineering (Kafka/Spark) | Surface real-time data integration | JD integrates Procore/Autodesk/OpenSpace/DroneDeploy feeds |
| 6 | Footer | Location line | "US-based, F-1 OPT, open to sponsorship" | Set expectations transparently up front |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Agentic / autonomous decisioning | Conductor–subagent framework | Complex multi-step objectives, high token cost | Decompose into autonomous context-scoped subagents | Built conductor–subagent orchestration, 25+ agents | 42% token reduction while sustaining accuracy | Autonomy comes from scoping, not from one big prompt |
| 2 | Reliability for high-stakes outputs | Healthcare RAG | Hallucination on domain queries | Grounded, validated retrieval | Dense retrieval + cross-encoder re-rank | 92% precision, 40% hallucination reduction | Grounding + eval is the reliability lever for auto-decisions |
| 3 | Production AI infrastructure | Vanguard AI platform | Enterprise-scale AI services under SLA | Reliable, low-latency serving | 12 APIs/microservices, Docker/K8s/Terraform, 100K+ req/day | p95 1.5s→800ms | Deployment discipline is what makes AI shippable |
| 4 | Regulated-domain compliance | Banking/regulated GenAI + compliance stack | Sensitive data, audit requirements | Compliant AI under HIPAA/SOC2/PCI | PII masking, audit logging, zero-trust controls | Compliant deployment, reduced unsafe outputs 42% | Auditable decisioning is a first-class requirement in regulated pricing |
| 5 | LLM evaluation for production | Eval/monitoring framework | Need to catch regressions pre-release | Structured LLM eval + dashboards | RAGAS, BERTScore, custom domain metrics | Surfaced regressions before deploy | You can't ship autonomous decisions without an eval harness |
| 6 | Real-time data integration | Vanguard data pipelines + Kafka/Spark | Integrate production data & observability | Wire AI services to live data | Integrated pipelines across 20+ teams | Scaled adoption, 100K+ req/day | External data feeds are an integration + reliability problem |

**Case study:** Agentic conductor–subagent orchestration (autonomous-underwriting analog) + healthcare RAG reliability — the clearest bridge to "fully agentic submission" with grounded, auditable decisioning.
**Red-flag Qs:** "Have you worked in insurance/underwriting?" → Honest: "Not insurance specifically, but 4+ years in regulated financial services and banking with compliance and audit-logging discipline — insurance is a regulated-finance adjacency I'd ramp on fast." And on sponsorship: state F-1 OPT status and openness to sponsorship early.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | First-party Ashby board posting (jobs.ashbyhq.com/shepherd) | Positive |
| Tech/domain specificity | Highly specific — autonomous underwriting, pricing engine, named real-time data integrations (Procore/Autodesk/OpenSpace/DroneDeploy) | Positive |
| Requirements realism | Coherent Applied AI IC scope at intersection of product, AI infra, insurance workflows | Positive |
| Company | Shepherd — named AI-native commercial insurance platform | Positive |
| Funding | Named Series B ($42M, Mar 2026; total >$60M) + specific investors (Intact, Spark, Costanoa, YC, Susa) | Positive |
| Salary | Disclosed ($170–220K + equity) | Positive |
| Location clarity | SF stated; remote policy unstated (minor) | Neutral |

**Context:** Named company, disclosed comp, named investors + specific Series B, highly specific stack/domain, and a first-party Ashby posting = high-confidence real role.

## H) Draft Application Answers

_(Score 3.7 < 4.5 — full drafts deferred; PDF tailored. Positioning line: "Applied AI engineer with production agentic orchestration (conductor–subagent, 42% token reduction, 25+ agents), grounded RAG reliability (92% precision, 40% hallucination reduction), and MLOps at scale (12 APIs, p95 800ms, 100K+ req/day) in regulated financial services — a direct map to autonomous, auditable underwriting/pricing. Transparent up front: US-based on F-1 OPT, open to sponsorship and relocation to SF.")_

---

## Keywords extraídas

Applied AI, agentic, autonomous underwriting, pricing engine, risk evaluation, LLM, RAG, grounding, reliability, MLOps, production AI systems, FastAPI, Python, React, Docker, Kubernetes, Terraform, AWS Bedrock, SageMaker, RAGAS, BERTScore, real-time data integration, regulated financial services, compliance, audit logging, insurance
