# Evaluación: Databricks — AI Engineer - FDE (Forward Deployed Engineer)

**Fecha:** 2026-04-23
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Applied AI / LLM Engineer
**Score:** 3.7/5
**URL:** https://www.databricks.com/company/careers/professional-services-operations/ai-engineer---fde-forward-deployed-engineer-8335860002
**Legitimacy:** High Confidence
**Location:** Remote US (JD: "This role can be remote."). US employment. **F-1 OPT friendly** (Databricks is a known sponsor).
**PDF:** output/2026-04-23/cv-deepak-mallampati-databricks-ai-fde-2026-04-23.pdf

---

## A) Resumen del Rol

| Dimensión | Valor |
|-----------|-------|
| Arquetipo | AI Solutions / FDE — GenAI customer delivery (Mosaic AI Research handoffs) |
| Domain | Customer-facing Professional Services; GenAI / RAG / multi-agent / fine-tuning / Text2SQL |
| Function | Deliver GenAI engagements; productionize customer AI applications; shape product with feedback |
| Seniority | Mid-to-Senior IC — "Extensive years of hands-on industry data science experience" |
| Remote | Remote US |
| Team size | AI FDE team (large; org includes Sr. FDE, Head of AI FDE APJ, Deloitte partnership variants) |
| Location | **Remote US** — F-1 OPT eligible employer |
| TL;DR | Databricks' AI FDE role is a strong archetype fit (GenAI + RAG + multi-agent + fine-tune + eval + MLOps) but the seniority bar is "extensive years" of industry data science, which is a stretch for Deepak at 2.5 yrs. Remote US + F-1 OPT friendly + Mosaic AI (strong research handoff) all positive. Apply with clear seniority acknowledgment + strong proof points. |

## B) Match con CV

| JD Requirement | CV Match | Evidencia |
|----------------|----------|-----------|
| Build GenAI applications (RAG, multi-agent, Text2SQL, fine-tuning) | **STRONG** | cv.md L25-26 RAG + agentic workflows; L71-72 Agentic Claims multi-agent; L63 fine-tuning (Stable Diffusion + LoRA) |
| HuggingFace, LangChain, DSPy tooling | **MEDIUM/STRONG** | cv.md L14 Hugging Face Transformers, Diffusers, LangChain, LlamaIndex; DSPy not listed |
| Deploy production-grade GenAI + eval + optimization | **STRONG** | cv.md L25-28 production RAG; eval pipelines; ~35% precision gain |
| Data science tools (pandas, scikit-learn, PyTorch) | **STRONG** | cv.md L14-15 scikit-learn, XGBoost, PyTorch; L29 Pandas/NumPy preprocessing |
| Production ML on AWS/Azure/GCP | **MEDIUM** | cv.md L17 cloud-ready, Docker; no explicit AWS/Azure/GCP track record |
| Graduate degree in quantitative discipline | **STRONG** | cv.md L91 Master's @ Kent State |
| Collaborate cross-functionally (product + eng) | **STRONG** | cv.md L30 stakeholder-facing work; cv.md L49-55 Kent State coordination |
| Present at conferences (Data+AI Summit) | **WEAK** | No conference speaker track record yet |
| "Extensive years of hands-on industry DS experience" | **WEAK** | 2.5 yrs Applied AI + 1yr adjacent — below "extensive" bar |

**Gaps:**
1. **Years of experience** — JD says "extensive years." Deepak is 2.5 AI-core. Stretch but not veto. Databricks will downlevel if they like the profile.
2. **Cloud provider (AWS/Azure/GCP) production deployment** — Docker yes, but explicit cloud ML infrastructure weaker. Name specifically what's been done (containerization + cloud-ready packaging).
3. **DSPy** — Not in CV. Mention interest + adjacency (structured outputs + prompt engineering).
4. **Conference / thought leadership** — No speaker history. Not required, preferred.

## C) Nivel y Estrategia

- **JD level:** Mid-to-Senior IC. **Deepak:** 2.5 yrs AI-core. Downlevel risk.
- **Strategy:** Apply with: "Mid-level AI FDE with 2.5 yrs production Applied AI (healthcare RAG + agentic + predictive ML + LLM inference services). Open to level discussion — interested in FDE because I ship end-to-end and want enterprise GenAI delivery reps."
- **If downleveled:** Accept if comp is within $100-130K band. Databricks has parallel Sr. FDE posting — this one is for a less-senior slot.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Databricks AI FDE (mid) Remote US | $150-210K base + stock + bonus | Levels.fyi Databricks |
| Databricks Sr. FDE | $190-260K + stock | Levels.fyi |
| Databricks stock | Private, late-stage ($62B valuation) | Public reporting |
| Deepak target | $100-130K | config/profile.yml |

Upside comfortable above Deepak's floor. Stock liquidity depends on IPO timing.

## E) Plan de Personalización

| # | Sección | Cambio propuesto | Por qué |
|---|---------|------------------|---------|
| 1 | Summary | "Applied AI FDE — production RAG, agentic workflows, fine-tuning, eval-driven delivery. Ship end-to-end: data → models → APIs → Docker." | Mirror Databricks FDE phrasing |
| 2 | Skills — LLM & GenAI | Add DSPy (interest), RAG, multi-agent, fine-tuning, eval to top | JD explicit tooling |
| 3 | Progress Solutions bullets | Reorder: 1) RAG (35%) 2) agentic (eligibility/care) 3) predictive ML (15-20% recall) 4) FastAPI/Docker (30% defect reduction) | JD ordering |
| 4 | Projects | Lead with Agentic Claims (multi-agent + RAG-grounded), then Dream Decoder (multimodal), then Pixel Character (fine-tune + LoRA) | GenAI breadth |
| 5 | Cloud line | Add "Docker; cloud-ready (AWS-adjacent experience via healthcare RAG deploy)" | Soften cloud gap |
| 6 | Location | "Kent, OH — Remote US — F-1 OPT (sponsorship welcomed)" | Remote-US fit signal |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | Reflection |
|---|-----------------|-----------------|------------|
| 1 | Build GenAI RAG in production | Progress Solutions RAG — 35% precision, 90% alignment | Evaluation harness first, tuning second |
| 2 | Multi-agent systems | Agentic Claims — 5-stage pipeline w/ JSON schema contracts | Cascading hallucination is the #1 risk; schema contracts fix it |
| 3 | Fine-tuning | Pixel Character — Stable Diffusion + LoRA for identity consistency | LoRA rank vs training-time trade-off |
| 4 | Text2SQL-adjacent (structured outputs) | Progress Solutions agentic eligibility → JSON structured outputs | Grounding rules > prompt length |
| 5 | Customer-facing technical | Progress stakeholder docs; Suvidha Flask UI for non-technical users | Accessibility drives adoption |
| 6 | Eval-driven optimization | Progress Solutions 30% defect reduction post-deploy | Load simulation before production rollout |
| 7 | Conference / thought leadership (prep answer) | Dream Decoder write-up (planned) | Will commit to a Data+AI Summit submission in year 1 |

**Case study:** Agentic Healthcare Claims — multi-agent GenAI, RAG-grounded, schema-safe; direct analog to Databricks FDE customer engagements.

**Red flag questions:**
- "Have you shipped to an enterprise customer?" → "Direct: internal healthcare stakeholder delivery. Not Fortune 500 external. Eager for this reps."
- "Apache Spark / Databricks SQL / Delta Lake?" → "Adjacent via SQL-heavy Emerson (T-SQL, Jenkins CI/CD). Spark is on my ramp list."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Active on databricks.com/careers | Positive |
| JD specificity | Mosaic AI Research, HuggingFace, LangChain, DSPy, Data+AI Summit — named tools | Positive |
| Salary transparency | Not in visible JD (state-dependent) | Neutral |
| Company hiring signals | Databricks growing FDE org globally (APJ, US Federal, Public Sector) | Positive |
| Reposting pattern | Parallel FDE roles (Sr. FDE 8450580002; Federal; Public Sector; APJ; Deloitte partnership) — clear org build-out | Positive |

**Assessment: High Confidence.**

## H) Draft Application Answers

**Why Databricks AI FDE?** > "Databricks' lakehouse + Mosaic AI stack is where enterprise GenAI actually ships. The FDE role is the best way to learn enterprise deployment at scale while shipping real GenAI applications. I've already built production RAG (~35% precision gain, >30% hallucination reduction), agentic workflows with JSON schema contracts, and eval-driven ML pipelines in healthcare. Ready to bring that to Databricks customers."

**Relevant project:** > "Agentic Healthcare Claims: 5-stage multi-agent pipeline with JSON schema contracts — Databricks' Agent Bricks pattern. RAG-grounded CPT/ICD validation + explainable fraud scoring."

**Seniority honesty:** > "2.5 yrs AI-core + 1 yr DB/DevOps. Open to mid vs senior leveling; I optimize for ship velocity + customer outcomes."

**Work authorization:** > "US-based, F-1 OPT, open to sponsorship."

---

## Keywords extraídas

Forward Deployed Engineer, FDE, AI Engineer, GenAI, RAG, multi-agent, Text2SQL, fine-tuning, HuggingFace, LangChain, DSPy, Mosaic AI, Databricks, production ML, AWS, Azure, GCP, scikit-learn, PyTorch, pandas, professional services, customer-facing, evaluation, optimization, Data+AI Summit.
