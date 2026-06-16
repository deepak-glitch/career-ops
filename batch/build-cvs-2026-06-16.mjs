#!/usr/bin/env node
// Build tailored CV HTMLs for the 2026-06-16 overnight batch.
// Content is sourced faithfully from cv.md (canonical). Only Summary,
// Title, and Competencies vary per role. Metrics are never invented.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const TEMPLATE = readFileSync('templates/cv-template.html', 'utf8');
const TMP = '/tmp';

const NAME = 'Deepak Mallampati';
const PHONE = '(330) 554-0770';
const EMAIL = 'deepakmallampati00@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/deepak-mallampati/';
const LINKEDIN_DISPLAY = 'linkedin.com/in/deepak-mallampati';
const LOCATION_US = 'Kent, OH | US-based, F-1 OPT, open to sponsorship';
const LOCATION_INTL = 'Kent, OH (US-based, F-1 OPT) | open to relocation';

const SKILLS_HTML = `
<div class="skills-grid">
  <div class="skill-item"><span class="skill-category">Generative AI &amp; LLMs:</span> GPT-4o, GPT-5, Claude Sonnet, Gemini, LLaMA | LangChain/LangGraph | RAG Architecture | Prompt Engineering | Multi-Agent Systems | Fine-tuning (LoRA, QLoRA, PEFT) | Content Safety | Hugging Face Transformers</div>
  <div class="skill-item"><span class="skill-category">Machine Learning &amp; NLP:</span> PyTorch, TensorFlow, Keras | NER, Text Classification, Summarization | Model Optimization | A/B Testing | Drift Detection | RAGAS Evaluation | BERTScore</div>
  <div class="skill-item"><span class="skill-category">Vector Search &amp; Retrieval:</span> FAISS, Pinecone, Weaviate | Semantic &amp; Hybrid Search | Cross-Encoder Re-ranking | Document Chunking | Semantic Caching</div>
  <div class="skill-item"><span class="skill-category">MLOps &amp; Cloud:</span> AWS (EC2, S3, Lambda, Bedrock, SageMaker), Azure (OpenAI, AI Services, Content Safety), GCP Vertex AI | Docker, Kubernetes | Terraform | CI/CD | MLflow, Weights &amp; Biases | Model Monitoring &amp; Observability</div>
  <div class="skill-item"><span class="skill-category">Data Engineering:</span> PostgreSQL, MongoDB, Redis | Spark, Databricks | Kafka | Pandas, NumPy | Data Lineage &amp; Governance</div>
  <div class="skill-item"><span class="skill-category">Security &amp; Compliance:</span> HIPAA, SOC 2, PCI DSS | OAuth 2.0, JWT, RBAC | PII Masking/Redaction | Prompt Injection Mitigation | Audit Logging | Zero-Trust</div>
  <div class="skill-item"><span class="skill-category">Languages &amp; Tools:</span> Python, JavaScript/TypeScript, Java, SQL | FastAPI, React | Git, Jira, Confluence | Agile/Scrum</div>
</div>`;

const EXPERIENCE_HTML = `
<div class="job">
  <div class="job-header"><div class="job-company">Progress Solutions</div><div class="job-period">Jul 2025 - Present</div></div>
  <div class="job-role">AI Engineer</div>
  <div class="job-location">USA</div>
  <ul>
    <li>Architected production-grade <strong>agentic LLM systems</strong> on a conductor-subagent orchestration framework, decomposing complex objectives into context-scoped subagents that execute autonomously - reducing token consumption by <strong>42%</strong> while sustaining task accuracy across multi-step workflows.</li>
    <li>Engineered high-performance <strong>retrieval-augmented generation (RAG)</strong> pipelines over large-scale healthcare document corpora, combining dense vector retrieval with cross-encoder re-ranking to lift answer relevance and materially reduce hallucination on domain-specific queries.</li>
    <li>Designed <strong>privacy-preserving data workflows</strong> for sensitive clinical datasets (K-anonymity, L-diversity, differential privacy) to enable compliant analytics and model development with zero PII exposure.</li>
    <li>Built fault-tolerant <strong>automation infrastructure</strong> with scheduled batch orchestration and exponential-backoff retry logic, reducing failed production runs by <strong>60%</strong>.</li>
    <li>Established a structured <strong>LLM evaluation and monitoring framework</strong> (RAGAS, BERTScore, custom domain metrics) with latency and accuracy dashboards to benchmark iterations and surface regressions before release.</li>
    <li>Optimized inference cost and latency through prompt compression, semantic caching, and model routing, sustaining SLA targets while reducing per-query overhead.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><div class="job-company">Vanguard</div><div class="job-period">Jan 2024 - Jan 2025</div></div>
  <div class="job-role">AI Engineer Intern</div>
  <div class="job-location">USA</div>
  <ul>
    <li>Developed <strong>AI agents and backend services</strong> for Vanguard's internal AI platform, integrating with production data pipelines and observability tooling across <strong>25+ AI agents</strong> and workflows.</li>
    <li>Optimized LLM prompts and evaluated <strong>GPT-4o, Claude Sonnet, and Gemini</strong>, improving task success rates by <strong>27%</strong> and informing platform model-selection decisions.</li>
    <li>Engineered safeguards and content controls for secure, policy-compliant AI responses, reducing unsafe outputs by <strong>42%</strong> while maintaining response quality.</li>
    <li>Built <strong>12 APIs and microservices</strong> powering new AI capabilities, reducing p95 latency from 1.5s to <strong>800ms</strong> and accelerating feature integration by <strong>40%</strong>.</li>
    <li>Partnered with product, platform, and data engineering teams to deliver scalable LLM applications supporting <strong>100,000+ requests daily</strong> across 20+ internal teams.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><div class="job-company">Emerson</div><div class="job-period">Jun 2022 - Apr 2023</div></div>
  <div class="job-role">ML Trainee</div>
  <div class="job-location">India</div>
  <ul>
    <li>Developed and trained supervised <strong>regression and classification models</strong> on operational pipeline-storage data for equipment-failure prediction, anomaly detection, and capacity forecasting.</li>
    <li>Engineered features and executed end-to-end data preprocessing - cleaning, normalization, and transformation of raw sensor and operational datasets - to produce model-ready training pipelines.</li>
    <li>Fine-tuned <strong>BERT and RoBERTa</strong> for entity extraction and text classification on domain-specific financial datasets, achieving <strong>89% F1-score</strong> on custom NER tasks.</li>
  </ul>
</div>
<div class="job">
  <div class="job-header"><div class="job-company">Suvidha Foundation</div><div class="job-period">Jan 2022 - Mar 2022</div></div>
  <div class="job-role">ML Intern</div>
  <div class="job-location">India</div>
  <ul>
    <li>Designed an end-to-end <strong>video summarization and highlight-generation pipeline</strong>, integrating speech-to-text, transformer-based abstractive summarization, and timestamp-aligned clip extraction.</li>
    <li>Deployed the pipeline across <strong>5,000+ videos</strong>, automating highlight selection and reducing manual editing effort by <strong>70%</strong>.</li>
  </ul>
</div>`;

const RESEARCH_HTML = `
<div class="job">
  <div class="job-header"><div class="job-company">Kent State University</div><div class="job-period">Oct 2023 - Jan 2024</div></div>
  <div class="job-role">ML &amp; Gen AI Research Assistant</div>
  <div class="job-location">USA</div>
  <ul>
    <li>Built a <strong>privacy-preserving ML pipeline</strong> on a clinical hospital-readmission dataset (k-anonymity k=3, l-diversity l=2, Laplace differential privacy across four &epsilon; levels), reducing record-linkage re-identification risk from <strong>3.38% to 0.32%</strong> while retaining <strong>99% of baseline predictive performance</strong>.</li>
    <li>Fine-tuned <strong>Qwen3-27B via 4-bit QLoRA</strong> on an NVIDIA H100 using a curated instruction dataset for controllable long-form generation; authored a peer-review-ready IEEE-format conference paper documenting methodology and results.</li>
  </ul>
</div>`;

const PROJECTS_HTML = `
<div class="project">
  <div class="project-title">MangaLens</div>
  <div class="project-desc">A shipped Chrome extension (live on the Chrome Web Store) delivering real-time AI translation of manga and webtoons across <strong>29+ sites</strong>, turning a multi-step manual translation chore into a single inline action.</div>
</div>
<div class="project">
  <div class="project-title">career-ops</div>
  <div class="project-desc">An autonomous, AI-driven job-search pipeline that scans listings, scores fit, and generates tailored applications overnight without supervision - compressing hours of repetitive job-hunting into an automated workflow.</div>
</div>
<div class="project">
  <div class="project-title">Privacy-Preserving Clinical ML Pipeline</div>
  <div class="project-desc">A framework that lets researchers analyze sensitive patient data without exposing identities, combining k-anonymity, l-diversity, and differential privacy, and quantifying the privacy-utility trade-off of each technique.</div>
</div>
<div class="project">
  <div class="project-title">Story Director LLM</div>
  <div class="project-desc">A fine-tuned language model that generates structured short-form video narratives from a single prompt, paired with an automated rendering pipeline.</div>
</div>`;

const EDUCATION_HTML = `
<div class="edu-item">
  <div class="edu-header"><div class="edu-title">M.S. in Computer Science <span class="edu-org">- Kent State University, OH</span></div><div class="edu-year">2025</div></div>
  <div class="edu-desc">GPA: 3.70 / 4.0</div>
</div>`;

const CERTS_HTML = `<div class="cert-item"><div class="cert-title">Work Authorization <span class="cert-org">- F-1 OPT, authorized to work in the United States; future sponsorship required</span></div></div>`;

const comp = (arr) => arr.map(c => `<span class="competency-tag">${c}</span>`).join('\n      ');

const ROLES = {
  openrouter: {
    out: 'output/2026-06-16/cv-deepak-mallampati-openrouter-fde-2026-06-16.pdf',
    title: 'FORWARD DEPLOYED ENGINEER',
    location: LOCATION_US,
    competencies: ['Model Routing &amp; Fallback','Inference Cost / Latency Optimization','Semantic Caching','Multi-Model Evaluation (GPT-4o, Claude, Gemini)','API / SDK Integration','Production AI at Scale','Reference Architectures','Customer Implementation'],
    summary: `Applied AI Engineer with 4+ years building and optimizing production inference for regulated enterprises - the exact problem space of routing, caching, and cost at scale. Optimized inference cost and latency through prompt compression, semantic caching, and <strong>model routing</strong> while sustaining SLA targets; evaluated <strong>GPT-4o, Claude Sonnet, and Gemini</strong> to inform model selection (<strong>+27%</strong> task success); and shipped <strong>12 APIs/microservices</strong> serving <strong>100,000+ requests daily</strong> at p95 <strong>800ms</strong>. Hands-on with developer-facing integration and a track record of turning usage signals into adoption.`,
  },
  hive: {
    out: 'output/2026-06-16/cv-deepak-mallampati-hive-fde-swe-2026-06-16.pdf',
    title: 'FORWARD DEPLOYED SOFTWARE ENGINEER',
    location: LOCATION_US,
    competencies: ['End-to-End Solution Delivery','API Integration &amp; Architecture','Python / JavaScript / TypeScript','Production Reliability','AI Integration Debugging','Customer-Facing Engineering','Playbooks &amp; Enablement','Stakeholder Communication'],
    summary: `Software engineer with 4+ years shipping production AI systems end-to-end - from data to deployed API - with the customer-facing instincts a forward-deployed role demands. Built <strong>12 APIs and microservices</strong> (p95 1.5s to <strong>800ms</strong>), engineered fault-tolerant automation reducing failed runs <strong>60%</strong>, and partnered across <strong>20+ teams</strong> to deliver scalable LLM features. Strong in Python, JavaScript/TypeScript, and software architecture, with deep AI-integration fluency to debug what others can't.`,
  },
  bjak: {
    out: 'output-intl/2026-06-16/cv-deepak-mallampati-bjak-applied-ai-engineer-2026-06-16.pdf',
    title: 'APPLIED AI ENGINEER',
    location: LOCATION_INTL,
    competencies: ['Agent Workflows (Tools, Memory)','Structured / Reliable Outputs','Fine-Tuning (QLoRA, Qwen)','PyTorch','vLLM / Vector DB','Evaluation Frameworks','Latency &amp; Cost Optimization','End-to-End AI Features'],
    summary: `Applied AI Engineer with 4+ years turning model capabilities into reliable product behavior - prompts, tools, memory, and agent workflows that work in real usage, not just demos. Architected conductor-subagent agentic orchestration (<strong>42%</strong> token reduction), fine-tuned <strong>Qwen3-27B via 4-bit QLoRA</strong> on H100, and built a structured evaluation framework (RAGAS, BERTScore) with latency/accuracy dashboards. Comfortable across the full stack - model, serving (vLLM), vector DB, and UX - with a bias toward shipping and measurable improvement.`,
  },
  'board-of-innovation': {
    out: 'output-intl/2026-06-16/cv-deepak-mallampati-board-of-innovation-ai-engineer-2026-06-16.pdf',
    title: 'APPLIED AI ENGINEER',
    location: LOCATION_INTL,
    competencies: ['Agentic Workflows','Retrieval Pipelines (RAG)','Orchestration Layers','Production-Grade AI Systems','API Integration','Evaluation &amp; Monitoring','End-to-End Delivery','Business-Critical Reliability'],
    summary: `Applied AI Engineer with 4+ years designing and building production-grade AI systems - agentic workflows, retrieval pipelines, and orchestration layers - for regulated, business-critical environments. Architected conductor-subagent orchestration (<strong>42%</strong> token reduction), built healthcare RAG with cross-encoder re-ranking (<strong>92%</strong> precision, <strong>40%</strong> fewer hallucinations), and delivered scalable LLM applications serving <strong>100,000+ requests daily</strong> at <strong>99.9% uptime</strong>. Founder-style end-to-end ownership from discovery to deployed system.`,
  },
};

mkdirSync('output/2026-06-16', { recursive: true });
mkdirSync('output-intl/2026-06-16', { recursive: true });

const manifest = [];
for (const [slug, r] of Object.entries(ROLES)) {
  let html = TEMPLATE
    .replaceAll('{{LANG}}', 'en')
    .replaceAll('{{NAME}}', NAME)
    .replaceAll('{{TITLE}}', r.title)
    .replaceAll('{{PHONE}}', PHONE)
    .replaceAll('{{EMAIL}}', EMAIL)
    .replaceAll('{{LINKEDIN_URL}}', LINKEDIN_URL)
    .replaceAll('{{LINKEDIN_DISPLAY}}', LINKEDIN_DISPLAY)
    .replaceAll('{{PORTFOLIO_URL}}', 'https://github.com/deepak-glitch')
    .replaceAll('{{PORTFOLIO_DISPLAY}}', 'github.com/deepak-glitch')
    .replaceAll('{{LOCATION}}', r.location)
    .replaceAll('{{PAGE_WIDTH}}', '8.5in')
    .replaceAll('{{SECTION_SUMMARY}}', 'Professional Summary')
    .replaceAll('{{SUMMARY_TEXT}}', r.summary)
    .replaceAll('{{SECTION_SKILLS}}', 'Core Competencies &amp; Skills')
    .replaceAll('{{COMPETENCIES}}', comp(r.competencies))
    .replaceAll('{{SKILLS}}', SKILLS_HTML)
    .replaceAll('{{SECTION_EXPERIENCE}}', 'Professional Experience')
    .replaceAll('{{EXPERIENCE}}', EXPERIENCE_HTML)
    .replaceAll('{{SECTION_PROJECTS}}', 'Projects')
    .replaceAll('{{PROJECTS}}', PROJECTS_HTML)
    .replaceAll('{{SECTION_RESEARCH}}', 'Research')
    .replaceAll('{{RESEARCH}}', RESEARCH_HTML)
    .replaceAll('{{SECTION_EDUCATION}}', 'Education')
    .replaceAll('{{EDUCATION}}', EDUCATION_HTML)
    .replaceAll('{{SECTION_CERTIFICATIONS}}', 'Work Authorization')
    .replaceAll('{{CERTIFICATIONS}}', CERTS_HTML);
  const htmlPath = `${TMP}/cv-${slug}-2026-06-16.html`;
  writeFileSync(htmlPath, html);
  manifest.push(`${htmlPath}\t${r.out}`);
}
writeFileSync(`${TMP}/cv-manifest-2026-06-16.tsv`, manifest.join('\n') + '\n');
console.log('Built', manifest.length, 'HTML files. Manifest: /tmp/cv-manifest-2026-06-16.tsv');
