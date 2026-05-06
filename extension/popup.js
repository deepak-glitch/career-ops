// Popup UI: shows the pipeline pulled from the local bridge, lets the user
// select multiple jobs and either fill the active tab or batch-open the
// selected jobs (each opens in its own tab and auto-fills on load).

const BRIDGE = "http://127.0.0.1:7777";
const FILL_QUEUE_KEY = "fillQueue";          // map of url → { slug, queuedAt }
const SELECTION_KEY = "selectedUrls";        // string[] persisted across re-opens
const BATCH_OPEN_DELAY_MS = 800;             // stagger tab creation

let CURRENT_MODE = "bundle";                 // "bridge" | "github" | "bundle"
let LAST_BUNDLED_AT = null;                  // string from jobs.json; used to detect changes
let POLL_TIMER = null;

const els = {
  bridgeStatus: document.getElementById("bridge-status"),
  currentInfo: document.getElementById("current-info"),
  fillBtn: document.getElementById("fill-btn"),
  queueCount: document.getElementById("queue-count"),
  minScore: document.getElementById("min-score"),
  portalFilter: document.getElementById("portal-filter"),
  pdfOnly: document.getElementById("pdf-only"),
  sortBy: document.getElementById("sort-by"),
  dateFrom: document.getElementById("date-from"),
  dateTo: document.getElementById("date-to"),
  dateClearBtn: document.getElementById("date-clear-btn"),
  selectAll: document.getElementById("select-all"),
  selectedCount: document.getElementById("selected-count"),
  clearSelBtn: document.getElementById("clear-sel-btn"),
  jobList: document.getElementById("job-list"),
  applySelectedBtn: document.getElementById("apply-selected-btn"),
  refreshBtn: document.getElementById("refresh-btn"),
  settingsBtn: document.getElementById("settings-btn"),
};

let JOBS = [];
let SELECTED = new Set();   // urls
let CURRENT_TAB = null;

// ---- bridge + jobs ---------------------------------------------------

function modeBadge(mode, snap) {
  els.bridgeStatus.classList.remove("ok", "err");
  if (mode === "bridge") {
    els.bridgeStatus.textContent = `bridge`;
    els.bridgeStatus.classList.add("ok");
  } else if (mode === "github") {
    const stamp = (snap?.bundledAt || "").slice(0, 19).replace("T", " ");
    els.bridgeStatus.textContent = `github · ${stamp || "live"}`;
    els.bridgeStatus.classList.add("ok");
  } else if (mode === "bundle") {
    const stamp = (snap?.bundledAt || "").slice(0, 19).replace("T", " ");
    els.bridgeStatus.textContent = `bundle ${stamp}`;
    els.bridgeStatus.classList.add("ok");
  } else {
    els.bridgeStatus.textContent = "no source";
    els.bridgeStatus.classList.add("err");
  }
}

// Re-checked on every popup open. The source resolver in sources.js picks
// the highest-priority backend (bridge → github → bundle) so the popup auto-
// updates whenever live data appears.
async function loadJobs(opts = {}) {
  const result = await window.careerOpsSources.fetchJobs();
  CURRENT_MODE = result.mode;
  JOBS = result.value?.jobs || [];
  const stamp = result.value?.bundledAt || null;
  modeBadge(result.mode, result.value);
  // Detect change-since-last-poll so we can flash the status badge.
  if (LAST_BUNDLED_AT && stamp && LAST_BUNDLED_AT !== stamp && !opts.firstLoad) {
    els.bridgeStatus.classList.add("flash");
    setTimeout(() => els.bridgeStatus.classList.remove("flash"), 1500);
  }
  LAST_BUNDLED_AT = stamp;
  renderJobs();
}

async function startPolling() {
  if (POLL_TIMER) clearInterval(POLL_TIMER);
  const cfg = await window.careerOpsSources.getGithubSettings();
  // Bridge mode polls fast (it's local); github/bundle modes use the user-
  // configured cadence (default 60s, 0 = disabled).
  let intervalMs = 0;
  if (CURRENT_MODE === "bridge") intervalMs = 30 * 1000;
  else if (cfg && cfg.pollSecs > 0) intervalMs = cfg.pollSecs * 1000;
  if (intervalMs > 0) {
    POLL_TIMER = setInterval(loadJobs, intervalMs);
  }
}

function filteredJobs() {
  const minScore = parseFloat(els.minScore.value) || 0;
  const portal = els.portalFilter.value;
  const pdfOnly = els.pdfOnly.checked;
  const dateFrom = els.dateFrom.value || null; // YYYY-MM-DD
  const dateTo = els.dateTo.value || null;
  const sortBy = els.sortBy.value;

  const filtered = JOBS.filter((j) => {
    if (j.score == null && minScore > 0) return false;
    if (j.score != null && j.score < minScore) return false;
    if (portal && j.portal !== portal) return false;
    if (pdfOnly && !j.hasPdf) return false;
    if (dateFrom && (!j.date || j.date < dateFrom)) return false;
    if (dateTo && (!j.date || j.date > dateTo)) return false;
    return true;
  });

  // Sort. Tracker dates are YYYY-MM-DD strings → string compare is correct.
  filtered.sort((a, b) => {
    if (sortBy === "date-desc") {
      const d = (b.date || "").localeCompare(a.date || "");
      if (d !== 0) return d;
      return (b.score ?? 0) - (a.score ?? 0);
    }
    if (sortBy === "date-asc") {
      const d = (a.date || "").localeCompare(b.date || "");
      if (d !== 0) return d;
      return (b.score ?? 0) - (a.score ?? 0);
    }
    if (sortBy === "company") {
      return (a.company || "").localeCompare(b.company || "");
    }
    // default: score desc, then most recent date
    return (b.score ?? 0) - (a.score ?? 0)
      || (b.date || "").localeCompare(a.date || "");
  });
  return filtered;
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
    const prefillBadge = job.hasPrefill
      ? `<span class="prefill-ok" title="all ${job.prefillSummary?.total ?? "?"} fields prefilled (${job.prefillSummary?.high ?? "?"} high · ${job.prefillSummary?.draft ?? "?"} draft · ${job.prefillSummary?.needsReview ?? "?"} review)">prefilled ✓</span>`
      : `<span class="prefill-no">no prefill</span>`;
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
        ${prefillBadge}
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
    const [resolveResult, prefillResult] = await Promise.all([
      window.careerOpsSources.fetchResolve(tab.url),
      window.careerOpsSources.fetchPrefill(tab.url),
    ]);
    const j = resolveResult.value || {};
    const prefillResp = prefillResult.value;
    let html = "";
    if (!j.report) {
      html =
        `<div>portal: <b>${escape(j.portal)}</b></div>` +
        `<div>no career-ops report for this URL</div>` +
        `<div>(will fill applicant fields, no tailored PDF)</div>`;
    } else {
      html =
        `<div><b>${escape(j.report.company || "?")}</b> — ${escape(j.report.role || "?")}</div>` +
        `<div>portal: ${escape(j.portal)} · slug: ${escape(j.slug || "—")}</div>` +
        `<div>resume: ${j.resumePdfUrl ? "✓" : "✗"}</div>`;
    }
    if (prefillResp?.summary) {
      const s = prefillResp.summary;
      html += `<div class="prefill-info">prefill: ${s.high}/${s.total} high · ${s.draft} draft · ${s.needsReview} review</div>`;
    } else {
      html += `<div class="prefill-info muted">no prefill (run scrape-forms.py + prefill.mjs)</div>`;
    }
    els.currentInfo.innerHTML = html;
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

// ---- filter persistence ---------------------------------------------
// Remember sort + date range across popup re-opens.

const FILTER_KEY = "filterPrefs";

async function loadFilterPrefs() {
  const stored = await chrome.storage.local.get(FILTER_KEY);
  const prefs = stored[FILTER_KEY] || {};
  if (prefs.minScore != null) els.minScore.value = prefs.minScore;
  if (prefs.portal != null) els.portalFilter.value = prefs.portal;
  if (prefs.pdfOnly != null) els.pdfOnly.checked = prefs.pdfOnly;
  if (prefs.sortBy) els.sortBy.value = prefs.sortBy;
  if (prefs.dateFrom) els.dateFrom.value = prefs.dateFrom;
  if (prefs.dateTo) els.dateTo.value = prefs.dateTo;
}

async function saveFilterPrefs() {
  await chrome.storage.local.set({
    [FILTER_KEY]: {
      minScore: els.minScore.value,
      portal: els.portalFilter.value,
      pdfOnly: els.pdfOnly.checked,
      sortBy: els.sortBy.value,
      dateFrom: els.dateFrom.value,
      dateTo: els.dateTo.value,
    },
  });
}

function onFilterChange() {
  saveFilterPrefs();
  renderJobs();
}

// ---- wiring ----------------------------------------------------------

els.refreshBtn.addEventListener("click", () => loadJobs({ firstLoad: false }));
els.settingsBtn.addEventListener("click", () => chrome.runtime.openOptionsPage());
els.minScore.addEventListener("input", onFilterChange);
els.portalFilter.addEventListener("change", onFilterChange);
els.pdfOnly.addEventListener("change", onFilterChange);
els.sortBy.addEventListener("change", onFilterChange);
els.dateFrom.addEventListener("change", onFilterChange);
els.dateTo.addEventListener("change", onFilterChange);
els.dateClearBtn.addEventListener("click", () => {
  els.dateFrom.value = "";
  els.dateTo.value = "";
  onFilterChange();
});
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
  await loadFilterPrefs();
  await loadSelection();
  await loadJobs({ firstLoad: true });
  await startPolling();
  await inspectCurrentTab();
})();

window.addEventListener("unload", () => {
  if (POLL_TIMER) clearInterval(POLL_TIMER);
});
