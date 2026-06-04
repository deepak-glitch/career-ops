# Evaluación: UniversalAGI — ML Engineer

**Fecha:** 2026-06-04
**Arquetipo:** ML Engineer (Applied AI Systems) / AI Solutions
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/universalagi/995ceec2-c76e-4466-9859-05bda9898284
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — 5 days/wk onsite
**Region:** US
**PDF:** output/2026-06-04/cv-deepak-mallampati-universalagi-ml-2026-06-04.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | ML Engineer / Applied AI |
| Domain | Foundation AI for Physics — industrial automation |
| Function | Build execution layer: data → train/fine-tune → benchmark |
| Seniority | Mid (no explicit yr floor; "Strong SWE + ML lifecycle" implied 2–5y) |
| Remote | On-site SF, 5 days/wk |
| Comp | "Competitive salary + significant equity" (undisclosed) |
| TL;DR | Build data-pipeline + training + eval surface for physics-foundation-model startup with Karpathy/Schmidt/Stoica/Gil backing; onsite SF 5d/wk. |

## B) Match con CV

| JD Requirement | CV Evidence | Fit |
|---|---|---|
| ML lifecycle: data → train → eval | KSU RA (QLoRA Qwen3-27B on H100); Vanguard model eval; Progress RAGAS/BERTScore | ✅ |
| Data preprocessing pipelines | KSU privacy pipeline; Vanguard data integration; Progress automation infra | ✅ |
| Training/fine-tuning experience | Qwen3-27B 4-bit QLoRA fine-tune | ✅ |
| Benchmarking / eval suites | RAGAS, BERTScore, custom domain metrics at Progress | ✅ |
| Distributed/scalable compute | H100 single-GPU fine-tune; no explicit multi-node | ⚠️ |
| Physics / industrial domain | None | ❌ Hard gap |
| FDE / customer-obsession | MangaLens shipping discipline; Vanguard cross-team | ⚠️ Adjacent |
| 5d/wk SF onsite | Currently Kent OH; F-1 OPT | ⚠️ Relocation + auth flag |

**Gaps:**
- Physics domain → no mitigation; signal interest via reading-the-recent-research framing.
- Distributed training at scale → emphasize the H100 fine-tune as a credible start; commit to ramp on DeepSpeed/FSDP.
- SF onsite 5d/wk + F-1 OPT — viable but relocation needed; flag in cover letter.

## C) Nivel y Estrategia

Detected level is fluid (no yr floor). Sell as "Applied AI engineer with full ML lifecycle ownership in regulated domains; physics is a new domain but my method-transferable evidence is real (QLoRA fine-tune, RAGAS evals, RAG ranking 30%+)." Down-level path: accept if equity is meaningful (>0.1%) and relocation supported; immigration support is stated as benefit (positive).

## D) Comp y Demanda

| Metric | Source | Note |
|---|---|---|
| ML eng @ SF early-stage AI startup | Levels.fyi 2026 | $160–220K base + 0.1–0.5% equity typical |
| UniversalAGI funding | Investors named (Gil, Schmidt, Stoica, Patterson, Kushner) — funding undisclosed | Likely seed/A |
| Physics-AI demand | Niche but rising (Nvidia Modulus, PhysicsX, Anybotics) | Specialist field |

## E) Plan de Personalización

| # | CV Section | Change |
|---|---|---|
| 1 | Summary | Lead "ML engineer with end-to-end lifecycle ownership: data pipelines → fine-tuning (QLoRA Qwen3-27B on H100) → evals (RAGAS/BERTScore)" |
| 2 | KSU RA | Promote QLoRA fine-tune to top bullet; lead with "trained 27B params" |
| 3 | Progress | Lead with eval framework + metric design (matches "design and execute benchmarking") |
| 4 | Skills | Promote PyTorch, Hugging Face, QLoRA/LoRA/PEFT, RAGAS to top |
| 5 | Footer | "US-based (F-1 OPT), open to SF relocation w/ immigration support" |

## F) Plan de Entrevistas

| # | JD Req | STAR+R Story | Reflection |
|---|---|---|---|
| 1 | Fine-tune end-to-end | Qwen3-27B QLoRA on H100, 361-example curated dataset, 6-stage schema | Curation quality > dataset size |
| 2 | Eval suite design | Progress LLM eval framework w/ RAGAS+BERTScore | Eval-first prevents regression spirals |
| 3 | Data preprocessing | KSU privacy pipeline (k-anon + l-div + DP) | Preprocessing IS the model differentiator in production |
| 4 | Ship-rate / ownership | MangaLens 29 sites, real users on Web Store | Shipping forces clarity |
| 5 | Cross-team collab | Vanguard partnering 20+ teams | Async writeups buy you back time |
| 6 | Onsite culture fit | Acknowledge 5d/wk preference + commit to relocation | High-bandwidth team beats remote optimization |

Case study: KSU RA QLoRA work — direct match for "training/fine-tuning workflows end-to-end". Red flags: "Why physics?" → honest: "I don't have physics depth — my edge is method transfer (eval frameworks, fine-tuning hygiene) and willingness to ramp on the domain literature in week 1."

## G) Posting Legitimacy

| Signal | Finding | Weight |
|---|---|---|
| Date freshness | Active in Ashby board | Positive |
| Description specificity | Concrete (data pipelines, fine-tune, benchmarking, Olympic-athlete framing) | Positive |
| Comp transparency | "Competitive + equity" — opaque | Neutral |
| Company hiring health | Investors named (Gil, Schmidt, Stoica) — credible | Positive |
| Immigration support | Explicit benefit listed | Positive (rare!) |
| Onsite 5d/wk constraint | Limits remote candidate pool | Neutral (real for SF stage) |

**Assessment:** High Confidence.

## H) Draft Application Answers

Skipped — score 3.3/5.

---

## Keywords extraídas

ML Engineer, foundation model, fine-tuning, QLoRA, LoRA, PyTorch, Hugging Face, data preprocessing, training pipeline, benchmarking, RAGAS, BERTScore, distributed training, physics AI, industrial automation, applied AI, San Francisco, immigration support
