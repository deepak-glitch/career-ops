"""Generate a tailored CV HTML by substituting the template placeholders."""
import sys
from pathlib import Path

TEMPLATE = Path('templates/cv-template.html').read_text()

def fill(template, mapping):
    out = template
    for k, v in mapping.items():
        out = out.replace('{{' + k + '}}', v)
    return out

# --- Fireworks AI tailoring ---
FIREWORKS = dict(
    LANG="en",
    PAGE_WIDTH="7.8in",
    NAME="Deepak Mallampati",
    TITLE="AI Platform / MLOps Engineer",
    PHONE="(330) 554-0770",
    EMAIL="deepakmallampati00@gmail.com",
    LINKEDIN_URL="https://www.linkedin.com/in/deepak-mallampati/",
    LINKEDIN_DISPLAY="linkedin.com/in/deepak-mallampati",
    PORTFOLIO_URL="https://github.com/deepak-glitch",
    PORTFOLIO_DISPLAY="github.com/deepak-glitch",
    LOCATION="Kent, OH — US-based, F-1 OPT (open to NY/SF hybrid)",

    SECTION_SUMMARY="Professional Summary",
    SUMMARY_TEXT=(
        "AI Platform / MLOps engineer with 4+ years building production GenAI infrastructure: "
        "LLM CI/CD pipelines, evaluation frameworks (RAGAS, BERTScore), model-serving APIs, and "
        "inference cost/latency optimization. Shipped 12 FastAPI services on Kubernetes handling "
        "100K+ daily requests with p95 latency cut from 1.5s to 800ms via prompt compression, "
        "semantic caching, and model routing. Hands-on with PyTorch, MLflow, Bedrock/SageMaker, "
        "Docker, K8s, and QLoRA fine-tuning on H100 — looking to go deeper into open-source "
        "inference engines (vLLM, Sglang, TRT-LLM) at LLM-serving scale."
    ),

    SECTION_SKILLS="Skills",
    COMPETENCIES="\n".join([
        '<span class="competency-tag">LLM CI/CD &amp; Evaluation</span>',
        '<span class="competency-tag">Inference Optimization</span>',
        '<span class="competency-tag">Model Serving &amp; Control Plane</span>',
        '<span class="competency-tag">MLOps Infrastructure</span>',
        '<span class="competency-tag">Kubernetes &amp; Docker</span>',
        '<span class="competency-tag">PyTorch &amp; MLflow</span>',
        '<span class="competency-tag">Quantization (QLoRA, 4-bit)</span>',
        '<span class="competency-tag">Semantic Caching &amp; Model Routing</span>',
    ]),
    SKILLS="""
<div class="skills-grid">
  <div class="skill-item"><span class="skill-category">ML Infrastructure:</span> PyTorch, TensorFlow, MLflow, Weights &amp; Biases, AWS Bedrock/SageMaker, Azure OpenAI/AI Services, GCP Vertex AI, Docker, Kubernetes, Terraform, CI/CD (Jenkins, Azure DevOps)</div>
  <div class="skill-item"><span class="skill-category">LLM Engineering:</span> GPT-4o/5, Claude Sonnet, Gemini, LLaMA, Qwen3-27B (QLoRA fine-tune on H100); LangChain/LangGraph; semantic caching; model routing; prompt compression; KV cache &amp; prefill awareness</div>
  <div class="skill-item"><span class="skill-category">Evaluation &amp; Observability:</span> RAGAS, BERTScore, custom domain metrics, latency &amp; accuracy dashboards, regression detection, A/B testing, drift detection</div>
  <div class="skill-item"><span class="skill-category">Retrieval / RAG:</span> FAISS, Pinecone, Weaviate; dense + hybrid search; cross-encoder re-ranking; chunking strategies</div>
  <div class="skill-item"><span class="skill-category">Languages &amp; APIs:</span> Python (primary), JavaScript/TypeScript, Java, SQL; FastAPI, React; REST, JSON, async patterns</div>
  <div class="skill-item"><span class="skill-category">Security &amp; Compliance:</span> HIPAA, SOC 2, PCI DSS; OAuth 2.0, JWT, RBAC; PII masking; prompt-injection mitigation; audit logging</div>
</div>
""",

    SECTION_EXPERIENCE="Professional Experience",
    EXPERIENCE="""
<div class="job">
  <div class="job-header">
    <span class="job-company">Progress Solutions</span>
    <span class="job-period">Jul 2025 – Present</span>
  </div>
  <div class="job-role">AI Engineer</div>
  <div class="job-location">USA</div>
  <ul>
    <li>Established an <strong>LLM evaluation &amp; monitoring framework</strong> (RAGAS, BERTScore, custom domain metrics) with latency and accuracy dashboards, surfacing regressions <strong>before release</strong> across multi-step agentic workflows.</li>
    <li>Optimized inference cost and latency via <strong>prompt compression, semantic caching, and model routing</strong>, sustaining SLA targets while reducing per-query overhead.</li>
    <li>Architected production-grade <strong>agentic LLM systems</strong> on a conductor–subagent orchestration framework, decomposing complex objectives into context-scoped subagents — reducing token consumption by <strong>42%</strong> while sustaining task accuracy.</li>
    <li>Engineered high-performance <strong>retrieval-augmented generation (RAG)</strong> pipelines over large-scale healthcare document corpora, combining dense vector retrieval with cross-encoder re-ranking to lift answer relevance and materially reduce hallucination.</li>
    <li>Built fault-tolerant <strong>automation infrastructure</strong> featuring scheduled batch orchestration and exponential-backoff retry logic, improving pipeline reliability and reducing failed production runs by <strong>60%</strong>.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <span class="job-company">Vanguard</span>
    <span class="job-period">Jan 2024 – Jan 2025</span>
  </div>
  <div class="job-role">AI Engineer Intern</div>
  <div class="job-location">USA</div>
  <ul>
    <li>Built <strong>12 APIs and microservices</strong> powering new AI capabilities, reducing p95 latency from <strong>1.5s to 800ms</strong> and accelerating feature integration by <strong>40%</strong> — handling <strong>100,000+ requests/day</strong> across 20+ internal teams.</li>
    <li>Developed and enhanced <strong>AI agents and backend services</strong> for Vanguard's internal AI platform, integrating with production data pipelines and observability tooling across <strong>25+ agents</strong>.</li>
    <li>Optimized LLM prompts and evaluated <strong>GPT-4o, Claude Sonnet, and Gemini</strong>, improving task success rates by <strong>27%</strong> and informing platform model-selection decisions.</li>
    <li>Engineered safeguards and content controls for policy-compliant AI responses, reducing unsafe outputs by <strong>42%</strong> while maintaining response quality.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <span class="job-company">Kent State University</span>
    <span class="job-period">Oct 2023 – Jan 2024</span>
  </div>
  <div class="job-role">ML &amp; Gen AI Research Assistant</div>
  <div class="job-location">USA</div>
  <ul>
    <li>Fine-tuned <strong>Qwen3-27B via 4-bit QLoRA</strong> on an NVIDIA H100, conditioning on a six-stage narrative schema for controllable long-form generation.</li>
    <li>Built a privacy-preserving ML pipeline (k-anonymity, l-diversity, differential privacy) — reducing record-linkage re-identification risk from <strong>3.38% to 0.32%</strong> while retaining <strong>99% of baseline predictive performance</strong>.</li>
    <li>Authored an IEEE-format conference paper documenting methodology, experiments, and results.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">
    <span class="job-company">Emerson</span>
    <span class="job-period">Jun 2022 – Apr 2023</span>
  </div>
  <div class="job-role">ML Trainee</div>
  <div class="job-location">India</div>
  <ul>
    <li>Developed supervised regression and classification models on operational pipeline-storage data; equipment-failure prediction, anomaly detection, capacity forecasting.</li>
    <li>Fine-tuned <strong>BERT and RoBERTa</strong> for entity extraction and text classification on domain-specific financial datasets, achieving <strong>89% F1-score</strong>.</li>
  </ul>
</div>
""",

    SECTION_PROJECTS="Projects",
    PROJECTS="""
<div class="project">
  <span class="project-title">MangaLens</span>
  <span class="project-badge">Chrome Web Store</span>
  <div class="project-desc">Shipped Chrome extension delivering real-time AI translation of manga and webtoons across <strong>29+ sites</strong>. Turned a multi-step manual translation chore into a single inline action.</div>
  <div class="project-tech">JavaScript/TypeScript, LLM APIs, browser extension architecture</div>
</div>
<div class="project">
  <span class="project-title">career-ops</span>
  <span class="project-badge">Open Source</span>
  <div class="project-desc">Autonomous AI-driven job-search pipeline that scans listings, scores fit, and generates tailored applications overnight without supervision — multi-agent orchestration with structured evaluation.</div>
  <div class="project-tech">Python, Node.js, LangGraph, Playwright, structured-output LLMs</div>
</div>
<div class="project">
  <span class="project-title">Story Director LLM</span>
  <div class="project-desc">Fine-tuned (QLoRA) language model that generates structured short-form video narratives from a single prompt, paired with an automated rendering pipeline.</div>
  <div class="project-tech">PyTorch, QLoRA, Qwen3-27B, H100 GPU</div>
</div>
""",

    SECTION_RESEARCH="Research",
    RESEARCH="""
<div class="project">
  <span class="project-title">Privacy-Preserving Clinical ML Pipeline</span>
  <div class="project-desc">Framework letting researchers analyze sensitive patient data without exposing identities — combining k-anonymity, l-diversity, and differential privacy. Quantified the privacy–utility trade-off across six anonymization configurations.</div>
  <div class="project-tech">scikit-learn, differential privacy (Laplace mechanism), Random Forest</div>
</div>
""",

    SECTION_EDUCATION="Education",
    EDUCATION="""
<div class="edu-item">
  <div class="edu-header">
    <span class="edu-title">M.S. in Computer Science <span class="edu-org">— Kent State University, OH</span></span>
    <span class="edu-year">2025</span>
  </div>
  <div class="edu-desc">GPA: 3.70 / 4.0</div>
</div>
""",

    SECTION_CERTIFICATIONS="Work Authorization",
    CERTIFICATIONS="""
<div class="cert-item">
  <span class="cert-title">F-1 OPT — authorized to work in the United States now; future sponsorship required.</span>
</div>
""",
)

out = fill(TEMPLATE, FIREWORKS)
Path('/tmp/cv-fireworks-ai-swe-infra.html')  # cannot write to /tmp from sandbox? skip
out_path = Path('output/2026-06-05/_tmp_cv-fireworks-ai-swe-infra.html')
out_path.parent.mkdir(parents=True, exist_ok=True)
out_path.write_text(out)
print(str(out_path))
