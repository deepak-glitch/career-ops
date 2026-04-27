# Evaluación: General Robotics — Forward Deployed Engineer (AI)

**Fecha:** 2026-04-27
**Arquetipo:** Computer Vision / Multimodal + Forward Deployed Engineer
**Score:** 2.8/5
**URL:** https://jobs.ashbyhq.com/generalrobotics/eb20207f-f021-4b78-9454-bd1b7355ae83
**Legitimacy:** High Confidence
**Location:** Redmond, WA — On-site (US auth required; preference for MS/PhD)
**PDF:** Not generated (score < 3.0)

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Robotics + CV FDE for GRID platform |
| Domain | Robotics, simulation, ML/CV/SLAM |
| Function | Adapt models, lead data collection, deploy to customers |
| Seniority | Mid (BS required, MS/PhD preferred) |
| Remote | On-site Redmond, WA |
| Team | GRID platform / Customer projects |
| TL;DR | Bridge GRID platform → real-world AI for robotics customers; adapt CV/SLAM models, lead data campaigns. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| ML / CV applied to robotics | YOLOv8 drowsiness detection (cv.md L68); video summarization w/ transformers (cv.md L74) |
| Sim platforms (AirSim, CARLA, Isaac Sim, Mujoco) | None — explicit gap |
| Sensor fusion + model inference pipelines | None — explicit gap |
| SLAM, navigation | None — explicit gap |
| Data collection + labeling at scale | LabelImg + augmentation for YOLOv8 (cv.md L69) |

**Gaps:**
1. Robotics-specific simulation tooling — hard gap (preferred but not required).
2. SLAM / navigation — hard gap.
3. Sensor fusion — hard gap.
4. MS/PhD preferred (Deepak has MS — partial match).

## C) Nivel y Estrategia

- JD: BS required, MS/PhD preferred. Deepak meets MS bar but lacks robotics simulation experience.
- Vender stretch: lean on YOLO + applied CV + RAG-grounded reasoning; offer fast-ramp on simulation tooling.
- Si downlevelan: not applicable — this is a domain mismatch more than a level mismatch.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Redmond robotics ML (Glassdoor, Levels) | $130K–$190K base mid; equity at early-stage robotics |
| Funding | General Robotics: seed/Series A robotics intelligence startup |
| Visa | US auth required per JD — F-1 OPT acceptable; future H-1B sponsorship TBD |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | Lead with "Applied AI engineer with shipped CV (YOLOv8) and multimodal systems" | Match CV-heavy JD |
| 2 | Bullets | Surface YOLOv8, ControlNet, OpenPose | Vision/robotics adjacencies |
| 3 | Projects | Drowsiness + Pixel Character Synthesis (ControlNet/Pose) | Pose-conditioned CV signal |
| 4 | Skills | Move "Computer Vision & Multimodal" to top | JD-aligned |
| 5 | Footer | "US-based, F-1 OPT, open to Redmond relocation" | Address on-site |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | CV applied | YOLOv8 drowsiness | Two-stage CNN was slow | Unify into one model | YOLOv8 + sliding-window confidence | 30% latency drop, 25% FP cut | Single model > pipeline glue |
| 2 | Pose-conditioned synth | Pixel Character | Identity drift across frames | Latent-space consistency | ControlNet + OpenPose + LoRA | Identity-consistent sprites | Conditioning > sampling tricks |
| 3 | Customer-facing AI | HIPAA RAG | Clinicians need grounded retrieval | Recursive chunker + eval | RAG harness | 35% retrieval gain | Eval first |
| 4 | Production deploy | PSI Docker | Defects after deploy | Logging + load sim | Containerized FastAPI | 30% defect reduction | Observability matters |
| 5 | Multimodal orchestration | Dream Decoder | Naïve prompts fail | Structured prompt transforms | Sonar + Replicate | 30% alignment gain | Structure beats provider |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Live on Ashby + Adzuna + fwddeploy | Positive |
| JD specificity | Names AirSim, CARLA, Isaac Sim, Mujoco — concrete | Positive |
| Company stage | Early-stage robotics intelligence | Neutral |
| Niche | Robotics intelligence is niche → expected longer fill | Neutral |

**Assessment: High Confidence.** Genuine niche role; concrete tooling list signals real engineering scope.

## Keywords extraídas

Forward Deployed Engineer, Robotics, AI, GRID, computer vision, SLAM, navigation, AirSim, CARLA, Isaac Sim, Mujoco, sensor fusion, ML inference, simulation, Redmond, Python.
