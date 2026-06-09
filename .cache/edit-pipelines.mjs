import fs from "node:fs";

// --- US: move Celonis to Procesadas ---
{
  const path = "data/pipeline.md";
  let s = fs.readFileSync(path, "utf8");
  const oldBlock = [
    "## Pending",
    "",
    "### 2026-06-09",
    "",
    "- [ ] https://job-boards.greenhouse.io/celonis/jobs/7765677003?gh_jid=7765677003 | Celonis | Associate Applied AI Engineer (DACH) - Orbit Program | Madrid, Spain",
    "",
    "## Processed",
    "",
    "### 2026-06-09",
    "- [x] #1263 | https://job-boards.greenhouse.io/stratacareers/jobs/7452181003 | Strata Decision | Applied Machine Learning Engineer | Chicago, IL — Hybrid 2d/wk (relocate <40mi) | 3.5/5 | PDF ✅",
    "- [x] #1264 | https://apply.workable.com/teserac-inc/j/9E22CF096F/ | Teserac | AI Engineer | Not specified (US-based, verify) | 3.2/5 | PDF ✅",
  ].join("\n");
  const newBlock = [
    "## Pending",
    "",
    "",
    "## Processed",
    "",
    "### 2026-06-09",
    "- [x] #1263 | https://job-boards.greenhouse.io/stratacareers/jobs/7452181003 | Strata Decision | Applied Machine Learning Engineer | Chicago, IL — Hybrid 2d/wk (relocate <40mi) | 3.5/5 | PDF ✅",
    "- [x] #1264 | https://apply.workable.com/teserac-inc/j/9E22CF096F/ | Teserac | AI Engineer | Not specified (US-based, verify) | 3.2/5 | PDF ✅",
    "- [x] #1265 | https://job-boards.greenhouse.io/celonis/jobs/7765677003?gh_jid=7765677003 | Celonis | Associate Applied AI Engineer (DACH) - Orbit Program | Madrid, Spain — Hybrid | 1.7/5 SKIP | PDF ❌",
  ].join("\n");
  if (!s.includes(oldBlock)) {
    console.error("US: OLD BLOCK NOT FOUND");
    process.exit(1);
  }
  fs.writeFileSync(path, s.replace(oldBlock, newBlock));
  console.log("US: updated");
}

// --- Intl: clear Pendientes (move 4 to Procesadas, leave Relevance as [!] for cleanup-bang-rows) ---
{
  const path = "data/intl/pipeline.md";
  let s = fs.readFileSync(path, "utf8");
  const oldPending = [
    "## Pending",
    "",
    "### 2026-06-09",
    "- [ ] https://jobs.ashbyhq.com/openai/51b17595-3a70-43be-a333-3a3952303284 | OpenAI | Forward Deployed Engineer - Tokyo | Tokyo, Japan",
    "- [ ] https://jobs.ashbyhq.com/openai/e98851f0-08d7-42ef-a499-dc96d8f96dab | OpenAI | Forward Deployed Software Engineer - Tokyo | Tokyo, Japan",
    "- [ ] https://jobs.ashbyhq.com/openai/9e39d642-6c78-4c21-bc86-49b1773c933c | OpenAI | Forward Deployed Engineer - Sydney | Sydney, Australia",
    "- [ ] https://jobs.ashbyhq.com/happyrobot.ai/138134f5-5f42-4e51-9b8d-b832454fc2b7 | Happyrobot | Forward Deployed Engineer | Singapore",
    "- [ ] https://jobs.ashbyhq.com/relevanceai/cfcef972-b2df-46f9-8f58-e54504b3cd36 | Relevance AI | Forward Deployed Engineer - Travel Required | Sydney, Australia",
    "",
    "## Processed",
  ].join("\n");
  const newPending = [
    "## Pending",
    "",
    "### 2026-06-09",
    "- [!] https://jobs.ashbyhq.com/relevanceai/cfcef972-b2df-46f9-8f58-e54504b3cd36 | error: posting not found (Ashby GraphQL returned null; likely removed)",
    "",
    "## Processed",
    "",
    "### 2026-06-09",
    "- [x] #1266 | https://jobs.ashbyhq.com/openai/51b17595-3a70-43be-a333-3a3952303284 | OpenAI | Forward Deployed Engineer - Tokyo | Tokyo, Japan — Hybrid 3d/wk + travel | 1.5/5 SKIP | PDF ❌",
    "- [x] #1267 | https://jobs.ashbyhq.com/openai/e98851f0-08d7-42ef-a499-dc96d8f96dab | OpenAI | Forward Deployed Software Engineer - Tokyo | Tokyo, Japan — Hybrid 3d/wk | 1.5/5 SKIP | PDF ❌",
    "- [x] #1268 | https://jobs.ashbyhq.com/openai/9e39d642-6c78-4c21-bc86-49b1773c933c | OpenAI | Forward Deployed Engineer - Sydney | Sydney, Australia — Hybrid 3d/wk + 50% travel | 2.6/5 SKIP | PDF ❌",
    "- [x] #1269 | https://jobs.ashbyhq.com/happyrobot.ai/138134f5-5f42-4e51-9b8d-b832454fc2b7 | Happyrobot | Forward Deployed Engineer | Singapore — On-site | 2.6/5 SKIP | PDF ❌",
  ].join("\n");
  if (!s.includes(oldPending)) {
    console.error("INTL: OLD BLOCK NOT FOUND");
    process.exit(1);
  }
  fs.writeFileSync(path, s.replace(oldPending, newPending));
  console.log("INTL: updated");
}

// --- Mark Relevance AI as dead in scan-history ---
{
  const path = "data/intl/scan-history.tsv";
  let s = fs.readFileSync(path, "utf8");
  s = s.replace(
    /https:\/\/jobs\.ashbyhq\.com\/relevanceai\/cfcef972-b2df-46f9-8f58-e54504b3cd36\t2026-06-09\t([^\t]+)\t([^\t]+)\t([^\t]+)\tadded/,
    "https://jobs.ashbyhq.com/relevanceai/cfcef972-b2df-46f9-8f58-e54504b3cd36\t2026-06-09\t$1\t$2\t$3\tdead"
  );
  fs.writeFileSync(path, s);
  console.log("INTL history: marked Relevance AI as dead");
}

console.log("All pipeline edits applied");
