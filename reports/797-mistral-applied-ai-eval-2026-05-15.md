**Fecha:** 2026-05-15
**Arquetipo:** Applied AI / LLM Engineer
**Score:** 4.1/5
**URL:** https://jobs.lever.co/mistral/e0db3860-0a80-47a8-958a-f8e62f3bb59c
**Legitimacy:** High Confidence
**Location:** Paris, France — On-site (CDI)
**Region:** Intl
**PDF:** output-intl/2026-05-15/cv-deepak-mallampati-mistral-applied-ai-eval-2026-05-15.pdf

---

## Block A — Role Summary

| Field | Detail |
|-------|--------|
| Arquetipo | Applied AI / LLM Engineer (Evaluation focus — Generative AI / RAG Engineer crossover) |
| Domain | LLM evaluation infrastructure — frameworks, benchmarks, production-readiness scoring |
| Function | Design and build evaluation systems; collaborate with research + product + enterprise customers |
| Seniority | Mid-Senior IC (3+ years in ML evaluation or LLM benchmarking required) |
| Remote | On-site, Paris (CDI — permanent contract) |
| Team size | First Evaluation Engineer hire — greenfield role |
| TL;DR | Mistral's first dedicated Evaluation Engineer — design the methodology and build the infrastructure that defines what "production-ready" means for their models. Extremely strong archetype match (Deepak's RAG eval and grounding work is exactly this domain). F-1 OPT soft blocker. |

This is a greenfield role: Mistral has no dedicated Evaluation Engineer and is hiring the first one. The successful candidate will design evaluation methodologies from scratch, build scalable eval infrastructure, and create custom eval suites for enterprise customers. The role crosses research, engineering, and customer solutions.

---

## Block B — CV Match

| JD Requirement | Deepak Match | Evidence in CV |
|---------------|--------------|----------------|
| 3+ years ML evaluation or LLM/agentic system benchmarking | ✅ Moderate | 2.5 years total; eval pipelines, guardrails, audit trails at Progress Solutions — slightly below 3yr requirement |
| Design evaluation frameworks for LLM capabilities | ✅ Strong | Built eval pipeline with grounding rules, guardrails, structured metrics at Progress Solutions |
| Scalable eval infrastructure (rapid, reproducible) | ✅ Strong | Retrieval-grounded response alignment >90%; evaluation audit trails; systematic metric tracking |
| Domain-specific evaluation (healthcare, cybersec, finance) | ✅ Strong | Healthcare domain eval with high-risk patient category precision/recall tracking (15–20% recall gain) |
| Python coding skills | ✅ Strong | Python primary language across all roles |
| AI/ML product implementation with APIs + backend | ✅ Strong | FastAPI/Flask production inference services; Docker packaging; CI/CD (Jenkins) |
| LLM concepts (transformers, embeddings, fine-tuning) | ✅ Strong | Hugging Face Transformers; embeddings; semantic retrieval; transformer-based video summarization |
| Collaborate with research teams | ✅ Moderate | No explicit research collab in CV; internal cross-team delivery documented |
| PyTorch / HuggingFace Transformers | ✅ Strong | Both listed in skills; transformer-based systems shipped |
| Open-source eval framework contributions | ⚠️ Gap | No documented open-source eval framework contributions |
| Forward Deployed / Solutions Architect experience | ✅ Moderate | Customer-adjacent delivery at Progress Solutions; stakeholder documentation; system-limitation comms |
| EU work authorization | ⚠️ Soft blocker | F-1 OPT (US); requires French work permit / visa sponsorship |

**Gaps and Mitigation:**
- **Experience gap (2.5 vs 3+ years):** Tight but not disqualifying — evaluation work at Progress Solutions is production eval, not academic. The quality and specificity of Deepak's eval work (grounding rules, audit trails, hallucination tracking, domain-specific precision/recall) is more compelling than years on paper.
- **Open-source eval contributions:** Frame Deepak's Healthcare Claims audit-trail system and eval pipeline as unpublished but real production infrastructure. Express intent to publish / contribute to open-source eval tooling.
- **EU work auth:** Same risk as #796. Must confirm Mistral's sponsorship stance before applying.

---

## Block C — Level and Strategy

**Detected Level:** Mid-Senior IC — 3+ years in eval/benchmarking. Greenfield role — the first hire defines the function.

**Deepak's natural level:** Borderline lower-end of the requirement. His eval work is real and production-grade, but total experience is 2.5 years. The greenfield nature actually benefits Deepak: the role needs someone who can learn fast and build from scratch, not a specialist with a narrow benchmark focus.

**Sell senior without lying:**
> "At Progress Solutions, I owned the entire eval loop for our healthcare RAG system: metric design, grounding rules, audit-trail infrastructure, and ongoing tracking. I designed what 'production-ready' meant before anyone told me what benchmarks to hit. That's the problem Mistral is solving with this role — I've already solved a version of it in production. Now I'd do it at frontier model scale."

**Unique angle — greenfield framing:**
> "Being the first means the methodology you design persists. I've designed systems from scratch before — the Healthcare Claims multi-agent pipeline, the RAG eval framework, the E-Farming marketplace. I know what it means to make foundational decisions where there's no playbook. I'd treat this role the same way: set the standards that everyone else builds on."

---

## Block D — Comp and Demand

| Data Point | Value | Source |
|-----------|-------|--------|
| Mistral Evaluation Engineer salary (Paris) | €65K–€95K base (IC, greenfield seniority) | Glassdoor/Levels.fyi EU frontier AI lab data |
| USD equivalent (~1.08 rate) | ~$70K–$103K | Conversion estimate |
| Benefits (25 PTO + 8–10 RTT, full family health insurance, €600 mobility, Gymlib, meal vouchers) | ~€10–14K/yr value | JD explicitly stated |
| Deepak target | $100K–$130K USD | Profile |
| Equity | Options (startup; high upside given Mistral trajectory) | — |
| Gap assessment | Lower bound of target in USD terms; Paris CoL offset + equity trajectory | — |

---

## Block E — Personalization Plan

| # | Section | Current State | Change Proposed | Why |
|---|---------|--------------|-----------------|-----|
| 1 | Summary | "agentic LLM workflows" general | Add "LLM evaluation infrastructure, grounding-based quality assessment, and production-readiness frameworks" | Direct match to role's core mission |
| 2 | Skills | Eval pipelines listed in LLM & GenAI section | Move "evaluation pipelines, guardrails, grounding" to front of skills list | Role is 100% evaluation-focused |
| 3 | Experience — Progress Solutions | Retrieval precision bullet | Expand: "designed evaluation framework with grounding rules, hallucination tracking, audit trails, and domain-specific recall metrics (15–20% recall gain on high-risk patient categories)" | Shows eval methodology design, not just outcome |
| 4 | Experience — Progress Solutions | Agent stability bullet | Reframe: "built multi-step agentic eval harness measuring tool discipline, reasoning grounding, and structured output fidelity — improved agent stability by ~25%" | Directly maps to agentic system benchmarking |
| 5 | Projects | Healthcare Claims pipeline | Lead with: "eval-first multi-agent system — schema-validated contracts between agents, RAG-grounded CPT/ICD validation, audit-ready reasoning traces" | Shows eval as first-class engineering concern |
| 6 | Skills | PyTorch, HuggingFace Transformers | Explicitly surface in skills overview | JD preferred qualifications match |

---

## Block F — Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---------------|-------------|---|---|---|---|------------|
| 1 | Design eval framework for LLM production-readiness | Healthcare RAG eval pipeline at Progress Solutions | Clinical RAG system needed trustworthy, measurable output quality before prod deployment | Design and implement evaluation framework from scratch | Grounding rules, hallucination tracking, retrieval alignment metrics, audit trails | >90% retrieval-grounded alignment; >30% hallucination reduction | "Production-ready" is a methodology, not a pass/fail — you need reproducible measurements to argue the system is safe to deploy |
| 2 | Domain-specific evaluation (healthcare vertical) | High-risk patient category ML eval | Healthcare ML needed special treatment for minority classes (high-risk patients) | Design recall-precision tradeoff framework for clinical priority | Class weighting, stratified sampling, threshold calibration by patient risk tier | 15–20% recall improvement on high-risk categories while holding precision >90% | Domain-specific eval means understanding the asymmetry of errors — a missed high-risk patient costs more than a false alarm |
| 3 | Agentic system benchmarking | Multi-step agent eval at Progress Solutions | Multi-step agents needed eval beyond output quality — intermediate state and tool call reliability mattered | Build eval harness tracking per-step grounding and tool discipline | Structured reasoning checkpoints, grounding rule validation, inter-step schema contracts | ~25% agent stability improvement across query types | Agentic evals need to instrument intermediate state, not just final answers |
| 4 | Build scalable eval infrastructure | Preprocessing + eval pipeline automation | Manual dataset validation was bottleneck before model evaluation | Automate pipeline from EHR extract → preprocessing → eval → metrics | Pandas/NumPy automated pipelines, reliability gates, 98%+ dataset reliability | ~40% reduction in downstream model instability | Infrastructure that runs fast enables rapid iteration — eval only works if it's cheap to run |
| 5 | Collaborate with research teams | Transformer video eval at Suvidha | Video summarization system needed evaluation against human-curated highlights | Design human-in-the-loop eval methodology for summarization quality | Hierarchical summarization evaluation vs. human-curated key moments | ~85% alignment with human curation | Human-in-the-loop eval is the ground truth anchor — everything else is a proxy metric |

---

## Block G — Posting Legitimacy

**Assessment: High Confidence**

| Signal | Observation |
|--------|------------|
| Lever API posting | Returned full JSON via api.lever.co/v0/postings/mistral — active and indexed |
| CDI contract | French permanent contract explicitly stated — serious long-term hire, not contractor/temp |
| Greenfield hire signal | "First Evaluation Engineer" framing — Mistral is investing in building this function |
| Detailed JD | Specific methodology and infrastructure requirements; mentions specific verticals (cybersecurity, finance, healthcare) |
| Explicit benefits | 25 PTO, 8–10 RTT, full family health insurance, €600 mobility, meal vouchers, Gymlib — typical CDI French package; legitimacy signal |
| Company health | Frontier AI lab, Series B, €1B+ valuation, global offices |

**Red Flags:**
- **F-1 OPT + EU work authorization:** Same as #796. Working in Paris on F-1 OPT requires sponsored work permit. Mistral must confirm willingness to sponsor before application.
- **On-site CDI:** Permanent French contract, on-site Paris. Implies long-term commitment and relocation.
- **Experience gap:** JD asks 3+ years; Deepak has 2.5. Not a hard blocker but may require strong positioning in cover letter / intro call.
