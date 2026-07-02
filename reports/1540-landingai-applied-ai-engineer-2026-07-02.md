# Evaluación: LandingAI — Customer-facing Applied AI Engineer (GTM)

**Fecha:** 2026-07-02
**Arquetipo:** AI Solutions / Forward Deployed Engineer + Computer Vision / Multimodal Engineer
**Score:** 3.3/5
**URL:** https://jobs.lever.co/AIFund/01654e18-7b7f-4f0d-84b4-9e090fbc73be
**Legitimacy:** High Confidence
**Location:** Mountain View, CA — hybrid/in-office; must be SF Bay Area-based
**Region:** US
**PDF:** output/2026-07-02/cv-deepak-mallampati-landingai-applied-ai-engineer-2026-07-02.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Solutions / Forward Deployed Engineer (customer-facing) + Computer Vision / Multimodal |
| Domain | Document AI — Agentic Document Extraction (ADE); founded by Andrew Ng; unstructured docs → structured data |
| Function | Customer-facing: pre-sales technical lead + design/deploy document AI + multimodal pipelines (OCR, LLM reasoning, extraction validation) across Snowflake/AWS/VPCs |
| Seniority | Senior (5+ yrs AI/ML, customer-facing/pre-sales; 2+ yrs cloud data platforms) |
| Remote | Hybrid/in-office (Mountain View); must be SF Bay Area-based |
| Team size | GTM team, cross-functional (product, eng, sales, partners) |
| TL;DR | Pre-sales + delivery Applied AI Engineer for a document-AI platform: lead POCs/demos, deploy multimodal extraction pipelines, and shape roadmap — heavy customer-facing + enterprise-sales (MEDDIC) component. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence | Match |
|----------------|-------------|-------|
| LLMs, NLP, multimodal AI, RAG, schema/grounding | LangChain/LangGraph, RAG, dense retrieval + re-rank; NER/text classification/summarization; RAGAS/grounding | ✅ Strong |
| Document AI / OCR / extraction / multimodal pipelines | Video summarization (speech-to-text + transformer summarization); NER/document processing; BERT/RoBERTa extraction | ⚠️ Partial (adjacent; not doc-IDP/OCR-specific) |
| Strong Python to guide coding agents + debug AI-written code | Python; agentic conductor–subagent framework; AI-native builder | ✅ Strong |
| Use Claude CLI to prototype pipelines + automate work | Built career-ops with Claude Code; MangaLens shipped | ✅ Strong |
| Cloud (AWS/GCP/Azure) + enterprise VPC + Docker/K8s | AWS/Azure/GCP; Docker/Kubernetes; Terraform | ✅ Strong (VPC not explicit) |
| 2+ yrs cloud data platforms, preferably Snowflake | PostgreSQL/MongoDB/Redis; Spark/Databricks; Kafka | ⚠️ Partial (Databricks yes; Snowflake not explicit) |
| **5+ yrs designing AI/ML in a pre-sales/customer-facing role** | 4+ yrs AI/ML, but **IC/build-focused**, not pre-sales/customer-facing | ❌ Gap (seniority + customer-facing) |
| **Enterprise sales (MEDDIC), technical deal cycles** | No sales/pre-sales/MEDDIC experience on CV | ❌ Gap |
| CV/deep learning (TensorFlow/PyTorch, object detection, OCR) — nice-to-have | PyTorch/TensorFlow/Keras; YOLOv8 detection (profile), video pipeline | ✅ Strong (nice-to-have) |
| Outstanding communication to technical + business stakeholders | Cross-team delivery (product/platform/data eng) | ⚠️ Partial (internal, not customer/exec-facing) |

**Gaps + mitigation:**
1. **5+ yrs + customer-facing pre-sales role (❌)** — the binding gap. Deepak is a build-focused IC (~4 yrs), not a pre-sales/solutions engineer. Not a fake-able gap. This is the primary score drag.
2. **Enterprise sales / MEDDIC (❌)** — no direct experience; could frame stakeholder-facing delivery + demoable shipped products, but genuine deal-cycle experience is absent.
3. **SF Bay Area-based, hybrid/in-office** — Deepak is OH, open to relocation; feasible but a hard geographic requirement.
4. **Snowflake** — Databricks/Spark transfer; ramp small.

Net: **strong technical fit** (LLM/NLP/multimodal/RAG/agentic/CV + Claude CLI), but the role is fundamentally a **senior customer-facing/pre-sales** position (5+ yrs, MEDDIC). The experience-level and function mismatch cap practical fit.

## C) Nivel y Estrategia

- **JD level:** Senior customer-facing Applied AI Engineer (5+ yrs, pre-sales). **Candidate level:** mid IC builder — below the stated bar on both years and function.
- **Sell-senior-without-lying:** Emphasize demoable shipped products (MangaLens, career-ops) as proof of "can build a POC fast and show it," plus multimodal/CV depth (video pipeline, YOLOv8) for the document-AI angle. But do **not** overstate pre-sales/sales experience.
- **Recommendation:** Borderline. Apply only if Deepak wants to pivot toward forward-deployed/customer-facing work and can speak credibly to demo/POC delivery; otherwise the DeepLearning.AI IC role (#1539) is the far better-fit sibling posting.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp (JD-disclosed) | **$175,000–$225,000 USD/yr** + equity/401k | JD (Lever) |
| vs. Deepak target ($100–130K) | Well above target — reflects senior + customer-facing level | profile.yml |
| Company | LandingAI (Andrew Ng) — AI Fund portfolio; ADE growing since early 2025 | JD / public |
| Demand | Document AI / IDP disruption is hot; but customer-facing AI eng is a distinct track | Market context |

Comp is high — consistent with the senior + pre-sales scope. The gap is fit/level, not money.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | IC/regulated framing | Add "builds + demos AI solutions end-to-end; multimodal/document understanding" | Bridge toward customer-facing delivery |
| 2 | Projects | career-ops + MangaLens | Foreground as shippable demos (POC-in-days proof) | Pre-sales values fast demoable POCs |
| 3 | Bullets | Video summarization | Surface multimodal/OCR-adjacent pipeline (speech→text→summary) | Document/multimodal AI angle |
| 4 | Skills | Vector/RAG | Foreground multimodal + CV (YOLOv8, transformers) + RAG/grounding | JD doc-AI + CV nice-to-have |
| 5 | Skills | Cloud | Lead AWS + note Databricks (Snowflake-adjacent) + Docker/K8s/VPC | JD Snowflake/AWS/VPC ask |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Multimodal/document pipeline | Video summarization pipeline | Manual video review burden | Automate highlights end-to-end | Speech-to-text + transformer summary + clip extraction | 70% less manual editing across 5,000+ videos | Multimodal pipelines are stitched, not monolithic |
| 2 | Build fast, demoable POC | MangaLens | Untranslated content barrier | Ship inline real-time translation | Chrome extension, 29+ sites, live on Web Store | Real users, shipped product | A working demo beats a deck |
| 3 | LLM reasoning + schema/grounding | Healthcare RAG | Hallucination on domain queries | Grounded, validated extraction | Dense retrieval + cross-encoder re-rank | Reduced hallucination | Grounding + validation is the reliability lever |
| 4 | Guide coding agents (Claude CLI) | career-ops | Repetitive delivery toil | Automate with agentic tooling | Built autonomous pipeline with Claude Code | Working autonomous product | Coding agents are a delivery multiplier |
| 5 | Deploy across cloud/VPC | Vanguard AI platform | Enterprise-scale AI services | Reliable secure deployment | 12 APIs/microservices, Docker/K8s, 100K+ req/day | p95 1.5s→800ms | Deployment discipline is the moat |
| 6 | Stakeholder communication | Cross-team delivery @ Vanguard | Align product/platform/data eng | Ship shared LLM capabilities | Partnered across 20+ teams | Scaled adoption | Communication is a delivery skill |

**Case study:** Video summarization (multimodal) + MangaLens (demoable shipped product) — closest bridge to document-AI + pre-sales demos.
**Red-flag Qs:** "Tell me about a pre-sales deal you led (MEDDIC)." → Answer honestly: "I've been build-focused, not in a formal pre-sales seat — but I've shipped demoable products and worked cross-functionally with product and stakeholders; I'd ramp on the sales-cycle mechanics fast." (Do not fabricate deal experience.)

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live on Lever (AI Fund board); structured API returns full JD | Positive |
| Tech specificity | Highly specific (ADE, OCR, multimodal, MEDDIC, Snowflake/VPC, named competitors) | Positive |
| Requirements realism | Coherent senior customer-facing scope | Positive |
| Company | LandingAI (Andrew Ng); AI Fund portfolio | Positive |
| Salary | Disclosed ($175–225K) + benefits | Positive |
| Location clarity | Explicit Bay Area hybrid/in-office | Positive |

**Context:** First-party AI Fund/Lever posting, named credible company, disclosed comp, specific stack + competitor list = high-confidence real role.

## H) Draft Application Answers

_(Score 3.3 < 4.5 — full drafts deferred; PDF tailored. Positioning line: "Applied AI engineer with multimodal/document-AI depth (video pipeline, RAG, grounding) and shipped demoable products (MangaLens, career-ops) — strong on the build side; transparent that the formal pre-sales/MEDDIC track would be a ramp." Note: recommend the sibling DeepLearning.AI IC role (#1539) as the stronger fit.)_

---

## Keywords extraídas

Applied AI, document AI, Agentic Document Extraction, OCR, multimodal, LLM, NLP, RAG, grounding, schema extraction, computer vision, object detection, PyTorch, TensorFlow, Snowflake, AWS, VPC, Docker, Kubernetes, Claude CLI, pre-sales, MEDDIC, customer-facing, Python
