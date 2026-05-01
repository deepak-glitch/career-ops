# Evaluación: Voxel — Founding Forward Deployed Engineer

**Fecha:** 2026-05-01
**Arquetipo:** Computer Vision / Multimodal Engineer (primary) + AI Solutions / Forward Deployed (primary)
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/voxel/322edcd6-4baf-4b5f-8fdd-fd89f965255c
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — On-site / Hybrid (verify; "embedding with operations teams" = travel-heavy)
**PDF:** output/2026-05-01/cv-deepak-mallampati-voxel-fde-2026-05-01.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | CV/Multimodal + Forward Deployed (Founding) |
| Domain | Computer Vision for industrial safety/operations (security cameras → hazard detection) |
| Function | Build (frontend, backend, infra) + customer delivery |
| Seniority | "First engineer in this function" — founding, generalist |
| Remote | SF on-site / hybrid (likely) — embedded with enterprise customers |
| Comp | $220K – $250K + Equity |
| Team size | First FDE; partners with Field CTO |

**TL;DR:** First FDE at a CV-for-safety scaleup — generalist Full-Stack or Perception engineer who turns messy real-world video + WMS/MES integrations into production CV systems.

## B) Match con CV

| JD requirement | CV evidence | Fit |
|----------------|-------------|-----|
| Computer Vision | YOLOv8 Drowsiness Detection (real-time inference, ~30% latency reduction); Suvidha video summarization | 1:1 |
| Production CV outside the lab | YOLOv8 + sliding-window confidence aggregation + adaptive frame skipping for stable real-time | 1:1 |
| Full-Stack engineering | FastAPI + React/TS + Tailwind (Dream Decoder), Manga Lens MV3 + service workers | 1:1 |
| End-to-end ownership (FE/BE/infra) | Manga Lens shipped solo to Chrome Web Store; Dream Decoder full-stack | 1:1 |
| PyTorch / TensorFlow | PyTorch in skills; Diffusers (PyTorch); YOLOv8 (PyTorch under hood) | 1:1 |
| Generative AI tools (Claude Code) | Daily user — Manga Lens used Claude/Anthropic vision API as one of 4 providers | 1:1 |
| Startup velocity, ambiguity | Founder of E-Farming marketplace; solo Manga Lens build | 1:1 |
| Legacy data integration (WMS/MES/sensors) | Emerson Synthesis Order-to-Cash ERP — T-SQL on contracts/nominations/invoicing in oil & gas | 1:1 (different industry, same pattern) |
| Customer-embedded delivery | Stakeholder-facing system-limitation docs at Progress | Adjacent |

**Gaps & mitigation:**
- *Industrial CV / facility infra (WMS/MES):* Not in CV. Mitigate via Emerson ERP experience — "Same shape: messy enterprise data sources, compliance-sensitive systems, deploy-then-iterate."
- *Founding FDE level expectation:* JD says "first engineer in this function" — Deepak is mid-level not staff. Frame founder-of-Manga-Lens + E-Farming as ownership signal.
- *SF on-site for F-1 OPT:* Workable but adds rent burden. Confirm relocation support before committing.

## C) Nivel y Estrategia

**Detected level:** Founding senior — generalist with CV or full-stack depth.
**Natural level:** Mid-level CV/Full-Stack hybrid.

**Sell as:**
- "Production CV (YOLOv8 drowsiness detection w/ stability tricks for real-world video) + full-stack shipping (Manga Lens, Dream Decoder) + ERP integration discipline (Emerson Synthesis). That's the FDE shape Voxel is asking for."
- "I think in 'embed with operations teams, ship that day' — same loop I ran for HIPAA stakeholders."

**If downleveled:** Accept FDE-IC at $200K floor with founding equity component non-negotiable; require 6-mo path to Senior FDE.

## D) Comp y Demanda

- $220K-$250K + equity. Strong for SF mid-level, fair for founding role.
- Industrial CV / safety AI: Voxel raised Series C ($65M, 2024 per public reporting). Customers in workers-comp/insurance space — sticky enterprise.
- FDE comp at YC + Series B/C startups (NYC/SF): $200-280K + equity is the band; Voxel sits in it.

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Lead "Applied AI engineer with production CV (YOLOv8) + full-stack delivery + enterprise data integration." | Match JD's CV+FullStack OR Perception split |
| 2 | Projects | Promote Drowsiness Detection + Manga Lens to top of projects | JD wants real-world CV |
| 3 | Experience | Reframe Emerson bullet as "messy legacy data integration in compliance-sensitive ERP" | Match WMS/MES integration ask |
| 4 | Cover letter | "I built CV for the messy non-lab case — variable lighting, head pose, blink false-positives — same problem shape as factory floor cameras." | Map drowsiness → industrial CV |
| 5 | LinkedIn headline | "Applied AI / CV — production YOLOv8, full-stack delivery, enterprise integration" | Voxel recruiter-side scan |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | Reflection |
|---|---------------|--------------|------------|
| 1 | Real-world CV (not lab) | Drowsiness: replaced 2-stage CNN with unified YOLOv8 + sliding window for blink false-positives + adaptive frame skip | The lab benchmark is never the deployment metric — false positives are |
| 2 | Full-stack delivery | Manga Lens — MV3 + service workers + 4-provider abstraction, shipped Chrome Web Store | Multi-provider abstraction = my first defense against vendor failure |
| 3 | Legacy/enterprise integration | Emerson Synthesis ERP — T-SQL stored procedures for contracts/nominations | Compliance-sensitive systems teach you to instrument before you optimize |
| 4 | Customer-facing FDE | Stakeholder-facing limitation docs (Progress) | Telling stakeholders what doesn't work earns more trust than demos |
| 5 | Founding velocity | E-Farming marketplace — onboarded 80-120 users in phase 1 | Velocity = deciding what NOT to ship |
| 6 | Multimodal | Suvidha video summarization (60-70% review-time cut, ~85% highlight alignment) | Hierarchical summarization scales to long-context — flat won't |
| 7 | AI-tooling fluency | Manga Lens (Claude + GPT-4o + GPT-4.1-Nano + Ollama) | Each provider has a personality — design routing around it |
| 8 | Why Voxel (red flag) | Track record: solo-shipped CV + full-stack + enterprise data integration; want to do it for safety | Domain mapping |

**Red flag:** *"Are you OK working on-site SF as a founding hire?"* — "Yes, OPT-eligible, can relocate. Need to confirm relocation support and immigration sponsorship pathway."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Ashby (jobs.ashbyhq.com/voxel) | Positive |
| Description quality | Specific stack, named example use case, named tooling preferences | Positive |
| Salary transparency | $220K-$250K + equity | Positive |
| Company hiring signals | Voxel Series C, named-customer momentum (operations/risk/safety) | Positive |
| Reposting | Not seen before in scan-history | Neutral (first-time) |

**Assessment:** **High Confidence** — well-funded scale-up, specific JD, transparent comp.

## H) Draft Application Answers

*(Score 3.5 — below H threshold of 4.5; skipped)*

---

## Keywords extraídas

Forward Deployed Engineer; Founding FDE; Computer Vision; Perception Engineering; Full-Stack Engineering; PyTorch; TensorFlow; YOLOv8; real-world CV; legacy systems integration; WMS; MES; sensor data; enterprise deployments; rapid prototyping; customer-embedded delivery; Field CTO; production-ready code; equity; safety AI; operations AI
