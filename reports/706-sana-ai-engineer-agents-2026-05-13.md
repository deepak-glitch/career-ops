# Evaluación: Sana — AI Engineer (Agents)

**Fecha:** 2026-05-13
**Arquetipo:** Applied AI / LLM Engineer + Agentic
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/sana-roles/d3b49a65-86b3-4608-a2d3-047ea76dfcc5
**Legitimacy:** High Confidence
**Location:** Stockholm (per Ashby payload; original WebSearch listing tagged "Remote - EU/US" — verify; primary office is Stockholm)
**PDF:** output/2026-05-13/cv-deepak-mallampati-sana-ai-engineer-agents-2026-05-13.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | Applied AI / LLM Engineer building core agent infrastructure (Sana Agents — agent platform for enterprise) |
| Domain | Workplace knowledge + automation agents (Sana is now part of Workday after acquisition) |
| Function | Architect multi-step planning, orchestration, tool routing; engineer memory/state/context/grounding; safe fallbacks + error handling |
| Seniority | Not explicitly named; "greenfield core infrastructure" framing suggests Mid-Senior |
| Remote | Stockholm office primary; original listing mentioned Remote EU/US — needs verification |
| Team size | Platform + search teams (cross-functional); part of Workday |
| TL;DR | Excellent agentic-systems role at an AI lab (Sana, acquired by Workday) — exactly Deepak's archetype (multi-step planning, tool routing, context engineering, grounding, evals). Friction: Stockholm primary location; TypeScript/Kotlin/Node stack (Deepak is Python primary); no comp band disclosed. Worth applying as a stretch — strong agentic narrative, but location + stack alignment make it lower priority than US-Remote alternatives. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Architect multi-step planning, orchestration, tool routing | Agentic Healthcare Claims 5-stage pipeline (Intake → Validation → Consistency → Duplicate → Fraud Risk) with schema-validated JSON contracts (cv.md L72); Agentic LLM workflows for multi-step healthcare queries with structured reasoning + tool discipline (cv.md L26) |
| Implement code generation agents + sandboxed code execution | Agentic Pixel orchestrator decomposes high-level prompts into generation tasks (cv.md L62-63); Dream Decoder coordinated multimodal generation via structured prompts (cv.md L66) |
| Engineer memory, state, context packing/grounding | RAG retrieval pipelines with semantic chunking + transformer embeddings + grounding rules at Progress (cv.md L25); >90% retrieval-grounded response alignment |
| Balance latency, quality, cost controls | Manga Lens 7-day translation cache + multi-provider abstraction with payload optimization (WebP for cloud, JPEG for Ollama) (cv.md L60); Progress FastAPI/Flask packaging with structured logging + load simulation (cv.md L28) |
| Safe fallbacks + graceful degradation + error handling | Agentic Healthcare Claims schema-validated JSON contracts to prevent cascading hallucinations (cv.md L72); explainable risk scoring with audit-ready reasoning traces (cv.md L72) |
| Measurable quality improvements + automated evaluation | Progress: retrieval-grounded response alignment >90%, ~35% retrieval precision gain, ~25% agent stability gain (cv.md L25-26); evaluation pipelines in skills (cv.md L13) |
| TypeScript / Kotlin / Node.js / React / Tailwind | TypeScript in skills (cv.md L12); Manga Lens TS content scripts; Dream Decoder React + Tailwind (cv.md L66) — TypeScript present, Kotlin/Node not deep |
| Postgres, Redis, GCP, Kubernetes, Terraform | PostgreSQL in skills (cv.md L12); cloud-ready deployment + Docker at Progress (cv.md L17, L28); Kubernetes/Terraform/GCP not directly demonstrated |

**Gaps:**
1. **Stack mismatch (TypeScript/Kotlin/Node.js):** Deepak is Python primary; TS is solid but Kotlin is not in his stack. Mitigate by leading with agentic-systems narrative (language-agnostic primitives).
2. **Stockholm location:** Original listing said Remote EU/US; Ashby payload says Stockholm. Verify in screen. If Stockholm-only, this is a soft blocker for Deepak (US-based, F-1 OPT).
3. **Kubernetes/Terraform/GCP:** Cloud-ready deployment + Docker is what Deepak has; full K8s/Terraform/GCP is a ramp.
4. **F-1 OPT — Workday subsidiary in EU:** Workday is large; EU work would need visa/relocation discussion.

## C) Nivel y Estrategia

- JD doesn't disclose years; "greenfield core infrastructure" suggests Mid-Senior.
- Sell: "I have shipped agentic systems with the exact primitives Sana names — multi-step planning, schema-validated tool routing, grounding rules, audit trails. The Agentic Healthcare Claims pipeline is a 5-stage agent orchestration with schema contracts that prevent cascading hallucinations. I can adapt to TypeScript/Node — the agentic primitives are language-agnostic."
- Downlevel/relocation plan: If Stockholm-only, only proceed if relocation + visa support is offered. Otherwise pass.

## D) Comp y Demanda

| Source | Number | Notes |
|---|---|---|
| Sana JD | "Competitive salary + competitive RSU program" | No band disclosed |
| Levels.fyi - Workday SE | $130-180K base + equity (US); EU adjustments apply | Workday parent comp |
| Glassdoor - Stockholm AI Engineer | SEK 700K-1.2M (~$65-115K USD) | Stockholm market |
| Built In - EU AI Engineer (Mid-Senior) | €80-130K base | EU median |

Expect: SEK 900K-1.3M (~$85-120K USD) base + RSU. Below Deepak's US-equivalent target.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare RAG | "Applied AI engineer who builds production agentic systems — multi-step planning, schema-validated tool routing, grounding + audit + evaluation pipelines. Shipped Agentic Healthcare Claims (5-stage pipeline with schema-validated JSON contracts) + RAG retrieval-grounded systems at Progress." | Mirrors Sana's agentic-systems framing |
| 2 | Bullets (Progress) | Patient-outcome ordering | Lead with: agentic LLM workflows (tool discipline + grounding + ~25% stability) → RAG retrieval-grounded alignment >90% → evaluation pipelines → FastAPI/Docker | JD weights agent + grounding + eval |
| 3 | Skills | Python-first | Surface: agentic workflows + multi-step planning + tool routing + grounding + context engineering + RAG + evaluation + TypeScript + React | JD-keyword 1:1 |
| 4 | Projects | Healthcare-heavy | Reorder: Agentic Healthcare Claims (5-stage + schema-validated handoffs) → Agentic Pixel (LLM orchestrator decomposing prompts) → Dream Decoder (multimodal coord) → Manga Lens (multi-provider) | Front-load agentic + orchestration |
| 5 | Cover letter | n/a | Open with "Sana is building exactly what I have shipped at smaller scale at Progress — multi-step agents with grounding + audit + tool routing. Agentic Healthcare Claims is a 5-stage pipeline with schema-validated JSON contracts between agents to prevent cascading hallucinations. I can adapt to TypeScript/Node — the agentic primitives are language-agnostic." | Bridges archetype + addresses stack |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R |
|---|---|---|
| 1 | Multi-step planning + orchestration + tool routing | S: Agentic Healthcare Claims needed to process claims through 5 specialized stages without cascading errors; T: design agent orchestration; A: Intake → Validation → Consistency → Duplicate → Fraud Risk with schema-validated JSON contracts between agents + RAG-grounded CPT/ICD validation + explainable risk scoring; R: prevented cascading hallucinations + auditable reasoning traces; **Reflection:** the contract is the primitive — every prompt-chain that doesn't have one will regress |
| 2 | Context packing / grounding / memory | S: Progress RAG for clinical knowledge retrieval at scale; T: ship retrieval pipeline with measurable grounding; A: recursive semantic chunking + transformer embeddings + grounding rules + responsible AI guardrails + retrieval-grounded response alignment metric; R: ~35% retrieval precision gain + >90% retrieval-grounded alignment in eval; **Reflection:** chunking strategy decides the ceiling; embeddings only do the polish |
| 3 | Safe fallbacks + graceful degradation | S: Manga Lens needed to work across 4 LLM providers when any one of them rate-limited or errored; T: design provider-fallback strategy; A: 4-provider abstraction + per-domain WebP/JPEG payload handling + 7-day cache for graceful degradation; R: live on Chrome Web Store reliably; **Reflection:** the cache + fallback chain is what made the extension shippable in the wild |
| 4 | Measurable quality + automated evaluation | S: Progress agentic + RAG workflows needed defensible quality metrics; T: establish evaluation pipeline; A: retrieval-grounded response alignment metric + agent stability metric + audit trails + system-limitation docs; R: >90% retrieval-grounded alignment + ~25% stability gain + continued stakeholder adoption; **Reflection:** the eval metric is what gets revisited every release — pick one that aligns with the business outcome |
| 5 | Cross-team collaboration (platform + search) | S: Progress required preprocessing pipelines + ML inference + agent workflows + RAG to interoperate; T: ship integrated AI stack; A: Pandas + NumPy preprocessing + scikit-learn/XGBoost predictive ML + FastAPI/Flask inference + agentic LLM workflows + Docker; R: ~30% defect reduction + ~40% downstream model-instability reduction; **Reflection:** the upstream-downstream contracts (data → model → API) compound — every clean handoff saves debugging downstream |

Red-flag prep:
- "Why Sana?" → Sana is building agentic systems for enterprise knowledge work — exactly the primitive I have shipped at Progress (agentic LLM workflows + RAG + grounding + audit). I want to scale that primitive.
- "Stockholm-only?" → Need clarification on remote-EU/US availability and visa support. If Stockholm-only, would need relocation + visa sponsorship discussion.
- "TypeScript/Kotlin/Node?" → TypeScript shipped (Manga Lens, Dream Decoder); Kotlin is a ramp. Agentic primitives are language-agnostic; I can be productive in the first 30 days.
- "F-1 OPT?" → US-based, OPT-eligible. Long-term work in EU would need separate visa/relocation discussion.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Apply button | Active (Ashby GraphQL returns full payload 2026-05-13) | Positive |
| Description quality | Specific: exact tech stack (TS, Kotlin, Node, React, Tailwind, Postgres, Redis, GCP, K8s, Terraform), team structure, customer base (1M+ users, hundreds of enterprises) | Positive |
| Comp transparency | "Competitive salary + RSU" — no band disclosed | Mixed |
| Company state | Acquired by Workday (2024); strong enterprise revenue + parent company stability | Positive |
| Reposting | First seen 2026-05-13; Sana has multiple agent + platform roles open concurrently — structural | Positive |
| Role-company fit | AI Engineer (Agents) is core to Sana Agents product | Positive |

## H) Draft Application Answers

Not generated — score 3.3 is below 4.5 threshold. PDF will be generated per PDF policy (score ≥ 3.0).

---

## Keywords extraídas

Sana, AI Engineer, Agents, Workday, multi-step planning, orchestration, tool routing, context packing, grounding, memory, code generation, sandboxed execution, evaluation, TypeScript, Kotlin, Node.js, React, Tailwind, Postgres, Redis, GCP, Kubernetes, Terraform, Stockholm.
