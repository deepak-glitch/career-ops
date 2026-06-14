# Evaluación: Mistral AI — Applied AI, Forward Deployed Machine Learning Engineer (EMEA)

**Fecha:** 2026-06-14
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer (híbrido)
**Score:** 3.5/5
**URL:** https://jobs.lever.co/mistral/77f6fd1b-65cf-45d8-9b68-594c62732f62
**Legitimacy:** High Confidence
**Location:** Paris (on-site) — also London / Luxembourg / Marseille / Amsterdam / Munich / Lausanne
**Region:** Intl
**PDF:** output-intl/2026-06-14/cv-deepak-mallampati-mistral-fde-ml-emea-2026-06-14.pdf
**Verification:** confirmed (Lever v0 postings API returned live JSON 2026-06-14)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | AI Solutions / FDE + Applied AI/LLM Engineer |
| Domain | Enterprise GenAI deployment (consumer → industrial), customer-facing Solutions team |
| Function | Deploy + consult (deploy AI into production, pre-sales technical guidance, product feedback loop) |
| Seniority | Mid (2+ yrs technical contributor) |
| Remote | On-site (Paris HQ; hiring across 7 EU cities) |
| Team | Solutions (customer-facing technical org; recently grown via Emmi AI acquisition) |
| Comp | Not disclosed |
| TL;DR | Customer-facing Applied AI / FDE role at a frontier EU lab — excellent stack + level fit, but EU on-site + F-1 OPT → EU-work-permit need is the binding constraint. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| 2+ yrs technical contributor on AI products | ~4 yrs across Progress, Vanguard, Kent State, Emerson | ✅ Excede |
| ML implementation with APIs + front/back-end interfaces | "Built 12 APIs and microservices"; FastAPI/React; p95 1.5s→800ms | ✅ Fuerte |
| Fine-tuning LLMs | "Fine-tuning (LoRA, QLoRA, PEFT)"; Qwen3-27B QLoRA on H100; BERT/RoBERTa | ✅ Fuerte |
| Advanced RAG | Healthcare RAG, dense + cross-encoder re-ranking, 92% precision | ✅ Fuerte |
| Agentic use cases | "agentic LLM systems on conductor–subagent orchestration"; -42% tokens; 25+ AI agents @ Vanguard | ✅ Fuerte |
| Strong Python | Python primary | ✅ Fuerte |
| Deep ML/LLM concept understanding | RAGAS/BERTScore eval, drift detection, multi-model eval | ✅ Buena |
| Explain complex concepts simply / stakeholder-facing | Partnered with product/platform/data teams; 20+ internal teams | ✅ Buena |
| FDE / Solutions / Sales / Customer Engineer background (preferred) | Internal-platform + cross-team, but not external client pre-sales | ⚠️ Parcial |
| Open-source LLM contributions (preferred) | MangaLens (shipped Chrome ext) + career-ops, no LLM OSS PRs | ⚠️ Parcial |
| PyTorch (preferred) | PyTorch in stack | ✅ |

**Gaps y mitigación:**
1. **External client / pre-sales FDE experience** — *Nice-to-have.* Mitigación: reframe Vanguard internal-platform delivery to 20+ teams + Progress Solutions stakeholder partnering as customer-analogous; emphasize fast prototyping (MangaLens shipped to Chrome Web Store, 29+ sites) as proof of ship-to-user delivery.
2. **Open-source LLM contributions** — *Nice-to-have.* Mitigación: MangaLens (live product) + career-ops (autonomous pipeline) demonstrate public shipping; offer to contribute to Mistral/open-weights ecosystem.
3. **EU work authorization** — *Binding (see Block G).* Deepak is US-based F-1 OPT; this role is EU on-site and the JD does not mention relocation/visa support.

## C) Nivel y Estrategia

1. **Nivel detectado:** Mid (2+ yrs). **Nivel del candidato:** ~4 yrs — comfortably at/above level; no down-level risk on tenure.
2. **Vender senior sin mentir:** Lead with agentic orchestration (-42% tokens), production RAG (92% precision), and eval discipline — exactly the "advanced RAG / agentic use cases" the JD names. Position the frontier-lab brand pull and willingness to be customer-facing.
3. **Si me downlevelan:** Not the risk here. The real negotiation is **work authorization + relocation**, not level — clarify EU sponsorship/relocation support before investing in tailoring.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp | Not disclosed in JD | Lever |
| Funding | $3.05B raised; $830M debt (Mar 2026) | PitchBook/Clay/Tracxn |
| EMEA growth | Acquired Emmi AI (May 2026), 30+ eng to Science/Applied AI; Linz office added | Mistral news |
| Demanda | High — Applied AI / FDE is Mistral's customer-facing growth engine | WebSearch |
| Market (Applied AI/FDE, EU) | ~€60–95K base + equity (varies by city) | General EU market estimate |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | regulated-enterprise framing | Lead with "Applied AI / Forward Deployed engineer — fine-tuning, advanced RAG, agentic deployment" | Mirror JD language |
| 2 | Hero metrics | mixed | -42% tokens (agentic), 92% precision RAG, QLoRA H100, +27% task success | Maps to fine-tuning + advanced RAG + agentic asks |
| 3 | Skills order | generic GenAI first | Promote LangChain/LangGraph, multi-agent, fine-tuning, FastAPI, PyTorch | ATS + JD priorities |
| 4 | Experience | Progress first | Surface Vanguard "25+ AI agents / 20+ teams" as customer-adjacent delivery | FDE narrative |
| 5 | Footer | US location | Honest: "US-based (F-1 OPT); EU relocation requires work-permit support" | Transparency on auth |

## F) Plan de Entrevistas (STAR+R)

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Agentic use cases | Conductor–subagent orchestration | Complex multi-step objectives blew up token budgets | Cut cost, keep accuracy | Context-scoped subagents executing autonomously | -42% tokens, accuracy sustained | Scoping context per subagent beat a single mega-prompt |
| 2 | Advanced RAG | Healthcare RAG | Hallucination on domain queries | Lift relevance | Dense retrieval + cross-encoder re-rank | 92% precision, -40% hallucination | Re-ranking was the highest-ROI lever |
| 3 | Fine-tuning LLMs | Qwen3-27B QLoRA | Controllable long-form generation on small data | Steer outputs | 4-bit QLoRA on H100, schema conditioning | Shipped steerable model + IEEE paper | Small curated data + structure beat brute scale |
| 4 | Deploy to production + APIs | Vanguard AI platform | Ship AI capabilities to 20+ teams | Reliable, low-latency | 12 APIs/microservices; p95 1.5s→800ms | 100k+ requests/day | Observability up front saved firefighting |
| 5 | Stakeholder-facing | Cross-team delivery @ Progress/Vanguard | Translate AI to product/platform/data partners | Align + ship | Partnered across functions; safety controls -42% unsafe | Adopted across teams | Explaining trade-offs simply built trust faster than demos |
| 6 | Customer prototyping | MangaLens | Ship a real user-facing AI product | Cross language barrier | Multi-provider translation Chrome ext, 29+ sites | Live on Chrome Web Store | Shipping to real users surfaces edge cases evals miss |

**Case study:** Agentic Healthcare orchestration (-42% tokens) — mirrors enterprise GenAI deployment Mistral's Solutions team runs.
**Red-flag Qs:** "Need EU sponsorship?" → transparent: US-based F-1 OPT, would need EU work-permit support; ask if relocation/sponsorship is available. "Client-facing experience?" → internal 20+ teams + shipped public products as analog.

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Live Lever v0 API JSON on 2026-06-14 | Positive |
| Description quality | Specific (fine-tuning, advanced RAG, agentic, pre-sales), clear Solutions-team scope | Positive |
| Realistic requirements | 2+ yrs + Python + LLM depth — reasonable for the level | Positive |
| Company hiring signals | $3B+ funded, expanding EMEA, Applied AI team grown via Emmi acquisition | Positive |
| Reposting | Distinct from prior Mistral roles (Montreal #1389, SRE-EMEA #1028, Palo Alto #863) | Neutral |
| Role market context | Customer-facing Applied AI is a core, actively-hired function | Positive |

**Context Notes:** Multi-city EU on-site posting from a fast-growing frontier lab — legitimacy is strong; the only real friction is candidate-side work authorization (F-1 OPT → EU permit), not the posting.

## H) Draft Application Answers
_(score < 4.5 — drafts omitted)_

---

## Keywords extraídas
Applied AI, forward deployed, machine learning engineer, LLM, fine-tuning, advanced RAG, agentic, Python, PyTorch, deployment, production, pre-sales, solutions engineer, customer-facing, enterprise GenAI, API, generative AI, EMEA, open-source LLM, ML concepts
