# fastino.ai — AI Engineer

**Fecha:** 2026-05-17
**Arquetipo:** Applied AI / LLM Engineer | ML Engineer Applied AI Systems
**Score:** 3.8/5
**URL:** https://jobs.ashbyhq.com/fastino-ai/d0fe2e39-6cf2-4972-8266-461bd447468a
**Legitimacy:** High Confidence
**Location:** Remote (US)
**Region:** US
**PDF:** output/2026-05-17/cv-deepak-mallampati-fastino-ai-engineer-2026-05-17.pdf
**Verification:** unconfirmed (batch mode)

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | fastino.ai (Fastino Labs) |
| Role | AI Engineer |
| Location | Remote, United States |
| Team size | ~30 (early-stage) |
| Employment | Full-time |
| Comp | Not disclosed |
| Visa sponsorship | Not confirmed |
| Domain | Small Language Models / Efficient Inference / GenAI |

**Company context:** Fastino builds small, specialized, high-efficiency AI models (SLMs). Their GLiNER family of open-source models (NER/information extraction) has 5M+ downloads and is used by NVIDIA, Meta, and Airbnb. Backed by Microsoft, Khosla Ventures, and Insight Partners. Team includes alumni from Google Research, Apple, Stanford, and Cambridge. Posted April 2026; remote US.

---

## B — CV Match & Gaps

**Strong matches:**
- LLM application development, RAG, agentic systems — core Deepak strengths
- Prompt engineering and vector DB tuning explicitly required — directly in CV
- API design and production deployment (FastAPI, Docker) match "API design" requirement
- Python fluency, PyTorch, HuggingFace — all in CV
- "Across the full stack from prompt engineering to Kubernetes" — Deepak covers most of this
- Agentic systems with production hardening (30% fewer defects)

**Gaps / risks:**
- **Kubernetes** — Deepak lists Docker but not Kubernetes specifically; minor gap
- **Low-latency inference / scalability bottlenecks** — Fastino is an inference-optimization company; Deepak's ML work is application layer, not systems-level inference optimization
- **GLiNER / NER / information extraction** — Deepak's closest work is semantic chunking and embeddings, not named entity recognition architectures
- **Small language models (SLMs) and efficiency research** — Fastino's core differentiator is model efficiency; Deepak's background is application engineering on top of existing LLMs
- No compensation disclosed — need to verify meets $85K minimum

**Gap mitigation:** The role title is "AI Engineer" (not Research Scientist), implying deployment-layer work. Deepak's RAG + agentic + production deployment background covers the applied engineering side. Highlight the production inference packaging work (FastAPI + Docker + load simulation).

---

## C — Level & Strategy

**Level fit:** "2+ years hands-on AI/ML engineering" — Deepak qualifies at 2.5+ years.

**Strategy:** Frame as an applied AI engineer who ships systems, not just prototypes. Lead with the production metrics (35% retrieval precision, 30% fewer defects). The Manga Lens project shows cross-provider AI inference integration (Claude, GPT-4o, Ollama) which is relevant to model-serving architecture. The fact that Fastino's models are used by NVIDIA/Meta signals enterprise scale — position accordingly.

---

## D — Comp & Demand

- **Deepak's target:** $100K–$130K USD (min $85K)
- **Posted comp:** Not disclosed — typical for early-stage AI startups
- **Market rate for remote AI Engineer:** $120K–$160K at Series A/B AI companies
- **Risk:** Comp not verified; should ask about range early in process
- **Verdict:** Likely meets target based on backer profile (Khosla/Microsoft), but must verify

---

## E — Personalization Plan

**CV tailoring:**
- Summary: "AI engineer specializing in production LLM systems — RAG pipelines, agentic workflows, and high-throughput inference APIs with measurable reliability gains"
- Highlight FastAPI + Docker + load simulation → production inference hardening
- Emphasize vector DB tuning and prompt engineering explicitly
- Manga Lens: multi-provider AI inference (Claude Sonnet, GPT-4o, Ollama) across 29 sites — cross-model serving architecture
- Agentic Claims Processing: schema-validated multi-agent pipeline
- Add note on GLiNER-adjacent work: semantic chunking + embedding retrieval is information extraction adjacent

**Cover angle:** "Fastino's mission — making AI models efficient enough to deploy anywhere — is the infrastructure layer I've been building on top of. I build the application systems that make model efficiency matter in production."

---

## F — Interview STAR+R Stories

**Story 1 — Inference pipeline hardening:**
S: LLM inference services needed production reliability for healthcare clients. T: Ship APIs that don't fail under load. A: FastAPI + Docker, structured logging, load simulation, error recovery. R: ~30% fewer post-deployment defects. Reflection: Production reliability is designed, not hoped for.

**Story 2 — Multi-provider inference (Manga Lens):**
S: Needed to support multiple AI vision providers with different payload requirements. T: Build flexible inference client that handles OpenAI, Claude, and local Ollama. A: Multi-provider payload handler, WebP for cloud vs JPEG for Ollama to avoid CUDA crash, 7-day cache. R: Shipped production Chrome extension with 4 providers, 29 sites. Reflection: Provider abstraction matters for reliability and cost.

**Story 3 — Vector DB tuning for retrieval precision:**
S: Clinical RAG system had poor retrieval precision. T: Improve without rebuilding entire system. A: Recursive semantic chunking, embedding tuning, reranking. R: 35% precision gain. Reflection: Chunking and retrieval strategy are as important as model quality.

---

## G — Legitimacy

- **Verified backing:** Microsoft, Khosla Ventures, Insight Partners — credible
- **5M+ GLiNER downloads** — product traction validated by usage at NVIDIA, Meta, Airbnb
- **Remote OK posting** on multiple job boards (Insight Partners board, RemoteOK, Ashby)
- **Posted April 2026** — relatively fresh
- **Verdict:** High Confidence

---

## H — Recommendation

**Score: 3.8/5 — Decent-to-good apply**

Solid archetype match (Applied AI / ML Engineer), production deployment experience aligns well, remote-friendly. Deductions for inference-optimization gap (Fastino's core is SLM efficiency, Deepak is application-layer), no disclosed comp, and slight Kubernetes gap. Strong candidate for the applied engineering side of this role; less strong on the model architecture/efficiency research side. Apply with production metrics and multi-provider inference experience front and center.
