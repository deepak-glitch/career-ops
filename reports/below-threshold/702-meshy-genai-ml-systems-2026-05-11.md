# Evaluación: Meshy — Generative AI - ML System Engineering

**Fecha:** 2026-05-11
**Arquetipo:** AI Platform / MLOps Engineer (low-level ML systems / 3D research infra)
**Score:** 2.4/5
**URL:** https://jobs.ashbyhq.com/meshy/90988ed5-f767-4c0d-9cbc-b69d792db1a9
**Legitimacy:** High Confidence
**Location:** Bay Area Office — In-person preferred
**PDF:** Not generated (score < 3.0)

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | ML Systems / Research Infra Engineer (NOT Applied AI / RAG / Agentic) |
| Domain | 3D generative AI — text/image-to-3D, texturing, animation rigging, foundation model training |
| Function | Build end-to-end 3D-native ML framework: pretraining → finetuning → inferencing; co-design model architectures with researchers |
| Seniority | Unspecified but "experience in ML or HPC graphics" + Triton/CUDA + FSDP2 + large-scale distributed training implies mid-senior IC |
| Remote | In-person Bay Area preferred |
| Team size | Globally distributed; "generative AI pioneers + CG veterans" |
| TL;DR | Low-level ML systems engineering for 3D foundation models — far from Deepak's RAG / agentic / Applied AI shipping wheelhouse |

## B) Match con CV

| Requisito JD | Línea CV / Proyecto |
|---|---|
| "Solid practical understanding of PyTorch or JAX" | `cv.md` Skills: PyTorch, Hugging Face Transformers, Diffusers; Agentic Pixel uses Diffusers; Driver Drowsiness YOLOv8 (PyTorch backbone) |
| "Write beautiful and maintainable code in Python and/or C++" | Python primary throughout CV; C++ only via Arduino IoT project (limited modern C++ depth) |
| "Performance and efficiency oriented mindset" | YOLOv8 unified detection ~30% latency reduction over two-stage CNN; healthcare API tuning |
| "Co-design model architectures with researchers" | NOT a direct match — Deepak applies models, doesn't co-design pretraining frameworks |
| "torch.compile, FSDP2, FSDP/DP/TP/CP/PP, zero redundancy optimizers" | No CV evidence — gap |
| "Triton kernels, CUDA custom operators" | No CV evidence — gap |
| "Large-scale distributed training across hundreds-thousands of GPUs" | No CV evidence — gap |
| "Diffusion models in 3D or video" | Agentic Pixel uses Stable Diffusion + LoRA + ControlNet (2D); Driver Drowsiness video pipeline (but real-time inference, not 3D training) |
| "Low precision bf16 or fp8 training" | No CV evidence — gap |

**Gaps:**
1. **Distributed training systems engineering.** Triton, CUDA, FSDP2, multi-GPU sharding — hard gates the JD calls out as "nice to have" but realistically "needed for impact." *Mitigation:* None within current scope. Deepak applies and ships models; he hasn't built the training infra.
2. **3D and graphics primitives.** Meshy's customers are game studios (Meta, Square Enix, DeepMind). Deepak has no 3D / GLTF / mesh / NeRF / Gaussian-splat exposure. *Mitigation:* Limited — Diffusers + LoRA helps tangentially but not core.
3. **Bay Area in-person from Kent OH + F-1 OPT.** Relocation friction.

## C) Nivel y Estrategia

- **Nivel JD:** Mid-Senior IC for ML systems infra.
- **Nivel natural Deepak:** Junior-Mid Applied AI — wrong archetype.
- **Recommendation:** SKIP. This is a research-infra role at the wrong end of the stack for Deepak's portfolio. Even with strong agentic + RAG experience, the gaps in distributed training + Triton/CUDA + 3D are hard blockers, and Meshy's bar for this role is set by graphics + HPC veterans.

## D) Comp y Demanda

| Datapoint | Value | Source |
|---|---|---|
| ML Systems Engineer Bay Area | $200K - $400K base + equity | Levels.fyi 2026 |
| Meshy comp disclosure | Not in JD | JD |
| Demand trend | Strong for ML systems eng; very high bar (foundation model labs) | WebSearch 2026 |

## E) Plan de Personalización

Not pursuing — score 2.4 below threshold. No PDF generated.

## F) Plan de Entrevistas

Not applicable — SKIP.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting visible | Active on Ashby 2026-05-11; Meshy board has 46+ active postings | Positive |
| Description quality | Very specific (Triton, FSDP2, torch.compile, bf16/fp8) — coherent low-level ML systems JD | Positive |
| Customer traction | Named enterprise customers: Meta, Square Enix, DeepMind | Positive |
| Salary transparency | Absent; common for senior research-infra roles | Neutral |

## H) Draft Application Answers

Not applicable — SKIP (score < 4.5).

---

## Keywords extraídas

3D generative AI, machine learning systems, PyTorch, Triton, CUDA, FSDP2, torch.compile, distributed training, diffusion models, bf16, fp8, foundation models, inference optimization, model compilation, fusion, quantization, 3D content pipeline, Meshy, Bay Area
