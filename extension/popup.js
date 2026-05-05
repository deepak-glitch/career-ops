// Popup UI: shows the pipeline pulled from the local bridge, lets the user
// open a job (in a new tab) or trigger a fill on the current tab.

const BRIDGE = "http://127.0.0.1:7777";

const els = {
  bridgeStatus: document.getElementById("bridge-status"),
  currentInfo: document.getElementById("current-info"),
  fillBtn: document.getElementById("fill-btn"),
  queueCount: document.getElementById("queue-count"),
  minScore: document.getElementById("min-score"),
  portalFilter: document.getElementById("portal-filter"),
  jobList: document.getElementById("job-list"),
  refreshBtn: document.getElementById("refresh-btn"),
};

let JOBS = [];
let CURRENT_TAB = null;

async function checkBridge() {
  try {
    const r = await fetch(`${BRIDGE}/health`);
    if (!r.ok) throw new Error(`status ${r.status}`);
    const j = await r.json();
    els.bridgeStatus.textContent = `bridge ok :${j.port}`;
    els.bridgeStatus.classList.add("ok");
    return true;
  } catch (e) {
    els.bridgeStatus.textContent = "bridge offline";
    els.bridgeStatus.classList.add("err");
    return false;
  }
}

async function loadJobs() {
  try {
    const r = await fetch(`${BRIDGE}/jobs`);
    const j = await r.json();
    JOBS = j.jobs || [];
    renderJobs();
  } catch (e) {
    JOBS = [];
    renderJobs();
  }
}

function renderJobs() {
  const minScore = parseFloat(els.minScore.value) || 0;
  const portal = els.portalFilter.value;
  const filtered = JOBS.filter((j) => {
    if (j.score == null && minScore > 0) return false;
    if (j.score != null && j.score < minScore) return false;
    if (portal && j.portal !== portal) return false;
    return true;
  });
  els.queueCount.textContent = `(${filtered.length} of ${JOBS.length})`;
  els.jobList.innerHTML = "";
  for (const job of filtered.slice(0, 100)) {
    const li = document.createElement("li");
    li.dataset.url = job.url;
    li.innerHTML = `
      <div class="row1">
        <span class="company">${escape(job.company)}</span>
        <span class="score">${escape(job.scoreLabel)}</span>
      </div>
      <div class="role">${escape(job.role)}</div>
      <div class="meta">
        <span>#${job.num}</span>
        <span>${job.portal}</span>
        <span class="${job.hasPdf ? "" : "no-pdf"}">${job.hasPdf ? "PDF ✓" : "no PDF"}</span>
        <span>${job.date}</span>
      </div>
    `;
    li.addEventListener("click", () => {
      chrome.tabs.create({ url: job.url, active: true });
    });
    els.jobList.appendChild(li);
  }
}

function escape(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function inspectCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  CURRENT_TAB = tab || null;
  if (!tab || !tab.url || !/^https?:/.test(tab.url)) {
    els.currentInfo.textContent = "open a job posting tab";
    els.fillBtn.disabled = true;
    return;
  }
  try {
    const r = await fetch(`${BRIDGE}/resolve?url=${encodeURIComponent(tab.url)}`);
    const j = await r.json();
    if (!j.report) {
      els.currentInfo.innerHTML =
        `<div>portal: <b>${escape(j.portal)}</b></div>` +
        `<div>no career-ops report for this URL</div>` +
        `<div>(will fill applicant fields, no tailored PDF)</div>`;
    } else {
      els.currentInfo.innerHTML =
        `<div><b>${escape(j.report.company || "?")}</b> — ${escape(j.report.role || "?")}</div>` +
        `<div>portal: ${escape(j.portal)} · slug: ${escape(j.slug || "—")}</div>` +
        `<div>resume: ${j.resumePdfUrl ? "✓" : "✗"}</div>`;
    }
    els.fillBtn.disabled = false;
  } catch (e) {
    els.currentInfo.textContent = `bridge error: ${e.message}`;
    els.fillBtn.disabled = true;
  }
}

async function triggerFill() {
  if (!CURRENT_TAB) return;
  els.fillBtn.disabled = true;
  els.fillBtn.textContent = "filling…";
  try {
    const result = await chrome.tabs.sendMessage(CURRENT_TAB.id, {
      type: "AUTO_APPLY_FILL",
      bridge: BRIDGE,
    });
    if (result?.ok) {
      els.fillBtn.textContent = `filled ${result.filled}/${result.total} (review & submit)`;
    } else {
      els.fillBtn.textContent = `error: ${result?.error || "unknown"}`;
    }
  } catch (e) {
    els.fillBtn.textContent = `error: ${e.message}`;
  }
  setTimeout(() => {
    els.fillBtn.textContent = "Fill this form";
    els.fillBtn.disabled = false;
  }, 4000);
}

els.refreshBtn.addEventListener("click", loadJobs);
els.minScore.addEventListener("input", renderJobs);
els.portalFilter.addEventListener("change", renderJobs);
els.fillBtn.addEventListener("click", triggerFill);

(async () => {
  const ok = await checkBridge();
  if (ok) await loadJobs();
  await inspectCurrentTab();
})();
