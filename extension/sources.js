// Shared data-source resolution. Loaded as a classic script so both popup
// and content scripts can use the same window-level helpers.
//
// Source priority:
//   1. Local bridge   (http://127.0.0.1:7777)  — when user has it running
//   2. GitHub raw     (with PAT in chrome.storage.local.githubSource)
//   3. Bundled files  (extension/data/, shipped in the zip)
//
// Each helper returns { mode, value } so callers can show which source was
// used. mode ∈ { "bridge", "github", "bundle" }.

(function () {
  if (window.__careerOpsSourcesLoaded) return;
  window.__careerOpsSourcesLoaded = true;

  const BRIDGE = "http://127.0.0.1:7777";
  const HEALTH_TIMEOUT_MS = 1500;
  const FETCH_TIMEOUT_MS = 6000;

  function withTimeout(promise, ms, label) {
    return Promise.race([
      promise,
      new Promise((_, rej) => setTimeout(() => rej(new Error(`${label} timeout ${ms}ms`)), ms)),
    ]);
  }

  async function getGithubSettings() {
    if (!chrome?.storage?.local) return null;
    const stored = await chrome.storage.local.get("githubSource");
    const cfg = stored.githubSource || null;
    if (!cfg || !cfg.token || !cfg.repo || !cfg.branch) return null;
    return cfg;
  }

  async function bridgeAlive() {
    try {
      const r = await withTimeout(
        fetch(`${BRIDGE}/health`, { cache: "no-store" }),
        HEALTH_TIMEOUT_MS,
        "bridge"
      );
      return r.ok;
    } catch {
      return false;
    }
  }

  function githubRawUrl(cfg, path) {
    return `https://raw.githubusercontent.com/${cfg.repo}/${cfg.branch}/extension/${path}`;
  }
  function githubAuthInit(cfg) {
    return { headers: { Authorization: `token ${cfg.token}` }, cache: "no-store" };
  }

  // --- jobs list ----------------------------------------------------

  async function fetchJobs() {
    if (await bridgeAlive()) {
      try {
        const j = await withTimeout(
          fetch(`${BRIDGE}/jobs`, { cache: "no-store" }).then((r) => r.json()),
          FETCH_TIMEOUT_MS, "bridge /jobs"
        );
        return { mode: "bridge", value: j };
      } catch {}
    }
    const cfg = await getGithubSettings();
    if (cfg) {
      try {
        const j = await withTimeout(
          fetch(githubRawUrl(cfg, "data/jobs.json"), githubAuthInit(cfg)).then((r) => {
            if (!r.ok) throw new Error(`github ${r.status}`);
            return r.json();
          }),
          FETCH_TIMEOUT_MS, "github jobs.json"
        );
        return { mode: "github", value: j };
      } catch {}
    }
    // Bundled fallback.
    try {
      const url = chrome.runtime.getURL("data/jobs.json") + "?t=" + Date.now();
      const j = await fetch(url, { cache: "no-store" }).then((r) => r.json());
      return { mode: "bundle", value: j };
    } catch {
      return { mode: "none", value: { jobs: [], jobCount: 0 } };
    }
  }

  // --- per-URL resolved + prefilled --------------------------------

  async function fetchResolve(url) {
    if (await bridgeAlive()) {
      try {
        const data = await withTimeout(
          fetch(`${BRIDGE}/resolve?url=${encodeURIComponent(url)}`, { cache: "no-store" })
            .then((r) => r.json()),
          FETCH_TIMEOUT_MS, "bridge /resolve"
        );
        if (data.resumePdfUrl && !/^https?:|^chrome-extension:/.test(data.resumePdfUrl)) {
          data.resumePdfUrl = BRIDGE + data.resumePdfUrl;
        }
        return { mode: "bridge", value: data };
      } catch {}
    }
    const cfg = await getGithubSettings();
    if (cfg) {
      // Need the slug for this URL → fetch jobs.json once.
      try {
        const snap = await withTimeout(
          fetch(githubRawUrl(cfg, "data/jobs.json"), githubAuthInit(cfg)).then((r) => r.json()),
          FETCH_TIMEOUT_MS, "github jobs.json"
        );
        const job = (snap.jobs || []).find((j) => j.url === url);
        if (job?.slug) {
          const data = await withTimeout(
            fetch(githubRawUrl(cfg, `data/resolved/${job.slug}.json`), githubAuthInit(cfg))
              .then((r) => r.json()),
            FETCH_TIMEOUT_MS, "github resolved"
          );
          // resumePdfUrl from the bundle is a relative path (`data/pdfs/...`).
          // Replace it with a github raw URL — fetched via fetchPdf() below.
          if (data.resumePdfUrl) {
            data.resumePdfUrl = githubRawUrl(cfg, data.resumePdfUrl);
            data._needsAuth = true;
          }
          return { mode: "github", value: data };
        }
      } catch {}
    }
    // Bundled.
    try {
      const snap = await fetch(chrome.runtime.getURL("data/jobs.json"))
        .then((r) => r.json());
      const job = (snap.jobs || []).find((j) => j.url === url);
      if (!job?.slug) {
        const applicant = await fetch(chrome.runtime.getURL("data/applicant.json"))
          .then((r) => r.json()).catch(() => ({ fields: {} }));
        return {
          mode: "bundle",
          value: { url, portal: "generic", report: null, slug: null,
                   applicant: applicant.fields || {}, drafts: {}, resumePdfUrl: null },
        };
      }
      const data = await fetch(chrome.runtime.getURL(`data/resolved/${job.slug}.json`))
        .then((r) => r.json());
      if (data.resumePdfUrl) {
        data.resumePdfUrl = chrome.runtime.getURL(data.resumePdfUrl);
      }
      return { mode: "bundle", value: data };
    } catch (e) {
      return { mode: "none", value: null, error: e.message };
    }
  }

  async function fetchPrefill(url) {
    if (await bridgeAlive()) {
      try {
        const r = await withTimeout(
          fetch(`${BRIDGE}/prefill?url=${encodeURIComponent(url)}`, { cache: "no-store" }),
          FETCH_TIMEOUT_MS, "bridge /prefill"
        );
        if (r.ok) return { mode: "bridge", value: await r.json() };
      } catch {}
    }
    const cfg = await getGithubSettings();
    if (cfg) {
      try {
        const snap = await fetch(githubRawUrl(cfg, "data/jobs.json"), githubAuthInit(cfg))
          .then((r) => r.json());
        const job = (snap.jobs || []).find((j) => j.url === url);
        if (job?.slug) {
          const r = await fetch(githubRawUrl(cfg, `data/prefilled/${job.slug}.json`),
            githubAuthInit(cfg));
          if (r.ok) return { mode: "github", value: await r.json() };
        }
      } catch {}
    }
    try {
      const snap = await fetch(chrome.runtime.getURL("data/jobs.json"))
        .then((r) => r.json());
      const job = (snap.jobs || []).find((j) => j.url === url);
      if (!job?.slug) return { mode: "bundle", value: null };
      const r = await fetch(chrome.runtime.getURL(`data/prefilled/${job.slug}.json`));
      if (r.ok) return { mode: "bundle", value: await r.json() };
      return { mode: "bundle", value: null };
    } catch {
      return { mode: "none", value: null };
    }
  }

  // --- PDF blob (file inputs need a real File, not a URL) ----------

  async function fetchPdfBlob(url) {
    if (!url) return null;
    if (url.startsWith("https://raw.githubusercontent.com/")) {
      const cfg = await getGithubSettings();
      if (!cfg) throw new Error("github source not configured");
      const r = await fetch(url, githubAuthInit(cfg));
      if (!r.ok) throw new Error(`github raw pdf ${r.status}`);
      return await r.blob();
    }
    const r = await fetch(url, { cache: "no-store" });
    if (!r.ok) throw new Error(`pdf ${r.status}`);
    return await r.blob();
  }

  window.careerOpsSources = {
    BRIDGE,
    bridgeAlive,
    fetchJobs,
    fetchResolve,
    fetchPrefill,
    fetchPdfBlob,
    getGithubSettings,
  };
})();
