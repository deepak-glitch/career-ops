// Build a structured applicant context from:
//   - Deepak- Personal Information.docx  (canonical answers for standard fields)
//   - Deepak-Master Resume - main.docx   (long-form work history + metrics)
//   - config/profile.yml                 (existing structured profile)
//   - cv.md                              (markdown CV)
//
// Exposes:
//   loadApplicant() -> { fields, profile, masterResume, cvMarkdown }
//   answerFor(applicant, fieldKey) -> string | null
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";
import { extractDocxText } from "./docx.mjs";

const PROJECT_ROOT = new URL("../../", import.meta.url).pathname;

// Parse "Key *: Value" lines out of the personal-info docx.
// The candidate's section comes first; the References block at the bottom
// repeats `Name:`/`Phone:`/`Email:` -- we stop at the first "Reference N:" line
// so reference data does not clobber the candidate's own phone/email.
function parsePersonalInfo(text) {
  const fields = {};
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    if (/^Reference\s+\d+\s*:/.test(line)) break;
    // Match "Label *: value" / "Label: value" / "Label (Optional): value".
    // Allow `?` and `;` in labels (e.g. "Your visa Status?", veteran block).
    const m = line.match(/^([A-Za-z0-9 ()/.,'&?;\-#]+?)\s*\*?\s*[:;]\s*(.*)$/);
    if (!m) continue;
    const label = m[1].trim();
    let value = m[2].trim();
    // Strip the "(format hints)" the file embeds: e.g. "Format: MM/DD/YYYY 05/19/2001"
    value = value.replace(/^Format:\s*[A-Z/]+\s+/, "");
    // Strip "Yes/No :" style hint prefixes that leak into value parsing.
    value = value.replace(/^[A-Za-z/, ]{1,15}:\s+/, "");
    // Strip "(Option1, Option2, ...) :" style prefixes (e.g. work arrangement).
    value = value.replace(/^\([^)]+\)\s*:?\s*/, "");
    if (!value) continue;
    const key = label.toLowerCase();
    if (!(key in fields)) fields[key] = value; // first-wins
  }
  return fields;
}

// Map the raw personal-info fields onto the canonical keys used by adapters.
function canonicalizePersonalInfo(raw) {
  const get = (...keys) => {
    for (const k of keys) {
      const v = raw[k.toLowerCase()];
      if (v) return v;
    }
    return null;
  };
  const phone = get("phone");
  const countryCode = get("country code");
  return {
    firstName: get("first name"),
    middleName: get("middle name"),
    lastName: get("last name"),
    fullName: get("full name"),
    email: null, // populated from master resume / profile
    phone,
    phoneFull:
      phone && countryCode ? `${countryCode} ${phone}` : phone || null,
    countryCode,
    dateOfBirth: get("date of birth"),
    country: get("country"),
    currentLocation: get("current location (city, state, country)"),
    addressLine1: get("address line 1"),
    addressLine2: get("address line 2"),
    city: get("city"),
    state: get("state"),
    county: get("county"),
    postalCode: get("postal code"),
    workAuthorized: get(
      "are you currently authorized to work lawfully in the united states?"
    ),
    visaStatus: get("your visa status?"),
    sponsorshipNow: get("do you require visa sponsorship now?"),
    sponsorshipFuture: get("do you require visa sponsorship in future?"),
    over18: get("are you at least 18 years of age?"),
    workArrangement: get("what is your preferred work arrangement?"),
    compensationRange: get("target compensation range"),
    openToRelocation: get("are you open to relocation?"),
    currentCompany: get("current company (if applicable)"),
    gender: get("gender (add all that apply)"),
    transgender: get("do you identify as transgender?"),
    race: get("race/ethnic background (add all that apply)"),
    veteranStatus: get(
      "are you a veteran or active member of the united states armed forces?"
    ),
    disability: get("voluntary self-identification of disability"),
    companiesWorkedIn: get("companies worked in (names separated by comma)"),
    languages: get("languages"),
  };
}

function parseMasterResumeHeader(text) {
  const out = {};
  const fields = [
    ["name", /^Name\s*:\s*(.+)$/m],
    ["email", /^New Email\s*:\s*(\S+)/m],
    ["linkedin", /^Linkedin\s*:\s*(\S+)/m],
    ["totalExperience", /^Total Experience.*?:\s*(.+)$/m],
    ["highestEducation", /^Highest Education\s*:\s*(.+)$/m],
    ["targetedRoles", /^Targeted Roles\s*:\s*(.+)$/m],
  ];
  for (const [key, re] of fields) {
    const m = text.match(re);
    if (m) out[key] = m[1].trim();
  }
  return out;
}

// References block (3+ named referees with phone/email/relation/title).
function parseReferences(text) {
  const out = [];
  const blocks = text.split(/Reference\s+\d+\s*:/g).slice(1);
  for (const block of blocks) {
    const get = (re) => {
      const m = block.match(re);
      return m ? m[1].trim() : null;
    };
    const ref = {
      name: get(/Name\s*:\s*([^\n]+)/),
      phone: get(/Phone\s*:\s*([^\n]+)/),
      email: get(/Email\s*:\s*([^\n]+)/),
      relation: get(/Relation\s*:\s*([^\n]+)/),
      title: get(/Reference Title\s*:\s*([^\n]+)/),
    };
    if (ref.name) out.push(ref);
  }
  // Dedup by name+phone (the personal-info file repeats some).
  const seen = new Set();
  return out.filter((r) => {
    const k = `${r.name}|${r.phone}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export function loadApplicant() {
  const personalDocx = join(
    PROJECT_ROOT,
    "Deepak- Personal Information.docx"
  );
  const masterDocx = join(PROJECT_ROOT, "Deepak-Master Resume - main.docx");
  const profilePath = join(PROJECT_ROOT, "config", "profile.yml");
  const cvPath = join(PROJECT_ROOT, "cv.md");

  const personalText = extractDocxText(personalDocx);
  const masterText = extractDocxText(masterDocx);
  const profile = existsSync(profilePath)
    ? yaml.load(readFileSync(profilePath, "utf8"))
    : {};
  const cvMarkdown = existsSync(cvPath) ? readFileSync(cvPath, "utf8") : "";

  const rawPersonal = parsePersonalInfo(personalText);
  const fields = canonicalizePersonalInfo(rawPersonal);
  const masterHeader = parseMasterResumeHeader(masterText);
  const references = parseReferences(personalText);

  // Backfill from master resume + profile.
  fields.email =
    masterHeader.email || profile?.candidate?.email || fields.email;
  fields.linkedin = masterHeader.linkedin || profile?.candidate?.linkedin;
  fields.fullName =
    fields.fullName || masterHeader.name || profile?.candidate?.full_name;
  fields.totalExperience = masterHeader.totalExperience;
  fields.highestEducation = masterHeader.highestEducation;
  fields.targetedRoles = masterHeader.targetedRoles;
  fields.references = references;

  // Some answers in the personal-info docx live on a separate line after a
  // multi-line option list (veteran block, disability block). Recover them
  // with targeted scans before falling back to null.
  if (!fields.veteranStatus) {
    const m = personalText.match(
      /^(Yes, I am a veteran[^\n]*|No, I am not a veteran[^\n]*|I identify as[^\n]*|I (?:prefer to self-describe|don'?t wish to answer))$/m
    );
    if (m) fields.veteranStatus = m[1].trim();
  }
  // disability is intentionally blank in the docx; leave null so the runner
  // pauses for user input rather than guessing.

  return {
    fields,
    profile,
    masterResumeText: masterText,
    cvMarkdown,
    personalInfoText: personalText,
  };
}

// Lookup table from common form-field aliases → applicant.fields key.
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
  addressLine1: ["address", "address line 1", "street address", "street"],
  addressLine2: ["address line 2", "apt", "unit", "suite"],
  city: ["city", "town"],
  state: ["state", "state/province", "province", "region"],
  county: ["county"],
  postalCode: ["postal code", "zip", "zip code", "postcode"],
  linkedin: ["linkedin", "linkedin url", "linkedin profile"],
  workAuthorized: [
    "are you authorized to work",
    "authorized to work",
    "work authorization",
    "legally authorized",
    "right to work",
  ],
  visaStatus: ["visa status", "current visa", "immigration status"],
  sponsorshipNow: [
    "sponsorship now",
    "require sponsorship now",
    "need sponsorship now",
    "currently require sponsorship",
    "require visa sponsorship now",
  ],
  sponsorshipFuture: [
    "sponsorship in future",
    "sponsorship in the future",
    "future sponsorship",
    "will you require sponsorship",
    "require sponsorship in",
    "need sponsorship in",
  ],
  over18: ["18 years", "at least 18", "over 18"],
  workArrangement: [
    "work arrangement",
    "remote/hybrid",
    "preferred work setup",
    "preferred work model",
  ],
  compensationRange: [
    "compensation",
    "salary",
    "expected salary",
    "salary expectation",
    "desired salary",
    "compensation expectation",
  ],
  openToRelocation: ["open to relocation", "willing to relocate", "relocation"],
  currentCompany: ["current company", "current employer", "employer"],
  gender: ["gender"],
  transgender: ["transgender"],
  race: ["race", "ethnicity", "ethnic background", "race/ethnicity"],
  veteranStatus: ["veteran", "veteran status", "armed forces"],
  disability: ["disability", "disabled", "self-identification of disability"],
  totalExperience: ["years of experience", "total experience", "experience"],
  highestEducation: [
    "highest education",
    "highest level of education",
    "degree",
    "education level",
  ],
};

// Build a flat list of [alias, fieldKey] pairs sorted by alias length desc
// so the most specific match wins (e.g. "open to relocation" beats "location").
const RANKED_ALIASES = Object.entries(FIELD_ALIASES)
  .flatMap(([key, aliases]) => aliases.map((a) => [a, key]))
  .sort((a, b) => b[0].length - a[0].length);

export function answerFor(applicant, label) {
  if (!label) return null;
  const norm = label.toLowerCase().replace(/[^a-z0-9 ?/]/g, " ").replace(/\s+/g, " ").trim();
  // Sponsorship needs explicit "now" vs "future" disambiguation since both
  // questions share most of their wording.
  if (/sponsorship/.test(norm)) {
    const isNow = /\bnow\b|currently|at this time|immediate/.test(norm);
    const isFuture = /\bfuture\b|will you|going forward|down the road/.test(norm);
    if (isNow && !isFuture) return applicant.fields.sponsorshipNow ?? null;
    if (isFuture && !isNow) return applicant.fields.sponsorshipFuture ?? null;
  }
  for (const [alias, key] of RANKED_ALIASES) {
    if (norm.includes(alias)) {
      const v = applicant.fields?.[key];
      if (v) return String(v);
    }
  }
  return null;
}

export const FIELD_KEYS = Object.keys(FIELD_ALIASES);
