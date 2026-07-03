# Evaluación: dexter health — Applied AI Engineer (Remote, Germany-required)

**Fecha:** 2026-07-03
**Arquetipo:** Applied AI / LLM Engineer — healthcare, high-agency builder
**Score:** 3.4/5
**URL:** https://join.com/companies/dexter-health/16327324-applied-ai-engineer-remote
**Legitimacy:** Legit — Confident
**Location:** Remote — applicant location requirement: Germany (dexter health is DACH-anchored)
**Region:** Intl
**PDF:** output-intl/2026-07-03/cv-deepak-mallampati-dexter-health-applied-ai-2026-07-03.pdf
**Verification:** JD extracted via join.com (WebFetch) — title, Germany location requirement, full skills/responsibilities, and active Apply button confirmed. Comp not disclosed ("fair compensation based on skills, experience, and location"); sponsorship not addressed. Sibling posting to #530 (dexter health — AI Engineer, via Remotive); distinct role title + ATS + req.

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer — build AI-powered product features end to end |
| Domain | Healthcare / eldercare software (dexter health — reduce admin burden for care teams, nursing-home / elderly-care workflows) |
| Function | Build + ship — take AI features from concept to production, improve reliability/quality of existing LLM workflows |
| Seniority | Unspecified — explicitly values "high-agency" over "formal seniority" |
| Remote | Remote, but **applicant must be located in Germany** |
| Team size | Not specified (early/lean AI product team) |
| TL;DR | High-agency Applied AI Engineer shipping LLM-based healthcare features end to end, with heavy use of AI dev tools (Claude Code / Cursor / Copilot). |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| Strong **Python / backend** | 4+ yrs Python; FastAPI microservices at Vanguard (12 APIs, p95 800ms) | ✅ Strong |
| Build **AI-powered features / LLM workflows** | Agentic conductor–subagent framework (42% token cut); healthcare RAG at Progress | ✅ Strong |
| Translate ambiguous ideas into working software **fast** | MangaLens (shipped Chrome extension, 29+ sites); career-ops (autonomous pipeline) | ✅ Strong |
| **Evaluation & quality checks for AI outputs** | RAGAS + BERTScore + custom-metric LLM eval/monitoring framework | ✅ Strong |
| **Serious experience with AI dev tools (Claude Code, Codex, Cursor, Copilot)** | career-ops is built on/around Claude Code; MangaLens + career-ops shipped with agentic coding tools | ✅ Strong (bullseye) |
| Production AI integration + advanced debugging | Vanguard internal AI platform, 100k+ req/day across 20+ teams; content-safety safeguards | ✅ Strong |
| **Healthcare / regulated environment** | Progress healthcare RAG; privacy-preserving clinical ML (k-anonymity/l-diversity/DP) | ✅ Strong |
| Structured data extraction / doc automation | BERT/RoBERTa NER (89% F1); healthcare doc corpora RAG (92% precision) | ✅ Strong |
| Self-hosted LLMs / model serving / OSS deployment | LLaMA, Qwen3-27B QLoRA on H100; model routing — but not a production self-host serving specialist | ⚠️ Partial |
| Frontend / fullstack | React in skills; MangaLens front-end — not primary strength | ⚠️ Partial |
| **German language** | Not listed | ❌ Gap (nice-to-have) |
| Nursing-home / elderly-care workflow knowledge | No eldercare domain experience | ❌ Gap (domain ramp) |

**Gaps + mitigation:**
1. **Germany location requirement** — *Hard blocker for US-based F-1 OPT.* dexter health requires the applicant to be in Germany; relocation + German/EU work authorization needed. Score capped here. Mitigation: be transparent up front; only invest if open to EU relocation and if dexter sponsors an EU permit. Flag in Block G + Work Auth.
2. **German language + eldercare domain** (both nice-to-have) — mitigation: lead with regulated-healthcare AI depth (HIPAA/clinical privacy) as the transferable domain proof; note willingness to ramp German.
3. **Self-hosted/OSS model serving** — partial. Mitigation: surface QLoRA fine-tuning on H100 + model routing as evidence of open-model fluency.

## C) Nivel y Estrategia

- **JD level:** deliberately level-agnostic ("high-agency over formal seniority"). **Candidate level:** mid IC builder with shipped products — a direct fit for a role that rewards agency and end-to-end delivery.
- **Sell-without-lying:** Lead with two shipped products (MangaLens on the Chrome Web Store, career-ops autonomous pipeline) as literal proof of "translate ambiguous ideas into working software quickly," then healthcare RAG + eval framework for the reliability/quality half of the JD.
- **If down-leveled:** Not a level problem — the gating factor is Germany residency/work-auth, not seniority.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (Applied AI Eng, Germany, mid) | ~€65k–€95k typical Berlin/DACH range | Market context (WebSearch) |
| Company | dexter health — DACH healthcare/eldercare AI startup | Company profile + #530 |
| Demand | Applied-AI-in-healthcare demand strong; AI-dev-tool-native builders scarce | Market context |

No comp in JD ("fair compensation based on skills, experience, and location"). DACH startup ranges typically below US product comp.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/GenAI framing | Add "ships AI-powered healthcare features end to end with AI dev tools" | Mirror JD's high-agency + healthcare framing |
| 2 | Projects | MangaLens + career-ops present | Promote both to top as "concept → production, shipped" evidence | JD prizes fast ambiguous-idea execution |
| 3 | Bullets | Healthcare RAG bullet | Emphasize hallucination reduction + eval/quality gates | JD: validation/fallback logic for LLM outputs |
| 4 | Skills | Claude/Cursor implicit | Surface Claude Code / Cursor / Copilot explicitly | JD requires "serious experience" with these |
| 5 | Footer | — | "US-based, F-1 OPT — open re: EU relocation/authorization" | Honest on Germany residency requirement |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Concept → production, fast | MangaLens Chrome extension | Untranslated manga barrier | Ship inline real-time AI translation | Built + published to Chrome Web Store, 29+ sites | Live product, single-action UX | Shipping beats prototyping — agency proven |
| 2 | LLM workflows w/ validation & fallback | Agentic conductor–subagent framework | Complex multi-step objectives | Reliable autonomous execution | Context-scoped subagents + retry/backoff | 42% token cut, sustained accuracy | Fallback logic is what makes agents production-safe |
| 3 | Eval / quality checks for AI outputs | LLM eval + monitoring framework | Pre-deploy regressions | Catch quality drops early | RAGAS + BERTScore + custom metrics + dashboards | Regressions surfaced before release | Evals are the release gate, not an afterthought |
| 4 | Healthcare / regulated | Healthcare RAG + clinical privacy pipeline | Sensitive clinical corpora | Grounded, compliant answers | Retrieval + re-ranking + k-anon/l-div/DP | 92% precision, hallucination cut, 0 PII exposure | Grounding + privacy are the healthcare unlock |
| 5 | AI dev tools (Claude Code/Cursor) | career-ops autonomous pipeline | Repetitive job-search toil | Automate end to end overnight | Built on Claude Code / agentic tooling | Hours → unattended workflow | Fluency with AI dev tools is now a build multiplier |

**Case study:** career-ops + MangaLens — two shipped products that literally embody "translate ambiguous ideas into working software quickly."
**Red-flag Qs:** "Are you based in Germany / open to relocating?" → answer honestly (US-based, F-1 OPT; open to EU relocation if the role sponsors an EU work permit); "German language?" → conversational-ramp intent, English fluent.

## G) Posting Legitimacy

**Assessment:** Legit — Confident

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on join.com — Apply button + full JD rendered | Positive |
| Tech specificity | High — names concrete tools (Claude Code, Codex, Cursor, Copilot), validation/fallback logic, eval/quality checks | Positive |
| Requirements realism | Realistic and coherent; high-agency framing, honest about nice-to-haves | Positive |
| Company | dexter health — real DACH healthcare AI startup (corroborated by prior eval #530) | Positive |
| Work-auth fit | Germany residency required → hard for US-based F-1 OPT | Concerning (candidate-specific) |
| Salary | Not listed | Neutral |

**Context:** No ghost-job signals — specific tooling, coherent scope, active board, corroborated company. The only caution is candidate-specific: the Germany location requirement and F-1 OPT authorization gap.

## H) Draft Application Answers

_(Score 3.4 < 4.5 — no drafts. PDF tailored. Recommend confirming EU relocation appetite + whether dexter sponsors a German work permit before applying, given the Germany residency requirement.)_

---

## Keywords extraídas

Applied AI Engineer, LLM, Python, Claude Code, Cursor, Copilot, Codex, AI-powered features, evaluation, quality checks, validation, fallback logic, RAG, healthcare, regulated, structured data extraction, self-hosted LLMs, model serving, fullstack, high-agency, Germany, remote
