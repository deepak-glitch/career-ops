# Evaluación: Firecrawl — Forward Deployed Engineer (Integrations)

**Fecha:** 2026-04-27
**Arquetipo:** AI Solutions / Forward Deployed Engineer + AI Platform / MLOps
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/firecrawl/e1543e63-bc33-48df-a823-24c3241748ee
**Legitimacy:** High Confidence
**Location:** San Francisco, CA OR Remote (Americas, UTC-3 to UTC-10)
**PDF:** output/2026-04-27/cv-deepak-mallampati-firecrawl-fde-integrations-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | FDE (Integrations flavor) — embed with customers, ship integrations, debug live systems |
| Domain | Web crawling / data extraction APIs for AI agents (Firecrawl ecosystem) |
| Function | Customer-facing integration delivery + production hardening |
| Seniority | Mid IC (no explicit floor; "writing real code, debugging real systems") |
| Remote | SF or Remote-Americas (UTC-3 to UTC-10); F-1 OPT US-W2 viable |
| Team | Customer Engineering / Forward Deployed (small) |
| TL;DR | Embed with customers to integrate Firecrawl's web-scraping platform into their products; write real code, debug real systems, turn customer needs into shipped solutions fast. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Customer-embedded integration delivery | Suvidha Foundation video summarization deployed for non-technical staff (cv.md L47); Manga Lens 29-site selector configs (cv.md L60) |
| Write real code + debug real systems | FastAPI/Flask production services with structured logging + load sim → ~30% post-deploy defect reduction (cv.md L28) |
| Web scraping / data extraction adjacency | OpenStreetMap XML parsing → NetworkX graph (cv.md L78); Manga Lens viewport-slice screenshot pipeline with coordinate remapping & dedup (cv.md L60) |
| AI / LLM applications on top of crawled data | Healthcare RAG with semantic chunking + transformer embeddings (cv.md L25); RAG-grounded CPT/ICD validation (cv.md L72) |
| API design & integration | FastAPI + Flask REST services (cv.md L28, L47); Manga Lens 4-provider API integration (cv.md L60) |
| Fast delivery + iteration | Manga Lens shipped to Chrome Web Store independently; Dream Decoder full-stack shipped (cv.md L66) |
| TS / Python flexibility | Python primary + TypeScript MV3 service worker production-shipped (cv.md L12, L60) |

**Gaps:**
1. **Direct production web-scraping at scale** — adjacent only (NetworkX OSM, Manga Lens screenshot capture). Mitigation: cite the cross-domain pattern recognition (HTML/CSS selectors, page-state debugging) from Manga Lens; commit to ramp on Firecrawl-specific concerns (anti-bot, rate-limit, headless).
2. **Customer-embedded delivery experience** — closest analog is Progress Solutions stakeholder-facing system-limitation docs (cv.md L30) + Suvidha non-technical-staff API (cv.md L47). Mitigation: frame healthcare clinician-facing delivery as customer-facing pattern.
3. **Years floor** — Firecrawl FDEs likely expect 3+ yrs; Deepak is 2.5 yrs. Mitigation: lead with shipped products + measurable outcomes (Manga Lens live + Dream Decoder + healthcare RAG / agentic) — output not tenure.

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC; YC-funded fast-moving FDE squad expects shipping velocity over years.
- **Vender mid:** Lead with "shipped 2 production AI products independently (Manga Lens MV3 extension, Dream Decoder full-stack) + RAG/agentic systems at Progress Solutions + multi-provider AI integrations." Frame integration depth as the through-line.
- **Si downleveled:** Accept if remote-Americas + clear $160K floor; FDE work is the experience accelerant for ambitious mid engineers.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Firecrawl FDE (per JD) | $160K-$220K base (some listings $150K-$250K); equity at YC-stage upside |
| Funding / stage | YC W24; raised seed; rapid growth — Firecrawl powers many GenAI agent stacks (popular with LangChain, LlamaIndex, OpenAI Assistants) |
| Visa | Not explicit — Americas timezone tells you US-W2 is supported; recruiter confirmation needed for F-1 OPT |
| Demand trend | Web extraction infra for AI agents is one of 2025-2026's hottest API-as-a-product categories |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Forward-deployed Applied AI engineer who ships customer-facing integrations end-to-end — Python/TS, FastAPI, RAG, agentic, multi-provider AI APIs." | Mirror JD: integrations + ship-fast + customer-facing |
| 2 | Bullets | Surface Manga Lens (MV3 + multi-provider integration), Dream Decoder (TS/React + multimodal), Healthcare RAG (production deployment) | Three integration-flavored proof points |
| 3 | Skills | Move FastAPI, REST APIs, TypeScript, Docker, integrations, RAG to top | JD keyword-first |
| 4 | Projects | Manga Lens first (29-site selector engineering), Dream Decoder second, OSM Geospatial third (data extraction analog) | Integration depth visible immediately |
| 5 | Footer | "US-based, F-1 OPT — remote-Americas ready; SF-flexible" | Match Firecrawl's location model |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Integration delivery | Manga Lens 29-site selectors | Webtoon/manga sites have radically different DOMs and panel layouts | Per-domain selector configs + viewport-slice capture + coordinate remap | TS MV3 extension, 29 site configs, dedup pipeline | Live in Chrome Web Store, real users | Per-domain configs > one-size-fits-all selectors |
| 2 | Customer-embedded delivery | Healthcare RAG for clinicians | Clinicians needed grounded answers in HIPAA-conscious flows | Recursive semantic chunking + eval-first rollout + stakeholder-facing system-limit docs | RAG production with audit trail | ~35% retrieval precision gain; ~90%+ groundedness | Documenting limits builds clinician trust faster than chasing accuracy |
| 3 | Fast iteration on integrations | Dream Decoder | Naïve direct prompts produced incoherent outputs | Iterated structured-prompt transformation layer with measurable evals | Multi-vendor (Perplexity Sonar + Replicate) FastAPI pipeline | ~30% contextual alignment, ~25-30% first-pass image success | Iteration with measurable evals beats vibe-driven prompt tweaks |
| 4 | Debug real systems | FastAPI deploy at Progress | Inference services in HIPAA-conscious stack | FastAPI + Docker + structured logging + load simulation | Containerized service with observability | ~30% post-deploy defect reduction | Logging-first deploy → faster diagnosis |
| 5 | Multi-provider API surface | Manga Lens 4-provider | Each AI vendor has different payload conventions, failure modes | Per-provider isolation + WebP/JPEG payload routing | Live extension across Anthropic / OpenAI / Ollama | Zero cascade failures | Isolation > monoliths for multi-vendor systems |
| 6 | Web extraction analog | Geospatial OSM analysis | Raw OSM XML had unstructured nested topology | Parsed into NetworkX DiGraph with Haversine edge weights + Dijkstra + Louvain | 20k-node analysis pipeline | ~30% runtime reduction via subgraph scoping | Data-shape-first extraction beats brute-force parsing |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Ashby + on YC jobs board today | Positive |
| Apply button | Active on jobs.ashbyhq.com/firecrawl + YC | Positive |
| Description quality | Names specific scope (integrations into customer products); concrete deliverables (write real code, debug real systems) | Positive |
| Salary transparency | Disclosed publicly via aggregator ($160K-$220K) | Positive |
| Reposting | Multiple Firecrawl FDE listings active (Integrations + general FDE); not concerning, signals scaling | Neutral |
| Layoffs / freeze | None — Firecrawl is in active growth | Positive |
| Role market context | YC-funded API-as-a-product company with rapid customer growth — FDE is core to revenue | Positive |

**Assessment:** **High Confidence** — actively recruiting, technology-specific JD, growing company, salary disclosed, FDE role aligned with go-to-market motion.

---

## Keywords extraídas

Forward Deployed Engineer, Integrations, Firecrawl, Web Scraping, API, REST, TypeScript, Python, FastAPI, LLM, AI Agents, Customer Success, Customer-embedded Engineering, Debugging, Production Systems, Data Extraction, Crawling, Headless Browser, Remote Americas, San Francisco, YC
