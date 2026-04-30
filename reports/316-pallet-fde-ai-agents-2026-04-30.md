# Evaluación: Pallet — Forward Deployed Software Engineer (AI Agents)

**Fecha:** 2026-04-30
**Arquetipo:** AI Solutions / Forward Deployed Engineer (Logistics agents)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/pallet/jobs/5065850007
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — In-office ~5 days/week + ~25% travel
**PDF:** output/2026-04-30/cv-deepak-mallampati-pallet-fde-ai-agents-2026-04-30.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | FDE — Logistics agentic AI (deploy production AI agents inside enterprise logistics customers) |
| Domain | Logistics + supply chain ($12T industry); AI agent execution against TMS/ERP/legacy systems |
| Function | Build (integrations, agent workflows) + Deploy (customer onsites) + Customer success (go-live ownership) |
| Seniority | Mid (1–5 years; 50th-percentile fit for Deepak's 2.5 yrs) |
| Remote | **In-office SF 5 days/week + ~25% customer travel** |
| Comp | **$160,000–$200,000** base + equity (80th percentile) + go-live bonuses |
| Team | First FDEs at Pallet — embedded in customer pods alongside CoPallet (AI agents product) |
| TL;DR | Pallet ($50M, GC/Bessemer/Bain) hires early FDEs to ship agentic AI into legacy logistics environments. Stack 1:1 (Node/TS/Encore.dev, Postgres, OpenAI/Anthropic/Google, Vertex AI fine-tunes, Playwright). Comp band Mid-Senior at 80th pct. **In-office SF 5d/wk is the binding constraint** for Kent-OH-based Deepak — relocation needed; **partial PDF generated** for portfolio-fit reasons. |

## B) Match con CV

| JD Requirement | CV Line | Match |
|---|---|---|
| Reverse-engineer undocumented APIs / ERPs / TMS | Emerson Synthesis ERP T-SQL stored procs across contracts/nominations/allocations/invoicing (cv.md:36); decoded undocumented Synthesis schema for performance work | **Strong** |
| Debug broken data pipelines + flaky integrations in prod | EHR preprocessing pipelines (cv.md:29); ~30% post-deploy defect reduction via FastAPI/Flask + structured logging (cv.md:28) | **Strong** |
| Production AI agent deployment | Agentic Healthcare Claims pipeline — 5 stages with schema-validated JSON contracts between agents (cv.md:71-72); response stability +25% (cv.md:26) | **Strong** |
| LLMs (OpenAI / Anthropic / Google) + fine-tunes on Vertex | Multi-provider LLM orchestration on Manga Lens (Claude / GPT / Ollama) (cv.md:60); LangChain + LlamaIndex (cv.md:14); Hugging Face Diffusers fine-tuning (cv.md:14) | **Strong** |
| Postgres (production scale) | T-SQL DMVs + index tuning at Emerson (cv.md:37); Patient Records SQLite + relational modeling (cv.md:84) | Adequate (T-SQL → Postgres translates) |
| Node + TypeScript on Encore.dev | TypeScript on Manga Lens + Dream Decoder (cv.md:60, 66); Node not on CV but TS fluency implies fast onramp | Partial (mitigatable) |
| Playwright | Not on CV explicitly | Gap (mitigatable in days) |
| Datadog observability | Grafana + structured logging at Emerson + Progress Solutions (cv.md:28, 37) | Adequate (Grafana → Datadog) |
| Customer-facing under ambiguity | HIPAA-conscious docs + stakeholder reports (cv.md:30); Suvidha non-technical Flask UI (cv.md:47); Manga Lens shipped to Chrome Web Store with public reviews | **Strong** |
| 25% customer travel | Comfortable (no constraint flagged) | OK |
| In-office SF 5d/wk | Kent, OH — F-1 OPT — relocation possible but disruptive | Partial |

**Gaps:**
- **Node/Encore.dev stack** — TypeScript fluency on Manga Lens + Dream Decoder is the right onramp; Encore.dev is configuration learning, not language learning.
- **Playwright** — fast pickup; Manga Lens already uses Manifest V3 service workers (similar headless-browser mental model).
- **In-office 5d/wk SF** — the largest practical constraint; Pallet does offer relocation assistance for SF candidates.

## C) Nivel y Estrategia

The 1–5 yr band fits Deepak (2.5 yrs). Lead with: (a) the agentic Healthcare Claims pipeline as the closest analog to deploying production agents into messy enterprise environments (schema contracts as the test for agent reliability), (b) Emerson Synthesis ERP reverse-engineering as direct evidence of legacy-system debugging, (c) Manga Lens multi-provider LLM orchestration as production-scale LLM integration evidence, (d) ~30% defect reduction as production-reliability proof. Plan B if downleveled / location-blocked: angle toward NY satellite (also in-office 5d/wk but East Coast, smaller relocation) and confirm relocation assistance from recruiter.

## D) Comp y Demanda

Pallet: $50M raised, 700% revenue growth, GC/Bessemer/Bain. Mid SF FDE band $160-200K base + equity is standard for Series B unicorn-track AI agents companies (Glassdoor 2026: SF FDE mid bands $150-220K; Pallet's 80th pctile claim is credible). F-1 OPT sponsorship: Series B AI startups are uneven on sponsorship — Pallet's funding profile suggests they will sponsor for high-bar candidates; verify with recruiter early. **Note on US-citizenship clause:** unlike Promise, Pallet does NOT have a govtech US-persons restriction — JD silent on work auth, suggesting normal sponsorship review.

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Lead with FDE archetype: "Applied AI engineer shipping production agentic systems into messy real-world environments — schema contracts, multi-provider LLM, integration debugging, customer go-lives." | JD's primary asks are agent deployment + customer-facing |
| 2 | Experience | Promote Emerson reverse-engineering Synthesis ERP + Progress Solutions agentic pipeline as the closest analogs | 1:1 with JD's "reverse engineer undocumented APIs / debug broken data pipelines" |
| 3 | Projects | Surface Agentic Healthcare Claims (5-stage agents + schema contracts) + Manga Lens (multi-provider LLM + payload abstractions) | Direct production-agent + LLM-integration evidence |
| 4 | Skills | Emphasize Python + TypeScript + Playwright + LLMs + Vertex AI + Postgres + Docker + observability | Direct stack alignment (TS/Encore.dev/Datadog → translate) |
| 5 | Competencies | "Forward Deployed Engineering", "Agentic Workflows", "LLM Multi-Provider", "Legacy System Integration", "Schema Contracts", "Customer-Embedded Delivery", "Production Reliability", "Observability", "Reverse Engineering", "Cross-Functional Communication" | Mirror JD vocabulary |

## F) Plan de Entrevistas

| Req | Story | Reflection |
|---|---|---|
| Reverse-engineer undocumented APIs / ERPs | Emerson Synthesis Order-to-Cash — decoded T-SQL stored procs and schema for contracts/nominations/allocations/invoicing; query time -20%, retrieval latency -25% via DMV-led tuning | The schema is the truth — every "documented" system has at least 30% drift from reality |
| Debug broken pipelines under customer pressure | Progress Solutions clinical RAG + EHR preprocessing — recovered downstream model instability -40% by fixing dataset reliability >98% before touching the model | The fix is upstream of the model 80% of the time |
| Production AI agents in real environments | Agentic Healthcare Claims pipeline — 5-stage agents (Intake → Validation → Consistency → Duplicate → Risk Scoring) with schema-validated JSON contracts that prevent cascading hallucinations | The contract is the test |
| Multi-provider LLM integration | Manga Lens — 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload (WebP for cloud, JPEG for Ollama to dodge CUDA crash); 7-day translation cache; 29 site selectors | Provider abstraction is mostly about isolating the worst-case failure mode |
| Customer-facing under ambiguity | HIPAA system-limitation docs at Progress Solutions; Suvidha Flask interface for non-technical NGO staff; Manga Lens public Chrome Web Store reviews + responses | Match the artifact to the audience |
| Speed and pragmatism over polish | Manga Lens shipped solo in weeks across 4 providers + 29 sites + service workers + dedup logic — "ship the messy version, then make it clean" | Speed beats polish at the 0→1 mark |

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Updated 2026-03-30; still active in Greenhouse listing 2026-04-30 | Positive |
| Apply path | Greenhouse → Pallet careers (verify on apply); SF + NYC variants both live | Positive |
| Tech specificity | Specific stack (Node + TS + Encore.dev, GCP, Postgres, OpenAI/Anthropic/Google, Vertex AI, Playwright, Next.js + React, Datadog) | Positive |
| Description quality | Multi-paragraph; honest about messy reality + in-office policy + tradeoffs ("not for you if remote-first") | Positive |
| Compensation transparency | $160-200K base + equity + go-live bonuses | Positive |
| Funding signal | $50M from GC, Bessemer, Bain; 700% revenue growth | Positive |
| Reposting | First time in scan-history with this specific job ID (5065850007) — prior 4978414007 was stale | Neutral (refreshed posting, not red flag) |

## Keywords extraídas

Forward Deployed Software Engineer, AI Agents, Pallet, Logistics, Supply Chain, CoPallet, Reverse Engineering, ERP, TMS, Integration, OpenAI, Anthropic, Google, Vertex AI, Fine-Tuning, Node, TypeScript, Encore.dev, Postgres, Playwright, Next.js, React, Datadog, San Francisco, In-Office, Customer Travel, Production Agents, Schema Contracts
