const targets = [
  ["openai", "51b17595-3a70-43be-a333-3a3952303284"],
  ["openai", "e98851f0-08d7-42ef-a499-dc96d8f96dab"],
  ["openai", "9e39d642-6c78-4c21-bc86-49b1773c933c"],
  ["happyrobot.ai", "138134f5-5f42-4e51-9b8d-b832454fc2b7"],
  ["relevanceai", "cfcef972-b2df-46f9-8f58-e54504b3cd36"],
];

const query = `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
  jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
    title
    locationName
    departmentName
    employmentType
    descriptionHtml
    isListed
    secondaryLocationNames
  }
}`;

for (const [org, id] of targets) {
  try {
    const res = await fetch("https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobPosting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operationName: "ApiJobPosting",
        variables: { organizationHostedJobsPageName: org, jobPostingId: id },
        query,
      }),
    });
    const json = await res.json();
    const jp = json?.data?.jobPosting;
    if (!jp) {
      console.log(`=== ${org}/${id} === NOT FOUND`);
      console.log(JSON.stringify(json).slice(0, 600));
      continue;
    }
    console.log(`\n=== ${org}/${id} ===`);
    console.log(`Title: ${jp.title}`);
    console.log(`Location: ${jp.locationName}`);
    console.log(`Secondary: ${(jp.secondaryLocationNames || []).join(", ")}`);
    console.log(`Dept: ${jp.departmentName}`);
    console.log(`Employment: ${jp.employmentType}`);
    console.log(`Listed: ${jp.isListed}`);
    const text = (jp.descriptionHtml || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    console.log(`Description (${text.length} chars):`);
    console.log(text.slice(0, 5500));
  } catch (e) {
    console.log(`=== ${org}/${id} === ERROR ${e.message}`);
  }
}
