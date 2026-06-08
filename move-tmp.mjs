import { readFileSync, writeFileSync } from 'fs';

// US pipeline: move Coval to Procesadas, remove from Pendientes
const us = '/home/runner/work/career-ops/career-ops/data/pipeline.md';
let usC = readFileSync(us, 'utf8');

// Remove Coval URL from US Pending block + the now-empty `### 2026-06-08` subsection in Pending
const usOldPending = `## Pending

### 2026-06-08

- [ ] https://www.workatastartup.com/jobs/92860 | Coval | Forward Deployed Engineer | San Francisco / Remote (YC startup)

## Processed`;
const usNewPending = `## Pending
## Processed`;
if (!usC.includes(usOldPending)) { console.error('US Pending marker not found'); process.exit(1); }
usC = usC.replace(usOldPending, usNewPending);

// Add Coval to Procesadas under ### 2026-06-08 at top
const usOldProc = `## Processed

### 2026-06-08
- [x] #1256 |`;
const usNewProc = `## Processed

### 2026-06-08
- [x] #1251 | https://www.workatastartup.com/jobs/92860 | Coval | Forward Deployed Engineer | San Francisco, CA — On-site (YC F24 startup; founder ex-Waymo) | 3.4/5 | PDF ✅
- [x] #1256 |`;
if (!usC.includes(usOldProc)) { console.error('US Procesadas marker not found'); process.exit(1); }
usC = usC.replace(usOldProc, usNewProc);
writeFileSync(us, usC);

// Intl pipeline: move 3 to Procesadas, clear Pendientes
const intl = '/home/runner/work/career-ops/career-ops/data/intl/pipeline.md';
let intlC = readFileSync(intl, 'utf8');

const intlOldPending = `## Pending

### 2026-06-08

- [ ] https://job-boards.greenhouse.io/intercom/jobs/6781237 | Intercom | AI Design Leader | Berlin, Germany; Dublin, Ireland; London, England
- [ ] https://jobs.ashbyhq.com/supermodular.ai/d7b70138-cd54-4069-8099-6e92d83722a9 | supermodular.ai | Forward Deployed Security Engineer (AI Systems) | Germany
- [ ] https://www.workatastartup.com/jobs/89530 | Arva AI | Forward Deployed Engineer | London, UK — On-site 4-5d/wk

## Processed`;
const intlNewPending = `## Pending
## Processed`;
if (!intlC.includes(intlOldPending)) { console.error('Intl Pending marker not found'); process.exit(1); }
intlC = intlC.replace(intlOldPending, intlNewPending);

// Add 3 to Intl Procesadas under ### 2026-06-08 at top
const intlOldProc = `## Processed

### 2026-06-08
- [x] #1258 |`;
const intlNewProc = `## Processed

### 2026-06-08
- [x] #1252 | https://jobs.ashbyhq.com/supermodular.ai/d7b70138-cd54-4069-8099-6e92d83722a9 | supermodular.ai | Forward Deployed Security Engineer (AI Systems) | Munich, Germany — On-site/Hybrid | 3.0/5 | PDF ✅
- [x] #1253 | https://www.workatastartup.com/jobs/89530 | Arva AI | Forward Deployed Engineer | London, UK — On-site 4-5d/wk (visa sponsorship per JD) | 3.2/5 | PDF ✅
- [x] #1254 | https://job-boards.greenhouse.io/intercom/jobs/6781237 | Intercom (Fin) | AI Design Leader | Berlin/Dublin/London — Hybrid 3d/wk | 1.5/5 SKIP | PDF ❌
- [x] #1258 |`;
if (!intlC.includes(intlOldProc)) { console.error('Intl Procesadas marker not found'); process.exit(1); }
intlC = intlC.replace(intlOldProc, intlNewProc);
writeFileSync(intl, intlC);

console.log('done');
