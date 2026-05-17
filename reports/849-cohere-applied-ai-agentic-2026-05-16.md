# Evaluación: Cohere — Applied AI Engineer – Agentic Workflows

**Fecha:** 2026-05-16
**Arquetipo:** Applied AI / Agentic Workflows
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/cohere/1fa01a03-9253-4f62-8f10-0fe368b38cb9
**Legitimacy:** High Confidence
**Location:** San Francisco (also New York, Toronto, Montreal, London)
**Region:** US
**PDF:** output/2026-05-16/cv-deepak-mallampati-cohere-applied-ai-agentic-2026-05-16.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | Applied AI / Agentic Workflows (customer-facing enterprise delivery) |
| Domain | Frontier LLM provider — Cohere's enterprise agent stack |
| Function | Build + deliver agents end-to-end with customers; mentor distributed teams |
| Seniority | Mid-to-senior IC (mentor language present; no explicit YoE band) |
| Remote | Hybrid — SF primary, NY/Toronto/Montreal/London secondary |
| Team | Modeling, Applied-ML |
| Comp | Not disclosed (Levels.fyi: $190-260K base + equity for Applied AI IC) |
| TL;DR | Customer-facing agentic engineer building production LLM agents on Cohere's frontier models for enterprise customers. |

## B) Match con CV

| JD Requirement | CV Evidence | Match |
|----------------|-------------|-------|
| Production-grade Python/TypeScript | Python (FastAPI/Flask, Docker, T-SQL) + TypeScript skills | Strong on Python, partial on TS |
| Agentic architectures (ReAct, Plan-and-Execute) | Agentic LLM workflows at Progress: multi-step healthcare queries, structured reasoning, tool discipline | Strong 1:1 |
| LLM Stack (GPT, Claude, RAG, vector DB, orchestration) | RAG with transformer embeddings, semantic chunking, ~35% precision lift; LangChain/LlamaIndex listed | Strong on RAG/embeddings; LangGraph/CrewAI not named in CV |
| Rigorous evaluation frameworks | Eval pipelines listed; >90% grounded-response alignment; ~25% agent stability gain | Strong 1:1 |
| Stakeholder mastery / enterprise customer translation | Suvidha non-tech-user delivery + Progress stakeholder-facing system-limitation docs | Moderate |
| Mentoring distributed teams | No prior IC mentoring at scale | **Gap** |
| Lead architectural standards across org | Founder/lead level, not yet | **Gap** |
| Travel up to 25% | Open to travel | Strong |

### Gaps + mitigation
1. **"Substantial" production experience + mentoring** — Cohere positions this role above 0-2yr band. Mitigation: lead with 2.5y at Progress (production RAG + agentic + FastAPI/Docker — full lifecycle ownership) as evidence of senior-IC depth at the IC level, not the team-lead level. Realistic expectation: stretch, may be down-leveled.
2. **LangGraph / CrewAI not in CV** — soft gap. Custom state machines for agentic workflows ARE in CV (Healthcare Claims Processing 5-stage agent). Translate the same patterns onto LangGraph in cover letter.
3. **Mentoring across distributed teams** — hard gap for an IC with 2.5y. Mitigation: position as "ready to grow into," not "already doing."

## C) Nivel y Estrategia

**Detected level (JD):** Mid-to-senior IC ("Substantial experience"; "Mentor engineers across distributed teams"; "Drive clarity in ambiguous situations").
**Candidate natural level:** Mid-to-junior (2.5y production AI + 10mo enterprise ERP). Stretch.

**Sell senior without lying:**
- "2.5 years of production AI ownership (RAG + agentic + ML serving + eval) — end-to-end, not subset."
- "Production discipline at the IC level: FastAPI/Docker REST + structured logging + ~30% post-deploy defect reduction."
- "Customer-readable system-limitation docs and audit trails — same patterns enterprise customers need."

**If down-leveled:** Acceptable if comp lands in mid-IC band ($180K+); push for 6-month promotion checkpoint with clear criteria for mentor expansion.

## D) Comp y Demanda

| Source | Range | Note |
|--------|-------|------|
| Cohere JD | Not disclosed | Comp tier null in Ashby payload |
| Levels.fyi Applied AI Engineer (mid IC, SF) | $190K-$260K base + equity | Frontier-lab market band |
| Glassdoor Cohere Applied AI Engineer | $170K-$230K range reported | Real but range varies |
| Demand for agentic IC | Strong, growing 2026 | Customer-facing agentic IC is one of the hottest segments |

Cohere is a well-funded frontier-LLM provider — comp expected to track Anthropic/Mistral/OpenAI tiers (slightly below Anthropic).

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | Generic AI engineer | "Applied AI engineer building production agentic + RAG systems for enterprise customers; full lifecycle from design to eval" | Match Cohere "design, build, deploy" framing |
| 2 | Skills | Long flat list | Surface: agentic workflows, RAG, vector DBs, LangChain/LlamaIndex, eval frameworks, FastAPI, Docker | JD top stack |
| 3 | Progress bullets | Generic Applied AI | Lead with "agentic LLM workflows + structured reasoning + tool discipline + ~25% stability gain" | JD verbatim hooks |
| 4 | Healthcare Claims project | Standard description | Reframe: "5-stage agent flow (Intake/Validation/Consistency/Duplicate/Fraud) with schema-validated JSON contracts at hand-offs — same pattern as enterprise agentic workflows" | Direct project-to-JD bridge |
| 5 | Location line | Kent, OH | "US-based F-1 OPT, open to sponsorship; willing to relocate to SF/NY for hybrid" | Cohere is hybrid SF primary |

## F) Plan de Entrevistas (STAR+R)

| # | JD Requirement | Story | STAR+R |
|---|----------------|-------|--------|
| 1 | Agentic workflows | Healthcare Claims 5-stage agent | S: claims processing prone to errors. T: build reliable multi-step agent. A: schema-validated JSON contracts at each hand-off, RAG-grounded code lookups, explainable risk scores. R: production-ready audit trail. Reflection: contracts > prompts for reliability. |
| 2 | RAG + vector search | Clinical knowledge retrieval | S: ~30% irrelevant retrieval. T: improve precision. A: recursive semantic chunking + transformer embeddings + retrieval-aligned eval set. R: ~35% precision lift, >90% grounded alignment. Reflection: eval set IS the product. |
| 3 | Rigorous evaluation | Agent stability work | S: agent responses drifting across runs. T: stabilize. A: built eval frameworks with structured reasoning checks. R: ~25% stability gain. Reflection: regression catches > one-shot accuracy. |
| 4 | Production engineering | FastAPI/Docker inference | S: ML models needed productionizing. T: ship reliable services. A: FastAPI + Docker + structured logging + load sim. R: ~30% post-deploy defect reduction. Reflection: structured logs are the first dashboard. |
| 5 | Stakeholder mastery | Suvidha + Progress | S: non-tech users needed clear AI behavior. T: ship usable systems with audit-ready behavior. A: system-limitation docs + Flask API + audit trails. R: ~60-70% review time cut, ~98% data reliability. Reflection: customer empathy IS a deliverable. |
| 6 | Debug real-world agent behavior | Progress agent stability iteration | S: agent edge cases in clinical queries. T: improve. A: structured reasoning observability + guardrail tuning + prompt refinement. R: stability ↑, hallucination ↓>30%. Reflection: instrument first, then prompt. |

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active in Ashby API as of 2026-05-16 | Positive |
| Apply button | Ashby payload returns full data | Positive |
| Tech specificity | Names ReAct, Plan-and-Execute, LangGraph, CrewAI, Pinecone, Weaviate, GPT/Claude/Gemini | Positive |
| Comp transparency | Comp tier null — no public range | Neutral |
| Requirements realism | Mid-senior IC band; mentoring + travel reasonable for Cohere stage | Positive |
| Company hiring signals | Cohere recently raised; agentic team is well-known | Positive |
| Reposting | First Cohere "Agentic Workflows" variant in scan history | Neutral |

**Context Notes:** Cohere is a real frontier-LLM provider, this team (Modeling + Applied-ML) is publicly known. Multi-location flexibility (SF/NY/Toronto/Montreal/London) suggests active hiring, not a placeholder.

## H) Draft Application Answers (score < 4.5 — informational only)

**Why Cohere?**
> Cohere occupies a unique seat — frontier model provider AND enterprise-grade deployment partner. The Applied-ML/Modeling combination on this team means agentic workflows aren't a side project, they're the product. I want to spend the next 3 years building agents that ship into enterprise workflows, and I want to learn from people who set the standards for how that's done.

**Most relevant project:**
> Agentic Healthcare Claims Processing pipeline. Five stages (Intake → Validation → Consistency → Duplicate Detection → Fraud Risk) with schema-validated JSON contracts at each hand-off, RAG-grounded ICD/CPT lookups against vector-indexed policy docs, and explainable risk scores with audit-ready reasoning traces. Same patterns apply to enterprise compliance/legal/operational agentic workflows.

**Authorization:**
> US-based (Kent, OH), F-1 OPT, open to sponsorship. Willing to relocate to SF/NY for hybrid; available immediately.

---

## Keywords extraídas

Applied AI Engineer, Cohere, Agentic Workflows, LLM, RAG, vector database, Pinecone, Weaviate, LangGraph, CrewAI, ReAct, Plan-and-Execute, evaluation frameworks, GPT, Claude, Gemini, frontier models, Python, TypeScript, enterprise, agents, tools, production, multi-step, customer-facing, stakeholder
