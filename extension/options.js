// Settings page: store the GitHub PAT + repo + branch + poll interval, and
// validate that the token can reach the auto-apply branch's bundled data.
const KEY = "githubSource";

const els = {
  token: document.getElementById("token"),
  reveal: document.getElementById("reveal-btn"),
  repo: document.getElementById("repo"),
  branch: document.getElementById("branch"),
  pollSecs: document.getElementById("poll-secs"),
  pollDisplay: document.getElementById("poll-display"),
  save: document.getElementById("save-btn"),
  clear: document.getElementById("clear-btn"),
  status: document.getElementById("status"),
};

async function load() {
  const stored = await chrome.storage.local.get(KEY);
  const cfg = stored[KEY] || {};
  if (cfg.token) els.token.value = cfg.token;
  if (cfg.repo) els.repo.value = cfg.repo;
  if (cfg.branch) els.branch.value = cfg.branch;
  if (cfg.pollSecs != null) {
    els.pollSecs.value = cfg.pollSecs;
    els.pollDisplay.textContent = cfg.pollSecs;
  }
}

function setStatus(msg, kind = "info") {
  els.status.textContent = msg;
  els.status.className = `status ${kind}`;
}

els.reveal.addEventListener("click", () => {
  els.token.type = els.token.type === "password" ? "text" : "password";
  els.reveal.textContent = els.token.type === "password" ? "show" : "hide";
});

els.pollSecs.addEventListener("input", () => {
  els.pollDisplay.textContent = els.pollSecs.value;
});

els.clear.addEventListener("click", async () => {
  await chrome.storage.local.remove(KEY);
  els.token.value = "";
  setStatus("cleared", "info");
});

els.save.addEventListener("click", async () => {
  const cfg = {
    token: els.token.value.trim(),
    repo: els.repo.value.trim() || "deepak-glitch/career-ops",
    branch: els.branch.value.trim() || "auto-apply",
    pollSecs: parseInt(els.pollSecs.value, 10) || 0,
  };
  if (!cfg.token) {
    setStatus("paste a token first", "err");
    return;
  }

  setStatus("testing token …", "info");
  try {
    // 1. Validate the token by hitting /user.
    const userResp = await fetch("https://api.github.com/user", {
      headers: { Authorization: `token ${cfg.token}`, Accept: "application/vnd.github+json" },
    });
    if (!userResp.ok) throw new Error(`token invalid (${userResp.status})`);
    const user = await userResp.json();

    // 2. Check the branch exists.
    const branchResp = await fetch(
      `https://api.github.com/repos/${cfg.repo}/branches/${encodeURIComponent(cfg.branch)}`,
      { headers: { Authorization: `token ${cfg.token}`, Accept: "application/vnd.github+json" } }
    );
    if (!branchResp.ok) throw new Error(`branch ${cfg.branch} not reachable (${branchResp.status})`);

    // 3. Try fetching jobs.json from raw.
    const rawResp = await fetch(
      `https://raw.githubusercontent.com/${cfg.repo}/${cfg.branch}/extension/data/jobs.json`,
      { headers: { Authorization: `token ${cfg.token}` } }
    );
    if (!rawResp.ok) throw new Error(`extension/data/jobs.json missing (${rawResp.status}) — run \`node bundle-data.mjs\` and push first`);
    const snap = await rawResp.json();

    await chrome.storage.local.set({ [KEY]: cfg });
    setStatus(
      `✓ token: ${user.login}\n✓ branch: ${cfg.repo}@${cfg.branch}\n✓ bundle: ${snap.jobCount} jobs · ${snap.pdfCount} PDFs · ${snap.bundledAt}`,
      "ok"
    );
  } catch (e) {
    setStatus(`✗ ${e.message}`, "err");
  }
});

load();
