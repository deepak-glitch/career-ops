#!/usr/bin/env python3
"""Build tailored HTML + invoke generate-pdf.mjs for each score >= 3.0 evaluation (2026-06-06)."""
import os, subprocess

DATE = "2026-06-06"

HEAD = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Deepak Mallampati -- CV</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { background: #ffffff; color: #000000; }
  body { font-family: 'Times New Roman', Times, serif; font-size: 10pt; line-height: 1.35; }
  a { color: #000000; text-decoration: underline; white-space: nowrap; }
  .page { width: 100%; max-width: 780px; margin: 0 auto; padding: 2px 0; }
  .header { margin-bottom: 14px; text-align: center; }
  .header h1 { font-family: 'Times New Roman', Times, serif; font-size: 18pt; font-weight: 700; color: #000000; margin-bottom: 3px; line-height: 1.1; }
  .header-gradient { height: 1px; background: #000000; margin: 6px 0 8px 0; }
  .contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 3px 8px; font-size: 9.5pt; line-height: 1.3; color: #000000; }
  .contact-row a { color: #000000; text-decoration: none; }
  .separator { color: #000000; }
  .section { margin-bottom: 12px; }
  .section-title { font-family: 'Times New Roman', Times, serif; font-size: 11pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #000000; border-bottom: 1px solid #000000; padding-bottom: 2px; margin-bottom: 5px; line-height: 1.2; }
  .summary-text { font-size: 10pt; line-height: 1.35; color: #000000; text-align: justify; }
  .competency-tag { font-family: 'Times New Roman', Times, serif; font-size: 10pt; font-weight: 400; color: #000000; background: transparent; padding: 0; border: none; display: inline; }
  .competency-tag:not(:last-child)::after { content: " . "; color: #000000; }
  .job { margin-bottom: 10px; }
  .job-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 2px; }
  .job-company { font-family: 'Times New Roman', Times, serif; font-size: 10.5pt; font-weight: 700; color: #000000; }
  .job-period { font-size: 9.5pt; font-style: italic; color: #000000; white-space: nowrap; }
  .job-role { font-size: 10pt; font-weight: 400; font-style: italic; color: #000000; margin-bottom: 3px; }
  .job-location { font-size: 9.5pt; font-style: italic; color: #000000; }
  .job ul { padding-left: 16px; margin-top: 3px; list-style-type: disc; }
  .job li { font-size: 10pt; line-height: 1.35; color: #000000; margin-bottom: 2px; }
  .job li strong { font-weight: 700; }
  .project { margin-bottom: 8px; }
  .project-title { font-family: 'Times New Roman', Times, serif; font-size: 10.5pt; font-weight: 700; color: #000000; }
  .project-badge { font-size: 9pt; font-weight: 400; color: #000000; background: transparent; border: 1px solid #000000; margin-left: 6px; padding: 0 4px; }
  .project-desc { font-size: 10pt; color: #000000; margin-top: 2px; line-height: 1.35; }
  .project-tech { font-size: 9.5pt; font-style: italic; color: #000000; margin-top: 2px; }
  .edu-item { margin-bottom: 6px; }
  .edu-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  .edu-title { font-weight: 700; font-size: 10pt; color: #000000; }
  .edu-org { color: #000000; font-weight: 400; font-style: italic; }
  .edu-year { font-size: 9.5pt; font-style: italic; color: #000000; white-space: nowrap; }
  .skill-item { font-size: 10pt; color: #000000; display: block; margin-bottom: 2px; }
  .skill-category { font-weight: 700; color: #000000; font-size: 10pt; }
  .avoid-break, .job, .project, .edu-item { break-inside: avoid; page-break-inside: avoid; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .page { padding: 0; } }
</style>
</head>
<body>
<div class="page">

  <div class="header avoid-break">
    <h1>Deepak Mallampati</h1>
    <div class="header-gradient"></div>
    <div class="contact-row">
      <span>(330) 554-0770</span>
      <span class="separator">|</span>
      <span>deepakmallampati00@gmail.com</span>
      <span class="separator">|</span>
      <a href="https://www.linkedin.com/in/deepak-mallampati/">linkedin.com/in/deepak-mallampati</a>
      <span class="separator">|</span>
      <span>__LOCATION_LINE__</span>
    </div>
  </div>
'''

SUMMARY_BLOCK = '''
  <div class="section avoid-break">
    <div class="section-title">Professional Summary</div>
    <div class="summary-text">__SUMMARY__</div>
  </div>
'''

COMPETENCY_BLOCK = '''
  <div class="section">
    <div class="section-title">Core Competencies</div>
    <div>
      __COMPETENCIES__
    </div>
  </div>
'''

EXPERIENCE_AND_REST = '''
  <div class="section">
    <div class="section-title">Experience</div>

    <div class="job">
      <div class="job-header">
        <span class="job-company">Progress Solutions Inc.</span>
        <span class="job-period">Jul 2025 -- Present</span>
      </div>
      <div class="job-role"><em>AI Engineer</em> -- <span class="job-location">USA | Healthcare Technology, AI Consulting</span></div>
      <ul>
        <li>Architected production-grade <strong>agentic LLM systems</strong> on a conductor-subagent orchestration framework, decomposing complex objectives into context-scoped subagents -- reduced token consumption <strong>42%</strong> while sustaining task accuracy across multi-step workflows.</li>
        <li>Engineered <strong>retrieval-augmented generation (RAG) pipelines</strong> over large-scale healthcare corpora; dense vector retrieval + cross-encoder re-rank lifted precision <strong>~35%</strong> and materially reduced hallucinations on domain queries.</li>
        <li>Built <strong>privacy-preserving data workflows</strong> for sensitive clinical datasets (K-anonymity, L-diversity, Laplace differential privacy) enabling compliant analytics with zero PII exposure.</li>
        <li>Packaged LLM/ML inference as <strong>FastAPI/Flask</strong> services containerized with Docker; structured logging + load simulation cut post-deployment defects <strong>~30%</strong>.</li>
        <li>Established structured <strong>LLM evaluation framework</strong> (RAGAS, BERTScore, custom domain metrics) with latency/accuracy dashboards to catch regressions pre-deployment.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="job-company">Vanguard</span>
        <span class="job-period">Jan 2024 -- Jan 2025</span>
      </div>
      <div class="job-role"><em>AI Engineer Intern</em> -- <span class="job-location">USA | Financial Services</span></div>
      <ul>
        <li>Developed <strong>25+ AI agents</strong> and backend services for Vanguard's internal AI platform; integrated with production data pipelines + observability across 20+ internal teams.</li>
        <li>Benchmarked <strong>GPT-4o, Claude Sonnet, Gemini</strong> against internal eval sets; improved task success <strong>+27%</strong> and informed platform model-routing decisions.</li>
        <li>Engineered safeguards and content controls for policy-compliant AI; reduced unsafe outputs <strong>42%</strong> while preserving response quality.</li>
        <li>Shipped <strong>12 APIs and microservices</strong>; cut p95 latency 1.5s -> <strong>800ms</strong> and accelerated feature integration <strong>40%</strong>.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="job-company">Kent State University</span>
        <span class="job-period">Oct 2023 -- Jan 2024</span>
      </div>
      <div class="job-role"><em>ML &amp; Gen AI Research Assistant</em> -- <span class="job-location">USA | Privacy-preserving ML</span></div>
      <ul>
        <li>Built privacy-preserving ML pipeline on clinical hospital-readmission dataset; reduced re-identification risk <strong>3.38% -&gt; 0.32%</strong> while retaining 99% predictive performance.</li>
        <li>Designed composite privacy-utility scoring framework benchmarking six anonymization configs; quantified DP utility cliff at low epsilon.</li>
        <li>Fine-tuned <strong>Qwen3-27B</strong> via 4-bit QLoRA on H100 GPU for controllable long-form generation. Authored IEEE-format paper.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="job-company">Emerson</span>
        <span class="job-period">Jun 2022 -- Apr 2023</span>
      </div>
      <div class="job-role"><em>ML Trainee</em> -- <span class="job-location">India | Industrial Automation</span></div>
      <ul>
        <li>Trained supervised regression + classification models on operational pipeline-storage data for equipment-failure prediction and anomaly detection.</li>
        <li>Fine-tuned <strong>BERT/RoBERTa</strong> for NER + text classification, achieving <strong>89% F1</strong> on custom domain entity extraction.</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-header">
        <span class="job-company">Suvidha Foundation</span>
        <span class="job-period">Jan 2022 -- Mar 2022</span>
      </div>
      <div class="job-role"><em>ML Intern</em> -- <span class="job-location">India | Nonprofit Tech</span></div>
      <ul>
        <li>Built end-to-end video summarization + highlight-generation pipeline; processed 5,000+ videos; reduced manual editing <strong>70%</strong>.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Projects</div>

    <div class="project avoid-break">
      <span class="project-title">MangaLens</span> <span class="project-badge">shipped -- Chrome Web Store</span>
      <div class="project-desc">Real-time AI translation Chrome extension for manga/webtoons across <strong>29+ sites</strong>. Multi-provider AI abstraction (Claude, GPT-4o, Gemini, Ollama). Full ship discipline: privacy policy, scoped permissions, Chrome review approval.</div>
      <div class="project-tech"><em>TypeScript, Manifest V3, content scripts, multi-provider abstraction</em></div>
    </div>

    <div class="project avoid-break">
      <span class="project-title">career-ops</span>
      <div class="project-desc">Autonomous AI job-search pipeline scanning listings, scoring fit, generating tailored applications overnight. Compresses hours of repetitive job-hunting into automated workflow.</div>
      <div class="project-tech"><em>Node.js, Playwright, Claude API, GitHub Actions, FastAPI</em></div>
    </div>

    <div class="project avoid-break">
      <span class="project-title">Privacy-Preserving Clinical ML Pipeline</span>
      <div class="project-desc">k-anonymity + l-diversity + DP framework analyzing sensitive patient data without exposing identities; quantifies privacy vs utility tradeoff.</div>
      <div class="project-tech"><em>Python, scikit-learn, statistical privacy</em></div>
    </div>
  </div>

  <div class="section avoid-break">
    <div class="section-title">Education</div>
    <div class="edu-item">
      <div class="edu-header">
        <span class="edu-title">M.S. in Computer Science -- <span class="edu-org">Kent State University, Ohio, USA</span></span>
        <span class="edu-year">2025</span>
      </div>
    </div>
  </div>

  <div class="section avoid-break">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skill-item"><span class="skill-category">Languages &amp; Frameworks:</span> Python, TypeScript, JavaScript, React, FastAPI, Flask, SQL (PostgreSQL, T-SQL, SQLite)</div>
      <div class="skill-item"><span class="skill-category">AI/LLM &amp; Agentic:</span> LLM APIs (Claude, GPT-4o, Gemini, Ollama), LangChain, LangGraph, RAG, multi-agent workflows, prompt engineering, structured outputs, eval pipelines, guardrails, grounding</div>
      <div class="skill-item"><span class="skill-category">Vector Search:</span> FAISS, Pinecone, Weaviate, semantic + hybrid search, cross-encoder re-ranking, chunking strategies</div>
      <div class="skill-item"><span class="skill-category">MLOps &amp; Cloud:</span> AWS (EC2, S3, Lambda, Bedrock, SageMaker), Azure (OpenAI, Content Safety), GCP Vertex AI, Docker, Kubernetes, MLflow, observability</div>
      <div class="skill-item"><span class="skill-category">Data &amp; Compliance:</span> PostgreSQL, MongoDB, Redis, HIPAA, SOC 2, PCI DSS, PII masking, audit logging</div>
      <div class="skill-item"><span class="skill-category">Work Authorization:</span> __WORK_AUTH__</div>
    </div>
  </div>

</div>
</body>
</html>
'''


def tags(items):
    return "".join(f'<span class="competency-tag">{x}</span>' for x in items)


JOBS = [
    ("letterbook", "US", "output",
     "Applied AI engineer (2.5+ years) shipping production <strong>agent orchestration + eval infrastructure</strong>. At Progress Solutions: built a conductor-subagent agentic LLM framework decomposing complex objectives into context-scoped subagents (<strong>42% token reduction</strong> while sustaining accuracy across multi-step workflows). Established a structured <strong>eval framework</strong> with RAGAS, BERTScore, and custom domain metrics catching regressions pre-deployment. At Vanguard: 25+ AI agents serving <strong>100K+ daily requests</strong> with a <strong>+27% task success</strong> lift. Shipped <strong>MangaLens</strong> solo on the Chrome Web Store (full-stack founder mindset). Strong fit for an SF founding role owning agent orchestration, long-term memory architecture, and tool-use benchmarks.",
     ["Production Agent Orchestration", "Multi-Step Task Execution", "LLM Eval Frameworks (RAGAS, BERTScore)", "Python + FastAPI + NextJS", "RAG + Semantic Caching (memory adjacency)", "Multi-Provider LLM Stack (Claude, GPT-4o, Gemini)", "Full-Stack Founder Shipping", "Tool-Use Benchmarks"],
     "Kent, OH (open to SF relocation) -- F-1 OPT, open to sponsorship",
     "F-1 OPT -- authorized to work in the United States now; future sponsorship required"),

    ("weave", "US", "output",
     "Applied AI engineer (2.5+ years) shipping production <strong>AI systems</strong> across full-stack surfaces. At Progress Solutions: agentic LLM systems with eval-driven shipping. At Vanguard: 25+ AI agents serving <strong>100K+ daily requests</strong> across 20+ internal teams; <strong>+27% task success</strong> on internal evaluation datasets across GPT-4o, Claude, Gemini. Shipped <strong>MangaLens</strong> solo to the Chrome Web Store (privacy policy, scoped permissions, multi-provider abstraction) and <strong>career-ops</strong> as an autonomous AI job pipeline. Comfortable owning AI for engineering productivity without surveillance metrics -- frame productivity by signal not symptom.",
     ["Production AI Systems for Eng Productivity", "Python + TypeScript + React", "LLM Eval Frameworks", "Multi-Provider LLM Stack", "Full-Stack Founder Shipping (MangaLens, career-ops)", "FastAPI + Docker", "AI Agent Platform Ownership", "Signal-Driven Metric Design"],
     "Kent, OH (open to SF relocation) -- F-1 OPT, open to sponsorship",
     "F-1 OPT -- authorized to work in the United States now; future sponsorship required"),

    ("m3usa", "US", "output",
     "Applied AI engineer (2.5+ years) shipping production <strong>LLM systems for regulated healthcare</strong>. At Progress Solutions: agentic LLM workflows + RAG pipelines over healthcare doc corpora (<strong>~35% precision lift</strong>, <strong>&gt;30% hallucination reduction</strong>) with HIPAA-conscious governance. At Vanguard: 25+ AI agents + LLM evaluation across <strong>Claude, GPT-4o, Gemini</strong>. Shipped <strong>MangaLens</strong> and <strong>career-ops</strong> -- demonstrated <strong>agentic-coding portfolio</strong> built with Claude Code and AI coding agents. Stack maps 1:1 to M3 USA's JD: Python, TypeScript, LLM APIs, AWS/GCP/Azure, SQL, REST APIs, LLM document processing.",
     ["Agentic-Coding Shipping (Claude Code)", "Production Healthcare RAG", "LLM Document Processing + Extraction", "Python + TypeScript + REST APIs", "AWS + GCP + Azure Cloud", "LLM APIs (Claude, OpenAI, Gemini)", "HIPAA + Compliance-Aware Pipelines", "Non-Technical Stakeholder Communication"],
     "Remote (Kent, OH) -- F-1 OPT, open to sponsorship",
     "F-1 OPT -- authorized to work in the United States now; future sponsorship required"),

    ("cognite", "Intl", "output-intl",
     "Applied AI / fullstack engineer (2.5+ years) shipping production <strong>AI systems with industrial-domain adjacency</strong>. At Emerson: trained ML on operational pipeline-storage data for equipment-failure prediction + anomaly detection -- direct adjacency to Cognite's industrial domain. At Progress Solutions: agentic LLM workflows + RAG pipelines (<strong>~35% precision lift</strong>); FastAPI/Docker shipping (<strong>~30% defect reduction</strong>). At Vanguard: 25+ AI agents partnering with 20+ internal teams. Comfortable engaging customers in co-innovation discovery and translating ambiguous problems into shipped agentic prototypes.",
     ["Industrial ML Adjacency (Emerson)", "Production Agentic Workflows", "RAG + Vector Databases", "FastAPI + Docker", "Customer-Facing Co-Innovation", "Multi-Cloud (AWS, Azure, GCP)", "Python + Fullstack", "Eval-Driven Shipping"],
     "Kent, OH (open to Oslo relocation) -- requires Norway work auth",
     "Authorized to work in US (F-1 OPT); Norway work auth via Cognite sponsorship if eligible"),
]


for (slug, region, outdir, summary, comps, loc_line, work_auth) in JOBS:
    html = (HEAD.replace("__LOCATION_LINE__", loc_line)
            + SUMMARY_BLOCK.replace("__SUMMARY__", summary)
            + COMPETENCY_BLOCK.replace("__COMPETENCIES__", tags(comps))
            + EXPERIENCE_AND_REST.replace("__WORK_AUTH__", work_auth))
    tmp_html = f"tmp_cv_{slug}.html"
    with open(tmp_html, "w") as f:
        f.write(html)
    out_pdf = f"{outdir}/{DATE}/cv-deepak-mallampati-{slug}-{DATE}.pdf"
    os.makedirs(f"{outdir}/{DATE}", exist_ok=True)
    print(f"==> {slug}: rendering -> {out_pdf}")
    r = subprocess.run(["node", "generate-pdf.mjs", tmp_html, out_pdf], capture_output=True, text=True)
    if r.returncode != 0:
        print("STDOUT:", r.stdout[-500:])
        print("STDERR:", r.stderr[-500:])
    else:
        print("OK:", out_pdf)
    try:
        os.remove(tmp_html)
    except OSError:
        pass
