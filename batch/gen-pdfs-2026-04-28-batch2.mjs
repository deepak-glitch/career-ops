#!/usr/bin/env node
// Overnight batch PDF generator for 2026-04-28 batch 2 — Anthropic Life Sciences (228), Snorkel AI Solutions (229), Tessera FDE Pre-Sales (233).

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const ROLES = [
  {
    slug: 'anthropic-life-sciences-2026-04-28',
    company: 'Anthropic',
    role: 'Applied AI Engineer, Life Sciences (Beneficial Deployments)',
    summary:
      'Applied AI engineer (Master of Science, Computer Science) building production LLM-powered applications with RAG, agentic workflows, and rigorous evaluation in regulated healthcare. Healthcare RAG with recursive semantic chunking and transformer embeddings improved retrieval precision ~35% with >90% grounded alignment, validated through SME-in-the-loop evals. Agentic LLM workflows for multi-step healthcare queries — context engineering, structured outputs, tool discipline, and grounding rules — raised response stability ~25% and cut hallucinations >30%. 5-agent claims pipeline uses schema-validated JSON contracts (pydantic) between agents to prevent cascading hallucinations, with audit-ready reasoning traces. FastAPI / Docker production services with structured logging cut post-deploy defects ~30%. HIPAA-conscious governance: de-identification, data lineage, evaluation audit trails — adjacent rigor to life-sciences and biomedical research workflows. Honest about wet-lab biomedical research gap; bring engineering and eval rigor to a researcher-led team.',
    competencies: [
      'Applied AI Engineering',
      'LLM-Powered Tools',
      'Context Engineering',
      'Agent Architectures',
      'Eval Frameworks',
      'Hallucination Mitigation',
      'RAG + Vector Search',
      'Production Engineering',
      'FastAPI / Docker',
      'HIPAA-Conscious Governance',
    ],
  },
  {
    slug: 'snorkelai-ai-solutions-2026-04-28',
    company: 'Snorkel AI',
    role: 'Applied AI Engineer - AI Solutions',
    summary:
      'Applied AI engineer (Master of Science, Computer Science, 2.5+ yrs) building production LLM-powered applications across the full Applied AI stack — classical ML, deep learning, foundation models — for regulated customers. Healthcare RAG (recursive semantic chunking, transformer embeddings, FAISS-style retrieval) lifted retrieval precision ~35% with >90% grounded alignment. Agentic workflows (LangChain / multi-agent orchestration) for multi-step healthcare queries cut hallucinations >30% and raised stability ~25%; schema-validated JSON contracts (pydantic) between agents prevent cascading errors. Predictive ML pipelines (scikit-learn, XGBoost) for patient no-show and care engagement scoring lifted recall +15-20% on high-risk cohorts. FastAPI production services with structured logging cut post-deploy defects ~30%. Customer-facing experience via clinical SME collaboration on RAG eval and Manga Lens public Chrome Web Store ship.',
    competencies: [
      'Applied AI Engineering',
      'Customer-Facing AI/ML',
      'Python / FastAPI / pydantic / pytest',
      'scikit-learn / PyTorch',
      'Hugging Face Transformers',
      'FAISS / Vector Search',
      'LangGraph / LangChain / LlamaIndex',
      'RAG + Agentic',
      'Production Engineering',
      'Eval Frameworks',
    ],
  },
  {
    slug: 'tessera-fde-presales-2026-04-28',
    company: 'Tessera Labs',
    role: 'Forward-Deployed Engineer (Pre-Sales)',
    summary:
      'Applied AI engineer (Master of Science, Computer Science, 2.5+ yrs) building production-grade AI systems for regulated and enterprise customers. Healthcare RAG (~35% retrieval precision, >90% groundedness) and agentic workflows (>30% hallucination reduction, ~25% stability gain) deployed with FastAPI / Docker (~30% defect reduction post-deploy). Customer-facing track via clinical SME collaboration on RAG eval and Manga Lens — a public Chrome Web Store ship across 29 sites with active users. Multi-language production stack: Python (healthcare RAG, agentic claims pipeline), TypeScript (Manga Lens browser extension, Pixel agent orchestrator). Comfortable owning customer scoping, demos, and PoCs end-to-end under ambiguity. Open to 25-40% travel; US-based on F-1 OPT.',
    competencies: [
      'Forward-Deployed Engineering',
      'Pre-Sales / Customer-Facing',
      'Production AI Systems',
      'Python / TypeScript',
      'FastAPI / Docker',
      'RAG + Agentic',
      'API Integration',
      'Demos / PoCs',
      'Stakeholder Communication',
      'Operate Under Ambiguity',
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
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility checks, care workflow navigation, documentation clarification) with tool discipline, structured outputs, and grounding rules; response stability <strong>~25%</strong>, hallucinations cut <strong>&gt;30%</strong>.</li>
        <li>Designed <strong>evaluation pipelines</strong> for LLM output quality and hallucination mitigation; eval audit trails and stakeholder-facing system-limitation docs.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for patient no-show and care engagement scoring; recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting, stratified sampling, and threshold calibration.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong>.</li>
        <li>EHR preprocessing (Pandas, NumPy); dataset reliability <strong>&gt;98%</strong>, downstream instability <strong>-40%</strong>. HIPAA-conscious governance: de-identification, data lineage, evaluation audit trails.</li>
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
      <div class="project-desc">5-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policy documents. Audit-ready explainable risk scoring with reasoning traces.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Real-time manga translation extension shipped to the Chrome Web Store. Multi-provider abstraction across 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing and 7-day translation cache. 29 sites supported across Manifest V3 service workers.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / GPT-4o mini / GPT-4.1 Nano / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">End-to-end multimodal app: text description, intermediate structured-prompt transformation, grounded image generation. Structured-prompt layer lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Pixel Character Synthesis &amp; Animation Engine</span>
      <div class="project-desc">Generative AI system for identity-consistent, pose-controlled pixel character synthesis. Stable Diffusion fine-tuning + LoRA for identity, ControlNet + OpenPose/MediaPipe for pose, and an LLM-based agent orchestrator that decomposes high-level prompts into generation tasks.</div>
      <div class="project-tech">PyTorch, Hugging Face Diffusers, FastAPI, Docker</div>
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
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

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

const dateFolder = 'output/2026-04-28';
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
