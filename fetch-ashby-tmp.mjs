const body = {
  operationName: "ApiJobPosting",
  variables: {
    organizationHostedJobsPageName: "supermodular.ai",
    jobPostingId: "d7b70138-cd54-4069-8099-6e92d83722a9"
  },
  query: `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
    jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
      id title locationName employmentType compensationTierSummary departmentName teamNames
      descriptionHtml
      secondaryLocationNames
    }
  }`
};
const r = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
});
const j = await r.json();
const jp = j?.data?.jobPosting;
if (jp) {
  // strip HTML tags
  const text = (jp.descriptionHtml || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('TITLE:', jp.title);
  console.log('LOCATION:', jp.locationName, jp.secondaryLocationNames || '');
  console.log('EMPLOYMENT:', jp.employmentType);
  console.log('COMP:', jp.compensationTierSummary);
  console.log('DEPT:', jp.departmentName, '| TEAMS:', jp.teamNames);
  console.log('---');
  console.log(text);
} else {
  console.log(JSON.stringify(j, null, 2));
}
