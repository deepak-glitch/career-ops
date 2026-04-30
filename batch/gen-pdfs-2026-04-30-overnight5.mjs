#!/usr/bin/env node
// Overnight 2026-04-30 batch 5 PDF generator - Brain Co. Early Career AI/ML Engineer (#324).

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const ROLES = [
  {
    slug: 'brainco-early-career-2026-04-30',
    company: 'Brain Co.',
    role: 'Early Career AI/ML Engineer',
    summary:
      'Applied AI engineer (Master of Science, Computer Science, 2.5+ yrs) shipping LLM-powered applications - agentic workflows, RAG, and reasoning pipelines - in regulated healthcare. Healthcare RAG (recursive semantic chunking, transformer embeddings) lifted retrieval precision ~35% with >90% grounded alignment; agentic LLM workflows for multi-step healthcare queries (eligibility checks, care navigation, documentation clarification) cut hallucinations >30% and raised response stability ~25% via structured reasoning, tool discipline, and grounding rules. Five-agent claims pipeline uses schema-validated JSON contracts (pydantic) between agents to prevent cascading hallucinations, with audit-ready reasoning traces. Predictive ML pipelines (scikit-learn, XGBoost) for patient no-show and care engagement scoring lifted recall +15-20% on high-risk cohorts. FastAPI / Docker production services with structured logging cut post-deploy defects ~30%. PyTorch + Hugging Face Transformers + Diffusers across LLM and multimodal projects (Pixel agent orchestrator, Manga Lens). End-to-end ownership across data, models, evaluation, APIs, and Docker - bias toward action and a many-hats generalist mindset.',
    competencies: [
      'Applied AI Engineering',
      'LLM Agents',
      'Reasoning Workflows',
      'RAG + Vector Search',
      'PyTorch / Hugging Face',
      'Schema-Validated Contracts',
      'Production AI',
      'FastAPI / Docker',
      'Eval Frameworks',
      'Bias Toward Action',
    ],
  },
];

const EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI/ML Engineer Trainee - Applied AI, RAG, Agentic LLM</div>
      <div class="job-location">USA - Healthcare Technology, AI Consulting</div>
      <ul>
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval; recursive semantic chunking and transformer embeddings improved retrieval precision <strong>~35%</strong>, reduced irrelevant retrieval <strong>&gt;30%</strong>, retrieval-grounded response alignment <strong>&gt;90%</strong>.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility, care navigation, documentation clarification) with structured reasoning, tool discipline, and grounding rules; raised agent response stability <strong>~25%</strong> and cut hallucinations <strong>&gt;30%</strong>.</li>
        <li>Architected a <strong>five-agent claims pipeline</strong> with schema-validated JSON contracts (pydantic) between agents to prevent cascading hallucinations; RAG-grounded CPT/ICD validation against vector-indexed policy docs; audit-ready risk scoring with reasoning traces.</li>
        <li>Shipped predictive ML pipelines (scikit-learn, XGBoost) for patient no-show and care engagement scoring; recall <strong>+15-20%</strong> on high-risk cohorts via class weighting, stratified sampling, threshold calibration; precision held <strong>&gt;90%</strong>.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services, containerized with <strong>Docker</strong>, structured logging and load simulation; reduced post-deployment defects <strong>~30%</strong>.</li>
        <li>Maintained HIPAA-conscious data governance: de-identification, data lineage, evaluation audit trails, stakeholder-facing system-limitation docs.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Energy Solutions International (Emerson)</span>
        <span class="job-period">Jun 2022 - Apr 2023</span>
      </div>
      <div class="job-role">Database &amp; DevOps Performance Engineer (Intern)</div>
      <div class="job-location">Hyderabad, India - Oil &amp; Gas, Enterprise ERP</div>
      <ul>
        <li>Optimized SQL / T-SQL stored procedures powering Synthesis Order-to-Cash; query execution time <strong>~20% faster</strong>, retrieval latency <strong>~25% lower</strong>.</li>
        <li>Built CI/CD pipelines with Jenkins for schema and stored procedure deployments; reduced deployment errors <strong>&gt;30%</strong>; release cycle time <strong>~35-40% faster</strong> via structured release validation and rollback checkpoints.</li>
        <li>Designed performance dashboards (SQL Server DMVs + Grafana) for query, deadlock, CPU/IO contention monitoring; cut incident recurrence <strong>~25%</strong>; improved root-cause resolution speed <strong>~30%</strong>.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Suvidha Foundation</span>
        <span class="job-period">Jan 2022 - Mar 2022</span>
      </div>
      <div class="job-role">Machine Learning Engineer</div>
      <div class="job-location">Hyderabad, India - Nonprofit Tech, Video Analytics, Applied NLP</div>
      <ul>
        <li>Built a <strong>transformer-based video summarization and highlight-generation system</strong> across 5,000+ recorded sessions; reduced manual review time <strong>60-70%</strong> with <strong>~85% alignment</strong> to human-curated key moments.</li>
        <li>Implemented <strong>document Q&amp;A with RAG</strong> (semantic chunking + embedding retrieval); cut hallucinations <strong>~30%</strong> and lifted contextual answer accuracy <strong>&gt;85%</strong>.</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policy documents. Audit-ready explainable risk scoring with reasoning traces.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine</span>
      <div class="project-desc">Generative AI system for identity-consistent, pose-controlled pixel character synthesis. Stable Diffusion fine-tuning + LoRA for identity, ControlNet + OpenPose/MediaPipe for pose, and an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks.</div>
      <div class="project-tech">PyTorch, Hugging Face Diffusers, FastAPI, Docker</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped solo to the Chrome Web Store. Multi-provider abstraction across 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, and 29 site selectors via Manifest V3 service workers.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / GPT-4o mini / GPT-4.1 Nano / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">End-to-end multimodal app: text description, intermediate structured-prompt transformation, grounded image generation. Structured-prompt layer lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
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
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, Hugging Face Transformers, Diffusers, YOLOv8</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

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
    '{{LOCATION}}': (profile.location || 'Kent, OH') + ' - US-based, F-1 OPT',
    '{{SECTION_SUMMARY}}': 'PROFESSIONAL SUMMARY',
    '{{SECTION_COMPETENCIES}}': 'CORE COMPETENCIES',
    '{{SECTION_EXPERIENCE}}': 'PROFESSIONAL EXPERIENCE',
    '{{SECTION_PROJECTS}}': 'PROJECTS',
    '{{SECTION_EDUCATION}}': 'EDUCATION',
    '{{SECTION_CERTIFICATIONS}}': 'CERTIFICATIONS',
    '{{SECTION_SKILLS}}': 'SKILLS',
    '{{SUMMARY_TEXT}}': role.summary,
    '{{COMPETENCIES}}': role.competencies.map(k => `<span class="competency-tag">${k}</span>`).join('\n      '),
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

const dateFolder = 'output/2026-04-30';
mkdirSync(dateFolder, { recursive: true });

let done = 0;
const failed = [];
for (const role of ROLES) {
  const html = buildHtml(role);
  const tmpPath = `/tmp/cv-${role.slug}.html`;
  const pdfPath = `${dateFolder}/cv-deepak-mallampati-${role.slug}.pdf`;
  writeFileSync(tmpPath, html, 'utf-8');
  try {
    execSync(`node generate-pdf.mjs "${tmpPath}" "${pdfPath}"`, { stdio: 'inherit' });
    done++;
    console.log(`  [${done}/${ROLES.length}] ${role.slug} -> ${pdfPath}`);
  } catch (err) {
    failed.push({ slug: role.slug, err: err.message });
    console.error(`  ! ${role.slug} failed: ${err.message}`);
  }
}

console.log(`\nDone: ${done}/${ROLES.length} PDFs`);
if (failed.length) {
  console.log('Failed:');
  for (const f of failed) console.log(`  - ${f.slug}: ${f.err}`);
  process.exit(1);
}
