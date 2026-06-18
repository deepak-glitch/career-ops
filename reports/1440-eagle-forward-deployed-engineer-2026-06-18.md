# Evaluación: Eagle — Forward Deployed Engineer

**Fecha:** 2026-06-18
**Arquetipo:** AI Solutions / Forward Deployed Engineer
**Score:** 3.5/5
**URL:** https://jobs.ashbyhq.com/eagle/ddd07f46-a42a-4709-8e19-091d5145a9e7
**Legitimacy:** High Confidence
**Location:** New York City — In-person office + travel ("willing to get on a plane")
**Region:** US
**PDF:** output/2026-06-18/cv-deepak-mallampati-eagle-2026-06-18.pdf

---

## A) Resumen del Rol

| Field | Value |
|-------|-------|
| Arquetipo | Forward Deployed Engineer (primary) |
| Domain | Applied AI for AEC (civil / structural / MEP engineering firms), infra / energy / climate |
| Function | Embed with acquired firms + discover workflows + build + deploy in prod + compound into platform |
| Seniority | Mid IC ("tip of the spear", owns outcomes; no years stated) |
| Remote | In-person NYC office + travel to acquired firms |
| Team size | Early team, direct collaboration with CTO |

**TL;DR:** Eagle (Lightspeed-backed) acquires civil/structural/MEP engineering firms and arms them with applied AI. The FDE embeds on-site with engineers who've never worked with a software company, finds the highest-leverage workflows, and ships bespoke tools in weeks — then feeds lessons back into a compounding platform. Strong FDE/automation match for Deepak; AEC domain is new but the role explicitly values LLMs, agent frameworks, RAG, browser automation, and doc parsing — all directly in his wheelhouse. In-person NYC + travel is the main friction.

## B) Match con CV

| JD requirement | CV proof |
|----------------|----------|
| LLMs / agent frameworks | cv.md L25 (conductor–subagent agentic orchestration, 42% token reduction), L12 (LangChain/LangGraph, multi-agent) |
| RAG | cv.md L26 (dense retrieval + cross-encoder re-ranking over healthcare corpora), L14 (FAISS/Pinecone/Weaviate, hybrid search) |
| Doc parsing | cv.md L26 (large-scale document corpora), Summary L8 (millions of regulatory documents, 92% precision) |
| Browser automation / scrapers | MangaLens (cv.md L65 — shipped Chrome extension across 29+ sites, inline DOM manipulation) — adjacent |
| Own outcomes end-to-end (discovery→build→deploy→debug in prod→iterate) | cv.md L28 (fault-tolerant automation infra, 60% failure reduction), L25-30 (full production lifecycle at Progress) |
| Ship fast & bespoke; "stand up off-the-shelf tool to test an idea" | career-ops project (cv.md L67 — autonomous overnight pipeline), MangaLens (0-to-1 shipped product) |
| Wire integrations to legacy software | cv.md L47-48 (12 APIs/microservices, integrated 25+ agents into production pipelines) — analog (legacy Windows-native AEC is new) |
| Earn trust with non-technical users on their turf | cv.md L48 (partnered across 20+ internal teams), L44 (platform serving many teams) |
| Distill noisy/conflicting feedback into a clear build opinion | cv.md L29 (LLM eval framework — turning fuzzy quality into metrics) |
| Low ego / high agency | Founder-of-projects pattern (career-ops, MangaLens) — ships independently |

**Gaps:**
1. **AEC domain (civil / structural / MEP engineering).** No direct exposure. *Mitigation:* Emerson operational/industrial data (cv.md L53) is the closest analog; lean on rapid-ramp track record and the role's explicit "deep curiosity for how things work" ask — frame domain learning as the job, not a prerequisite.
2. **Legacy Windows-native AEC software integrations.** Unfamiliar stack. *Mitigation:* generic API/integration + scraping experience (Vanguard APIs, MangaLens DOM automation) transfers; commit to fast ramp.
3. **In-person NYC + frequent travel ("get on a plane").** Lifestyle commitment; Deepak is Kent, OH. *Mitigation:* confirm relocation acceptable in screen; the role is US-based which fits F-1 OPT.
4. **F-1 OPT / sponsorship.** US in-person role works for OPT; long-term sponsorship must be confirmed (early-stage firm may be flexible).

## C) Nivel y Estrategia

**Detected level:** Mid IC FDE — no explicit years; weighted toward agency, curiosity, and end-to-end ownership over credentials.

**Plan "vender senior sin mentir":**
- Lead with Progress agentic orchestration (42% token cut sustaining accuracy) = the "ship production AI that works in the messy real world" pattern Eagle wants.
- Frame career-ops + MangaLens as proof of the FDE instinct: spot a workflow, build the bespoke tool, ship it end-to-end, iterate live.
- Frame Vanguard (12 APIs, 100k+ req/day, 20+ teams) as evidence of integrating into someone else's environment and earning cross-team trust.
- Position the privacy/eval work as "distilling fuzzy requirements into measurable build decisions".

**Plan "si me downlevelan":** Accept founding/associate FDE band if base ≥ $150K (bottom of stated range); negotiate equity scope and a 6-month review given the broad ownership.

## D) Comp y Demanda

| Source | Range |
|--------|-------|
| JD (disclosed) | $150K–$300K cash + founding equity + full healthcare |
| Levels.fyi (FDE mid-IC, NYC startup, 2026) | $150–210K base + equity |
| Palantir/Anthropic FDE comps (mid IC) | $180–230K base |
| Perspective AI 2026 FDE comp report | mid-IC FDE clustered ~$160–220K base |

Disclosed range is competitive and wide; equity scope is the real negotiation lever at this stage. FDE demand remains strong in 2026; AEC-vertical applied AI is a differentiated niche.

## E) Plan de Personalización

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "AI/ML Engineer with 4+ years…" | "Forward-deployed AI engineer who embeds with teams, finds the highest-leverage workflow, and ships bespoke tools — LLMs, agents, RAG, and automation — from zero to production in weeks." | Mirror Eagle's "tip of the spear, ship in weeks" framing. |
| 2 | Skills order | LLMs first | Lead with "agentic systems, RAG, browser/doc automation, fast 0-to-1 delivery; Python/FastAPI; integrations." | Match JD's explicit interest list. |
| 3 | Projects | Listed mid-CV | Promote career-ops + MangaLens to top: both are "spotted a workflow → shipped the tool end-to-end" stories | Direct FDE-instinct evidence. |
| 4 | Emerson bullet | "regression/classification on pipeline-storage data" | Reframe as industrial/operational-domain immersion (closest analog to AEC fieldwork) | Bridges the domain gap honestly. |
| 5 | Add line | — | "Comfortable embedding on-site, learning a new domain fast, and writing the scraper/integration the deployment needs." | Speaks to "do whatever the deployment needs". |

## F) Plan de Entrevistas

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Ship bespoke tool fast, end-to-end | career-ops pipeline | Repetitive overnight job search | Automate scan→score→apply | Built autonomous multi-step pipeline | Hours of manual work → unattended run | Build the thin slice that works first, then compound |
| 2 | Own outcome in prod, debug live | Progress agentic system | Brittle multi-step workflows | Reliable production agents | Conductor–subagent + retry/observability | 42% token cut, 60% fewer failed runs | Most prod failures are integration failures, not model failures |
| 3 | Browser automation / scrapers | MangaLens | Untranslated content locked by language | Real-time inline translation | Chrome ext + DOM automation across 29+ sites | Shipped, live on Web Store | Meeting users where they already work beats a new app |
| 4 | Earn trust with non-technical users | Vanguard cross-team delivery | 20+ internal teams, varied tech literacy | Power AI features daily | 12 APIs + safeguards, embedded with teams | 100k+ req/day, 27% task-success lift | Treat every stakeholder like a customer on their turf |
| 5 | Distill noisy feedback into a build | Progress eval framework | Fuzzy "is it good enough" debates | Make quality measurable | RAGAS/BERTScore + domain metrics | Regressions caught pre-release | A metric ends the argument and aims the work |
| 6 | Learn a new domain fast | Emerson industrial data | Unfamiliar pipeline-storage operations | Predict equipment failure | Learned domain, built feature pipelines | Model-ready pipelines shipped | Sit with the SMEs — domain context beats more tuning |

**Case study to present:** career-ops — the clearest "FDE in a box" proof (spotted a workflow, shipped a bespoke end-to-end tool, iterates autonomously).

**Red-flag questions:** "Are you OK relocating to NYC and traveling frequently?" → confirm yes if true. "Why AEC, you have no construction background?" → lean on curiosity + Emerson industrial analog + the role's own framing that domain learning is the job.

## G) Posting Legitimacy

**High Confidence.** Eagle is backed by Lightspeed Venture Partners with a clear, specific thesis (acquire AEC firms, arm them with applied AI). JD is detailed and concrete — named workflows, explicit tech interests (LLMs, agents, RAG, browser automation, doc parsing), disclosed comp range ($150–300K + equity), full healthcare, in-person NYC. Ashby GraphQL returns an active posting alongside a coherent set of roles (Civil Engineer, Design Engineer, MTS, ML Engineer, Staff SWE) consistent with the stated business. No reposting history in scan-history. Real, active opening.

| Signal | Finding | Weight |
|--------|---------|--------|
| Posting live (Ashby GraphQL active) | jobPosting returned, board coherent | Positive |
| Comp transparency | $150–300K + equity + healthcare disclosed | Positive |
| Tech specificity | LLMs, agents, RAG, browser automation, doc parsing | Positive |
| Funding / backing | Lightspeed-backed | Positive |
| Reposting | None found | Positive |
| Domain niche | AEC applied AI — legitimately specialized | Neutral |

## H) Recommendation

**Worth applying** if Deepak is open to relocating to NYC and traveling frequently. The FDE/automation/RAG/agent match is strong and the disclosed comp is healthy; the AEC domain is new but the role explicitly treats domain learning as the work and prizes exactly the tech Deepak ships. Lead with career-ops + MangaLens + Progress agentic work; confirm relocation and F-1 OPT/sponsorship in the recruiter screen.

---

## Keywords extraídas

Forward Deployed Engineer, applied AI, LLMs, agent frameworks, RAG, browser automation, doc parsing, end-to-end ownership, 0-to-1 deployment, customer-embedded, integrations, legacy software, scrapers, AEC, civil/structural/MEP, infrastructure, CTO collaboration, high agency, NYC in-person, founding equity
