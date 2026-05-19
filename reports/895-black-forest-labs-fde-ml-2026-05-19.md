# Black Forest Labs — Forward Deployed Machine Learning Engineer

**Fecha:** 2026-05-19
**Arquetipo:** AI Solutions / Forward Deployed Engineer (+ ML Engineer Applied)
**Score:** 3.4/5
**URL:** https://job-boards.greenhouse.io/blackforestlabs/jobs/4935984008
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — Hybrid (2+ d/wk in-office; Freiburg or SF) + monthly in-person option
**Region:** US
**PDF:** output/2026-05-19/cv-deepak-mallampati-black-forest-labs-fde-ml-2026-05-19.pdf
**Verification:** confirmed via Greenhouse JD page 2026-05-19

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | Black Forest Labs (~50-person frontier research lab; pioneered Latent Diffusion / Stable Diffusion; FLUX models) |
| Role | Forward Deployed Machine Learning Engineer |
| Location | San Francisco, CA — Hybrid 2+d/wk (Freiburg or SF) |
| Employment | Full-time |
| Comp | $180,000-$300,000 base + equity (SF band) |
| Visa sponsorship | Not stated explicitly |
| Domain | Generative visual AI — diffusion models (FLUX), customer deployment |
| Stack | Python, diffusion models, transformers, GPU infrastructure, inference optimization, ComfyUI |
| Seniority | Mid-to-senior; "proven track record shipping models for real systems" |

**TL;DR:** Frontier research lab's FDE function — diffusion model customization + finetuning + inference optimization for enterprise customers. **Archetype 1:1** (FDE + applied ML/visual generative AI). Deepak's **Agentic Pixel Character Synthesis** project (Stable Diffusion + LoRA + ControlNet + Diffusers) is the closest single project match in his portfolio to "diffusion finetuning". SF relocation + hybrid friction; comp band strong; sponsorship unstated (soft caveat for F-1 OPT).

---

## B — CV Match & Gaps

**Strong matches:**
- "Customize foundation models for specific customer use cases" — Pixel project uses **Stable Diffusion fine-tuning + LoRA for identity consistency** (direct analog to FLUX finetuning/distillation).
- "Diffusion models, finetuning, distillation" — Pixel project uses **PyTorch + Hugging Face Diffusers + ControlNet** (the same ecosystem).
- "Strong Python skills" — primary language across all portfolio projects.
- "Diagnose performance bottlenecks in technical customer engagements" — Drowsiness Detection inference-latency optimization (~30% reduction); FastAPI/Docker inference services at Progress Solutions (~30% defect reduction).
- "Communicate technical solutions across executive and engineer audiences" — implicit in healthcare AI deployment role + Student Manager leadership.
- "Design deep product integrations beyond standard API endpoints" — Manga Lens 4-provider abstraction layer is a direct analog.
- "Cloud deployment and serving infrastructure" — Docker + FastAPI/Flask production patterns.

**Gaps / risks:**
- "Direct experience working with customers on generative AI deployment" — Deepak has internal-customer experience at Progress Solutions but no external paying-customer GenAI deployment.
- FLUX-specific ecosystem (ComfyUI, FLUX training frameworks) — adjacent but not first-hand.
- "Enterprise architecture" depth — junior-level for that bar.
- SF in-office 2d/wk requires Kent OH → SF relocation.
- Visa sponsorship unstated; F-1 OPT soft blocker for hybrid/frontier-lab risk profile.

**Mitigation:** Lead with **Pixel project** (Stable Diffusion + LoRA + ControlNet + LLM orchestrator) + Manga Lens (multi-provider AI vision integration) as the proof points; cover letter clarifies F-1 OPT status + interest in FLUX ecosystem.

---

## C — Level and Strategy

- JD level: mid-senior IC; "proven track record" + customer-facing depth.
- Deepak's natural level: mid-junior (2.5y). Pixel + Manga Lens projects compensate via depth in diffusion + multi-provider integration.
- Realistic: stretch — viable if BFL's bar is "shipped diffusion work" not "X years at frontier labs".

## D — Comp & Demand

| Datum | Value | Source |
|---|---|---|
| Posted range | $180-300K base + equity | JD (SF band) |
| FDE ML at frontier labs (SF) | $200-400K total comp | Levels.fyi 2026 |
| Diffusion + GenAI demand | Very high in 2026 | Industry trend |

Comp band aligns with target; equity adds optionality.

## E — Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "healthcare-focused RAG…" | "Applied AI engineer with diffusion + multimodal production work — Stable Diffusion / LoRA / ControlNet character synthesis pipeline + multi-provider vision API integration shipped on Chrome Web Store" | Lead with diffusion/multimodal, de-emphasize healthcare |
| 2 | Bullets | RAG-first | Reorder: diffusion + vision → multi-provider integration → ML production → healthcare RAG | Match JD priorities (diffusion finetuning + customer deployment) |
| 3 | Projects | Healthcare-heavy | Lead with Pixel (SD + LoRA + ControlNet + Diffusers + LLM orchestrator) + Manga Lens (4-provider vision API abstraction) + Drowsiness (YOLOv8 inference-latency optimization) | Show diffusion + inference-perf depth |
| 4 | Cover letter | n/a | Open: "I'm a US-based F-1 OPT engineer with a Stable Diffusion / LoRA / ControlNet character-synthesis pipeline + a shipped multi-provider vision Chrome extension — and I'd like to bring that work into the FLUX ecosystem." | Lead with diffusion proof + status |

## F — Interview Plan (STAR+R)

| # | JD Hook | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Customize foundation models for specific customer use cases" | Pixel Character Synthesis | Generic SD outputs lack identity consistency across frames | Customize for identity-consistent character generation | SD fine-tuning + LoRA + ControlNet + OpenPose conditioning + LLM orchestrator | Identity-consistent sprite-sheet export pipeline | Customization at the model level beats prompting alone for consistency |
| 2 | "Diagnose performance bottlenecks" | Drowsiness Detection YOLOv8 | Two-stage CNN pipeline too slow for real-time | Hit real-time latency target | Replaced with unified YOLOv8 + sliding-window confidence aggregation + adaptive frame skipping | ~30% inference latency reduction; ~25% false-positive reduction | The right model architecture cuts more latency than micro-optimization |
| 3 | "Design deep product integrations beyond standard API endpoints" | Manga Lens 4-provider integration | 4 vision APIs with inconsistent payloads + WebP vs JPEG quirks | Single user experience across 4 providers | Provider-agnostic adapters + per-domain configs for 29 sites + 7-day cache + WebP/JPEG routing | Shipped on Chrome Web Store with stable UX across providers | Adapter layers are the boring backbone of multi-provider AI products |
| 4 | "Communicate technical solutions across executive and engineer audiences" | Healthcare RAG | Clinicians needed retrieval quality but didn't speak evals | Translate eval gates into clinician-readable docs | Built precision/recall reports + system-limitation docs + audit trails | ~35% retrieval precision; >90% grounded response alignment | Translation is half of customer-facing AI work |

## G — Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Greenhouse JD page renders full content 2026-05-19 | Active | Positive |
| Specific SF comp band ($180-300K) | Active | Positive |
| Concrete hybrid (2+d/wk) policy | Active | Positive |
| Black Forest Labs is well-known (FLUX/SD lineage) | Active | Positive |
| Visa sponsorship not stated | Mild caveat | Neutral |

Real role at a real frontier lab. F-1 OPT status worth verifying on screen.

## H — Draft Application Answers

**Q: Why Black Forest Labs?**
"FLUX and the Stable Diffusion lineage are the technical thread my Pixel Character Synthesis project sits on — Stable Diffusion fine-tuning, LoRA for identity consistency, ControlNet for pose conditioning, an LLM agent orchestrator on top. I'd like to bring that customer-facing customization mindset into a frontier-lab deployment context."

**Q: Visa status?**
"US-based, F-1 OPT, authorized to work now; future sponsorship required."

**Q: Relocation?**
"Open to SF — would need a relocation discussion since I'm currently in Kent, OH."

---

## Keywords (ATS)

Forward Deployed Engineer, Diffusion Models, Stable Diffusion, FLUX, LoRA, ControlNet, Hugging Face Diffusers, PyTorch, Python, Inference Optimization, GPU, Multi-provider AI, Manga Lens, YOLOv8, FastAPI, Docker, Customer-Facing AI, Generative Visual AI, San Francisco, US-based F-1 OPT.
