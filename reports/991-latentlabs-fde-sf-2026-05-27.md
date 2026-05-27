# Evaluación: Latent Labs — Forward Deployed AI Engineer (San Francisco)

**Fecha:** 2026-05-27
**Arquetipo:** AI Forward Deployed Engineer (Applied AI + MLOps, life sciences)
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/latentlabs/bbb7dcf7-2311-4103-bebf-96901ca18775
**Legitimacy:** High Confidence
**Location:** San Francisco — On-site/embedded
**Region:** US
**PDF:** output/2026-05-27/cv-deepak-mallampati-latentlabs-fde-sf-2026-05-27.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | AI Forward Deployed Engineer (customer infra + deployment) |
| Domain | Frontier generative biology models (protein design / drug discovery) |
| Function | Deploy + integrate models into pharma/biotech customer workflows, end-to-end |
| Seniority | Mid-to-senior ("significant experience" with large-scale model serving) |
| Remote | San Francisco, on-site or embedded with partners |
| Team size | AlphaFold / latent-diffusion pedigree; London + SF sites |
| TL;DR | Customer-facing FDE bridging Latent Labs' generative-biology models and pharma customers; heavy cloud infra + API integration + model serving. |

## B) Match con CV

| JD requirement | CV evidence | Fit |
|----------------|-------------|-----|
| CS/ML degree (BSc/MSc/PhD) | Master's, Kent State — cv.md L91 | Strong |
| Build systems accessing large models via APIs | RAG + agentic LLM workflows, multi-provider AI integration (Manga Lens) — cv.md L25-26, L59-60 | Strong |
| Robust API layers around ML models | FastAPI/Flask inference services, Dockerized — cv.md L28 | Strong |
| Customer-facing, delivery-oriented | Stakeholder limitation docs; founder/customer work — cv.md L30, L86 | Moderate |
| Cloud infra (AWS, GCP/Azure), Docker/K8s, CI/CD | Docker, Jenkins CI/CD, cloud-ready — cv.md L17; **no AWS/K8s depth, no large-scale serving** | Partial |
| Translate technical → non-technical | HIPAA stakeholder docs — cv.md L30 | Moderate |

**Gaps:**
1. **Large-scale model-serving infra "significant experience" (hard-ish).** Real seniority floor; Deepak has Docker+FastAPI but not large-scale serving/K8s. Mitigation: frame containerized serving + observability, position as fast-ramp; this is the main level risk.
2. **AWS / Kubernetes (hard-ish).** Docker yes, K8s/AWS not on CV. Mitigation: adjacent DevOps (Jenkins, Grafana); honest about ramp.
3. **Bio / protein-design domain (nice-to-have, "what sets you apart").** No comp-bio background. Mitigation: healthcare-AI adjacency; treated as bonus not requirement.

## C) Nivel y Estrategia

- **JD level:** mid-senior infra-leaning FDE. **Candidate:** mid Applied AI. There is a real stretch on infra depth.
- **Sell without lying:** lead with API-layer + customer-facing deployment + healthcare-regulated experience (data governance, audit trails) which maps to pharma compliance needs. Be honest about K8s/large-scale-serving ramp.
- **If down-leveled:** acceptable; ramp on serving infra explicitly.

## D) Comp y Demanda

| Item | Data | Source |
|------|------|--------|
| Posted range | Not listed | JD (no comp tier) |
| Pedigree | AlphaFold co-developers, latent-diffusion inventors | JD |
| Visa | Not stated (US role) | verify sponsorship |
| Demand | Generative-biology FDE is niche but hot | market context |

No public comp; SF generative-AI FDE roles typically $160K-260K+ (verify). F-1 OPT works near-term.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Healthcare RAG | Add "API integration + model-serving for regulated customers" | Mirror JD |
| 2 | Bullets | ML metrics | Lead with FastAPI serving + HIPAA data governance | Pharma compliance parallel |
| 3 | Skills | — | Surface Docker, CI/CD, observability, embeddings | Infra ask |
| 4 | Gap framing | — | Acknowledge K8s/AWS ramp honestly in cover note | Don't overclaim |
| 5 | LinkedIn | — | "Applied AI engineer — production model serving & regulated-domain delivery" | — |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R | S | T | A | R | Reflection |
|---|----------------|--------|---|---|---|---|------------|
| 1 | API layer around ML models | FastAPI inference | Models needed callable services | Package | FastAPI/Flask + Docker + logging | ~30% fewer defects | API boundary is where reliability is enforced |
| 2 | Regulated-domain delivery | HIPAA RAG | Clinical data governance required | Comply | De-identification, lineage, audit trails | Audit-ready pipelines | Compliance is design input, not afterthought — maps to pharma |
| 3 | Multi-provider API integration | Manga Lens | 4 vision providers, varied payloads | Integrate | Provider-specific payload handling, caching | Shipped to Chrome Store | Integration robustness = handling each provider's quirks |

Red-flag prep: "Have you run K8s / large-scale serving?" — honest: Docker + CI/CD foundation, ready to ramp.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Live via Ashby API today | Active, real ID | Positive |
| JD specificity | Highly detailed, domain-specific | Positive |
| Team credibility | AlphaFold / latent-diffusion founders | Positive |
| Comp transparency | None listed | Neutral |
| Requirements realism | Coherent (infra + bio bonus) | Positive |

No concerning signals; comp omission is the only neutral.

## H) Draft Application Answers

(Score < 4.5 — drafts deferred.)

---

## Keywords extraídas

Forward Deployed AI Engineer, generative biology, protein design, model serving, API integration, AWS, Kubernetes, Docker, CI/CD, cloud-native, customer deployment, pharma, biotech, life sciences, data pipelines, enterprise software, ML frameworks, embeddings, regulated domain, on-site
