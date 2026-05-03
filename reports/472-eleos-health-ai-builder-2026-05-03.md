# Evaluación: Eleos Health — AI Builder (US, Remote)

**Fecha:** 2026-05-03
**Arquetipo:** AI Solutions / Forward Deployed Engineer (GTM/Ops automation + agents)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/eleoshealth/jobs/4853585101
**Legitimacy:** High Confidence
**Location:** US — Remote (or Israel)
**PDF:** output/2026-05-03/cv-deepak-mallampati-eleos-health-ai-builder-2026-05-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed (internal-ops AI builder) |
| Domain | Healthcare behavioral-care SaaS — internal GTM + ops AI automation |
| Function | Build — map ops/GTM workflows, ship copilots + agents + automations |
| Seniority | Mid-level — 2-5 years relevant experience |
| Remote | Remote — US (or Israel) |
| Team size | Cross-functional (GTM + Ops + Eng) — not specified |
| TL;DR | Mid-level builder of internal AI agents + copilots on top of Zapier/Make/n8n/Workato + OpenAI/Anthropic/Gemini for healthcare behavioral SaaS; $100-120K base; no visa sponsorship. |

## B) Match con CV

| Requisito JD | Match | Evidencia |
|--------------|-------|-----------|
| Deploy AI agents + copilots in production | ✅ Strong | Agentic LLM workflows (Progress Solutions); Agentic Healthcare Claims |
| LLM/AI to ops workflows | ✅ Strong | Multi-step healthcare queries; ~25% agent stability gain |
| OpenAI / Anthropic / Gemini integration | ✅ Strong | Manga Lens 4-provider LLM orchestration |
| Zapier / Make / n8n / Workato / Tray.io | ❌ Gap | CV does not mention low-code/no-code orchestration platforms |
| CRM + SaaS integrations | ⚠️ Adjacent | Progress Solutions cross-team REST APIs |
| Systems thinking + cross-functional comms | ✅ Strong | Suvidha non-technical staff iteration; Progress cross-team |
| Rapid prototyping + measurable impact | ✅ Strong | ~30% defect reduction; 60-70% review time saved |
| Healthcare context | ✅ Strong | Progress Solutions HIPAA-conscious |

**Gaps:**
1. **No-code platforms (Zapier/Make/n8n/Workato/Tray.io)** — soft gap; transferable from Python-orchestrated workflows. Mitigation: build a quick n8n + OpenAI demo in 1 weekend; mention in screen.
2. **Visa sponsorship** — JD explicitly states "no sponsorship available." F-1 OPT covers ~12-36 months but blocks long-term H-1B. Mitigation: ask explicitly on screen if they would consider OPT/STEM-OPT-only candidates.
3. **GTM/RevOps domain framing** — CV is Applied-AI engineer not GTM ops; reframe Manga Lens as "internal multi-provider AI tool for non-technical users."

## C) Nivel y Estrategia

JD targets mid-level (2-5y) — Deepak's 2.5y fits at the lower band. The role is closer to **AI Solutions / Forward Deployed** than core Applied AI: emphasize ability to bridge non-technical operators ↔ AI capability, ship in days not quarters, and instrument outcomes.

**Sell senior-without-mentir:** "I'm 2.5y in but I've shipped 4 production AI systems end-to-end (RAG, agentic, ML, video summarization) — what I bring to a builder role is the operator empathy from working with non-technical clinical staff."

**If downleveled:** Comp band ($100-120K) is below US Applied-AI median; accept only if equity is meaningful and the no-code learning is a clear future asset.

## D) Comp y Demanda

JD discloses $100-120K base + 4% 401(k) match + equity. Mid-level US-Remote internal-AI-builder roles range $110-160K (Levels.fyi, Glassdoor). Eleos is Series C+ behavioral-health SaaS (clinician documentation + measurement-based care). Internal-AI-builder roles are a 2026 high-growth category (every SaaS company building one). Demand is strong, comp is at the low end of the band.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-RAG framing | "Applied AI engineer w/ production agentic + LLM systems — ships internal AI tools that non-technical operators use day-to-day" | Match builder/ops framing |
| 2 | Skills (LLM) | Generic LLM list | Promote "OpenAI / Anthropic / Gemini multi-provider orchestration + agentic workflows + structured outputs + evals" | Stack 1:1 |
| 3 | Skills (new) | — | Add "Workflow automation: Python orchestration (FastAPI + async), familiar with low-code patterns (n8n, Zapier-style triggers)" | Bridge gap |
| 4 | Experience bullets | Defect reduction is bullet 4 | Promote "Built internal Flask API + lightweight UI for non-technical staff" (Suvidha) to bullet 1 | Direct match |
| 5 | Footer | Standard | "US-based, F-1 OPT (open to STEM-OPT extension)" — drop "open to sponsorship" since they explicitly don't sponsor | Honest match |

## F) Plan de Entrevistas

| # | Requisito JD | STAR+R | S | T | A | R | Reflection |
|---|--------------|--------|---|---|---|---|------------|
| 1 | Build AI copilot for ops | Suvidha hierarchical summary tool | Non-tech staff need 1-line summaries of 60-min sessions | Ship usable internal tool | Flask API + lightweight UI; iterated w/ reviewers | 60-70% review time saved | Treating non-tech staff as the real customer changed the API contract |
| 2 | Multi-provider LLM | Manga Lens | Real-time browser translation w/ 4 LLMs | Provider-agnostic UX | Per-provider payload encoding + 7-day cache | Shipped to Chrome Web Store | Provider-agnostic abstractions must be honest about capability deltas |
| 3 | Agent workflow + governance | Agentic Healthcare Claims | Multi-agent claims pipeline | Prevent cascading hallucinations | JSON schema contracts between agents + RAG-grounded validation | Audit-ready reasoning traces | Schema validation between agents is the cheapest hallucination defense |
| 4 | Production reliability + monitoring | Progress ML/LLM packaging | ML/LLM behind APIs in regulated context | Deploy under healthcare constraints | FastAPI/Flask + Docker + structured logging + load simulation | ~30% defect reduction post-deploy | Logging schema decisions made at packaging time pay off 5x |
| 5 | Cross-functional + bias to ship | Patient no-show risk | Real clinical data + class imbalance | Ship risk model in weeks not months | XGBoost + balanced loss + threshold optimization w/ care-team feedback | 15-20% recall gains on high-risk | Class-imbalance discipline + tight feedback loop beats model sophistication |
| 6 | Governance + measurable impact | Progress retrieval grounding | Prevent hallucinated clinical content | Build grounding controls + evals | Hybrid retrieval + reranking + grounding rules + eval audit trails | ~35% retrieval precision; >90% grounding | You cannot govern what you cannot measure — eval pipeline first |

**Case study:** Suvidha hierarchical summary + Flask UI for non-technical staff — direct analog to "AI Builder ships tools that GTM/Ops operators actually use."

**Red-flag questions:**
- "Do you have Zapier/Workato experience?" → "Not in production. I've shipped equivalent Python orchestration (FastAPI + async + Docker). I can ramp on n8n in a weekend — happy to do a take-home if useful."
- "F-1 OPT — JD says no sponsorship. How do you see this working?" → "I'm on STEM-OPT-eligible F-1 — that's 36 months of work authorization without sponsorship. I'd want to align upfront if Eleos truly cannot extend H-1B at month 30+; if so, we should both be honest about the long-term fit."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Greenhouse JSON API returns full posting w/ EU-GH metadata; "New" tag on listing | Positive |
| Description quality | Specific tools (Zapier, Make, n8n, Workato, Tray.io) + specific LLMs + comp disclosed + sponsorship disclosed | Positive |
| Company signals | Eleos Health = real Series C behavioral-health SaaS (clinical docs + measurement-based care); recent funding | Positive |
| Reposting | First time in scan-history | Positive |
| Role market context | Internal-AI-builder (every SaaS hiring one) — high-demand 2026 | Positive |

**Context Notes:** No sponsorship + comp at low end ($100-120K) — both clearly disclosed; not a ghost job, just a tightly-scoped role with explicit constraints. Israel + US Remote suggests global ops org.

---

## Keywords extraídas

AI Builder, AI agents, copilots, automation, Zapier, Make, n8n, Workato, Tray.io, OpenAI, Anthropic, Google Gemini, GTM operations, RAG, LLM, healthcare, behavioral health, Remote-US, mid-level, Python
