# Evaluación: Snorkel AI — Forward Deployed Researcher (Data as a Service)

**Fecha:** 2026-05-23
**Arquetipo:** Applied AI / LLM Engineer | AI Solutions / Forward Deployed Engineer
**Score:** 3.0/5
**URL:** https://job-boards.greenhouse.io/snorkelai/jobs/5811245004
**Legitimacy:** High Confidence
**Location:** NYC / Redwood City / SF (Hybrid) or US Remote
**Region:** US
**PDF:** output/2026-05-23/cv-deepak-mallampati-snorkel-ai-fdr-daas-2026-05-23.pdf
**Verification:** unconfirmed (batch mode)

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Applied AI / LLM (research-leaning) + FDE |
| Domain | Custom AI datasets + evaluation for frontier AI labs |
| Function | Partner with research labs, design datasets + eval rubrics, probe model failure modes |
| Seniority | Mid-Senior (4+ yrs AI/ML research) |
| Remote | Hybrid (NYC/Redwood/SF) or US Remote |
| Comp | $180K–$300K |
| Stage | Late-stage AI infra (named brand in data-centric AI) |
| TL;DR | Hybrid FDE + AI research role designing data interventions for frontier labs. Strong post-training (RLHF/DPO/RLAIF) bias; Deepak's eval + retrieval grounding work bridges in but ML-research depth is a stretch. |

## B) Match con CV

| JD requirement | CV proof |
|---|---|
| Python + ML framework | ✅ — PyTorch, Hugging Face Transformers, scikit-learn, XGBoost |
| LLM APIs experience | ✅ — Claude Sonnet, GPT-4o/4.1 vision, Perplexity Sonar, Ollama (Manga Lens, Dream Decoder) |
| Evaluation frameworks + quality rubrics | ✅ — retrieval-grounded response alignment >90%; eval pipelines + audit trails in healthcare RAG |
| Post-training (RLHF/DPO/RLAIF) | ❌ — no direct RLHF/DPO experience; LLM fine-tuning at LoRA level only (Stable Diffusion identity LoRA) |
| Frontier model evaluation / red-teaming | ⚠️ — agentic eval + hallucination measurement yes; not frontier-lab depth |
| Customer-facing collaborative research | ⚠️ — multi-stakeholder healthcare consulting yes; research-lab partnership no |
| 4+ yrs AI/ML research | ⚠️ — 2.5y Applied AI; 1.5y gap |
| Advanced degree preferred | ✅ — MS Kent State |

**Gaps + mitigation:**
- *Post-training (RLHF/DPO)*: name eval + grounding work + "I've shipped reward-shaping via structured outputs + grounding rules — happy to ramp on RLHF/DPO formalisms quickly."
- *Frontier research scope*: lead with healthcare hallucination reduction (>30%) as analog to frontier eval problems.
- *Years*: same as Workstream — combine 2.5y AI + 1y DBA = 3.5y blended.

## C) Nivel y Estrategia

- Detected: mid-senior IC research-leaning FDE. Deepak is a stretch — interview should focus on applied eval rigor over research novelty.
- **Vender:** retrieval-grounded response alignment >90%, agentic Claims w/ schema-validated JSON, RAG with measurable precision gains — these ARE applied evaluation patterns.
- **Si downlevelan:** accept FDR I or "Applied AI Engineer" track at $180–200K.

## D) Comp y Demanda

| Item | Data | Source |
|---|---|---|
| Snorkel band | $180K–$300K | JD |
| US Remote mid-senior AI Research | $200K–$280K + equity | Levels.fyi 2026 |
| Snorkel reputation | Strong (Stanford spin-out; data-centric AI brand) | Industry |
| Frontier lab demand | Very high (post-training data is the bottleneck) | OpenAI/Anthropic hiring patterns |

Band is competitive; target $200–230K for the mid slot.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "Applied AI healthcare RAG/agentic" | Lead with "evaluation pipelines + retrieval-grounded response alignment >90% in regulated domains" | Mirrors eval focus |
| 2 | Skills | Generic LLM | Add `LLM evaluation`, `RLHF concepts`, `data quality rubrics`, `model failure mode analysis` | ATS + research framing |
| 3 | Bullets | Retrieval + agentic | Emphasize "evaluation audit trails", "hallucination measurement", "structured output reward shaping" | Research-adjacent framing |
| 4 | Project order | Manga Lens first | Move Healthcare RAG + Claims agentic + Dream Decoder (multimodal eval) on top | Eval-first narrative |
| 5 | Cover letter | None | Required — "I treat eval as a first-class engineering surface, not a post-hoc step" | Differentiator |

## F) Plan de Entrevistas (STAR+R)

| # | JD req | STAR+R |
|---|---|---|
| 1 | Design evaluation frameworks | S: Healthcare RAG retrieval system. T: Make eval reliable enough for clinician trust. A: Built grounded-alignment rubric + audit trails + de-identification + system-limitation docs. R: >90% retrieval-grounded alignment + 35% precision lift. Reflection: eval rubrics that operators can sign off on are 10× more valuable than benchmark scores. |
| 2 | Probe model failure modes | S: Agentic Healthcare Claims (Intake→Validation→Fraud). T: Prevent cascading hallucinations. A: Schema-validated JSON contracts between agents + RAG-grounded CPT/ICD lookup. R: >30% hallucination reduction. Reflection: agent failure modes are mostly state-transition bugs disguised as LLM errors. |
| 3 | Data interventions for model perf | S: Dream Decoder multimodal app. T: Improve first-pass image success. A: Intermediate structured prompt transformation layer between text interpretation and image gen. R: ~30% better contextual alignment + 25–30% better first-pass success. Reflection: data shape between stages matters more than model swap. |
| 4 | LLM API + framework breadth | S: Manga Lens (4 vision providers). T: Translate webtoon panels reliably across Claude/GPT-4o/4.1/Ollama. A: Per-provider payload shape (WebP cloud, JPEG Ollama); 7-day translation cache; viewport-slice screenshots with coordinate remapping. R: shipped to Chrome Web Store. Reflection: provider-specific payload contracts are the hidden complexity. |
| 5 | Research partnership / customer-facing | S: Progress Solutions healthcare consulting. T: Earn clinician trust on RAG outputs. A: Shadowed care team, eval audit trails, stakeholder-facing limitation docs. R: deployed system + governance docs. Reflection: external stakeholders need eval translated into "what won't this do?" framing. |

Red-flag Q "RLHF experience?" → "I haven't shipped RLHF directly, but I've shipped reward-shaping via structured outputs, grounding rules, and grounded-alignment rubrics. I'd treat formal RLHF/DPO as a deepening of those patterns, not a new field."

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|---|---|---|
| JD specificity | Names frontier labs, post-training methods (RLHF/DPO/RLAIF), eval rubric workflow | Strong Positive |
| Comp transparency | $180K–$300K | Strong Positive |
| Stage | Snorkel = established data-centric AI brand | Positive |
| Apply form | Active Greenhouse posting | Positive |
| Domain reality | Data-as-a-Service for frontier labs is a hot, well-funded market | Strong Positive |
| Realism | 4+ yrs research + customer-facing — niche but legit | Positive |

Strong legitimacy; no ghost-job signals.

## H) Draft Application Answers

(Score 3.0 — drafts minimal; PDF carries.)

**Why Snorkel?**
> "Snorkel turned 'data quality' into a first-class engineering surface, which is exactly how I think about eval and grounding in regulated healthcare. I've shipped RAG with ~35% precision lift and >90% retrieval-grounded alignment, plus agentic pipelines with >30% hallucination reduction — all by treating data + eval rubrics as the lever, not the model. I'd love to bring that mindset to frontier-lab data interventions."

---

## Keywords extraídas

forward deployed researcher, applied AI, LLM evaluation, RLHF, DPO, RLAIF, post-training, data quality, eval pipelines, model failure modes, retrieval-grounded, hallucination reduction, structured outputs, agentic workflows, Python, PyTorch, Hugging Face, frontier AI, US remote, F-1 OPT
