// Content script: runs on every supported portal page. When the popup
// triggers AUTO_APPLY_FILL, we:
//   1. Click the page's "Apply" entry-point if the form isn't yet visible.
//   2. Walk the DOM to discover every input/select/textarea + its label.
//   3. Pull applicant data + tailored resume PDF from the local bridge.
//   4. Fill text/select/radio/checkbox/file fields. Halt at Submit.
//
// HARD RULE: never click Submit. The user reviews and submits.
//
// Because the extension runs inside the user's real Chrome session, cookies,
// captchas, and SSO Just Work -- we don't fight anti-bot.

(() => {
  if (window.__careerOpsAutoApplyLoaded) return;
  window.__careerOpsAutoApplyLoaded = true;

  // ---------- portal detection (mirror of lib/auto-apply/portals.mjs) ----

  const PORTALS = [
    { name: "greenhouse", re: /(^|\.)greenhouse\.io|gh_jid=/ },
    { name: "ashby", re: /jobs\.ashbyhq\.com|ashbyhq\.com/ },
    { name: "lever", re: /jobs\.lever\.co|jobs\.eu\.lever\.co/ },
    { name: "workday", re: /\.myworkdayjobs\.com|workday\.com\/.+\/job|wd\d+\.myworkdayjobs/ },
    { name: "breezy", re: /\.breezy\.hr/ },
    { name: "smartrecruiters", re: /smartrecruiters\.com/ },
    { name: "workable", re: /apply\.workable\.com|workable\.com\/j\// },
    { name: "icims", re: /\.icims\.com/ },
    { name: "taleo", re: /taleo\.net/ },
    { name: "jobvite", re: /jobvite\.com/ },
    { name: "bamboohr", re: /bamboohr\.com|bamboohr\.co\.uk/ },
    { name: "successfactors", re: /successfactors\.com|sapsf\.com/ },
    { name: "wellfound", re: /wellfound\.com|angel\.co/ },
    { name: "linkedin", re: /linkedin\.com\/jobs|linkedin\.com\/comm\/jobs/ },
  ];
  function detectPortal(url) {
    for (const p of PORTALS) if (p.re.test(url)) return p.name;
    return "generic";
  }

  const APPLY_BUTTON_TEXTS = [
    "Apply for this job",
    "Apply for this Job",
    "Apply for this position",
    "Apply Now",
    "Apply now",
    "Apply Online",
    "Easy Apply",
    "I'm interested",
    "Apply",
  ];

  function findApplyButton() {
    const all = document.querySelectorAll("a, button, input[type=button], input[type=submit]");
    for (const el of all) {
      if (!isVisible(el)) continue;
      const txt = (el.innerText || el.value || "").trim();
      for (const t of APPLY_BUTTON_TEXTS) {
        if (txt === t) return el;
        if (txt.toLowerCase() === t.toLowerCase()) return el;
      }
    }
    return null;
  }

  function isVisible(el) {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && s.visibility !== "hidden" && s.display !== "none";
  }

  // ---------- field discovery -------------------------------------------

  function labelFor(el) {
    const t = (el.getAttribute("type") || "").toLowerCase();
    const isGroup = t === "radio" || t === "checkbox";
    if (isGroup) {
      const fieldset = el.closest("fieldset");
      if (fieldset) {
        const legend = fieldset.querySelector(":scope > legend");
        if (legend && legend.textContent) return legend.textContent.trim();
      }
      if (el.name) {
        const peers = document.getElementsByName(el.name);
        if (peers.length > 0) {
          let p = peers[0].parentElement;
          for (let i = 0; i < 5 && p; i++, p = p.parentElement) {
            const heading = p.querySelector(":scope > legend, :scope > .label, :scope > label:not([for])");
            if (heading && heading.textContent) return heading.textContent.trim();
          }
        }
      }
    }
    const aria = el.getAttribute("aria-label");
    if (aria) return aria;
    const labelledby = el.getAttribute("aria-labelledby");
    if (labelledby) {
      const ids = labelledby.split(/\s+/);
      const txt = ids
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .trim();
      if (txt) return txt;
    }
    if (el.id) {
      const lab = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
      if (lab && lab.textContent) return lab.textContent.trim();
    }
    let parent = el.parentElement;
    let depth = 0;
    while (parent && depth < 6) {
      if (parent.tagName === "LABEL" && parent.textContent) {
        return parent.textContent.trim();
      }
      const sibLabel = parent.querySelector(":scope > label, :scope > .label, :scope > legend");
      if (sibLabel && sibLabel.textContent) return sibLabel.textContent.trim();
      parent = parent.parentElement;
      depth++;
    }
    return el.placeholder || el.name || "";
  }

  const KIND_BY_TYPE = {
    text: "text", email: "text", tel: "text", url: "text", number: "text",
    search: "text", password: "text", date: "date",
    textarea: "textarea",
    select: "select", "select-one": "select", "select-multiple": "select",
    checkbox: "checkbox", radio: "radio", file: "file",
  };

  function discoverFields() {
    const out = [];
    const seen = new Set();
    const all = document.querySelectorAll("input, select, textarea");
    for (const el of all) {
      if (el.type === "hidden") continue;
      if (!isVisible(el)) continue;
      const tag = el.tagName.toLowerCase();
      const rawType = (el.getAttribute("type") || tag).toLowerCase();
      const kind = KIND_BY_TYPE[rawType] || "text";
      const groupKey = (kind === "radio" || kind === "checkbox") && el.name
        ? `${kind}:${el.name}` : null;
      if (groupKey) {
        if (seen.has(groupKey)) continue;
        seen.add(groupKey);
      }
      const label = labelFor(el).replace(/\s+/g, " ").replace(/\*$/, "").trim();
      out.push({ el, kind, label, name: el.name || "", id: el.id || "" });
    }
    return out;
  }

  // ---------- alias table (mirror of lib/auto-apply/applicant.mjs) ------

  const FIELD_ALIASES = {
    firstName: ["first name", "first", "given name", "fname"],
    lastName: ["last name", "last", "surname", "family name", "lname"],
    middleName: ["middle name", "middle initial", "middle"],
    fullName: ["full name", "name", "your name", "candidate name"],
    email: ["email", "e-mail", "email address"],
    phone: ["phone", "phone number", "mobile", "cell", "telephone"],
    phoneFull: ["phone (with country code)", "international phone"],
    countryCode: ["country code", "phone country code"],
    dateOfBirth: ["date of birth", "dob", "birthdate", "birthday"],
    country: ["country", "country of residence"],
    currentLocation: ["current location", "location", "where do you live"],
    addressLine1: ["address line 1", "street address", "street", "address"],
    addressLine2: ["address line 2", "apt", "unit", "suite"],
    city: ["city", "town"],
    state: ["state", "state/province", "province", "region"],
    county: ["county"],
    postalCode: ["postal code", "zip", "zip code", "postcode"],
    linkedin: ["linkedin", "linkedin url", "linkedin profile"],
    workAuthorized: ["are you authorized to work", "authorized to work", "work authorization", "legally authorized", "right to work"],
    visaStatus: ["visa status", "current visa", "immigration status"],
    sponsorshipNow: ["sponsorship now", "require sponsorship now", "need sponsorship now", "currently require sponsorship", "require visa sponsorship now"],
    sponsorshipFuture: ["sponsorship in future", "sponsorship in the future", "future sponsorship", "will you require sponsorship", "require sponsorship in", "need sponsorship in"],
    over18: ["18 years", "at least 18", "over 18"],
    workArrangement: ["work arrangement", "remote/hybrid", "preferred work setup", "preferred work model"],
    compensationRange: ["compensation", "salary", "expected salary", "salary expectation", "desired salary", "compensation expectation"],
    openToRelocation: ["open to relocation", "willing to relocate", "relocation"],
    currentCompany: ["current company", "current employer", "employer"],
    gender: ["gender"],
    transgender: ["transgender"],
    race: ["race", "ethnicity", "ethnic background", "race/ethnicity"],
    veteranStatus: ["veteran", "veteran status", "armed forces"],
    disability: ["disability", "disabled", "self-identification of disability"],
    totalExperience: ["years of experience", "total experience", "experience"],
    highestEducation: ["highest education", "highest level of education", "degree", "education level"],
  };
  const RANKED = Object.entries(FIELD_ALIASES)
    .flatMap(([k, aliases]) => aliases.map((a) => [a, k]))
    .sort((a, b) => b[0].length - a[0].length);

  function answerFor(applicant, label) {
    if (!label) return null;
    const norm = label.toLowerCase().replace(/[^a-z0-9 ?/]/g, " ").replace(/\s+/g, " ").trim();
    if (/sponsorship/.test(norm)) {
      const isNow = /\bnow\b|currently|at this time|immediate/.test(norm);
      const isFuture = /\bfuture\b|will you|going forward|down the road/.test(norm);
      if (isNow && !isFuture) return applicant.sponsorshipNow ?? null;
      if (isFuture && !isNow) return applicant.sponsorshipFuture ?? null;
    }
    for (const [alias, key] of RANKED) {
      if (norm.includes(alias)) {
        const v = applicant?.[key];
        if (v) return String(v);
      }
    }
    return null;
  }

  function classifyNarrative(label) {
    const l = label.toLowerCase();
    if (/cover\s*letter/.test(l)) return "Cover Letter";
    if (/\bwhy\b.*\b(company|us|join|here|work for)\b/.test(l)) return "Why do you want to join us?";
    if (/\bwhy\b.*\b(role|position|job|interest|this)\b/.test(l)) return "Why this role?";
    if (/\binterested in\b|\bexcites you\b/.test(l)) return "Why this role?";
    if (/tell us about yourself|introduce yourself|background/.test(l)) return "Tell us about yourself";
    if (/notice period|when can you start|earliest start/.test(l)) return "Notice period";
    if (/heard about|where did you hear/.test(l)) return "Where did you hear about us?";
    return null;
  }

  function isResumeUpload(field) {
    const hay = `${field.label} ${field.name} ${field.id}`.toLowerCase();
    return field.kind === "file" && /(resume|cv|upload.*resume|attach.*resume)/.test(hay);
  }

  // ---------- fill helpers ---------------------------------------------

  function setNativeValue(el, value) {
    // React-friendly: set via prototype to bypass framework property descriptors.
    const proto = Object.getPrototypeOf(el);
    const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
    if (setter) setter.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }

  async function fillText(el, value) {
    setNativeValue(el, value);
  }

  async function fillSelect(el, value) {
    const want = String(value).toLowerCase();
    const options = Array.from(el.options);
    const exact = options.find((o) => o.value === value || o.text === value);
    const fuzzy = exact || options.find((o) =>
      o.text.toLowerCase() === want ||
      o.value.toLowerCase() === want ||
      o.text.toLowerCase().includes(want)
    );
    if (!fuzzy) return false;
    el.value = fuzzy.value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }

  async function fillCheckbox(el, value) {
    const want = /^(yes|true|1|on)$/i.test(String(value));
    if (el.checked !== want) {
      el.click();
    }
    return true;
  }

  async function fillRadioGroup(name, value) {
    const want = String(value).toLowerCase().trim();
    const radios = document.getElementsByName(name);
    for (const r of radios) {
      if (r.type !== "radio") continue;
      const v = (r.value || "").toLowerCase().trim();
      let labelText = "";
      if (r.id) {
        const lab = document.querySelector(`label[for="${CSS.escape(r.id)}"]`);
        if (lab) labelText = (lab.textContent || "").toLowerCase().trim();
      }
      if (!labelText) {
        const parentLabel = r.closest("label");
        if (parentLabel) labelText = (parentLabel.textContent || "").toLowerCase().trim();
      }
      if (v === want || v.includes(want) || want.includes(v) || labelText.includes(want)) {
        r.click();
        return true;
      }
    }
    return false;
  }

  async function fillFileFromUrl(el, fileUrl, suggestedName = "resume.pdf") {
    const resp = await fetch(fileUrl);
    if (!resp.ok) return false;
    const blob = await resp.blob();
    const file = new File([blob], suggestedName, { type: blob.type || "application/pdf" });
    const dt = new DataTransfer();
    dt.items.add(file);
    el.files = dt.files;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  }

  // ---------- main fill orchestration -----------------------------------

  // Look up a prefilled answer for the discovered field by label+kind.
  // Returns null if no match. The scraper's labels can drift slightly from
  // the live DOM (e.g. extra whitespace / ":" / "*"), so we normalize and
  // compare.
  function normLabel(s) {
    return String(s || "").toLowerCase().replace(/\*+$/, "").replace(/[:*]/g, "")
      .replace(/\s+/g, " ").trim();
  }
  function findPrefilled(prefill, field) {
    if (!prefill || !prefill.fields) return null;
    const wantLabel = normLabel(field.label);
    if (!wantLabel) return null;
    const candidates = prefill.fields.filter((p) => p.kind === field.kind);
    // 1. exact normalized label match
    const exact = candidates.find((p) => normLabel(p.label) === wantLabel);
    if (exact) return exact;
    // 2. one contains the other (handles "Are you authorized…" truncation)
    const partial = candidates.find((p) => {
      const pl = normLabel(p.label);
      return pl && (pl.includes(wantLabel) || wantLabel.includes(pl));
    });
    return partial || null;
  }

  async function runFill(bridge) {
    // Click apply entry-point if the form isn't visible yet.
    const initialFields = discoverFields();
    if (initialFields.length < 3) {
      const btn = findApplyButton();
      if (btn) {
        btn.click();
        await sleep(1500);
      }
    }

    const url = location.href;
    const portal = detectPortal(url);

    // Try the pre-scraped/prefilled answers first; fall back to /resolve
    // (live applicant + drafts) if no prefill exists.
    let prefill = null;
    try {
      const pre = await fetch(`${bridge}/prefill?url=${encodeURIComponent(url)}`);
      if (pre.ok) prefill = await pre.json();
    } catch {}

    const resp = await fetch(`${bridge}/resolve?url=${encodeURIComponent(url)}`);
    if (!resp.ok) throw new Error(`bridge /resolve failed: ${resp.status}`);
    const data = await resp.json();
    const applicant = data.applicant || {};
    const drafts = data.drafts || {};
    const resumeUrl = (prefill?.resumePdfUrl || data.resumePdfUrl)
      ? bridge + (prefill?.resumePdfUrl || data.resumePdfUrl)
      : null;
    const resumeSlug = prefill?.resumeSlug || data.slug;
    const resumeName = resumeSlug
      ? `cv-deepak-mallampati-${resumeSlug}.pdf`
      : "cv-deepak-mallampati.pdf";

    const fields = discoverFields();
    const summary = {
      ok: true,
      total: fields.length,
      filled: 0,
      skipped: 0,
      needsReview: 0,
      prefillUsed: 0,
      gaps: [],
    };

    for (const field of fields) {
      let value = null;
      let confidence = "needs-review";
      let source = null;

      if (field.kind === "file") {
        if (isResumeUpload(field) && resumeUrl) {
          try {
            const ok = await fillFileFromUrl(field.el, resumeUrl, resumeName);
            if (ok) { summary.filled++; continue; }
          } catch (e) { /* fall through */ }
        }
        summary.skipped++;
        summary.needsReview++;
        summary.gaps.push({ label: field.label || field.name, kind: field.kind });
        continue;
      }

      // 1. prefilled answer (best — already validated against the form schema)
      const pre = findPrefilled(prefill, field);
      if (pre && pre.value != null && pre.confidence !== "needs-review") {
        value = pre.matchedOption?.value ?? pre.value;
        confidence = pre.confidence;
        source = "prefill";
        summary.prefillUsed++;
      }

      // 2. fall back to live alias / narrative drafts
      if (value == null) {
        const direct = answerFor(applicant, field.label);
        if (direct) {
          value = direct; confidence = "high"; source = "live";
        } else {
          const narrativeKey = classifyNarrative(field.label);
          if (narrativeKey && drafts[narrativeKey]) {
            value = drafts[narrativeKey]; confidence = "draft"; source = "draft";
          }
        }
      }

      if (value == null) {
        summary.skipped++;
        summary.needsReview++;
        summary.gaps.push({ label: field.label || field.name, kind: field.kind });
        continue;
      }

      let ok = false;
      try {
        if (field.kind === "select") ok = await fillSelect(field.el, value);
        else if (field.kind === "checkbox") ok = await fillCheckbox(field.el, value);
        else if (field.kind === "radio") ok = await fillRadioGroup(field.name, value);
        else ok = (await fillText(field.el, value), true);
      } catch (e) { ok = false; }

      if (ok) summary.filled++;
      else { summary.skipped++; summary.gaps.push({ label: field.label || field.name, kind: field.kind, error: "fill-failed" }); }
    }

    // Fire-and-forget audit log.
    fetch(`${bridge}/audit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "fill",
        url,
        portal,
        company: prefill?.company || data.report?.company || "",
        role: prefill?.role || data.report?.role || "",
        slug: prefill?.slug || data.slug || "",
        filled: summary.filled,
        skipped: summary.skipped,
        needsReview: summary.needsReview,
        notes: `prefill=${summary.prefillUsed}; gaps=${summary.gaps.map((g) => g.label).join("; ")}`,
      }),
    }).catch(() => {});

    summary.report = data.report;
    summary.prefill = !!prefill;
    return summary;
  }

  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  // ---------- message bus ----------------------------------------------

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg?.type === "AUTO_APPLY_FILL") {
      runFill(msg.bridge || "http://127.0.0.1:7777")
        .then((r) => sendResponse(r))
        .catch((e) => sendResponse({ ok: false, error: e.message || String(e) }));
      return true; // async response
    }
  });

  // ---------- queued auto-fill ----------------------------------------
  //
  // When the popup's "Apply to selected" button writes URLs into
  // chrome.storage.local.fillQueue, every matching tab auto-fills itself
  // once on page load. We pop the URL from the queue immediately so a
  // refresh / SPA-navigation won't re-trigger.

  async function checkQueueAndFill() {
    if (!chrome?.storage?.local) return;
    let stored;
    try { stored = await chrome.storage.local.get("fillQueue"); }
    catch { return; }
    const queue = stored.fillQueue || {};
    const url = location.href;
    // Match exact URL OR same path/JD ID — many portals append fragments / utm.
    let matchKey = null;
    if (queue[url]) matchKey = url;
    else {
      // Strip query/hash and try a prefix match.
      const base = url.split("#")[0].split("?")[0];
      for (const k of Object.keys(queue)) {
        const kb = k.split("#")[0].split("?")[0];
        if (kb === base) { matchKey = k; break; }
      }
    }
    if (!matchKey) return;

    // Pop from queue first so a refresh doesn't re-trigger.
    delete queue[matchKey];
    try { await chrome.storage.local.set({ fillQueue: queue }); } catch {}

    // Show a small in-page banner so the user sees what's happening.
    const banner = document.createElement("div");
    banner.textContent = "career-ops: auto-filling… (Submit will NOT be clicked)";
    Object.assign(banner.style, {
      position: "fixed", top: "0", left: "0", right: "0", zIndex: "2147483647",
      background: "#1976d2", color: "#fff", padding: "6px 12px",
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      fontSize: "13px", textAlign: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
    });
    document.documentElement.appendChild(banner);

    try {
      // Give SPA portals (Workday, Ashby) a moment to mount the form.
      await sleep(2000);
      const result = await runFill("http://127.0.0.1:7777");
      banner.textContent = result.ok
        ? `career-ops: filled ${result.filled}/${result.total} fields — review and submit`
        : `career-ops: fill failed — ${result.error || "unknown"}`;
      banner.style.background = result.ok ? "#2e7d32" : "#c62828";
    } catch (e) {
      banner.textContent = `career-ops: fill error — ${e.message || String(e)}`;
      banner.style.background = "#c62828";
    }
    setTimeout(() => banner.remove(), 8000);
  }

  // Run the queue check after document_idle so multi-step portals have a
  // chance to render their form. Re-check on SPA URL changes too.
  checkQueueAndFill();
  let lastHref = location.href;
  const spaWatcher = setInterval(() => {
    if (location.href !== lastHref) {
      lastHref = location.href;
      checkQueueAndFill();
    }
  }, 1500);
  window.addEventListener("beforeunload", () => clearInterval(spaWatcher));
})();
