#!/usr/bin/env node
// Overnight 2026-05-01 batch 8 PDF generator - Dex (#364), VetRec (#365), Amigo (#366).

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const ROLES = [
  {
    slug: 'dex-founding-engineer-2026-05-01',
    company: 'Dex',
    role: 'Founding Engineer (new grads ok)',
    summary:
      'Applied AI engineer (M.S. Computer Science, Kent State, May 2025; 2.5+ yrs production) shipping browser-native AI products and agentic systems end-to-end. Manga Lens shipped solo to the Chrome Web Store - multi-provider AI vision Chrome extension built on Manifest V3 with content scripts, service workers, and captureVisibleTab + viewport-slice screenshots with coordinate remapping for arbitrarily tall webtoon panels; per-provider payload routing across Claude / GPT-4o mini / GPT-4.1 Nano / Ollama (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, 29 site selectors. Five-agent healthcare claims pipeline with schema-validated JSON contracts (pydantic) between Intake / Validation / Consistency / Duplicate / Risk Scoring agents prevents cascading hallucinations and produces audit-ready reasoning traces - the agent-graph + memory + tool-use architecture Dex needs. Dream Decoder full-stack FastAPI + React / Vite / Tailwind multimodal app: intermediate structured-prompt transformation layers lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration. Healthcare RAG +35% retrieval precision, >90% grounded alignment; agentic LLM workflows >30% hallucination cut. Python + TypeScript + React / Next.js full-stack with FastAPI + Docker production discipline.',
    competencies: [
      'Browser-Native AI',
      'Manifest V3 / Service Workers',
      'Agent Memory + Planning',
      'TypeScript + React / Next.js',
      'Python + LLM Orchestration',
      'Schema-Validated Contracts',
      'Real-Time UI Observation',
      'Multi-Provider AI Routing',
      'Rapid Prototype to Production',
      'Public Artifacts (Chrome Web Store)',
    ],
  },
  {
    slug: 'vetrec-fde-ny-2026-05-01',
    company: 'VetRec',
    role: 'Forward Deployed Engineer (NY)',
    summary:
      'Applied AI engineer (M.S. Computer Science, Kent State, May 2025; 2.5+ yrs production) building clinical-documentation AI under HIPAA-conscious discipline - directly transferable to VetRec\'s veterinary AI scribe. At Progress Solutions, I built healthcare RAG (recursive semantic chunking + transformer embeddings, +35% retrieval precision, >90% grounded alignment) and agentic LLM workflows for documentation clarification, eligibility checks, and care navigation - hallucinations >30% cut, agent response stability lifted ~25%. Five-agent healthcare claims pipeline with schema-validated JSON contracts (pydantic) between agents prevents cascading hallucinations and produces audit-ready reasoning traces - customer-facing FDE customization scaffold. FastAPI + Docker production services with structured logging cut post-deploy defects ~30% across regulated workflows. Manga Lens shipped solo to Chrome Web Store - public artifact demonstrating end-to-end ship discipline from prototype to production. Stakeholder-facing system-limitation docs and HIPAA-conscious data governance (de-identification, lineage, evaluation audit trails) reduce misuse incidents and raise customer trust. Python + TypeScript full-stack, LangChain + LlamaIndex, REST APIs, cloud-ready Docker packaging.',
    competencies: [
      'Healthcare AI / HIPAA',
      'AI Scribe Architecture',
      'Customer-Facing Delivery',
      'API + Cloud Integrations',
      'Data Pipelines',
      'Python + TypeScript',
      'FastAPI / Docker',
      'Agent Customization',
      'Stakeholder Comms',
      'Rapid Iteration',
    ],
  },
  {
    slug: 'amigo-applied-ai-2026-05-01',
    company: 'Amigo',
    role: 'Applied AI Engineer',
    summary:
      'Applied AI engineer (M.S. Computer Science, Kent State, May 2025; 2.5+ yrs production) shipping production AI agents end-to-end with verification loops, evaluation suites gating deployments, and HIPAA-conscious governance. Five-agent healthcare claims pipeline with schema-validated JSON contracts (pydantic) between Intake / Validation / Consistency / Duplicate / Risk Scoring agents prevents cascading hallucinations and produces audit-ready reasoning traces - direct analog to Amigo\'s Operational Patient Domains with explicit capabilities and escalation rules. Healthcare RAG (recursive semantic chunking + transformer embeddings) lifted retrieval precision ~35% with >90% grounded alignment; agentic LLM workflows for multi-step healthcare queries (eligibility checks, care navigation, documentation clarification) cut hallucinations >30% and lifted agent response stability ~25% via structured reasoning, tool discipline, and grounding rules. Python primary with strict typing for reliable API interactions; FastAPI + Docker production services with structured logging cut post-deploy defects ~30%. Adversarial-pattern work in Driver Drowsiness System (sliding-window confidence aggregation cut blink-driven false positives ~25%) and fraud-risk + duplicate-detection in Healthcare Claims pipeline. HIPAA-conscious data governance: de-identification, lineage, evaluation audit trails, stakeholder-facing system-limitation docs.',
    competencies: [
      'Production AI Agents',
      'Verification Loops + Eval Suites',
      'Operational Domains',
      'HIPAA-Conscious Governance',
      'Python (typed) + LLM Orchestration',
      'Schema-Validated Contracts',
      'RAG + Grounding',
      'Adversarial Testing',
      'Audit-Ready Provenance',
      'Customer + Stakeholder Delivery',
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
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped solo to the Chrome Web Store. Multi-provider abstraction across 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, and 29 site selectors via Manifest V3 service workers.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / GPT-4o mini / GPT-4.1 Nano / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine</span>
      <div class="project-desc">Generative AI system for identity-consistent, pose-controlled pixel character synthesis. Stable Diffusion fine-tuning + LoRA for identity, ControlNet + OpenPose / MediaPipe for pose, and an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks.</div>
      <div class="project-tech">PyTorch, Hugging Face Diffusers, FastAPI, Docker</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">End-to-end multimodal app: text description, intermediate structured-prompt transformation, grounded image generation. Structured-prompt layer lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">Driver Drowsiness Detection - Real-Time YOLOv8</span>
      <div class="project-desc">Replaced a two-stage CNN pipeline with a unified YOLOv8 detect-and-classify model; reduced inference latency ~30%. Sliding-window confidence aggregation cut blink-driven false positives ~25%; adaptive frame skipping and NMS tuning for stable real-time operation.</div>
      <div class="project-tech">YOLOv8, OpenCV, PyTorch, LabelImg</div>
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
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, function calling, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

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

const dateFolder = 'output/2026-05-01';
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
