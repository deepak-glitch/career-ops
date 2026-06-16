# Sol — Applied AI Engineer

**Fecha:** 2026-06-16
**Arquetipo:** Applied AI / LLM Engineer + AI Platform / MLOps Engineer
**Score:** 4.0/5
**URL:** https://jobs.ashbyhq.com/sol/eeeac4bb-1c32-4944-ad06-a716e8a05790
**Legitimacy:** High Confidence
**Location:** San Mateo, CA — On-site/Hybrid (verify in screen)
**Region:** US
**PDF:** output/2026-06-16/cv-deepak-mallampati-sol-applied-ai-engineer-2026-06-16.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer (+ AI Platform on evals/explainability) |
| Domain | Agentic HRIS — applied AI over enterprise HR content + workforce data |
| Function | Build (early-stage founding-era applied AI) |
| Seniority | Mid–senior IC, early hire — "shape what the AI layer should be" |
| Remote | Likely on-site/hybrid San Mateo (verify) |
| Team | Small founding team, broad ownership |
| Comp | Not published (Sutter Hill / NEA-backed early-stage) |

**TL;DR:** Founding-era Applied AI Engineer at an AI-native HRIS startup (Sutter Hill + NEA backed) — owns AI quality, eval infra, and build/buy/leverage decisions across embeddings/classifiers/LLMs against regulated enterprise HR data (EU AI Act, NYC Local Law 144). Strong 1:1 with Deepak's agentic + RAG + eval discipline at Progress Solutions.

## B) Match con CV

| Requisito del JD | Evidencia en CV | Match |
|------------------|-----------------|-------|
| Built production AI systems from zero | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework" (Progress Solutions); MangaLens shipped to Chrome Web Store | ✅ Strong |
| Evaluation infrastructure (pre/post-ship) | "Established a structured LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics) paired with latency and accuracy dashboards" | ✅ Bullseye |
| Build/buy/leverage decisions across embeddings/classifiers/foundation models | Skills: GPT-4o/GPT-5/Claude/Gemini/LLaMA + LangChain/LangGraph + FAISS/Pinecone/Weaviate + Cross-Encoder Re-ranking; Vanguard model-selection work | ✅ Strong |
| Knows when LLM is the wrong tool | ML/NLP fundamentals + classical models (Emerson BERT/RoBERTa, Suvidha summarization pipeline, K-anonymity/L-diversity stats); structured pipelines beyond LLM | ✅ |
| Explainability + auditability (EU AI Act / NYC LL 144) | Privacy-preserving clinical ML (k-anonymity, l-diversity, differential privacy, ε sweeps); HIPAA/SOC 2/PCI DSS, audit logging, PII masking | ✅ Strong |
| Pessimistic about failure modes | "fault-tolerant automation infrastructure… reduced failed runs by 60%"; safeguards reducing unsafe outputs 42% at Vanguard | ✅ |
| Deeper than managed platforms — infra-level understanding | Docker/K8s/Terraform/MLflow/W&B; built 12 APIs/microservices p95 1.5s→800ms; semantic caching + model routing | ✅ |
| AI tools heavy in own dev workflow | career-ops project — autonomous AI-driven job-search pipeline | ✅ |
| Builder at early-stage company | MangaLens shipped solo; career-ops solo; founder-mindset projects | ✅ |

**Gaps & mitigation:**
1. **HRIS / HR-content domain depth** — soft gap, not a blocker. Adjacent: regulated-document RAG in healthcare/banking (~92% precision over millions of regulatory documents). Mitigation: in cover letter, map regulatory-document RAG → HR-policy/handbook/employment-data RAG (both are auditable, regulated, citation-driven retrieval).
2. **Founding-era track record at a startup** — no prior 0→1 startup IC role; mitigation: lead with MangaLens (solo shipped, 29+ sites, Chrome Web Store) + career-ops (autonomous pipeline) as proof of zero-to-one shipping under constraint.

## C) Nivel y Estrategia

- **JD level:** Founding/early IC ("work directly with the founding team to shape what the AI layer of an HR system should be"). **Candidate natural level:** mid Applied AI (4+ yrs). Aligned for an early founding-team IC; not staff-coded.
- **Sell-senior-honestly:** lead with the *eval discipline* (RAGAS/BERTScore/custom domain metrics + monitoring dashboards) + the *0→1 shipping* (MangaLens + career-ops + agentic conductor system). These two together hit the JD's two highest-weight signals.
- **If downleveled:** push back gently — JD asks for builder-from-zero + eval owner, which is exactly the candidate's lane. If comp is light, negotiate early-equity + 6-month review.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Posted band | Not disclosed | JD |
| SF Bay early-stage Applied AI IC | ~$170k–$240k base + 0.2–1.0% equity (Sutter Hill / NEA tier) | Levels.fyi / market |
| Role demand | Very high — applied AI at AI-native HRIS is a hot category in 2026 | Market |

Backed by Sutter Hill Ventures + NEA — both tier-1; comp likely competitive for Bay early-stage. First customers go live early 2027 → late-pre-revenue stage. Ask comp early; expect upper band + meaningful equity.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Banking and regulated enterprises" framing | Reframe as "applied AI systems for regulated enterprise data — reliability, auditability, evals" | Mirrors JD's "reliable, auditable, correct" line |
| 2 | Skills order | LLMs/RAG first | Lead with "Eval frameworks: RAGAS, BERTScore, custom domain metrics" + "Explainability & audit logging" | JD's top weighted signal |
| 3 | Progress Solutions bullets | Token-reduction bullet first | Promote eval/monitoring bullet first | Eval infra is the role's defining axis |
| 4 | Projects | MangaLens listed | Tighten MangaLens to emphasize "shipped solo, 29+ sites, Chrome Web Store" | Proves 0→1 builder bar |
| 5 | Compliance line | HIPAA/SOC 2/PCI DSS | Add "EU AI Act, NYC Local Law 144 readiness via privacy-preserving ML + audit logging" | Direct echo of JD |

**LinkedIn:** headline "Applied AI Engineer — production LLM/RAG + evals + regulated-data systems"; pin Progress Solutions eval infra; feature MangaLens.

## F) Plan de Entrevistas (STAR+R)

| # | Requisito JD | Historia | S | T | A | R | Reflection |
|---|--------------|----------|---|---|---|---|------------|
| 1 | Eval infrastructure | Progress Solutions LLM eval framework | LLM iterations shipping without ground-truth measurement | Stand up pre/post-ship eval | Built RAGAS + BERTScore + custom domain metrics + latency dashboards | Caught regressions pre-release; benchmarked iterations | Eval datasets are the real moat — they outlive any single model |
| 2 | Build prod AI from zero | MangaLens Chrome extension | No real-time manga translation existed across 29+ sites | Ship inline translation single-action | Solo built MV3 extension + LLM translation + 29-site coverage | Live on Chrome Web Store; real users | Distribution + edge cases beat model choice |
| 3 | Failure-mode pessimism | Vanguard safeguards | LLM outputs needed policy compliance | Reduce unsafe outputs | Content controls + policy filters + audit logging | 42% unsafe-output reduction without quality loss | Treat the model as untrusted by default; defense-in-depth |
| 4 | Build/buy/leverage decisions | Vanguard model selection (GPT-4o/Claude/Gemini) | Need to pick model per use case | Benchmark + decide | Built eval harness across 3 model families | +27% task success rate; informed platform decisions | "Best model" is workload-specific; you need the eval before the answer |
| 5 | Explainability/audit (regulated) | Privacy-preserving clinical ML | Regulators + IRB needed PII-safe analytics | Quantify privacy/utility trade-off | k-anonymity (k=3) + l-diversity (l=2) + DP across ε levels | Re-id risk 3.38%→0.32%, retained 99% of baseline F1 | "The model said so" doesn't fly under regulation — show the trade curve |
| 6 | Knows when LLM is wrong tool | Emerson BERT/RoBERTa NER | Domain-specific entity extraction | Pick right architecture | Fine-tuned encoder models on financial NER | 89% F1 on custom NER | Smaller fine-tuned encoders still beat LLMs on cost-sensitive structured extraction |

- **Case study to present:** Progress Solutions eval/monitoring framework + MangaLens (eval discipline + 0→1 ship combined = the JD's two pillars).
- **Red-flag Qs:** "Are you US-based?" → "Yes, in the US on F-1 OPT — open to sponsorship; can be on-site in the Bay if relocation is supported." "Why an HRIS startup?" → "Applied AI over regulated enterprise data is where I've spent the last 4 years; HR moves into the same compliance + audit footprint I've been operating in (HIPAA, SOC 2). The 0→1 architecture window is the draw."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Ashby posting, Apply button reachable | Positive |
| Description quality | Specific (eval infra, EU AI Act, NYC LL 144, embeddings/classifiers/LLMs, build/buy/leverage); no boilerplate | Positive |
| Company signals | Sutter Hill Ventures + NEA backed; named founders (decades in HRIS); first customers go live early 2027 — pre-revenue but funded | Positive |
| Comp transparency | Not published | Concerning (mild) — typical for early-stage founding hires |
| Reposting | First time seen in scan-history | Positive |
| Role market context | Applied AI + eval infra is highly active; founding IC at funded AI-native HRIS is a natural opening | Positive |

**Context Notes:** Sol is genuinely early (1st customers ~6 months out). The role is real and well-scoped; expect a fast, founder-led interview loop. Verify on-site expectation in screen — "San Mateo" alone doesn't disclose hybrid days.

## Keywords extraídas

Applied AI, AI Engineer, LLM, RAG, embeddings, classifiers, foundation models, evaluation, eval infrastructure, RAGAS, BERTScore, explainability, audit logging, EU AI Act, NYC Local Law 144, HRIS, agentic, enterprise data, privacy-preserving ML, founding engineer
