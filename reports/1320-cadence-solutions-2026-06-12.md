# Cadence Solutions — Applied AI Engineer

**Fecha:** 2026-06-12
**Arquetipo:** Applied AI / LLM Engineer + Agentic (hybrid)
**Score:** 4.4/5
**URL:** https://job-boards.greenhouse.io/solutions/jobs/4680768006
**Legitimacy:** High Confidence
**Location:** Remote (US)
**Region:** US
**PDF:** output/2026-06-12/cv-deepak-mallampati-cadence-solutions-2026-06-12.pdf

## Block A — Context & Fit

Cadence is a clinical AI company delivering continuous, proactive care for Medicare seniors with chronic conditions (hypertension, heart failure, diabetes). They integrate into health-system EMRs and run a "Clinical Intelligence" platform that monitors vitals, surfaces risk, and closes care gaps — claiming patients engage 100× more and Medicare saves $2M/week. The role builds **production clinical AI agents** that synthesize real-time patient data, reason over clinical context, invoke tools, and surface care recommendations with clinicians always in the loop. Owns the full agent lifecycle: retrieval, reasoning, tool use, evaluation, and safety guardrails. **Location:** Fully remote (US). F-1 OPT compatible — US entity, US-remote. This is a near-perfect archetype + domain match: healthcare RAG + agentic + evals + safety is precisely Deepak's production track record.

## Block B — Match con CV

| JD Hook | CV/Proof Point | Strength |
|---|---|---|
| Production clinical AI agents; multi-step orchestration (planning, memory, tool use, error recovery, HITL) | Progress Solutions: conductor–subagent orchestration framework, context-scoped subagents, −42% tokens; fault-tolerant retry/backoff | Strong |
| RAG over clinical knowledge bases, protocols, real-time patient data | Progress Solutions: dense vector + cross-encoder re-ranking over **healthcare** corpora; reduced hallucination | Strong |
| Evaluation frameworks: offline benchmarks, safety tests, regression suites, LLM-as-judge wired into CI/CD | Progress Solutions: RAGAS + BERTScore + custom domain metrics, latency/accuracy dashboards, pre-deploy regression catch | Strong |
| LLM APIs: prompt engineering, tool use / function calling, structured outputs | Vanguard: 25+ AI agents, prompt optimization across GPT-4o/Claude/Gemini (+27% task success), content controls | Strong |
| Reliability, observability, cost efficiency of LLM workflows at scale | Progress Solutions: prompt compression, semantic caching, model routing to hit SLAs; −60% failed runs | Strong |
| Healthcare / regulated-industry (HIPAA, SOC 2, clinical data) — preferred | Progress + Kent State: HIPAA workflows, k-anonymity/l-diversity/differential privacy on clinical hospital-readmission data; SOC 2 | Strong |
| Fine-tuning (SFT, RLHF, LoRA) — preferred | Kent State: Qwen3 4-bit **QLoRA** on H100; BERT/RoBERTa fine-tuning | Strong |
| 3+ yrs SWE, 2+ yrs production AI/ML | 4+ yrs total; ~1.5–2 yrs production AI (Progress + Vanguard) | Partial |
| End-to-end ownership in high-growth, fast-paced env | Progress (early-stage) + Vanguard platform delivery, 100K+ req/day | Strong |

**Gaps & mitigation:**
1. **2+ yrs production AI** (nice-to-have boundary): Deepak is at ~1.5–2 yrs of explicitly production AI. *Mitigation:* lead with shipped, measured systems (−42% tokens, −40% hallucination proxy, RAGAS dashboards) — depth over tenure. Not a hard blocker.
2. **RLHF specifically:** has SFT + QLoRA, not RLHF. *Mitigation:* preferred-only; frame QLoRA + eval-driven iteration as adjacent. Reframe in cover note as "SFT/LoRA + LLM-as-judge eval loops."

## Block C — North Star Alignment

5/5 on archetype. This is the single closest role to Deepak's actual production work seen this cycle: **healthcare + RAG + agentic + evals + clinical-data privacy** all appear in one JD, and all four are first-party on his CV (Progress Solutions + Kent State). The HITL escalation requirement maps directly to his agent-safety and content-control experience. Domain (regulated healthcare) is his strongest narrative.

## Block D — Compensation

Listed: **$135,000 – $165,000 base + equity**, fully remote, full benefits (medical/dental/vision, 401k match, parental leave, home-office stipend). Mid-market for Applied AI Engineer (US Remote) — fair but not top-quartile; the archetype+domain fit and equity offset the band. 4/5 on comp.

## Block E — Cultural / Operational Signals

- "Clinicians always in control of clinical decisions" → mature, safety-first AI culture (HITL by design, not bolted on).
- "Full clinical care delivery organization, not a software vendor" → outcomes-oriented; AI tied to patient results, not engagement metrics — aligns with Deepak's measurable-outcomes framing.
- Defined success arc (offline benchmarks → safety tests → CI/CD eval gates) → engineering discipline.
- Fully remote + home-office stipend → output-oriented, F-1 OPT friendly.
- High-growth ("Medicare saves $2M/week", scaling) → real budget, real roadmap.

## Block F — Red Flags

- Tenure: "2+ years building AI/ML in production" sits just above Deepak's explicit production-AI window (~1.5–2 yrs). Real but defensible — his shipped metrics are strong.
- Clinical-deployment regulatory surface (FDA/clinical validation) is deeper than HIPAA alone; offset by his privacy-preserving clinical ML work and compliance rigor, but expect domain ramp.
- No comp ceiling stretch — band tops at $165K; negotiate on equity if competing offers run higher.

## Block G — Posting Legitimacy

**Tier: High Confidence.**
- Greenhouse JSON API returned a full, active payload (HTTP 200) with a detailed, specific JD (clinical workflows, named tooling, eval-in-CI/CD).
- **Updated 2026-06-11** — refreshed within 24h of this run; highly active.
- Published comp band ($135K–$165K) + equity + full benefits → transparency.
- Specific business model, metrics ($2M/week, 100× engagement), and a concrete agent scope → not boilerplate.
- No reposting signals for Cadence + this role in scan-history.

## Block H — Recommended Next Steps

1. **Apply** — top archetype + domain fit of the cycle, active posting, US-remote, fair comp + equity.
2. PDF emphasizes: healthcare RAG with cross-encoder re-ranking, conductor–subagent agentic orchestration, RAGAS/BERTScore eval framework wired to dashboards, HITL safety controls (Vanguard), clinical-data privacy (HIPAA + k-anonymity/differential privacy), QLoRA fine-tuning.
3. STAR+R story to bring: "Reducing hallucination on clinical queries via hybrid retrieval + cross-encoder re-ranking, gated by a RAGAS regression suite."
4. Interview prep: clinical-AI safety patterns (HITL escalation, guardrails), LLM-as-judge eval design in CI/CD, agent error-recovery/memory architectures, EMR/clinical-data handling under HIPAA.

## Keywords extraídas

clinical AI agents, RAG, embeddings, vector stores, retrieval optimization, grounding, LLM-as-judge, evaluation frameworks, regression suites, safety guardrails, HITL escalation, agent orchestration, tool calling, structured outputs, prompt engineering, fine-tuning, LoRA, HIPAA, observability, cost efficiency
