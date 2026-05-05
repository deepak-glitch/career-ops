// Translate discovered form fields into concrete fill instructions.
//
// For each field returned by portal discovery we compute a `value` (string or
// path-to-file) plus a `confidence` and `source`. Anything we cannot answer
// from the personal-info docx, master resume, profile, or per-report draft
// answers is marked confidence: "needs-review" so the orchestrator can pause
// for the human (the CLAUDE.md hard rule: never submit without review, and
// the user explicitly asked: never skip anything).
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { answerFor, FIELD_KEYS } from "./applicant.mjs";
import { RESUME_FIELD_HINTS } from "./portals.mjs";

const PROJECT_ROOT = new URL("../../", import.meta.url).pathname;

// Heuristic narrative templates. These are *drafts* -- the runner stops
// before submit so the user reviews them.
function greeting(report) {
  return report?.company ? `Hi ${report.company} team,` : "Hi there,";
}

function draftCoverLetter(applicant, report) {
  const role = report?.role || "this role";
  const headline = applicant.profile?.narrative?.headline || "Applied AI engineer";
  const proof = applicant.profile?.narrative?.proof_points?.[0];
  const proofLine = proof
    ? `Recent example: ${proof.name} — ${proof.hero_metric}.`
    : "";
  return [
    greeting(report),
    "",
    `I'm Deepak Mallampati — ${headline}. ${proofLine}`,
    "",
    `Why ${role}: the work centers on shipping LLM/agentic systems with measurable impact, which is the loop I run today at Progress Solutions (RAG precision +30-35%, hallucinations reduced >30%). I'd love to do that with you.`,
    "",
    "Resume attached. Happy to dig into specifics on a call.",
    "",
    "Thanks,",
    "Deepak",
  ].join("\n");
}

function draftWhyCompany(applicant, report) {
  const subject = report?.company || "Your team";
  return `${subject} is shipping the kind of applied AI work I want to do for the next several years — production LLM/RAG systems with real measurement discipline. My current work at Progress Solutions sits on the same problem shape (clinical RAG, agentic workflows, predictive ML), and I want to take that into a higher-leverage product surface alongside an experienced team.`;
}

function draftWhyRole(applicant, report) {
  const role = report?.role || "this role";
  const targeted = applicant.fields.targetedRoles || "Applied AI / LLM Engineer";
  return `${role} maps directly to my targeted archetypes (${targeted}). I've shipped end-to-end RAG with ~30-35% retrieval precision gains, agentic LLM workflows with >30% reduction in hallucinated outputs, and predictive ML pipelines lifting high-risk recall by 15-20%. I'm looking for a place where that work can compound, and ${role} is that.`;
}

// Section G in oferta reports often contains pre-drafted answers to common
// open-ended application questions. If present, prefer that text.
function readSectionG(reportPath) {
  if (!reportPath || !existsSync(reportPath)) return null;
  const text = readFileSync(reportPath, "utf8");
  // Match "## Block G" or "## G." section through end of file or next ## block.
  const m = text.match(/^##[^\n]*\bG\b[^\n]*\n([\s\S]*?)(?=\n##\s|\n# |$)/m);
  return m ? m[1].trim() : null;
}

function extractCompanyRoleFromReport(reportFile) {
  if (!reportFile) return { company: null, role: null };
  // `{NNN}-{slug}-{date}.md` -- slug is `{company-slug}-{role-slug}`.
  // Without a deterministic separator we can't split cleanly, so we leave
  // company=null and let the caller pull the actual values from the
  // applications.md tracker if needed.
  return { company: null, role: null };
}

function lookupTrackerRow(reportNum) {
  const trackerPath = join(PROJECT_ROOT, "data", "applications.md");
  if (!existsSync(trackerPath)) return null;
  const text = readFileSync(trackerPath, "utf8");
  for (const line of text.split("\n")) {
    if (!line.startsWith("|")) continue;
    const cols = line.split("|").map((c) => c.trim());
    // Expect: | # | Date | Company | Role | Score | Status | PDF | Report | Notes |
    if (cols.length < 9) continue;
    if (cols[1] === String(reportNum)) {
      return { date: cols[2], company: cols[3], role: cols[4], score: cols[5], status: cols[6] };
    }
  }
  return null;
}

export function loadReportContext(reportFile) {
  if (!reportFile) return null;
  const num = parseInt(reportFile.match(/^(\d+)/)?.[1] ?? "0", 10);
  const tracker = lookupTrackerRow(num);
  const path = join(PROJECT_ROOT, "reports", reportFile);
  return {
    num,
    file: reportFile,
    path,
    sectionG: readSectionG(path),
    company: tracker?.company || null,
    role: tracker?.role || null,
  };
}

function isResumeUpload(field) {
  const hay = `${field.label} ${field.name} ${field.id}`.toLowerCase();
  return field.kind === "file" && RESUME_FIELD_HINTS.some((re) => re.test(hay));
}

function isCoverLetterUpload(field) {
  const hay = `${field.label} ${field.name} ${field.id}`.toLowerCase();
  return field.kind === "file" && /cover\s*letter/.test(hay);
}

function classifyNarrative(label) {
  const l = label.toLowerCase();
  if (/cover\s*letter/.test(l)) return "coverLetter";
  // Look for "why ... company/us/join/here" with optional words between.
  if (/\bwhy\b.*\b(company|us|join|here|work for)\b/.test(l)) return "whyCompany";
  if (/\bwhy\b.*\b(role|position|job|interest|this)\b/.test(l)) return "whyRole";
  if (/\binterested in\b|\bexcites you\b/.test(l)) return "whyRole";
  if (/tell us about yourself|introduce yourself|background/.test(l)) return "background";
  if (/(notice period|when can you start|earliest start)/.test(l)) return "noticePeriod";
  if (/heard about|where did you hear/.test(l)) return "source";
  if (/anything else|additional|other comments/.test(l)) return "additional";
  return null;
}

function narrativeAnswer(kind, applicant, report) {
  switch (kind) {
    case "coverLetter":
      return draftCoverLetter(applicant, report);
    case "whyCompany":
      return draftWhyCompany(applicant, report);
    case "whyRole":
      return draftWhyRole(applicant, report);
    case "background":
      return applicant.profile?.narrative?.exit_story || "Applied AI engineer with 2.5 years building RAG, agentic LLM, and predictive ML in production healthcare and enterprise contexts.";
    case "noticePeriod":
      return "Two weeks";
    case "source":
      return "Company website / job board";
    case "additional":
      return ""; // intentionally blank by default
    default:
      return null;
  }
}

export function buildAnswers(fields, applicant, report, resumePdf) {
  const out = [];
  for (const field of fields) {
    let value = null;
    let source = null;
    let confidence = "needs-review";

    if (field.kind === "file") {
      if (isResumeUpload(field)) {
        value = resumePdf;
        source = "resume-resolver";
        confidence = resumePdf ? "high" : "needs-review";
      } else if (isCoverLetterUpload(field)) {
        // Defer cover-letter PDF generation for v2; for now we use the
        // narrative draft only when the form has a TEXT field.
        value = null;
        source = "cover-letter (text only in v1)";
        confidence = "needs-review";
      } else {
        value = null;
        source = "unknown file field";
        confidence = "needs-review";
      }
      out.push({ field, value, source, confidence });
      continue;
    }

    // Try the structured personal-info answers first.
    const direct = answerFor(applicant, field.label);
    if (direct) {
      value = direct;
      source = "personal-info-docx";
      confidence = "high";
    }

    // Fall back to narrative drafts for known open-ended question shapes.
    if (!value) {
      const narrativeKind = classifyNarrative(field.label);
      if (narrativeKind) {
        const draft = narrativeAnswer(narrativeKind, applicant, report);
        if (draft !== null) {
          value = draft;
          source = `narrative-draft:${narrativeKind}`;
          confidence = "draft"; // user must review every narrative answer
        }
      }
    }

    out.push({ field, value, source, confidence });
  }
  return out;
}
