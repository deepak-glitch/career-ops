# Evaluación: WeRide — New Grads 2026 - Software Engineer - Computer Vision

**Fecha:** 2026-05-04
**Arquetipo:** Computer Vision / Multimodal Engineer (Perception for autonomous driving)
**Score:** 3.2/5
**URL:** https://jobs.lever.co/weride/d87ddf51-0def-436f-a178-135481b88f96
**Legitimacy:** High Confidence
**Location:** San Jose, CA — On-site (campus recruiting / new grads 2026 cohort); NASDAQ: WRD; driverless permits in China, UAE, Singapore, US
**PDF:** output/2026-05-04/cv-deepak-mallampati-weride-newgrad-cv-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Computer Vision / Multimodal Engineer (Perception team) |
| Domain | L2-L4 autonomous driving — driverless fleet 2,200+ days; 30 cities, 10 countries |
| Function | Develop CV/ML perception models for obstacle detection, online mapping, scene understanding; multi-sensor fusion |
| Seniority | New Grad 2026 cohort (expected graduation Dec 2025 – Jun 2026); BS/MS CS or related |
| Remote | On-site San Jose, CA |
| Team | Perception (Campus Recruiting) |
| TL;DR | Develop and deploy real-time CV/ML perception models (object detection, segmentation, motion prediction) plus VLM/LLM integration for autonomous driving scene understanding. |

## B) Match con CV

| JD requisito | CV evidence |
|---|---|
| Computer vision deep learning models (object detection, segmentation) | YOLOv8 driver drowsiness detection w/ unified detection+classification (~30% inference latency reduction); LabelImg annotations, augmentation, sliding-window confidence aggregation (cv.md L60, L78) |
| VLM/LLM integration for perception | Manga Lens 4-vision-provider Chrome extension (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) w/ multi-section capture + coordinate remap (cv.md L60); Agentic Pixel ControlNet+OpenPose+SD pose-controlled CV pipeline (cv.md L66) |
| Strong programming in C++ or Python | Python: production at Progress Solutions, Suvidha, projects (cv.md L12); C++: Arduino only — gap |
| Data pipelines (mining, labeling, training, evaluation) | EHR preprocessing pipelines (Pandas/NumPy) raised dataset reliability >98%, instability -40% (cv.md L29); LabelImg + augmentation pipeline for YOLOv8 drowsiness (cv.md L78) |
| Software & computing fundamentals (data structures, 3D geometry, advanced algorithms) | NetworkX road-network graph w/ Haversine edges, Dijkstra, betweenness centrality, Louvain community detection, MST extraction on 20k-node subgraph (~30% runtime reduction) (cv.md L83) — graph algorithms but not 3D geometry |
| Multi-modal sensor fusion | Manga Lens 4-provider abstraction + per-domain selector configs (cv.md L60); Dream Decoder coordinated multimodal APIs (Perplexity Sonar + Replicate) w/ structured prompt transformation (cv.md L74) — multi-source orchestration but not LiDAR/camera/IMU sensor fusion |

**Gaps:**
1. **Robotics / autonomous driving specialty** — JD names obstacle detection, online mapping, motion prediction, multi-sensor (LiDAR) fusion, state estimation, 3D reconstruction, visual odometry. Deepak has CV (YOLOv8, OpenCV, Stable Diffusion/ControlNet) but **no robotics core**, no LiDAR, no 3D reconstruction, no visual odometry. Hard specialty gap.
2. **C++ at production level** — JD says "C++ or Python" so Python alone qualifies, but autonomous driving perception teams ship C++ for onboard inference. Arduino-only C++ is a soft gap.
3. **New Grad cohort eligibility** — JD says "expected graduation Dec 2025 – Jun 2026"; Deepak graduated **May 2025** (M.S. Kent State). Borderline — technically just outside the window but recent enough to flag in screen as "May 2025 grad, MS CS, in OPT cohort window."
4. **San Jose on-site** — Deepak is in Kent, OH; relocation required. NASDAQ-listed US tech entity → visa sponsorship probable for F-1 OPT.

## C) Nivel y Estrategia

- **Detected level:** New Grad cohort (campus recruiting).
- **Vender:** "M.S. CS Kent State (May 2025), 2.5y production AI w/ healthcare RAG + agentic LLM + YOLOv8 CV (~30% latency reduction). Manga Lens shipped to Chrome Web Store (4 vision providers, 29 sites). Open to San Jose relocation."
- **Si downleveled (not new grad cohort):** Apply to WeRide's broader Perception or Applied AI roles since the new-grad window may be tight.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | $120K – $165K base (per JD) |
| Funding | NASDAQ: WRD (public); driverless permits in 4 countries; commercial-stage L2-L4 |
| Visa | NASDAQ-listed US tech entity — H-1B sponsorship probable; F-1 OPT can start with STEM extension |
| Demand | Autonomous driving perception is a top-3 CV hiring track; new-grad CV pipeline is competitive |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | Lead with "Computer Vision + multi-provider AI vision (YOLOv8, OpenCV, multi-modal pipelines, ControlNet/Stable Diffusion)" + "M.S. CS Kent State May 2025, ~30% inference latency reduction on real-time YOLOv8" | Mirror JD CV/ML perception phrasing |
| 2 | Bullets | Surface YOLOv8 (~30% latency), Manga Lens 4-vision-provider production extension, Stable Diffusion + ControlNet + OpenPose pose-controlled pipeline, Dream Decoder multimodal API orchestration | Direct CV/multimodal proof |
| 3 | Skills | YOLOv8, OpenCV, ControlNet, OpenPose/MediaPipe, Stable Diffusion, multi-provider AI vision, Python → top of skills | Keyword-first ATS pass |
| 4 | Projects | Driver Drowsiness YOLOv8 first, Manga Lens second, Agentic Pixel SD+ControlNet+OpenPose third | Lead with real-time CV |
| 5 | Footer | "Open to San Jose CA on-site; F-1 OPT (M.S. CS, May 2025); STEM OPT eligible" | Match JD location + cohort |

## F) Plan de Entrevistas

| # | Requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Real-time CV deep learning (object detection / classification) | YOLOv8 driver drowsiness | Two-stage CNN was too slow for real-time fatigue monitoring | Replaced w/ unified YOLOv8 detection+classification model | Single-pass real-time inference | ~30% inference latency reduction | Unified models > pipelines for latency-critical CV |
| 2 | Robust real-world CV under noise | YOLOv8 sliding-window confidence | Blink-driven false positives degraded reliability | Sliding-window confidence aggregation + adaptive frame skipping + NMS tuning | Stable real-time operation | ~25% false-positive reduction | Temporal aggregation > per-frame thresholds for stability |
| 3 | Multi-modal AI integration | Manga Lens 4-vision-provider | Real-time webtoon translation needed multi-provider robustness | 4 AI vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama) w/ per-provider payload handling | Shipped to Chrome Web Store | 29-site coverage, narrowed permissions, 7-day cache | Provider redundancy + per-provider payload routing beats single-provider |
| 4 | Pose-controlled / multi-modal generation | Agentic Pixel SD+ControlNet+OpenPose | Identity-consistent pose-controlled pixel character synthesis | Stable Diffusion + LoRA identity + ControlNet + OpenPose/MediaPipe pose conditioning + LLM agent orchestrator | Phased pipeline w/ sprite-sheet export | Latent-space consistency for animation smoothness | Multi-conditioning (identity + pose + LLM decomposition) > single-prompt generation |
| 5 | Data pipelines (training/eval) | YOLOv8 LabelImg pipeline | Training data needed augmentation for lighting/head-pose robustness | LabelImg annotations + augmentation for lighting/head-pose robustness | Training-grade dataset | Robust real-time inference under varied conditions | Augmentation specificity > volume for narrow-domain CV |
| 6 | Algorithms / data structures | OSM road network | Geospatial routing on 20k-node subgraph | NetworkX DiGraph + Haversine edges + Dijkstra + betweenness + Louvain + MST | Subgraph backbone analysis | ~30% runtime reduction via subgraph scoping | Subgraph scoping + algorithmic choice > brute-force on large graphs |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Lever API; full JD body returned | Positive |
| Apply button | Active | Positive |
| Description quality | Names team mission, sensor stack, downstream modules (prediction, planning), specific algorithms (object detection, segmentation, motion prediction, sensor fusion) | Positive |
| Salary transparency | $120K - $165K disclosed | Positive |
| Reposting | Multiple WeRide new-grad 2026 roles active (CV, General SWE, Algorithm) | Positive |
| Layoffs / freeze | None announced; commercial-stage public co | Positive |
| Role market context | Autonomous driving perception is a competitive but real hiring track; WeRide actively scaling US ops | Positive |

**Assessment:** **High Confidence** — NASDAQ-listed, public company, full JD, salary disclosed, multi-country driverless permits, scaling US new-grad cohort.

---

## H) Draft Application Answers (score 3.2 — included for ready-to-apply)

**Why are you interested in WeRide?**
> WeRide is one of the very few companies operating commercial-stage L2-L4 autonomous driving with driverless permits across four countries — that's a real production CV/ML system at scale, not a demo. My core interest is real-time perception under noisy, real-world conditions: I rebuilt a driver-drowsiness pipeline as a unified YOLOv8 detection+classification model (~30% latency reduction), used sliding-window confidence aggregation + adaptive frame skipping + NMS tuning to suppress blink-driven false positives by ~25%, and I've shipped a multi-provider AI vision Chrome extension (Manga Lens, 4 vision providers, 29 sites) to the Chrome Web Store. I want to bring that real-time CV + multi-modal integration discipline to the Perception team.

**Tell us about a CV or ML system you've shipped.**
> Driver Drowsiness Detection with real-time YOLOv8. The core decision was to replace a two-stage CNN pipeline (face detection → drowsiness classification) with a single YOLOv8 model that does both — that alone cut inference latency ~30%. The second decision was about reliability: blink-driven false positives degraded the system. I added sliding-window confidence aggregation across frames + adaptive frame skipping + NMS tuning. False positives dropped ~25% and the system stayed stable in real-time operation. I learned that for latency-critical CV, unified architectures + temporal aggregation beat per-frame pipelines.

---

## Keywords extraídas

Computer Vision, Perception, YOLOv8, OpenCV, Object Detection, Segmentation, Motion Prediction, Multi-Modal, VLM/LLM Integration, ControlNet, OpenPose, Stable Diffusion, Real-Time Inference, Sensor Fusion, Python, San Jose CA, Autonomous Driving, New Grad 2026, NASDAQ-Listed, F-1 OPT
