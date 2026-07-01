# Evaluación: Norbert Health — Applied AI Engineer (Brooklyn, NY)

**Fecha:** 2026-07-01
**Arquetipo:** ML Engineer (Applied AI Systems) + Applied AI / LLM Engineer — healthcare, production ML
**Score:** 4.0/5
**URL:** https://norbert-health.breezy.hr/p/874c21a483b3-applied-ai-engineer
**Legitimacy:** High Confidence
**Location:** Brooklyn, NY, USA (HQ; also Paris & Montreal) — on-site/hybrid, US-based
**Region:** US
**PDF:** output/2026-07-01/cv-deepak-mallampati-norbert-health-2026-07-01.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) with Applied AI / LLM flavor — production ML + RAG/agents in clinical setting |
| Domain | Healthcare / medical robotics — autonomous care-delivery robots with an AI sensing platform, deployed in facilities monitoring hundreds of patients daily |
| Function | Build + deploy — integrate foundation models + ML components into production pipelines; own the data flywheel |
| Seniority | Mid–Senior (4+ years shipping ML/AI in production, non-academic) |
| Remote | On-site/hybrid Brooklyn, NY (US-based) |
| Team size | Small AI/ML team (early-stage; robots live in facilities today) |
| TL;DR | Ship foundation-model + ML pipelines (RAG, agents, fine-tuning, eval harnesses) into a live clinical robot fleet solving the global nursing shortage. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| 4+ yrs shipping ML/AI in production (non-academic) | "AI/ML Engineer with 4+ years building production-grade Generative AI and LLM systems"; Progress Solutions, Vanguard, Emerson | ✅ Strong |
| Build RAG + agent-style orchestration for clinical apps | "RAG pipelines over large-scale healthcare document corpora … dense vector retrieval + cross-encoder re-ranking"; "agentic LLM systems on conductor–subagent orchestration" | ✅ Strong |
| PEFT/LoRA + supervised fine-tuning | "Fine-tuned Qwen3-27B via 4-bit QLoRA on H100"; "Fine-tuning (LoRA, QLoRA, PEFT)" | ✅ Strong |
| Evaluation harnesses / model regression detection | "LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics) … surface regressions before release" | ✅ Strong |
| Cloud ML platforms (Vertex AI, SageMaker, Azure ML) | AWS SageMaker/Bedrock, Azure OpenAI/AI Services, GCP Vertex AI in Skills | ✅ Strong |
| Real-time streaming + batch workloads | "fault-tolerant automation infrastructure … scheduled batch orchestration"; Kafka, Spark, Databricks | ⚠️ Partial (batch strong; real-time streaming adjacent) |
| Modern foundation models: LLMs, VLMs, ASR/TTS, detection/segmentation | LLMs ✅; video summarization + speech-to-text (Suvidha) touches ASR/multimodal; VLM/detection/segmentation not explicit in cv.md | ⚠️ Partial |
| Deployment toolchain: ONNX, quantization, TensorRT/vLLM/llama.cpp | Quantization via QLoRA (4-bit) ✅; ONNX/TensorRT/vLLM inference runtimes not in cv.md | ❌ Gap |
| Edge ML (Jetson, ARM), C++, SaMD/regulated | Regulated (HIPAA/SOC2/PCI) ✅; edge/Jetson/C++ not present | ❌ Gap (bonus only) |

**Gaps + mitigation:**
1. **Inference-runtime toolchain (ONNX/TensorRT/vLLM)** — *Nice-to-have, not hard blocker.* Deepak has done 4-bit quantization (QLoRA) and inference cost/latency optimization (prompt compression, semantic caching, model routing, p95 1.5s→800ms). Mitigation: cover-letter line bridging "inference optimization" to runtime packaging; a weekend vLLM serving demo would close it fully.
2. **Edge/robotics + VLM/detection** — *Bonus, not required.* Deepak's YOLOv8 drowsiness-detection and video-summarization work (per _profile framing) is adjacent to multimodal/detection. Lead with healthcare-ML depth; frame robotics as a domain to grow into.
3. **Real-time voice AI / streaming** — *Bonus.* Speech-to-text pipeline (Suvidha) is the nearest proof point.

Net: core of the role (healthcare + RAG + fine-tuning + eval harnesses + cloud ML + data flywheel) is a **very strong** match; gaps are all in the "bonus" tier plus deployment plumbing.

## C) Nivel y Estrategia

- **JD level:** Mid–Senior IC (4+ yrs, owns pipelines end-to-end). **Candidate natural level for ML-Applied archetype:** solid mid IC with senior-leaning depth in healthcare ML.
- **Sell-senior-without-lying:** Lead with the healthcare-ML production record — RAG over clinical corpora, QLoRA fine-tuning on H100, RAGAS/BERTScore eval framework, 60% reliability improvement, privacy-preserving clinical pipelines (re-identification risk 3.38%→0.32% while retaining 99% predictive performance). This is exactly the "ship ML into a live clinical system responsibly" profile.
- **If down-leveled:** Accept mid IC if comp is fair; negotiate a 6-month review tied to owning the eval-harness + data-flywheel workstream.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (Applied AI / ML Eng, NYC, mid–senior) | ~$150k–$210k base typical for NYC seed/Series-A healthcare AI | Levels.fyi / Built In NYC AI Engineer ranges (WebSearch, market context) |
| Company stage | Early-stage, robots deployed in facilities today; VC-backed hardware+AI | JD text |
| Demand trend | Applied AI in regulated healthcare is high-demand; robotics adds hardware risk/reward | Market context |

No salary in JD → do not invent. Flag comp as "to be confirmed" — early-stage hardware+AI can trade cash for equity.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises" | Lead with **healthcare** production ML + clinical RAG + data flywheel | Mirror JD domain |
| 2 | Bullets | RAG healthcare bullet mid-list | Promote clinical RAG + cross-encoder re-ranking to top | JD's first responsibility |
| 3 | Bullets | QLoRA fine-tuning | Surface PEFT/LoRA + "fleet data / continuous improvement" language | JD asks for fine-tuning on fleet data |
| 4 | Bullets | Eval framework | Reframe as "evaluation harness for regression detection" | Exact JD phrase |
| 5 | Skills | Broad list | Foreground Vertex AI/SageMaker/Azure ML + quantization; add "inference optimization" | JD deployment toolchain |
| — | LinkedIn | Headline "Applied AI Engineer" | Add "Healthcare AI · RAG · Production ML" | Recruiter keyword match |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Clinical RAG | Healthcare RAG pipeline | Large clinical corpora, hallucination risk | Lift answer relevance, cut hallucination | Dense retrieval + cross-encoder re-ranking | Materially reduced hallucination on domain queries | Re-ranking mattered more than embedding choice |
| 2 | Fine-tuning on fleet data | Qwen3 QLoRA on H100 | Controllable long-form gen | Fine-tune 27B under memory limits | 4-bit QLoRA, 361-example curated set | Working controllable model | Data curation > raw scale |
| 3 | Eval harness / regression | RAGAS/BERTScore framework | Regressions slipping to prod | Catch before release | Custom domain metrics + latency/accuracy dashboards | Surfaced regressions pre-deploy | Domain metrics beat generic ones |
| 4 | Production reliability | Automation infra retry logic | Failed prod runs | Improve pipeline reliability | Scheduled batch + exponential backoff | 60% fewer failed runs | Idempotency is the unlock |
| 5 | Regulated/clinical privacy | Privacy-preserving clinical pipeline | Sensitive patient data | Analyze without exposing identity | k-anonymity + l-diversity + DP | Re-id risk 3.38%→0.32%, 99% perf retained | Quantify privacy–utility trade explicitly |
| 6 | Inference optimization | Cost/latency tuning | High per-query overhead | Hold SLA, cut cost | Prompt compression, semantic caching, model routing | p95 1.5s→800ms | Caching + routing before bigger hardware |

**Case study to present:** Healthcare RAG + privacy-preserving clinical ML — directly on-mission for a clinical robot company.
**Red-flag Qs:** "No edge/robotics experience?" → "I've shipped regulated healthcare ML and optimized inference; robotics deployment is the toolchain layer I'm ready to grow into — the ML rigor transfers directly."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on BreezyHR, active apply flow | Positive |
| Tech specificity | Very specific (ONNX, TensorRT/vLLM, PEFT, VLM/ASR, Vertex/SageMaker) | Positive |
| Requirements realism | Coherent 4+ yr mid–senior scope; realistic stack | Positive |
| Company signals | Robots "deployed in real facilities today, monitoring hundreds of patients" — concrete traction | Positive |
| Reposting | Not seen before in scan-history | Neutral |
| Salary transparency | Not listed | Neutral (early-stage norm) |

**Context:** Early-stage hardware+AI; specific, mission-driven JD with real deployment claims → reads as a genuine hire, not a ghost post.

## H) Draft Application Answers

_(Score 4.0 < 4.5 — full draft answers deferred; PDF tailored. Key positioning line: "4+ years shipping production GenAI/ML in regulated healthcare — clinical RAG, QLoRA fine-tuning, RAGAS/BERTScore eval harnesses, and privacy-preserving pipelines — ready to bring that rigor to a live clinical robot fleet.")_

---

## Keywords extraídas

Applied AI Engineer, production ML, RAG, agent orchestration, foundation models, LLM, VLM, ASR/TTS, PEFT, LoRA, supervised fine-tuning, evaluation harness, model regression, data flywheel, Vertex AI, SageMaker, Azure ML, ONNX, quantization, vLLM, real-time streaming, healthcare AI, clinical, MLOps
