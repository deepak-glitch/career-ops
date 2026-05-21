# Evaluación: Proliferate — Founding Engineer

**Fecha:** 2026-05-21
**Arquetipo:** Founding Engineer at agent-OS-for-engineering startup (visa sponsor + new grads OK)
**Score:** 4.0/5
**URL:** https://www.ycombinator.com/companies/proliferate/jobs/L3copvK-founding-engineer
**Legitimacy:** High Confidence
**Location:** San Francisco, CA (SoMa) — Full-time on-site
**Region:** US
**PDF:** output/2026-05-21/cv-deepak-mallampati-proliferate-founding-engineer-2026-05-21.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | Founding Engineer at agent-runtime + cloud-systems "operating system for modern engineering" |
| Domain | Agent runtime + human-agent collaboration UI + cloud systems |
| Function | End-to-end product shipping (agent runtime ↔ product UI ↔ cloud) + workflow design |
| Seniority | "Any" — new grads explicitly welcome |
| Remote | San Francisco (SoMa) — on-site full-time |
| Team size | Founding cohort (small, flat) |
| Comp | $200K–$350K base + 0.50%–2.00% equity |
| TL;DR | **High-priority US match**: explicit "any experience, new grads welcome" + **visa sponsorship: Yes** + comp band $200-350K + agentic + craft-focused team. Tech stack (TS/React/Next/Python/Postgres/Redis/AWS) is 90% Deepak's stack. SF on-site is only friction. Score 4.0/5 — apply. |

## B) Match con CV

| Requirement | Match | CV evidence |
|-------------|-------|-------------|
| TypeScript / React / Next.js | Direct | Manga Lens TS service workers + content scripts; Dream Decoder React/TS/Vite/Tailwind |
| Python | Direct | Progress Solutions + Suvidha + all backend projects primary language |
| Postgres / Redis | Direct on SQL (Postgres/SQLite); Redis adjacent | T-SQL + PostgreSQL + SQLite at Emerson; Redis caching mentally adjacent via 7-day Manga Lens cache (KV pattern) |
| AWS | Soft | No explicit AWS production deploy; Docker + cloud-ready packaging present |
| Rust | Gap | No Rust experience |
| Agent runtime + human-agent collaboration UI | Direct | Healthcare Claims multi-agent w/ JSON contracts; Pixel LLM agent orchestrator decomposes prompts; Suvidha web interface for non-tech staff = human-agent collab pattern |
| Ship product from inception | Direct | Manga Lens public Chrome Web Store ship; Suvidha API + UI ship; Healthcare Claims full pipeline ship |
| Convert customer feedback into polished features | Direct | Progress Solutions stakeholder docs → system iterations; Manga Lens 29 site selector configs from user feedback |
| Cloud systems / scalable distributed systems | Adjacent | FastAPI + Docker + load simulation + observability/logging; not large-scale distributed yet |
| New grads / "any experience" OK | Direct | Deepak May 2025 grad + 2.5y; fits explicit early-career framing |
| Visa sponsorship: Yes | Direct | F-1 OPT requires sponsorship; Proliferate confirms Yes |

**Gaps:**
1. **Rust** — Listed in stack; gap. Mitigation: 4-6 week ramp; offer to start in TS/Python while building Rust depth.
2. **AWS production** — Soft gap. Mitigation: Docker + cloud-ready packaging is adjacent; ramp via founding-team support.
3. **SF on-site relocation** — Soft. Kent OH → SF requires move; manageable but real.

## C) Nivel y Estrategia

- **Detected level:** Any / new grad / founding — explicitly broad.
- **Deepak natural band:** New grad - Mid IC; fit clean.
- **Pitch:** "Shipped multi-agent production system (Healthcare Claims w/ JSON contracts), shipped public Chrome extension (Manga Lens multi-provider AI vision), built RAG + agentic + structured outputs in Progress Solutions. Comfort with TS/React/Next.js + Python + Postgres/SQL. Hungry for craft-first founding-team intensity."
- **Comp ask:** $230-280K base + 1.0-1.5% equity. Premium for SF + founding risk + visa sponsorship.
- **Interview process:** 5-stage with paid in-person work trial ($1-3K, 1-3 days). Optimize trial: lead with public Manga Lens demo + Healthcare Claims multi-agent walkthrough.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| JD stated | $200-350K + 0.50-2.00% equity | Strong founding band — top of YC seed founding eng comp |
| Levels.fyi SF Founding Eng | $180-300K + 1-3% equity | YC seed founding band |
| Glassdoor SF mid AI Eng | $180-260K | Mid IC comparison |
| Demand trend | Strong | Agent runtime + agent OS one of hottest 2026 verticals |

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer (2.5y) shipping production agent runtimes, RAG, and full-stack TS+Python systems. Built multi-agent Healthcare Claims pipeline with JSON contracts; shipped public Chrome extension (Manga Lens) integrating four AI vision providers. Comfort across TS/React/Next.js + Python/FastAPI + Postgres + Docker, ready for SF on-site + founding intensity." | Mirror Proliferate's craft-first agent-OS framing |
| 2 | Competencies | Push "Agent Runtime / Multi-Agent / JSON Contracts / Full-Stack TS+Python / Production Ship / RAG / Eval Harnesses" first | Match JD priorities |
| 3 | Manga Lens | Lead the project section — "Shipped public Chrome extension integrating 4 AI vision providers, multi-section capture pipeline, 7-day cache. Manifest V3 + service workers + content scripts." | Public ship + multi-provider + browser-native runtime |
| 4 | Healthcare Claims | "Multi-agent pipeline (5 stages) with **schema-validated JSON contracts** between agents — agent runtime + planning + tool orchestration + RAG-grounded validation." | Direct agent-runtime match |
| 5 | Skills | Pull TypeScript, React, Next.js to top of Languages; surface PostgreSQL prominently | Direct stack match |
| 6 | Footer | "Kent, OH (open to SF relocation; F-1 OPT, would welcome sponsorship)" | Honest geo + work-auth framing |

**Top 5 LinkedIn:** Headline → "Applied AI / Founding Eng — Agent Runtimes + Multi-Agent + Full-Stack"; Featured → Manga Lens public ship + Healthcare Claims multi-agent; About → bridge production AI to agent OS framing; Skills → push Agent Runtime + TS + Python + Postgres; Open-to-work → "SF on-site, Founding / Applied AI Engineer."

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Ship product from inception | Manga Lens public ship | Needed AI vision translation for manga; no existing public Chrome extension | Build Manifest V3 ext w/ multi-provider + cache + selector configs | Built full pipeline: captureVisibleTab + multi-section capture + 4 providers + per-vendor payload + 7-day cache + 29 site configs | Public Chrome Web Store ship + active users + privacy policy | Public ship = product polish + permission narrowing + multi-provider error handling, not just demo |
| 2 | Agent runtime / multi-agent | Healthcare Claims multi-agent | Healthcare claims needed structured fraud risk scoring | Build 5-stage multi-agent pipeline with JSON contracts | Intake → Validation → Consistency → Duplicate → Fraud Risk; schema validation between agents; RAG-grounded CPT/ICD validation | Audit-ready reasoning traces + duplicate detection + explainable risk scores | JSON contracts between agents prevent cascading hallucinations — key insight for production multi-agent |
| 3 | Human-agent collaboration UI | Suvidha non-tech web UI | Suvidha staff (non-tech) needed video Q&A and summary access | Build Flask-based API + lightweight web UI | Web UI for transcript search + summary download; non-tech ops | 60-70% manual review time reduction | Non-tech UI = the boring polish that makes AI usable — labels, error messages, defaults |
| 4 | Convert customer feedback into features | Manga Lens 29 site selector configs | Users hit per-site DOM differences; capture broke | Build per-domain selector config system | Added 29 site configs (Mangadex, Webtoons, MangaPlus, etc.) + iterative user-driven additions | Selector configs make extension portable across sites | Customer-driven config = feature engineering at the boundary; faster than rewriting per-site logic |
| 5 | Rapid iteration / multiple deploys per day | Progress Solutions deploy cadence | Healthcare RAG iterations needed weekly improvements | FastAPI + Docker + load simulation cycle | Deploy ~weekly; structured logging captures defects; iterative retrieval improvements | ~30% post-deploy defect reduction + ~35% retrieval precision lift | Deploy-cycle speed is downstream of eval discipline + structured logs |

**Story Bank:** Add Manga Lens public-ship + Healthcare Claims multi-agent + Suvidha non-tech UI to `interview-prep/story-bank.md` if not already present.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | YC company page active; new grads welcome banner | Positive |
| Description Quality | Specific stack (TS/React/Next/Python/Postgres/Redis/AWS/Rust) + clear scope + 5-stage interview + paid trial | Positive |
| Company hiring signals | SoMa-based, small flat team; "company-covered health + wellness budgets + premium insurance" = competitive package | Positive |
| Reposting detection | First appearance in scan-history | Neutral |
| Role market context | Founding eng at YC startup, fills over weeks not months | Neutral |
| Visa sponsorship: Yes | Explicit positive signal | Positive |

**Context Notes:** Paid work trial ($1-3K, 1-3 days) is a positive legitimacy signal — companies that pay for trial work are committing real $ + bandwidth to candidate evaluation.

## H) Draft Application Answers

_(Score >= 4.0; minimal drafts included; full personalization expected post-screen)_

**"Why Proliferate?"**
> "Proliferate is building agent runtime + human-agent collaboration UI + cloud systems — the three layers I've been stitching myself in Healthcare Claims (multi-agent w/ JSON contracts), Manga Lens (browser-native runtime + UX), and Progress Solutions (RAG-grounded eval). Founding intensity + craft-first culture is the environment I want to compound in, and SF + visa sponsorship + new-grad-welcome framing is the rare combination I can actually take."

**"What's your most polished ship?"**
> "Manga Lens — Chrome extension, public on Chrome Web Store, integrates four AI vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama local). Multi-section capture pipeline for tall webtoons via viewport-slice screenshots with coordinate remapping. Seven-day translation cache, per-domain selector configs for 29 sites, narrowed host permissions, privacy policy. Multi-provider payload handling (WebP for cloud, JPEG for Ollama to dodge CUDA crash) was the lesson — provider quirks aren't bugs, they're features in disguise."

## Keywords extraídas

Founding Engineer, agent runtime, human-agent collaboration, operating system, modern engineering, TypeScript, React, Next.js, Python, Postgres, Redis, AWS, Rust, SoMa, San Francisco, new grads welcome, visa sponsorship, craft, ownership, paid work trial, YC
