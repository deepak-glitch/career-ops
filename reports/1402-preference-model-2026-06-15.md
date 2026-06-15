# Evaluación: Preference Model — Member of Technical Staff, Machine Learning Capabilities (New Graduates)

**Fecha:** 2026-06-15
**Arquetipo:** ML Engineer (Applied AI Systems) + Applied AI / LLM Engineer (híbrido research-leaning)
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/Preference-Model/44642065-e592-44ba-810d-a019703463b6
**Legitimacy:** Proceed with Caution
**Location:** San Francisco (on-site) — US
**Region:** US
**PDF:** output/2026-06-15/cv-deepak-mallampati-preference-model-2026-06-15.pdf
**Verification:** confirmed (Ashby ApiJobPosting GraphQL returned live JSON 2026-06-15)

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | ML Engineer (Applied AI Systems) + Applied AI/LLM (research-leaning) |
| Domain | ML — building RL training environments & reward functions for frontier-model capability |
| Function | Build + research (design RL environments, run experiments, ship into production training runs) |
| Seniority | New Graduate (entry IC, MS/PhD welcomed) |
| Remote | On-site (San Francisco) |
| Team | Capabilities org — "small, high-ownership team"; founders ex-Anthropic data team |
| Comp | Not disclosed |
| TL;DR | Frontier-lab-adjacent new-grad MLE building RL/RLVR environments — strong ML-fundamentals + Python/PyTorch + eval fit, but the role's RL-environment/research core is adjacent (not direct) to Deepak's applied LLM/RAG/agentic track record. |

## B) Match con CV

| Requisito del JD | Evidencia en cv.md | Match |
|------------------|--------------------|-------|
| Strong ML fundamentals, broad research interests | MS CS (Kent State, GPA 3.70); privacy-preserving ML research; IEEE-format paper | ✅ Buena |
| Proficiency in Python and systems programming | Python primary; 12 APIs/microservices; FastAPI | ✅ Fuerte |
| Ideally PyTorch or JAX | PyTorch, TensorFlow, Keras in stack | ✅ (PyTorch) |
| Read many papers, translate into RLVR problems | IEEE paper + fine-tuning research; but no direct RL/RLVR work | ⚠️ Parcial |
| Build expertise across ML research/training/inference infra | Qwen3-27B QLoRA on H100; LLM eval (RAGAS/BERTScore); inference cost/latency optimization | ✅ Buena |
| Conduct experiments & evaluations | Structured LLM eval framework; multi-model eval (GPT-4o/Claude/Gemini, +27%) | ✅ Fuerte |
| Deliver into production training runs | Agentic LLM systems in production; automation infra (−60% failed runs) | ✅ Buena |
| Smart problem solvers, end-to-end ownership | Founder-grade ownership across Progress/Vanguard; built pipelines end-to-end | ✅ Fuerte |
| Nice-to-have: publications / public code | IEEE paper; MangaLens (live Chrome ext, 29+ sites); career-ops (public) | ✅ |
| Nice-to-have: Research experience (PhD/MS) | M.S. Computer Science, 2025 | ✅ |
| Active DL/ML research area expertise (RL) | No direct reinforcement-learning / reward-modeling experience | ❌ Gap |

**Gaps y mitigación:**
1. **Reinforcement learning / RLVR environment design** — *Borderline blocker (core of the role).* Mitigación: reframe LLM-eval + reward-signal-adjacent work (RAGAS/BERTScore custom domain metrics, content-safety reward shaping at Vanguard −42% unsafe outputs) as "designing learnable signals"; ship a small public RL-environment demo (e.g., a verifiable-reward coding/ML task harness) before interview to convert interest into proof.
2. **Frontier-lab research depth (publications in active area)** — *Nice-to-have.* Mitigación: lead with the IEEE-format privacy-ML paper and Qwen3 QLoRA-on-H100 experimentation as evidence of research-grade rigor; emphasize "read papers → implement in code" loop.
3. **No deep RL theory** — *Nice-to-have for a new-grad title.* Mitigación: emphasize fast self-learning track record (picked up agentic orchestration, QLoRA, differential privacy independently).

## C) Nivel y Estrategia

1. **Nivel detectado:** New Graduate (entry IC). **Nivel del candidato:** MS + ~4 yrs applied AI — at or slightly above the titled level; no down-level risk, but the title caps comp expectations.
2. **Vender senior sin mentir:** Lead with the rare combination of (a) production ML shipping discipline (agentic −42% tokens, RAG 92% precision, 99.9% uptime) and (b) research-grade experimentation (Qwen3 QLoRA on H100, IEEE paper, privacy–utility scoring framework). For a "blends research and engineering" role, the engineering maturity is the differentiator vs. pure-new-grad peers.
3. **Si me downlevelan:** Already a new-grad role — accept entry framing, but negotiate on comp band given 4 yrs of production experience and ask about growth path within the Capabilities org.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| New-grad SWE base, SF | ~$201k avg ($169k–$246k IQR) | Glassdoor 2026 |
| Junior MLE, SF | ~$172k–$270k IQR | Glassdoor 2026 |
| AI-startup avg (SF Bay) | ~$144k–$155k base | Wellfound 2026 |
| Comp disclosed in JD | No | Ashby JD |
| Demand trend | High — RL-environment / RLVR talent is a current bottleneck named explicitly in the JD ("present bottleneck is the lack of high-quality RL training environments") | JD + market |

No comp in JD; for a stealth/early startup expect base toward the AI-startup band ($150k–$190k) plus meaningful equity. Clarify equity %, cash band, and on-site expectation early.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "production GenAI/LLM for banking/regulated" | Lead with "ML engineer who builds learnable eval/reward signals and ships research-grade experiments into production" | Mirror JD's research+engineering blend |
| 2 | Skills order | GenAI/LLM first | Surface PyTorch, fine-tuning (QLoRA/PEFT), RAGAS/BERTScore eval, model optimization to top | JD names Python/PyTorch + experiments/evals |
| 3 | Experience bullets | Agentic + RAG first | Reorder to lead with Qwen3 QLoRA-on-H100 + LLM eval framework + content-safety reward shaping | Closest analogs to RL-environment/reward work |
| 4 | Projects | MangaLens/career-ops first | Promote Story Director LLM (fine-tune + automated pipeline) and the IEEE privacy-ML paper | Signals research-to-code translation |
| 5 | Footer | — | "US-based, F-1 OPT (work-authorized now), open to SF on-site" | SF on-site role; pre-empt location question |

**Top 5 LinkedIn:** (1) headline → "Applied ML Engineer · RL-adjacent eval & reward signals"; (2) feature the IEEE paper; (3) pin Qwen3/H100 fine-tuning post; (4) add "Reinforcement Learning (learning)" to skills honestly; (5) add MS CS 2025 prominently for the new-grad screen.

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Design learnable signals / reward functions | Vanguard content-safety controls | Unsafe LLM outputs on internal platform | Reduce unsafe outputs without quality loss | Built safeguards + content controls, tuned signals | −42% unsafe outputs, quality held | Reward shaping is signal design — clean signals beat heavy rules |
| 2 | Run experiments & evaluations | LLM eval framework @ Progress | No way to catch regressions pre-deploy | Benchmark model iterations | RAGAS/BERTScore + custom domain metrics + dashboards | Surfaced regressions before release | Eval rigor is the multiplier; define the metric before the model |
| 3 | Translate papers → code | Qwen3-27B QLoRA on H100 | Needed controllable long-form generation | Fine-tune under tight compute | 4-bit QLoRA, 361-example curated set, 6-stage schema | Controllable generation achieved | Reading the PEFT papers → working H100 run is the exact loop the role wants |
| 4 | ML fundamentals + research rigor | Privacy-preserving clinical ML | Re-identification risk vs. utility | Quantify privacy–utility tradeoff | k-anonymity/l-diversity/DP across 4 ε levels; composite scoring | Risk 3.38%→0.32%, kept 99% perf; IEEE paper | Framed as an optimization problem — same mindset as reward design |
| 5 | End-to-end ownership, small team | Agentic orchestration @ Progress | Token cost ballooning on multi-step tasks | Cut cost, hold accuracy | Conductor–subagent framework, context-scoped | −42% tokens, accuracy sustained | Owning a system end-to-end taught me to design for the signal, not the demo |
| 6 | Inference/training infra expertise | Latency/cost optimization @ Vanguard/Progress | p95 too high, cost too high | Hit SLA cheaper | Prompt compression, semantic caching, model routing | p95 1.5s→800ms | Infra intuition transfers directly to training-run throughput expectations |

**Case study recomendado:** Story Director LLM (fine-tuned model + automated rendering pipeline) — shows the research→engineering→production arc the role blends.
**Red-flag Qs:** "Why no direct RL experience?" → "I've built the adjacent pieces — reward shaping, eval signals, fine-tuning on H100 — and I close gaps fast; here's a small RL-environment harness I built to prep." "Why a new-grad role with 4 yrs?" → "I want the frontier-capability problem space; titles don't matter, the bottleneck does."

## G) Posting Legitimacy

**Assessment:** Proceed with Caution

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live Ashby posting; ApiJobPosting returned active JSON 2026-06-15 | Positive |
| Description quality | Specific: RL environments, RLVR, reward functions, PyTorch/JAX, named org ("Capabilities"), clear 6–12mo scope | Positive |
| Founder credibility | "Founding team previously on Anthropic's data team" — plausible, verifiable in interview | Positive |
| Comp transparency | No salary disclosed | Concerning |
| Company footprint | Minimal public/funding footprint (stealth/early); could not corroborate funding via WebSearch | Concerning |
| Reposting | Not previously seen in scan-history (first appearance) | Neutral |
| Role market context | RL-environment talent is a real current bottleneck — role makes sense for the business | Positive |

**Context Notes:** Early/stealth startups legitimately have thin public footprints and undefined comp. The JD is detailed and technically specific, which weighs against a ghost-job read. Verify entity, funding runway, and equity/cash split before investing heavily.

## H) Draft Application Answers

(Score 3.5/5 < 4.5 — full draft answers skipped. Tailored PDF generated; use Block E/F to customize the application if proceeding.)

---

## Keywords extraídas

reinforcement learning, RL environments, RLVR, reward functions, reward modeling, machine learning engineer, frontier models, Python, PyTorch, JAX, fine-tuning, experiments, evaluations, ML research, inference infrastructure, training runs, new graduate, LLM, data layer, end-to-end ownership
