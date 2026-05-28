# Evaluación: Arize AI — AI Application Engineer, APJ (Singapore)

**Fecha:** 2026-05-28
**Arquetipo:** Applied AI / LLM Engineer (Observability + Internal AI Tooling, APJ)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/arizeai/jobs/5989512004
**Legitimacy:** High Confidence
**Location:** Remote (Singapore-based requirement)
**Region:** Intl
**PDF:** output-intl/2026-05-28/cv-deepak-mallampati-arize-ai-app-eng-apj-singapore-2026-05-28.pdf
**Verification:** confirmed via Greenhouse public board

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI Engineer — debug platform issues + build internal copilots + customer POCs (APJ-focused) |
| Domain | AI observability platform (LLM evals, distributed tracing) |
| Function | Build (production fixes + internal tooling + POCs) — IC + customer-facing |
| Seniority | Mid (2-5 yrs software) |
| Remote | Remote, **Singapore-based requirement** for APJ coverage |
| Comp | "Determined based upon various factors"; no range disclosed |
| Team | Engineering + Product + Solutions cross-functional (APJ pod) |

**TL;DR:** APJ-focused variant of Arize's AI Application Engineer role (mirror of Buenos Aires one). Same stack, same responsibilities; Singapore residency required. Strong archetype fit gated by location.

## B) Match con CV

| Requisito JD | Match en CV |
|--------------|-------------|
| Python production-ready | ✅ Python primary stack; FastAPI/Flask in prod |
| Golang production-ready | ⚠️ Not in CV — would need attested ramp |
| Generative AI (LLM APIs, frameworks) | ✅ Healthcare RAG + agentic workflows; multi-provider |
| OpenTelemetry + distributed tracing | ⚠️ Structured logging + load sim adjacent; OTel not explicitly named |
| Frameworks (CrewAI, Langchain, Langgraph, DiFy, LiteLLM) | ✅ Langchain in agentic flows; others learnable |
| JS/TypeScript (willingness to learn OK) | ✅ TS in Dream Decoder + Manga Lens |
| 2-5 yrs software | ✅ Multi-year production AI |
| Debug + ship production fixes | ✅ Defect reduction ~30% post-deploy |
| Build internal copilots / GenAI POCs | ✅ Agentic care nav + claims fraud + Manga Lens |
| Customer-facing (bonus) | ✅ Healthcare stakeholder engagement |
| Open-source contributions (bonus) | ⚠️ Public projects, not OSS contributions |
| Startup environment (bonus) | ✅ Solo-founder mindset |

**Gaps:**

1. **Singapore residency** — *Hard.* JD requires Singapore base for APJ coverage. F-1 OPT is US-only — relocation requires Singapore Employment Pass (typically S$5,000+/mo salary requirement at this seniority).
2. **Golang** — *Soft.* Same as Buenos Aires role; learnable.
3. **APJ time-zone work** — *Soft.* Singapore SGT = UTC+8, ~13 hours ahead of US East — would need full relocation, not remote-from-US.

## C) Nivel y Estrategia

**Nivel detectado:** Mid (2-5 yrs). Same as the Buenos Aires role — Arize wants builders comfortable with debug + ship + customer-facing.

**Strategy:**
- Same archetype framing as #1006 (healthcare RAG + agentic + production reliability).
- Address Singapore residency up front — F-1 OPT US-only; relocation is a real lift; offer to discuss US-remote alternative or other Arize openings.
- Singapore Employment Pass requires sponsor + min salary — flag as logistical question.

**If down-leveled:** Comp not disclosed; APJ mid AI Engineer in Singapore: S$80K-S$120K base + equity (~$60K-$90K USD); Singaporean tax favorable but cost-of-living is high.

## D) Comp y Demanda

| Métrica | Valor | Fuente |
|---------|-------|--------|
| JD comp | Not disclosed | Greenhouse JD |
| Singapore mid AI Engineer | S$80K-S$120K base + equity | Glassdoor / Levels.fyi SG 2026 |
| Singapore Employment Pass minimum | S$5,000/mo for general roles; higher for tech | MOM SG policy |
| Arize APJ pod size | Small — Singapore + Sydney; expansion hiring | LinkedIn search |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "healthcare RAG + agentic LLM" | "Applied AI engineer with production RAG, agentic workflows, and observability instincts" | Mirror Arize debug+build+ship cadence |
| 2 | Skills | Default | Surface "Python, FastAPI, GenAI (Langchain), structured logging, eval pipelines, TypeScript, Go (ramp)" | JD vocab; honest on Go |
| 3 | Projects | claims, manga, dream, yolo | **claims, dream, manga, pixel** | Range across debug + build + ship |
| 4 | Location line | Kent, OH (US) | "Open to Singapore relocation for the right role; also open to discussing remote-from-US if Arize has flexibility" | F-1 OPT honest framing |
| 5 | Cover | Standard | Lead with location flag + agentic + RAG hook | Honesty up front |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Debug production AI | Healthcare RAG latency regression | RAG p95 drifted up 40% post-corpus update | Root-cause + fix | Bisect embedding cache → chunk size mismatch → sliding-window cache | -30% p95, audit-trail kept | Bisection + invariants beat heroics |
| 2 | Build internal AI copilots | Agentic care nav agent | 5 files of policy logic for care nav | Single grounded agent | RAG-grounded retrieval + schema contracts + eval audit trail | ~25% response stability, ~30% defect reduction | Schema contracts separate copilot from chaos |
| 3 | Customer POC | Claims fraud pipeline | Customer demanded explainability + audit | Ship audit-ready POC | 5-stage agent + JSON contracts + CPT/ICD grounding + audit log | Deployable | POC discipline = production discipline applied earlier |
| 4 | OTel + tracing | Structured logging migration | Free-form logs across services | Standardize | JSON structured logging + correlation IDs + load sim | ~30% defect reduction | OTel is the formal version of this |
| 5 | Cross-functional | E-Farming + Manga Lens | Solo greenfield, messy stakeholders | Ship + iterate | E-Farming PHP marketplace; Manga Lens Chrome Web Store (4 providers) | Live products w/ real feedback | Cross-functional starts with empathy, not org chart |

**Case study to lead with:** Agentic Healthcare Claims Fraud Pipeline — directly mirrors Arize's customer POC rhythm.

**Red-flag questions:**
- *"Open to Singapore residency?"* → "Currently US-based on F-1 OPT. Open to relocation for the right role; need to flag Singapore Employment Pass logistics early. Also open if Arize has US-remote slots in this function."
- *"Why APJ?"* → "Singapore is the AI gateway for APJ — most Western AI infra companies serve the region from there. Arize's observability platform is the layer enterprise AI buyers reach for after the first wave of demos breaks in production. Good place to be."
- *"Why Arize?"* → Same as #1006 — eval + observability is the maturation layer for GenAI.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Greenhouse live posting, full JD body | Positive |
| Company maturity | Series C, well-known LLM obs leader | Positive |
| Description quality | Specific tech stack, named frameworks, "bonus" qualifications | Positive |
| Reposting | First time in this track's scan-history | Positive |
| Role-region clarity | Singapore explicit; APJ scope clear | Positive |
| Pair with US/LATAM postings | Arize is hiring this same role across 3+ regions = real growth | Positive |

## H) Draft Application Answers

*Score 3.0 (>= 3.0) — answers included.*

**"Why Arize APJ?"**
> Singapore is the natural APJ landing pad for AI infra — enterprise buyers in JP, AU, SG, KR all evaluate the same observability + eval problems Arize is solving. The debug + build + ship cadence in the JD is exactly the rhythm I've been operating in: healthcare RAG, agentic workflows, eval audits, structured logging — the manual version of what your platform productizes.

**"Most relevant production AI story?"**
> Healthcare RAG + agentic care nav at Progress Solutions. Recursive semantic chunking + transformer embeddings cut irrelevant retrieval >30% and lifted contextual precision ~35%. Agentic flows on top for eligibility + documentation clarification — ~25% response stability gain, >30% hallucination reduction in production. All on FastAPI/Docker with structured logging and load simulation.

**"Location?"**
> Currently US-based on F-1 OPT. Open to Singapore relocation — need to flag Employment Pass logistics early. Also open if Arize has flexibility for US-remote in this function. Happy to align early.

---

## Keywords extraídas

AI Application Engineer APJ, LLM observability, Python, Golang, OpenTelemetry, distributed tracing, CrewAI, Langchain, Langgraph, DiFy, LiteLLM, copilots, POC, debug, ship production fixes, Singapore, Employment Pass, remote, generative AI
