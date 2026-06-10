# Evaluación: Firecrawl — Forward Deployed Engineer (Integrations)

**Fecha:** 2026-06-10
**Arquetipo:** AI Solutions / Forward Deployed Engineer (secundario: AI Platform / MLOps)
**Score:** 3.8/5
**URL:** https://www.workatastartup.com/jobs/93096
**Legitimacy:** Legit (verified)
**Location:** San Francisco, CA — Hybrid OR Remote (Americas, UTC-3 to UTC-10)
**Region:** US
**PDF:** output/2026-06-10/cv-deepak-mallampati-firecrawl-forward-deployed-engineer-integrations-2026-06-10.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| **Arquetipo** | Forward Deployed Engineer (Integrations) — customer-facing IC owning integration delivery |
| **Domain** | Dev tools / web data infrastructure (Firecrawl — "API to search, scrape, and interact with the web at scale") |
| **Function** | Own integration delivery for priority customers from first API call → production scale; debug live; turn 1:1 problems into team-wide solutions |
| **Seniority** | 3+ years of shipped systems experience (genuine IC, not a Senior+ band) |
| **Remote** | SF hybrid OR remote Americas (UTC-3 to UTC-10) |
| **Team size** | YC company w/ 14 open roles — sizeable post-seed/Series A growth |
| **Comp** | $160K-$220K + up to 0.10% equity (SF band; adjusted for COL) |
| **TL;DR** | Genuine match. 3-yr floor matches Deepak's window, tech stack (TS/Node + API integration + Stripe + cloud) is buildable from his FastAPI + React + Vanguard integration foundation, US-remote works, and "US citizenship or visa required" reads as inclusive of OPT. Drags are the **TS/Node-primary** stack (Deepak's primary is Python) and the **payments/Stripe** angle (he hasn't shipped Stripe integrations). Both are fast-ramp gaps, not blockers. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Fit |
|------------------|--------------------|-----|
| **TypeScript / Node.js**, production-quality | MangaLens (TS/JS Chrome extension); React | ⚠️ Solid but secondary stack |
| Build integrations with external APIs | 12 FastAPI microservices; healthcare integrations; Vanguard agentic integrations | ✅ Strong |
| Payments / Stripe billing | No direct Stripe; healthcare billing context | ⚠️ Gap (ramp-up) |
| Cloud platforms (GCP / Vercel) | AWS/Azure/Docker/K8s; Terraform | ✅ Strong (different cloud, same primitives) |
| Backend + data systems design | RAG corpora pipelines; ML preprocessing; FastAPI services | ✅ Strong |
| Auth patterns (OAuth, API keys, JWT) | API auth + identity in healthcare context | ✅ Solid |
| Customer-facing in high-stakes | Vanguard cross-functional + stakeholder demos | ⚠️ Indirect |
| Owning delivery end-to-end | MangaLens Chrome Web Store ship; healthcare RAG to prod | ✅ Strong |
| US citizenship / visa | F-1 OPT (visa-eligible) | ✅ Eligible |

**Gaps & mitigation:**
1. **TS/Node primary stack.** Deepak's primary is Python; he ships TS as a secondary (MangaLens). *Mitigation:* show MangaLens shipped artifact + GitHub TS commits; commit to rapid ramp; highlight that integration-thinking is stack-agnostic.
2. **Stripe / payments.** No production Stripe build. *Mitigation:* don't fake it — frame as "fast ramp; I've built billing-adjacent integrations in healthcare." Optionally ship a small Stripe-integration PoC pre-interview.

## C) Nivel y Estrategia

- **JD level:** Mid IC (3+ yrs, owns delivery for priority customers). **Deepak's level:** Mid IC (~4 yrs). **Match.**
- **Sell:** "ships customer-facing integrations end-to-end — FastAPI services in regulated healthcare, MangaLens Chrome extension to production, agentic orchestration at Vanguard. Treats integrations as product."
- **Decisive lever:** TS/Node depth signal + customer-facing energy. Show MangaLens + agentic conductor work prominently.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp published | $160K-$220K + up to 0.10% equity | JD |
| Market context — FDE Integrations, US, 3+ yrs | $150K-$210K base + equity at YC/Series A | Levels.fyi composite |
| Demand trend | Very high — FDE is the hottest 2026 lane | General |
| Company | Firecrawl — YC company; well-known dev-tools brand in web scraping/search API space | Public; YC company page |

Comp is **on band for SF YC roles** and competitive against Deepak's expectations. Equity (0.10%) is modest but typical for an FDE band.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare/banking framing | Reframe as "Forward Deployed Engineer — integrations end-to-end, customer-facing IC, ships TS + Python production" | Mirror JD phrasing |
| 2 | Skills | Python-led | Surface TypeScript/Node.js + REST/API + auth (OAuth/JWT) + cloud integration earlier | JD's must-haves |
| 3 | Experience | Banking + healthcare | Lead with FastAPI microservices + Vanguard integrations + MangaLens shipped product | Direct 1:1 with JD's integration ownership |
| 4 | Projects | MangaLens generic | Reframe MangaLens as "shipped TS/Node integration product — Chrome Web Store, 29+ sites" | Concrete TS shipping proof |
| 5 | Footer | US/F-1 OPT | "US-based, F-1 OPT, visa-eligible, work-authorized today" — direct match to JD "US citizenship or visa" | Removes ambiguity |

**LinkedIn:** surface integrations, customer-facing engineering, FDE, TS/Node + Python; headline "Forward Deployed Engineer — Integrations."

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Integration delivery end-to-end | Healthcare FastAPI suite | Regulated env, multiple data sources | Ship reliable integration | 12 FastAPI services + auth + idempotent contracts | Production in regulated env, 99.9% uptime | Contracts beat clever code |
| 2 | TS/Node shipping | MangaLens | Manga reader UX gap | Inline translation as Chrome extension | TS/Node + bg worker + Chrome APIs + LLM call | Live on Web Store, 29+ sites | Customers want it working, not perfect |
| 3 | Debug w/ customer live | Vanguard prod incident | Agentic regression | Restore service fast | Trace inspection + targeted rollback + customer comms | Same-day fix + post-mortem | Live debug = customer trust earned |
| 4 | One-off → team win | Eval framework | Ad-hoc per-team evals | Standardize regression catch | RAGAS/BERTScore + custom metrics → shared framework | Adopted across teams | Pattern-mine the one-off |
| 5 | Customer-facing energy | Cross-functional demos | Non-technical stakeholders | Translate ML → outcomes | Plain language + structured demos + risk framing | Buy-in pre-deploy | Outcomes > model architectures |
| 6 | Cloud platforms | K8s/Docker/Terraform | Multi-env deploy | Reproducible deploys | Terraform + K8s manifests + CI/CD | Zero-downtime rollouts | Infra is product |

**Case study:** MangaLens (TS/Node integration shipped to production) + Vanguard agentic orchestration.
**Red-flag Qs:** "Stripe experience?" → honest: "no production Stripe; I'd ramp via small PoC; my integration thinking is contract-first regardless of provider"; "TS depth?" → "MangaLens is shipped TS; happy to do live coding."

## G) Posting Legitimacy

**Assessment: Legit (verified)**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on YC workatastartup + Firecrawl careers | Positive |
| Description quality | Specific tech stack, concrete responsibilities, real comp band | Positive |
| Company signals | Firecrawl — established YC dev-tools brand; 14 open roles + public product (firecrawl.dev) | Positive |
| Internal contradiction | None | None |
| Comp transparency | Explicit range + equity | Positive |

**Context Notes:** Verified across YC company page (`ycombinator.com/companies/firecrawl/jobs`) and workatastartup mirror. Firecrawl is a recognizable YC dev-tools company.

## H) Draft Application Answers

**Q1: Why you?**
> "I ship customer-facing integrations end-to-end. In healthcare I built 12 FastAPI microservices (99.9% uptime); at Vanguard I shipped agentic orchestration that cut tokens 42% on multi-step jobs; I built MangaLens as a TS/Node Chrome extension live on the Web Store across 29+ sites. Integration-first thinking is what I do — Firecrawl's FDE Integrations role is the right shape."

**Q2: Why Firecrawl?**
> "I use scraping/search APIs in RAG pipelines, and Firecrawl is the cleanest layer I've seen. Integrations is where the product meets the customer's actual world — that's where I work best."

**Q3: TS vs Python?**
> "Python's my primary; TS/Node is my shipping-secondary (MangaLens lives in production on TS). Integration design is the same problem — contracts, auth, idempotency, observability — regardless of stack. Happy to do live TS coding to demonstrate."

---

## Keywords extraídas
Forward Deployed Engineer, integrations, TypeScript, Node.js, Stripe, payments, OAuth, JWT, API integration, cloud platforms, customer-facing, FastAPI, Python, YC, dev tools, Chrome extension, web scraping API
