const [acct, shortcode] = process.argv[2].split('::');
const urls = [
  `https://apply.workable.com/api/v2/accounts/${acct}/jobs/${shortcode}`,
  `https://apply.workable.com/api/v1/widget/accounts/${acct}/jobs/${shortcode}`,
  `https://www.workable.com/api/accounts/${acct}?job=${shortcode}`,
];
(async () => {
  for (const u of urls) {
    try {
      const r = await fetch(u, { headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0' } });
      console.log('### ' + u + '  -> ' + r.status);
      if (r.status === 200) {
        const t = await r.text();
        console.log(t.slice(0, 6000));
        return;
      }
    } catch (e) { console.log('err', u, e.message); }
  }
})();
