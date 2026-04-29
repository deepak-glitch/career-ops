# Gradial — Applied AI Engineer

**Fecha:** 2026-04-29
**Arquetipo:** Applied AI / LLM Engineer (agentic systems + RL evaluation)
**Score:** 3.7/5
**URL:** https://job-boards.greenhouse.io/gradial/jobs/4209576009
**Legitimacy:** High Confidence
**Location:** Seattle, WA — On-site (verify hybrid in screening)
**PDF:** output/2026-04-29/cv-deepak-mallampati-gradial-applied-ai-2026-04-29.pdf

---

## Block A — Job Snapshot

- **Company:** Gradial — AI-native content operations for marketers/creatives; backed by leading investors.
- **Title:** Applied AI Engineer
- **Location:** Seattle, WA (US — F-1 OPT compatible if relocation supported; verify in screening)
- **Experience:** **4+ yrs SWE + 1+ yr AI/ML applications** (slight stretch; 2.5 yrs total but with depth-per-year)
- **Comp:** $130,000 - $220,000 + equity + bonus + comprehensive benefits
- **Stack:** OpenAI, Anthropic APIs, agentic architectures, prompt engineering, browser automation, code execution, API orchestration, evaluation strategies (SWE-bench-style), RL/data-centric AI (nice-to-have).
- **Posting:** Updated 2026-04-06 (~3 weeks).

## Block B — CV Match

| Criterion | Match | Evidence |
|-----------|-------|----------|
| Agentic architectures | Direct hit | 5-stage agentic claims pipeline + healthcare agentic workflows (cv.md L26, L71) |
| OpenAI / Anthropic APIs | Direct | Manga Lens — Claude Sonnet, GPT-4o, GPT-4.1 Nano (cv.md L60) |
| Prompt engineering | Strong | Structured outputs + grounding + tool discipline (cv.md L13, L26) |
| LLMs in production | Direct | Healthcare RAG + Manga Lens shipped to Chrome Web Store (cv.md L25, L60) |
| Browser automation | Decent | Manga Lens content scripts + captureVisibleTab; Playwright in skills (cv.md L60) |
| API orchestration | Strong | Multi-provider abstraction (4 providers) + FastAPI services (cv.md L28, L60) |
| Eval pipelines | Strong | Eval audit trails + retrieval precision metrics (cv.md L25) |
| Reinforcement learning | Soft | XGBoost + scikit-learn + class weighting; not formal RL (cv.md L13, L27) |
| Code execution / sandbox | Soft | Docker sandboxed inference; not RL-style code agents |
| 4+ yrs SWE | Slight gap | 2.5 yrs total; depth-per-year strong (6 production AI systems) |

**Gaps:** Formal RL (mitigated by ML pipeline depth + class weighting); 1.5-yr SWE gap (mitigated by depth + Manga Lens shipped solo).

## Block C — Level y Strategy

Detected: Mid (4+ yrs SWE + 1+ yr AI/ML). Candidate's natural level: mid (2.5 yrs but high depth-per-year). Sell: "Six production AI systems shipped end-to-end with measurable outcomes — depth-per-year ratio is strong even with total years below median ask." Downlevel plan: accept if comp ≥$140K base; ask for promotion review at 9 months.

## Block D — Comp y Demanda

$130-220K + equity + bonus is competitive for Seattle Applied AI mid-band. Demand for agentic AI engineers with browser/API automation experience is high in 2026 (content automation, GTM, marketing AI sectors).

## Block E — Personalization

| # | Section | Change | Why |
|---|---------|--------|-----|
| 1 | Summary | Lead with "Applied AI engineer building agentic systems" + "browsers, codebases, APIs orchestration" + "production LLM ownership" | Mirrors JD core ask |
| 2 | Bullets | Reorder Progress Solutions: agentic LLM workflows first, RAG second, ML pipelines third | JD priority |
| 3 | Projects | Lead with Manga Lens (browser automation, multi-provider, shipped) + Agentic Claims (multi-agent + schema contracts) | Direct fit |
| 4 | Skills | Surface "agentic architectures, OpenAI/Anthropic, prompt engineering, browser automation, eval pipelines, API orchestration" | ATS keywords |
| 5 | Cover letter | Connect Manga Lens browser automation + Agentic Claims pipeline to Gradial's "agents that interact with browsers, codebases, APIs" | Direct mapping |

## Block F — Interview Plan (STAR+R)

| # | JD Hook | STAR+R Story |
|---|---------|--------------|
| 1 | "Autonomous agents interact with browsers, codebases, APIs" | **S:** Manga readers needed real-time translation across viewport-size manga panels. **T:** Browser-based AI agent for capture + translation. **A:** Manifest V3 service worker, content scripts, captureVisibleTab with viewport-slice screenshots, coordinate remapping, dedup. **R:** Shipped Chrome Web Store with 29 site configs. **Reflection:** Browser automation for AI is 50% browser quirks, 50% AI orchestration; the abstraction must respect both. |
| 2 | "Evaluate model behavior in live environments" | **S:** Healthcare RAG retrieval was hard to measure. **T:** Eval pipeline with measurable precision. **A:** Recursive semantic chunking + embeddings + grounding-rule eval. **R:** ~35% precision, >90% grounded alignment. **Reflection:** Eval-first design is the unlock; defining the metric before chunking strategy made the system coherent. |
| 3 | "Apply RL to end-to-end agent systems" | **S:** Patient no-show predictor failed on minority high-risk classes. **T:** Recall-prioritized model. **A:** Class weighting + stratified sampling + threshold calibration on XGBoost. **R:** +15-20% recall, >90% precision held. **Reflection:** Reward shaping on predictive ML is the same intuition as RL reward design — even if formal RL is the next step. |
| 4 | "Modular frameworks for tools, memory, evaluators" | **S:** Healthcare claims agentic pipeline had cascading hallucinations. **T:** Stable multi-agent architecture. **A:** Schema-validated JSON contracts between agents + RAG-grounded validation + audit-ready risk scoring. **R:** Production-grade explainable pipeline. **Reflection:** Agent modularity = (1) schema contracts, (2) tool discipline, (3) grounded retrieval. The contracts are the foundation. |
| 5 | "Data pipelines for SFT and RL training" | **S:** EHR datasets had ~40% downstream model instability. **T:** Reliable pipeline. **A:** Pandas/NumPy preprocessing + dataset versioning + reliability metrics. **R:** >98% reliability, -40% instability. **Reflection:** RL/SFT data prep is the same discipline as supervised ML data prep — it just compounds errors faster. |
| 6 | "Customer + stakeholder alignment for AI behavior" | **S:** Suvidha non-technical staff couldn't use raw Q&A APIs. **T:** Accessible interface. **A:** Flask Q&A API + lightweight web UI; matched user mental models. **R:** Adopted by non-technical staff for daily review. **Reflection:** AI-behavior alignment with users is 50% UX, 50% retrieval quality. |

**Case study:** Lead with Manga Lens (browser automation + multi-provider AI + shipped) — strongest evidence of "agents that interact with browsers" archetype.

## Block G — Posting Legitimacy

| Signal | Observation | Weight |
|--------|-------------|--------|
| Posting age | Updated 2026-04-06 (~3 weeks) | Positive |
| Apply button | Live (Greenhouse API responsive) | Positive |
| Tech specificity | High — agentic, browser/code/API, RL, SWE-bench, OpenAI/Anthropic | Positive |
| Realistic requirements | Yes — 4+ yrs SWE + 1+ AI/ML + agentic = mid-senior | Positive |
| Salary transparency | Yes ($130-220K) | Positive |
| Reposting pattern | First listing of this slug | Positive |

**Tier:** High Confidence — fresh, specific, realistic, transparent comp, real venture-backed company.

## Block H — Draft Application Answers

**"Why Gradial?"** Manga Lens is the closest analog to Gradial's "agents that interact with browsers" — I shipped a Manifest V3 Chrome extension solo with 4 AI vision providers, viewport-slice capture, and coordinate remapping. The same browser-automation + multi-provider AI discipline that makes Manga Lens work is what makes content-ops agents work for Gradial's customers.

**"Agentic system experience?"** Built a 5-stage multi-agent healthcare claims pipeline with schema-validated JSON contracts between agents to prevent cascading hallucinations. Reduced hallucinations >30%, improved response stability ~25%. RAG-grounded CPT/ICD validation with explainable risk scoring.

**"Sponsorship?"** F-1 OPT, US-based; need H1B sponsorship long-term. Open to Seattle relocation.

## Keywords

Applied AI Engineer, agentic architectures, browser automation, code execution, API orchestration, OpenAI, Anthropic, prompt engineering, RAG, evaluation pipelines, RL, data-centric AI, SWE-bench, agent libraries, agent memory, agent tools, modular frameworks, content operations.
