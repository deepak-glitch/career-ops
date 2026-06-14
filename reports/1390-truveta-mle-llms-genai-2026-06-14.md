# Evaluación: Truveta — Machine Learning Engineer, LLMs & Generative AI

**Fecha:** 2026-06-14
**Arquetipo:** ML Engineer (Applied AI Systems) + Generative AI / RAG Engineer (híbrido)
**Score:** 3.1/5
**URL:** https://job-boards.greenhouse.io/truveta/jobs/5555763004
**Legitimacy:** Proceed with Caution
**Location:** Seattle, WA — Hybrid (Greater Seattle HQ)
**Region:** US
**PDF:** output/2026-06-14/cv-deepak-mallampati-truveta-mle-llms-genai-2026-06-14.pdf
**Verification:** confirmed (Greenhouse boards-api returned live JSON 2026-06-14)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | ML Engineer (Applied AI) + Generative AI / RAG (clinical/biomedical LLMs) |
| Domain | ML / GenAI applied to healthcare data (clinical + biomedical foundation models) |
| Function | Build (lead development, training, deployment of LLM/multimodal foundation models) |
| Seniority | Senior (6+ yrs, or 3+ yrs with PhD) |
| Remote | Hybrid — Seattle WA HQ |
| Team size | ~415-person company; cross-functional with researchers + clinicians |
| Comp | $155,000–$175,000 base |
| TL;DR | Senior MLE building clinical/biomedical LLMs and multimodal foundation models at a $1B Series C healthcare-data company — exceptional domain+stack fit, but a 6+yr seniority gate, no visa sponsorship, and Seattle relocation create real friction. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| LLM design/training, NLP, transformer architectures | "production-grade Generative AI and LLM systems"; BERT/RoBERTa fine-tuning; Hugging Face Transformers | ✅ Fuerte |
| Python, PyTorch/TensorFlow | "PyTorch, TensorFlow, Keras"; Python primary | ✅ Fuerte |
| Supervised fine-tuning, PEFT, prompt engineering | "Fine-tuning (LoRA, QLoRA, PEFT)"; "Fine-tuned Qwen3-27B via 4-bit QLoRA on H100" | ✅ Fuerte |
| Retrieval-augmented generation | "high-performance RAG pipelines... dense vector retrieval + cross-encoder re-ranking"; 92% precision | ✅ Fuerte |
| Healthcare / biomedical informatics (preferred) | RAG over "large-scale healthcare document corpora"; privacy-preserving clinical ML (k-anonymity, l-diversity, DP) | ✅ Fuerte (diferenciador) |
| Vector databases & semantic search (preferred) | "FAISS, Pinecone, Weaviate | Semantic & Hybrid Search" | ✅ Fuerte |
| Model robustness, bias mitigation, factual consistency, explainability | RAGAS/BERTScore eval framework; hallucination reduction 40%; drift detection | ✅ Buena |
| Distributed training on GPU/TPU clusters | Single-node H100 QLoRA; no large multi-node cluster training shown | ⚠️ Parcial |
| RLHF | SFT/QLoRA/PEFT yes; explicit RLHF not shown | ⚠️ Parcial |
| Publications at NeurIPS/ICML/ACL/EMNLP/ICLR (preferred) | IEEE-format conference paper (not top-tier venue) | ⚠️ Parcial |
| PhD (preferred) | M.S. Computer Science, Kent State (GPA 3.70) | ⚠️ Nice-to-have, no es blocker |

**Gaps y mitigación:**
1. **6+ years required (Deepak ~4+ yrs)** — *Hard-ish gate.* Mitigación: lead with depth not tenure — production RAG (92% precision, 40% hallucination reduction), QLoRA fine-tuning on H100, end-to-end clinical ML. The "3+ yrs with PhD" alt path signals they value research depth, which the privacy-preserving clinical ML + IEEE paper partly substitute. Frame the founder/owner scope of the Progress Solutions agentic systems work as senior-level autonomy.
2. **Distributed cluster training** — *Nice-to-have.* Mitigación: emphasize H100 QLoRA + inference cost/latency optimization (semantic caching, model routing, prompt compression) as adjacent scaling discipline; note willingness to ramp on multi-node (DeepSpeed/FSDP).
3. **RLHF** — *Nice-to-have.* Mitigación: position SFT + eval-driven iteration (RAGAS/BERTScore + custom domain metrics) as the practical analog; RLHF is a learnable extension of the existing fine-tuning toolkit.
4. **No visa sponsorship + Seattle relocation** — *Soft blocker (see Block C/G).*

## C) Nivel y Estrategia

1. **Nivel detectado:** Senior MLE (6+ yrs). **Nivel natural del candidato:** mid → mid-senior (~4 yrs). Real stretch on the years gate.
2. **Vender senior sin mentir:** Lead with measurable production outcomes that read as senior: architected agentic LLM orchestration (-42% tokens), RAG at 92% precision / -40% hallucination over millions of regulatory docs, 99.9% uptime, eval framework ownership. Healthcare domain depth (clinical RAG + privacy-preserving ML with quantified privacy-utility trade-offs) is exactly Truveta's space and is rare — make it the headline.
3. **Si me downlevelan:** Accept a "MLE" (non-senior) leveling if comp lands near the $155–175K band and there's a 6-month review with explicit promotion criteria toward staff. Use the clinical-LLM domain fit as the promotion thesis.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Base band (posted) | $155,000–$175,000 | Greenhouse JD |
| Company stage | Series C, $515M raised, ~$1B valuation | Crunchbase/Tracxn (2026) |
| Headcount | ~415 (Feb 2026) | Tracxn |
| Market (Senior MLE GenAI, US) | ~$170–230K base + equity | Levels.fyi/Glassdoor general range |
| Demanda del rol | Alta — clinical/biomedical LLM is a hot, sponsorship-scarce niche | WebSearch |

Posted band sits slightly below top-tier senior MLE market, consistent with a hybrid-Seattle healthcare-data company (not a frontier lab). Equity not disclosed in JD.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "AI/ML Engineer ... banking and regulated enterprises" | Lead with "clinical & biomedical LLM / foundation-model engineer" framing; surface healthcare RAG + privacy-preserving clinical ML first | Mirror JD's clinical/biomedical foundation-model language |
| 2 | Hero metrics | mixed | 92% precision RAG, -40% hallucination, QLoRA H100 fine-tune, 99% baseline performance retained under privacy controls | Maps to JD robustness/factual-consistency + fine-tuning asks |
| 3 | Skills order | GenAI generic first | Promote fine-tuning (LoRA/QLoRA/PEFT), transformers, PyTorch, RAGAS/BERTScore, FAISS/Pinecone/Weaviate to top | ATS keyword alignment |
| 4 | Experience bullets | Progress Solutions first | Pull clinical RAG + privacy-preserving pipeline bullets to top | Domain proof |
| 5 | Footer | location line | "US-based, F-1 OPT — authorized to work now" | Honest work-auth signal given no-sponsorship clause |

**LinkedIn top-5:** healthcare-LLM headline; clinical RAG featured post; QLoRA fine-tuning project; privacy-preserving ML write-up; "Open to Seattle / hybrid" note.

## F) Plan de Entrevistas (STAR+R)

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Clinical LLM training | Qwen3-27B QLoRA on H100 | Needed controllable long-form generation on a curated 361-example clinical/narrative set | Fine-tune within compute limits | 4-bit QLoRA, six-stage schema conditioning | Shipped a steerable model; documented in IEEE paper | Would add a held-out clinical eval + human-pref scoring earlier |
| 2 | RAG + factual consistency | Healthcare RAG pipeline | Hallucination on domain-specific clinical queries | Lift answer relevance, reduce hallucination | Dense retrieval + cross-encoder re-ranking | 92% precision, -40% hallucination | Re-ranking ROI was higher than bigger embeddings — measure before scaling |
| 3 | Bias / privacy / robustness | Privacy-preserving clinical ML | Re-identification risk on hospital-readmission data | Cut re-id risk, keep utility | k-anonymity (k=3) + l-diversity + Laplace DP | Re-id 3.38%→0.32%, 99% baseline AUC retained | Quantifying the privacy-utility curve made the trade-off a decision, not a guess |
| 4 | Eval/monitoring | LLM eval framework @ Progress | No pre-deploy regression signal | Benchmark iterations before release | RAGAS + BERTScore + custom domain metrics + dashboards | Caught regressions pre-release | Custom domain metrics mattered more than generic scores |
| 5 | Scalable serving | Inference cost/latency | SLA + cost pressure | Hold SLA, cut per-query cost | Prompt compression, semantic caching, model routing | Sustained SLA at lower cost | Caching hit-rate was the biggest lever |
| 6 | Multi-model selection | Vanguard model eval | Pick best LLM for internal tasks | +27% task success | Compared GPT-4o/Claude/Gemini on eval sets | Informed platform model choice | Eval-set design drove the decision quality |

**Case study:** Privacy-Preserving Clinical ML Pipeline — directly mirrors Truveta's clinical-data + trustworthy-AI mandate.
**Red-flag Qs:** "Only ~4 yrs vs 6+?" → depth + ownership + domain rarity. "Need sponsorship?" → authorized now on F-1 OPT; be transparent that long-term sponsorship would be needed and ask how they handle OPT→H-1B given the no-sponsorship clause.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution (leans positive on company, caution on fit/auth).

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Live JSON via Greenhouse boards-api on 2026-06-14 | Positive |
| Description quality | Specific stack (LLM/RLHF/PEFT/RAG, PyTorch, GPU/TPU), clear scope, salary band disclosed | Positive |
| Realistic requirements | 6+ yrs + PhD-preferred + RLHF + distributed training is a high bar for the band | Concerning (fit) |
| Company hiring signals | Series C $1B, ~415 staff, actively hiring; no 2026 layoffs found (older 2023 chatter only) | Positive |
| Reposting | Not previously in scan-history under Truveta | Neutral |
| Role market context | Clinical/biomedical LLM is a legit, slower-to-fill specialist role | Positive |

**Context Notes:** "Cannot sponsor work visas or permits at this time." Deepak is F-1 OPT (authorized now), so he can apply, but long-term continuity needs sponsorship Truveta has stated it won't provide — this is the load-bearing risk, not posting legitimacy.

## H) Draft Application Answers
_(score < 4.5 — drafts omitted)_

---

## Keywords extraídas
LLM, generative AI, transformer, NLP, PyTorch, TensorFlow, supervised fine-tuning, RLHF, PEFT, prompt engineering, retrieval-augmented generation, RAG, vector database, semantic search, multimodal foundation model, clinical, biomedical, bias mitigation, factual consistency, explainability, distributed training, GPU, Python
