#!/usr/bin/env node
// Overnight 2026-05-12 PDF generator — 5 PDFs (#702, #703, #706, #708, #709).
// Targets: SmithRx, Airbnb, Anthropic FDE Applied AI, Anthropic Beneficial Deployments, Loop New Grad SWE AI.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const ROLES = [
  {
    slug: 'smithrx-swe-newgrad-2026-05-12',
    location_suffix: 'US-based, F-1 OPT, US-Remote ready',
    summary:
      'May 2025 Master\'s grad (Kent State, Computer Science) shipping production healthcare AI at Progress Solutions in HIPAA-conscious environments — agentic LLM workflows (~25% stability), RAG (~35% retrieval precision), predictive ML (15-20% recall on high-risk patient categories), and FastAPI/Docker services with structured logging (~30% post-deploy defect reduction). Eight shipped/ongoing AI projects across Python, TypeScript, React, and SQL. Direct PBM-adjacent healthcare domain context: Patient Records app (Bottle + SQLite RDBMS with normalized patients/diagnoses schema), Agentic Healthcare Claims (5-stage agent pipeline with schema-validated JSON contracts and RAG-grounded CPT/ICD validation against vector-indexed policy documents), and Progress care-workflow + eligibility-check automation. Strong typed-language fundamentals (C++/Arduino + TypeScript) ready to ramp on Golang. CI/CD discipline from Jenkins-based SQL release pipelines (~30% deployment error reduction at Energy Solutions). GenAI tools active in dev workflow (Claude / GPT / Ollama).',
    competencies: [
      'Healthcare / PBM Domain (HIPAA-conscious)',
      'RDBMS Query Tuning (T-SQL / PostgreSQL / SQLite)',
      'API Design (FastAPI / Flask / REST)',
      'CI/CD Discipline (Jenkins, Docker)',
      'Multi-Agent Systems with Schema Contracts',
      'RAG over Regulated Corpora',
      'React / TypeScript Front-End',
      'GenAI Tool Proficiency (Claude / GPT / Ollama)',
      'Compiled-Language Fundamentals (C++) → Go-Ready',
      'F-1 OPT, US-Remote Ready',
    ],
  },
  {
    slug: 'airbnb-swe-newgrad-2026-05-12',
    location_suffix: 'US-based, F-1 OPT, open to SF or Seattle relocation (3d/wk hybrid)',
    summary:
      'May 2025 Master\'s grad (Kent State, Computer Science) shipping production AI features at Progress Solutions: agentic LLM workflows (~25% stability gain), RAG (~35% retrieval precision improvement), predictive ML pipelines (15-20% recall on high-risk patient categories), and FastAPI/Docker services with structured logging (~30% post-deploy defect reduction). Eight shipped/ongoing AI projects spanning consumer-product full-stack and AI-powered features: Manga Lens (Chrome Web Store, multi-LLM-provider abstraction across Claude Sonnet + GPT-4o mini + GPT-4.1 Nano + Ollama, 29 sites), Dream Decoder (full-stack FastAPI + React/TS multimodal app with intermediate structured-prompt transformation lifting alignment ~30% and first-pass success ~25-30%), Agentic Healthcare Claims (5-stage agent pipeline with schema-validated JSON handoffs preventing cascading hallucinations). Strong CS fundamentals (data structures, algorithms, design patterns, systems thinking) and responsible AI practice (HIPAA-conscious data governance, audit trails, de-identification, structured grounding rules). Production discipline matched to public-scale services.',
    competencies: [
      'AI-Powered Feature Delivery',
      'Production LLM Integration (Claude / GPT / Replicate / Ollama)',
      'Responsible AI (Privacy / Grounding / Audit Trails)',
      'Full-Stack Python / TypeScript / React',
      'FastAPI + Docker Production',
      'PyTorch / scikit-learn / XGBoost',
      'CS Fundamentals (DSA + Systems Thinking)',
      'Code Review + Cross-Functional Collaboration',
      'Mentorship + Onboarding Playbook (150+ Students)',
      'F-1 OPT, SF / Seattle Relocation Ready',
    ],
  },
  {
    slug: 'anthropic-fde-applied-ai-2026-05-12',
    location_suffix: 'US-based, F-1 OPT, open to Boston / Chicago / NYC / SF / Seattle / DC relocation + 25% travel',
    summary:
      'Applied AI engineer (May 2025 M.S. Kent State, F-1 OPT) shipping production agentic Claude-class systems end-to-end in HIPAA-conscious healthcare — multi-provider LLM abstractions, schema-validated agent handoffs, FastAPI/Docker packaging, and RAG-grounded workflows. At Progress Solutions: agentic LLM workflows for multi-step healthcare queries with structured reasoning + tool discipline + grounding rules (~25% agent stability gain), RAG with recursive semantic chunking and transformer embeddings (~35% retrieval precision lift, retrieval-grounded response alignment >90%), and FastAPI/Docker production with structured logging + load simulation (~30% post-deploy defect reduction). Eight shipped/ongoing AI projects including Manga Lens (Chrome Web Store, multi-LLM-provider abstraction including Claude Sonnet across 29 sites with payload format-switching for cloud vs local Ollama) and Agentic Healthcare Claims (5-stage agent pipeline with schema-validated JSON contracts between agents preventing cascading hallucinations, RAG-grounded CPT/ICD validation, audit-ready reasoning traces). The MCP-class agent-orchestration primitives Anthropic names are the daily delivery loop. Healthcare vertical direct fit. High-agency solo-ship pattern (Manga Lens shipped solo to Chrome Web Store with privacy policy + per-domain configs + narrowed host permissions).',
    competencies: [
      'Production Claude API + Multi-Provider LLM Routing',
      'Agent Architecture (Schema-Validated Handoffs)',
      'MCP-Class Tool Contracts + Sub-Agent Orchestration',
      'RAG over Regulated Corpora (HIPAA-Conscious)',
      'Healthcare Vertical (Clinical AI Production)',
      'FastAPI + Docker + Structured Logging',
      'Audit Trails + Grounding Rules + System-Limitation Docs',
      'Python + TypeScript + React',
      'High-Agency Solo Ship (Chrome Web Store)',
      'F-1 OPT, Visa-Sponsorship Pathway, 25% Travel-OK',
    ],
  },
  {
    slug: 'anthropic-applied-ai-beneficial-deployments-2026-05-12',
    location_suffix: 'US-based, F-1 OPT, open to SF or NYC relocation + occasional travel',
    summary:
      'Applied AI engineer (May 2025 M.S. Kent State, F-1 OPT) shipping mission-driven LLM applications across healthcare and nonprofit verticals. At Progress Solutions (healthcare consultancy, HIPAA-conscious): agentic LLM workflows with structured reasoning + tool discipline + grounding rules (~25% agent stability gain), RAG with semantic chunking and transformer embeddings (~35% retrieval precision lift, response alignment >90%), and FastAPI/Docker production with structured logging (~30% post-deploy defect reduction). At Suvidha Foundation (nonprofit): transformer-based hierarchical abstractive video summarization across 5,000+ recorded sessions, ~85% alignment with human-curated highlights, 60-70% manual review time reduction, Flask API + lightweight UI for non-technical staff. Founder of E-Farming digital marketplace (PHP/MySQL/Bootstrap, 80-120 active users phase one). Eight shipped/ongoing AI projects including Manga Lens (Chrome Web Store, multi-LLM-provider abstraction with cost-quality trade-off across cloud Claude/GPT and local Ollama, 29 sites) and Agentic Healthcare Claims (5-stage agent pipeline with schema-validated JSON contracts and RAG-grounded CPT/ICD validation). The Beneficial Deployments verticals — healthcare and nonprofit — are the verticals already shipped in.',
    competencies: [
      'Mission-Driven Verticals (Healthcare + Nonprofit)',
      'Production Claude API + Multi-Provider LLM Routing',
      'LLM Evaluations + Audit Trails + Grounding Rules',
      'Agent Architecture (Schema-Validated Handoffs)',
      'Cost-Quality Trade-Off (Cloud vs Local Inference)',
      'FastAPI + Docker + Structured Logging',
      'Pair Programming + Non-Technical Stakeholder Comms',
      'Founder Track (E-Farming, Manga Lens Solo Ship)',
      'Teaching + Mentoring (150+ Students at Kent State)',
      'F-1 OPT, Visa-Sponsorship Pathway',
    ],
  },
  {
    slug: 'loop-newgrad-swe-ai-2026-05-12',
    location_suffix: 'US-based, F-1 OPT, open to SF or NYC relocation (4d/wk hybrid)',
    summary:
      'May 2025 Master\'s grad (Kent State, Computer Science) shipping production AI work at Progress Solutions: agentic LLM workflows (~25% stability), RAG (~35% retrieval precision), predictive ML pipelines (15-20% recall on high-risk patient categories), and FastAPI/Docker services (~30% post-deploy defect reduction). Eight shipped/ongoing AI projects mapping 1:1 to Loop\'s rotation tracks — Agents (Agentic Healthcare Claims with 5-stage pipeline + schema-validated JSON contracts between agents preventing cascading hallucinations, Agentic Pixel LLM orchestrator decomposing prompts into generation tasks, Progress agentic LLM workflows with structured reasoning + tool discipline + grounding rules), Modeling (predictive ML with class weighting + threshold calibration, YOLOv8 unified detect-and-classify), Platform (FastAPI/Flask production at Progress, Manga Lens multi-LLM-provider Chrome extension shipped solo to Web Store across 29 sites with payload format-switching), Infrastructure (T-SQL stored procedures + Jenkins CI/CD at Energy Solutions, ~30% deployment error reduction). Active LLM-tool consumer (Claude / GPT / Ollama) with multi-provider abstraction discipline. Velocity-to-independence proven by solo Chrome Web Store ship. Builder mentality + product instinct from E-Farming founder year (PHP/MySQL marketplace, 80-120 active users).',
    competencies: [
      'Agents Track (Multi-Agent Pipelines + Schema Contracts)',
      'Modeling Track (scikit-learn / XGBoost / YOLOv8 / PyTorch)',
      'Platform Track (FastAPI + Docker + Multi-Provider LLM)',
      'Infrastructure Track (T-SQL + Jenkins CI/CD + Postgres)',
      'AI-Native Dev Workflow (Claude / GPT / Ollama)',
      'Solo-Ship Velocity (Chrome Web Store)',
      'Builder Mentality + Product Instinct (E-Farming Founder)',
      'Structured-Data Validation (Healthcare Claims RAG)',
      'Python + TypeScript + React + Postgres',
      'F-1 OPT, SF / NYC Relocation Ready',
    ],
  },
];

const EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI / ML Engineer Trainee</div>
      <div class="job-location">USA - Healthcare Technology, AI Consulting, SaaS Healthcare</div>
      <ul>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility, care navigation, documentation clarification) with structured reasoning, tool discipline, and grounding rules; agent stability up <strong>~25%</strong>; hallucination reduction <strong>&gt;30%</strong>.</li>
        <li>Built production <strong>RAG systems</strong> for clinical knowledge retrieval and healthcare documentation search; recursive semantic chunking and transformer-based embeddings improved <strong>contextual retrieval precision ~35%</strong> and reduced irrelevant retrieval <strong>&gt;30%</strong>; retrieval-grounded response alignment exceeded <strong>90%</strong>.</li>
        <li>Designed and shipped a <strong>five-agent Healthcare Claims pipeline</strong> (Intake, Validation, Consistency, Duplicate Detection, Risk Scoring) with <strong>schema-validated JSON contracts (pydantic)</strong> between agents to prevent cascading hallucinations - audit-ready reasoning traces for compliance review.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show prediction and care engagement scoring; recall up <strong>15-20%</strong> on high-risk categories with precision held <strong>&gt;90%</strong> via class weighting, stratified sampling, and threshold calibration.</li>
        <li>Packaged ML / LLM inference as <strong>FastAPI / Flask</strong> RESTful services, containerized with <strong>Docker</strong>, with structured logging and load simulation; cut post-deployment defects <strong>~30%</strong>.</li>
        <li>Built preprocessing pipelines (Pandas, NumPy) for EHR extracts, appointment histories, and support ticket logs; raised dataset reliability above <strong>98%</strong> and cut downstream model instability <strong>~40%</strong>.</li>
        <li>Maintained HIPAA-conscious data governance: de-identification, data-lineage documentation, evaluation audit trails, and stakeholder system-limitation docs.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Energy Solutions International (Emerson)</span>
        <span class="job-period">Jun 2022 - Apr 2023</span>
      </div>
      <div class="job-role">Database &amp; DevOps Performance Engineer (Intern)</div>
      <div class="job-location">Hyderabad, India - Oil &amp; Gas, Enterprise ERP, Industrial Automation</div>
      <ul>
        <li>Optimized SQL and <strong>T-SQL stored procedures</strong> powering Synthesis Order-to-Cash; reduced query execution time <strong>~20%</strong> and data retrieval latency <strong>~25%</strong>.</li>
        <li>Built <strong>CI/CD pipelines with Jenkins</strong> for schema updates and stored-procedure deploys; cut deployment errors <strong>&gt;30%</strong> and improved release-cycle time <strong>~35-40%</strong>.</li>
        <li>Designed performance dashboards using SQL Server DMVs and Grafana to track long-running queries, deadlocks, CPU/I/O contention; cut incident recurrence <strong>~25%</strong>.</li>
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
        <li>Built a <strong>transformer-based video summarization</strong> system over 5,000+ recorded sessions with hierarchical abstractive summarization and timestamp-anchored clip extraction. Manual review time cut <strong>60-70%</strong>; <strong>~85%</strong> alignment with human-curated highlights.</li>
        <li>Implemented <strong>document Q&amp;A with RAG</strong> (semantic chunking + embedding retrieval); cut hallucinations <strong>~30%</strong> and lifted contextual answer accuracy <strong>&gt;85%</strong>.</li>
        <li>Deployed the stack as a Flask-based API with a lightweight web interface for non-technical nonprofit staff.</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents preventing cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policy documents. ANN similarity for duplicate detection. Audit-ready explainable risk scoring with reasoning traces.</div>
      <div class="project-tech">Python, LangChain, FastAPI, vector retrieval (ANN), pgvector, GPT-4 / Claude, schema contracts (pydantic)</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension (shipped solo, Chrome Web Store)</span>
      <div class="project-desc">Real-time AI manga / webtoon translation extension shipped solo to the Chrome Web Store. Multi-provider abstraction across 4 AI vision providers (Claude Sonnet / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, 29 site selectors via Manifest V3 service workers, narrowed host permissions, privacy policy.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / GPT-4o mini / GPT-4.1 Nano / Ollama, npm</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">Full-stack FastAPI + React/TypeScript/Vite/Tailwind app coordinating multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Intermediate structured-prompt transformation layer lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React + TypeScript + Vite, Tailwind, Perplexity Sonar, Replicate, Docker</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine (ongoing)</span>
      <div class="project-desc">Phased generative AI system for identity-consistent, pose-controlled pixel character synthesis with sprite-sheet export. Stable Diffusion fine-tuning + LoRA for identity consistency, ControlNet + OpenPose/MediaPipe for pose conditioning, latent-space consistency for animation smoothness, and an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks.</div>
      <div class="project-tech">PyTorch, Hugging Face Diffusers, FastAPI, Docker, Stable Diffusion, LoRA, ControlNet</div>
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
      <div class="edu-desc">Founder / Lead of E-Farming platform (university project, 80-120 active users phase one).</div>
    </div>`;

const CERTIFICATIONS = `
    <div class="cert-item">
      <span class="cert-title">Deep Learning Specialization - <span class="cert-org">DeepLearning.AI (Coursera)</span></span>
      <span class="cert-year">2024</span>
    </div>`;

const SKILLS = `
    <span class="skill-item"><span class="skill-category">Languages:</span> Python, TypeScript, JavaScript, SQL (T-SQL, PostgreSQL, SQLite), C++ (Arduino), PHP</span>
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, Hugging Face Transformers, Diffusers, YOLOv8, OpenCV, ControlNet, Stable Diffusion</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, schema-validated structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding rules, embeddings, vector search (FAISS / pgvector / Pinecone-portable), audit-trace reasoning, multi-agent orchestration, multi-provider AI routing (Claude / GPT-4o / Perplexity / Replicate / Ollama)</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, Node.js (Manifest V3 service workers), REST, Docker, structured logging, load simulation</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Vite, Tailwind, Chrome Extensions (Manifest V3 + content scripts + service workers)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pandas, NumPy, ANN similarity, embeddings, SQL data pipelines, T-SQL stored procedures</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS/GCP/Azure-portable cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Regulated-Domain LLM Systems, Document Processing + RAG, Multi-Agent Validation, Forward Deploy / Customer-Facing Delivery, Nonprofit ML</span>`;

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
    '{{LOCATION}}': (profile.location || 'Kent, OH') + ' - ' + role.location_suffix,
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

const dateFolder = 'output/2026-05-12';
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
