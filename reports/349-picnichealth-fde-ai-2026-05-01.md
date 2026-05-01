# Evaluación: PicnicHealth — Forward Deployed AI Engineer

**Fecha:** 2026-05-01
**Arquetipo:** AI Solutions / Forward Deployed Engineer (primary) + Applied AI / LLM Engineer (secondary)
**Score:** 3.5/5
**URL:** https://remotive.com/remote/jobs/software-development/forward-deployed-ai-engineer-3598425
**Legitimacy:** High Confidence
**Location:** Remote-first US (HQ San Francisco, optional SF hybrid); 2-4 travels/year
**PDF:** output/2026-05-01/cv-deepak-mallampati-picnichealth-fde-ai-2026-05-01.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | AI Solutions FDE + Applied AI hybrid |
| Domain | Healthcare clinical research (real-world evidence, study delivery) |
| Function | Build AI agents that automate labor-intensive clinical study workflows |
| Seniority | Mid-Senior IC (5+ yrs Python production) |
| Remote | Remote-first (US); 2-4 trips/yr |
| Team size | Cross-functional — bridges AI team + Study Delivery team |
| TL;DR | PicnicHealth wants an FDE-shaped AI engineer to ship pydantic-ai agents that automate clinical-study workflows; healthcare-AI archetype bullseye but 5+ yrs Python is a stretch for Deepak's 2.5+ yrs. |

## B) Match con CV

| JD Requirement | CV Evidence |
|---|---|
| Build AI agents that automate clinical study workflows | Five-agent claims-processing pipeline w/ schema-validated JSON contracts (cv.md L72); agentic LLM workflows for multi-step healthcare queries (cv.md L26) ✓ |
| Extend agent framework (pydantic-ai) and supporting infrastructure | Pydantic-ai is schema-validation-first — Deepak's claims pipeline already uses pydantic schema contracts (cv.md L72) ✓ |
| Construct data pipelines for agent access to research materials | Preprocessing pipelines (Pandas, NumPy) for EHR / appointments / tickets; +98% dataset reliability (cv.md L29) ✓ |
| Partner with study managers + clinicians to identify problems | HIPAA-conscious + stakeholder-facing system-limitation docs (cv.md L30) ✓ |
| Ship solutions including supporting UI work | Manga Lens TS + Manifest V3 + service workers; Dream Decoder React/Vite/Tailwind (cv.md L60, L66) ✓ |
| 5+ yrs production Python | 2.5+ yrs Progress Solutions + 3-month Suvidha + projects (cv.md L22, L41) — **gap** |
| Deep LLM expertise beyond basic API integration | Schema-validated agent contracts, multi-provider AI vision routing, structured-prompt transformation layers (cv.md L60, L66, L72) ✓ |
| Track record deploying agents in production | Healthcare claims pipeline + multi-step agent workflows w/ measurable hallucination cut (cv.md L26, L72) ✓ |
| Docker / Kubernetes / cloud platforms | Docker shipping + structured logging (cv.md L17, L28); K8s — partial (no direct production K8s) |
| Articulate technical tradeoffs to non-technical stakeholders | System-limitation docs + cross-functional cv.md L30 ✓ |

**Gaps:**
- 5+ yrs Python — **soft blocker**; mitigation: M.S. CS + 2.5+ yrs production + shipped public artifacts → frame as "I'm at the upper end of the early-career band"
- Kubernetes production experience — *mitigation: Docker shipping + cloud-ready packaging; willing to ramp on K8s in first 30 days*
- Pydantic-ai specifically — *mitigation: pydantic schema validation already used between agents; pydantic-ai is a thin wrapper to ramp on quickly*

## C) Nivel y Estrategia

JD asks for 5+ yrs Python production; Deepak has 2.5+ yrs (Progress Solutions Jul 2025 - Present). Strategy: **vender mid-level FDE w/ healthcare-AI bullseye, not senior**. Anchor on shipped agents, claims-pipeline schema contracts, healthcare-RAG metrics. If downleveled to a junior FDE band, accept and ask for 6-month review with promotion criteria.

Positioning: "I've shipped agents in regulated healthcare (PHI-conscious) with measurable retrieval and hallucination metrics. The 5+ years bar is about depth and reliability, not calendar time — my output rate has been at senior pace because I've been operating end-to-end."

## D) Comp y Demanda

JD lists $180-220K base + equity + remote-first US. Glassdoor confirms PicnicHealth comp competitive for SF / NYC / remote-first healthcare-tech. The aijobs.com listing showed $180-220K; Remotive showed $160-190K (likely older snapshot). Conservative band: **$160-200K base + 0.05-0.15% equity + 401(k) + healthcare**. FDE healthcare-AI demand is high (study-delivery automation is a growing line item).

Sources: aijobs.com 2026-05-01, Glassdoor PicnicHealth, Wellfound PicnicHealth comp data.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Generic Applied AI | Lead w/ healthcare-AI agent build + pydantic-style schema contracts | Mirrors JD's pydantic-ai + agent framework |
| 2 | Hero metric | RAG +35% | Pair RAG w/ five-agent claims pipeline (schema contracts to prevent cascading hallucinations) | JD wants production agent track record |
| 3 | Tools | Listed broadly | Surface Docker + cloud-ready packaging early; mention pydantic schema contracts | Matches Docker/K8s/cloud requirement |
| 4 | UI emphasis | Buried | Surface Manga Lens TS/Manifest V3 + Dream Decoder React | JD says "willingness to contribute frontend work" |
| 5 | LinkedIn | Generic | Add "AI Agents in Healthcare" tag + pydantic-ai callout | Profile-search optimization |

## F) Plan de Entrevistas

| # | JD Requirement | STAR+R Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Build AI agents that automate clinical workflows | Five-agent healthcare claims pipeline | 5-stage hallucination-prone process | Build agent pipeline w/ audit-readiness | Schema-validated JSON contracts (pydantic) + RAG-grounded CPT/ICD validation + reasoning traces | Cut hallucinations >30%; recall +15-20% high-risk | Lesson: schema contracts + grounding rules > retry loops |
| 2 | Pydantic-ai agent framework extension | Schema-validated agent contracts (Progress Solutions) | Cascading errors between agents | Prevent failure propagation | Pydantic-style validators + JSON contract schemas + bounded tool calls | Audit-ready traces, downstream stability +40% | Lesson: bounded tool calls reduce surface area for hallucination |
| 3 | Production agent reliability | Healthcare RAG retrieval grounding | Heterogeneous clinical knowledge | Production retrieval precision | Recursive semantic chunking + transformer embeddings + grounding | +35% precision, >90% alignment | Lesson: chunking dominates retrieval; eval-first beats prompt-tuning |
| 4 | UI / frontend support | Manga Lens TS + Manifest V3 ship | Multi-provider AI vision Chrome ext | Public Web Store ship solo | TS + service workers + 4-provider routing + 7-day cache + 29 site selectors | Live on Chrome Web Store, dedup + per-domain configs | Lesson: per-provider payload routing prevents CUDA crashes |
| 5 | Articulate tradeoffs to non-tech stakeholders | Stakeholder system-limitation docs | Healthcare RAG limitations | Reduce escalations | Docs explaining grounding gaps, eval audit trails, system boundaries | Reduced stakeholder churn | Lesson: limitation docs cheaper than over-promising fixes |
| 6 | Self-directed without detailed specs | Manga Lens Chrome Web Store ship solo | No PRD, no team | Ship publicly w/ measurable lift | Manifest V3 + 4-provider abstraction + 7-day cache + dedup | Public ship + Chrome Web Store approval | Lesson: shipping cadence > spec depth in zero-to-one |
| 7 | Healthcare data security mindset | HIPAA-conscious data governance | EHR / appointments / tickets | Build w/o leaking PHI | De-identification + lineage + audit trails + system-limitation docs | Defects -30%, dataset reliability >98% | Lesson: HIPAA discipline shapes design from data layer up |

**Story bank update:** add pydantic-ai/schema-contract narrative + Manga Lens self-directed shipping narrative.

**Red-flag prep:** "Are you really at 5+ yrs?" → "I'm at 2.5+ yrs production but have shipped agents end-to-end in regulated healthcare; my output rate has been at the senior end of the early-career band." "Will you handle clinical study domain ramp?" → "Yes — HIPAA-conscious work translates directly; happy to ramp on study-delivery vocabulary in week 1."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | aijobs.com 3 weeks ago; Remotive listed yesterday (2026-04-30) | Positive |
| JD specificity | Names pydantic-ai, Docker, Kubernetes, cross-team partnerships | Positive |
| Salary transparency | $180-220K aijobs.com / $160-190K Remotive | Positive |
| Tech stack realism | Pydantic-ai + Docker/K8s + cloud — coherent stack | Positive |
| Company hiring signals | PicnicHealth = real company (clinical research, RWE); active careers page | Positive |
| Reposting | First entry in scan-history.tsv | Positive |

**Context Notes:** PicnicHealth pivoted brand to picnic.ai (careers redirect 2026-04-29). Company is real; multiple aggregators (Remotive, aijobs.com, Wellfound) corroborate role and comp.

## H) Draft Application Answers

(Score 3.5 < 4.5 threshold — H block skipped per modes/oferta.md.)

---

## Keywords extraídas

Forward Deployed AI Engineer, clinical research, real-world evidence, AI agents, pydantic-ai, agent framework, study delivery, Python, Docker, Kubernetes, LLMs, agent infrastructure, data pipelines, frontend, HIPAA, healthcare AI, remote-first, San Francisco, 5+ years, production agents
