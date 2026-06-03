# Evaluación: Silent Eight — Junior Forward-Deployed AI Engineer (LLM/ML)

**Fecha:** 2026-06-03
**Arquetipo:** AI Solutions / Forward Deployed Engineer (Applied AI / LLM)
**Score:** 4.2/5
**URL:** https://himalayas.app/companies/silent-eight/jobs/junior-forward-deployed-ai-engineer-llm-ml
**Legitimacy:** High Confidence
**Location:** Remote — United States only (no travel stated)
**Region:** US
**PDF:** output/2026-06-03/cv-deepak-mallampati-silent-eight-junior-fde-ai-engineer-2026-06-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed Engineer + Applied AI / LLM — client-facing engineer designing decision systems for AML/compliance |
| Domain | RegTech — anti-money-laundering & counter-terrorist-financing for major banks (HSBC, Standard Chartered); founded 2013, 51–200 employees |
| Function | Engage users → develop KPIs + experimental designs → design decision systems combining **LLMs, RAG, classical ML, and rules** → prototype + evaluate on real data → present to stakeholders |
| Seniority | **Junior / entry-level** — explicitly entry; track record of 2–3 AI/ML solutions preferred but not required |
| Remote | **Remote, United States only** — no relocation |
| Comp | Not disclosed in JD |
| TL;DR | Near-ideal fit. Junior seniority matches Deepak's career stage, remote-US removes relocation, and the stack (RAG, prompting, tool-calling, classification, ranking, dedup, Python, SQL, FastAPI, Docker, Postgres, vector indexes) maps almost 1:1 to his Progress + Vanguard + Healthcare Claims work. The compliance/fraud/risk domain is adjacent to his regulated healthcare + finance background. Score 4.2 = clean archetype + stack + seniority + remote-US fit; minor discount for undisclosed comp and the client-facing (FDE) muscle being newer for him. |

## B) Match con CV

| Requisito JD | Línea CV | Mapping |
|--------------|----------|---------|
| "Design decision systems combining LLMs, RAG, classical ML, and rules-based logic" | Progress (agentic + RAG); Emerson (regression/classification + BERT/RoBERTa NER 89% F1); Vanguard (LLM eval + safeguards) | **Strong** — exactly the LLM+ML+rules blend |
| "LLMs/ML: RAG, prompting, tool-calling" | Progress RAG with cross-encoder re-rank; Healthcare Claims LangChain + tool-calling + schema contracts; Vanguard prompt optimization +27% | Strong |
| "Classification, ranking, deduplication" | Emerson supervised classification + NER; Progress cross-encoder re-ranking; entity/record work in privacy pipeline | Strong |
| "Python and SQL proficiency for prototype development" | Python across all roles; PostgreSQL/Redis; FastAPI APIs | Strong |
| "Build prototypes and evaluate impact using real-world data" | Kent State privacy–utility benchmarking (6 configs, quantified tradeoffs); Vanguard internal eval datasets +27% | Strong |
| "Develop KPIs and experimental designs" | Privacy–utility scoring framework; RAGAS/BERTScore/custom-metric eval framework at Progress | Strong |
| "Nice: FastAPI, Docker, Postgres" | CV: FastAPI, Docker, Kubernetes, PostgreSQL | Strong |
| "Nice: vector indexes" | FAISS, Pinecone, Weaviate; semantic + hybrid search | Strong |
| "Nice: graph/entity resolution, link analysis" | Privacy pipeline record-linkage risk work (re-identification 3.38% → 0.32%) | Moderate (record-linkage ≈ entity resolution; no explicit graph link-analysis) |
| "Nice: investigations, fraud, risk, or compliance domain" | Vanguard (financial services) + healthcare HIPAA/SOC2/PCI compliance exposure | Moderate (compliance-adjacent, not AML-specific) |
| "Communicate with non-technical stakeholders" | Cross-functional delivery across 20+ teams (Vanguard); IEEE paper authorship | Moderate |

**Gaps & mitigation:**
1. **AML/compliance domain specificity** — no direct anti-money-laundering experience. Mitigation: "I've shipped in two of the most regulated domains there are — healthcare (HIPAA) and finance (Vanguard). Compliance decision systems are the same discipline: grounded, auditable, false-positive-sensitive."
2. **Client-facing FDE muscle** — Deepak's roles were more build- than client-facing. Mitigation: cross-functional delivery + stakeholder-facing research presentations; junior FDE is exactly where to grow this.

## C) Nivel y Estrategia

**Nivel detectado:** Junior / entry IC — ideal match for Deepak's stage; his depth (production agentic + RAG + evals) makes him a top-of-band junior.
**Candidate fit:** Very strong. Remote-US + junior + LLM/RAG/ML/rules stack + regulated-domain adjacency.

**Sell junior+:**
- "I've shipped production decision systems that blend LLMs, RAG and classical ML with guardrails — at Progress (healthcare) and Vanguard (finance), the two domains where false positives and auditability matter most, same as AML."
- "I build the RAG + classification + ranking + dedup layer in Python/FastAPI over Postgres + vector indexes — that's your exact prototype stack."
- "My Kent State work quantified privacy–utility tradeoffs across 6 configs and cut re-identification risk 3.38% → 0.32% — that's KPI-driven experimental design on sensitive real data."

**If pushed on AML specifically:** "I haven't done AML by name, but I've built grounded, auditable ML/LLM systems in HIPAA healthcare and at Vanguard. The compliance shape — high recall on true risk, controlled false positives, explainable decisions — is what I've optimized for."

## D) Comp y Demanda

| Métrica | Valor | Fuente |
|---------|-------|--------|
| Banda publicada | Not disclosed | JD |
| Mercado junior AI/ML Eng remote-US 2026 | ~$110–160K base | Levels.fyi / Blind |
| Demanda | High — FDE + Applied AI is a top-demand bucket 2026 | scan-history frequency |
| Silent Eight reputation | Established RegTech (since 2013); marquee bank clients (HSBC, Standard Chartered); 51–200 | Public / LinkedIn |

**Negotiation:** Comp unlisted → anchor remote-US junior AI band ($130–150K). Stable, client-funded RegTech with real bank contracts = lower comp-risk than early startups.

## E) Plan de Personalización

| # | Sección | Estado | Cambio | Por qué |
|---|---------|--------|--------|---------|
| 1 | Summary | Generic 4+ years | "Applied AI engineer who builds grounded decision systems blending LLMs, RAG, classical ML and rules in regulated domains (healthcare, finance) — Python/FastAPI/Postgres/vector indexes" | Mirror JD's "LLMs + RAG + classical ML + rules" verbatim |
| 2 | Lead bullet | Progress agentic generic | Lead with "RAG + classification + re-ranking decision pipeline with eval-driven KPIs" — keep retrieval + hallucination metrics | JD = decision systems + KPIs + eval |
| 3 | Emerson | "regression/classification + 89% F1 NER" | Promote — it's the classical-ML + classification + NER (entity) proof the JD asks for | JD: classification, ranking, dedup, entity resolution |
| 4 | Privacy pipeline | "k-anon/l-div/DP" | Reframe re-identification 3.38% → 0.32% as **entity-resolution / record-linkage** work | JD nice-to-have: graph/entity resolution, link analysis |
| 5 | Skills | Generic | Surface FastAPI + Docker + Postgres + FAISS/Pinecone + SQL together as the "prototype stack" | Match JD's exact tooling list |

LinkedIn: Headline → "Forward-Deployed AI Engineer — grounded LLM/RAG + ML decision systems for regulated domains."

## F) Plan de Entrevistas

| # | Requisito | STAR+R |
|---|-----------|--------|
| 1 | "Design decision systems: LLMs + RAG + classical ML + rules" | **S**: Progress healthcare GenAI; **T**: reliable, auditable answers over clinical corpora; **A**: dense retrieval + cross-encoder re-rank + classical filters + guardrail rules + RAGAS/BERTScore evals; **R**: hallucinations materially reduced, 42% token cut; **Reflection**: rules + ML + LLM layered beats any single approach for auditable decisions. |
| 2 | "Develop KPIs + experimental designs on real data" | **S**: Kent State clinical readmission dataset; **T**: quantify privacy vs utility; **A**: composite privacy–utility scoring across 6 anonymization configs + 4 ε levels; **R**: re-identification 3.38% → 0.32%, 99% predictive performance retained; **Reflection**: a single composite KPI made an otherwise-fuzzy tradeoff decidable. |
| 3 | "Classification, ranking, deduplication" | **S**: Emerson + Progress; **T**: entity extraction + relevance ranking; **A**: BERT/RoBERTa NER (89% F1) + cross-encoder re-ranking; **R**: precise extraction + lifted answer relevance; **Reflection**: re-ranking is the cheapest precision win in a retrieval pipeline. |
| 4 | "Prototype + evaluate impact, present to stakeholders" | **S**: Vanguard internal AI platform; **T**: model selection across GPT-4o/Claude/Gemini; **A**: built eval datasets + benchmarked, presented to platform team; **R**: +27% success, informed model-routing decisions; **Reflection**: a shared eval set turns opinion debates into data decisions. |
| 5 | "Entity resolution / link analysis (nice)" | **S**: privacy pipeline; **T**: record-linkage re-identification risk; **A**: k-anonymity + l-diversity tuning; **R**: unique-record exposure 0.94% → 0%; **Reflection**: entity-resolution risk is a graph problem in disguise — model the linkage, not just the record. |

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Active; application deadline 2026-07-26; apply form present | Positive |
| Description quality | Specific stack + concrete responsibilities + realistic junior framing + named nice-to-haves | Positive |
| Company hiring signals | Established RegTech since 2013, marquee bank clients (HSBC, Standard Chartered), 51–200 employees | Positive |
| Reposting | First time in scan-history | Neutral |
| Salary transparency | Not disclosed — common for RegTech; low-weight signal | Low/Neutral |
| Role-company fit | Junior FDE building AML decision systems is coherent with the business | Positive |

## H) Draft Application Answers
(skip — score 4.2 < 4.5 threshold; strong-apply recommendation stands)

---

## Keywords extraídas

Forward Deployed Engineer, Junior, Silent Eight, RegTech, AML, compliance, fraud, risk, remote US, LLM, RAG, prompting, tool-calling, classification, ranking, deduplication, classical ML, rules-based, Python, SQL, FastAPI, Docker, Postgres, vector index, entity resolution, link analysis, KPI, experimental design, decision systems, stakeholders
