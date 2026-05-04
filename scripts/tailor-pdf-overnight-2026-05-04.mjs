#!/usr/bin/env node
// Overnight 2026-05-04 batch — StackAI FDE Healthcare + Ascertain FDE NYC/Remote + BioRender Applied AI + WeRide CV New Grad.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI / ML engineer shipping production healthcare AI end to end: HIPAA-conscious RAG (~35% retrieval precision, >90% grounded alignment), predictive ML pipelines (15-20% recall on high-risk patient categories at >90% precision), agentic LLM workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Production computer vision via YOLOv8 (~30% inference latency reduction). Master's in Computer Science, Kent State.`;

const ROLES = {
  'stackai-fde-healthcare': {
    summary: `${BASE} Targeting StackAI's Forward Deployed Engineer (Healthcare) seat — clinical knowledge RAG (recursive semantic chunking + transformer embeddings, +35% precision, >90% grounded alignment), agentic Healthcare Claims pipeline w/ schema-validated JSON contracts + RAG-grounded CPT/ICD validation, EHR pipelines w/ HIPAA-conscious data governance, and full-stack Python (FastAPI) + React/TypeScript (Dream Decoder, Manga Lens) translate 1:1 to StackAI's payer/provider deployments. Open to NYC relocation.`,
    comps: ['Forward Deployed Engineer', 'Healthcare AI / RAG', 'EHR Integrations + PHI Handling', 'Agentic LLM Workflows', 'Schema-Validated JSON Contracts', 'Python / FastAPI', 'React / Next.js / TypeScript', 'Customer-Facing Engineering', 'HIPAA-Conscious Governance', 'NYC On-Site Available'],
  },
  'ascertain-fde-nyc-remote': {
    summary: `${BASE} Targeting Ascertain's Forward Deployed Engineer (NYC or Remote-US) seat — clinical knowledge RAG (+35% retrieval precision, >90% grounded alignment), agentic Healthcare Claims w/ schema-validated JSON contracts + RAG-grounded CPT/ICD validation, EHR + appointment pipelines w/ HIPAA-conscious governance, and shipped browser-automation depth (Manga Lens — Manifest V3, viewport-slice DOM capture, 29-site selector configs) translate 1:1 to Ascertain's prior-auth, referral, and claims deployments. Open to NYC relocation or Remote-US.`,
    comps: ['Forward Deployed Engineer', 'Healthcare AI Agents', 'Prior Auth + Claims + Referral', 'EHR APIs (Athena/eClinicalWorks/Epic)', 'RAG / Retrieval Grounding', 'Browser Automation (Manifest V3)', 'Python / SQL / REST', 'Schema-Validated JSON Contracts', 'HIPAA-Conscious Governance', 'NYC or Remote-US'],
  },
  'biorender-applied-ai': {
    summary: `${BASE} Targeting BioRender's Applied AI Engineer (Internal AI Tools) seat — multi-provider AI integration (Manga Lens, 4 vision providers — Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v — w/ per-provider payload handling and cost-aware routing), agentic Healthcare Claims pipeline w/ schema-validated JSON contracts, and full-stack Python + TypeScript (Dream Decoder, FastAPI + React) translate 1:1 to BioRender's internal-AI tooling for Sales / Finance / People / CS. US-Remote, F-1 OPT.`,
    comps: ['Applied AI Engineer', 'Internal AI Tooling', 'Multi-Provider AI Integration', 'OpenAI / Anthropic / Gemini APIs', 'Agentic LLM Workflows', 'Python / JavaScript / Node', 'SaaS Integrations + Third-Party APIs', 'Production Reliability + Logging', 'Cross-Functional Stakeholder Comms', 'US Remote'],
  },
  'weride-cv-newgrad': {
    summary: `${BASE} Targeting WeRide's New Grad 2026 Software Engineer (Computer Vision) seat — shipped real-time YOLOv8 detection (~30% inference latency reduction, ~25% blink false-positive suppression via sliding-window aggregation), transformer-based hierarchical video summarization (5,000+ sessions, ~85% highlight alignment), multimodal Stable Diffusion + LoRA + ControlNet + OpenPose pipeline orchestrated by an LLM agent, and Python + C++ (Arduino) embedded experience translate 1:1 to WeRide's perception team (CV models, real-time integration, multi-modal sensor fusion, LLM/VLM bonus). Open to San Jose relocation.`,
    comps: ['Computer Vision (YOLOv8 / OpenCV)', 'Real-Time Perception Integration', 'Multi-Modal (Stable Diffusion + ControlNet + OpenPose)', 'Transformer-Based Video Understanding', 'LLM / VLM (Bonus)', 'Python / C++', 'Data Pipelines + Eval', 'Master\'s CS, Kent State', 'Open to San Jose Relocation', 'F-1 OPT US-Based'],
  },
};

const EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI/ML Engineer Trainee - Applied AI, Healthcare</div>
      <div class="job-location">USA - Healthcare Technology, Applied AI</div>
      <ul>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility checks, care workflow navigation, documentation clarification) with structured reasoning, tool discipline, grounding rules; agent response stability <strong>~25%</strong>; hallucinations <strong>&gt;30%</strong>.</li>
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval and healthcare documentation search; recursive semantic chunking + transformer embeddings improved retrieval precision <strong>~35%</strong>; retrieval-grounded response alignment <strong>&gt;90%</strong>.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong>.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show, care engagement scoring, support prioritization; recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting, stratified sampling, threshold calibration.</li>
        <li>EHR + appointment + ticket preprocessing (Pandas, NumPy); dataset reliability <strong>&gt;98%</strong>, downstream instability <strong>-40%</strong>.</li>
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
        <li>Built <strong>transformer-based video summarization</strong> over 5,000+ recorded sessions; hierarchical summarization + timestamp-aligned clip extraction cut manual review <strong>60-70%</strong>.</li>
        <li>AI-selected highlights aligned with human-curated moments <strong>~85%</strong>.</li>
        <li>Implemented <strong>document Q&amp;A with RAG</strong>; hallucinations <strong>~30%</strong>, contextual accuracy <strong>&gt;85%</strong>.</li>
        <li>Deployed as <strong>Flask</strong> API with a lightweight web interface for non-technical staff.</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake Normalization, Validation, Consistency Analysis, Duplicate Detection, Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong> to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policies. Audit-ready explainable risk scoring with reasoning traces.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts, vector search</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Real-time manga translation extension shipped to the Chrome Web Store. Multi-provider abstraction (4 AI vision providers — Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) with per-provider payload handling for failure isolation. Manifest V3 service workers; 7-day translation cache; cost-aware payload routing (WebP for cloud, JPEG for local).</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, OpenAI / Anthropic / Google / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Driver Drowsiness Detection - Real-Time YOLOv8 Fatigue Monitoring</span>
      <div class="project-desc">Replaced two-stage CNN pipeline with a unified <strong>YOLOv8</strong> detection-and-classification model — inference latency <strong>~30%</strong>. Sliding-window confidence aggregation suppressed blink-driven false positives <strong>~25%</strong>; adaptive frame skipping + NMS tuning for stable real-time operation via OpenCV video capture.</div>
      <div class="project-tech">PyTorch, YOLOv8, OpenCV, LabelImg, real-time inference</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">Full-stack FastAPI + React/TypeScript app coordinating multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Introduced <strong>intermediate structured prompt transformation layers</strong> — improved contextual alignment <strong>~30%</strong> and first-pass image success rate <strong>~25-30%</strong> over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React, TypeScript, Perplexity Sonar, Replicate, structured prompts</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine</span>
      <div class="project-desc">Phased generative AI system for identity-consistent, pose-controlled pixel character synthesis. Stable Diffusion fine-tuning + LoRA for identity consistency, ControlNet + OpenPose/MediaPipe for pose conditioning, latent-space consistency for animation smoothness, and an <strong>LLM-based agent orchestrator</strong> that decomposes high-level prompts into generation tasks.</div>
      <div class="project-tech">PyTorch, Hugging Face Diffusers, ControlNet, OpenPose, FastAPI, Docker</div>
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
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, evaluation pipelines, guardrails, grounding, embeddings, vector search, LangChain, LlamaIndex, Hugging Face Transformers, multi-provider AI integration</span>
    <span class="skill-item"><span class="skill-category">Applied ML:</span> scikit-learn, XGBoost, PyTorch, TensorFlow, recall / precision tuning, threshold calibration, class weighting, walk-forward validation</span>
    <span class="skill-item"><span class="skill-category">Computer Vision:</span> YOLOv8, OpenCV, ControlNet, OpenPose / MediaPipe, Stable Diffusion, video analytics</span>
    <span class="skill-item"><span class="skill-category">Backend / Inference:</span> FastAPI, Flask, REST, Docker, structured logging, load simulation</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pandas, NumPy, EHR preprocessing</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS (EC2, S3, Lambda), GCP, cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Enterprise GenAI, Forward Deployed Engineering, Multi-Modal Systems</span>`;

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
  console.log('Usage: node tailor-pdf-overnight-2026-05-04.mjs <slug>...');
  console.log('Available slugs:', Object.keys(ROLES).join(', '));
  process.exit(1);
}

const today = '2026-05-04';
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
