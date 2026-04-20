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
