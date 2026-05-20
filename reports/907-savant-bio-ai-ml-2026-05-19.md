# Evaluación: Savant Bio — AI/ML Engineer

**Fecha:** 2026-05-19
**Arquetipo:** ML Engineer (Applied AI Systems) + Generative AI / RAG Engineer
**Score:** 3.8/5
**URL:** https://job-boards.greenhouse.io/savantbio/jobs/7154608
**Legitimacy:** High Confidence
**Location:** 151 W 42nd St, New York, NY 10036 (NYC, on-site implied; no remote spec)
**Region:** US
**PDF:** output/2026-05-19/cv-deepak-mallampati-savant-bio-ai-ml-2026-05-19.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | ML Engineer (Applied AI Systems) + GenAI/RAG (hybrid) |
| Domain | Healthcare / Life Sciences (clinical text → structured data) |
| Function | Build (production ML pipelines + LLM inference) |
| Seniority | Mid (3+ years) |
| Remote | NYC HQ (151 W 42nd St); remote status not stated → assume hybrid/on-site |
| Team size | Startup (Roivant-backed) |
| Comp | $130K–$180K + meaningful equity + discretionary bonus |
| TL;DR | Roivant-backed healthcare startup turning unstructured clinical text into structured data using LLMs + spaCy + PyTorch + HuggingFace — direct 1:1 fit with Deepak's healthcare RAG and clinical-NLP profile. |

## B) Match con CV

| Requirement | Match | CV evidence |
|-------------|-------|-------------|
| 3+ years building/deploying ML/AI systems | Stretch (2.5y) | Jr AI/ML Engineer Trainee at Progress Solutions Jul 2025–present (clinical RAG, agentic workflows, FastAPI/Flask production) |
| Strong Python (production-quality) | Direct | Python + FastAPI/Flask + Docker production deployments; "~30% post-deploy defect reduction" |
| PyTorch, Hugging Face, spaCy | Strong | Skills list: "scikit-learn, XGBoost, PyTorch, Hugging Face Transformers, Diffusers"; spaCy gap (mitigation: HF NER pipelines + clinical tokenization analogs) |
| Large-scale unstructured/semi-structured data | Direct | EHR extracts + appointment histories + support ticket logs (dataset reliability >98%); Suvidha 5,000+ video transcripts |
| LLM knowledge (prompt engineering, fine-tuning) | Direct | Healthcare RAG (~35% retrieval precision gain); agentic LLM workflows; prompt engineering; structured outputs |
| Fast-paced ambiguous environments | Direct | Manga Lens shipped solo to Chrome Web Store; Agentic Pixel Engine; founder narrative |
| **Preferred: Clinical/healthcare data (EMRs, registries, labs)** | Direct | HIPAA-conscious EHR work + Healthcare Claims agentic pipeline + Patient Records app |
| **Preferred: Model evaluation/quality benchmarking** | Direct | RAG eval (>90% grounded-response alignment); 15-20% recall gains; precision >90% with class weighting |
| **Preferred: HIPAA / de-identification / compliance** | Direct | "HIPAA-conscious data governance; de-identification, lineage docs, audit trails" |
| **Preferred: Early-stage startup / small team** | Direct | Solo-shipped Manga Lens; founder of E-Farming marketplace |

**Gaps:**
1. **0.5y experience deficit** (2.5 vs 3+) — Soft; mitigation: depth of healthcare-AI proof points (35% retrieval, 30% hallucination reduction, 20% recall gain) and Master's degree exceed 3y junior bar.
2. **spaCy specifically** — Soft; HuggingFace NER + transformer-based clinical text extraction maps directly; can demo working clinical-NER prototype in 1 weekend.
3. **NYC on-site** — Relocation/F-1 OPT viable from Kent, OH; confirm relocation support in screen.

## C) Nivel y Estrategia

- **Detected level:** Mid IC (3-6 years implied by "3+" + "deploy ML/AI systems"); Deepak naturally fits this band given healthcare-AI depth.
- **Vender mid sin mentir:** Lead with "shipped clinical RAG with 35% retrieval precision gain in HIPAA-conscious environment; built agentic Healthcare Claims pipeline with schema-validated JSON contracts; Master's CS." This is mid-IC depth.
- **Downlevel plan:** Accept if comp lands $130-150K with 6-month review for $160K+ and explicit fine-tuning ownership.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD stated | $130K–$180K + meaningful equity + discretionary bonus | NYC band, mid-IC |
| Levels.fyi NYC ML Eng L3-L4 | $150K–$220K total | Mid-range; SavantBio offer in market |
| Glassdoor NYC clinical ML | $140K–$190K base | Aligns with mid-IC healthcare AI |
| Demand trend | High | Roivant ecosystem expanding (NASDAQ:ROIV); clinical NLP/LLM demand growing post-2024 GenAI wave |

Comp is fair for NYC mid-IC healthcare AI. Equity from Roivant-backed startup carries upside risk; verify equity vest terms.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic "Applied AI engineer" | "Healthcare AI/ML engineer building clinical RAG + LLM-driven extraction pipelines with HIPAA discipline" | Mirrors JD's "extract structured insights from messy, high-stakes records" |
| 2 | Bullet order | RAG first | RAG + clinical extraction first, then agentic Claims, then predictive ML | JD prioritizes clinical text extraction |
| 3 | Skills | Comprehensive list | Bold "spaCy / HuggingFace NER / fine-tuning / HIPAA / clinical NLP" | ATS terms match JD |
| 4 | Projects | Generic order | Lead with Healthcare Claims (multi-agent + schema validation + RAG over policy docs) | Direct analog to clinical extraction |
| 5 | Cover note | n/a | "Roivant-backed clinical-NLP fits my track record of 35% retrieval precision + agentic Claims with audit-ready reasoning traces" | Earns recruiter eye |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|------------------|-----------------|---|---|---|---|------------|
| 1 | Extract insights from clinical text | Clinical RAG @ Progress Solutions | EHR notes + policy docs noisy/unstructured | Build retrieval that surfaces correct clinical context | Recursive semantic chunking + transformer embeddings + reranking | 35% retrieval precision, 30% irrelevant-result reduction | Chunk-size + reranker matters more than embedding model choice |
| 2 | Production-ready maintainable code | FastAPI/Flask inference packaging | Researchers shipped models as notebooks → fragile | Containerize + logging + load-sim | Docker + structured logs + load test | 30% post-deploy defect reduction | Treat ML services like backend services from day one |
| 3 | Prompt strategies + model configs | Agentic Healthcare Claims | Cascading hallucinations across agents | Constrain intermediate outputs | Schema-validated JSON contracts between agents + RAG-grounded CPT/ICD | Eliminated cascade failures; audit-ready traces | Schemas at every boundary > model upgrade |
| 4 | Monitoring/observability | Progress Solutions inference services | Silent failures in prod | Add observability | Structured logs + grafana-style dashboards + audit trails | 30% defect reduction; faster RCA | Observability is product, not afterthought |
| 5 | Information extraction / entity resolution | Healthcare Claims duplicate detection | Duplicate claims hidden in volume | ANN similarity + canonicalization | Vector ANN over claim embeddings | Explainable risk scores with similarity rationale | Choose explainable distance metric over black-box reranker |
| 6 | Working with clinical experts | HIPAA governance @ Progress Solutions | Clinicians distrust AI outputs | Add lineage + system-limitation docs | De-id pipeline + audit trail + clinician-facing docs | Adoption + trust gains | Document limitations BEFORE shipping, not after |
| 7 | Fast-paced ambiguous environment | Manga Lens solo ship | Greenfield, no PRD | Self-defined scope + ship-and-iterate | Manifest V3 + 4-provider multi-vendor abstraction | Live on Chrome Web Store | Constraint-driven scope keeps shipping velocity |

**Case study:** Lead with Agentic Healthcare Claims (schema-validated multi-agent + RAG over CPT/ICD + fraud risk scoring). Maps 1:1 with Savant's clinical-extraction + quality-control mandate.

**Red flag questions:**
- "Why not larger company?" → Roivant ecosystem = better learning at this stage than F500 NLP team.
- "How would you handle clinician pushback on AI outputs?" → Lineage + audit trails + explicit system limitations docs (lived experience).

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | URL active 2026-05-19; Greenhouse posting current | Positive |
| Apply button | Active application form | Positive |
| Tech specificity | Names PyTorch + HuggingFace + spaCy + LLM prompt engineering + fine-tuning + HIPAA + EMRs | Positive |
| Requirements realism | 3+ years aligned with $130-180K range | Positive |
| Salary transparency | Stated $130K–$180K + equity | Positive |
| Company funding | Roivant Sciences (NASDAQ:ROIV) backing — verified parent | Positive |
| Layoff/freeze signal | No 2026 Roivant or Savant Bio layoff news found | Positive |
| Reposting | New URL; no prior Savant Bio in scan-history.tsv | Positive |

**Context notes:** Roivant has historically launched and spun out healthcare AI ventures (Sotera, Datavant). Savant Bio fits this pattern — credible.

## H) Draft Application Answers

Not generated (score 3.8 < 4.5 threshold for full H block).

**Sponsorship note:** Application asks visa sponsorship question — state "Currently F-1 OPT (US-based, authorized to work immediately); will require H-1B sponsorship within 36 months." If sponsorship hard-no, defer.

---

## Keywords extraídas

clinical text, structured data, large language models, prompt engineering, fine-tuning, PyTorch, Hugging Face, spaCy, Python, production, information extraction, entity resolution, data quality, model inference, observability, HIPAA, de-identification, EMRs, clinical experts, healthcare data
