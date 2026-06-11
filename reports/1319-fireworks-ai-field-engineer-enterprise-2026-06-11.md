# Evaluation: Fireworks AI — AI Field Engineer (Enterprise)

**Fecha:** 2026-06-11
**Arquetipo:** AI Solutions / Forward Deployed Engineer
**Score:** 3.7/5
**URL:** https://job-boards.greenhouse.io/fireworksai/jobs/4284317009
**Legitimacy:** High Confidence
**Location:** New York, NY; San Mateo, CA; Remote, USA — multi-site
**Region:** US
**Verification:** confirmed (WebFetch — Greenhouse JD live, Apply active, comp disclosed)
**PDF:** output/2026-06-11/cv-deepak-mallampati-fireworks-ai-field-engineer-enterprise-2026-06-11.pdf

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | AI Solutions / Forward Deployed Engineer (enterprise customer-facing) |
| Domain | LLM inference platform — production GenAI for enterprises |
| Function | Build end-to-end POCs/MVPs inside customer code; lead inference architecture; guide fine-tuning (SFT/DPO/RFT) |
| Seniority | Mid–Senior (5+ yrs customer-facing technical; 10+ preferred) |
| Remote | NYC / San Mateo / Remote USA (flexible) |
| Team | Field engineering at Fireworks |

**TL;DR:** Customer-facing AI Field Engineer at Fireworks owning end-to-end POC → production for enterprise GenAI deployments on the Fireworks inference stack. Deep technical archetype match (LLM stack, fine-tuning, inference infra); main constraint is the 5+ yrs hands-on customer-facing bar vs. Deepak's ~4 yrs production GenAI delivery. Multi-site incl. Remote USA solves F-1 OPT.

## B) Match with CV

| JD Requirement | CV Match | Source |
|----------------|----------|--------|
| 5+ yrs hands-on customer-facing technical | 4+ yrs production GenAI delivery; client-facing at Progress Solutions + Vanguard | cv.md L8, L22-48 |
| Strong Python in production | Python primary across all roles | cv.md L18 |
| Kubernetes + infra eng | Docker, Kubernetes, Terraform, CI/CD | cv.md L15 |
| LLM stack: inference trade-offs, serving, SFT | Production agentic LLM systems; inference cost/latency optimization (prompt compression, semantic caching, model routing); QLoRA fine-tuning | cv.md L25, L30, L38 |
| Cloud infra (AWS, Azure, GCP) | AWS (Bedrock, SageMaker), Azure (OpenAI, AI Services), GCP Vertex AI | cv.md L15 |
| GPU infrastructure deployment | NVIDIA H100 fine-tuning experience (QLoRA Qwen3-27B) | cv.md L38 |
| Exceptional communication (discovery → exec → debug) | Cross-functional delivery at Vanguard (20+ teams, 100K+ daily requests) + client delivery at Progress | cv.md L46-48, L25 |
| Inference frameworks (vLLM, SGLang, TensorRT-LLM) — preferred | Adjacent: model routing + semantic caching at production scale, not framework-specific | cv.md L30 |
| Fine-tuning (SFT, DPO, RFT) guidance — preferred | QLoRA + LoRA on H100; RAGAS/BERTScore eval framework | cv.md L29, L38 |
| Hyperscaler AI platforms (Azure AI Foundry, AWS Bedrock, GCP Vertex) — preferred | Bedrock + Vertex on cv; Azure OpenAI used, no explicit Foundry depth | cv.md L15 |
| Agentic systems + AI-native toolchain — preferred | Conductor-subagent orchestration framework, 42% token reduction | cv.md L25 |

**Gaps:**
1. **5+ yrs customer-facing bar** — Deepak is ~4 yrs production GenAI delivery (Vanguard intern Jan 2024 → Progress Solutions Jul 2025 → present). Adjacent client-delivery framing closes most of the gap; senior framing on cover letter required.
2. **vLLM / SGLang / TensorRT-LLM** — not explicitly listed. Mitigation: lead with model routing + semantic caching + inference cost optimization as the closest production parallel.
3. **Azure AI Foundry** — not in cv. Mitigation: position Azure OpenAI + Content Safety as the foundational layer; offer to ramp on Foundry quickly.
4. **Pre-sales / discovery cadence** — engineering background, not pre-sales. Mitigation: emphasize cross-functional delivery at Vanguard (20+ teams) as the closest equivalent.

## C) Level and Strategy

**Detected JD level:** Mid-Senior (5+ yrs hands-on customer-facing; 10+ preferred). Comp band ($200-260K) confirms mid-senior IC, not Staff/Principal.

**Candidate natural level for FDE archetype:** Mid IC. The "Senior" framing in the JD title is in line with Deepak's ~4 yrs + agentic LLM + RAG production track.

**Plan "sell senior without lying":** Lead with quantifiable production wins — 42% token reduction via conductor-subagent orchestration, 27% task-success lift on internal evals, 100K+ daily requests at Vanguard, p95 1.5s → 800ms latency reduction, QLoRA fine-tuning on H100. Frame Progress Solutions tenure as "current AI Engineer role since Jul 2025 building agentic LLM systems on the same inference/fine-tuning stack Fireworks customers run."

**Plan if downleveled:** Accept if comp lands ≥$180K base + equity, with a 6-month review tied to specific deliverables (first POC → production, first customer reference). Insist on Remote USA option (one of three listed) to preserve F-1 OPT flexibility.

## D) Comp and Demand

| Field | Value | Source |
|-------|-------|--------|
| Posted base | $200,000 – $260,000 USD + equity | JD |
| Equity | Mentioned, not quantified | JD |
| Market band (Field/Forward Deployed Engineer at AI-infra Series C) | $180-280K base + equity | Levels.fyi / Glassdoor general benchmarks for AI infra FDE |
| Demand trend | High — every LLM inference platform (Together, Anyscale, Modal, Fireworks, Baseten) hiring FDE seats through 2026 | n/a |
| Fireworks-specific signal | Multiple field/FDE openings (4284317009 today + 4283962009 yesterday for Microsoft Foundry partner role) | scan-history |

Comp band is at-market for the archetype and Deepak's level. Remote USA option is rare and high-value for F-1 OPT candidates.

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years building production-grade Generative AI and LLM systems for banking and regulated enterprises..." | "Applied AI Engineer with 4+ years delivering production GenAI for regulated enterprises — agentic LLM orchestration (42% token reduction), RAG (92% precision), QLoRA fine-tuning on H100, and inference cost/latency optimization at 100K+ requests/day. Comfortable embedded in customer codebases through POC → production." | Mirrors Field Engineer phrasing: customer-embedded delivery, inference focus, fine-tuning depth |
| 2 | Skills bullet 1 | "Generative AI & LLMs: GPT-4o, GPT-5, Claude Sonnet, Gemini, LLaMA..." | Reorder: "Generative AI & LLMs: GPT-4o, Claude Sonnet, Gemini, LLaMA \| Inference Optimization (prompt compression, semantic caching, model routing) \| Fine-tuning (LoRA, QLoRA, PEFT, SFT) \| Multi-Agent Systems (conductor-subagent)" | Lead with inference + fine-tuning to mirror JD's vLLM/SGLang and SFT/DPO/RFT requirements |
| 3 | Skills bullet 3 (MLOps) | "AWS (...), Azure (OpenAI, AI Services...), GCP Vertex AI..." | Add: "Hyperscaler AI Platforms (AWS Bedrock/SageMaker, Azure OpenAI, GCP Vertex AI)" callout | JD explicitly names hyperscaler AI platforms as preferred |
| 4 | Progress Solutions bullet 1 | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework..." | Add: "designed to embed inside customer codebases for production-grade GenAI delivery" | Frame for customer-embedded archetype |
| 5 | Add Hero metric callout | none | "100K+ requests/day · 42% token reduction · 27% task success lift · 92% RAG precision · p95 1.5s → 800ms" | One-line glance for recruiter skim |

## F) Interview Plan

| # | JD Requirement | Story (STAR+R) | S | T | A | R | Reflection |
|---|----------------|----------------|---|---|---|---|------------|
| 1 | End-to-end POC → production | Vanguard 25+ AI agents on internal platform | Internal AI platform fragmented across 20+ teams | Ship reusable agent + microservice scaffolding | Built 12 APIs/microservices, integrated with prod data pipelines + observability | p95 1.5s → 800ms; 40% faster feature integration | Production discipline (logging, eval gates) compounds — invest early |
| 2 | LLM inference trade-offs / model routing | Progress Solutions inference cost optimization | Per-query cost growing with multi-step agents | Reduce token consumption without sacrificing accuracy | Prompt compression + semantic caching + model routing across GPT-4o/Claude/Gemini tiers | 42% token reduction while sustaining task accuracy | Eval framework (RAGAS, BERTScore) made it safe to ship cost-aggressive routing |
| 3 | Fine-tuning (SFT) guidance | Qwen3-27B QLoRA on H100 | Need controllable long-form generation from small instruction set | Fine-tune to narrative schema (6-stage) on 361 examples | 4-bit QLoRA, IEEE-format paper documenting tradeoffs | Demonstrated schema-conditioned generation; paper-grade methodology | Small curated datasets + schema conditioning > large noisy datasets for many enterprise use cases |
| 4 | Discovery → exec → debug communication | Vanguard cross-team delivery | 20+ teams consuming AI platform with conflicting requirements | Standardize agent contracts + eval criteria | Partnered with product + platform + data eng to ship 25+ agents | Supported 100K+ daily requests | Communication overhead is the real bottleneck at platform scale, not model selection |
| 5 | Agentic orchestration | Conductor-subagent framework at Progress | Complex multi-step healthcare objectives blowing up context | Decompose into context-scoped subagents | Built conductor-subagent orchestration with explicit handoffs | 42% token reduction, sustained task accuracy | Forced context discipline = the real win, not just cost |
| 6 | RAG / retrieval relevance | Progress RAG over healthcare corpora | High hallucination on domain-specific queries | Lift answer relevance, reduce hallucination | Dense vector retrieval + cross-encoder re-ranking | 92% precision; materially reduced hallucination | Re-ranking is the cheap force multiplier most teams skip |
| 7 | Privacy / compliance for regulated industries | Privacy-preserving clinical pipeline | Need analytics without PII exposure | Build compliant data workflow | K-anonymity + L-diversity + Laplace DP across ε levels | Re-id risk 3.38% → 0.32%; 99% baseline ML performance retained | Quantifying privacy-utility tradeoff makes deployment decisions defensible |

**Case study to lead with:** Conductor-subagent agentic LLM framework at Progress Solutions — closest mirror to Fireworks' "customer-embedded GenAI" archetype. 42% token reduction + sustained accuracy is the single strongest hero metric for an inference-platform FDE seat.

**Red-flag questions + responses:**
- "Have you sold to enterprise customers before?" → "I've embedded with internal product teams at Vanguard and external customers at Progress Solutions. The discovery cadence + technical credibility are the same; the explicit GTM choreography is where I'd ramp."
- "Why are you leaving Progress Solutions?" → "I joined Progress in Jul 2025 to ship agentic LLM systems. Fireworks lets me do the same work for many customers on a leading inference stack — the multiplier I want next."

## G) Posting Legitimacy

**Assessment:** **High Confidence** — real, active opening.

| Signal | Finding | Weight |
|--------|---------|--------|
| Apply button | Active on Greenhouse | Positive |
| Comp transparency | $200-260K + equity disclosed | Positive |
| JD specificity | Names vLLM, SGLang, TensorRT-LLM, Azure AI Foundry, Bedrock, SageMaker, Vertex, SFT/DPO/RFT — strong technical specificity | Positive |
| Reposting | Not in scan-history with this ID; Fireworks has multiple distinct FDE openings (4284317009 Enterprise, 4283962009 Microsoft Foundry, 4056271009 AI Infrastructure) | Neutral (active expansion, not repost churn) |
| Recent company news | Fireworks Series C, partner with Microsoft (Microsoft Foundry co-sell — see report #1315) | Positive |
| Multi-site | NYC / San Mateo / Remote USA — strong sign of legitimate expansion | Positive |

**Context notes:** Fireworks AI is in active GTM expansion mode. Multiple distinct field/FDE seats currently posted reflect a real hiring push, not repost cycling.

## H) Draft Application Answers

Not required (score 3.7 < 4.5 threshold). If user proceeds, lead with conductor-subagent case study + 42% token-reduction metric in the cover letter.

---

## Keywords (15-20 for ATS)

Forward Deployed Engineer, AI Field Engineer, LLM inference, vLLM, SGLang, TensorRT-LLM, fine-tuning, SFT, DPO, LoRA, QLoRA, RAG, agentic systems, Kubernetes, Python, AWS Bedrock, Azure AI Foundry, GCP Vertex AI, GPU infrastructure, customer-facing, POC to production, enterprise GenAI
