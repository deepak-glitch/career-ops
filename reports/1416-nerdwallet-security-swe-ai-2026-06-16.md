# NerdWallet — Security Software Engineer, AI & Automation (Canada)

**Fecha:** 2026-06-16
**Arquetipo:** Applied AI / LLM Engineer (Security domain — multi-agent + RAG)
**Score:** 3.6/5
**URL:** https://jobs.ashbyhq.com/nerdwallet/dd822a9a-2beb-4594-bdac-a0a77b040661
**Legitimacy:** High Confidence
**Location:** Remote — Canada (non-Quebec)
**Region:** Intl
**Verification:** unconfirmed (batch mode — Ashby GraphQL only)
**PDF:** output-intl/2026-06-16/cv-deepak-mallampati-nerdwallet-security-swe-ai-2026-06-16.pdf

---

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo | Applied AI Engineer (security flavor) — multi-agent LLM, RAG, automation |
| Domain | Consumer fintech (NerdWallet) — Security & AI Engineering org |
| Function | Build AI-powered security tooling: threat modeling, vuln analysis, code review |
| Seniority | 3+ yrs SWE / Security Eng; "technical lead on high-priority initiatives" |
| Remote | 100% Remote — anywhere in Canada (except Quebec) |
| Comp | **CA$123K – CA$188K** + benefits + RRSP 4% match |
| Team | Engineering (Security org, reports to AI Security Manager) |

**TL;DR:** NerdWallet hiring a Security SWE with a deep AI/automation tilt — build multi-agent LLM systems for threat modeling, RAG pipelines across code & docs, automated code review, secure SSDLC tooling. Strong stack match to Deepak's CV (LangGraph, RAG, multi-agent, security-aware AI). CA$123-188K is fair Canadian mid-band. Canada-only remote → relocation/auth flag for US-based F-1 OPT but not an explicit no-sponsorship.

## B) Match con CV

| JD Requirement | CV / Proof Point | Strength |
|---|---|---|
| 3+ yrs SWE or Security Eng | Progress + Vanguard + Emerson + Suvidha ≈ 4 yrs | Strong |
| Python or Go (production) | Progress + Vanguard production Python | Strong (Python) |
| Multi-agent LLM + routing logic | Progress conductor-subagent orchestration (production, −42% tokens) | Strong |
| RAG over code/docs + semantic search | Progress healthcare RAG + cross-encoder rerank + semantic caching | Strong |
| LLM API integration (Anthropic/OpenAI) | Vanguard GPT-4o/Claude/Gemini eval; Progress orchestration | Strong |
| AI-specific security (prompt injection, secrets, supply chain) | Vanguard: "safeguards and content controls … reduced unsafe outputs by 42%"; CV: prompt-injection mitigation | Strong |
| Backend services (REST APIs, authn/authz, rate limiting, observability) | Vanguard 12 APIs, p95 1.5s→800ms, 100K+ req/day | Strong |
| App security concepts (OWASP-style, threat modeling, SSDLC) | CV: SOC 2, PCI DSS, HIPAA, OAuth, RBAC, audit logging, zero-trust | Adequate (concepts, not formal sec-eng tenure) |
| Distributed systems / K8s / cloud (AWS) | CV: AWS Lambda/Bedrock/SageMaker, Docker, Kubernetes, Terraform | Strong |
| Redis caching / TTLs / invalidation | CV: Redis, semantic caching | Strong |

**Gaps & mitigation:**
1. **No formal Security Engineer tenure.** Deepak is AI Engineer who's done security-adjacent work (PII masking, prompt-injection, audit logging) — not a dedicated SecEng past. *Mitigation:* lead with Vanguard "safeguards reducing unsafe outputs by 42%" + CV security stack (HIPAA/SOC2/PCI). JD explicitly says "software engineering OR security engineering" — software side fits.
2. **Canada-only remote + Deepak US F-1 OPT.** *Mitigation:* JD doesn't state no-sponsorship; NerdWallet has Canadian entity (NerdWallet Canada). Worth a screen to clarify work-auth path.
3. **"Technical lead on high-priority initiatives".** Senior-flavored expectation. *Mitigation:* Progress agentic systems are production lead-ish ownership; pitch as IC-lead pattern.

## C) Nivel y Estrategia

**Nivel detectado:** Mid-to-Senior IC (3+ yrs floor, "tech lead" expectation). Deepak fits the mid-to-strong-mid band.

**Plan "sell at mid":** Lead with the multi-agent + RAG production proof (Progress) and the "AI safety" angle (Vanguard 42% unsafe-output reduction). Frame security-engineering as adjacent territory Deepak ramps into via shared primitives (OWASP, threat modeling, audit logging).

**Plan "if asked about Security tenure":** Honest: not a dedicated SecEng, but built AI safeguards in production banking/healthcare regulated contexts. Offer to demonstrate threat-modeling for an LLM stack on the spot.

## D) Comp y Demanda

Band disclosed: **CA$123K–$188K**. Mid-band ≈ CA$155K ≈ USD $115K. Fair Canadian comp; below US-equivalent SecEng ($180-260K USD). Demand for "AI Security Engineer" is rising fast (prompt-injection era); strong applicant flow expected. Realistic landing for Deepak: low-to-mid of band (CA$130-160K).

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI Engineer … banking/regulated" | "Applied AI Engineer who builds production multi-agent LLM systems with security-first guardrails (prompt-injection mitigation, PII masking, audit logging)" | Mirror JD security flavor |
| 2 | Skills | LLM/ML first | Lead with "Multi-agent LLM, RAG over code/docs, prompt-injection mitigation, secure SDLC (HIPAA/SOC 2/PCI)"; backend second | Match JD top reqs |
| 3 | Experience | Progress agentic | Lead bullet: "production conductor-subagent w/ −42% tokens AND security guardrails (prompt-injection mitigation, PII redaction)" | Bridge AI + Security |
| 4 | Experience | Vanguard 42% unsafe-output reduction | Elevate as headline bullet — direct match to "AI application security" JD bullet | Exact JD-bullet match |
| 5 | Skills | PCI/HIPAA listed | Surface "SSDLC, threat modeling, OAuth/JWT/RBAC, zero-trust" as a security-skills line | Match SSDLC ask |
| 6 | Footer | Kent, OH | "Kent, OH, USA — F-1 OPT; open to Canada-remote w/ sponsorship discussion" | Honest location signal |

## F) Plan de Entrevistas

| # | JD Requirement | STAR+R Story | Reflection |
|---|----------------|-------------|------------|
| 1 | Multi-agent LLM + routing | Progress conductor-subagent (production, −42% tokens, sustained accuracy) | Decomposition + routing IS the leverage |
| 2 | AI application security (prompt injection, data exposure) | Vanguard: safeguards + content controls reducing unsafe outputs 42% in banking context | Safety-by-design is non-negotiable in regulated AI |
| 3 | RAG over large code/doc repos | Progress healthcare RAG w/ cross-encoder rerank | Retrieval quality is what makes RAG real, not the LLM call |
| 4 | Backend reliability (rate limits, observability) | Vanguard 12 APIs / p95 1.5s→800ms / 100K+ req/day | Production AI dies on latency budgets, not model quality |
| 5 | SSDLC + threat modeling | CV: HIPAA + SOC2 + PCI DSS exposure, audit logging, OAuth/JWT/RBAC | Compliance discipline is the muscle, not a checklist |

**Case study:** career-ops as an example of "production AI workflow with adversarial verification (cleanup-bang-rows + cleanup-low-scores as security/quality gates)."

**Red-flag Qs:** "Have you done formal threat modeling?" → Worked adjacent: prompt-injection threat models for Vanguard safeguards. "Can you work in Canada?" → US-based F-1 OPT; willing to discuss timeline / NerdWallet Canada entity.

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Finding | Weight |
|--------|---------|--------|
| Description quality | Very detailed (named projects, specific frameworks) | Positive |
| Comp transparency | Full band disclosed (CA$123-188K) | Positive |
| Apply state | Live on Ashby with full JD | Positive |
| Company specificity | NerdWallet — public-listed US fintech with established Canadian entity | Positive |
| Benefits transparency | RRSP 4% match, healthcare stipend, sabbatical, etc. | Positive |
| Reposting | Single live posting | Positive |
| Posting age | Within scan window | Positive |

**Context note:** The combination of explicit comp + named AI/security projects + reporting line (AI Security Manager) makes this a high-quality posting. Work-auth is the only open item for Deepak.

## H) Draft Application Answers

Not generated (score 3.6 < 4.5 threshold). If proceeding, lead with Vanguard 42%-unsafe-output-reduction + Progress multi-agent as the two anchor stories; flag work-auth question early.

## Keywords extraídas

Security Software Engineer, AI Security, multi-agent LLM, RAG, semantic search, prompt injection, threat modeling, SSDLC, Python, Go, REST APIs, observability, AWS, Kubernetes, Redis, semantic caching, OWASP, OAuth, RBAC, Remote Canada, NerdWallet
