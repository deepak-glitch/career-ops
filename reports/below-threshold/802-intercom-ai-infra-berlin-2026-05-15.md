# Evaluation: Intercom (Fin) — AI Infrastructure Engineer (Berlin)

**Fecha:** 2026-05-15
**Arquetipo:** AI Platform / MLOps Engineer
**Score:** 2.8/5
**URL:** https://job-boards.greenhouse.io/intercom/jobs/7824142
**Legitimacy:** High Confidence
**Location:** Berlin, Germany (Hybrid — 3 days/week in-office)
**Region:** Intl
**PDF:** Not generated (score < 3.0)

---

## Block A — Role Summary

| Field | Detail |
|-------|--------|
| Archetype | AI Infrastructure — model training pipelines, inference at scale, GPU/CUDA optimization |
| Domain | Customer service AI platform (Intercom Fin AI agent) |
| Function | Build + scale training pipelines for transformer/LLM models; GPU-level performance tuning; autoscaling inference services; mentor team members |
| Seniority | Senior+ (5+ years SWE; hiring + mentoring responsibilities) |
| Remote | Berlin hybrid — 3 days/week in-office |
| Comp | Competitive salary + annual bonus + equity; not disclosed |
| TL;DR | Near-identical JD to the London version (#721, 3.0/5). GPU/CUDA/Triton infra is specialist territory outside Deepak's stack. Senior+ bar with mentoring/hiring is a stretch at 2.5 years. Berlin requires EU work authorization. Score is marginally lower than London due to same role requirements in an equally restricted location. |

This is Intercom's Berlin-based companion posting to the London AI Infrastructure Engineer role (#721, scored 3.0/5 on 2026-05-13). Intercom operates as "Fin" — a full-stack AI company building the next generation of customer service AI. The Berlin team is focused on the AI infrastructure layer: GPU optimization, model training pipelines (large transformer/LLM scale), inference services with autoscaling and reliability, and CUDA/Triton kernel optimization. This is deep ML infrastructure, not applied AI or LLM application development.

---

## Block B — CV Match

| JD Requirement | Deepak Match | Evidence in CV |
|----------------|--------------|----------------|
| 5+ years SWE | Partial gap | ~2.5 years applied AI; 1 year DevOps internship; total ~3.5 years — below 5y floor |
| Model training at LLM/transformer scale | Partial gap | scikit-learn/XGBoost training pipelines (cv.md L27); PyTorch + Hugging Face Transformers usage (cv.md L14); no large-scale distributed training |
| GPU-level tuning, CUDA, Triton | Hard gap | PyTorch usage only; no CUDA/Triton experience documented anywhere in CV |
| Inference at scale, autoscaling | Partial gap | FastAPI/Docker inference services (cv.md L28); load simulation; not at production GPU cluster scale |
| Production environment at meaningful scale | Moderate | Healthcare RAG production (cv.md L25-30); Emerson ERP SQL optimization (cv.md L33-39); but not GPU/ML-infra scale |
| Kubernetes | Partial gap | Docker strong; K8s not deeply evidenced |
| Senior+ mentoring + hiring | Gap | No documented mentoring of engineers or hiring responsibility at 2.5 years |
| AWS or cloud provider expertise (bonus) | Partial | Cloud-ready deployment referenced; no specific AWS/GCP depth |

**Key gaps:**
1. **CUDA/Triton/low-level GPU** — this is the core specialist requirement; major gap with no bridge
2. **5+ years + senior + mentoring/hiring** — Deepak is early-career, below the explicit seniority floor
3. **Berlin EU work authorization** — F-1 OPT does not cover Germany; employer work permit sponsorship required; Intercom notes some sponsorship available but not guaranteed for this role

---

## Block C — Archetype Fit

**AI Platform / MLOps Engineer** is archetype #4 for Deepak, but this specific role is GPU infrastructure specialist, which is a sub-specialty well outside Deepak's documented experience. Deepak's platform experience is containerization, FastAPI services, CI/CD, and LLMOps — not low-level GPU kernel optimization. The London version of this role (#721) scored 3.0/5; Berlin receives 2.8/5 due to equivalent requirements with no EU work auth advantage.

---

## Block D — Comp

Not explicitly disclosed. Berlin senior AI infrastructure engineers typically earn €90K–€150K ($100K–$165K USD). If at the upper end, it could approach Deepak's target, but the senior+ requirement makes that band more realistic for a 5+ year candidate, not a 2.5-year engineer.

---

## Block E — Red Flags & Culture

**Positives:**
- Intercom/Fin is an established, well-known SaaS company with real AI traction
- Visa sponsorship available "for some roles" per JD
- Annual bonus + equity + unlimited PTO above statutory minimums
- Claude Code access and AI tools (culture of AI-native work)

**Red flags:**
- **GPU/CUDA/Triton specialist requirement** — hard gap, no bridge
- **Senior+ bar** — 5+ years required vs. Deepak's 2.5 years
- **Berlin hybrid 3d/wk** — EU work auth required; F-1 OPT does not transfer
- **Mentoring + hiring responsibility** — too early for Deepak's stage
- JD is substantially identical to the London role (#721); no differentiation in requirements

---

## Block F — Score Breakdown

| Dimension | Weight | Score | Notes |
|-----------|--------|-------|-------|
| Archetype fit | 0.30 | 2.5 | GPU infra specialist ≠ Applied AI / LLMOps |
| CV evidence depth | 0.20 | 2.3 | CUDA/Triton hard gap; seniority gap |
| Comp fit | 0.15 | 3.2 | Berlin band potentially in range at senior level |
| Location/auth | 0.15 | 2.0 | Berlin hybrid + F-1 OPT, EU work permit required |
| Cultural | 0.10 | 3.8 | Established SaaS, good culture signals |
| Trajectory | 0.10 | 3.0 | Infrastructure track doesn't align with Deepak's applied AI trajectory |

**Weighted: (2.5×0.30) + (2.3×0.20) + (3.2×0.15) + (2.0×0.15) + (3.8×0.10) + (3.0×0.10)**
= 0.75 + 0.46 + 0.48 + 0.30 + 0.38 + 0.30 = **2.71 → 2.8/5**

---

## Block G — Posting Legitimacy

**High Confidence.** Direct Intercom Greenhouse posting (`job-boards.greenhouse.io/intercom/jobs/7824142`). Content is detailed and specific. Intercom/Fin is a publicly verifiable company with real AI infrastructure work. Visa sponsorship language is present (for some roles). Hybrid policy (3d/wk Berlin) is explicit.

---

## Block H — Recommended Action

**Do not apply.** Hard gaps in GPU/CUDA/Triton are non-negotiable for this role. The seniority floor (5+y, mentoring, hiring) is above Deepak's current stage. EU work authorization is a soft blocker. All three gap categories are individually disqualifying; the combination makes this a clear pass. Reference London version (#721, 3.0/5) as the prior evaluation — same conclusion applies here at a lower score.
