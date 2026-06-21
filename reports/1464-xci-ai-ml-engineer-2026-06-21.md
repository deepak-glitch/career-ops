# Evaluación: XCI — AI/ML Engineer

**Fecha:** 2026-06-21
**Arquetipo:** ML Engineer (Applied AI Systems) (+ Computer Vision / Multimodal)
**Score:** 3.1/5
**URL:** https://xci.teamtailor.com/jobs/7909189-ai-ml-engineer
**Legitimacy:** Medium Confidence
**Location:** Aalborg, Denmark — on-site (relocation + EU work authorization)
**Region:** Intl
**PDF:** output-intl/2026-06-21/cv-deepak-mallampati-xci-ai-ml-engineer-2026-06-21.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | ML Engineer (Applied AI Systems) with CV/NLP/audio breadth |
| Domain | AI/ML processing pipelines deployed to remote hardware platforms (edge/embedded leaning) |
| Function | Build + deploy ML pipelines across departments (mid IC) |
| Seniority | Not stated — reads mid IC |
| Remote | On-site, Aalborg, Denmark |
| Team | XCI (Danish tech company) — cross-department integration role |

**TL;DR:** XCI (Aalborg, Denmark) is hiring an AI/ML Engineer to build and deploy AI/ML processing pipelines onto remote hardware platforms, spanning Computer Vision, NLP, or Audio Analytics, with PyTorch/Hugging Face, Python, and Java/C++ for pipeline work. Advantageous skills (MCP/RAG, Triton, LLM deployment, Kubernetes, Elasticsearch) line up well with Deepak's stack. Technical fit is solid on the AI side; the real frictions are (1) on-site Denmark requiring relocation + EU work authorization (Deepak is US-based on F-1 OPT) and (2) a C++/embedded-pipeline lean that's outside his core. Score reflects good tech match discounted by location/auth reality.

## B) Match con CV

| JD requirement | CV proof |
|----------------|----------|
| ML frameworks (PyTorch, Hugging Face, or equiv) | cv.md — PyTorch, TensorFlow, Keras, HF Transformers |
| Python for models and pipelines | cv.md — Python primary; production ML pipelines |
| Expertise in CV, NLP, or Audio Analytics | cv.md — NLP/NER/summarization; video summarization (speech-to-text + abstractive); profile CV breadth |
| Create + deploy AI/ML processing pipelines | cv.md — end-to-end pipelines (Progress/Vanguard/Suvidha), batch orchestration |
| Docker containerization | cv.md — Docker, Kubernetes |
| Advantageous: MCP/RAG | cv.md — RAG (dense retrieval + cross-encoder), tool-use/function-calling |
| Advantageous: Nvidia Triton / LLM deployment | cv.md — inference optimization, model routing, semantic caching (Triton not named) |
| Advantageous: Kubernetes | cv.md — Kubernetes, Terraform, CI/CD |
| Advantageous: Elasticsearch / DBs | cv.md — PostgreSQL, MongoDB, Redis; FAISS/Pinecone/Weaviate |
| Clean, structured code | cv.md — production-quality services, 12 APIs/microservices |

**Gaps:**
1. **On-site Aalborg, Denmark + EU work authorization** — *Hard logistical blocker for F-1 OPT.* Relocation + sponsorship/EU permit required. *Mitigation:* acknowledge honestly; viable only if XCI sponsors relocation. Flagged, not vetoed (per work-auth policy).
2. **Java/C++ for pipeline development** — *Moderate.* Deepak has Java; C++ is not in his stack and the role leans toward hardware/edge pipelines. *Mitigation:* lead with Python/ML depth; frame C++ as ramp-able.
3. **Edge/remote-hardware deployment** — *Soft.* His deployment is cloud/server-side, not embedded. *Mitigation:* transfer MLOps/containerization discipline.

## C) Nivel y Estrategia

**Detected level:** Mid IC, generalist AI/ML across CV/NLP/audio. Deepak fits the AI core; the hardware/edge + C++ slant is the stretch.

**Plan "vender senior sin mentir":**
- Lead with PyTorch/HF + NLP + pipeline deployment + containerization; position CV via video-summarization (speech-to-text + transformer summarization) and RAG/MCP as advantageous-skill bonuses.
- Be upfront that strongest deployment experience is cloud/server-side, transferable to their platform.

**Plan "si me downlevelan":** Not the primary lever — location/auth is the gating factor; only pursue if relocation + sponsorship are on the table.

## D) Comp y Demanda

| Item | Finding | Source |
|------|---------|--------|
| Stated band | Not disclosed | JD (Teamtailor) |
| Market (mid AI/ML eng, Denmark) | ~DKK 45k–65k/mo (~€72k–€105k/yr) typical | Market estimate (2026) |
| Position vs market | Unknown — no band | — |
| Company signals | XCI — Danish tech firm; small/mid; cross-department integration | WebFetch |
| Demand trend | EU AI/ML hiring steady; edge/CV niche | Market context |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Banking/regulated framing | Add "AI/ML pipelines across NLP, retrieval, and multimodal, deployed in production" | Mirror the JD's pipeline focus |
| 2 | CV/multimodal | Buried | Surface video summarization (speech-to-text + transformer) | JD lists CV/NLP/Audio |
| 3 | MLOps line | AWS-first | Foreground Docker/Kubernetes + inference optimization | Advantageous: Triton/K8s |
| 4 | Retrieval | Hallucination metric | Add RAG/MCP as advantageous-skill match | JD lists MCP/RAG as plus |
| 5 | Location line | US framing | State "open to EU relocation; F-1 OPT, sponsorship needed" | On-site Denmark reality |

**LinkedIn:** add "computer vision", "audio analytics", "edge ML", "model deployment" to Skills.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Deploy AI/ML pipelines | Suvidha video pipeline | 5,000+ videos, manual editing | Automate highlight gen | Speech-to-text + transformer summarization + clip extraction | 70% less manual effort | End-to-end pipelines deliver leverage |
| 2 | CV/NLP/Audio breadth | Video summarization + NER | Mixed-modality content | Extract structure | Audio→text→summary pipeline; BERT/RoBERTa NER | 89% F1 NER | Multimodal pipelines need glue, not just models |
| 3 | Containerization/deploy | Progress/Vanguard services | Ship reliable services | Production deployment | Docker/K8s, CI/CD, batch orchestration | 60% fewer failed runs | Ops discipline = reliability |
| 4 | RAG/MCP (advantageous) | Healthcare RAG | Domain hallucination | Ground answers | Dense retrieval + cross-encoder + tool-use | 92% precision | Retrieval quality is the lever |
| 5 | Pipeline reliability | Automation infra | Flaky production runs | Robust pipelines | Scheduled orchestration + exp-backoff retry | 60% fewer failures | Resilience is designed in |

**Case study to present:** Suvidha multimodal video-summarization pipeline (closest to CV/NLP/audio + deployment).

**Red-flag questions:** "Are you authorized to work in Denmark / open to relocating?" → honest: "US-based on F-1 OPT; open to EU relocation if relocation + work-permit sponsorship are supported." / "How is your C++?" → "Java background; C++ is a ramp item — my ML and pipeline depth is in Python."

## G) Posting Legitimacy

**Assessment:** **Medium Confidence**

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live Teamtailor posting | Positive |
| Tech specificity | PyTorch/HF, Python, Java/C++, CV/NLP/Audio, Docker, Triton/K8s/ES | Positive |
| Requirements realism | Coherent generalist AI/ML role | Positive |
| Salary transparency | No band disclosed | Negative |
| Company signals | XCI — limited public footprint; small Danish firm | Neutral/Negative |
| Reposting pattern | First appearance in scan-history | Neutral |

**Context Notes:** Specific, coherent JD but thin company signal and no comp band → Medium. Verify company legitimacy and whether relocation/sponsorship is offered before investing.

## H) Draft Application Answers

*(Score 3.1 < 4.5 — full draft answers not auto-generated. Pursue only if XCI supports EU relocation + work-permit sponsorship; otherwise this is a location-blocked match. Talking points in Blocks C and F.)*

---

## Keywords extraídas

AI/ML Engineer, PyTorch, Hugging Face, Python, Java, C++, computer vision, NLP, audio analytics, Docker, Kubernetes, Nvidia Triton, MCP, RAG, LLM deployment, Elasticsearch, ML pipelines, model deployment, DevOps, MLOps
