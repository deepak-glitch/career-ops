import sys
path = 'data/pipeline.md'
with open(path) as f:
    content = f.read()

addition = """## Pending

### 2026-06-05

- [ ] https://job-boards.greenhouse.io/fireworksai/jobs/4056271009 | Fireworks AI | Software Engineer, AI Infrastructure | New York, NY; San Mateo, CA
- [ ] https://job-boards.greenhouse.io/gather/jobs/5532448004 | Gather | Founding ML Engineer - AI | N/A
- [ ] https://job-boards.greenhouse.io/purestorage/jobs/7644129 | Pure Storage (Everpure) | Applied AI Engineer | Remote — United States

## Processed"""

new = content.replace('## Pending\n## Processed', addition, 1)
with open(path, 'w') as f:
    f.write(new)
print('US pipeline pending entries added')

# Intl
ipath = 'data/intl/pipeline.md'
with open(ipath) as f:
    ic = f.read()

intl_addition = """## Pending

### 2026-06-05

- [ ] https://jobs.lever.co/remofirst/de98d626-d399-45a0-9862-06abc520d79c | RemoFirst | AI Engineer | Portugal/Spain/EU — Remote

## Processed"""

inew = ic.replace('## Pending\n\n## Processed', intl_addition, 1)
with open(ipath, 'w') as f:
    f.write(inew)
print('Intl pipeline pending added')
