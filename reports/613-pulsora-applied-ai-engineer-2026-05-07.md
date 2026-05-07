# Evaluación: Pulsora — Applied AI Engineer - US

**Fecha:** 2026-05-07
**Arquetipo:** Applied AI / LLM Engineer (full-stack agentic ESG SaaS)
**Score:** 3.0/5
**URL:** https://jobs.ashbyhq.com/pulsora%20inc/40114f0d-d976-43b6-867c-23e52d6c6fff
**Legitimacy:** Proceed with Caution
**Location:** Remote — United States
**PDF:** output/2026-05-07/cv-deepak-mallampati-pulsora-applied-ai-engineer-2026-05-07.pdf
**Verification:** confirmed (Ashby GraphQL ApiJobPosting returned full JD body 2026-05-07T04Z)

---

## A) Resumen del Rol

| Dim | Detalle |
|-----|---------|
| Arquetipo | Applied AI / LLM Engineer (full-stack + agentic) |
| Domain | Enterprise ESG / Sustainability SaaS |
| Function | Build (full lifecycle product + LLM systems) |
| Seniority | Mid IC (1-2 yrs) |
| Remote | Remote — United States |
| Team size | Small distributed (Silicon Valley + offshore) |
| TL;DR | Build full-stack AI-powered features + agent workflows for enterprise ESG platform; OpenAI/Anthropic/Gemini integration + Cursor/Claude Code AI-first dev. |

## B) Match con CV

| Requisito JD | Match en CV |
|--------------|-------------|
| 1-2 yrs building AI-powered apps in production | cv.md:23 (2.5y Progress Solutions Jr AI/ML, production RAG + agentic + ML pipelines) |
| LLM-powered apps + agents in production | cv.md:25-26 (RAG + agentic LLM workflows, healthcare prod) |
| Integrate major LLM APIs (OpenAI, Anthropic, Gemini, OSS) | Manga Lens cv.md:60 (Claude + GPT-4o + GPT-4.1 Nano + Ollama 4-provider integration) |
| RAG, memory, tool use, multi-step agents | cv.md:71 Agentic Healthcare Claims (5-stage agents w/ schema-validated JSON contracts) |
| Full backend + frontend product ownership | cv.md:65-66 Dream Decoder (FastAPI + React/TS/Vite/Tailwind end-to-end) + cv.md:60 Manga Lens (Chrome Web Store shipped) |
| AI-assisted coding (Cursor, Claude Code, Copilot) | Used in personal projects; ramp signal acceptable |
| Eval frameworks for AI outputs | cv.md:13 (evaluation pipelines, guardrails, grounding) + cv.md:25 (>90% grounded alignment) |
| Debug + optimize latency/cost in prod | cv.md:28 (FastAPI/Docker + ~30% post-deploy defects), Manga Lens cost-aware payload routing |
| LangChain/LangGraph (nice-to-have) | cv.md:14 (LangChain) — partial |

**Gaps:**
1. **Domain (ESG vs healthcare)** — soft. Mitigation: regulatory-disclosure data pipelines + audit trails directly transfer to ESG compliance reporting.
2. **AI-assisted coding (Cursor/Claude Code) at production scale** — ramp. Mitigation: personal use; can ramp in first month.
3. **Offshore collaboration mentioned heavily** — neutral. Suggests significant offshore engineering, possibly explaining the unusual comp band.

## C) Nivel y Estrategia

**Nivel JD:** Mid IC (1-2 yrs, full-stack AI engineer)
**Nivel candidato natural:** Mid IC (2.5y applied AI w/ measurable production)
**Vender mid sin mentir:** Lead with end-to-end production shipping (4 RAG + agentic + ML pipelines at Progress Solutions + 1 Chrome Web Store extension) — pitch as "AI-first engineer comfortable across LLM APIs, agent design, eval, and FastAPI backend + React frontend".
**Si me downlevelan:** Accept entry-IC seat at $80K+ with 6-month review.

## D) Comp y Demanda

| Source | Range | Note |
|--------|-------|------|
| Ashby posting | $50K – $60K + Equity | **Far below SF AI Engineer market** |
| Levels.fyi (Remote-US Mid AI Eng) | $130-180K | Standard band |
| Glassdoor (Mid AI Eng remote-US) | $110-160K | |

**Red flag — comp:** $50-60K is 60-70% below US-remote AI Engineer market. Possible explanations: (1) Ashby tier display error / hidden equity-heavy comp, (2) offshore-arbitrage role posted as US-Remote, (3) genuine entry-band that should be flagged in screen. Pulsora is "well-funded Silicon Valley" per JD but comp signal is concerning. Verify in screen call before investing application time.

## E) Plan de Personalización

| # | Sección | Cambio |
|---|---------|--------|
| 1 | Summary | "Applied AI engineer (2.5y) shipping production LLM apps + agentic workflows + RAG; full lifecycle Python backend + React/TypeScript frontend" |
| 2 | Competencies | Multi-Provider LLM Integration, Production Agent Workflows, RAG + Memory + Tool Use, Eval Frameworks, AI-First Development, Full-Stack Shipping |
| 3 | Experience top bullet | Move agentic LLM workflows to top: "5-stage multi-agent pipeline w/ schema-validated JSON contracts, integrated OpenAI/Anthropic/Gemini + open-source models." |
| 4 | Projects | Lead with Manga Lens (4-provider AI vision Chrome ext shipped) + Dream Decoder (full-stack FastAPI + React) |
| 5 | Footer | Add: US-based, F-1 OPT (sponsorship welcome). |

## F) Plan de Entrevistas

| # | Req | STAR+R | Reflection |
|---|-----|--------|------------|
| 1 | Multi-provider LLM integration | S: Manga Lens needed AI vision cost/latency optimization. T: Multi-provider abstraction. A: Built provider interface w/ WebP-for-cloud + JPEG-for-Ollama (CUDA crash workaround), cost-aware routing, 7d translation cache. R: Live on Chrome Web Store, 29 site configs, no provider lock-in. | Provider abstraction must address payload + cost + failure modes, not just API surface. |
| 2 | Production agent design | S: Healthcare claims w/ silent corruption risk. T: Build reliable multi-step pipeline. A: 5-stage agents w/ schema-validated JSON contracts, RAG-grounded CPT/ICD validation, audit-ready risk scoring. R: Prevented cascading hallucinations; explainable output. | Schema contracts > prompt-engineering trust. |
| 3 | RAG + grounding | S: Clinical knowledge retrieval at Progress. T: Improve precision. A: Recursive semantic chunking + transformer embeddings + grounding rules. R: ~35% retrieval precision, >90% grounded alignment. | Grounding rules + chunking matter more than model choice. |
| 4 | Eval frameworks | S: Hallucinations on long-context healthcare Q. T: Reduce. A: Eval pipelines + grounding rules + structured reasoning. R: >30% hallucination reduction. | Evals > vibes — measure before tuning. |
| 5 | Full-stack shipping | S: Dream Decoder needed user-facing dream interpretation. T: Ship MVP. A: FastAPI backend + React/TS/Vite/Tailwind frontend, multimodal Perplexity Sonar + Replicate, structured prompt transformation. R: ~30% better contextual alignment, ~25-30% first-pass image success. | Intermediate prompt transformation layers > naive direct calls. |
| 6 | "Why ESG / why Pulsora" | S: Healthcare RAG + audit trails. T: Translate to ESG compliance. A: Both regulated, both need explainable AI decisions, both reward audit-ready reasoning traces. R: Direct skill transfer. | Compliance domains share architectural patterns. |

**Case study:** Lead Manga Lens demo (multi-provider AI Chrome ext shipped) — directly demonstrates production multi-LLM integration that maps to Pulsora's "OpenAI, Anthropic, Gemini, open-source" stack ask.

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active on Ashby (live as of 2026-05-07) | Positive |
| Apply button | Active (Ashby standard) | Positive |
| Tech specificity | Strong (named LLM APIs, agentic frameworks, eval, AI-first dev) | Positive |
| Comp transparency | Disclosed but $50-60K USD is far below SF/Remote-US AI market | **Concerning** |
| Company hiring signals | Pulsora well-funded Silicon Valley ESG; "purpose-driven", "growing fast" | Neutral |
| Reposting | First time in scan history | Neutral |
| Role-company fit | Consistent — ESG SaaS needs AI for compliance reporting/insights | Positive |

**Assessment:** **Proceed with Caution** — strong technical specificity and active posting, but the disclosed comp band is materially below US-remote AI engineer market (likely band-mapping error in Ashby OR offshore-arbitrage variant). Verify comp + actual location of role in 15-min screen before investing application effort.

## H) Draft Application Answers

(Score < 4.5 — skipped at 3.0.)

---

## Keywords extraídas

Applied AI, LLM-powered apps, agent workflows, RAG, memory, tool use, multi-step agents, OpenAI, Anthropic, Gemini, open-source models, prompt engineering, evaluation frameworks, AI-first development, Cursor, Claude Code, FastAPI, full-stack, production reliability, ESG, sustainability platform
