# Evaluación: Dex — Founding Engineer (new grads ok)

**Fecha:** 2026-05-01
**Arquetipo:** Agentic / Automation + AI Solutions / Forward Deployed Engineer (hybrid)
**Score:** 3.7/5
**URL:** https://www.workatastartup.com/jobs/76656
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — On-site (likely 5d/wk for founding role)
**PDF:** output/2026-05-01/cv-deepak-mallampati-dex-founding-engineer-2026-05-01.pdf
**Verification:** unconfirmed (batch mode — WebFetch + YC company page corroboration)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Agentic / Automation + Forward Deployed (founding) |
| Domain | Browser-native AI / agentic action layer |
| Function | Build (founding engineer, full-stack agent infra) |
| Seniority | Any — explicit "new grads OK" |
| Remote | On-site SF (founding role, in-person bias) |
| Team size | 2 founders (Kevin Gu + Regina Lin) + 7-figure backing, YC W25 |
| TL;DR | YC W25 building "AI Coworker in Chrome" — third interaction layer between user, browser, and personal workflows. Founding engineer owns memory stores, agent planning, and browser-native infra. Explicit new-grad friendly; Python/React/TS stack 1:1 with Deepak's portfolio. SF on-site is the binding constraint for F-1 OPT; founding-stage scope ambiguity is the lifestyle red flag. |

## B) Match con CV

| JD requirement | CV evidence | Strength |
|----------------|-------------|----------|
| Core agent components: memory, context compression, planning, tool use | **Agentic Healthcare Claims Processing** — multi-agent pipeline with schema-validated JSON contracts; >30% hallucination reduction | Strong |
| React/Next.js + TypeScript expert | **Manga Lens** (TS, Manifest V3, content scripts) + **Dream Decoder** (React/TypeScript/Vite) | Strong |
| Python | Healthcare RAG, agentic LLM workflows, FastAPI/Flask packaging | Strong |
| Inter-agent protocols / planning / tool use | Healthcare Claims agents; Dream Decoder structured prompt transformation | Strong |
| Real-time UI observation systems | Manga Lens `captureVisibleTab` + viewport-slice screenshots + coordinate remapping | Strong |
| Browser internals (Manifest V3, content scripts, service workers) | Manga Lens shipped to Chrome Web Store with all of these | Strong |
| AI/ML infrastructure or agentic systems experience | Healthcare Claims + Pixel Character LoRA agent orchestrator | Strong |
| Searchable self-updating memory stores | RAG + vector retrieval at Progress Solutions (~35% precision gain) | Strong |
| Rapid prototyping → production | Manga Lens shipped + FastAPI/Docker packaging at Progress Solutions | Strong |
| Voice/keyboard/mouse/DOM event handling | Partial — Manga Lens DOM handling but no voice/keyboard agent experience | Adjacent |

**Gaps:**
- **Voice agent experience** — Mitigation: Position as "agentic + DOM observation" experience adjacent; the role values browser internals more than voice specifically. Soft.
- **High-perf state management at browser-native scale** — Mitigation: Cite Manga Lens cache + per-domain selector configs. Soft.
- **SF in-person 5d/wk founding lifestyle** — Hard practical: F-1 OPT relocation cost + founding-stage hours.

## C) Nivel y Estrategia

**Detected level:** Founding (Any seniority, new grads explicitly OK)
**Candidate level for archetype:** Junior-Mid (2.5 yrs)

**Sell-up plan:**
- Lead with Manga Lens (shipped to Chrome Web Store) — real browser-native AI product, not a class project
- Healthcare Claims agentic system → "the agentic discipline maps 1:1 to your action-graph + memory architecture"
- Dream Decoder structured prompt transformation → "I've already built intermediate layers between user intent and AI output"

**Downlevel plan:** N/A — already explicitly new-grad friendly. Optimize comp position toward $130-180K + 0.5-1% equity range.

## D) Comp y Demanda

| Dimension | Value | Source |
|-----------|-------|--------|
| Posted range | $130K - $250K | Y Combinator company page |
| Equity | 0.50% - 2.00% | Y Combinator company page |
| Market for SF founding eng (new grad — early career) | $140-200K base + 0.5-2% equity typical | Levels.fyi / Glassdoor SF founding eng |
| Demand | High — agentic browser AI (Anthropic Computer Use, Adept, Imbue) is a hot segment | Industry |

Comp is competitive for SF founding-stage. Equity floor (0.5%) is modest for founding eng but reasonable post-W25 with 7-figure raise.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer (2.5+ yrs) building healthcare RAG + agentic LLM workflows" | "Applied AI engineer building agentic systems and shipped browser-native AI products (Manga Lens, Chrome Web Store) — Python/TS/React full-stack with production agentic discipline" | Mirror Dex's "browser-native AI" + agentic framing |
| 2 | Lead bullet | RAG + 35% precision | Lead with Manga Lens + Healthcare Claims agentic pipeline | Match Dex's hiring story |
| 3 | Skills order | LLM/GenAI first | Promote TypeScript, React/Next.js, browser internals to top | Match JD priority |
| 4 | Manga Lens project | Standard summary | Add explicit mention of Manifest V3 + service workers + content scripts + captureVisibleTab | Browser internals signal |
| 5 | Healthcare Claims | Standard summary | Reframe as "multi-agent action graph with JSON contracts" | Match Dex's planning + tool use language |

## F) Plan de Entrevistas

| # | JD requisite | STAR+R story | S | T | A | R | Reflection |
|---|--------------|--------------|---|---|---|---|------------|
| 1 | Browser-native AI | Manga Lens — Chrome Web Store ship | Comic readers want translation but tab-switch breaks immersion | Build inline AI translation with cross-provider routing | Manifest V3 + content scripts + captureVisibleTab + viewport slicing for tall webtoons | Shipped to Chrome Web Store with 4 vision providers + 7-day cache | Per-provider payload tuning (WebP for cloud, JPEG for Ollama) is the kind of detail that separates ships from prototypes |
| 2 | Agentic action systems | Healthcare Claims pipeline | Claim review queues at scale produce hallucinated policy citations | Build multi-agent pipeline with audit-grade traceability | Schema-validated JSON contracts between Intake → Validation → Consistency → Duplicate → Risk Scoring agents | >30% hallucination reduction; explainable risk scoring with reasoning traces | Schema contracts at agent boundaries are cheaper than retraining hallucinated agents |
| 3 | Memory + retrieval | Healthcare RAG at Progress | Clinical knowledge retrieval pulls 30%+ irrelevant context | Build semantic retrieval with grounding | Recursive semantic chunking + transformer embeddings + grounding rules | ~35% precision gain, >90% retrieval-grounded alignment | Chunking strategy compounds with embedding quality — both must be tuned together |
| 4 | Real-time UI observation | Manga Lens panel capture | Tall webtoon panels exceed viewport; one screenshot misses content | Build slice-and-stitch screenshot pipeline | Viewport-slice screenshots + coordinate remapping + dedup | Single capture handles arbitrarily tall panels with no content loss | Coordinate-space invariants are easy to break and hard to test — they need explicit invariant assertions |
| 5 | Rapid prototyping → production | Dream Decoder | Multi-modal AI workflows tend to fail at prompt-translation boundaries | Add structured prompt transformation layer | Intermediate prompt-shaping API between user intent and image generation | ~30% contextual alignment + ~25-30% first-pass image success gain | Naïve prompt chaining is the default failure mode; intermediate structured layers pay for themselves |
| 6 | Python expertise | FastAPI/Flask packaging | Healthcare ML inference needs production observability | Wrap models in REST APIs with Docker + structured logging | FastAPI/Flask + Docker + load simulation + structured logs | ~30% post-deploy defect reduction | Logging is the bottleneck for debugging non-deterministic LLM outputs |

**Case study to present:** Manga Lens (most directly maps to "agentic browser AI"). Have screenshots + Chrome Web Store link ready.

**Red-flag prep:**
- "Why are you interested in browser-native AI vs. healthcare?" → "Browser is the universal interface; my agentic discipline transfers directly. Manga Lens shipped because I wanted to prove I could ship browser AI to consumers — Dex is that thesis at agent-orchestrator scale."
- "Are you OK with founding-stage hours?" → Honest; OK with 50-60h/wk; clarify SF relocation timing if asked.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | YC W25 batch (live as of 2026-04-27 retry → today still on YC company jobs page) | Positive |
| Apply control visible | YC WaaS standard apply flow + direct YC company page link | Positive |
| Tech specificity in JD | Names exact stack (React/Next.js, TypeScript, Python, browser internals, NLP) + concrete responsibilities (memory stores, planning, real-time UI) | Positive |
| Requirements realism | "Any seniority" + "new grads OK" + concrete tech | Positive |
| Company hiring signals | YC W25 + 7-figure raise + 2 founders actively hiring + LinkedIn presence | Positive |
| Reposting pattern | First-time evaluation, no prior repost in scan-history | Neutral |
| Salary transparency | $130-250K + 0.5-2% equity disclosed | Positive |
| Role-company fit | Founding engineer at 2-person YC W25 = canonical role | Positive |

**Context Notes:** YC W25 cohort published Q1 2025; 12+ months of runway is typical. Founding-stage roles legitimately stay open until "right fit" — extended posting age is not a ghost signal here.

## H) Draft Application Answers

(Score 3.7 < 4.5 — skipping H per oferta.md rule)

---

## Keywords extraídas

agentic AI, browser-native AI, Chrome extension, memory stores, context compression, planning, tool use, React, Next.js, TypeScript, Python, Manifest V3, content scripts, real-time UI observation, NLP, founding engineer, AI Coworker, action graph, browser internals
