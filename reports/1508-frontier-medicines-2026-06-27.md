# Evaluación: Frontier Medicines — AI Engineer I (Scientist, AI Engineer)

**Fecha:** 2026-06-27
**Arquetipo:** Applied AI / LLM Engineer + ML Engineer (Applied AI Systems) — agentic + multimodal RAG in drug discovery
**Score:** 3.6/5
**URL:** https://apply.workable.com/frontier-medicines/j/5E53E8D60C/
**Legitimacy:** High Confidence
**Location:** South San Francisco, CA — on-site (remote: false)
**Region:** US
**PDF:** output/2026-06-27/cv-deepak-mallampati-frontier-medicines-2026-06-27.pdf
**Verification:** confirmed (Workable v2 API live, job id 5914652, salary band published)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Applied AI / LLM Engineer + ML Engineer (Applied) — agentic systems, multimodal RAG, model serving for drug discovery |
| Domain | Biotech / drug discovery AI — covalent small-molecule chemistry, chemoproteomics |
| Function | Build/ship — design, train, deploy ML + agentic + generative models; stand up serving infra |
| Seniority | Scientist I / IC — B.Sc + 2–3 yrs (or PhD + 1 yr) |
| Remote | On-site, South San Francisco, CA |
| Team size | Not stated — "AI organization", cross-functional with med-chem, biology, comp-chem |
| TL;DR | Build agentic + multimodal AI systems (multi-agent orchestration, MCPs, RAG, generative molecular design, model serving) over a covalent-chemistry/chemoproteomics dataset to accelerate compound design — strong AI-engineering stack overlap, real cheminformatics domain gap. |

**Company context:** Frontier Medicines — clinical-stage precision-medicine / covalent drug-discovery startup (South SF). Listed salary band and full benefits → a real, funded headcount.

**Work-authorization note (F-1 OPT):** JD requires "Legally authorized to work in the United States" — Deepak is work-authorized **now** on F-1 OPT (✓). No sponsorship statement either way; long-term H-1B path is unstated → soft blocker. On-site South SF (no remote) is an added friction for relocation. Score normally per profile policy; flag honestly and confirm OPT/STEM-OPT runway + sponsorship intent with the recruiter early.

## B) Match con CV

| JD requirement | CV evidence | Fit |
|----------------|-------------|-----|
| Multi-agent systems — supervisor/sub-agent orchestration, MCPs, task decomposition, tool calling, error recovery, HITL | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework… context-scoped subagents… −42% tokens" (Progress Solutions); "AI agents and backend services… 25+ AI agents" (Vanguard) | **Strong** |
| Multimodal RAG pipelines over structured data, reports, images | "Engineered high-performance RAG pipelines… dense vector retrieval + cross-encoder re-ranking… reduce hallucination" (Progress); FAISS/Pinecone/Weaviate, hybrid search, re-ranking (Skills) | **Strong** |
| Deploy models into serving infra — endpoints, batch inference, monitoring | "Built 12 APIs and microservices… p95 1.5s→800ms" (Vanguard); FastAPI, Docker, K8s, MLflow, model monitoring (Skills); fault-tolerant batch orchestration + retry, −60% failed runs (Progress) | **Strong** |
| LLM evaluation / benchmarking | "Structured LLM evaluation & monitoring framework (RAGAS, BERTScore, custom metrics)… surface regressions" (Progress) | **Strong** |
| Train/evaluate/deploy DL models for property prediction; multi-task, transfer, active learning | Supervised regression/classification + equipment-failure prediction (Emerson); PyTorch/TensorFlow, drift detection, A/B testing (Skills) | **Moderate** (general ML, not molecular) |
| Python + coding tools | Python primary across all roles | **Strong** |
| B.Sc computational/quantitative + 2–3 yrs | M.S. Computer Science (Kent State, 3.70) + 4 yrs AI/ML industry | **Exceeds** |

**Gaps & mitigation:**
1. **Cheminformatics / molecular ML** (GNNs, equivariant architectures, learned fingerprints, diffusion/autoregressive/VAE molecular generation, ADMET, SAR, virtual screening) — *hard-ish domain gap, not a hard blocker for an IC who can ramp*. Mitigation: lead with transferable AI-engineering depth (agents, RAG, serving, evals); frame the privacy-preserving clinical-ML + healthcare RAG work as evidence of fast ramp into a regulated scientific domain; in cover letter, state explicit intent to learn molecular representations and name the specific techniques.
2. **Self-supervised / MoE / distributed training (DeepSpeed, FSDP)** — partial gap. Mitigation: QLoRA fine-tuning of Qwen3-27B on H100 (Kent State RA) shows large-model training competence; position distributed-training as adjacent next step, not greenfield.
3. **Generative molecular design (diffusion/VAE/RL-guided)** — gap. Mitigation: Story Director LLM (fine-tuned generative model + pipeline) demonstrates generative-modeling fluency transferable to molecular generation.

## C) Nivel y Estrategia

- **JD level:** Scientist I / IC (B.Sc + 2–3 yrs or PhD + 1 yr). Deepak's MS + 4 yrs **exceeds** the education/experience bar — this is a comfortable IC level, not a stretch.
- **Sell-strong-without-lying:** Position as "Applied AI engineer who ships agentic + RAG + serving systems in regulated domains" — the JD's core engineering scope (multi-agent orchestration, MCPs, multimodal RAG, serving infra, evals) is exactly Deepak's lane. Let the chemistry team own the chemistry; Deepak owns the AI systems that operationalize it.
- **If down-leveled / domain-doubted:** Accept Scientist I framing; propose a 90-day ramp plan on molecular representations; ask for a 6-month review tied to shipping one molecular-property model into serving. Negotiate within band given onsite/relocation.

## D) Comp y Demanda

| Item | Data | Source |
|------|------|--------|
| Role band (JD) | $100,000 – $158,900 base + equity (stock option plan) + full benefits | Frontier Workable posting |
| SF Bay AI Engineer median base | ~$213k (25th–75th: $192k–$250k) | recruitingfromscratch / Glassdoor 2026 |
| Entry/mid ML Engineer | ~$120k entry → $150–160k mid | kore1 / pin 2026 |
| Read | Frontier's band sits **below** generic SF AI-engineer market but is **normal for biotech "Scientist I / AI Engineer I"** comp, where mission + equity + domain offset cash. Mid of band (~$130k) is fair for MS + 4 yrs; push toward $150k+ given agentic/RAG/serving depth. | — |

Demand: agentic + multimodal AI for drug discovery is a fast-growing, well-funded niche; cross-functional AI-engineering ICs who can bridge ML and serving are scarce.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "banking and regulated enterprises… healthcare" | Lead with "agentic + multimodal AI systems and model-serving infrastructure for scientific/regulated data" | Mirror JD's agent + multimodal + serving language |
| 2 | Experience order | RAG/agents mid-bullet | Surface conductor–subagent orchestration + MCP/tool-calling first | JD's #1 ask is multi-agent systems |
| 3 | Skills | broad list | Foreground multi-agent orchestration, MCPs, RAG, model serving (FastAPI/Docker/K8s), RAGAS/eval | ATS keyword match |
| 4 | Projects | generic | Elevate Story Director (generative modeling) + Privacy-Preserving Clinical ML (scientific-data rigor) | Signals generative + scientific-domain transfer |
| 5 | Domain-bridge line | none | Add one line: "ramping into molecular ML — GNNs, generative molecular design" | Honest gap acknowledgment that reads as initiative |

Top LinkedIn changes: headline → "Applied AI Engineer — Agentic Systems, Multimodal RAG, Model Serving"; add MCP / multi-agent orchestration to featured skills.

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Multi-agent orchestration + MCPs + HITL | Conductor–subagent framework | Complex multi-step objectives blew token budgets | Cut cost without losing accuracy | Built context-scoped subagents, tool calling, HITL checkpoints | −42% tokens, accuracy sustained | Orchestration boundaries matter more than model choice; scope context tightly |
| 2 | Multimodal RAG | Healthcare RAG pipeline | Domain queries hallucinated | Raise grounded relevance | Dense retrieval + cross-encoder re-ranking | Materially lower hallucination | Re-ranking beat bigger context windows; retrieval quality is the lever |
| 3 | Model serving / endpoints / monitoring | 12 APIs at Vanguard | Latency blocked feature integration | Hit SLA at scale | Built microservices, caching, routing | p95 1.5s→800ms, 100k+ req/day | Caching + routing bought more than raw scaling |
| 4 | Eval / benchmarking before release | RAGAS/BERTScore framework | Regressions slipped to prod | Catch them pre-release | Built eval + latency/accuracy dashboards | Regressions surfaced pre-deploy | Evals must gate deploys, not just report |
| 5 | Scientific-data rigor (low-data, privacy) | Privacy-preserving clinical ML | Sensitive data, tiny labeled set | Keep utility under privacy constraints | k-anonymity + l-diversity + DP, composite scoring | Re-ID 3.38%→0.32%, 99% perf retained | Quantify the privacy–utility trade explicitly; pick the operating point with data |
| 6 | Large-model training | Qwen3-27B QLoRA on H100 | Controllable long-form generation | Fine-tune a 27B model on tight data | 4-bit QLoRA, schema-conditioned, 361 examples | Working controllable generator | Curated small data + PEFT beats brute force; transferable to molecular generation |

Case study to present: **conductor–subagent agentic framework** (directly maps to JD's multi-agent + MCP ask). Red-flag prep: "no cheminformatics background?" → "I own the AI systems; I ramp domain fast — here's my clinical-ML privacy work as proof, and my 90-day plan for molecular representations."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Added ~1 day ago (speedyapply NEW_GRAD_USA), live on Workable | Positive |
| Description quality | Highly specific — names MoE, FSDP/DeepSpeed, GNNs, diffusion/VAE, ADMET, SAR, MCPs; clear 6–12 mo scope | Positive |
| Salary transparency | Explicit $100k–$158.9k band + full benefits + stock | Positive |
| Apply state | Active Workable application form (v2 API returns live job) | Positive |
| Company signals | Clinical-stage biotech, funded; no layoff/freeze signals surfaced | Neutral/Positive |
| Reposting | No prior Frontier entry in scan-history | Positive |

**Context notes:** Onsite-only South SF and "legally authorized to work in the US" (no sponsorship line) are decision factors for an F-1 OPT candidate, not legitimacy concerns.

## Keywords extraídas

multi-agent systems, supervisor/sub-agent orchestration, MCP, tool calling, human-in-the-loop, multimodal RAG, generative molecular design, diffusion models, VAE, GNN, equivariant architectures, ADMET, SAR, virtual screening, self-supervised learning, MoE, distributed training, DeepSpeed, FSDP, model serving, batch inference, Python, drug discovery, cheminformatics
