# Evaluación: Anthropic — Research Engineer, AI Observability

**Fecha:** 2026-04-24
**Arquetipo:** AI Platform / LLMOps + Applied AI / LLM Engineer
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/anthropic/jobs/5125083008
**Legitimacy:** High Confidence
**Location:** San Francisco, CA (on-site expected per Anthropic policy)
**PDF:** output/2026-04-24/cv-deepak-mallampati-anthropic-research-engineer-ai-observability-2026-04-24.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | AI Platform / LLMOps — design AI-based monitoring for AI training + deployment |
| Domain | AI observability / safety; build agentic integrations for autonomous investigation |
| Function | Build; observe; instrument; scale human oversight of AI |
| Seniority | 5+ years software engineering (mid-to-senior) |
| Remote | On-site SF (Anthropic prefers on-site; hybrid possible at tenured stage) |
| Team | AI Observability group (enforcement, threat intel, model audits) |
| Location | **San Francisco, CA** |
| Comp | $320K–$405K USD annually |
| Visa | "We do sponsor visas" + immigration legal support |
| TL;DR | **Strong archetype match, senior stretch.** Progress RAG + agentic grounding + eval harness directly map to "AI-based monitoring of AI systems." Comp is 3x target. Gap: 5+ years vs ~2.5 is a real blocker; Research Engineer title typically expects deeper ML research background. Sponsorship explicitly available is a plus for F-1 OPT. Apply as a long-shot — if they downlevel to Member of Technical Staff or Software Engineer (Observability), that's still a career-defining hit. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Design AI-based monitoring for AI training/deployment | **STRONG** | cv.md L25-30 Progress RAG + agentic + eval pipelines in regulated healthcare |
| Enhance frameworks for processing large unstructured text | **STRONG** | cv.md L25-27 recursive semantic chunking + transformer embeddings + RAG eval |
| Build agentic integrations for autonomous investigation | **STRONG** | cv.md L72 Agentic Claims — 5-stage autonomous investigation pipeline + JSON contracts |
| 5+ years software engineering with ML systems exposure | **WEAK** | ~2.5 years production + M.S. |
| Enthusiasm for scaling human oversight of AI | **STRONG** | cv.md L30 HIPAA-conscious governance + stakeholder-facing system-limitation docs + eval audit trails — direct mapping to human-oversight framing |
| LLM application development + evaluation | **STRONG** | cv.md L13, L25-27 — explicit RAG + eval + agentic grounding |
| Focus on UX, reliability, documentation | **STRONG** | cv.md L30 stakeholder docs + evaluation audit trails; cv.md L60 Manga Lens privacy policy + narrowed permissions |
| Cross-functional collaboration | **STRONG** | cv.md L30, L52 — cross-functional scheduling + clinician-facing + student-coordination |
| Internal tools / developer platform (nice-to-have) | **MEDIUM** | cv.md L28 FastAPI + Docker + logging + load simulation |
| Monitoring / observability systems (nice-to-have) | **MEDIUM** | Emerson SQL DMVs + Grafana dashboards (cv.md L37); Progress structured logging |

**Gaps:**
1. **Seniority band (5+ years, research engineer title)** — hard blocker risk. Mitigation: reframe as "Member of Technical Staff" or "Software Engineer, Observability" in the interview; argue that Progress's regulated environment + agentic grounding + eval work is equivalent to research-eng production systems.
2. **No public research / papers** — cv.md has no arXiv or publication trail. Mitigation: lean on Manga Lens + Agentic Claims system designs as production-quality applied work; if asked, commit to writing a trace-observability case study post-offer.
3. **Claude / agent infra specifically** — Progress used LangChain + LlamaIndex + Hugging Face; no direct Claude-infra work at production scale. Mitigation: ramp on Anthropic's open Messages API + compile a Manga-Lens-style demo that uses Claude for trace-generation before the interview.

## C) Nivel y Estrategia

- **JD:** 5+ years, Research Engineer title, AI monitoring systems at scale.
- **Deepak level:** Applied AI Engineer with 2.5+ years production experience.
- **Sell:** "I build AI monitoring in practice — Progress eval harness catches hallucinations before clinicians see them, structured logging surfaces agent failures in <5 minutes, agentic claims pipeline has JSON-contract invariants between agents. I'd own the Claude-specific monitoring surface within 2 quarters."
- **If downleveled:** Accept Software Engineer (Observability) or Member of Technical Staff at $250-320K. Negotiate 12-month Research Engineer calibration review.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Anthropic RE AI Observability | $320K–$405K + equity | JD |
| Anthropic MTS / SE | $250K–$380K | Levels.fyi |
| Deepak target | $100K–$130K | config/profile.yml |
| AI observability demand | Highest-growth LLMOps sub-archetype | Qualitative |
| Anthropic growth | $18.4B run-rate 2025; fastest-growing AI lab | Reports |

Comp floor $320K — more than 3x target. Rare upside.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI engineer building observability for production LLM systems. Progress RAG eval harness (~90% grounded alignment, ~35% precision), agentic grounding cut hallucinations >30%, structured logging dropped post-deploy defects ~30%. Shipped-solo Manga Lens (4-provider runtime + per-provider fault isolation) and Agentic Claims (5-stage JSON-contracted pipeline). Ready to build AI-based monitoring for AI systems at scale." | Mirror JD: monitoring + eval + agentic + at scale |
| 2 | Competencies | Lead: AI Observability, LLM Evaluation, Trace Instrumentation, Agentic Investigation, RAG + Grounding, Python, Structured Logging, Claude API, Distributed Systems, Human-in-the-loop | JD ordering |
| 3 | Experience | Lead Progress bullet on eval harness + agentic grounding + structured logging + defect reduction | Direct match |
| 4 | Projects | Lead Agentic Claims (multi-agent autonomous investigation) → Manga Lens (multi-provider instrumentation + fault isolation) → Dream Decoder (intermediate structured prompts) | Investigation + instrumentation angle |
| 5 | Location | "Kent, OH — Open to SF relocation. F-1 OPT, sponsorship welcomed (per Anthropic policy)." | Match JD visa note |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | AI-based monitoring | Progress eval harness — 90% grounded alignment via structured eval before release | Eval IS monitoring when you close the loop |
| 2 | Agentic autonomous investigation | Agentic Claims 5-stage pipeline + JSON contracts | Structured handoffs between agents = traceable investigation |
| 3 | Processing large unstructured text | Suvidha video summarization — 5,000+ sessions, hierarchical summarization, ~85% alignment | Hierarchical > single-pass for scale |
| 4 | Cross-functional safety | Progress HIPAA-conscious governance + stakeholder limitation docs | Safety writing is cross-functional — the doc IS the safety artifact |
| 5 | Reliability + observability | Progress FastAPI + Docker + structured logging + ~30% defect reduction | Structured logs + load simulation catches 80% of defects pre-deploy |
| 6 | Scaling human oversight | Progress limitation docs for clinicians + eval audit trails | Oversight scales when trail is machine-readable and human-readable |

**Case study:** Agentic Claims pipeline as "autonomous investigation with JSON-contract guardrails" — direct analog to Anthropic's "agentic integrations for autonomous investigation."

**Red-flag questions:**
- "Why Research Engineer vs Software Engineer?" → "I apply to either. I build systems that monitor AI; that's RE-in-practice. If the MTS / SE track fits better, I'd take that and build toward RE on a 12-month horizon."
- "5+ years gap?" → "I have 2.5 years of production healthcare AI with measurable outcomes (35% retrieval precision, >30% hallucination reduction, 30% defect reduction). I shipped 0-to-1 solo three times. Scoring on artifacts, not tenure — happy to calibrate at 6 and 12 months."
- "No papers — is research rigor there?" → "I've documented Progress eval methodology internally (audit trails, system-limitation docs). I'll publish the Manga Lens multi-provider fault-isolation pattern as a case study this quarter — happy to share a draft pre-interview."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on Greenhouse, Apply button present | Positive |
| JD specificity | Names concrete capabilities (AI monitoring, agentic investigation, unstructured text frameworks), team context | Positive |
| Salary transparency | $320K-$405K disclosed | Positive |
| Visa sponsorship | Explicitly "We do sponsor visas" | Positive |
| Company hiring signals | Anthropic 2025 $18.4B run-rate + aggressive observability investment | Positive |
| Reposting pattern | Multiple observability-adjacent roles open = scale, not reposting | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

Score 3.6 < 4.5 — omitted.

---

## Keywords extraídas

AI Observability, Research Engineer, AI-based monitoring, agentic investigation, LLM evaluation, Claude, enforcement, threat intelligence, model audits, production LLM, structured logging, trace observability, human oversight, Python, FastAPI, LangChain, Hugging Face, Anthropic, SF on-site, visa sponsorship.
