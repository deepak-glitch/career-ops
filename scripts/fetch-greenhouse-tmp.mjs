// One-off helper: fetch a Greenhouse job posting via the public boards API.
const [slug, id] = process.argv.slice(2);
if (!slug || !id) {
  console.error('Usage: node scripts/fetch-greenhouse-tmp.mjs <boardSlug> <jobId>');
  process.exit(1);
}
const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/${slug}/jobs/${id}`, {
  headers: { Accept: 'application/json' },
});
if (!res.ok) {
  console.error(`HTTP ${res.status} from greenhouse`);
  process.exit(2);
}
const j = await res.json();
const stripped = (j.content || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
console.log('TITLE:', j.title);
console.log('LOCATION:', j.location?.name);
console.log('OFFICES:', (j.offices || []).map(o => o.name).join(' / '));
console.log('UPDATED:', j.updated_at);
console.log('---');
console.log(stripped);
