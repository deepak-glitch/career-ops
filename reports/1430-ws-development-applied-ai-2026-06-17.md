# Evaluación: WS Development — Applied AI Engineer

**Fecha:** 2026-06-17
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / MLOps Engineer
**Score:** 3.6/5
**URL:** https://apply.workable.com/ws-development/j/CD1BBE142C
**Legitimacy:** Proceed with Caution
**Location:** Boston, MA — On-site / Hybrid (Data & Analytics team based in Boston HQ)
**Region:** US
**PDF:** output/2026-06-17/cv-deepak-mallampati-ws-development-2026-06-17.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer + AI Platform |
| Domain | Commercial real estate (open-air centers) → internal AI tooling on proprietary data |
| Function | Build internal AI apps for business teams; governance/guardrails |
| Seniority | 3+ years building and deploying software/data/AI/ML in production |
| Remote | Boston HQ (likely hybrid, JD not explicit) |
| Team size | Data & Analytics team; "sits close to senior leadership" |

**TL;DR:** WS Development (largest US private retail-real-estate developer, ~100M sq ft portfolio) is building an internal-AI platform — RAG/agents over proprietary leasing/finance/legal data, with evals + observability + governance. Tech is squarely in Deepak's stack; the gating question is whether he can be on-site in Boston.

## B) Match con CV

| JD requirement | CV proof |
|----------------|----------|
| 3+ years building/deploying software/data/AI/ML in production | cv.md L23 (Progress Jul 2025–Present) + L42 (Vanguard Jan 2024–Jan 2025) ≈ 2.5y stretched to 3 with Suvidha/Emerson + research |
| Strong Python skills | cv.md L18 (Python, FastAPI) + L25-30 (all production Python) |
| Comfort integrating APIs and external services | cv.md L47 "Built 12 APIs and microservices...100,000+ requests daily across 20+ internal teams" |
| Hands-on experience with modern LLMs and AI frameworks (Anthropic etc.) | cv.md L12 (Claude Sonnet, GPT-4o, Gemini, LLaMA, LangChain/LangGraph) + L45 (Vanguard prompt eval across 3 providers) |
| Internal AI applications for business teams | cv.md L44 "Vanguard's internal AI platform" + L48 "20+ internal teams" |
| Robust evaluation and observability (quality, latency, cost) | cv.md L29 "RAGAS, BERTScore, custom domain metrics paired with latency and accuracy dashboards" + L30 "prompt compression, semantic caching, model routing, sustaining SLA targets while reducing per-query overhead" |
| Governance / guardrails / responsible use | cv.md L46 "safeguards and content controls...reducing unsafe outputs by 42%" + L17 (PII Masking, Prompt Injection Mitigation, Audit Logging) |
| Proprietary data | cv.md L27 "privacy-preserving data workflows for sensitive clinical datasets, K-anonymity, L-diversity, differential privacy" |

**Gaps:**
1. **Boston on-site/hybrid expectation** (likely hard) — JD doesn't list "remote" anywhere; Data & Analytics team sits in Boston HQ. Deepak is in Kent, OH. *Mitigation:* score 3.0 floor per location policy (hybrid outside region); apply with explicit relocation conversation in cover letter.
2. **Real estate domain** (soft) — Deepak's domain is healthcare + finance, not commercial real estate. *Mitigation:* Vanguard finance experience + structured-data parallels (leasing terms ≈ insurance policies) — bridges via cover letter.
3. **JD body limited** — Workable page returned only metadata; full responsibilities pulled from Built In search. Some specifics may be missing.

## C) Nivel y Estrategia

**Detected level:** Mid-IC (3+ years required). Deepak ≈ 2.5y production AI + research/intern history. Slight stretch.

**Plan "vender senior sin mentir":**
- Lead with Vanguard's "internal AI platform serving 20+ teams" — direct analog to what WS is building.
- Frame Progress conductor-subagent + RAG + RAGAS/BERTScore evals as the "robust evaluation and observability" they explicitly ask for.
- Bring up clinical-data privacy work (K-anonymity, L-diversity, differential privacy) as the governance/responsible-use story — they want this for proprietary leasing/finance data.

**Plan "si me downlevelan":** If they offer a "Software Engineer, AI" instead of "Applied AI" title, accept with 6-month review on path to Applied AI Engineer scope. The work matters more than the title here.

## D) Comp y Demanda

| Source | Range |
|--------|-------|
| Levels.fyi (Boston, mid-IC AI/ML, 2026) | $130-175K base + bonus |
| Glassdoor (Boston Applied AI Engineer) | $135-175K base |
| Built In Boston (AI Engineer median, 2026) | $145K base + $10-25K bonus |
| WS Development specifics | Not disclosed; private real estate dev, comp typically 10-15% below tech median |

Estimate: **$130-160K base** for mid-IC role at a non-tech-native company. Demand for "internal AI platform builders" in Boston is moderate (Q2 2026 builds across enterprise).

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years..." | Lead with "Applied AI engineer who builds internal AI platforms on proprietary data — RAG, agents, evals, and governance shipped to 20+ teams at Vanguard." | Mirror WS's "internal AI apps for business teams" framing. |
| 2 | Vanguard bullet | "...integrating with production data pipelines and observability tooling across 25+ AI agents" | Reframe: "Built Vanguard's internal AI platform serving 20+ business teams — 25+ agents, observability/evals/guardrails baked in from day one." | Direct mirror to JD scope. |
| 3 | Progress bullet | "structured LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics) paired with latency and accuracy dashboards" | Keep as-is — it is verbatim what WS asks for | Already optimal. |
| 4 | Privacy bullet | "privacy-preserving data workflows for sensitive clinical datasets" | Reframe: "privacy + governance frameworks for proprietary data — K-anonymity, L-diversity, audit logging, PII redaction" | Mirror WS's "responsible AI on proprietary data". |
| 5 | Location line | "Kent, OH" | "Kent, OH — open to Boston relocation" | Address the elephant. |

## F) Plan de Entrevistas

| # | JD Req | STAR+R | S | T | A | R | Reflection |
|---|--------|--------|---|---|---|---|------------|
| 1 | Internal AI for business teams | Vanguard platform | 20+ internal teams asked for AI, no shared pattern | Build the platform layer, not one-offs | 25+ agents on shared infra w/ evals + guardrails | 100K+ daily requests, 27% task-success lift | Platform thinking beats agent thinking |
| 2 | Evaluation + observability | RAGAS + dashboards at Progress | Hallucination regressions weren't caught pre-deploy | Catch regressions before release | RAGAS + BERTScore + custom domain metrics + latency/accuracy dashboards | Regressions flagged before customer impact | Evals are CI for LLMs |
| 3 | Guardrails / responsible use | Vanguard content safety | Unsafe outputs were 4.2% of traffic | Cut without quality loss | Policy-compliant filters + content controls | 42% reduction, quality held | Guardrails earn their keep through measurement |
| 4 | Governance on proprietary data | Clinical privacy framework | Researchers needed to share clinical data | Enable analytics with zero PII exposure | K-anonymity (k=3), L-diversity (l=2), Laplace DP | Re-id risk 3.38% → 0.32%, F1 held at 0.895 | Governance is a utility/privacy curve, not a switch |
| 5 | Cost + latency optimization | Progress inference cost | Per-query cost was breaking unit economics | Hit SLA without breaking budget | Prompt compression + semantic caching + model routing | SLA preserved, per-query cost cut | Routing is the highest-leverage knob in LLM ops |
| 6 | API integration | Vanguard 12 APIs/microservices | Existing services were latency-bound | p95 < 1s | 12 APIs + microservices + caching | p95 1.5s → 800ms | API design is half the latency budget |

Case study: **Vanguard internal AI platform** — direct mirror of WS's ambition.

Red-flag question: "Are you ok with Boston on-site?" → "Yes — happy to relocate for the right role. Boston has the data scope and senior-leadership proximity I want at this stage."

## G) Posting Legitimacy

**Assessment:** **Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Workable page accessible | Yes — apply button live | Positive |
| Tech specificity | Names Python + LLMs + Anthropic + evals + observability + governance — adequate but not specialized | Neutral |
| Job body extraction | Workable returned metadata only; full JD body required search-engine pull from Built In | Concerning |
| Company hiring signals | WS Development is a real, well-capitalized commercial RE developer (~100M sq ft) building Data & Analytics — plausible role | Positive |
| Repost check | First time seen in scan-history | Positive |
| Salary transparency | Not disclosed; Massachusetts comp-transparency law doesn't kick in until 25+ employees and primarily affects pay-band postings | Neutral |
| Posting age | Not visible — Workable doesn't surface dates publicly | Concerning |
| Scope clarity | Generic "internal AI applications" with high-level responsibilities; no specific 6-12mo deliverables | Concerning |

**Context notes:** Non-tech-native company building an AI function — slightly higher risk of role drift or under-resourced scope. Boston on-site requirement is implicit (Data & Analytics team in HQ).

## H) Draft Application Answers

(Score 3.6, just below auto-include threshold — keeping short drafts for the obvious questions)

**Q: Why WS Development?**
> Internal AI platforms on proprietary data — leasing, finance, legal — is exactly the shape of work I shipped at Vanguard. The "responsibly scale on proprietary data" framing tells me you care about governance, not just demos. That's the bar I want to ship to.

**Q: Sponsorship?**
> US-based, F-1 OPT — authorized to work in the US now; future sponsorship required. Open to Boston relocation.

---

## Keywords extraídas
Applied AI, internal AI platform, LLM evaluation, observability, RAGAS, BERTScore, RAG, agentic workflows, governance, guardrails, responsible AI, proprietary data, Python, Anthropic, API integration, latency optimization, cost optimization, semantic caching, model routing, PII redaction, audit logging, real estate technology
