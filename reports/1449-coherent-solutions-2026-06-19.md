# Evaluación: Coherent Solutions — AI Engineer (Life Sciences & Healthcare)

**Fecha:** 2026-06-19
**Arquetipo:** Applied AI / LLM Engineer + ML Engineer (Applied AI Systems) + AI Platform / MLOps
**Score:** 3.4/5
**URL:** https://job-boards.greenhouse.io/coherentsolutions/jobs/4896325101
**Legitimacy:** High Confidence
**Location:** Bulgaria (EU) — no remote designation stated; application form offers multiple country options
**Region:** Intl
**PDF:** output-intl/2026-06-19/cv-deepak-mallampati-coherent-solutions-2026-06-19.pdf
**Verification:** confirmed active (Greenhouse JD live — full description + Apply button present)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM (primary) + ML Engineer + MLOps (secondary) |
| Domain | Software consultancy — Life Sciences & Healthcare AI delivery |
| Function | Build (ML/DL models + AI/ML pipelines) + deploy (MLOps) |
| Seniority | Mid-IC (not explicitly leveled in JD) |
| Remote | Bulgaria-based; remote not stated (form lists multiple countries) |
| Team size | Not disclosed |

**TL;DR:** Coherent Solutions is hiring an AI Engineer for Life Sciences & Healthcare to design and deploy production ML/DL models, build end-to-end AI/ML pipelines with monitoring, integrate AI via APIs/microservices, and apply MLOps (CI/CD, model monitoring, versioning). LLMs/RAG/agents are preferred. This is an excellent shape match for Deepak — healthcare ML + RAG + privacy-preserving pipelines + MLOps are all on his CV. The blocker is location: the posting is Bulgaria-based with no stated remote, which is an F-1 OPT mismatch — flag in Block A, but per profile policy this does NOT veto the score; downgrade the remote dimension to 3.0 rather than 1.0.

## B) Match con CV

| JD requirement | CV proof (line) |
|----------------|----------------|
| Design & deploy ML/DL models for production | cv.md L53 (regression/classification, equipment-failure prediction) + L36 (Random Forest AUC 0.689) |
| End-to-end AI/ML pipelines with monitoring | cv.md L29 (LLM eval + monitoring framework, RAGAS/BERTScore) + L35 (privacy ML pipeline) |
| Integrate AI via APIs / microservices | cv.md L47 (12 APIs/microservices) |
| Work with LLMs, RAG pipelines, AI agents | cv.md L25 (agentic LLM) + L26 (healthcare RAG) + L12 (LangChain/LangGraph) |
| Python (and/or TypeScript/C#) | cv.md L18 (Python, JavaScript/TypeScript) |
| ML frameworks: PyTorch / TensorFlow / Scikit-learn | cv.md L13 (PyTorch, TensorFlow, Keras) |
| Production ML deployment | cv.md L25-30 (production agentic + RAG systems) + L8 (99.9% uptime) |
| MLOps: CI/CD, model monitoring, versioning | cv.md L15 (CI/CD, MLflow, W&B, model monitoring) |
| Cloud (Azure / AWS / GCP) | cv.md L15 (AWS Bedrock/SageMaker, Azure OpenAI, GCP Vertex AI) |
| Vector databases (Pinecone, Weaviate) — preferred | cv.md L14 (FAISS, Pinecone, Weaviate) |
| Model evaluation frameworks — preferred | cv.md L13 (RAGAS, BERTScore) + L29 (eval framework) |
| Healthcare / life-sciences domain | cv.md L26 (healthcare RAG) + L35 (clinical readmission ML) + L8 (healthcare domain) |

**Gaps:**
1. **Location: Bulgaria, no stated remote** (hard logistical for F-1 OPT) — Deepak is US-based on F-1 OPT and cannot relocate to the EU without sponsorship/relocation. *Mitigation:* clarify whether the role is remote-eligible from the US or EU-remote only. If on-site Bulgaria only, this is a blocker despite the strong skills fit — apply only if remote-from-US is on the table.
2. **C# / TypeScript** (soft) — JD says "Python and/or TypeScript/C#"; Deepak is Python-first (TS via MangaLens). *Mitigation:* Python alone satisfies the "and/or"; mention TS for completeness.
3. **English B2+** (none) — Deepak is fluent; non-issue.

## C) Nivel y Estrategia

**Detected level:** Mid-IC production ML engineer. Strong match to Deepak's level.

**Plan "vender senior sin mentir":**
- Lead with the healthcare RAG pipeline (dense retrieval + cross-encoder rerank, 40% hallucination reduction, 92% precision per cv.md L8) — directly the LLM/RAG-in-healthcare the JD prefers.
- Pair the privacy-preserving clinical ML pipeline (re-identification risk 3.38%→0.32%, 99% predictive performance retained) as proof of regulated-healthcare ML rigor.
- Frame the LLM eval/monitoring framework + CI/CD + MLflow as direct MLOps evidence.

**Plan "si me downlevelan":** Skills exceed a junior bar; the real negotiation is location/remote, not level. If remote-from-US isn't possible, the fit is moot.

## D) Comp y Demanda

| Source | Range |
|--------|-------|
| JD | Not disclosed |
| Glassdoor — AI/ML Engineer Bulgaria (2026) | BGN 60–110K (~€30–56K / ~$33–61K USD) |
| Levels.fyi — ML Engineer EU mid-IC remote (2026) | €55–95K (~$60–103K USD) |
| US-remote Applied AI mid-IC (reference) | $130–175K base |

Bulgaria local bands are substantially below US-remote. If the role pays a Bulgaria-local band and requires EU presence, the comp + relocation math is unattractive for a US-based F-1 OPT candidate. Confirm remote eligibility and comp currency before pursuing.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years..." | "Applied AI engineer for regulated healthcare — production ML/DL, RAG pipelines, and MLOps (CI/CD, monitoring, versioning) shipped end-to-end." | Mirror the JD's healthcare + MLOps framing. |
| 2 | Skills order | LLMs first | Lead with "Production ML/DL (PyTorch/TF/Scikit-learn), RAG, MLOps (CI/CD, MLflow, monitoring), cloud (Azure/AWS/GCP), vector DBs" | Match JD required+preferred order. |
| 3 | Healthcare proof | Spread across CV | Cluster healthcare RAG + privacy ML + readmission into a "Healthcare AI" highlight | JD is explicitly life-sciences/healthcare. |
| 4 | MLOps bullet | cv.md L15/L29 | Surface CI/CD + MLflow + model monitoring near the top | JD lists MLOps as a hard requirement. |
| 5 | Footer | "Kent, OH" | "US-based, F-1 OPT — open to remote / relocation discussion" | Be honest about authorization for an EU-based posting. |

LinkedIn: Headline "Applied AI Engineer | Healthcare ML, RAG & MLOps"; Featured: Privacy-Preserving Clinical ML Pipeline.

## F) Plan de Entrevistas

| # | JD Req | STAR+R | S | T | A | R | Reflection |
|---|--------|--------|---|---|---|---|------------|
| 1 | Production ML/DL deployment | Progress healthcare RAG | Clinical Q&A hallucinating on long docs | Ground answers in production | Dense retrieval + cross-encoder rerank + RAGAS | 40% hallucination reduction, 92% precision | Rerank wins on long-form medical |
| 2 | End-to-end AI/ML pipelines + monitoring | Progress eval framework | No way to catch regressions pre-deploy | Benchmark before release | RAGAS/BERTScore + latency/accuracy dashboards | Regressions surfaced before release | Eval gates are cheaper than incidents |
| 3 | Regulated-healthcare ML rigor | Privacy-preserving clinical pipeline | Patient data couldn't be analyzed safely | Enable compliant analytics | k-anonymity + l-diversity + differential privacy | Re-id risk 3.38%→0.32%, 99% perf retained | Quantify the privacy–utility tradeoff, don't guess |
| 4 | MLOps (CI/CD, versioning, monitoring) | Vanguard platform | 12 APIs needed safe rollout | Ship without regressions | CI/CD + model monitoring + observability | p95 1.5s→800ms, integration +40% | Monitoring is what makes ML "production" |
| 5 | LLMs / RAG / agents | Progress conductor–subagent | Multi-step clinical objectives drifting | Make agent outputs reliable | Context-scoped subagents + tool budgets | 42% token reduction, accuracy held | Contracts > prompts in regulated domains |
| 6 | Classic ML (Scikit-learn) | Kent State readmission ML | Predict readmission under privacy constraints | Build accurate + private model | Random Forest + anonymization configs | AUC 0.689 vs 0.696 baseline, F1 0.895 | Privacy can cost <1% accuracy if you tune it |

Case study: **Privacy-Preserving Clinical ML Pipeline** — the strongest proof of rigorous, compliant life-sciences ML.

Red-flag: "Are you able to work from Bulgaria / the EU?" → "I'm US-based on F-1 OPT. I'd want to confirm whether this role is remote-eligible from the US or EU-remote; the technical fit is strong and I'd love to find a workable arrangement."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live Greenhouse JD with full description + active Apply button | Positive |
| Tech specificity | Names PyTorch/TF/Scikit-learn, MLOps (CI/CD, monitoring, versioning), Azure/AWS/GCP, RAG, vector DBs | Positive |
| Realism | Coherent mid-IC production-ML scope; required vs preferred cleanly separated | Positive |
| Salary transparency | Not disclosed | Concerning |
| Company legitimacy | Coherent Solutions — established global software consultancy | Positive |
| Reposting | First appearance in scan-history (no prior dupes) | Positive |
| Layoff/freeze signals | None found | Positive |

**Context notes:** Authenticity is high — live Greenhouse posting, full JD, named stack. The only real friction is location/work-authorization (Bulgaria/EU vs US-based F-1 OPT), which is a fit issue, not a legitimacy one. Per profile policy, location does not veto the score.

## H) Draft Application Answers

(Score 3.0–3.9 — short drafts)

**Q: Why are you a fit for this Life Sciences & Healthcare AI Engineer role?**
> Healthcare AI is where most of my production work lives. At Progress I built a healthcare RAG pipeline (dense retrieval + cross-encoder rerank) that cut hallucination ~40% at 92% precision, plus privacy-preserving clinical ML that dropped re-identification risk from 3.38% to 0.32% while keeping 99% of predictive performance. I own the full MLOps loop — CI/CD, MLflow, model monitoring — across Azure/AWS/GCP. I'd bring that regulated-healthcare rigor to your life-sciences delivery.

**Q: Work authorization / location?**
> I'm US-based on F-1 OPT. I'd like to confirm whether this role is remote-eligible from the US (or EU-remote); the technical fit is strong and I'm keen to find an arrangement that works.

---

## Keywords extraídas

AI Engineer, Life Sciences, Healthcare AI, machine learning, deep learning, production ML, AI/ML pipelines, MLOps, CI/CD, model monitoring, model versioning, RAG pipelines, LLMs, AI agents, PyTorch, TensorFlow, Scikit-learn, Python, Azure, AWS, GCP, vector databases, Pinecone, Weaviate, microservices
