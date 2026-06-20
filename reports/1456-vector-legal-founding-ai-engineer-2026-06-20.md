# Evaluación: Vector Legal — Founding AI Engineer

**Fecha:** 2026-06-20
**Arquetipo:** Applied AI / LLM Engineer + Generative AI / RAG Engineer
**Score:** 3.8/5
**URL:** https://www.workatastartup.com/jobs/95799
**Legitimacy:** High Confidence
**Location:** San Francisco, CA (YC W26; remote not confirmed — verify)
**Region:** US
**PDF:** output/2026-06-20/cv-deepak-mallampati-vector-legal-founding-ai-2026-06-20.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (primary) + Generative AI / RAG Engineer (secondary) |
| Domain | Legal tech — AI-native law firm + software for startups |
| Function | Design/deploy production LLM systems; build agents, evals, doc pipelines over legal documents |
| Seniority | "3–7 years engineering (or strong track record building/shipping AI systems)" |
| Remote | SF-based (W26); remote policy not confirmed in JD — verify |
| Team size | Founding-stage; team ex-Fenwick, YC Legal, Ironclad |

**TL;DR:** Vector Legal (YC W26) is building an AI-native law firm + software for startups and hiring a Founding AI Engineer to design and deploy production-grade LLM systems — **agents (LangChain / Deep Agents), evaluation frameworks, and document-understanding/drafting pipelines** over legal documents and structured data. This is a **strong archetype match**: Deepak's production agentic systems, RAGAS/BERTScore eval framework, and RAG-over-document-corpora work map almost one-to-one, and the **regulated/compliance-heavy domain** echoes his banking/healthcare track record. Two caps: the JD leans **TypeScript** (his primary is Python, though TS is listed), and **OCR/unstructured doc-processing pipelines** are adjacent rather than a headline of his CV. The "Founding" + 3–7yr band fits his 4+ years. Remote policy is unconfirmed (likely SF) — a logistics note, OPT-eligible regardless.

## B) Match con CV

| JD requirement | CV proof |
|----------------|----------|
| Production-grade LLM systems | "Architected **production-grade agentic LLM systems**" (Progress Solutions) |
| Agent-based systems (LangChain / Deep Agents) for multi-step tasks | Conductor–subagent orchestration; LangChain/LangGraph in skills |
| Evaluation frameworks | "Established a structured **LLM evaluation and monitoring framework** (RAGAS, BERTScore, custom metrics)" |
| Document understanding & drafting (LLM over documents) | "RAG pipelines over large-scale **healthcare document corpora**"; summarization/NER |
| Data pipelines ingesting/structuring documents | "privacy-preserving **data workflows**"; data engineering (Spark/Databricks/Kafka) |
| TypeScript / production backend | TypeScript + FastAPI listed; **Python-primary** (partial gap) |
| Reliability / correctness focus | 99.9% uptime, 60% fewer failed runs, retry/backoff infra |
| Regulated-domain rigor | HIPAA/SOC2/PCI; PII masking; audit logging — strong for legal compliance |

**Gaps:**
1. **TypeScript-primary backend** — *Soft.* TS is listed but Python is his core. Mitigation: lead with agent/eval depth (language-agnostic); note TS familiarity and fast ramp.
2. **OCR / unstructured-doc extraction pipelines** — *Nice-to-have.* He has RAG-over-documents and NER, adjacent to OCR ingestion. Mitigation: frame document RAG + NER as the same problem class; offer a quick eval-of-doc-extraction note.
3. **Remote unconfirmed (likely SF onsite)** — *Logistics.* OPT-eligible; confirm location/relocation expectation.

## C) Nivel y Estrategia

1. **Nivel:** 3–7 yrs — Deepak (4+ yrs) is **squarely in band**. Founding role rewards breadth + ownership, both present.
2. **Sell:** Lead with production agents + a real eval framework (rare at this stage) and **regulated-domain reliability** (directly relevant to legal correctness/auditability). Position banking/healthcare compliance experience as a moat for legal-document AI where correctness is non-negotiable.
3. **If scoped narrower:** Founding titles span wide; clarify split between agent/eval work (his strength) and full-stack/infra. Negotiate equity given the founding risk; ensure correctness/eval ownership is in scope.

## D) Comp y Demanda

| Item | Data | Source |
|------|------|--------|
| Listed range | Not stated in JD | JD (WaaS) |
| Market context | Founding AI Engineer (YC W26) typically $150–220K + 0.5–2% equity in SF | qualitative market norm |
| Demand | Legal AI is a high-growth 2026 vertical; agent+eval skills in short supply | qualitative |

No comp listed — anchor with market norm and weight equity given founding risk. Do not invent a company-specific figure; confirm range early.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated framing | Reframe to "Applied AI Engineer for **document-heavy, correctness-critical** LLM systems" | Mirror legal-document reliability ask |
| 2 | Compliance | HIPAA/SOC2/PCI | Surface audit logging + correctness as legal-grade rigor | Legal = auditability + correctness |
| 3 | Agents/evals | Present | Lead with agents + RAGAS/BERTScore eval framework | JD's two core asks |
| 4 | Doc pipelines | RAG over healthcare corpora | Reframe as document-understanding/drafting | Maps to legal doc workflows |
| 5 | Keywords | — | LangChain, Deep Agents, evals, document understanding, OCR | ATS + JD vocab |

**LinkedIn top 5:** headline → "Applied AI Engineer | Agents, Evals, Document AI"; feature eval framework; surface regulated-domain reliability; add document-AI framing; note TypeScript.

## F) Plan de Entrevistas

| # | JD requisito | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Agent-based multi-step systems | Conductor–subagent framework | Complex objectives, brittle single-prompt | Reliable autonomous execution | Built orchestration + error recovery | 42% token cut, sustained accuracy | Reliability is an architecture problem, not a prompt |
| 2 | Evaluation frameworks | RAGAS/BERTScore harness | No pre-deploy regression signal | Build eval + monitoring | Custom domain metrics + dashboards | Caught regressions before release | Correctness needs measurement, not vibes |
| 3 | Document understanding | Healthcare-corpus RAG | Domain queries poorly answered | Lift answer relevance | Dense retrieval + cross-encoder re-rank | Reduced hallucination on domain queries | Document grounding beats bigger models |
| 4 | Regulated-domain rigor | Privacy-preserving workflows | Sensitive data, zero PII exposure allowed | Compliant analytics | k-anonymity/l-diversity/diff-privacy | Re-ID risk 3.38%→0.32%, 99% utility kept | Compliance and utility can coexist if measured |
| 5 | Ship at founding velocity | career-ops / MangaLens | Solo, ship fast | Ship real systems | Built autonomous pipeline / shipped extension | Runs nightly / live on store | Founding speed = ruthless scoping |

**Case study:** The eval framework + agentic system as the centerpiece — legal AI lives or dies on correctness, which is exactly what evals buy.
**Red-flag Qs:** "TypeScript depth?" → "Python-primary, TS-comfortable; agent/eval design transfers." "Why legal?" → "Correctness-critical, document-heavy AI is exactly my regulated-domain wheelhouse." "Remote?" → confirm expectation.

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Active YC W26 listing; corroborated via YC tweet + WaaS + aggregators | Positive |
| Description quality | Specific (LangChain/Deep Agents, evals, doc pipelines, OCR/unstructured) — low boilerplate | Positive |
| Salary transparency | Not listed | Concerning (minor) |
| Company signals | Real, recently-funded (W26); founding team ex-Fenwick/YC Legal/Ironclad | Positive |
| Role market context | Founding AI eng at an early YC co legitimately stays open weeks; not a ghost-job pattern | Neutral |

**Context Notes:** Early-stage founding role; missing comp is normal pre-Series-A, not a ghost-job signal. Remote policy unconfirmed — treat as SF until verified.

**Verification:** corroborated across YC (tweet + companies page) + WaaS + aggregators (batch mode — no Playwright). Location/comp to confirm directly.

---

## Keywords extraídas

Founding AI Engineer, legal tech, production LLM systems, agents, LangChain, Deep Agents, evaluation frameworks, document understanding, document drafting, OCR, unstructured data, RAG, data pipelines, TypeScript, reliability, correctness, applied AI, regulated domain, compliance
