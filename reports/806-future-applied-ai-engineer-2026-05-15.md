# Evaluación: Future — Applied AI Engineer

**Fecha:** 2026-05-15
**Arquetipo:** Applied AI / LLM Engineer
**Score:** 4.2/5
**URL:** https://job-boards.greenhouse.io/future/jobs/4683133005
**Legitimacy:** High Confidence
**Location:** Remote — Continental US
**Region:** US
**PDF:** output/2026-05-15/cv-deepak-mallampati-future-applied-ai-engineer-2026-05-15.pdf

---

## A) Resumen del Rol

| Field | Detail |
|-------|--------|
| Arquetipo | Applied AI / LLM Engineer |
| Domain | Consumer/coaching AI — agentic LLM features for end users |
| Function | Build production AI agents end-to-end (prototype → deploy → monitor) |
| Seniority | Mid IC (no specific YOE listed; comp band $215K–$250K signals senior+ band) |
| Remote | Full remote (continental US), no travel |
| Team size | Not specified, AI-focused product team |
| TL;DR | Applied AI Engineer role at Future (health/coaching), building agentic systems with LangGraph + AWS Bedrock. Tech stack maps almost line-by-line to Deepak's RAG + agentic workflows experience at Progress Solutions. US-remote + clear visa-eligible posting. Comp band is high — they expect senior IC depth but the JD does not gate on years. Score 4.2/5. |

---

## B) Match con CV

| JD Requirement | Match | Evidence in CV |
|---------------|-------|----------------|
| Production LLM experience (prompt eng, tool calling, structured output, eval) | ✅ Strong | Agentic LLM workflows at Progress; structured outputs; eval pipelines; >90% grounded alignment |
| LangChain/LangGraph or equivalent agent framework | ✅ Strong | LangChain + LlamaIndex listed; agentic claims pipeline with schema-validated JSON contracts |
| Python production experience | ✅ Strong | Python primary; FastAPI/Flask services; Pandas/NumPy pipelines |
| Async Python, HTTP APIs, streaming | ✅ Moderate | FastAPI proficient (supports async natively); HTTP APIs explicit; SSE/streaming not explicit but adjacent |
| Schema design and data validation | ✅ Strong | Schema-validated JSON contracts (Healthcare Claims Processing project); Pydantic implicit via FastAPI |
| Cross-layer debugging | ✅ Strong | End-to-end ownership: data → prompts → models → eval → API |
| AWS (Bedrock, ECR, S3, Cognito) | ⚠ Gap | Docker + cloud-ready deployment in CV; no explicit AWS cert. Mitigation: cite Docker/CI-CD experience as transferable; Bedrock is just an LLM endpoint similar to OpenAI |
| LLM evaluation frameworks | ✅ Strong | "Evaluation pipelines, guardrails, grounding"; Langfuse/OpenTelemetry not in CV but pattern is known |
| Terraform/CDK | ⚠ Gap | Not in CV; mitigate by emphasizing Docker + Jenkins CI/CD transferability |

**Gaps & mitigation:**
1. AWS Bedrock-specific experience — mitigation: "I've shipped LLM workloads via OpenAI/Anthropic APIs; Bedrock is the same pattern with IAM. Happy to ramp on the cloud specifics."
2. Observability (Langfuse, OpenTelemetry, Datadog) — mitigation: cite Grafana + structured logging from CV; Langfuse is a thin wrapper over LLM call tracing.
3. Infrastructure-as-code (Terraform/CDK) — mitigate by emphasizing Jenkins CI/CD pipelines + Docker as adjacent.

## C) Nivel y Estrategia

- **Detected level**: Mid-Senior IC (comp $215–250K implies they expect 4-6 YOE in pure LLM work)
- **Deepak's natural level**: Mid-Junior IC (2.5 yr applied AI + Master's). Likely targeting the lower band.
- **Sell senior without lying**: "I've owned the full RAG + agentic stack end-to-end at Progress Solutions — retrieval precision +35%, hallucination -30%, served behind FastAPI in HIPAA-conscious environments. That ownership pattern is what I'd bring here."
- **If downleveled**: accept lower band if they review at 6 months with clear promotion criteria. Equity is the upside.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD direct | $215K–$250K + equity | Continental US remote |
| Levels.fyi Applied AI Engineer P3-P4 (US-remote startup) | $180K–$260K | Common band for Series B-C consumer AI |
| Blind Applied AI demand 2026 | High | Agentic + RAG + eval skills in heavy demand |

Future is a consumer health coaching company (Y Combinator pedigree). The high comp + tech-stack specificity suggests genuine technical depth in the role.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "Applied AI engineer (2.5+ years)..." | Lead with "Production agent + RAG systems in regulated healthcare with measurable retrieval/safety gains" | Match JD's tone (production, evals, safety) |
| 2 | Skills | LangChain + LlamaIndex listed | Surface LangGraph explicitly; add Pydantic, structured outputs | JD names LangGraph specifically |
| 3 | Progress Solutions bullets | Agentic LLM workflows generic | Specify tool-calling discipline, structured-output schemas, eval audit trails | Mirrors Future's evaluation framework requirement |
| 4 | Project: Healthcare Claims | Schema-validated JSON contracts | Add: "Multi-agent JSON-schema contracts prevent cascading hallucinations" | Direct match to Future's "structured outputs" hook |
| 5 | Skills: Observability | Grafana, structured logging | Add: "OpenTelemetry pattern familiarity, LLM call tracing" | Bridges to their Langfuse/Datadog stack |

## F) Plan de Entrevistas (STAR+R)

| # | JD Req | Story | S | T | A | R | Reflection |
|---|--------|-------|---|---|---|---|------------|
| 1 | Production LLM eval | Progress RAG eval | Hallucination risk in clinical RAG | Build eval harness | Recursive semantic chunking + grounded eval | >30% hallucination reduction, >90% grounded alignment | Evals beat prompt tweaks — invest there first |
| 2 | Structured outputs | Healthcare Claims project | Cascading hallucinations across agents | Enforce JSON-schema contracts | Pydantic-style validation gates | Pipeline failures became debuggable | Schema-as-contract is the agentic equivalent of types |
| 3 | Tool calling | Agentic claims | Eligibility + duplicate detection | Multi-agent with tool discipline | RAG-grounded CPT/ICD validation | Explainable risk scores with audit trails | Tools must return structured data, not free text |
| 4 | Latency/cost optimization | FastAPI inference | Defect rate post-deploy | Load simulate + cache | Prompt caching + lazy retrieval | ~30% fewer defects | Latency is dominated by retrieval, not LLM |
| 5 | Cross-functional comms | Suvidha video summarization | Non-technical staff needed access | Flask API + minimal UI | 60-70% review time saved | Adoption by non-eng users | Build for the human in the loop |
| 6 | Schema design | Patient Records app | Relational integrity + reporting | Normalized schema + foreign keys | LEFT JOIN + GROUP_CONCAT single query | Single-query patient view | DB design pays back at the API layer |

Case study: present Healthcare Claims Processing project as a microcosm of the Future role.

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Active Greenhouse listing, full application form, no closure notice | Positive |
| Description quality | Names specific tools (LangGraph, Pydantic, Langfuse, Bedrock), salary band published, scope clear | Positive |
| Company hiring signals | Future is a consumer coaching app; no public layoffs in 2025-2026 | Positive |
| Reposting | Not in scan-history multiple times | Positive |
| Market context | Applied AI Engineer at Series B-C consumer AI typically fills in 4-8 weeks | Neutral |

**Assessment:** **High Confidence**. Salary band published, JD is technical and specific, fully remote US.

## H) Draft Application Answers

(Score 4.2 < 4.5 threshold for full H block — skipped per oferta.md)

---

## Keywords extraídas
Applied AI Engineer, LangChain, LangGraph, agentic, tool calling, structured outputs, Pydantic, evals, prompt engineering, AWS Bedrock, Python, async, RAG, observability, Langfuse, schema design, production LLM, remote US
