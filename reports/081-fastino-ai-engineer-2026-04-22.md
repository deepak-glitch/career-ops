# Evaluación: Fastino — AI Engineer

**Fecha:** 2026-04-22
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / MLOps Engineer
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/fastino-ai/d0fe2e39-6cf2-4972-8266-461bd447468a
**Legitimacy:** High Confidence
**Location:** Remote (Fastino is Palo Alto, CA HQ — fully remote per JD; role confirmed via Ashby GraphQL API, no secondary locations listed)
**PDF:** output/2026-04-22/cv-deepak-mallampati-fastino-ai-engineer-2026-04-22.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Applied AI / LLM Engineer + inference pipeline ownership (AI Platform) |
| Domain | Fastino — specialized, efficient small LLMs (GLiNER family, 5M+ downloads, used by NVIDIA, Meta, Airbnb); $25M seed (Khosla, Insight, Microsoft, GitHub CEO, Docker CEO) |
| Function | Build agentic systems on Fastino's optimized models; bridge research → production; own inference pipeline stability; architect data + fine-tuning strategies |
| Seniority | Mid (2+ years required) |
| Remote | Fully remote |
| Team | Engineering |
| TL;DR | Seed-stage small-LLM company with real traction. Remote-friendly, mid-level bar (2+ years), strong archetype alignment (agentic + inference + fine-tuning + K8s). Deepak has 2.5+ years across RAG, agentic, FastAPI packaging, and production inference — tight match. No comp listed is the main friction. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 2+ years AI/ML engineering | **STRONG** | cv.md L8 "2.5+ years"; L22-30 Progress Solutions Applied AI |
| Proficiency with LLMs, applied AI/ML to complex unstructured problems | **STRONG** | cv.md L25 RAG systems for clinical retrieval; L26 agentic LLM workflows; L44-47 transformer video summarization on 5k+ sessions |
| Comfortable across the stack — prompt engineering, vector DB tuning, K8s, API design | **STRONG (partial K8s)** | cv.md L13 prompt engineering, grounding; L25 semantic retrieval + embeddings; L28 FastAPI + Docker. **K8s gap** — cv.md cites Docker not K8s |
| Design + deploy high-performance agentic systems | **STRONG** | cv.md L26 agentic workflows with structured reasoning; Agentic Healthcare Claims Processing project L71-72 |
| Bridge research → production for enterprise | **STRONG** | cv.md L25-30 full-stack delivery in healthcare enterprise context; L28 FastAPI/Flask + Docker |
| Rapid iterative prototyping, task-accuracy tuning via telemetry | **STRONG** | cv.md L25-27 retrieval precision +35%, hallucination >30% reduction, recall gains via threshold calibration |
| Own inference pipeline stability, scalability bottlenecks | **MEDIUM** | cv.md L28 load simulation + structured logging; L59-60 Manga Lens multi-provider payload handling (WebP vs JPEG to avoid CUDA crash) |
| Architect large-scale data + fine-tuning strategies | **MEDIUM** | cv.md L29 EHR preprocessing >98% reliability; no cited LLM fine-tuning run — closest is Diffusers LoRA on Pixel project L63 |
| Optional: microservices for high-concurrency agentic workloads | **MEDIUM** | cv.md L28 FastAPI services + load simulation; scale not enterprise-proven |
| Optional: GLiNER / information extraction architectures | **WEAK** | Not cited in cv.md — address as learning/demo intent |

**Gaps & mitigation:**
1. **Kubernetes** (soft requirement) — Docker yes, K8s not cited. Mitigation: cover letter "Docker in prod; K8s on ramp-up — deployed multi-service stacks and ready to go deeper."
2. **Production LLM fine-tuning** — only LoRA on pixel art project. Mitigation: reference GLiNER + Hugging Face Transformers familiarity (L14), and frame no-show/care models as evaluation-discipline proof.
3. **GLiNER/info extraction** — not in portfolio. Mitigation: study GLiNER before interview; position agentic healthcare claims (L71-72, schema-validated JSON between agents) as analog.

## C) Nivel y Estrategia

- **JD level:** 2+ years, mid IC.
- **Candidate level:** 2.5+ years applied AI. Aligned.
- **Sell-up plan:** Frame retrieval precision +35%, hallucination >30% reduction, and multi-provider inference payload engineering as proof of production AI discipline. Lean on breadth (RAG + agentic + vision + fine-tuning-adjacent LoRA).
- **Downlevel plan:** Accept if comp ≥ $95K base and team is lean (ownership access). Negotiate 6-month review with scope expansion.

## D) Comp y Demanda

| Data | Value | Source |
|------|-------|--------|
| Role comp (Mid AI Engineer, remote US) | ~$130-180K base + equity | Levels.fyi / Glassdoor seed-stage AI (2026) |
| Fastino funding | $25M seed, 2024 | TechCrunch / JD |
| Demand | High — small-LLM / specialized-LM space growing | Market signal |

Fastino didn't publish a comp range on this posting. Seed-stage foundational-model companies typically pay 80-100% of FAANG base + material equity.

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Open with "Applied AI engineer (2.5+ years) building agentic LLM workflows and RAG systems with measurable precision gains; comfortable end-to-end from prompt engineering to FastAPI/Docker inference pipelines." | Mirrors JD's full-stack framing |
| 2 | Skills reorder | LLM & GenAI first; mention "high-concurrency inference", "multi-provider payload handling" | Matches JD diction |
| 3 | Experience bullet 1 (Progress) | Retrieval precision +35% + hallucination >30% up-front | Matches "real-world telemetry" framing |
| 4 | Manga Lens callout | Emphasize multi-provider inference + CUDA-crash mitigation | Closest proof of inference-stability ownership |
| 5 | Agentic Healthcare Claims project | Highlight schema-validated JSON contracts (proof for agent stability) | Maps to "high-performance agentic systems" |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Deploy high-performance agentic systems | Agentic claims processing with schema-validated JSON | Multi-step claim fraud pipeline | Prevent cascading hallucinations | 5-agent pipeline with JSON contracts + RAG grounding | Audit-ready reasoning traces, measurable risk scoring | Next time, add per-agent eval gates |
| 2 | Bridge research → production | Progress Solutions RAG | Clinical retrieval was ad-hoc queries | Production RAG with grounding | Recursive semantic chunking + transformer embeddings + eval pipeline | Precision +35%, hallucination >30% down, >90% grounded responses | Chunk-size tuning is a research skill applied in prod |
| 3 | Inference stability, scalability | Manga Lens multi-provider payload | 4 providers, tall webtoon panels | Stable real-time capture | Viewport-slice + coordinate remapping + dedup + per-provider payload (WebP for cloud, JPEG for Ollama to avoid CUDA crash) | Shipped to Chrome Web Store, 7-day cache, 29 sites | Provider-specific quirks are the real work |
| 4 | Architect fine-tuning strategy | Pixel character synthesis + LoRA | Identity consistency across poses | Controlled generation pipeline | SD fine-tuning + LoRA for identity + ControlNet + pose conditioning | Agent orchestrator decomposes prompts | Fine-tuning + control signals + agent routing combined beats any solo technique |
| 5 | Telemetry-driven iteration | Risk prediction recall tuning | Class imbalance on high-risk patients | Improve recall without precision loss | Class weighting + stratified sampling + threshold calibration | Recall +15-20% on high-risk, precision held >90% | Threshold-vs-class-weight trade-off should always be measured, not assumed |
| 6 | Evaluation discipline | RAG evaluation pipeline (Progress) | Regressions weren't caught | Build eval harness | Retrieval-grounded alignment + structured logging + audit trails | >90% alignment in eval, ~30% fewer defects post-deploy | Evaluation discipline is what turns a prototype into a product |

**Recommended case study:** Agentic Healthcare Claims Processing + Manga Lens — demonstrates both agentic architecture and inference stability.

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Live via Ashby GraphQL API; active job ID, teamId, locationId resolved | Positive |
| Description quality | Specific — names GLiNER, architecture, inference telemetry, K8s | Positive |
| Tech specificity | High — LLMs, vector DB tuning, K8s, API design, agentic workloads | Positive |
| Funding recency | $25M seed, named investors (Khosla, Insight, Microsoft) | Positive |
| Reposting pattern | First appearance in scan-history for this ID | Positive |
| Salary transparency | Not listed (US private startup, not CA-mandated for remote) | Neutral |
| Requirements realism | 2+ years is entry/mid-friendly vs JD scope — reasonable | Positive |

**Context Notes:** Fastino's GLiNER has >5M downloads and named enterprise users; this is a real product company, not a ghost posting.

## H) Draft Application Answers

**Why Fastino?**
"Fastino's bet that specialized, efficient models beat brute-force generalists matches how I've built in healthcare — retrieval precision +35% came from disciplined chunking and eval, not bigger models. I've shipped RAG, agentic workflows, and multi-provider inference (Manga Lens, 4 providers) and want to work on foundational small LLMs that go directly into customer infrastructure."

**Kubernetes / inference at scale?**
"Docker in production today; load simulation and structured logging cut post-deploy defects ~30%. K8s is the next layer — I've deployed multi-service stacks and am ready to own scheduling, autoscaling, and rolling updates end-to-end."

**GLiNER / information extraction?**
"My closest analog is schema-validated JSON contracts between agents in the healthcare claims pipeline — structured extraction disciplined by contracts so downstream agents can't hallucinate. Ready to go deep on GLiNER."

---

## Keywords extraídas

Applied AI, AI Engineer, LLMs, RAG, agentic systems, inference pipelines, prompt engineering, vector DB tuning, Kubernetes, API design, fine-tuning, information extraction, GLiNER, microservices, high-concurrency, telemetry, enterprise deployment, Python, FastAPI, Docker
