#!/usr/bin/env node
// Overnight 2026-05-02 batch 4 PDF generator — 5 PDFs for #414, #416, #417, #419, #420.

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const ROLES = [
  {
    slug: 'klaviyo-ai-engineer-i-2026-05-02',
    summary:
      'Applied AI engineer (M.S. Computer Science, Kent State, May 2025; F-1 OPT; 2.5+ yrs production) shipping agentic LLM workflows and scalable RAG services in regulated healthcare - directly transferable to Klaviyo\'s 183K+ customer agentic AI scale. Five-agent claims pipeline with schema-validated JSON contracts (pydantic) prevents cascading hallucinations and produces audit-ready reasoning traces - same architectural pattern Klaviyo\'s evolving agentic architecture needs. Healthcare RAG: recursive semantic chunking + transformer embeddings lifted retrieval precision ~35%, retrieval-grounded response alignment >90%, irrelevant retrieval cut >30%. Agentic LLM workflows for multi-step healthcare queries (eligibility, care navigation, documentation clarification) - hallucinations >30% cut, agent stability +25%. FastAPI + Docker production with structured logging cut post-deploy defects ~30% under HIPAA-conscious governance. Manga Lens shipped solo to Chrome Web Store: 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing, MV3 service workers, 7-day cache, 29 site selectors - founder-mindset proven by solo ship.',
    competencies: [
      'Agentic LLM Architecture',
      'Production AI Services',
      'FastAPI / Django Backend',
      'Evaluation Pipelines',
      'Multi-Agent Systems',
      'Schema-Validated Contracts',
      'RAG at Scale',
      'Python + Docker',
      'F-1 OPT, H-1B Sponsorship Open',
      'Solo Ship + Customer Iteration',
    ],
  },
  {
    slug: 'bild-ai-founding-applied-ai-2026-05-02',
    summary:
      'Applied AI engineer (M.S. CS, Kent State, May 2025; 2.5+ yrs production) with rare multimodal CV authoring depth - directly relevant to Bild AI\'s SOTA CV/LLM/multimodal blueprint understanding scope. Pixel Character Synthesis & Animation Engine (ongoing): Stable Diffusion fine-tuning + LoRA for identity consistency, ControlNet + OpenPose/MediaPipe for pose conditioning, latent-space consistency for animation smoothness, and an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks - direct multimodal authoring discipline. YOLOv8 driver drowsiness detection: replaced two-stage CNN with unified detect-and-classify; ~30% inference latency reduction, sliding-window confidence aggregation, ~25% blink-driven false-positive reduction - real-time CV under latency constraints. Manga Lens Chrome Web Store solo ship: 29 manga/webtoon site selectors with messy real-world DOM, viewport-slice screenshots with coordinate remapping, 4 AI vision providers, MV3 service workers - "messy real-world documents at scale" 1:1. Healthcare-RAG production discipline (~35% retrieval precision lift, >90% retrieval-grounded alignment) shows applied LLM in regulated domains. 0->1 founder mindset proven by Manga Lens (solo to store) and E-Farming AgriTech marketplace (80-120 users phase 1).',
    competencies: [
      'Multimodal AI Authoring',
      'Stable Diffusion + LoRA',
      'ControlNet + OpenPose',
      'YOLOv8 Real-Time CV',
      'LLM Orchestration',
      'MV3 Browser Automation',
      'Messy Real-World Documents',
      'Python + PyTorch + Diffusers',
      '0->1 Solo Ship',
      'Founding Mindset',
    ],
  },
  {
    slug: 'centralize-founding-applied-ai-2026-05-02',
    summary:
      'Applied AI engineer (M.S. Computer Science, Kent State, May 2025; F-1 OPT; 2.5+ yrs production) shipping SOTA research agents, RAG pipelines, and rerankable retrieval at production scale - 1:1 with Centralize\'s research-agents-and-rerankers founding scope. Five-agent claims pipeline with schema-validated JSON contracts (pydantic) between Intake / Validation / Consistency / Duplicate / Risk Scoring agents prevents cascading hallucinations and produces audit-ready reasoning traces - the "research agents at near-perfect accuracy" architecture. Healthcare RAG: recursive semantic chunking + transformer embeddings lifted retrieval precision ~35%, retrieval-grounded response alignment >90%, irrelevant retrieval cut >30%. Dream Decoder full-stack FastAPI + React/Vite multimodal: structured-prompt transformation lifted contextual alignment ~30%, first-pass image success ~25-30%. Manga Lens shipped solo to Chrome Web Store with 4 AI vision providers and per-provider payload routing - LLM infrastructure ownership at customer-facing scale. FastAPI + Docker production with structured logging cut post-deploy defects ~30%. 0->1 founder mindset (Manga Lens solo ship + E-Farming marketplace 80-120 users) maps directly to founding-engineer scope.',
    competencies: [
      'Research Agents Architecture',
      'RAG Pipelines',
      'Retrieval Ranking + Embeddings',
      'Vector Search at Scale',
      'Schema-Validated Contracts',
      'Multi-Agent Orchestration',
      'Full-Stack (FastAPI + React)',
      'LLM Infrastructure Ownership',
      'Evaluation Pipelines',
      'Founding Mindset',
    ],
  },
  {
    slug: 'kastle-founding-applied-ai-2026-05-02',
    summary:
      'Applied AI engineer (M.S. CS, Kent State, May 2025; F-1 OPT; 2.5+ yrs production) with deep regulated-domain AI discipline - directly transferable to Kastle\'s CFPB-regulated mortgage-servicing voice-agent scope. Five-agent claims pipeline with schema-validated JSON contracts (pydantic) between Intake / Validation / Consistency / Duplicate / Risk Scoring agents prevents cascading hallucinations and produces audit-ready reasoning traces - the architecture pattern compliant AI agents need in regulated lending. Healthcare RAG with HIPAA-conscious governance: de-identification + data lineage + evaluation audit trails + stakeholder-facing system-limitation docs - regulated-domain discipline 1:1 with mortgage CFPB requirements. Agentic LLM workflows for multi-step healthcare queries (eligibility, care navigation, documentation clarification) with structured reasoning + tool discipline + grounding rules - hallucinations >30% cut, agent stability +25%. Suvidha video summarization: transformer-based hierarchical summarization + transcript preprocessing + timestamp-aligned clip extraction (60-70% manual review time reduction, ~85% highlight alignment) - audio-adjacent transformer experience for voice-agent design. Pixel Character Synthesis SD + LoRA fine-tuning discipline transfers to LLM fine-tuning patterns.',
    competencies: [
      'Regulated AI Workflows',
      'Multi-Agent Schema Contracts',
      'Audit-Ready Reasoning',
      'HIPAA-Conscious Governance',
      'Fine-Tuning (LoRA)',
      'Agentic LLM Workflows',
      'Audio-Adjacent Transformers',
      'RAG-Grounded Validation',
      'FastAPI Production',
      'Founding Mindset',
    ],
  },
  {
    slug: 'flair-labs-founding-applied-ai-2026-05-02',
    summary:
      'Applied AI engineer (M.S. CS, Kent State, May 2025; F-1 OPT; 2.5+ yrs production) with agentic LLM workflows and audio-adjacent transformer depth - directly transferable to Flair Labs\' voice + text agent platform for real estate and lending. Five-agent claims pipeline with schema-validated JSON contracts (pydantic) prevents cascading hallucinations and produces audit-ready reasoning traces - the autonomous-agent architecture pattern. Suvidha transformer-based video summarization: hierarchical abstractive summarization + transcript preprocessing + timestamp-aligned clip extraction (60-70% manual review time reduction, ~85% highlight alignment) - audio-adjacent transformer experience for voice-agent design. Agentic LLM workflows for multi-step healthcare queries (eligibility, care navigation, documentation clarification) with structured reasoning + tool discipline + grounding rules - hallucinations >30% cut, agent stability +25%. Healthcare RAG: recursive semantic chunking + transformer embeddings lifted retrieval precision ~35%. FastAPI + Docker production with structured logging cut post-deploy defects ~30% under HIPAA-conscious governance - regulated-domain discipline transfers to lending. 0->1 founder mindset (Manga Lens solo Chrome Web Store ship + E-Farming AgriTech marketplace).',
    competencies: [
      'Autonomous Agent Workflows',
      'Audio-Adjacent Transformers',
      'Multi-Agent Schema Contracts',
      'Hierarchical Summarization',
      'RAG + Retrieval Ranking',
      'Regulated-Domain Discipline',
      'FastAPI Production',
      'LangChain + Vector Search',
      'Solo Ship Discipline',
      'Founding Mindset',
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
        <li>Architected a <strong>five-agent claims pipeline</strong> with schema-validated JSON contracts (pydantic) between Intake, Validation, Consistency, Duplicate, and Risk Scoring agents to prevent cascading hallucinations; RAG-grounded CPT/ICD validation against vector-indexed policy docs; audit-ready risk scoring with reasoning traces.</li>
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval; recursive semantic chunking and transformer embeddings improved retrieval precision <strong>~35%</strong>, reduced irrelevant retrieval <strong>&gt;30%</strong>, retrieval-grounded response alignment <strong>&gt;90%</strong>.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility, care navigation, documentation clarification) with structured reasoning, tool discipline, and grounding rules; raised agent response stability <strong>~25%</strong> and cut hallucinations <strong>&gt;30%</strong>.</li>
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
        <li>Built CI/CD pipelines with Jenkins for schema and stored procedure deployments; reduced deployment errors <strong>&gt;30%</strong>; release cycle time <strong>~35-40% faster</strong>.</li>
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
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts (pydantic)</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension (shipped solo, Chrome Web Store)</span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped solo to the Chrome Web Store. Multi-provider abstraction across 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, and 29 site selectors via Manifest V3 service workers - founder-mindset proven by end-to-end solo delivery.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / GPT-4o mini / GPT-4.1 Nano / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">End-to-end multimodal app: text description, intermediate structured-prompt transformation, grounded image generation. Structured-prompt layer lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine</span>
      <div class="project-desc">Generative AI system for identity-consistent, pose-controlled pixel character synthesis. Stable Diffusion fine-tuning + LoRA for identity, ControlNet + OpenPose / MediaPipe for pose, and an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks.</div>
      <div class="project-tech">PyTorch, Hugging Face Diffusers, FastAPI, Docker</div>
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
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, Hugging Face Transformers, Diffusers, YOLOv8, ControlNet, MediaPipe</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, schema-validated structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search, audit-trace reasoning, multi-agent orchestration, fine-tuning (LoRA)</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Regulated-Domain LLM Systems, Agentic Workflows, Multimodal CV, Browser Automation</span>`;

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
    '{{LOCATION}}': (profile.location || 'Kent, OH') + ' - US-based, F-1 OPT, open to sponsorship',
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

const dateFolder = 'output/2026-05-02';
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
