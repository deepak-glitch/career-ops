# Evaluación: DeepIntent — Applied AI Engineer

**Fecha:** 2026-04-27
**Arquetipo:** Applied AI / LLM Engineer + AI Solutions / Forward Deployed (embedded with commercial teams)
**Score:** 4.0/5
**URL:** https://job-boards.greenhouse.io/deepintent/jobs/5979052004
**Legitimacy:** High Confidence
**Location:** New York, NY (Eastern Time required); remote flexibility per benefits language
**PDF:** output/2026-04-27/cv-deepak-mallampati-deepintent-applied-ai-2026-04-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Arquetipo | Applied AI + FDE-flavor (embedded technical contact within business teams) |
| Domain | Healthcare advertising / programmatic / commercial-ops automation |
| Function | Build & ship AI agents and automation for commercial-ops workflows; rapid prototype + deploy |
| Seniority | Mid IC (2+ yrs hands-on software dev) |
| Remote | NYC-based, ET availability; remote flexibility per benefits language |
| Team | Commercial Operations / US Commercial team (embedded) |
| TL;DR | Embed with US commercial and operational teams; design and deploy AI agents using LLMs (OpenAI, Anthropic Claude), workflow automation tools, RESTful APIs, and Python scripting; mid-level; $110K-$150K base. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Hands-on AI/LLM tools (configure & prompt OpenAI / Anthropic) | Healthcare RAG + agentic LLM workflows in production at Progress Solutions (cv.md L25-26); Manga Lens 4-provider including Claude + GPT-4o (cv.md L60); Dream Decoder Perplexity Sonar coordination (cv.md L66) |
| Design and deploy AI agents (workflow automation) | Multi-agent healthcare claims pipeline with schema-validated handoffs (cv.md L72); agentic LLM workflows for eligibility / care navigation / documentation clarification (cv.md L26) |
| 2+ years hands-on software development | 2.5 yrs at Progress Solutions + Energy Solutions / Suvidha contracts (cv.md L23, L33, L42) |
| Bachelor's or Master's CS / Math / Engineering | MS Kent State University (cv.md L90) |
| RESTful APIs + MCP server experience | FastAPI / Flask REST services (cv.md L17, L28, L47); MCP-adjacent (Anthropic ecosystem familiarity via Claude in Manga Lens / Dream Decoder) |
| Python proficiency | Python primary stack (cv.md L12) |
| Prompt engineering best practices | Structured outputs, grounding rules, tool discipline in agentic workflows (cv.md L26); structured-prompt transformation layers in Dream Decoder (cv.md L66) |
| Embedded technical contact within business teams | Suvidha non-technical-staff Flask API (cv.md L47); Progress Solutions stakeholder-facing system-limit docs (cv.md L30); Student Manager coordination across 150+ students (cv.md L52) |
| Technical documentation + monitoring | Stakeholder-facing system-limit docs; structured logging + load sim → ~30% defect reduction (cv.md L28, L30) |
| Eastern Time availability | OH-based; ET-native — no friction |

**Gaps:**
1. **MCP server experience explicit** — Deepak has Anthropic/Claude API experience but no shipped MCP server. Mitigation: prototype an MCP server (e.g., wrapping a Python tool surface) before interview; cite agentic + structured handoff discipline from healthcare claims pipeline.
2. **Workflow automation tools (Zapier / Make / n8n)** — none in CV. Mitigation: frame Python orchestration + REST integration as the "code-first" version; commit to fast ramp on no-code tooling.
3. **AdTech / programmatic domain** — none. Mitigation: lead with commercial-ops automation pattern (eligibility/triage/risk-scoring) which transfers cleanly.

## C) Nivel y Estrategia

- **Nivel detectado:** Mid IC, 2+ yrs floor — Deepak's 2.5 yrs is a clean fit.
- **Vender mid:** Lead with "production agentic LLM workflows + multi-provider AI integrations + RESTful Python deployment, all in healthcare-AI domain — exactly the embedded-with-commercial-teams pattern at smaller scale." MS + ET availability + multi-provider experience = strong on-paper fit.
- **Si downleveled:** Accept — $110K floor is reasonable for a 2.5-yr mid IC in NYC remote-flex; AdTech AI agent role compounds Deepak's specialization.

## D) Comp y Demanda

| Dimensión | Datos |
|---|---|
| DeepIntent Applied AI Engineer (per JD) | $110K-$150K base + performance bonus + benefits + unlimited PTO |
| Funding / stage | Healthcare AdTech; Series C 2023; profitable trajectory |
| Visa | "Do you require sponsorship?" is in app — meaning they evaluate case-by-case (not auto-veto) |
| Demand trend | Embedded-AI-engineer roles inside commercial ops are a 2025-2026 hot category; AdTech-AI is a known growth segment |

## E) Plan de Personalización

| # | Sección | Cambio | Por qué |
|---|---|---|---|
| 1 | Summary | "Applied AI engineer who ships agentic LLM workflows + multi-provider AI integrations + RESTful Python services — 2.5 yrs in healthcare AI; embedded delivery experience." | Mirror JD: agentic + Anthropic/OpenAI + RESTful + embedded |
| 2 | Bullets | Surface healthcare agentic workflows (eligibility/care navigation, ~25% stability), multi-provider Manga Lens (Claude + OpenAI + Ollama), healthcare RAG (~35% precision) | Three direct Applied-AI proof points |
| 3 | Skills | Move LLM (OpenAI, Anthropic), Agentic Workflows, RESTful APIs, FastAPI, Python, Prompt Engineering, Structured Outputs to top | JD keyword-first |
| 4 | Projects | Healthcare claims agentic pipeline first (multi-agent + JSON contracts), Manga Lens second (multi-provider integration), Dream Decoder third (structured prompting) | Agentic-first ordering |
| 5 | Footer | "US-based, F-1 OPT — ET native (Ohio); NYC-flex" | Match DeepIntent's location model |

## F) Plan de Entrevistas

| # | JD requisito | Historia | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Design AI agents for ops automation | Healthcare claims agentic pipeline | Manual claims review with high false-positive risk | Multi-agent pipeline (Intake → Validation → Consistency → Duplicate → Risk) with schema-validated JSON contracts | Production multi-agent system with audit-ready reasoning traces | Cascading hallucinations prevented; explainable fraud risk scoring | Schema contracts between agents = production-grade reliability |
| 2 | OpenAI / Anthropic / multi-provider | Manga Lens 4-provider | Each AI vendor has different payload conventions, failure modes | Per-provider isolation + WebP/JPEG payload routing for Anthropic Claude / OpenAI GPT-4o / GPT-4.1 / Ollama | Live extension across all 4 providers | Zero cascade failures across providers | Multi-vendor isolation > single-vendor lock-in |
| 3 | Embedded with business teams | Healthcare clinician-facing RAG | Clinicians needed grounded answers in their workflow | Stakeholder-facing system-limit docs + eval-first rollout + grounding rules | RAG production with audit trail | ~35% retrieval precision; >90% groundedness; documented limits | Documenting limits builds trust in business stakeholders |
| 4 | Workflow automation | Eligibility / care navigation agents | Multi-step healthcare ops queries needed structured reasoning | Structured reasoning + tool discipline + grounding rules + handoff contracts | Agentic LLM workflows production-deployed | ~25% agent stability + ~30% hallucination reduction | Tool discipline > free-form agent loops |
| 5 | RESTful APIs + Python | Production FastAPI deploys | Inference services in HIPAA-conscious stack | FastAPI + Docker + structured logging + load simulation | Containerized service with observability | ~30% post-deploy defect reduction | Logging-first deploy → faster diagnosis |
| 6 | Rapid prototype + ship | Manga Lens + Dream Decoder + RAG | Three independent shipped products in 2.5 yrs | End-to-end ownership: data → model → API → UI → deploy | Live products + production services | Velocity comes from end-to-end ownership | Owning the full stack accelerates iteration |

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Active on Greenhouse today; well-formed JD with specific tech stack | Positive |
| Apply button | Active on job-boards.greenhouse.io/deepintent | Positive |
| Description quality | Names specific tools (OpenAI, Anthropic Claude, MCP servers, RESTful APIs, Python), specific business teams (US commercial), concrete deliverables (AI agents for ops automation) | Positive |
| Salary transparency | Disclosed in JD ($110K-$150K) | Positive |
| Reposting | First seen today (no prior in scan-history) | Neutral |
| Layoffs / freeze | DeepIntent has been growing; healthcare AdTech segment has tailwinds (Pfizer, GSK, Lilly programmatic spend) | Positive |
| Role market context | Embedded-with-business-teams Applied AI engineer is exactly the 2025-2026 hottest job description pattern | Positive |

**Assessment:** **High Confidence** — well-formed JD, salary disclosed, role aligned with industry trend, ET-friendly remote-flex, sponsorship evaluated case-by-case (not auto-veto).

---

## Keywords extraídas

Applied AI Engineer, AI Agents, Workflow Automation, OpenAI, Anthropic Claude, MCP Server, RESTful API, Python, Prompt Engineering, LLM, Healthcare, AdTech, Programmatic, Commercial Operations, Embedded Engineering, Eastern Time, NYC, $110,000-$150,000, Stakeholder Documentation, Production Monitoring
