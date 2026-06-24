# Aircall — Forward Deployed Engineer, AI Solutions Engineering

**Fecha:** 2026-06-24
**Arquetipo:** AI Solutions / Forward Deployed Engineer
**Score:** 3.2/5
**URL:** https://jobs.lever.co/aircall/70f40231-0f65-4620-89d6-bbd49fc6fb45
**Legitimacy:** High Confidence
**Location:** Seattle, WA (North American HQ) — Hybrid
**Region:** US
**Verification:** confirmed (Lever postings API live 2026-06-24, full JD + role metadata returned; WebFetch 403 but API authoritative)
**PDF:** Not generated (error: Playwright Chromium binary unavailable — browser download blocked by network/proxy; retry next run when chromium is installable)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Forward Deployed Engineer — customer-facing AI Agent deployment + low-code automation |
| Domain | Customer communications platform (voice/SMS/WhatsApp + AI agents); 22,000+ SMB customers |
| Function | Deliver — own end-to-end delivery of low-code AI Agent solutions for customers |
| Seniority | Mid IC — "2–8 years or more in technical consulting, solutions engineering, or integration-focused project management" |
| Remote | Seattle hybrid (North American HQ) |
| Comp | Not posted; "Competitive salary package", 401k match, full medical/dental/vision |
| TL;DR | Reputable AI unicorn, US-based (Seattle) — clean for F-1 OPT. Archetype is FDE, which fits, but the role leans heavily on low/no-code orchestration (Zapier, Make, n8n, Workato) and CRM automation (HubSpot, Salesforce) plus a consulting/project-leadership posture — explicitly "you don't need to be a full-time software engineer." Deepak's AI-agent config, prompt-engineering, eval, and API fluency map cleanly; the low-code-tooling + CRM-automation layer is a genuine gap. Applyable with honest reframing; the role under-uses his deep ML/RAG strengths. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Estado |
|------------------|-----------------|--------|
| AI Agent configuration — intents, prompts, actions, guardrails, metrics | "Optimized LLM prompts… GPT-4o/Claude/Gemini"; safeguards/content controls (−42% unsafe outputs); LLM eval framework (RAGAS/BERTScore) | ✅ Strong |
| APIs, webhooks, data structures (JSON, REST, GraphQL) | "Built 12 APIs/microservices"; FastAPI; p95 1.5s→800ms | ✅ Strong |
| MCP Servers (bonus) | Conductor–subagent agentic orchestration framework | ✅ Good |
| AI workflow eval + monitoring | RAGAS/BERTScore + latency/accuracy dashboards | ✅ Strong |
| Lead cross-functional deployments / stakeholders | "Partnered with product, platform, data eng… 20+ internal teams" | ✅ Good |
| Translate business → technical solutions | Shipped products end-to-end (MangaLens, career-ops) | ✅ Good |
| Low/no-code orchestration (Zapier, Make, n8n, Workato) | Not in CV — builds custom in Python | ⚠️ Gap |
| CRM automation (HubSpot Workflows, Salesforce Flow) | Not in CV | ⚠️ Gap |
| Technical consulting / solutions-engineering posture | Internal-team partner, not external consultant/SE | ⚠️ Adjacent |

**Gaps & mitigation:**
1. **Low-code orchestration tools (Zapier/Make/n8n/Workato).** Deepak builds equivalent automation in Python (batch orchestration, retry/backoff, −60% failed runs). Frame: the underlying competency — designing reliable, API-driven automation — transfers directly; learning a low-code canvas is days, not months.
2. **CRM automation (HubSpot/Salesforce).** No direct exposure. Acknowledge as a fast learn; lean on API/webhook fluency as the foundation any CRM-flow work sits on.
3. **Consulting/SE motion.** History is internal-team-embedded, not external-customer consulting. Reframe "20+ internal teams" + solo product shipping as evidence of ambiguous, stakeholder-heavy delivery.

## C) Nivel y Estrategia

JD band 2–8 years fits Deepak's ~4+ comfortably. **Sell-without-lying:** the AI-Agent engineering core (prompts, guardrails, eval, APIs) is a real strength and is the technical heart of the role; lead there. Be candid that the low-code/CRM tooling is new but that the transferable competency (reliable API-driven automation) is exactly what those tools abstract. **Risk:** the role may prefer a candidate already fluent in the Zapier/HubSpot ecosystem and lighter on deep ML — Deepak is the inverse. Seattle hybrid is a non-issue for OPT.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Posted band | Not disclosed | Lever JD |
| Market — FDE / Solutions Eng (Seattle) | ~$120K–$170K base + bonus/equity | Levels.fyi / Built In Seattle ranges |
| Company | Aircall — unicorn, 22,000+ customers, Paris HQ + Seattle NA HQ | JD |
| Demand | Active Lever req (live via API), Solution Engineering team (req 12010) | Lever |

Comp unposted but benefits are concrete (401k match, 100% medical/dental/vision, unlimited PTO) — request the band early.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Production GenAI/LLM for regulated enterprises | Add "deliver customer-facing AI Agent solutions, from discovery to production" | Mirror FDE-delivery framing |
| 2 | Vanguard bullet | 25+ AI agents, prompts/eval | Foreground AI-Agent config: intents, prompts, guardrails, metrics | Direct hit on JD's core |
| 3 | API bullet | 12 APIs/microservices | Surface webhooks + integration design (JSON/REST) | JD wants API/webhook fluency |
| 4 | Automation infra | Python batch orchestration | Frame as "orchestrated, reliable workflow automation" (tool-agnostic) | Bridge to low-code orchestration |
| 5 | Projects | MangaLens/career-ops | Foreground end-to-end solo delivery | Proves FDE-style ownership |

**LinkedIn:** headline → "Forward Deployed AI Engineer — AI Agent delivery & workflow automation"; surface Seattle + API/integration keywords.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Configure/optimize AI Agent (prompts, guardrails, metrics) | Vanguard prompt + safeguards work | Unsafe/low-success agent outputs | Make agents safe + effective | Prompt optimization + content controls + eval | +27% success, −42% unsafe | Agent quality is a guardrail + eval problem |
| 2 | API/webhook integration delivery | 12 APIs/microservices | New AI capabilities needed fast | Ship integrable services | REST APIs, latency tuning | p95 1.5s→800ms, 100k+ req/day | Clean APIs are what make deployments scale |
| 3 | Reliable workflow automation | Batch orchestration + retry | Failing production runs | Make automation dependable | Scheduled orchestration + backoff retry | −60% failed runs | Reliability is the deliverable, not the demo |
| 4 | Cross-functional deployment leadership | 20+ internal teams at Vanguard | Many stakeholders, varied needs | Deliver usable AI services | Partnered across product/platform/data | Adoption across 20+ teams | Deployment is a stakeholder-alignment problem |
| 5 | Own delivery end-to-end | MangaLens shipped solo | No tool existed | Ship a real product | Built + launched Chrome ext, 29+ sites | Live on Web Store | Owning idea→ship is the FDE bar |

**Case study:** Lead with career-ops (autonomous, API-driven automation that replaces manual repetitive work) as a proxy for the FDE/low-code delivery motion. **Red-flag Qs:** "Have you used Zapier/Make/HubSpot?" → "I've built the same outcomes in Python — reliable, API-driven automation with retry/observability. The low-code canvas is a fast learn on top of that foundation." "This isn't a deep-SWE role — OK?" → "Yes; the AI-Agent config, eval, and integration core is exactly the work I enjoy and do well."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on Lever API 2026-06-24, full structured JD returned | Positive |
| Description quality | Specific scope (AI Agent config, low-code stack named, success metrics), named team req 12010 | Positive |
| Company signals | Aircall — established unicorn, 22,000+ customers, named HQs | Positive |
| Reposting | Distinct role from prior Aircall FDE eval (#1199, different Lever ID 4965256f) | Neutral |
| Comp transparency | Not disclosed (benefits concrete) | Neutral |

**Context:** Well-known venture-backed company with a real Solutions Engineering org; FDE hiring aligns with active AI-Agent product push. No legitimacy concerns.

---

## H) Draft Application Answers

**"Why this role?"** → "FDE-AI Solutions is where my AI-agent engineering meets real customers. At Vanguard I configured and evaluated production agents — prompts, guardrails, content controls — across 25+ agents (+27% task success, −42% unsafe outputs) and built the APIs that made them usable at 100k+ requests/day. Aircall's AI Agent + automation focus is exactly that work, customer-facing."

**"Low-code automation experience?"** → "I've built the same outcomes in Python — reliable, API-driven workflow automation with scheduled orchestration and retry logic that cut failed runs 60%. Low-code platforms like Make or n8n abstract that competency, so picking them up is fast; the integration design underneath is what I already do."

**Work authorization:** "US-based, F-1 OPT — authorized to work in the US now; future sponsorship required. Seattle hybrid works for me."

## Keywords extraídas

Forward Deployed Engineer, AI Solutions Engineering, AI Agent, prompt engineering, guardrails, evaluation, APIs, webhooks, REST, GraphQL, JSON, low-code, Zapier, Make, n8n, Workato, HubSpot, Salesforce, MCP, automation, Seattle, hybrid, technical consulting, solutions engineering, SMB
