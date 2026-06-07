# Evaluación: Pereview Software — AI Engineer

**Fecha:** 2026-06-07
**Arquetipo:** Generative AI / RAG Engineer (secundario: Applied AI / LLM Engineer)
**Score:** 3.5/5
**URL:** https://apply.workable.com/pereview-software/j/2E60A27CFD
**Legitimacy:** High Confidence
**Location:** Dallas, TX — On-site (must reside in Dallas)
**Region:** US
**PDF:** output/2026-06-07/cv-deepak-mallampati-pereview-software-2026-06-07.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Generative AI / RAG Engineer |
| Domain | LLMOps / Applied GenAI for commercial real estate (CRE) asset & portfolio management software |
| Function | Build (design + ship document-AI features over a document-heavy domain) |
| Seniority | Mid IC ("AI Engineer", no senior/staff gate in title) |
| Remote | On-site — applicants must reside in Dallas, TX |
| Team size | Not disclosed; Pereview is a growing CRE SaaS vendor (global client base) |
| TL;DR | Near-1:1 RAG archetype match — OpenAI/Azure OpenAI + RAG (embeddings, chunking, vector search, document retrieval) + LangChain/Semantic Kernel over document-heavy regulated data. US entity = F-1 OPT friendly. Main friction: Dallas on-site / must-reside-in-Dallas (relocation from Kent, OH). |

## B) Match con CV

| Requisito JD | Evidencia CV | Match |
|--------------|--------------|-------|
| RAG solutions: embeddings, chunking, vector search, document retrieval | Progress RAG over large-scale document corpora (dense retrieval + cross-encoder re-ranking); FAISS/Pinecone/Weaviate, chunking strategies, semantic caching | ✅✅ |
| OpenAI APIs and/or Azure OpenAI Services | Azure (OpenAI, AI Services, Content Safety); GPT-4o/GPT-5/Claude evaluated and shipped | ✅✅ |
| LLM orchestration (LangChain, Semantic Kernel, similar) | LangChain/LangGraph in production; agentic conductor–subagent framework | ✅ (Semantic Kernel = adjacent gap) |
| Document-heavy industries (CRE, financial services, lending, legal, accounting) | 4+ yrs banking/regulated enterprises; 92% precision across millions of regulatory documents | ✅✅ (financial-services analog to CRE) |
| Azure AI services + cloud-based AI deployments | Azure OpenAI/AI Services/Content Safety; Docker, K8s, Azure DevOps CI/CD | ✅ |
| Production discipline / evals | RAGAS + BERTScore eval framework, drift detection, latency/accuracy dashboards | ✅ |
| US work authorization | F-1 OPT (US-based) | ✅ |

**Gaps:**
1. **Semantic Kernel specifically.** *Mitigación:* JD accepts "or similar" — LangChain/LangGraph production experience transfers directly; note Semantic Kernel is a 1–2 week ramp on the same orchestration concepts.
2. **Commercial real estate domain.** *Mitigación:* banking/regulatory-document RAG (92% precision over millions of docs) is the closest possible analog — same document-heavy, compliance-sensitive retrieval problem. Frame CRE as a new vertical on the same engine.
3. **Dallas on-site / must-reside-in-Dallas.** *Hard friction, not a skills gap.* Deepak is in Kent, OH on F-1 OPT. Requires relocation willingness. US entity is positive for work auth; flag relocation in Block A and any form answers. Score downgraded per location policy but NOT vetoed.

## C) Nivel y Estrategia

- **Nivel JD:** Mid IC AI Engineer. **Deepak:** 4+ yrs, fits cleanly.
- **Vender sin mentir:** lead with "production RAG over regulated, document-heavy corpora at 92% precision" — this is exactly Pereview's problem shape (CRE leases, debt/equity docs, portfolio reports). Pair with Azure OpenAI + eval framework.
- **Si downlevelan:** unlikely; if comp is geo-discounted for Dallas, anchor on output-based value (RAG precision + cost optimization) and ask for a 6-month review.

## D) Comp y Demanda

| Métrica | Dato | Fuente |
|---------|------|--------|
| Pereview AI Engineer | Not disclosed in posting | Workable posting |
| Dallas, TX AI/ML Engineer (mid) | ~$120–160K base | Levels.fyi / Glassdoor 2026 (DFW market) |
| Applied GenAI / RAG Engineer (US, mid) | $130–180K + bonus | Levels.fyi 2026 |
| CRE proptech SaaS eng | $115–155K base (non-FAANG vertical SaaS) | Glassdoor 2026 |

Demand: high — document-AI / RAG over regulated corpora is a top 2025–26 hiring segment; CRE proptech is actively adopting LLM document automation. DFW on-site narrows the applicant pool (favorable for a willing-to-relocate candidate).

## E) Plan de Personalización

| # | Sección | Estado | Cambio | Por qué |
|---|---------|--------|--------|---------|
| 1 | Summary | "Applied AI for banking/healthcare" | "Production RAG over regulated, document-heavy corpora — 92% precision, 40% hallucination reduction" | Mirror Pereview's document-AI core |
| 2 | Bullets | Progress agentic first | Lead with Progress RAG (dense + cross-encoder, chunking) | RAG = the role's spine |
| 3 | Skills | broad cloud | Surface Azure OpenAI, AI Services, Content Safety first | JD names Azure explicitly |
| 4 | Skills | LangChain | Add "LLM orchestration (LangChain/LangGraph; Semantic Kernel-ready)" | JD names Semantic Kernel |
| 5 | Domain | banking/healthcare | Frame as "document-heavy regulated domains (banking, clinical) → CRE-ready" | Bridge to CRE vertical |

## F) Plan de Entrevistas

| # | Requisito JD | STAR+R | S | T | A | R | Reflection |
|---|--------------|--------|---|---|---|---|------------|
| 1 | RAG over documents | Progress healthcare RAG | Domain doc queries | Reduce hallucination | Dense + cross-encoder + chunking | 40% halluc reduction, lifted relevance | Retrieval quality > prompt tuning |
| 2 | Regulated-doc precision | Banking regulatory RAG | Millions of compliance docs | High-precision retrieval | Hybrid search + re-ranking | 92% precision | Precision is the product in compliance |
| 3 | Azure OpenAI deployment | Vanguard model eval | GPT-4o/Claude/Gemini selection | Pick best model/cost | Eval datasets + safeguards | 27% success-rate lift, 42% unsafe reduction | Eval-driven model choice beats vibes |
| 4 | Cost/latency at scale | Vanguard APIs | 100K+ daily requests | Sustain SLA | 12 APIs, semantic caching, prompt compression | p95 1.5s→800ms | Caching + routing = real $ saved |
| 5 | Orchestration | Progress conductor–subagent | Complex multi-step objective | Decompose reliably | Context-scoped subagents | 42% token reduction | Same pattern ports to Semantic Kernel |

**Case study:** Progress RAG (regulated-document retrieval) + banking 92%-precision pipeline = ideal Pereview demo — same document-AI problem, new CRE vertical.
**Red-flag prep:** "Are you willing to relocate to Dallas?" → answer honestly: US-based on F-1 OPT, open to relocating to Dallas for the right on-site role; confirm sponsorship timeline early.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Live Workable posting, active Apply flow | Positive |
| Description quality | Specific stack (OpenAI/Azure OpenAI, RAG embeddings/chunking/vector search, LangChain/Semantic Kernel) + concrete domain (CRE document automation) | Positive |
| Company signals | Pereview = established CRE asset/portfolio-management SaaS with global client base; coherent that they'd build document AI | Positive |
| Reposting | First time seen (no prior Pereview entry in scan-history) | Neutral |
| Comp transparency | Not disclosed in posting | Neutral |
| Location | "Must reside in Dallas" — narrows pool but is a concrete, real requirement (not a ghost-posting signal) | Neutral |

**Context Notes:** Tightly scoped, technology-specific JD in a vertical (CRE proptech) that genuinely needs document AI. On-site Dallas requirement is restrictive but legitimate.

## H) Draft Application Answers

(score 3.5 < 4.5 — no draft answers)

## Keywords extraídas

Pereview Software, AI Engineer, RAG, retrieval-augmented generation, embeddings, chunking, vector search, document retrieval, OpenAI API, Azure OpenAI, LangChain, Semantic Kernel, LLM orchestration, commercial real estate, document processing, Azure AI, Dallas TX, Generative AI, financial services, hallucination reduction
