# Evaluación: Augment Code — Applied AI Engineer

**Fecha:** 2026-04-27
**Arquetipo:** Applied AI / LLM Engineer (Generative AI / RAG Engineer)
**Score:** 3.9/5
**URL:** https://job-boards.greenhouse.io/augmentcomputing/jobs/4680036008
**Legitimacy:** High Confidence
**Location:** Palo Alto, CA — On-site (Augment HQ)
**PDF:** output/2026-04-27/cv-deepak-mallampati-augment-code-applied-ai-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI / LLM Engineer (developer-tools) |
| Domain | AI coding assistant, Context Engine over large production codebases |
| Function | Build/integrate LLM features end-to-end (prompt + product + system) |
| Seniority | Mid IC ("Applied AI Engineer", no leveling band given) |
| Remote | Palo Alto, CA on-site (Augment HQ) |
| Team | Engineering + research collaboration |
| TL;DR | Implement and integrate LLM features into a developer assistant; prompt iteration, eval, and full-stack code-product integration. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Implement & integrate LLM features into product | RAG systems, agentic LLM workflows shipped in production (cv.md L25-26) |
| Prompt engineering for LLMs (OpenAI, Claude, Gemini) | Prompt + tool-discipline + grounding rules (cv.md L26); Manga Lens runs Claude Sonnet, GPT-4o mini, GPT-4.1 Nano (cv.md L60) |
| Evaluate and test AI outputs | Evaluation pipelines, response alignment >90%, hallucinations -30% (cv.md L25-26) |
| API integrations + service-oriented architectures | FastAPI/Flask packaging, Docker, REST inference services (cv.md L28) |
| Strong coding (Python, Node.js, JavaScript, TypeScript, React) | Python, FastAPI, TypeScript, React in Skills (cv.md L12); Manga Lens (TypeScript Manifest V3 + service workers) (cv.md L60); Dream Decoder (FastAPI + React/TS/Vite/Tailwind) (cv.md L66) |
| Bonus: build product features that incorporate LLMs | Manga Lens shipped on Chrome Web Store with 4 vision providers (cv.md L60); Dream Decoder multimodal pipeline shipped (cv.md L66) |
| Bonus: cloud platforms (GCP) | AWS/cloud-ready in Skills (cv.md L17) — GCP not direct but transferable |

**Gaps:**
1. **Multi-language coding (Go, Java)** — none. Mitigate: emphasize Python + TypeScript depth + cross-stack delivery (Manga Lens TS, Dream Decoder React/FastAPI).
2. **Coding-assistant / developer-tools domain** — adjacent only (Manga Lens browser extension). Mitigate: frame Manga Lens as a "developer-grade product extension shipped end-to-end" and Augment's Context Engine as analogous to RAG over a large corpus (Deepak's RAG over clinical knowledge ≈ RAG over codebase).
3. **GCP exposure** — limited. Mitigate: AWS + Docker proficiency translates; emphasize "cloud-ready deployment" language from cv.md.

## C) Nivel y Estrategia

JD level: Mid IC ("Applied AI Engineer", solid coding + integration). Deepak's natural level for Applied AI: mid-IC with 2.5+ years AI/LLM in production.

**Plan "vender mid sin mentir":**
- Lead with "shipped LLM products end-to-end" (Manga Lens Chrome Web Store + healthcare RAG in production).
- Frame healthcare RAG as a "Context Engine over clinical documents" — same pattern as Augment's "Context Engine over the repo".
- Quantify: ~35% retrieval precision, >30% hallucination reduction, ~30% post-deploy defect reduction (cv.md L25-30).

**Si me downlevelan:**
- Acceptable if comp ≥ Bay Area mid-IC (~$170-220k base). 6-month review for promo to Senior.

## D) Comp y Demanda

| Datapoint | Source / Note |
|---|---|
| Augment Code total comp band (Mid IC, Bay Area) | Levels.fyi has limited Augment data (still pre-IPO, Series-funded); peer band: Anthropic E4 ~$295k, OpenAI mid ~$320k, Google L4 ~$235k. Augment likely $180-260k base + equity. |
| Demand trend | AI coding assistants (Cursor, Codeium, Augment, Copilot) all hiring aggressively in 2026 — "Applied AI Engineer" titles are dense. |
| Posting freshness | Updated 2026-03-17 (~6 weeks old) — within healthy hiring window. |
| Sponsorship | Augment is a US Bay Area startup — F-1 OPT typically OK initially; long-term H-1B sponsorship unconfirmed. **Verify in screen.** |

No invented comp; ranges drawn from peer bands.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare RAG framing | Add "Context Engine for code/docs" framing — RAG + grounding + eval | Aligns with Augment's product narrative |
| 2 | Skills order | LLM/GenAI mid-list | Promote LLM application development + prompt engineering + evals to top | JD lists prompt eng + LLM reliability as top qualifications |
| 3 | Experience bullets | "RAG for clinical knowledge retrieval" | Add "Context-engine pattern over domain corpora" parenthetical | Speaks to Augment's vocabulary directly |
| 4 | Projects | Manga Lens described as translation tool | Reframe as "multi-provider LLM product shipped to Chrome Web Store with per-provider failure isolation" | Demonstrates integration + reliability mindset |
| 5 | Competencies | Generic | Add "Prompt Engineering", "LLM Reliability", "Eval Harnesses" | Matches JD top qualifications |

LinkedIn: Add "Applied AI Engineer | LLM features in production | RAG, agentic, eval pipelines" to headline; pin Manga Lens + healthcare RAG case study.

## F) Plan de Entrevistas

| # | JD requirement | Story (STAR+R) | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | LLM reliability + eval | Healthcare RAG eval pipeline | Production clinical knowledge retrieval needed >90% grounded answers | Build evaluation harness + grounding rules | Recursive semantic chunking + retrieval scoring + alignment-against-source eval | ~35% retrieval precision, >90% alignment, >30% irrelevant retrieval reduction | Lesson: eval-first design beats prompt-first; build the eval harness before tuning the prompt |
| 2 | Prompt engineering for product features | Manga Lens multi-provider | 4 vision provider APIs (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama) each with different payload constraints | Single product UX, per-provider failure isolation | Per-provider payload handler (WebP for cloud, JPEG for Ollama to avoid CUDA crash); multi-section capture w/ coordinate remap | Shipped to Chrome Web Store; 29 sites supported; 7-day translation cache | Per-provider abstraction is a hidden requirement of multi-provider LLM products |
| 3 | Integration into existing product | RAG + FastAPI + Docker shipping | Healthcare team needed grounded chat over EHR + policy docs | End-to-end inference service | Built FastAPI inference layer + Docker packaging + structured logging + load simulation | ~30% post-deploy defect reduction | Logging/observability up-front saves 10x debug time later |
| 4 | Iterate on prompts to improve LLM reliability | Agentic healthcare claims | Multi-step workflow with cascading hallucinations | Agent decomposition + schema-validated JSON contracts between agents | Per-stage validation; explicit grounding rules; audit-ready reasoning traces | Stability +25%, hallucinations -30% | Schema contracts between LLM steps prevent cascading drift; treat each agent step as a typed function |
| 5 | API integrations + service-oriented arch | Dream Decoder multimodal | Multi-API multimodal pipeline (Perplexity Sonar + Replicate) | Coordinate calls + intermediate prompt layer | Intermediate structured prompt transformation; first-pass success +25-30%; alignment +30% | Production multimodal app with reliable handoffs | Always insert a structured intermediate layer between LLM stages — naive direct prompt orchestration breaks under variance |
| 6 | Stay current with LLM tooling | Manga Lens + Dream Decoder + Pixel Synthesis | Three independent LLM products in 12 months | Chrome ext, FastAPI app, generative pipeline | Shipped Manga Lens to store; Dream Decoder live; Pixel Synthesis ongoing | Personal portfolio of shipped multi-provider LLM products | Building pulls in tooling faster than reading; ship-first habit |

**Story Bank:** Append "Context-Engine RAG over clinical knowledge" + "Per-provider abstraction in Manga Lens" + "Schema contracts between agents" to `interview-prep/story-bank.md`.

**Case study to lead with:** Manga Lens (shipped, public Chrome Web Store) — demonstrates Applied AI Engineer mindset (multi-provider integration, failure isolation, end-to-end ownership).

**Red-flag questions:**
- "Why on-site Palo Alto?" → "I want to be in the room when an early-stage product is shipping fast; relocation is OK if the role and comp work."
- "Why a healthcare background?" → "Healthcare is the hardest LLM domain (HIPAA + grounding + evals); the discipline transfers directly to a coding assistant where reliability matters."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Updated 2026-03-17 (~6 weeks); active on Greenhouse API + accessible board | Positive |
| Apply button active | Greenhouse API returns full payload — Apply route active | Positive |
| Tech specificity | Names Python/Go/Node/JS/TS/React/Java + OpenAI/Claude/Gemini + GCP | Positive |
| Realistic requirements | Mid-IC band, no PhD-gating, no contradiction between title and reqs | Positive |
| Company hiring signals | Augment Code is well-funded (Lightspeed, Sutter Hill, ICONIQ Series funding announced 2024) — "Backed by top-tier investors" matches reality | Positive |
| Layoffs | No public layoff news | Positive |
| Reposting | Not seen in scan-history before | Neutral |
| Salary transparency | Comp band omitted (CA jurisdiction usually requires range — minor concern) | Concerning |

**Context Notes:** California salary disclosure law (SB 1162) generally requires comp ranges for postings. Absence is a minor red flag — verify with recruiter.

## H) Draft Application Answers

(Score 3.9 < 4.5 — H block not auto-generated. If applying: tailor cover letter + one paragraph on "Context Engine analogy" between Deepak's healthcare RAG and Augment's repo-aware assistant.)

---

## Keywords extraídas

Applied AI Engineer, LLM, prompt engineering, OpenAI, Claude, Gemini, Context Engine, code understanding, RAG, agentic, Python, Go, Node.js, TypeScript, React, Java, API integrations, GCP, prompt design, system integration, AI reliability, eval pipelines, structured outputs, developer experience, production-grade.
