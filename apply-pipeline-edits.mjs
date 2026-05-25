import { readFile, writeFile } from 'fs/promises';

function replaceOnce(text, find, repl, label) {
  const i = text.indexOf(find);
  if (i === -1) throw new Error(`anchor not found: ${label}`);
  if (text.indexOf(find, i + 1) !== -1) throw new Error(`anchor not unique: ${label}`);
  return text.slice(0, i) + repl + text.slice(i + find.length);
}

// 1) US pipeline.md — add today's Procesadas section
{
  const p = 'data/pipeline.md';
  let t = await readFile(p, 'utf-8');
  const find = `## Procesadas\n\n### 2026-05-24\n- [x] #974 |`;
  const repl = `## Procesadas\n\n### 2026-05-25\n- [x] #981 | https://jobs.ashbyhq.com/modal/9fadb51f-ce11-41b1-84d5-470e66cc8ee9 | Modal | Forward Deployed Engineer, ML (NY) | New York, NY — in-person | 3.1/5 | PDF ✅\n- [x] #980 | https://jobs.ashbyhq.com/periodic-labs/dbac407f-a408-44a3-9e7a-895d42649edc | Periodic Labs | Forward Deployed Engineer, LLM Systems | Menlo Park, CA — on-site | 2.5/5 | PDF ❌\n\n### 2026-05-24\n- [x] #974 |`;
  t = replaceOnce(t, find, repl, 'US pipeline procesadas');
  await writeFile(p, t);
  console.log('US pipeline.md updated');
}

// 2) Intl pipeline.md — add today's Procesadas section (anchor on first 2026-05-24 or latest header)
{
  const p = 'data/intl/pipeline.md';
  let t = await readFile(p, 'utf-8');
  const newBlock = `### 2026-05-25\n- [x] #982 | https://jobs.ashbyhq.com/modal/0d9c249b-f305-4b0e-b325-3242ac7274e7 | Modal | Forward Deployed Engineer, ML (Stockholm) | Stockholm, Sweden — in-person | 3.0/5 | PDF ✅\n\n`;
  const find = `## Procesadas\n\n`;
  const repl = `## Procesadas\n\n${newBlock}`;
  t = replaceOnce(t, find, repl, 'Intl pipeline procesadas');
  await writeFile(p, t);
  console.log('Intl pipeline.md updated');
}

// 3) scan-history status: added -> processed for the three URLs
async function markProcessed(path, ids) {
  let t = await readFile(path, 'utf-8');
  let changed = 0;
  const lines = t.split('\n').map(line => {
    for (const id of ids) {
      if (line.includes(id) && /\tadded\s*$/.test(line)) {
        changed++;
        return line.replace(/\tadded\s*$/, '\tprocessed');
      }
    }
    return line;
  });
  await writeFile(path, lines.join('\n'));
  console.log(`${path}: ${changed} rows marked processed`);
}
await markProcessed('data/scan-history.tsv', [
  'periodic-labs/dbac407f-a408-44a3-9e7a-895d42649edc',
  'modal/9fadb51f-ce11-41b1-84d5-470e66cc8ee9',
]);

// 4) Intl scan-history: append the Stockholm Modal row (processed)
{
  const p = 'data/intl/scan-history.tsv';
  let t = await readFile(p, 'utf-8');
  if (!t.includes('modal/0d9c249b-f305-4b0e-b325-3242ac7274e7')) {
    if (!t.endsWith('\n')) t += '\n';
    t += `https://jobs.ashbyhq.com/modal/0d9c249b-f305-4b0e-b325-3242ac7274e7\t2026-05-25\tWebSearch — L3 overnight 2026-05-25\tForward Deployed Engineer - ML\tModal\tprocessed\n`;
    await writeFile(p, t);
    console.log('Intl scan-history.tsv: Stockholm Modal row appended');
  } else {
    console.log('Intl scan-history.tsv: Stockholm Modal already present');
  }
}
