# Evaluación: Triomics — Research Engineer, Applied ML

**Fecha:** 2026-07-04
**Arquetipo:** ML Engineer (Applied AI Systems) ∩ Applied AI / LLM Engineer — clinical NLP + LLM
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/triomics/ab06d34e-b87f-42ae-a6ff-61777c23cd06
**Legitimacy:** Legit — Confident
**Location:** India Office — on-site (remote: false)
**Region:** Intl
**PDF:** output-intl/2026-07-04/cv-deepak-mallampati-triomics-research-engineer-applied-ml-2026-07-04.pdf
**Verification:** JD extracted via Ashby public posting API (`/posting-api/job-board/triomics`) — title, India-Office on-site location (`isRemote:false`), full responsibilities + expectations confirmed. Comp not disclosed. Net-new discovery this run (Level-3 Ashby search); not previously in scan-history.

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI) + Applied AI / LLM — build applied NLP/LLM systems for oncology workflows |
| Domain | Healthcare / oncology EHR AI (Triomics — agentic AI layer for cancer EHRs; MSK, Mount Sinai, Yale customers; YC + Lightspeed + General Catalyst) |
| Function | Build — clinical information extraction, RAG pipelines, fine-tuning experiments, evaluation, error analysis |
| Seniority | Early-mid IC — 1.5–4 yrs; "work with senior engineers"; module ownership |
| Remote | **On-site — India Office** (`isRemote:false`) |
| Team size | Not specified — collaborates with Clinical AI Data Specialists + ML Evaluation Engineers |
| TL;DR | Hands-on applied ML/LLM engineer building clinical-text extraction + RAG for oncology EHRs — an elite skills+domain match gated by an on-site-India location. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| **1.5–4 yrs ML / NLP / LLM / data-intensive SWE** | 4+ yrs production AI/ML across banking + healthcare | ✅ Strong |
| **Strong Python + messy real-world data** | 4+ yrs Python; clinical/regulated data pipelines; data cleaning/normalization at Emerson | ✅ Strong |
| **PyTorch, HuggingFace, embeddings, transformers, RAG, prompt eng, fine-tuning** | PyTorch/HF; QLoRA fine-tune Qwen3-27B on H100; healthcare RAG; BERT/RoBERTa NER | ✅ Strong (bullseye) |
| **precision/recall/F1, train/val/test, overfitting, error analysis, experiment tracking** | 89% F1 NER; RAGAS/BERTScore eval framework; privacy–utility scoring; MLflow/W&B | ✅ Strong |
| **Clinical information extraction / clinical text** | Healthcare RAG over clinical corpora; privacy-preserving clinical ML (hospital-readmission dataset) | ✅ Strong |
| **RAG pipelines, extraction logic, evaluation scripts** | Dense retrieval + cross-encoder re-ranking; RAGAS/BERTScore/custom-metric eval framework | ✅ Strong |
| **LangChain/LlamaIndex, vector DBs, spaCy, OCR, structured LLM outputs** (nice) | LangChain/LangGraph; FAISS/Pinecone/Weaviate; structured outputs — spaCy/OCR not explicit | ⚠️ Partial |
| **Docker, APIs, ML deployment, MLflow/W&B, data pipelines** (nice) | Docker/K8s; FastAPI; MLflow/W&B; Spark/Kafka pipelines | ✅ Strong |
| **On-site, India Office** | Candidate US-based (Kent, OH) on F-1 OPT; prior India experience (Emerson, Suvidha) | ❌ Geographic mismatch (see gaps) |

**Gaps + mitigation:**
1. **On-site India location** — *the dominant score driver.* Candidate is building a US career on F-1 OPT; an on-site-India role means leaving the US OPT path. Per work-auth policy, India is a soft blocker — scored, not vetoed — but on-site (not remote) makes it a hard geographic mismatch for a US-anchored candidate. Remote dimension scored low. Mitigation: only pursue if open to returning to India; candidate does have prior India work history (Emerson, Suvidha) so right-to-work is not the obstacle — career geography is.
2. **spaCy / OCR / document processing** (nice-to-have) — mitigation: surface BERT/RoBERTa NER + structured-output + clinical-corpus RAG as equivalent clinical-NLP proof; spaCy/OCR are fast ramps.
3. **Oncology-specific clinical knowledge** — mitigation: lead with regulated-healthcare AI depth (clinical RAG, privacy-preserving clinical ML) as transferable domain proof; JD explicitly welcomes "ability to learn clinical domain concepts."

## C) Nivel y Estrategia

- **JD level:** Early-mid IC (1.5–4 yrs, works with senior engineers). **Candidate level:** 4+ yrs — at the top of the band; skills exceed the stated floor.
- **Sell-without-lying:** This is an almost 1:1 skills+domain match — clinical-text RAG, NER/extraction, fine-tuning, eval frameworks, privacy-preserving clinical ML. Lead with the Progress healthcare RAG + Kent State clinical privacy pipeline (real clinical datasets, quantified privacy–utility trade-offs).
- **If down-leveled:** Not a level issue — the only real gate is the on-site-India geography, which is a candidate-preference decision, not a qualification gap.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (Applied ML, India, mid) | ~₹25–45 LPA typical India mid-ML/LLM range at funded startups | Market context (WebSearch) |
| Company | Triomics — YC + Battery/Lightspeed/General Catalyst-backed oncology-EHR AI; MSK/Mount Sinai/Yale customers; 10x YoY | JD + company profile |
| Demand | Clinical-NLP + LLM-in-oncology demand strong; "best-in-industry compensation" per JD | JD |

Comp not disclosed (JD says "best-in-industry compensation"). India ranges materially below US product comp; a US-anchored candidate would take a large geographic pay + career-path adjustment.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated GenAI framing | Add "clinical-text extraction + RAG over healthcare corpora; privacy-preserving clinical ML" | Mirror oncology-EHR clinical-NLP scope |
| 2 | Experience | Progress healthcare RAG bullet | Promote clinical extraction + error-analysis + eval framing to top | JD: extraction logic, evaluation, error analysis |
| 3 | Projects | Clinical privacy pipeline present | Elevate as flagship clinical-ML proof (real hospital dataset) | Direct clinical-text credibility |
| 4 | Skills | HF/transformers listed | Surface HuggingFace + embeddings + transformers + RAG up top | JD core stack |
| 5 | Footer | — | "US-based, F-1 OPT — honest re: India on-site relocation" | On-site India; transparency |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Clinical information extraction | Healthcare RAG + clinical NER | Unstructured clinical corpora | Grounded extraction/answers | Dense retrieval + re-ranking; BERT/RoBERTa NER | 92% precision; 89% F1 NER | Clinical text rewards extraction + grounding over raw prompting |
| 2 | RAG pipelines + evaluation scripts | LLM eval + monitoring framework | Regressions on domain queries | Benchmark iterations pre-deploy | RAGAS + BERTScore + custom metrics + dashboards | Regressions caught before release | Error analysis + evals are the reliability backbone in regulated domains |
| 3 | Messy real-world clinical data + privacy | Privacy-preserving clinical ML pipeline | Sensitive hospital-readmission data | Compliant analytics without PII exposure | k-anonymity + l-diversity + differential privacy | Re-ID risk 3.38%→0.32%, 99% baseline perf retained | Quantifying privacy–utility trade-offs is what makes clinical ML shippable |
| 4 | Fine-tuning experiments | QLoRA fine-tune Qwen3-27B | Controllable long-form generation | Fine-tune on curated instruction data | 4-bit QLoRA on H100, schema-conditioned | Working controllable generation + IEEE paper | Small, well-curated datasets + QLoRA beat brute force |
| 5 | Ownership of bounded modules | career-ops autonomous pipeline | Repetitive multi-step workflow | Own an end-to-end system | Built autonomous scan→score→apply pipeline | Unattended overnight operation | Module ownership means owning the eval + failure modes too |

**Case study:** Kent State clinical privacy pipeline — real hospital dataset, quantified privacy–utility, IEEE paper — the strongest signal for clinical-text credibility.
**Red-flag Qs:** "Can you relocate to / work from India on-site?" → answer honestly (currently US-based on F-1 OPT building a US career; prior India work history means right-to-work exists, but this is a geography decision). "Oncology background?" → transferable regulated-healthcare AI depth; eager to ramp oncology domain.

## G) Posting Legitimacy

**Assessment:** Legit — Confident

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on Triomics' Ashby board — served via public posting API, active req | Positive |
| Tech specificity | Very high — names PyTorch/HF, RAG, fine-tuning, error analysis, clinical extraction, eval/regression testing | Positive |
| Requirements realism | Coherent early-mid IC scope; 1.5–4 yrs matches stated tech; clear 6-month success criteria | Positive |
| Company | Triomics — real YC + Battery/Lightspeed/GC-backed oncology-EHR AI; named hospital customers (MSK, Mount Sinai, Yale) | Positive |
| Reposting | No prior Triomics entry in scan-history — first appearance | Neutral |
| Work-auth / location fit | On-site India — geographic mismatch for US-anchored F-1 OPT candidate | Concerning (candidate-specific) |
| Salary | Not disclosed ("best-in-industry") | Neutral |

**Context:** No ghost-job signals — highly specific clinical-NLP scope, coherent early-mid IC framing, real funded company with named hospital customers and detailed 6-month success criteria. The sole caution is candidate-specific: the on-site-India location conflicts with a US-based F-1 OPT career path. On pure skills+domain fit this is one of the strongest matches in the pipeline; the score reflects the geographic gate, not the qualification fit.

## H) Draft Application Answers

_(Score 3.1 < 4.5 — no drafts. PDF tailored. Elite skills+domain match, but confirm appetite for an on-site-India move before applying — the score is dragged almost entirely by geography, not fit.)_

---

## Keywords extraídas

Research Engineer, Applied ML, clinical NLP, LLM, RAG, retrieval-augmented generation, information extraction, oncology, clinical text, fine-tuning, QLoRA, PyTorch, HuggingFace, transformers, embeddings, prompt engineering, precision recall F1, error analysis, experiment tracking, MLflow, Weights & Biases, structured outputs, vector database, healthcare
