# Evaluación: OpenSesame — AI Engineer — Workforce Reinvention

**Fecha:** 2026-06-02
**Arquetipo:** Applied AI / LLM Engineer + AI Platform/MLOps (hybrid)
**Score:** 4/5
**URL:** https://job-boards.greenhouse.io/opensesame/jobs/7967740?gh_jid=7967740
**Legitimacy:** High Confidence
**Location:** Remote — USA (up to 15 days/yr travel)
**Region:** US
**PDF:** output/2026-06-02/cv-deepak-mallampati-opensesame-ai-engineer-workforce-reinvention-2026-06-02.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI / LLM Engineer + AI Platform/MLOps (hybrid) |
| Domain | Internal AI tooling: production RAG + intelligent workflow automation |
| Function | Build (hands-on) + enable (partner with non-technical "AI Champions") |
| Seniority | Mid/Senior IC — no formal floor; $150-170k band implies ~3-6 yrs |
| Remote | Full remote, anywhere in US; up to 15 days/yr travel |
| Team | Workforce Reinvention team (efficiency + AI across Sales, Marketing, Finance) |
| Comp | $150,000–$170,000 + ISOs + 401(k) match + health + PTO |
| TL;DR | Build and harden production RAG + automation tools for OpenSesame's internal ops, then make them self-serve for non-technical departments. |

This is an **internal-operations AI engineering** role, not a customer-facing product role. The mission: take AI proofs-of-concept to reliable production, add engineering rigor (TDD, CI/CD, Terraform IaC), and build a reusable component library so business departments can scale AI use independently. The JD deliberately drops the "requirements/buzzwords" list ("That's intentional") and screens on demonstrated building of AI tools, RAG, and automation workflows — a portfolio/outcomes screen rather than a checkbox screen.

## B) Match con CV

| JD Requirement | CV Evidence (exact) | Match |
|----------------|---------------------|-------|
| Production-grade RAG systems | "Engineered high-performance retrieval-augmented generation (RAG) pipelines over large-scale healthcare document corpora, combining dense vector retrieval with cross-encoder re-ranking" (Progress Solutions); "scalable RAG architecture, reducing hallucinations by 40% and achieving 92% precision" (Summary) | Strong |
| Intelligent workflows / automation infrastructure | "Built fault-tolerant automation infrastructure featuring scheduled batch orchestration and exponential-backoff retry logic… reducing failed production runs by 60%" (Progress Solutions) | Strong |
| Mature POCs into reliable production systems | "Architected production-grade agentic LLM systems on a conductor–subagent orchestration framework… execute autonomously" + "12 APIs and microservices… reducing p95 latency from 1.5s to 800ms" (Vanguard) | Strong |
| Production LLM platforms (Claude, Gemini, OpenAI, OSS) | "Optimized LLM prompts and evaluated GPT-4o, Claude Sonnet, and Gemini models" (Vanguard); "GPT-4o, GPT-5, Claude Sonnet, Gemini, LLaMA" (Skills) | Strong |
| Observability & monitoring in production | "Established a structured LLM evaluation and monitoring framework (RAGAS, BERTScore, custom domain metrics) paired with latency and accuracy dashboards" (Progress Solutions); "Model Monitoring & Observability" (Skills) | Strong |
| CI/CD automation | "CI/CD (Jenkins, Azure DevOps)" (Skills) | Solid |
| Infrastructure-as-code (Terraform) | "Terraform" listed in Skills | Partial — listed, no quantified IaC project narrative |
| TDD / engineering rigor | "Agile/Scrum"; defect/reliability improvements (60% fewer failed runs, 42% fewer unsafe outputs) imply test discipline | Partial — no explicit TDD line |
| Reusable component libraries / internal tools | "Built 12 APIs and microservices powering new AI capabilities" + "25+ AI agents and workflows" on Vanguard's internal AI platform | Strong — directly internal-platform work |
| Partner with non-technical stakeholders (AI Champions) | "Partnered with product, platform, and data engineering teams to deliver… supporting 100,000+ requests daily across 20+ internal teams" (Vanguard) | Solid |

**Gaps and mitigation:**

1. **Terraform / IaC depth (nice-to-have, not blocker).** Terraform is on the skills list but there's no project narrative quantifying an IaC build. The 90-day milestone explicitly is "implement Terraform infrastructure-as-code." *Mitigation:* lead with the broader cloud/MLOps footprint (AWS, Docker, Kubernetes, CI/CD) and frame Terraform as an extension of existing infra automation work; cover-letter line: "I treat infra as code — happy to own the Terraform migration in the first 90 days as scoped in your milestones."
2. **Explicit TDD (nice-to-have).** No literal "TDD" line on CV, though reliability outcomes (60% fewer failed runs, evaluation harness pre-deploy) signal test rigor. *Mitigation:* reframe the RAGAS/BERTScore pre-deploy evaluation harness as the LLM analog of TDD — regression gates before release.
3. **Domain is workforce/L&D, not regulated finance/healthcare.** Most of Deepak's depth is in banking + healthcare. *Mitigation:* not a blocker — internal-ops AI is domain-agnostic; the regulated-domain background is a *plus* (compliance discipline, PII handling) for a company serving Global 2000 clients.

No hard skill gaps. This is one of the cleanest CV-to-JD matches in the pipeline: RAG + agentic + evals/observability + internal-platform tooling are all first-class on the CV.

## C) Nivel y Estrategia

**Detected level:** Mid/Senior IC. No years floor in the JD (deliberate). The $150-170k US-remote band maps to a strong mid-level / lower-senior AI engineer. Deepak's 4+ years (Progress Solutions, Vanguard internship year, KSU research, Emerson) sits comfortably in this band.

**"Sell senior without lying" plan:**
- Lead with the **internal AI platform** parallel — Vanguard's internal AI platform (25+ agents, 12 APIs, 100k+ daily requests across 20+ teams) is *exactly* the "build reusable tools that departments self-serve" mandate.
- Emphasize **POC-to-production** as the core competency: agentic orchestration framework, 60% reliability improvement, RAGAS/BERTScore evaluation gating. This is the 30/60/90-day story they're buying.
- Frame the **regulated-domain rigor** (HIPAA, SOC 2, PCI DSS, differential privacy) as the reason their internal tooling will be trustworthy for a Global-2000-serving company.

**"If downleveled" plan:** Comp is already at-market for mid-senior; if they anchor at $150k, accept if ISOs and growth path are credible, and negotiate a 6-month review tied to the "reusable component library" milestone (a concrete, ownable deliverable that justifies an early bump).

## D) Comp y Demanda

| Data point | Value | Source |
|-----------|-------|--------|
| JD posted band | $150,000–$170,000 + ISOs + 401(k) match | Greenhouse posting |
| OpenSesame SWE median (total comp) | ~$160k | Levels.fyi |
| OpenSesame SWE range | $73k–$160k+ (IC); mgr up to ~$350k | Levels.fyi |
| OpenSesame remote SWE postings | $125k–$135k (SWE), $99k (Assoc) | Glassdoor |
| US AI Engineer market (remote, mid-senior) | ~$140k–$190k base typical | Levels.fyi AI Engineer track |

**Read:** The $150-170k band sits at/above OpenSesame's own SWE median and at the top of their public remote SWE postings — they are paying a premium for the "AI Engineer" specialization, consistent with the role's strategic framing (Workforce Reinvention). For an AI engineer specifically, this is mid-market US-remote: fair, not top-quartile (top-quartile AI eng at well-funded labs clears $200k+ base), but solid for an L&D SaaS company. Demand for production-RAG + automation engineers remains high. Comp score: ~4/5.

Sources: [Levels.fyi — OpenSesame SWE](https://www.levels.fyi/companies/opensesame/salaries/software-engineer), [Glassdoor — OpenSesame salaries](https://www.glassdoor.com/Salary/OpenSesame-Salaries-E672417.htm), [Levels.fyi — AI Engineer](https://www.levels.fyi/t/software-engineer/title/ai-engineer)

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "production-grade GenAI/LLM for banking and regulated enterprises" | Lead with "production RAG + internal AI automation tooling, POC-to-production" and keep regulated-domain rigor as credibility anchor | Mirrors the role's exact mandate |
| 2 | Experience order | Progress Solutions first | Keep, but surface agentic-orchestration + automation-infra bullets at top | These are the POC-to-production proof points the role buys |
| 3 | Vanguard framing | "AI Engineer Intern" platform work | Surface the internal-AI-platform parallel (25+ agents, reusable APIs, 20+ self-serve teams) prominently | Directly maps to "reusable component library + departments self-serve" |
| 4 | Skills | Terraform buried mid-list | Pull AWS/Docker/Kubernetes/Terraform/CI-CD into a visible "Infra & IaC" cluster | The 90-day milestones name Terraform/CI-CD/TDD explicitly |
| 5 | Competencies | generic GenAI tags | Add JD-exact phrases: "Production RAG", "Workflow Automation", "POC-to-Production", "LLM Observability", "Internal AI Tooling" | ATS + recruiter keyword screen |

**Top 5 LinkedIn changes:** (1) headline → "Applied AI Engineer | Production RAG + Internal AI Automation"; (2) About → lead with POC-to-production story; (3) feature MangaLens + career-ops as shipped tools; (4) add "Workflow Automation" and "LLM Observability" to skills; (5) pin a post on the RAGAS/BERTScore evaluation harness as an engineering-rigor signal.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | POC → production hardening | Agentic orchestration framework | POCs failing at scale | Make multi-step agent workflows reliable | Built conductor–subagent framework w/ context-scoping | 42% fewer tokens, sustained accuracy | Hardening is mostly about decomposition + eval gating, not bigger models |
| 2 | Production RAG | Healthcare RAG pipeline | Hallucination on domain queries | Lift answer relevance | Dense retrieval + cross-encoder re-ranking | 40% fewer hallucinations, 92% precision | Re-ranking buys more than embedding swaps in regulated corpora |
| 3 | Reusable internal tooling | Vanguard internal AI platform | 20+ teams needed AI capabilities | Make AI self-serve | 12 APIs/microservices, 25+ agents | 100k+ daily requests, 40% faster integration | Self-serve adoption needs clean API contracts more than features |
| 4 | Automation infrastructure | Fault-tolerant batch orchestration | Pipelines failing in prod | Improve reliability | Scheduled orchestration + exponential backoff | 60% fewer failed runs | Retry policy design beats raw compute for reliability |
| 5 | LLM observability | RAGAS/BERTScore eval harness | No pre-deploy regression signal | Catch regressions before release | RAGAS + BERTScore + custom metrics + dashboards | Regressions surfaced pre-deploy | Eval harness is the LLM analog of TDD |
| 6 | Partner w/ non-technical stakeholders | Cross-functional platform delivery | Business teams blocked on AI | Enable non-eng adoption | Partnered w/ product/platform/data eng | 20+ internal teams onboarded | Translation > code when enabling AI Champions |
| 7 | Compliance/safety in prod | Content-safety safeguards | Unsafe model outputs | Make responses policy-compliant | Built safeguards + content controls | 42% fewer unsafe outputs | Safety gating is a product feature, not an afterthought |
| 8 | Cost/latency optimization | Inference optimization | SLA + cost pressure | Hold SLA, cut cost | Prompt compression, semantic caching, model routing | Per-query overhead reduced, SLA held | Routing + caching beats model downgrades |

**Recommended case study:** Vanguard internal AI platform — it is the single closest analog to the OpenSesame mandate (build reusable AI tools that non-technical departments self-serve).

**Red-flag questions:** (1) "Most of your tenure is internships/research?" → "Yes — and the internal-platform ownership at Vanguard plus sole production ownership at Progress Solutions is exactly the POC-to-production work this role needs." (2) "Work authorization?" → surface F-1 OPT + STEM-OPT runway early, openly, at the recruiter screen.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Direct employer board | Posted on `job-boards.greenhouse.io/opensesame` — first-party Greenhouse, not a staffing re-post | Positive |
| Published comp band | $150,000–$170,000 + ISOs + 401(k) match — concrete, at-market, not a lure | Positive |
| JD specificity | Concrete 30/60/90-day deliverables (TDD, CI/CD, Terraform IaC, RAG, reusable component library) | Positive |
| "Requirements intentionally omitted" framing | Deliberate portfolio screen, not content-empty — mild scope-ambiguity note | Neutral |
| Posting date | Not exposed on the Greenhouse page; logo asset timestamp resolves ~Nov 2024 — possible aged-posting concern | Concerning |
| Liveness | NOT Playwright-verified in this run (batch mode) — verify before investing in a tailored application | Concerning |

**Context Notes:** Legitimacy fundamentals are sound (first-party board, published band, concrete deliverables). The two concerning signals are process artifacts — missing public date + unverified liveness — not ghost-job content signals. Recommend a `browser_navigate` + `browser_snapshot` to confirm title+JD+Apply are live and re-tier if the posting proves stale. No evergreen/"always hiring" language detected.

## Verification (adversarial)

Three adversarial judges reviewed the original eval (score 4.5). Verified official score: **4/5** (verdict: **apply**).

| Lens | Adjusted Score | Recommendation | Key issue |
|------|----------------|----------------|-----------|
| score-calibration | 4.2 | apply | Seniority over-accounted: "4+ years" folds in an internship (Vanguard, Jan 2024–Jan 2025), a ~3-month research assistantship, and an India trainee role. Real full-time non-intern tenure is ~11 months (Progress Solutions). The flagship Vanguard platform proof was earned as an intern — weight as strong-but-intern contribution, not senior IC ownership. Smaller-employer sponsorship friction (F-1 OPT, no sponsorship statement) is under-weighted. Pure skills fit ~4.7; composite pulled to 4.2. |
| hard-gates | 4.2 | apply | No disqualifying gate. Work authorization is the only real gate and this is the most favorable variant (US-remote at US entity, currently authorized via F-1 OPT / STEM-OPT runway). Profile policy (lines 190-193) is explicit: do NOT auto-reject for F-1/location mismatch. A skip would contradict governing user policy. Terraform/TDD correctly classed as nice-to-haves. Action: raise STEM-OPT/sponsorship timeline at recruiter screen; CV footer states F-1 OPT status. |
| legitimacy | 3.8 | borderline | Liveness NOT Playwright-verified per the MANDATORY rule; logo asset timestamp (~Nov 2024) raises a stale-posting concern → suggests downgrading tier to "Medium" until a live snapshot confirms. Sponsorship question (no sponsorship statement) flagged as a material conversion-risk gate, not a footnote. Legitimacy is otherwise SOUND (first-party board, at-market band, concrete 30/60/90 deliverables) — fit is real; cap comes from unverified liveness + sponsorship gate, not a weak match. |

**Original score:** 4.5 → **Verified (official) score:** 4/5.
**Final verdict:** **apply.** Skills fit is top-tier; the half-point haircut reflects seniority over-accounting (mostly internship/research tenure), smaller-employer sponsorship friction (F-1 OPT, no sponsorship statement in JD), and unverified liveness. Action items before applying: (1) Playwright-verify the posting is live and re-tier legitimacy; (2) surface the F-1 OPT / STEM-OPT + sponsorship timeline at the first recruiter touch.

## Keywords extraídas

production RAG, retrieval-augmented generation, intelligent workflow automation, POC-to-production, agentic LLM, LLM observability, RAGAS, BERTScore, model monitoring, CI/CD, TDD, Terraform, infrastructure-as-code, reusable component library, internal AI tooling, Claude, Gemini, OpenAI, vector search, prompt engineering
