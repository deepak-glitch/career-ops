# Evaluación: Karumi — Founding Forward Deployed Engineer (FDE)

**Fecha:** 2026-05-22
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Agentic (browser-agent demos)
**Score:** 3.9/5
**URL:** https://www.ycombinator.com/companies/karumi/jobs/mzQuJ9K-founding-forward-deployed-engineer-fde
**Legitimacy:** High Confidence
**Location:** New York, NY (primary); SF Bay Area / Madrid considered
**Region:** US
**PDF:** output/2026-05-22/cv-deepak-mallampati-karumi-founding-fde-2026-05-22.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Archetype | FDE + Agentic — deploy AI agents that run browser product demos for SaaS customers |
| Domain | Multi-language AI sales demo agents (video call + real-browser navigation) |
| Function | Configure, deploy, troubleshoot Karumi for each new customer; QA + automation glue |
| Seniority | Early-mid IC — explicit 1-3y FDE / Implementation / QA / SE bands |
| Remote | On-site (NYC primary; SF / Madrid considered, especially for relocation candidates) |
| Comp | $100-150K base + 0.50-1.00% equity + "Will sponsor" visa explicit |
| Team size | YC company, founding-engineer-tier hire |
| TL;DR | YC startup deploying multi-language browser-agent sales demos; explicit 1-3y FDE band (Deepak 2.5y in-band); explicit visa sponsorship; NYC primary but SF/Madrid open. Strong archetype 1:1 with agentic + Manga Lens browser automation portfolio. |

## B) Match con CV

| Requirement | Match | CV evidence |
|-------------|-------|-------------|
| 1-3y FDE / Implementation / QA / SE | Direct (in-band) | Deepak 2.5y total (Progress Solutions Jul 2025–Present + Emerson 11mo + Suvidha 3mo) |
| Engineering mindset + debugging + troubleshooting | Direct | Manga Lens MV3 cross-provider payload handling + WebP/JPEG CUDA-crash workaround; Pixel multi-stage SD+ControlNet debugging |
| BS/MS in CS, Engineering, or STEM | Direct | Master's degree, Kent State University (Aug 2023 – May 2025) |
| Scripting + automation + coding (Python/TS) | Direct | Python (FastAPI/Flask Progress + Dream Decoder + Pixel); TypeScript (Manga Lens MV3 + Dream Decoder Vite/React) |
| Customer-facing technical comfort | Direct | Progress Solutions stakeholder + system-limitation docs; Suvidha non-tech Flask UI; Kent State Student Manager 150+ student comms |
| Browser automation / real-browser navigation | Direct | Manga Lens captureVisibleTab + content scripts + service workers + per-domain selector configs for 29 sites |
| Attention to detail + quality-first | Direct | Manga Lens 7-day cache + dedup + narrowed host permissions + privacy policy; HIPAA governance docs at PSI |
| LLM / agentic exposure | Direct | Pixel LLM orchestrator decomposes prompts → generation tasks; Dream Decoder structured prompt-transformation layers (~30% alignment gain) |

**Gaps:**
1. **Browser-agent-for-sales-demo domain** — Soft. Mitigation: Manga Lens is a production Chrome extension shipping daily to Chrome Web Store users with similar viewport-slice + screenshot + DOM-coordinate-remap stack as Karumi's demo navigation; that's the closest direct adjacency.
2. **Real-time video-call orchestration** — Soft. Mitigation: agentic orchestration patterns from Pixel + Healthcare Claims multi-agent pipelines are transferable; Karumi explicitly says "scripting/automation OR willingness to learn".
3. **NYC relocation from Kent OH** — Hard logistic but soft preference. Mitigation: Karumi states SF/Madrid considered for relocation candidates → strong signal they pay/help with relocation; F-1 OPT "Will sponsor" explicit removes the biggest blocker.

## C) Nivel y Estrategia

- **Detected level:** Founding/early FDE (1-3y explicit). Deepak 2.5y — in-band.
- **Vender senior sin mentir:** Position Manga Lens as a *founding-engineer-grade* solo ship across MV3 + multi-provider + browser-control stack. Add Pixel LLM-orchestrator + Healthcare Claims multi-agent as agentic-orchestration proofs. Lead with "ship-rate of a founding engineer + the customer-facing stakeholder discipline of Progress Solutions".
- **Plan "si me downlevelan":** Accept at $120K + 1% equity if NYC relocation + visa sponsorship are covered; ask for 6-month performance review and clear promotion path to FDE II.
- **Comp ask:** Target $130K base + 0.75% equity (mid of band); flex on equity if relocation + visa support are explicit.

## D) Comp y Demanda

| Source | Range | Notes |
|--------|-------|-------|
| Karumi JD | $100-150K base + 0.5-1.0% equity | Explicit founding band |
| Levels.fyi YC seed/Series A FDE | $110-160K base + 0.3-1.5% equity | Typical founding-tier FDE in NYC |
| Glassdoor NYC FDE entry-mid | $115-155K base | NYC cost-of-living adjusted |
| Demand trend | Strong-rising | Forward-Deployed Engineer is the most-discussed AI role of 2026; YC is funding many similar agent-demo startups |

**WebSearch context:** YC's spring 2026 batch has 6+ AI-demo-agent startups (Karumi, Soff, Avallon, Andy AI, Distro, Saris); FDE is the canonical first-engineer hire pattern.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | Lead with: "Applied AI engineer (2.5y) who ships customer-facing agentic systems end-to-end; production browser-agent (Manga Lens, Chrome Web Store), healthcare RAG, multi-agent claims pipelines." | Karumi wants *founding* energy + customer-facing + browser-automation in one sentence |
| 2 | Hero project | Manga Lens to top of Projects — emphasize multi-provider abstraction + per-site selector configs + privacy policy | Closest 1:1 to Karumi's browser-navigation-for-demo product |
| 3 | Healthcare Claims project | Reframe as "multi-agent orchestrator with schema-validated JSON contracts — pattern transfers to demo-agent state machines" | Agentic + reliability angle |
| 4 | Bullet ordering at Progress Solutions | Move stakeholder/system-limitation docs above metrics — Karumi cares about customer comm | FDE = customer-facing |
| 5 | Skills block | Bring "browser automation, Chrome MV3, content scripts, service workers, multi-provider LLM orchestration" up | Direct JD keyword match |

## F) Plan de Entrevistas

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Browser automation + customer-facing | Manga Lens 29-site rollout | Chrome Web Store users requested 29 manga/webtoon sites with different DOM | Build per-site selector configs without losing dedup | Built JSON-driven selector schema + selector-fallback chain + narrowed host_permissions per site | 29-site coverage in one MV3 ship; zero broken-permission complaints | Selector configs are the right abstraction; should have shipped a customer-editable JSON UI earlier |
| 2 | QA + reliability for AI agents | Healthcare Claims schema-validated JSON contracts | Multi-agent pipeline was cascading hallucinations from Agent 1 to Agent 5 | Stop the cascade without slowing throughput | Introduced schema-validated JSON contracts between agents + reject + retry loops | >30% hallucination reduction; clean audit trail | Contracts > prompts for reliability; this is what FDE means for agentic |
| 3 | Adapt to customer workflows | Suvidha 5,000-video Flask deploy | Non-technical staff needed timestamped highlights on 5,000 videos | Ship something they could run without me | Built Flask + lightweight web UI + transcript pipeline | 60-70% review time reduction; ~85% highlight alignment with humans | Build the UI for the *user*, not the model — biggest lesson of my early career |
| 4 | Scripting/automation glue | Pixel LLM orchestrator | Pixel character pipeline had 4 manual stages | Compress to one prompt-driven run | LLM agent decomposes high-level prompt → generation tasks → ControlNet pose → SD + LoRA identity | Single-prompt → sprite sheet pipeline | Orchestration is the difference between a demo and a product |
| 5 | Multi-language / global rollout | Manga Lens cross-provider 4-LLM | Different LLMs handle Japanese/Korean/Chinese OCR + translation differently | Pick the right provider per page + fall back gracefully | Cross-provider abstraction layer + WebP/JPEG payload switching to avoid Ollama CUDA crash | All 4 providers shippable on the same Chrome ext | Provider abstraction now is what avoids painful rewrites later |
| 6 | Production deployment discipline | Progress Solutions FastAPI/Docker | ML models needed to ship to a HIPAA-conscious cluster | Reduce post-deploy defects | FastAPI/Flask + Docker + structured logging + load sim + de-identification | ~30% defect reduction post-deploy | Logs > hopes for production AI |

**Case study to bring:** Manga Lens — closest functional analogue to Karumi (browser agent, multi-provider, customer-shipping).

## G) Posting Legitimacy

**Assessment:** **High Confidence** — Real, active YC founding-engineer posting

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | YC company page live; posting listed in YC Spring 2026 batch directory | Positive |
| Tech specificity | JD names browser-navigation + video-call + multi-language demo product; specific 1-3y bands; specific equity bands | Positive |
| Salary transparency | $100-150K + 0.5-1.0% equity disclosed | Positive |
| Realistic requirements | 1-3y FDE/Implementation/QA is achievable, not a paper-tiger ask | Positive |
| Apply button | YC posting linking to Karumi's apply flow | Positive |
| Visa sponsorship | "Will sponsor" explicit | Positive |
| Reposting pattern | First Karumi posting in scan-history.tsv; no repost flag | Positive |
| Company hiring signals | YC-backed, founding-team hire, no layoff/freeze signals | Positive |

**Context notes:** YC founding-engineer postings can stay open until they hire the right candidate (3-6 months is normal). The 0.5-1.0% equity band is consistent with founding-engineer hire #1-#3 at a YC company.

## H) Draft Application Answers

*(Score 3.9/5 — below 4.5 threshold; H block skipped per `modes/oferta.md`. Tailored PDF still generated.)*

---

## Keywords extraídas
forward deployed engineer, founding engineer, AI agents, browser automation, real-browser navigation, multi-language, video call, SaaS, customer deployment, scripting, automation, QA, troubleshooting, attention to detail, Python, TypeScript, LLM, agentic workflows, RAG, customer-facing, will sponsor visa
