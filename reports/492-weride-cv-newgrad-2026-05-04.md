# Evaluación: WeRide.ai — New Grads 2026 — Software Engineer, Computer Vision

**Fecha:** 2026-05-04
**Arquetipo:** Computer Vision / Multimodal Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.5/5
**URL:** https://jobs.lever.co/weride/d87ddf51-0def-436f-a178-135481b88f96
**Legitimacy:** High Confidence
**Location:** San Jose, CA — On-site
**PDF:** output/2026-05-04/cv-deepak-mallampati-weride-cv-newgrad-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Computer Vision / Multimodal Engineer + ML Engineer (Applied AI Systems) |
| Domain | Autonomous driving — perception, online mapping, scene understanding, sensor fusion |
| Function | Build — CV/ML models for real-time integration; data pipelines for training/eval |
| Seniority | New Grad 2026 — graduation Dec 2025-Jun 2026 (Deepak graduated May 2025; **possibly outside the New Grad window**) |
| Remote | San Jose, CA — On-site |
| Team size | Perception team |
| TL;DR | Strong CV/ML stack match (Deepak's YOLOv8 drowsiness detection + transformer video work). **Two frictions:** (1) New Grad window is Dec 2025-Jun 2026 — Deepak graduated May 2025 (1y prior — may be outside window; verify with recruiter), (2) San Jose on-site relocation from Kent OH. WeRide is NASDAQ-listed autonomous driving leader; legitimate role. Apply with explicit graduation-window question + relocation framing. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| Currently pursuing CS/Robotics, grad Dec 2025-Jun 2026 | ⚠️ Edge case | MS Kent State graduated May 2025 (cv.md:91-94) — **1 yr earlier than typical window** |
| Strong programming in C++ or Python | ✅ Direct | Python primary; C++ (Arduino) experience; cv.md:12 |
| ML / robotics / CV / data mining / LiDAR | ✅ Strong CV | YOLOv8 drowsiness detection (cv.md:68-69); transformer video summarization (cv.md:74); ControlNet + OpenPose (cv.md:62-63) |
| Data structures, 3D geometry, advanced algorithms | ⚠️ Adjacent | NetworkX + Dijkstra + Louvain (cv.md:77-78); no formal 3D geometry |
| State estimation, 3D reconstruction, visual odometry | ⚠️ Gap | No SLAM / VIO / 3D reconstruction work |
| Software + computing fundamentals | ✅ Strong | FastAPI, Docker, CI/CD, audit trails; cv.md:17, 28 |
| Bonus: LLM/VLM | ✅ Direct | RAG, agentic LLM workflows, multimodal w/ Stable Diffusion + ControlNet; cv.md:13-15 |

**Gaps:**
1. **New Grad window edge case** — Hard. Verify with recruiter whether May 2025 graduates are still considered.
2. **3D geometry / SLAM / VIO** — Hard for autonomous driving perception. Bridge with YOLOv8 + multimodal Stable Diffusion (3D-aware via ControlNet + OpenPose).
3. **San Jose on-site relocation** — Hard from Kent OH. Acknowledge willingness up-front.

## C) Nivel y Estrategia

JD targets a New Grad CV engineer. Deepak's CV portfolio is genuinely strong (YOLOv8, transformer video, ControlNet, OpenPose), but autonomous driving perception is a specialized vertical.

**Sell New Grad w/o lying:**
- Lead with YOLOv8 drowsiness detection (-30% inference latency, -25% false positives via sliding-window aggregation).
- Frame transformer video summarization as "scene understanding at scale" (5,000+ sessions, ~85% alignment).
- Position ControlNet + OpenPose pose conditioning as evidence of 3D-aware CV pipeline thinking.
- Bonus stack: explicit LLM/VLM bonus matched 1:1.

**If outside grad window:**
- Apply for "experienced new grad" or pivot to WeRide's regular engineering postings.

## D) Comp y Demanda

**Comp:** Disclosed: **$120K – $165K base + annual performance bonus + equity + benefits**. San Jose on-site comp moderate by Bay Area standards — landing point likely $135-145K base for new grad.

**Demand:** WeRide is NASDAQ:WRD listed; profitable autonomous driving company with permits in China/UAE/Singapore/US. Hiring steady.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-tilted | "Computer-vision-focused new-grad ML engineer with shipped YOLOv8 detection (-30% latency), transformer video understanding, and multimodal Stable Diffusion + ControlNet pipelines. Open to San Jose relocation." | Mirror "computer vision models" |
| 2 | Skills | Mixed | Promote: YOLOv8, OpenCV, ControlNet, OpenPose/MediaPipe, Stable Diffusion, video analytics, transformer video; LLM/VLM bonus | Direct match |
| 3 | Experience bullets | Generic | Reframe: "Replaced two-stage CNN with unified YOLOv8 detection-classification; -30% latency, -25% false positives via sliding-window aggregation" | Mirror "real-time integration" |
| 4 | Projects | CV-heavy | Lead with Driver Drowsiness (YOLOv8) + Pixel Character Synthesis (ControlNet + OpenPose) + Suvidha video summarization | CV/multimodal direct match |
| 5 | Footer | Kent OH | Add "Open to San Jose, CA relocation; F-1 OPT, US-based" | Pre-empt on-site |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Real-time CV perception | YOLOv8 drowsiness detection | Two-stage CNN slow + false-positive prone | Real-time inference + stable detection | Unified YOLOv8 + sliding-window confidence aggregation + adaptive frame skipping | -30% inference latency, -25% blink false positives | Sliding-window aggregation > single-frame heuristic |
| 2 | Data pipelines for training/eval | Suvidha video summarization | 5,000+ recorded sessions, manual review hours | Reduce review time | Transformer-based hierarchical summarization + timestamp-aligned clip extraction | -60-70% manual review, ~85% alignment | Timestamp alignment > pure abstractive summary |
| 3 | Multi-modal sensor fusion (proxy: multi-modal models) | Pixel Character Synthesis | Identity-consistent pose-controlled generation | Stable identity across poses | Stable Diffusion + LoRA + ControlNet + OpenPose/MediaPipe + LLM agent orchestrator | Identity-stable sprite-sheet output | Pose conditioning is the hard part, not generation |
| 4 | Computer vision models + VLM bonus | Manga Lens | Multi-provider vision API (Claude/GPT/Ollama) | Reliable real-time capture | Manifest V3 + viewport-slice + 4-provider abstraction | Shipped Chrome Web Store, 29 sites | Per-provider payload differences are real |
| 5 | Strong programming Python + C++ | Arduino IoT temp prediction | Sensor pipeline + ML forecasting | Lower MAE vs linear baseline | Arduino + DHT11 + DS3231 + Random Forest + walk-forward validation | -20-30% MAE | C++ embedded teaches resource discipline |
| 6 | Data structures + advanced algos | Geospatial road network | OSM XML — 20k node subgraph | Routing + community detection | NetworkX DiGraph + Dijkstra + betweenness + Louvain + MST | -30% runtime via subgraph scoping | Graph algorithms reward upfront subgraph reduction |

**Case study:** Driver Drowsiness YOLOv8 + Pixel Character ControlNet/OpenPose pipeline — direct mapping to "real-time perception integration" and "multi-modal sensor fusion" (proxy via multimodal generation).

**Red-flag prep:**
- "Grad May 2025 vs window?" → "Open question — happy to apply through experienced engineering track if outside window."
- "3D geometry / SLAM / VIO?" → "No formal SLAM. Multimodal Stable Diffusion + ControlNet + OpenPose is closest 3D-aware work. Will ramp on geometry week 1."
- "Why San Jose?" → "WeRide is the autonomous driving leader I want to learn from. Relocation is the cost; I'm in."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on WeRide Lever; Lever API returned full JD; createdAt 2025-08-28 (~8 mo old) | Positive (with note on age) |
| Description quality | Concrete perception stack (CV/ML models, VLM/LLM bonus, real-time integration, multi-modal sensor fusion); explicit comp band | Positive |
| Company signals | NASDAQ:WRD listed; permits in 4 countries incl. US; established autonomous driving company | Positive |
| Reposting | First time in scan-history | Neutral |
| Realism | "Currently pursuing degree, grad Dec 2025-Jun 2026" + Python/C++ + ML/CV is a coherent New Grad bar | Positive |
| Salary transparency | Disclosed: $120K-$165K + bonus + equity | Positive |

**Context Notes:** Posting age (~8 mo) means New Grad window may have already moved. Verify with recruiter before applying. **Verification:** confirmed (Lever API direct).

## H) Draft Application Answers

(skipped — score 3.5 below 4.5 threshold; cover-letter sketch below)

> "I ship CV systems end-to-end: replaced a two-stage CNN drowsiness pipeline with a unified YOLOv8 detection-and-classification model (-30% inference latency, -25% sliding-window false positives). I built transformer-based video summarization across 5,000+ sessions with ~85% highlight alignment, and a multimodal Stable Diffusion + ControlNet + OpenPose synthesis pipeline orchestrated by an LLM agent. WeRide's perception team — real-time CV/ML for autonomous driving with the LLM/VLM bonus — maps cleanly. US-based on F-1 OPT, open to San Jose relocation. (Open question: I graduated May 2025; happy to clarify the Dec 2025-Jun 2026 window before applying further.)"

---

## Keywords extraídas

Software Engineer, Computer Vision, New Grad 2026, autonomous driving, perception, online mapping, scene understanding, real-time, YOLOv8, OpenCV, ControlNet, OpenPose, MediaPipe, Stable Diffusion, multi-modal sensor fusion, LLM, VLM, Python, C++, data structures, 3D geometry, San Jose CA, on-site, $120-165K, WeRide, NASDAQ
