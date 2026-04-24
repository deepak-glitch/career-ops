#!/usr/bin/env node
/**
 * tailor-pdfs-2026-04-24-batch3.mjs — Overnight batch for reports 139-146.
 * Mirrors tailor-pdfs-batch.mjs layout: tailored summary + competencies per slug,
 * shared experience / projects / education / certifications / skills blocks.
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE_EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI/ML Engineer Trainee - Applied AI, Production LLM</div>
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

const BASE_PROJECTS = `
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Shipped to the Chrome Web Store. Multi-provider runtime (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) with per-provider payload handling for fault isolation (WebP for cloud, JPEG for Ollama to avoid CUDA crash). Manifest V3 + service workers; per-domain selector configs for 29 manga/webtoon sites; 7-day translation cache; privacy policy; narrowed host permissions.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude, GPT-4o, Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">5-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policies. Audit-ready explainable risk scoring.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Platform</span>
      <div class="project-desc">End-to-end multimodal pipeline: text description, intermediate structured prompt transformation, grounded image generation. ~30% contextual alignment gain, ~25-30% first-pass image success.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">YOLOv8 Driver Drowsiness Detection</span>
      <div class="project-desc">Real-time computer vision for driver drowsiness; sub-50ms inference on edge hardware. Walk-forward validation and class-weighted training for imbalanced safety data.</div>
      <div class="project-tech">PyTorch, YOLOv8, OpenCV, ONNX</div>
    </div>`;

const BASE_EDUCATION = `
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

const BASE_CERTIFICATIONS = `
    <div class="cert-item">
      <span class="cert-title">Deep Learning Specialization - <span class="cert-org">DeepLearning.AI (Coursera)</span></span>
      <span class="cert-year">2024</span>
    </div>`;

const BASE_SKILLS = `
    <span class="skill-item"><span class="skill-category">Languages:</span> Python, TypeScript, JavaScript, SQL (T-SQL, PostgreSQL, SQLite), Java, C++</span>
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, OpenAI, Anthropic, Hugging Face Transformers, Diffusers, YOLOv8</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Celery, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy, Snowflake</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, Prometheus, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

const JOBS = [
  {
    slug: 'promise-fde-newgrad-2026-04-24',
    summary: "MS-trained Applied AI engineer (2.5+ yrs) shipping production RAG (~35% retrieval precision gain, >90% grounded alignment), agentic LLM workflows (>30% hallucination reduction), and predictive ML in HIPAA-conscious healthcare. Solo-shipped Manga Lens to Chrome Web Store with 4 LLM vision providers and per-provider fault isolation. Builder who translates regulated, high-stakes asks into reliable deployed systems.",
    competencies: [
      'Forward Deployed Delivery', 'LLM + RAG Production', 'Customer Integration',
      'Python + TypeScript', 'Agentic Workflows', 'HIPAA / Regulated Domain',
      'Data Parsing + Automation', 'Docker + FastAPI', 'API Integrations', 'Debugging in Production',
    ],
  },
  {
    slug: 'happyrobot-fde-2026-04-24',
    summary: "Full-stack AI engineer (2.5 yrs) shipping production RAG + agentic LLM workflows in healthcare and a multi-provider LLM runtime to the Chrome Web Store. Python + TypeScript + FastAPI + Docker. Eval-harness discipline and per-provider fault isolation for real-economy use cases — specialized AI workers with production reliability.",
    competencies: [
      'Full-Stack AI', 'Forward Deployed Delivery', 'Python + TypeScript', 'React + Node',
      'LLM Prompting + Evaluation', 'Multi-Provider Runtime', 'API Integration',
      'Docker', 'Founder Mindset', 'Production Reliability',
    ],
  },
  {
    slug: 'stardex-fde-2026-04-24',
    summary: "Backend + data engineer with AI automation reflex - SQL/T-SQL depth from compliance-sensitive ERP (Emerson: -20% query time, -25% retrieval latency, -30% deploy errors) and production RAG + agentic LLM workflows at Progress. Treats AI tools (Claude, Cursor) as force multipliers for migration, ETL, and product shipping.",
    competencies: [
      'TypeScript + SQL', 'Data Migration', 'ETL + Pipelines', 'AI-Assisted Automation',
      'Database Optimization', 'API Extension', 'Customer-Facing Delivery',
      'Python', 'FastAPI', 'Detail Orientation',
    ],
  },
  {
    slug: 'stackai-fde-2026-04-24',
    summary: "Applied AI engineer with production RAG + agentic workflows in regulated healthcare (~35% retrieval precision gain, >30% hallucination reduction) and a solo-shipped multi-provider LLM Chrome extension. Comfortable translating technical depth to stakeholders via system-limitation docs and eval reports. Ready to co-design enterprise AI deployments where builder credibility is the sales advantage.",
    competencies: [
      'RAG + LLM Workflows', 'Enterprise AI Deployment', 'Solution Co-Design',
      'Python', 'LangChain + LlamaIndex', 'Evaluation + Grounding',
      'FastAPI + Docker', 'Stakeholder Communication', 'Proof-of-Concept Delivery', 'Technical Demos',
    ],
  },
  {
    slug: 'vontive-ai-engineer-2026-04-24',
    summary: "Applied AI engineer (2.5 yrs) building AI agents on Gen AI - LangChain + LlamaIndex, production RAG, multi-agent pipelines with JSON-contract invariants. Statistical evaluation discipline: class-weighted + threshold-calibrated risk models. Ships React / Vite prototypes (Manga Lens, Dream Decoder). Ready for regulated-FinTech AI with measurable reliability.",
    competencies: [
      'AI Agents on GenAI', 'LangChain', 'RAG + Retrieval', 'Python + FastAPI',
      'React + TypeScript', 'Model Comparison + Tradeoffs', 'AWS + Docker',
      'Version Control', 'Statistical Evaluation', 'Stakeholder Communication',
    ],
  },
  {
    slug: 'confido-fullstack-earlycareer-2026-04-24',
    summary: "Full-stack AI builder (2.5 yrs) - production RAG + agentic LLM workflows at Progress, a 4-provider LLM Chrome extension shipped to the store, predictive ML risk models, and data-pipeline work for EHR-scale ingestion. Python + TypeScript + FastAPI + React. Ready to build AI-powered workflows for CPG deductions, forecasting, and trade promotions.",
    competencies: [
      'Full-Stack', 'Python + TypeScript', 'FastAPI + React', 'Backend + Data Pipelines',
      'Computer Vision + NLP', 'AI Workflows', 'RAG', 'Docker',
      'Customer-Ready Systems', 'Early-Career Shipped Products',
    ],
  },
  {
    slug: 'pointone-newgrad-swe-2026-04-24',
    summary: "MS-trained new-grad+ engineer (2.5 yrs) shipping production RAG (~35% precision gain), agentic LLM workflows (>30% hallucination reduction), and a 4-provider LLM Chrome extension to the store. Founder experience at E-Farming university pilot. Ready for high-ownership new-grad SWE work on legal AI products with direct customer visits.",
    competencies: [
      'AI Pipelines + RAG', 'Python + TypeScript', 'FastAPI + Serverless',
      'Product Ownership', 'Customer-Facing Systems', 'Founder Mindset',
      'Startup 0-to-1', 'Evaluation + Grounding', 'Full-Stack', 'Docker',
    ],
  },
  {
    slug: 'mds-ai-engineer-2026-04-24',
    summary: "AI engineer (2.5 yrs + MS CS) building Claude-powered agent systems. Production RAG + agentic LLM workflows at Progress (~35% retrieval precision gain, >30% hallucination reduction), a Claude + GPT + Ollama Chrome extension solo-shipped to the store, and a 5-agent claims pipeline with JSON-schema contracts. Prompts + rubrics as engineered artifacts - eval sets, version control, feedback loops.",
    competencies: [
      'Claude + MCP', 'Agent Systems', 'Python + TypeScript', 'Prompt Engineering',
      'Eval Pipelines', 'Webhook + Event-Driven', 'FastAPI',
      'Git + Code Review', 'Automation Upgrade', 'Observability',
    ],
  },
];

function buildHtml(job) {
  const placeholders = {
    '{{LANG}}': 'en',
    '{{PAGE_WIDTH}}': '780px',
    '{{NAME}}': profile.full_name,
    '{{PHONE}}': profile.phone || '',
    '{{EMAIL}}': profile.email || '',
    '{{LINKEDIN_URL}}': profile.linkedin?.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`,
    '{{LINKEDIN_DISPLAY}}': (profile.linkedin || '').replace(/^https?:\/\//, ''),
    '{{PORTFOLIO_URL}}': profile.portfolio_url || profile.github || 'https://github.com/Deepak0070',
    '{{PORTFOLIO_DISPLAY}}': (profile.portfolio_url || profile.github || 'github.com/Deepak0070').replace(/^https?:\/\//, ''),
    '{{LOCATION}}': profile.location || 'Kent, OH',
    '{{SECTION_SUMMARY}}': 'PROFESSIONAL SUMMARY',
    '{{SECTION_COMPETENCIES}}': 'CORE COMPETENCIES',
    '{{SECTION_EXPERIENCE}}': 'PROFESSIONAL EXPERIENCE',
    '{{SECTION_PROJECTS}}': 'PROJECTS',
    '{{SECTION_EDUCATION}}': 'EDUCATION',
    '{{SECTION_CERTIFICATIONS}}': 'CERTIFICATIONS',
    '{{SECTION_SKILLS}}': 'SKILLS',
    '{{SUMMARY_TEXT}}': job.summary,
    '{{COMPETENCIES}}': job.competencies.map(k => `<span class="competency-tag">${k}</span>`).join('\n      '),
    '{{EXPERIENCE}}': BASE_EXPERIENCE,
    '{{PROJECTS}}': BASE_PROJECTS,
    '{{EDUCATION}}': BASE_EDUCATION,
    '{{CERTIFICATIONS}}': BASE_CERTIFICATIONS,
    '{{SKILLS}}': BASE_SKILLS,
  };
  let html = TEMPLATE;
  for (const [k, v] of Object.entries(placeholders)) html = html.split(k).join(v);
  return html;
}

const dateFolder = '2026-04-24';
execSync(`mkdir -p output/${dateFolder}`);

let done = 0, failed = [];
for (const job of JOBS) {
  const html = buildHtml(job);
  const tmpPath = `/tmp/cv-${job.slug}.html`;
  const pdfPath = `output/${dateFolder}/cv-deepak-mallampati-${job.slug}.pdf`;
  writeFileSync(tmpPath, html, 'utf-8');
  try {
    execSync(`node generate-pdf.mjs "${tmpPath}" "${pdfPath}"`, { stdio: 'inherit' });
    done++;
  } catch (err) {
    failed.push({ slug: job.slug, err: String(err.message || err).slice(0, 200) });
  }
}

console.log(`\nDone. ${done}/${JOBS.length} generated, ${failed.length} failed.`);
if (failed.length) console.log('Failures:', JSON.stringify(failed, null, 2));
