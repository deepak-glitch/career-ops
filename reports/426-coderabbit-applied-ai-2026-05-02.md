# Evaluación: CodeRabbit — Applied AI Engineer

**Fecha:** 2026-05-02
**Arquetipo:** Applied AI / LLM Engineer (primary — RAG + agentic + RLHF + production GenAI) + Generative AI / RAG Engineer (secondary — embeddings + retrieval + reranking)
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/coderabbit/8f17b66f-ea44-4e83-85f6-ef9427d61a01
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — Hybrid (weekly in-person collaboration; remote heads-down flex)
**PDF:** output/2026-05-02/cv-deepak-mallampati-coderabbit-applied-ai-2026-05-02.pdf
**Verification:** confirmed (Ashby ApiJobPosting active 2026-05-02; comp $175K-275K + equity)

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Applied Gen AI Engineer at AI code-review startup — RAG, RLHF, multi-step agentic reasoning into production developer tooling |
| Domain | Developer productivity / code-review automation (B2B SaaS, AI-native) |
| Function | Build (design + ship + monitor advanced GenAI in product); collaborate cross-functionally |
| Seniority | 3+ yrs ML/LLM in production with 2+ yrs industry GenAI focus |
| Remote | SF hybrid (weekly in-person collaboration + heads-down remote flex) |
| Comp | Base $200K – $275K; total range $175K – $275K + equity |
| TL;DR | Applied Gen AI engineer at a fast-growing AI-native code-review platform. Stack 1:1 (LangChain, LlamaIndex, OpenAI, Pinecone/Lancedb, RAG, agentic, RLHF, Python+TS). 3+y industry + 2+y GenAI floor — Deepak's 2.5y in production GenAI is at-band. Comp band is strong. RLHF is a learning-curve gap (mitigable). SF hybrid weekly is the chief friction — accept relocation or pass. |

## B) Match con CV

| JD requirement | CV evidence | Match |
|---|---|---|
| 3+ yrs ML/LLM in production w/ 2+ yrs GenAI | cv.md L23 PSI 2.5y production RAG/agentic; L42 Suvidha 3mo Q&A RAG; L62 SD/LoRA fine-tuning ongoing | ✅ (at-band; 2.5y GenAI = 2+y floor met) |
| Strong TypeScript + Python | cv.md L12 Python; L12 TypeScript, React; L66 Dream Decoder full-stack TS/Vite | ✅ |
| LangChain, LlamaIndex, OpenAI APIs | cv.md L14 LangChain, LlamaIndex; L60 Manga Lens 4-vision-provider integration (Claude, GPT-4o, GPT-4.1, Ollama) | ✅ Strong |
| Vector DBs (Pinecone, Lancedb) | cv.md L13 vector search; L72 vector-indexed policy docs (FAISS pattern); ramp on Pinecone/Lancedb specifics | Partial (FAISS-class equivalent; not Pinecone/Lancedb specifically) |
| Strong prompt engineering | cv.md L13 prompt engineering; L66 intermediate structured prompt transformation layer in Dream Decoder; Manga Lens multi-provider prompt routing | ✅ Strong |
| RAG optimization (custom embeddings, search strategies) | cv.md L25 ~35% retrieval precision via recursive semantic chunking + transformer embeddings | ✅ Strong |
| Multi-step agentic reasoning | cv.md L26 agentic LLM workflows; L72 5-stage multi-agent claims pipeline w/ schema contracts | ✅ Strong |
| RLHF / reward modeling / behavioral policy tuning | (no direct CV evidence — adjacent: PSI eval pipelines + healthcare safety eval) | Gap (preferred bonus, not required) |
| Data fluency (telemetry, logs, user signals) | cv.md L27 stratified sampling + threshold calibration; L35 SQL Server DMVs + Grafana dashboards | ✅ |
| Cross-functional (product + engineering + design) | cv.md L52 Student Manager 150+ stakeholders; PSI client-facing | ✅ |
| Open-source / publications (bonus) | cv.md L60 Manga Lens public Chrome Web Store extension | Partial (live extension counts; no formal pubs) |

**Gaps:**
1. **RLHF specific authoring:** Mitigation — frame retrieval-grounded eval pipelines + threshold calibration as feedback-loop discipline. Acknowledge RLHF as learning curve (4-6 weeks ramp w/ HF TRL or DSPy) — bonus, not required.
2. **Pinecone / Lancedb specific:** Mitigation — frame FAISS + vector-indexed policy docs as transferable; Pinecone/Lancedb is a SaaS layer on top of similar primitives.
3. **SF hybrid weekly cadence:** Mitigation — Kent OH → SF relocation or pass. Comp absorbs cost-of-living delta.

## C) Nivel y Estrategia

- JD nivel: Mid Applied AI (3+ yrs ML/LLM + 2+ yrs industry GenAI)
- Candidato natural: Mid Applied AI (2.5y production GenAI + M.S. May 2025 + measurable wins)
- **Plan "vender senior sin mentir":** Lead with Healthcare Claims (multi-agent + schema contracts = "multi-step agentic reasoning") + Healthcare RAG (~35% retrieval precision = "RAG optimization") + Manga Lens (multi-provider routing = LLM infra at production scale). Frame Dream Decoder's "intermediate structured prompt transformation layers" as advanced prompt engineering. M.S. + 2.5y production GenAI w/ measurable wins fits at-band.
- **Plan "si me downlevelan":** Accept "Applied AI Engineer L2" band ($200K-$225K base + equity) with explicit ownership scope on RAG retrieval pipeline (custom embeddings + reranker) within first 90 days. Negotiate written commitment to RLHF training/conference budget for the 4-6 week ramp.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| CodeRabbit JD | Base $200K-275K; total range $175K-275K + equity | Stated band |
| Levels.fyi Mid Applied AI SF (Series A-B AI-native) | $190K – $260K + 0.05-0.30% equity | 2026 SF AI tooling |
| Glassdoor SF Applied AI / GenAI Eng | $185K – $260K | Developer-tooling peers (Cursor, Cody, Tabnine) |
| Demand 2026 — GenAI in developer tooling | High | Code-review + agentic dev-tooling heavy 2026 hiring |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare-focused | "Applied Gen AI engineer building production RAG + multi-step agentic reasoning + LLM-driven product features. Healthcare RAG ~35% retrieval precision (recursive semantic chunking + transformer embeddings), 5-stage multi-agent w/ schema contracts (audit-ready), Chrome Web Store-shipped extension w/ 4-vision-provider abstraction. M.S. + 2.5y production GenAI." | JD priority is RAG + agentic + RLHF + developer-tooling product GenAI |
| 2 | Bullets (PSI) | RAG + agentic + predictive ML | Lead with **agentic LLM workflows w/ tool discipline (~25% stability)** + **RAG retrieval ranking (+35% precision, >90% alignment)** + **HITL eval pipelines (>30% hallucination cut)**, predictive ML third | JD axis: agentic + RAG + RLHF-adjacent eval |
| 3 | Projects | Manga Lens first | Reorder: Healthcare Claims first (multi-agent + schema contracts = multi-step agentic reasoning); Manga Lens second (LangChain-style multi-provider routing = LLM infra ops); Dream Decoder third (intermediate structured prompt transformation = advanced prompt engineering); Pixel Synthesis fourth (LoRA = fine-tune adjacent to RLHF) | JD priority + dev-tool 0→1 demonstration |
| 4 | Skills | Generic order | Lead with: Python, TypeScript, LangChain, LlamaIndex, OpenAI/Anthropic, Pinecone/FAISS/vector search, RAG, embeddings, multi-step agents, prompt engineering, evaluation pipelines, HITL feedback, FastAPI | ATS keyword match for Ashby parser |
| 5 | Footer | Generic | "US-based, F-1 OPT, open to SF hybrid relocation + sponsorship; STEM-OPT through 2028" | Hybrid mandate + sponsorship clarity |

**LinkedIn changes:**
1. Headline: "Applied Gen AI Engineer · RAG + Multi-Step Agents + Production LLM Systems · Open to SF Hybrid"
2. Featured: Healthcare Claims Multi-Agent + Manga Lens Chrome Web Store + Dream Decoder
3. About: lead with measurable wins (+35% retrieval precision, audit-ready agent reasoning, multi-provider abstraction shipped)
4. Open to work: SF hybrid / Applied AI / GenAI / Developer Tooling
5. Skills endorsements: LangChain, LlamaIndex, RAG, Multi-Agent Systems, OpenAI APIs, Vector Search, Prompt Engineering

## F) Plan de Entrevistas

| # | JD requirement | Story (STAR+R) | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Multi-step agentic reasoning | Healthcare Claims 5-stage multi-agent | Cascading hallucinations across multi-step claims | Prevent cascading errors at production scale | Schema-validated JSON contracts (pydantic) between agents; RAG-grounded CPT/ICD validation | Hallucinations prevented; audit-ready reasoning traces | The bottleneck isn't model quality — it's the contract between agents. Schema validation > prompt engineering at scale. |
| 2 | RAG optimization (custom embeddings, search strategies) | Healthcare RAG at PSI | Clinical retrieval slow + irrelevant | Lift retrieval precision via custom chunking + embedding strategy | Recursive semantic chunking + transformer embeddings + retrieval-grounded eval | ~35% retrieval precision; >90% grounded alignment; >30% irrelevant-retrieval cut | Production RAG is 70% data engineering. Chunking compounds. |
| 3 | LLM systems integrated into developer tooling | Manga Lens 4-vision-provider Chrome extension | Multi-vendor LLM risk in production extension; user-facing performance variance | Provider-agnostic payload routing | WebP for cloud, JPEG for Ollama (CUDA-safe); MV3 service workers; 7-day cache; 29 site selectors | Live on Chrome Web Store across 29 sites | Multi-provider abstraction is a customer-facing feature, not just integration concern. Same lesson applies to dev-tool LLM stacks. |
| 4 | Advanced prompt engineering | Dream Decoder intermediate structured prompt transformation | Naive prompt orchestration → contextual misalignment | Insert intermediate structured layer between user input and model | FastAPI + structured output validation + Perplexity Sonar + Replicate routing | ~30% contextual alignment gain; ~25-30% first-pass image success | Intermediate structured layers > end-to-end "prompt the model harder". |
| 5 | HITL feedback / RLHF-adjacent | PSI eval pipelines + Healthcare RAG eval | Need to measure + improve LLM/agent outputs over time | Build feedback-loop measurement w/ retrieval-grounded scoring + threshold calibration | Retrieval-grounded alignment >90%; threshold calibration on risk categories | Eval scores became regression tests for new model versions | Eval design > model selection. RLHF is the next layer on top of solid eval. |
| 6 | Data fluency (telemetry, logs, user signals) | Emerson SQL Server DMVs + Grafana dashboards | Long-running queries + deadlocks unobserved | Build performance dashboards across DB telemetry | SQL Server DMVs + Grafana + structured logging | ~25% incident recurrence reduction; ~30% root-cause speed gain | Telemetry is a leading indicator. Ship logs first, optimize second. |

**Case study to lead with:** Healthcare Claims Multi-Agent (schema contracts + RAG-grounded validation + audit-ready reasoning) — direct analog to "high-quality, context-rich code reviews" + "multi-step agentic reasoning" priorities. Pivot to Manga Lens for LLM infra demonstration.

**Red-flag questions:**
- "RLHF experience?" → "I've shipped retrieval-grounded eval pipelines + threshold calibration that act as feedback signals for model iteration. RLHF is the next layer — happy to discuss the HF TRL / DSPy / RLAIF approaches I'd evaluate first. 4-6 week ramp."
- "SF hybrid weekly?" → "Open to SF relocation. F-1 OPT is mobile. Want to confirm hybrid cadence + visa-sponsorship trajectory in screen."
- "3+ yrs ML/LLM gap?" → "I have 2.5y of production GenAI (RAG, agents, evals) at PSI w/ measurable wins (+35% retrieval precision, -30% hallucinations, +25% agent stability). Plus M.S. May 2025 + Manga Lens production-shipped + Healthcare Claims multi-agent design = at-or-above the 3-yr floor."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Active per Ashby ApiJobPosting fetch 2026-05-02 | Positive |
| Apply button | Active | Positive |
| Description quality | Specific stack (LangChain, LlamaIndex, OpenAI, Pinecone, Lancedb, RLHF); 3+y floor; comp transparent | Positive |
| Salary transparency | $200K-275K base; total $175K-275K + equity | Positive |
| Hybrid policy | "Hybrid Work Culture: Weekly in-person collaboration with flexibility" | Positive (clarity) |
| Visa sponsorship | Not explicitly stated; CodeRabbit is well-funded AI-native — typically sponsors | Neutral |
| Company recognition | CodeRabbit is a known AI code-review platform (seen in scan history; GitHub-integrated AI reviewer) | Positive |
| Reposting history | First time at this URL in scan-history | Neutral |

**Context:** Real, active opening from a well-known AI code-review platform. Specific stack + transparent comp + HITL philosophy = legitimate. Hybrid weekly + SF location are real frictions, not legitimacy concerns.

## H) Draft Application Answers

Skipped (score 3.5/5 — below 4.5 threshold). PDF generated for tailored CV.

---

## Keywords extraídas

Applied Gen AI Engineer, RAG, retrieval-augmented generation, RLHF, multi-step agentic reasoning, LangChain, LlamaIndex, OpenAI APIs, Pinecone, Lancedb, vector databases, embeddings, semantic search, prompt engineering, HITL, telemetry, evaluation pipelines, code review automation, developer tooling, TypeScript, Python, FastAPI, CodeRabbit
