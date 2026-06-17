# Evaluación: Crypto Finance AG — AI Engineer

**Fecha:** 2026-06-17
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / MLOps Engineer
**Score:** 3.0/5
**URL:** https://jobs.workable.com/view/57kACWxhTK7yjx8riXmu16/hybrid-ai-engineer-in-z%C3%BCrich-at-crypto-finance-ag
**Legitimacy:** High Confidence
**Location:** Zürich, Switzerland (Prime Tower) — Hybrid; office-based primary
**Region:** Intl
**PDF:** output-intl/2026-06-17/cv-deepak-mallampati-crypto-finance-2026-06-17.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (primary) + AI Platform / MLOps (secondary) |
| Domain | Institutional digital-asset / crypto financial services (Deutsche Börse Group subsidiary) |
| Function | Build + own (production data + AI + AI approval ops) |
| Seniority | 3–6 yrs; "flexible on title" |
| Remote | Hybrid; Prime Tower Zürich primary |
| Team size | Not disclosed; data + AI team within Deutsche Börse Group |

**TL;DR:** Crypto Finance AG (Deutsche Börse Group) is hiring an AI Engineer to build LLM applications, RAG, structured extraction, AI agents, and ELT pipelines on a modern data stack (Dagster + SQLMesh + dlt + BigQuery). Strong tech match. The hard blocker is Swiss work authorization (Swiss permit or EU/EFTA citizenship) — Deepak is F-1 OPT US.

## B) Match con CV

| JD requirement | CV proof (line) |
|----------------|----------------|
| 3-6y relevant experience | cv.md L22-55 = ~4y |
| Production LLM applications | cv.md L25 (agentic LLM systems in prod) + L47 (12 APIs, p95 800ms) |
| Structured extraction | cv.md L13 (NER, Text Classification) + L55 (BERT/RoBERTa NER 89% F1 on financial datasets) |
| Agentic patterns | cv.md L25 (conductor-subagent agentic framework) |
| RAG concepts | cv.md L26 (cross-encoder rerank RAG over healthcare corpora) |
| Evaluation discipline | cv.md L29 (RAGAS, BERTScore, custom domain metrics) |
| Hallucination handling | cv.md L8 (40% hallucination reduction) + L26 (materially reduce hallucination) |
| Python production-ready | cv.md L18 (Python, FastAPI) |
| SQL (window functions, joins) | cv.md L16 (PostgreSQL); SQL implicit across data eng experience |
| Orchestrators (Dagster/Airflow/Prefect) | cv.md L28 (scheduled batch orchestration + exponential-backoff retry) — Dagster/Airflow not named explicitly |
| Transformation frameworks (SQLMesh/dbt) | — (no dbt/SQLMesh shipped) |
| GCP / BigQuery | cv.md L15 (GCP Vertex AI) — BigQuery not explicit |
| AI inventory + AI approval ops | cv.md L48 (partnered with 20+ teams on AI platform) + L29 (eval framework) — adjacent |
| Regulated financial services exposure (nice) | cv.md L8 (banking and regulated enterprises) + L55 (Emerson NER on financial datasets) |

**Gaps:**
1. **Swiss work auth** (HARD BLOCKER) — JD: "Work authorization in Switzerland (Swiss permit or EU/EFTA citizenship)". F-1 OPT US does NOT satisfy. *Mitigation:* none — unless Crypto Finance sponsors a Swiss B-permit (rare for non-EU mid-IC). Apply only if recruiter confirms sponsorship.
2. **Dagster + SQLMesh + dlt + BigQuery** stack — specific data stack not in Deepak's resume. *Mitigation:* batch orchestration experience transfers; ramp Dagster + SQLMesh in 2-3 weeks.
3. **German language** (soft) — listed as nice-to-have; English proficiency is sufficient for the role per JD.
4. **Crypto/digital assets domain** (medium) — Deepak is healthcare + finance, not crypto. *Mitigation:* finance domain transfers; crypto-specific terms ramp 2-3 weeks.

## C) Nivel y Estrategia

**Detected level:** Mid-IC (3-6y, flexible on title). Deepak's level matches.

**Plan "vender senior sin mentir":**
- Lead with Progress agentic + RAG + 42% token reduction = the "production data solutions including AI agents + RAG + structured extraction" pattern they describe.
- Frame Vanguard 12 APIs + safeguards + eval framework as the "AI approval operational process" analog.
- BERT/RoBERTa 89% F1 on financial NER (Emerson) = direct structured-extraction proof in finance.

**Plan "si me downlevelan":** "Flexible on title" = mid band; downlevel risk low. If sponsorship is the gating issue, ask if a remote-contractor structure is possible.

## D) Comp y Demanda

| Source | Range |
|--------|-------|
| Glassdoor (Zurich AI Eng mid-IC 2026) | CHF 110-160K (~$125-180K USD) |
| Levels.fyi (Zurich AI mid-IC, fintech) | CHF 120-170K base |
| Crypto Finance / DB Group bands | CHF 115-160K + bonus typical |
| Levels.fyi (Switzerland AI Eng 4y) | CHF 125-150K base |

JD does not disclose. Estimate: **CHF 120-155K** base. Zurich comp is high; cost of living offsets.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years..." | "Applied AI engineer building production LLM systems for regulated financial services — RAG, agentic workflows, structured extraction, and the eval discipline that keeps them shippable." | Mirror Crypto Finance's exact framing. |
| 2 | Skills order | LLMs first | Lead with "LLM applications, structured extraction (NER 89% F1), RAG, agentic workflows, eval discipline; Dagster-adjacent orchestration, BigQuery-adjacent (GCP)" | JD names these. |
| 3 | Emerson bullet | "BERT/RoBERTa NER 89% F1 on financial datasets" | Promote to top of experience (proves structured-extraction in finance) | JD's strongest signal. |
| 4 | Progress bullet | "agentic LLM systems" | Append "with structured-output contracts suitable for regulated approval workflows" | Mirror "AI approval operational process". |
| 5 | Footer | "Kent, OH" | Add "Open to relocation Zürich pending visa sponsorship" | Surface the auth blocker honestly. |

LinkedIn: Headline "Applied AI Engineer | RAG + Agentic Systems for Regulated Finance"; Featured: Vanguard + Emerson NER.

## F) Plan de Entrevistas

| # | JD Req | STAR+R | S | T | A | R | Reflection |
|---|--------|--------|---|---|---|---|------------|
| 1 | LLM applications in production | Progress agentic | Healthcare workflows needed reliable LLM outputs | Ship agentic system with safety + eval | Conductor-subagent + structured contracts + RAGAS | 42% token reduction, accuracy held | Production LLMs are 80% contract + eval, 20% prompt |
| 2 | Structured extraction | Emerson financial NER | Pipeline-storage tickets had unstructured operational notes | Extract entities at production scale | BERT/RoBERTa fine-tune on domain corpus | 89% F1 on custom NER | Domain corpus quality > model size for NER |
| 3 | RAG concepts + hallucination | Progress healthcare RAG | Clinical Q&A hallucinated on long docs | Cut hallucination + ground | Dense retrieval + cross-encoder rerank + RAGAS | Hallucination materially down | Rerank > chunk size for dense regulated text |
| 4 | Evaluation discipline | Vanguard eval harness | 25+ agents on multiple LLM providers | Pick model per workflow honestly | Built eval + cost tracking per agent | 27% task-success lift | Eval-driven model selection > vibes every time |
| 5 | Agentic patterns | Progress conductor framework | Multi-step workflows hit context limits | Token-efficient agent architecture | Conductor decomposes into context-scoped subagents | 42% token reduction | Token budgets are an architecture problem |
| 6 | Data orchestration (Dagster-adjacent) | Progress batch infra | Pipelines failing silently | Fault-tolerant scheduled orchestration | Cron + exponential backoff retry + monitoring | 60% reduction failed runs | Backoff is cheaper than alerting fatigue |
| 7 | Regulated/financial exposure | Emerson + Vanguard | Financial NER + banking compliance LLM | Ship compliant AI in regulated domain | Built domain-specific NER + safeguards + HIPAA/SOC2 alignment | 89% F1 + 42% unsafe-output reduction | Regulated industries reward eval discipline more than novelty |

Case study: **Emerson financial NER + Progress agentic stack** — together they show regulated structured-extraction + agentic + RAG in one engineer.

Red-flag: "Why crypto?" → "I don't need to be a crypto native to build the AI substrate. The shape is regulated finance — structured extraction, agent approval flow, eval discipline. That's the shape I've shipped at Emerson (NER 89% F1) and Vanguard (LLM safeguards 42%)."

Red-flag: "Swiss work permit?" → "I'm US-based on F-1 OPT. I'd need Swiss B-permit sponsorship; willing to relocate Zürich. If sponsorship isn't on the table, can we discuss a remote contractor structure?"

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Page load + apply button | Active Workable listing, direct apply | Positive |
| Tech specificity | Dagster, SQLMesh, dlt, BigQuery, RAG, structured extraction — high specificity | Positive |
| Realism | 3-6y "flexible on title" + concrete stack + concrete responsibilities | Positive |
| Internal contradictions | None | Neutral |
| Company hiring signals | Crypto Finance AG is a real Deutsche Börse Group subsidiary; legitimate regulated entity | Positive |
| Repost check | Posted June 2, 2026 — recent | Positive |
| Salary transparency | Not disclosed (Switzerland allows omission); Deutsche Börse bands published elsewhere | Neutral |
| Work auth clause | Explicit Swiss-permit requirement = legitimate filter | Neutral |
| "Prime Tower 24th floor" detail | Specific office location adds authenticity | Positive |

**Context notes:** Real opening at a regulated subsidiary of a major European exchange. Legitimacy is high; the blocker is the Swiss permit requirement.

## H) Draft Application Answers

(Score 3.0 — short drafts)

**Q: Why Crypto Finance?**
> Regulated digital assets + Deutsche Börse parentage = the kind of environment where AI compounds when it's shipped with eval discipline. I've been doing exactly this shape: agentic + RAG + structured extraction + safeguards in healthcare and banking. The Dagster + SQLMesh + BigQuery stack is one I can ramp on quickly; the AI part I already run.

**Q: Swiss work permit?**
> I'm US-based on F-1 OPT — I'd need Swiss B-permit sponsorship. I'm open to relocation if Crypto Finance sponsors; otherwise happy to discuss a contractor structure if that fits compliance.

**Q: Crypto experience?**
> No crypto-specific work yet. My finance NER work at Emerson (89% F1 on domain text) and banking compliance LLM work at Vanguard (HIPAA/SOC 2 + safeguards) are the closest analogs. Crypto-specific terminology and regulatory regime I can ramp in 2-3 weeks.

---

## Keywords extraídas

AI Engineer, LLM applications, structured extraction, NER, RAG, agentic patterns, evaluation discipline, hallucination handling, Python, SQL, Dagster, SQLMesh, dlt, BigQuery, GCP, regulated financial services, crypto, digital assets, Deutsche Börse, Switzerland, Crypto Finance AG, AI approval operations
