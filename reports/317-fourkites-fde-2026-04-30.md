# Evaluación: FourKites — Forward Deployed Engineer

**Fecha:** 2026-04-30
**Arquetipo:** AI Solutions / Forward Deployed Engineer (Supply chain agentic AI, LangGraph)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/fourkites/jobs/7672017
**Legitimacy:** High Confidence
**Location:** Chicago, IL — On-site (no explicit remote signal; commuter benefits enumerated for in-office)
**PDF:** output/2026-04-30/cv-deepak-mallampati-fourkites-fde-2026-04-30.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | FDE — Supply chain agentic AI; LangGraph-based workflows + Agent Studio customizations |
| Domain | Real-time supply chain visibility (3.2M events/day), digital twin, AI agents for orders/shipments/inventory |
| Function | Build (LangGraph workflows, integrations, MVPs) + Customer-facing engineering (discovery + post-launch) + Knowledge building (FDE library + mentoring) |
| Seniority | Mid (years not stated; comp band $80-110K + LangGraph hands-on requirement → Mid IC) |
| Remote | Chicago, IL — On-site (commuter benefits + Chicago location signal in-office) |
| Comp | **$80,000–$110,000** base + bonus + stock options + benefits |
| Team | Forward Deployed Engineering — embedded with enterprise customers (Cardinal Health, Walmart-tier) |
| TL;DR | FourKites (1,600+ global brands, AI-driven supply chain leader) hires FDE for LangGraph + Agent Studio agentic workflow deployment with enterprise customers. Stack 1:1 on Python + LangGraph + LLMs but **adds Java as Must-Have**. Comp band low ($80-110K) for Mid IC; Chicago on-site. F-1 OPT viable in US. Strong agentic + customer-facing fit; **score 3.0/5** — generate PDF, deprioritize vs higher-band roles. |

## B) Match con CV

| JD Requirement | CV Line | Match |
|---|---|---|
| Python — clean, production-grade with error handling + tests | Python primary (cv.md:12); FastAPI/Flask production with structured logging + load simulation; defects -30% (cv.md:28) | **Strong** |
| **Java — production-grade** | Not on CV (negative-filter keyword) | **Hard gap** (must-have) |
| LLMs + prompt engineering + agentic workflow design | Agentic Healthcare Claims 5-stage pipeline + schema contracts (cv.md:71-72); response stability +25% (cv.md:26); hallucinations cut >30% | **Strong** |
| LangGraph / LangChain familiarity | LangChain on CV (cv.md:14); LlamaIndex on CV; agentic workflow orchestration evidence in Agentic Healthcare Claims project | **Strong** |
| Data structures and algorithms fundamentals | CS Master's at Kent State (cv.md:91); CS undergrad and engineering practice | **Strong** |
| Customer-facing technical communication | HIPAA stakeholder docs (cv.md:30); Suvidha non-technical Flask UI (cv.md:47); Student Manager 150+ students (cv.md:50-55) | **Strong** |
| Queueing systems / data warehouses / ETL (plus) | EHR ETL with Pandas/NumPy (cv.md:29); CI/CD with Jenkins (cv.md:36) | Adequate |
| EDI / TMS / WMS / carrier integrations (nice) | Not on CV directly; ERP integration at Emerson is closest analog (cv.md:36) | Partial |
| n8n / Pipedream / Temporal (nice) | Not on CV directly; agentic orchestration on LangChain is the harder analog | Partial |

**Gaps:**
- **Java** — JD lists Java as Must-Have alongside Python. Deepak's CV has C++/PHP/TS but not Java in production. Mitigatable in 2-4 weeks for syntax + framework basics, but FourKites's emphasis ("clean, production-grade code with proper error handling and test coverage") suggests they expect production Java experience day-1. **Real blocker.**
- **EDI / TMS / WMS** — Domain-adjacent but not specific; Emerson ERP integration is the closest analog.

## C) Nivel y Estrategia

If the recruiter is flexible on the Java hard requirement (some FDE roles list Java + Python as "either/or"), this is a Mid-IC archetype-strong fit. Lead with: (a) LangGraph-equivalent agentic experience (5-stage Healthcare Claims with schema contracts), (b) production-reliability discipline (~30% defect reduction), (c) customer-facing technical communication (HIPAA stakeholder docs). Plan B if Java is non-negotiable: skip — building production Java in 2-4 weeks is unrealistic for an FDE that needs to ship customer code. Comp band $80-110K is low for Mid SF/NY but typical for Chicago + entry-Mid; if hired, negotiate at the top of band.

## D) Comp y Demanda

FourKites: 1,600+ global brands, $300M+ raised across rounds, AI Control Tower flagship product, public-track. Mid Chicago FDE band $80-110K + bonus + stock is on the low side of FDE comp (Glassdoor Chicago 2026: SE FDE mid bands $100-140K) but reflects Chicago HCOL discount. F-1 OPT sponsorship: large established US public-track companies often sponsor; verify with recruiter. **Note on Chicago:** Deepak in Kent, OH — Chicago is closer than SF; relocation tier easier than coastal moves.

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Lead with agentic FDE: "Applied AI engineer shipping LangGraph-style multi-agent workflows into enterprise environments with schema contracts and production reliability discipline." | JD's primary asks are LangGraph/agents + customer-facing |
| 2 | Experience | Promote Progress Solutions agentic LLM workflows + Emerson ERP integration as the supply-chain-adjacent enterprise integration analog | 1:1 with JD's "production-grade integrations + agentic workflow design" |
| 3 | Projects | Surface Agentic Healthcare Claims (5-stage agents + schema contracts) + Manga Lens (multi-provider LLM) | Direct evidence of agent-workflow shipping |
| 4 | Skills | Emphasize Python + LangChain + LangGraph-equivalent + LLM + FastAPI + Docker + observability + ETL | Direct stack alignment (Java is a gap to acknowledge in cover letter, not hide) |
| 5 | Competencies | "Forward Deployed Engineering", "Agentic Workflows", "LangGraph", "Schema Contracts", "Production Reliability", "ETL Pipelines", "Customer-Embedded Delivery", "Code Reviews + RCAs", "Cross-Functional Communication" | Mirror JD vocabulary |

## F) Plan de Entrevistas

| Req | Story | Reflection |
|---|---|---|
| LangGraph-based agentic workflow design | Agentic Healthcare Claims 5-stage pipeline (Intake → Validation → Consistency → Duplicate → Risk Scoring) with schema-validated JSON contracts | Schema contracts beat tests when agents drift mid-execution |
| Customer-facing engineering on calls | HIPAA system-limitation docs at Progress Solutions + Suvidha Flask UI for non-technical NGO staff | The right answer is the one the customer can repeat back accurately |
| Production-grade integrations | Emerson Synthesis ERP — T-SQL stored procs across contracts/nominations/allocations/invoicing; query time -20%, retrieval latency -25%; deploy errors -30% via Jenkins CI/CD | Integration is mostly contract management, not coding |
| Code reviews + RCAs for integration failures | Structured logging + load simulation at Progress Solutions; defects -30% post-deploy; SQL Server DMVs for incident triage | Logs are the primary test in production AI |
| Mentoring incoming engineers | Student Manager Kent State — 150+ students; cut ramp-up time -20% via formalized onboarding | Onboarding is a forcing function for documentation hygiene |

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Updated 2026-04-28; active 2026-04-30 (Greenhouse API returns full content) | Positive |
| Apply path | Greenhouse → FourKites careers (legitimate, public-track company) | Positive |
| Tech specificity | Specific (Java, Python, LangGraph, LangChain, Agent Studio, queueing, data warehouses, ETL, EDI, TMS/WMS, n8n, Pipedream, Temporal) | Positive |
| Description quality | Multi-paragraph; clear scope (agent deployment + customer-facing + library + mentoring); benefits enumerated | Positive |
| Compensation transparency | $80-110K + bonus + stock + benefits enumerated | Positive |
| Funding signal | 1,600+ global brands; 3.2M supply chain events daily; established AI Control Tower product | Positive |
| Reposting | First-time in scan-history under job ID 7672017 | Positive |

## Keywords extraídas

Forward Deployed Engineer, FourKites, Supply Chain, Logistics, AI Agents, LangGraph, LangChain, Agent Studio, Python, Java, Integrations, Customer-Facing Engineering, RCAs, Code Reviews, ETL, Data Warehouses, Queueing, EDI, TMS, WMS, n8n, Pipedream, Temporal, Chicago, On-site, Production Reliability
