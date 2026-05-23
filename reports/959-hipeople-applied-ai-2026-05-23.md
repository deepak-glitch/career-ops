# Evaluación: HiPeople — Applied AI Engineer (Systems & Reliability)

**Fecha:** 2026-05-23
**Arquetipo:** AI Platform / LLMOps (Evaluation, Monitoring, Reliability)
**Score:** 3.0/5
**URL:** https://jobs.ashbyhq.com/hipeople-official/6c330d7b-7c6d-4993-8893-b58b5289d442
**Legitimacy:** High Confidence
**Location:** Remote (Berlin-based; "World" listed) — Berlin office optional
**Region:** Intl
**PDF:** output-intl/2026-05-23/cv-deepak-mallampati-hipeople-applied-ai-2026-05-23.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | AI Platform / LLMOps — Eval pipelines, monitoring, reliability for HR-AI screening/interview platform |
| Domain | AI Hiring Platform (screening, interviews, assessments, references) |
| Function | Own evaluation pipelines, drive AI quality from 80%→95%+, build monitoring & CI for AI changes |
| Seniority | Implied mid+ (not explicit) |
| Remote | Remote OR Berlin office |
| Comp | Not disclosed ("competitive salary + meaningful stock options") |
| Sponsorship | "We do not offer any Visa support for Germany at this time" — hard veto for F-1 OPT relocation |
| Stage | Pre-$10M ARR, lean team (<20 people goal), founder backing (Moonfire, Capnamic, Cherry) |
| Customers | NFL, Zapier, Celonis, DAZN |
| TL;DR | Role itself is a strong match (RAG eval + agentic monitoring + CI testing for AI = Deepak's wheelhouse). But (a) Berlin no-visa relocation gate, (b) Go-language requirement is unmet, and (c) comp opaque. Worth a screen only if remote-from-US is genuinely supported and the Go stack is teachable. |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| Evaluation pipelines for AI workflows | ✅ Direct — retrieval-grounded response alignment >90% eval, agent stability tracking +25% at Progress Solutions |
| Quality metrics + acceptance criteria | ✅ — retrieval precision +35%, hallucination -30%, recall +15–20%, alignment >85% (Suvidha) |
| Drift / regression tracking | ⚠️ — ad-hoc in projects, not in CV as a formal system |
| Prompt-strategy + model-selection improvements | ✅ — multi-provider Manga Lens (Claude/GPT-4o/Nano/Ollama), Dream Decoder (Perplexity+Replicate) |
| Push systems from 80% → 95%+ | ✅ — defect reduction ~30% via observability + load sim |
| Monitoring/dashboards/tracing | ✅ — Grafana on SQL Server DMVs (Emerson) + structured logging in inference services |
| CI for AI changes (regression tests, golden datasets) | ⚠️ — Jenkins CI/CD at Emerson, but not AI-specific eval gates |
| SOC 2 / audit evidence | ⚠️ — HIPAA-conscious work but no formal SOC 2 prep |
| **Go programming** | ❌ — Python primary; no Go in CV |
| Backend / systems engineering | ✅ — FastAPI/Flask, T-SQL ops, Docker |

**Gaps + mitigation:**
- *Go*: hard requirement. Can frame as "Python primary, comfortable picking up Go in a quarter — coming from C++ Arduino + TypeScript polyglot baseline." Risk: HiPeople said "Excitement for building in Go" — they want enthusiasm + some demonstrable interest, not necessarily prod years.
- *Berlin visa*: HiPeople said "We do not offer any Visa support for Germany at this time." For F-1 OPT US-based remote, this only matters if HiPeople insists on Germany-based employment. Clarify in screen: is the remote role open to a US-based contractor or Employer-of-Record? If no, this is a hard veto.
- *Formal CI for AI*: build a 2-paragraph LinkedIn post on "agent stability eval gates" to seed credibility.

## C) Nivel y Estrategia

- Detected level: mid IC (lean team, founder exposure). Deepak's 2.5y matches if Go gap is bridged.
- **Vender:** Suvidha eval rigor (~85% alignment), Progress Solutions defect-reduction observability work, and Healthcare Claims Processing schema-validated JSON contracts (= a form of "regression test on agent outputs").
- **Risk (high):** Berlin visa policy + Go requirement together push this from "good fit" to "borderline." Recommend screen only if both are clarified favorably.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| HiPeople band | Not disclosed | JD |
| Berlin mid IC Applied AI | €60–95K base + RSU | Levels.fyi / Glassdoor Berlin |
| Remote-EU Applied AI | €70–110K base | Same |
| Pre-$10M ARR backed startup | Likely Berlin band + meaningful equity | Industry norms |

Without disclosure + visa friction, comp expectation is opaque. Likely below US-anchor offers Deepak is otherwise considering.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Applied AI in healthcare" | "Applied AI engineer focused on reliability + evaluation pipelines — agent stability, drift detection, observability" | Mirrors JD title |
| 2 | Top metric | retrieval precision | Lead with "agent response stability +25%" + "retrieval-grounded alignment >90%" + "defect reduction ~30%" | Reliability framing |
| 3 | Bullets | Healthcare RAG focus | Add 1 line: "Built evaluation harness comparing alignment, hallucination rate, and recall across model swaps (Claude / GPT-4o / local Ollama)" — based on Manga Lens multi-provider work | Mirrors prompt/model-selection bullet |
| 4 | Project order | Healthcare first | Move Manga Lens (4-provider eval) + Dream Decoder (intermediate prompt layers) to top | Eval / prompt-strategy alignment |
| 5 | Cover letter | None | Required — open with Go interest + remote-US work-auth clarity | Direct address of both gates |

## F) Plan de Entrevistas (STAR+R)

| # | JD requirement | STAR+R |
|---|---|---|
| 1 | Build eval pipelines + metrics | S: Healthcare RAG at Progress Solutions. T: Trustworthy clinical retrieval. A: Defined retrieval precision, irrelevant-retrieval rate, grounded-alignment % as eval gates; recursive semantic chunking + transformer embeddings. R: +35% precision, >90% grounded alignment. Reflection: define the metric before the model — without it, "better" is folklore. |
| 2 | Drive 80% → 95%+ quality | S: Inference services at Progress Solutions. T: Reduce post-deploy defects. A: Structured logging + load simulation + class-weighted threshold calibration on predictive ML. R: ~30% defect reduction + recall +15–20% on high-risk while precision >90%. Reflection: the last 15% comes from threshold work + observability, not model swaps. |
| 3 | Prompt + model selection | S: Manga Lens multi-provider. T: Best translation quality per dollar. A: Built provider-swappable pipeline (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama). Tracked translation accuracy + per-provider failure modes. R: shipped multi-provider on Chrome Web Store; WebP/JPEG split avoids CUDA crash on Ollama. Reflection: model selection ≈ thermostat — bias to cheaper unless it fails the eval gate. |
| 4 | Monitoring + tracing | S: Synthesis Order-to-Cash @ Emerson. T: Detect long-running queries + deadlocks. A: Grafana dashboards on SQL Server DMVs + CI/CD validation. R: ~25% incident recurrence drop, ~30% faster RCA. Reflection: dashboards are bug magnets — they make wrong assumptions visible. |
| 5 | CI + regression tests for AI | S: Healthcare Claims Processing multi-agent. T: Prevent cascading hallucinations. A: Schema-validated JSON contracts between agents = regression test surface. Versioned policy doc index for RAG. R: audit-ready reasoning traces. Reflection: between-agent contracts are the cheapest CI for AI you can buy. |

Red-flag Q on visa: "I'm US-based on F-1 OPT. Could you confirm whether this remote role is open to a US-based contractor or via EoR? If Germany-based employment is required, I'd want to be upfront that my situation can't bridge to that today."
Red-flag Q on Go: "I'm Python primary, with TypeScript and C++ from prior projects. Go is a quarter-of-ramp problem — I'd happily commit to a paid take-home or starter PR in Go to demonstrate that."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Ashby-listed, "we plan to reach $10M ARR with fewer than 20 people" — current goal | Positive |
| Customers | NFL, Zapier, Celonis, DAZN named | Strong Positive |
| Investors | Moonfire (Mattias Ljungman), Capnamic, Cherry + named operators | Positive |
| JD specificity | Detailed responsibilities; explicit Go + SOC 2 mentions | Positive |
| Comp transparency | Not disclosed | Concerning |
| Sponsorship clarity | Explicit "no visa support" — transparent | Neutral (transparent friction) |
| Ops Principles gate | "100% alignment with Ops Principles (if you feel this isn't you, do not apply)" | Neutral |

Posting is real and detailed; comp opacity + visa policy are the only friction. The Ops Principles gate is a cultural filter, not a red flag.

## H) Draft Application Answers

(Score 3.0 — only worth proceeding if remote-US + Go-on-the-job are confirmed in the AI screen.)

**Why HiPeople?**
> "AI reliability + evaluation pipelines is exactly the slice I've been pushing in healthcare RAG and agentic claims work. I've built grounding-alignment evaluation harnesses (>90% alignment scoring), driven hallucination rates down >30%, and shipped multi-provider AI pipelines where the eval gate decides which model serves which request. HiPeople's mission to push AI from 80% to 95%+ in HR is the same engineering problem, just a different vertical."

**Why F-1 OPT + Go?**
> "I'm US-based on F-1 OPT (EAD-authorized for US work). I'd want to confirm whether this remote role can be structured for a US-based contractor or via EoR — if Germany-based employment is the only option, that's a real constraint we should be upfront about. On Go: I'm Python primary with TypeScript and C++ experience; I'm happy to do a paid Go take-home or starter PR to demonstrate ramp speed."

---

## Keywords extraídas

applied AI engineer, systems & reliability, AI evaluation pipelines, agent stability, drift detection, regression testing, golden datasets, SOC 2, AI monitoring, observability, prompt engineering, model selection, fine-tuning, LLM, RAG, Go, backend, Berlin, remote Europe, HR tech, hiring platform, screening, references
