#!/usr/bin/env node
// Overnight 2026-05-05 batch 6 — PitchBook Data ML Engineer + Loop AI Engineer.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI / ML engineer shipping production AI end to end: HIPAA-conscious RAG (~35% retrieval precision, >90% grounded alignment), predictive ML pipelines (15-20% recall on high-risk patient categories at >90% precision), agentic LLM workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Production computer vision via YOLOv8 (~30% inference latency reduction). Master's in Computer Science, Kent State.`;

const ROLES = {
  'pitchbook-data-ml-engineer': {
    summary: `${BASE} Targeting PitchBook Data's Machine Learning Engineer seat (Seattle on-site) — Suvidha transformer-based hierarchical document/transcript summarization (5,000+ sessions, 60-70% review-time reduction, ~85% human-curation alignment) translates 1:1 to PitchBook's NLP at capital-markets data scale; Healthcare RAG w/ recursive semantic chunking + transformer embeddings (~35% precision, >90% groundedness) and predictive ML pipelines (15-20% recall on high-risk categories at >90% precision via class weighting + threshold calibration) demonstrate production GenAI/LLM + ML lifecycle ownership in a regulated-data domain analogous to PE/financial data. FastAPI/Flask + Docker + structured logging packaging (~30% post-deploy defect reduction) maps to PitchBook's "build + deploy + maintain" model lifecycle. F-1 OPT, open to Seattle relocation.`,
    comps: ['Machine Learning Engineer', 'NLP / Generative AI / LLMs', 'Production ML Lifecycle', 'Python / SQL / PyTorch / scikit-learn', 'Docker / Cloud Deployment', 'Capital Markets / Financial Data', 'Regulated-Data Domain Discipline', 'End-to-End Model Delivery', 'Eval-as-Code', 'Seattle On-Site'],
  },
  'loop-ai-engineer': {
    summary: `${BASE} Targeting Loop's AI Engineer seat (SF) — Manga Lens shipped Chrome extension w/ four AI vision providers (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) routed through a unified provider-abstraction layer w/ per-provider payload contracts (WebP cloud, JPEG local) maps directly to Loop's "multimodal LLMs for document extraction"; Agentic Healthcare Claims Processing 5-stage pipeline (Intake → Validation → Consistency → Duplicate Detection → Risk Scoring) w/ schema-validated JSON contracts between agents + RAG-grounded CPT/ICD validation translates 1:1 to Loop's "agentic workflows for document extraction"; FastAPI + Docker + structured logging packaging (~30% post-deploy defect reduction) covers backend engineering + production deployment; Suvidha transformer-based document/transcript summarization (5,000+ docs, 60-70% review-time reduction) covers ML modeling + NLP at scale. F-1 OPT, open to SF or Chicago relocation.`,
    comps: ['AI Engineer', 'Multimodal LLM Production', 'Document Extraction', 'Agentic Workflows', 'Schema-Validated Multi-Agent', 'ML Modeling + AI Engineering + Backend', 'Python / TypeScript / FastAPI', 'Docker / Cloud / RESTful APIs', 'Multi-Provider Routing', 'Supply Chain / Logistics / Freight', 'SF / Chicago Relocation'],
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
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval and documentation search; recursive semantic chunking + transformer embeddings improved retrieval precision <strong>~35%</strong>; retrieval-grounded response alignment <strong>&gt;90%</strong> in evaluation harness.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility, care navigation, documentation) with <strong>structured outputs, validation, tool discipline, grounding rules</strong>; agent response stability <strong>~25%</strong>; hallucinations <strong>&gt;30%</strong>.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show prediction, care engagement scoring, support prioritization; recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting + stratified sampling + threshold calibration.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong> - end-to-end model lifecycle (architecture → train → deploy → maintain).</li>
        <li>Built preprocessing pipelines (Pandas, NumPy) for EHR extracts, appointment histories, support ticket logs; dataset reliability <strong>&gt;98%</strong>, downstream model instability <strong>-40%</strong>.</li>
        <li><strong>HIPAA-conscious data governance</strong>: de-identification, data lineage, evaluation audit trails, system-limitation docs - regulated-domain delivery discipline.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Energy Solutions International (Emerson)</span>
        <span class="job-period">Jun 2022 - Apr 2023</span>
      </div>
      <div class="job-role">Database &amp; DevOps Performance Engineer (Intern)</div>
      <div class="job-location">Hyderabad, India - Oil &amp; Gas ERP (Critical Infrastructure)</div>
      <ul>
        <li>Optimized <strong>T-SQL stored procedures</strong> on a compliance-sensitive ERP (Synthesis Order-to-Cash for oil&amp;gas: contracts, nominations, allocations, invoicing); query time <strong>-20%</strong>, retrieval latency <strong>-25%</strong>.</li>
        <li>Built <strong>Jenkins CI/CD pipelines</strong> for schema updates and stored-procedure deployments with rollback checkpoints; deploy errors <strong>-30%</strong>, release cycle <strong>-35 to -40%</strong>.</li>
        <li>Designed performance dashboards with <strong>SQL Server DMVs + Grafana</strong>; incident recurrence <strong>-25%</strong>, root-cause resolution <strong>-30%</strong>.</li>
        <li>Supported RBAC implementation and audit logging for financial modules in compliance-sensitive client engagements.</li>
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
        <li>Built <strong>transformer-based document/transcript summarization</strong> over 5,000+ recorded sessions; hierarchical summarization for long-context + timestamp-aligned clip extraction cut manual review <strong>60-70%</strong>.</li>
        <li>AI-selected highlights aligned with human-curated key moments <strong>~85%</strong>.</li>
        <li>Implemented <strong>document Q&amp;A with RAG</strong> (semantic chunking + embedding retrieval); hallucinations <strong>~30%</strong>, contextual accuracy <strong>&gt;85%</strong>.</li>
        <li>Deployed as <strong>Flask</strong> API with a lightweight web interface for non-technical staff.</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension <span class="project-badge">Chrome Web Store</span></span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped to the Chrome Web Store. <strong>Four AI vision providers</strong> (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local) behind a unified provider-abstraction layer with per-provider payload routing (WebP for cloud, JPEG for local Ollama to avoid CUDA crash). <strong>Manifest V3 service workers</strong>, multi-section capture pipeline w/ viewport-slice screenshots + coordinate remapping, 7-day translation cache, <strong>per-domain selector configs for 29 sites</strong>.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Anthropic / OpenAI / Ollama, multi-provider routing, multimodal LLMs, per-domain configs</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake Normalization → Validation → Consistency Analysis → Duplicate Detection → Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong> to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policy documents; approximate-nearest-neighbor similarity search for duplicate claim detection; <strong>audit-ready explainable risk scoring with reasoning traces</strong>.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts, vector search, multi-agent orchestration</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">Full-stack <strong>FastAPI + React/TypeScript/Vite</strong> app coordinating multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Introduced <strong>intermediate structured prompt transformation layers</strong> - improved contextual alignment <strong>~30%</strong> and first-pass image success rate <strong>~25-30%</strong> over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React, TypeScript, Vite, Tailwind, Perplexity Sonar, Replicate, structured prompts</div>
    </div>
    <div class="project">
      <span class="project-title">Driver Drowsiness Detection - Real-Time YOLOv8 Fatigue Monitoring</span>
      <div class="project-desc">Replaced a two-stage CNN pipeline with a unified <strong>YOLOv8</strong> detection-and-classification model; reduced inference latency <strong>~30%</strong>. LabelImg annotations, augmentation for lighting/head-pose robustness, sliding-window confidence aggregation to suppress blink-driven false positives (<strong>~25% reduction</strong>), adaptive frame skipping, and NMS tuning for stable real-time operation.</div>
      <div class="project-tech">Python, YOLOv8, OpenCV, LabelImg, NMS tuning, real-time CV</div>
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
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, multimodal LLMs, structured outputs, tool calling, evaluation pipelines, guardrails, grounding, embeddings, vector search, LangChain, LlamaIndex, Hugging Face Transformers, prompt engineering</span>
    <span class="skill-item"><span class="skill-category">Applied ML:</span> scikit-learn, XGBoost, PyTorch, recall / precision tuning, threshold calibration, walk-forward validation, risk scoring, predictive modeling, NLP / summarization</span>
    <span class="skill-item"><span class="skill-category">Backend / Inference:</span> FastAPI, Flask, REST, Docker, structured logging, load simulation, production monitoring, end-to-end ML lifecycle</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pandas, NumPy, NetworkX (graph analysis), schema design, feature engineering, EHR / structured-data preprocessing</span>
    <span class="skill-item"><span class="skill-category">DevOps / MLOps:</span> Docker, Jenkins CI/CD, rollback strategies, GitHub Actions, Grafana, AWS (EC2, S3, Lambda), GCP, cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Computer Vision:</span> YOLOv8, OpenCV, ControlNet, Stable Diffusion, video analytics</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Critical Infrastructure (Oil &amp; Gas ERP), Multi-Agent Systems, Multimodal LLM Production, Document Extraction</span>`;

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
  console.log('Usage: node tailor-pdf-overnight-2026-05-05-batch6.mjs <slug>...');
  console.log('Available slugs:', Object.keys(ROLES).join(', '));
  process.exit(1);
}

const today = '2026-05-05';
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
