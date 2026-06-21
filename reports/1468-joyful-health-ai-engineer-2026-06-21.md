# Joyful Health — AI Engineer

**Fecha:** 2026-06-21
**Arquetipo:** Applied AI / LLM Engineer + Agentic (multi-agent + RAG, healthcare)
**Score:** 3.8/5
**URL:** https://jobs.ashbyhq.com/joyfulhealth/73c903d1-5d43-4cce-8e68-4fd3a4388b53
**Legitimacy:** High Confidence
**Location:** New York City, NY — Hybrid (3 days/week in office)
**Region:** US
**PDF:** output/2026-06-21/cv-deepak-mallampati-joyful-health-ai-engineer-2026-06-21.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Applied AI / LLM Engineer + Agentic (multi-agent orchestration + RAG) |
| Domain | Agentic AI + healthcare financial operations (RCM / claim-denial resolution) |
| Function | Build (greenfield technical lead for the agentic platform) |
| Seniority | Mid–Senior IC: "5+ years building production AI systems", "technical lead" |
| Remote | Hybrid — NYC-based, 3 days/week in office |
| Team size | Early-stage, Series A ($22M led by CRV); founding-engineering culture |
| Comp | $150,000–$275,000 base + equity |
| TL;DR | Greenfield agentic AI system that autonomously researches and resolves insurance claim denials (multi-agent + RAG + eval) — almost a 1:1 match to Deepak's healthcare RAG + agentic + LLM-eval stack, gated mainly by a "5+ yrs / technical lead" framing. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Estado |
|------------------|-----------------|--------|
| Multi-agent orchestration for complex workflows | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework… autonomous multi-step workflows" (Progress Solutions) | ✅ Strong |
| RAG to retrieve clinical/billing/policy info | "Engineered high-performance RAG pipelines over large-scale healthcare document corpora… dense retrieval + cross-encoder re-ranking" | ✅ Strong (healthcare) |
| Evaluation frameworks + feedback loops | "Established structured LLM evaluation/monitoring framework (RAGAS, BERTScore, custom domain metrics)… surface regressions before release" | ✅ Strong |
| Prompt engineering + fine-tuning to optimize LLM behavior | Prompt optimization at Vanguard (+27% task success); QLoRA fine-tuning (Qwen3) at Kent State | ✅ Strong |
| Production-grade AI: versioning, A/B testing, monitoring | "latency/accuracy dashboards", "A/B Testing", MLflow/W&B, "99.9% uptime" | ✅ Strong |
| Python + PyTorch/TensorFlow/JAX | PyTorch, TensorFlow, Keras; Python primary | ✅ (JAX not listed — adjacent) |
| Vector DBs + semantic search | FAISS, Pinecone, Weaviate; hybrid search; semantic caching | ✅ Strong |
| Healthcare data / medical billing workflow understanding ("a plus") | Healthcare RAG + privacy-preserving clinical ML; billing/RCM specifically is new | ⚠️ Partial — clinical yes, RCM/payer-rules no |
| APIs + integrating AI into product workflows | "Built 12 APIs/microservices… p95 1.5s→800ms"; FastAPI | ✅ Strong |
| 5+ years production ML engineering | CV shows ~4 years (Emerson 2022 → present) | ⚠️ Gap (~1 yr short) |
| "Technical lead" / own roadmap end-to-end | Founder/owner posture on career-ops + agentic platform work; not a formal lead title | ⚠️ Stretch |

**Gaps & mitigation:**
1. **5+ years (soft blocker).** ~4 yrs actual. JD explicitly says "apply even if you don't meet 100%… very open to candidates with non-traditional experience." Mitigation: lead with depth — production agentic + healthcare RAG + eval at Progress/Vanguard compresses seniority into outcomes (42% token reduction, 40% hallucination cut, 99.9% uptime).
2. **Medical billing / payer-rules domain (nice-to-have).** Clinical-data and HIPAA fluency present; denial/RCM specifics are learnable. Mitigation: frame the privacy-preserving clinical pipeline + healthcare RAG as evidence of fast ramp on regulated healthcare workflows.
3. **"Technical lead" framing (stretch).** Position founder-level ownership of career-ops + greenfield agentic systems as proof of roadmap ownership.

## C) Nivel y Estrategia

- **JD level:** Mid–Senior IC who can be the technical lead of a greenfield agentic platform (5+ yrs).
- **Candidate natural level (this archetype):** Mid IC with senior-flavored depth in agentic + healthcare RAG + eval.
- **Sell-senior-without-lying:** "I've architected conductor–subagent orchestration in production (42% token reduction at sustained accuracy) and built healthcare RAG with cross-encoder re-ranking and a RAGAS/BERTScore eval harness — exactly the denial-classification → evidence-retrieval → appeal-generation loop you're describing, in a regulated domain."
- **If downleveled:** accept if comp lands ≥ mid of band; ask for a 6-month review with explicit lead-track criteria. Greenfield + small team is itself the growth lever.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Posted band | $150,000–$275,000 base + equity | JD |
| NYC Applied/ML Engineer (mid) market | ~$150k–$210k base typical; senior $200k–$280k | Levels.fyi / Glassdoor NYC ranges (general market knowledge) |
| Series A healthtech equity | Meaningful early equity; higher variance | JD ("strong equity") |
| Demand trend | Agentic + healthcare-AI hiring remains hot in 2026 | Market context |

Band is wide and generous; midpoint (~$200k+) is competitive for NYC. The width reflects the 5+ yr / lead expectation — Deepak likely lands lower-mid.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises" | Lead with healthcare + agentic claim/denial-style workflows | Mirror JD's healthcare-finance framing |
| 2 | Hero metrics | token reduction, 40% hallucination, 92% precision | Surface multi-agent orchestration + RAG + eval first | Match "agents + RAG + eval loops" |
| 3 | Experience order | chronological | Pull Progress Solutions agentic + RAG bullets to top | Direct 1:1 with JD responsibilities |
| 4 | Skills | broad list | Foreground multi-agent, RAGAS/BERTScore, vector DBs, prompt eng | ATS + recruiter scan |
| 5 | Footer | location line | "US-based (NYC-relocatable), F-1 OPT, open to sponsorship" | NYC 3-day hybrid + work-auth clarity |

**LinkedIn top 5:** headline → "Applied AI / Agentic Engineer — healthcare RAG + multi-agent"; feature career-ops + clinical pipeline; add RAGAS/BERTScore + LangGraph keywords; pin a post on agentic eval; set "Open to" NYC + remote.

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-------------|-----------------|---|---|---|---|------------|
| 1 | Multi-agent orchestration | Conductor–subagent platform | Complex multi-step objectives blew token budgets | Cut cost without losing accuracy | Context-scoped subagents executing autonomously | 42% token reduction, accuracy held | Scoping context per subagent matters more than model choice |
| 2 | RAG over clinical/billing docs | Healthcare RAG pipeline | Domain queries hallucinated | Raise grounded relevance | Dense retrieval + cross-encoder re-ranking | Materially reduced hallucination | Re-ranking beat bigger top-k for precision |
| 3 | Eval frameworks + feedback loops | RAGAS/BERTScore harness | No pre-deploy regression signal | Catch regressions early | Custom domain metrics + dashboards | Regressions caught before release | Eval-first culture is the real reliability lever |
| 4 | Prompt eng to change behavior | Vanguard prompt optimization | Inconsistent task success across models | Improve success + safety | Prompt redesign + GPT-4o/Claude/Gemini eval | +27% success, −42% unsafe outputs | Behavioral specs beat ad-hoc prompt tweaks |
| 5 | Production reliability/monitoring | Automation infra + retries | Failed prod runs | Improve reliability | Batch orchestration + exponential backoff | −60% failed runs, 99.9% uptime | Idempotency + retry budgets are non-negotiable |
| 6 | Healthcare compliance | Privacy-preserving clinical ML | Re-ID risk in clinical data | Enable compliant analytics | k-anonymity + l-diversity + DP | Re-ID 3.38%→0.32%, 99% utility retained | Quantify privacy/utility trade-offs explicitly |

**Case study to present:** the agentic conductor–subagent platform + healthcare RAG eval harness — narrate it as the denial-resolution loop (classify → retrieve evidence → reason over policy → generate appeal).
**Red-flag Qs:** "Only 4 years?" → "Depth over tenure — production agentic + healthcare RAG + eval, shipped." / "RCM experience?" → "Clinical + HIPAA fluency; RCM rules are a fast ramp on top of the retrieval/eval foundation I already build."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Ashby posting; AI Engineer active in board listing alongside 15 open roles | Positive |
| Description quality | Highly specific: agents, RAG, vector DBs, MLOps, eval, named frameworks; clear 6–12mo scope | Positive |
| Comp transparency | Explicit $150k–$275k + equity | Positive |
| Funding/runway | $22M Series A (CRV + MongoDB/KAYAK founders) just announced | Positive |
| Reposting | Not previously in scan-history (net-new this run) | Neutral |
| Layoffs/freeze | None found; actively expanding (16 open roles incl. founding eng) | Positive |

**Context:** Early-stage startup hiring broadly across functions — consistent with post-Series-A scaling, not a ghost post.

---

## Keywords extraídas

agentic AI, multi-agent orchestration, RAG, vector databases, semantic search, prompt engineering, fine-tuning, LLM evaluation, RAGAS, BERTScore, PyTorch, Python, MLOps, model monitoring, A/B testing, healthcare AI, claim denials / RCM, appeal generation, production AI systems, feedback loops
