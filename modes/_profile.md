# User Profile Context -- career-ops

<!-- ============================================================
     THIS FILE IS YOURS. It will NEVER be auto-updated.
     
     Customize everything here: your archetypes, narrative,
     proof points, negotiation scripts, location policy.
     
     The system reads _shared.md (updatable) first, then this
     file (your overrides). Your customizations always win.
     ============================================================ -->

## Your Target Roles

| Archetype | Thematic axes | What they buy |
|-----------|---------------|---------------|
| **Applied AI / LLM Engineer** | RAG, agentic workflows, structured outputs, evals | Someone who ships reliable LLM features in regulated domains |
| **Generative AI / RAG Engineer** | Retrieval precision, grounding, embeddings, vector search | Someone who builds grounded GenAI with measurable retrieval gains |
| **ML Engineer (Applied AI Systems)** | scikit-learn, XGBoost, risk models, serving | Someone who ships predictive ML with production discipline |
| **AI Platform / MLOps Engineer** | FastAPI, Docker, observability, packaging | Someone who makes AI services production-ready |
| **Computer Vision / Multimodal Engineer** | YOLOv8, video understanding, transformers | Someone who builds vision + multimodal systems end-to-end |
| **AI Solutions / Forward Deployed Engineer** | Client-facing delivery, fast prototyping, integration | Someone who converts requirements into working AI systems quickly |

## Your Adaptive Framing

<!-- Map YOUR projects to each archetype. Example:
     | Platform / LLMOps | My monitoring dashboard project | article-digest.md |
     | Agentic | My chatbot with HITL escalation | cv.md section 3 | -->

| If the role is... | Emphasize about you... | Proof point sources |
|-------------------|------------------------|---------------------|
| Applied AI / LLM | Healthcare RAG with ~30-35% retrieval precision gains; agentic workflows with >30% hallucination reduction | cv.md |
| Generative AI / RAG | Retrieval ranking and grounding controls; embeddings and vector search in production | cv.md |
| ML Engineer (Applied) | Patient no-show risk, care engagement scoring, 15-20% recall gains on high-risk categories | cv.md |
| AI Platform / MLOps | FastAPI/Flask packaging, Docker, logging, ~30% defect reduction post-deploy | cv.md |
| Computer Vision / Multimodal | YOLOv8 drowsiness detection; transformer-based video summarization (60-70% review time reduction) | cv.md |
| AI Solutions / Forward Deployed | End-to-end delivery from data to API; fast prototyping across healthcare and enterprise | cv.md |

## Your Exit Narrative

<!-- Replace with YOUR story. This frames everything. -->

Use the candidate's exit story from `config/profile.yml` to frame ALL content:
- **In PDF Summaries:** Bridge from past to future
- **In STAR stories:** Reference proof points from article-digest.md
- **In Draft Answers:** The transition narrative appears in the first response

## Your Cross-cutting Advantage

<!-- What's your "signature move"? What do you do that others can't? -->

Frame Deepak as **"Applied AI engineer with production RAG, agentic, and ML systems in regulated healthcare"** — proof by measurable outcomes (retrieval precision, hallucination reduction, risk recall, defect reduction, review-time savings), not generic skill lists.

## Your Portfolio / Demo

<!-- If you have a live demo, dashboard, or public project:
     url: https://yoursite.dev/demo
     password: demo-2026
     when_to_share: "LLMOps, AI Platform roles" -->

If you have a live demo/dashboard (check profile.yml), offer access in applications for relevant roles.

## Your Comp Targets

<!-- Research comp ranges for YOUR target roles -->

**General guidance:**
- Use WebSearch for current market data (Glassdoor, Levels.fyi, Blind)
- Frame by role title, not by skills
- Contractor rates are typically 30-50% higher than employee base

## Your Negotiation Scripts

<!-- Adapt to YOUR situation, currency, location -->

**Salary expectations:**
> "Based on market data for this role, I'm targeting [RANGE from profile.yml]. I'm flexible on structure -- what matters is the total package and the opportunity."

**Geographic discount pushback:**
> "The roles I'm competitive for are output-based, not location-based. My track record doesn't change based on postal code."

**When offered below target:**
> "I'm comparing with opportunities in the [higher range]. I'm drawn to [company] because of [reason]. Can we explore [target]?"

## Your Location Policy

<!-- Adapt to YOUR situation -->

**In forms:**
- Follow your actual availability from profile.yml
- Specify timezone overlap in free-text fields

**In evaluations (scoring):**
- Remote dimension for hybrid outside your country: score **3.0** (not 1.0)
- Only score 1.0 if JD says "must be on-site 4-5 days/week, no exceptions"

## Your Scan Policy

When the user runs `/career-ops scan` (or asks to scan for jobs), always run the **full three-level flow**, not just the zero-token scanner:

1. **Level 1 / 2 — `node scan.mjs`** — hits Greenhouse/Ashby/Lever APIs for companies in `portals.yml tracked_companies`. Fast, free.
2. **Level 3 — WebSearch queries** — run the queries from `portals.yml search_queries` (or targeted ad-hoc queries for the user's archetypes) via Claude's WebSearch tool. This discovers roles at companies NOT in `tracked_companies`.
3. **Aggregate + dedupe** — append new URLs to `data/pipeline.md` and log them in `data/scan-history.tsv`. Respect `location_filter` (USA + EU, no UK) and `title_filter` (mid/entry IC, no Senior/Staff/Principal/Lead/Manager/Architect).
4. **Report back** — show a single summary table with companies, roles, and which discovery level found them.

This matches the Level 3 flow documented in `modes/scan.md`.

## Your PDF Generation Policy

After every pipeline / auto-pipeline evaluation, **always generate a tailored ATS PDF for any report with score ≥ 3.0**. No manual confirmation step.

1. Read the report's Block B/D (archetype + JD hooks) and the full JD snapshot.
2. Tailor `templates/cv-template.html`: Summary mirrors JD phrasing, bullets reorder to match JD priorities, hero metrics pulled from `cv.md` + `article-digest.md` (never invented).
3. Run `node generate-pdf.mjs <tmp.html> output/cv-deepak-mallampati-{slug}-{YYYY-MM-DD}.pdf`.
4. Update the report's `**PDF:**` line with the actual path (or "Not generated (score < 3.0)" if below).

Skip PDF only when score < 3.0 — those are explicit "don't apply" flags.
