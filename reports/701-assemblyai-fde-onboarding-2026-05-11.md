# Evaluación: AssemblyAI — Forward Deployed Engineer, Onboarding

**Fecha:** 2026-05-11
**Arquetipo:** AI Solutions / Forward Deployed Engineer
**Score:** 3.6/5
**URL:** https://job-boards.greenhouse.io/assemblyai/jobs/4693817005
**Legitimacy:** High Confidence
**Location:** Remote — New York (US-based)
**PDF:** output/2026-05-11/cv-deepak-mallampati-assemblyai-fde-onboarding-2026-05-11.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Forward Deployed Engineer — customer activation / onboarding |
| Domain | Voice AI / Speech-to-Text developer platform |
| Function | Drive new-customer activation from first API call through production |
| Seniority | 2+ years (software engineering / FDE / sales engineering) |
| Remote | Remote — New York |
| Team size | Not specified |
| TL;DR | Mid-level FDE owning customer activation for AssemblyAI's voice/ASR APIs — Python/JS debug fluency + WebSocket/audio latency reasoning + quota-based outcomes; $150-200K OTE. |

## B) Match con CV

| JD requirement | CV evidence | Status |
|---|---|---|
| 2+ years software / FDE / sales-engineering / customer-facing technical role | 2.5y Applied AI at Progress Solutions + shipped Manga Lens to Chrome Web Store with 4 cloud/local providers | **Match** |
| Read unfamiliar Python or JavaScript/Node code | Python primary, TypeScript/React in Dream Decoder + Manga Lens, Node-style content scripts | **Match** |
| WebSockets, audio pipelines, latency optimization | YOLOv8 driver drowsiness real-time at ~30% lower inference latency; Manga Lens viewport-slice screenshots + dedup; no direct WebSocket experience | Adjacent — real-time + latency tuning yes, WebSockets specifically no |
| Configure voice AI models for specific use cases | No voice AI in cv.md; multimodal (image/video) yes | Gap |
| Architecture discovery conversations with customers | Stakeholder docs at Progress Solutions; system-limitation docs; HIPAA-conscious data governance discussions | Adjacent |
| Debug + patch customer code | FastAPI + Docker production debugging; cross-provider WebP/JPEG handling in Manga Lens to avoid CUDA crashes | **Match** |
| Quota-based metric track record | Internal metrics-led delivery (retrieval precision +35%, hallucination -30%, defects -30%) but not external sales-quota history | Partial |
| Active use of AI tools in daily work | Multi-provider LLM/vision integrations (Claude, GPT-4o, Perplexity Sonar, Replicate, Ollama); LLM-orchestrated agent in Agentic Pixel | **Strong match** |
| Synthesize customer feedback into product recommendations | Field learnings → roadmap pattern at Progress Solutions; system-limitation docs | **Match** |
| Custom internal tooling and automation | CI/CD with Jenkins; multi-section capture pipeline; intermediate prompt-transformation layers | **Match** |

**Gaps & mitigation:**
1. **Voice AI / ASR / telephony specifically** — Deepak has multimodal + RAG + agentic, not voice. Mitigation: 1-2 week prototype calling AssemblyAI's real-time streaming API + Whisper benchmark; reference in cover letter.
2. **WebSocket protocol depth** — adjacent to FastAPI REST. Mitigation: small streaming-transcription demo using AssemblyAI's WebSocket API.
3. **External sales quota** — Deepak's metrics are engineering-side, not quota. Frame as "customer-success outcomes (retention, expansion) measured via internal KPIs."

## C) Nivel y Estrategia

**Detected level:** Mid-level (2+y floor). Deepak fits at 2.5y. The role values customer-facing technical communication + debug-anywhere engineering depth, both within Deepak's lane.

**Sell-senior plan:** Lead with shipped-to-production patterns: Manga Lens on Chrome Web Store with multi-provider fallback logic; Healthcare RAG at +35% retrieval precision; Multi-agent claims pipeline with JSON-contract guards. Frame customer-empathy via Progress Solutions stakeholder docs.

**If downleveled:** N/A — role is already mid IC.

## D) Comp y Demanda

JD: **$150,000 - $200,000 OTE** (likely $130-160K base + variable). Levels.fyi shows AssemblyAI FDE / Solutions Engineer at $140-180K base + $20-40K variable + equity. Remote-NY tax bracket. Voice AI demand is rising sharply (Bland, Vapi, Synthflow, Retell all hiring FDEs). Market for FDE roles up 800% YoY.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Applied AI engineer building healthcare RAG..." | "Applied AI engineer (2.5y) shipping production AI services — Manga Lens (Chrome Web Store, 4 providers), FastAPI/Docker inference, real-time CV (YOLOv8, ~30% latency cut). Customer-facing stakeholder cadence in healthcare AI delivery." | Mirrors JD: production, latency, multi-provider, customer-facing |
| 2 | Skills | LLM/RAG/agentic block first | Promote "Real-time inference, multi-provider abstraction (Claude/GPT/Ollama), WebP/JPEG pipeline tuning, FastAPI streaming" to first line | Match voice AI streaming angle |
| 3 | Manga Lens bullet | Generic "shipped Chrome extension" | "Production multi-provider abstraction (cloud + local Ollama) with provider-specific payload handling — caught CUDA crashes pre-release; shipped to Chrome Web Store with privacy review." | Customer-facing reliability framing |
| 4 | Healthcare RAG bullet | Retrieval-only framing | Add "Stakeholder-facing system-limitation docs + evaluation audit trails — closed the loop between engineering and clinical/ops users." | FDE customer onboarding parallel |
| 5 | Drowsiness Detection bullet | YOLOv8 unified model | Lead with "Replaced two-stage CNN pipeline with unified YOLOv8 — ~30% inference latency cut, sliding-window confidence to suppress false positives." | Latency / pipeline-debug fit for voice streaming |

**LinkedIn:** Match headline to "Applied AI Engineer — Forward Deployed / Customer Activation"; reorder skills.

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | First-day customer debug | Manga Lens Ollama CUDA crash | Cloud providers worked; local Ollama crashed on WebP | Ship Chrome Web Store release without crashes | Diagnosed payload-encoding mismatch; switched JPEG for Ollama only; kept WebP for cloud | Public release shipped; zero CUDA crash reports | Provider-specific payload handling is cheap insurance; bake it into the abstraction layer day one |
| 2 | Latency in real-time pipeline | YOLOv8 drowsiness unified model | Two-stage CNN pipeline was the bottleneck | Hit real-time monitoring on consumer hardware | Migrated to unified YOLOv8 detection-+-classification; tuned NMS + sliding-window confidence | ~30% inference latency cut; ~25% false-positive reduction | Replacing pipeline boundaries beat tuning each stage individually |
| 3 | Customer architecture discovery | Healthcare RAG stakeholder loop | Clinical staff couldn't validate retrieval outputs | Build trust + evaluation transparency | Wrote system-limitation docs + evaluation audit trails; piloted with clinical reviewers | +35% retrieval precision adopted; >90% retrieval-grounded alignment | Stakeholder docs are part of the product, not afterthoughts |
| 4 | API onboarding + edge cases | Multi-provider LLM orchestration in Dream Decoder | Naive direct-prompt orchestration produced misaligned images | Improve first-pass alignment | Inserted intermediate structured-prompt transformation layers | +30% contextual alignment, +25-30% first-pass image success | Schema between agents > vibes between agents |
| 5 | Production reliability | FastAPI healthcare inference | Inference services would silently degrade post-deploy | Cut post-deploy defects | Added structured logging + load simulation + Docker packaging | ~30% defect reduction post-deploy | Observability is FDE leverage — you can't fix what you can't see at the customer |
| 6 | Reading unfamiliar code | Agentic claims pipeline JSON contracts | Cascading hallucinations across agents | Stabilize multi-agent pipeline | Schema-validated JSON contracts between Intake → Validation → Fraud agents | Predictable, audit-ready outputs | Contracts > prompts for agent reliability |

**Case study to lead with:** Manga Lens (production, multi-provider, debug story, Chrome Web Store).

**Red-flag prep:** "Why FDE instead of pure engineering?" → Frame the Progress Solutions stakeholder loop + Manga Lens public-release feedback cycle as proof of customer-facing instinct.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| Posting age | Active Greenhouse JD with form submissions accepted | Positive |
| Apply button active | Yes | Positive |
| Tech specificity | Names Python, JS/Node, WebSockets, audio pipelines, latency, ASR | Positive |
| Salary transparency | $150-200K OTE disclosed | Positive |
| Requirements realism | 2+y floor, mid-IC scope; aligned with mid-FDE market | Positive |
| Layoffs / hiring freeze | No public signal; AssemblyAI Series C 2023 + recent voice AI growth | Positive |
| Reposting pattern | First-time in scan-history | Neutral |
| Role-company fit | High — onboarding-flavored FDE supports AssemblyAI's API-led GTM | Positive |

## H) Draft Application Answers

(Score 3.6 — below 4.5 threshold; full answers deferred.)

---

## Keywords extraídas

Forward Deployed Engineer, customer activation, voice AI, ASR, speech-to-text, WebSocket, audio pipeline, latency, API onboarding, Python, JavaScript, Node, debug, AI tools, sales engineering, technical discovery, architecture, customer feedback, automation, internal tools.
