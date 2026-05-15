#!/usr/bin/env node
// Generate 5 tailored PDFs from base CV template, swapping summary + competencies per role.
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";

const baseHtml = readFileSync("C:/Users/deepa/AppData/Local/Temp/cv-anthropic-fde-applied-ai.html", "utf-8");

const ORIG_SUMMARY = /<div class="summary-text">[\s\S]*?<\/div>\s*<\/div>/;
const ORIG_COMPETENCIES_BLOCK = /<div class="competencies-grid">[\s\S]*?<\/div>/;

const targets = [
  {
    slug: "future-applied-ai-engineer",
    region: "us",
    summary:
      "Applied AI engineer (2.5+ yrs) shipping production agentic LLM systems with structured outputs, tool calling, and evaluation harnesses end-to-end. LangChain + LlamaIndex in production for RAG and agentic workflows in HIPAA-conscious healthcare (>35% retrieval precision gain, >90% grounded alignment, >30% hallucination reduction). FastAPI/Docker deployment discipline (~30% post-deploy defect reduction). Ready for full-remote Applied AI Engineer roles where reliability, evals, and cost optimization matter as much as model choice.",
    competencies: [
      "Applied AI / LLMs",
      "Agentic Workflows + LangGraph",
      "RAG + Grounding",
      "Tool Calling + Structured Outputs",
      "Eval Harnesses",
      "Python / FastAPI / Async",
      "Schema Contracts (Pydantic)",
      "Docker / CI-CD",
      "AWS Cloud-Ready",
      "Production LLM Observability",
    ],
  },
  {
    slug: "glean-swe-ai-infrastructure",
    region: "us",
    summary:
      "Applied AI engineer (2.5+ yrs) with production discipline shipping Python + FastAPI services for LLM inference behind Docker, with structured logging and load simulation (~30% post-deploy defect reduction). Built RAG and agentic LLM pipelines (~35% retrieval precision gain), data preprocessing infra (dataset reliability >98%), and multi-agent orchestration with schema-validated JSON contracts. Strong fit for AI infrastructure roles where production AI/ML systems and pipeline engineering converge.",
    competencies: [
      "AI Infrastructure",
      "Python / FastAPI / Async",
      "Docker / Containerization",
      "LLM Pipelines + Routing",
      "RAG + Vector Search",
      "Agentic Orchestration",
      "Eval Harnesses",
      "Pandas / NumPy / SQL",
      "Cloud-Ready Deployment",
      "Observability + Logging",
    ],
  },
  {
    slug: "perfectserve-fullstack-ai",
    region: "us",
    summary:
      "Healthcare-focused Applied AI engineer (2.5+ yrs) shipping production RAG, agentic LLM workflows, and predictive ML in HIPAA-conscious environments. Built clinical retrieval-grounded systems on OpenAI/Anthropic APIs with vector search, embeddings, and recursive semantic chunking (+35% retrieval precision, >90% grounded alignment, >30% hallucination reduction). FastAPI + Docker deployment with audit trails and de-identification. PHI handling and regulated-environment discipline are core to my track record, not adjacent skills.",
    competencies: [
      "Healthcare AI (HIPAA-Conscious)",
      "RAG + Embeddings + Vector Search",
      "OpenAI / Anthropic / Bedrock APIs",
      "Python / FastAPI Backend",
      "Eval + Benchmarking",
      "Agentic Workflows",
      "AWS Cloud-Ready",
      "Observability + Audit Trails",
      "PHI / Regulated Environment",
      "Build-vs-Buy AI Decisions",
    ],
  },
  {
    slug: "percepta-applied-ai-engineer-london",
    region: "intl",
    summary:
      "Applied AI engineer (2.5+ yrs) shipping production agentic systems in critical industries (healthcare). LangChain + LangGraph + RAG + multi-step agents in HIPAA-conscious workflows (+35% retrieval precision, >30% hallucination reduction, >90% grounded alignment). Solo shipper of consumer AI products (Manga Lens on Chrome Web Store). Founder of E-Farming AgriTech marketplace (80-120 active users). Customer-obsessed: I build for end-users, not for demos. Open to UK relocation with visa sponsorship.",
    competencies: [
      "Production Agentic AI",
      "LangChain / LangGraph",
      "RAG + Multi-Step Agents",
      "HITL (Human-in-the-Loop)",
      "Healthcare / Regulated Industries",
      "Python / TypeScript",
      "FastAPI / Cloud-Ready",
      "Eval Harnesses + Audit Trails",
      "Customer-Embedded Delivery",
      "0-to-1 Product Ownership",
    ],
  },
  {
    slug: "langchain-deployed-amsterdam",
    region: "intl",
    summary:
      "Applied AI engineer (2.5+ yrs) shipping LangChain + agentic LLM workflows in production for HIPAA-conscious healthcare. RAG + multi-step orchestration + failure handling via schema-validated JSON contracts (>35% retrieval precision gain, >90% grounded alignment, >30% hallucination reduction). FastAPI + Docker deployment with structured logging and audit trails. Strong systems fundamentals across Python and TypeScript. Open to Amsterdam relocation via Highly Skilled Migrant visa.",
    competencies: [
      "LangChain / LangGraph / LangSmith",
      "Production Agent Architecture",
      "RAG + Vector Search",
      "Multi-Step Workflows + Orchestration",
      "Eval / Observability / Guardrails",
      "Python / TypeScript / Systems",
      "Docker + Cloud-Ready",
      "Customer-Embedded POCs",
      "Schema Contracts + Failure Handling",
      "Healthcare / Regulated AI",
    ],
  },
  {
    slug: "essor-ai-automation-engineer-paris",
    region: "intl",
    summary:
      "Applied AI engineer (2.5+ yrs) shipping agentic LLM workflows in regulated, audit-heavy domains (HIPAA-conscious healthcare). Multi-agent claims processing with JSON-schema contracts, RAG-grounded validation, and audit-ready risk scoring — directly transferable to fintech reconciliation/reporting automation. Python + SQL fluency (T-SQL stored procs ~20% query time reduction). Cloud-ready FastAPI + Docker services. Comfortable with APIs, multi-API orchestration (Dream Decoder), and workflow automation patterns.",
    competencies: [
      "Agentic AI Workflows",
      "Python + SQL",
      "Workflow Orchestration",
      "LLM + RAG Production",
      "FastAPI + Cloud APIs",
      "Schema Contracts + Audit Trails",
      "Eval Harnesses",
      "Regulated / Audit-Heavy Domains",
      "T-SQL + DB Performance",
      "n8n-Pattern Adjacent",
    ],
  },
];

mkdirSync("output/2026-05-15", { recursive: true });
mkdirSync("output-intl/2026-05-15", { recursive: true });

for (const t of targets) {
  let html = baseHtml;
  // Replace summary text
  html = html.replace(
    /<div class="summary-text">[\s\S]*?<\/div>/,
    `<div class="summary-text">${t.summary}</div>`
  );
  // Replace competencies
  const compHtml = t.competencies
    .map((c) => `      <span class="competency-tag">${c}</span>`)
    .join("\n");
  html = html.replace(
    /<div class="competencies-grid">[\s\S]*?<\/div>/,
    `<div class="competencies-grid">\n${compHtml}\n    </div>`
  );

  const tmpHtml = `C:/Users/deepa/AppData/Local/Temp/cv-${t.slug}.html`;
  writeFileSync(tmpHtml, html, "utf-8");

  const outDir = t.region === "us" ? "output/2026-05-15" : "output-intl/2026-05-15";
  const outPdf = `${outDir}/cv-deepak-mallampati-${t.slug}-2026-05-15.pdf`;

  console.log(`[gen] ${t.slug} -> ${outPdf}`);
  try {
    execSync(`node generate-pdf.mjs ${tmpHtml} ${outPdf}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`[err] ${t.slug}:`, err.message);
  }
}

console.log("Done.");
