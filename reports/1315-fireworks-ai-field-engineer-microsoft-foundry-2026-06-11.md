# Evaluation: Fireworks AI — AI Field Engineer (Microsoft Foundry)

**Fecha:** 2026-06-11
**Arquetipo:** AI Solutions / Forward Deployed Engineer (partner-engineering flavor)
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/fireworksai/jobs/4283962009
**Legitimacy:** High Confidence
**Location:** San Mateo, CA — Hybrid (Mon/Wed/Fri in-office)
**Region:** US
**Verification:** confirmed (WebFetch — Greenhouse JD live, Apply active, comp disclosed)
**PDF:** output/2026-06-11/cv-deepak-mallampati-fireworks-ai-field-engineer-2026-06-11.pdf

---

## A) Role Summary

| Field | Value |
|------|-------|
| Archetype | AI Solutions / Forward Deployed Engineer |
| Domain | LLM inference platform — Microsoft/Azure co-sell |
| Function | Partner engineering — POCs, MVPs, perf tuning, fine-tuning guidance |
| Seniority | Mid–Senior (3+ yrs pre-sales / partner-engineering / consulting) |
| Remote | Hybrid 3d/wk in San Mateo, CA |
| Team | Field / partner engineering at Fireworks |

**TL;DR:** Partner-engineering FDE seat embedded in the Fireworks–Microsoft co-sell motion: ship POCs/MVPs, tune inference, guide fine-tuning (LoRA/RFT) on Azure AI Foundry. Strong technical archetype match; meaningful Azure-stack gap and pre-sales-heavy expectations vs. Deepak's build-side profile.

## B) Match with CV

| JD Requirement | CV Match | Source |
|----------------|----------|--------|
| 3+ yrs partner eng / pre-sales / consulting | 4+ yrs production GenAI delivery; client-facing at Progress Solutions + Vanguard | cv.md L8, L25, L44 |
| Production Python | Python primary across all roles | cv.md L18 |
| LLM inference frameworks (vLLM, SGLang) | Production agentic LLM systems + inference cost/latency optimization (semantic caching, model routing) | cv.md L25, L30 |
| Fine-tuning (LoRA min; RFT pref) | Qwen3-27B 4-bit QLoRA on H100 (361-example instruction set, narrative schema) | cv.md L38 |
| Kubernetes & infra eng | Docker, Kubernetes, Terraform, CI/CD | cv.md L15 |
| End-to-end POCs / MVPs with partners | 25+ AI agents shipped at Vanguard across 20+ teams; 12 APIs/microservices | cv.md L44, L47 |
| Load testing / perf tuning at prod scale | p95 1.5s → 800ms, 100K+ daily requests | cv.md L47-48 |
| Model selection (SFT, DPO, RFT) guidance | Eval framework comparing GPT-4o / Claude Sonnet / Gemini → +27% task success | cv.md L45 |
| Azure AI stack (Foundry, OpenAI Service, AKS, Azure ML) | Azure (OpenAI, AI Services, Content Safety) on cv; no Foundry/AKS/AzureML depth | cv.md L15 |

**Gaps:**
- **Azure Foundry / Azure ML / AKS depth** — soft. Adjacent Azure OpenAI + AI Services experience + multi-cloud (AWS/GCP) demonstrates fast ramp. Mitigation: name-drop Azure OpenAI/Content Safety up front and frame Foundry as "Azure's hosted equivalent of the inference + fine-tuning patterns I've shipped on Bedrock/SageMaker."
- **Pre-sales / co-sell motion experience** — soft. Deepak's history is build-side, not quota-carrying. Mitigation: lead with cross-functional delivery (20+ teams at Vanguard, healthcare RAG with Progress Solutions stakeholders) — same skill set without the pre-sales label.
- **vLLM / SGLang named** — soft. Frame as inference-runtime knowledge via Bedrock + token/latency optimization work.

## C) Level and Strategy

- **JD level:** Mid–Senior partner engineer (3+ yrs). Deepak sits mid IC with 4+ yrs total + 2 yrs production GenAI; archetype fit is strong but partner-engineering is a sideways move from pure build.
- **Sell up:** Lead with FDE-style outcomes — agentic systems shipped (token ↓42%), 25+ agents at Vanguard, healthcare RAG with cross-encoder re-rank, fine-tuning (QLoRA on H100). Frame the partner motion as "I already worked across product/platform/data eng to ship LLM features — extending that to a Microsoft partner customer is the same pattern at a different boundary."
- **If downleveled:** Acceptable if comp lands at the lower band ($280K) — still well above market for Deepak's level. Negotiate clear 6-month review on Azure ramp.

## D) Comp and Demand

- **JD comp (from posting):** $280,000–$320,000 base + equity. Bay Area, hybrid 3d/wk.
- **Market band (role/region):** Field/partner engineer at hot inference startup, Bay Area: $250–350K base + meaningful equity — JD band is competitive and above mid-IC market.
- **Demand:** Inference-platform vendors (Fireworks, Baseten, Together, Anyscale) are aggressively hiring FDE/field engineering as enterprises adopt OSS+fine-tuned models. Microsoft Foundry partnership signals Fireworks is monetizing the Azure channel — solid commercial signal.

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | Banking-RAG lead | "Applied AI engineer shipping production LLM inference + fine-tuning systems across enterprise stakeholders" | Bridge to partner-engineering archetype |
| 2 | Bullets | Healthcare RAG first | Surface inference cost/latency optimization (token ↓42%, p95 800ms) + QLoRA fine-tuning to top | Match Fireworks core surface |
| 3 | Skills | LLM-heavy general | Promote LoRA/QLoRA/PEFT, vLLM-adjacent inference, Kubernetes, Azure OpenAI/Content Safety | Top-of-fold partner-eng match |
| 4 | Projects | MangaLens first | Lead with Story Director LLM (QLoRA on H100 + automated rendering pipeline) — direct fine-tuning artifact | Shows fine-tuning depth |
| 5 | Footer | "F-1 OPT" line | Keep "US-based, F-1 OPT, open to sponsorship" | Recruiter clarity on a hybrid Bay Area role |

## F) Interview Plan (STAR+R)

| # | JD Requirement | STAR+R Story |
|---|----------------|--------------|
| 1 | Partner / cross-team delivery | Vanguard 25+ agents shipped across 20+ internal teams — coordination, evals, rollout |
| 2 | LLM inference optimization | Progress Solutions agentic orchestrator — token ↓42%, semantic caching, model routing |
| 3 | Fine-tuning hands-on | Story Director — Qwen3-27B 4-bit QLoRA on H100, 361-example dataset, six-stage schema |
| 4 | Eval / model selection | RAGAS + BERTScore framework; GPT-4o/Claude/Gemini eval +27% task success |
| 5 | Production hardening | 12 APIs/microservices, p95 1.5s → 800ms, 100K+ daily requests |
| 6 | Customer-facing technical depth | Healthcare RAG with Progress stakeholders — dense + cross-encoder re-rank, hallucination ↓ |

Case study to lead with: Story Director (fine-tuning) + Vanguard agent rollout (cross-team delivery) — the two together map directly to "ship POCs/MVPs + guide fine-tuning strategy."

Red-flag prep:
- "Have you sold or co-sold before?" — No quota, but I've owned the technical motion of getting LLM features adopted across 20+ teams; partner co-sell is the same shape with a customer instead of an internal team.
- "Azure Foundry specifically?" — Worked with Azure OpenAI + Content Safety; Foundry is the hosted inference + fine-tuning layer above that; I ramp on vendor-specific stacks quickly (AWS Bedrock/SageMaker, GCP Vertex AI).
- "Work authorization?" — US-based on F-1 OPT, authorized now; sponsorship needed for long-term — flag early for a Bay Area hybrid role.

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting accessible / Apply active | Live Greenhouse posting, Submit button present | Positive |
| JD specificity (tech, scope) | Specific Azure stack, inference runtimes, fine-tuning methods named | Positive |
| Comp transparency | Disclosed band $280-320K + equity | Positive |
| Company hiring signals | Fireworks is well-funded (Series B+), Microsoft partnership announced publicly | Positive |
| Date / freshness | Not displayed in posting; Greenhouse-hosted (active by definition) | Neutral |
| Apply path | Direct Fireworks Greenhouse — no aggregator | Positive |

**Assessment:** High Confidence. Established Series B AI infra company, specific JD, market-disclosed comp, direct ATS. Apply when CV is tuned.

## H) Draft Application Answers

**Why Fireworks AI?** I want to work where LLM inference economics meet enterprise delivery — Fireworks sits at exactly that boundary. My production work optimizing inference cost and latency (token ↓42%, p95 1.5s → 800ms) and fine-tuning (QLoRA on H100 for Story Director) maps directly onto guiding partners through model selection and fine-tuning strategy on Azure Foundry. The Microsoft co-sell motion is the multiplier I want next.
**Authorization:** US-based on F-1 OPT, authorized to work now; future sponsorship required. Bay Area hybrid is workable — happy to discuss relocation timing.

---

## Keywords
Forward Deployed Engineer, AI Field Engineer, partner engineering, Microsoft Foundry, Azure AI, LLM inference, vLLM, SGLang, fine-tuning, LoRA, QLoRA, RFT, Kubernetes, Python, model selection, POC, MVP
