# Evaluación: Supabase — AI Tooling Engineer

**Fecha:** 2026-04-27
**Arquetipo:** AI Platform / MLOps + Applied AI / LLM Engineer (DX-focused)
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/supabase/14a99b8b-444b-4d28-b4fd-6fa8e71bcb4e
**Legitimacy:** High Confidence
**Location:** Fully Remote — anywhere in the world (Supabase is fully distributed; ESOP)
**PDF:** output/2026-04-27/cv-deepak-mallampati-supabase-ai-tooling-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | AI Platform / MLOps + Applied AI (LLM tooling, MCP server, dashboard AI assistant) |
| Domain | Open-source Postgres-as-a-platform; AI/dev-tools |
| Function | Build & maintain AI tools (MCP server, in-dashboard AI assistant) and partner integrations |
| Seniority | IC mid (no explicit years; emphasizes JS/TS depth + DX intuition) |
| Remote | 100% remote, no geo salary adjustment; ESOP |
| Team | Engineering — AI Tooling sub-team; cross-team AI initiative coordination |
| TL;DR | JS/TS-first engineer who ships and maintains Supabase's MCP server and dashboard AI assistant, partners with cross-team AI initiatives, and integrates with AI providers — DX-driven role at a fully-remote OSS company. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Strong JS/TS expertise | TypeScript/React + Manga Lens MV3 service worker (cv.md L12, L60); not Deepak's primary daily stack but production-shipped |
| Build & maintain AI tools (MCP server) | DeepIntent-style MCP exposure adjacent; Manga Lens multi-provider abstraction is the closest analog (cv.md L60) |
| Postgres + Vector DBs + Embeddings + pgvector | Postgres in skills (cv.md L12); transformer-based embeddings + semantic retrieval / vector search in RAG work (cv.md L13, L25) |
| AI assistant in dashboard (LLM features) | RAG chat + agentic LLM workflows in healthcare (cv.md L25-26); Dream Decoder multimodal coordination (cv.md L66) |
| AI partner integrations | Manga Lens 4-provider AI vision integration (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) (cv.md L60) |
| Developer-facing tools / DX | Dream Decoder + Manga Lens + FastAPI services for non-technical users (cv.md L47, L66) |
| Async, OSS-leaning collaboration | Independent MV3 extension + open-source-style GitHub workflow (Manga Lens shipped to Chrome Web Store) |

**Gaps:**
1. **JavaScript/TypeScript as primary stack** — Deepak's primary is Python/FastAPI; TS is project-level (Manga Lens, Dream Decoder front-end). Mitigation: lead with shipped TS production code (Manga Lens MV3 service worker, Dream Decoder TS/React), commit to TS-first workflow.
2. **MCP server protocol depth** — adjacent only (knows the concept via Anthropic ecosystem, no shipped MCP server). Mitigation: prototype an MCP server connecting to Postgres/pgvector during application; cite RAG + structured-output discipline.
3. **Hands-on Supabase platform-internal experience** — none. Mitigation: emphasize Postgres + vector + embeddings overlap; commit to fast ramp on Supabase API surface in first 30 days.

## C) Nivel y Estrategia

- **Nivel detectado:** IC mid (no explicit years floor); JS/TS depth and DX taste are the bar.
- **Vender mid:** Lead with "shipped production TS extension with multi-AI-provider abstraction (Manga Lens, live in Chrome Web Store) + RAG / agentic LLM workflows in production at Progress Solutions + multimodal API coordination (Dream Decoder)." Frame as "Python-primary engineer who ships TS + AI tooling end-to-end."
- **Si downleveled:** Accept if remote + ESOP + clear ramp on Supabase platform internals; the "no geo-adjusted salary" policy makes this attractive globally.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Supabase ICs (Levels.fyi / public posts) | $160K–$205K base for SF-equivalent IC; ESOP; fully remote, no geo adjustment |
| Funding / stage | Series C ($80M, Felicis 2024); $250M+ total funding; 2M+ databases; profitable trajectory |
| Visa | Hires globally; F-1 OPT US-W2 path needs explicit recruiter confirmation |
| Demand trend | OSS Postgres + AI tooling at the intersection of dev-tools and AI is one of the hottest 2025-2026 segments |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Applied AI engineer who ships Python + TypeScript AI tooling — RAG, agentic LLM workflows, multi-provider integrations (Anthropic / OpenAI / local), production extensions, vector search." | Mirror JD: JS/TS + AI tooling + integrations + DX |
| 2 | Bullets | Surface Manga Lens (TS MV3 + 4 AI providers), Dream Decoder (TS/React/FastAPI multimodal), Healthcare RAG (semantic chunking + embeddings + retrieval) | Three tools-flavored proof points |
| 3 | Skills | Move TypeScript, React, Postgres, Vector Search/Embeddings, FastAPI, RAG to top | JD keyword-first ordering |
| 4 | Projects | Manga Lens first (TS shipped), Dream Decoder second (TS multimodal DX), RAG third | TS/DX-first |
| 5 | Footer | "US-based, F-1 OPT — fully remote ready (any time zone)" | Match Supabase's distributed model |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | TS production shipping | Manga Lens | Cross-site webtoon translation needed live AI vision in-page | MV3 service worker + content scripts + 4-provider abstraction | TS extension with WebP/JPEG payload routing + 7-day cache + 29 site selectors | Live in Chrome Web Store, real users | Provider abstraction = velocity multiplier |
| 2 | DX for AI features | Dream Decoder | Naïve direct prompts produced incoherent outputs | Intermediate structured-prompt transformation layer | TS/React/Vite UI + FastAPI orchestrating Perplexity Sonar + Replicate | ~30% contextual alignment gain; ~25-30% first-pass image success | Structured prompting > raw prompting for DX |
| 3 | Vector + embeddings | Healthcare RAG | Clinicians needed grounded answers | Recursive semantic chunking + transformer embeddings | Eval-first retrieval pipeline | ~35% retrieval precision; >90% groundedness | Eval-first builds trust faster than chasing accuracy |
| 4 | Multi-provider integration | Manga Lens (again, depth) | Each AI vendor has different payload conventions, failure modes | Per-provider isolation + format-aware payload routing | Live in Chrome Web Store across 29 sites | Zero cascade failures across providers | Isolation > monoliths for multi-vendor systems |
| 5 | AI agent / orchestration | Healthcare claims agentic pipeline | Multi-step agentic workflow needed schema-validated handoffs | Schema-validated JSON contracts between agents + RAG-grounded validation | Multi-agent pipeline (Intake → Validation → Consistency → Duplicate → Risk) | Audit-ready reasoning traces; cascading hallucination prevented | Contracts between agents = production-grade reliability |
| 6 | OSS dev mindset | Manga Lens (GitHub workflow) | Wanted an extension that worked on real comics | Built independently with privacy-first design + narrowed host permissions | Public repo + Chrome Web Store + privacy policy | Live shipped product | Treating side-projects as products = OSS muscle |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Ashby today (scan.mjs auto-pulled 2026-04-27) | Positive |
| Apply button | Active on jobs.ashbyhq.com/supabase | Positive |
| Description quality | Names specific tools (MCP server, dashboard AI assistant), specific stack (JS/TS/Postgres/pgvector), clear scope | Positive |
| Salary transparency | Not in JD widget; Levels.fyi range is publicly documented | Neutral |
| Reposting | First seen today (no prior in scan-history.tsv) | Neutral |
| Layoffs / freeze | No Supabase layoffs reported 2024-2026; Series C 2024, growing | Positive |
| Role market context | AI Tooling / DX at OSS dev-platform companies is high-demand and 2026-strategic | Positive |

**Assessment:** **High Confidence** — actively recruiting, technology-specific JD, role aligns with Supabase's 2025-2026 AI strategy (MCP, in-dashboard AI), well-funded fully-remote company.

---

## Keywords extraídas

Supabase, AI Tooling, MCP Server, AI Assistant, Dashboard, JavaScript, TypeScript, Postgres, pgvector, Vector Database, Embeddings, Developer Experience, Integrations, Open Source, Remote, ESOP, RAG, LLM, OpenAI, Anthropic, Claude, Python (adjacent), Docker
