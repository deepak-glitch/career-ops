# Helsing — AI Research Engineer, Computer Vision

**Fecha:** 2026-05-19
**Arquetipo:** Computer Vision / Multimodal Engineer
**Score:** 3.2/5
**URL:** https://helsing.ai/jobs/4334842101?gh_jid=4334842101
**Legitimacy:** High Confidence
**Location:** Berlin / London / Munich (also Paris / Barcelona / Warsaw per office list) — on-site
**Region:** Intl
**PDF:** output-intl/2026-05-19/cv-deepak-mallampati-helsing-ai-research-cv-2026-05-19.pdf
**Verification:** confirmed via Greenhouse API (job-boards.greenhouse.io/helsing/jobs/4334842101) 2026-05-19

---

## A — Role Summary

| Field | Detail |
|---|---|
| Company | Helsing — European defense AI company; "AI capabilities and enabling foundation that allow machines to perceive and assist human decision-making" |
| Role | AI Research Engineer - Computer Vision (object recognition/tracking, video understanding, scene matching) |
| Location | Berlin / London / Munich (offices also Paris/Barcelona/Warsaw); on-site European base |
| Employment | Permanent contract |
| Comp | "Competitive salary + VSOP options" (not disclosed) + €2,500 relocation + 4w temporary accommodation + €500/£450 yearly learning allowance |
| Visa sponsorship | Relocation support implies sponsorship for EU base; F-1 OPT does not help |
| Domain | Defense AI — object recognition, tracking, video understanding, scene matching; hardware-constrained edge deployment |
| Stack | Python (clean + tested + monitored production code); state-of-the-art deep learning CV; bonus Rust / C++ |
| Seniority | MSc required (baseline); PhD "nice to have"; publications at CVPR/NeurIPS/ICLR/ICCV/ICRA/IROS nice to have |

**TL;DR:** Computer vision research engineer at a defense AI company. **Archetype 5/6 fit (CV/Multimodal)** — Deepak's **Drowsiness Detection (YOLOv8) + Video Summarization** are the proof points. MSc requirement matches Deepak's Kent State Master's. **Caveats:** EU base requires relocation + EU work authorization (F-1 OPT no help); **defense domain** is sensitive (ethical implications discussed openly in JD); "Research Engineer" framing tilts toward PhD + publication track. Score: solid CV match, EU work auth + research bar are the dominant frictions.

---

## B — CV Match & Gaps

**Strong matches:**
- "Building computer vision models for object recognition and tracking" — Drowsiness Detection (YOLOv8) is the direct analog (real-time object detection + classification).
- "Video understanding" — Video Summarization & Highlight Generation at Suvidha (transformer-based hierarchical summarization across 5,000+ sessions, ~85% alignment with human curation).
- "Develop CV models and pipelines that leverage and extend SOTA methods" — Pixel project (Stable Diffusion + LoRA + ControlNet); Drowsiness (YOLOv8 augmentation + sliding-window confidence aggregation).
- "Design experiments and conduct benchmarks" — agentic pipeline evals + retrieval precision/recall eval gates + walk-forward forecasting validation.
- "Adapt to target hardware and constraints" — Drowsiness Detection NMS tuning + adaptive frame skipping for real-time CPU; FastAPI + Docker production patterns.
- "Solid software engineering skills, writing clean and well-structured code in Python, and experience deploying AI software to production including testing, QA, and monitoring" — explicit production discipline at Progress Solutions (~30% defect reduction post-deploy).
- **MSc in CS/ML/related field — match** (Kent State University).

**Gaps / risks:**
- "PhD in CV/ML/robotics with publications in top-tier journals/conferences" (nice-to-have) — Deepak has MSc, no top-tier publications.
- "Single + multi-object tracking, scene understanding and matching, 3D computer vision" (nice-to-have) — Deepak has single-object detection + video understanding; no multi-object tracking, 3D CV, or scene matching depth.
- "Simulators, emulators, or synthetic data generators" (nice-to-have) — no direct experience.
- "Rust and/or C++" (nice-to-have) — C++ Arduino-only; no production Rust/C++.
- "Edge devices with limited compute resources" (nice-to-have) — IoT/Arduino is edge-adjacent but not production edge AI.
- **Defense domain** — Deepak's portfolio is healthcare + consumer (manga, dreams, agriculture). Defense is sensitive and ethically loaded.
- **EU base required + F-1 OPT** — Deepak is US-based on F-1 OPT; needs full EU work authorization (Helsing offers relocation support to non-EU is unclear; usually requires sponsorship path).

**Mitigation:** Lead with **Drowsiness Detection (YOLOv8 production CV) + Video Summarization (transformer-based video understanding)** as the proof points. Cover letter raises EU work authorization upfront + flags MSc-without-publications honestly.

---

## C — Level and Strategy

- JD level: MSc baseline IC + research-engineer expectations; PhD/publications "nice-to-have" (not hard gate).
- Deepak's natural level: mid-junior (2.5y) with shipped CV pipeline. MSc credential matches; publication gap is the structural ask.
- Realistic: borderline — viable if Helsing's bar is "shipped CV + clean Python production discipline" not "research-track + publications".

## D — Comp & Demand

| Datum | Value | Source |
|---|---|---|
| Posted range | Not disclosed (competitive + VSOP) | JD |
| Helsing AI Engineer (EU) | €80-130K + equity typical | Glassdoor / market 2026 |
| Defense AI demand | Rising in 2026 (European sovereignty push) | Industry trend |

Comp not disclosed; EU CV research engineer band typically below US.

## E — Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---|---|---|---|
| 1 | Summary | "healthcare-focused RAG…" | "Applied AI engineer with shipped computer vision + video understanding + production deep-learning discipline — YOLOv8 real-time detection pipeline + transformer-based video summarization across 5,000+ sessions" | Lead with CV + video; de-emphasize healthcare/RAG |
| 2 | Bullets | RAG-first | Reorder: CV / YOLOv8 → video understanding → diffusion / multimodal → production AI services → healthcare RAG | Match JD priorities (CV + production) |
| 3 | Projects | Healthcare-heavy | Lead with Drowsiness (YOLOv8 + augmentation + latency optimization) + Video Summarization (transformer-based) + Pixel (SD + ControlNet + pose conditioning) | Show CV + multimodal depth |
| 4 | Cover letter | n/a | Open: "I'm a US-based engineer with a MSc from Kent State and a shipped YOLOv8 detection-classification pipeline + transformer-based video summarization. I'd like to bring that CV/production discipline into Helsing's perception stack — and I'd want to discuss EU work authorization + the ethical framing of defense AI upfront." | Lead with CV proof + raise EU auth + ethics honestly |

## F — Interview Plan (STAR+R)

| # | JD Hook | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | "Building CV models for object recognition and tracking" | Drowsiness Detection YOLOv8 | Two-stage CNN pipeline was slow + brittle | Build unified real-time detection + classification | Replaced with YOLOv8 + augmentation for lighting/head-pose + sliding-window confidence aggregation + adaptive frame skipping + NMS tuning | ~30% inference latency reduction; ~25% false-positive reduction | Unifying detection + classification beats stacking models on a latency budget |
| 2 | "Video understanding" | Video Summarization @ Suvidha | 5,000+ recorded sessions = hours of manual review | Automate highlight selection + timestamp-aligned clip extraction | Transformer-based hierarchical abstractive summarization + timestamp mapping for clip extraction + Flask API for non-tech users | 60-70% review-time reduction; ~85% alignment with human-curated highlights | Hierarchical summarization is necessary when long-context exceeds model windows |
| 3 | "Design experiments and conduct benchmarks" | Clinical RAG eval loop | Retrieval regressions invisible to clinicians | Build eval gates + benchmark on real query logs | Curated eval set from clinician misses + precision/recall metrics + regression gates | ~35% retrieval precision gain | Benchmarks need to be built from real failure modes, not synthetic data |
| 4 | "Solid SWE skills, clean Python production code, testing/QA/monitoring" | FastAPI/Docker @ Progress Solutions | ML/LLM inference needed production discipline | Productionize with observability | FastAPI/Flask + Docker + structured logging + load simulation + audit trails | ~30% post-deployment defect reduction | Production discipline = packaging + logs + load + audit, not heroics |

## G — Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Greenhouse API returns full record updated 2026-05-19 | Active | Positive |
| Helsing is well-known (defense AI, multiple gov contracts) | Active | Positive |
| Concrete responsibilities + must/nice-to-have split | Active | Positive |
| Detailed offer (relocation + learning + parental + remote-during-pregnancy) | Active | Positive |
| Comp not disclosed | Mild caveat | Neutral |
| Defense domain + EU work auth ambiguity | Caveat | Neutral |

Real role at a real company. Defense ethics + EU work auth are personal-fit calls.

## H — Draft Application Answers

**Q: Why Helsing?**
"My CV portfolio is mostly healthcare and consumer (drowsiness detection, video summarization, manga vision). The technical core — real-time object detection, video understanding, production-discipline Python — translates directly. I'd want to be honest upfront about two things: my MSc-without-publications profile and the ethical framing of defense AI, which I'd appreciate exploring in interviews."

**Q: Work authorization?**
"US-based, currently on F-1 OPT. For an EU base I'd need full work authorization — would Helsing sponsor that path?"

**Q: Why CV?**
"I built a YOLOv8 drowsiness detection pipeline that replaced a two-stage CNN — ~30% latency reduction with augmentation + sliding-window confidence aggregation + NMS tuning. The thread I want to pull next is multi-object tracking + 3D scene understanding, which Helsing's CV team does at depth."

---

## Keywords (ATS)

AI Research Engineer, Computer Vision, Object Detection, Object Recognition, Object Tracking, Video Understanding, Scene Matching, YOLOv8, Transformer-based Summarization, Deep Learning, Python, FastAPI, Docker, MSc Computer Science, Production AI, Defense AI, Helsing, Berlin, London, Munich, EU work authorization, US-based F-1 OPT.
