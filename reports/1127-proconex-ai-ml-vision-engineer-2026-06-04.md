# Evaluación: Proconex — AI/ML Engineer - Vision AI

**Fecha:** 2026-06-04
**Arquetipo:** Computer Vision / Multimodal Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/proconex/jobs/5970129004
**Legitimacy:** High Confidence
**Location:** Mid-Atlantic Region — Royersford, PA (likely on-site / hybrid)
**Region:** US
**PDF:** output/2026-06-04/cv-deepak-mallampati-proconex-ai-ml-vision-engineer-2026-06-04.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Computer Vision / Multimodal (primary) + ML Engineer Applied (secondary) |
| Domain | Industrial automation (life sciences, chemicals, power) — Emerson's exclusive Mid-Atlantic Impact Partner |
| Function | Build — engineer production-grade vision + ML models, real-time industrial pipelines |
| Seniority | Mid-to-Senior IC (5+ yrs required; title is "AI/ML Engineer", JD body leans Sr.) |
| Remote | Likely on-site / hybrid — Royersford, PA |
| Team size | Not stated; ESOP-owned; ~75-yr-old firm |
| TL;DR | Production CV/ML for industrial automation — convert process-industry problems into deployed AI models with GPU-accelerated pipelines. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Fit |
|------------------|-----------------|-----|
| 5+ yrs CV/ML | 4+ yrs ML/AI (Emerson trainee + Suvidha + Vanguard + Progress); video summarization w/ transformers; YOLOv8 stretch | ⚠️ YOE light + CV-specific exp light |
| Python + modern ML frameworks (PyTorch/TensorFlow/Keras) | Python primary; PyTorch, TensorFlow, Keras in skills | ✅ |
| Video/image processing (Mask R-CNN, ResNet, U-Net) | Suvidha video summarization pipeline (5,000+ videos); abstractive summarization | ⚠️ adjacent but not the exact CV models named |
| Object/anomaly detection | Emerson trainee — anomaly detection + equipment-failure prediction on sensor/operational data | ✅ |
| CNN tuning, MLFlow, NVIDIA TAO | MLflow listed; CNN tuning not explicit; no NVIDIA TAO | ⚠️ Gap on TAO |
| ONNX, CUDA, GPU acceleration | Fine-tuned Qwen3-27B via 4-bit QLoRA on NVIDIA H100; familiar w/ GPU stack | ✅ |
| Full ML/AI lifecycle (data → deploy → monitor) | End-to-end at Progress (RAG + eval + monitoring), Vanguard (12 APIs, model serving) | ✅ Strong |
| Industrial / process-industry domain | Emerson ML trainee on operational pipeline-storage data, anomaly detection, equipment-failure prediction | ✅ Direct adjacency |
| Mentor juniors | Not explicit in CV; cross-team partnerships at Vanguard adjacent | ⚠️ |

**Gaps + mitigación:**
1. **Specific industrial CV models (Mask R-CNN, U-Net for vision QA).** Mitigation: lean on Emerson trainee work (industrial sensor/operational data + anomaly detection) and the video-pipeline transformer experience as transferable; commit to learning the named models quickly.
2. **NVIDIA TAO + MLflow at production scale.** Mitigation: H100 + QLoRA fine-tuning is hands-on GPU work; MLflow listed in skills; pitch as learnable.
3. **5+ YOE vs 4+ actual.** Mitigation: density argument; Emerson trainee + 4 production roles + research = breadth that compensates.

## C) Nivel y Estrategia

- **JD level:** Mid-to-Senior IC (5+ yrs, mentors juniors, full lifecycle).
- **Candidate natural level:** Mid Applied ML / AI; CV is adjacent rather than primary.
- **Sell-senior-without-lying:** Lead with the *Emerson industrial-ML adjacency* (the rarest match in the candidate pool) + the *full-lifecycle Progress work* + the *GPU/QLoRA hands-on*.
- **If downleveled:** Acceptable; ESOP equity could be a differentiator if comp is structured around it.

## D) Comp y Demanda

| Métrica | Dato | Fuente |
|---------|------|--------|
| Mid-IC ML Engineer (PA / Mid-Atlantic) | $130-170k base typical | Glassdoor / Levels.fyi PA bands |
| Industrial CV demand | Steady; not as hot as LLM but durable | Market (qualitative) |
| Proconex / Emerson partner | ESOP, ~75-yr history, exclusive Mid-Atlantic Emerson partner | Company site |

JD does not disclose salary; estimate $130-160k base + ESOP. Comp narrative is stable but not LLM-startup-elevated.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI Engineer… banking/regulated" | Add "industrial-ML adjacency (Emerson, anomaly detection); video understanding via transformers; GPU-accelerated training (QLoRA, H100)" | Mirror JD's industrial-AI + CV framing |
| 2 | Skills | CV/transformers buried | Lead with "Computer Vision, PyTorch, TensorFlow, YOLOv8, ONNX, CUDA"; second row LLM | JD priority is CV |
| 3 | Emerson experience | "regression and classification on pipeline-storage data" | Re-frame as "industrial AI: equipment-failure prediction, anomaly detection, sensor pipelines" | Direct JD overlap |
| 4 | Suvidha experience | Video summarization | Position as "computer-vision + transformer pipeline shipped at 5,000-video scale" | Demonstrates CV+deploy ownership |
| 5 | Projects | MangaLens generic | Frame MangaLens as "computer-vision/OCR Chrome extension at 29+ sites" | Adds visible CV shipping evidence |

**LinkedIn:** add "Computer Vision", "Industrial AI", "MLflow", "ONNX" to headline keywords.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Anomaly detection on industrial data | Emerson pipeline-storage models | Equipment failures needed early warning | Build supervised regression + classification | Feature engineering on sensor data + model selection | Models for equipment-failure prediction + anomaly detection | Sensor cleanliness drives the model, not architecture |
| 2 | Video / transformer-based pipeline | Suvidha video summarization | Manual highlight selection across thousands of videos | Build end-to-end pipeline (speech-to-text + transformer summary + clip extract) | Deployed across 5,000+ videos | 70% reduction in manual editing effort | End-to-end ownership reveals integration bottlenecks early |
| 3 | GPU-accelerated training | Qwen3-27B fine-tune via 4-bit QLoRA on H100 | Need controllable long-form generation | Curated dataset + LoRA hyperparam sweeps | Trained on H100, paper-ready outcome | Authored IEEE-format paper documenting it | Quantized fine-tuning is the cheapest scale lever |
| 4 | Full ML lifecycle (data → deploy → monitor) | Progress Solutions — agentic system + eval framework | Multi-step LLM workflows needed reliable production | Conductor-subagent system + RAGAS + dashboards | 42% token reduction, 60% fewer failed runs, regressions caught pre-deploy | Lifecycle thinking from day-one cuts incident volume |
| 5 | Translate industrial challenges into AI | Vanguard cross-team API delivery (proxy) | 20+ teams needed AI integrations | Built 12 APIs/microservices + observability | p95 1.5s→800ms; 100k+ req/day; 40% faster integrations | Productionizing AI is 70% interface design, 30% model |
| 6 | Mentor juniors | Cross-team partnerships at Vanguard (proxy) | Junior engineers integrating w/ AI platform | Pair-debugged + documented patterns | Faster ramp + fewer integration tickets | Lightweight docs + paired sessions beat formal training |

- **Case study:** Emerson industrial-ML work + Suvidha video pipeline together = the closest end-to-end CV/industrial story.
- **Red-flag Qs:** "Have you shipped Mask R-CNN/U-Net specifically?" → adjacent CV work + commitment to ramp fast. "Royersford PA on-site?" → discuss honestly; flexible if hybrid.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Greenhouse posting, Apply active, no `?error=true` | Positive |
| Description quality | Specific stack (Mask R-CNN, U-Net, ONNX, CUDA, MLflow, NVIDIA TAO); clear scope (real-time industrial CV) | Positive |
| Company hiring signals | Proconex — established 75-yr industrial automation, exclusive Emerson partner; ESOP signals long-tenured culture | Positive |
| Reposting | Not previously seen | Neutral |
| Role market context | Industrial CV is a slower but stable hire vertical; ESOP firms tend to hire deliberately | Positive |

**Context Notes:** Stable, established firm — expect longer hiring cycle (60-90 days) but real role. Location is the biggest practical concern (Royersford, PA on-site / hybrid).

## Keywords extraídas

Computer Vision, Vision AI, PyTorch, TensorFlow, Keras, Mask R-CNN, ResNet, U-Net, ONNX, CUDA, GPU acceleration, MLflow, NVIDIA TAO, anomaly detection, object detection, industrial automation, real-time pipelines, ML lifecycle, model deployment, Python
