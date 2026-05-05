// Portal detection + per-portal field discovery.
//
// Each adapter exports:
//   - matches(url): boolean
//   - apply(page, ctx): async fn that fills the form and stops BEFORE Submit.
//
// The shared `discoverFields(page)` walks the visible form and returns a
// canonical list of `{ kind, label, locator }` objects -- adapters extend or
// override it for portal-specific quirks.
import { existsSync } from "node:fs";

// --- shared field discovery ---------------------------------------------

const KIND_BY_TYPE = {
  text: "text",
  email: "text",
  tel: "text",
  url: "text",
  number: "text",
  search: "text",
  password: "text",
  textarea: "textarea",
  select: "select",
  "select-one": "select",
  "select-multiple": "select",
  checkbox: "checkbox",
  radio: "radio",
  file: "file",
  date: "date",
};

// Read every input/select/textarea in the form and the closest visible label.
async function genericDiscoverFields(page) {
  return await page.evaluate(() => {
    function labelFor(el) {
      // For radios/checkboxes the *group* label is what matters (the fieldset
      // legend or the heading above the option list), not the per-option label.
      const t = (el.getAttribute("type") || "").toLowerCase();
      const isGroup = t === "radio" || t === "checkbox";
      if (isGroup) {
        const fieldset = el.closest("fieldset");
        if (fieldset) {
          const legend = fieldset.querySelector(":scope > legend");
          if (legend && legend.textContent) return legend.textContent.trim();
        }
        // Heuristic: the closest preceding heading-like element by name group.
        if (el.name) {
          const peers = document.querySelectorAll(`input[name="${CSS.escape(el.name)}"]`);
          if (peers.length > 0) {
            const first = peers[0];
            // Walk up looking for a section heading, label, or .label container
            let p = first.parentElement;
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
    function isVisible(el) {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 0 && r.height > 0 && s.visibility !== "hidden" && s.display !== "none";
    }
    const out = [];
    const seen = new Set();
    const all = document.querySelectorAll("input, select, textarea");
    for (const el of all) {
      if (el.type === "hidden") continue;
      if (!isVisible(el)) continue;
      const tag = el.tagName.toLowerCase();
      const type = (el.getAttribute("type") || tag).toLowerCase();
      // Group radios/checkboxes by name so we treat the group as one field.
      const groupKey = (type === "radio" || type === "checkbox") && el.name
        ? `${type}:${el.name}` : null;
      if (groupKey) {
        if (seen.has(groupKey)) continue;
        seen.add(groupKey);
      }
      const required = el.required || el.getAttribute("aria-required") === "true";
      const label = labelFor(el).replace(/\s+/g, " ").replace(/\*$/, "").trim();
      const id = el.id || el.name || "";
      out.push({
        kind: type,
        label,
        name: el.name || "",
        id,
        required,
        placeholder: el.placeholder || "",
        selector: id ? (el.id ? `#${CSS.escape(el.id)}` : `[name="${CSS.escape(el.name)}"]`) : null,
        groupKey,
      });
    }
    return out;
  });
}

// Map the raw portal-specific kinds onto our canonical kinds.
function canonicalKind(rawKind) {
  return KIND_BY_TYPE[rawKind] || "text";
}

export async function discoverFields(page) {
  const raw = await genericDiscoverFields(page);
  return raw.map((f) => ({ ...f, kind: canonicalKind(f.kind) }));
}

// --- portal detection ---------------------------------------------------

export const PORTALS = [
  {
    name: "greenhouse",
    matches: (url) =>
      /(^|\.)greenhouse\.io|job-boards\.greenhouse\.io|boards\.greenhouse\.io/.test(url) ||
      /gh_jid=/.test(url),
  },
  {
    name: "ashby",
    matches: (url) => /jobs\.ashbyhq\.com|ashbyhq\.com/.test(url),
  },
  {
    name: "lever",
    matches: (url) => /jobs\.lever\.co|jobs\.eu\.lever\.co/.test(url),
  },
  {
    name: "workday",
    matches: (url) =>
      /\.myworkdayjobs\.com|workday\.com\/.+\/job|wd\d+\.myworkdayjobs/.test(url),
  },
  {
    name: "breezy",
    matches: (url) => /\.breezy\.hr/.test(url),
  },
  {
    name: "smartrecruiters",
    matches: (url) => /smartrecruiters\.com/.test(url),
  },
  {
    name: "workable",
    matches: (url) => /apply\.workable\.com|workable\.com\/j\//.test(url),
  },
  {
    name: "icims",
    matches: (url) => /\.icims\.com/.test(url),
  },
  {
    name: "taleo",
    matches: (url) => /taleo\.net/.test(url),
  },
  {
    name: "jobvite",
    matches: (url) => /jobvite\.com/.test(url),
  },
  {
    name: "bamboohr",
    matches: (url) => /bamboohr\.com|bamboohr\.co\.uk/.test(url),
  },
  {
    name: "successfactors",
    matches: (url) => /successfactors\.com|sapsf\.com/.test(url),
  },
  {
    name: "wellfound",
    matches: (url) => /wellfound\.com|angel\.co/.test(url),
  },
  {
    name: "linkedin",
    matches: (url) => /linkedin\.com\/jobs|linkedin\.com\/comm\/jobs/.test(url),
  },
];

export function detectPortal(url) {
  for (const p of PORTALS) {
    if (p.matches(url)) return p.name;
  }
  return "generic";
}

// --- per-portal navigation entry-points ---------------------------------
//
// Some portals show the JD page first with an "Apply for this job" button
// that reveals or navigates to the actual form. Click it before discovery.

const APPLY_BUTTON_SELECTORS = {
  greenhouse: [
    'a:has-text("Apply for this job")',
    'a:has-text("I\'m interested")',
    'button:has-text("Apply for this job")',
    'a#submit_app, a[href*="#app"]',
  ],
  ashby: [
    'a:has-text("Apply for this Job")',
    'a:has-text("Apply")',
    'button:has-text("Apply")',
  ],
  lever: [
    'a.postings-btn:has-text("Apply")',
    'a:has-text("Apply for this job")',
  ],
  workday: [
    'a[data-automation-id="adventureButton"]',
    'button:has-text("Apply")',
    'a:has-text("Apply")',
  ],
  breezy: [
    'a:has-text("Apply for this position")',
    'a:has-text("Apply")',
    'button:has-text("Apply")',
  ],
  smartrecruiters: [
    'a:has-text("I\'m interested")',
    'button:has-text("Apply")',
  ],
  workable: [
    'a:has-text("Apply for this job")',
    'button:has-text("Apply now")',
  ],
  icims: [
    'a#apply, a:has-text("Apply for this Job")',
  ],
  taleo: [
    'a:has-text("Apply Online")',
    'button:has-text("Apply")',
  ],
  jobvite: [
    'a:has-text("Apply Now")',
    'button:has-text("Apply")',
  ],
  bamboohr: [
    'a:has-text("Apply for This Job")',
    'button:has-text("Apply")',
  ],
  successfactors: [
    'button:has-text("Apply Now")',
    'a:has-text("Apply")',
  ],
  wellfound: [
    'a:has-text("Apply")',
    'button:has-text("Apply")',
  ],
  linkedin: [
    'button:has-text("Easy Apply")',
    'a:has-text("Apply")',
  ],
  generic: [
    'a:has-text("Apply")',
    'button:has-text("Apply")',
    'a:has-text("Apply now")',
  ],
};

export async function clickApplyEntryPoint(page, portalName) {
  const selectors = APPLY_BUTTON_SELECTORS[portalName] || APPLY_BUTTON_SELECTORS.generic;
  for (const sel of selectors) {
    const loc = page.locator(sel).first();
    try {
      if ((await loc.count()) > 0 && (await loc.isVisible())) {
        await loc.click({ timeout: 5000 });
        // Allow the form (modal or new page) to render.
        await page.waitForLoadState("domcontentloaded").catch(() => {});
        await page.waitForTimeout(1000);
        return true;
      }
    } catch {
      // try next selector
    }
  }
  return false;
}

// --- submit-button locator (NEVER auto-click; we just locate to verify it
//     exists and is reachable, so the user can see the form is ready). -----

const SUBMIT_SELECTORS = [
  'button[type="submit"]',
  'input[type="submit"]',
  'button:has-text("Submit application")',
  'button:has-text("Submit Application")',
  'button:has-text("Submit")',
  'button:has-text("Send application")',
  'button:has-text("Apply")',
];

export async function locateSubmit(page) {
  for (const sel of SUBMIT_SELECTORS) {
    const loc = page.locator(sel).last();
    if ((await loc.count()) > 0) return { selector: sel, locator: loc };
  }
  return null;
}

export const RESUME_FIELD_HINTS = [
  /resume/i,
  /cv/i,
  /upload.*resume/i,
  /attach.*resume/i,
];
