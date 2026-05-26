const detailQ = `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
  jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
    id title departmentName locationName employmentType compensationTierSummary descriptionHtml
  }
}`;
const [org, id] = process.argv[2].split('::');
(async () => {
  const r = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operationName: 'ApiJobPosting', variables: { organizationHostedJobsPageName: org, jobPostingId: id }, query: detailQ }),
  });
  const j = await r.json();
  if (j.errors) { console.log('ERRORS', JSON.stringify(j.errors)); return; }
  const p = j?.data?.jobPosting;
  if (!p) { console.log('NO POSTING (likely closed/removed)'); return; }
  console.log(JSON.stringify({ title: p.title, location: p.locationName, dept: p.departmentName, type: p.employmentType, comp: p.compensationTierSummary }, null, 2));
  console.log('--- DESCRIPTION ---');
  console.log((p.descriptionHtml || '').replace(/<\/(p|li|h[1-4]|div)>/g, '\n').replace(/<li>/g, '- ').replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\n{3,}/g,'\n\n'));
})();
