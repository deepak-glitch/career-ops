# Evaluación: PitchBook Data — Machine Learning Engineer

**Fecha:** 2026-05-05
**Arquetipo:** ML Engineer (Applied AI Systems) + GenAI/LLM Hybrid
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/pitchbookdata/jobs/4614594006
**Legitimacy:** High Confidence
**Location:** Seattle, WA — On-site 5 days/week
**PDF:** output/2026-05-05/cv-deepak-mallampati-pitchbook-data-ml-engineer-2026-05-05.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) — fintech/PE-data NLP + GenAI + LLM |
| Domain | Capital-markets data platform (private/public co. data) |
| Function | Build — end-to-end ML model lifecycle (architecture → training → deployment → maintenance) |
| Seniority | Mid — 2+ years SWE/ML, BS+ |
| Remote | **On-site Seattle 5d/wk** (no remote) |
| Team | Product Development, Engineering org |
| Comp | $125,000–$180,000 base + 10% target bonus |
| Posting freshness | Posted 2025-11-17, last updated 2026-04-02 — ~6 months old |
| TL;DR | NLP/GenAI/LLM ML engineering on PitchBook's capital-markets platform, requiring U.S. work authorization, mandating Seattle on-site 5 days a week. |

## B) Match con CV

| JD Requirement | CV Match | Source |
|----------------|----------|--------|
| 2+ yrs SWE/ML | 2.5+ yrs (Progress + Suvidha + ESI) | cv.md L8, L23 |
| Python + SQL | Python, T-SQL, PostgreSQL, SQLite | cv.md L12 |
| ML frameworks (TensorFlow, PyTorch, scikit-learn) | scikit-learn, XGBoost, PyTorch, HF Transformers | cv.md L14 |
| Production GenAI/LLM | RAG (~35% precision), agentic LLM workflows (>30% hallucination reduction), grounding (>90%) | cv.md L25-26 |
| NLP / generative AI | Suvidha transformer-based hierarchical video summarization (5,000+ sessions, 60-70% review-time reduction); RAG semantic chunking | cv.md L44-46 |
| Cloud (Docker, Kubernetes) | Docker + FastAPI + structured logging + load sim | cv.md L17, L28 |
| End-to-end ML lifecycle | Healthcare ML pipelines: data → preprocessing → model → serving → monitoring | cv.md L25-30 |
| Cross-functional collaboration | HIPAA stakeholder docs + audit trails + system-limitation docs | cv.md L30 |
| U.S. work authorization | F-1 OPT (currently authorized; future sponsorship needed) | cv.md L98 |

**Gaps:**

1. **Seattle on-site 5d/wk relocation** — Hard constraint. Mitigation: Open to relocation; ask in screen if hybrid is negotiable post-onboarding (PitchBook Seattle HQ).
2. **PE/capital-markets domain unfamiliar** — Soft. Mitigation: Frame financial data as analogous to healthcare claims (structured + regulatory); cite Agentic Healthcare Claims Processing schema-validated JSON contracts.
3. **TensorFlow primarily PyTorch+sklearn** — Soft. Mitigation: TF and PyTorch are interchangeable for GenAI; emphasize model-agnostic delivery experience.
4. **Future visa sponsorship** — JD says "U.S. work authorization required" (not "no sponsorship"). PitchBook is a Morningstar subsidiary with H-1B sponsorship history. Mitigation: Direct ask in screen.

## C) Nivel y Estrategia

- **JD level:** Mid (2+ yrs floor) — Deepak 2.5y matches exactly.
- **Strategy:** Lead with end-to-end ML lifecycle ownership in healthcare (regulated domain analog to PE/financial data). Frame Suvidha transformer summarization + Agentic Healthcare Claims as production NLP at scale.
- **If down-leveled:** Accept if $125-150K + relocation help + 6-month review for promotion.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD posted | $125-180K base + 10% bonus | Clear; on-site Seattle |
| Levels.fyi (PitchBook) | E3-E4: $130-180K base | Aligns w/ posted band |
| Glassdoor (PitchBook ML) | $135-175K | Similar |
| Seattle ML market 2026 | Mid: $140-180K, Senior: $180-240K | Posted band on the lower end |
| H-1B status (Morningstar/PitchBook) | Active sponsor (myvisajobs 2024-2025) | Verified employer of record |

## E) Plan de Personalización (Top 5 CV/LinkedIn)

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | "Applied AI / ML engineer (2.5+y) shipping production NLP, GenAI/LLM, and predictive ML in regulated healthcare domains" | Mirrors JD "NLP, generative AI, LLMs" + regulated-domain analog |
| 2 | Bullet ordering | Lead w/ Suvidha transformer summarization + RAG semantic chunking | NLP + GenAI 1:1 |
| 3 | Predictive ML | Frame patient no-show + care engagement scoring as "production ML model lifecycle (data → train → serve → monitor)" | JD "complete ML lifecycle" |
| 4 | Skills cluster | "NLP • Generative AI • LLMs • Production ML • Python • SQL • Docker • PyTorch" | ATS keyword density |
| 5 | Location line | "Kent, OH (open to Seattle relocation; F-1 OPT, sponsorship required)" | Pre-empt screen friction |

## F) Plan de Entrevistas — STAR+R

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|----------------|-------|---|---|---|---|------------|
| 1 | NLP / generative AI in production | Suvidha transformer summarization | 5,000+ recorded sessions clogged manual review (~30 min/video) | Reduce review time + capture key moments | Hierarchical abstractive summarization (transformer-based) + timestamp-aligned clip extraction + Flask API | 60-70% review-time reduction, ~85% alignment w/ human curation | Hierarchical chunking matters more than model size for long-context — same lesson now applied to RAG chunking |
| 2 | LLM application development | Healthcare RAG | Clinical knowledge retrieval drowned in irrelevant chunks | ~35% precision lift | Recursive semantic chunking + transformer embeddings + retrieval audit trails | ~35% retrieval precision, >90% grounded alignment | Eval-as-code from day 1 (not retrofit) saved 3 weeks of QA |
| 3 | Production ML model lifecycle | Patient no-show + care engagement | Class imbalance was pulling recall on high-risk patients | +15-20% recall on high-risk categories at >90% precision | Class weighting + stratified sampling + threshold calibration + walk-forward validation | 15-20% recall gains, precision held >90% | Calibration > raw model swaps; same threshold logic ports to fraud detection |
| 4 | Cross-functional collaboration | HIPAA-conscious governance | Stakeholders feared "AI hallucinations leak PHI" | Build trust + audit-ready system | De-identification + data-lineage docs + system-limitation docs + evaluation audit trails | Audit pass + governance approval | Documenting limits earns more trust than promising perfection |
| 5 | Cloud / Docker / K8s | FastAPI + Docker production packaging | Inference service had no observability | Reduce post-deploy defects | Structured logging + load simulation + Docker | ~30% post-deploy defect reduction | Logs first, dashboards second — never the other way |
| 6 | End-to-end model delivery | Agentic Healthcare Claims | Cascading hallucinations between agents corrupted final outputs | Schema-validated multi-agent pipeline | JSON contracts between agents + RAG-grounded CPT/ICD + similarity search for duplicates | Schema validation prevented cascading hallucinations | Contracts > prompts for multi-agent reliability |

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Posted 2025-11-17, last updated 2026-04-02; ~6 months old but actively maintained | Neutral (long roles legitimately stay open) |
| Apply button active | Greenhouse API returns active record | Positive |
| Tech specificity | Names Python, SQL, TensorFlow, PyTorch, scikit-learn, Docker, K8s — specific | Positive |
| Requirements realism | 2+ yrs + LLM production + cloud — realistic mid-level | Positive |
| Salary transparency | Range disclosed ($125-180K + 10% bonus) | Positive |
| Reposting | First time in scan-history | Positive |
| Layoffs | Morningstar (parent) had a 2024 reorg; PitchBook product dev unaffected per recent earnings | Neutral |
| Role-company fit | PitchBook is heavily NLP-driven (deal extraction, company description summarization) — natural fit | Positive |

**Context:** Morningstar is a public company; PitchBook is its capital-markets data subsidiary. The role is consistent with their public NLP/GenAI initiatives.

## H) Draft Application Answers

(Score 3.0/5 — borderline; skip H draft answers per oferta.md rules, generate only if score >= 4.5)

---

## Keywords extraídas

Machine Learning Engineer, NLP, generative AI, LLM, Python, SQL, TensorFlow, PyTorch, scikit-learn, Docker, Kubernetes, model deployment, ML lifecycle, GenAI, end-to-end, capital markets, fintech, Seattle, Morningstar
