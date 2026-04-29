# Evaluación: Bandwidth — Applied AI Engineer

**Fecha:** 2026-04-29
**Arquetipo:** AI Platform / MLOps + Applied AI (Internal AI tooling, Corporate IT Engineering)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/bandwidth/jobs/7844136
**Legitimacy:** High Confidence
**Location:** Raleigh, NC — On-site (Corporate IT Engineering team)
**PDF:** output/2026-04-29/cv-deepak-mallampati-bandwidth-applied-ai-2026-04-29.pdf

---

## A) Resumen del Rol

| | |
|---|---|
| Arquetipo | Applied AI / AI Platform Engineer (Internal IT Engineering) |
| Domain | Internal AI tooling for global comms platform (voice/messaging/911) |
| Function | Build + own AI platforms inside Corporate IT Engineering |
| Seniority | Mid–Senior; "expert-level knowledge of AI infrastructure" + "deep Docker/K8s/Terraform/Ansible" |
| Remote | On-site Raleigh, NC |
| Comp | Not disclosed in public posting |
| Visa | Standard sponsorship question on form (no explicit policy) |
| Stack | Python / TypeScript, AWS (EC2/ECS/EKS/S3/RDS/Lambda/IAM/VPC), Docker, Kubernetes, Terraform, Ansible, LLMs, RAG, vector DBs, LangChain/LangGraph/CrewAI/MCP (bonus) |
| TL;DR | Internal-AI platform role inside a Global-2000 voice/messaging vendor. Stack is RAG + LLM + heavy IaC; archetype fit is good but seniority and on-site Raleigh are the friction points. |

## B) Match con CV

| JD Requirement | CV Evidence | Match |
|---|---|---|
| Own/extend LLM-powered platforms (RAG, prompt eng, LLM APIs in production) | cv.md L25 — Healthcare RAG (~35% retrieval precision, >90% grounding) | Strong |
| Build internal API layers / shared platform services | cv.md L28 — FastAPI/Flask packaging w/ structured logging | Strong |
| Containerize AI workloads (Docker, K8s) | cv.md L17 — Docker, CI/CD; K8s exposure adjacent (not on CV) | Adjacent |
| AI development patterns / best practices | Healthcare Claims schema-contract pattern + eval pipelines | Strong |
| Anomaly detection / log analysis with AI | Predictive ML (no-show, care engagement) — not log-domain but pattern-detection adjacent | Adjacent |
| Python or TypeScript | cv.md L12 — Python primary, TypeScript via Manga Lens | Strong |
| AWS production workloads | Manga Lens deployed; healthcare services on AWS-ready Docker | Adjacent (no direct AWS bullet on CV) |
| **Terraform + Ansible (deep)** | Not on CV | Gap |
| **Kubernetes hands-on** | Docker + cloud-ready deployment but no K8s bullet | Gap |
| **Expert AI infra / model serving / GPU** | FastAPI/Flask + Docker; no GPU serving bullet | Partial |

**Gaps:**
1. **Terraform + Ansible expertise** — *Mitigation:* Frame Jenkins CI/CD + Docker as IaC-adjacent; commit to ramping Terraform via portfolio project before interview.
2. **Kubernetes deep expertise** — *Mitigation:* Docker + container orchestration foundation; demonstrate K8s lab work or fast ramp-up willingness.
3. **On-site Raleigh** — *Mitigation:* Relocation feasible on F-1 OPT; raise in screen.

## C) Nivel y Estrategia

- **JD level:** Mid–Senior; "expert-level" and "deep" framing suggests 4–6+ yrs.
- **Candidate level:** 2.5+ yrs Applied AI; mid-level. Seniority gap is real on the IaC side.
- **Sell:** Applied AI bullets (RAG, agentic, FastAPI) + healthcare production discipline. Manga Lens shipped solo proves end-to-end ownership.
- **If downleveled:** Acceptable; this role title fits mid-level if comp band aligns (likely $130-160K Raleigh).

## D) Comp y Demanda

| Item | Value | Notes |
|---|---|---|
| Salary | Not disclosed | Glassdoor Bandwidth Software Engineer Raleigh ~$110-160K base |
| Equity | Likely RSU at public company | Bandwidth (BAND, NASDAQ) |
| Visa | Form asks; no explicit "yes/no" | Treat as ambiguous |
| Demand | Internal AI tooling roles growing | High |

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | Generic Applied AI | "Applied AI engineer building production RAG, agentic workflows, and FastAPI/Docker AI services targeting internal AI platform roles" | JD emphasizes internal platform AI |
| 2 | Competencies | LLMOps mix | Lead with Internal AI Platforms + RAG + LLM APIs + Docker/AWS | Match JD priority |
| 3 | Experience | Healthcare-RAG-first | Add explicit "internal API layer / shared platform service" framing | JD emphasizes shared services |
| 4 | Projects | All 4 | Lead with Healthcare Claims (multi-agent + schema contracts) — closest to internal AI tooling vibe | Best signal for platform thinking |
| 5 | Cover letter | n/a | "Bandwidth's bet on Applied AI inside Corporate IT Engineering is exactly the platform layer I'm building today — RAG pipelines, LLM APIs, FastAPI/Docker packaging — for healthcare workflows." | Direct hook |

## F) Plan de Entrevistas

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | RAG pipeline ownership | Healthcare RAG | Clinical knowledge retrieval was noisy (<60% precision) | Build a RAG pipeline that grounds answers and reduces irrelevant retrieval | Recursive semantic chunking + transformer embeddings + grounding evals | ~35% precision gain, >90% alignment | Chunking strategy + eval harness drive precision more than model size |
| 2 | Internal API layers | FastAPI services | ML/LLM scattered across notebooks; consumers couldn't reuse | Package inference as REST services | FastAPI + Flask + Docker + structured logging | ~30% post-deploy defect reduction | Versioned APIs + structured logs make ML reusable across teams |
| 3 | Multi-agent / cascading hallucination | Healthcare Claims | CPT/ICD validations cascading hallucinations | Schema-validated agent contracts | LangChain + pgvector + JSON contracts | Audit-ready outputs | Schema contracts > prompt engineering for multi-agent reliability |
| 4 | Operational discipline (HIPAA) | EHR preprocessing | Inconsistent EHR shapes | De-identification + lineage + audit trails | Pandas/NumPy + governance docs | 98% reliability, 40% downstream instability cut | Governance compounds as models scale |

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | First posted 2026-04-24, updated same day — 5 days old | Strong positive |
| Description quality | Names specific stack (AWS services, Terraform/Ansible/K8s), specific scope (Corporate IT) | Strong positive |
| Tech specificity | High — explicit tools and bonus stack (LangChain/LangGraph/CrewAI/MCP) | Strong positive |
| Apply button | Active form | Positive |
| Reposting | Not flagged | Neutral |
| Boilerplate | Low; reads as written by hiring manager | Positive |
| Public-company hiring | Bandwidth (BAND, NASDAQ) Global-2000 customers | Positive (institutional) |

## H) Draft Application Answers

*(Score 3.0/5 < 4.5 — drafts deferred until apply step.)*

---

## Keywords extraídas
Applied AI Engineer, Corporate IT Engineering, RAG, LLM APIs, prompt engineering, AI infrastructure, model serving, MLOps, Python, TypeScript, AWS, EC2, ECS, EKS, S3, RDS, Lambda, IAM, VPC, Docker, Kubernetes, Terraform, Ansible, LangChain, LangGraph, CrewAI, MCP, vector databases, internal API layer, anomaly detection, infrastructure-as-code, Bandwidth, voice messaging
