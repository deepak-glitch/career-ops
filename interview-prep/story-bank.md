# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Stories added from 2026-04-20 batch -->

### [Agents] Schema Contracts Beat Prompt Engineering — Agentic Healthcare Claims Pipeline
**Source:** Reports #001 Anthropic, #003 Cohere, #005 Distyl, #006 Magical, #009 Eigen Labs
**S (Situation):** Multi-agent healthcare claims pipeline (5 stages: Intake Normalization -> Validation -> Consistency -> Duplicate Detection -> Fraud Risk Scoring) was experiencing cascading hallucinations between agents.
**T (Task):** Prevent hallucination propagation across stages while keeping the pipeline auditable for compliance.
**A (Action):** Introduced schema-validated JSON contracts between each agent instead of free-text handoffs. RAG-grounded CPT/ICD validation against vector-indexed policy documents. Approximate-nearest-neighbor similarity for duplicate detection. Explainable risk scoring with audit-ready reasoning traces.
**R (Result):** Production-grade pipeline with audit-ready traces. Cross-agent hallucination cascades eliminated.
**Reflection:** Treat agent interfaces like API contracts, not free text. Contracts beat prompt engineering for reliability.
**Best for questions about:** Agent design, LLM reliability, enterprise production patterns, multi-agent architectures, compliance-sensitive AI.

### [Consumer AI] Multi-Provider AI Payload Handling — Manga Lens Chrome Extension
**Source:** Reports #005 Distyl, #006 Magical, #007 Quora
**S (Situation):** Wanted to build real-time manga/webtoon translation that didn't exist as a product. Needed multiple AI vision providers for redundancy and cost tradeoffs.
**T (Task):** Ship a Chrome extension to the Chrome Web Store that integrates four AI vision providers without breaking on any of them.
**A (Action):** Built MV3 extension with content scripts, service workers, and captureVisibleTab for panel capture. Integrated Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, and Ollama/minicpm-v (local). Multi-provider payload handling: WebP for cloud providers, JPEG for Ollama to avoid a CUDA crash. 7-day translation cache, per-domain selector configs for 29 manga/webtoon sites, privacy policy, narrowed host permissions. Multi-section capture pipeline for tall webtoon panels via viewport-slice screenshots with coordinate remapping + dedup.
**R (Result):** Live on Chrome Web Store. Supports 29 sites.
**Reflection:** Each AI provider has its own failure mode — design for the worst one, not the best. Ship first, optimize providers later.
**Best for questions about:** Shipping independently, consumer AI, multi-model integration, tradeoffs under uncertainty, "show don't tell" evidence.

### [RAG] Eval Harness Before Prompt Tuning — Healthcare RAG System
**Source:** Reports #001 Anthropic, #003 Cohere, #005 Distyl, #007 Quora
**S (Situation):** Clinical knowledge retrieval and healthcare documentation search were under-grounded, and there was no way to measure quality objectively.
**T (Task):** Raise retrieval precision without breaking HIPAA constraints, in a measurable way.
**A (Action):** Built eval harness first (alignment scoring, grounding metrics). Then layered in recursive semantic chunking + transformer-based embeddings. Measured every iteration against the harness.
**R (Result):** ~35% contextual retrieval precision improvement, >30% reduction in irrelevant retrieval, >90% grounded response alignment.
**Reflection:** Build evals before the model, not after. The harness saves 3x iteration time on prompts and retrieval params.
**Best for questions about:** RAG systems, evaluation discipline, iteration velocity, healthcare compliance, grounded LLM output.

<!-- Stories added from 2026-04-21 batch (reports #011-020) -->

### [Founder / Ownership] Shipped E-Farming Marketplace from Zero
**Source:** Reports #011 OpenAI, #016 Cordial, #017 Percepta, #019 Auctor, #020 Vapi
**S (Situation):** AgriTech marketplace with no existing solution for small-scale farmers in the target region.
**T (Task):** Design and ship a PHP/MySQL/Bootstrap marketplace end-to-end as solo founder.
**A (Action):** Built full-stack independently — cart, reviews, community blogging, authentication, onboarding flow. Shipped phase one with 80-120 active users.
**R (Result):** Phase-one traction with real users transacting.
**Reflection:** Ship before the spec is perfect. Users tell you what the real spec is.
**Best for questions about:** Ownership, scope, founder experience, ambiguity, shipping fast, "tell me about a time you owned something big."

### [Video Intelligence] Transformer-Based Video Summarization at Scale
**Source:** Reports #012 Quora, #018 Vyn, #056 Salient, #058 Fastino
**S (Situation):** 5,000+ recorded video sessions at Suvidha Foundation; manual review took hours per video.
**T (Task):** Automate highlight extraction and summarization with timestamp alignment for clip extraction.
**A (Action):** Transformer-based hierarchical abstractive summarization mapped back to source timestamps. Transcript preprocessing pipeline + hierarchical summarization for long-context + timestamp-aligned clip extraction. Deployed as Flask API with lightweight web interface for non-technical staff.
**R (Result):** 60-70% reduction in manual review time (hours → <5 minutes per video). ~85% alignment between AI-selected highlights and human curation.
**Reflection:** Hierarchical beats flat for long-context. Timestamp anchoring builds user trust in AI selection.
**Best for questions about:** Deep learning at scale, multimodal, video intelligence, hierarchical LLM patterns, non-technical stakeholder tools, voice-AI-adjacent experience (transcript NLP).

<!-- Stories added from 2026-04-22 batch 5 (reports #051-060) -->

### [Data Infrastructure] T-SQL Perf + Jenkins CI/CD + Grafana at Emerson Order-to-Cash
**Source:** Reports #051 Quora (Data Infra), #055 Glean (AI Infra)
**S (Situation):** Synthesis Order-to-Cash ERP at Emerson (compliance-sensitive oil and gas) had slow queries, high deploy-error rate, and recurring deadlocks with no visibility into root causes.
**T (Task):** Cut query time, reduce deploy errors, add observability, and improve incident RCA speed without breaking RBAC and audit controls.
**A (Action):** Tuned T-SQL stored procedures (partition-aware indexing, statistics updates, index rebuilds), built Jenkins CI/CD for schema updates and version-controlled SQL deployments with structured validation + rollback checkpoints, and designed Grafana + SQL Server DMV dashboards for long-running queries, deadlocks, CPU/IO contention.
**R (Result):** ~20% query-time reduction, ~25% latency reduction, >30% fewer deployment errors, ~35-40% faster release cycle, ~25% fewer incident recurrences, ~30% faster RCA.
**Reflection:** Observability before tuning. Dashboards pay per incident, not per dashboard. CI/CD is reliability, not velocity.
**Best for questions about:** Data infrastructure, CI/CD, observability, oncall reliability, SQL perf, compliance-sensitive engineering, cost/latency tuning.

### [Platform] Multi-Provider AI Abstraction Layer — Manga Lens Architecture
**Source:** Reports #055 Glean, #059 General Intelligence Company, #060 Monaco
**S (Situation):** Four different AI vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, local Ollama) each had different payload requirements, latency profiles, failure modes, and cost curves. Direct per-provider integration would be brittle.
**T (Task):** Build a single abstraction layer so the extension could switch providers at runtime without UI changes, and handle provider-specific failures gracefully.
**A (Action):** Designed a provider-abstraction layer: WebP payloads for cloud providers, JPEG for Ollama to avoid CUDA crashes, per-provider rate-limit + retry logic, a shared seven-day translation cache keyed by (image-hash + provider), and per-domain selector configs for 29 sites. Content scripts + service workers + captureVisibleTab drove the capture pipeline.
**R (Result):** Shipped to Chrome Web Store; supports 29 sites; provider switches are one-line changes.
**Reflection:** Provider abstraction is a compounding investment — it's painful the first time, free every time after. Design for the worst provider's failure mode, not the best one.
**Best for questions about:** Platform abstractions, multi-vendor integration, LLM orchestration, fallback + retry design, shipping with real users.

### [Applied AI Breadth] Agentic Pixel Character Engine — LoRA + ControlNet + Agent Orchestrator
**Source:** Reports #056 Salient, #058 Fastino
**S (Situation):** Wanted to generate identity-consistent, pose-controlled pixel-art characters with sprite-sheet export — a hard problem combining fine-tuning, pose conditioning, and generation orchestration.
**T (Task):** Build a phased generative system that keeps character identity consistent across poses and animation frames, driven by a high-level prompt decomposed into sub-tasks.
**A (Action):** Stable Diffusion fine-tuning + LoRA for identity consistency; ControlNet + OpenPose/MediaPipe for pose conditioning; latent-space consistency tricks for animation smoothness; an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks. Backend: PyTorch + Hugging Face Diffusers + FastAPI + Docker.
**R (Result):** Ongoing project showing fine-tuning + multimodal + agent orchestration in one system.
**Reflection:** LoRA is the cheap-and-correct tool for task-specific identity consistency. Agent orchestrators make multi-step generation tractable when the prompt is vague.
**Best for questions about:** Fine-tuning, LoRA, task-specific models, multimodal generation, agent orchestration, computer vision, generative AI breadth.

<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S (Situation):** ...
**T (Task):** ...
**A (Action):** ...
**R (Result):** ...
**Reflection:** What I learned / what I'd do differently
**Best for questions about:** [list of question types this story answers]
-->
