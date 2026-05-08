# Evaluación: Silent Eight — Junior Forward Deployed AI Engineer (LLM/ML)

**Fecha:** 2026-05-08
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer
**Score:** 2.5/5
**URL:** https://himalayas.app/companies/silent-eight/jobs/junior-forward-deployed-ai-engineer-llm-ml
**Legitimacy:** Proceed with Caution
**Location:** Poland — Fully Remote (Polish entity / EU work authorization)
**PDF:** Not generated (score < 3.0)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Junior FDE + Applied AI/LLM (investigations / decisioning) |
| Domain | RegTech — AML / fraud / sanctions for tier-1 FIs |
| Function | Customer-facing delivery of AI/ML decisioning solutions |
| Seniority | Junior (2–3 KPI examples) |
| Remote | Fully Remote — Poland-based |
| Team size | Embedded with FDE / Investigations team |
| TL;DR | Junior FDE for AI-powered AML compliance at Silent Eight (Polish entity, fully remote within Poland). Strong archetype 1:1 (Python + FastAPI + Postgres + vector indexes + LLM/ML decisioning). Geography is the blocker: Polish-payroll, no public US-W2 path, F-1 OPT incompatible. Skip unless they pivot to a US/contractor structure. |

## B) Match con CV

| JD requirement | CV evidence (line) |
|---|---|
| 2–3 examples of AI/ML solutions improving process KPIs | RAG ~35% retrieval precision, agentic ~30% hallucination reduction (cv.md L25–26), patient no-show 15–20% recall gains (L27) |
| Investigations / fraud / risk decisioning | Agentic Healthcare Claims — fraud risk scoring with audit-ready reasoning traces (cv.md L72) |
| Graphs / ER / link analysis / pattern-of-life | Geospatial Road Network — NetworkX DiGraph, betweenness centrality, Louvain communities, MST (cv.md L78) |
| Python, SQL, notebooks | Languages: Python, SQL (T-SQL, PostgreSQL, SQLite) (cv.md L12) |
| Lightweight APIs (FastAPI), simple stores (Postgres), vector indexes | FastAPI/Flask packaging (cv.md L28); RAG with embeddings + vector retrieval (L25); Manga Lens prod stack (L60) |
| Light Docker | Docker, Jenkins, CI/CD (cv.md L17); FastAPI containerized (L28) |

**Gaps:**
1. Explicit AML/compliance/sanctions domain — adjacent (healthcare HIPAA + fraud risk in claims project). Mitigation: cover-letter bridge from agentic claims fraud detection → AML pattern detection.
2. Entity resolution at scale — proxy via NetworkX graph project + duplicate-claim ANN similarity. Mitigation: case-study walkthrough.
3. Polish work authorization — hard blocker. No mitigation without sponsorship + relocation.

## C) Nivel y Estrategia

- **JD level:** Junior FDE — 2-3 KPI delivery examples + light eng craft.
- **Candidate fit:** 2.5y at Progress Solutions + Suvidha + Manga Lens projects clear the bar comfortably.
- **Sell senior-without-lying:** Lead with RAG/agentic deltas (35% / 30% / 15-20%); position as already operating at Junior-Mid.
- **Downlevel posture:** N/A — this is Junior; the question is geography, not level.

## D) Comp y Demanda

| Source | Number | Notes |
|---|---|---|
| Glassdoor — Silent Eight | 29 salary data points reported | No public Junior FDE band; Polish-tier |
| Junior FDE Poland (market) | ~PLN 12k–18k/mo gross (~$36k–55k USD/yr) | Estimate from Glassdoor + Pracuj.pl signals |
| Public job listing | "PLN 0 - PLN 0/yr" placeholder | Comp not disclosed |
| US Junior FDE benchmark | $130k–180k base | 3–4× the Polish band |

Demand for AML/decisioning FDEs is high in EU; Silent Eight has shipped to tier-1 FIs (HSBC, Standard Chartered, etc.).

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare RAG / agentic | Lead with "AI/ML decisioning systems with measurable KPI gains in regulated domains" | JD frames in KPI terms |
| 2 | Bullets | Healthcare-first | Front-load agentic claims (fraud/risk + audit traces) | Direct AML analog |
| 3 | Skills | Generic LLM list | Surface FastAPI + Postgres + vector indexes + NetworkX | JD names exactly these |
| 4 | Projects | Multiple | Lead with Agentic Claims + Geospatial Network | Investigations/ER analog |
| 5 | Cover letter | n/a | Open with the geography honesty + KPI track | Set expectation, don't waste reader's time |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R |
|---|---|---|
| 1 | KPI-improving AI/ML | S: clinical RAG with stale retrieval; T: ground answers + cut hallucinations; A: recursive semantic chunking + transformer embeddings + grounding rules; R: ~35% precision, >30% irrelevant cut, 90% alignment; **Reflection:** retrieval gains compound only when grounding rules are codified — not when they live in prompts |
| 2 | Fraud/risk decisioning | S: agentic claims pipeline; T: prevent cascading hallucinations + score risk; A: schema-validated JSON contracts + RAG-grounded CPT/ICD + ANN duplicate detection; R: explainable risk scoring + audit-ready reasoning traces; **Reflection:** the contract between agents matters more than the agents themselves |
| 3 | Graphs/ER | S: 20k-node OSM road network; T: backbone + community structure; A: NetworkX DiGraph + Haversine weights + Dijkstra + betweenness + Louvain + MST; R: ~30% runtime reduction via subgraph scoping; **Reflection:** centrality and community detection are the same algorithm family used in entity resolution |
| 4 | FastAPI + Docker + Postgres | S: Suvidha video summarization stack; T: ship to non-technical staff; A: Flask API + lightweight web UI; R: 60-70% review-time reduction; **Reflection:** API ergonomics for non-engineers requires a different default than for engineers |

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Himalayas listing live; corroborated on TeamTailor (silenteight.teamtailor.com) and Remote Rocketship (Poland Remote) | Positive |
| Apply button | Active on TeamTailor canonical | Positive |
| Tech specificity | High — names FastAPI, Postgres, vector indexes, ER, link analysis | Positive |
| Salary transparency | Placeholder "PLN 0 - PLN 0" — common Polish posting style | Neutral |
| Reposting | Not reposted in scan-history | Positive |
| Geography vs candidate | Poland-only — F-1 OPT block | Concerning (for fit, not legitimacy) |

Context: Silent Eight is a real, well-funded RegTech (HSBC, ING customers). The role is real; the fit problem is location, not legitimacy.

## H) Draft Application Answers

(Score < 4.5 — H block omitted per template.)

---

## Keywords extraídas

Silent Eight, Forward Deployed Engineer, Junior FDE, LLM, ML, AML, KYC, sanctions, investigations, decisioning, fraud, risk, false positives, time-to-decision, explainability, entity resolution, link analysis, pattern-of-life, FastAPI, Postgres, vector indexes, Python, SQL, Poland, fully remote.
