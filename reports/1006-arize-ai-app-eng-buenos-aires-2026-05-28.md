# Evaluación: Arize AI — AI Application Engineer (Buenos Aires)

**Fecha:** 2026-05-28
**Arquetipo:** Applied AI / LLM Engineer (Observability + Internal AI Tooling)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/arizeai/jobs/5969145004
**Legitimacy:** High Confidence
**Location:** Remote (Buenos Aires, Argentina required)
**Region:** Intl
**PDF:** output-intl/2026-05-28/cv-deepak-mallampati-arize-ai-app-eng-buenos-aires-2026-05-28.pdf
**Verification:** confirmed via Greenhouse public board

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI Engineer — debug platform issues + build internal copilots + customer POCs |
| Domain | AI observability platform (LLM evals, distributed tracing) |
| Function | Build (production fixes + internal tooling + POCs) — hybrid IC + customer-facing |
| Seniority | Mid (2-5 yrs software) |
| Remote | Remote, **Buenos Aires-based requirement** |
| Comp | "Determined based upon various factors"; no range disclosed |
| Team | Engineering + Product + Solutions cross-functional |

**TL;DR:** Arize AI is a category-leading LLM observability platform. Role blends production debugging, internal AI copilot tooling, and customer POCs. Strong archetype fit on Python/GenAI/OpenTelemetry, gated by **Buenos Aires residency requirement** for a US F-1 OPT candidate.

## B) Match con CV

| Requisito JD | Match en CV |
|--------------|-------------|
| Python production-ready | ✅ Python primary stack; FastAPI/Flask in prod |
| Golang production-ready | ⚠️ Not in CV — would need self-attestation + ramp |
| Generative AI (LLM APIs, frameworks) | ✅ Healthcare RAG + agentic workflows; multi-provider (OpenAI/Anthropic + open-source) |
| OpenTelemetry + distributed tracing | ⚠️ Structured logging + load sim in CV; OTel specifically not named — adjacent |
| Frameworks (CrewAI, Langchain, Langgraph, DiFy, LiteLLM) | ✅ Langchain used in agentic flows; others learnable |
| JS/TypeScript (willingness to learn OK) | ✅ TS in Dream Decoder + Manga Lens Chrome extension |
| 2-5 yrs software | ✅ Multi-year production AI |
| Debug + ship production fixes | ✅ Defect reduction ~30% post-deploy; production-grade discipline |
| Build internal copilots / GenAI POCs | ✅ Agentic care nav + claims fraud + Manga Lens POC pattern |
| Customer-facing (bonus) | ✅ Healthcare stakeholder engagement + system-limitation docs |
| Open-source contributions (bonus) | ⚠️ Public projects exist; not OSS contributions per se |
| Startup environment (bonus) | ✅ Solo-founder mindset (E-Farming, Manga Lens, Pixel Engine) |

**Gaps:**

1. **Buenos Aires residency** — *Hard.* JD explicitly requires Buenos Aires base. Deepak is US-based on F-1 OPT — relocation to Argentina is a real lift (visa, tax residency, banking).
2. **Golang** — *Soft.* Not in stack; would need attested ramp. Most LLM observability work is Python-first; Go is for backend services.
3. **OpenTelemetry specifically** — *Soft.* Structured logging discipline transfers; OTel is a library — picks up in 1-2 weeks.

## C) Nivel y Estrategia

**Nivel detectado:** Mid (2-5 yrs). Deepak's profile matches the **builder-archetype** Arize wants — production AI + GenAI prototyping + customer-facing comfort.

**Strategy:**
- Lead with healthcare RAG + agentic workflows + production reliability story.
- Reframe Langchain + LLM agent work as direct preparation for Arize's "build internal AI copilots" function.
- Address Buenos Aires residency up front — Deepak would need to either (a) be open to relocation, or (b) ask about US-based remote eligibility for this role family.
- Mention learning Golang as ramp item; offer to do a paid trial / first PR review.

**If down-leveled:** Comp not disclosed; LATAM mid AI Engineer range ~$60-$90K USD remote. Negotiate equity (Arize is well-funded but not yet liquid).

## D) Comp y Demanda

| Métrica | Valor | Fuente |
|---------|-------|--------|
| JD comp | Not disclosed | Greenhouse JD |
| LATAM mid AI Engineer remote | $60K-$90K USD base + equity | Levels.fyi LATAM 2026 |
| Arize AI funding | Series C, $61M raised, GTM-strong | Crunchbase 2026 |
| LLM observability category | Hot — Arize + Langfuse + WhyLabs all expanding hiring | Industry tracker |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "healthcare RAG + agentic LLM" | "Applied AI engineer with production RAG, agentic workflows, and observability instincts — debug + build + ship" | Arize's framing is debug+build+ship cycle |
| 2 | Skills | Default | Surface "Python, FastAPI, GenAI (Langchain), structured logging, eval pipelines, TypeScript, Go (ramp)" | Mirror JD vocab; flag Go honestly |
| 3 | Projects | claims, manga, dream, yolo | **claims (multi-agent + eval), manga (Chrome ext POC), dream (full-stack JS+RAG), pixel (orchestrator)** | Show range across debug+build+ship |
| 4 | Location line | Kent, OH (US) | Add "Open to discussing remote-from-US or relocation to Buenos Aires for the right role" — only if Deepak genuinely is | Don't waste recruiter time |
| 5 | Cover | Standard | Lead with: "I'm US-based on F-1 OPT. Want to flag the location requirement early — open to remote-US or relocation if Arize is flexible. My agentic + RAG work matches your debug+build+ship cycle directly." | Honesty up front |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Debug production AI issues | Healthcare RAG latency regression | RAG p95 latency drifted up 40% post-corpus update | Root-cause + ship fix | Bisected embedding cache → chunk size mismatch → introduced sliding-window cache + grounding-rule short-circuit | -30% p95, audit-trail kept | Production debugging is bisection + invariants, not heroics |
| 2 | Build internal AI copilots | Agentic care nav agent | Care nav decisions split across 5 files of policy | Build a single grounded agent | RAG-grounded policy retrieval + agent + schema contracts + eval audit trail | ~25% response stability, ~30% defect reduction | Schema contracts are the difference between copilot and chaos |
| 3 | Customer-facing POC | Claims fraud pipeline POC | Customer demanded explainability + audit | Ship POC that survives audit | 5-stage agent + schema-validated JSON + RAG-grounded CPT/ICD validation + audit log | Audit-ready, deployable | POC discipline is the same as production discipline, applied earlier |
| 4 | OTel + tracing | Structured logging migration | Logs were free-form across services | Standardize | JSON structured logging + correlation IDs + load sim + dashboards | ~30% defect-reduction post-deploy | OTel is the formal version of this; concept already in muscle memory |
| 5 | Cross-functional collaboration | E-Farming + Manga Lens | Solo greenfield with messy stakeholder set (farmers + retailers + extension users) | Ship + iterate | E-Farming PHP marketplace (80-120 users); Manga Lens Chrome Web Store (4 providers, OpenAI/Anthropic/Gemini/Mistral) | Live products with real user feedback | Cross-functional starts with empathy for the user, not the org chart |

**Case study to lead with:** Agentic Healthcare Claims Fraud Pipeline (multi-agent + schema contracts + RAG-grounded validation + audit log) — directly mirrors Arize's "build, debug, ship" rhythm on customer POCs.

**Red-flag questions:**
- *"Are you open to Buenos Aires residency?"* → "Want to be transparent: I'm US-based on F-1 OPT. Open to relocation for the right role; also open if Arize has US-remote slots for this function. What does the team prefer?"
- *"Why Arize?"* → "LLM observability is the layer that turns AI demos into production systems. I've been doing the eval + structured-logging + audit-trail discipline manually on top of my RAG + agentic work — Arize is the platform-level version of that."
- *"How would you debug a customer's broken trace?"* → STAR #1 — bisect + invariants.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Greenhouse live posting, full JD body | Positive |
| Company maturity | Arize is Series C, well-known in LLM obs category | Positive |
| Description quality | Specific tech stack, named frameworks, clear "bonus" qualifications | Positive |
| Reposting | First time in scan-history | Positive |
| Role-region clarity | Buenos Aires explicit; remote scope clear | Positive |
| Engineering practices | "ship production fixes", "build internal tools", "rapidly prototype POCs" — concrete | Positive |

Legitimacy strong. Risk is candidate-fit on geography, not posting validity.

## H) Draft Application Answers

*Score 3.0 (>= 3.0) — answers included.*

**"Why Arize?"**
> LLM observability is what separates an AI demo from an AI product. I've been doing the eval + structured-logging + audit-trail discipline manually on top of my RAG and agentic work in healthcare — Arize is the platform-level version of that. The debug + build + ship cadence in the JD is exactly the rhythm I've been operating in.

**"Most relevant production AI story?"**
> Healthcare RAG + agentic care nav at Progress Solutions. Recursive semantic chunking + transformer embeddings cut irrelevant retrieval >30% and lifted contextual precision ~35%. On top of that, agentic flows for eligibility checks and documentation clarification — ~25% response stability gain and >30% hallucination reduction in production. All on FastAPI/Docker with structured logging and load simulation — the same instincts you're asking for around OTel + traces.

**"Location?"**
> Currently US-based on F-1 OPT. Want to flag the Buenos Aires residency early — I'm open to relocation for the right role, and also open if Arize has US-remote slots for this function. Happy to align early so we don't waste anyone's time.

---

## Keywords extraídas

AI Application Engineer, LLM observability, Python, Golang, OpenTelemetry, distributed tracing, CrewAI, Langchain, Langgraph, DiFy, LiteLLM, copilots, POC, debug, ship production fixes, Buenos Aires, remote, generative AI, customer-facing
