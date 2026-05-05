#!/usr/bin/env node
// Overnight 2026-05-05 batch 4 — WITHIN AI Engineer, Cohere Health MLE II, Interwell Health MLE, Brain Co. AI/ML Engineer.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import yaml from 'js-yaml';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf-8');
const profile = yaml.load(readFileSync('config/profile.yml', 'utf-8')).candidate;

const BASE = `Applied AI / ML engineer shipping production healthcare AI end to end: HIPAA-conscious RAG (~35% retrieval precision, >90% grounded alignment), predictive ML pipelines (15-20% recall on high-risk patient categories at >90% precision), agentic LLM workflows (>30% hallucination reduction), and FastAPI + Docker packaging (~30% post-deploy defect reduction). Production computer vision via YOLOv8 (~30% inference latency reduction). Master's in Computer Science, Kent State.`;

const ROLES = {
  'within-ai-engineer': {
    summary: `${BASE} Targeting WITHIN's AI Engineer seat — multi-agent claims pipeline w/ schema-validated JSON contracts (5 agents w/ tool-calling discipline + structured outputs) maps directly to JD's "agent architectures integrating SQL execution, Python code, and marketing platform APIs"; RAG eval harness w/ ~35% retrieval precision + >90% grounded alignment + per-query trace logs translates to JD's "evaluation frameworks for LLM systems including regression testing"; FastAPI/Docker packaging + structured logging + load simulation match JD's production safeguards for tool/SQL/code execution; Energy Solutions T-SQL + Jenkins + Grafana DMV embedded-delivery experience demonstrates production-data + observability discipline. NYC hybrid (Long Island City) — relocation viable on F-1 OPT.`,
    comps: ['LLM Application Development', 'Tool Calling / Structured Outputs', 'Agent Architectures', 'Evaluation Frameworks', 'Multi-Turn Context', 'Schema-Validated Contracts', 'RAG / Vector Search', 'Python / SQL', 'OpenAI / Anthropic / Vertex AI', 'FastAPI / Docker', 'Production Monitoring', 'NYC Hybrid'],
  },
  'cohere-health-ml': {
    summary: `${BASE} Targeting Cohere Health's Machine Learning Engineer II seat — patient no-show + care engagement + support prioritization predictive ML w/ 15-20% recall gains on high-risk categories at >90% precision (class weighting + threshold calibration + stratified sampling) maps directly to JD's "clinical ML model design + delivery"; PyTorch + Hugging Face Transformers + agentic LLM workflows + 4-provider routing (Manga Lens) translate to JD's "context-engineering LLMs / fine-tuning SLMs"; FastAPI/Docker packaging + structured logging + ~30% post-deploy defect reduction match JD's "scalable production ML systems"; HIPAA-conscious data governance + de-identification + audit trails are direct domain fluency. Remote-US, 2-4y band fits 2.5y trajectory cleanly.`,
    comps: ['Machine Learning Engineer II', 'Clinical ML', 'Healthcare Data', 'PyTorch', 'Context-Engineering LLMs', 'SLM Fine-tuning', 'Predictive ML / Risk Scoring', 'Feature Engineering', 'Statistical Analysis', 'HIPAA / Audit Trails', 'FastAPI / Docker', 'Remote-US'],
  },
  'interwell-health-ml': {
    summary: `${BASE} Targeting Interwell Health's Machine Learning Engineer seat — Energy Solutions Jenkins CI/CD + version-controlled scripts + rollback checkpoints (>30% deployment-error reduction, ~35-40% release-cycle speedup) + DMV/Grafana monitoring (~25% incident-recurrence cut) maps directly to JD's "MLOps frameworks (CI/CD integration, rollback strategies, production monitoring)"; Progress Solutions end-to-end production ML (predictive ML + RAG + FastAPI + Docker + HIPAA governance) maps to JD's "end-to-end ML solutions including technical requirements + scalable systems"; multi-agent claims pipeline w/ schema-validated JSON contracts is the LLM-based-solutions overlap. 3+y senior floor honestly disclosed at 2.5y; Spark/Databricks ramp planned.`,
    comps: ['End-to-End ML', 'MLOps', 'CI/CD / Jenkins', 'Rollback Strategies', 'Drift Detection / Monitoring', 'Python / SQL', 'LLM-Based Solutions', 'FastAPI / Docker', 'Healthcare ML', 'HIPAA-Conscious Governance', 'Cloud / Distributed Compute', 'Remote-US'],
  },
  'brain-co-ai-ml': {
    summary: `${BASE} Targeting Brain Co.'s AI/ML Engineer seat — multi-agent claims pipeline w/ schema-validated JSON contracts (5 agents: Intake, Validation, Consistency, Duplicate, Fraud Risk Scoring) + RAG-grounded CPT/ICD validation + audit-ready reasoning traces maps directly to JD's "Agents + reasoning models + RAG" institutional automation pattern; Energy Solutions cross-vertical fluency (oil&gas ERP T-SQL + Jenkins + DMV/Grafana monitoring + RBAC + audit logging) demonstrates the audit-grade governance Brain Co.'s government clients require; FastAPI/Docker packaging + per-provider routing in Manga Lens (Claude, GPT-4o-mini, GPT-4.1 Nano, Ollama) translate to JD's "LLM deployment + production monitoring"; Master's CS Kent State + cross-vertical (healthcare + energy) shipping outcomes. SF Bay on-site — relocation viable.`,
    comps: ['GenAI Agents', 'RAG / Reasoning Models', 'LLM Deployment', 'Multi-Agent Systems', 'Schema-Validated Contracts', 'Production Monitoring', 'Cross-Vertical Impact', 'Healthcare / Energy', 'Audit-Grade Governance', 'Python / FastAPI / Docker', 'Scalable Pipelines', 'SF Bay On-Site'],
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
        <li>EHR + appointment + ticket preprocessing (Pandas, NumPy); dataset reliability <strong>&gt;98%</strong>, downstream instability <strong>-40%</strong>.</li>
        <li><strong>HIPAA-conscious governance</strong>: de-identification, data lineage, evaluation audit trails, stakeholder-facing system-limitation docs - audit-grade discipline that translates to regulated payer + clinical-decision-support work.</li>
      </ul>
    </div>
    <div class="job">
      <div class="job-header">
        <span class="job-company">Energy Solutions International (Emerson)</span>
        <span class="job-period">Jun 2022 - Apr 2023</span>
      </div>
      <div class="job-role">Database &amp; DevOps Performance Engineer (Intern)</div>
      <div class="job-location">Hyderabad, India - Oil &amp; Gas ERP (MLOps + Embedded Delivery)</div>
      <ul>
        <li>Optimized <strong>T-SQL stored procedures</strong> on a compliance-sensitive enterprise ERP (contracts, nominations, allocations, invoicing); query time <strong>-20%</strong>, retrieval latency <strong>-25%</strong>.</li>
        <li>Built <strong>Jenkins CI/CD pipelines</strong> for schema updates and stored-procedure deployments with <strong>rollback checkpoints</strong>; deploy errors <strong>-30%</strong>, release cycle <strong>-35 to -40%</strong>.</li>
        <li>Designed performance dashboards with <strong>SQL Server DMVs + Grafana</strong>; incident recurrence <strong>-25%</strong>, root-cause resolution <strong>-30%</strong> - the production-monitoring + remediation loop ML platforms depend on.</li>
        <li>Supported RBAC implementation and audit logging for financial modules in a compliance-sensitive client environment.</li>
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
      <div class="project-desc">Five-stage multi-agent pipeline (Intake Normalization, Validation, Consistency Analysis, Duplicate Detection, Fraud Risk Scoring) with <strong>schema-validated JSON contracts between agents</strong> to prevent cascading hallucinations. RAG-grounded CPT/ICD validation against vector-indexed policies. <strong>Audit-ready explainable risk scoring with reasoning traces</strong> - the agentic + risk-scoring + audit-trail pattern that translates across regulated domains (clinical decision support, underwriting, compliance, institutional automation).</div>
      <div class="project-tech">Python, LangChain, FastAPI, pgvector, GPT-4, schema contracts, vector search, multi-agent orchestration</div>
    </div>
    <div class="project">
      <span class="project-title">Manga Lens - Multi-Provider AI Vision Chrome Extension <span class="project-badge">Chrome Web Store</span></span>
      <div class="project-desc">Real-time manga / webtoon translation extension shipped to the Chrome Web Store. <strong>Four AI vision providers</strong> (Claude Sonnet, GPT-4o mini, GPT-4.1 Nano, Ollama/minicpm-v local) behind a unified provider-abstraction layer with per-provider payload routing (WebP for cloud, JPEG for local Ollama to avoid CUDA crash). Manifest V3 service workers, multi-section capture pipeline, 7-day translation cache, per-domain selector configs for 29 sites - production-monitoring + per-provider triage discipline.</div>
      <div class="project-tech">TypeScript, Manifest V3, Service Workers, Anthropic / OpenAI / Ollama, multi-provider routing, self-hosted LLM, comparison harness</div>
    </div>
    <div class="project">
      <span class="project-title">Dream Decoder - Multimodal Creative Intelligence Platform</span>
      <div class="project-desc">Full-stack FastAPI + React/TypeScript app coordinating multimodal APIs (Perplexity Sonar for interpretation, Replicate image models for 16:9 visuals). Introduced <strong>intermediate structured prompt transformation layers</strong> - improved contextual alignment <strong>~30%</strong> and first-pass image success rate <strong>~25-30%</strong> over naive direct-prompt orchestration.</div>
      <div class="project-tech">FastAPI, React, TypeScript, Perplexity Sonar, Replicate, structured prompts</div>
    </div>
    <div class="project">
      <span class="project-title">IoT + ML Indoor Temperature Prediction</span>
      <div class="project-desc">Time-series forecasting w/ <strong>walk-forward validation</strong> comparing Random Forest, SVR, Linear Regression. Lag-window feature engineering (n_in=6); Random Forest achieved <strong>~20-30% lower MAE</strong> vs linear baseline - eval-harness pattern that translates directly to model regression + monitoring in production.</div>
      <div class="project-tech">scikit-learn, walk-forward validation, time-series, Arduino + DHT11</div>
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
    <span class="skill-item"><span class="skill-category">LLM / GenAI:</span> RAG, agentic workflows, structured outputs, tool calling, evaluation pipelines, guardrails, grounding, embeddings, vector search, LangChain, LlamaIndex, Hugging Face Transformers, multi-provider AI integration, prompt engineering, context-engineering, SLM fine-tuning</span>
    <span class="skill-item"><span class="skill-category">Applied ML:</span> scikit-learn, XGBoost, PyTorch, TensorFlow, recall / precision tuning, threshold calibration, class weighting, walk-forward validation, risk scoring, predictive modeling</span>
    <span class="skill-item"><span class="skill-category">Backend / Inference:</span> FastAPI, Flask, REST, Docker, structured logging, load simulation, production monitoring</span>
    <span class="skill-item"><span class="skill-category">Data:</span> PostgreSQL + pgvector, Pandas, NumPy, EHR / enterprise-data preprocessing, schema design, feature engineering</span>
    <span class="skill-item"><span class="skill-category">DevOps / MLOps:</span> Docker, Jenkins, CI/CD, rollback strategies, GitHub Actions, Grafana, AWS (EC2, S3, Lambda), GCP, cloud-ready deployment</span>
    <span class="skill-item"><span class="skill-category">Computer Vision:</span> YOLOv8, OpenCV, ControlNet, OpenPose / MediaPipe, Stable Diffusion, video analytics</span>
    <span class="skill-item"><span class="skill-category">Domains:</span> Applied AI, Healthcare AI (HIPAA-conscious), Forward Deployed Engineering, Multi-Agent Systems, Risk / Fraud Scoring, Cross-Vertical Institutional Automation</span>`;

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
  console.log('Usage: node tailor-pdf-overnight-2026-05-05-batch4.mjs <slug>...');
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
