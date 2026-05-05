#!/usr/bin/env node
// Overnight 2026-05-05 batch 5 — Neara FDE LA.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI / ML engineer shipping production AI end to end: HIPAA-conscious RAG (~35% retrieval precision, >90% grounded alignment), predictive ML pipelines (15-20% recall on high-risk patient categories at >90% precision), agentic LLM workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Production computer vision via YOLOv8 (~30% inference latency reduction). Master's in Computer Science, Kent State.`;

const ROLES = {
  'neara-fde-la': {
    summary: `${BASE} Targeting Neara's Forward Deployed Engineer seat — Manga Lens 4-provider SDK abstraction (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v) with per-provider payload routing across 29 sites maps directly to JD's "rapidly understand and utilize proprietary SDKs and RESTful APIs (OpenAPI Specification)"; Energy Solutions International (Emerson) Synthesis Order-to-Cash oil&gas ERP T-SQL stored proc optimization (-20-25% latency) + Jenkins CI/CD (-30% deployment errors) + Grafana DMV monitoring (-25% incident recurrence) demonstrates the audit-grade integration + production-data discipline grid digital twins require; multi-agent claims pipeline w/ schema-validated JSON contracts + 5-stage agent orchestration translates to JD's "custom solutions that automate complex workflows"; Healthcare AI cross-functional clinical engagements + system-limitation docs map to JD's "communicate complex technical topics clearly to engineers and executives." TS/JS shipped (Manga Lens Manifest V3 service workers, Dream Decoder React/TS/Vite). LA Hybrid US-base — F-1 OPT now, future sponsorship needed.`,
    comps: ['Forward Deployed Engineer', 'Customer-Embedded Delivery', 'Proprietary SDK Integration', 'OpenAPI / RESTful APIs', 'TypeScript / JavaScript', 'Node / npm / Git', 'Multi-Provider Abstraction', 'Custom Workflow Automation', 'Data Analysis / Integration', 'Energy / Critical Infrastructure', 'Cross-Vertical Discipline', 'LA Hybrid'],
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
        <li>Developed <strong>agentic LLM workflows</strong> for multi-step customer queries (eligibility, care navigation, documentation clarification) with <strong>structured outputs, validation, tool discipline, grounding rules</strong>; agent response stability <strong>~25%</strong>; hallucinations <strong>&gt;30%</strong>.</li>
        <li>Built <strong>Retrieval-Augmented Generation (RAG)</strong> for clinical knowledge retrieval and documentation search; recursive semantic chunking + transformer embeddings improved retrieval precision <strong>~35%</strong>; retrieval-grounded response alignment <strong>&gt;90%</strong> in evaluation harness.</li>
        <li>Shipped <strong>predictive ML pipelines</strong> (scikit-learn, XGBoost) for risk scoring (patient no-show, care engagement, support prioritization); recall <strong>+15-20%</strong> on high-risk categories, precision held <strong>&gt;90%</strong> via class weighting + threshold calibration.</li>
        <li>Packaged ML/LLM inference as <strong>FastAPI / Flask</strong> services on <strong>Docker</strong> with structured logging and load simulation; post-deploy defects <strong>~30%</strong>.</li>
        <li>Customer-embedded delivery: clinician + PM stakeholder docs, system-limitation docs, audit trails - the forward-deployed delivery discipline that translates to enterprise SaaS engagements.</li>
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
        <li>Optimized <strong>T-SQL stored procedures</strong> on a compliance-sensitive enterprise ERP (Synthesis Order-to-Cash for oil&amp;gas: contracts, nominations, allocations, invoicing); query time <strong>-20%</strong>, retrieval latency <strong>-25%</strong>.</li>
        <li>Built <strong>Jenkins CI/CD pipelines</strong> for schema updates and stored-procedure deployments with <strong>rollback checkpoints</strong>; deploy errors <strong>-30%</strong>, release cycle <strong>-35 to -40%</strong> - critical-infrastructure release discipline that translates to grid / utility platform integration work.</li>
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
        <li>Built <strong>transformer-based video summarization</strong> over 5,000+ recorded sessions; hierarchical summarization + timestamp-aligned clip extraction cut manual review <strong>60-70%</strong>.</li>
        <li>AI-selected highlights aligned with human-curated moments <strong>~85%</strong>.</li>
        <li>Implemented <strong>document Q&amp;A with RAG</strong>; hallucinations <strong>~30%</strong>, contextual accuracy <strong>&gt;85%</strong>.</li>
        <li>Deployed as <strong>Flask</strong> API with a lightweight web interface for non-technical staff.</li>
      </ul>
    </div>`;

const PROJECTS = `
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension <span class="project-badge">Chrome Web Store</span></span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped to the Chrome Web Store. <strong>Four AI vision providers</strong> (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local) behind a unified provider-abstraction layer with per-provider payload routing (WebP for cloud, JPEG for local Ollama to avoid CUDA crash). <strong>Manifest V3 service workers</strong>, multi-section capture pipeline, 7-day translation cache, <strong>per-domain selector configs for 29 sites</strong> - the rapid-onboarding pattern for proprietary SDKs + custom integrations + per-customer configuration that maps directly to forward-deployed delivery.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Anthropic / OpenAI / Ollama, multi-provider routing, OpenAPI-style REST, per-domain configs</div>
    </div>
    <div class="project">
      <span class="project-title">Agentic Healthcare Claims Processing &amp; Fraud Risk Intelligence System</span>
      <div class="project-desc">Five-stage multi-agent pipeline (Intake Normalization, Validation, Consistency Analysis, Duplicate Detection, Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong>. RAG-grounded CPT/ICD validation against vector-indexed policies. <strong>Audit-ready explainable risk scoring with reasoning traces</strong> - the workflow-automation + audit-trail pattern that translates to grid / utility custom-solution work.</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts, vector search, multi-agent orchestration</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">Full-stack <strong>FastAPI + React/TypeScript/Vite</strong> app coordinating multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Introduced <strong>intermediate structured prompt transformation layers</strong> - improved contextual alignment <strong>~30%</strong> and first-pass image success rate <strong>~25-30%</strong> over naive direct-prompt orchestration. Demonstrates TS/React shipping at scale.</div>
      <div class="project-tech">FastAPI, React, TypeScript, Vite, Tailwind, Perplexity Sonar, Replicate, structured prompts</div>
    </div>
    <div class="project">
      <span class="project-title">Geospatial Road Network Analysis &amp; Community Detection</span>
      <div class="project-desc">Parsed raw OpenStreetMap XML into a weighted <strong>NetworkX</strong> DiGraph; Haversine-based edge weighting; <strong>Dijkstra shortest-path routing</strong>; betweenness centrality on a 20k-node subgraph; Louvain community detection and Minimum Spanning Tree extraction for backbone analysis - the network-graph + scenario-analysis pattern that translates directly to grid topology + risk simulation work.</div>
      <div class="project-tech">Python, NetworkX, OpenStreetMap, Dijkstra, Louvain, Haversine, MST</div>
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
    <span class="skill-item"><span class="skill-category">Forward-Deployed / SDK:</span> Multi-provider AI integration, OpenAPI REST clients, proprietary SDK onboarding, per-customer configuration, Manifest V3 service workers, Node / npm / git</span>
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, tool calling, evaluation pipelines, guardrails, grounding, embeddings, vector search, LangChain, LlamaIndex, Hugging Face Transformers, prompt engineering</span>
    <span class="skill-item"><span class="skill-category">Applied ML:</span> scikit-learn, XGBoost, PyTorch, recall / precision tuning, threshold calibration, walk-forward validation, risk scoring, predictive modeling</span>
    <span class="skill-item"><span class="skill-category">Backend / Inference:</span> FastAPI, Flask, REST, Docker, structured logging, load simulation, production monitoring</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pandas, NumPy, NetworkX (graph analysis), schema design, feature engineering</span>
    <span class="skill-item"><span class="skill-category">DevOps / MLOps:</span> Docker, Jenkins CI/CD, rollback strategies, GitHub Actions, Grafana, AWS (EC2, S3, Lambda), GCP, cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Computer Vision:</span> YOLOv8, OpenCV, ControlNet, Stable Diffusion, video analytics</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Forward Deployed Engineering, Applied AI, Healthcare AI (HIPAA-conscious), Critical Infrastructure (Oil &amp; Gas ERP), Multi-Agent Systems, Custom Workflow Automation</span>`;

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
  console.log('Usage: node tailor-pdf-overnight-2026-05-05-batch5.mjs <slug>...');
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
