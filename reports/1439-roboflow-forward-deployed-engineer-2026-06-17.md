# Evaluación: Roboflow — Forward Deployed Engineer

**Fecha:** 2026-06-17
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Computer Vision / Multimodal
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/roboflow/444ee288-cb72-4751-b16d-67c27749e901
**Legitimacy:** High Confidence
**Location:** NY, SF or Remote (US) — 40–50% travel for on-site customer deployments
**Region:** US
**PDF:** output/2026-06-17/cv-deepak-mallampati-roboflow-2026-06-17.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Forward Deployed Engineer (primary) + Computer Vision (secondary) |
| Domain | Computer-vision platform / edge ML / industrial verticals (manufacturing, logistics, food, automotive, retail) |
| Function | Build + embed with customer + deploy + hand off |
| Seniority | Mid IC ("meaningful experience" deploying ML in physical-world environments) |
| Remote | Remote (US) + ~40–50% travel for customer deployments |
| Team size | Field Engineering team within GTM |

**TL;DR:** Roboflow is hiring FDEs to take CV proofs-of-concept from sales handoff into 0-to-1 production deployments in industrial environments (factories, warehouses, construction sites). Strong CV-engineering match for Deepak (YOLOv8, transformer video summarization), but the role is hardware/edge-heavy (Jetson, industrial cameras, on-prem) and requires 40–50% travel.

## B) Match con CV

| JD requirement | CV proof |
|----------------|----------|
| Python proficiency | cv.md L18 (Python, FastAPI) |
| Systems-level (Docker, K8s, Linux, networking) | cv.md L15 (Docker, Kubernetes, Terraform, CI/CD) |
| Deploy ML/CV models to production | cv.md L25-30 (production agentic + RAG at Progress), L60-61 (Suvidha video pipeline shipped) |
| Computer vision background | cv.md L60-61 (video summarization pipeline, 5000+ videos) + Articles: YOLOv8 drowsiness detection (article-digest) |
| Edge hardware (Jetson, industrial cameras) | — (not explicitly in CV) |
| 0-to-1 deployment, MLOps tooling | cv.md L28 (fault-tolerant automation infra, exponential-backoff retry) + L29 (LLM eval framework — analog) |
| Knowledge transfer / runbooks | cv.md L30 (inference cost/latency optimization documentation implicit) |
| Embedded customer-team work | cv.md L48 (partnered with 20+ teams at Vanguard — internal-customer analog) |
| Industrial vertical experience (manufacturing/logistics) | cv.md L53 (Emerson — pipeline-storage operational data, equipment-failure prediction) — adjacent |
| Strong troubleshooting | cv.md L28-30 (infrastructure resilience, 60% failure reduction) |

**Gaps:**
1. **Edge hardware specifics (Jetson, industrial cameras).** No explicit Jetson/camera-calibration in CV. *Mitigation:* CV transformer + YOLOv8 background transfers; demonstrate willingness to ramp on Jetson in 2-3 weeks. Quick portfolio project: deploy YOLOv8 on a Jetson Nano with industrial camera feed.
2. **40-50% travel.** Lifestyle commitment. *Mitigation:* confirm acceptable in interview.
3. **Industrial domain (manufacturing/logistics/food/auto/retail) depth.** Emerson pipeline-storage data is adjacent; not deep. *Mitigation:* lean on Emerson + CV portfolio; commit to fast vertical learning.
4. **F-1 OPT.** Position is US-remote — likely OK for OPT period. Sponsorship would need to be confirmed for long-term role.

## C) Nivel y Estrategia

**Detected level:** Mid FDE — "meaningful experience deploying technology in physical-world environments". Deepak's level fits if we lead with Emerson + Suvidha video + Progress production work.

**Plan "vender senior sin mentir":**
- Open with Progress agentic + RAG + 42% token reduction = the "production engineering, real-world constraints" pattern.
- Frame Suvidha video pipeline (5000+ videos, 70% manual-effort reduction) as a 0-to-1 CV deployment proof.
- Frame Emerson pipeline-storage / equipment-failure work as the industrial-OT analog.
- Frame Vanguard 12 APIs + safeguards as the "production-grade code in customer's environment" capability.

**Plan "si me downlevelan":** Accept Associate FDE band if comp ≥ $140K base; negotiate 6-month review to mid-FDE.

## D) Comp y Demanda

| Source | Range |
|--------|-------|
| JD (disclosed) | Not disclosed in posting |
| Glassdoor (Roboflow FDE) | $160-220K base typical |
| Levels.fyi (FDE mid-IC, CV startup, 2026) | $150-200K base + equity |
| Palantir/Anthropic FDE comp comps (mid IC) | $180-230K base |

Estimate: **$150-200K** base + meaningful equity. FDE demand is strong; CV-specific FDE rarer.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years…" | "Forward-deployed AI engineer who takes ML and CV systems from POC to production — embedded with customers, hands-on with the messy realities of real-world data, edge constraints, and zero-to-one rollout." | Mirror Roboflow FDE framing. |
| 2 | Skills order | LLMs first | Lead with "Computer Vision (YOLOv8, transformer video pipelines); Python/Docker/K8s; production ML deployment; FastAPI; Linux + edge-ready packaging." | JD priorities. |
| 3 | Suvidha bullet | "video summarization pipeline, 5000+ videos, 70% manual-effort reduction" | Promote to top of CV; reframe as 0-to-1 deployment | Strongest FDE signal. |
| 4 | Emerson bullet | "regression/classification on pipeline-storage data" | Promote industrial-OT framing: "operational sensor data, equipment-failure prediction" | Roboflow vertical match. |
| 5 | New line | — | Add 1-line portfolio note: "YOLOv8 drowsiness detection deployed end-to-end on edge-class hardware" | Direct Roboflow signal. |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | 0-to-1 production deploy | Progress agentic system | Healthcare RAG project | Take POC to prod | Built conductor–subagent orchestration | 42% token cut sustaining accuracy | Production beats demo — instrument from day 1 |
| 2 | CV in real-world conditions | Suvidha video pipeline | 5000+ videos backlog | Build end-to-end summarization | Speech→transformer→clip extraction | 70% manual effort reduced | Edge cases (audio quality, length) drive most of the work |
| 3 | Industrial / operational data | Emerson sensor work | Pipeline-storage telemetry | Predict equipment failure | Regression/classification on raw sensor data | Model-ready pipeline shipped | Domain SMEs > data scientists for feature design |
| 4 | Customer-embedded delivery | Vanguard cross-team APIs | 20+ internal teams | Power LLM features daily | 12 APIs + p95 800ms | 100k+ req/day stable | Treat internal teams like external customers — the dynamics are the same |
| 5 | Troubleshooting prod | Progress reliability work | Brittle batch jobs | Add resilience | Exponential-backoff + observability | 60% failure-rate cut | Most prod failures are integration failures, not model failures |
| 6 | Knowledge transfer / docs | Suvidha pipeline handoff | Foundation team handover | Make pipeline maintainable | Documented architecture + runbooks | Handoff completed, ops sustained | Runbooks > slides — write what someone at 2am needs |

## G) Posting Legitimacy

**High Confidence.** Roboflow is well-funded ($63M+ raised — YC, GV, Craft, Sam Altman), 1M+ developers, real product. JD is detailed and specific (named hardware, customer phases, handoff structure). Active Field Engineering team. Real opening.

## H) Recommendation

**Worth applying** if Deepak is comfortable with 40-50% travel and willing to ramp on edge hardware (Jetson, industrial cameras) quickly. CV + production deployment match is strong. Build a quick "YOLOv8 on Jetson + industrial camera" demo before applying to land a concrete edge artifact. Confirm F-1 OPT acceptable in recruiter screen.
