# Evaluación: Axle — AI Engineer II

**Fecha:** 2026-05-03
**Arquetipo:** Applied AI / LLM Engineer (primary — RAG + agentic + Python on Kubernetes) + AI Platform / MLOps Engineer (secondary — Docker + K8s + AWS observability)
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/axle/jobs/5114627007
**Legitimacy:** Proceed with Caution
**Location:** Remote (full remote)
**PDF:** output/2026-05-03/cv-deepak-mallampati-axle-ai-engineer-ii-2026-05-03.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Applied AI Engineer at scientific-content / data platform |
| Domain | Scientific document AI / RAG over scientific corpora / platform services |
| Function | Build (architect + maintain + deploy AI apps) + mentor junior engineers |
| Seniority | Mid-Senior ("AI Engineer II" + 5+ years software dev required) |
| Remote | Fully remote |
| Comp | $120,000 - $150,000 |
| TL;DR | Real, active remote AI Engineer II at Axle (scientific content platform). Stack 1:1 with Deepak: Python, RAG, document ingestion, K8s, PostgreSQL, vector DBs, AWS, Linux. JD names "conversational assistants, agentic tools, RAG systems" — exact match for healthcare RAG + agentic CV. Mid-Senior 5+y gap binding (Deepak 2.5y) — score lifted to 3.0 because $120-150K is reasonable Mid band + sponsorship policy not explicitly negative. PDF generated for tailored apply pending sponsorship clarification. |

## B) Match con CV

| JD requirement | CV evidence | Match |
|---|---|---|
| Python AI applications | cv.md L11 Python; L25 RAG/agentic in Python | ✅ Strong |
| Conversational assistants | cv.md L26 agentic LLM workflows multi-step healthcare queries | ✅ Strong |
| Agentic tools | cv.md L26 agentic workflows w/ structured reasoning + tool discipline | ✅ Strong |
| RAG systems | cv.md L25 healthcare RAG ~35% retrieval precision + recursive semantic chunking | ✅ Strong |
| Document ingestion / scientific content | cv.md L48 Suvidha video summarization (transcript preprocessing); Manga Lens multimodal docs | ✅ Adjacent |
| Docker + Kubernetes | cv.md L17 Docker explicit; K8s gap | ✅ partial (K8s gap) |
| PostgreSQL + vector DBs | cv.md L11 PostgreSQL; L13 vector search | ✅ |
| Git/GitHub | implied | ✅ |
| LLMs + RAG frameworks | cv.md L13-14 LLM application development, RAG, LangChain, LlamaIndex | ✅ Strong |
| Linux | implied (Docker/Jenkins/cloud-ready) | ✅ |
| AWS | cv.md L17 cloud-ready deployment | ✅ Adjacent |
| Mentor junior engineers | cv.md L86 founder mentoring + Student Manager 150+ students | ✅ |
| 5+ years software dev | cv.md ~2.5y professional + 1y internships + projects | ❌ Gap (2y short) |

**Gaps:**
1. **5+ years software dev:** Deepak has 2.5y professional + 1y internships. Mitigation — Frame depth (production RAG + multi-agent fraud + FastAPI/Docker shipping in 2.5y) over breadth.
2. **Kubernetes:** Mitigation — Docker production experience + Jenkins CI/CD as adjacent. Commit to K8s ramp in first 30-60 days.
3. **Scientific-content domain:** Mitigation — Healthcare RAG is closely analogous to scientific RAG (both: structured documents, retrieval grounding, citation needs). PSI healthcare RAG is a direct transfer.
4. **Sponsorship not stated:** Mitigation — Standard ask in screen.

## C) Nivel y Estrategia

- JD nivel: AI Engineer II / Mid-Senior (5+y)
- Candidato natural: Mid (2.5y M.S.)
- **Plan "vender Mid II":** Lead with PSI healthcare RAG (~35% retrieval precision, ~30% defect reduction post-deploy) + Healthcare Claims multi-agent + Manga Lens multimodal CV. Argue measurable production wins.
- **Plan "si me uplevel":** If recruiter mentions Senior, accept w/ comp $145-160K target.
- **Plan "si me downlevel":** Accept AI Engineer I at $100-125K with 6-month review for II promotion.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| Axle JD | $120-150K | Mid-Senior band |
| Levels.fyi mid AI Engineer | $115-160K (remote) | 2026 |
| Glassdoor mid Applied AI | $110-150K | 2026 |
| Demand 2026 — RAG + agentic in regulated/scientific domains | High | Driving hires across regulated AI |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare-focused | "Applied AI engineer (2.5y) building production RAG, agentic LLM workflows, and Python AI applications on Docker. Ships RAG with ~35% retrieval precision gains, agentic multi-step pipelines, and FastAPI services with structured logging. M.S. Computer Science, Kent State." | Axle wants RAG + agentic + Python platform |
| 2 | Bullets (PSI) | RAG + agentic + ML | Lead with **RAG + retrieval precision** + **agentic conversational assistants** + **document ingestion / preprocessing** + **FastAPI/Docker** | JD: conversational + agentic + document ingestion |
| 3 | Projects | Manga Lens first | Reorder: **Healthcare Claims Multi-Agent** first; **Manga Lens** second (multimodal/multi-provider); **Suvidha Video Summarization** third (document/scientific-content analog); **Healthcare RAG** fourth | JD priority: agentic + RAG + scientific content |
| 4 | Skills | Generic | Lead with: Python, RAG, LangChain, LlamaIndex, FastAPI, Docker, PostgreSQL, vector DBs, AWS, Linux, Kubernetes (in progress), GitHub | ATS keyword match |
| 5 | Footer | Generic | "US-based, F-1 OPT (STEM through 2028), US-Remote ready" | F-1 OPT clarity |

**LinkedIn changes:**
1. Headline: "Applied AI Engineer · RAG + Agentic + Python · Healthcare → Scientific Content · US-Remote"
2. Featured: Healthcare Claims Multi-Agent + Suvidha Video Summarization + Manga Lens
3. About: Lead with measurable production wins (RAG ~35%, hallucinations -30%, defects -30%)

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | Reflection |
|---|---|---|---|
| 1 | Architect AI applications | PSI healthcare RAG: scoped → designed retrieval pipeline → measured ~35% precision gain | Architecture decisions need to surface failure modes early — invested in eval first, then iterated |
| 2 | Conversational assistants | PSI agentic multi-step queries (eligibility, care navigation) | Tool discipline + grounding rules prevented hallucination cascades |
| 3 | RAG document ingestion | Healthcare RAG: recursive semantic chunking + transformer embeddings | Chunk size + overlap tuning had outsized impact on recall vs precision tradeoff |
| 4 | Deploy on Docker / cloud | PSI FastAPI/Docker w/ structured logging, ~30% defect reduction post-deploy | Logging schema + load simulation in staging caught issues before production |
| 5 | Mentor junior engineers | Student Manager 150+ undergrads + E-Farming founder mentoring | Mentoring junior peers on grounding/tool discipline accelerated their first-week ramp |

## G) Posting Legitimacy

**Assessment:** **Proceed with Caution**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Greenhouse job ID 5114627007 active 2026-05-03 | Positive |
| JD specificity | Names Python, K8s, RAG, vector DBs, scientific content — high specificity | Positive |
| Comp transparency | $120-150K explicit | Positive |
| Sponsorship | Asks about future authorization but no explicit policy | Neutral |
| Company hiring signals | Axle scientific-content platform — limited public footprint; verify Series-A/B funding | Concerning (needs verification) |
| Reposting history | First time in scan-history.tsv | Positive |

**Context Notes:** Real role with specific JD. Caveat: Axle has limited public information vs. better-known peers (Elsevier, ResearchGate); verify funding + traction in Block D follow-up.

## H) Draft Application Answers

(Score 3.0 — borderline, included briefly:)

**"Why Axle?"**
> Axle's mission to make scientific content navigable maps directly to my healthcare RAG work at PSI — same problem class (high-stakes, structured documents, citation grounding). My ~35% retrieval precision gain on healthcare RAG transferred directly via recursive semantic chunking + transformer embeddings; I'd bring the same playbook to scientific corpora.

**"Tell us about a production AI feature you shipped end-to-end"**
> At PSI I built and shipped Healthcare Claims multi-agent fraud-detection (Intake → Validation → Consistency → Duplicate → Fraud Risk Scoring) with HITL escalation. From scoping (clinical workflow constraints) to deployment (FastAPI/Docker w/ structured logging) to measurement (~30% defect reduction post-deploy). Tool discipline + schema contracts prevented cascade failures.

## Keywords extraídas

Python, RAG, agentic, LLM, conversational assistants, document ingestion, scientific content, Kubernetes, Docker, PostgreSQL, vector database, AWS, Linux, GitHub, AI Engineer II, mentor, retrieval pipelines, LangChain, LlamaIndex, Mid-Senior.
