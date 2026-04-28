# Evaluación: LangChain — Deployed Engineer (Phoenix)

**Fecha:** 2026-04-28
**Arquetipo:** AI Solutions / Forward Deployed Engineer (LangChain agentic platform)
**Score:** 3.8/5
**URL:** https://himalayas.app/companies/langchain/jobs/deployed-engineer-phoenix
**Legitimacy:** High Confidence
**Location:** Remote — United States only
**PDF:** output/2026-04-28/cv-deepak-mallampati-langchain-deployed-engineer-2026-04-28.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | **Deployed Engineer (FDE / Customer Engineering)** — production agents on LangChain framework |
| Domain | Agentic AI applications, customer engineering, LangChain ecosystem |
| Function | Co-architect + co-build production AI agents with customer engineering teams; POCs, architecture reviews, technical evaluations |
| Seniority | 3+ yrs (advertised "entry-level" but min bar is mid IC) |
| Location | Remote — US only |
| Comp | $150K–$250K USD |
| TL;DR | Strong stack fit (Python + JS + agentic + LangChain explicitly listed in cv.md). US-remote + comp band healthy. Modest experience gap (2.5 vs 3+ yrs). LangChain framework explicit on CV is the differentiator. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Python proficiency | Primary language (cv.md L12) |
| JavaScript proficiency | TypeScript on Manga Lens + Pixel character agent + Dream Decoder React/TS frontend (cv.md L60-66) |
| Systems fundamentals | FastAPI/Flask + Docker + structured logging + load simulation (cv.md L28) |
| Agent-based / LLM-powered apps beyond simple API calls | Multi-agent healthcare claims pipeline (Intake → Validation → Consistency → Duplicate Detection → Risk Scoring) w/ schema-validated JSON contracts (cv.md L72); Pixel agent w/ LLM orchestrator (cv.md L62) |
| LangChain framework | Explicitly listed (cv.md L14: "LangChain, LlamaIndex") + healthcare RAG built using LangChain primitives (Progress Solutions L25) |
| Customer-facing technical communication | Clinical SME collaboration + Manga Lens public users (Chrome Web Store) + Dream Decoder UX (cv.md L25-30, L60-66) |
| 3+ yrs technical roles | **GAP** — 2.5 yrs (Progress Solutions Jul 2025 – Present) + intern at Suvidha + intern at Emerson; total ~3 yrs incl. internships, but core SWE/MLE is 2.5. Mitigation: lead with depth (RAG, agentic, vector search, evals) + 4 shipped products. |
| Production AI agents (POC + arch review + eval) | Healthcare claims agentic + RAG eval pipelines + Manga Lens 4-vendor abstraction = production POC + architecture decision experience (cv.md L25-30, L60, L72) |
| Explain technical tradeoffs clearly | Manga Lens WebP-vs-JPEG payload routing across 4 vendors documents tradeoff thinking (cv.md L60); Dream Decoder structured-prompt-layer rationale (cv.md L66) |
| Build developer trust | Public Chrome Web Store ship + clinical SME-validated RAG = third-party verification |

**Gaps:**
1. **3+ yrs SWE/MLE strict floor** — Deepak at 2.5. Mitigation: position as "Applied AI engineer with 3 production-shipped LLM systems + 4 indie projects, including LangChain-built RAG and multi-agent pipelines." Highlight breadth of agentic + customer-facing work.
2. **No formal "Customer Engineer" / "Solutions Engineer" title** — mitigation: clinical SME collaboration + Manga Lens public-user feedback loop = customer-facing pattern in practice.
3. **Phoenix-codename / unspecified product** — JD doesn't disclose what "Phoenix" is internally; ramping context required at onboarding (low risk for any deployed-engineer role).

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC ("entry-level" branding but 3+ yrs min). Comp band $150-250K confirms mid-to-senior individual contributor.
- **Vender:** "Applied AI engineer with 2.5 yrs production LLM systems — healthcare RAG (~35% retrieval precision gain), multi-agent pipelines with schema-validated JSON contracts (>30% hallucination reduction), and 3 shipped indie products including a 4-vendor Chrome extension on Chrome Web Store. LangChain-stack native. Comfortable owning customer-facing architecture conversations and PoCs."
- **Si downleveled:** Accept — $150K floor is competitive for someone targeting mid IC; LangChain on CV is high-leverage long-term.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | $150K–$250K USD (mid-to-senior IC range) |
| Funding / stage | LangChain — Series A ($25M, 2024) → growth-stage AI infra co. ~100 employees |
| Visa | Not specified in JD; LangChain US-based (SF). Anecdotal: Series A AI-infra startups variable on H1B sponsorship — must confirm during screen |
| Demand trend | Deployed/Customer Engineer at framework-tier AI cos (LangChain, LlamaIndex, Pinecone, Weaviate) is one of the highest-demand 2025-2026 roles |
| Aggregator listing | Himalayas + LinkedIn + Wellfound + LangChain careers page |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Applied AI engineer (Master's, 2.5 yrs) shipping production agentic LLM systems on LangChain — healthcare RAG, multi-agent pipelines with schema-validated JSON, and 3 public products. Comfortable co-architecting with customer engineering teams." | Mirror "co-architect/co-build" + LangChain + production agents |
| 2 | Bullets | Reorder Progress Solutions: RAG (cv.md L25) → agentic workflows (L26) → predictive ML (L27) → FastAPI/Docker (L28) | JD priority: agentic + RAG + framework expertise > pure ML |
| 3 | Skills | Move LangChain, LlamaIndex, RAG, Agentic Workflows, Vector Search, Embeddings, Structured Outputs, Evaluation Pipelines to top | Keyword density for LangChain ATS |
| 4 | Projects | Lead with Healthcare Claims agentic pipeline (multi-agent + schema contracts) → Manga Lens (multi-vendor abstraction) → Dream Decoder (structured-prompt eval) | Each maps directly to "production agents beyond simple API calls" |
| 5 | Footer | "US-based, F-1 OPT — open to sponsorship; Remote-US" | F-1 OPT visibility upfront |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Production agents beyond simple API calls | Healthcare Claims multi-agent pipeline | 5-agent claims processing in regulated domain w/ hallucination + cascading-error risk | Schema-validated JSON contracts between agents, RAG-grounded CPT/ICD validation, ANN duplicate detection, explainable risk scoring | Production multi-agent system w/ audit-ready reasoning traces | >30% hallucination reduction; ~25% agent stability gain | Schema contracts between agents > free-form chaining; RAG grounding > pure prompt steering |
| 2 | LangChain framework expertise | Healthcare RAG @ Progress Solutions | Clinical knowledge retrieval + healthcare doc search | LangChain-built recursive semantic chunking + transformer embeddings + retrieval grounding + eval pipelines | Production RAG signed off by clinical SMEs | ~35% retrieval precision gain; >90% groundedness | LangChain + custom chunking for domain text > stock chunkers |
| 3 | Customer-facing technical communication | Clinical SME collaboration loop | Clinical reviewers needed groundedness proof for HIPAA-conscious deployment | SME-curated retrieval evals + side-by-side review + audit trails + system-limitation docs | Clinical sign-off + production rollout | ~35% precision; >90% groundedness | SME-in-the-loop eval surfaces edge cases that pure offline metrics hide |
| 4 | Build developer trust (public/external) | Manga Lens Chrome Web Store ship | Independent end-to-end browser extension w/ 4-vendor LLM vision pipeline | Manifest V3, content scripts, service workers, captureVisibleTab, multi-section pipeline w/ coordinate remapping, 7-day cache | Public Chrome Web Store ship; 29 manga/webtoon sites | Active users + reviews + privacy policy + narrowed permissions | Public ship + visible tradeoffs (WebP vs JPEG per vendor) builds developer trust |
| 5 | Architecture review / tradeoffs | Dream Decoder multimodal pipeline | Naive direct-prompt orchestration produced incoherent multimodal outputs | Intermediate structured-prompt transformation layer + Perplexity Sonar (interp) + Replicate (image) abstraction | Cohesive multimodal pipeline w/ measurable improvements | ~30% alignment; ~25-30% first-pass image success | Structured intermediate prompts > vibe iteration; eval-driven structure beats freeform |
| 6 | Operate under ambiguity / fast deployments | 4 shipped indie projects (Chrome ext + agent pipeline + multimodal app + drowsiness CV) | Each project shipped from blank slate w/ shifting requirements | Ship-first then refine: Chrome ext → agent → multimodal → CV | 4 production codebases | Live shipped (Chrome Web Store) or production-ready prototypes | Ship narrow vertical slice first; instrument from day 1 |

**Story Bank:** Append "LangChain-built healthcare RAG w/ clinical SME loops" + "Multi-agent pipeline w/ schema-validated JSON contracts" to story-bank.md.

**Red-flag questions:**
- "3+ yrs?" → "2.5 yrs core SWE/MLE, plus internships. What I lack in years I make up for in shipped breadth — 3 production indie products + healthcare RAG + multi-agent pipelines. LangChain explicit on stack from day 1."
- "Why deployed/customer-engineering vs pure SWE?" → "I've been a clinical-SME-facing engineer for 2.5 years. Customer-facing is the muscle I want to formalize at LangChain — and the framework I've shipped on is exactly LangChain."
- "Visa?" → "F-1 OPT, US-based now. LangChain's US-only listing is compatible. Future sponsorship is the conversation I want to have once we're aligned on technical fit."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Himalayas + LangChain careers page; deadline 2026-06-21 | Positive |
| Apply button | Active | Positive |
| Description quality | Specific (Python+JS, agent-based, LangChain framework, POCs/arch reviews, customer engineering) | Positive |
| Salary transparency | $150-250K disclosed | Positive |
| Realistic requirements | 3+ yrs minimum aligns w/ stated comp band | Positive |
| Layoffs / freeze | None reported at LangChain (Series A growth stage) | Positive |
| Role market context | Deployed/Customer Engineer at framework-tier AI infra co is real, growing category | Positive |
| Aggregator multi-listing | Himalayas + LangChain careers + Wellfound | Positive |
| Visa policy disclosure | Not stated — must verify during screen | Neutral |

**Assessment:** **High Confidence** — LangChain is real, growing, framework-tier infra company. Comp transparent, JD specific, multi-board listing. Visa policy unknown but US-only listing compatible with current F-1 OPT.

## H) Draft Application Answers

(score 3.8 < 4.5 — H block omitted per modes/oferta.md threshold)

---

## Keywords extraídas

LangChain, Deployed Engineer, Customer Engineering, Forward Deployed, Python, JavaScript, TypeScript, Production AI Agents, Agentic Workflows, RAG, Vector Search, Embeddings, POC, Architecture Review, Technical Evaluation, Customer-Facing, Remote-US, $150K-$250K, Phoenix, Series A.
