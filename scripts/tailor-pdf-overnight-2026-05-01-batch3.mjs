#!/usr/bin/env node
// Overnight 2026-05-01 batch 3 — Yobi MLE Applied / Product (only score >= 3.0 in this overnight batch).

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI engineer shipping production LLM systems end to end: healthcare RAG (~35% retrieval precision, >90% grounded alignment), agentic workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Shipped Manga Lens solo on the Chrome Web Store with four AI vision providers under per-provider failure isolation. Master's in Computer Science, Kent State.`;

const ROLES = {
  'yobi-ml-applied-product': {
    summary: `${BASE} Targeting Yobi's Applied / Product MLE seat — production ranking and risk-scoring pipelines (Patient No-Show: +15-20% recall on high-risk categories, precision held >90% via class weighting + threshold calibration), 0-to-1 product shipping (Manga Lens MV3 + Dream Decoder FastAPI/React), and consumer-facing inference services on FastAPI + Docker. Comfortable owning models, metrics, pipelines, and services end-to-end across messy data and product surfaces.`,
    comps: ['Applied / Product ML', 'Recommender / Ranking Systems', 'Personalization', 'scikit-learn / XGBoost', 'PyTorch', 'FastAPI / Docker', 'CI/CD (Jenkins, GitHub Actions)', 'Pandas / NumPy at Scale', 'Spark / Airflow (ramp-up)', 'Consumer-Facing ML'],
  },
};

const EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI/ML Engineer Trainee - Applied ML, Production Healthcare</div>
      <div class="job-location">USA - Healthcare Technology, Applied ML</div>
      <ul>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show, care engagement scoring, and support prioritization; recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting, stratified sampling, and threshold calibration. Reframes naturally as a ranking/personalization problem on noisy real-world signals.</li>
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval; recursive semantic chunking + transformer embeddings improved retrieval precision <strong>~35%</strong>, response alignment <strong>&gt;90%</strong>.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step queries (eligibility checks, care workflow navigation) with structured reasoning, tool discipline, grounding rules; response stability <strong>~25%</strong>, hallucinations cut <strong>&gt;30%</strong>.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong>.</li>
        <li>EHR preprocessing (Pandas, NumPy) for appointment histories and ticket logs; dataset reliability <strong>&gt;98%</strong>, downstream instability <strong>-40%</strong>.</li>
        <li><strong>HIPAA-conscious governance</strong>: de-identification, data lineage, evaluation audit trails, stakeholder-facing system-limitation docs.</li>
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
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Real-time manga translation extension shipped to the Chrome Web Store. Multi-provider abstraction (4 AI vision providers) with per-provider payload handling for worst-case failure isolation. 29 sites supported across Manifest V3 service workers; 7-day translation cache; cost-aware payload routing (WebP for cloud, JPEG for local Ollama). 0-to-1 consumer surface shipped solo.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, OpenAI / Anthropic / Google / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Platform</span>
      <div class="project-desc">End-to-end multimodal pipeline: text description, intermediate prompt transformation layers, grounded image generation. <strong>~30% contextual alignment</strong> gain, <strong>~25-30% first-pass image success</strong>. Full-stack consumer ML surface.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">5-stage multi-agent pipeline (Intake Normalization, Validation, Consistency, Duplicate Detection, Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong>. RAG-grounded CPT/ICD validation against vector-indexed policies. Audit-ready explainable risk scoring.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts</div>
    </div>
    <div class="project">
      <span class="project-title">Driver Drowsiness Detection - Real-Time YOLOv8 Fatigue Monitoring</span>
      <div class="project-desc">Replaced two-stage CNN pipeline with a unified <strong>YOLOv8</strong> detection-and-classification model — inference latency <strong>~30%</strong>. Sliding-window confidence aggregation suppressed blink-driven false positives <strong>~25%</strong>; adaptive frame skipping + NMS tuning for stable real-time operation via OpenCV video capture.</div>
      <div class="project-tech">PyTorch, YOLOv8, OpenCV, LabelImg, real-time inference</div>
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
    <span class="skill-item"><span class="skill-category">Applied ML:</span> scikit-learn, XGBoost, PyTorch, ranking, threshold calibration, class weighting, walk-forward validation, recommender / personalization patterns</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search, LangChain, LlamaIndex</span>
    <span class="skill-item"><span class="skill-category">Backend / Inference:</span> FastAPI, Flask, REST, WebSockets, Docker, Celery, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pinecone, Elasticsearch, MongoDB, Redis, Pandas, NumPy</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, Prometheus, AWS (EC2, S3, Lambda), GCP; Spark / Airflow ramp-up underway</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied ML, Healthcare AI (HIPAA-conscious), Consumer ML, Multimodal, Computer Vision, Workflow Automation</span>`;

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
  console.log('Usage: node tailor-pdf-overnight-2026-05-01-batch3.mjs <slug>...');
  console.log('Available slugs:', Object.keys(ROLES).join(', '));
  process.exit(1);
}

const today = '2026-05-01';
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
