# Evaluación: Helsing — AI Research Engineer - ML Engineering

**Fecha:** 2026-05-14
**Arquetipo:** AI Platform / MLOps Engineer (ML systems + distributed training)
**Score:** 2.5/5
**URL:** https://helsing.ai/jobs/4778869101?gh_jid=4778869101
**Legitimacy:** High Confidence
**Location:** Berlin; London; Munich
**Region:** Intl
**PDF:** Not generated (score < 3.0)

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | ML Systems / Infrastructure Engineer (deep learning framework engineering + distributed training) |
| Domain | Helsing — defense AI (autonomous systems, sensor fusion, computer vision for defense applications) |
| Function | Extend deep learning frameworks (PyTorch-based); scale distributed training infrastructure; design data strategy for large-scale GPU training |
| Seniority | Mid+ (MSc or PhD in CS/STEM with ML/DL focus; strong Python + PyTorch/JAX/TF; custom layers + distributed training) |
| Remote | Berlin / London / Munich (European offices; no remote) |
| Comp | Competitive salary + VSOP; €2,500 relocation + 4 weeks accommodation; €500/yr learning; gym membership |
| TL;DR | Strong stack overlap (MSc + PyTorch + Hugging Face) but three significant gaps: geo veto (EU locations, F-1 OPT), defense domain (security clearance likely), and distributed training / GPU cluster experience (not in Deepak's profile). Score limited to 2.5. |

## B) Match con CV

| JD Requirement | CV Evidence |
|---|---|
| MSc or PhD in CS/STEM with ML/DL focus | Master's Degree, Kent State University (cv.md L90) — MSc ✓ (degree name not listed but CS-adjacent) |
| Strong Python + proficiency with PyTorch / JAX / TF | Python primary (cv.md L12); PyTorch (cv.md L14); Hugging Face Transformers + Diffusers (cv.md L14) ✓ |
| Write custom layers, loss functions | Hugging Face Transformers usage (cv.md L14); YOLOv8 with augmentation + NMS tuning (cv.md L68-70) — custom config, not writing custom CUDA kernels |
| Debug production ML pipelines | Healthcare RAG retrieval precision debugging (cv.md L25); Emerson performance dashboards for root-cause analysis (cv.md L37) ✓ (partial match — not GPU pipeline debugging specifically) |
| **Large-scale GPU cluster training** (nice-to-have) | No distributed training, NCCL, MPI, or cluster orchestration in CV. Significant gap. |
| **Custom distributed training loops** | PyTorch training experience (cv.md L14) but not distributed/multi-GPU training loops |
| Slurm / Kubernetes / Ray (nice-to-have) | Docker ✓ but no Slurm or Ray |
| Multimodal dataset experience (nice-to-have) | Video summarization datasets (Suvidha, cv.md L74); YOLOv8 labeled dataset + augmentation (cv.md L68-70) — partial match |

**Gaps:**
1. **Geographic / F-1 OPT** (soft blocker): Berlin/London/Munich require EU work authorization. Deepak is US-based F-1 OPT; relocation requires company visa sponsorship for UK/EU. Helsing offers relocation support (€2,500 + 4 weeks), but EU work auth may take months. Flag for Deepak to assess.
2. **Large-scale GPU cluster training** (technical gap): No distributed multi-GPU training, NCCL, or Slurm experience. Helsing trains large models for defense applications — this is core to the role.
3. **Defense domain** (domain gap): Helsing is defense AI. Security clearance may be required for certain projects. Non-EU citizens may face additional vetting. F-1 OPT adds complexity.
4. **Custom CUDA / GPU kernels**: Deepak uses PyTorch but hasn't written custom GPU code.

## C) Match con North Star

Moderate alignment with AI Platform archetype (ML infrastructure) but the specifics (defense, distributed training, GPU systems) are a significant step beyond Deepak's applied AI (healthcare RAG, prediction, agentic workflows). Helsing's ML Engineering role is closer to ML Systems Engineer than Applied AI Engineer.

## D) Comp

Competitive salary + VSOP (EU standard — likely €70-110K for ML Engineer in Berlin/Munich; London typically higher). Relocation support (€2,500 + 4 weeks). Learning allowance €500/yr. Below US market rates for comparable roles, partially offset by lower cost of living (Berlin < NYC/SF).

## E) Cultural / Red Flags

**Positives:** Helsing is a premium European defense AI company; strong ML research culture; relocation support; learning budget; well-funded.

**Red flags:**
- **Defense domain**: Ethical considerations around autonomous weapons AI; sector may not align with Deepak's values
- **F-1 OPT / EU work auth**: Requires visa sponsorship for EU; complex for F-1 holders
- **GPU cluster training gap**: The core technical requirement is not in Deepak's profile
- **No remote**: All EU office locations

## F) Recomendación

**Score: 2.5/5 — Evaluate interest; do not apply unless open to EU relocation + defense domain.**

If Deepak is open to EU relocation and defense AI, the MSc + PyTorch + debugging experience is a reasonable starting point. The distributed training and GPU cluster gaps need bridging (3-6 months of focused project work). If Deepak prefers US-focused and civilian AI — skip.

## G) Legitimacy Detail

- **Posting freshness**: Confirmed active on Greenhouse (Helsing board) 2026-05-14 (full content returned by scan.mjs --intl)
- **Comp**: Disclosed as competitive + VSOP; relocation allowance stated
- **Specificity**: High — concrete technical requirements (NCCL, MPI, Slurm, custom layers)
- **Company legitimacy**: Helsing well-documented defense AI company (Series B/C, €500M+ raised)
- **Verdict**: High Confidence — real, active opening; geo + technical gaps are main limiters
