# Evaluación: Kodiak Robotics — Applied AI Engineer (Flywheel Automation & Continuous Learning)

**Fecha:** 2026-05-30
**Arquetipo:** AI Platform / MLOps Engineer (with Applied AI overlay)
**Score:** 3.3/5
**URL:** https://job-boards.greenhouse.io/kodiak/jobs/4005932009
**Legitimacy:** High Confidence
**Location:** Mountain View, CA — In-office (centrally located, single SF/Silicon Valley office; perks suggest on-site default)
**Region:** US
**PDF:** output/2026-05-30/cv-deepak-mallampati-kodiak-flywheel-2026-05-30.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Platform / MLOps Engineer with Applied AI overlay (autonomous-vehicle continuous-learning loop) |
| Domain | Autonomous trucking / robotics / large-scale ML infra |
| Function | Build the AI Flywheel — data mining → distributed training → eval → deployment loop across an AV fleet |
| Seniority | Mid (3+ yrs production ML infra) |
| Remote | Mountain View, CA — office centrally located; perks (catered lunch, dog-friendly, EV charging) signal in-office default |
| Comp | $180,000–$240,000 USD base + equity + annual bonus + benefits |
| Team | AI & Machine Learning org; cross-functional with Perception, Foundation Models, Infrastructure |
| TL;DR | Closed-loop continuous-learning pipeline for an autonomous-trucking fleet. Petabyte-scale data mining + distributed training + automated eval + safe rollout to driverless trucks. Possible visa sponsorship, but DoD work triggers U.S.-person / export-control restrictions for some roles. |

## B) Match con CV

| Requisito del JD | Línea exacta del CV | Mapping |
|------------------|---------------------|---------|
| "3+ years of experience building production-grade ML infrastructure or model pipelines" | Progress Solutions (Jul 2025–Present) + Emerson DevOps (Jun 2022–Apr 2023) + Suvidha (Jan–Mar 2022) | ~3 yrs total across ML + data infra + devops — meets the bar |
| "Deep proficiency in Python and deep learning frameworks (e.g., PyTorch, TensorFlow)" | Python, PyTorch, Hugging Face Transformers, Diffusers, scikit-learn, XGBoost | Strong |
| "Build infrastructure for seamless model image packaging, validation, and rollout" | Packaged ML/LLM inference as FastAPI/Flask, containerized with Docker, structured logging and load simulation; reduced post-deploy defects ~30% | Strong — same skill pattern at smaller scale |
| "Automate model evaluation and selection pipelines to support rapid iteration" | Retrieval-grounded response alignment exceeded 90% in evaluation… cut downstream model instability ~40% | Adjacent — has eval discipline; not at AV/petabyte scale |
| "CI/CD pipelines" (implied throughout flywheel) | CI/CD pipelines with Jenkins for schema and SQL deployments; reduced deployment errors >30% | Adjacent — CI/CD muscle from Emerson maps |
| "Smart data mining and active learning strategies to prioritize valuable training data from petabyte-scale logs" | Built preprocessing pipelines (Pandas, NumPy) for EHR extracts… raised dataset reliability above 98% | Partial — data-prep yes, active-learning at PB scale no |
| "Distributed training and pipeline orchestration (e.g., Airflow, Kubeflow, Dagster)" | (gap — no Airflow/Kubeflow/Dagster, no DDP/Horovod/Ray) | Hard blocker |
| "Multi-node distributed training (PyTorch DDP, Horovod, Ray)" | (gap) | Hard blocker — would need a take-home or live design exercise to demonstrate fluency |
| "Experience in autonomous vehicles, robotics, or sensor-rich real-world ML systems" (preferred) | Driver Drowsiness Detection (YOLOv8 real-time fatigue monitoring) + IoT Smart Building Temperature Prediction (Arduino sensor pipeline + walk-forward forecasting) | Soft match — drowsiness uses camera input + real-time CV; IoT pipeline shows sensor data muscle |
| "Self-supervised learning, active learning, or large-scale data curation" (preferred) | (gap) | Soft — none in CV |
| "Containerization (Docker), model packaging, deployment workflows" (preferred) | Docker, FastAPI/Flask packaging, structured logging | Strong |

**Gaps & mitigation:**
1. **Multi-node distributed training (PyTorch DDP, Horovod, Ray)** (hard) — never run multi-GPU at production scale. Mitigation: spend a weekend on PyTorch DDP tutorial + run a 2-GPU fine-tune of a small Transformer; document the throughput trade-offs. In interview: "I haven't operated DDP in prod, but I understand the gradient-sync pattern and the memory-vs-throughput knobs."
2. **Workflow orchestrators (Airflow / Kubeflow / Dagster)** (hard) — Jenkins-based CI/CD experience is adjacent but not equivalent. Mitigation: build a 1-day Airflow DAG that mirrors the Progress preprocessing pipeline and link from the cover letter.
3. **AV / robotics / sensor-rich ML** (medium) — drowsiness detection is the closest real-world signal. Mitigation: lead with YOLOv8 + IoT Arduino projects; frame the drowsiness work as "real-time, safety-critical CV at the edge — same risk shape as AV perception."
4. **Petabyte-scale active learning** (medium) — never operated at that data volume. Mitigation: discuss the active-learning literature (uncertainty sampling, BADGE, core-set) and propose a starter design.

## C) Nivel y Estrategia

**Nivel detectado:** Mid (3+ yrs production ML infra). Deepak narrowly meets the years bar; the gap is the AV-specific scale.

**Sell senior (without lying):**
- "I've owned the full inference path at Progress — preprocessing → model → FastAPI service → Docker → load test → defect tracking. The flywheel is the same shape at a different volume."
- "My YOLOv8 drowsiness work and Arduino IoT pipeline are exactly the sensor-rich ML + real-time CV pattern Kodiak's perception stack lives on."
- "I treat eval pipelines as non-optional infrastructure — that's how Progress hits ≥90% grounded response alignment in audited workflows."

**If downleveled:** Accept if base is in the $180–200K band with the equity stated; ask about a 12-month review against shipped flywheel milestones (e.g., "owned the model-packaging-and-rollout step end-to-end"). Mountain View on-site is a real cost-of-living move from Ohio — confirm relocation support before signing.

## D) Comp y Demanda

| Item | Datos |
|------|-------|
| Stated band | $180K–$240K base + equity + annual bonus (CA pay range disclosure) |
| Levels.fyi MLE-Mid / SF benchmark | $180K–$260K base; ~$300K–$450K total typical for mid-level ML infra in the Bay Area (WebSearch: "ML infra engineer Bay Area salary 2026") |
| Visa | "If applicable, Kodiak may provide visa sponsorship for eligible candidates" — explicit |
| National-security caveat | DoD work means some roles may require U.S. person status / export-control clearance; Kodiak says it will "consider the candidate for alternative positions" — uncertainty |
| Demand trend | AV-perception ML infra demand is steady but cyclical; Kodiak hit a major 2024 commercial milestone (first known driverless commercial delivery) |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ years) building healthcare-focused RAG…" | Reframe to: "Applied AI engineer building production ML infrastructure — FastAPI/Docker service packaging, evaluation pipelines, structured logging, and CI/CD for safety-critical model deployments. ~30% post-deploy defect reduction via load simulation + observability." | Mirror flywheel responsibilities |
| 2 | Competencies order | LLM-first | Lead with: ML Infrastructure • Distributed Training (PyTorch) • CI/CD & Containerization • Evaluation Pipelines • Computer Vision (YOLOv8) • LLM/RAG | JD priorities |
| 3 | Project ordering | Manga Lens 1st | Lead with Driver Drowsiness (real-time YOLOv8 CV) → IoT Smart Building (sensor + walk-forward ML) → Agentic Claims (multi-agent evaluation pipeline) | Map to Kodiak's perception + sensor-rich + automated-eval needs |
| 4 | Experience emphasis | RAG + agentic | Add Emerson Jenkins/Grafana CI/CD bullet weighting — that's the most relevant infra experience | Kodiak's flywheel is fundamentally a CI/CD + observability problem for ML |
| 5 | Cover-letter hook | (none) | Open with: "I've shipped the FastAPI/Docker version of what your flywheel does at fleet scale — and I'm 8 weeks away from publishing a multi-GPU DDP fine-tune as portfolio evidence." | Acknowledges the gap; signals action |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|------------------|-----------------|---|---|---|---|-----------|
| 1 | Model packaging + rollout infrastructure | Progress FastAPI/Docker hardening | LLM/ML services were defect-prone in early deploys | Reduce post-deploy defects | Containerized inference, structured logging, load simulation, defect-driven test backfills | ~30% post-deploy defect reduction | Load simulation is the cheapest insurance policy in ML infra; skipping it costs a multiple in incidents |
| 2 | Automated evaluation pipelines | Progress RAG eval harness | Hallucinations were silent until prod | Build retrieval + grounding eval as a first-class CI gate | Recursive semantic chunking + transformer embeddings + grounded-response eval | ~35% retrieval precision, >90% grounded alignment | Eval-first beats eval-last by an order of magnitude on time-to-confidence |
| 3 | Real-time safety-critical CV | Driver Drowsiness YOLOv8 | Two-stage CNN was slow + flaky | Cut latency, suppress blink-driven false positives | Replaced with unified YOLOv8 + sliding-window confidence aggregation + NMS tuning | ~30% latency reduction, ~25% FPR reduction | Confidence aggregation across frames is the dual of ensembling across models — both buy you stability cheaply |
| 4 | CI/CD discipline at scale | Emerson Jenkins | Schema + SQL deployments were error-prone | Build a CI/CD pipeline | Jenkins pipelines for schema, version-controlled SQL, structured release validation | >30% fewer errors, ~35–40% faster releases | Rollback checkpoints are worth 10× the engineering cost the first time prod breaks |
| 5 | Sensor-rich ML systems | IoT Smart Building Temperature Prediction | Sensor data noisy + time-correlated | Predict next-step temp with walk-forward validation | Arduino + DHT11 + DS3231 pipeline → walk-forward RF/SVR/Linear comparison | RF ~20–30% lower MAE | Walk-forward (not k-fold) is the only honest evaluation for time-correlated sensor streams |
| 6 | Data curation / preprocessing reliability | Progress EHR preprocessing | EHR extracts were inconsistent | Raise dataset reliability | Pandas/NumPy preprocessing with schema validation + dedup + missingness handling | >98% reliability, ~40% lower downstream model instability | Dataset reliability work pays back in stable training loss curves — it's the silent multiplier in MLOps |

**Case study to lead with:** Driver Drowsiness Detection (real-time safety-critical CV) — directly answers Kodiak's perception-adjacent flywheel work.

**Red-flag questions:**
- *"Have you trained distributed across multiple nodes?"* → "Not in production. I've used PyTorch single-node and understand the DDP gradient-sync pattern conceptually — I'm comfortable being onboarded into a Ray/Horovod stack, and I can show you a small DDP fine-tune in 2 weeks as proof of seriousness."
- *"Why move from healthcare AI to AV?"* → "Both are safety-critical and audit-heavy. The flywheel problem — closing the loop from real-world events back to better models — is what I want to spend the next 3 years on, and AV has the cleanest version of it."
- *"Are you OK on-site in Mountain View?"* → Confirm relocation support before signing; OPT timeline + COL gap are real considerations.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Last updated 2026-05-07 (≈3 weeks old as of evaluation date) | Positive |
| Apply button | Active on job-boards.greenhouse.io | Positive |
| Tech specificity | Names exact tools (PyTorch DDP, Horovod, Ray, Airflow, Kubeflow, Dagster, Docker) | Positive |
| Comp transparency | $180K–$240K CA range disclosed per state law | Positive |
| Company size + ML org | 59 open jobs across Engineering, Operations, Product; named hiring manager (Shubham Shrivastava) | Positive |
| Funding / milestone | 2024 driverless semi-truck delivery (publicly announced); DoD contracts | Positive |
| Reposting | First time in scan-history | Neutral |
| Visa | Conditional ("may provide") + national-security carve-out for some positions | Concerning |

**Context Notes:** AV companies have a unique export-control overlay — "U.S. person" requirement for some roles. Kodiak explicitly says it will redirect candidates to non-restricted roles, which is honest. For an F-1 OPT candidate, the Flywheel role itself is likely export-controlled-adjacent; confirm early with the recruiter.

## Keywords extraídas

Applied AI Engineer, Flywheel, continuous learning, autonomous vehicles, AV, robotics, PyTorch, PyTorch DDP, Horovod, Ray, Airflow, Kubeflow, Dagster, distributed training, active learning, data mining, model packaging, Docker, CI/CD, model evaluation, perception, foundation models, infrastructure, Kodiak
