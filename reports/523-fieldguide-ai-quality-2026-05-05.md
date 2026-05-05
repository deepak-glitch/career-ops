# Evaluación: Fieldguide — AI Engineer, Quality

**Fecha:** 2026-05-05
**Arquetipo:** AI Platform / LLMOps Engineer (eval infra + observability + agent QA) — hybrid w/ Applied AI
**Score:** 3.7/5
**URL:** https://jobs.ashbyhq.com/fieldguide/f4f0aea0-826d-451f-bd17-b04772e221cc
**Legitimacy:** High Confidence
**Location:** San Francisco, CA or Remote (USA)
**PDF:** output/2026-05-05/cv-deepak-mallampati-fieldguide-ai-quality-2026-05-05.pdf

---

## Note on URL Substitution

Original pipeline URL `d86bef91-71ab-494f-a3c8-393ad8c55063` returned Ashby `jobPosting: null` (closed). The active "AI Engineer, Quality" listing on Fieldguide's board is `f4f0aea0-826d-451f-bd17-b04772e221cc` — substituted here.

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | AI Platform / LLMOps Engineer (eval-infra + observability + agentic QA) — hybrid w/ Applied AI |
| Domain | Vertical AI for cybersecurity / privacy / financial audit (assurance + advisory firms) |
| Function | Own evaluation infrastructure for agentic systems; build automated eval pipelines + production feedback loops + observability/tracing; LangSmith + LangGraph integration; eval-driven dev advocacy |
| Seniority | "Hiring across all levels" — calibrate at interview; multi-level band |
| Remote | San Francisco, CA or Remote (USA) — JD also notes "this role is for engineers who value in-person collaboration at our SF office" (mixed signal) |
| Comp | $170K – $220K |
| Visa | Not stated; mid-stage YC-backed Series B/C — sponsorship typical |
| Team | AI Engineering org (cross-fn w/ ML Engineers + SMEs + product) |
| TL;DR | Direct archetype 1:1 — eval frameworks, observability, agent QA, LangSmith/LangGraph, prompt + retrieval orchestration. Multi-level band fits Deepak's 2.5y at lower-mid IC. SF-or-Remote-USA + $170-220K + multi-level + tier-1 investors (Goldman Growth Equity, Bessemer, 8VC, YC, Floodgate, Elad Gil) = strong opportunity. The only friction is the JD's mixed signal on in-person SF preference vs explicit Remote-USA option. APPLY w/ Remote-US screen + lead w/ multi-agent claims pipeline + healthcare RAG eval harness. |

## B) Match con CV

| JD requisito | CV evidence |
|---|---|
| Build production LLM-powered features serving traffic | Healthcare RAG production w/ ~35% precision + >90% grounded alignment (cv.md L25); FastAPI/Flask + Docker (cv.md L28); ~30% post-deployment defect reduction (cv.md L28) |
| Implement evaluation frameworks for model outputs + agent behaviors | >90% retrieval-grounded alignment evaluation (cv.md L25); ~85% highlight alignment vs human curation at Suvidha (cv.md L45); ~30% hallucination reduction via grounding rules (cv.md L26, L46) |
| Design observability / tracing infra for AI/ML systems | Structured logging + load simulation + Grafana DMV monitoring (cv.md L28, L35); evaluation audit trails + system-limitation docs (cv.md L30) |
| TypeScript + React + Python + Postgres | TypeScript + React (cv.md L12); Python primary (cv.md L12); PostgreSQL + SQLite (cv.md L12); Dream Decoder full-stack FastAPI + React/TS/Vite (cv.md L66) |
| Vector databases | Embeddings + vector search (cv.md L13); transformer-based embeddings (cv.md L25) |
| Agent orchestration + retrieval pipelines | Multi-agent claims pipeline w/ schema-validated JSON contracts (cv.md L71-72); agentic LLM workflows w/ structured reasoning + tool discipline (cv.md L26); Agentic Pixel Engine LLM orchestrator (cv.md L62-63) |
| Eval-driven development mindset | >90% grounded alignment in eval pipelines (cv.md L25); walk-forward validation for time series (cv.md L78-79); class weighting + threshold calibration (cv.md L27) |
| Production feedback loops + failure-mode triage | ~30% post-deployment defects + structured logging (cv.md L28); Manga Lens production debugging (CUDA → JPEG payload abstraction) (cv.md L60) |
| LangSmith + LangGraph integration | LangChain (cv.md L14); LangGraph not explicit in CV (mention agent-orchestration project as adjacent) |
| Comparison frameworks (effectiveness + consistency + latency + cost) | Multi-provider routing in Manga Lens — Claude Sonnet vs GPT-4o-mini vs GPT-4.1 Nano vs Ollama (cv.md L60) — direct comparison-framework analog |
| Production-oriented + data-driven rigor | All Progress Solutions metrics (precision, recall, defect rate) measured (cv.md L25-29); Energy Solutions DMV-based monitoring (cv.md L35) |

**Gaps:**
1. **LangSmith specifically** — Deepak has LangChain but no LangSmith production usage. Mitigate: cite multi-agent claims pipeline + grounded-alignment eval harness as functional analog.
2. **In-person SF preference** — JD states multi-level + Remote-USA option but adds "this role is for engineers who value in-person collaboration at our SF office." Resolve in screen — confirm Remote-USA viable for Deepak (Kent OH + visa).
3. **Audit / assurance domain** — healthcare-AI HIPAA discipline + Energy Solutions financial-tier ERP audit logging are closest analogs. Not a hard blocker.
4. **F-1 OPT visa** — clarify Fieldguide's sponsorship policy (Series-B w/ Goldman Growth Equity is typical sponsor).

## C) Nivel y Estrategia

- **Detected level:** Multi-level band — likely IC2-IC4 calibration. Deepak fits IC2 (2.5y prod) cleanly; can stretch to IC3 w/ founding-level patterns + multi-agent design.
- **Vender:** "I've built the exact pattern this role asks for at smaller scale: a multi-agent healthcare claims pipeline with schema-validated JSON contracts between agents, RAG-grounded CPT/ICD validation against vector indexes, and explainable risk scoring with audit-ready reasoning traces. Plus a production healthcare-RAG system with ~35% retrieval precision gains and >90% grounded alignment in evaluation. The eval-first mindset is already how I work — class weighting, threshold calibration, walk-forward validation, multi-provider comparison harnesses. I'm comfortable owning the unified eval platform and the production feedback loop."
- **Si downleveled:** Accept IC2; comp band $170-220K is fair; negotiate 6-mo review w/ clear IC3 promo criteria (eval platform shipped + N agent workflows under continuous regression coverage).

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp (range) | $170K – $220K base + equity |
| Demanda | Vertical AI for audit + assurance is large + underserved; YC + Goldman Growth Equity + Bessemer = high investor confidence |
| Risks | SF in-person preference vs Remote-US ambiguity; F-1 OPT sponsorship verification |
| Comp negotiation | Mid-range target $190K base + equity; emphasize multi-agent + healthcare-RAG + audit-trail experience as cross-discipline differentiator (RegTech crossover w/ HealthTech) |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ years)..." | "Applied AI engineer building production LLM systems with eval-first discipline — multi-agent pipelines with schema-validated JSON contracts, RAG with ~35% retrieval precision and >90% grounded alignment, hallucination reduction via grounding rules. Comfortable owning evaluation infrastructure end-to-end." | Mirror "evaluation-first mindset" + "production-oriented" JD framing |
| 2 | Lead bullet at Progress | RAG ~35% precision | Lead w/ ~35% precision + >90% grounded alignment + ~30% hallucination reduction + audit trails | Maps to "evaluation infrastructure" + "rigor" + "agent quality" framing |
| 3 | Multi-agent claims pipeline (project) | Currently 5 agents, JSON contracts | Reframe as "agent QA pattern" w/ explicit eval harness + comparison framework | "Comparison frameworks" + "evaluation harness for agentic systems" |
| 4 | Manga Lens (project) | 4-provider routing | Reframe as "multi-provider effectiveness/consistency/latency/cost comparison harness" | Direct match for "comparison frameworks that measure effectiveness, consistency, latency, cost" |
| 5 | Skills | Generic | Pull TS+React+Python+Postgres+vector-search+LangChain to top; add "evaluation pipelines" + "observability" as keywords | ATS match for JD keywords |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Eval framework for agent behaviors | Multi-agent claims pipeline w/ JSON contracts | Cascading hallucinations were corrupting downstream agents in healthcare-claims pipeline | Prevent error propagation across 5-agent chain (Intake → Validation → Consistency → Duplicate → Fraud Risk) | Designed schema-validated JSON contracts between agents + per-stage eval harness w/ grounded examples + reasoning-trace audit logs | Cascading-error rate dropped sharply; downstream agents now reject malformed upstream payloads instead of silently degrading | Schema-as-contract is cheaper than schema-as-tooling-afterthought; bake eval thresholds into the contract layer |
| 2 | Observability / tracing for AI systems | Healthcare RAG eval harness | Retrieval-grounded responses needed audit-grade traceability for HIPAA + clinician trust | Achieve >90% grounded-alignment + reproducible eval | Built recursive semantic chunking + transformer embeddings + grounding rules + per-query trace logs + evaluation alignment scoring | Achieved ~35% precision gain + >30% irrelevant-retrieval reduction + >90% grounded-response alignment in eval | Grounding-rule + trace-log discipline upstream prevents 80% of "model behaved weird" debug time downstream |
| 3 | Comparison framework (eff/consist/latency/cost) | Manga Lens 4-provider routing harness | One model couldn't cover all manga vision use cases (cost vs quality vs latency tradeoffs) | Pick the right provider per request type, compare outputs systematically | Built per-domain routing across Claude Sonnet, GPT-4o-mini, GPT-4.1 Nano, Ollama/minicpm-v; per-provider payload abstraction (WebP for cloud, JPEG for Ollama) to fix CUDA crash | Production stability + per-domain quality + ~7-day translation cache reduced repeat cost; shipped solo to Chrome Web Store | Multi-provider comparison harnesses pay back the day a provider degrades or a new model lands |
| 4 | Production-oriented + bias to building | Manga Lens solo ship | One-person project; pre-launch ambiguity on which providers to support | Ship a real Chrome extension w/ multi-provider AI translation | Manifest V3 + content scripts + service workers + captureVisibleTab + viewport-slice screenshots + 29 site selector configs + 7-day cache | Shipped to Chrome Web Store w/ multi-section panel pipeline + privacy policy + narrowed host permissions | "Working > perfect"; the per-site selector configs were the unlock — extensibility came from data, not from new code |
| 5 | Eval-driven dev advocacy | Walk-forward validation for time-series IoT | Linear-regression + Random Forest + SVR competing for indoor-temp prediction | Prove which model held up under temporal drift | Lag-window feature engineering + walk-forward validation + MAE comparison | Random Forest ~20-30% lower MAE; explicit walk-forward beat naive train/test split for prod-realism | Walk-forward validation is the single most important pattern when data has time order |
| 6 | Production failure-mode triage | CUDA crash on local Ollama | Manga Lens crashed on Ollama/minicpm-v but not on cloud providers | Unblock local-LLM users | Reproduced w/ payload-format experiments; identified WebP → CUDA crash; switched to JPEG only for Ollama; kept WebP for cloud (smaller) | Per-provider payload abstraction shipped; Ollama path stable | Failure-mode triage rewards "compare working vs broken" cheaper than "trace the stack"; hypothesis-first over deep-debug-first |

**Case study to present:** Multi-agent healthcare claims pipeline w/ JSON contracts → frame as "agent QA pattern" + walk through eval harness + reasoning-trace audit + per-stage failure mode coverage.

**Red-flag questions + answers:**
- *"Why move from healthcare to audit/assurance?"* → "The discipline is the same: regulated domain, audit-grade traceability, eval-first development, schema-validated contracts. Healthcare-AI taught me how to ship in a no-margin-for-error environment. Audit/assurance is a natural translation of that discipline."
- *"You're 2.5y, role calibrates across levels — where do you see yourself?"* → "IC2 honest fit on YOE; reach for IC3 on multi-agent + eval-platform pattern fluency. Happy to start IC2 w/ a 6-mo review tied to shipping the eval platform."

## G) Posting Legitimacy

- **Active Ashby posting** w/ full descriptionHtml; specific YOE bands + "hiring across all levels" → genuine multi-level hiring
- **Tech specificity** (TS+React+Python+Postgres+LangSmith+LangGraph + vector DBs + tracing) — high authorship signal
- **Investor list** (Goldman Growth Equity, Bessemer, 8VC, YC, Floodgate, Justin Kan, Elad Gil, DNX, Global Founders) — corroborates Series B/C stage
- **>50 of top 100 accounting + consulting firms as customers** — verifiable claim
- **Multi-level "calibrate at interview" language** — common at Series B/C scale-ups; not a red flag
- **Comp transparency** ($170-220K) — high transparency
- **Tier:** **High Confidence** — real, active, properly-staffed eval-infra hire.

## H) Draft Application Answers

Score is 3.7/5 — below 4.5 threshold for full draft answers, but apply is recommended. Use Plan E rewrites + Plan F STAR+R stories as the cover-letter scaffold.

**Why Fieldguide / why this role?** (40-60 words)
> "Fieldguide builds AI for the people who enable trust between businesses — that's the same discipline I've built in healthcare AI: regulated domain, audit-grade traceability, eval-first development. The AI Engineer, Quality role lets me apply multi-agent + eval-harness patterns I've shipped (schema-validated JSON contracts, grounded RAG, multi-provider comparison harnesses) to a unified platform that makes evaluation a first-class engineering capability."

---

## Keywords extraídas

AI Engineer Quality, evaluation infrastructure, LangSmith, LangGraph, eval-driven development, agent observability, production feedback loops, comparison frameworks, multi-agent, RAG, vector databases, TypeScript, React, Python, Postgres, audit-grade traceability, model regression detection, Fieldguide, vertical AI, audit
