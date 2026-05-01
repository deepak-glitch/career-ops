# Evaluación: Anthropic — Applied AI Engineer, Beneficial Deployments

**Fecha:** 2026-05-01
**Arquetipo:** Applied AI / LLM Engineer (+ AI Solutions / Forward Deployed)
**Score:** 4.0/5
**URL:** https://job-boards.greenhouse.io/anthropic/jobs/5068226008
**Legitimacy:** High Confidence
**Location:** San Francisco, CA or New York City, NY — Hybrid (≥25% in-office) + occasional travel to customer sites
**PDF:** output/2026-05-01/cv-deepak-mallampati-anthropic-beneficial-2026-05-01.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | Applied AI / LLM Engineer (mission-driven) + Forward Deployed flavor |
| Domain | LLM applications, agent architectures, evals, MCP, public-goods AI |
| Function | Build + consult — partner with mission-driven orgs (ed-tech, healthcare, nonprofits, science) and ship infra/tooling for the ecosystem |
| Seniority | Mid-Senior (4+ yrs production LLM-app experience) |
| Remote | Hybrid — ≥25% on-site SF or NYC + occasional customer-site travel |
| Team size | Beneficial Deployments unit (small; embedded with technical founders) |
| TL;DR | Anthropic's hands-on Applied AI role for shipping LLM products inside mission-driven orgs and turning the patterns into reusable public-good infra. |

## B) Match con CV

| Requirement | CV evidence | Fit |
|---|---|---|
| Production LLM applications at scale | RAG + agentic LLM workflows in healthcare (cv.md L25-26); >90% retrieval-grounded alignment | Strong |
| Prompting + context engineering | Recursive semantic chunking, structured outputs, grounding rules (cv.md L25-26) | Strong |
| Agent architectures + evals | Agentic Healthcare Claims pipeline w/ schema-validated JSON between agents + audit-ready reasoning traces (cv.md L72) | Strong |
| Mission-driven sectors (healthcare, ed-tech, nonprofits, science) | Suvidha Foundation (nonprofit video summarization, cv.md L42-47); Progress Solutions (HIPAA-conscious healthcare, cv.md L23-30) | Strong |
| Track record shipping with credibility for technical founders | Manga Lens shipped on Chrome Web Store with 4 vision providers (cv.md L59-60); Dream Decoder full-stack (cv.md L65-66) | Strong |
| Mentoring / teaching | Student Manager, Kent State (150+ students; onboarding ramp-down ~20%, cv.md L52-55) | Adjacent |
| Cost optimization for AI | Multi-provider routing in Manga Lens (Claude/GPT/Ollama); not explicitly cost-quantified | Adjacent |
| MCP / Agent Skills | Mentioned in profile as an emerging stack; Continued JD also referenced MCP — Deepak has working knowledge | Partial |

**Gaps:**
- 4+ yrs production LLM experience floor vs Deepak's 2.5+ yrs (cv.md L8). Mitigation: lead with shipping velocity (Manga Lens shipped, Dream Decoder shipped) + measurable LLM gains (~35% retrieval precision, >30% hallucination reduction); position as "compressed years" via a strong portfolio over more years on a single team.
- Senior client-handling at Anthropic-scale customers — Deepak's customer exposure has been internal stakeholders + nonprofits, not technical founders at venture-scale. Mitigation: ed-tech/healthcare bridge framing using Suvidha + Progress Solutions stories.
- Geography — SF/NYC hybrid + 25% on-site is a real cost given Kent, OH base. Mitigation: confirm Anthropic's relo support; present hybrid willingness as a positive signal in cover letter.

## C) Nivel y Estrategia

- JD level: Mid-Senior with 4+ yrs production LLM. Deepak's natural level for the archetype is Mid (2.5 yrs of intense LLM production work).
- Sell-strong-without-overstating script: "Two and a half years of compressed LLM-shipping in healthcare — the metrics that matter (retrieval precision, hallucination reduction, post-deploy defect cuts) are live in production today, and I've shipped public artifacts (Manga Lens on the Chrome Web Store, Dream Decoder, agentic claims-fraud pipeline) outside the day job. I'd be your fastest-ramping Applied AI hire."
- If downleveled: accept Applied AI Engineer (no I/II prefix is fine), negotiate a 6-month review to either Senior or AAE II w/ explicit promotion criteria. Current $280-300K band is well above market entry — even at the lower bound the package is a clear win.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| JD | $280,000-$300,000 USD | Above-market mid-senior Applied AI; SF/NYC weighted |
| Levels.fyi (Anthropic Eng Mid) | ~$280K-$420K base + RSU | Post-Series-D refresh; AAE typically L4-L5 |
| Glassdoor (Anthropic Applied AI) | ~$250K-$330K base | n=small but consistent |
| Market (Mid Applied AI US) | ~$180K-$240K base | Anthropic premium ~30-40% over median |

Demand for AAE roles at frontier labs is explosive but candidate supply is also high (top of funnel competitive). Anthropic specifically values production LLM shipping over research credentials — favorable for Deepak.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare-focused RAG / agentic / ML | Mission-driven LLM systems engineer w/ healthcare RAG + agentic + evals; ships public artifacts | Anthropic Beneficial Deployments specifically values mission orgs |
| 2 | Bullet 1 (Progress Solutions) | RAG retrieval ~35% gain | Add: "evaluation pipeline with grounded-response alignment >90% used to gate releases" | Echo their evals framework language |
| 3 | Bullet 2 (Progress Solutions) | Agentic LLM workflows | Surface "schema-contract" agent design + tool-discipline phrasing | MCP / Agent Skills resonance |
| 4 | Manga Lens project | Generic full-stack description | Reframe as "shipped to Chrome Web Store; multi-provider Claude routing; cost-aware payload selection" | Mirrors "cost optimization for AI systems" line in JD |
| 5 | Healthcare Claims | Schema-validated JSON | Add: "audit-ready reasoning traces; HITL escalation envelope" | Anthropic safety/HITL culture |

LinkedIn: surface "Beneficial Deployments-style" framing in headline ("Applied AI engineer, healthcare RAG + agentic workflows"); pin Manga Lens + healthcare claims; turn on Open-to-Work for Applied AI / LLM Engineer in SF/NYC.

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Production LLM apps + grounding | Healthcare RAG retrieval | Clinical knowledge retrieval was hallucinating | Raise grounding + retrieval precision | Recursive semantic chunking + transformer embeddings + retrieval-grounded eval | ~35% retrieval precision gain, >90% alignment | Real eval gates beat "vibes"; would now also wire LLM-as-judge w/ human spot-checks |
| 2 | Agent architectures + evals | Agentic claims pipeline | Multi-agent claim processing was cascading errors | Stop agent-cascade hallucinations | Schema-validated JSON contracts between agents + RAG-grounded CPT/ICD validation | Audit-ready traces; cross-stage error containment | JSON schemas as agent guardrails are underrated — a contract is cheaper than an eval |
| 3 | Shipping with credibility | Manga Lens Chrome Extension | Wanted to ship a public artifact w/o backend cost | Real-time AI manga translation in-browser | Manifest V3 + 4-provider vision routing + 7-day cache + per-domain selectors | Live on Chrome Web Store; covers 29 sites | Shipping > polish; the WebP-vs-JPEG payload bug taught me production LLM ops needs provider-specific quirk handling |
| 4 | Mission-driven (nonprofit) | Suvidha Foundation video summarization | Nonprofit had 5,000+ session recordings unreviewable | 60-70% reduction in manual review | Transformer hierarchical summarization + timestamp-aligned clips + Flask UI for non-technical staff | ~85% highlight alignment vs human curators; deployed | Building for non-technical operators forces simpler UX — same lesson applies to founders at small mission orgs |
| 5 | HIPAA / safety-conscious | Progress Solutions HIPAA governance | Patient PHI in EHR pipelines | De-identification + audit trails | Data lineage docs + evaluation audit trails + system-limitation docs to stakeholders | ~30% post-deploy defect reduction | Documenting limitations is the unsung half of safety engineering |
| 6 | Cost-aware ops | Manga Lens multi-provider routing | Latency vs cost tradeoff across 4 providers | Provider-aware payload optimization | WebP for cloud (Claude/GPT), JPEG for local Ollama to avoid CUDA crash | Avoided GPU OOM; reduced cloud calls via 7-day cache | Cost = correctness × latency × $; treating one of those as fixed always burns the other two |
| 7 | Discovery / mentor-style work | Care engagement scoring | High-risk patients missed | Improve recall on high-risk categories | Class weighting + stratified sampling + threshold calibration | 15-20% recall gain, precision >90% | Talking with care managers BEFORE modeling reframed the loss function — discovery beats more layers |
| 8 | Public goods / reusable infra | Dream Decoder coordinated multimodal API | Naive prompt-to-image had ~30% miss rate | Improve first-pass success | Intermediate structured prompt-transformation layer between LLM and image API | ~25-30% first-pass image success gain, ~30% contextual alignment | A small intermediate layer is often higher leverage than fine-tuning the endpoints |

**Story bank update:** Append stories #1, #2, #3, #6 to `interview-prep/story-bank.md` (the others are already there).

**Red flag prep:**
- "Why are you still 'Trainee' titled at Progress Solutions after 9 months?" → Trainee is the entry rung in their structure; the work is full Jr. AI/ML Engineer scope; this hire would be the natural promotion.
- "Only 2.5 yrs but 4+ yrs required?" → "I've shipped more LLM production code in 2.5 years than many 4-yr CRUD-engineer paths; the public artifacts (Manga Lens, Dream Decoder) are independent of the day job and demonstrate continued shipping velocity."

## G) Posting Legitimacy

**Assessment: High Confidence.**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Anthropic public board, Apply CTA active | Positive |
| Description quality | Names MCP, Agent Skills, evaluation frameworks, specific mission sectors; includes salary band | Positive |
| Salary transparency | $280-300K USD published | Positive |
| Visa sponsorship language | Explicit "we do sponsor visas" + best-effort qualifier | Positive |
| Reposting / scan-history | First time in scan-history; not a repeated ghost | Positive |
| Layoffs / freezes | Anthropic on hiring spree post-Series F; no recent layoff news | Positive |
| Role specificity | Beneficial Deployments is a publicly-named team (Anthropic blog refs); not generic "AI Engineer" boilerplate | Positive |

**Context:** Anthropic does run high-funnel processes — assume 4-6 interview loop. The "we won't sponsor every role" hedge is honest, not a red flag.

---

## Keywords extraídas

Applied AI Engineer · Beneficial Deployments · LLM applications · production LLM · prompting · context engineering · agent architectures · evaluation frameworks · MCP · Model Context Protocol · Agent Skills · cost optimization · mission-driven · ed-tech · healthcare AI · nonprofits · scientific research · technical founders · public goods · scalable tooling · ecosystem · evals · grounding · structured outputs · agentic workflows
