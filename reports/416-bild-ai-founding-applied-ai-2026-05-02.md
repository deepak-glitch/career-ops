# Evaluación: Bild AI — Founding Engineer (Applied AI)

**Fecha:** 2026-05-02
**Arquetipo:** Computer Vision / Multimodal Engineer (primary — blueprint understanding via SOTA CV/LLM/multimodal) + Applied AI / LLM Engineer (secondary — applied stack)
**Score:** 3.0/5
**URL:** https://www.workatastartup.com/jobs/75647
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — full-time in-office (relocation expected)
**PDF:** output/2026-05-02/cv-deepak-mallampati-bild-ai-founding-applied-ai-2026-05-02.pdf
**Verification:** confirmed (YC corporate JD ycombinator.com/companies/bild-ai/jobs/m2ilR5L extracted 2026-05-02; WaaS partial render, YC mirror corroborated)

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Archetype | Founding Applied AI / Multimodal CV — blueprint understanding for construction |
| Domain | Construction-tech / blueprint reading + cost estimation + permit AI |
| Function | Apply SOTA CV + LLM + multimodal AI to messy real-world documents; ship prototypes fast |
| Seniority | **Any (new grads OK)** — explicit floor, no minimum experience |
| Remote | SF-based or willing to relocate; full-time in-office |
| Comp | $100K-180K base + 0.20%-0.80% equity |
| TL;DR | YC W25 founding engineer at a 5-person SF construction-AI startup applying SOTA CV/LLM/multimodal to blueprint understanding. New-grad floor + applied SOTA scope is rare. SF on-site full-time is the binding friction (Kent OH → SF relocation). Off-archetype on healthcare but on-archetype on multimodal CV (Deepak's YOLOv8 + Diffusion + ControlNet/MediaPipe). |

## B) Match con CV

| JD requirement | CV evidence | Match |
|---|---|---|
| Python | cv.md L12 | ✅ |
| Machine Learning + Deep Learning | cv.md L14 (PyTorch, HF Transformers, Diffusers, scikit-learn, XGBoost) | ✅ |
| Computer Vision | cv.md L15 YOLOv8, OpenCV, ControlNet, OpenPose/MediaPipe; L69 Drowsiness Detection w/ YOLOv8 unified detect-and-classify | ✅ Strong |
| LLM application | cv.md L13 RAG, agentic workflows, structured outputs, evals; L26-27 production LLM | ✅ Strong |
| Multimodal AI | cv.md L18 multimodal systems; L62 Pixel Character Synthesis (SD + LoRA + ControlNet + LLM orchestrator); L66 Dream Decoder (multimodal text→image) | ✅ Strong |
| "Schlep" / operational complexity | cv.md L60 Manga Lens (29 site selectors, MV3 service workers, payload routing) — MV3 ops complexity proven; L86 E-Farming Marketplace solo full-stack | ✅ Strong |
| 0→1 builder mindset | cv.md L86 founder + L60 Manga Lens shipped solo to Chrome Web Store | ✅ Strong |
| Construction domain | None | Hard gap (domain) |
| SF in-office full-time | Kent OH (US-based, F-1 OPT) | Soft gap (relocation) |

**Gaps:**
1. **Construction blueprint domain:** Mitigation — frame YOLOv8 + ControlNet + multimodal as the right tooling for "messy real-world documents"; cite Manga Lens 29-site DOM extraction as evidence of "messy document understanding at scale."
2. **SF on-site full-time relocation:** Mitigation — confirm relocation feasibility upfront; ask about visa sponsorship trajectory in screen.
3. **Equity-heavy comp ($100-180K + 0.20-0.80%):** Mitigation — accept band knowing founding-engineer equity comp is the upside; negotiate review at 6 months.

## C) Nivel y Estrategia

- JD nivel: New Grad to Mid (explicit "any new grads ok")
- Candidato natural: Mid Applied AI (2.5y, healthcare-focused, M.S. May 2025, multimodal CV proven)
- **Plan "vender senior sin mentir":** Lead with multimodal CV depth (Pixel Character Synthesis = SD + LoRA + ControlNet + LLM orchestrator is direct multimodal authoring proof; YOLOv8 Drowsiness = real-time CV pipeline with ~30% latency reduction). Frame Manga Lens as 1:1 evidence of "messy real-world documents at scale" (29-site selector + viewport-slice + multi-provider). M.S. + 2.5y + multimodal authoring + solo-shipping = strong founding-engineer profile.
- **Plan "si me downlevelan":** Accept new-grad band ($120-140K SF + 0.30-0.50% equity) with explicit 6-month review for promotion criteria (autonomous customer ownership, 1+ feature shipped end-to-end). Negotiate relocation budget upfront.

## D) Comp y Demanda

| Source | Range | Notes |
|---|---|---|
| Bild AI JD | $100-180K + 0.20-0.80% equity | Founding band |
| Comparable YC W25 founding-engineer | $130-180K + 0.50-1.50% equity | Levels.fyi 2026 |
| SF founding-engineer demand | High | Construction-AI is rising vertical 2026 |

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---|---|---|---|
| 1 | Summary | Healthcare-focused | "Applied AI engineer with multimodal CV depth (YOLOv8 + Stable Diffusion + ControlNet + LLM orchestrator) and a Chrome-Web-Store-shipped extension that handles messy real-world DOM at scale across 29 sites. M.S. CS, 2.5y production, solo-ship discipline." | JD priority is SOTA CV/LLM/multimodal + 0→1 + schlep |
| 2 | Bullets (Progress Solutions) | RAG + agentic + predictive ML | Lead with **agentic LLM workflows + multimodal authoring** (not RAG); RAG second; HIPAA governance third | JD axis is multimodal applied AI, not regulated RAG |
| 3 | Projects | Manga Lens first | Reorder: Pixel Character Synthesis first (multimodal authoring 1:1), Manga Lens second (messy real-world docs), Drowsiness Detection third (real-time CV) | JD priority |
| 4 | Skills | Listed as paragraphs | Lead with: Python, PyTorch, multimodal authoring (SD + LoRA + ControlNet + MediaPipe), YOLOv8, OpenCV, Diffusers, agentic LLM, MV3 browser automation | ATS keyword matching |
| 5 | Footer | Generic | "US-based, F-1 OPT, open to SF relocation; sponsorship: F-1 → STEM-OPT → H-1B" | SF on-site role |

**LinkedIn changes:**
1. Headline: "Founding-mindset Applied AI Engineer · Multimodal CV (SD + LoRA + ControlNet) · LLM Orchestration · SF-open"
2. Featured: Pixel Character Synthesis + Manga Lens
3. About: lead with multimodal authoring + solo shipping discipline
4. Open to work: SF / Founding Engineer / Applied AI / Multimodal CV
5. Skills endorsements: Stable Diffusion, ControlNet, YOLOv8, LLM orchestration, Manifest V3

## F) Plan de Entrevistas

| # | JD requirement | Story (STAR+R) | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | SOTA CV / multimodal authoring | Pixel Character Synthesis & Animation Engine | Identity-consistent pose-controlled pixel character synthesis | Build authoring stack from scratch | SD fine-tune + LoRA for identity + ControlNet/OpenPose for pose + LLM orchestrator for prompt decomposition + sprite sheet export | Multi-stage authoring system w/ latent-space consistency for animation smoothness | Multimodal authoring is 80% conditioning discipline. ControlNet + LoRA stack is the right starting point. |
| 2 | Messy real-world document understanding at scale | Manga Lens Chrome Extension | 29 manga/webtoon sites with inconsistent DOM + variable viewport | Build extension that translates panels in real time across all sites | MV3 service workers + content scripts + per-domain selector configs + viewport-slice for tall webtoons w/ coordinate remapping + 4-provider AI vision routing (Claude/GPT-4o mini/GPT-4.1 Nano/Ollama) | Shipped to Chrome Web Store; 29 site selectors; payload routing avoids CUDA crashes | "Messy documents" requires per-site templates + dedup discipline. The schlep IS the moat. |
| 3 | Ship prototypes fast | Dream Decoder | Multimodal creative platform 0→1 | Ship dream interpretation + image synthesis | FastAPI + React/Vite + Perplexity Sonar + Replicate + intermediate structured prompt transformation | ~30% contextual alignment gain; ~25-30% first-pass image success | Intermediate structured layers > end-to-end "just prompt the LLM". Modularity is a cost-cutter. |
| 4 | LLM application + RAG | Healthcare Claims agentic pipeline | Claims processing with cascading hallucination risk | Build 5-stage multi-agent pipeline | Schema-validated JSON contracts + RAG-grounded CPT/ICD validation | Cascading hallucinations prevented; audit-ready reasoning traces | Schema validation > prompt engineering at scale. |
| 5 | Real-time CV under latency constraints | YOLOv8 Drowsiness Detection | Two-stage CNN pipeline too slow | Replace with unified YOLOv8 detect-and-classify | Sliding-window confidence aggregation + adaptive frame skipping + NMS tuning | ~30% latency reduction; ~25% blink-driven false-positive reduction | Real-time CV is window discipline + frame skipping, not just model choice. |
| 6 | Founder mindset / 0→1 | E-Farming Marketplace | Solo-build PHP/MySQL/Bootstrap AgriTech 0→1 | Onboard 80-120 active users phase 1 | Solo full-stack: cart + reviews + community blog + repeat-engagement features | 80-120 active users onboarded | Founder mindset = next 80/20 lever every day. The customer always sees the bug first. |

**Case study to lead with:** Pixel Character Synthesis (multimodal authoring 1:1) → pivot to Manga Lens for messy-document scale.

**Red-flag questions:**
- "Are you OK with full-time in-office SF?" → "Yes — relocation to SF is on the table. The SF founding-engineer customer-onsite layer is what I want next."
- "No construction experience?" → "Construction is one example of 'messy real-world documents.' I've shipped DOM extraction across 29 inconsistent manga/webtoon sites and multimodal authoring with SD + LoRA + ControlNet + LLM orchestrator. The tooling transfers; domain learning is a 4-week ramp."
- "Visa sponsorship?" → "F-1 OPT now, STEM extension active. I'd want to confirm sponsorship trajectory in the screen before going deep."

## G) Posting Legitimacy

**Assessment:** **High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting age | YC W25 batch — actively hiring | Positive |
| Apply button | Active per WaaS + ycombinator.com mirror | Positive |
| Description quality | Specific stack (CV + LLM + multimodal); explicit "any new grads ok"; SF in-office stated | Positive |
| Salary transparency | $100-180K + 0.20-0.80% equity | Positive |
| Company recognition | YC W25, $5M seed, Roop Pal + Puneet Sukhija founders | Positive |
| Reposting history | Single posting, fresh | Positive |

**Context:** YC W25 founding role at a 5-person construction-AI startup — explicit new-grad floor + comp band + equity = high-legitimacy, real, active opening.

## H) Draft Application Answers

Skipped (score 3.0/5 — below 4.5 threshold). PDF generated for tailored CV.

---

## Keywords extraídas

Founding Engineer, Applied AI, Computer Vision, Multimodal AI, LLM, blueprint understanding, construction tech, SOTA CV, Stable Diffusion, ControlNet, LoRA, YOLOv8, MediaPipe, MV3 browser automation, real-world documents, Bild AI, San Francisco, YC W25
