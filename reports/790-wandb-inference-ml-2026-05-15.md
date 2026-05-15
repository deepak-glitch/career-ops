**Fecha:** 2026-05-15
**Arquetipo:** AI Platform / MLOps Engineer (adjacent — Inference Systems Engineering)
**Score:** 3.0/5
**URL:** https://coreweave.com/careers/job?4609928006&board=coreweave&gh_jid=4609928006
**Legitimacy:** Proceed with Caution
**Location:** Bellevue, WA — Hybrid (CoreWeave prioritizes hybrid; remote possible for 30+ miles from office)
**Region:** US
**PDF:** output/2026-05-15/cv-deepak-mallampati-wandb-inference-ml-2026-05-15.pdf

---

## Block A — Role Summary

| Field | Detail |
|-------|--------|
| Archetype | Software/ML Engineer — LLM Inference Systems |
| Domain | Model serving infrastructure — high-performance LLM inference (vLLM, TensorRT-LLM, SGLang), GPU optimization, latency/throughput at scale |
| Function | Deliver high-performance model serving capabilities; optimize throughput, latency, batching, GPU utilization, quantization; work across model, systems, and product boundaries |
| Seniority | Mid-Senior IC (inference systems experience required; GPU optimization strongly preferred) |
| Remote | Bellevue, WA hybrid; remote possible based on role/distance; relocation likely needed |
| Team size | CoreWeave acquired Weights & Biases; combined entity — large engineering org |
| TL;DR | Inference systems engineering at the CoreWeave/W&B intersection — deliver high-performance model serving for production LLM workloads. The role requires deep inference systems knowledge (vLLM, TensorRT-LLM, GPU optimization) that Deepak does not currently have. Strong Python and LLM application development are necessary but not sufficient. This is a systems-heavy role that leans toward ML infrastructure engineering, not applied AI. |

Context: CoreWeave (NASDAQ: CRWV) acquired Weights & Biases in 2025, creating an end-to-end AI infrastructure + developer tools platform. W&B Inference is a new product serving LoRA fine-tuned models on CoreWeave GPUs via OpenAI-compatible API. The Software Engineer, Inference AI/ML role sits at the intersection of model behavior, serving systems, and customer requirements — optimizing throughput, latency, reliability, and quality across inference systems. Note: job posting verification was partial (CoreWeave careers page is SPA-based; full JD content confirmed via search aggregator cross-reference with similar W&B/CoreWeave inference roles).

---

## Block B — CV Match

| JD Requirement | Deepak Match | Evidence in CV |
|---------------|--------------|----------------|
| LLM inference systems (vLLM, SGLang, TensorRT-LLM) | ❌ Gap | No explicit inference serving framework experience; used FastAPI/Flask for serving but not GPU-optimized inference stacks |
| Practical tradeoffs: latency, throughput, batching, GPU utilization, quantization | ⚠️ Partial | Production FastAPI services with load simulation (~30% defect reduction); no GPU optimization or quantization experience documented |
| Work across model, systems, and product boundaries | ✅ Moderate | Cross-stack experience (data → models → APIs → deployment); FastAPI + Docker + monitoring |
| Strong Python | ✅ Strong | Python primary language across all roles and projects |
| Strong written communication, reproducible technical work | ✅ Strong | Structured documentation, eval audit trails, HIPAA-conscious data governance |
| Profiling tools (Nsight Systems, PyTorch profilers) | ❌ Gap | No GPU profiling experience documented |
| Benchmark suites for coding/reasoning/agent workloads | ⚠️ Partial | Custom eval harnesses built; not formal benchmark suites (HELM, MMLU, etc.) |
| GPU hardware experience (CUDA, NCCL, quantization) | ❌ Gap | PyTorch used but no CUDA/GPU optimization experience; YOLOv8 + OpenCV (inference user, not optimizer) |
| Production inference traces / customer traffic patterns | ⚠️ Partial | Load simulation at Progress Solutions; no production traffic analysis at GPU-serving scale |

**Gap summary:** The core requirements (vLLM/TensorRT/SGLang familiarity, GPU optimization, profiling tools, quantization) are not present in Deepak's current background. PyTorch is present but as a framework user, not an inference optimization practitioner. The role requires someone who has operated LLM serving stacks at scale — a distinct skill set from building LLM applications on top of APIs.

---

## Block C — Level and Strategy

**Detected Level:** Mid-Senior IC — inference systems experience required; GPU optimization strongly preferred. This leans toward the specialized infrastructure side of ML engineering.

**Deepak's honest positioning:** Deepak is a strong applied AI / LLM application engineer. He has excellent Python, production deployment (FastAPI/Docker), LLM application development, and evaluation skills. However, the inference infrastructure layer (GPU optimization, vLLM, quantization, profiling) is a distinct specialty that his current background does not cover.

**Score rationale (3.0/5):**
- CV Match: 2.5 — significant gaps in inference systems stack
- Archetype Fit: 2.5 — this is MLOps/Inference Engineering, Deepak's 4th priority archetype; the systems-heavy angle pushes it further from his core
- Comp: 3.5 — no comp posted; market rate for this level at CoreWeave/W&B likely $140K–$180K, above Deepak's target but with significant seniority gap risk
- Culture/Company: 4.0 — CoreWeave is a well-capitalized, high-growth company (NASDAQ IPO); W&B is beloved in the ML community; good employer brand
- Red Flags: 3.0 — F-1 OPT sponsorship risk at large company (manageable); seniority gap for inference systems experience is the main concern

**Should Deepak apply?** Borderline. The 3.0 score reflects a role where Deepak can demonstrate relevant adjacent skills (Python, LLM apps, production deployment) but is unlikely to clear the inference systems bar without reframing. This is a "reach" application worth attempting if Deepak is actively building inference systems knowledge (running vLLM locally, doing GPU optimization experiments) but not a priority target without that investment.

**Pitch angle (if applying):**
> "I've been the consumer of inference APIs; I want to be the engineer who makes them reliable. My FastAPI/Docker deployment work at Progress Solutions — including load simulation and structured observability — is the nearest point in my background to inference systems work. I'm actively ramping on vLLM and TensorRT-LLM because I understand that the quality of the application layer is directly constrained by inference quality. I want to work on the constraint."

---

## Block D — Comp and Market

| Data Point | Value | Source |
|-----------|-------|--------|
| Comp posted in JD | Not listed (market rate assumption) | — |
| CoreWeave Staff Inference Engineer (similar role, Staff level) | $188K–$275K | Built In Seattle listing |
| Mid-level Software Engineer at CoreWeave/W&B | Est. $140K–$180K | Market inference from Staff comp + level adjustment |
| Arize, W&B, CoreWeave ML Engineer market range | $130K–$175K (Mid IC) | Glassdoor, 6figr.com, levels.fyi |
| Deepak target | $100K–$130K | Profile |
| Gap risk | Mid-Senior role may expect $140K+; Deepak at $100–130K is achievable if leveled correctly | — |
| Equity | CRWV stock (public); ESPP; meaningful | CoreWeave NASDAQ IPO |

Comp likely exceeds Deepak's target. CoreWeave's public company status means ESPP and RSUs vs. private company options — more liquid equity. However, the seniority gap may result in downleveling or rejection before comp discussions.

---

## Block E — CV Personalization Plan

| # | Section | Current State | Change Proposed | Why |
|---|---------|--------------|-----------------|-----|
| 1 | Summary | Generic "agentic LLM workflows" | Add "production inference packaging, load simulation, and observability" + "LLM inference serving (building familiarity with vLLM/TensorRT-LLM)" | Signal infrastructure orientation and honest ramp-up |
| 2 | Progress Solutions — FastAPI/Docker bullet | Present | Strengthen: "packaged ML/LLM inference as FastAPI/Flask RESTful services, containerized with Docker, with structured logging and load simulation to characterize throughput and latency before go-live" | Closest analog to inference systems work in Deepak's background |
| 3 | Skills — Infra & DevOps | Docker, Jenkins, Grafana listed | Add "load simulation, latency benchmarking, inference service observability" | Maps to inference systems concerns: latency, throughput, monitoring |
| 4 | Projects | YOLOv8 drowsiness detection | Surface: "Replaced two-stage CNN with unified YOLOv8; reduced inference latency ~30%; NMS tuning for real-time performance" — frame as inference optimization in computer vision domain | Best available evidence of inference-adjacent optimization thinking |
| 5 | Skills — ML Libraries | PyTorch, Hugging Face listed | Add note on inference interests: "exploring vLLM and TensorRT-LLM for LLM serving optimization" | Honest signal of trajectory even without production experience |

---

## Block F — STAR+R Interview Stories

| # | JD Requirement | Story | S | T | A | R | Reflection |
|---|---------------|-------|---|---|---|---|------------|
| 1 | Production inference packaging | FastAPI Docker deployment at Progress Solutions | ML/LLM inference needed production-grade packaging with observable behavior | Package + deploy + monitor full stack | FastAPI, Docker, structured logging, load simulation; characterized throughput and latency before launch | ~30% fewer post-deployment defects; load behavior understood before go-live | Load simulation before deployment is inference engineering discipline applied at API level |
| 2 | Inference latency optimization (adjacent) | YOLOv8 drowsiness detection | Two-stage CNN pipeline had inference latency too high for real-time video | Replace with unified model + optimize pipeline | Unified YOLOv8, NMS tuning, adaptive frame skipping, sliding-window confidence aggregation | ~30% inference latency reduction; real-time operation via OpenCV | Model architecture choice and post-processing tuning are the first two inference optimization levers |
| 3 | Working across model + systems boundaries | Healthcare RAG + agentic pipeline | Clinical AI required multi-component system: retrieval, reranking, LLM generation, evaluation, API packaging | Own end-to-end stack — not just the model layer | Chunking strategy, embedding model choice, reranking, prompt design, FastAPI packaging, structured logging | ~35% retrieval precision improvement; 90%+ alignment; production deployment | Systems reliability at the model boundary requires understanding every layer above and below it |
| 4 | Tradeoffs: latency vs. quality | Hallucination reduction with grounding rules | Agentic workflows were fast but produced hallucinations; adding grounding rules increased response quality but added latency | Balance response quality and latency SLA | Grounding rules with conditional retrieval based on query type; fast-path for low-risk queries | >30% hallucination reduction with acceptable latency impact | Inference optimization is always a tradeoff — quality vs. latency vs. cost; the art is knowing where the constraint is |
| 5 | Reproducible technical work | Eval harness and audit trails at Progress Solutions | Clinical AI deployments needed reproducible evaluation for HIPAA audit | Build eval harness with reproducible, auditable outputs | Custom eval harness with structured logging, retrieval trace capture, per-run result archiving | Evaluation process reproducible across model versions; audit-ready traces | Reproducibility is an infrastructure concern, not just an evaluation concern |

---

## Block G — Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Observation |
|--------|------------|
| Posting source | CoreWeave official careers portal (Greenhouse backend) |
| Verification status | Partial — CoreWeave careers page is SPA-based; direct URL returns homepage layout; JD content confirmed via search aggregator cross-reference (Applied AI Engineer, Inference listings at Bellevue, WA on ZipRecruiter/Lensa confirm role is active in this family) |
| Company health | CoreWeave (NASDAQ: CRWV) IPO 2024–2025; publicly traded AI infrastructure company; well-capitalized; W&B acquisition completed |
| Role legitimacy | Inference Engineering roles at CoreWeave/W&B are a known and active hiring area; W&B Inference product is confirmed active |
| Specific JD ID | gh_jid=4609928006 could not be directly verified via WebFetch (SPA blocking); same limitation applies to all CoreWeave job postings via browser-rendered pages |
| Concern | JD title is "Software Engineer, Inference AI/ML" — this exact title could not be fully verified; the Applied AI Engineer, Inference variant is confirmed active at Bellevue; the specific gh_jid may refer to this same role family |
| Recommendation | Verify posting is active before investing significant application prep time; search directly on CoreWeave careers portal for this job ID |
