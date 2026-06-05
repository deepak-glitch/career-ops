today = '2026-06-05'
us_rows = [
    ('https://job-boards.greenhouse.io/gather/jobs/5532448004', today, 'WebSearch — L3 overnight 2026-06-05', 'Founding ML Engineer - AI', 'Gather', 'added'),
    ('https://job-boards.greenhouse.io/purestorage/jobs/7644129', today, 'WebSearch — L3 overnight 2026-06-05', 'Applied AI Engineer', 'Pure Storage (Everpure)', 'added'),
]
intl_rows = [
    ('https://jobs.lever.co/remofirst/de98d626-d399-45a0-9862-06abc520d79c', today, 'WebSearch — L3 overnight 2026-06-05', 'AI Engineer', 'RemoFirst', 'added'),
]

def append(path, rows):
    with open(path, 'a') as f:
        for r in rows:
            f.write('\t'.join(r) + '\n')

append('data/scan-history.tsv', us_rows)
append('data/intl/scan-history.tsv', intl_rows)
print('done')
