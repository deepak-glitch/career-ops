# Evaluación: Buzz Solutions — Computer Vision & Machine Learning Engineer

**Fecha:** 2026-04-26
**Arquetipo:** Computer Vision / Multimodal Engineer
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/buzzsolutions/jobs/5195601008
**Legitimacy:** High Confidence
**Location:** Remote (US, but no visa sponsorship)
**PDF:** output/2026-04-26/cv-deepak-mallampati-buzz-solutions-cv-ml-2026-04-26.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Computer Vision / Multimodal Engineer |
| Domain | Power grid infrastructure analytics — defect detection, thermal anomaly, vegetation monitoring |
| Function | End-to-end CV/ML projects: research → adapt papers → ship production models |
| Seniority | Mid (2–4 yrs CV/ML industry experience) |
| Remote | Remote (US-only implied; no visa sponsorship) |
| TL;DR | Mid CV/ML engineer applying object detection / segmentation / vision transformers to power grid imagery; explicit no-sponsorship blocker for F-1 OPT long-term path. |

## B) Match con CV

| JD requirement | CV / project line | Match |
|---|---|---|
| 2–4 yrs CV/ML industry experience | 2.5+ yrs Applied AI (cv.md:8) — CV exposure mostly via projects + Suvidha role + Drowsiness | ⚠ Partial (industry CV depth is < 2 yrs continuous) |
| Object detection, semantic segmentation | YOLOv8 Driver Drowsiness (cv.md:68-69), Manga Lens panel detection (cv.md:60) | ✅ |
| Vision transformers, foundation models | Hugging Face Transformers + Diffusers (cv.md:14); transformer video summarization (cv.md:44-45) | ✅ |
| Read papers + adapt + validate | Not explicit, but YOLOv8 swap-in (replacing two-stage CNN) + ControlNet/OpenPose pipeline implies | ⚠ Adjacent — frame in cover letter |
| Python + PyTorch, Lightning, OpenCV, NumPy, pandas, Scikit-Learn | Python, PyTorch, OpenCV, scikit-learn, Pandas, NumPy, Hugging Face Diffusers (cv.md:12-16) | ✅ (Lightning not explicit) |
| Git, Pytest, GitHub Actions, Docker, type hinting | Docker (cv.md:17), Jenkins CI/CD (cv.md:36); GH Actions / Pytest not explicit | ⚠ Partial |
| Hyperparameter tuning, ablation, error analysis | Threshold calibration + class weighting (cv.md:27); confidence aggregation + NMS tuning (cv.md:69) | ✅ |
| Power grid / utilities domain | None | ❌ Domain ramp |
| **No visa sponsorship** | F-1 OPT (cv.md:97-98) | ❌ Hard blocker for long-term |

**Gaps + mitigation:**
- *No visa sponsorship.* Hard blocker — F-1 OPT can work now (~2.5 more years on STEM extension) but no long-term path. Disclose upfront; only apply if Deepak is OK with a fixed-term horizon.
- *Power grid domain.* Mitigation: frame healthcare imaging discipline (HIPAA, audit) as analog to safety-critical infrastructure.
- *Lightning, GitHub Actions specifics.* Mitigation: ramp-on-job; cite PyTorch + Jenkins CI/CD as adjacents.

## C) Nivel y Estrategia

JD's "2–4 yrs CV/ML industry experience" is a soft stretch given Deepak's CV work is mostly project-driven (YOLOv8 Drowsiness, Manga Lens, video summarization at Suvidha) rather than 2+ continuous years of industry CV. Position as a strong project-driven candidate with applied production discipline.

**No-visa-sponsorship reality:** Apply only if Deepak accepts that this is a 2-year max horizon (current OPT + STEM ext). Otherwise SKIP and prefer sponsorship-friendly CV roles.

## D) Comp y Demanda

| Datapoint | Source |
|---|---|
| Posted band: not listed | JD |
| Levels.fyi CV/ML mid: $130–170K base + equity (early-stage startup) | WebSearch |
| Funding signal | Buzz Solutions YC company; Series A 2024 | WebSearch |
| Demand: stable but niche (utilities AI) | WebSearch |

Likely $130–160K base; small-team equity. No sponsorship is the dominant economic signal — discount accordingly.

## E) Plan de Personalización

| # | Section | Current | Proposed change | Why |
|---|---|---|---|---|
| 1 | Summary | Healthcare RAG focus | Add "computer vision (YOLOv8 detection, transformer-based vision pipelines)" prominently | Mirror JD's CV emphasis |
| 2 | Skills | CV in Multimodal section | Promote "Computer Vision: YOLOv8, OpenCV, ControlNet, vision transformers, NMS/tracking" line above LLM line for this app | JD is CV-first |
| 3 | Project order | Manga Lens first | Lead with YOLOv8 Drowsiness Detection + Suvidha Video Summarization (CV/transformer pairing) | Direct archetype fit |
| 4 | Experience | RAG bullets first | Reorder to lead with model-deployment + structured eval discipline (transferable to CV) | Shows production discipline |
| 5 | Cover letter | None | Address "I read papers and ship": cite the YOLOv8 single-stage swap-in vs two-stage CNN as a paper-driven decision | Direct JD ask |

## F) Plan de Entrevistas (STAR+R)

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Object detection production | YOLOv8 Drowsiness | Two-stage CNN was slow + brittle | Reduce inference latency, raise stability | Switched to unified YOLOv8 + LabelImg + augmentation + NMS tuning + sliding-window confidence | ~30% latency reduction; ~25% fewer false positives | Single-stage detectors win on real-time; learned to budget latency before architecture choice |
| 2 | Vision transformer / foundation models | Suvidha video summarization | 5,000+ recorded sessions; long-context | Hierarchical summarization with timestamp alignment | Transformer-based hierarchical abstractive + clip extraction + Flask API | 60–70% review-time reduction; ~85% highlight alignment | Long-context needs hierarchical chunking; flat summaries lose temporal structure |
| 3 | Read papers + adapt + validate | ControlNet + OpenPose pose conditioning | Identity-consistent pixel character synthesis | Pose-controlled generation | Stable Diffusion + LoRA + ControlNet + OpenPose/MediaPipe + LLM agent orchestrator | Working pipeline (ongoing); identity preservation improved | Paper-to-prod is mostly about pre-training data alignment, not just architecture |
| 4 | Error analysis + structured experimentation | Drowsiness false-positive class | Blink-driven false positives | Suppress without losing true sleep events | Categorized failure modes; sliding-window confidence aggregation | ~25% FP reduction | Always categorize failures by mechanism before tuning thresholds |
| 5 | Production packaging | FastAPI/Flask + Docker | Deploy CV inference services | Reliable production | Docker + structured logging + load simulation | ~30% post-deploy defect reduction | Logging at preprocessing boundaries beats logging at model boundary |
| 6 | Adjacent ML eval discipline | Patient risk recall | Imbalanced data, recall-critical | Lift recall while preserving precision | Class weighting + threshold calibration + walk-forward | 15–20% recall gain; precision >90% | Recall lifts come from threshold tuning more than model swaps |

**Red-flag answers:**
- *"No visa sponsorship — that OK?"* → "I'm on F-1 OPT, US-based; ~2 years runway with STEM extension. Want to be transparent about long-term — happy to discuss whether the role works on that horizon."
- *"Power grid domain — why?"* → "Healthcare imaging gave me HIPAA-grade safety discipline; power grid is similar in safety-critical, regulated, infrastructure imagery."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting age | First published 2026-04-21, updated 2026-04-22 (recent) | Positive |
| Apply button | Active on Greenhouse | Positive |
| Tech specificity | Names PyTorch, Lightning, OpenCV, NumPy, pandas, Scikit-Learn, Pytest, GitHub Actions, Docker, type hinting; explicit responsibilities + qualifications | Positive |
| Comp transparency | Not listed (small startup; common pattern) | Neutral |
| Visa policy explicit | "Buzz Solutions does not provide Visa sponsorship for work authorizations in the United States at this time" | Positive (clarity) but Negative for Deepak |
| Layoffs / freeze | None reported | Neutral |
| Role-company fit | YC startup CV-for-power-grid is on-brand | Positive |

## H) Draft Application Answers

*(Score 3.0 — minimal H block; draft only on user's request.)*

---

## Keywords extraídas

Computer Vision, Machine Learning Engineer, YOLOv8, object detection, semantic segmentation, vision transformers, foundation models, PyTorch, Lightning, OpenCV, scikit-learn, Pandas, NumPy, GitHub Actions, Pytest, Docker, type hinting, hyperparameter tuning, ablation, error analysis, paper implementation, power grid, infrastructure, defect detection, thermal anomaly, vegetation monitoring
