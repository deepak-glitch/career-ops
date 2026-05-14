**Fecha:** 2026-05-14
**Arquetipo:** AI Platform / LLMOps Engineer + Applied AI / LLM Engineer
**Score:** 3.8/5
**URL:** https://jobs.ashbyhq.com/sierra/0c892d11-9f19-4b8d-9c2b-409346c52b7a
**Legitimacy:** Proceed with Caution
**Location:** San Francisco, CA — In-person
**Region:** US
**PDF:** output/2026-05-14/cv-deepak-mallampati-sierra-swe-agent-data-platform-2026-05-14.pdf

---

## Block A — Role Summary

| Field | Detail |
|-------|--------|
| Arquetipo | AI Platform / LLMOps Engineer + Applied AI / LLM Engineer |
| Domain | AI agent data infrastructure — evaluation data, training data, agent traces |
| Function | Build the data platform powering agent quality at scale |
| Seniority | Mid IC (no Senior tag on title) |
| Remote | On-site — San Francisco, CA |
| Team size | Agent Data Platform team (small, specialized) |
| TL;DR | Build the data infrastructure that makes Sierra's agents measurably better — evaluation pipelines, training data management, trace analytics, and feedback loops that power the Agent Development Life Cycle. |

Sierra's Agent Data Platform team sits at the intersection of MLOps and agent engineering — building the systems that measure, store, and improve agent quality across all verticals.

---

## Block B — CV Match

| JD Requirement | Deepak Match | Evidence in CV |
|---------------|--------------|----------------|
| Evaluation pipeline design | ✅ Strong | Eval pipelines, guardrails, audit trails at Progress Solutions |
| Data pipeline engineering | ✅ Strong | EHR data preprocessing pipelines (Pandas, NumPy); 98%+ dataset reliability; ~40% instability reduction |
| LLM/agent trace analysis | ✅ Moderate | Evaluation audit trails; structured logging in FastAPI services |
| Python + data tooling | ✅ Strong | Python, Pandas, NumPy, scikit-learn across all work |
| Production infrastructure mindset | ✅ Strong | Docker, CI/CD (Jenkins), Grafana dashboards, load simulation |
| Healthcare domain experience | ✅ Strong | All primary ML/LLM work at Progress Solutions is healthcare data |
| In-person SF | ⚠️ Friction | Requires relocation from Kent OH; Deepak open to relocation |

**Gaps and Mitigation:**
- **Agent data management at scale:** Progress Solutions is smaller scale than Sierra's enterprise volume. Frame by emphasizing the rigor of data governance (HIPAA, lineage, de-identification) rather than sheer scale.
- **Exact data platform tooling (Spark, Flink, etc.):** Not explicitly listed in JD (position descriptions for this role are not public); frame Python/Pandas + production infra experience.

---

## Block C — Level and Strategy

**Detected Level:** Mid IC — Sierra's agent engineering roles tend to value domain expertise + engineering ownership over years of experience.

**Deepak's natural level:** Good fit at mid IC — data pipeline ownership + eval systems + healthcare domain context is exactly what this team needs.

**Sell senior without lying:**
> "I build and own data pipelines that feed production AI systems — from EHR ingestion to evaluation data generation to downstream model quality. At Progress Solutions, I raised dataset reliability above 98% and cut model instability by ~40%. Sierra's Agent Data Platform is where this work belongs at scale."

---

## Block D — Comp and Demand

| Data Point | Value | Source |
|-----------|-------|--------|
| Sierra SWE comp (platform roles) | $150K–$220K estimated | Levels.fyi AI startup benchmarks |
| Data platform engineers (market) | $150K–$200K SF | General market |
| Sierra equity | Significant (Sequoia/Benchmark, late Series B) | CB Insights |

---

## Block E — Personalization Plan

| # | Section | Current State | Change Proposed | Why |
|---|---------|--------------|-----------------|-----|
| 1 | Summary | "preprocessing pipelines" | Add "data pipelines for AI evaluation and model quality measurement" | Platform role framing |
| 2 | Experience | EHR pipelines described with stats | Lead with: "Built data preprocessing pipelines for EHR data; raised dataset reliability >98%; cut downstream model instability ~40%" | Data platform team is metric-driven |
| 3 | Skills | Infra section has Docker/Jenkins/Grafana | Move Grafana to "Data Observability" framing | Platform observability is key |
| 4 | Projects | Healthcare Claims pipeline | Surface multi-agent pipeline data contracts: "schema-validated JSON contracts between agents prevented cascading data errors" | Shows data quality discipline in agent context |
| 5 | Summary | Generic | Add: "HIPAA-conscious data governance: de-identification, lineage, evaluation audit trails" | Healthcare data platform expertise |

---

## Block F — Interview Plan

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---------------|-------------|---|---|---|---|------------|
| 1 | Data pipeline for AI quality | EHR preprocessing at Progress Solutions | ML models were unstable due to data quality issues | Build robust preprocessing pipeline | Pandas/NumPy EHR pipeline, missing value handling, feature engineering | 98%+ dataset reliability; ~40% fewer downstream instability issues | Data quality problems look like model problems — fix data first |
| 2 | Evaluation data management | Eval pipeline + audit trails | LLM outputs needed measurement and traceability | Design multi-dimensional eval framework | Eval dimensions, guardrails, audit-ready traces | 90%+ retrieval-grounded alignment; zero compliance incidents | Good eval data is the hardest part of any LLM project |
| 3 | Production data infrastructure | Jenkins CI/CD + Grafana dashboards at ESI/Emerson | Database performance needed measurement and alerting | Build monitoring dashboards for SQL + Grafana | DMV-based Grafana dashboards, long-running query alerts | ~25% incident recurrence reduction; ~30% faster root-cause resolution | Observability is what separates reactive from proactive teams |
| 4 | Data contracts between agents | Agentic Healthcare Claims pipeline | Cascading hallucinations between agents corrupted downstream processing | Implement schema-validated JSON contracts | Schema validation at each agent boundary; structured reasoning traces | Zero cascading hallucinations in testing | Agent pipelines need the same data contracts as microservices |

---

## Block G — Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Observation |
|--------|------------|
| Posting age | Listed in Sierra search results with UUID 0c892d11; however Ashby API returned null for this job ID |
| Possible status | Re-post or older listing; "Agent Data Platform" is a newer team structure at Sierra |
| Apply button | Ashby URL active (confirmed in WebSearch results) |
| Company health | Sierra is actively expanding; Agent Data Platform is a growing internal team |
| Recommendation | Verify liveness by attempting to apply; if "Apply" redirects to generic careers page, posting may be closed |

---

## Block H — Draft Pitch

**For application:**
> "I build the data infrastructure that makes AI systems measurably better — EHR preprocessing pipelines with 98%+ reliability, eval frameworks with audit-ready traces, and multi-agent pipelines with schema-validated data contracts. Sierra's Agent Data Platform is the right home for this work: building the measurement and training data systems that let agents improve continuously. I'd bring both the data engineering and the domain context — I've spent the past year learning what 'reliable' means for AI data in a regulated environment."
