#!/usr/bin/env node
// Overnight 2026-05-06 batch 8 — ElevenLabs Enterprise SE NA + Symmetry Systems Associate FDE L3.
// Reuses the experience/projects/education/certs/skills blocks from tailor-pdf-overnight-2026-05-06.mjs.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI / ML engineer shipping production healthcare AI end to end: HIPAA-conscious RAG (~35% retrieval precision, >90% grounded alignment), predictive ML pipelines (15-20% recall on high-risk patient categories at >90% precision), agentic LLM workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Production computer vision via YOLOv8 (~30% inference latency reduction). Master's in Computer Science, Kent State.`;

const ROLES = {
  'elevenlabs-enterprise-se-na': {
    summary: `${BASE} Targeting ElevenLabs's Enterprise Solutions Engineer (North America) seat — Manga Lens Chrome Web Store extension shipping a 4-provider AI vision abstraction layer (Claude Sonnet, GPT-4o-mini, GPT-4.1-Nano, Ollama) with cost-aware payload routing and per-domain configs for 29 sites (productizing customer integration patterns at scale), Dream Decoder coordinated multimodal demo with structured-prompt transformation layers (+30% contextual alignment, +25-30% first-pass image success), schema-validated multi-agent claims pipeline (architect-grade integration discipline), and HIPAA-conscious stakeholder-facing system-limitation docs (translating technical complexity to executives) translate 1:1 to ElevenAgents/ElevenAPI customer architecture, technical demos, enablement assets, and the productize-common-patterns charter. Remote (NA preferred), F-1 OPT US-base.`,
    comps: ['Solutions Engineering / FDE', 'Customer-facing AI Delivery', 'Multi-Provider AI Integration', 'Voice AI / Conversational AI (adjacent)', 'Python / FastAPI / Software Architecture', 'Technical Demos & POCs', 'Enterprise Integration Patterns', 'Productizing Customer Patterns', 'Agentic LLM Workflows', 'Remote (US)'],
  },
  'symmetry-systems-associate-fde-l3': {
    summary: `${BASE} Targeting Symmetry Systems's Associate Forward Deployed Engineer (L3) seat — HIPAA-conscious data governance program at Progress Solutions (de-identification, data lineage, evaluation audit trails, stakeholder-facing system-limitation docs), Emerson RBAC + audit logging in compliance-sensitive oil & gas financial workflows (recurring audit-finding rate dropped), schema-validated multi-agent claims pipeline (deployable across customer environments), and Manga Lens 4-provider AI vision integration with cost-aware payload routing (multi-cloud DSPM analog) translate 1:1 to Symmetry's data + AI security delivery, customer technical discovery, deployment across cloud / on-prem / hybrid, and the explicit Claude Code AI-tooling acceleration charter. Remote (US), F-1 OPT US-base.`,
    comps: ['Forward Deployed Engineer', 'Customer-facing AI Delivery', 'HIPAA / Data Governance / Audit Trails', 'AI Tooling (Claude Code, Multi-Provider)', 'Cloud-Ready Deployment (Docker, Logging)', 'RBAC / Compliance / Audit Logging', 'Python / TypeScript / FastAPI', 'Multi-Agent Architecture', 'Data Security Adjacent', 'Remote (US)'],
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
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval and healthcare documentation search; recursive semantic chunking + transformer embeddings improved retrieval precision <strong>~35%</strong>; retrieval-grounded response alignment <strong>&gt;90%</strong>.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility checks, care workflow navigation, documentation clarification) with structured reasoning, tool discipline, grounding rules; agent response stability <strong>~25%</strong>; hallucinations <strong>&gt;30%</strong>.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show, care engagement scoring, support prioritization; recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting, stratified sampling, threshold calibration.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong>.</li>
        <li>Authored <strong>HIPAA-conscious data governance</strong>: de-identification, data lineage documentation, evaluation audit trails, stakeholder-facing system-limitation docs (translated technical limits into executive-facing language).</li>
        <li>EHR + appointment + ticket preprocessing (Pandas, NumPy); dataset reliability <strong>&gt;98%</strong>, downstream instability <strong>-40%</strong>.</li>
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
        <li>Implemented <strong>RBAC and audit logging for financial modules</strong> in a compliance-sensitive oil &amp; gas environment; reduced recurring audit-finding rate.</li>
        <li>Optimized SQL and <strong>T-SQL stored procedures</strong> on the Synthesis Order-to-Cash platform; query execution time <strong>~20%</strong>, data retrieval latency <strong>~25%</strong>.</li>
        <li>Built <strong>CI/CD pipelines with Jenkins</strong> for schema updates and stored procedure deployments; deployment errors <strong>&gt;30%</strong>, release cycle <strong>~35-40%</strong>.</li>
        <li>Designed <strong>SQL Server DMVs and Grafana</strong> performance dashboards for long-running queries, deadlocks, CPU/IO contention; incident recurrence <strong>~25%</strong>, RCA speed <strong>~30%</strong>.</li>
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
        <li>Implemented <strong>document Q&amp;A with RAG</strong>; hallucinations <strong>~30%</strong>, contextual accuracy <strong>&gt;85%</strong>.</li>
        <li>Deployed as <strong>Flask</strong> API with a lightweight web interface for non-technical staff (research-to-production handoff for non-engineers).</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension (shipped, Chrome Web Store)</span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped to the Chrome Web Store. <strong>Multi-provider abstraction layer</strong> integrating four AI vision providers (Claude Sonnet, GPT-4o-mini, GPT-4.1-Nano, Ollama/minicpm-v) with per-provider payload handling (WebP for cloud, JPEG for local), cost-aware routing, circuit-breaker fallback. Manifest V3 service workers; multi-section capture pipeline for tall panels with coordinate remapping; 7-day cache; per-domain selector configs for 29 manga/webtoon sites; narrowed host permissions and privacy policy.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, OpenAI / Anthropic / Google / Ollama, multi-provider integration</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake Normalization, Validation, Consistency Analysis, Duplicate Detection, Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong> to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policies. Audit-ready explainable risk scoring with reasoning traces; deployable across customer environments via portable inter-agent contracts.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts, vector search</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - AI Multimodal Creative Intelligence</span>
      <div class="project-desc">Full-stack FastAPI + React/TypeScript/Vite/Tailwind app coordinating multimodal APIs (Perplexity Sonar interpretation + Replicate image models for 16:9 visuals). Introduced <strong>intermediate structured prompt transformation layers</strong> - <strong>+30%</strong> contextual alignment and <strong>+25-30%</strong> first-pass image success rate over naïve direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React, TypeScript, structured prompt schemas, multimodal orchestration</div>
    </div>
    <div class="project">
      <span class="project-title">Driver Drowsiness Detection - Real-Time YOLOv8 Fatigue Monitoring</span>
      <div class="project-desc">Replaced two-stage CNN pipeline with a unified <strong>YOLOv8</strong> detection-and-classification model - inference latency <strong>~30%</strong>. Sliding-window confidence aggregation suppressed blink-driven false positives <strong>~25%</strong>; adaptive frame skipping + NMS tuning for stable real-time operation via OpenCV video capture.</div>
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
    <span class="skill-item"><span class="skill-category">Languages:</span> Python, TypeScript, JavaScript, SQL (T-SQL, PostgreSQL, SQLite), C++</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, evaluation pipelines, embeddings, vector search, LangChain, LlamaIndex, multi-provider AI integration, Claude / GPT-4o / Ollama</span>
    <span class="skill-item"><span class="skill-category">ML Frameworks:</span> PyTorch, scikit-learn, XGBoost, Hugging Face Transformers, threshold calibration, walk-forward validation</span>
    <span class="skill-item"><span class="skill-category">Computer Vision:</span> YOLOv8, OpenCV, ControlNet, OpenPose / MediaPipe, Stable Diffusion, video analytics</span>
    <span class="skill-item"><span class="skill-category">Backend / Inference:</span> FastAPI, Flask, REST, Docker, structured logging, load simulation</span>
    <span class="skill-item"><span class="skill-category">Data Governance:</span> HIPAA-conscious de-identification, data lineage, evaluation audit trails, RBAC, audit logging</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Forward Deployed Engineering, Customer-facing AI Delivery, Healthcare AI</span>`;

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
  console.log('Usage: node tailor-pdf-overnight-2026-05-06-batch8.mjs <slug>...');
  console.log('Available slugs:', Object.keys(ROLES).join(', '));
  process.exit(1);
}

const today = '2026-05-06';
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
