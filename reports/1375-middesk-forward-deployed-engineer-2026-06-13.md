# Middesk — Forward Deployed Engineer

**Fecha:** 2026-06-13
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/middesk/a72b1048-1001-49b1-92bd-9c44574f939b
**Legitimacy:** Trustworthy
**Location:** San Francisco — On-site (verify hybrid policy in screen)
**Region:** US
**PDF:** output/2026-06-13/cv-deepak-mallampati-middesk-forward-deployed-engineer-2026-06-13.pdf

## Block A — Context & Fit

Middesk is a YC-born, Sequoia/Accel-backed fintech identity-verification platform (Forbes Fintech 50). They verify business identities, onboard customers, and reduce risk across the customer lifecycle — payments, lending, BaaS, marketplaces. The FDE role is a customer-facing technical leader: design, build, and operate production-grade integrations on Middesk APIs, plus LLM/agent systems with evaluation frameworks (evals, test harnesses, metrics, feedback loops). Stack: Python + at least one of TypeScript/Go, distributed systems, APIs, cloud-native infra. The seniority signal is heavy — "6+ years," "technical lead or domain owner," "former founder / early startup engineer" framing — which is the principal blocker for Deepak (4+ years) even though the AI/LLM/eval scope maps cleanly to Progress + Vanguard work.

## Block B — Match con CV

| JD Hook | CV/Proof Point | Strength |
|---|---|---|
| LLM- and agent-based systems in customer workflows | Progress agentic LLM systems (conductor-subagent orchestration, −42% tokens); Vanguard 25+ AI agents | Strong |
| Evaluation frameworks (evals), test harnesses, metrics, feedback loops | Progress LLM eval & monitoring framework (RAGAS, BERTScore, custom domain metrics) | Strong |
| Strong Python + TS/Go; distributed systems, APIs, cloud-native | Python/TS in CV; FastAPI; 12 APIs/microservices @ Vanguard; AWS/Azure/GCP | Strong |
| Customer-facing integrations and AI workflows in production | Vanguard 100K+ req/day across 20+ internal teams; Progress healthcare RAG pipelines | Adjacent (internal vs. external customer) |
| Debugging instincts, ownership mindset, failure modes | Progress fault-tolerant automation with retry logic (−60% failed runs); Vanguard safeguards (−42% unsafe outputs) | Strong |
| Fintech, compliance, regulated systems | CV header lists HIPAA/SOC 2/PCI DSS; Progress healthcare regulated; not fintech-native | Partial |
| Identity systems, risk/fraud, workflow automation (nice-to-have) | Emerson anomaly/equipment-failure detection; no fintech-identity domain | Adjacent |
| 6+ years building and shipping software in production | 4+ years (Suvidha → Emerson → Vanguard → Progress) | **Gap** |
| Acting as a technical lead or domain owner | Progress architected production LLM systems solo; no formal lead/manager title | Partial |

**Gaps & mitigation:**
1. **Seniority — JD asks 6+ years, Deepak has 4+ years.** *Mitigation:* lead with end-to-end ownership at Progress (architected agentic system, evals, observability, retry infra) and Vanguard breadth (25+ agents, 20+ teams). Frame as "tech-lead trajectory" not "tech-lead title." Will still cap the score below 4.0.
2. **Fintech-identity domain.** *Mitigation:* surface regulated-data work (HIPAA/PCI references in skills; privacy-preserving clinical ML pipeline project). Identity verification ≈ risk + data quality; Emerson anomaly detection is the closest analog.
3. **"Former founder / early startup engineer" framing.** *Mitigation:* career-ops + MangaLens are shipped solo products — frame these in cover note as founder-mindset proof.

## Block C — North Star Alignment

3.3/5 — the LLM/agent + evals scope is exactly the user's archetype and the JD vocabulary mirrors Progress work line-for-line. The hard cap is the 6+ years requirement plus the "technical lead" framing; Middesk is hiring a tech-lead-equivalent, not a mid-level FDE. A tailored apply is still worth it because the comp band is published ($148–275K) and the role is on a US Ashby board with no remote restriction; even if filtered for seniority, it's high-quality signal/practice and a known-good employer reference. Worth applying with a candid screen pitch.

## Block D — Compensation

JD: **$148K–$275K + equity (disclosed)**. SF FDE band is consistent with Levels.fyi senior IC ($170K–250K base + equity at Sequoia/Accel-backed Series B). Mid-of-range target $190–210K is realistic for Deepak's level; high end implies tech-lead/staff scope. 4/5 — strong transparency.

## Block E — Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic AI/ML | Lead with "Applied AI engineer with production LLM + agent systems, evals, and customer-impact integrations" | Mirror Middesk's FDE-AI framing |
| 2 | Skills order | Gen-AI first | Surface Python/TypeScript + LangGraph/agents + evals (RAGAS/BERTScore) + AWS/Azure/GCP at top | Direct JD vocabulary |
| 3 | Experience | Progress 1st (good) | Lead Progress bullets with agentic system + evals + observability; foreground Vanguard 25+ agents across 20+ teams next | Maps to "deploy + operate" scope |
| 4 | Proof metrics | Scattered | Hero: 100K+ req/day, 25+ agents, −42% token / −42% unsafe / −60% failed runs, 92% retrieval precision | Scale + reliability story |
| 5 | Project line | MangaLens + career-ops | Lead with career-ops (autonomous job-search agent) — proves founder-mindset, eval-driven design | "Recovering founder" framing |
| 6 | Footer | Location | "US-based, F-1 OPT, authorized now; SF Bay open" | SF on-site signal |

## Block F — Plan de Entrevistas

| # | JD Requirement | STAR+R Story | Reflection |
|---|----------------|-------------|------------|
| 1 | Build/operate LLM + agent systems in production | Progress conductor-subagent orchestration (−42% tokens, sustained accuracy across multi-step) | Decomposition + context-scoping beat monolith prompts |
| 2 | Design and maintain evaluation frameworks (evals) | Progress eval/monitoring framework (RAGAS, BERTScore, custom metrics) gating deploys | Pre-deploy gates catch regressions cheaper than post-deploy rollback |
| 3 | Production-grade integrations + customer-facing system | Vanguard 12 APIs/microservices, p95 1.5s → 800ms, 100K+ req/day | Latency budget shapes architecture more than feature scope |
| 4 | Failure modes / debugging / ownership | Progress fault-tolerant automation (−60% failed runs) with exponential-backoff retries | Idempotent retries are cheap; non-idempotent ones cost data |
| 5 | Fintech/compliance/regulated data | Privacy-preserving clinical ML (k-anonymity + DP) + Vanguard content safety / safeguards | Regulated domains reward conservative defaults + observability |

**Case study to present:** Progress agentic LLM system + eval framework end-to-end (architecture → evals → observability → cost). Show the eval dashboard sketch and the token-cost reduction story.

**Red-flag Qs:** "6+ years experience?" → 4+ years with end-to-end ownership (architecture, evals, observability). Frame trajectory honestly; show artifacts in the screen. "Former founder?" → MangaLens + career-ops are shipped solo; founder-mindset proof. "Comp expectations?" → $190–210K + equity, flexible.

## Block G — Posting Legitimacy

**Tier: Trustworthy.**

| Signal | Finding | Weight |
|--------|---------|--------|
| Description quality | Highly specific scope (LLM systems, evals, integrations), named tech stack, real customer-impact framing | Positive |
| Comp transparency | $148K–$275K + equity disclosed | Positive |
| Funding / traction | YC alumnus, Sequoia/Accel-backed, Forbes Fintech 50 | Positive |
| Apply state | Active Ashby posting, GraphQL returns live jobPosting | Positive |
| Reposting | First evaluation of this URL ID; older Middesk FDE seen 2026-05-14 in scan-history (added, not processed — likely same role aged) | Neutral |

## H) Draft Application Answers

Not generated (score 3.3 < 4.5 threshold).

## Keywords extraídas

Forward Deployed Engineer, LLM, agents, evals, RAGAS, BERTScore, Python, TypeScript, Go, distributed systems, APIs, cloud-native, fintech, identity verification, compliance, observability, fault tolerance, customer-facing, Sequoia, Accel, Y Combinator
