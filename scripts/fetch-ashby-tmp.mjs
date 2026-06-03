// One-off helper: fetch an Ashby job posting by org + id and print JSON.
// Used during overnight runs to extract JDs from Ashby-hosted boards
// (which don't render via WebFetch — see modes/scan.md fallback table).
//
// Usage: node scripts/fetch-ashby-tmp.mjs <organizationSlug> <jobPostingId>
const [org, id] = process.argv.slice(2);
if (!org || !id) {
  console.error('Usage: node scripts/fetch-ashby-tmp.mjs <org> <jobId>');
  process.exit(1);
}
const res = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    operationName: 'ApiJobPosting',
    variables: { organizationHostedJobsPageName: org, jobPostingId: id },
    query: 'query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) { jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) { title locationName departmentName employmentType compensationTierSummary descriptionHtml } }',
  }),
});
const j = await res.json();
const jp = j?.data?.jobPosting;
if (!jp) {
  console.error('No jobPosting in response:', JSON.stringify(j).slice(0, 500));
  process.exit(2);
}
const stripped = (jp.descriptionHtml || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
console.log('TITLE:', jp.title);
console.log('LOCATION:', jp.locationName);
console.log('DEPT:', jp.departmentName);
console.log('EMPLOYMENT:', jp.employmentType);
console.log('COMP:', jp.compensationTierSummary);
console.log('---');
console.log(stripped);
