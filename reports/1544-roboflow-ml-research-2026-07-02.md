# Evaluación: Roboflow — Machine Learning Research Engineer

**Fecha:** 2026-07-02
**Arquetipo:** Computer Vision / Multimodal Engineer (research-leaning — CV domain fit, but a research-scientist function)
**Score:** 3.1/5
**URL:** https://jobs.ashbyhq.com/roboflow/40c3389e-c7ea-4054-8c90-05b1beb38bff
**Legitimacy:** High Confidence
**Location:** Remote (US)
**Region:** US
**PDF:** output/2026-07-02/cv-deepak-mallampati-roboflow-ml-research-2026-07-02.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Computer Vision / Multimodal Engineer — but scoped as a **research scientist** function |
| Domain | Computer vision platform (Roboflow: 1M+ developers, half the Fortune 100); tooling for dataset curation, training, and deploying CV models |
| Function | Develop **novel ML methods**; contribute to the team's **research agenda**; use Roboflow's massive CV userbase to find where existing methods fail; build methods that generalize across diverse data and run efficiently on varied hardware; **identify innovation areas, create novel approaches, and write papers aimed at top conferences**; translate research into production at scale |
| Seniority | Research Engineer / Research Scientist (publication track) |
| Remote | Remote (US), full-time |
| Comp | Not disclosed |
| TL;DR | A **research-scientist** seat at a well-funded CV platform: invent novel methods, publish at CVPR/NeurIPS/ICLR, then ship them at scale. Domain (computer vision) matches Deepak; the *function* (original research + top-venue publishing) does not. |

## B) Match con CV

Read `cv.md`. Requirement → CV evidence mapping:

| JD requirement | CV evidence (cv.md) | Match |
|----------------|---------------------|-------|
| Master's / PhD in AI / ML / CV / robotics or equivalent industry experience | **M.S. Computer Science, Kent State 2025 (GPA 3.70)** | ✅ Meets the degree line (MS) |
| Strong ML proficiency (deep learning, PyTorch/TensorFlow) | PyTorch, TensorFlow, Keras; fine-tuning (LoRA/QLoRA/PEFT); Hugging Face Transformers; ~4 yrs AI/ML | ✅ Strong |
| Computer vision / multimodal depth | Video summarization pipeline (speech-to-text + transformer abstractive summarization + timestamp clip extraction) across **5,000+ videos, 70% less manual editing**; YOLOv8 detection (profile); MangaLens shipped (Chrome, 29+ sites) | ✅ Solid CV/multimodal domain fit |
| Build methods that generalize across diverse data / run efficiently on varied hardware | Fine-tuned **Qwen3-27B via 4-bit QLoRA on an H100**; model optimization, quantization, inference cost/latency tuning; privacy–utility benchmarking framework | ✅ Strong on efficiency/optimization; ⚠️ generalization-research not demonstrated |
| Develop **novel ML methods** / contribute to a **research agenda** | Applied research assistant work (privacy-preserving clinical ML: re-id risk 3.38%→0.32%, 99% perf retained); composite privacy–utility scoring framework | ⚠️ Partial — applied/experimental rigor, but not novel-method invention as a primary function |
| **History of publication at conferences/journals (CVPR, NeurIPS, ICLR, etc.)** | Authored **one peer-review-ready IEEE-format conference paper** (LaTeX) documenting the QLoRA narrative-generation work — **not yet a published top-venue record** | ❌ Gap — the binding research-credential gate |
| Write papers aimed at top conferences | One IEEE-format paper drafted (readiness), no CVPR/NeurIPS/ICLR publication history | ❌ Gap (function + track record) |

**Gaps + mitigation:**
1. **Top-venue publication history (❌) — the binding gate.** The JD explicitly asks for "a history of publication at conferences/journals (CVPR, NeurIPS, ICLR, etc.)". Deepak has authored **one IEEE-format, peer-review-ready conference paper** — a real and creditable artifact, but it is *not* a published record at a top ML/CV venue. This is not a fake-able gap and it is the primary score drag. Do not overstate it as a publication record.
2. **Research-scientist function vs. applied-engineer track (❌/⚠️).** The role's core is *inventing novel methods and publishing them*. Deepak's track record is **applied shipping** — production RAG/agentic systems, a deployed video pipeline, shipped MangaLens — plus applied research-assistant rigor. Strong builder, but "originate a research agenda and write papers" is a different job function.
3. **CV domain fit (✅) is the genuine strength.** Video-understanding pipeline, YOLOv8 detection, transformer expertise, and H100/QLoRA optimization put Deepak squarely in Roboflow's *domain* even if not in its research *seat*.

Net: **domain match is real, function match is not.** The CV/multimodal archetype fits; the research-scientist + top-venue-publication mandate caps practical fit.

## C) Nivel y Estrategia

- **JD level:** Research Engineer / Research Scientist on a publication track (novel methods → top-conference papers → production). **Candidate level:** strong applied ML/CV engineer (~4 yrs) with MS and one peer-review-ready IEEE paper — meets the degree line, **misses the publication-history gate**.
- **The publication gate is real and hard.** "History of publication at CVPR/NeurIPS/ICLR" is a credential filter that one drafted IEEE-format paper does not satisfy. Be honest: Deepak is an **applied engineer with research-adjacent rigor**, not a published top-venue researcher. Any application must lead with domain depth + applied research (privacy ML framework, QLoRA/H100 work) and the *one authored paper* as evidence of research literacy — **without fabricating a publication record**.
- **Research-vs-applied is the core tension.** Even setting the paper gate aside, the day-to-day is originating novel methods and writing papers — not the applied-shipping work where Deepak is strongest. A candidate who wants to *pivot into* research could use the CV domain fit as a bridge, but they'd be entering below the stated research bar.
- **Recommendation:** **Borderline-low.** Domain fit and remote (no visa friction) keep it above the apply-worthy line, but the publication gate and function mismatch make this a stretch. Apply only if Deepak specifically wants to move toward a research seat and can speak credibly to the applied-research work (privacy–utility framework, QLoRA experiments) and the IEEE paper — honestly framed as "research-ready," not "published at top venues." Applied CV/ML engineering roles at Roboflow or peers are the stronger-fit target.

## D) Comp y Demanda

| Signal | Finding | Source |
|--------|---------|--------|
| Role comp | **Not disclosed** in posting | JD (Ashby) |
| vs. Deepak target ($100–130K) | Research-engineer comp at a funded CV platform typically runs above this band; likely above target, but undisclosed | profile.yml / market context |
| Company | Roboflow — 1M+ developers, half the Fortune 100; backed by Google Ventures, Y Combinator, Craft Ventures, Sam Altman, Lachy Groom; raised >$63M | JD / public |
| Demand | CV research talent is competitive and credential-gated (top-venue publications); applied CV engineering demand is broader and more accessible to Deepak's profile | Market context |

Comp undisclosed. The obstacle here is **credential fit** (publication history), not money.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Applied-AI / regulated framing | Foreground **CV/multimodal + applied-research** identity (video understanding, transformers, model optimization, one authored IEEE paper) | Aligns to Roboflow's CV domain and research literacy |
| 2 | Bullets | Video summarization | Surface the multimodal pipeline (speech→text→transformer summary→clip extraction, 5,000+ videos) as CV/video-understanding depth | Direct domain hook |
| 3 | Bullets | Qwen3-27B QLoRA on H100 | Foreground **efficient training / quantization on varied hardware** | JD "run efficiently on varied hardware" |
| 4 | Bullets | Privacy-preserving clinical ML | Frame as **applied research** (novel privacy–utility scoring framework, quantified trade-offs) + note the authored IEEE-format paper | Signals research rigor without overclaiming a publication record |
| 5 | Skills | RAG/LLM lead | Reorder to lead **CV, transformers, PyTorch/TensorFlow, model optimization, YOLOv8** | JD prioritizes CV + deep learning |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | CV / multimodal depth | Video summarization pipeline | Manual video review burden | Automate highlights end-to-end | Speech-to-text + transformer abstractive summary + timestamp clip extraction | 70% less manual editing across 5,000+ videos | Multimodal systems are stitched pipelines, not monoliths |
| 2 | Efficient training on varied hardware | Qwen3-27B QLoRA on H100 | Long-form controllable generation | Fine-tune a 27B model on constrained hardware | 4-bit QLoRA, 361-example curated instruction set, six-stage schema | Working fine-tuned model on a single H100 | Quantization makes large-model research tractable |
| 3 | Applied research rigor / novel method | Privacy-preserving clinical ML | Re-identification risk in clinical data | Cut re-id risk while retaining utility | k-anonymity + l-diversity + differential privacy; composite privacy–utility scoring framework | Re-id 3.38%→0.32%, 99% baseline performance retained | Quantify exactly how much privacy each technique buys per accuracy cost |
| 4 | Writing / communicating research | Authored IEEE-format paper | Document methodology + results credibly | Produce a peer-review-ready write-up | LaTeX IEEE-format conference paper on the QLoRA narrative work | Peer-review-ready manuscript | Research literacy is demonstrable even before a top-venue record |
| 5 | Translate research into production | MangaLens / video pipeline shipped | Turn a model into a used product | Ship real inference to users | Chrome extension live on Web Store, 29+ sites; pipeline across 5,000+ videos | Real users, real deployment | Shipping is where research earns its keep |
| 6 | Object detection / CV models | YOLOv8 detection (profile) | Real-time detection task | Build a working detector | YOLOv8 object detection | Functional detection system | Detection tooling is Roboflow's core surface area |

**Case study:** Video summarization (multimodal/CV) + privacy–utility applied-research framework + the authored IEEE paper — the honest bridge from applied CV engineering toward a research seat.
**Red-flag Qs:** "Walk me through your publication history at CVPR/NeurIPS/ICLR." → Answer honestly: "I don't have a top-venue publication record. I've authored a peer-review-ready IEEE-format conference paper on my QLoRA narrative-generation work and done applied research (a novel privacy–utility scoring framework with quantified trade-offs). My strength is applied CV/ML — I'd be entering the research track from the applied side, not with a publication history." (Do not fabricate publications.)

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting freshness | Live first-party Ashby posting (Roboflow board) | Positive |
| Tech specificity | Highly specific (novel CV methods, generalization across diverse data, varied-hardware efficiency, top-conference publishing) | Positive |
| Requirements realism | Coherent research-engineer scope (MS/PhD + publication history) | Positive |
| Company | Roboflow — 1M+ developers, half the Fortune 100 | Positive |
| Investors | Named top-tier backers: Google Ventures, Y Combinator, Craft Ventures, Sam Altman, Lachy Groom; raised >$63M | Positive |
| Salary | Not disclosed | Neutral |
| Location clarity | Explicit Remote (US), full-time | Positive |

**Context:** Named credible company, detailed research-scoped JD, named top-tier investors, and a first-party Ashby posting = high-confidence real role. Undisclosed comp is the only soft spot and does not lower legitimacy.

## H) Draft Application Answers

_(Score 3.1 < 4.5 — full drafts deferred; PDF tailored. Positioning line: "Applied CV/multimodal engineer (video-understanding pipeline, YOLOv8, transformers, H100/QLoRA optimization) with applied-research rigor (privacy–utility framework) and one peer-review-ready IEEE-format paper — strong on Roboflow's domain, transparent that this is a research seat requiring a top-venue publication history I don't yet have." Recommend prioritizing applied CV/ML engineering roles over this research-track posting.)_

---

## Keywords extraídas

Computer vision, multimodal, video understanding, object detection, YOLOv8, transformers, PyTorch, TensorFlow, deep learning, novel ML methods, research agenda, top-conference publication, CVPR, NeurIPS, ICLR, IEEE paper, model optimization, quantization, QLoRA, H100, generalization, efficient inference, applied research, Roboflow, remote
