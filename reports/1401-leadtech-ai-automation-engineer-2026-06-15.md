# Evaluación: Leadtech — AI Automation Engineer

**Fecha:** 2026-06-15
**Arquetipo:** AI Solutions / Forward Deployed (automation-leaning) + Applied AI / LLM (parcial)
**Score:** 3.0/5
**URL:** https://jobs.workable.com/view/gzm67fKY8TMRmypo7EHCiQ/remote-ai-automation-engineer-in-spain-at-leadtech
**Legitimacy:** High Confidence
**Location:** Spain — remote-first (oficina Barcelona opcional; full remote / hybrid / in-office a elección)
**Region:** Intl
**PDF:** output-intl/2026-06-15/cv-deepak-mallampati-leadtech-ai-automation-engineer-2026-06-15.pdf
**Verification:** confirmed (Workable public board JD body fully extracted; Apply enabled)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | AI Automation / Solutions Engineer (LLM-powered customer-ops automation) |
| Domain | Customer-facing workflow automation: email triage, refund processing, escalation logic, voice-bot interactions |
| Function | Diseñar sistemas multi-agente con LLMs; construir workflows N8N; integrar voice AI (Vapi/Bland/ElevenLabs/Retell); REST API integration (Freshdesk/CRM); prompt engineering para structured output |
| Seniority | Mid IC (mínimo 2 años) — pasa title filter (sin Senior/Lead) |
| Remote | Spain remote-first; flexible (full remote / hybrid / Barcelona office) |
| Team | AI/Automation dentro de operaciones de cliente (CS/support) |
| Comp | "Competitive salary" no revelada; perks EU (25 días vac., jornada 7h, viernes tarde libre, seguro privado) |
| TL;DR | Solapamiento real en LLMs/prompt/multi-agente/REST APIs y supera el piso de 2 años, pero el CORE del rol (N8N + CRM helpdesk + voice AI + Postman para customer-ops) no está en su CV, y es EU-only (España, contrato permanente) → fricción de work auth F-1 OPT. Borderline 3.0. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| 2+ años AI automation / backend integration / SaaS técnico | 4+ años AI eng (Progress + Vanguard + Emerson) | ✅ Excede en años |
| LLMs: Claude (Sonnet/Opus), GPT a nivel developer | GPT-4o/GPT-5, Claude Sonnet, Gemini en producción | ✅ Fuerte |
| Prompt engineering para structured output (JSON, clasificación, sentiment) | Prompt optimization @ Vanguard (+27% task success); RAG/eval prompting | ✅ Fuerte |
| Multi-agent frameworks (LangGraph/CrewAI/AutoGen) — *nice-to-have* | LangChain/LangGraph; conductor–subagent orchestration (25+ agents) | ✅ Fuerte |
| REST API design/integration/testing | 12 APIs/microservices @ Vanguard; FastAPI | ✅ Fuerte |
| Python y JavaScript | Python primario; JS/TS | ✅ |
| Debugging de pipelines AI / inconsistencias | LLM eval/monitoring framework (RAGAS/BERTScore) | ✅ |
| **N8N (o Zapier/Make) workflow proficiency** | Sin experiencia N8N directa en CV (batch orchestration sí, no N8N) | ❌ Gap core |
| **CRM/helpdesk: Freshdesk/Zendesk/HelpScout/LiveAgent** | Sin experiencia CRM/helpdesk | ❌ Gap |
| **Voice AI: Vapi/Bland/ElevenLabs/ConnexAI/Retell** | Sin voice AI en CV | ❌ Gap |
| Postman test suites | Testing/CI sí; Postman no explícito | ⚠️ Parcial |
| English avanzado (entrevistas en inglés) | Nativo-nivel profesional | ✅ |

**Gaps y mitigación:**
1. **N8N + CRM/helpdesk automation (core del rol)** — *Required.* Mitigación: posicionar la orquestación conductor–subagent + automation infrastructure (batch + retry, -60% fallos) como transferible a N8N; demostrar curva de aprendizaje rápida en herramientas low-code. Sigue siendo el gap más material — es el día a día del rol.
2. **Voice AI platforms** — *Required.* Mitigación: ninguna directa; honestidad + aprendizaje rápido. Gap real.
3. **EU work authorization (España, contrato permanente)** — *Friction.* Deepak es US-based F-1 OPT; el rol es contrato permanente español. Preguntar si admiten contractor remoto US-based o si requieren residencia/auth UE. Bandera roja, no veto automático (per política).

## C) Nivel y Estrategia

1. **Nivel detectado:** Mid IC (2+ años). **Nivel del candidato:** 4+ años — sin riesgo de down-level por seniority; el riesgo es de *dominio* (automation-ops vs applied-AI eng), no de nivel.
2. **Vender:** Liderar con LLM/prompt engineering + multi-agente + REST APIs (los ejes donde es fuerte), y enmarcar su automation infrastructure (batch orchestration + exponential backoff, -60% fallos) como base de workflow-automation.
3. **Riesgo:** Está over-spec'd en profundidad ML/RAG (que el rol no necesita) y under-spec'd en N8N/CRM/voice (que el rol sí necesita). Match desbalanceado.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp | "Competitive" no revelada | JD |
| Status | Leadtech — empresa tech Barcelona (martech/lead-gen SaaS), establecida | WebSearch |
| Demanda | Media — AI automation para customer-ops es eje de crecimiento | WebSearch |
| Market (AI Automation Mid, España) | ~€38-55K base perm; perks fuertes (jornada 7h, 35h jul/ago) | EU/ES mid market |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | regulated-enterprise RAG framing | "Applied AI engineer — LLM automation, multi-agent orchestration, prompt engineering for structured output, REST API integration" | Mirror JD (automation + agents + structured output) |
| 2 | Hero metrics | RAG precision-first | -42% tokens (multi-agente), +27% task success (prompt opt), 12 APIs / p95 800ms, -60% fallos (automation infra) | Mapea a multi-agente + prompt + APIs + automation |
| 3 | Skills order | GenAI/RAG primero | Promover multi-agent (LangGraph), prompt engineering, REST APIs, Python/JS, structured output (JSON) | Prioridades del JD |
| 4 | Experience | Progress RAG primero | Surface automation infrastructure (batch + retry) + Vanguard prompt/agent work como núcleo automation | Match directo |
| 5 | Footer | US location | "US-based (F-1 OPT); abierto a contractor remoto o setup EU según flexibilidad de Leadtech" | Transparencia auth |

## F) Plan de Entrevistas (STAR+R)

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Multi-agent + delegación/orquestación | Conductor–subagent orchestration | Objetivos multi-paso reventaban budget de tokens | Bajar coste sin perder accuracy | Subagentes context-scoped con tool use | -42% tokens, accuracy estable | Subagentes scoped > mega-prompts |
| 2 | Prompt engineering structured output | Prompt optimization @ Vanguard | Salidas inconsistentes entre modelos | Subir task success | Prompts + eval comparando GPT-4o/Claude/Gemini | +27% task success | Eval comparativo guía el prompting |
| 3 | REST API integration & testing | 12 APIs @ Vanguard | Nuevas capacidades AI necesitaban APIs fiables | p95 bajo, integración rápida | APIs/microservices + testing | p95 1.5s→800ms, +40% integración | Contratos de API claros aceleran QA |
| 4 | Automation reliability (N8N proxy) | Automation infrastructure @ Progress | Runs de producción fallaban | Subir fiabilidad | Batch orchestration + exponential backoff retry | -60% fallos | Retry/backoff bien puesto = fiabilidad barata |
| 5 | Debugging de pipeline AI | LLM eval/monitoring framework | Regresiones colándose pre-deploy | Detectar antes de release | RAGAS + BERTScore + métricas + dashboards | Regresiones detectadas temprano | Eval-first > eyeballing |

**Case study:** Automation infrastructure (-60% fallos, batch + retry) + orquestación multi-agente (-42% tokens) — demuestran "diseñar y mantener automatizaciones fiables con LLMs".
**Red-flag Qs:** "¿N8N en producción?" → no N8N directo; orquestación/automation transferible + aprendizaje rápido (honesto). "¿Spain perm vs contractor remoto?" → US-based F-1 OPT; abierto a contractor; preguntar flexibilidad. "¿Voice AI?" → gap; dispuesto a aprender.

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Workable public board live 2026-06; Apply directo habilitado | Positive |
| Description quality | Muy específica (N8N, voice AI vendors nombrados, CRM concretos, edge cases Postman) | Positive |
| Realistic requirements | 2+ años + N8N + REST + LLM developer-level — coherente para mid automation | Positive |
| Benefits disclosure | Perks EU detallados (jornada 7h, 35h jul/ago, seguro, ticket restaurant) | Positive |
| Company signals | Leadtech Barcelona, SaaS establecido, oficina física + cultura descrita | Positive |

**Context Notes:** JD body extraído completo del board público de Workable. Único asterisco: fecha de posting mostrada como 2026-05-15 (coherente con ciclo activo). Sin señales de scam.

## H) Draft Application Answers
_(score < 4.5 — drafts omitidos; aplicable a discreción del usuario sólo si se confirma contractor remoto US-based o auth EU; el core N8N/CRM/voice es un gap real a sopesar)_

---

## Keywords extraídas
AI automation, AI engineer, N8N, multi-agent, LLM, Claude, GPT, prompt engineering, structured output, JSON, REST API, integration, Freshdesk, Zendesk, voice AI, Vapi, Bland, ElevenLabs, Retell, Postman, Python, JavaScript, LangGraph, CrewAI, customer operations, Spain, remote
