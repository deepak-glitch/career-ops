#!/usr/bin/env node
// Batch PDF generator for 2026-05-13 overnight run (10 reports).
// Reuses regen-all.mjs scaffolding but with per-role tailored summary.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';
import { tmpdir } from 'os';
import { join } from 'path';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const COMPETENCIES = [
  'Applied AI / LLMs',
  'RAG + Grounding',
  'Agentic Workflows',
  'Schema Contracts',
  'Eval Harnesses',
  'Python / FastAPI',
  'TypeScript / React',
  'Docker / CI-CD',
  'Multimodal Vision',
  'Predictive ML',
];

const EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI/ML Engineer Trainee - Agent Engineering, Production LLM</div>
      <div class="job-location">USA - Healthcare Technology, AI Consulting</div>
      <ul>
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval; recursive semantic chunking and transformer embeddings improved retrieval precision <strong>~35%</strong>, reduced irrelevant retrieval <strong>&gt;30%</strong>, response alignment <strong>&gt;90%</strong>.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries with tool discipline, structured reasoning, and grounding rules; response stability <strong>~25%</strong>, hallucinations cut <strong>&gt;30%</strong>.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show and care engagement scoring; recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting, stratified sampling, threshold calibration.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong>.</li>
        <li>EHR preprocessing (Pandas, NumPy); dataset reliability <strong>&gt;98%</strong>, downstream instability <strong>-40%</strong>.</li>
        <li>HIPAA-conscious governance: de-identification, data lineage, evaluation audit trails, stakeholder-facing system-limitation docs.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Energy Solutions International (Emerson)</span>
        <span class="job-period">Jun 2022 - Apr 2023</span>
      </div>
      <div class="job-role">Database &amp; DevOps Performance Engineer (Intern)</div>
      <div class="job-location">Hyderabad, India - Oil &amp; Gas ERP</div>
      <ul>
        <li>Optimized <strong>T-SQL stored procedures</strong> on a compliance-sensitive ERP (contracts, nominations, allocations, invoicing); query time <strong>-20%</strong>, retrieval latency <strong>-25%</strong>.</li>
        <li>Built <strong>Jenkins CI/CD pipelines</strong> for schema updates and stored-procedure deployments; deploy errors <strong>-30%</strong>, release cycle <strong>-35 to -40%</strong>.</li>
        <li>Designed performance dashboards with <strong>SQL Server DMVs + Grafana</strong>; incident recurrence <strong>-25%</strong>, root-cause resolution <strong>-30%</strong>.</li>
        <li>Tuned index maintenance and partition-aware queries; reconciliation runtime <strong>-15%</strong>, deadlocks <strong>-15%</strong>.</li>
        <li>Supported RBAC and audit logging for financial modules in a regulated environment.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Suvidha Foundation</span>
        <span class="job-period">Jan 2022 - Mar 2022</span>
      </div>
      <div class="job-role">Machine Learning Engineer</div>
      <div class="job-location">Hyderabad, India - Nonprofit, Video Analytics, Applied NLP</div>
      <ul>
        <li>Built <strong>transformer-based video summarization</strong> over 5,000+ recorded sessions; hierarchical summarization and timestamp-aligned clip extraction cut manual review <strong>60-70%</strong>.</li>
        <li>AI-selected highlights aligned with human-curated moments <strong>~85%</strong>.</li>
        <li>Implemented <strong>document Q&amp;A with RAG</strong>; hallucinations <strong>~30%</strong>, contextual accuracy <strong>&gt;85%</strong>.</li>
        <li>Deployed as <strong>Flask</strong> API with a lightweight web interface for non-technical staff.</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">5-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policies. Audit-ready explainable risk scoring.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Real-time manga translation extension shipped to the Chrome Web Store. Multi-provider abstraction (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama) with per-provider payload handling for worst-case failure isolation. 29 sites supported across Manifest V3 service workers.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / OpenAI / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Platform</span>
      <div class="project-desc">End-to-end multimodal pipeline: text description, intermediate prompt transformation, grounded image generation. ~30% contextual alignment gain, ~25-30% first-pass image success.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">YOLOv8 Driver Drowsiness Detection</span>
      <div class="project-desc">Real-time computer vision for driver drowsiness; sub-50ms inference on edge hardware. Walk-forward validation and class-weighted training for imbalanced safety data.</div>
      <div class="project-tech">PyTorch, YOLOv8, OpenCV, ONNX</div>
    </div>`;

const EDUCATION = `
    <div class="edu-item">
      <div class="edu-header">
        <span class="edu-title">Master of Science, Computer Science - <span class="edu-org">Kent State University</span></span>
        <span class="edu-year">Aug 2023 - May 2025</span>
      </div>
      <div class="edu-desc">Focus: Applied Machine Learning, NLP, Database Systems.</div>
    </div>
    <div class="edu-item">
      <div class="edu-header">
        <span class="edu-title">Bachelor of Technology, Computer Science - <span class="edu-org">KL University</span></span>
        <span class="edu-year">Jun 2019 - May 2023</span>
      </div>
      <div class="edu-desc">Founder / Lead of E-Farming platform (university project, pilot with 3 cooperatives).</div>
    </div>`;

const CERTIFICATIONS = `
    <div class="cert-item">
      <span class="cert-title">Deep Learning Specialization - <span class="cert-org">DeepLearning.AI (Coursera)</span></span>
      <span class="cert-year">2024</span>
    </div>`;

const SKILLS = `
    <span class="skill-item"><span class="skill-category">Languages:</span> Python, TypeScript, JavaScript, SQL (T-SQL, PostgreSQL, SQLite), Java, C++</span>
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, OpenAI, Anthropic, Hugging Face Transformers, Diffusers, YOLOv8</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Celery, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy, Snowflake</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, Prometheus, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

// Tailored summary per role
const ROLES = [
  {
    slug: 'glean-fde-founding',
    summary: `Applied AI engineer who ships customer-facing agentic systems end to end - multi-LLM abstractions, schema-validated agent handoffs, FastAPI/Docker packaging, RAG-grounded healthcare workflows (~35% precision, >90% grounded alignment, ~25% stability gain). Solo shipper of Manga Lens on the Chrome Web Store; founder of E-Farming. Ready to own 0-to-1 founding FDE delivery for enterprise AI customers from discovery to launch.`
  },
  {
    slug: 'vercel-fde-v0',
    summary: `Applied AI engineer who ships AI-powered customer-facing products end to end. Daily Claude user in production at Progress (agentic LLM workflows + RAG ~35% precision, >90% grounded alignment). Solo shipper of Manga Lens (Chrome Web Store, TypeScript, Claude + 3 vision providers, 29 sites) and Dream Decoder (FastAPI + React/TS multimodal app). Ready to scale v0 deployments for enterprise customers.`
  },
  {
    slug: 'arize-ai-solutions-engineer-east',
    summary: `Applied AI engineer with production experience across RAG, agentic LLM workflows, evaluation pipelines, and predictive ML in HIPAA-conscious healthcare. Shipped grounding + audit + observability contracts for production AI (>90% retrieval-grounded alignment, ~35% precision, ~25% stability, ~30% defect reduction). Solo shipper of Manga Lens (multi-LLM Chrome extension). Ready to help enterprise customers ship trustworthy GenAI on Arize.`
  },
  {
    slug: 'anthropic-fde-applied-ai',
    summary: `Applied AI engineer who ships customer-facing agentic systems end to end - Claude in production for RAG + agentic workflows in HIPAA-conscious healthcare. Solo shipper of Manga Lens (Chrome Web Store, Claude + 3 vision providers behind one abstraction, 29 sites). Founder of E-Farming. Production track record of grounding + evals + audit trails (>90% retrieval-grounded alignment, ~25% stability, ~30% defect reduction). Ready for founding FDE in financial services + healthcare + enterprise IT.`
  },
  {
    slug: 'decagon-customer-engineer-agent-builder',
    summary: `Applied AI engineer who builds and ships agentic systems end to end - schema-validated JSON contracts between agents (Agentic Healthcare Claims, 5 stages, prevented cascading hallucinations), tool discipline + grounding + audit at Progress (~25% stability gain, >90% retrieval-grounded alignment). Solo shipper of Manga Lens. Founder of E-Farming. Ready to own Agent Builder delivery for enterprise CX customers.`
  },
  {
    slug: 'livekit-fde',
    summary: `Applied AI engineer with backend + infra production discipline - FastAPI/Flask + Docker + Jenkins CI/CD + structured logging + Grafana monitoring across healthcare AI and enterprise ERP. Solo shipper of Manga Lens (Chrome extension MV3, 4 vision providers behind one abstraction, 29 sites). Production AI services with ~30% defect reduction post-deploy and >30% deployment-error reduction on enterprise ERP. Ready to ramp into real-time + voice AI infra for LiveKit customers.`
  },
  {
    slug: 'sana-ai-engineer-agents',
    summary: `Applied AI engineer who builds production agentic systems - multi-step planning, schema-validated tool routing, grounding + audit + evaluation pipelines. Shipped Agentic Healthcare Claims (5-stage pipeline with schema-validated JSON contracts between agents) + RAG retrieval-grounded systems at Progress (~35% precision, >90% retrieval-grounded alignment). TypeScript shipped (Manga Lens, Dream Decoder); agentic primitives are language-agnostic. Ready to ship core agent infrastructure at Sana.`
  },
  {
    slug: 'decagon-ai-engineer',
    summary: `Applied AI engineer who ships cross-functional AI automation - agentic LLM workflows, internal tools, scrapers, search APIs, multi-LLM orchestration. Shipped agentic healthcare workflows at Progress (~25% stability gain, >90% retrieval-grounded alignment, ~30% defect reduction) + Manga Lens (Chrome Web Store, 4 vision providers, 29 sites). Founder of E-Farming. Ready to ship AI automation across every Decagon function.`
  },
  {
    slug: 'langchain-fullstack-applied-ai',
    summary: `Applied AI engineer who ships production agents end to end on the LangChain + LlamaIndex stack - RAG retrieval-grounded (~35% precision, >90% alignment), schema-validated tool routing (Agentic Healthcare Claims, 5 stages, prevented cascading hallucinations), evaluation pipelines, audit trails. Solo shipper of Manga Lens (Chrome Web Store, multi-LLM). Ready to build the agents that show what's possible with LangChain.`
  },
  {
    slug: 'modal-fde-systems',
    summary: `Applied AI engineer with production engineering discipline - FastAPI/Flask + Docker + Jenkins CI/CD + structured logging + Grafana monitoring across healthcare AI (~30% defect reduction) and enterprise ERP (>30% deployment-error reduction, ~35-40% release cycle, ~25% incident-recurrence cut). Solo shipper of Manga Lens. Know what application-layer AI engineers need from infra because I've been one. Ready to ramp into K8s + Terraform + Pulumi for Modal customers.`
  },
  {
    slug: 'sierra-software-engineer-agent-builder',
    summary: `Applied AI engineer who builds production agentic systems end to end - schema-validated tool routing (Agentic Healthcare Claims, 5 stages, prevented cascading hallucinations), grounding + audit (Progress, >90% retrieval-grounded alignment, ~25% stability gain), evaluation pipelines, Cursor + Claude daily in production. Solo shipper of Manga Lens (Chrome Web Store, multi-LLM). Ready to build the Agent Builder platform for Sierra's enterprise customers.`
  },
];

function buildHtml(role) {
  const placeholders = {
    '{{LANG}}': 'en',
    '{{PAGE_WIDTH}}': '780px',
    '{{NAME}}': profile.full_name || 'Deepak Mallampati',
    '{{PHONE}}': profile.phone || '',
    '{{EMAIL}}': profile.email || '',
    '{{LINKEDIN_URL}}': profile.linkedin?.startsWith('http') ? profile.linkedin : `https://${profile.linkedin || ''}`,
    '{{LINKEDIN_DISPLAY}}': (profile.linkedin || '').replace(/^https?:\/\//, ''),
    '{{PORTFOLIO_URL}}': profile.portfolio_url || profile.github || 'https://github.com/Deepak0070',
    '{{PORTFOLIO_DISPLAY}}': (profile.portfolio_url || profile.github || 'github.com/Deepak0070').replace(/^https?:\/\//, ''),
    '{{LOCATION}}': (profile.location || 'Kent, OH') + ' - US-based, F-1 OPT, open to sponsorship',
    '{{SECTION_SUMMARY}}': 'PROFESSIONAL SUMMARY',
    '{{SECTION_COMPETENCIES}}': 'CORE COMPETENCIES',
    '{{SECTION_EXPERIENCE}}': 'PROFESSIONAL EXPERIENCE',
    '{{SECTION_PROJECTS}}': 'PROJECTS',
    '{{SECTION_EDUCATION}}': 'EDUCATION',
    '{{SECTION_CERTIFICATIONS}}': 'CERTIFICATIONS',
    '{{SECTION_SKILLS}}': 'SKILLS',
    '{{SUMMARY_TEXT}}': role.summary,
    '{{COMPETENCIES}}': COMPETENCIES.map(k => `<span class="competency-tag">${k}</span>`).join('\n      '),
    '{{EXPERIENCE}}': EXPERIENCE,
    '{{PROJECTS}}': PROJECTS,
    '{{EDUCATION}}': EDUCATION,
    '{{CERTIFICATIONS}}': CERTIFICATIONS,
    '{{SKILLS}}': SKILLS,
  };
  let html = TEMPLATE;
  for (const [k, v] of Object.entries(placeholders)) {
    html = html.split(k).join(v);
  }
  return html;
}

mkdirSync('output/2026-05-13', { recursive: true });
const tmp = tmpdir();

let ok = 0, fail = 0;
for (const role of ROLES) {
  const htmlPath = join(tmp, `cv-${role.slug}.html`);
  const pdfPath = `output/2026-05-13/cv-deepak-mallampati-${role.slug}-2026-05-13.pdf`;
  try {
    writeFileSync(htmlPath, buildHtml(role), 'utf-8');
    execSync(`node generate-pdf.mjs "${htmlPath}" "${pdfPath}"`, { stdio: 'inherit' });
    ok++;
  } catch (e) {
    console.error(`FAIL ${role.slug}: ${e.message}`);
    fail++;
  }
}
console.log(`\nDone. OK=${ok} FAIL=${fail}`);
