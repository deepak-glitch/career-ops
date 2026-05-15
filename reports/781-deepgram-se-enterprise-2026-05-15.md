# Evaluation: Deepgram — Solutions Engineer, Enterprise

**Fecha:** 2026-05-15
**Arquetipo:** AI Solutions / Forward Deployed Engineer (enterprise post-sales adjacent)
**Score:** 3.3/5
**URL:** https://jobs.ashbyhq.com/deepgram/6ab5816d-bbe1-4383-bb53-675e9f641528
**Legitimacy:** High Confidence
**Location:** San Francisco, CA
**Region:** US
**PDF:** output/2026-05-15/cv-deepak-mallampati-deepgram-se-enterprise-2026-05-15.pdf
**Verification:** unconfirmed (batch mode)

---

## A — Role Summary

| Field | Detail |
|-------|--------|
| Archetype | AI Solutions / Forward Deployed Engineer (enterprise SE with post-sales scope) |
| Domain | Voice AI / Speech-to-Text API Platform |
| Function | Enterprise customer lifecycle: pre-sales demos, integration support, POC builds, post-sales expansion ownership |
| Seniority | Mid–Senior (3–5 years typical for Enterprise SE) |
| Remote | San Francisco, CA (SF-based) |
| TL;DR | Enterprise-tier SE at Deepgram; owns full technical customer lifecycle including post-sales — more technical and delivery-oriented than the Pre-Sales SE (#774) |

Deepgram is a Series C ($85M+) speech-to-text and voice AI API platform used by enterprises to transcribe, analyze, and act on voice data in real time. The Enterprise Solutions Engineer owns the full technical customer lifecycle for enterprise accounts: pre-sales technical validation, POC builds, integration support, and post-sales expansion. Unlike the Pre-Sales SE role (#774, evaluated same date), this Enterprise SE role includes significant post-sales ownership — making it closer to a hybrid FDE/SE function. Stack: Python, REST APIs, websockets, voice AI / ASR, SDK integration. Comp: estimated $130k–$175k for an Enterprise SE at Deepgram's scale and location.

**Sister role note:** Deepgram Pre-Sales SE (#774, 2026-05-15) scored 3.3/5. This Enterprise SE earns the same score — stronger technical delivery scope (post-sales included) is offset by the SF location requirement and enterprise-level seniority expectations.

---

## B — CV Match & Gaps

**Strong matches:**
- Python and REST API integration: core to Deepgram's SDK and integration work; directly documented in Deepak's project portfolio
- LLM/AI integration experience: RAG pipelines, LangChain, LlamaIndex — relevant to Deepgram's AI-layer product features
- POC building: Healthcare RAG system, Dream Decoder, Manga Lens all demonstrate end-to-end AI POC delivery
- FastAPI and Docker: production packaging gives enterprise integration credibility
- ~35% RAG precision improvement: concrete metric demonstrating measurable AI delivery outcomes — directly relevant to enterprise customer conversations
- >30% hallucination reduction: enterprise voice AI buyers need reliability guarantees; Deepak's hallucination control work is a real differentiator
- Agentic workflow experience: directly relevant to Deepgram's voice agent and automation use cases

**Hard gaps:**
- Voice AI / ASR / speech processing: no documented experience with speech-to-text, voice AI, websocket audio streaming, or real-time transcription systems
- Enterprise SE track record: no documented enterprise account ownership, expansion revenue management, or post-sales customer success delivery
- 3–5 years for Enterprise SE: Deepak at 2.5 years is slightly below the typical floor; seniority expectations at enterprise-tier accounts are higher
- San Francisco location: Deepak is based in Kent, OH — relocation required; friction point for a role that typically involves in-person customer engagement
- Websockets / real-time streaming: likely required for Deepgram API integrations; not explicitly documented in Deepak's stack
- Enterprise account expansion: upsell, cross-sell, and expansion ownership are post-sales SE responsibilities with no documented precedent in Deepak's background

---

## C — Level Strategy

APPLY. The technical fit is genuine — Deepgram's core integration work (Python, REST/SDK, LLM-layer features, POC delivery) maps well to Deepak's documented stack. The post-sales ownership in this Enterprise SE role makes it more technical and delivery-oriented than a pure pre-sales SE, which is a better archetype alignment for Deepak.

Two caveats apply: (1) Voice AI domain — Deepak has no speech AI experience; this must be framed as an adjacent ramp with strong transferable AI integration skills rather than a domain expertise claim; (2) SF location — relocation willingness should be stated explicitly in the application.

The seniority gap is present (2.5 years vs. 3–5 year typical bar) but is not as severe as in senior-only roles. At Series C scale, Deepgram likely has headcount pressure to fill technical roles with strong candidates even slightly below the stated bar. Deepak's production RAG metrics provide concrete differentiation over more senior candidates with softer AI backgrounds.

F-1 OPT status should be confirmed against Deepgram's sponsorship policy before investing heavily in the application cycle.

---

## D — Comp Research

Estimated $130k–$175k base for an Enterprise Solutions Engineer at Deepgram (Series C, $85M+ raised, SF-based). This estimate is informed by: (1) Deepgram's Pre-Sales SE posting at $165k–$220k (confirmed in #774); (2) typical Enterprise SE discount vs. Senior Pre-Sales SE at the same company; (3) SF cost-of-living adjustment built into SF-based comp bands. The lower end ($130k) is above Deepak's target ceiling ($130k), but SF cost-of-living absorbs the premium — effective purchasing power may be equivalent to $100k–$110k in Kent, OH. Negotiation toward $140k–$150k base is realistic if Deepak's production metrics create differentiation at offer stage.

---

## E — Personalization Plan

- Summary: "Applied AI engineer with production LLM/RAG delivery experience and strong API integration depth — looking to bring measurable AI implementation outcomes to Deepgram's enterprise customer success function."
- Lead with: Python/REST API integration, POC delivery (healthcare RAG, Dream Decoder multi-API orchestration), production reliability metrics (~35% precision improvement, >30% hallucination reduction, ~30% fewer post-deploy defects)
- Frame voice AI gap positively: "Excited to apply AI integration experience to the voice AI domain — Deepgram's API-first architecture is a natural extension of the LLM integration work I've built."
- Highlight: Dream Decoder multi-provider AI orchestration as proof of cross-domain AI integration ability
- Highlight: Docker/FastAPI containerization for enterprise deployment credibility
- Differentiate from generic SE candidates: Deepak builds AI systems in production — not just demos; the hallucination reduction and post-deploy defect metrics are rare for an SE-level candidate
- Disclose: SF relocation openness; F-1 OPT with sponsorship expectation
- Note sister role: If applying to both this Enterprise SE and #774 (Pre-Sales SE), tailor this application toward post-sales delivery and technical depth; tailor #774 toward pre-sales discovery and deal cycle

---

## F — Interview Prep (STAR+R)

**S1: End-to-End AI System Delivery with Enterprise-Grade Reliability**
Situation: Healthcare organization needed a production RAG system that could surface accurate clinical information with measurable reliability guarantees.
Task: Design, build, and deploy a full RAG pipeline with precision and hallucination controls sufficient for a regulated-adjacent use case.
Action: Built LangChain/LlamaIndex retrieval pipeline with embedding-based chunking, implemented hallucination scoring layer, containerized via Docker with FastAPI service, deployed with monitoring.
Result: ~35% RAG precision improvement; >30% hallucination reduction; ~30% fewer post-deploy defects; system successfully promoted to production.
Retrospective: Would integrate real-time confidence visibility for end users to enable human-in-the-loop validation earlier in the workflow.

**S2: Multi-Provider API Orchestration for Production Reliability**
Situation: Dream Decoder project required integrating multiple AI provider APIs (inconsistent payloads, different rate limits, varying latency) into a unified user experience.
Task: Build a production-quality orchestration layer that insulated end users from provider inconsistency.
Action: Designed intermediate transformation layers, provider-specific payload normalization, exponential backoff retry logic, and a fallback chain across providers.
Result: ~30% improved contextual alignment; ~25–30% first-pass success rate improvement; system remained stable during provider outages.
Retrospective: Would define a formal provider interface abstraction from day one — mid-project refactoring to accommodate a new provider added unnecessary complexity.

---

## G — Posting Legitimacy

**Tier: High Confidence**

- Deepgram is a verified Series C company ($85M+ raised) with documented enterprise customers and a publicly known product — not a ghost company or shell employer
- Ashby is Deepgram's primary ATS; the URL structure (jobs.ashbyhq.com/deepgram/) is consistent with active, company-controlled listings
- The simultaneous posting of both a Pre-Sales SE (#774) and an Enterprise SE (this role) is consistent with a company at Series C scale expanding a tiered SE organization; both postings are structurally coherent as a pair
