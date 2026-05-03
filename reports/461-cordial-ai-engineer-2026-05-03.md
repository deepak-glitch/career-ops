# Evaluación: Cordial — Applied AI Engineer (mid)

**Fecha:** 2026-05-03
**Arquetipo:** Applied AI / LLM Engineer (martech LLM productionization)
**Score:** 3.3/5
**URL:** https://himalayas.app/companies/cordial/jobs/ai-engineer
**Legitimacy:** High Confidence
**Location:** Remote — US
**PDF:** output/2026-05-03/cv-deepak-mallampati-cordial-ai-engineer-2026-05-03.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (martech / messaging platform) |
| Domain | Marketing-tech messaging platform — LLM-powered features in production |
| Function | Build — primary contributor to AI capabilities within Cordial platform |
| Seniority | Mid (Himalayas labels Mid-level; canonical Greenhouse posting boards.greenhouse.io/cordial81/jobs/8301588002) |
| Remote | Remote — US |
| Team size | Cross-functional w/ product + ML; not specifically disclosed |
| TL;DR | Mid-level Applied AI Engineer at Cordial messaging platform — design and productize LLM-powered marketing AI features; $140-160K base. |

## B) Match con CV

| Requisito JD | Match en CV | Evidencia |
|--------------|-------------|-----------|
| LLM integration into production applications | ✅ Strong | Healthcare RAG production; Manga Lens 4-provider LLM; Agentic Claims |
| AI strategy + design + productization | ✅ Strong | Productionized hierarchical summarization (Suvidha) + RAG (Progress) |
| Massive datasets autonomy | ⚠️ Healthcare data analog | Patient no-show risk on real clinical data |
| Expert sounding board for LLM approaches | ✅ Cross-team collaborator | Progress Solutions cross-team API design |
| Python (implied) | ✅ Core | All projects |
| Agent / RAG / eval pipelines | ✅ Strong | Multi-agent claims + retrieval evals |
| Production reliability | ✅ ~30% defect reduction | Progress Solutions ML/LLM packaging |
| Mid-level (~3y experience) | ⚠️ ~2.5y | Slight gap |

**Gaps:**
1. **Marketing/martech domain context** — adjacent but not direct; CV emphasizes healthcare. Mitigation: lead with regulated-domain → cross-domain framing.
2. **Years of experience** — mid implies 3-5y; Deepak has 2.5y. Mitigation: lead w/ MS+SE combined ~3y.
3. **Visa sponsorship** — not explicitly stated; Cordial is US-based startup (San Diego HQ + Remote-US). F-1 OPT not blocked but ask explicitly on screen.

## C) Nivel y Estrategia

JD targets mid-level IC; Deepak's natural band fits. Sell the LLM-productionization angle (FastAPI services, Docker, CI/CD, ~30% defect reduction) — directly answers the "primary contributor to AI capabilities" framing.

If downleveled: ask for $140K+ base (lower end of disclosed range).

## D) Comp y Demanda

JD-adjacent posting (canonical) discloses $140-160K base for Applied AI Engineer (mid). Comparable Remote-US Applied AI Engineer roles at martech companies: $130-180K base + equity (Levels.fyi). Cordial is Series B+ messaging-platform company (San Diego). Demand for mid-level Applied AI Engineers at martech is moderate-high in 2026.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare-RAG framing | Pivot to "Applied AI engineer w/ production LLM features in regulated platforms — translatable to martech" | Reframe vertical |
| 2 | Skills (LLM) | LangChain emphasis | Promote "OpenAI/Anthropic LLM integration + RAG + agentic workflows + FastAPI/Docker" | Stack 1:1 |
| 3 | Experience bullets | Defect reduction is bullet 4 | Promote "Productized LLM features at scale w/ FastAPI/Docker + structured logging" to bullet 1 | Direct match |
| 4 | Projects | Manga Lens has multi-provider LLM | Add line "multi-provider LLM orchestration in production w/ caching" | Signals real-world LLM API integration |
| 5 | Footer | Standard | "US-based, F-1 OPT, open to sponsorship" + "Remote-US" | Match JD's Remote-US |

## F) Plan de Entrevistas

| # | Requisito JD | STAR+R | S | T | A | R | Reflection |
|---|--------------|--------|---|---|---|---|------------|
| 1 | LLM integration in production | Healthcare RAG | Need to ground LLM responses on clinical content | Build production RAG | Hybrid retrieval + reranking + grounding controls | ~35% retrieval precision gain; >90% grounding alignment | Production LLM means evals + grounding before prompt engineering |
| 2 | Multi-provider LLM | Manga Lens | Real-time browser translation w/ 4 LLMs | Provider-agnostic UX | Per-provider payload encoding (WebP cloud, JPEG Ollama) + 7-day cache | Shipped to Chrome Web Store | Provider-agnostic abstractions must be honest about capability deltas |
| 3 | Agentic workflows | Agentic Healthcare Claims | Multi-agent claims pipeline | Prevent cascading hallucinations | JSON schema contracts between agents + RAG-grounded validation | Audit-ready reasoning traces | Schema validation between agents is the cheapest hallucination defense |
| 4 | Reliability / observability | Progress Solutions ML/LLM packaging | Multi-team ML/LLM behind APIs | Deploy under regulated constraints | FastAPI/Flask + Docker + structured logging + load simulation | ~30% defect reduction post-deploy | Logging schema decisions made at packaging time pay off 5x in incident response |
| 5 | Cross-functional collaboration | Suvidha video summarization | Hierarchical summaries needed by non-tech staff | Production-grade pipeline + UI | Built Flask API + lightweight UI; iterated w/ non-technical reviewers | 60-70% review time saved | Treating non-technical staff as the real customer changed the API contract |
| 6 | Massive datasets / autonomy | Patient no-show risk model | Real clinical data + class imbalance | Build risk-stratification model | XGBoost + balanced-weight loss + threshold optimization | 15-20% recall gains on high-risk categories | Class-imbalance discipline lets ML win where rules fail |

**Case study:** Healthcare RAG retrieval-precision gains — directly translatable to martech message-personalization grounding.

**Red-flag questions:**
- "Why martech after healthcare?" → "Healthcare taught me that the real bottleneck is grounding LLMs on user-specific context — martech is exactly that pattern at consumer scale."
- "Sponsorship?" → "I'm US-based on F-1 OPT; happy to walk through timeline early."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Himalayas + Greenhouse canonical (boards.greenhouse.io/cordial81/jobs/8301588002) — both active | Positive |
| Description quality | Specific framing (primary contributor, AI capabilities, sounding board), salary disclosed via canonical | Positive |
| Company signals | Cordial is real Series B+ messaging-platform company (San Diego, ex-Sailthru/Iterable competitors) | Positive |
| Reposting | First time as Himalayas in scan-history; canonical Greenhouse listed earlier | Positive |
| Role market context | Mid-level Applied AI at martech is high-demand 2026 | Positive |

**Context Notes:** Himalayas may be syndicating the canonical Greenhouse posting; corroborated via salary band ($140-160K mid). Senior version exists at boards.greenhouse.io/cordial81/jobs/8483382002 ($180-200K) — confirm w/ Cordial recruiter to ensure mid not Senior at screen time.

---

## Keywords extraídas

Applied AI Engineer, LLM integration, AI strategy, productization, RAG, agentic workflows, evaluation pipelines, Python, FastAPI, Docker, OpenAI, Anthropic, martech, messaging platform, mid-level, Remote-US
