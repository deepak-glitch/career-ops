# Evaluación: Cooper AI (Nirvana spinout) — Founding Forward Deployed Engineer

**Fecha:** 2026-05-01
**Arquetipo:** AI Solutions / Forward Deployed Engineer (primary) — full-stack-leaning
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/nirvana/b1537acb-5ac2-4f9d-9372-52dd09a513d6
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — In-office/Hybrid (founding team posture; SF default)
**PDF:** output/2026-05-01/cv-deepak-mallampati-cooper-ai-founding-fde-2026-05-01.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Forward Deployed Engineer (founding) — customer deploy + integrate + optimize |
| Domain | Commercial insurance AI (Cooper AI = Nirvana $1.5B Series D spinout, Lightspeed/General Catalyst/Valor backed) |
| Function | Customer-facing engineering — deploy AI into real workflows, integrate, optimize |
| Seniority | Not stated explicitly; founding-team energy but no years floor |
| Remote | SF default; "in-office" cadence implied by founding-team framing |
| Comp | $144,000 - $240,000 base + equity + benefits |
| Stack | LLMs, VLMs, ASR/TTS, vector stores, orchestration, evals; full-stack across languages |

**TL;DR:** Founding FDE at a well-funded insurtech spinout with a clean modern AI stack ask. Comp range bottom is at Deepak's target floor; full-stack + LLMs/evals is 1:1 with Healthcare RAG + Manga Lens. No explicit years floor — interview-the-work likely. SF-only is the binding constraint for F-1 OPT mobility.

## B) Match con CV

| JD requirement | CV evidence | Fit |
|----------------|-------------|-----|
| Strong full-stack across languages/platforms | Python, FastAPI, Flask, T-SQL, TypeScript, React, PHP, C++ (Arduino) | 1:1 |
| Modern AI stack: LLMs | Healthcare RAG + agentic workflows; Manga Lens 4-provider routing (Claude/GPT-4o/4.1-Nano/Ollama) | 1:1 |
| VLMs (vision-language models) | Manga Lens uses vision LLMs for OCR + translation on manga panels; YOLOv8 drowsiness | 1:1 |
| ASR/TTS | No production ASR/TTS — Suvidha video summarization includes transcript handling | Adjacent |
| Vector stores | RAG embedding retrieval at Progress; document Q&A at Suvidha | 1:1 |
| Orchestration | Agentic Claims pipeline (Intake → Validation → Consistency → Duplicate → Risk) with schema-validated JSON contracts | 1:1 |
| Evals | Eval audit trails, grounded-response gates, >90% retrieval alignment | 1:1 |
| Excellent communication (technical + operational) | Stakeholder-facing limitation docs; Student Manager 150+ students | 1:1 |
| High-ownership / fast iteration / shipping | Manga Lens shipped solo to Chrome Web Store; E-Farming founder | 1:1 |
| Insurance domain | None — healthcare regulated SaaS is closest adjacency | Translation needed |

**Gaps:** Insurance domain (translatable from healthcare regulated SaaS), formal ASR/TTS production experience, customer-facing role formalization.

## C) Nivel y Estrategia

**Detected level:** Founding-team senior IC (no explicit years floor — uncommon and welcome). **Natural level:** Mid Applied AI.

**Sell as:** "Healthcare → commercial insurance is a familiar translation: regulated documents, agent-style workflows, audit trails, and grounded-response evals are the constants. Cooper's stack list (LLMs/VLMs/orchestration/evals) is exactly what I shipped at Progress and in Agentic Claims. I'm the second technical hire who already knows the playbook."

## D) Comp y Demanda

- $144-240K is well-defined; bottom of band at Deepak's target floor.
- Cooper AI = Nirvana spinout — Nirvana raised $135M Series D Sep 2024 ($1.5B valuation, Series D); funding source is solid.
- Insurtech FDE roles 2026: Levels.fyi/Glassdoor data shows similar bands ($150-250K) at Lemonade, Counterpart, Vouch.
- F-1 OPT: SF base implies relocation; H-1B sponsorship required mid-term — Nirvana has filed H-1Bs publicly (2023-2024 USCIS data).

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---------|--------|---------|
| 1 | Summary | Lead "Applied AI engineer (M.S. 2025) — 2.5 yrs production RAG, agentic LLM workflows, FastAPI/Docker deployment in regulated healthcare." | Mirror "deploy into real workflows" |
| 2 | Experience | Re-order Progress bullets so RAG → agentic → predictive ML → FastAPI deploy → HIPAA governance reads as "deploy + integrate + optimize" | Match JD verb sequence |
| 3 | Projects | Lead with Agentic Claims (multi-agent + schema-validated contracts) — directly maps to insurance claim workflows | Insurance domain bridge |
| 4 | Projects | Manga Lens 4-provider routing — "modern AI stack" + "orchestration" proof | Stack list match |
| 5 | Cover letter | Quote "deploy into real workflows, integrate with existing systems, continuously optimize" → map to Healthcare RAG + Agentic Claims + multi-provider routing | Direct JD-to-proof mapping |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | Reflection |
|---|---------------|--------------|------------|
| 1 | Deploy into real workflows | Healthcare RAG: clinician documentation search + eligibility checks; live in Progress production with HIPAA governance | The deploy is half the work; the eval contract is the other half |
| 2 | Integrate with existing systems | Manga Lens: 4 LLM providers, per-domain selectors for 29 sites, payload-by-provider (WebP cloud, JPEG Ollama) | Provider failure is the default, not the edge case |
| 3 | Continuously optimize | Healthcare RAG iteration: chunking + embeddings + grounding rules → ~35% retrieval precision, >90% grounded alignment | Optimization compounds when the eval is honest |
| 4 | LLMs / VLMs | Manga Lens uses vision-language models for panel OCR + translation; Healthcare RAG uses text LLMs | VLMs and LLMs need different latency budgets — design backwards from latency |
| 5 | Vector stores + orchestration | Agentic Claims: schema-validated JSON contracts between agents to prevent cascading hallucinations | Schemas are the orchestration; the agents follow |
| 6 | Evals | Healthcare RAG: >90% grounded-response alignment in eval; eval audit trails | Evals don't replace tests — they catch failures tests can't |
| 7 | Customer + technical communication | Stakeholder-facing limitation docs at Progress; Student Manager 150+ students | The doc you write before deployment is the deployment |

**Red flag:** *"Why insurance after healthcare?"* — "Both are regulated documents + agent workflows + audit trails. The difference is vocabulary, not architecture. Nirvana's claim ops looks a lot like the Agentic Claims project I built — schema-validated contracts, fraud risk scoring with explainable reasoning traces."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on Ashby; full JD detail; 2026-05-01 access | Positive |
| Description specificity | Concrete tech stack list (LLMs/VLMs/ASR/TTS/vector stores/orchestration/evals) | Positive |
| Salary transparency | $144,000 - $240,000 disclosed | Strong positive |
| Funding signal | Cooper AI = Nirvana ($1.5B Series D) spinout, Lightspeed/General Catalyst/Valor named | Positive |
| Insurance market (TAM) | "$1T+ global insurance industry" — supportable via standard market reports | Positive |
| Office posture | SF default for founding team — no remote signal in JD | Neutral |

**Assessment:** **High Confidence** — well-funded, real role, salary transparent, branded backers.

## H) Draft Application Answers

**Q: Why Cooper AI?**
> Cooper AI's bet — that commercial insurance ops are a series of agentic workflows waiting to be automated — is exactly what I built in my Agentic Healthcare Claims project: a multi-agent pipeline (Intake → Validation → Consistency → Duplicate → Risk) with schema-validated JSON contracts to prevent cascading hallucinations and explainable risk scoring with audit-ready traces. Insurance and healthcare are the same problem in different vocabulary: regulated documents, expert-in-the-loop workflows, and an audit trail that has to survive litigation. I want to ship that at Cooper.

**Q: A time you deployed an AI system into real customer workflows:**
> Healthcare RAG at Progress Solutions. Clinical knowledge retrieval and documentation search, deployed as FastAPI microservices behind Docker, with structured logging and HIPAA-conscious data lineage. The numbers: ~35% retrieval precision improvement, >30% irrelevant retrieval reduction, >90% grounded-response alignment in eval, ~30% post-deploy defect reduction. The harder lesson: "grounded" had to be re-defined per clinician role — the limitation docs were as important as the system itself.

**Q: A time you integrated with messy existing systems:**
> Manga Lens shipped solo to the Chrome Web Store. Four AI vision providers (Claude Sonnet, GPT-4o-mini, GPT-4.1-Nano, local Ollama/minicpm-v) routed dynamically with payload-by-provider (WebP for cloud, JPEG for Ollama because of a CUDA crash). Per-domain CSS selectors for 29 manga/webtoon sites. Manifest V3 service workers + content scripts + tab capture. The integration won, not the model.

**Q: F-1 OPT?**
> F-1 OPT with STEM extension active through 2027. SF-area relocation feasible. H-1B sponsorship required mid-term — Nirvana's USCIS filings (2023-2024) confirm sponsorship history.

---

## Keywords extraídas

Forward Deployed Engineer; Founding FDE; Cooper AI; Nirvana; commercial insurance; insurtech; LLMs; VLMs; ASR; TTS; vector stores; orchestration; evals; full-stack; React; TypeScript; Python; FastAPI; agentic workflows; customer deployment; integration; hyper-growth; San Francisco; equity
