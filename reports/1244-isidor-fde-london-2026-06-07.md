# Evaluación: Isidor — Forward Deployed Engineer

**Fecha:** 2026-06-07
**Arquetipo:** AI Solutions / Forward Deployed Engineer (primary) + AI Platform / MLOps Engineer (secondary — data pipelines + experiment automation infra)
**Score:** 3.2/5
**URL:** https://job-boards.greenhouse.io/isidor/jobs/4048584009
**Legitimacy:** High Confidence
**Location:** London, UK — In-person (potential relocation to San Francisco in H1 2026 with visa support)
**Region:** Intl
**PDF:** output-intl/2026-06-07/cv-deepak-mallampati-isidor-2026-06-07.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Forward Deployed Engineer + AI Platform/data-infra leaning |
| Domain | Data infrastructure for frontier AI labs + enterprise (model-in-the-loop / human-in-the-loop systems) |
| Function | Build + deploy (custom data pipelines, experiment automation, dataset curation) |
| Seniority | Entry-level / junior — explicitly welcomes new grads/juniors with intern or professional experience |
| Remote | On-site London (in-office); potential SF relocation H1 2026 w/ visa support |
| Team size | Pre-seed, founded Sept 2025; $3.6M raised (Gradient Ventures, futurepresent, Seedcamp + DeepMind/Perplexity angels) |
| Comp | "Competitive salary + equity" + relocation package + housing bonus (within 3 mi of office) — exact band not disclosed |
| TL;DR | First-engineers role building the data pipelines + model/human-in-the-loop infra that frontier labs use to collect, clean, and evaluate training data |

## B) Match con CV

| Requisito JD | Línea CV | Estado |
|---|---|---|
| Python for data manipulation, scripting, automation | "Python" (Languages) + "fault-tolerant automation infrastructure featuring scheduled batch orchestration and exponential-backoff retry logic…reducing failed production runs by 60%" | ✅ Strong |
| Custom data pipelines (collect, clean, process training/eval data) | "Engineered high-performance RAG pipelines over large-scale healthcare document corpora" + "data preprocessing — cleaning, normalization, transformation of raw sensor and operational datasets — to produce model-ready training pipelines" | ✅ Strong |
| Model-in-the-loop / human-in-the-loop systems | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework" (orchestration, HITL-adjacent) | ✅ |
| Tools to automate experiments (safety, interpretability, alignment) | "structured LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics)…to benchmark model iterations pre-deployment" | ✅ (eval/experiment tooling) |
| Dataset prep with consistency/accuracy checks | "curated 361-example instruction dataset" for QLoRA fine-tune; privacy-preserving clinical dataset curation (k-anonymity/l-diversity) | ✅ |
| ML workflows (feature engineering, dataset curation, evaluation) | Emerson feature engineering + Kent State privacy–utility scoring framework | ✅ |
| Research collaboration / ambiguous problems | "ML & Gen AI Research Assistant — Kent State" + IEEE-format conference paper authored | ✅ |
| New grad / junior level | M.S. CS 2025 + 4+ yrs cumulative — fits "junior with professional experience" cleanly | ✅ |

**Gaps:**
1. **UK work authorization (hard blocker for the immediate role).** Deepak is on F-1 OPT in the US; the role is London in-person *now*. SF relocation is only "potential" in H1 2026. *Mitigation:* the JD explicitly offers visa support + relocation; lead the screen by asking whether the SF-track can be front-loaded, and frame the US base as an asset for the planned SF expansion. This is the dominant score cap.
2. **AI-safety / interpretability / alignment domain.** Deepak's infra/data/eval skills transfer directly, but he has no alignment-research-specific track record. *Mitigation:* the role is infrastructure-for-research, not research itself — emphasize the eval-harness + privacy-preserving-ML work as the closest analog.
3. **Very early stage (pre-seed, ~Sept 2025).** Ambiguity + breadth risk. *Mitigation:* career-ops + MangaLens demonstrate solo 0→1 shipping cadence.

## C) Nivel y Estrategia

- **JD level:** Entry/junior, FDE/data-infra. Matches Deepak's natural level for this archetype.
- **Sell at level:** "I build the unglamorous data + automation plumbing that makes models reliable — RAG pipelines over messy healthcare corpora, an eval harness (RAGAS/BERTScore) that catches regressions pre-deploy, and batch orchestration that cut failed runs 60%. That's exactly the model-in-the-loop infra you're describing."
- **Downlevel plan:** Already junior-titled — no downlevel risk. Negotiate the SF-relocation timeline and visa-support specifics in writing up front.

## D) Comp y Demanda

| Metric | Source / Note |
|---|---|
| "Competitive salary + equity" + relocation + housing bonus | JD (exact band not disclosed) |
| Funding | $3.6M pre-seed — Gradient Ventures, futurepresent, Seedcamp + angels from Google DeepMind, Perplexity, Motive, Episode 1 ([Bright Network listing](https://www.brightnetwork.co.uk/graduate-jobs/isidor/forward-deployed-engineer-london-2026), [isidor.ai](https://www.isidor.ai/)) |
| London junior eng / FDE market | ~£45–70K base typical for junior eng at funded London startups (2026); meaningful equity at pre-seed |
| Demand | FDE/data-infra for frontier labs is a hot category; well-syndicated pre-seed signals real, funded hiring |

Comp band not disclosed — flag to clarify early. Equity meaningful at pre-seed first-engineer stage.

## E) Plan de Personalización

| # | Sección CV | Cambio |
|---|---|---|
| 1 | Summary | Lead with "AI/ML engineer who builds the data + experiment-automation infrastructure behind production AI — RAG pipelines, eval harnesses, and fault-tolerant orchestration." De-emphasize banking framing for this role. |
| 2 | Skills ordering | Move Data Engineering (pipelines, Pandas/NumPy, Spark) + MLOps (Docker, observability) + RAGAS/eval above the GenAI list |
| 3 | Progress Solutions bullets | Reorder: automation infra (60% fewer failed runs) + eval/monitoring framework first; orchestration second |
| 4 | Kent State research bullets | Promote — research-assistant + IEEE paper + dataset curation maps directly to "partner with AI research teams" |
| 5 | Footer | "US-based, F-1 OPT — open to UK/SF relocation with sponsorship" (acknowledge auth honestly for this Intl role) |

## F) Plan de Entrevistas

| # | JD requisito | Historia STAR+R | Reflection |
|---|---|---|---|
| 1 | Custom data pipelines for training/eval data | Healthcare RAG corpus pipeline (dense retrieval + cross-encoder rerank) | Data cleaning + chunking strategy drove relevance more than the model choice |
| 2 | Automate experiments / reliability | Batch orchestration + exponential-backoff retry, 60% fewer failed runs | Idempotent retries + dead-letter logging mattered more than raw throughput |
| 3 | Dataset curation w/ accuracy checks | 361-example QLoRA instruction set (Qwen3-27B on H100) | 361 curated examples beat thousands of noisy ones — quality > volume |
| 4 | Eval / interpretability tooling | RAGAS + BERTScore + custom-metric eval harness | Golden-set creation must precede any deployment; build eval week-1 |
| 5 | Privacy / sensitive data handling | k-anonymity + l-diversity + DP clinical pipeline (re-ID 3.38%→0.32%) | Threat-model first, then pick technique; DP's utility cost is steep |
| 6 | Ambiguous, research-adjacent problems | Authored IEEE-format paper from a self-defined methodology | Writing the paper forced rigor the prototype hid |

**Case study to present:** the privacy-preserving clinical ML pipeline + eval harness — closest analog to "infra that makes model experiments trustworthy."
**Red-flag Qs:** "Are you authorized to work in the UK?" → honest: US F-1 OPT, open to relocation, asking about the SF-track timeline + visa support the JD mentions.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Freshness | Greenhouse posting live + active apply; mirrored on Bright Network graduate board (2026) | Positive |
| Description quality | Concrete: data pipelines, model/human-in-the-loop, experiment automation, named tech (Python), explicit junior/new-grad framing, relocation + housing detail | Positive |
| Funding / company | $3.6M pre-seed, named tier-1 backers (Gradient Ventures, Seedcamp) + DeepMind/Perplexity angels | Positive |
| Layoff signals | None — newly funded, hiring first engineers | Positive |
| Reposting | First time in tracker (newly discovered this run) | Neutral |
| Market context | First-engineer FDE/data-infra at a funded pre-seed is a real, ready-to-hire seat | Positive |

**Context:** Very early stage means scope will be broad and undefined — expected and weighted lightly per startup edge-case guidance.

## H) Draft Application Answers

*Score 3.2 < 4.5 threshold — skipped.*

---

## Keywords extraídas

forward deployed engineer, data pipelines, data infrastructure, model-in-the-loop, human-in-the-loop, experiment automation, dataset curation, model evaluation, Python, data wrangling, ML workflows, feature engineering, RAG, interpretability, alignment, frontier AI labs, London, pre-seed startup
