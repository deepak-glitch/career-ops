// Popup UI: shows the pipeline pulled from the local bridge, lets the user
// select multiple jobs and either fill the active tab or batch-open the
// selected jobs (each opens in its own tab and auto-fills on load).

const BRIDGE = "http://127.0.0.1:7777";
const FILL_QUEUE_KEY = "fillQueue";          // map of url → { slug, queuedAt }
const SELECTION_KEY = "selectedUrls";        // string[] persisted across re-opens
const BATCH_OPEN_DELAY_MS = 800;             // stagger tab creation

const els = {
  bridgeStatus: document.getElementById("bridge-status"),
  currentInfo: document.getElementById("current-info"),
  fillBtn: document.getElementById("fill-btn"),
  queueCount: document.getElementById("queue-count"),
  minScore: document.getElementById("min-score"),
  portalFilter: document.getElementById("portal-filter"),
  pdfOnly: document.getElementById("pdf-only"),
  selectAll: document.getElementById("select-all"),
  selectedCount: document.getElementById("selected-count"),
  clearSelBtn: document.getElementById("clear-sel-btn"),
  jobList: document.getElementById("job-list"),
  applySelectedBtn: document.getElementById("apply-selected-btn"),
  refreshBtn: document.getElementById("refresh-btn"),
};

let JOBS = [];
let SELECTED = new Set();   // urls
let CURRENT_TAB = null;

// ---- bridge + jobs ---------------------------------------------------

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
  } catch {
    JOBS = [];
  }
  renderJobs();
}

function filteredJobs() {
  const minScore = parseFloat(els.minScore.value) || 0;
  const portal = els.portalFilter.value;
  const pdfOnly = els.pdfOnly.checked;
  return JOBS.filter((j) => {
    if (j.score == null && minScore > 0) return false;
    if (j.score != null && j.score < minScore) return false;
    if (portal && j.portal !== portal) return false;
    if (pdfOnly && !j.hasPdf) return false;
    return true;
  });
}

function renderJobs() {
  const filtered = filteredJobs();
  els.queueCount.textContent = `(${filtered.length} of ${JOBS.length})`;
  els.jobList.innerHTML = "";
  for (const job of filtered.slice(0, 200)) {
    const li = document.createElement("li");
    li.dataset.url = job.url;
    if (SELECTED.has(job.url)) li.classList.add("selected");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = SELECTED.has(job.url);
    check.addEventListener("change", () => toggleSelected(job.url, check.checked, li));
    const body = document.createElement("div");
    body.className = "body";
    body.innerHTML = `
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
    body.addEventListener("click", () => {
      chrome.tabs.create({ url: job.url, active: true });
    });
    li.appendChild(check);
    li.appendChild(body);
    els.jobList.appendChild(li);
  }
  // Reflect "select all" state for current view.
  const visibleUrls = new Set(filtered.map((j) => j.url));
  let allChecked = filtered.length > 0;
  for (const url of visibleUrls) {
    if (!SELECTED.has(url)) { allChecked = false; break; }
  }
  els.selectAll.checked = allChecked;
  refreshSelectionUi();
}

function toggleSelected(url, checked, liEl) {
  if (checked) SELECTED.add(url); else SELECTED.delete(url);
  if (liEl) liEl.classList.toggle("selected", checked);
  saveSelection();
  refreshSelectionUi();
}

function refreshSelectionUi() {
  const n = SELECTED.size;
  els.selectedCount.textContent = `${n} selected`;
  els.applySelectedBtn.disabled = n === 0;
  els.applySelectedBtn.textContent = n > 0
    ? `Apply to selected (${n})`
    : `Apply to selected`;
}

function escape(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---- selection persistence ------------------------------------------

async function loadSelection() {
  const stored = await chrome.storage.local.get(SELECTION_KEY);
  SELECTED = new Set(stored[SELECTION_KEY] || []);
}
async function saveSelection() {
  await chrome.storage.local.set({ [SELECTION_KEY]: [...SELECTED] });
}

// ---- batch apply -----------------------------------------------------

async function applySelected() {
  const urls = [...SELECTED];
  if (urls.length === 0) return;

  // Confirm if it's a lot of tabs.
  if (urls.length > 8) {
    if (!confirm(`Open ${urls.length} tabs and auto-fill each?\n\nNothing will be submitted; you review each tab.`)) {
      return;
    }
  }

  // Mark each URL as queued for auto-fill so the content script triggers
  // the fill on its own when each tab finishes loading.
  const queue = {};
  const now = Date.now();
  for (const url of urls) queue[url] = { queuedAt: now };
  const stored = await chrome.storage.local.get(FILL_QUEUE_KEY);
  const merged = { ...(stored[FILL_QUEUE_KEY] || {}), ...queue };
  await chrome.storage.local.set({ [FILL_QUEUE_KEY]: merged });

  els.applySelectedBtn.disabled = true;
  let opened = 0;
  for (const url of urls) {
    chrome.tabs.create({ url, active: false });
    opened++;
    els.applySelectedBtn.textContent = `opening ${opened}/${urls.length}…`;
    if (opened < urls.length) {
      await new Promise((r) => setTimeout(r, BATCH_OPEN_DELAY_MS));
    }
  }

  els.applySelectedBtn.textContent = `opened ${opened} tabs (review & submit each)`;
  // Clear selection now that the batch has been queued.
  SELECTED.clear();
  await saveSelection();
  setTimeout(() => {
    refreshSelectionUi();
    renderJobs();
  }, 2500);
}

// ---- current-tab helpers --------------------------------------------

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

// ---- wiring ----------------------------------------------------------

els.refreshBtn.addEventListener("click", loadJobs);
els.minScore.addEventListener("input", renderJobs);
els.portalFilter.addEventListener("change", renderJobs);
els.pdfOnly.addEventListener("change", renderJobs);
els.fillBtn.addEventListener("click", triggerFill);
els.applySelectedBtn.addEventListener("click", applySelected);
els.clearSelBtn.addEventListener("click", () => {
  SELECTED.clear();
  saveSelection();
  renderJobs();
});
els.selectAll.addEventListener("change", () => {
  const visible = filteredJobs().slice(0, 200);
  if (els.selectAll.checked) {
    for (const j of visible) SELECTED.add(j.url);
  } else {
    for (const j of visible) SELECTED.delete(j.url);
  }
  saveSelection();
  renderJobs();
});

(async () => {
  await loadSelection();
  const ok = await checkBridge();
  if (ok) await loadJobs();
  await inspectCurrentTab();
})();
