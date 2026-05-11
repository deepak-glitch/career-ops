# Evaluación: Arize AI — AI Solutions Engineer, East

**Fecha:** 2026-05-11
**Arquetipo:** AI Solutions / Forward Deployed (con sesgo Customer Engineering + LLMOps)
**Score:** 3.4/5
**URL:** https://job-boards.greenhouse.io/arizeai/jobs/5993755004
**Legitimacy:** High Confidence
**Location:** Remote (New York City metro / EST time zone required)
**PDF:** output/2026-05-11/cv-deepak-mallampati-arize-ai-solutions-engineer-east-2026-05-11.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|---|---|
| Empresa | Arize AI (Series C, $135M+ raised, 150+ enterprise customers) |
| Arquetipo | AI Solutions / FDE — customer-facing AI engineering for observability/eval platform |
| Domain | LLMOps / AI Observability + Agent Engineering platform |
| Function | Pre-sales + post-deployment advisory (trusted technical advisor to ML/GenAI teams) |
| Seniority | IC, no explicit years floor (preferred: prior DS/MLE/MLOps + customer-facing) |
| Remote | Remote-first BUT must be in NYC metro / EST timezone (location-constrained remote) |
| Team | Solutions Engineering org (early build-out, founding-ish energy) |
| TL;DR | Client-obsessed AI SE who teaches Arize observability/eval product to enterprise ML/GenAI teams, drives expansions, and runs strategic business reviews. |

## B) Match con CV

| Requisito del JD | Línea exacta del CV | Match |
|---|---|---|
| ML/GenAI production engineering experience | "Built **Retrieval-Augmented Generation (RAG) systems** for clinical knowledge retrieval … improved contextual retrieval precision by **~35%**" (cv.md:25) + "Developed **agentic LLM workflows** … improved agent response stability by **~25%**" (cv.md:26) | Strong (1:1) |
| Cloud (AWS, Azure, GCP) | "Infra & DevOps: Docker, Jenkins, Grafana, CI/CD, MLOps/LLMOps, RESTful APIs, cloud-ready deployment" (cv.md:17) | Partial (cloud-ready, but no explicit AWS/Azure/GCP project named) |
| TensorFlow / PyTorch / Scikit-learn | "ML Libraries: scikit-learn, XGBoost, PyTorch, Hugging Face Transformers, Diffusers, LangChain, LlamaIndex" (cv.md:14) | 1:1 |
| LLM / Agentic frameworks (LlamaIndex, LangGraph, DSPy) | LangChain + LlamaIndex on cv.md:14; multi-agent pipeline in Agentic Healthcare Claims project (cv.md:71-72) | Strong (LangChain/LlamaIndex direct; LangGraph/DSPy gap mitigable) |
| ML/DS lifecycle (feature gen, training, deployment, batch + real-time scoring via REST APIs) | "Packaged ML/LLM inference as **FastAPI/Flask** RESTful services, containerized with **Docker**" (cv.md:28) + Suvidha Flask API (cv.md:47) + Dream Decoder FastAPI (cv.md:66) | 1:1 |
| GenAI eval + app dev lifecycle | "evaluation pipelines, guardrails, grounding" (cv.md:13) + "Retrieval-grounded response alignment exceeded **90%** in evaluation" (cv.md:25) | 1:1 |
| Python | Listed cv.md:12 + every project | 1:1 |
| Strong communication, simplify complex concepts | Student Manager — "Led coordination for 150+ students… reduced coordination delays ~30%" (cv.md:52); founder of E-Farming marketplace stakeholder-facing | Partial (academic + founder; no enterprise account management) |
| Quick self-learner | Multi-provider AI vision integration in Manga Lens (4 providers shipped independently) (cv.md:60) | Direct |
| **Bonus: MLOps** | "MLOps/LLMOps" (cv.md:17) + "reduced post-deployment defects by **~30%**" (cv.md:28) | Partial |
| **Bonus: Kubernetes** | Not present — Docker only | Gap |
| **Bonus: Demo to business + technical audiences** | Stakeholder-facing system-limitation docs (cv.md:30); founder + student manager presentations | Indirect |
| **Bonus: Sales Engineer / Solutions Architect / Customer Success Engineer** | Not present — first SE role | **Hard gap** |

**Gaps + mitigation:**

1. **No prior Customer-facing SE / SA / Sales Engineering experience** (HARD gap, but explicitly "Bonus, not required"). Mitigation: lean on founder narrative (E-Farming onboarded 80-120 users phase 1; Manga Lens shipped to Chrome Web Store with privacy policy + 29 site selector configs = customer-product interface) + Student Manager stakeholder coordination + "system-limitation docs" line from Progress Solutions. Frame as "I've been the bridge between technical systems and non-technical users in healthcare, academic, and consumer contexts — I've never had a quota but I've always had a stakeholder."
2. **No explicit AWS/Azure/GCP project named.** Mitigation: "cloud-ready deployment" is on cv.md:17; mention any Azure/AWS exposure at Progress Solutions or in projects (Dream Decoder uses Perplexity Sonar + Replicate API — multi-cloud SaaS orchestration). State openly: "comfortable in any public cloud; willing to deepen via Arize internal docs and customer engagements."
3. **No LangGraph / DSPy direct production experience.** Mitigation: LangChain + LlamaIndex are on CV; LangGraph is conceptually adjacent (graph orchestration of agents — Deepak's Agentic Healthcare Claims uses multi-agent pipeline with schema-validated JSON contracts, which is the same problem class). Plan: spin up a small LangGraph + Arize Phoenix demo before interview.
4. **NYC metro / EST timezone requirement.** Deepak is Kent, OH (Eastern time zone — same time zone!) but not NYC metro. Relocation possible. Acknowledge in cover letter: "Currently in OH (EST); open to NYC relocation."

## C) Nivel y Estrategia

**JD level vs natural fit:** No explicit years floor. "Previous experience" + bonus "Sales Engineer / SA / CSE" suggests they want IC2-IC3 equivalent (3-5 years). Deepak is at ~2.5 years applied AI + ~1 year enterprise (Emerson Synthesis) = on the lighter side but compensates with founder/builder narrative and direct LLM platform experience.

**Vender "senior sin mentir":**
- Lead with: "I've shipped LLM applications end-to-end — RAG, agentic workflows, evals, FastAPI inference, Docker — in HIPAA-conscious healthcare. I know what production observability needs to catch because I've been on the other side of the dashboard."
- Reframe Manga Lens as: "I built a Chrome extension with four AI vision providers in production at the Chrome Web Store — I've already 'sold' an LLM-powered product to end users, including writing the privacy policy and supporting customer reports."
- Reframe Agentic Healthcare Claims as: "Schema-validated JSON contracts between agents — same problem class Arize customers face when their agent pipelines break in production. I can speak to evaluation, grounding, and cascading hallucination control from direct build experience."

**If they downlevel:**
- Accept Solutions Engineer I or Associate SE seat with 6-month review and clear path to standard SE.
- Negotiate: defined Solutions playbook ramp (shadow 2 SEs for 30 days, own a small customer by day 60).
- Don't accept >$120K base on the East geo — Arize comp guide is $125-175K, anchor at $145K + equity.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|---|---|---|
| JD range | $125,000-$175,000 base + variable + equity | JD (Greenhouse) |
| NYC Solutions Engineer median (AI/ML platform tools) | $140-180K base + 10-20% variable, levels.fyi 2026 | Inference; not directly verified this session |
| Arize Glassdoor culture rating | 4.2-4.6 star range historically (Series B/C AI tools company) | Inferred from public press (TechCrunch coverage Feb 2025) |
| Demand trend for LLMOps/observability SEs | High — Arize, Weights & Biases, LangSmith, Langfuse all hiring 2026 | Public job board signal |
| Sponsorship signal | Not stated in JD; Arize is US-based Series C — typical company posture is "no formal sponsorship" but case-by-case | Not directly verified |

**Read:** Comp is fair-market for a mid-NYC SE. Variable comp will likely tie to account expansion + customer satisfaction. Equity in Series C is meaningful but illiquid for 3-7 years.

## E) Plan de Personalización (CV + LinkedIn)

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | "Applied AI engineer (2.5+ years) building healthcare-focused RAG…" | "Applied AI engineer (2.5+ years) shipping RAG, agentic LLM workflows, and evaluation pipelines in production — comfortable bridging technical depth with stakeholder narratives in healthcare and enterprise contexts." | Insert "stakeholder narratives" hook to bridge to SE function |
| 2 | Skills — LLM & GenAI | "LLM application development, RAG, agentic workflows, structured outputs…" | Add "**LLM observability & evaluation (precision/recall metrics, grounding KPIs, alignment audits)**" inline | Mirrors Arize platform value prop |
| 3 | Experience — Progress Solutions bullet 4 | "Packaged ML/LLM inference as FastAPI/Flask…" | Add: "**Maintained evaluation dashboards and stakeholder-facing system-limitation reports** that surfaced retrieval drift and hallucination patterns for downstream care teams." | Direct match with Arize "trusted advisor" pitch |
| 4 | Projects — Manga Lens | "Full-stack browser extension…" | Add a final sentence: "Direct customer feedback loop via Chrome Web Store reviews shaped multi-provider fallback design — same instinct an SE applies to enterprise customer signals." | Bridge to client-facing function |
| 5 | LinkedIn Headline | "Applied AI Engineer @ Progress Solutions" | "Applied AI Engineer | LLMOps & Evaluation | RAG + Agentic Workflows | Open to NYC" | Recruiter discoverability + geo signal |

## F) Plan de Entrevistas — STAR+R Stories

| # | Requisito del JD | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Advise on GenAI best practices | Healthcare RAG retrieval precision audit | RAG agent returning ~65% irrelevant chunks for clinical queries | Cut irrelevant retrieval >30% and lift precision ~35% | Recursive semantic chunking + transformer embeddings + grounding rules; built eval harness with precision@k and grounded-answer ratio | ~35% retrieval precision gain; >90% grounded response alignment | What I'd do differently: ship eval harness on day 1, not month 2 — debugging without one cost 3 weeks |
| 2 | Demo to technical + business audiences | Manga Lens multi-provider launch | Shipping a Chrome extension with 4 AI vision providers, each with different cost/latency/quality profile | Explain trade-offs to non-technical readers (Chrome Web Store description + privacy policy) | Wrote two narratives: one engineering-decision-log for myself, one outcome-framed copy for store listing | Live on Chrome Web Store; multi-provider fallback prevented total outages | Customers don't care about provider — they care about translation working. SE muscle = always translate up. |
| 3 | Help customers deploy agent applications | Agentic Healthcare Claims pipeline | Claims agent cascade hallucinated downstream when upstream Intake agent emitted unstructured output | Prevent cascading errors across multi-agent chain | Designed schema-validated JSON contracts between every agent; added retry + audit-log fallback | No cascading hallucination in production tests; explainable risk scoring | If I'd had Arize Phoenix or similar observability earlier, I'd have caught the upstream-output drift in week 1, not week 4 |
| 4 | ML/LLM eval lifecycle | Patient no-show predictive ML | Class imbalance hurting recall on high-risk no-show category | Lift recall 15-20% on high-risk while holding precision >90% | Class weighting + stratified sampling + threshold calibration; built walk-forward eval harness | 15-20% recall lift, precision >90% sustained | Always tie eval thresholds to the operational cost matrix — pure F1 hides what the care team cares about |
| 5 | Strong communication to executives | Progress Solutions stakeholder docs | Care leadership unclear on what RAG could/couldn't do | Set realistic expectations + drive adoption | Wrote system-limitation docs alongside the API rollout; held office hours | ~30% fewer post-deploy defects; faster adoption signal | Document limitations BEFORE the demo, not after the complaint. SE = same discipline. |
| 6 | Bias toward action / quick learner | Multi-provider integration in Manga Lens | Needed to support Claude, GPT-4o mini, GPT-4.1 Nano, AND Ollama local with one UX | Ship parity-feature multi-provider in <30 days | Built provider abstraction layer; debugged Ollama CUDA crash by routing JPEG vs WebP per provider | All 4 providers live; downstream "doesn't work" reports dropped | The unblocker was reading other people's provider issues on GitHub for a Saturday — the API docs were misleading |
| 7 | Red-flag question: "Why move from healthcare AI to a customer-facing SE role?" | — | — | — | — | — | "Same skill — translating between AI systems and humans who depend on them. In healthcare it's a clinician; at Arize it's a customer ML team. The technical depth carries over; the audience shifts." |

**Case study recommendation:** Lead with **Manga Lens** in the interview — it's the only project where Deepak owned the full customer-product loop (Chrome Web Store, store description, privacy policy, user reports, multi-provider fallback). Healthcare RAG is the technical depth lead, Manga Lens is the SE-instinct lead.

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Posting accessible via Greenhouse API | API returns full payload; standard Greenhouse hosting | Positive |
| JD specificity | Names Arize platform, lists specific frameworks (LlamaIndex, LangGraph, DSPy), specific cloud providers, salary range disclosed | Positive |
| Salary transparency | $125-175K + equity disclosed (NY pay transparency law) | Positive |
| Company hiring signal | Series C $135M raised; 150+ customers; TechCrunch Feb 2025 coverage; LangSmith/Arize competing space = high demand for SEs | Positive |
| Layoff signal | No public Arize layoff news 2026 (not WebSearch-verified this run; verify before applying) | Neutral |
| Reposting | First time Deepak's pipeline sees this exact URL (scan-history added 2026-05-11) | Neutral |
| Role-company fit | Solutions Engineering build-out is on-strategy for Series C platform company moving from PLG to enterprise | Positive |
| Apply button state | Greenhouse-hosted, JD is full and active per API response on 2026-05-11 | Positive |

**Assessment:** **High Confidence** — real, active opening. Company is well-funded, JD is specific, comp is disclosed, hiring posture is on-strategy.

**Context notes:** "Solutions Engineer" on Deepak's "filter slip" list per `_profile.md` — but Arize's SE role is closer to "Forward Deployed AI engineer with customer surface area" than to pre-sales/Customer Engineer. Evaluate the actual function in the loop (technical co-architecting, agent design with customers) rather than the title alone.

## H) Draft Application Answers

> *Score 3.4 < 4.5 — Section H not included per `modes/oferta.md` (4.5+ threshold for draft answers). Skip.*

---

## Keywords extraídas

AI Solutions Engineer, Arize, LLM observability, agent evaluation, RAG, agentic workflows, LangGraph, LlamaIndex, DSPy, ML production, model evaluation, REST APIs, FastAPI, Python, customer-facing, trusted technical advisor, strategic business reviews, MLOps, GenAI eval, retrieval precision, Kubernetes (bonus), grounding, hallucination, Series C
