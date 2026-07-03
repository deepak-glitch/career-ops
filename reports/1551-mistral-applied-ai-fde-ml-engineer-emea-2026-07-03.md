# Evaluación: Mistral AI — Applied AI, Forward Deployed Machine Learning Engineer - EMEA (Paris)

**Fecha:** 2026-07-03
**Arquetipo:** AI Solutions / Forward Deployed (Applied AI)
**Score:** 3.5/5
**URL:** https://jobs.lever.co/mistral/77f6fd1b-65cf-45d8-9b68-594c62732f62
**Legitimacy:** High Confidence
**Location:** Paris, FR — EMEA (customer-facing; EU work authorization required)
**Region:** Intl
**PDF:** output-intl/2026-07-03/cv-deepak-mallampati-mistral-applied-ai-fde-emea-2026-07-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / FDE — Applied AI, customer-facing |
| Domain | Frontier LLM lab — enterprise GenAI deployment across industries |
| Function | Deploy + Consult — production GenAI use cases, fine-tuning, pre-sales technical guidance, OSS contributions |
| Seniority | Mid IC ("operating like startup CTOs who own end-to-end execution"; not the Munich Senior/Staff variant) |
| Remote | Paris HQ, EMEA (customer-facing; travel implied) |
| Team | Solutions (Applied AI) |
| TL;DR | Deploy high-impact GenAI into production for enterprise clients across industries — complex fine-tuning, state-of-the-art LLM apps, pre-sales technical guidance — while contributing to Mistral's OSS inference/fine-tuning codebases. |

## B) Match con CV

| Requisito JD | Línea(s) del CV | Match |
|--------------|-----------------|-------|
| Deploy production GenAI with business impact across industries | Production agentic LLM systems + banking RAG (92% precision) + healthcare RAG | ✅ Strong |
| State-of-the-art LLM applications | Conductor–subagent agents, RAG w/ cross-encoder re-rank, GPT-4o/Claude/Gemini eval | ✅ Direct |
| Complex fine-tuning | Fine-tuned Qwen3-27B via 4-bit QLoRA on H100; BERT/RoBERTa fine-tuning (89% F1 NER) | ✅ Strong |
| Contribute to OSS inference/fine-tuning codebases | LoRA/QLoRA/PEFT, HF Transformers; inference optimization (routing, caching) | ✅ Direct (skills present; no public OSS PRs cited) |
| Customer-facing / pre-sales technical guidance | Cross-functional delivery across 20+ teams; explains complex methods (IEEE paper) | ⚠️ Partial (internal stakeholders; no external pre-sales) |
| Collaborate with researchers + product | ML/GenAI research assistant (Kent State); Vanguard platform partnership | ✅ Direct |

**Gaps:**
1. **EU work authorization** — *hard logistical blocker, not a fit blocker.* Deepak is US-based on F-1 OPT; a Paris/EMEA role needs EU sponsorship / relocation. Per work-auth policy: flag prominently, do not veto the score. Mitigation: acknowledge relocation/authorization honestly; Mistral is large enough to sponsor for the right candidate.
2. **External pre-sales / customer-facing delivery** — *nice-to-have, central here.* Internal-only customer work. Mitigation: frame internal-platform delivery + technical communication (IEEE, 20+ teams) as transferable.
3. **Public OSS contributions** — *nice-to-have.* Deepak has the skills (LoRA/QLoRA, inference) and shipped products (MangaLens), but no cited PRs to major OSS. Mitigation: MangaLens (public product) + QLoRA fine-tuning demonstrate hands-on depth.

## C) Nivel y Estrategia

- **JD level:** Mid IC Applied AI / FDE (generalist EMEA variant, distinct from the Munich Senior/Staff and the SRE-specialized #1028).
- **Candidate level:** Mid IC with strong fine-tuning + Applied AI delivery — a strong archetype fit; EU logistics are the main friction.
- **Sell senior-without-lying:** "Ships production GenAI end-to-end — fine-tuning (QLoRA/H100), RAG, agents — with eval rigor." Lead QLoRA fine-tune, banking RAG 92% precision, conductor–subagent agents.
- **If downleveled:** Comp + frontier-lab brand justify; but the real decision is EU relocation/authorization, which must be resolved first.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| JD salary | Not disclosed | JD |
| Applied AI Engineer (Paris, mid) | ~€65K–€100K + equity | market (general); cf. prior Mistral evals #738/#1028 |
| Role demand | High — frontier-lab Solutions/Applied AI roles are competitive | market trend |

Comp undisclosed; Paris mid-IC Applied AI typically €65–100K + equity. Frontier-lab brand is a strong signal.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | Lead "Applied AI engineer — production GenAI, LLM fine-tuning (QLoRA), RAG, agents, eval-driven" | Mirror Mistral Solutions/fine-tuning framing |
| 2 | Bullets | Foreground Qwen3-27B QLoRA fine-tune (H100), banking/healthcare RAG, conductor–subagent agents | Direct fine-tuning + Applied AI proof |
| 3 | Metrics | Surface 92% precision, −40% hallucination, +27% task success, −42% tokens | Concrete production proof |
| 4 | Skills | Promote Fine-tuning (LoRA/QLoRA/PEFT), HF Transformers, RAG, agents to top | JD keywords (fine-tuning, LLM apps, OSS) |
| 5 | Footer | "US-based, F-1 OPT — open to EU relocation; authorization to be discussed" | EU role; honest auth story |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Complex fine-tuning | Qwen3-27B QLoRA (Kent State) | Controllable long-form generation | Fine-tune a 27B model efficiently | 4-bit QLoRA on H100, 361-example curated dataset, 6-stage narrative schema | Controllable generation achieved on constrained hardware | Curation + schema beat raw scale |
| 2 | Production GenAI with impact | Banking regulatory RAG | Millions of regulatory docs | High-precision grounded QA | Dense retrieval + cross-encoder re-rank | 92% precision, −40% hallucination | Grounding is the deliverable in regulated domains |
| 3 | State-of-the-art LLM apps | Conductor–subagent agents | Multi-step objectives, cost pressure | Reliable autonomous agents | Context-scoped subagent orchestration | −42% tokens, sustained accuracy | Decompose before scaling |
| 4 | Model evaluation | Vanguard model eval | Choose among GPT-4o/Claude/Gemini | Evidence-based model selection | Ran evals, informed platform choices | +27% task success | Let evals, not vibes, pick the model |
| 5 | Technical communication | IEEE paper + 20+ teams | Complex methods, mixed audiences | Drive understanding + adoption | Authored paper; presented across teams | Adopted across 20+ teams | Translate depth without diluting it |

Case study: Qwen3-27B QLoRA fine-tune (H100) — strongest fine-tuning signal, directly relevant to Mistral's OSS fine-tuning mandate. Red-flag Q: "Can you relocate to Paris / are you authorized in the EU?" → honest: "I'm US-based on F-1 OPT; I'm open to EU relocation and would need to work through authorization — happy to discuss timelines."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on Lever API; active full-time req | Positive |
| Description quality | Specific Applied AI scope, named team (Solutions), fine-tuning/OSS detail, culture section | Positive |
| Company hiring signals | Mistral scaling Applied AI across EMEA + sovereign/critical variants + Munich senior | Positive |
| Reposting | Distinct from prior Mistral roles (#738 Product Paris, #1028 SRE-EMEA, #1451 Deployment Strategist Canada) | Neutral |
| Market context | Frontier lab, Solutions roles fill in normal cycles | Positive |

**Context Notes:** Multiple parallel Applied AI variants (EMEA generalist, sovereign, Munich senior) reflect team expansion, not ghosting. Primary caveat is EU work authorization for a US-based F-1 OPT candidate — a logistics blocker flagged in Block A/B, not a fit veto.

---

## Keywords extraídas

Applied AI, forward deployed, GenAI, LLM, fine-tuning, LoRA, QLoRA, PEFT, RAG, agents, inference, open source, enterprise deployment, customer-facing, pre-sales, Solutions, Mistral, Paris, EMEA, production ML
