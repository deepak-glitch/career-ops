// Try multiple Greenhouse boards endpoints to fetch a job by id.
const [slug, id] = process.argv.slice(2);
if (!slug || !id) { console.error('Usage: <slug> <id>'); process.exit(1); }
const bases = [
  'https://boards-api.greenhouse.io/v1/boards',
  'https://boards-api.eu.greenhouse.io/v1/boards',
];
for (const base of bases) {
  const url = `${base}/${slug}/jobs/${id}`;
  const r = await fetch(url, { headers: { Accept: 'application/json' } });
  console.error(`[try] ${url} -> ${r.status}`);
  if (r.ok) {
    const j = await r.json();
    const stripped = (j.content || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
    console.log('TITLE:', j.title);
    console.log('LOCATION:', j.location?.name);
    console.log('OFFICES:', (j.offices || []).map(o => o.name).join(' / '));
    console.log('UPDATED:', j.updated_at);
    console.log('---');
    console.log(stripped);
    process.exit(0);
  }
}
console.error('All endpoints failed');
process.exit(2);
