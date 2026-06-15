# Evaluación: Zeit AI — Forward-Deployed Engineer (FDE) — Munich

**Fecha:** 2026-06-15
**Arquetipo:** AI Solutions / Forward Deployed Engineer
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/zeit-ai/0d3209aa-fc44-4ab8-acc0-bca1b9807e00
**Legitimacy:** Trusted
**Location:** Munich, Germany — In-person primary hub
**Region:** Intl
**PDF:** output-intl/2026-06-15/cv-deepak-mallampati-zeit-ai-fde-munich-2026-06-15.pdf
**Verification:** confirmed (Ashby ApiJobPosting GraphQL returned live JSON 2026-06-15)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | FDE — Zeit AI deploying autonomous data agent into European enterprises |
| Domain | Data agent — connecting ERPs/CRMs/spreadsheets/internal DBs, surfacing answers + workflows for non-technical users |
| Function | Deploy + translate — customer-facing problem solving, feeds product loop |
| Seniority | IC (no explicit level; YC S24 startup) |
| Remote | Munich primary hub (in-person), SF off-sites |
| Comp | €95K – €270K + €15K – €150K equity + €5K referral bonus |
| TL;DR | YC S24 European data-agent startup hiring an FDE in Munich. Strong arc match (customer-facing, end-to-end ownership, agentic data systems) — but the stack is **TypeScript end-to-end + SQL/Postgres**, not Deepak's Python/LLM-stack core. In-person Munich + visa add friction. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| Work directly with customers without heavy hand-holding | Vanguard partnerships across 20+ teams; Progress healthcare clients | ✅ Buena |
| Solve messy real-world data problems | RAG over millions regulatory docs; agentic decomposition; structured eval | ✅ Fuerte |
| Think in workflows + systems | 12 APIs, conductor–subagent orchestration, fault-tolerant pipelines | ✅ Fuerte |
| Production reliability mindset | 99.9% uptime, p95 1.5s → 800ms; −60% failed runs | ✅ Fuerte |
| SQL required | SQL in stack; PostgreSQL + Spark + Databricks | ✅ Fuerte |
| TypeScript strong plus (end-to-end TS, React) | TypeScript in stack but not primary; Python is primary | ⚠️ Parcial |
| Postgres + production data systems | PostgreSQL + Redis + MongoDB; data lineage | ✅ Fuerte |
| Data pipelines + integrations + reliable workflows | Spark, Kafka, Databricks; automation infra (−60% failed runs) | ✅ Fuerte |
| Translate product feedback → engineering | Founder/IC ownership, cross-team Vanguard partnerships | ✅ Buena |
| Munich relocation / in-person collaboration | F-1 OPT US-based — would need Blue Card + relocation | ⚠️ Hard verify |

**Gaps y mitigación:**
1. **Munich in-person + Germany work authorization** — *Verify gap.* Mitigación: EU Blue Card available for STEM MS holders with offer ≥ €43,800; Zeit AI says "we help you relocate" — possible. F-1 OPT US doesn't transfer; full relocation required.
2. **TypeScript end-to-end (frontend + backend)** — *Soft gap.* Mitigación: Deepak has TS/React in stack but Python-first track record. Frame Python+SWE foundation + TS familiarity; ramp expectation on TS-backend deepening in first months.
3. **Pure data-agent product focus (vs LLM/RAG enterprise)** — *Soft gap.* Mitigación: RAG + agentic + data-pipeline experience translates directly; reframe Progress + Vanguard as "data agent" precursors.

## C) Nivel y Estrategia

1. **Nivel detectado:** IC FDE (range €95k–€270k is broad → spans junior to senior). **Nivel del candidato:** Mid-to-senior by outcomes; at-level for IC band.
2. **Vender senior sin mentir:** Lead with customer-facing impact (Vanguard 20+ teams, healthcare client work) + ownership mindset (founder track + end-to-end pipelines). Comp band suggests they up-level for proof of impact.
3. **Si me downlevelan:** Equity range is meaningful (€15k–€150k) — negotiate on equity + relocation package rather than narrow base.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Zeit AI FDE Munich | €95k–€270k base + €15k–€150k equity + €5k referral | Ashby JD |
| Munich Mid SWE | €70k–€110k base | Levels.fyi DE 2026 |
| Munich Senior SWE | €110k–€160k base | Levels.fyi DE 2026 |
| YC S24 batch funding | Standard €375k YC + post-batch round common | YC public 2026 |
| EU Blue Card threshold | €43,800/yr (STEM); 3-yr permit | German federal labor agency 2026 |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking & regulated enterprises" | "Customer-facing AI engineer — ship data + agent systems end-to-end; SQL/Postgres + TS familiarity; founder-grade ownership" | Mirror FDE + Zeit's customer-end-to-end framing |
| 2 | Skills front | "GPT-4o, GPT-5, Claude, Gemini" | Lead with "SQL, PostgreSQL, data pipelines (Spark/Kafka/Databricks)" then LLM stack | Front-load data systems (Zeit's core) |
| 3 | Vanguard bullet | "20+ teams partnerships" | "Partnered with 20+ internal teams as customer-facing AI engineer; translated business asks into 25+ agents" | Make customer-translation explicit |
| 4 | Add TS line | Implicit in stack | Add "TypeScript + React in production stack; full-stack delivery" | Address Zeit's "TS end-to-end" expectation |
| 5 | Footer | "Kent, OH" | "Kent, OH — open to Munich relocation (EU Blue Card eligible)" | Address location directly |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R |
|---|-----------------|-----------------|
| 1 | Solve messy real-world data problems | **S:** Healthcare doc RAG over millions of regulatory docs. **T:** Lift answer relevance, cut hallucination on domain queries. **A:** Hybrid retrieval + cross-encoder rerank + chunking strategy + eval. **R:** 92% precision, −40% hallucination. **Reflection:** Document chunking strategy matters more than model swap. |
| 2 | End-to-end customer ownership | **S:** Vanguard 25+ agents across 20+ teams. **T:** Take feature ask → production agent without intermediary. **A:** Built APIs, eval, observability, model routing. **R:** 100K+ req/day, 99.9% uptime. **Reflection:** Owning the eval framework was what made the agents trustworthy. |
| 3 | SQL + production data systems | **S:** Vanguard backend services. **T:** Reliable data pipelines for AI agents. **A:** PostgreSQL + Spark + Kafka with monitoring + backfill discipline. **R:** Sustained ingestion at scale. **Reflection:** Schema discipline upstream prevents agent hallucination downstream. |
| 4 | Reliable workflows + fault tolerance | **S:** Progress automation infra. **T:** Reduce production failures. **A:** Scheduled batch + exponential-backoff retries + alerting. **R:** −60% failed runs. **Reflection:** Most "AI failures" are actually pipeline failures. |
| 5 | Bridge non-technical user ↔ system | **S:** Healthcare clinician partners at Progress. **T:** Translate clinician questions into RAG retrieval logic. **A:** Domain glossary co-design + eval rubric ownership. **R:** Adoption + 92% precision. **Reflection:** Building the eval rubric with the SME beats showing them metrics later. |
| 6 | Translate insights back into product | **S:** Vanguard model-routing decision. **T:** Pick model per workflow. **A:** Built customer-aligned eval (cost-per-success), shared back to product. **R:** +27% task success on eval set. **Reflection:** Business-aligned eval metrics outlast model swaps. |

## G) Posting Legitimacy

**Assessment:** Trusted

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Ashby ApiJobPosting JSON returned today | Positive |
| Description quality | Specific: TypeScript end-to-end, SQL/Postgres, ERP/CRM data, customer-facing | Positive |
| Comp transparency | Explicit €95k–€270k + equity + referral | Positive |
| Company footprint | YC S24 (Summer 2024) batch — public YC listing | Positive |
| Reposting | First appearance in scan-history | Neutral |
| Visa/relo | "We help you relocate" — credible for STEM Blue Card path | Positive |

**Context Notes:** Real YC S24 startup; legitimate posting. Main constraint is relocation + TS-vs-Python language mismatch, not legitimacy.

## H) Draft Application Answers

(Score 3.1/5 ≥ 3.0 — PDF generated. Score < 4.5 — full draft answers skipped. Discuss relocation + Blue Card timing before deep investment.)

---

## Keywords extraídas

forward deployed engineer, FDE, autonomous data agent, TypeScript, React, SQL, PostgreSQL, ERP, CRM, spreadsheets, data integrations, workflows, customer-facing, Munich, Germany, YC S24, end-to-end ownership, non-technical users, product translator
