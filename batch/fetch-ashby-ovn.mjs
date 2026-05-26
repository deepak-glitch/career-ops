const q = `query ApiJobBoardWithTeams($organizationHostedJobsPageName: String!) {
  jobBoard: jobBoardWithTeams(organizationHostedJobsPageName: $organizationHostedJobsPageName) {
    jobPostings { id title locationName employmentType compensationTierSummary }
  }
}`;

const detailQ = `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
  jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
    id title departmentName locationName employmentType descriptionPlain compensationTierSummary
  }
}`;

async function get(org, id) {
  console.log('=== ' + org + ' / ' + id + ' ===');
  // try detail first
  try {
    const r = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ operationName: 'ApiJobPosting', variables: { organizationHostedJobsPageName: org, jobPostingId: id }, query: detailQ }),
    });
    const j = await r.json();
    const p = j?.data?.jobPosting;
    if (p && p.descriptionPlain) { console.log(JSON.stringify({ title: p.title, location: p.locationName, dept: p.departmentName, type: p.employmentType, comp: p.compensationTierSummary }, null, 2)); console.log('--- DESCRIPTION ---'); console.log(p.descriptionPlain); return; }
  } catch (e) { console.log('detail err', e.message); }
  // fallback: list
  const r2 = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobBoardWithTeams', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operationName: 'ApiJobBoardWithTeams', variables: { organizationHostedJobsPageName: org }, query: q }),
  });
  const j2 = await r2.json();
  const posts = j2?.data?.jobBoard?.jobPostings || [];
  const p2 = posts.find((x) => x.id === id);
  if (p2) console.log(JSON.stringify(p2, null, 2));
  else { console.log('NOT FOUND. All:'); posts.forEach((x) => console.log(x.id, '|', x.title, '|', x.locationName)); }
}

const targets = process.argv.slice(2).map((s) => s.split('::'));
(async () => { for (const [org, id] of targets) await get(org, id); })();
