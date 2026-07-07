# Evaluación: Machinify — AI Engineer | Agentic Systems

**Fecha:** 2026-07-07
**Arquetipo:** Applied AI / LLM Engineer (primary) + AI Solutions / Forward Deployed Engineer
**Score:** 4.2/5
**URL:** https://job-boards.greenhouse.io/machinifyinc/jobs/4146862009
**Legitimacy:** High Confidence
**Location:** Remote — US
**Region:** US
**PDF:** output/2026-07-07/cv-deepak-mallampati-machinify-ai-agentic-2026-07-07.pdf
**Verification:** confirmed via WebFetch (Greenhouse posting live — full JD, comp band $130k–$200k+, active Submit form)

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (primary) + Agentic Systems / FDE-adjacent |
| Domain | Healthcare payment integrity — agentic systems that audit medical claims end-to-end |
| Function | Build — design agent systems from first principles, eval frameworks, tool surfaces |
| Seniority | L4 (mid; "AI Engineer", no Senior/Staff/Lead in title) |
| Remote | Remote — US |
| Comp | $130K–$200K+ (by level/skills) |
| Work auth | Requires existing US authorization; **will not sponsor** |

**TL;DR:** Machinify audits medical claims with agentic AI at scale (160M+ covered lives, 60+ US health plans). The role designs agent systems from first principles — architecture/topology selection, prompt-context and tool-surface engineering, and **evaluation frameworks built before implementation**. This is a near-ideal archetype match: it maps directly onto Deepak's conductor–subagent agentic orchestration (42% token reduction), his RAGAS/BERTScore **eval-first** LLM framework, and his production **healthcare RAG** work — all in the same regulated-healthcare domain. US-remote is clean for F-1 OPT short-term; the explicit no-sponsorship stance is the one real headwind (future STEM-OPT/H-1B path not supported).

## B) Match con CV

| Requisito del JD | Evidencia en CV | Match |
|------------------|-----------------|-------|
| 2–4 yrs applied ML/AI eng + ≥1 production system owned end-to-end | 4+ yrs production GenAI/LLM (Progress Solutions, Vanguard, Emerson); shipped MangaLens (Chrome Web Store, 29+ sites) | Strong |
| Design agent systems from first principles (architecture, topology) | Conductor–subagent agentic orchestration decomposing objectives into context-scoped subagents — 42% token reduction while sustaining accuracy | Strong |
| Build evaluation frameworks **before** implementation; diagnose failures | Structured LLM eval+monitoring framework (RAGAS, BERTScore, custom domain metrics) + latency/accuracy dashboards to surface regressions pre-deploy | Strong |
| Deep understanding of agent loops + tool-calling | Multi-agent systems, LangChain/LangGraph, tool/function-calling agents (Vanguard 25+ agents) | Strong |
| Agent SDKs (OpenAI, Anthropic, LangGraph) | LangChain/LangGraph on CV; GPT-4o/GPT-5/Claude Sonnet/Gemini evaluated in production | Strong |
| Strong Python (clean abstractions, async, type discipline, testing) | Python + FastAPI production services; 12 APIs/microservices; fault-tolerant automation infra | Strong |
| Pydantic / JSON Schema (structured output) | Structured output + content-safety controls in regulated pipelines | Moderate–Strong |
| Fluency with coding agents (Claude Code, Codex), git workflows | Built career-ops autonomous pipeline **on Claude Code**; power-user of coding agents | Strong |
| Domain: healthcare claims / medical coding | Production healthcare-document RAG (Progress Solutions); hospital-readmission clinical ML; HIPAA experience | Strong |
| Measurement-driven mindset (evaluation-first) | Composite privacy–utility scoring framework; A/B testing, drift detection, RAGAS | Strong |

**Net:** Exceptionally tight fit — the JD's three pillars (agentic-from-first-principles, eval-first, healthcare domain) each land on a distinct, quantified proof point in Deepak's CV.

## C) Nivel y Estrategia

- **Level:** L4 mid IC — title is "AI Engineer" (no Senior/Staff/Lead), and 2–4 yrs requirement sits right at Deepak's 4-yr mark. No over/under-leveling risk.
- **Strategy:** Lead with the **agentic + eval-first + healthcare** triple. The JD is unusually explicit that they want someone who builds evals *before* code and treats coding agents as a power tool — Deepak's career-ops (built on Claude Code) and his RAGAS/BERTScore framework are near-perfect narrative anchors.
- **Positioning:** Frame as "Applied AI engineer who ships evaluated agentic systems in regulated healthcare" — exactly Machinify's operating context (medical-claims audit, PHI, compliance).

## D) Comp y Demanda

- **Band:** $130K–$200K+ — competitive for a US-remote mid AI role; midpoint (~$165K) is strong for L4.
- **Demand signal:** Machinify has multiple concurrent openings (AI Engineering, clinical review, payment-integrity validation) → healthy, funded hiring, not a phantom req.
- **Negotiation:** Anchor at the upper half citing production agentic + eval + healthcare-domain scarcity (see _profile.md scripts). The domain overlap is a genuine premium lever here.

## E) Plan de Personalización

- **CV emphasis:** Progress Solutions agentic orchestration (42% token cut) + LLM eval/monitoring framework as the top two bullets; healthcare-RAG + hospital-readmission ML as domain proof; career-ops (Claude Code) as the "coding-agent power user" signal.
- **Summary bridge:** "4+ yrs building evaluated, production GenAI/agentic systems in regulated healthcare → design agent systems from first principles for claims audit at scale."
- **Keywords to surface:** agentic systems, agent loops, tool-calling, LangGraph, evaluation framework, RAGAS, Pydantic/structured output, healthcare claims, Python async, Claude Code.

## F) Plan de Entrevistas

**STAR+R stories (framed to the archetype):**
1. **Agentic architecture from first principles** — conductor–subagent framework: chose topology (context-scoped subagents), measured 42% token reduction while holding task accuracy. (Result: cost + reliability.)
2. **Eval-before-implementation** — stood up RAGAS/BERTScore + custom-metric framework and latency/accuracy dashboards to catch regressions pre-deploy. (Result: fewer prod defects, faster safe iteration.)
3. **Regulated-healthcare RAG** — dense retrieval + cross-encoder re-ranking over healthcare corpora, reducing hallucination on domain queries with PII-safe workflows. (Result: relevance ↑, compliance held.)
4. **Reliability under SLA** — fault-tolerant batch orchestration w/ exponential backoff, 60% fewer failed runs; p95 1.5s→800ms at Vanguard. (Result: production discipline.)

**Likely interview focus:** agent-loop/tool-surface design tradeoffs, how you build evals, failure diagnosis on agentic systems, healthcare-claims domain reasoning.

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live Greenhouse posting, full JD + active Submit form (WebFetch-confirmed) | Positive |
| Description quality | Detailed, specific responsibilities + explicit comp band + clear tech stack (Claude models, Python, Pydantic, LangGraph) | Positive |
| Company hiring signals | 501–1000 employees; New Mountain Capital-backed; acquired Performant Healthcare (~$670M, Oct 2025); 60+ health plans, 160M+ covered lives; multiple concurrent openings | Positive |
| Reposting detection | Net-new Greenhouse job ID (4146862009); distinct from prior Machinify FDE role #1201 (4183955009). No repost churn on this ID | Positive |
| Role market context | Payment-integrity AI is a real, funded vertical; role specifics align with company's stated platform | Neutral–Positive |

**Context Notes:** The only material caveat is work authorization — the posting explicitly states no sponsorship. F-1 OPT is authorized to work now, so this is applicable short-term, but the long-term H-1B/STEM-OPT path is unsupported. Not a legitimacy concern; a candidate-fit constraint reflected in the score.

## H) Draft Application Answers

**Q: Why Machinify / this role?**
> "I build evaluated agentic systems in regulated healthcare — the exact operating context here. At Progress Solutions I designed a conductor–subagent orchestration framework (42% token reduction while holding accuracy) and stood up a RAGAS/BERTScore evaluation framework *before* shipping, so regressions surfaced pre-deploy. Machinify's emphasis on designing agents from first principles and building evals first is how I already work — applied to claims audit, a domain where my healthcare-RAG and HIPAA experience transfers directly."

**Q: Describe an agentic system you designed from first principles.**
> "I chose a conductor–subagent topology that decomposes a complex objective into context-scoped subagents executing autonomously. The design goal was bounded context per agent and clean tool surfaces; the measured outcome was 42% lower token consumption with sustained multi-step task accuracy. I paired it with an eval harness (RAGAS/BERTScore + custom domain metrics) so architecture changes were validated against regression, not vibes."

**Q: Work authorization?**
> "I'm authorized to work in the US now on F-1 OPT." *(Note: role states no sponsorship — flag STEM-OPT timeline transparency in live application per _profile.md; user decides before submitting.)*

## Keywords extraídas

agentic systems, agent loops, tool-calling, first-principles agent design, LangGraph, agent SDKs, evaluation framework, eval-first, RAGAS, BERTScore, Pydantic, JSON Schema, structured output, Python async, type discipline, Claude Code, Codex, coding agents, healthcare claims, medical coding, payment integrity, RAG, prompt/context engineering, model routing, production ML.
