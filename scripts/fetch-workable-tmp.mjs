// Try multiple Workable endpoints for a job by account slug + shortcode.
const [slug, code] = process.argv.slice(2);
if (!slug || !code) { console.error('Usage: <accountSlug> <shortcode>'); process.exit(1); }
const urls = [
  `https://apply.workable.com/api/v3/accounts/${slug}/jobs/${code}`,
  `https://apply.workable.com/api/v2/accounts/${slug}/jobs/${code}`,
  `https://apply.workable.com/api/v1/widget/accounts/${slug}?details=true&shortcode=${code}`,
  `https://${slug}.workable.com/spi/v3/jobs/${code}`,
];
for (const url of urls) {
  try {
    const r = await fetch(url, { headers: { Accept: 'application/json' } });
    console.error(`[try] ${url} -> ${r.status}`);
    if (r.ok) {
      const text = await r.text();
      console.log(text.slice(0, 12000));
      process.exit(0);
    }
  } catch (e) {
    console.error(`[err] ${url} -> ${e.message}`);
  }
}
process.exit(2);
