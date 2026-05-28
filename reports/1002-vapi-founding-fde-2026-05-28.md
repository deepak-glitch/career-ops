# Evaluación: Vapi — Member of Technical Staff, Forward Deployed (Founding)

**Fecha:** 2026-05-28
**Arquetipo:** AI Solutions / Forward Deployed Engineer (primary) + AI Platform / LLMOps (secondary, voice-agent infra)
**Score:** 3.5/5
**URL:** https://www.ycombinator.com/companies/vapi/jobs/3GU4CIx-founding-forward-deployed-engineer
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — On-site (relocation expected for ENT deployment work)
**Region:** US
**PDF:** output/2026-05-28/cv-deepak-mallampati-vapi-founding-fde-2026-05-28.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | FDE — Founding (deploys enterprise customers onsite, builds repeatable productized integrations) |
| Domain | Voice AI / conversational agents / developer platform |
| Function | Build + deploy + iterate on ENT integrations; convert custom work into product |
| Seniority | 1+ years engineering experience (early career, but founding FDE = high autonomy) |
| Remote | On-site SF (with frequent ENT customer travel) |
| Team | Founding — direct line to Jordan Dearsley & Nikhil Gupta |
| TL;DR | YC + Khosla + Bessemer voice-agent platform (600K devs, ~5x YoY ENT ARR). Deploy NYLife/Intuit-scale customers in 30/60/90 day arcs and harden the next deploy into product. |

## B) Match con CV

| JD Requirement | CV Match | Strength |
|----------------|----------|----------|
| FDE / customer-facing delivery | "Built RAG systems for clinical knowledge retrieval"; "Packaged ML/LLM inference as FastAPI/Flask … containerized with Docker"; end-to-end delivery in healthcare | Strong proxy — not voice but enterprise productionization |
| Agentic / orchestration | "Developed agentic LLM workflows for multi-step healthcare queries with structured reasoning, tool discipline, and grounding rules" (~25% stability gain); "Agentic Healthcare Claims Processing & Fraud Risk Intelligence System" (multi-agent pipeline, schema-validated JSON contracts) | Strong |
| Startup founding mentality | "E-Farming Digital Marketplace (Founder & Full-Stack Developer)" — PHP/MySQL/Bootstrap shipped end-to-end, 80-120 active users | Moderate — true 0→1 builder signal |
| 1+ years engineering | 2.5+ years Applied AI at Progress Solutions | Strong |
| Ship product fast | "Manga Lens" Chrome extension shipped to Chrome Web Store (Manifest V3, multi-provider AI vision) | Strong proof of shipping |

**Gaps:**
1. **Voice AI / telephony stack experience** — no Twilio, SIP, WebRTC, real-time audio. *Mitigation:* lead with grounding/structured-output work on Vapi's agent reliability problem (similar to healthcare hallucination ~30% reduction); offer to prototype a small voice-agent demo against Vapi's public API as a take-home.
2. **No enterprise SaaS sales-engineering background** — never worked NYLife/Intuit-scale rollouts. *Mitigation:* frame Progress Solutions HIPAA-conscious delivery + RBAC/audit work as comparable enterprise rigor.
3. **F-1 OPT** — needs sponsorship. *Mitigation:* JD does confirm sponsorship for Founding FDE. Flag location/policy openly in app.

## C) Nivel y Estrategia

- **Nivel detectado:** Mid-IC FDE with founding-team scope. JD asks for 1+ years but the 30/60/90 plan is senior-style. Compensation ($150-300K total) is broad enough to absorb mid-to-senior.
- **Sell senior without lying:** lead with the agentic claims pipeline (multi-agent, JSON contracts, RAG grounding) — directly answers "how do we make voice agents reliable in production." Pair with FastAPI/Docker productionization to show packaging discipline.
- **If downleveled:** accept Member of Technical Staff title; negotiate 6-month review with a clear path to senior FDE; clarify equity is the dominant lever in the $150-300K range.

## D) Comp y Demanda

| Source | Data |
|--------|------|
| JD posting | $150K - $300K total (base + equity not split) |
| Levels.fyi (FDE SF 2026 median) | ~$220K base, ~$50-80K equity for mid-IC; founding roles trade base for equity |
| Demand | YC + Khosla + Bessemer; "~5x YoY ENT ARR"; voice AI category hot through 2026 (OpenAI Realtime, Sesame, ElevenLabs) |

Reasonable ask: $170K base + 0.10-0.25% equity + sponsorship, aiming mid-range of the band.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "Applied AI engineer (2.5+ years) building healthcare-focused RAG systems…" | "Applied AI engineer building production agentic + RAG systems; ships voice-grade reliability via structured outputs and grounded retrieval (~35% retrieval precision, >30% hallucination reduction)." | Mirror Vapi's voice-agent reliability language |
| 2 | Bullet ordering | RAG first, then agentic | Lead with agentic workflows + claims-processing multi-agent → emphasizes FDE productionization | Vapi's 90-day arc is "ship product that makes next deploy trivial" |
| 3 | Projects | Manga Lens, Pixel Synth, Dream Decoder | Promote "Agentic Healthcare Claims Processing" + "Manga Lens (shipped to Chrome Web Store)" to top — proves end-to-end ship discipline | Founding role = builder, not researcher |
| 4 | Skills | Long list | Compress to: Python, FastAPI, LLM agents, structured outputs, evals, Docker, observability | ATS + voice-agent infra fit |
| 5 | Footer | "Kent, OH" | "US-based (Kent, OH) — F-1 OPT, open to sponsorship; available for SF relocation" | Be explicit about SF onsite + sponsorship |

## F) Plan de Entrevistas

| # | JD Hook | Story (STAR+R) |
|---|---------|----------------|
| 1 | "Deploy a large ENT onsite (30 days)" | S: Healthcare RAG rollout. T: Ship clinical knowledge retrieval in HIPAA-conscious env. A: Recursive semantic chunking + transformer embeddings + grounded prompts. R: ~35% retrieval precision, >90% alignment. Reflection: most win came from chunking strategy, not model upgrades. |
| 2 | "Discover 2nd/3rd use-cases (60 days)" | S: Progress Solutions support ticket triage. T: Repurpose patient no-show ML for support prioritization. A: Reused features, retrained on tickets. R: 15-20% recall lift. Reflection: pattern matching across business problems beats greenfield modeling. |
| 3 | "Build product that makes next deploy trivial (90 days)" | S: Agentic claims pipeline. T: Repeatable cross-customer fraud-risk scoring. A: Schema-validated JSON contracts between agents, RAG-grounded CPT/ICD validation. R: Templated for new payer onboardings. Reflection: contracts > prompts as the abstraction. |
| 4 | Voice agent reliability | S: Healthcare agentic workflows. T: Stop hallucinated eligibility answers. A: Tool discipline + grounding rules + structured outputs. R: ~25% stability gain, >90% alignment. Reflection: grounding is the only honest fix; rerolling temperature is theater. |
| 5 | Founding mindset | S: E-Farming PHP marketplace. T: Ship 0→1 AgriTech to small farmers. A: Solo end-to-end. R: 80-120 active users. Reflection: scope discipline > feature breadth at 0→1. |
| 6 | Edge / latency | S: YOLOv8 drowsiness detection. T: Replace 2-stage CNN with unified YOLOv8. A: NMS tuning, adaptive frame skipping, sliding-window confidence. R: ~30% latency reduction, ~25% fewer false positives. Reflection: simpler model often beats stacked. |

## G) Posting Legitimacy

**Assessment:** High Confidence.

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting age | Active YC listing, no expired flag | Positive |
| Apply button | Standard Work-at-a-Startup apply flow | Positive |
| Tech specificity | Named customers (NYLife, Intuit), concrete dev metrics (600K devs, 2K/day) | Positive |
| Comp transparency | $150K-300K range stated | Positive |
| Sponsorship | Explicit "yes" | Positive |
| Reposting | YC roles refresh — no concerning pattern | Neutral |

Context: Voice AI is among the most actively funded categories of 2026; Vapi's metrics check out via TechCrunch/Information coverage.

## H) Draft Application Answers
(Score 3.5 < 4.5 threshold — skipped.)

---

## Keywords extraídas
forward deployed engineer, founding, voice AI, agentic, deployment, enterprise, customer success, FastAPI, Docker, RAG, LLM, structured outputs, evals, observability, Python, TypeScript, SF onsite, 0→1, startup, integration, productionization
