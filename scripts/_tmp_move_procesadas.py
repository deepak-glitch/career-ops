"""Move processed Fireworks AI entry to Procesadas and mark Gather/Pure Storage as failed extraction."""
import os

# --- US pipeline ---
us_path = 'data/pipeline.md'
with open(us_path) as f:
    content = f.read()

# Remove Fireworks AI pending row
fireworks_pending = '- [ ] https://job-boards.greenhouse.io/fireworksai/jobs/4056271009 | Fireworks AI | Software Engineer, AI Infrastructure | New York, NY; San Mateo, CA\n'
if fireworks_pending in content:
    content = content.replace(fireworks_pending, '', 1)

# Mark Gather as failed extraction (- [!])
gather_pending = '- [ ] https://job-boards.greenhouse.io/gather/jobs/5532448004 | Gather | Founding ML Engineer - AI | N/A\n'
gather_bang = '- [!] https://job-boards.greenhouse.io/gather/jobs/5532448004 | Gather | Founding ML Engineer - AI | error: no live JD; "no positions currently available"\n'
if gather_pending in content:
    content = content.replace(gather_pending, gather_bang, 1)

# Mark Pure Storage as failed extraction
ps_pending = '- [ ] https://job-boards.greenhouse.io/purestorage/jobs/7644129 | Pure Storage (Everpure) | Applied AI Engineer | Remote — United States\n'
ps_bang = '- [!] https://job-boards.greenhouse.io/purestorage/jobs/7644129 | Pure Storage (Everpure) | Applied AI Engineer | error: greenhouse-api 404; greenhouse public URL only renders generic careers list; retry next run\n'
if ps_pending in content:
    content = content.replace(ps_pending, ps_bang, 1)

# Add Fireworks AI to Procesadas (insert under existing ### 2026-06-05 in Processed)
fireworks_proc = '- [x] #1145 | https://job-boards.greenhouse.io/fireworksai/jobs/4056271009 | Fireworks AI | Software Engineer, AI Infrastructure | New York, NY; San Mateo, CA — Hybrid (M/W/F) | 3.5/5 | PDF ✅\n'

# Find first "## Processed" block, find "### 2026-06-05" inside it, append
marker = '## Processed\n\n### 2026-06-05\n'
if marker in content:
    content = content.replace(marker, marker + fireworks_proc, 1)
else:
    marker2 = '## Processed\n### 2026-06-05\n'
    if marker2 in content:
        content = content.replace(marker2, marker2 + fireworks_proc, 1)

with open(us_path, 'w') as f:
    f.write(content)
print('US pipeline updated')

# --- Intl pipeline ---
intl_path = 'data/intl/pipeline.md'
with open(intl_path) as f:
    ic = f.read()

remofirst_pending = '- [ ] https://jobs.lever.co/remofirst/de98d626-d399-45a0-9862-06abc520d79c | RemoFirst | AI Engineer | Portugal/Spain/EU — Remote\n'
remofirst_bang = '- [!] https://jobs.lever.co/remofirst/de98d626-d399-45a0-9862-06abc520d79c | RemoFirst | AI Engineer | error: lever API 404 + jobs.lever.co/remofirst listing 403; URL likely stale; retry alt RemoFirst AI roles next run\n'
if remofirst_pending in ic:
    ic = ic.replace(remofirst_pending, remofirst_bang, 1)

with open(intl_path, 'w') as f:
    f.write(ic)
print('Intl pipeline updated')
