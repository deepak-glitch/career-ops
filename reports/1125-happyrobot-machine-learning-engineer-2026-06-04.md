# Evaluación: Happyrobot — Machine Learning Engineer

**Fecha:** 2026-06-04
**Arquetipo:** ML Engineer (Applied AI Systems) + AI Platform / MLOps Engineer
**Score:** 3.7/5
**URL:** https://jobs.ashbyhq.com/happyrobot.ai/43d9bd48-7701-4719-affd-ecf92adfc37a
**Legitimacy:** High Confidence
**Location:** Spain (EU) — full-time; first ML hire (likely hybrid/onsite Madrid or Barcelona, verify with recruiter)
**Region:** US
**PDF:** output/2026-06-04/cv-deepak-mallampati-happyrobot-machine-learning-engineer-2026-06-04.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | ML Engineer (Applied AI Systems) + AI Platform / MLOps |
| Domain | LLMOps / ML platform — voice + language AI workforce for enterprises (logistics origin) |
| Function | Build + deploy (own full ML lifecycle: data → train → deploy → monitor) |
| Seniority | Mid IC, but "one of our first ML hires" → high ownership, founder mindset |
| Remote | Spain-based, full-time (early-stage; on-site/hybrid likely) |
| Team size | Founding ML — shapes tech + direction |
| TL;DR | Build real-time, scalable ML systems (speech/language) end-to-end as an early ML hire at a YC S23 / a16z-backed AI startup ($60M+ raised). |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Fit |
|------------------|-----------------|-----|
| Strong ML, deep learning, NLP | BERT/RoBERTa NER (89% F1); RAG; PyTorch/TensorFlow; text classification, summarization | ✅ Strong |
| MLOps + data pipelines (deploy, monitor, scale) | MLflow, W&B in CV; model monitoring/observability; 60% fewer failed runs; batch orchestration | ✅ Strong |
| Python proficiency, familiarity with Go | Python primary ✅; Go = gap (has Java, not Go) | ⚠️ Partial |
| ML lifecycle tools (MLflow, Kubeflow, W&B) | MLflow + Weights & Biases explicitly listed | ✅ |
| Design ML systems for robustness/scalability/automation | Fault-tolerant automation, exponential-backoff retry, LLM eval framework (RAGAS/BERTScore) | ✅ |
| Strong coding, debugging, data engineering | PostgreSQL/Mongo/Redis, Spark/Databricks, Kafka, Pandas | ✅ |
| Real-time inference / latency focus | Vanguard p95 1.5s→800ms; prompt compression, semantic caching, model routing | ✅ Strong |
| Nice-to-have: speech recognition / TTS / audio | Video summarization pipeline w/ speech-to-text (5,000+ videos) | ✅ Bonus |
| Nice-to-have: LLMs / generative AI | Core strength — GPT-4o/5, Claude, agentic, RAG | ✅ Strong |
| Founder mindset / startup iteration | Founder of shipped products (MangaLens, career-ops); fast solo delivery | ✅ |

**Gaps + mitigación:**
1. **Go (nice-to-have for some pipelines).** Mitigation: strong Python + Java transfer; Go is learnable fast; not a hard gate.
2. **Location / work auth (practical blocker).** Spain-based, full-time; Deepak is US-based on F-1 OPT. Mitigation: confirm remote-from-US feasibility or EU sponsorship before investing; per location policy this is flagged, not a veto.

## C) Nivel y Estrategia

- **JD level:** Mid IC ML engineer with founding-hire ownership. No senior/staff gate — explicitly "first ML hires."
- **Candidate natural level:** Mid Applied-AI / MLOps — a strong direct match. The "own the entire lifecycle" framing rewards Deepak's breadth (data eng → modeling → serving → monitoring).
- **Sell-senior-without-lying:** Emphasize end-to-end ownership at Progress Solutions (agentic systems + eval/monitoring framework) and Vanguard (12 APIs, latency, safeguards). Founder projects prove the independence Happyrobot wants.
- **If downleveled:** N/A — this is already an IC role; negotiate equity given founding-hire status.

## D) Comp y Demanda

| Métrica | Dato | Fuente |
|---------|------|--------|
| ML Engineer Spain (avg) | ~€50K–€68K (range €41K–€84K) | ERI / Glassdoor (Spain) |
| Barcelona ML Engineer | ~€54K (€41K–€70K) | Glassdoor Barcelona |
| Madrid ML Engineer | ~€44K (€31K–€53K) | Glassdoor Madrid |
| Demand trend | High — ML/MLOps at funded AI startups is a hot segment | Market (qualitative) |

Early-stage equity likely material given founding-ML status; cash comp follows Spain market. Strong demand; reputable backers (a16z, Base10).

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | RAG/banking-led | Lead with "end-to-end ML lifecycle: pipelines, MLOps, real-time inference" | Mirror JD's lifecycle framing |
| 2 | Skills | MLOps mid-block | Promote MLflow/W&B, monitoring, CI/CD-for-ML to top | Direct JD must-haves |
| 3 | Experience (Progress) | Eval framework bullet | Emphasize RAGAS/BERTScore eval + latency/accuracy dashboards | "observability across AI systems" |
| 4 | Experience (Suvidha) | Video summarization | Surface speech-to-text pipeline | Speech/TTS nice-to-have bonus |
| 5 | Skills | Languages line | Note Python depth + Java→Go transferability | Address Go nice-to-have |

**LinkedIn:** headline → "ML / MLOps Engineer — production LLM + speech systems"; pin Vanguard latency + Progress eval framework; add Go to "learning" if pursued.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Own ML lifecycle end-to-end | Progress agentic LLM system | Complex multi-step objectives | Build + operate full system | Conductor–subagent + eval + monitoring | 42% token cut, accuracy held | Owning eval early prevents silent regressions |
| 2 | MLOps: versioning, monitoring, CI/CD | Vanguard platform + Progress eval | Models needed safe, reliable serving | Stand up monitoring + safeguards | RAGAS/BERTScore dashboards, content controls | 42% fewer unsafe outputs | Monitoring is a feature, not an afterthought |
| 3 | Real-time, scalable inference | Vanguard latency optimization | p95 too slow for product | Cut latency without quality loss | Prompt compression, semantic caching, routing | 1.5s→800ms p95 | Caching + routing buy the most latency per effort |
| 4 | NLP / deep learning | Emerson BERT/RoBERTa NER | Domain entity extraction needed | Fine-tune transformers | Custom NER on financial data | 89% F1 | Domain data beats bigger generic models |
| 5 | Speech / audio (nice-to-have) | Suvidha video summarization | 5,000+ videos to summarize | Build STT→summarize→clip pipeline | Speech-to-text + abstractive summarization | 70% less manual editing | End-to-end pipelines need tight timestamp alignment |
| 6 | Founder mindset / ownership | MangaLens + career-ops | No team, full ownership needed | Ship + maintain solo | Live Chrome extension (29+ sites); autonomous job pipeline | Real users, real automation | Shipping solo forces ruthless prioritization |

- **Case study to present:** Progress Solutions agentic LLM + eval/monitoring framework — directly mirrors "own the lifecycle + MLOps."
- **Red-flag Qs:** "Do you know Go?" → Python depth + Java, Go ramp is fast. "Can you work from Spain?" → US-based F-1 OPT; clarify remote/sponsorship feasibility honestly.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Ashby posting; GraphQL returns full active record | Positive |
| Description quality | Specific stack (MLflow/Kubeflow/W&B, Airflow/Prefect/Dagster), clear scope, named domain | Positive |
| Company hiring signals | YC S23, a16z + Base10, $60M+ raised; battle-tested in logistics | Positive |
| Reposting | Net-new this run; not in prior scan-history | Neutral |
| Role market context | Founding-ML hire at a funded startup is a normal, real need | Positive |

**Context Notes:** Early-stage = scope/title may flex; "founder mindset" signals high autonomy expectation. No ghost-job indicators.

## Keywords extraídas

Machine Learning Engineer, MLOps, ML pipelines, model deployment, monitoring, MLflow, Kubeflow, Weights & Biases, Python, Go, real-time inference, NLP, deep learning, speech recognition, TTS, LLM, generative AI, scalability, data engineering, CI/CD for ML
