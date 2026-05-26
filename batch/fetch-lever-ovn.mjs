const [company, id] = process.argv[2].split('::');
(async () => {
  const r = await fetch('https://api.lever.co/v0/postings/' + company + '?mode=json');
  console.log('list status', r.status);
  const arr = await r.json();
  console.log('count', Array.isArray(arr) ? arr.length : 'n/a');
  if (Array.isArray(arr)) {
    const p = arr.find((x) => x.id === id);
    if (p) {
      console.log('=== FOUND ===');
      console.log(JSON.stringify({ title: p.text, location: p.categories?.location, commitment: p.categories?.commitment, team: p.categories?.team, workplaceType: p.workplaceType }, null, 2));
      console.log('--- DESC ---');
      console.log(p.descriptionPlain || '');
      (p.lists || []).forEach((l) => { console.log('## ' + l.text); console.log(l.content.replace(/<[^>]+>/g, '')); });
      console.log('--- CLOSING ---');
      console.log((p.additionalPlain || ''));
    } else {
      console.log('ID NOT IN LIST. Titles:');
      arr.forEach((x) => console.log(x.id, '|', x.text, '|', x.categories?.location));
    }
  }
})();
