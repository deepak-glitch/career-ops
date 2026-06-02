# Deepak Mallampati

**Applied AI Engineer** | Kent, OH | deepakmallampati00@gmail.com | (330) 554-0770
[linkedin.com/in/deepak-mallampati](https://www.linkedin.com/in/deepak-mallampati/)

## Summary

AI/ML Engineer with 4+ years building production-grade Generative AI and LLM systems for banking and regulated enterprises. Delivered cost savings through scalable RAG architecture, reducing hallucinations by **40%** and achieving **92% precision** across millions of regulatory documents. Expertise in multi-agent systems, MLOps, and compliant AI deployment across financial services, enterprise, and healthcare domains, with a proven track record of **99.9% uptime** and enterprise-scale performance.

## Skills

- **Generative AI & LLMs:** GPT-4o, GPT-5, Claude Sonnet, Gemini, LLaMA | LangChain/LangGraph | RAG Architecture | Prompt Engineering | Multi-Agent Systems | Fine-tuning (LoRA, QLoRA, PEFT) | Content Safety | Hugging Face Transformers
- **Machine Learning & NLP:** PyTorch, TensorFlow, Keras | NER, Text Classification, Summarization | Model Optimization | A/B Testing | Drift Detection | RAGAS Evaluation | BERTScore
- **Vector Search & Retrieval:** FAISS, Pinecone, Weaviate | Semantic & Hybrid Search | Cross-Encoder Re-ranking | Document Chunking Strategies | Semantic Caching
- **MLOps & Cloud Infrastructure:** AWS (EC2, S3, Lambda, Bedrock, SageMaker), Azure (OpenAI, AI Services, Content Safety), GCP Vertex AI | Docker, Kubernetes | Terraform | CI/CD (Jenkins, Azure DevOps) | MLflow, Weights & Biases | Model Monitoring & Observability
- **Data Engineering:** PostgreSQL, MongoDB, Redis | Spark, Databricks | Kafka | Pandas, NumPy | Data Lineage & Governance
- **Security & Compliance:** HIPAA, SOC 2, PCI DSS | OAuth 2.0, JWT, RBAC | PII Masking/Redaction | Prompt Injection Mitigation | Audit Logging | Zero-Trust Architecture
- **Languages & Tools:** Python, JavaScript/TypeScript, Java, SQL | FastAPI, React | Git, Jira, Confluence | Agile/Scrum

## Professional Experience

### AI Engineer — Progress Solutions
*Jul 2025 – Present | USA*

- Architected production-grade **agentic LLM systems** on a conductor–subagent orchestration framework, decomposing complex objectives into context-scoped subagents that execute autonomously — reducing token consumption by **42%** while sustaining task accuracy across multi-step workflows.
- Engineered high-performance **retrieval-augmented generation (RAG)** pipelines over large-scale healthcare document corpora, combining dense vector retrieval with cross-encoder re-ranking to lift answer relevance and materially reduce hallucination on domain-specific queries.
- Designed and operationalized **privacy-preserving data workflows** for sensitive clinical datasets, implementing K-anonymity, L-diversity, and differential privacy (Laplace mechanism) to enable compliant analytics and model development with zero PII exposure.
- Built fault-tolerant **automation infrastructure** featuring scheduled batch orchestration and exponential-backoff retry logic, improving pipeline reliability and reducing failed production runs by **60%**.
- Established a structured **LLM evaluation and monitoring framework** (RAGAS, BERTScore, custom domain metrics) paired with latency and accuracy dashboards to benchmark model iterations pre-deployment and surface regressions before release.
- Optimized inference cost and latency through prompt compression, semantic caching, and model routing, sustaining SLA targets while reducing per-query overhead.

### ML & Gen AI Research Assistant — Kent State University
*Oct 2023 – Jan 2024 | USA*

- Built a **privacy-preserving ML pipeline** on a clinical hospital-readmission dataset, applying k-anonymity (k=3), l-diversity (l=2), and Laplace differential privacy across four ε levels (0.1–2.0) over 8 clinical features.
- Reduced record-linkage re-identification risk from **3.38% to 0.32%** and eliminated unique-record exposure (0.94% → 0%) under k-anonymity + l-diversity, while retaining **99% of baseline predictive performance** (Random Forest AUC 0.689 vs. 0.696; weighted-F1 0.895).
- Designed a composite **privacy–utility scoring framework** to benchmark six anonymization configurations, identifying k=3 / l=2 as the optimal operating point (privacy 0.70 / utility 0.71) and quantifying differential privacy's steep utility cost (utility 0.90 → 0.19, attribute error 5.8 → 38.5 at ε=0.1).
- Fine-tuned **Qwen3-27B via 4-bit QLoRA** on an NVIDIA H100 using a curated 361-example instruction dataset, conditioning the model on a six-stage narrative schema (Hook → Foreshadow → Obstacle → Amplifier → Twist → Payoff) for controllable long-form generation.
- Authored a peer-review-ready **IEEE-format conference paper** documenting the methodology, experiments, and results (LaTeX).

### AI Engineer Intern — Vanguard
*Jan 2024 – Jan 2025 | USA*

- Developed and enhanced **AI agents and backend services** for Vanguard's internal AI platform, integrating with production data pipelines and observability tooling across **25+ AI agents** and workflows.
- Optimized LLM prompts and evaluated **GPT-4o, Claude Sonnet, and Gemini** models, improving task success rates by **27%** on internal evaluation datasets and informing platform model-selection decisions.
- Engineered safeguards and content controls for secure, policy-compliant AI responses, reducing unsafe outputs by **42%** while maintaining response quality.
- Built **12 APIs and microservices** powering new AI capabilities, reducing p95 latency from 1.5s to **800ms** and accelerating feature integration by **40%**.
- Partnered with product, platform, and data engineering teams to deliver scalable LLM applications supporting **100,000+ requests daily** across 20+ internal teams.

### ML Trainee — Emerson
*Jun 2022 – Apr 2023 | India*

- Developed and trained supervised **regression and classification models** on operational pipeline-storage data, applying standard ML workflows to equipment-failure prediction, anomaly detection, and capacity forecasting.
- Engineered features and executed end-to-end data preprocessing — cleaning, normalization, and transformation of raw sensor and operational datasets — to produce model-ready training pipelines.
- Fine-tuned **BERT and RoBERTa** models for entity extraction and text classification on domain-specific financial datasets, achieving **89% F1-score** on custom NER tasks.

### ML Intern — Suvidha Foundation
*Jan 2022 – Mar 2022 | India*

- Designed and built an end-to-end **video summarization and highlight-generation pipeline**, integrating speech-to-text, transformer-based abstractive summarization, and timestamp-aligned clip extraction.
- Deployed the pipeline across **5,000+ videos**, automating highlight selection and reducing manual editing effort by **70%**.

## Projects

**MangaLens** — A shipped Chrome extension (live on the Chrome Web Store) delivering real-time AI translation of manga and webtoons across **29+ sites**. It breaks the language barrier that keeps untranslated works out of reach for readers worldwide, turning a multi-step manual translation chore into a single inline action.

**career-ops** — An autonomous, AI-driven job-search pipeline that scans listings, scores fit, and generates tailored applications overnight without supervision. It compresses hours of repetitive job-hunting into an automated workflow — a productivity tool with direct, practical impact for anyone navigating today's job market.

**Privacy-Preserving Clinical ML Pipeline** — A framework that lets researchers analyze sensitive patient data without exposing identities, combining k-anonymity, l-diversity, and differential privacy. It tackles a real societal tension — advancing medical research while protecting patient privacy — and quantifies exactly how much privacy each technique buys for how little accuracy cost.

**Story Director LLM** — A fine-tuned language model that generates structured short-form video narratives from a single prompt, paired with an automated rendering pipeline. It lowers the barrier to content creation, letting one person produce finished video stories that would normally require a team.

## Education

**M.S. in Computer Science** — Kent State University, OH
*2025 | GPA: 3.70 / 4.0*

## Work Authorization

F-1 OPT — authorized to work in the United States now; future sponsorship required.
