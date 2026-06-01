# Evaluación: CiceroAI — Founding Forward Deployed Engineer

**Fecha:** 2026-06-01
**Arquetipo:** AI Solutions / Forward Deployed Engineer — legal-domain AI
**Score:** 3.2/5
**URL:** https://news.ycombinator.com/item?id=47292427
**Legitimacy:** Proceed with Caution
**Location:** Houston, TX / Remote or Onsite
**Region:** US
**PDF:** output/2026-06-01/cv-deepak-mallampati-ciceroai-founding-fde-2026-06-01.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed Engineer |
| Domain | Legal-tech AI (law-firm deployment of AI products) |
| Function | Customer-facing engineer — deploy + iterate AI products at law firms; founding-team role |
| Seniority | Mid-level (founding-engineer expectations — high autonomy, not explicit yrs floor) |
| Remote | Houston TX HQ — Remote or Onsite flexible |
| Comp | Not disclosed in posting |
| TL;DR | Tiny early-stage HN-posted role at CiceroAI deploying AI inside law firms. Strong FDE archetype fit (customer-facing, rapid iteration, production deployment) but minimal public info, no comp band, no clear tech stack listed. Posting is HN comment thread (item 47292427) — apply by emailing `founders@ciceroailaw.com` directly. Founding-team risk + opaque comp lowers the score. |

## B) Match con CV

| Requisito del JD | Línea exacta del CV | Mapping |
|------------------|---------------------|---------|
| "Enjoys working directly with customers" | Progress Solutions: HIPAA-conscious data governance + stakeholder-facing system-limitation docs; Student Manager: led coordination for 150+ students with structured comms | Moderate (no formal client-FDE history) |
| "Rapidly ship and iterate in production" | Manga Lens shipped solo to Chrome Web Store (MV3, four AI vision providers, 29 manga/webtoon site configs); Dream Decoder full-stack FastAPI+React/TS/Vite | Strong |
| "Build products for real business environments from launch" | Agentic Healthcare Claims Processing pipeline with schema-validated JSON contracts; Healthcare RAG with ~35% retrieval precision gain | Strong |
| "Deploy CiceroAI at law firms" (implied: domain integration + LLM in regulated space) | HIPAA-conscious healthcare RAG, agentic LLM workflows, structured outputs, guardrails, grounding — all transferable to legal compliance contexts | Moderate (no legal-domain priors) |
| "Found a company / Foundational impact" | Founder of E-Farming Digital Marketplace (PHP/MySQL — solo design + ship, onboarded 80-120 users); Manga Lens shipped independently | Strong (founder pattern) |

**Gaps & mitigation:**
1. **Legal-domain knowledge** — Deepak has zero legal-tech priors. Mitigation: frame healthcare HIPAA + audit-trail discipline as the regulated-domain transfer ("same compliance posture, different domain vocabulary"). Read one CLM / contracts intro before screen.
2. **Opaque tech stack** — JD lists no specific frameworks. Mitigation: lead with Python + FastAPI + RAG + agentic LLM defaults; ask in screen.
3. **Founding-team comp** — No band. Mitigation: ask base + equity early; CiceroAI is small enough that comp could be below US-market.
4. **F-1 OPT** — visa unclear. Mitigation: ask whether sponsorship is on the table given founding-team stage.

## C) Nivel y Estrategia

**Nivel detectado:** Founding engineer / FDE, no explicit yrs floor.

**Sell senior (without lying):**
- "I've shipped solo products end-to-end — Manga Lens on Chrome Web Store (MV3, four AI vision providers, 29 site configs) and E-Farming marketplace (PHP/MySQL, 80-120 users)."
- "At Progress I own the healthcare RAG + agentic stack with measurable wins: ~35% retrieval precision, >30% hallucination reduction, ~25% agent stability gain."
- "Schema-validated multi-agent contracts in my Healthcare Claims project are directly transferable to any regulated-domain agent system."

**If downleveled:** Founding engineer = "scope is the senior part, level is the junior part" — accept if equity is meaningful.

## D) Comp y Demanda

| Item | Datos |
|------|-------|
| Stated band | None disclosed |
| Houston FDE / AI Engineer 2026 | $120-180K typical for mid-level FDE in Texas market |
| Visa | Founding teams rarely sponsor — verify on screen |
| Reposting | First time in scan history (HN post) |
| Demand trend | Legal-tech AI booming (Harvey, Legora, Lexis, Clio); founding-team legal-AI roles often pay below big-lab market |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-first | "Applied AI engineer who has shipped solo products end-to-end (Chrome Web Store, FastAPI + React full-stack), built schema-validated multi-agent pipelines, and owns the healthcare RAG/agentic stack at Progress with ~35% retrieval precision gains and >30% hallucination reduction. Comfortable owning customer engagements from concept through production deployment in regulated domains." | Mirror CiceroAI's founding-FDE thesis: ship, iterate, customer-facing |
| 2 | Competencies (SKILLS top) | Default | Customer-Facing Delivery • RAG Pipelines • Agentic LLM Workflows • Multi-Provider LLM Integration • FastAPI / Docker Production • Regulated-Domain Compliance | Mirror founding-engineer FDE vocabulary |
| 3 | Experience emphasis | Healthcare-first | Lead Progress agentic + Healthcare Claims schema-validated contracts; bring Manga Lens solo-ship to position 2 to show founder pattern | CiceroAI thesis = founding engineer who ships |
| 4 | Project order | Manga Lens first | Manga Lens (solo Chrome ship) → Agentic Healthcare Claims (schema-validated multi-agent) → Dream Decoder (full-stack multimodal) → Agentic Pixel | Shipping evidence first, regulated-domain second |
| 5 | Cover letter | (none) | "CiceroAI's founding-FDE thesis is what I default to: ship products inside regulated domains, iterate with the customer, own the deployment. My Healthcare RAG / agentic pipeline at Progress (35% precision gain, 30% hallucination reduction, HIPAA-conscious governance) translates straight to legal compliance contexts. Manga Lens (Chrome Web Store, four AI vision providers, 29 site configs) is solo-ship proof. I'm US-based on F-1 OPT and would want to understand sponsorship runway given the founding-team stage." | Lead with regulated-domain transfer + solo-ship founder evidence |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Ship + iterate in production | Manga Lens Chrome Web Store launch | Solo browser-extension build for AI manga/webtoon translation | Ship MV3 extension with multi-provider AI vision integration and 29 site configs | Built content scripts + service workers + captureVisibleTab; integrated Claude Sonnet/GPT-4o mini/GPT-4.1 Nano/Ollama; wrote viewport-slice + dedup for tall webtoon panels | Published live on Chrome Web Store with 7-day translation cache + per-domain selector configs + narrowed host permissions | Building host-permission scope from launch saves rework — should have shipped privacy policy on day 1 instead of day 14 |
| 2 | Customer-facing delivery in regulated domain | Healthcare RAG at Progress | Clinical knowledge retrieval and documentation search needed to be HIPAA-conscious and auditable | Build retrieval + grounded responses with ~35% precision lift while keeping evaluation audit trails | Recursive semantic chunking + transformer embeddings + retrieval-grounded responses; de-identification + lineage docs + stakeholder system-limitation docs | ~35% contextual retrieval precision; >30% irrelevant retrieval drop; >90% grounded-response alignment | Stakeholder system-limitation docs were the highest-leverage artifact — surfacing what RAG can NOT answer earned trust faster than improving the model |
| 3 | Schema-validated multi-agent contracts | Agentic Healthcare Claims | Multi-agent claims pipeline kept cascading hallucinations down with strict JSON schemas between agents | Design Intake -> Validation -> Consistency -> Duplicate -> Risk-Scoring contract chain | Schema-validated JSON between agents, RAG-grounded CPT/ICD validation, ANN duplicate detection, explainable risk scoring with reasoning traces | Reasoning traces unblocked auditor review; hallucination cascade was reduced to single-agent failures | Pydantic-style contracts at every agent edge is the cheapest reliability move — should have started with that from day 1 instead of bolting it on |
| 4 | Multi-provider LLM integration | Manga Lens four providers | Browser extension needed pluggable cloud + local AI vision providers | Build provider abstraction across Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama minicpm-v | Per-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash); 7-day translation cache; per-domain selector configs | Worked across 29 manga/webtoon sites with provider switching at runtime; live on Chrome Web Store | Payload-shape-per-provider is a real cost — building the abstraction layer pays off after the second provider, not the first |
| 5 | Founding-team / solo founder pattern | E-Farming Digital Marketplace | Built AgriTech marketplace solo connecting farmers + buyers from concept to launch | Design + ship a PHP/MySQL/Bootstrap marketplace with onboarding for both sides | Built database schema, cart, reviews, community blogging, registration, role separation; iterated on UX based on first-user feedback | Onboarded 80-120 active users in phase one with repeat engagement loops via community blogging | Community features beat transactional ones for early retention — should have led with blogging from MVP day, not added later |
| 6 | Production packaging | FastAPI/Flask + Docker at Progress | ML/LLM inference needed reliable HIPAA-conscious deployment with low defect rate | Package inference as REST services with structured logging + load simulation | Packaged with FastAPI/Flask + Docker; added structured logging + load-test harness | ~30% post-deployment defect reduction | Load simulation before deploy catches the failure modes that integration tests miss — make it a required CI step |

**Case study to lead with:** Manga Lens (solo Chrome ship + multi-provider integration) — directly mirrors "deploy CiceroAI inside law firms" customer-facing build-and-ship pattern.

**Red-flag questions:**
- "Why CiceroAI specifically?" → Regulated-domain match: HIPAA discipline transfers to legal compliance; founding-team scope fits my solo-ship history.
- "Why are you applying to a founding role with 2.5 years experience?" → Founding scope = end-to-end ownership, which is what I already do at Progress (RAG + agentic + packaging) and what I shipped solo with Manga Lens.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting venue | HN comment thread (item 47292427), no formal JD page | Concerning (low-formality channel) |
| Application method | Email founders@ciceroailaw.com directly | Neutral (small-team norm) |
| Tech specificity | None — no stack, no comp, no scope detail | Concerning |
| Company info | Public website at ciceroailaw.com; small founding team | Neutral |
| Posting age | HN posts decay quickly; item ID 47xxx suggests recent (within weeks) | Positive (recent) |
| Reposting pattern | First time in scan history | Positive |

**Context Notes:** HN "who is hiring" posts are a legitimate hiring channel for early-stage founding-team roles, but the lack of comp / scope detail means the screen call is doing all the qualification work. Apply with an email + 3-line pitch; expect the founder to reply with a sync.

## H) Draft Application Answers

(Score < 4.5 — H block skipped per modes/oferta.md Block H rule.)

---

## Keywords extraídas

Forward Deployed Engineer, founding engineer, customer-facing, deploy + iterate, production-ready AI, AI agents, RAG, FastAPI, Docker, full-stack, regulated domain, schema-validated contracts, multi-provider LLM, customer engagement, ship + iterate, agentic workflows, evaluation pipelines, structured outputs, grounding
