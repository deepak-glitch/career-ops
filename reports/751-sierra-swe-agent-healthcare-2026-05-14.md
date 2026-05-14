**Fecha:** 2026-05-14
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/Sierra/52375d9d-ae30-40b7-811e-b269a8f23fd3
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — In-person
**Region:** US
**PDF:** output/2026-05-14/cv-deepak-mallampati-sierra-swe-agent-healthcare-2026-05-14.pdf

---

## Block A — Role Summary

| Field | Detail |
|-------|--------|
| Arquetipo | AI Solutions / FDE + Applied AI / LLM Engineer |
| Domain | Healthcare AI — AI agents for patient/member interactions |
| Function | Build + Deploy + Iterate (Agent Development Life Cycle) |
| Seniority | Mid-level (IC, no title modifier shown) |
| Remote | On-site — San Francisco, CA |
| Team size | Not specified; Sierra agent engineer teams are small scoped units |
| TL;DR | Build highly reliable, HIPAA-compliant AI agents that handle coverage, scheduling, billing, and provider navigation for health plans and provider networks — from pilot to production. |

Sierra is the AI agent platform founded by Bret Taylor (former Salesforce CEO, OpenAI Board Chair) and Clay Bavor (former Google VP). Their healthcare vertical already reaches >50% of U.S. families through partnerships with major health plans and provider networks.

---

## Block B — CV Match

| JD Requirement | Deepak Match | Evidence in CV |
|---------------|--------------|----------------|
| RAG pipelines | ✅ Strong | Healthcare RAG system — ~35% retrieval precision gain, >30% hallucination reduction |
| Eval frameworks | ✅ Strong | Evaluation pipelines, guardrails, 90%+ retrieval-grounded alignment; audit trails |
| Agent tooling & orchestration | ✅ Strong | Agentic LLM workflows — multi-step eligibility/care nav; structured reasoning & tool discipline |
| Prompt engineering | ✅ Strong | Grounding rules, structured outputs, prompt discipline across healthcare use cases |
| HIPAA-conscious delivery | ✅ Strong | HIPAA-conscious data governance at Progress Solutions; de-identification; data lineage |
| Customer-facing technical projects | ✅ Moderate | Progress Solutions: shipped systems used by clinical teams; Suvidha: Flask API for non-technical users |
| React / TypeScript | ✅ Moderate | Manga Lens (Chrome extension, TypeScript/React); Dream Decoder (React/TypeScript/Vite) |
| Go | ❌ Gap | Not in CV; Go is listed as preferred not required |
| Healthcare domain familiarity | ✅ Strong | All primary ML/LLM work at Progress Solutions is healthcare-focused |
| Agent Development Life Cycle ownership | ✅ Moderate | Owns end-to-end ML pipelines; no explicit "ADLC" terminology but practice matches |

**Gaps and Mitigation:**
- **Go (nice-to-have):** Not a hard gate. Mitigate by leading with TypeScript strength; note "comfortable learning Go in production context."
- **Direct patient/consumer-facing agent deployment:** Progress Solutions is B2B healthcare tech; frame the clinical knowledge retrieval and care navigation agents as patient-adjacent. The agentic healthcare claims project directly maps to patient-facing interactions.

---

## Block C — Level and Strategy

**Detected Level:** Mid IC (no Senior/Staff tag; "complete ownership from pilot through deployment" suggests IC scope with autonomy).

**Deepak's natural level for this archetype:** Junior-Mid — he has 2.5 years of directly applicable healthcare AI engineering work.

**Sell senior without lying:**
> "I've owned healthcare RAG and agentic systems end-to-end at Progress Solutions — from data ingestion to FastAPI deployment to post-deploy monitoring. I understand HIPAA data handling, evaluation audit trails, and what 'reliable' means in a clinical context. Sierra's ADLC ownership model is exactly how I already work."

**If downleveled:** Acceptable — Sierra's IC structure at lower level still provides mission-aligned work; negotiate 6-month promotion review tied to first successful agent deployment milestone.

---

## Block D — Comp and Demand

| Data Point | Value | Source |
|-----------|-------|--------|
| Sierra SWE comp (general) | $150K–$230K base + equity | Levels.fyi / Glassdoor estimates for SF AI startups |
| Healthcare AI engineer demand | Very high — 50%+ of US families reached | Sierra blog, 2026 |
| Equity | Significant (Sequoia/Benchmark-backed, late Series B) | CB Insights |
| Benefits | Comprehensive — SF-based AI startup standard | Careers page |

Sierra has not publicly disclosed salary ranges for this role. Expect $170K-$220K base for mid-level SF in-person given their funding and competition for AI talent.

---

## Block E — Personalization Plan

| # | Section | Current State | Change Proposed | Why |
|---|---------|--------------|-----------------|-----|
| 1 | Summary | "healthcare-focused RAG systems, agentic LLM workflows" | Add "HIPAA-compliant AI agents for patient interactions" and mirror "Agent Development Life Cycle" phrasing | Direct terminology match to Sierra's ADLC framework |
| 2 | Experience bullets | Progress Solutions RAG bullet leads with technical details | Lead with "Built AI agents handling eligibility checks, care workflow navigation, and documentation queries" | Matches Sierra's stated patient interaction use cases |
| 3 | Skills | LLM & GenAI section is generic | Highlight "agentic workflows, eval frameworks, guardrails, RAG pipelines" — exact Sierra JD keywords | ATS keyword alignment |
| 4 | Projects | Agentic Healthcare Claims project buried | Surface to top of Projects — multi-agent pipeline with schema validation, CPT/ICD RAG validation, fraud risk scoring | Most direct proof of healthcare agent ownership |
| 5 | Work Auth | Listed plainly | Add "US-based, F-1 OPT, open to sponsorship" and confirm SF relocation readiness | Sierra is in-person SF; confirm commitment upfront |

---

## Block F — Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---------------|-------------|---|---|---|---|------------|
| 1 | Build reliable agents for sensitive healthcare interactions | Healthcare RAG + agentic eligibility/care nav at Progress Solutions | Healthcare SaaS needing accurate, grounded clinical query responses | Build RAG system with agentic multi-step workflows | Semantic chunking, transformer embeddings, structured reasoning + grounding rules | ~35% retrieval precision gain; >30% hallucination reduction; 90%+ grounded responses | Learned that eval rigor is the only way to trust a healthcare agent — added audit trails |
| 2 | Evaluation frameworks | Evaluation pipeline with guardrails and audit trails | Clinical knowledge retrieval needed trust metrics | Design and implement full eval pipeline | Defined eval dimensions, implemented guardrails, wrote audit-ready traces | Stakeholder confidence in system limitations increased significantly | Realized evals need to be designed before the model, not after |
| 3 | Ownership from pilot to production | End-to-end FastAPI/Docker deployment of ML inference services | Production-grade ML needed containerization and monitoring | Package and deploy ML as API, simulate load | FastAPI/Flask service, Docker, structured logging, load simulation | ~30% fewer post-deployment defects | Deployment discipline at pilot time prevents production fires |
| 4 | Customer/stakeholder-facing work | Suvidha Foundation Flask API for non-technical staff | Non-technical users needed access to AI summarization | Build simple, reliable interface | Flask-based API with lightweight web UI | Staff could use video summarization without training | The best interfaces are invisible — users shouldn't notice the AI |
| 5 | Adapt agents to high-stakes domains | HIPAA-conscious data governance at Progress Solutions | Healthcare domain requires de-identification and lineage | Implement data governance for HIPAA | De-identification, data lineage docs, evaluation audit trails, stakeholder limitation docs | Zero compliance incidents in production | In regulated domains, documentation IS part of the system |
| 6 | React/TypeScript for agent interfaces | Manga Lens Chrome Extension | Need AI-powered manga translation across 29 sites | Build full-stack extension with multi-AI-provider backend | TypeScript/React, multi-provider integration, 7-day cache, host permissions | Shipped to Chrome Web Store; 4 providers integrated | Multi-provider fallback is the key to reliability in consumer AI |

**Case study to present:** Healthcare RAG + Agentic Claims Processing — shows end-to-end healthcare AI ownership, RAG grounding, multi-agent orchestration, eval discipline, and HIPAA awareness.

---

## Block G — Posting Legitimacy

**Assessment: High Confidence**

| Signal | Observation |
|--------|------------|
| Posting freshness | Posted ~February 20, 2026 (~84 days); healthcare vertical is Sierra's fastest-growing segment |
| URL status | Active on Ashby board; confirmed via WebSearch and Thrive Capital job board |
| Tech specificity | Highly specific (ADLC, eval frameworks, RAG pipelines, healthcare compliance) — ghost postings rarely list these |
| Requirements realism | Mid-level IC scope with full ownership — consistent with Sierra's "agent engineer" hiring pattern |
| Company health | Well-funded (Sequoia/Benchmark Series B), actively expanding healthcare vertical |
| Note | Original URL (eb3ee157) returned null via API; active posting is 52375d9d — may be a re-post or URL migration |

---

## Block H — Draft Pitch

**For initial application / cover note:**
> "I've spent the past year building healthcare RAG systems and agentic LLM workflows at Progress Solutions — eligibility checks, care workflow navigation, documentation clarification — the exact use cases Sierra's health plan partners need automated. I understand what 'reliable' means in a HIPAA-conscious environment: audit trails, eval pipelines, grounding rules, and stakeholder-facing limitation documentation. Sierra's ADLC ownership model is how I already approach my work. I'd love to bring this directly to the healthcare vertical."

**For 'Why Sierra?' screening question:**
> "Sierra is the rare company where the mission and the technical problem are both compelling. Healthcare agents that reach 50%+ of US families, handling high-stakes conversations about coverage and care — that's where precision in RAG and agentic reasoning matters most. I've built the underlying systems. I want to deploy them at scale."
