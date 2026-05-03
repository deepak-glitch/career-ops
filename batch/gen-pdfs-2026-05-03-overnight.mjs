#!/usr/bin/env node
// Overnight 2026-05-03 PDF generator — 2 PDFs (#442 Amplitude FDE II + #444 Continued AI Engineer).

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const ROLES = [
  {
    slug: 'amplitude-fde-ii-2026-05-03',
    location_suffix: 'US-based, F-1 OPT, open to SF relocation',
    summary:
      'Forward Deploy / customer-facing engineer (M.S. Computer Science, Kent State, May 2025; F-1 OPT; 2.5+ yrs production) shipping full-stack TypeScript/React + Python/FastAPI + Docker production. Owns customer-specific integrations end-to-end with reusable patterns and structured logging - directly transferable to Amplitude\'s FDE II charter of owning enterprise customer implementations end-to-end. Manga Lens shipped solo to Chrome Web Store: TypeScript Manifest V3 service workers, multi-provider AI vision routing across 4 providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload abstraction (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, 29 site selectors - production engineering discipline at customer-facing scale. Five-agent Healthcare Claims pipeline with schema-validated JSON contracts (pydantic) between Intake / Validation / Consistency / Duplicate / Risk Scoring agents prevents cascading hallucinations and produces audit-ready reasoning traces - the architectural pattern reusable enterprise integrations need. Production RAG: recursive semantic chunking + transformer embeddings lifted retrieval precision ~35%, retrieval-grounded response alignment >90%, irrelevant retrieval cut >30%. FastAPI + Docker production with structured logging cut post-deploy defects ~30% under HIPAA-conscious data governance. Dream Decoder: full-stack React/TypeScript/Vite/Tailwind + FastAPI multimodal with intermediate structured-prompt transformation layers - alignment +30%, first-pass success +25-30%.',
    competencies: [
      'TypeScript + React Production',
      'Python + FastAPI Backend',
      'Node.js (Manifest V3 Service Workers)',
      'AWS-Portable Cloud Deployment',
      'Forward Deploy / Customer-Facing Delivery',
      'Reusable Schema Contracts (pydantic)',
      'Docker + Structured Logging',
      'End-to-End Ownership',
      'Solo-Shipped Multi-Provider Integration',
      'F-1 OPT, Open to SF',
    ],
  },
  {
    slug: 'continued-ai-engineer-2026-05-03',
    location_suffix: 'US-based, F-1 OPT, US-Remote ready',
    summary:
      'Applied AI engineer (M.S. Computer Science, Kent State, May 2025; F-1 OPT; 2.5+ yrs production) operationalizing LLMs, embeddings, and vector retrieval at enterprise scale - directly transferable to Continued\'s charter of moving GenAI from notebooks into monitored production for licensed-professional continuing education. Production RAG: recursive semantic chunking + transformer embeddings lifted contextual retrieval precision ~35%, retrieval-grounded response alignment >90%, irrelevant retrieval cut >30% on regulated clinical knowledge corpora - same architectural pattern continuing-education content + CE-credit compliance needs. Five-agent Healthcare Claims pipeline with schema-validated JSON contracts (pydantic) between Intake / Validation / Consistency / Duplicate / Risk Scoring agents prevents cascading hallucinations with audit-ready reasoning traces - directly transferable to professional-education content validation chains. SQL data pipelines (Pandas, NumPy) for EHR extracts, appointment histories, and support-ticket logs raised dataset reliability above 98% and cut downstream model instability ~40%. FastAPI + Docker production with structured logging and load simulation cut post-deploy defects ~30% under HIPAA-conscious data governance - regulated-domain production discipline transferable to CE compliance. Stakeholder-facing system-limitation docs and evaluation audit trails built trust with healthcare clinicians - the same pattern licensed-professional learners need. Manga Lens shipped solo to Chrome Web Store: multi-provider AI vision routing across 4 providers - production engineering discipline at customer-facing scale.',
    competencies: [
      'LLMs + Embeddings + Vector DBs',
      'Production RAG (FAISS / pgvector / Pinecone-portable)',
      'Multi-Agent Pipelines + Schema Contracts',
      'Python + FastAPI + Docker Production',
      'SQL Data Pipelines (PostgreSQL / T-SQL)',
      'Structured Logging + Monitoring',
      'Regulated-Domain Stakeholder Partnership',
      'PyTorch + Hugging Face Transformers',
      'LangChain + LlamaIndex',
      'F-1 OPT, US-Remote',
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
        <li>Built production <strong>RAG systems</strong> for clinical knowledge retrieval and healthcare documentation search; recursive semantic chunking and transformer-based embeddings improved <strong>contextual retrieval precision ~35%</strong> and reduced irrelevant retrieval <strong>&gt;30%</strong>; retrieval-grounded response alignment exceeded <strong>90%</strong>.</li>
        <li>Designed and shipped a <strong>five-agent Healthcare Claims pipeline</strong> (Intake, Validation, Consistency, Duplicate Detection, Risk Scoring) with <strong>schema-validated JSON contracts (pydantic)</strong> between agents to prevent cascading hallucinations - audit-ready reasoning traces for compliance review.</li>
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step healthcare queries (eligibility, care navigation, documentation clarification) with structured reasoning, tool discipline, and grounding rules; agent stability up <strong>~25%</strong>.</li>
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
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension (shipped solo, Chrome Web Store)</span>
      <div class="project-desc">Real-time AI manga / webtoon translation extension shipped solo. Multi-provider abstraction across 4 AI vision providers (Claude / GPT-4o mini / GPT-4.1 Nano / Ollama) with per-provider payload routing (WebP cloud, JPEG Ollama after CUDA crashes), 7-day translation cache, 29 site selectors via Manifest V3 service workers. Production engineering discipline at customer-facing scale.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude / GPT-4o mini / GPT-4.1 Nano / Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents. RAG-grounded CPT/ICD validation against vector-indexed policy documents. ANN similarity for duplicate detection. Audit-ready explainable risk scoring with reasoning traces.</div>
      <div class="project-tech">Python, LangChain, FastAPI, vector retrieval (ANN), pgvector, GPT-4, schema contracts (pydantic)</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">Full-stack FastAPI + React/TypeScript/Vite/Tailwind app coordinating multimodal APIs. Intermediate structured-prompt transformation layer lifted contextual alignment ~30% and first-pass image success ~25-30% over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React + TypeScript + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">Video Summarization &amp; Highlight Generation System (Suvidha Foundation)</span>
      <div class="project-desc">Transformer-based hierarchical abstractive summarization mapped back to source timestamps for automated clip extraction. 60-70% reduction in manual review time, ~85% highlight alignment with human curation, Flask-based API for non-technical users.</div>
      <div class="project-tech">Hugging Face Transformers, Flask, Python, transcript preprocessing</div>
    </div>
    <div class="project">
      <span class="project-title">Driver Drowsiness Detection - Real-Time YOLOv8</span>
      <div class="project-desc">Replaced a two-stage CNN pipeline with a unified YOLOv8 detect-and-classify model; reduced inference latency ~30%. Sliding-window confidence aggregation cut blink-driven false positives ~25%.</div>
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
    <span class="skill-item"><span class="skill-category">Languages:</span> Python, TypeScript, JavaScript, SQL (T-SQL, PostgreSQL, SQLite), C++</span>
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, Hugging Face Transformers, Diffusers, YOLOv8, OpenCV</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, schema-validated structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search (FAISS / pgvector / Pinecone / Weaviate / Elasticsearch portable), audit-trace reasoning, multi-agent orchestration</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, Node.js (Manifest V3 service workers), REST, Docker, structured logging, load simulation</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pandas, NumPy, ANN similarity, embeddings, SQL data pipelines</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, AWS-portable / GCP-portable / Azure-portable cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Regulated-Domain LLM Systems, Document Processing + RAG, Multi-Agent Validation, Forward Deploy / Customer-Facing Delivery</span>`;

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

const dateFolder = 'output/2026-05-03';
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
