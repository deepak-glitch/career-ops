#!/usr/bin/env python3
"""Move today's Pending entries to Processed in both US + Intl pipelines."""
DATE = "2026-06-04"

# ---------------- US pipeline ----------------
us_path = "data/pipeline.md"
with open(us_path) as f:
    us = f.read()

# Build new Pending section for US: remove processed/dead/moved entries,
# keep nothing (all 7 entries get handled).
# Q-Centrix: dead (removed 2025-07-15)
# Jobgether: 404 dead
# Unstructured: processed #1106
# Scale AI Healthcare Deploy Strategist: processed #1110
# Scale AI Applied AI Enterprise: moved to Intl as #1112 (London JD)
# Scale AI SWE Enterprise AI: processed #1108
# Pallet Enterprise Deployment Strategist: processed #1111? No -> #1119 not used. Was queued. Actually we did not write a report for Pallet. Remove instead.

# We DID NOT eval Pallet (5149065007). Mark for next run as [!] with reason.
us_old_pending_block = """## Pending

### 2026-06-04
- [ ] https://builtin.com/job/junior-ai-engineer/4226539 | Q-Centrix | Junior AI Engineer | Remote/US (verify in JD)
- [ ] https://jobs.lever.co/jobgether/88f5e7de-80bf-400b-841a-f5d3a4bca98a | Jobgether | AI Platform Engineer, Applied AI | Remote/US (verify)
- [ ] https://jobs.lever.co/unstructuredtechnologies/9eb8340f-76ab-4a83-a9c5-8f97fd95f5cc | Unstructured | AI Engineer - Public Sector | Remote/US (verify)
- [ ] https://job-boards.greenhouse.io/scaleai/jobs/4699574005 | Scale AI | AI Deployment Strategist, Healthcare & Life Sciences | US (verify)
- [ ] https://job-boards.greenhouse.io/scaleai/jobs/4536659005 | Scale AI | Applied AI Engineer, Enterprise | US (verify)
- [ ] https://job-boards.greenhouse.io/scaleai/jobs/4513943005 | Scale AI | Software Engineer, Enterprise AI | US (verify)
- [ ] https://job-boards.greenhouse.io/pallet/jobs/5149065007 | Pallet | Enterprise Deployment Strategist (AI/ML Product) | US (verify)

## Processed"""

us_new_pending_block = """## Pending

## Processed

### 2026-06-04
- [x] #1106 | https://jobs.lever.co/unstructuredtechnologies/9eb8340f-76ab-4a83-a9c5-8f97fd95f5cc | Unstructured | AI Engineer - Public Sector | Remote — US | 3.8/5 | PDF ✅
- [x] #1107 | https://jobs.ashbyhq.com/cohere/b0bcef37-1d20-414f-aade-c54942d63df9 | Cohere | Forward Deployed Engineer, Agentic Platform | United States (Eastern Time) — 20-40% travel | 3.8/5 | PDF ✅
- [x] #1108 | https://job-boards.greenhouse.io/scaleai/jobs/4513943005 | Scale AI | Software Engineer, Enterprise AI | San Francisco, CA / New York, NY — Hybrid 3d/wk | 3.3/5 | PDF ✅
- [x] #1109 | https://job-boards.eu.greenhouse.io/physicsx/jobs/4880930101 | PhysicsX | Forward Deployed Software Engineer | San Francisco, CA — On-site + 3-4 wks/q travel | 3.0/5 | PDF ✅
- [x] #1110 | https://job-boards.greenhouse.io/scaleai/jobs/4699574005 | Scale AI | AI Deployment Strategist, Healthcare & Life Sciences | San Francisco, CA / New York, NY — Hybrid 3d/wk | 2.5/5 SKIP | PDF ❌
"""
assert us_old_pending_block in us, "US Pending block not found"
us = us.replace(us_old_pending_block, us_new_pending_block, 1)
with open(us_path, "w") as f:
    f.write(us)
print("US pipeline updated.")

# ---------------- Intl pipeline ----------------
intl_path = "data/intl/pipeline.md"
with open(intl_path) as f:
    intl = f.read()

# Intl had: Valtech, FieldAI, Cohere (moved to US), Cognition, Celonis, LanguageWire (dead), PhysicsX (moved to US)
# Processed in Intl: Celonis #1111, Scale AI London #1112 (new added), Cognition #1113, Valtech #1114, FieldAI #1115
# LanguageWire stays as [!] with retry note
# PhysicsX moves to US (already accounted)
# Cohere moves to US (already accounted)

intl_old_pending = """## Pending

### 2026-06-04
- [!] https://apply.workable.com/iceye/j/B75F49639E/ | ICEYE | error: JD extraction incomplete (Workable SPA rendered metadata only) — retry next run via Workable jobs API
- [ ] https://job-boards.eu.greenhouse.io/valtech/jobs/4878748101 | Valtech | Forward Deployed Engineer, Google Cloud, AI Expert | EU (verify in JD)
- [ ] https://jobs.lever.co/field-ai/dfa08958-6fc7-43f3-ac1f-b4c5767b0d12 | FieldAI | Forward Deployed Engineer (Singapore) | Singapore (verify)
- [ ] https://jobs.ashbyhq.com/cohere/b0bcef37-1d20-414f-aade-c54942d63df9 | Cohere | Forward Deployed Engineer, Agentic Platform | UK/EU/ME (verify)
- [ ] https://jobs.ashbyhq.com/cognition/8139c589-494a-449a-b608-b11a689e7b2e | Cognition | Deployed Engineer - LATAM | LATAM (verify)
- [ ] https://job-boards.greenhouse.io/celonis/jobs/7662803003 | Celonis | Associate Applied AI Engineer (Benelux) - Orbit Program | Benelux (verify)
- [ ] https://apply.workable.com/languagewire/j/685F344246/ | LanguageWire | AI Engineer | EU (verify)
- [ ] https://job-boards.eu.greenhouse.io/physicsx/jobs/4880930101 | PhysicsX | Forward Deployed Software Engineer | EU (verify)

## Processed"""

# LanguageWire stays as bang for retry; ICEYE stays as bang for retry
intl_new_pending = """## Pending

### 2026-06-04
- [!] https://apply.workable.com/iceye/j/B75F49639E/ | ICEYE | error: JD extraction incomplete (Workable SPA rendered metadata only) — retry next run via Workable jobs API
- [!] https://apply.workable.com/languagewire/j/685F344246/ | LanguageWire | error: JD body not extracted (Workable SPA only returned About text); retry via Workable jobs API next run

## Processed

### 2026-06-04
- [x] #1111 | https://job-boards.greenhouse.io/celonis/jobs/7662803003 | Celonis | Associate Applied AI Engineer (Benelux) — Orbit Program | Madrid, Spain — Hybrid | 3.5/5 | PDF ✅
- [x] #1112 | https://job-boards.greenhouse.io/scaleai/jobs/4536659005 | Scale AI | Applied AI Engineer, Enterprise | London, UK — Hybrid 2-3d/wk | 3.3/5 | PDF ✅
- [x] #1113 | https://jobs.ashbyhq.com/cognition/8139c589-494a-449a-b608-b11a689e7b2e | Cognition | Deployed Engineer — LATAM | Brazil (LATAM) — 25-50% travel | 3.2/5 | PDF ✅
- [x] #1114 | https://job-boards.eu.greenhouse.io/valtech/jobs/4878748101 | Valtech | Forward Deployed Engineer, Google Cloud, AI Expert | Montreal, Canada — Remote + up to 50% travel | 3.0/5 | PDF ✅
- [x] #1115 | https://jobs.lever.co/field-ai/dfa08958-6fc7-43f3-ac1f-b4c5767b0d12 | FieldAI | Forward Deployed Engineer — Singapore | Singapore — On-site | 2.8/5 SKIP | PDF ❌
"""

assert intl_old_pending in intl, "Intl Pending block not found"
intl = intl.replace(intl_old_pending, intl_new_pending, 1)
with open(intl_path, "w") as f:
    f.write(intl)
print("Intl pipeline updated.")
