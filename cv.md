# Deepak Mallampati

**Applied AI Engineer** | Kent, OH | deepakmallampati00@gmail.com | (330) 554-0770
[linkedin.com/in/deepak-mallampati](https://www.linkedin.com/in/deepak-mallampati/)

## Summary

Applied AI engineer (2.5+ years) building healthcare-focused RAG systems, agentic LLM workflows, predictive ML pipelines, and production-ready inference services. Master's degree (Kent State University). Strong track record of measurable gains: ~35% retrieval precision improvement, >30% hallucination reduction, 15–20% recall gains on high-risk patient categories, and ~30% fewer post-deployment defects. Comfortable owning end-to-end delivery across data, prompts, models, evaluation, APIs, and Docker-based deployment in HIPAA-conscious environments.

## Skills

- **Languages & Frameworks:** Python, FastAPI, Flask, SQL (T-SQL, PostgreSQL, SQLite), TypeScript, React, C++ (Arduino), PHP
- **LLM & GenAI:** LLM application development, Retrieval-Augmented Generation (RAG), agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, semantic retrieval, embeddings, vector search, responsible AI
- **ML Libraries:** scikit-learn, XGBoost, PyTorch, Hugging Face Transformers, Diffusers, LangChain, LlamaIndex
- **Computer Vision & Multimodal:** YOLOv8, OpenCV, ControlNet, OpenPose/MediaPipe, Stable Diffusion, video analytics
- **Data & Analytics:** Pandas, NumPy, feature engineering, time-series forecasting, walk-forward validation, NetworkX
- **Infra & DevOps:** Docker, Jenkins, Grafana, CI/CD, MLOps/LLMOps, RESTful APIs, cloud-ready deployment, observability/logging
- **Domains:** Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal Systems

## Professional Experience

### Jr. AI/ML Engineer Trainee — Progress Solutions Inc.
*Jul 2025 – Present | USA | Healthcare Technology, AI Consulting, SaaS Healthcare*

- Built **Retrieval-Augmented Generation (RAG) systems** for clinical knowledge retrieval and healthcare documentation search; implemented recursive semantic chunking and transformer-based embeddings; improved contextual retrieval precision by **~35%** and reduced irrelevant retrieval by **>30%**. Retrieval-grounded response alignment exceeded **90%** in evaluation.
- Developed **agentic LLM workflows** for multi-step healthcare queries (eligibility checks, care workflow navigation, documentation clarification) with structured reasoning, tool discipline, and grounding rules; improved agent response stability by **~25%**.
- Shipped **predictive ML pipelines** (scikit-learn, XGBoost) for patient no-show prediction, care engagement scoring, and support prioritization; improved recall by **15–20%** on high-risk categories while holding precision **>90%** via class weighting, stratified sampling, and threshold calibration.
- Packaged ML/LLM inference as **FastAPI/Flask** RESTful services, containerized with **Docker**, with structured logging and load simulation; reduced post-deployment defects by **~30%**.
- Built preprocessing pipelines (Pandas, NumPy) for EHR extracts, appointment histories, support ticket logs; raised dataset reliability above **98%** and cut downstream model instability by **~40%**.
- Maintained HIPAA-conscious data governance: de-identification, data lineage documentation, evaluation audit trails, and stakeholder-facing system-limitation docs.

### Database & DevOps Performance Engineer (Intern) — Energy Solutions International (Emerson)
*Jun 2022 – Apr 2023 | Hyderabad, India | Oil & Gas, Enterprise ERP, Industrial Automation*

- Optimized SQL and **T-SQL stored procedures** powering the Synthesis Order-to-Cash platform (contracts, nominations, allocations, invoicing); reduced query execution time **~20%** and data retrieval latency **~25%**.
- Built **CI/CD pipelines with Jenkins** for schema updates, version-controlled SQL scripts, and stored procedure deployments; reduced deployment errors **>30%** and improved release cycle time **~35–40%** via structured release validation and rollback checkpoints.
- Designed performance dashboards using **SQL Server DMVs and Grafana** to track long-running queries, deadlocks, CPU/I/O contention; cut incident recurrence **~25%** and improved root-cause resolution speed **~30%**.
- Tuned database maintenance (index rebuilds, statistics updates, partition-aware indexing) and reconciliation queries; improved reconciliation job runtime **~15%** and reduced deadlocks **~15%**.
- Supported RBAC implementation and audit logging for financial modules in a compliance-sensitive oil & gas environment.

### Machine Learning Engineer — Suvidha Foundation
*Jan 2022 – Mar 2022 | Hyderabad, India | Nonprofit Tech, Video Analytics, Applied NLP*

- Built a **transformer-based video summarization and highlight-generation system** across 5,000+ recorded sessions; transcript preprocessing, hierarchical summarization for long-context, and timestamp-aligned clip extraction reduced manual review time by **60–70%** (hours → <5 minutes per video).
- Achieved **~85% alignment** between AI-selected highlights and human-curated key moments.
- Implemented **document Q&A with RAG** (semantic chunking + embedding retrieval); reduced hallucinated outputs **~30%** and raised contextual answer accuracy **>85%** in controlled tests.
- Deployed the stack as a **Flask-based API** with a lightweight web interface for non-technical staff.

### Student Manager — Kent State University
*Aug 2023 – May 2025 | Ohio, USA | Higher Education, Operations Management*

- Led coordination for **150+ students** across academic and extracurricular initiatives; structured scheduling and communication reduced coordination delays **~30%** and logistical issues **~25%**.
- Managed event planning, budget tracking, and vendor comparison; achieved **10–15% cost efficiency** in select initiatives without quality loss.
- Built attendance, participation, and feedback tracking in Excel; surfaced engagement trends that informed scheduling decisions.
- Formalized onboarding for new team members, cutting ramp-up time **~20%**.

## Projects

**Manga Lens — Chrome Extension for Real-Time AI Manga/Webtoon Translation** *(shipped, Chrome Web Store)*
Full-stack browser extension built independently — Manifest V3, content scripts, service workers, and `captureVisibleTab` for panel capture. Integrates **four AI vision providers** (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local). Multi-section capture pipeline handles tall webtoon panels via viewport-slice screenshots with coordinate remapping and dedup. Seven-day translation cache, per-domain selector configs for 29 manga/webtoon sites, privacy policy, and narrowed host permissions. Multi-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash).

**Agentic Pixel Character Synthesis & Animation Engine** *(ongoing)*
Phased generative AI system for identity-consistent, pose-controlled pixel character synthesis with sprite-sheet export. Stable Diffusion fine-tuning + LoRA for identity consistency, ControlNet + OpenPose/MediaPipe for pose conditioning, latent-space consistency for animation smoothness, and an **LLM-based agent orchestrator** that decomposes high-level prompts into generation tasks. Backend: PyTorch, Hugging Face Diffusers, FastAPI, Docker.

**Dream Decoder — AI-Powered Multimodal Creative Intelligence Platform**
Full-stack FastAPI + React/TypeScript/Vite/Tailwind app that interprets dreams, generates poetic reinterpretations, and synthesizes dreamscapes via coordinated multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Introduced **intermediate structured prompt transformation layers** — improved contextual alignment **~30%** and first-pass image success rate **~25–30%** over naïve direct-prompt orchestration.

**Driver Drowsiness Detection System — Real-Time YOLOv8 Fatigue Monitoring**
Replaced a two-stage CNN pipeline with a **unified YOLOv8** detection-and-classification model; reduced inference latency **~30%**. LabelImg annotations, augmentation for lighting/head-pose robustness, sliding-window confidence aggregation to suppress blink-driven false positives (**~25% reduction**), adaptive frame skipping, and NMS tuning for stable real-time operation via OpenCV video capture.

**Agentic Healthcare Claims Processing & Fraud Risk Intelligence System**
Multi-agent pipeline (Intake Normalization → Validation → Consistency Analysis → Duplicate Detection → Fraud Risk Scoring) with **schema-validated JSON contracts between agents** to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policy documents; approximate-nearest-neighbor similarity search for duplicate claim detection; explainable risk scoring with audit-ready reasoning traces.

**Video Summarization & Highlight Generation System (Suvidha Foundation)**
Transformer-based hierarchical abstractive summarization mapped back to source timestamps for automated clip extraction. **60–70% reduction in manual review time**, **~85% highlight alignment** with human curation, Flask-based API for non-technical users.

**Geospatial Road Network Analysis & Community Detection System**
Parsed raw OpenStreetMap XML into a weighted `NetworkX` DiGraph; Haversine-based edge weighting; Dijkstra shortest-path routing; betweenness centrality on a 20k-node subgraph; Louvain community detection and Minimum Spanning Tree extraction for backbone analysis. ~30% runtime reduction via subgraph scoping.

**IoT + ML Smart Building Indoor Temperature Prediction System**
Arduino + DHT11 + DS3231 sensor pipeline with PLX-DAQ logging; time-series forecasting with walk-forward validation comparing Random Forest, SVR, and Linear Regression. Lag-window feature engineering (n_in=6); Random Forest achieved **~20–30% lower MAE** vs linear baseline.

**Patient Records Management Web Application**
Bottle + SQLite relational healthcare CRUD app with normalized `patients`/`diagnoses` schema, foreign-key constraints, application-layer cascade deletes, and `LEFT JOIN + GROUP_CONCAT` aggregation for single-query patient+diagnosis retrieval.

**E-Farming Digital Marketplace (Founder & Full-Stack Developer)**
Independently designed and shipped a PHP/MySQL/Bootstrap AgriTech marketplace connecting small-scale farmers with buyers. Onboarded **80–120 active users** in phase one; cart, reviews, and community blogging features to drive repeat engagement.

## Education

**Master's Degree — Kent State University, Ohio, USA**
*Aug 2023 – May 2025*

*(Add exact degree name, concentration, and GPA if desired.)*

## Work Authorization

F-1 OPT — authorized to work in the United States now; future sponsorship required.
