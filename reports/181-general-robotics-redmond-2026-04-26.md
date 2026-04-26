# Evaluación: General Robotics — Robotics Engineer (Redmond, WA)

**Fecha:** 2026-04-26
**Arquetipo:** Computer Vision / Multimodal + AI Forward Deployed (robotics field deployment)
**Score:** 3.2/5
**URL:** https://jobs.ashbyhq.com/generalrobotics/42ae26cc-4e6e-4c33-be7e-8ade29690ac6
**Legitimacy:** High Confidence
**Location:** Redmond, WA — On-site / hybrid; **US work authorization required** (F-1 OPT eligible; future H-1B sponsorship may need confirmation)
**PDF:** output/2026-04-26/cv-deepak-mallampati-general-robotics-redmond-2026-04-26.pdf
**Verification:** Ashby GraphQL ApiJobPosting (full descriptionHtml + salary band)

---

## A) Resumen del Rol

| Campo | Valor |
|------|-------|
| Empresa | General Robotics (Physical AI / robot intelligence platform GRID) |
| Rol | Robotics Engineer — system integration on physical hardware + customer deployments |
| Arquetipo | CV/ML on edge + Forward Deployed (robotics) |
| Domain | General robot intelligence: aerial, wheeled, humanoid, quadruped, robotic arms |
| Function | Robot setup, model deployment on edge, experiment design, data engineering, optimization |
| Seniority | Mid (2+ yrs) — Master's required (completed or in progress) |
| Remote | Redmond, WA — on-site or hybrid; US work auth |
| TL;DR | US-authorized, $155–205K base, 2+ yrs, Master's. Strong CV/ML overlap; clear ROS/edge gap. Best-fit role in this batch. |

## B) Match con CV

| Requisito | CV evidence |
|-----------|-------------|
| Master's in Robotics, CS, or related | M.S. Kent State University 2025 (cv.md L91-93) |
| 2+ yrs in development & implementation of robotics, ML, or control algorithms | 2.5+ yrs Applied AI/ML (cv.md L20-30); ML/CV/agentic systems |
| Strong proficiency in Python, C++ | Python ✓ (cv.md L12); C++ Arduino-only (cv.md L12, L80) — partial |
| Robotics hardware/software stacks (e.g., ROS/ROS2) | **Gap** — no ROS/ROS2 in CV; closest is Arduino + DHT11 + DS3231 sensor pipelines (cv.md L80-81) |
| End-to-end robot learning systems implementation | Adjacent — Driver Drowsiness Detection System unified YOLOv8 pipeline (cv.md L68-69); Agentic Pixel Character (LLM agent orchestrator + ControlNet + OpenPose, cv.md L62-63) |
| Computer vision and machine learning from a robotics perspective | YOLOv8 detection-classification, OpenCV (cv.md L15, L68-69); MediaPipe/OpenPose (cv.md L15, L62) |
| Edge compute (NVIDIA Jetson, bandwidth/compute/latency constraints) | Partial — Arduino IoT pipeline (cv.md L80-81) and ~30% inference latency reduction in YOLOv8 (cv.md L69) |
| Data acquisition + fine-tuning data routines | EHR preprocessing pipelines, dataset reliability >98% (cv.md L29); Stable Diffusion fine-tuning + LoRA (cv.md L62-63) |
| Customer site travel | OK; comparable to FDE travel cadence |
| US work authorization | F-1 OPT (cv.md L98) — currently authorized; future sponsorship may be needed |

**Strengths:** Real CV/ML deployment experience; latency-aware design; multi-modal pipelines (LLM + vision + control via OpenPose); Master's just completed. Salary band ($155–205K) is well above target ($100–130K).

**Gaps:** ROS/ROS2 (zero exposure); humanoid/quadruped form factors specifically (Deepak's CV is in driver monitoring + pixel character + healthcare); F-1 OPT longevity (24 months STEM extension on Master's; sponsorship clarity matters for >2 yrs).

## C) Nivel y Estrategia

- **JD level:** Mid (2+ yrs).
- **Candidate level:** Mid IC (~2.5 yrs).
- **Sell-up frame:** "Real-time YOLOv8 unified detection-classification (~30% latency reduction) + multi-provider vision integration (Manga Lens 4-provider pipeline) + LLM agent orchestrator for pose-controlled synthesis demonstrates end-to-end robot-adjacent systems thinking under edge constraints."
- **Down-level plan:** If Deepak's lack of ROS surfaces as a blocker, propose a 30-day ramp ("I'll build a public ROS2 + Jetson demo before kick-off").
- **Recommendation:** **Apply.** US auth + comp band + master's-level technical scope + CV adjacency outweigh ROS gap.

## D) Comp y Demanda

| Datapoint | Source | Notes |
|-----------|--------|-------|
| Listed band (Robotics Engineer, Redmond) | JD body | $155K–$205K base + benefits |
| Levels.fyi peers (Robotics Engineer mid-level) | Levels.fyi | $150–220K total comp at AI/robotics startups |
| Deepak's target | profile.yml | $100–130K — JD lower bound is well above |
| Demand | Physical AI is hot (2026) | Robotics + foundation models seeing real hiring |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Lead with "edge-deployed CV/ML pipelines with measured latency wins" + "multi-provider integration" | Mirrors JD's edge compute + system integration emphasis |
| 2 | Bullet 1 | Promote YOLOv8 unified detection-classification (~30% inference latency reduction, sliding-window confidence aggregation, NMS tuning) | Direct match to "edge compute + optimization" |
| 3 | Bullet 2 | Lift Agentic Pixel Character (LoRA fine-tuning + ControlNet + OpenPose + LLM orchestrator) | Maps to "model deployment on physical hardware" + "data engineering for fine-tuning" |
| 4 | Bullet 3 | FastAPI/Flask + Docker + structured logging + load simulation (~30% defect reduction) | Maps to "system integration" + "experimental rigor" |
| 5 | Skills | Front-load: Python, C++ (Arduino, embedded basics), OpenCV, YOLOv8, ControlNet, OpenPose, Stable Diffusion / Diffusers, Docker, FastAPI | ATS keyword match |
| 6 | Projects | Manga Lens (multi-provider) + Drowsiness Detection (real-time YOLOv8) + IoT Smart Building (Arduino + walk-forward forecasting) | Three projects directly map to JD pillars |
| 7 | Education | Master's Kent State 2025 (just completed) | Hits "Master's completed or in progress" |

PDF stack: cv-deepak-mallampati-general-robotics-redmond-2026-04-26.pdf in `output/2026-04-26/`.

## F) Plan de Entrevistas

**STAR+R stories ready:**
1. **Real-time YOLOv8 drowsiness detection** — replaced two-stage CNN with unified pipeline, ~30% latency reduction; trade-off: NMS threshold tuning vs. blink-driven false positives. Result: stable real-time on embedded hardware.
2. **Manga Lens multi-provider** — 4 vision providers (Claude, GPT-4o, Nano, Ollama local) with payload-format branching to avoid CUDA crash on local; coordinate-remapped multi-section captures. Result: production browser extension.
3. **Agentic Pixel Character orchestrator** — LLM decomposes high-level prompts into LoRA + ControlNet + pose-conditioning steps; latent-space consistency for animation. Result: identity-consistent sprite-sheet pipeline.

**Likely interviewer questions:**
- "How would you instrument latency for a Jetson-based perception stack?" → describe end-to-end profiling (capture → preprocess → inference → postproc → emit), and reference YOLOv8 NMS tuning.
- "What's your ROS2 experience?" → be honest: zero direct ROS2; propose a public Jetson + ROS2 demo as ramp-up. Don't bluff.

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Apply state | Ashby GraphQL active, full description present | Positive |
| Description specificity | Very detailed (responsibilities + min reqs + preferred + salary band + work auth) | Strongly Positive |
| Salary | $155–205K listed (transparency) | Strongly Positive |
| Realism | Coherent — 2+ yrs + Master's + ROS/Python/C++ + edge | Positive |
| Layoffs | None — Physical AI startup growth phase | Positive |
| Reposting | Active board, transparent compensation | Positive |
| Reposting pattern | Single posting, current | Positive |

**Assessment:** High Confidence.

## H) Recommended Action

**Apply.** Tailor PDF to lead with edge-CV / multi-provider integration / unified YOLOv8 latency. Be transparent about ROS gap and offer a 30-day public ROS2 demo ramp-up. Confirm visa sponsorship plan in screening call (24-mo STEM OPT means short-term safe; longer-term sponsorship is the question).

---

## Keywords extraídas

robotics engineer, system integration, model deployment, edge compute, NVIDIA Jetson, ROS, ROS2, computer vision, machine learning, robot learning, edge inference, Python, C++, data acquisition, sensor suites, field deployment, Redmond WA, Physical AI, GRID platform, US work authorization.
