# Evaluación: MAIA — Applied AI Engineer (f/m/x)

**Fecha:** 2026-06-04
**Arquetipo:** Applied AI / LLM Engineer (secundario: AI Platform / MLOps Engineer)
**Score:** 3.2/5
**URL:** https://himalayas.app/companies/maia/jobs/applied-ai-engineer-f-m-x
**Legitimacy:** Proceed with Caution
**Location:** Remote — Germany (full WFH)
**Region:** Intl
**PDF:** output-intl/2026-06-04/cv-deepak-mallampati-maia-applied-ai-engineer-2026-06-04.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| **Arquetipo** | Applied AI / LLM Engineer with a backend-engineering core |
| **Domain** | LLM applications for the industrial sector (AI startup) |
| **Function** | Build (backend services + LLM/RAG product capabilities) |
| **Seniority** | Entry-level per posting (though stack expectations read mid) |
| **Remote** | Full remote, Germany |
| **Team size** | Early-stage startup (not stated) |
| **Comp** | €75,000–€85,000 + VSOP (equity) + WellPass |
| **TL;DR** | Backend + LLM-application engineer at an industrial AI startup. Strong on the LLM/RAG/observability axis Deepak owns, but the backend stack is TypeScript/Go/Java/Rust-first (not Python-first), and it's a Germany-based role — F-1 OPT authorization is the main drag. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Fit |
|------------------|--------------------|-----|
| LLM applications, RAG systems, retrieval concepts | RAG pipelines (dense retrieval + cross-encoder re-ranking); FAISS/Pinecone/Weaviate; hallucination -40%, precision 92% | ✅ Strong |
| LLM frameworks + vector databases | LangChain/LangGraph; FAISS/Pinecone/Weaviate | ✅ Strong |
| Observability — logs, metrics, tracing | LLM eval + monitoring framework; latency/accuracy dashboards; model monitoring & observability (Skills) | ✅ Strong |
| Cloud & DevOps fundamentals | AWS/Azure/GCP; Docker, Kubernetes, Terraform, CI/CD; 99.9% uptime | ✅ Strong |
| Production REST APIs | 12 APIs/microservices, FastAPI; p95 1.5s→800ms (Vanguard) | ✅ Strong |
| Backend in **TypeScript, Go, Java, or Rust** | Java + JS/TypeScript in Skills; **no Go / no Rust** | ⚠️ Partial — Python is Deepak's primary, not the listed backends |
| Entry-level, fast growth, high ownership | Founder-grade ownership across Progress/Vanguard; 4+ yrs | ✅ Exceeds the "entry" bar |

**Gaps & mitigation:**
1. **Backend-language mismatch (TS/Go/Java/Rust-first; Python-first candidate).** Soft blocker. *Mitigation:* lead with TypeScript (MangaLens Chrome extension is TS/JS) + Java (Emerson). Frame language as substitutable given strong systems fundamentals; Go/Rust are learnable and not all four are required ("or").
2. **Germany/EU work authorization.** F-1 OPT, US-based — no automatic EU right-to-work. Per `_profile`, soft blocker, not a veto: flag honestly, confirm whether the startup sponsors/EOR. Early-stage startups rarely relocate US-OPT candidates → caps realism.
3. **Industrial-sector domain unfamiliar.** *Mitigation:* Emerson (industrial pipeline-storage ML, equipment-failure prediction, anomaly detection) is a direct industrial-domain proof point — surface it prominently.

## C) Nivel y Estrategia

- **JD level:** "Entry-level" label but mid-shaped stack. **Deepak's level:** mid IC → he over-clears the entry bar; risk is being seen as overqualified/expensive for an entry comp band.
- **Sell:** position the 4+ yrs as "ships production LLM features end-to-end on day one" — exactly what a small startup needs. Use Emerson for industrial credibility.
- **If down-leveled:** €75–85k is a solid entry/mid band for Germany; VSOP adds upside. The decisive lever is **authorization**, not level — qualify EU sponsorship before deep prep.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Comp published | €75,000–€85,000 + VSOP equity + WellPass | JD (Himalayas) |
| Market context — AI Engineer Germany (mid) | ~€65k–€90k base typical | General market knowledge (verify Levels.fyi/Glassdoor) |
| Demand trend | High — LLM/RAG + backend roles strong across DACH | Qualitative |
| Company | MAIA — early-stage industrial-AI startup; full remote, flexible hours | JD |

Published band (€75–85k) sits at/above the German mid-AI median — competitive for the stated entry level.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/healthcare framing | Add "production LLM/RAG features + backend services with observability" | Mirror JD's backend+LLM dual core |
| 2 | Skills | Python-led | Surface TypeScript + Java + Docker/K8s/Terraform earlier | JD wants TS/Go/Java/Rust + DevOps |
| 3 | Experience | Emerson listed last | Elevate Emerson (industrial ML) visibility | Industrial-sector domain match |
| 4 | Projects | MangaLens generic | Frame MangaLens as shipped **TypeScript** product | Demonstrate the required backend language |
| 5 | Footer | US/F-1 OPT | Honest EU-authorization + EOR openness | Good-faith signal for a DE role |

**LinkedIn:** add TypeScript, observability (tracing/metrics/logs), vector DBs to skills; headline emphasize "LLM applications + backend."

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | LLM applications + RAG | Healthcare RAG | Noisy domain answers | Cut hallucination, raise relevance | Dense retrieval + cross-encoder re-ranking + chunking | -40% hallucination, 92% precision | Retrieval quality is the product |
| 2 | Observability (logs/metrics/tracing) | LLM eval/monitoring framework | No pre-deploy regression signal | Catch regressions early | RAGAS/BERTScore + latency/accuracy dashboards | Regressions caught pre-release | Evals = CI for models |
| 3 | Production REST APIs + DevOps | Vanguard API latency | p95 too high | Hit SLA | 12 APIs/microservices, caching, Docker/CI | p95 1.5s→800ms | Reliability is a feature |
| 4 | Backend in TS | MangaLens | Readers blocked by untranslated content | Ship inline translation | Built TS Chrome extension across 29+ sites | Live on Chrome Web Store | I ship in TS, not just Python |
| 5 | Industrial-sector domain | Emerson ML | Equipment failures unpredicted | Predict failures/anomalies | Regression/classification on sensor+ops data, BERT/RoBERTa NER (89% F1) | Model-ready industrial pipelines | Industrial data is messy; feature work dominates |
| 6 | High ownership / entry-fast-growth | Progress agentic systems | Multi-step objectives over budget | Ship reliable agentic workflow | Conductor–subagent orchestration | 42% token reduction | Own the whole loop, not a ticket |

**Case study:** Emerson industrial ML + Healthcare RAG.
**Red-flag Qs:** "Authorized in Germany?" → honest F-1 OPT + EOR/sponsorship question. "Comfortable in Go/Rust?" → strong systems fundamentals; shipped in TS/Java/Python; ramp fast.

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Posted 2026-04-15, deadline 2026-06-14, applications open | Positive |
| Description quality | Specific stack + comp band published; but routed through aggregator (Himalayas), original ATS not directly confirmed | Neutral |
| Company signals | Early-stage startup, limited public footprint; no layoff/freeze signals (also little signal either way) | Neutral |
| Internal contradiction | "Entry-level" label vs mid-level stack (TS/Go/Java/Rust + LLM/RAG + observability) | Concerning (mild) |
| Market context | Common role shape; fills 4–8 weeks | Neutral |

**Context Notes:** Early-stage startup JDs are often vague/ambitious because the role is genuinely undefined — weight the entry/mid contradiction lightly. Comp transparency is a positive legitimacy signal. Verify the original application path (company careers/ATS) before applying.

## H) Draft Application Answers

*(Score 3.2 < 4.5 — full drafts deferred. Authorization line for the form:)*
> "US-based Applied AI Engineer (4+ yrs) shipping production LLM/RAG features with strong observability and backend/API experience (TypeScript, Java, Python). Currently on F-1 OPT in the US — for this Germany-based remote role I'd want to confirm EOR/contractor or sponsorship options and am glad to find the right structure."

---

## Keywords extraídas
LLM, RAG, retrieval, vector database, LLM frameworks, observability, tracing, metrics, logging, TypeScript, Go, Java, Rust, REST API, cloud, DevOps, Docker, Kubernetes, backend, industrial AI, production
