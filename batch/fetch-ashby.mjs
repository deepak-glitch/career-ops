// Fetch Ashby JD via GraphQL
const orgs = [
  { name: "runlayer", id: "17c5964a-c58a-44b7-ae0c-e6f96cae7ffd" },
  { name: "endgame", id: "bbd53a1c-ce07-4a4c-8b3d-ee05a36e7c5a" },
  { name: "permitflow", id: "78b1fccf-2ed9-4485-bd40-4a5aea3907d4" },
  { name: "mostest", id: "68e436d6-b632-434e-93ab-9314a642dce5" },
  { name: "tandem-health", id: "583fef4f-4417-40d9-a87e-e405180f71ce" }
];

const query = `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
  jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
    id
    title
    descriptionHtml
    locationName
    employmentType
    compensationTierSummary
    departmentName
    teamNames
    publishedDate
  }
}`;

for (const o of orgs) {
  try {
    const resp = await fetch("https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operationName: "ApiJobPosting",
        variables: { organizationHostedJobsPageName: o.name, jobPostingId: o.id },
        query
      })
    });
    const data = await resp.json();
    const jp = data?.data?.jobPosting;
    if (!jp) {
      console.log(`\n===== ${o.name} =====\nNULL response: ${JSON.stringify(data).slice(0, 500)}`);
      continue;
    }
    console.log(`\n===== ${o.name} =====`);
    console.log(`TITLE: ${jp.title}`);
    console.log(`LOC: ${jp.locationName}`);
    console.log(`EMP: ${jp.employmentType}`);
    console.log(`COMP: ${jp.compensationTierSummary}`);
    console.log(`PUB: ${jp.publishedDate}`);
    console.log(`DEPT: ${jp.departmentName} / ${(jp.teamNames || []).join(", ")}`);
    console.log(`---DESC---`);
    const html = jp.descriptionHtml || "";
    const text = html
      .replace(/<\/(p|li|div|h\d|br)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\n{3,}/g, "\n\n");
    console.log(text.slice(0, 15000));
  } catch (e) {
    console.log(`\n===== ${o.name} =====\nERROR: ${e.message}`);
  }
}
