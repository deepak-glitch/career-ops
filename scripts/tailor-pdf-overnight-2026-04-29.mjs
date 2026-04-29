#!/usr/bin/env node
// One-off tailoring helper for overnight 2026-04-29 batch. Mirrors regen-all.mjs
// content blocks but accepts a per-role tailored summary + competencies tag list
// from a small per-slug mapping below, then writes /tmp/cv-{slug}-2026-04-29.html.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI engineer shipping production LLM systems end to end: healthcare RAG (~35% retrieval precision, >90% grounded alignment), agentic workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Shipped Manga Lens solo on the Chrome Web Store with four AI vision providers under per-provider failure isolation. Master's in Computer Science, Kent State.`;

// Per-role tailoring (summary tail + competencies override)
const ROLES = {
  'furtherai-fde': {
    summary: `${BASE} Targeting Forward Deployed Engineer roles building enterprise-grade agentic AI systems from the ground up — translating customer flows into robust agentic solutions, shipping production LLM features, and partnering directly with founders on customer pain.`,
    comps: ['Forward Deployed Engineering', 'Agentic AI Systems', 'RAG + Grounding', 'Python / FastAPI', 'TypeScript / React', 'LLM Production', 'Customer-Facing Delivery', 'Schema Contracts', 'Eval Harnesses', 'Docker / CI-CD'],
  },
  'continued-ai-engineer': {
    summary: `${BASE} Targeting Applied AI / AI Platform Engineer roles operationalizing LLM and ML systems out of notebooks into live, scalable, monitored services — MCP, LangChain, vector databases, and semantic search at enterprise scale.`,
    comps: ['Applied AI / LLMs', 'LangChain + MCP', 'Vector Search + Semantic Retrieval', 'RAG + Grounding', 'Python / FastAPI', 'Eval Harnesses', 'Docker / CI-CD', 'Observability + Logging', 'Schema Contracts', 'Production ML Pipelines'],
  },
  'extend-fde': {
    summary: `${BASE} Targeting Forward Deployed Engineer roles owning enterprise LLM-powered document-processing rollouts end to end — diagnosing edge cases on real customer data, hardening pipelines, and feeding learnings back into product.`,
    comps: ['Forward Deployed Engineering', 'LLM Document Processing', 'RAG + Grounding', 'Schema Contracts', 'Python / FastAPI', 'TypeScript / React', 'Customer-Facing Delivery', 'Eval Harnesses', 'Production Hardening', 'Docker / CI-CD'],
  },
  'adaptive-ml-fde': {
    summary: `${BASE} Targeting Forward Deployed AI Engineer roles supporting enterprise LLM specialization and RLOps — synthetic-data pipelines, evaluation, and continuous improvement signals from production feedback.`,
    comps: ['Forward Deployed Engineering', 'LLM Specialization', 'RLOps + Eval', 'Synthetic Data Pipelines', 'Python', 'RAG + Grounding', 'Customer-Facing Delivery', 'Production ML', 'Observability', 'Distributed Systems'],
  },
  'justai-fullstack': {
    summary: `${BASE} Targeting Full Stack Software Engineer roles owning customer-facing AI features end to end — backend services, schema contracts, AI integration, and front-end product surfaces in fast-moving startups.`,
    comps: ['Full Stack AI Features', 'Python / FastAPI', 'TypeScript / React', 'LLM Integration', 'Schema Contracts', 'Eval Harnesses', 'Docker / CI-CD', 'AWS', 'Product Engineering', 'Customer Workflows'],
  },
  'vontive-ai-engineer': {
    summary: `${BASE} Targeting AI Engineer roles building agent-based systems on top of LLMs for regulated domains — document processing, policy Q&A, and audit-grade compliance workflows.`,
    comps: ['Applied AI / LLMs', 'AI Agent Development', 'LangChain', 'RAG + Grounding', 'Python', 'AWS Serverless', 'Schema Contracts', 'Production ML', 'Eval Harnesses', 'Regulated-Domain AI'],
  },
  'bandwidth-applied-ai': {
    summary: `${BASE} Targeting Applied AI Engineer roles inside enterprise IT — owning internal AI platforms, RAG pipelines, LLM APIs, and FastAPI/Docker services that create leverage across infrastructure, identity, monitoring, and automation tooling.`,
    comps: ['Applied AI / Internal Platforms', 'RAG + LLM APIs', 'Prompt Engineering', 'Python / TypeScript', 'AWS / Docker / Kubernetes', 'MLOps + Model Serving', 'FastAPI Internal APIs', 'Schema Contracts', 'Eval Harnesses', 'CI/CD + Observability'],
  },
  'talentpluto-fde': {
    summary: `${BASE} Targeting Forward Deployed Engineer roles in enterprise AI infrastructure — bridging customer pilots to production with RAG, agentic workflows, and FastAPI/Docker packaging in early-stage venture-backed environments.`,
    comps: ['Forward Deployed Engineering', 'Enterprise AI Infrastructure', 'RAG + Grounding', 'Agentic AI Systems', 'Python / FastAPI', 'TypeScript', 'Docker / CI-CD', 'Customer-Facing Delivery', 'Eval Harnesses', 'Schema Contracts'],
  },
  'warp-fde': {
    summary: `${BASE} Targeting Forward Deployed Engineer roles in agentic developer platforms — owning enterprise pilots through production agent workflows with prompt engineering, schema contracts, and FastAPI/Docker packaging.`,
    comps: ['Forward Deployed Engineering', 'Agentic AI Systems', 'Prompt Engineering', 'LLM Production', 'Python / FastAPI', 'Docker / CI-CD', 'AWS / GCP / Azure', 'Schema Contracts', 'Eval Harnesses', 'Customer-Facing Delivery'],
  },
};

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
      <div class="project-desc">Real-time manga translation extension shipped to the Chrome Web Store. Multi-provider abstraction (4 AI vision providers) with per-provider payload handling for worst-case failure isolation. 29 sites supported across manifest V3 service workers.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, OpenAI / Anthropic / Google / Ollama</div>
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
      <div class="edu-desc">Founder / Lead of E-Farming platform (university project).</div>
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
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, Prometheus, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

function buildHtml(slug) {
  const { summary, comps } = ROLES[slug];
  const placeholders = {
    '{{LANG}}': 'en',
    '{{PAGE_WIDTH}}': '780px',
    '{{NAME}}': profile.full_name || 'Deepak Mallampati',
    '{{PHONE}}': profile.phone || '',
    '{{EMAIL}}': profile.email || '',
    '{{LINKEDIN_URL}}': profile.linkedin?.startsWith('http') ? profile.linkedin : `https://${profile.linkedin || ''}`,
    '{{LINKEDIN_DISPLAY}}': (profile.linkedin || '').replace(/^https?:\/\//, ''),
    '{{PORTFOLIO_URL}}': profile.portfolio_url || profile.github || '',
    '{{PORTFOLIO_DISPLAY}}': (profile.portfolio_url || profile.github || 'github.com/Deepak0070').replace(/^https?:\/\//, ''),
    '{{LOCATION}}': profile.location || 'Kent, OH',
    '{{SECTION_SUMMARY}}': 'PROFESSIONAL SUMMARY',
    '{{SECTION_COMPETENCIES}}': 'CORE COMPETENCIES',
    '{{SECTION_EXPERIENCE}}': 'PROFESSIONAL EXPERIENCE',
    '{{SECTION_PROJECTS}}': 'PROJECTS',
    '{{SECTION_EDUCATION}}': 'EDUCATION',
    '{{SECTION_CERTIFICATIONS}}': 'CERTIFICATIONS',
    '{{SECTION_SKILLS}}': 'SKILLS',
    '{{SUMMARY_TEXT}}': summary,
    '{{COMPETENCIES}}': comps.map(k => `<span class="competency-tag">${k}</span>`).join('\n      '),
    '{{EXPERIENCE}}': EXPERIENCE,
    '{{PROJECTS}}': PROJECTS,
    '{{EDUCATION}}': EDUCATION,
    '{{CERTIFICATIONS}}': CERTIFICATIONS,
    '{{SKILLS}}': SKILLS,
  };
  let html = TEMPLATE;
  for (const [k, v] of Object.entries(placeholders)) html = html.split(k).join(v);
  return html;
}

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.log('Usage: node tailor-pdf-overnight-2026-04-29.mjs <slug>...');
  console.log('Available slugs:', Object.keys(ROLES).join(', '));
  process.exit(1);
}

const today = '2026-04-29';
execSync(`mkdir -p output/${today}`);
for (const slug of targets) {
  if (!ROLES[slug]) {
    console.log(`SKIP unknown slug: ${slug}`);
    continue;
  }
  const html = buildHtml(slug);
  const tmp = `/tmp/cv-${slug}-${today}.html`;
  const pdf = `output/${today}/cv-deepak-mallampati-${slug}-${today}.pdf`;
  writeFileSync(tmp, html, 'utf-8');
  try {
    execSync(`node generate-pdf.mjs "${tmp}" "${pdf}"`, { stdio: ['ignore', 'inherit', 'inherit'] });
    console.log(`OK ${pdf}`);
  } catch (err) {
    console.log(`FAIL ${slug}: ${err.message?.slice(0,200)}`);
  }
}
