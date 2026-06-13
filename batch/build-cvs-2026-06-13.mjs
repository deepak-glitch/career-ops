#!/usr/bin/env node
// Build tailored CV HTMLs for the 2026-06-13 overnight batch.
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

// ---- Fixed sections (verbatim from cv.md) ----
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

// ---- Per-role tailoring ----
const ROLES = {
  perfectserve: {
    out: 'output/2026-06-13/cv-deepak-mallampati-perfectserve-2026-06-13.pdf',
    title: 'APPLIED AI / LLM ENGINEER',
    location: LOCATION_US,
    competencies: ['Production LLM APIs (OpenAI, Anthropic, Bedrock)','RAG &amp; Embeddings','Vector Search','Hallucination Safeguards','Model Evaluation &amp; Observability','PHI / HIPAA Compliance','AWS Cloud-Native','Python / FastAPI'],
    summary: `Applied AI Engineer with 4+ years building production-grade Generative AI and LLM systems for banking and regulated enterprises, now focused on healthcare. Builds RAG architectures over millions of regulated documents - reducing hallucinations by <strong>40%</strong> at <strong>92% precision</strong> - and integrates LLM APIs (OpenAI, Anthropic, AWS Bedrock) into production features with model evaluation, observability, and PHI-conscious data governance. Proven record of <strong>99.9% uptime</strong>, AWS cloud-native delivery, and inference-cost optimization for security-conscious SaaS platforms.`,
  },
  anthropic: {
    out: 'output/2026-06-13/cv-deepak-mallampati-anthropic-2026-06-13.pdf',
    title: 'FORWARD DEPLOYED / APPLIED AI ENGINEER',
    location: LOCATION_US,
    competencies: ['Agent Development','Production LLM Systems','Prompt Engineering','Enterprise Deployment','Python / TypeScript','Customer-Facing Delivery','Evaluation Frameworks','Multi-Agent Orchestration'],
    summary: `Applied AI Engineer with 4+ years shipping production LLM and agentic systems in regulated enterprises. Architected conductor-subagent agent orchestration (<strong>42%</strong> token reduction), built and operated <strong>25+ AI agents</strong> on an internal platform serving <strong>100,000+ requests daily</strong> across 20+ teams, and raised task-success rates <strong>27%</strong> through prompt and model iteration. Combines hands-on agent development with cross-team, stakeholder-facing delivery and a disciplined evaluation-and-safety mindset.`,
  },
  future: {
    out: 'output/2026-06-13/cv-deepak-mallampati-future-2026-06-13.pdf',
    title: 'APPLIED AI ENGINEER',
    location: LOCATION_US,
    competencies: ['AI Agents &amp; Tool-Calling','Structured Output','LangChain / LangGraph','Evaluation Systems (RAGAS, BERTScore)','Async Python','Parallel API Orchestration','Latency &amp; Cost Optimization','Production Monitoring'],
    summary: `Applied AI Engineer with 4+ years building and shipping AI agents that serve real users - tool-calling LLM systems with structured output, parallel orchestration, and streaming responses. Architected conductor-subagent agentic workflows (<strong>42%</strong> token reduction), built rigorous evaluation systems (RAGAS, BERTScore, custom rubrics), and owns the full lifecycle from prototype through production monitoring, reducing failed runs by <strong>60%</strong> and p95 latency from 1.5s to <strong>800ms</strong>.`,
  },
  variance: {
    out: 'output/2026-06-13/cv-deepak-mallampati-variance-2026-06-13.pdf',
    title: 'FORWARD DEPLOYED AI ENGINEER',
    location: LOCATION_US,
    competencies: ['Agentic Workflows','GenAI / LLM Solutions','Fraud / Risk Domain','Python / Java / TypeScript','Enterprise Integration','Regulated Financial Systems','End-to-End Ownership','Production Reliability'],
    summary: `Applied AI Engineer with 4+ years building production GenAI for banking and regulated financial enterprises - exactly the high-stakes, gray-area decisioning domain. Architected agentic LLM workflows (<strong>42%</strong> token reduction), reduced hallucinations <strong>40%</strong> at <strong>92% precision</strong> over regulatory documents, and fine-tuned BERT/RoBERTa for financial NER (<strong>89% F1</strong>). Strong coder in Python, Java, and TypeScript with end-to-end ownership and a <strong>99.9% uptime</strong> track record.`,
  },
  palantir: {
    out: 'output/2026-06-13/cv-deepak-mallampati-palantir-2026-06-13.pdf',
    title: 'FORWARD DEPLOYED AI ENGINEER',
    location: LOCATION_US,
    competencies: ['LLM Workflows at Scale','Gen AI Strategy &amp; Implementation','End-to-End Delivery','Python','Agentic Systems','Enterprise Production','Startup-CTO Ownership','Model Evaluation'],
    summary: `Applied AI Engineer with 4+ years taking LLM workflows from concept to production at enterprise scale. Architected conductor-subagent agent orchestration (<strong>42%</strong> token reduction), shipped <strong>25+ AI agents</strong> serving <strong>100,000+ requests daily</strong>, and built RAG systems reducing hallucinations <strong>40%</strong> at <strong>92% precision</strong>. Operates with startup-CTO ownership - founder-style end-to-end delivery, from data to deployed API, with a <strong>99.9% uptime</strong> record.`,
  },
  camunda: {
    out: 'output/2026-06-13/cv-deepak-mallampati-camunda-2026-06-13.pdf',
    title: 'AI / FORWARD DEPLOYED ENGINEER',
    location: LOCATION_US,
    competencies: ['Agentic Orchestration','LLM Workflow Generation','Governance &amp; Auditability','Process Automation','Python','Enterprise Deployment','Evaluation &amp; Monitoring','Regulated Customers'],
    summary: `Applied AI Engineer with 4+ years building agentic orchestration and automation for regulated enterprises. Architected a conductor-subagent framework coordinating context-scoped agents (<strong>42%</strong> token reduction), built fault-tolerant automation infrastructure (<strong>60%</strong> fewer failed runs), and operated <strong>25+ AI agents</strong> with audit logging, content safety (<strong>42%</strong> unsafe-output reduction), and evaluation/monitoring discipline - aligned with governed, human-in-the-loop AI for banking-grade customers.`,
  },
  'mistral-fde': {
    out: 'output-intl/2026-06-13/cv-deepak-mallampati-mistral-fde-2026-06-13.pdf',
    title: 'APPLIED AI / FORWARD DEPLOYED ML ENGINEER',
    location: LOCATION_US,
    competencies: ['GenAI Production Deployment','Complex Fine-Tuning (QLoRA, LoRA, PEFT)','LLM Applications','End-to-End Ownership','Open-Source','Researcher Collaboration','Python','Enterprise Delivery'],
    summary: `Applied AI Engineer with 4+ years deploying state-of-the-art GenAI into production for regulated enterprises. Fine-tuned <strong>Qwen3-27B via 4-bit QLoRA</strong> on H100 and authored an IEEE-format paper, architected conductor-subagent agentic systems (<strong>42%</strong> token reduction), and reduced hallucinations <strong>40%</strong> at <strong>92% precision</strong>. Operates like a startup CTO - end-to-end project ownership across industries, with research collaboration and open-source shipping (MangaLens, live on the Chrome Web Store).`,
  },
  'mistral-product': {
    out: 'output-intl/2026-06-13/cv-deepak-mallampati-mistral-product-2026-06-13.pdf',
    title: 'APPLIED AI / LLM ENGINEER',
    location: LOCATION_US,
    competencies: ['Rigorous Evaluation','Prompt &amp; Orchestration Design','Rapid Experimentation / A/B','AI Quality Ownership','LLM Product Features','RAG (Search / Docs)','Python','Researcher Collaboration'],
    summary: `Applied AI Engineer with 4+ years owning AI quality end-to-end - defining what "good" means, measuring it, and shipping what works. Built a rigorous LLM evaluation framework (RAGAS, BERTScore, custom domain metrics) with latency/accuracy dashboards, raised task-success rates <strong>27%</strong> through prompt and orchestration iteration, and reduced hallucinations <strong>40%</strong> at <strong>92% precision</strong>. Comfortable embedding in product teams across search, chat, and documents with experiment-driven rigor.`,
  },
  cartesia: {
    out: 'output-intl/2026-06-13/cv-deepak-mallampati-cartesia-2026-06-13.pdf',
    title: 'FORWARD DEPLOYED ENGINEER',
    location: LOCATION_US,
    competencies: ['Agentic AI Systems','Speech / Audio Pipelines','Low-Latency Production','End-to-End Deployment','Python','Enterprise Delivery','Customer Success','Production-Grade Code'],
    summary: `Applied AI Engineer with 4+ years shipping production agentic AI and speech/audio systems. Architected conductor-subagent agent orchestration (<strong>42%</strong> token reduction), built an end-to-end speech-to-text + summarization pipeline across <strong>5,000+ videos</strong> (<strong>70%</strong> less manual effort), and optimized production latency from 1.5s to <strong>800ms</strong> at <strong>99.9% uptime</strong>. Founder-style end-to-end ownership - discovery, architecture, implementation, and rollout for enterprise deployments.`,
  },
};

mkdirSync('output/2026-06-13', { recursive: true });
mkdirSync('output-intl/2026-06-13', { recursive: true });

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
  const htmlPath = `${TMP}/cv-${slug}-2026-06-13.html`;
  writeFileSync(htmlPath, html);
  manifest.push(`${htmlPath}\t${r.out}`);
}
writeFileSync(`${TMP}/cv-manifest-2026-06-13.tsv`, manifest.join('\n') + '\n');
console.log('Built', manifest.length, 'HTML files. Manifest: /tmp/cv-manifest-2026-06-13.tsv');
