# Evaluación: Modal — Forward Deployed Engineer - Systems

**Fecha:** 2026-05-13
**Arquetipo:** AI Solutions / Forward Deployed Engineer + AI Platform (cloud/infra)
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/modal/cbbbee50-3d3b-4873-8ae8-ff4b885b8e54
**Legitimacy:** High Confidence
**Location:** New York / San Francisco (secondary) — In-person (NYC/SF/Stockholm)
**PDF:** output/2026-05-13/cv-deepak-mallampati-modal-fde-systems-2026-05-13.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | Forward Deployed Engineer for AI infrastructure platform — partner with AI labs + foundation models on cloud architecture |
| Domain | AI infrastructure (GPU compute, container startups, native storage) — customers include Suno, Lovable, Cognition, Meta, Scale AI, Substack |
| Function | Cloud architecture + networking + storage + containerization + sandboxing + migration paths from AWS/GCP/Azure to Modal |
| Seniority | 3+ years professional software engineering |
| Remote | In-person required (NYC/SF/Stockholm) |
| Team size | FDE team includes software engineers, computational scientists, ML engineers, former founders |
| TL;DR | Strong-comp ($180-240K) FDE at a top-tier AI infrastructure company (Series B $1.1B valuation, customers like Suno + Lovable + Meta). Friction: Deepak's stack is application-layer Python AI, not infrastructure-layer K8s/Terraform/Pulumi. NYC/SF/Stockholm in-person. 3+y bar fits. Worth applying as a stretch with strong agentic + production discipline narrative. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| 3+ years professional software engineering | 2.5y at Progress production engineering + 11mo Energy Solutions DB/DevOps + 3mo Suvidha = ~3.5y |
| Cloud platforms (AWS, GCP, Azure) — compute, storage, networking, containers | Docker + cloud-ready deployment at Progress (cv.md L17, L28); Energy Solutions Grafana + SQL DMVs for SQL Server (cv.md L37) — adjacent but not deep K8s |
| Distributed systems architecture, data pipelines, IaC (Terraform, Pulumi, CloudFormation) | Progress preprocessing pipelines (Pandas + NumPy) for EHR + appointment data (cv.md L29); FastAPI/Docker packaging (cv.md L28); IaC not directly demonstrated |
| Strong communicator on systems architecture | Stakeholder-facing system-limitation docs at Progress (cv.md L30); Energy Solutions Grafana dashboards + DMV reports (cv.md L37); Student Manager 150+ coordination (cv.md L52) |
| Direct customer engagement (CTOs, VPs Engineering, ML leads) | Stakeholder-facing docs at Progress (cv.md L30); founder discovery E-Farming (cv.md L87); Student Manager coordination (cv.md L52) |
| Technical demos + experiments + proof-of-concepts | Manga Lens shipped solo Chrome Web Store + Dream Decoder full-stack POC + Agentic Pixel ongoing experiments (cv.md L60-66, L62-63) |
| Migration paths from cloud to serverless | Adjacent: Energy Solutions ERP CI/CD with version-controlled SQL + rollback checkpoints (cv.md L36) demonstrates production migration discipline |
| Hands-on with companies like Suno/Lovable/Meta (frontier AI workloads) | Progress production AI workloads in healthcare; Manga Lens at Chrome Web Store scale (cv.md L60); not Suno/Meta scale yet |

**Gaps:**
1. **K8s / Terraform / Pulumi / serverless infra:** Deepak's infra is Docker + Jenkins + Grafana + FastAPI/Flask. Pure infra-FDE expects deeper IaC. Mitigate: lead with production discipline + CI/CD at Energy Solutions + Docker packaging at Progress.
2. **NYC/SF/Stockholm in-person:** Relocation required.
3. **F-1 OPT verification:** Series B $1.1B; OPT/H-1B sponsorship plausible.
4. **AI infra (GPU/containerization) domain unfamiliar:** Deepak's work is on top of inference infra, not under it. Mitigate: frame as "I know what application-layer engineers need from the infra primitive."

## C) Nivel y Estrategia

- JD: 3+y software engineering — fits Deepak's ~3.5y.
- Sell: "I have shipped production AI services at Progress (FastAPI/Docker + structured logging + load simulation + ~30% defect reduction) + Energy Solutions ERP CI/CD with rollback checkpoints. I know what application-layer AI engineers need from the infra primitive because I've been on the other side. I want to ramp into the infra-FDE primitive."
- Downlevel plan: Accept Mid-IC FDE band with 6-month structured ramp on K8s + Terraform.

## D) Comp y Demanda

| Source | Number | Notes |
|---|---|---|
| Modal JD | $180-240K + equity | Strong transparency |
| Levels.fyi - Modal | $190-260K base + equity | Comparable band |
| Glassdoor - AI Infra FDE | $200-260K median | Public data |
| Built In NYC - AI Infra FDE | $190-240K + equity | Median |

Expect: $190-210K base + meaningful equity. Ask: $205K + standard FDE equity + relocation stipend.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare RAG | "Applied AI engineer with production engineering discipline — FastAPI/Flask + Docker + Jenkins CI/CD + structured logging + Grafana monitoring across healthcare AI and enterprise ERP. Solo shipper of Manga Lens (Chrome extension MV3, 4 vision providers behind one abstraction)." | Mirrors Modal infrastructure framing |
| 2 | Bullets (Progress + Energy Solutions) | Healthcare-only | Lead with infra discipline: FastAPI/Docker + structured logging + load simulation + ~30% defect reduction → Jenkins CI/CD + version-controlled SQL + RBAC + rollback + >30% deployment-error reduction → Grafana DMV dashboards + ~25% incident-recurrence cut | JD weights infra + production discipline |
| 3 | Skills | Python-first | Surface: Docker + FastAPI + Flask + Jenkins + Grafana + cloud-ready deployment + observability/logging + REST/JSON + CI/CD + SQL + structured logging | JD-keyword alignment |
| 4 | Projects | Healthcare-heavy | Reorder: Manga Lens (Chrome extension MV3 + multi-provider) → Geospatial Road Network (NetworkX + graph algorithms — distributed-systems adjacent) → Dream Decoder (FastAPI orchestrator) → Agentic Healthcare Claims | Front-load systems depth |
| 5 | Cover letter | n/a | Open with "Modal is the infra primitive that AI application engineers like me need — instant GPU + sub-second container startups + native storage. I have shipped production AI services on top of similar primitives at Progress (FastAPI/Docker + structured logging + ~30% defect reduction) and built CI/CD for compliance-sensitive ERP at Energy Solutions. I want to be the FDE who knows the application-engineer pain because I've lived it." | Bridges archetype + addresses gap |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R |
|---|---|---|
| 1 | Architect + deploy massive-scale production workloads | S: Progress production AI services (agentic LLM + RAG + ML inference) needed reliable packaging; T: ship production-ready services; A: FastAPI/Flask + Docker + structured logging + load simulation + audit trails; R: ~30% defect reduction post-deploy + continued adoption; **Reflection:** observability + logging + load simulation are the production discipline that compounds — every shortcut becomes an incident |
| 2 | Cloud platforms — compute, storage, networking, containers | S: Energy Solutions ERP CI/CD for compliance-sensitive O&G; T: build deployment pipeline + monitoring; A: Jenkins + version-controlled SQL + structured release validation + rollback checkpoints + Grafana DMV dashboards; R: >30% deployment-error reduction + ~35-40% release cycle improvement + ~25% incident-recurrence cut; **Reflection:** the rollback checkpoint + DMV dashboards are what made the customer trust the pipeline |
| 3 | Distributed systems + data pipelines + IaC | S: Progress preprocessing pipelines for EHR + appointment + support-ticket data needed to feed multiple downstream models; T: build reliable pipeline; A: Pandas + NumPy preprocessing + 98% dataset reliability + ~40% downstream model-instability reduction + data lineage docs; R: production AI services trusted by clinical stakeholders; **Reflection:** dataset reliability is upstream of every model gain — pipeline discipline compounds |
| 4 | Technical discovery + architecture sessions with customers | S: E-Farming founder + Progress clinical stakeholders + Suvidha nonprofit staff; T: translate ambiguous needs into shipped systems; A: discovery interviews + stakeholder-facing system-limitation docs + non-technical UI + Student Manager 150+ coordination; R: shipped products + continued adoption; **Reflection:** the discovery work + limitation doc compound — both build trust before code lands |
| 5 | Build trusted relationships with technical leaders | S: Progress clinical stakeholders needed to trust agentic outputs + HIPAA-conscious governance; T: communicate AI capability + limitations + lineage honestly; A: stakeholder-facing system-limitation docs + evaluation audit trails + data lineage docs + Grafana dashboards; R: continued adoption + ~30% defect reduction; **Reflection:** the audit + lineage + dashboard form a trust contract that scales with org seniority |
| 6 | Migration paths from existing infra to platform | S: Energy Solutions ERP needed CI/CD on top of legacy stored-proc + schema deployment; T: design migration that respects compliance + rollback; A: version-controlled SQL + structured release validation + rollback checkpoints + RBAC + audit logging; R: >30% deployment-error reduction + auditable releases; **Reflection:** migrations in regulated industries are won by the rollback story, not the speed story |

Red-flag prep:
- "Why Modal?" → I have shipped production AI on top of similar primitives at Progress (FastAPI/Docker + structured logging). Modal's instant-GPU + sub-second container startup is the next-gen primitive — I want to help application engineers use it because I've been one.
- "K8s / Terraform / Pulumi?" → Docker + Jenkins + Grafana + Flask/FastAPI is what I've shipped. K8s + Terraform + Pulumi is the ramp — will be productive in first 30 days.
- "NYC/SF/Stockholm in-person?" → Open to relocating to NYC or SF; need 4-6 weeks lead time.
- "F-1 OPT?" → US-based, OPT-eligible, STEM extension. Long-term sponsorship — verify.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Apply button | Active (Ashby GraphQL returns full payload 2026-05-13) | Positive |
| Description quality | Specific: 3+y bar, comp band, exact tech stack (AWS/GCP/Azure, Docker, K8s, Terraform, Pulumi, CloudFormation), customer roster (Suno, Lovable, Cognition, Meta, Scale AI, Substack), team composition + 3 in-person locations | Positive |
| Comp transparency | $180-240K + equity disclosed | Positive |
| Company state | Series B $1.1B valuation; 9-figure ARR; investors Lux Capital, Redpoint, Amplify, Elad Gil | Positive |
| Reposting | First seen 2026-05-13; concurrent with Modal Customer Engineer + FDE ML — structural team expansion | Positive |
| Role-company fit | FDE is core to Modal's enterprise GTM | Positive |

## H) Draft Application Answers

Not generated — score 3.5 is below 4.5 threshold. PDF will be generated per PDF policy (score ≥ 3.0).

---

## Keywords extraídas

Modal, Forward Deployed Engineer, Systems, AI infrastructure, GPU compute, container startups, native storage, AWS, GCP, Azure, Docker, Kubernetes, Terraform, Pulumi, CloudFormation, Suno, Lovable, Cognition, Meta, Scale AI, NYC, SF, Stockholm, $180-240K, 3+ years, Series B.
