#!/usr/bin/env node
/**
 * tailor-pdfs-2026-04-24-batch2.mjs — tailored ATS PDFs for reports #129, #130, #131, #134, #136.
 * Same template + content layout as scripts/tailor-pdfs-batch.mjs.
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE_EXPERIENCE = `
    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 - Present</span>
      </div>
      <div class="job-role">Jr. AI/ML Engineer Trainee - Applied AI, Production LLM</div>
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

const BASE_PROJECTS = `
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension</span>
      <div class="project-desc">Shipped to the Chrome Web Store. Multi-provider runtime (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) with per-provider payload handling for fault isolation (WebP for cloud, JPEG for Ollama to avoid CUDA crash). Manifest V3 + service workers; per-domain selector configs for 29 manga/webtoon sites; 7-day translation cache; privacy policy; narrowed host permissions.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Claude, GPT-4o, Ollama</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">5-stage multi-agent pipeline (Intake, Validation, Consistency, Duplicate, Risk Scoring) with schema-validated JSON contracts between agents to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policies. Audit-ready explainable risk scoring.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Platform</span>
      <div class="project-desc">End-to-end multimodal pipeline: text description, intermediate structured prompt transformation, grounded image generation. ~30% contextual alignment gain, ~25-30% first-pass image success.</div>
      <div class="project-tech">FastAPI, React + Vite, Tailwind, Perplexity Sonar, Replicate</div>
    </div>
    <div class="project">
      <span class="project-title">YOLOv8 Driver Drowsiness Detection</span>
      <div class="project-desc">Real-time computer vision for driver drowsiness; sub-50ms inference on edge hardware. Walk-forward validation and class-weighted training for imbalanced safety data.</div>
      <div class="project-tech">PyTorch, YOLOv8, OpenCV, ONNX</div>
    </div>`;

const BASE_EDUCATION = `
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

const BASE_CERTIFICATIONS = `
    <div class="cert-item">
      <span class="cert-title">Deep Learning Specialization - <span class="cert-org">DeepLearning.AI (Coursera)</span></span>
      <span class="cert-year">2024</span>
    </div>`;

const BASE_SKILLS = `
    <span class="skill-item"><span class="skill-category">Languages:</span> Python, TypeScript, JavaScript, SQL (T-SQL, PostgreSQL, SQLite), Java, C++</span>
    <span class="skill-item"><span class="skill-category">AI / ML:</span> PyTorch, scikit-learn, XGBoost, LangChain, LlamaIndex, OpenAI, Anthropic, Hugging Face Transformers, Diffusers, YOLOv8</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, prompt engineering, evaluation pipelines, guardrails, grounding, embeddings, vector search</span>
    <span class="skill-item"><span class="skill-category">Backend:</span> FastAPI, Flask, REST, WebSockets, Docker, Celery, Playwright</span>
    <span class="skill-item"><span class="skill-category">Frontend:</span> React, Next.js, Vite, Tailwind, Chrome Extensions (Manifest V3)</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, MongoDB, Redis, Pandas, NumPy, Snowflake</span>
    <span class="skill-item"><span class="skill-category">DevOps:</span> Docker, Jenkins, GitHub Actions, Grafana, Prometheus, AWS (EC2, S3, Lambda)</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Healthcare AI (HIPAA-conscious), Applied AI, Enterprise AI, Workflow Automation, Computer Vision, Multimodal</span>`;

const JOBS = [
  {
    slug: 'glean-founding-fde-sf-2026-04-24',
    summary: "Applied AI engineer - 2.5 yrs production RAG + agentic + ML pipelines with measurable gains (~35% retrieval precision, >30% hallucination reduction, +15-20% recall). Solo-shipped 0-to-1 builder (Chrome Web Store multi-provider extension, multi-agent claims pipeline, agritech marketplace founder). Ready to embed with enterprise customers and translate ambiguous problems into production AI.",
    competencies: [
      '0-to-1 Delivery', 'Forward Deployed', 'Customer Discovery', 'Production AI',
      'Agentic Workflows', 'Multi-Agent Systems', 'RAG + Grounding', 'Python / FastAPI', 'Full-Stack', 'Docker',
    ],
  },
  {
    slug: 'glean-founding-fde-ny-2026-04-24',
    summary: "Applied AI engineer - 2.5 yrs production RAG + agentic + ML pipelines with measurable gains (~35% retrieval precision, >30% hallucination reduction, +15-20% recall). Solo-shipped 0-to-1 builder (Chrome Web Store multi-provider extension, multi-agent claims pipeline, agritech marketplace founder). Ready to embed with enterprise customers and translate ambiguous problems into production AI - NYC hybrid + 25-50% travel ready.",
    competencies: [
      '0-to-1 Delivery', 'Forward Deployed', 'Customer Discovery', 'Production AI',
      'Agentic Workflows', 'Multi-Agent Systems', 'RAG + Grounding', 'Python / FastAPI', 'Full-Stack', 'Docker',
    ],
  },
  {
    slug: 'anthropic-research-engineer-ai-observability-2026-04-24',
    summary: "Applied AI engineer building observability for production LLM systems. Progress RAG eval harness (~90% grounded alignment, ~35% precision), agentic grounding cut hallucinations >30%, structured logging dropped post-deploy defects ~30%. Solo-shipped Manga Lens (4-provider runtime with per-provider fault isolation) and Agentic Claims (5-stage JSON-contracted pipeline). Ready to build AI-based monitoring for AI systems at scale.",
    competencies: [
      'AI Observability', 'LLM Evaluation', 'Trace Instrumentation', 'Agentic Investigation',
      'RAG + Grounding', 'Python', 'Structured Logging', 'Claude API', 'Distributed Systems', 'Human-in-the-loop',
    ],
  },
  {
    slug: 'vercel-forward-deployed-engineer-2026-04-24',
    summary: "Full-stack AI engineer - shipped production RAG + agentic + ML (FastAPI + Docker backend) and TypeScript frontend (Manga Lens Chrome Web Store, Manifest V3, multi-provider runtime). React + Tailwind + Vite on Dream Decoder. Fast ramp on Next.js App Router. 2.5+ years production Applied AI with measurable gains - ready to embed with strategic customers on AI SDK + frontend migration.",
    competencies: [
      'Forward Deployed', 'Customer Discovery', 'TypeScript', 'React',
      'Next.js (Ramp)', 'AI SDK', 'LLM Integration', 'Full-Stack', 'Workshops', 'Migration',
    ],
  },
  {
    slug: 'projixx-ai-implementation-specialist-2026-04-24',
    summary: "Applied AI engineer - 2.5+ years shipping production LLM stacks (RAG 35% precision, agent frameworks with >30% hallucination reduction, multi-agent claims pipeline with JSON-contract invariants). Solo-shipped Manga Lens (4-provider runtime: Claude, GPT-4o, GPT-4.1 Nano, Ollama) to the Chrome Web Store. Ready to translate ambiguous AI asks into reliable, cost-efficient production systems - founder-facing.",
    competencies: [
      'LLM APIs (OpenAI, Anthropic)', 'Agent Frameworks', 'RAG + Vector Search', 'Multi-Agent Orchestration',
      'Prompt Engineering', 'Python + TypeScript', 'FastAPI + Docker', 'Cost-Efficient AI', 'Production Deployment', 'Startup 0-to-1',
    ],
  },
];

function buildHtml(job) {
  const placeholders = {
    '{{LANG}}': 'en',
    '{{PAGE_WIDTH}}': '780px',
    '{{NAME}}': profile.full_name,
    '{{PHONE}}': profile.phone || '',
    '{{EMAIL}}': profile.email || '',
    '{{LINKEDIN_URL}}': profile.linkedin?.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`,
    '{{LINKEDIN_DISPLAY}}': (profile.linkedin || '').replace(/^https?:\/\//, ''),
    '{{PORTFOLIO_URL}}': profile.portfolio_url || profile.github || 'https://github.com/Deepak0070',
    '{{PORTFOLIO_DISPLAY}}': (profile.portfolio_url || profile.github || 'github.com/Deepak0070').replace(/^https?:\/\//, ''),
    '{{LOCATION}}': profile.location || 'Kent, OH',
    '{{SECTION_SUMMARY}}': 'PROFESSIONAL SUMMARY',
    '{{SECTION_COMPETENCIES}}': 'CORE COMPETENCIES',
    '{{SECTION_EXPERIENCE}}': 'PROFESSIONAL EXPERIENCE',
    '{{SECTION_PROJECTS}}': 'PROJECTS',
    '{{SECTION_EDUCATION}}': 'EDUCATION',
    '{{SECTION_CERTIFICATIONS}}': 'CERTIFICATIONS',
    '{{SECTION_SKILLS}}': 'SKILLS',
    '{{SUMMARY_TEXT}}': job.summary,
    '{{COMPETENCIES}}': job.competencies.map(k => `<span class="competency-tag">${k}</span>`).join('\n      '),
    '{{EXPERIENCE}}': BASE_EXPERIENCE,
    '{{PROJECTS}}': BASE_PROJECTS,
    '{{EDUCATION}}': BASE_EDUCATION,
    '{{CERTIFICATIONS}}': BASE_CERTIFICATIONS,
    '{{SKILLS}}': BASE_SKILLS,
  };
  let html = TEMPLATE;
  for (const [k, v] of Object.entries(placeholders)) html = html.split(k).join(v);
  return html;
}

const dateFolder = '2026-04-24';
execSync(`mkdir -p output/${dateFolder}`);

let done = 0, failed = [];
for (const job of JOBS) {
  const html = buildHtml(job);
  const tmpPath = `/tmp/cv-${job.slug}.html`;
  const pdfPath = `output/${dateFolder}/cv-deepak-mallampati-${job.slug}.pdf`;
  writeFileSync(tmpPath, html, 'utf-8');
  try {
    execSync(`node generate-pdf.mjs "${tmpPath}" "${pdfPath}"`, { stdio: 'inherit' });
    done++;
  } catch (err) {
    failed.push({ slug: job.slug, err: String(err.message || err).slice(0, 200) });
  }
}

console.log(`\nDone. ${done}/${JOBS.length} generated, ${failed.length} failed.`);
if (failed.length) console.log('Failures:', JSON.stringify(failed, null, 2));
