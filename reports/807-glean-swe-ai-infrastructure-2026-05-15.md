# Evaluación: Glean — Software Engineer, AI Infrastructure

**Fecha:** 2026-05-15
**Arquetipo:** AI Platform / MLOps Engineer
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/gleanwork/jobs/4695206005
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — Hybrid (3-4 days in Bay Area office)
**Region:** US
**PDF:** output/2026-05-15/cv-deepak-mallampati-glean-swe-ai-infrastructure-2026-05-15.pdf

---

## A) Resumen del Rol

| Field | Detail |
|-------|--------|
| Arquetipo | AI Platform / MLOps Engineer |
| Domain | LLM serving + routing + orchestration infra for an enterprise search/work assistant |
| Function | Build the AI platform that powers Glean's product features |
| Seniority | Mid IC (2-5 YOE explicit) — matches Deepak's natural level |
| Remote | Hybrid SF Bay Area (Palo Alto Mon/Wed/Fri) |
| Team size | AI Infrastructure team within engineering |
| TL;DR | Glean's AI Infra role is platform/MLOps-flavored (LLM serving, routing, orchestration). Deepak's strengths are at the application layer (RAG + agentic) more than at the platform serving layer. Match is moderate — strong on Python and shipping production AI, weaker on the LLM-serving-infrastructure specifics. SF hybrid is a relocation. Score 3.6/5. |

---

## B) Match con CV

| JD Requirement | Match | Evidence in CV |
|---------------|-------|----------------|
| Design AI/ML pipelines and serving infra | ✅ Moderate | FastAPI/Flask packaging with Docker; not LLM serving specifically |
| LLM serving, routing, orchestration | ⚠ Gap | Built on top of LLM APIs but not built the serving layer |
| Python (preferred) | ✅ Strong | Python primary |
| Go or Java | ⚠ Gap | Not in CV |
| Production-ready software around AI/ML | ✅ Strong | Multiple FastAPI services with structured logging |
| 2-5 YOE | ✅ Match | 2.5 YOE per CV summary |
| BA/BS CS | ✅ Strong | Master's at Kent State |
| Mentor junior engineers | ⚠ Mild gap | Student Manager (Kent State) shows coordination; not strict tech mentoring |

**Gaps & mitigation:**
1. Go/Java — mitigation: "Python is my primary; happy to ramp on Go. Most of the AI infra patterns transfer directly."
2. LLM serving infrastructure specifically — mitigation: cite production deployment experience + Docker + observability; acknowledge gap honestly.

## C) Nivel y Estrategia

- **Detected level**: Mid IC (2-5 YOE, $175K–$270K band)
- **Deepak**: At the lower end. The role's seniority band is consistent with new grad → mid IC.
- **Sell mid IC**: emphasize production discipline (FastAPI services, Docker, logging) + measurable outcomes (~30% defect reduction).
- **If downleveled**: accept entry IC; Glean's stock trajectory at $7B+ valuation is the upside.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD direct | $175K–$270K | SF hybrid |
| Levels.fyi Glean E3-E4 | $180K–$280K base + RSU | Late-stage private (~$7B valuation 2025) |
| Demand | Very high | Enterprise search + Copilot category very active |

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "Applied AI engineer..." | Lead with "AI engineer with production discipline shipping FastAPI/Docker LLM services" | Match infra framing |
| 2 | Skills | Python primary | Surface: "Docker, FastAPI services, cloud-ready deployment, logging" prominently | Infra orientation |
| 3 | Bullets | Progress Solutions: agentic workflows | Add: "Packaged inference behind FastAPI/Docker with structured logging — ~30% defect reduction" | Direct platform pitch |
| 4 | Skills | LangChain | Add: orchestration patterns explicit | LLM orchestration is one of three JD focus areas |
| 5 | Education | Master's KSU | Add: GPA if strong | They like academic signal |

## F) Plan de Entrevistas (STAR+R)

| # | JD Req | Story | S | T | A | R | Reflection |
|---|--------|-------|---|---|---|---|------------|
| 1 | Production AI/ML systems | Progress FastAPI services | High inference defect rate | Containerize + log | Docker + structured logging + load sim | ~30% post-deploy defect reduction | Observability before scale |
| 2 | LLM orchestration | Healthcare Claims multi-agent | Pipeline cascading errors | Schema contracts | JSON-schema validated agent boundaries | Pipeline became debuggable | Treat agents like services, not functions |
| 3 | Pipeline infra | EHR preprocessing | Dirty ML inputs | Build preprocessing layer | Pandas/NumPy pipelines | Dataset reliability >98%, model instability -40% | Data quality dominates model gains |
| 4 | Customer-focused team | Suvidha non-tech users | Non-engs needed access | Flask UI | Lightweight interface for staff | 60-70% review time saved | Build for end-users, not just APIs |
| 5 | Cross-functional | Kent State Student Mgr | 150 students | Comm + planning | Onboarding + tracking | ~20% ramp-up reduction | Process pays back in scale |
| 6 | Cost/perf tradeoffs | Manga Lens extension | API cost ballooning | Multi-provider routing | WebP for cloud, JPEG for Ollama local fallback | Cost cap + privacy gain | Provider routing isn't just resilience — it's economics |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Marked "New" on listing, application form active | Positive |
| Description | Names specific tech (Python/Go/Java), specific YOE range, salary published | Positive |
| Company hiring | Glean continues to scale post-Series E; no layoffs | Positive |
| Reposting | Glean has multiple AI Infrastructure listings — consistent hiring | Positive |
| Market context | Enterprise AI infra roles fill in 4-8 weeks at top startups | Neutral |

**Assessment:** **High Confidence**. Real role, clear scope, public comp band, large team hiring.

## H) Draft Application Answers
(Score 3.6 < 4.5 — skipped per oferta.md)

---

## Keywords extraídas
AI Infrastructure, LLM serving, LLM routing, orchestration, agentic systems, Python, Go, Java, production AI, MLOps, enterprise search, Glean
