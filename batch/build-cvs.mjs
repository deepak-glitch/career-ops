#!/usr/bin/env node
// Build 8 tailored CV HTMLs for tonight's batch
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const TODAY = '2026-05-31';
const TEMPLATE = readFileSync('templates/cv-template.html', 'utf8');

const TMP = process.platform === 'win32' ? 'C:/Users/deepa/AppData/Local/Temp' : '/tmp';

// Common base content (from cv.md, exact metrics preserved)
const NAME = 'Deepak Mallampati';
const PHONE = '(330) 554-0770';
const EMAIL = 'deepakmallampati00@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/deepak-mallampati/';
const LINKEDIN_DISPLAY = 'linkedin.com/in/deepak-mallampati';
const PORTFOLIO_URL = '';
const PORTFOLIO_DISPLAY = '';
const LOCATION = 'Kent, OH | US-based, F-1 OPT, open to sponsorship';

// Standard skills HTML (categorized after competencies)
function buildSkillsHTML(extras = []) {
  // Optional extras list inserted as a category prepended to default skills if provided
  return `
<div class="skills-grid">
  <div class="skill-row"><span class="skill-category">Languages & Frameworks:</span> Python, FastAPI, Flask, SQL (T-SQL, PostgreSQL, SQLite), TypeScript, React, C++ (Arduino), PHP</div>
  <div class="skill-row"><span class="skill-category">LLM & GenAI:</span> LLM application development, Retrieval-Augmented Generation (RAG), agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, semantic retrieval, embeddings, vector search, responsible AI</div>
  <div class="skill-row"><span class="skill-category">ML Libraries:</span> scikit-learn, XGBoost, PyTorch, Hugging Face Transformers, Diffusers, LangChain, LlamaIndex</div>
  <div class="skill-row"><span class="skill-category">Computer Vision & Multimodal:</span> YOLOv8, OpenCV, ControlNet, OpenPose/MediaPipe, Stable Diffusion, video analytics</div>
  <div class="skill-row"><span class="skill-category">Data & Analytics:</span> Pandas, NumPy, feature engineering, time-series forecasting, walk-forward validation, NetworkX</div>
  <div class="skill-row"><span class="skill-category">Infra & DevOps:</span> Docker, Jenkins, Grafana, CI/CD, MLOps/LLMOps, RESTful APIs, cloud-ready deployment, observability/logging</div>
  <div class="skill-row"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal Systems</div>
</div>`;
}

// Standard experience HTML
const EXPERIENCE_HTML = `
<div class="job">
  <div class="job-header">
    <div class="job-company">Progress Solutions Inc.</div>
    <div class="job-period">Jul 2025 - Present</div>
  </div>
  <div class="job-role">Jr. AI/ML Engineer Trainee</div>
  <div class="job-location">USA — Healthcare Technology, AI Consulting, SaaS Healthcare</div>
  <ul>
    <li>Built <strong>Retrieval-Augmented Generation (RAG) systems</strong> for clinical knowledge retrieval and healthcare documentation search; implemented recursive semantic chunking and transformer-based embeddings; improved contextual retrieval precision by <strong>~35%</strong> and reduced irrelevant retrieval by <strong>&gt;30%</strong>; retrieval-grounded response alignment exceeded <strong>90%</strong> in evaluation.</li>
    <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility checks, care workflow navigation, documentation clarification) with structured reasoning, tool discipline, and grounding rules; improved agent response stability by <strong>~25%</strong>.</li>
    <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show prediction, care engagement scoring, and support prioritization; improved recall by <strong>15-20%</strong> on high-risk categories while holding precision <strong>&gt;90%</strong> via class weighting, stratified sampling, and threshold calibration.</li>
    <li>Packaged ML/LLM inference as <strong>FastAPI/Flask</strong> RESTful services, containerized with <strong>Docker</strong>, with structured logging and load simulation; reduced post-deployment defects by <strong>~30%</strong>.</li>
    <li>Built preprocessing pipelines (Pandas, NumPy) for EHR extracts, appointment histories, support ticket logs; raised dataset reliability above <strong>98%</strong> and cut downstream model instability by <strong>~40%</strong>.</li>
    <li>Maintained HIPAA-conscious data governance: de-identification, data lineage documentation, evaluation audit trails, and stakeholder-facing system-limitation docs.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header">
    <div class="job-company">Energy Solutions International (Emerson)</div>
    <div class="job-period">Jun 2022 - Apr 2023</div>
  </div>
  <div class="job-role">Database &amp; DevOps Performance Engineer (Intern)</div>
  <div class="job-location">Hyderabad, India — Oil &amp; Gas, Enterprise ERP, Industrial Automation</div>
  <ul>
    <li>Optimized SQL and <strong>T-SQL stored procedures</strong> powering the Synthesis Order-to-Cash platform (contracts, nominations, allocations, invoicing); reduced query execution time <strong>~20%</strong> and data retrieval latency <strong>~25%</strong>.</li>
    <li>Built <strong>CI/CD pipelines with Jenkins</strong> for schema updates, version-controlled SQL scripts, and stored procedure deployments; reduced deployment errors <strong>&gt;30%</strong> and improved release cycle time <strong>~35-40%</strong> via structured release validation and rollback checkpoints.</li>
    <li>Designed performance dashboards using <strong>SQL Server DMVs and Grafana</strong> to track long-running queries, deadlocks, CPU/I/O contention; cut incident recurrence <strong>~25%</strong> and improved root-cause resolution speed <strong>~30%</strong>.</li>
    <li>Tuned database maintenance (index rebuilds, statistics updates, partition-aware indexing) and reconciliation queries; improved reconciliation job runtime <strong>~15%</strong> and reduced deadlocks <strong>~15%</strong>.</li>
    <li>Supported RBAC implementation and audit logging for financial modules in a compliance-sensitive oil &amp; gas environment.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header">
    <div class="job-company">Suvidha Foundation</div>
    <div class="job-period">Jan 2022 - Mar 2022</div>
  </div>
  <div class="job-role">Machine Learning Engineer</div>
  <div class="job-location">Hyderabad, India — Nonprofit Tech, Video Analytics, Applied NLP</div>
  <ul>
    <li>Built a <strong>transformer-based video summarization and highlight-generation system</strong> across 5,000+ recorded sessions; transcript preprocessing, hierarchical summarization for long-context, and timestamp-aligned clip extraction reduced manual review time by <strong>60-70%</strong> (hours → &lt;5 minutes per video).</li>
    <li>Achieved <strong>~85% alignment</strong> between AI-selected highlights and human-curated key moments.</li>
    <li>Implemented <strong>document Q&amp;A with RAG</strong> (semantic chunking + embedding retrieval); reduced hallucinated outputs <strong>~30%</strong> and raised contextual answer accuracy <strong>&gt;85%</strong> in controlled tests.</li>
    <li>Deployed the stack as a <strong>Flask-based API</strong> with a lightweight web interface for non-technical staff.</li>
  </ul>
</div>
`;

// Project blocks (named so we can reorder per JD)
const PROJECTS = {
  mangaLens: `
<div class="project">
  <div class="project-title">Manga Lens — Chrome Extension for Real-Time AI Manga/Webtoon Translation <span class="project-badge">shipped, Chrome Web Store</span></div>
  <div class="project-desc">Full-stack browser extension built independently — Manifest V3, content scripts, service workers, and <code>captureVisibleTab</code> for panel capture. Integrates <strong>four AI vision providers</strong> (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local). Multi-section capture pipeline handles tall webtoon panels via viewport-slice screenshots with coordinate remapping and dedup. Seven-day translation cache, per-domain selector configs for 29 manga/webtoon sites, privacy policy, and narrowed host permissions. Multi-provider payload handling (WebP for cloud, JPEG for Ollama to avoid CUDA crash).</div>
</div>`,
  agenticPixel: `
<div class="project">
  <div class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine <span class="project-badge">ongoing</span></div>
  <div class="project-desc">Phased generative AI system for identity-consistent, pose-controlled pixel character synthesis with sprite-sheet export. Stable Diffusion fine-tuning + LoRA for identity consistency, ControlNet + OpenPose/MediaPipe for pose conditioning, latent-space consistency for animation smoothness, and an <strong>LLM-based agent orchestrator</strong> that decomposes high-level prompts into generation tasks. Backend: PyTorch, Hugging Face Diffusers, FastAPI, Docker.</div>
</div>`,
  dreamDecoder: `
<div class="project">
  <div class="project-title">Dream Decoder — AI-Powered Multimodal Creative Intelligence Platform</div>
  <div class="project-desc">Full-stack FastAPI + React/TypeScript/Vite/Tailwind app that interprets dreams, generates poetic reinterpretations, and synthesizes dreamscapes via coordinated multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Introduced <strong>intermediate structured prompt transformation layers</strong> — improved contextual alignment <strong>~30%</strong> and first-pass image success rate <strong>~25-30%</strong> over naïve direct-prompt orchestration.</div>
</div>`,
  drowsiness: `
<div class="project">
  <div class="project-title">Driver Drowsiness Detection System — Real-Time YOLOv8 Fatigue Monitoring</div>
  <div class="project-desc">Replaced a two-stage CNN pipeline with a <strong>unified YOLOv8</strong> detection-and-classification model; reduced inference latency <strong>~30%</strong>. LabelImg annotations, augmentation for lighting/head-pose robustness, sliding-window confidence aggregation to suppress blink-driven false positives (<strong>~25% reduction</strong>), adaptive frame skipping, and NMS tuning for stable real-time operation via OpenCV video capture.</div>
</div>`,
  healthcareClaims: `
<div class="project">
  <div class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</div>
  <div class="project-desc">Multi-agent pipeline (Intake Normalization → Validation → Consistency Analysis → Duplicate Detection → Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong> to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policy documents; approximate-nearest-neighbor similarity search for duplicate claim detection; explainable risk scoring with audit-ready reasoning traces.</div>
</div>`,
  videoSumm: `
<div class="project">
  <div class="project-title">Video Summarization &amp; Highlight Generation System (Suvidha Foundation)</div>
  <div class="project-desc">Transformer-based hierarchical abstractive summarization mapped back to source timestamps for automated clip extraction. <strong>60-70% reduction in manual review time</strong>, <strong>~85% highlight alignment</strong> with human curation, Flask-based API for non-technical users.</div>
</div>`,
};

const EDUCATION_HTML = `
<div class="edu-item">
  <div class="edu-header">
    <div><span class="edu-title">Master's Degree</span> <span class="edu-org">— Kent State University, Ohio, USA</span></div>
    <div class="edu-period"><em>Aug 2023 - May 2025</em></div>
  </div>
</div>`;

function buildCompetencies(list) {
  return list.map(k => `<span class="competency-tag">${k}</span>`).join('');
}

function buildHTML({ pageWidth, summary, competencies, projectOrder, lang = 'en' }) {
  const projHTML = projectOrder.map(k => PROJECTS[k]).join('');
  let html = TEMPLATE
    .replace(/\{\{LANG\}\}/g, lang)
    .replace(/\{\{PAGE_WIDTH\}\}/g, pageWidth)
    .replace(/\{\{NAME\}\}/g, NAME)
    .replace(/\{\{PHONE\}\}/g, PHONE)
    .replace(/\{\{EMAIL\}\}/g, EMAIL)
    .replace(/\{\{LINKEDIN_URL\}\}/g, LINKEDIN_URL)
    .replace(/\{\{LINKEDIN_DISPLAY\}\}/g, LINKEDIN_DISPLAY)
    .replace(/\{\{PORTFOLIO_URL\}\}/g, PORTFOLIO_URL || '#')
    .replace(/\{\{PORTFOLIO_DISPLAY\}\}/g, PORTFOLIO_DISPLAY || '')
    .replace(/\{\{LOCATION\}\}/g, LOCATION)
    .replace(/\{\{SECTION_SUMMARY\}\}/g, 'Professional Summary')
    .replace(/\{\{SUMMARY_TEXT\}\}/g, summary)
    .replace(/\{\{SECTION_SKILLS\}\}/g, 'Skills')
    .replace(/\{\{COMPETENCIES\}\}/g, buildCompetencies(competencies))
    .replace(/\{\{SKILLS\}\}/g, buildSkillsHTML())
    .replace(/\{\{SECTION_EXPERIENCE\}\}/g, 'Professional Experience')
    .replace(/\{\{EXPERIENCE\}\}/g, EXPERIENCE_HTML)
    .replace(/\{\{SECTION_PROJECTS\}\}/g, 'Projects')
    .replace(/\{\{PROJECTS\}\}/g, projHTML)
    .replace(/\{\{SECTION_EDUCATION\}\}/g, 'Education')
    .replace(/\{\{EDUCATION\}\}/g, EDUCATION_HTML);
  // Leave SECTION_RESEARCH, RESEARCH, SECTION_CERTIFICATIONS, CERTIFICATIONS unfilled — generate-pdf strips empty sections.
  return html;
}

// 8 job configurations
const jobs = [
  {
    slug: 'glacis-founding-agentic-ai',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI engineer who ships agentic LLM systems end-to-end — schema-validated multi-agent pipelines, RAG with ~35% retrieval precision gains, FastAPI + PostgreSQL backends, and enterprise ERP-style stored-proc integration at Emerson scale. Built to own ambiguity from idea to production.',
    competencies: ['Agentic LLM Workflows', 'Multi-Agent Orchestration', 'RAG / Retrieval Quality', 'Enterprise ERP Integration (T-SQL, Stored Procs)', 'Full-Stack (FastAPI + React/TS)', 'Schema-Validated AI Contracts'],
    projectOrder: ['healthcareClaims', 'mangaLens', 'dreamDecoder', 'agenticPixel'],
  },
  {
    slug: 'avoca-fde',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI engineer who embeds AI agents into operator workflows — schema-validated multi-agent claims pipeline, FastAPI services with structured logging (~30% fewer post-deploy defects), and end-to-end ship discipline. Comfortable owning customer-facing AI deployments from requirements through monitoring.',
    competencies: ['Forward Deployed Engineering', 'Conversational / Agentic AI', 'LLM Tool Calling & Guardrails', 'FastAPI / Python Backends', 'Monitoring & Feedback Loops', 'Customer-Facing AI Deployment'],
    projectOrder: ['healthcareClaims', 'dreamDecoder', 'mangaLens', 'agenticPixel'],
  },
  {
    slug: 'reflection-fde-llm-posttraining',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI engineer focused on production reliability — built evaluation pipelines (>30% hallucination reduction), data preprocessing at 98% reliability, schema-validated multi-agent contracts. Fine-tuning background with Stable Diffusion + LoRA. Extending into LLM post-training and customer-facing deployment.',
    competencies: ['Evaluation Pipeline Design', 'LLM Workflow Reliability', 'Data Preprocessing & Quality', 'Fine-Tuning (Diffusion + LoRA)', 'Multi-Agent Schema Contracts', 'Production ML Deployment'],
    projectOrder: ['agenticPixel', 'healthcareClaims', 'mangaLens', 'dreamDecoder'],
  },
  {
    slug: 'ample-insight-ml-genai-llms',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI / GenAI engineer who turns prototypes into production-ready services — schema-validated multi-agent agentic pipelines, RAG with ~35% retrieval precision, FastAPI + Docker deployment with ~30% fewer post-deploy defects, and full Python ML stack (Pandas, NumPy, scikit-learn, XGBoost, PyTorch).',
    competencies: ['LLM Engineering', 'RAG Pipeline Design', 'Agentic Systems (Tool Use, Memory, Planning, Multi-Agent)', 'Python ML Stack (Pandas/NumPy/sklearn/XGBoost/PyTorch)', 'FastAPI / Docker Production Services', 'Eval & Reliability'],
    projectOrder: ['healthcareClaims', 'mangaLens', 'dreamDecoder', 'agenticPixel'],
  },
  {
    slug: 'fastino-ai-engineer',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI engineer (2.5+ years) building agentic LLM systems with production reliability — schema-validated multi-agent pipelines, RAG with ~35% retrieval precision gains, FastAPI/Docker inference services with ~30% fewer post-deploy defects, and end-to-end ship discipline from prompt to production.',
    competencies: ['Agentic Systems Design', 'LLM Inference Reliability', 'Vector DB & Embeddings', 'FastAPI Microservices', 'Production Eval & Monitoring', 'Rapid Iterative Prototyping'],
    projectOrder: ['healthcareClaims', 'mangaLens', 'dreamDecoder', 'agenticPixel'],
  },
  {
    slug: 'continued-ai-engineer',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI engineer (2.5+ years) building production GenAI systems — RAG with ~35% retrieval precision, schema-validated agentic workflows, FastAPI/Docker inference services with ~30% fewer post-deploy defects, and stakeholder-facing AI documentation. Comfortable owning AI from opportunity identification through deployment and monitoring.',
    competencies: ['LLM Application Development', 'RAG / Vector Search / Semantic Retrieval', 'Agentic AI Workflows', 'SQL & Data Warehousing', 'FastAPI + Docker Production', 'Stakeholder Communication'],
    projectOrder: ['healthcareClaims', 'mangaLens', 'dreamDecoder', 'agenticPixel'],
  },
  {
    slug: 'elevenlabs-fde-sf',
    region: 'US',
    pageWidth: '8.5in',
    summary: 'Applied AI engineer who embeds AI into customer workflows — agentic LLM pipelines with schema-validated contracts, FastAPI inference services with ~30% fewer post-deploy defects, multi-provider integration (Manga Lens, 4 vision providers, Chrome Web Store). Strong customer-facing communication discipline.',
    competencies: ['Forward Deployed Engineering', 'Customer-Facing AI Integration', 'Agentic LLM Workflows', 'FastAPI / Python Production Services', 'Multi-Provider API Integration', 'Stakeholder Communication'],
    projectOrder: ['mangaLens', 'dreamDecoder', 'healthcareClaims', 'videoSumm'],
  },
  {
    slug: 'tooploox-ai-engineer-poland',
    region: 'Intl',
    pageWidth: '210mm',
    summary: 'Applied AI engineer who ships production agent systems — schema-validated multi-agent pipelines (LangChain/LlamaIndex), RAG with ~35% retrieval precision, multi-LLM-provider integration (Claude/OpenAI/Ollama in Manga Lens), and FastAPI/Docker production services. Comfortable owning client engagements from concept through deployment.',
    competencies: ['Multi-Agent Workflows (LangChain/LlamaIndex)', 'Advanced RAG (Semantic Chunking, Embeddings)', 'LLM Provider Integration (OpenAI/Anthropic/Gemini)', 'Evaluation Pipeline Design', 'FastAPI / Docker Production', 'Client Engagement'],
    projectOrder: ['healthcareClaims', 'mangaLens', 'dreamDecoder', 'agenticPixel'],
  },
];

mkdirSync(TMP, { recursive: true });
for (const job of jobs) {
  const html = buildHTML(job);
  const outPath = join(TMP, `cv-deepak-mallampati-${job.slug}.html`);
  writeFileSync(outPath, html);
  console.log(`✓ Built ${outPath} (${html.length} bytes) — region=${job.region}`);
}
console.log('\nNext: run generate-pdf.mjs for each');
