# Evaluación: Arize AI — AI Engineer, Instrumentation

**Fecha:** 2026-05-04
**Arquetipo:** Applied AI / LLM Engineer (AI Observability / Instrumentation / Evaluation)
**Score:** 3.1/5
**URL:** https://job-boards.greenhouse.io/arizeai/jobs/5661972004
**Legitimacy:** High Confidence
**Location:** Remote (United States) — Series C, $135M+ funding, 150+ enterprises and Fortune 500 customers; Booking.com, Uber, Siemens, PepsiCo
**PDF:** output/2026-05-04/cv-deepak-mallampati-arize-ai-engineer-instrumentation-2026-05-04.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI / LLM Engineer (AI observability + instrumentation + OpenInference / OpenTelemetry) |
| Domain | AI & Agent Engineering observability and evaluation platform |
| Function | Build LLM and instrumentation libraries for emerging LLM providers and agent frameworks; maintain Python + TypeScript ecosystems (OpenAI, Anthropic, LlamaIndex, CrewAI); shape OpenTelemetry semantic conventions |
| Seniority | Mid-to-Senior IC (3-5+ yrs production code) |
| Remote | Fully Remote (US) |
| Team | OpenInference / Engineering — open-source standard for AI observability |
| TL;DR | Build instrumentation libraries (Python + TS) for emerging LLM providers + agent frameworks; drive OpenTelemetry semantic-convention improvements for AI observability. |

## B) Match con CV

| JD requisito | CV evidence |
|---|---|
| LLM + agent instrumentation across providers (OpenAI, Anthropic, LlamaIndex, CrewAI) | Multi-provider AI vision (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) w/ per-provider payload handling in Manga Lens (cv.md L60); LangChain + LlamaIndex listed in skills (cv.md L13) |
| Python expertise (production) | Python production at Progress Solutions, Suvidha (cv.md L12); FastAPI/Flask + Docker (cv.md L17) |
| TypeScript expertise (production SDKs) | TypeScript listed in skills (cv.md L12); Manga Lens TS Chrome extension shipped to Chrome Web Store (cv.md L60); Dream Decoder React/TypeScript (cv.md L74) — strong but not "expert SDK builder" |
| AI/ML observability or evaluation | Eval-first RAG w/ ~35% retrieval precision + >90% groundedness (cv.md L25); agentic LLM workflows w/ structured reasoning + tool discipline + grounding rules (cv.md L26); evaluation audit trails + system-limitation docs (cv.md L30) |
| Open-source community building | Shipped Manga Lens to Chrome Web Store (privacy policy, narrowed permissions, public extension) (cv.md L60); GitHub portfolio (Deepak0070) — less than mature OSS leadership |
| Build SDK clients / instrumentation libraries / platform APIs | FastAPI/Flask packaging w/ structured logging + load simulation (cv.md L28); Manga Lens multi-provider SDK abstraction; Manifest V3 service workers + content scripts (cv.md L60) |
| AI/LLM ecosystem deep interest | Stack across LangChain, LlamaIndex, HF Transformers, Diffusers, Stable Diffusion, ControlNet (cv.md L13-15); Multi-vision-provider integration; Dream Decoder structured prompt transformation layers (cv.md L74) |

**Gaps:**
1. **3-5+ yrs production code** — Deepak has 2.5 yrs production AI + 10 mo Energy Solutions DevOps + 3 mo Suvidha → ~3.5 yrs total but only 2.5 yrs production AI engineering. Borderline; in screen frame as "2.5 yrs production AI + 1 yr production DevOps/data."
2. **Expert TypeScript** — Real TS shipping (Manga Lens, Dream Decoder) but not "expert-level SDK builder." Gap for senior instrumentation library work.
3. **OpenTelemetry / OSS standards experience** — None on CV. Hard gap for "drive improvements to semantic conventions."
4. **OSS community leadership** — JD asks for "vibrant open-source community engagement." Deepak has shipped extensions but not led OSS. Gap.
5. **Remote-US** — Strong fit; F-1 OPT US-base eligible.

## C) Nivel y Estrategia

- **Detected level:** Mid-Senior IC (3-5+ yrs explicitly).
- **Vender:** "2.5 yrs production Applied AI + multi-provider AI vision SDK shipped (Manga Lens, 4 providers, Chrome Web Store), agentic LLM workflows w/ tool discipline + grounding (~25% stability, >30% hallucination reduction), eval-first RAG (~35% precision, >90% grounded). Python + TypeScript both production-deployed."
- **Si downleveled:** Accept Mid-IC framing; Arize's OpenInference is a focused tech track and Deepak's eval-first work is a structural fit even if OSS leadership is light.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| Comp | $125K - $225K base + competitive equity (per JD) |
| Funding | Series C, $135M+ funding, 150+ enterprises, Fortune 500 customers (Booking.com, Uber, Siemens, PepsiCo) |
| Visa | Series C US tech — H-1B sponsorship typical; not explicit in JD |
| Demand | AI observability is one of 2026's fastest-growing tracks (LangSmith, Arize, Datadog, NewRelic all hiring) |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | Lead with "Multi-provider AI vision SDK (4 providers shipped) + Python+TypeScript production + eval-first RAG/agentic LLM (~35% precision, >30% hallucination reduction)" | Mirror JD's Python+TS + multi-provider instrumentation framing |
| 2 | Bullets | Surface Manga Lens 4-provider abstraction (Manifest V3 service workers, per-provider payload), eval-first RAG (~35%), agentic LLM grounding (>30% hall reduction), Dream Decoder structured prompt transformation | All map to instrumentation + evaluation discipline |
| 3 | Skills | Python, TypeScript, multi-provider AI integration, FastAPI/REST, Docker, structured logging, eval pipelines, LangChain, LlamaIndex → top of skills | Keyword-first ATS pass for OpenInference/SDK roles |
| 4 | Projects | Manga Lens (4-provider TS extension) first, Healthcare RAG (eval-first) second, Agentic Claims Pipeline (schema contracts) third, Dream Decoder (structured prompts) fourth | Lead with TS + multi-provider + eval |
| 5 | Footer | "Open to Remote-US; F-1 OPT US-base; STEM OPT eligible" | Match JD location |

## F) Plan de Entrevistas

| # | Requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Multi-provider SDK / instrumentation | Manga Lens 4-provider | Real-time webtoon translation needed multi-provider robustness | 4 vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) w/ per-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash) | Shipped to Chrome Web Store (29-site coverage) | 7-day cache, narrowed permissions, multi-section capture w/ coordinate remap | Per-provider payload routing > single abstraction; failure isolation > unified retry |
| 2 | Eval-first AI observability | Healthcare RAG | Clinicians needed grounded, auditable answers from clinical KB | Recursive semantic chunking + transformer embeddings + eval-first design + retrieval-grounded scoring | Production RAG w/ audit trails | ~35% retrieval precision, >90% groundedness | Eval-first builds clinician trust; grounding scores enable accountability |
| 3 | Agentic LLM observability w/ tool discipline | Eligibility / care navigation | Multi-step healthcare queries needed structured reasoning + grounding | Structured reasoning + tool discipline + grounding rules + system-limitation docs | Production agentic workflows | ~25% stability + >30% hallucination reduction | Tool discipline + grounding > free-form agent loops |
| 4 | Production code reliability | FastAPI + Docker | ML/LLM inference needed production-grade packaging | FastAPI/Flask containerized w/ Docker + structured logging + load simulation | Production deployment | ~30% post-deploy defect reduction | Logging + load sim > static review for surfacing real failure modes |
| 5 | Multi-modal API orchestration | Dream Decoder | Direct prompts produced misaligned visuals | Intermediate structured prompt transformation layers between Perplexity Sonar (interpretation) + Replicate (image gen) | Full-stack FastAPI + React/TS app | ~30% contextual alignment + ~25-30% first-pass image success | Structured intermediate layers > naive direct-prompt orchestration for multi-modal |
| 6 | Schema-based agent contracts | Agentic Healthcare Claims | Multi-agent pipeline needed cascading-hallucination prevention | Schema-validated JSON contracts between Intake / Validation / Consistency / Duplicate / Risk agents | Production agentic pipeline | Audit-ready reasoning + RAG-grounded CPT/ICD validation | Schema contracts = production-grade reliability for agents |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Greenhouse API; full JD body returned | Positive |
| Apply button | Active | Positive |
| Description quality | Names Series C, $135M+ funding, 150+ enterprise customers, Fortune 500 (Booking.com, Uber, Siemens, PepsiCo), open-source product (OpenInference repo), specific tech (Python, TS, OpenTelemetry, OpenAI, Anthropic, LlamaIndex, CrewAI) | Positive |
| Salary transparency | $125K - $225K disclosed | Positive |
| Reposting | Multiple Arize AI Engineer / Solutions Engineer roles active | Positive |
| Layoffs / freeze | None — Series C scaling | Positive |
| Role market context | AI observability is a top-3 GenAI hiring track in 2026 | Positive |

**Assessment:** **High Confidence** — Series C funded, named enterprise customers, OSS leader (OpenInference), salary disclosed, role-specific tech in JD.

---

## H) Draft Application Answers (score 3.1 — included for ready-to-apply)

**Why are you interested in Arize AI?**
> Arize sits at the exact intersection I care about: production-grade AI observability + multi-provider instrumentation. My day-to-day at Progress Solutions has been eval-first Applied AI in healthcare — RAG with ~35% retrieval precision, agentic LLM workflows with >30% hallucination reduction via tool discipline + grounding, and FastAPI + Docker packaging w/ structured logging that cut post-deploy defects ~30%. On the side I shipped Manga Lens, a Chrome extension with 4 different AI vision providers (Claude, GPT-4o mini, GPT-4.1 Nano, Ollama) — I dealt firsthand with the pain points that OpenInference and instrumentation libraries solve. I want to build that infrastructure for the broader AI ecosystem.

**Tell us about a multi-provider integration you've built.**
> Manga Lens — a Chrome extension shipped to the Chrome Web Store that translates manga and webtoons in real time using one of four AI vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local). The hardest design decision was payload handling: cloud providers wanted WebP, but Ollama with minicpm-v crashed on WebP due to a CUDA quirk and required JPEG. Instead of forcing a single payload format, I built per-provider payload routing — each provider has its own preprocessing path. I also added a 7-day translation cache, multi-section capture for tall webtoon panels (viewport-slice screenshots with coordinate remap), and narrowed host permissions for privacy. The lesson: provider-specific failure modes are real, and per-provider payload routing + failure isolation beats unified retry logic.

---

## Keywords extraídas

AI Observability, Instrumentation, OpenInference, OpenTelemetry, LLM Tracing, Agent Observability, Python, TypeScript, SDK, Multi-Provider AI, Eval-First, Grounding, RAG, Agentic LLM, Tool Discipline, FastAPI, Docker, Open Source, Remote-US, Series C, Arize AI
