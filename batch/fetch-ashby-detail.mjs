const detailQ = `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
  jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
    id title departmentName locationName employmentType compensationTierSummary
    descriptionPlain descriptionHtml
  }
}`;
const [org, id] = process.argv[2].split('::');
(async () => {
  const r = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operationName: 'ApiJobPosting', variables: { organizationHostedJobsPageName: org, jobPostingId: id }, query: detailQ }),
  });
  const j = await r.json();
  if (j.errors) console.log('ERRORS', JSON.stringify(j.errors));
  const p = j?.data?.jobPosting;
  if (!p) { console.log('NO POSTING'); return; }
  console.log(JSON.stringify({ title: p.title, location: p.locationName, dept: p.departmentName, type: p.employmentType, comp: p.compensationTierSummary }, null, 2));
  console.log('--- DESCRIPTION ---');
  console.log(p.descriptionPlain || p.descriptionHtml || '(none)');
})();
