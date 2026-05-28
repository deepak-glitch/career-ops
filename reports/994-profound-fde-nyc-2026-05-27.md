# Evaluación: Profound — Forward Deployed Engineer (NYC)

**Fecha:** 2026-05-27
**Arquetipo:** AI Forward Deployed Engineer (Applied AI + full-stack TS/Python)
**Score:** 3.7/5
**URL:** https://jobs.ashbyhq.com/Profound/b076c997-0ba3-4d3c-9dc9-ad0b3ed49b05
**Legitimacy:** High Confidence
**Location:** NYC / SF / Buenos Aires — On-site
**Region:** US
**PDF:** output/2026-05-27/cv-deepak-mallampati-profound-fde-nyc-2026-05-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Forward Deployed Engineer (Fortune 500 customer-embedded full-stack) |
| Domain | AI presence / AEO platform — helping companies understand and control their AI search visibility |
| Function | Build — custom integrations, full-stack code, executive presentations |
| Seniority | 2+ yrs SWE — explicitly mid-IC |
| Remote | On-site NYC, SF, or Buenos Aires (5d/wk) |
| Team size | Engineering team; FDE function reports into Engineering (not GTM, important signal) |
| Comp | $140K – $260K base (NYC/SF) + equity |
| TL;DR | $35M Series B (Sequoia). Production code + Fortune 500 stakeholder management. 2+ yrs JD floor — well aligned with Deepak. TS/Next.js + Python + Postgres + AWS. Visa sponsorship explicit. |

## B) Match con CV

| JD requirement | CV evidence | Verdict |
|----------------|-------------|---------|
| 2+ yrs SWE production systems | 2.5 yrs Applied AI at Progress + Emerson DevOps + Suvidha — cv.md L22-47 | Strong |
| TypeScript / Next.js / React | Manga Lens (MV3 + content scripts + service workers) — cv.md L59-60; Dream Decoder React/TS/Vite/Tailwind — cv.md L66 | Strong |
| Python backend + data processing | FastAPI/Flask + Pandas + EHR pipelines — cv.md L28-29 | Strong |
| REST APIs + system integration | RESTful services, multi-provider AI integration (4 providers) — cv.md L28, L60 | Strong |
| PostgreSQL + time-series DBs | T-SQL/PostgreSQL — cv.md L12; time-series forecasting (IoT temp project) — cv.md L81 | Moderate (no TimescaleDB/Influx specific) |
| AWS preferred | "cloud-ready deployment" — cv.md L17; no AWS depth | Gap |
| Rust (plus) | None | N/A (explicit nice-to-have) |
| Exec communication | Stakeholder system-limitation docs — cv.md L30; founder background — cv.md L86 | Moderate |
| Production code under pressure | Healthcare claims agent pipeline + drowsiness detection (real-time) — cv.md L68, L71 | Strong |
| Build data pipelines + BI integration | Pandas + Grafana dashboards at Emerson — cv.md L37 | Moderate |

**Gaps & mitigation:**
- **AWS depth:** No proof points. Mitigation: spin up a small Profound-style AEO crawler on AWS (Lambda + RDS + CloudWatch) before interview, cite in cover letter.
- **Time-series DBs (Timescale, Influx):** Adjacent forecasting work but no DB-native. Mitigation: position the IoT temperature project as time-series experience; mention reading Timescale docs.
- **Next.js specifically:** Dream Decoder used React/Vite, not Next. Mitigation: build a small Next.js page (SSR + API routes) and link.
- **F-1 OPT visa:** Profound explicitly says "happy to support visa sponsorship for qualified international candidates" — this is a green light, not a blocker.

## C) Nivel y Estrategia

- **JD level:** Mid-IC (2+ yrs) — exact fit for Deepak's level.
- **Sell-without-lying:** Lead with shipped production AI (RAG, agentic, FastAPI) + full-stack TS/Next-adjacent (Dream Decoder + Manga Lens) + founder mindset (E-Farming marketplace). Frame the "AI presence" domain as adjacent to retrieval/grounding — Deepak's bread and butter.
- **If downleveled:** Mid-range $140-180K is acceptable for NYC IC w/ visa sponsorship.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD | $140K – $260K + equity | NYC/SF floor; wide band |
| Levels.fyi FDE/SE Series B AI infra NYC | $145-180K base, $30-60K equity/yr | Profound floor matches |
| AEO/AI search category demand | Rising (Profound, Athena, Pillar, etc.) | Hot subsegment |

Strong comp for mid-IC. Sponsorship makes this F-1 OPT-friendly.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "Healthcare RAG" | "Applied AI engineer who ships production full-stack TS+Python AI features with measurable retrieval/grounding gains" | Pivot from domain to capability |
| 2 | Manga Lens framing | Project #1 of many | Hoist + reframe as "Chrome extension w/ TS + four AI vision providers + multi-provider payload abstraction — shipped to Web Store" | Maps to TS/Next.js + integrations |
| 3 | Dream Decoder | Background project | Hoist as "Full-stack FastAPI + React/TS/Vite app w/ structured prompt transformation; ~30% alignment gain" | Maps to full-stack + measurable AI impact |
| 4 | Postgres | Buried in skills | Promote — Patient Records app (SQLite/Bottle CRUD w/ FK constraints + LEFT JOIN aggregation) shows relational depth | JD calls out Postgres explicitly |
| 5 | Healthcare framing | Heavy | Soften slightly; healthcare RAG still cited as proof-point, not identity | JD is industry-agnostic |

## F) Plan de Entrevistas (top 5 STAR+R)

| # | JD requirement | STAR+R |
|---|----------------|--------|
| 1 | Build integrations connecting platform to enterprise systems | S: Healthcare RAG at Progress Solutions / T: integrate LLM retrieval into EHR-adjacent workflows / A: FastAPI + Docker + structured logging + load simulation / R: ~30% defect reduction post-deploy / **Reflection:** the integration's hardest part was the eval harness, not the model |
| 2 | Production-quality TS code | S: Manga Lens MV3 extension / T: ship to Chrome Web Store / A: TS content scripts + service workers + captureVisibleTab + viewport-slice screenshots w/ coordinate remapping / R: shipped, 29-site selector config / **Reflection:** Manifest V3's service-worker lifecycle forced me to design around restart, not against it |
| 3 | Lead technical discussions w/ C-suite | S: Suvidha video summarization / T: present to nonprofit leadership unfamiliar w/ ML / A: framed transformer summarization as "60-70% review time saved" not as model arch / R: stakeholder approval, deployed Flask API / **Reflection:** outcome metrics, not model metrics, change executive minds |
| 4 | Debug across client infra + own systems | S: Manga Lens Ollama integration / T: CUDA crashes on JPEG-vs-WebP / A: provider-specific payload handling, JPEG for local Ollama / R: stable cross-provider behavior / **Reflection:** "works on one provider" isn't the same as "works on all" — abstract the failure modes |
| 5 | Translate requirements to technical solutions | S: Agentic claims pipeline / T: prevent cascading hallucinations / A: schema-validated JSON contracts between agents, RAG-grounded CPT/ICD validation / R: explainable risk scoring w/ audit traces / **Reflection:** schema contracts are the cheapest reliability win in multi-agent systems |

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active Ashby; comp listed; salary range geo-specific | Positive |
| Description quality | Specific (TS/Next.js/React, Postgres + time-series, AWS, Rust+, $140-260K w/ explanation of variance) | Positive |
| Company hiring signals | $35M Series B (Sequoia-led), explicit anti-spam @tryprofound.com note | Positive |
| Reposting | First time in scan history | Positive |
| Visa sponsorship | Explicit "happy to support" | Positive |

## Keywords extraídas

Forward Deployed Engineer, AI presence, AEO, Fortune 500, custom integrations, TypeScript, Next.js, React, Python, REST APIs, PostgreSQL, time-series databases, AWS, full-stack, executive stakeholders, technical workshops, proofs of concept, BI integration, data pipelines
