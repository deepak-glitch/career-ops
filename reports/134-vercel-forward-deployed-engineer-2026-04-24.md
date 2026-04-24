# Evaluación: Vercel — Forward-Deployed Engineer

**Fecha:** 2026-04-24
**Arquetipo:** AI Solutions / Forward Deployed Engineer (frontend-heavy)
**Score:** 3.2/5
**URL:** https://job-boards.greenhouse.io/vercel/jobs/5752684004
**Legitimacy:** High Confidence
**Location:** Hybrid — San Francisco / New York City / Austin (25-40% travel)
**PDF:** output/2026-04-24/cv-deepak-mallampati-vercel-forward-deployed-engineer-2026-04-24.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | Forward-Deployed Engineer (Vercel Professional Services) — embed with strategic customers on Next.js migrations + AI SDK |
| Domain | Frontend migration (legacy → Next.js App Router), Core Web Vitals, production AI via Vercel AI SDK |
| Function | Hands-on development + workshops + pair programming; pre-sales technical discovery |
| Seniority | 5+ years software engineering + 2+ years customer-facing |
| Remote | Hybrid SF / NYC / Austin + 25-40% travel |
| Team | Reports to Director of Professional Services |
| Location | **Hybrid — SF / NYC / Austin + 25-40% travel** |
| Comp | $137K–$207K base (SF) + stock + flexible PTO |
| TL;DR | **FDE archetype fit, Next.js depth gap.** Vercel FDE is a frontend-migration + AI SDK specialist role — 5+ years + expert TypeScript + deep Next.js (App Router, SSR, ISR, edge). Deepak has React + Tailwind + TypeScript but no Next.js App Router at production scale and no frontend-migration leadership. AI SDK experience is partial (LangChain / LlamaIndex is ML-framework, not Vercel AI SDK). Apply only as a reach — likely downleveled to SE or rejected for seniority. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| 5+ years software engineering | **WEAK** | ~2.5 years production + M.S. |
| 2+ years customer-facing technical | **MEDIUM** | cv.md L30, L52 stakeholder + student coordination; no direct enterprise customer |
| Expert TypeScript | **MEDIUM** | cv.md L12 TypeScript; Manga Lens L59-60 TS Chrome extension — competent, not expert-level |
| Deep Next.js (App Router, SSR, SSG, ISR, edge functions) | **WEAK** | No Next.js mentioned in cv.md; Dream Decoder uses React/Vite (not Next) |
| Frontend migration leadership | **WEAK** | No migration-leadership track record |
| Advanced React | **MEDIUM** | cv.md L12 React; Dream Decoder + Manga Lens UI |
| Production LLM/AI application experience | **STRONG** | cv.md L25-28 Progress RAG + agentic + FastAPI/Docker |
| High agency + ambiguity | **STRONG** | Manga Lens solo ship + E-Farming founder + Progress end-to-end ownership |
| Communication + business acumen | **MEDIUM** | cv.md L30 stakeholder docs; cv.md L52 student mgmt + budget + vendor — adjacent to business |
| Travel 25-40% | **OK** | No blockers |

**Gaps:**
1. **Next.js App Router depth (hard blocker)** — JD is explicit. Mitigation: build a Next.js App Router demo (e.g., port Dream Decoder frontend to Next + streaming AI SDK) before applying; document the migration in a GitHub README. Still likely not enough for FDE-senior bar.
2. **Frontend migration leadership** — no track record. Mitigation: frame Manga Lens Manifest V2→V3 thinking or the Emerson ERP/T-SQL refactor as "migration judgment" — a stretch but honest.
3. **5+ years gap** — same as Glean FDE. Counter with solo-ship + production metrics.

## C) Nivel y Estrategia

- **JD:** 5+ years + expert Next.js + migration leadership — senior FDE specialist.
- **Deepak level:** Mid Applied AI Engineer with React/TS competence, not deep Next.js.
- **Sell:** "I'm a backend-heavy Applied AI engineer with React + TypeScript on the frontend. I solo-shipped Manga Lens (TypeScript, Manifest V3, multi-provider fault isolation) to the Chrome Web Store. I'm happy to ramp on Next.js App Router within the first 60 days — my Dream Decoder project is already React + Vite + Tailwind + API-streaming-adjacent." Caveat explicitly that senior Next.js depth is a gap.
- **If downleveled:** Accept a Vercel "AI Solutions Engineer" or Junior FDE role if it exists; decline if it's effectively a frontend migration-lead role Deepak can't own.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Vercel FDE SF | $137K–$207K base + stock | JD |
| FDE Bay Area (frontend-heavy) | $160K–$240K total | Levels.fyi |
| Deepak target | $100K–$130K | config/profile.yml |
| Next.js ecosystem demand | Highest-growth frontend framework | StackOverflow + GitHub Octoverse |

Comp floor $137K — above target. Lower than Glean ($160K floor) — different role mandate.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Full-stack AI engineer — shipped production RAG + agentic + ML (FastAPI + Docker backend) and TypeScript frontend (Manga Lens Chrome Web Store, Manifest V3, multi-provider runtime). React + Tailwind + Vite on Dream Decoder. Fast ramp on Next.js App Router. 2.5+ years production Applied AI with measurable gains — ready to embed with strategic customers on AI SDK + frontend migration." | Mirror JD: FDE + AI + frontend + production shipped |
| 2 | Competencies | Lead: Forward Deployed, Customer Discovery, TypeScript, React, Next.js (Ramp), AI SDK, LLM Integration, Full-Stack, Workshops, Migration | JD ordering |
| 3 | Experience | Progress bullet: reframe Docker + FastAPI + structured logging as "production deployment discipline" that maps to FDE-on-frontend-production | FDE cross-archetype |
| 4 | Projects | Lead Manga Lens (TypeScript + Manifest V3 + multi-provider) → Dream Decoder (React + Vite + Tailwind + streaming-adjacent) → Agentic Claims (system design judgment) | Frontend + full-stack signal |
| 5 | Location | "Kent, OH — Open to SF / NYC / Austin hybrid + 25-40% travel. F-1 OPT (sponsorship welcomed)." | Match JD anchor + visa question |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Frontend shipping + TypeScript craft | Manga Lens — Manifest V3 + TypeScript + service workers + 29 per-domain configs + Chrome Web Store launch | Shipping to a store forces real-world edge cases (CSP, permissions) |
| 2 | Customer-facing discovery | Progress stakeholder-facing limitation docs drove eval harness scope | Stakeholder writing IS product discovery when you co-author it |
| 3 | Production AI via SDK | Progress FastAPI + multi-provider inference; Manga Lens 4-provider runtime with per-provider payload isolation | Per-provider isolation > unified adapter for reliability |
| 4 | Migration / refactor judgment | Emerson T-SQL refactor — optimized SPs cut query time 20%, latency 25% | Migration is measured by user-visible metrics, not lines of code |
| 5 | Core Web Vitals (stretch) | Manga Lens per-provider payload routing reduced capture-to-result latency via JPEG-for-Ollama switch | Optimize by provider/device, not globally |
| 6 | Pair programming / workshops | Progress cross-functional + student-manager coordinator role (150+ students) | Teaching sharpens own understanding |

**Red-flag questions:**
- "Next.js App Router experience?" → "Not production yet. I've built React/Vite full-stack (Dream Decoder) and a Manifest V3 Chrome extension (Manga Lens). I'll port Dream Decoder to Next.js App Router as a pre-interview demo — happy to share before we meet."
- "5+ years gap?" → "2.5 years production Applied AI + 3 solo ships. I'd rather be scored on artifacts than tenure. Happy to take a 6-month calibration review."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Greenhouse, Apply button present | Positive |
| JD specificity | Names App Router, SSR, ISR, Core Web Vitals, AI SDK, MCP, 25-40% travel | Positive |
| Salary transparency | $137K-$207K disclosed | Positive |
| Vercel hiring signals | Multiple FDE + AI SDK roles open = real expansion | Positive |
| Role-company fit | Vercel's core business IS Next.js + AI SDK — role makes sense | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

Score 3.2 < 4.5 — omitted.

---

## Keywords extraídas

Forward-Deployed Engineer, Next.js, App Router, TypeScript, React, AI SDK, Vercel, SSR, ISR, edge functions, Core Web Vitals, frontend migration, LLM, Professional Services, workshop, pair programming, customer-facing, hybrid, SF, NYC, Austin, 25-40% travel.
