# Mode: auto-apply — Automated Application Form Filler

Open a job URL in Playwright, click into the application form, fill every field
we can answer from the candidate's data, attach the **tailored** resume PDF
that matches the report for that URL, and **stop at the Submit button** for
human review.

## Hard rules (non-negotiable)

1. **Never click Submit.** Ever. The script locates the submit button so the
   user can see the form is ready, but clicking is the human's job. This is
   the CLAUDE.md ethical-use rule: every application is reviewed by the
   candidate before it goes out.
2. **Never skip a field.** If the script can't determine a value, it surfaces
   the gap as `needs-review` in the audit log and console summary so nothing
   slips through.
3. **Cover every portal.** Greenhouse, Ashby, Lever, Workday, Breezy,
   SmartRecruiters, Workable, iCIMS, Taleo, Jobvite, BambooHR, SuccessFactors,
   Wellfound, LinkedIn, plus a generic fallback for everything else.

## Data sources (priority order)

| Field shape | Source |
|---|---|
| First/Last name, DOB, phone, address, work auth, visa, gender, race, salary range, languages, references | `Deepak- Personal Information.docx` (parsed at load time) |
| Email, LinkedIn, total experience, highest education, targeted roles, work history narrative | `Deepak-Master Resume - main.docx` |
| Structured profile (archetypes, headline, proof points, comp targets) | `config/profile.yml` |
| Resume PDF upload | `output/{date}/cv-deepak-mallampati-{slug}-{date}.pdf` matched to the report for the URL |
| Cover letter / "Why us?" / "Why this role?" | Drafted from `config/profile.yml` narrative + the report's Block F/G content. Confidence: `draft` (always reviewed). |

## URL → tailored resume mapping

1. Find the report whose `**URL:**` line equals the input URL (newest first).
2. Parse the report filename `{NNN}-{slug}-{YYYY-MM-DD}.md` → extract `slug`.
3. Look for `output/*/cv-deepak-mallampati-{slug}-*.pdf` (newest day wins).
4. If no match: fall back to the canonical `output/cv-deepak-mallampati.pdf`
   if it exists; otherwise leave the field blank and flag `needs-review`.

## Workflow

```
1. RESOLVE   → URL → report → PDF
2. NAVIGATE  → Playwright open URL, click "Apply" entry point if needed
3. DISCOVER  → Walk every input/select/textarea, attach a label + kind
4. PLAN      → For each field decide value + confidence + source
5. FILL      → Apply each value (text / select / radio / checkbox / file)
6. AUDIT     → Persist plan to data/auto-apply/{ts}-{portal}.json
7. HALT      → Locate submit button, never click. Print gap list.
```

## Confidence levels

- `high` — value came from the personal-info docx or master resume.
- `draft` — narrative answer (cover letter, why-us, why-role) generated from
  profile + report; user must review before submit.
- `needs-review` — no source could supply a value; field is left blank and
  surfaced in the gap list.

## CLI

```bash
node auto-apply.mjs <url>                  # interactive (visible browser)
node auto-apply.mjs --headless <url>       # CI / dry run
node auto-apply.mjs --plan <url>           # discover + plan only, no fill
node auto-apply.mjs --report <file> <url>  # force a specific report's CV
```

After running, the audit JSON in `data/auto-apply/` records every field's
label, kind, value, source, and confidence — useful for debugging selector
mismatches per portal.

## Chrome extension (recommended)

The extension is the better path for day-to-day use: it runs inside your
real Chrome session so cookies, SSO, and captchas Just Work, and you can
review every fill before clicking Submit yourself.

### Install (one-time)

1. Start the local bridge:
   ```bash
   npm run auto-apply:bridge
   # auto-apply bridge listening on http://127.0.0.1:7777
   ```
2. Load the unpacked extension:
   - Open `chrome://extensions` → toggle **Developer mode** on
   - Click **Load unpacked** → select the `extension/` folder
3. Pin the extension in the toolbar.

### Use

1. Click the extension icon. The popup shows your evaluated jobs (highest
   score first), filtered by `min score`, `portal`, and `only with PDF`.
2. **Single job**: click a row → opens the posting in a new tab. Click the
   extension icon again → **Fill this form**. Review, submit.
3. **Batch**: tick the checkboxes next to the jobs you want, or use **select
   all visible**. Click **Apply to selected (N)** → the extension opens
   each job in its own background tab and auto-fills it on load. A blue
   banner appears in each tab while filling, turning green when done.
   You review every tab and click Submit yourself — Submit is never
   auto-clicked.

The selection persists across popup re-opens (stored in
`chrome.storage.local`), so you can tweak filters and add to the same
batch over multiple sessions.

### Endpoints

| Path | Returns |
|---|---|
| `GET /health` | Liveness check |
| `GET /jobs` | Evaluated jobs + slug + PDF presence + prefill summary + portal |
| `GET /resolve?url=<u>` | Applicant fields + narrative drafts + resume URL (live) |
| `GET /prefill?url=<u>` | Pre-scraped + pre-mapped per-field answers |
| `GET /pdf?slug=<s>` | Streams the tailored PDF |
| `POST /audit` | Logs fill events to `data/auto-apply/audit.tsv` |

### Pre-scraping form schemas (Scrapling)

The extension can fill any form from `/resolve` alone (live discovery in the
page), but pre-scraping each posting's form ahead of time gives:

- **Per-field validation against the actual select / radio options.** If
  the form expects `"Yes, I am authorized"` not just `"Yes"`, the prefill
  step picks the matching option and stores it. Live discovery only knows
  options once the page is open.
- **Custom-question discovery before you open the tab.** Workday-style
  unique questions surface in the form schema so you can review the gaps.
- **Anti-bot + JS rendering at scrape time, not fill time** — the extension
  itself runs in your real browser, but the scraper uses Camoufox-based
  stealth (Scrapling's `StealthyFetcher`) so we can crawl postings without
  burning sessions.

Workflow:

```bash
# one-time setup: install Scrapling + browsers
python3 -m venv .venv && source .venv/bin/activate
pip install "scrapling[fetchers]"

# scrape forms for every evaluated job with score >= 4.0
npm run auto-apply:scrape -- --min-score 4.0
# or for one URL
npm run auto-apply:scrape -- --url <jobUrl>

# build the answer files (re-run whenever applicant data or reports change)
npm run auto-apply:prefill

# start the bridge (extension reads prefill via /prefill?url=...)
npm run auto-apply:bridge
```

After this, the popup shows a `prefilled ✓` badge per job and a per-field
breakdown (`high / draft / review`) in the current-page panel. Clicking
**Fill this form** uses the prefilled answers first and only falls back to
live discovery for fields the schema didn't cover.

### Architecture

```
Chrome page
  └── content.js            (discovers + fills the form)
       └─ fetch ──► bridge :7777
                     ├── /resolve   → applicant + drafts + pdf URL
                     └── /pdf       → resume bytes (turned into a File)
popup.html
  └── popup.js              (lists jobs from /jobs, sends fill message)
       └─ chrome.tabs.sendMessage ──► content.js
```

The extension never auto-submits. The bridge logs every fill to
`data/auto-apply/audit.tsv` so you have a record of what was prepared.

## Adding a new portal

`lib/auto-apply/portals.mjs`:

1. Add a `{ name, matches(url) }` entry to `PORTALS`.
2. Add an entry to `APPLY_BUTTON_SELECTORS` for the portal's "Apply" CTA.
3. Re-test with `--plan <url>` to confirm the form is reachable.

The discovery walker is generic and works on most portals out of the box.
Per-portal overrides go in the same file when the form has unusual structure
(e.g. shadow DOM, multi-step wizards).

## What this does NOT do

- Solve captchas / anti-bot challenges. Pause and let the human handle them.
- Generate cover-letter PDFs. Only inline cover-letter text fields are filled
  in v1. Upload fields labelled "Cover Letter" stay blank.
- Submit. Never. Read the rules at the top again if you're tempted.
