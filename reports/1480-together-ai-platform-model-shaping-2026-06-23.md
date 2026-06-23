# Together AI — Platform Engineer, Model Shaping

**Fecha:** 2026-06-23
**Arquetipo:** AI Platform / MLOps Engineer (+ Applied AI / LLM adjacency)
**Score:** 3.1/5
**URL:** https://job-boards.greenhouse.io/togetherai/jobs/4790243007
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — primarily on-site with stated remote flexibility
**Region:** US
**Verification:** confirmed (Greenhouse posting live 2026-06-23 with application form + posted comp band)
**PDF:** output/2026-06-23/cv-deepak-mallampati-together-ai-platform-2026-06-23.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | AI Platform / MLOps / Infra Engineer — fine-tuning & model-customization platform |
| Domain | AI infrastructure (Together AI — GPU cloud + open-model training/inference) |
| Function | Build the "Model Shaping" platform: job orchestration across datacenters, deployment/CI-CD/observability tooling, on-call reliability |
| Seniority | Mid IC — "3+ years building infrastructure or backend components of production services" |
| Remote | SF-based with remote flexibility |
| Comp | $200,000 – $290,000 base (posted) |
| TL;DR | Real platform/MLOps role with a posted senior-IC band, US-based (clean for F-1 OPT). Deepak's MLOps surface — Docker/Kubernetes, AWS, CI/CD, MLflow/W&B, model monitoring, fine-tuning (LoRA/QLoRA) — maps onto the model-customization mission. The frictions are real and worth being honest about: this is an infra/SRE-leaning role (on-call, incident response, multi-datacenter job orchestration, GPU/HPC scheduling) where his experience is application-level MLOps, not datacenter platform engineering. No Go, no explicit Terraform/Ansible/Prometheus/Grafana in his stack. Applyable as a stretch toward platform, not a bullseye. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Estado |
|------------------|-----------------|--------|
| 3+ yrs production infra/backend | ~4+ yrs; 12 APIs/microservices, p95 1.5s→800ms | ✅ Good |
| Python | Python primary | ✅ Strong |
| Kubernetes, Linux | Docker, Kubernetes listed | ✅ Good |
| Cloud admin (AWS/GCP/Azure) | AWS (EC2/S3/Lambda/Bedrock/SageMaker), Azure, GCP Vertex | ✅ Strong |
| CI/CD pipelines | Jenkins, Azure DevOps | ✅ Good |
| Observability / monitoring | Model monitoring & observability; latency/accuracy dashboards | ✅ Good |
| Model customization / fine-tuning (platform purpose) | LoRA/QLoRA/PEFT fine-tuning; Qwen3 4-bit QLoRA on H100 | ✅ Good bonus |
| Go | Not in stack (Python/JS/TS/Java) | ⚠️ Gap |
| Terraform / Ansible | Not explicit in CV | ⚠️ Gap |
| Prometheus / Grafana | Generic "monitoring"; not these tools by name | ⚠️ Partial |
| Multi-datacenter job orchestration, GPU/HPC scheduling (Kubeflow/Argo/Flyte) | Batch orchestration + retry logic, but not HPC/datacenter scale | ⚠️ Adjacent |
| On-call / incident response (SRE) | Not a stated part of his roles | ⚠️ Gap |

**Gaps & mitigation:**
1. **Infra/SRE depth vs application MLOps.** Deepak's MLOps is real (Docker, K8s, CI/CD, monitoring, cost/latency optimization) but lives closer to the model/application layer than to multi-datacenter scheduling and on-call. Lead with the parts that transfer — fault-tolerant batch orchestration with exponential-backoff retry (60% fewer failed runs), cost/latency optimization (p95 1.5s→800ms), and fine-tuning pipelines — and be candid that GPU/HPC datacenter orchestration is the growth edge.
2. **Tooling specifics (Go, Terraform, Prometheus/Grafana).** He knows the categories (IaC, metrics dashboards) but not these exact tools. Frame as fast-ramp on tooling given strong fundamentals; do not claim them as held skills.
3. **Model-shaping relevance.** His QLoRA fine-tuning and RAG/serving work is a genuine hook into a platform whose product *is* model customization — that's the strongest angle.

## C) Nivel y Estrategia

JD asks 3+ years; Deepak is 4+, so tenure is fine. **Sell-without-lying:** the fine-tuning + MLOps + reliability-engineering combination is a credible platform story — but the honest framing is "applied MLOps engineer moving toward platform," not "datacenter SRE." Lead with reliability outcomes (retry infra, latency/cost optimization, observability) and the fine-tuning depth that matches "Model Shaping." Expect to be probed hard on Kubernetes-at-scale, GPU scheduling, and on-call — prepare honest answers. **If down-leveled or redirected** toward a more applied-AI infra role at Together, that's a better fit and worth raising.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Posted band | $200,000 – $290,000 base | Greenhouse JD |
| Market — Platform/Infra eng (SF, AI infra) | $190K–$300K+ base + equity | Levels.fyi AI-infra ranges |
| Company | Together AI — GPU cloud + open-model training/inference platform; well-funded | Public |
| Demand | Live req with posted band + application form | Greenhouse |

Posted band is strong and transparent — a positive legitimacy and seriousness signal.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Applied AI / RAG-forward | Reframe as "MLOps/platform engineer building reliable AI infrastructure" | Mirror platform-engineering framing |
| 2 | Progress — automation infra | Token reduction lead | Lead with fault-tolerant batch orchestration + retry (60% fewer failed runs) | Direct hit on "job orchestration / reliability" |
| 3 | Skills — MLOps | Mixed list | Foreground Docker/K8s, CI/CD, monitoring, cloud | JD's core stack |
| 4 | Research — fine-tuning | QLoRA narrative | Surface 4-bit QLoRA on H100 + model routing/caching | "Model Shaping" = customization platform |
| 5 | Vanguard — APIs/latency | p95 1.5s→800ms | Frame as production reliability + latency engineering | On-call/reliability emphasis |

**LinkedIn:** headline → "MLOps / AI Platform Engineer — reliable training, fine-tuning & serving infrastructure"; surface Kubernetes, AWS, CI/CD, fine-tuning keywords.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Reliability / job orchestration | Fault-tolerant automation infra | Failed production batch runs | Make pipelines reliable | Scheduled orchestration + exponential-backoff retry | 60% fewer failed runs | Reliability is designed, not patched |
| 2 | Deployment / latency / cost tooling | Vanguard APIs | p95 latency 1.5s, integration drag | Cut latency, speed delivery | 12 APIs/microservices, caching, routing | p95 → 800ms; +40% integration speed | Platform work is leverage for many teams |
| 3 | Model customization (Model Shaping) | Qwen3 QLoRA on H100 | Needed controllable long-form generation | Fine-tune efficiently | 4-bit QLoRA, curated instruction set | Working conditioned model on one H100 | Efficient fine-tuning is the platform's product |
| 4 | Observability | LLM eval/monitoring framework | Silent model regressions | Catch before release | RAGAS/BERTScore + latency/accuracy dashboards | Regressions surfaced pre-deploy | You can't operate what you can't observe |
| 5 | Cloud breadth | Multi-cloud MLOps | Services across AWS/Azure/GCP | Ship portable AI services | Bedrock/SageMaker, Azure OpenAI, Vertex | 100k+ req/day | Cloud-agnostic fundamentals transfer |

**Case study:** Lead with the fault-tolerant automation infra + fine-tuning depth. **Red-flag Qs:** "Go / Terraform / Prometheus?" → "Python-first; I've used the IaC and metrics-dashboard categories and ramp fast on specific tooling — happy to do a take-home." "On-call at datacenter scale?" → honest: "My reliability work is application/pipeline-level; multi-datacenter on-call is the part I'd be growing into, and the retry/observability instincts transfer."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on Greenhouse 2026-06-23 with working application form | Positive |
| Description quality | Specific stack (K8s, Terraform, Argo/Flyte, Prometheus), concrete scope (Model Shaping) | Positive |
| Company signals | Together AI — established, well-funded AI-infra company | Positive |
| Comp transparency | Posted $200K–$290K band | Positive |
| Reposting | First appearance in scan-history (greenhouse-api) | Neutral |

**Context:** Real, well-known AI-infrastructure company with a transparent posted band and a specific platform mandate. No spam signals.

---

## H) Draft Application Answers

**"Why this role?"** → "Model Shaping is exactly where my fine-tuning and MLOps work meet. I've fine-tuned models with 4-bit QLoRA on H100, built fault-tolerant orchestration that cut failed runs 60%, and optimized serving latency (p95 1.5s→800ms). I want to build the platform that makes that repeatable for everyone."

**"Infrastructure experience?"** → "Production MLOps across AWS/Azure/GCP — Docker, Kubernetes, CI/CD (Jenkins, Azure DevOps), MLflow/W&B, and monitoring/observability dashboards — supporting 100k+ requests/day. Datacenter-scale GPU orchestration is the part I'm most excited to grow into."

**Work authorization:** "US-based, F-1 OPT — authorized to work in the US now; future sponsorship required. SF works for me."

## Keywords extraídas

Platform Engineer, MLOps, Kubernetes, Linux, Python, CI/CD, Terraform, Prometheus, Grafana, observability, job orchestration, GPU, fine-tuning, model customization, QLoRA, AWS, GCP, Azure, reliability, on-call, incident response, model serving
