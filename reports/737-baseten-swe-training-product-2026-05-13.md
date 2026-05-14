# Evaluación: Baseten — Software Engineer, Training Product

**Fecha:** 2026-05-13
**Arquetipo:** AI Platform / MLOps Engineer + Applied AI / LLM Engineer
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/baseten/126d54b4-a7bc-4456-bf4d-5d224e4f5d63
**Legitimacy:** High Confidence
**Location:** San Francisco + (New York secondary)
**Region:** US
**PDF:** output/2026-05-13/cv-deepak-mallampati-baseten-swe-training-product-2026-05-13.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | SWE on Baseten Training Product — multi-node training, serverless RL, checkpointing pipelines |
| Domain | Baseten training infrastructure — Kubernetes-layer schedule/startup/inter-node comm; vLLM + Baseten Inference Stack integration |
| Function | Build training features (checkpointing, multi-node, RL) end-to-end from API/UI down to infra layer; fine-tune to understand UX |
| Seniority | "Architect solutions from API/UI down to infra" — implies mid+ |
| Remote | SF primary, NY secondary |
| Comp | $165K – $330K + equity |
| TL;DR | Strong full-stack potential but training-infra (Kubernetes/multi-node/RL/checkpointing) is below Deepak's current systems experience. Bridge via Docker/FastAPI + Stable Diffusion LoRA fine-tuning + agent orchestration. F-1 OPT navigable (NY secondary). Mid-tier vs #733 Applied AI Inference. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Own training product features end-to-end (API/UI → infra) | E-Farming founder full-stack PHP/MySQL marketplace (cv.md L87); Manga Lens shipped Chrome extension full-stack (cv.md L60); Dream Decoder FastAPI + React/TypeScript/Vite full-stack (cv.md L66) |
| Multi-node training feature shipping | **Gap** — Docker + FastAPI deployment infra (cv.md L28, L63); not multi-node training/K8s scheduling |
| Serverless RL feature shipping | **Gap** — no RL training experience |
| Checkpointing pipeline | **Gap** — model checkpointing not in CV |
| Architect from API/UI down to infra layer | E-Farming full-stack + Dream Decoder full-stack + Manga Lens architecture (cv.md L60, L66, L87) |
| Fine-tune models yourself to understand workflows | Stable Diffusion + LoRA fine-tuning + ControlNet for identity consistency (cv.md L63) |
| Work with research engineers on SOTA training techniques | Cross-functional collaboration at Progress Solutions (cv.md L30); Suvidha hierarchical summarization research-adjacent (cv.md L44) |
| Customer-obsessed shipping mindset | Manga Lens shipped to Chrome Web Store + privacy policy (cv.md L60); E-Farming founder 80-120 users (cv.md L87) |

**Gaps:**
1. **Training infrastructure (K8s scheduling, multi-node, RL, checkpointing) — direct gap.** Deepak's infra is Docker + FastAPI + simple CI/CD. Not K8s/multi-node.
2. **LLM fine-tuning at scale — gap.** Stable Diffusion LoRA is closest; no LLM fine-tuning experience.
3. SF primary + F-1 OPT relocation

## C) Match con North Star

**AI Platform / MLOps Engineer** is the archetype but training-infra specifically is below Deepak's experience. Full-stack shipping muscle helps; deep infra/K8s/RL specifics need significant ramp.

## D) Comp

$165K-$330K + equity. Same Baseten band. Training-product team has high ceiling.

## E) Cultural / Red Flags

**Positives:**
- Full-stack shipping (API/UI → infra) fits Deepak's E-Farming + Manga Lens muscle
- $165-330K + equity
- Customer-obsessed framing matches Deepak's founder narrative
- NY secondary helps F-1 OPT

**Red flags:**
- K8s/multi-node/RL/checkpointing direct gaps
- LLM fine-tuning at production scale gap
- SF primary

## F) Score breakdown

| Dim | Weight | Score | Notes |
|---|---|---|---|
| Archetype fit | 0.30 | 3.4 | Platform fit; training infra depth gap |
| CV evidence depth | 0.20 | 3.2 | Full-stack fits; training infra gap |
| Comp fit | 0.15 | 4.2 | $165-330K + equity |
| Location/auth | 0.15 | 3.2 | SF primary; NY secondary |
| Cultural | 0.10 | 4.0 | Customer-obsessed + research adjacency |
| Trajectory | 0.10 | 4.2 | Series E |

**Weighted: 3.5/5**

## G) Posting Legitimacy

**High Confidence.** Ashby GraphQL confirmed listed; comp transparent; posting (2026-01-22); Series E + named training features (vLLM/checkpointing) publicly built.

## H) Recommended next step

**Apply selectively.** Lead with E-Farming + Manga Lens + Dream Decoder full-stack shipping + Stable Diffusion LoRA fine-tuning experience. Acknowledge K8s/multi-node/RL training infra as substantial ramp. Prioritize Baseten #733 (Applied AI Inference) over this role.
