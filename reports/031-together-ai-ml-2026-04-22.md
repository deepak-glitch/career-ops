# 031. Together AI — Machine Learning / Research Engineer (New Grad)

**URL:** https://job-boards.greenhouse.io/togetherai/jobs/4835315007
**Score:** 3.5/5
**Location:** San Francisco, CA (on-site)
**Legitimacy:** High Confidence
**Verification:** confirmed (WebSearch mirror)
**PDF:** output/cv-deepak-mallampati-together-ai-ml-2026-04-22.pdf
**Date:** 2026-04-22

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) + Generative AI / RAG adjacent |
| Domain | Foundation model research infra (inference, training, algos, open-source models) |
| Function | Implement and optimize ML models; design experiments; maintain training/eval infra |
| Seniority | New Grad (Bachelor's, Summer 2026 expected grad) |
| Remote | On-site San Francisco |
| TL;DR | Research-adjacent ML engineering new-grad role at Together AI. Strong Python + ML fundamentals match; research-paper / distributed-training exposure is a bonus, not a blocker. Deepak has MS (2025 grad) + production ML; the JD targets Summer-2026 Bachelor's grads, which is a level/timing mismatch. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Bachelor's/equivalent in CS/ML by Summer 2026 | **OVER** | cv.md L91-92 MS Kent State (May 2025) — already graduated |
| Strong Python + ML frameworks (PyTorch, TensorFlow) | **STRONG** | cv.md L12 Python, L14 PyTorch, Hugging Face |
| Deep ML concepts (supervised/unsupervised, NN, RL) | **STRONG** | cv.md L14 scikit-learn, XGBoost, PyTorch, Transformers; L27 ML pipelines |
| Data structures / algos / software engineering | **STRONG** | cv.md L28 FastAPI services; L72 multi-agent pipeline |
| Design/run/analyze experiments | **STRONG** | cv.md L25-27 eval-driven RAG + recall/precision gains; L46 walk-forward validation |
| Open-source contributions / research papers | **PARTIAL** | cv.md L59-60 Manga Lens (shipped); no published papers |
| Large-scale distributed systems | **PARTIAL** | Docker + FastAPI; no Ray/Horovod/distributed training at scale |
| AI safety / societal impact | **PARTIAL** | HIPAA governance + grounding discipline; not safety-research specific |

**Gaps:**
1. **Grad timing / level:** JD targets Summer 2026 Bachelor's grads — Deepak is a May-2025 MS. Not a hard blocker but the program is tailored to earlier-career. Mitigation: apply as a new grad; highlight the 2.5+ yrs applied work as a maturity asset.
2. **Research paper publication:** Not in CV. Mitigation: Manga Lens (shipped, Chrome Web Store) + Agentic Claims pipeline serve as open-source/shipped-project proof; frame as "research-adjacent applied work."
3. **Distributed training at scale:** Docker + microservices are in CV, multi-GPU/multi-node training is not. Mitigation: call out YOLOv8 optimization + FastAPI production serving; honest ramp on distributed training frameworks.

## C) Nivel y Estrategia

- **JD level:** New Grad Bachelor's. **Deepak's natural level:** Junior-Mid Applied AI (MS + 2.5 yrs production).
- **Strategy:** Apply via this new-grad req (accepts equivalents). Lead with production ML shipped in regulated healthcare — most new-grad candidates won't have that. Frame Manga Lens + Dream Decoder as open-source-ethos proof.
- **If downleveled:** Accept if total comp is in the $150-200K range (peer SE-New-Grad posted that; this role likely similar). Ask for a 6-month research-track review.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Together AI SE New Grad US base | $150K-$200K + equity + benefits | JD sibling (same company) |
| ML Research Engineer New Grad SF market | $180K-$250K + equity common at AI labs | Levels.fyi / Blind |
| Demand | Very high — open-weights/inference frontier is hot | Market |

Match or exceeds Deepak's $100K-130K target. SF on-site required.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare focus | Lead with "Applied AI / ML engineer (MS + 2.5 yrs) who ships production RAG, agentic LLM workflows, and predictive ML with measurable eval gains. Comfortable with PyTorch, HF Transformers, Docker, FastAPI." | Mirror JD tech stack |
| 2 | Competencies | Generic | Elevate "ML / Research Engineering", "PyTorch & HF Transformers", "Experiment Design & Evaluation", "Open-Source Shipping" | JD literals |
| 3 | Projects order | Varied | Lead with Agentic Claims (RAG + multi-agent) + Manga Lens (shipped OS) + Pixel Agent (Stable Diffusion + LoRA) | Research-adjacent breadth |
| 4 | Experience bullets | Healthcare-first | Lead with eval/experiment discipline (walk-forward, class weighting, threshold calibration) | Research-methodology cues |
| 5 | Cover letter | N/A | "Together AI's open-weights + low-cost-inference thesis is the research direction I'd want to invest in. Healthcare RAG (~35% retrieval precision, >90% grounded alignment) + Agentic Claims (schema-validated JSON contracts, >30% hallucination reduction) + Manga Lens (shipped Chrome extension, 4 vision providers) show I can move from research to production fast." | Bridge applied -> research |

## F) Plan de Entrevistas

| # | Requisito JD | Historia | S | T | A | R | Reflection |
|---|-------------|----------|---|---|---|---|------------|
| 1 | Experiment design | IoT temp prediction (walk-forward validation) | Time-series forecasting for smart building | Validate models honestly | Walk-forward validation + lag features (n_in=6) + RF vs SVR vs linear | RF achieved ~20-30% lower MAE | Cross-sectional eval hides temporal drift |
| 2 | PyTorch / HF Transformers | Suvidha video summarization | 5000+ long videos, no summaries | Build transformer summarizer | Hierarchical summarization + timestamp alignment via HF Transformers | 60-70% review-time reduction, ~85% alignment | Long-context needs hierarchy, not bigger context |
| 3 | Research-adjacent shipping | Manga Lens Chrome extension | No one translates manga panels in real-time | Ship multi-provider vision app | 4 providers (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama), viewport-slice capture, coord remap | Shipped to Chrome Web Store, 29 site configs | Provider abstraction earned payoff; Ollama CUDA crash forced JPEG branch |
| 4 | Applied ML models (sklearn + XGBoost) | Patient no-show prediction | Recall on high-risk categories was weak | Raise recall without blowing precision | Class weighting + stratified sampling + threshold calibration | +15-20% recall, precision >90% | Threshold calibration first, retraining second |
| 5 | Open-weights / inference curiosity | Agentic Pixel Engine | Pixel character gen inconsistent across frames | Identity-consistent synthesis | SD + LoRA + ControlNet + OpenPose + latent-consistency + LLM orchestrator | Pose-controlled sprite sheets | Decomposing with an LLM orchestrator beats monolithic prompts |

**Case study:** Agentic Healthcare Claims — RAG-grounded reasoning + schema contracts + audit traces translate cleanly to "evaluation discipline for LLM research."
**Red-flag prep:**
- "Bachelor's by Summer 2026?" -> "MS May 2025 — the role accepts equivalents; I read this as a path for research-adjacent new-career-track engineers."
- "Distributed training?" -> "Production serving + Docker are shipped; multi-node training is a quick ramp; I'd want to learn it at Together."
- "Papers?" -> "Applied shipping over publishing — Manga Lens + Dream Decoder + Agentic Claims as proof of research-to-production."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active on Greenhouse | Positive |
| Apply button | Active | Positive |
| Tech specificity | PyTorch/TF, ML concepts, SWE principles | Positive |
| Company reputation | Together AI — well-funded, NEA/Kleiner Perkins investor coverage | Positive |
| Sibling roles visible | New Grad SWE + Summer 2026 intern also posted | Positive |
| Salary transparency | Sibling SE role discloses $150-200K | Positive |
| Role-company fit | Core to Together AI's mission | Positive |

**Assessment: High Confidence.** New-grad program with multiple sibling postings at the same company. Strong legitimacy.

## H) Draft Application Answers

**Why Together AI?**
> Open-weights, low-cost inference is the direction that moves AI from demos to products that people actually use. I've shipped production healthcare RAG (~35% retrieval precision, >90% grounded alignment) and want to contribute to the infra that makes that possible at foundation-model scale.

**Most relevant work:**
> Agentic Healthcare Claims (multi-agent pipeline with schema-validated JSON contracts + RAG-grounded CPT/ICD validation, >30% hallucination reduction) + Manga Lens (shipped Chrome extension with 4 vision providers). The first shows research-to-production discipline; the second shows open-source shipping ethos.

## Keywords extraídas

Machine Learning Engineer, Research Engineer, New Grad, Python, PyTorch, TensorFlow, neural networks, reinforcement learning, distributed systems, open-source, ML algorithms, experiments, foundation models, inference, Together AI, San Francisco.

---

**Recommendation: Apply.** The JD text-accepts MS equivalents; Deepak's production-ML depth is a differentiator against typical new grads. Location is a plus (SF) not a blocker.
