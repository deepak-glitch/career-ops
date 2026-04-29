# Axiomatic AI — Applied AI Engineer

**Fecha:** 2026-04-29
**Arquetipo:** Applied AI / LLM Engineer (RAG + agentic workflows in production)
**Score:** 3.8/5
**URL:** https://job-boards.greenhouse.io/axiomaticai/jobs/4720346101
**Legitimacy:** High Confidence
**Location:** Boston, US / Barcelona, Spain / Open to Remote
**PDF:** output/2026-04-29/cv-deepak-mallampati-axiomatic-ai-applied-ai-2026-04-29.pdf

---

## Block A — Job Snapshot

- **Company:** Axiomatic AI — research-product startup combining LLMs with formal scientific reasoning.
- **Title:** Applied AI Engineer
- **Location:** Boston / Barcelona / Open to Remote (US-friendly, F-1 OPT compatible if Boston)
- **Experience:** 3+ years software engineering, Python preferred (slight stretch from 2.5 yrs but defensible)
- **Comp:** Not disclosed; Boston/Remote AI mid-senior typically $130-180K base + equity
- **Stack:** Python, LangChain, PydanticAI, OpenAI/Anthropic/HuggingFace, FastAPI, Docker, GitHub Actions, RAG, Knowledge Graphs, observability/tracing
- **Mission:** Deliver applied AI features end-to-end from design through production iteration; collaborate with researchers + engineers on productionization.

## Block B — CV Match

| Criterion | Match | Evidence |
|-----------|-------|----------|
| Python + production AI | Strong | Healthcare RAG, agentic workflows, FastAPI/Docker (cv.md L25-28) |
| LangChain / PydanticAI | Strong | LangChain in healthcare RAG + agentic claims pipeline (cv.md L13, L71) |
| OpenAI / Anthropic / HuggingFace | Direct | Manga Lens — Claude Sonnet, GPT-4o, Ollama; HF Transformers/Diffusers (cv.md L13, L60) |
| RAG architectures | Direct hit | Healthcare RAG ~35% retrieval precision, Suvidha doc Q&A (cv.md L25, L46) |
| Knowledge Graphs | Soft | NetworkX road-network analysis + Louvain communities (cv.md L77) |
| FastAPI + Docker | Direct | FastAPI/Flask packaging + Docker + ~30% defect reduction (cv.md L28) |
| Observability / tracing | Decent | Structured logging + load simulation in healthcare AI (cv.md L28) |
| 3+ yrs SWE | Slight gap | 2.5+ yrs at Progress Solutions; mitigated by depth across 6 production AI systems |

**Gaps:** Knowledge graph depth is shallow (NetworkX is graph theory, not RDF/SPARQL); 0.5-yr experience gap is minor and defensible.

## Block C — Level y Strategy

Detected: Mid-level Applied AI (3+ yrs ask). Candidate's natural level for this archetype: mid (2.5 yrs but high depth-per-year). Sell: "Six production AI systems shipped end-to-end across healthcare RAG, agentic workflows, multimodal extension, and predictive ML — each with measurable outcomes." Downlevel plan: accept if comp is fair; negotiate 6-month review tied to scope.

## Block D — Comp y Demanda

WebSearch comp benchmarks for Applied AI Engineer at venture-backed AI startups (US Remote, mid-level): $130-180K base + 0.05-0.5% equity. Boston AI startups trend slightly below SF (~10-15%). Axiomatic is research-led (formal reasoning + LLMs), well-positioned in 2026 Applied AI hiring market.

## Block E — Personalization

| # | Section | Change | Why |
|---|---------|--------|-----|
| 1 | Summary | Lead with "Applied AI engineer shipping production LLM systems" + LangChain/RAG/agentic emphasis | Mirrors JD core ask |
| 2 | Bullets | Reorder Progress Solutions to lead with RAG + LangChain, then agentic, then ML pipelines | JD priority |
| 3 | Projects | Lead with Agentic Healthcare Claims (schema contracts, RAG-grounded validation) | Most JD-relevant |
| 4 | Skills | Surface "LangChain, PydanticAI, OpenAI, Anthropic, HuggingFace, RAG, Knowledge Graphs, Observability" | ATS keywords |
| 5 | Cover letter | Bridge from Healthcare RAG to scientific reasoning use case | Connect domains |

## Block F — Interview Plan (STAR+R)

| # | JD Hook | STAR+R Story |
|---|---------|--------------|
| 1 | "Applied AI features end-to-end" | **S:** Healthcare client needed clinical knowledge retrieval. **T:** Build RAG with measurable precision gains. **A:** Recursive semantic chunking + transformer embeddings + grounding evaluation. **R:** ~35% retrieval precision, >90% grounded alignment. **Reflection:** Eval-first design (precision metric defined before chunking strategy) is what turned this from demo to production. |
| 2 | "LangChain + PydanticAI" | **S:** Multi-step healthcare agentic workflow with cascading hallucinations. **T:** Stable agent orchestration. **A:** Schema-validated JSON contracts between agents (Pydantic-style); tool discipline; grounding rules. **R:** ~25% response stability gain, >30% hallucination reduction. **Reflection:** Schema contracts were the unlock — they turned an unreliable chain into a production-grade pipeline. |
| 3 | "Production quality + monitoring" | **S:** Healthcare ML inference services flaking post-deploy. **T:** Production-shape services. **A:** FastAPI + Docker + structured logging + load simulation. **R:** ~30% post-deploy defect reduction. **Reflection:** Logging was the cheap win; load sim caught two race conditions before prod. |
| 4 | "Knowledge Graphs" | **S:** OpenStreetMap road-network analysis problem. **T:** Identify backbone routes + communities. **A:** NetworkX DiGraph, Haversine edges, betweenness centrality, Louvain. **R:** ~30% runtime reduction via subgraph scoping. **Reflection:** Algorithmic graph reasoning translates to scientific KG reasoning if I learn RDF/SPARQL. |
| 5 | "Embeddings + retrieval" | **S:** Document Q&A for non-technical staff at Suvidha. **T:** Hallucination-resistant Q&A. **A:** Semantic chunking + embedding retrieval + Flask UI. **R:** ~30% hallucination reduction, >85% accuracy. **Reflection:** Non-technical user UX matters as much as retrieval quality. |
| 6 | "Multi-provider LLM integration" | **S:** Manga translation users blocked when single provider rate-limited. **T:** Resilient multi-provider abstraction. **A:** 4 vision providers (Claude, GPT-4o, GPT-4.1 Nano, Ollama) with per-provider payload handling and failure isolation. **R:** Shipped to Chrome Web Store with 29 site configs. **Reflection:** Failure isolation matters more than the abstraction layer itself. |

**Case study:** Lead with Agentic Healthcare Claims pipeline (schema contracts + RAG-grounded validation) — closest analog to Axiomatic's "formal reasoning + LLM" thesis.

## Block G — Posting Legitimacy

| Signal | Observation | Weight |
|--------|-------------|--------|
| Posting age | Recent (banner Jan 2026 timestamp) | Positive |
| Apply button | Live (Greenhouse API responsive) | Positive |
| Tech specificity | High — names LangChain, PydanticAI, RAG, KG explicitly | Positive |
| Realistic requirements | Yes — 3+ yrs SWE + Python + LangChain is achievable | Positive |
| Salary transparency | Not disclosed (Massachusetts requires it for ≥6 employees, may be omitted for early-stage) | Neutral |
| Reposting pattern | First listing of this slug in scan-history | Positive |
| Layoff news | None — venture-backed research startup | Positive |

**Tier:** High Confidence — fresh posting, specific stack, concrete responsibilities, real research-product company.

## Block H — Draft Application Answers

**"Why Axiomatic?"** Drawn to the formal-reasoning + LLM thesis — closest commercial analog to my Healthcare Claims pipeline where schema contracts turned an unreliable agent chain into a production-grade system. Want to apply the same discipline (eval-first, schema-grounded, observable) to scientific reasoning.

**"Applied AI experience?"** Six production AI systems shipped end-to-end in 2.5 years: Healthcare RAG (~35% precision gain), Agentic workflows (>30% hallucination reduction), Manga Lens (Chrome Web Store, 4 LLM providers), Predictive ML (15-20% recall on high-risk patients), Suvidha video summarization (60-70% review time cut), and Drowsiness Detection (YOLOv8 real-time). Stack: Python, LangChain, FastAPI, Docker, OpenAI/Anthropic/HuggingFace.

**"Sponsorship?"** F-1 OPT, US-based; need future H1B/sponsorship.

## Keywords

Applied AI Engineer, LLM, Python, LangChain, PydanticAI, OpenAI, Anthropic, HuggingFace, RAG, Knowledge Graphs, FastAPI, Docker, GitHub Actions, observability, tracing, embeddings, vector search, agentic workflows, structured outputs, evaluation pipelines, production AI, schema contracts.
