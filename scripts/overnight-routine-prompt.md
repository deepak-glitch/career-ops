# Overnight Routine Prompt (hardened, self-healing)

A drop-in prompt that runs the full career-ops **overnight** automation end-to-end across both
tracks (US + Intl), with built-in error recovery and an audit trail.

## What makes this version different

1. **No unhandled errors.** Every known failure mode (report-number collisions, push races, dead JDs,
   verify-pipeline drift, PDF crashes, junk files) has a defined auto-fix in the ERROR PLAYBOOK. Anything
   unexpected is logged and skipped rather than crashing the run.
2. **Errors are auto-resolved and logged.** Each error + the fix applied + the outcome is appended to
   `data/overnight-errors.log` as a structured line.
3. **"What changed" is saved for review.** Each run writes `data/overnight-runs/{timestamp}.md` with the
   scan deltas, the evaluated-roles table, deletions, a `git diff --stat`, the error log for that run, and
   the final verify status. Both audit files live under `data/` (tracked), so they're reviewable from
   anywhere after the run pushes.

## How to use

- **As a Claude `/schedule` routine or `claude -p` job:** paste the prompt block below verbatim. It runs
  inline/synchronously and pushes to `main` itself.
- **Cadence:** every 4 hours, around the clock (6×/day) is the intended schedule (matches the GitHub
  Action cron `0 */4 * * *`). **Use ONE scheduler only** — if you run this as a routine, disable the GitHub
  Action's cron so the two don't collide (a manual/routine run overlapping a scheduled run is the one
  thing the workflow's `concurrency:` guard cannot coordinate).

## Keep in sync

This mirrors `modes/overnight.md` ("The overnight prompt" section) and `scripts/overnight-run.sh`. If you
change the routine's steps, update all three.

---

## The prompt

```
Run the career-ops overnight automation now — inline and synchronously. You ARE the worker; do NOT spawn a background sub-agent. Working dir is the career-ops git repo.

PRIME DIRECTIVE
Complete the routine with ZERO unhandled errors. Every error must be either (a) auto-resolved using the ERROR PLAYBOOK below, or (b) if truly unrecoverable, logged with full context and gracefully skipped so the rest of the run still completes. NEVER abort the whole run because of a single-item failure. Two outputs must always be produced, even on partial failure: the error log and the run report (see OUTPUTS).

SETUP
1. RUN_ID = output of `date -u +%Y-%m-%dT%H%M%SZ`. TODAY = `date +%F`. Use TODAY for all dated sections, report filenames, PDF filenames; use RUN_ID timestamps in logs.
2. `mkdir -p data/overnight-runs output/$TODAY output-intl/$TODAY`.
3. `git checkout main` then `git pull --ff-only origin main`. If pull fails, run `git fetch origin main && git reset --hard origin/main` (no local commits exist yet at setup) and log it as an auto-fix.
4. Read and obey: CLAUDE.md, modes/_profile.md, modes/_shared.md, modes/scan.md, modes/pipeline.md, modes/oferta.md, modes/overnight.md, portals.yml, cv.md, article-digest.md. Every rule in modes/_profile.md is binding (PDF >= 3.0, output folders, cleanup-after-batch, push-to-main).
5. NEXT_NUM = (highest leading number across reports/*.md) + 1, zero-padded. Assign sequentially; never reuse a number. Recompute the true max immediately before Step 3.
6. Initialize the run report file data/overnight-runs/$RUN_ID.md with a header (date, run id, starting commit SHA from `git rev-parse HEAD`, pending counts in both pipelines).

TWO TRACKS (run both)
- US:   pipeline data/pipeline.md,      history data/scan-history.tsv,      PDFs output/$TODAY/,      filter location_filter
- Intl: pipeline data/intl/pipeline.md, history data/intl/scan-history.tsv, PDFs output-intl/$TODAY/, filter intl_location_filter
- Shared: data/applications.md (Region column), reports/ (header has **Region:** US|Intl), batch/tracker-additions/

ERROR PLAYBOOK — detect, auto-fix, log. For EVERY error: append one structured line to data/overnight-errors.log in the form:
  $RUN_ID \t {step} \t {severity: warn|error} \t {short error} \t fix:{action taken} \t outcome:{resolved|unresolved|skipped}
Then record the same in the run report's "Errors & auto-fixes" section. Known cases and their auto-fix:
  1. Report-number collision (duplicate leading numbers in reports/): re-audit with `ls reports/ | grep -oE '^[0-9]+' | sort | uniq -d`; renumber each stray to the next free number — fix the report filename, its header number, the TSV filename, and the link inside the TSV. outcome:resolved once `uniq -d` is empty.
  2. `git push` rejected (non-fast-forward, a scheduled run pushed first): `git fetch origin main`. If origin already contains reports/tracker rows for the SAME roles you just processed (duplicate work), `git reset --hard origin/main` and re-apply ONLY your genuinely-new artifacts (renumber any whose numbers were taken upstream). Otherwise `git rebase origin/main`. Then retry push (4x, 2/4/8/16s backoff). NEVER inject duplicate reports or tracker rows.
  3. JD extraction failure for a URL: try fallbacks in order — Ashby GraphQL POST to /api/non-user-graphql, then WebFetch, then aggregator corroboration. If all fail, mark the row `- [!] {url} | error: {reason}` in that track's Pendientes and continue. Do not delete it (it retries next run).
  4. verify-pipeline.mjs reports errors/warnings: run remediation in order — `node normalize-statuses.mjs`, `node dedup-tracker.mjs`, `node cleanup-bang-rows.mjs` — then re-run verify (up to 3 cycles). Log the specific remaining issues if not 0/0.
  5. Duplicate company+role in tracker after merge: `node dedup-tracker.mjs`. Confirm you never added rows directly to applications.md (TSV-only).
  6. PDF generation failure (Playwright/Chromium): retry once; if it still fails, set the report's PDF line to "Not generated (error: {reason})" and continue. Never block a report on PDF failure.
  7. Stray junk files before commit (e.g. Usersdeepa*.json, curl/HTTP dumps): delete them; never commit probe output. Parse HTTP responses in-memory only.
  8. npm/dependency error from a node script: `npm install` once, then retry the script.
  9. Empty pipeline (0 pending): not an error — log "0 pending after scan, nothing to evaluate" and proceed.
Any error class NOT listed: attempt the most conservative safe fix once; if unresolved, log severity:error outcome:unresolved, skip that item, and continue.

STEPS
1. SCAN both tracks: `node scan.mjs`, then `node scan.mjs --intl`. Then run the Level-3 WebSearch queries from portals.yml (small-ATS BreezyHR/Recruitee/TeamTailor/Workable, non-standard titles, Himalayas/BuiltIn aggregators). Route each new URL by location into the correct track's pipeline + scan-history under today's `### $TODAY` subsection. Record scan deltas (raw found, net-new added, L3 added/expired) in the run report.
2. PIPELINE up to 10 US + 10 Intl pending URLs (prioritize newest dated section, archetype fit per modes/_profile.md, explicit engineer/new-grad titles). Per URL: extract JD -> write reports/{NEXT_NUM}-{slug}-$TODAY.md (header order: Fecha, Arquetipo, Score, URL, Legitimacy, Location, Region, PDF; full A-H blocks per modes/oferta.md) -> write batch/tracker-additions/{NEXT_NUM}-{slug}.tsv (9 cols, [US]/[Intl] in notes) -> if score >= 3.0 generate a tailored PDF into the track's output dir, else "Not generated (score < 3.0)" -> move the row to Procesadas under `### $TODAY` and DELETE it from Pendientes (no `- [!]` breadcrumb). Increment NEXT_NUM each time.
3. MERGE + VERIFY: apply Playbook #1 (renumber strays); `node merge-tracker.mjs`; `node verify-pipeline.mjs` for BOTH tracks; apply Playbook #4 until 0 errors / 0 warnings or 3 cycles exhausted.
4. CLEANUP: `node cleanup-low-scores.mjs` (DELETES every <3.0 artifact, keeps a discarded.tsv audit row), then `node cleanup-bang-rows.mjs`. Apply Playbook #7 before committing.
5. COMMIT + PUSH to main: finalize the run report (see OUTPUTS) and `git add -A` it too. Commit `overnight: $(date -u +%Y-%m-%dT%H:%MZ) scan+pipeline+cleanup (+N reports, +M PDFs, US:{n} Intl:{n})`. Push with Playbook #2. Record the final commit SHA in the run report (amend the SHA line after commit, or note it in the final summary).

OUTPUTS (always produced)
A. data/overnight-errors.log — appended structured lines per the ERROR PLAYBOOK (timestamp, step, severity, error, fix, outcome).
B. data/overnight-runs/$RUN_ID.md — the "what changed" report, containing:
   - Header: date, run id, start SHA, end SHA, pending-before/after per track
   - Scan: raw found + net-new per track, L3 results (added/expired/saturated)
   - Evaluated: a table | Report# | Company | Role | Region | Score | Legitimacy | PDF(Y/N) |
   - Deleted (<3.0): list from discarded.tsv this run, with reasons
   - Files changed: paste of `git diff --stat HEAD@{1} HEAD` (or staged diff stat) so changes are auditable
   - Errors & auto-fixes: every entry from this run with its outcome (or "none")
   - Verify: final verify-pipeline result (must state 0/0 or list remaining issues)

HARD RULES
- Never invent metrics or credentials. Never edit cv.md or config/profile.yml. Always push to main, never sub-branches.
- On a truly unrecoverable error (whole run cannot continue): commit whatever succeeded, push, ensure both OUTPUTS are written with the failure captured, append the error + full stack trace to data/overnight-errors.log, then exit cleanly (do not leave the repo dirty or mid-rebase).

FINISH with one line, then point to the report file:
`Processed N URLs (US:x + Intl:y), generated M PDFs, deleted K low-score, {E} errors auto-resolved / {U} unresolved, pushed {sha}. Report: data/overnight-runs/$RUN_ID.md`
```
