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

## Your Shortlist Display Policy

Whenever you present a shortlist, ranking table, or pipeline queue to the user (e.g. before `/career-ops pipeline`, `/career-ops ofertas`, scan summaries, top-N proposals), **always include a `Location` column**. Pull the location from:

1. The JD page (Playwright/WebFetch the posting), OR
2. The report's Block A if already evaluated, OR
3. Company's known HQ + "(verify in JD)" if you can't fetch it immediately.

Never omit location — F-1 OPT / on-site policy decisions hinge on it.

## Your PDF Generation Policy

After every pipeline / auto-pipeline evaluation, **always generate a tailored ATS PDF for any report with score ≥ 3.0**. No manual confirmation step.

1. Read the report's Block B/D (archetype + JD hooks) and the full JD snapshot.
2. Tailor `templates/cv-template.html`: Summary mirrors JD phrasing, bullets reorder to match JD priorities, hero metrics pulled from `cv.md` + `article-digest.md` (never invented).
3. Run `node generate-pdf.mjs <tmp.html> output/cv-deepak-mallampati-{slug}-{YYYY-MM-DD}.pdf`.
4. Update the report's `**PDF:**` line with the actual path (or "Not generated (score < 3.0)" if below).

Skip PDF only when score < 3.0 — those are explicit "don't apply" flags.

## Your Work Authorization

Deepak is on **F-1 OPT** (US-based, needs visa sponsorship for long-term roles).

- **Strongly prefer:** US-entity employers or US-remote roles. Canada, UK, EU, India-remote are soft blockers — still evaluate and score, but flag in Block A and Location.
- **Evaluation impact:** Do NOT auto-reject non-US roles — score normally but add a Red Flag note.
- **In PDFs / form answers:** State "US-based, F-1 OPT, open to sponsorship" in the location line of the CV footer when targeting US roles. For non-US roles, acknowledge the relocation/authorization complexity honestly in Draft Answers.
- **Abridge, Perplexity-Berlin, MightyBot-India** examples: location mismatch downgraded in Block A but did not veto the score.

## Your Git Push Policy

**Commit always, push only on explicit user instruction.**

- After batch work (pipeline, PDFs, tracker merges, scan updates), always stage and commit locally with a clear message. The stop hook will flag uncommitted changes — handle by committing, not by ignoring.
- NEVER `git push` until the user says "push" (or clearly asks to send to GitHub). Typos like "psuh", "puash", "send to github", "puah" all count as push instructions.
- After user says push, run `git push -u origin main`, then confirm the commit SHA landed.
- When listing held commits, always show the SHA + one-line summary so the user can decide.

## Your Batch Subagent Patterns

When running `/career-ops pipeline` with 3+ URLs or a PDF batch:

1. **Launch the subagent with `run_in_background: true`.** Main thread stays free to handle stop-hook feedback.
2. **Give the subagent an exhaustive prompt:** exact file paths, exact numbering, exact rules (location mandatory, legitimacy mandatory, PDF threshold, no git push, tailoring angles per URL).
3. **Timeout recovery:** Subagents often finish file writes before timing out with "Stream idle timeout - partial response received". Always verify by listing the expected outputs (`ls reports/0NN*`, `ls batch/tracker-additions/0NN*`, `ls output/*DATE*`) before treating it as a failure. Finish the missing steps manually rather than relaunching the whole batch.
4. **Force-add gitignored artifacts:** `reports/*.md`, `output/*.pdf`, `batch/tracker-additions/**`, `data/applications.md`, `data/pipeline.md`, `data/scan-history.tsv` are all gitignored. Use `git add -f` to commit them.
5. **Post-batch cleanup checklist:**
   - `node merge-tracker.mjs`
   - `node verify-pipeline.mjs` (must be 0 errors / 0 warnings)
   - Flip `PDF ⏳` → `PDF ✅` in pipeline.md Procesadas after PDFs land
   - Move `- [ ]` entries from Pendientes to Procesadas
   - Append new STAR+R stories to `interview-prep/story-bank.md`
6. **Never run two batch subagents that touch the same files in parallel.** A scan + a PDF-gen + a pipeline-eval agent can run concurrently (different files), but two pipeline agents cannot.

## Your JD Extraction Fallbacks

Different portals need different fallbacks — WebFetch alone is not enough:

| Portal | Primary | Fallback |
|--------|---------|----------|
| Greenhouse `job-boards.greenhouse.io` | WebFetch | WebSearch cached copy |
| Lever `jobs.lever.co` | WebFetch | Lever API `https://api.lever.co/v0/postings/{company}?mode=json` |
| Ashby `jobs.ashbyhq.com` | **NOT WebFetch** (SPA returns empty) | GraphQL POST `https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobBoardWithTeams` OR aggregators (BuiltIn, Himalayas, Remotive, YC Work at a Startup, LinkedIn cache) |
| BambooHR | list + detail endpoints | — |
| Workday | POST JSON search API | — |
| LinkedIn | login-gated | Ask user to paste JD text |

Always corroborate critical details (location, comp, seniority) across 2+ sources when possible. If fully blocked, write `**Verification:** unconfirmed (batch mode)` in the report header.

## Your Commit Message Style

Lowercase type prefix; imperative mood; 1-2 sentence body; always include session trailer.

Types used: `pipeline`, `pdfs`, `scan`, `profile`, `tracker`, `fix`, `docs`.

Example:
```
pipeline batch 3: evaluate 10 URLs (#021-030) + location policy

- 10 A-H reports: Netic, Verkada, Northslope, HealthLeap, Abridge,
  Perplexity(Berlin), Zello, PermitFlow, Edison Scientific, MightyBot
- All reports include Location in header (per Shortlist Display Policy)
- Scores: 2 below 3.0 → no PDF

https://claude.ai/code/session_01DodFPHXQ9zdCX1vDEFpsMh
```

## Your Filter Hygiene

Learned filter misses from this session (already patched in `portals.yml`):

- **Removed** `GTM Engineer` from positive (was pulling Vercel/Lovable GTM/marketing slips).
- **Added** `GTM` to negative.
- **Solutions Engineer, Customer Support Agent, Business Systems Analyst, Working Student, AI Creative Producer** — not archetype matches. If they slip through, remove from pipeline.md before launching pipeline mode.
- **Senior / Staff / Principal / Lead / Manager / Architect / Director** — auto-filter by negative list.
- **Research Engineer** (PhD-gated titles) — borderline; evaluate but expect low score unless explicit "MS OK".

## Your Session Memory (Active Policies Summary)

These policies are persistent — every new session should honor them automatically:

1. **Scan** = three-level flow (Level 1/2 `scan.mjs` + Level 3 WebSearch) — not just zero-token.
2. **Shortlist/ranking/queue tables** — always include `Location` column.
3. **PDF** — auto-generate for score ≥ 3.0; skip otherwise; update report `**PDF:**` line.
4. **Git** — commit always; push only on explicit user request.
5. **Work auth** — F-1 OPT; prefer US; flag but don't veto non-US roles.
6. **Batch subagents** — run in background, exhaustive prompts, verify outputs after timeouts, force-add gitignored artifacts.
7. **Ashby pages** — don't WebFetch; use GraphQL API or aggregators.
8. **Commit style** — lowercase type prefix + session trailer.
