# Evaluación: Glass Health — Founding AI/Data Engineer (Remote)

**Fecha:** 2026-05-01
**Arquetipo:** Applied AI / LLM Engineer + Generative AI / RAG Engineer (healthcare)
**Score:** 3.6/5
**URL:** https://www.workatastartup.com/jobs/64767
**Legitimacy:** High Confidence
**Location:** Remote (US-based; SF hybrid optional, 2 days/week)
**PDF:** output/2026-05-01/cv-deepak-mallampati-glass-health-founding-ai-data-2026-05-01.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI + RAG (healthcare-specific; clinical decision support) |
| Domain | Healthcare AI — clinical decision support + ambient scribing + medical RAG |
| Function | Build user-facing GenAI features end-to-end; greenfield ELT+RAG over millions of medical articles |
| Seniority | Founding (6+ years preferred) |
| Remote | Remote-US (SF 2-day hybrid optional) |
| Comp | $120k - $210k base + 0.5-1.0% equity |
| TL;DR | Founding engineer for AI-powered clinical decision support; greenfield RAG over millions of medical articles. Series A pending. |

## B) Match con CV

| JD Requirement | CV Evidence | Strength |
|---|---|---|
| Python | Python core (Skills); FastAPI/Flask packaging | Strong |
| Django | None (Flask + FastAPI only) | Gap (mitigable — Django is 1-week ramp) |
| PostgreSQL | PostgreSQL (Skills) + healthcare CRUD app | Strong |
| React + TypeScript | React + Vite + TypeScript (Skills + Manga Lens + Dream Decoder) | Strong |
| LLMs (OpenAI) | LLM application development; agentic workflows; structured outputs (Progress Solutions) | Strong |
| Machine Learning | scikit-learn, XGBoost, predictive ML pipelines (Progress Solutions) | Strong |
| GCP, Docker | Docker (Skills + Progress Solutions); GCP not explicit (AWS in Skills) | Moderate (cloud-portable) |
| RAG production | Healthcare RAG with recursive semantic chunking, transformer embeddings, +35% retrieval precision, >90% grounded alignment | **Bullseye** |
| ELT architecture | EHR preprocessing + dataset reliability >98% + downstream instability -40% | Strong |
| Healthcare/EHR systems | Progress Solutions (HIPAA-conscious); Patient Records app | **Bullseye** |
| HIPAA compliance | HIPAA-conscious data governance, de-identification, lineage docs (Progress Solutions) | **Bullseye** |
| 6+ years experience | 2.5+ years (Progress Solutions + Suvidha + Emerson + projects) | Hard gap |

**Gaps & mitigation:**
1. **6+ years experience (HARD).** Mitigation: solo-shipped Manga Lens (multi-provider vision, MV3) + measurable healthcare RAG outcomes (+35% retrieval precision in production) demonstrate senior-level ownership. Frame as "Founding-mindset proven through end-to-end shipping, not seat-time."
2. **Django specifically (soft).** Mitigation: Flask + FastAPI experience transfers; Django ORM + admin is a 1-week ramp.
3. **GCP not explicit (soft).** Mitigation: Docker + AWS (Skills) + cloud-ready deploy patterns (Progress Solutions); GCP-specific services are 1-2 week ramps.

## C) Nivel y Estrategia

- **Detected level:** Founding (6+ years).
- **Sell angle:** "Healthcare RAG bullseye — production retrieval grounding (+35% precision, >90% alignment), HIPAA-conscious governance from day one. Founding-mindset proven through shipping (Manga Lens MV3, Healthcare Claims multi-agent). Series A trajectory matches my ambition to own end-to-end AI products."
- **Downlevel:** If Glass downlevels to "Senior" or "AI Engineer" (not Founding), accept if comp at $140-160k base + meaningful equity. Otherwise, push for Founding title given the bullseye healthcare-RAG fit.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| JD listed | $120k - $210k + 0.5-1.0% equity | Wide band; SF hybrid bumps base |
| Levels.fyi (founding eng healthcare AI) | $150-220k base + 0.5-1.5% equity | In-line for Series A pre-revenue |
| Demand trend | High | Healthcare AI + RAG is a peak hiring vertical |
| Funding | $6.5M raised; Series A pending | Stable enough for runway concerns |

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | Generic Applied AI | Lead with "Healthcare-first Applied AI engineer: production RAG (+35% retrieval precision, >90% grounded alignment), HIPAA-conscious governance, agentic workflows" | Mirror Glass's healthcare + RAG stack |
| 2 | Experience reorder | Default | Lead Progress Solutions with RAG bullets, then HIPAA governance | Match JD ELT+RAG emphasis |
| 3 | Skills | Default | Surface RAG, vector search, embeddings, LangChain, LlamaIndex, PostgreSQL, pgvector, Docker, FastAPI, React, TypeScript | JD ATS keywords |
| 4 | Projects | Manga Lens first | Lead with Healthcare Claims (multi-agent + RAG-grounded CPT/ICD validation) — strongest analog to Glass CDS | Domain alignment |
| 5 | Footer | Default | "Remote-US, F-1 OPT — open to sponsorship; SF hybrid OK if relocation supported" | Glass sponsors per YC norm |

## F) Plan de Entrevistas

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | RAG over medical articles | Healthcare clinical RAG | Clinicians needed grounded retrieval over policies | Build retrieval-grounded Q&A | Recursive semantic chunking + transformer embeddings + eval harness | +35% retrieval precision, >90% grounded alignment | Eval harness > model swap |
| 2 | ELT for medical content | EHR preprocessing pipeline | Multi-source EHR extracts unreliable | Standardize ELT | Pandas + NumPy + dataset audits + lineage docs | >98% reliability, -40% downstream instability | Data hygiene compounds |
| 3 | User-facing GenAI features | Manga Lens shipped | Real-time AI translation needed in browser | Ship to Chrome Web Store | MV3 + content scripts + 4 vision providers + 29 site configs | Live in store | End-to-end ownership = founding mindset |
| 4 | HIPAA compliance | Healthcare data governance | Compliance + clinicians + ML team had different mental models | Bridge w/ governance docs | De-identification + data lineage + system-limit docs | Faster sign-off | Governance accelerates trust |
| 5 | Greenfield RAG architecture | Healthcare Claims multi-agent | Cascading hallucinations across agents | Schema-validated JSON contracts | 5-stage pipeline (intake → fraud risk) w/ vector-indexed CPT/ICD | Audit-ready risk scoring | Schema = inter-agent contract |
| 6 | Production AI/ML | FastAPI ML services | Local notebooks didn't survive deploy | Package ML/LLM as services | FastAPI + Docker + structured logging + load sim | -30% post-deploy defects | Logs > tests for ML drift |
| 7 | Specialist user queries | Patient no-show recall tuning | High-risk patients missed appointments | Lift recall on high-risk class | Class-weighted XGBoost + threshold calibration | +15-20% recall, precision >90% | Threshold calibration > model swap |

**Case study:** Healthcare Claims Processing (multi-agent + vector-indexed CPT/ICD policies + audit-ready risk scoring) — strongest analog to Glass CDS architecture.

**Red-flag prep:** "Why apply for Founding when you have 2.5y?" → "I've shipped end-to-end (Manga Lens, Healthcare RAG with measurable production gains, multi-agent claims) — that's what 'founding' actually requires. The 6+y bar is a heuristic for that ownership signal; I'd rather show it directly."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on YC WaaS 2026-05-01 | Positive |
| JD specificity | Names Django, PostgreSQL, React, TS, OpenAI, GCP, Docker; concrete equity range | Positive |
| Salary transparency | $120k-$210k + 0.5-1.0% equity disclosed | Positive |
| Company info | Glass Health — physician co-founded, 2022; Kaiser Permanente Mid Atlantic partner; YC + Initialized backed | Positive |
| Reposting | First-seen 2026-05-01 in this scan; YC listing typically evergreen for founding roles | Neutral |
| Hiring signals | $6.5M raised, Series A pending, expanding team | Positive |

**Assessment: High Confidence.** Real, active opening with transparent comp, specific stack, and credible funding/partnership signals.

## Keywords extraídas

Founding AI/Data Engineer, Glass Health, healthcare AI, clinical decision support, ambient scribing, RAG, ELT, medical articles, vector search, semantic search, LLMs, OpenAI, Python, Django, PostgreSQL, React, TypeScript, GCP, Docker, HIPAA, EHR, generative AI, end-to-end product.
