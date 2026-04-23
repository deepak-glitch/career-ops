# Evaluación: LlamaIndex — Multimodal AI Engineer, Document Understanding

**Fecha:** 2026-04-23
**Arquetipo:** Generative AI / RAG Engineer + Computer Vision / Multimodal Engineer
**Score:** 3.6/5
**URL:** https://jobs.ashbyhq.com/llamaindex/fd7a074f-7d80-44b7-8520-8ac787387e92
**Legitimacy:** High Confidence
**Location:** San Francisco (hybrid-friendly; downtown SF office) — Remote considered for exceptional fits. Secondary: Remote. **F-1 OPT may be supported** (verify with recruiter; LlamaIndex is a US-incorporated startup).
**PDF:** output/2026-04-23/cv-deepak-mallampati-llamaindex-multimodal-ai-engineer-2026-04-23.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Multimodal AI / Document Understanding — vision-language models for document parsing (LlamaParse, LlamaExtract) |
| Domain | Document AI, multimodal ML, production LLM infrastructure |
| Function | Develop/train/optimize ML models for doc structure, table extraction, layout analysis, multimodal content |
| Seniority | Mid IC — "3-7 years of experience in ML engineering or applied research" |
| Remote | Hybrid SF preferred; Remote considered for exceptional candidates |
| Team size | Core document-understanding team (focused, scaling) |
| Location | **San Francisco (hybrid) / Remote possible** |
| Comp | $180K – $250K + equity |
| TL;DR | Multimodal AI Engineer on LlamaParse/LlamaExtract. Deepak's computer vision + transformer experience (YOLOv8 drowsiness, Suvidha video summarization, Pixel Character pose-controlled generation) gives direct transferable skills. Required 3-7 yrs experience is above Deepak's 2.5 yrs AI-core; stretch. LlamaIndex/LlamaHub open-source framework exposure is a plus from cv.md Projects. Strong archetype fit on multimodal + production Python + RAG. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 3-7 years ML engineering / applied research | **MEDIUM** | cv.md 2.5 yrs AI-core + adjacent CV/NLP; borderline |
| Production Python (uv, ruff, mypy, Pydantic) | **STRONG** | cv.md L12 Python; FastAPI; L28 production inference services |
| Train/fine-tune/deploy ML models in production | **STRONG** | cv.md L27 XGBoost predictive ML; L63 Stable Diffusion LoRA fine-tune; L44 transformer-based video summarization |
| Computer vision, NLP, or multimodal learning | **STRONG** | cv.md L15 YOLOv8, OpenCV, ControlNet, MediaPipe, Stable Diffusion, video analytics; L44-46 NLP document Q&A |
| Data pipeline development | **STRONG** | cv.md L29 preprocessing pipelines (Pandas/NumPy); L44 transcript preprocessing |
| Research paper implementation | **MEDIUM** | Implicit in Pixel Character (ControlNet + LoRA + Stable Diffusion papers); not explicit paper reimplementation |
| High-intensity fast-paced delivery | **STRONG** | cv.md L59-87 multiple shipped projects solo; Manga Lens shipped to Chrome Store |
| Vision-language models / transformer architectures | **STRONG** | cv.md L14 Hugging Face Transformers, Diffusers; L44 transformer video summarization |
| LoRA/QLoRA | **STRONG** | cv.md L63 LoRA for Pixel Character identity consistency |
| MLOps (vLLM, TensorRT, ONNX) | **WEAK** | Docker + FastAPI yes, but no explicit inference-server tooling |
| Document understanding / OCR / layout analysis | **MEDIUM** | Adjacent via Manga Lens (panel capture + OCR handoff to LLM); no explicit doc-layout models |
| LLM applications and RAG | **STRONG** | cv.md L25, L46 RAG; L14 LlamaIndex library |
| Model optimization (quantization, distillation, pruning) | **WEAK** | Not in CV |
| Docker / Kubernetes / distributed systems | **MEDIUM** | Docker yes; K8s no |
| Open-source ML contributions | **MEDIUM** | Manga Lens shipped to Chrome Store (not traditional OSS PR track record) |

**Gaps:**
1. **3-7 yr experience bar** — 2.5 yr AI-core is below; will need to lean on adjacent (1 yr DB/DevOps + 3 mo Suvidha transformer work + shipped solo projects).
2. **MLOps serving frameworks (vLLM, TensorRT, ONNX)** — Not in CV. Mention Docker + FastAPI inference + interest in vLLM ramp.
3. **Explicit document layout / OCR models** — adjacent via Manga Lens (vision-panel capture) and YOLOv8; not direct.
4. **Model optimization (quant/distill/prune)** — Learnable; not blocking.

## C) Nivel y Estrategia

- **JD level:** Mid IC (3-7 yr). **Deepak:** 2.5 yr AI-core + strong multimodal/CV portfolio.
- **Strategy:** Lead with multimodal portfolio (YOLOv8 + Pixel Character + Suvidha transformer) + RAG + fine-tuning. Acknowledge 2.5 yr core but highlight breadth: production healthcare RAG + fine-tune (LoRA) + vision models + shipped Chrome Extension.
- **If downleveled:** Would be a downlevel to an early-career slot; accept if comp meets $100K+ floor.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| LlamaIndex Multimodal AI Engineer | $180K – $250K + equity | JD |
| Mid-level ML Eng SF Bay | $165-230K | Levels.fyi |
| LlamaIndex funding | Series A ($19M Lightspeed 2024) | Crunchbase |
| Deepak target | $100-130K | config/profile.yml |

Comp band comfortably above floor. Equity upside depends on LlamaIndex's trajectory as the RAG framework layer.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer — 2.5 yrs production RAG + multimodal. Stable Diffusion + LoRA, YOLOv8, transformer video summarization. LlamaIndex stack user + contributor-track." | Mirror JD: multimodal + production ML + open source |
| 2 | Skills: ML libraries | Move Hugging Face Transformers + Diffusers + LlamaIndex + LangChain + PyTorch to top | JD tooling |
| 3 | Skills: Multimodal | Expand with "LoRA fine-tuning, ControlNet pose conditioning, latent-space consistency" | JD preferred |
| 4 | Progress Solutions bullet 1 | Lead with RAG + retrieval precision metric | Document understanding is retrieval-heavy |
| 5 | Projects | Reorder: Pixel Character (LoRA + multimodal) → Drowsiness YOLOv8 → Suvidha transformer video → Manga Lens (vision + multi-provider) → Dream Decoder (multimodal prompt transform) → Agentic Claims (RAG) | Multimodal lead |
| 6 | OSS line | "Shipped Manga Lens to Chrome Web Store; LlamaIndex/LangChain practitioner; open to upstream contributions" | OSS posture |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Train/fine-tune ML in production | Pixel Character LoRA (Stable Diffusion + identity consistency) | LoRA rank vs dataset size trade-off |
| 2 | Vision-language / multimodal | Manga Lens multi-provider vision (Claude Sonnet, GPT-4o, GPT-4.1, Ollama) with per-provider payload handling | Cloud WebP vs local JPEG matters for CUDA stability |
| 3 | Document / layout understanding (adjacent) | Manga Lens panel capture via viewport-slice + coordinate remap + dedup | Dedup coordinates are the hidden cost of tall-panel pipelines |
| 4 | Transformer architectures | Suvidha video summarization — hierarchical abstractive + timestamp alignment | Hierarchical beats flat summarization for long context |
| 5 | Data pipeline development | Progress preprocessing — EHR + appointment histories + support logs | Reliability above 98% is what unlocks downstream model stability |
| 6 | Production inference at scale | Progress FastAPI + Docker + structured logging — 30% defect reduction post-deploy | Load simulation catches what unit tests miss |
| 7 | Eval frameworks | Progress RAG eval → 90%+ grounded alignment | Ground-truth labeling is half the work |
| 8 | Research paper implementation | ControlNet + OpenPose/MediaPipe integration from papers | Paper → code gap is real; read ablations first |

**Case study:** Pixel Character (LoRA + ControlNet + LLM orchestrator) — direct parallel to LlamaIndex's multimodal doc-understanding stack.

**Red flag questions:**
- "3-7 yr experience bar?" → "2.5 yr AI-core + 1 yr DB/DevOps + 3 mo transformer NLP. My shipped portfolio (Chrome Extension, Pixel Character, Dream Decoder) shows depth beyond pure tenure."
- "vLLM / TensorRT?" → "Docker + FastAPI is my current inference-serving stack. vLLM is a 2-week ramp; happy to profile models on my first shipped engagement."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Ashby (LlamaIndex is LI's canonical careers board) | Positive |
| JD specificity | Names LlamaParse, LlamaExtract, vLLM, TensorRT, ONNX, LoRA, QLoRA, uv, ruff, mypy, Pydantic — high specificity | Positive |
| Salary transparency | $180K – $250K disclosed (SF required) | Positive |
| Company hiring signals | LlamaIndex hiring across eng + devrel 2025-2026 | Positive |
| Reposting pattern | Fresh posting; no duplicate title in scan-history.tsv | Neutral |
| Open-source framework positioning | Work directly impacts open-source LlamaIndex + commercial LlamaParse — clear product surface | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why LlamaIndex?** > "I've built RAG in production using the LlamaIndex + LangChain stack (healthcare document Q&A with ~35% retrieval precision gain). Multimodal is where I've spent the most shipped-project time: Stable Diffusion + LoRA + ControlNet for Pixel Character, YOLOv8 for drowsiness detection, transformer-based video summarization at Suvidha, and Manga Lens (4 vision providers, shipped to Chrome Web Store). Document Understanding is the natural next layer, and LlamaParse is the canonical open-source surface for it."

**Relevant project summary:** > "Pixel Character Synthesis: LoRA fine-tuning Stable Diffusion for identity consistency, ControlNet + OpenPose for pose conditioning, LLM-based agent orchestrator decomposing high-level prompts. The production stack (PyTorch + HF Diffusers + FastAPI + Docker) matches LlamaParse's deployment shape."

**Experience honesty:** > "2.5 yr AI-core, below your 3-7 yr preferred band. My shipped multimodal portfolio compensates for calendar tenure; open to downleveling if that's the cleaner path."

**Work authorization:** > "US-based, F-1 OPT, open to sponsorship."

---

## Keywords extraídas

Multimodal AI, document understanding, LlamaParse, LlamaExtract, vision-language models, transformer, LoRA, QLoRA, fine-tuning, production ML, Python, Pydantic, RAG, ML infrastructure, data pipelines, evaluation frameworks, vLLM, TensorRT, ONNX, document AI, OCR, layout analysis, open-source, Hugging Face.
