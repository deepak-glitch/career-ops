# Bjak (A1) — Applied AI Engineer

**Fecha:** 2026-06-16
**Arquetipo:** Applied AI / LLM Engineer + Generative AI / RAG Engineer
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/bjakcareer/0ab4a37a-0779-4480-8d3a-bbaf093c2da8
**Legitimacy:** Proceed with Caution
**Location:** Israel — On-site (presumed; "A1" product team)
**Region:** Intl
**Verification:** unconfirmed (batch mode — Ashby GraphQL only)
**PDF:** output-intl/2026-06-16/cv-deepak-mallampati-bjak-applied-ai-engineer-2026-06-16.pdf

---

## Block A — Context & Fit

The posting (Ashby org `bjakcareer`, product branded "A1") is building a proactive AI smart assistant for everyday users — long-running workflows, persistent context, multi-step reasoning, and reliable real-world task completion despite non-deterministic model behavior. The **Applied AI Engineer** turns model capabilities into real product behavior: build/ship AI features end-to-end (model → system → UX), design prompts/tools/memory/agent workflows, turn raw outputs into structured/predictable behavior, debug across the full stack, optimize latency/cost/reliability, and build lightweight eval frameworks. Stack: **Python, PyTorch/JAX, LLMs (OpenAI-style, LLaMA, Qwen), vLLM, vector DB.**

On pure archetype this is one of the strongest matches in the batch — it maps almost line-for-line to Deepak's agentic + RAG + eval + inference-optimization profile, and even names **Qwen** (he fine-tuned Qwen3 via QLoRA) and vLLM/vector-DB serving. The decisive dampener is **location**: the role appears Israel-based/on-site, which for a US-based F-1 OPT candidate means relocation plus work-authorization complexity outside the US. Per policy this does not veto the score, but it materially caps practical fit — hence Intl track and a capped 3.3.

## Block B — Match con CV

| JD Hook | CV / Proof Point | Strength |
|---|---|---|
| Build/ship AI features end-to-end (model→system→UX) | Progress agentic LLM systems; MangaLens shipped end-to-end | Strong |
| Prompts, tools, memory, agent workflows | Progress conductor–subagent agentic orchestration (−42% tokens) | Strong |
| Structured, reliable, predictable model behavior | Vanguard safeguards/content controls (−42% unsafe); Progress eval framework | Strong |
| Optimize latency, cost, production reliability | Progress prompt compression + semantic caching + model routing; 60% fewer failed runs | Strong |
| Lightweight evaluation frameworks | Progress RAGAS/BERTScore eval + dashboards | Strong |
| PyTorch/JAX, fine-tuning, vLLM, vector DB | Qwen3 QLoRA fine-tune (H100); FAISS/Pinecone/Weaviate; PyTorch/TensorFlow | Strong |
| LLaMA / Qwen / OpenAI-style APIs | Qwen3 fine-tuning; GPT-4o/Claude/Gemini eval | Strong |
| Israel-based / on-site | US-based F-1 OPT — relocation + non-US authorization required | Gap (hard, location) |

**Gaps & mitigation:**
1. **Location / work authorization (Israel, non-US).** *Mitigation:* honest — US-based on F-1 OPT; would require relocation and Israeli work authorization. Only pursue if open to international relocation; otherwise deprioritize vs Remote-US options.
2. **JAX (vs PyTorch/TensorFlow).** *Mitigation:* nice-to-have; strong PyTorch + fine-tuning transfers readily.
3. **Consumer-assistant product domain (vs regulated enterprise).** *Mitigation:* agentic reliability + eval discipline transfers directly; frame regulated-domain rigor as an asset for "reliable despite non-deterministic models."

## Block C — North Star Alignment

3.3/5 — the archetype and tech stack are a near-perfect fit (agentic workflows, eval frameworks, inference optimization, Qwen/QLoRA, vLLM, vector DB), and the role is exactly the "make AI work in real-world usage, not demos" mandate Deepak has lived. The score is held down almost entirely by **location**: an Israel on-site role is a poor practical fit for a US-based F-1 OPT candidate without an explicit relocation appetite. If Deepak is open to international relocation, this is a high-fit apply; if not, it is a reference point for how well his profile maps to top Applied-AI roles.

## Block D — Compensation

No comp in JD; non-US market. Applied AI Engineer at a well-funded consumer-AI company in Israel typically runs **~₪400K–₪600K (≈$110K–$165K) + equity** for mid-level, though bands vary widely by funding stage. 2.5/5 confidence (no posted band, non-US market, currency conversion). If pursued, anchor on the agentic/eval/fine-tuning depth and clarify relocation support + authorization sponsorship.

## Block E — Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Applied AI generalist | Lead: "Applied-AI engineer who makes agents reliable in production — prompts, tools, memory, eval, inference optimization" | Mirror "make AI work in real-world usage" |
| 2 | Skills | Gen-AI scattered | Surface agentic workflows, PyTorch, QLoRA fine-tuning, vLLM, vector DB, eval frameworks first | Match named stack |
| 3 | Experience | Progress 1st | Foreground Progress agentic orchestration + eval; surface Qwen3 QLoRA fine-tuning | Direct stack hooks |
| 4 | Proof metrics | Scattered | Hero: −42% tokens (agent decomposition), eval framework, Qwen3 QLoRA on H100, 60% fewer failed runs | Agentic + fine-tune + reliability |
| 5 | Projects | MangaLens | Lead Story Director LLM (Qwen3 fine-tune) + MangaLens (shipped) | Fine-tuning + shipping evidence |
| 6 | Footer | Location | "US-based, F-1 OPT; open to international relocation (state explicitly if true)" | Be upfront on non-US authorization |

## Block F — Plan de Entrevistas

| # | JD Requirement | STAR+R Story | Reflection |
|---|----------------|-------------|------------|
| 1 | Agent workflows / tools / memory | Progress conductor–subagent orchestration → −42% tokens at equal accuracy | Decomposition beats monolithic prompts for long-running tasks |
| 2 | Reliable despite non-deterministic models | Progress eval framework (RAGAS/BERTScore) + monitoring catching regressions | Ship the eval harness before scaling the agent |
| 3 | Fine-tuning / PyTorch | Qwen3-27B QLoRA on H100 with structured narrative schema | 4-bit QLoRA makes large-model fine-tuning tractable on a single GPU |
| 4 | Latency / cost / reliability | Progress prompt compression + semantic caching + model routing; 60% fewer failed runs | Reliability and cost are engineering problems, not model problems |
| 5 | End-to-end shipping | MangaLens shipped to Chrome Web Store across 29+ sites | Real-world usage surfaces what demos hide |

**Case study to present:** Progress agentic orchestration + eval framework as the "reliable agents in production" flagship; Story Director LLM (Qwen3 QLoRA) as the fine-tuning story.

**Red-flag Qs:** "Authorization / relocation?" → US-based OPT; open to relocation (if true) — would need Israeli authorization. "JAX?" → strong PyTorch + fine-tuning, JAX ramp-up fast. "Consumer vs enterprise?" → regulated-domain reliability rigor is an asset for non-deterministic agents.

## Block G — Posting Legitimacy

**Tier: Proceed with Caution.**

| Signal | Finding | Weight |
|--------|---------|--------|
| Description quality | Detailed, specific stack and outcomes; clear role scope | Positive |
| Apply state | Live Ashby posting (GraphQL returns full record), FullTime | Positive |
| Location / branding | Ashby org `bjakcareer` but product branded "A1"; location "Israel" — mild org/brand mismatch | Concerning |
| Comp transparency | No band posted | Neutral |
| Reposting | Not seen previously in scan-history/applications | Neutral |
| Work authorization | Non-US (Israel) — relocation + authorization complexity for F-1 OPT | Concerning |

**Context Notes:** The `bjakcareer` org / "A1" product naming mismatch and the absence of a confirmed location warrant verifying the exact entity and on-site/remote policy with the recruiter before investing. Bjak is a known Southeast-Asia insurtech; "A1" may be a new product line — confirm.

## H) Draft Application Answers

Not generated (score 3.3 < 4.5 threshold).

## Keywords extraídas

Applied AI Engineer, agent workflows, prompts, tools, memory, structured outputs, LLM, PyTorch, JAX, fine-tuning, QLoRA, Qwen, LLaMA, vLLM, vector database, evaluation frameworks, latency optimization, cost optimization, production reliability, multi-step reasoning
