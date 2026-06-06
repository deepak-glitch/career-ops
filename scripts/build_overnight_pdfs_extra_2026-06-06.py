#!/usr/bin/env python3
"""Build tailored PDFs for the second 2026-06-06 overnight batch (#1213-1215).
Reuses the template constants from build_overnight_pdfs_2026-06-06.py."""
import os, subprocess, importlib.util

DATE = "2026-06-06"
spec = importlib.util.spec_from_file_location("base", "scripts/build_overnight_pdfs_2026-06-06.py")
# We only want the constants, not the module-level render loop. Read + exec the head portion.
src = open("scripts/build_overnight_pdfs_2026-06-06.py").read()
# cut at the JOBS definition so the render loop never runs
head_src = src.split("JOBS = [")[0]
ns = {}
exec(head_src, ns)
HEAD = ns["HEAD"]; SUMMARY_BLOCK = ns["SUMMARY_BLOCK"]
COMPETENCY_BLOCK = ns["COMPETENCY_BLOCK"]; EXPERIENCE_AND_REST = ns["EXPERIENCE_AND_REST"]
tags = ns["tags"]

JOBS = [
    ("cinder", "US", "output",
     "Applied AI engineer shipping the full <strong>LLM lifecycle</strong> -- data prep, fine-tuning, evaluation, and low-latency production serving. At Progress Solutions: agentic LLM systems (conductor-subagent, <strong>42% token reduction</strong>) and RAG pipelines (<strong>~35% precision lift</strong>) with a structured <strong>eval framework</strong> (RAGAS, BERTScore, custom metrics) that catches regressions before release. At Vanguard: served <strong>100K+ requests/day</strong>, cut p95 latency <strong>1.5s -&gt; 800ms</strong>, and reduced unsafe outputs <strong>42%</strong> via content-safety controls -- directly transferable to trust &amp; safety / abuse detection. MLOps discipline on AWS + Terraform; LangChain agentic stack. An engineer who takes models from experimentation to production at scale.",
     ["Full LLM Lifecycle (fine-tune -> eval -> serve)", "LLM Eval Frameworks (RAGAS, BERTScore)", "Low-Latency High-Throughput Serving", "RAG + Vector DBs (FAISS, Pinecone, Weaviate)", "MLOps: CI/CD for ML, monitoring, observability", "AWS + Terraform IaC", "LangChain Agentic Patterns", "Content Safety + Prompt-Injection Mitigation"],
     "Remote (Kent, OH) -- F-1 OPT, open to sponsorship",
     "F-1 OPT -- authorized to work in the United States now; future sponsorship required"),

    ("fieldguide", "US", "output",
     "Applied AI engineer who <strong>ships production agents</strong> for high-stakes regulated workflows. At Progress Solutions: built agentic LLM workflows (conductor-subagent, <strong>42% token reduction</strong>) integrating LLMs, tools, and retrieval into reliable agents, plus eval/feedback loops (RAGAS, BERTScore) that improve outputs across iterations. At Vanguard: 25+ AI agents serving <strong>100K+ requests/day</strong> with <strong>+27% task success</strong> and a <strong>42% unsafe-output reduction</strong>. Shipped <strong>MangaLens</strong> solo (TypeScript/React, Chrome Web Store) and <strong>career-ops</strong> (autonomous agent pipeline). Regulated-domain background (banking, healthcare; HIPAA/SOC2/PCI-aware) maps directly to enterprise audit &amp; assurance.",
     ["Build & Ship AI Agents", "Agentic Workflows + Tool Use", "Grounded Retrieval / RAG", "Eval & Feedback Loops (RAGAS, BERTScore)", "TypeScript + Python + React", "LLM APIs (Claude, GPT-4o, Gemini)", "Enterprise Reliability / Production Hardening", "Regulated-Domain Transfer (banking, healthcare)"],
     "Remote (Kent, OH) -- F-1 OPT, open to sponsorship",
     "F-1 OPT -- authorized to work in the United States now; future sponsorship required"),

    ("databricks-ai-engineer-fde-uk", "Intl", "output-intl",
     "Generative AI engineer shipping <strong>grounded production GenAI</strong> -- RAG, multi-agent, and fine-tuned LLM systems -- with the platform fluency Databricks FDEs need. At Progress Solutions: RAG pipelines (dense retrieval + cross-encoder re-rank, <strong>~35% precision lift</strong>) and agentic workflows with eval gating. At Vanguard: 25+ AI agents across 20+ teams, <strong>100K+ requests/day</strong>. Fine-tuning depth via <strong>4-bit QLoRA on Qwen3-27B</strong>. Multicloud production (AWS Bedrock/SageMaker, Azure OpenAI, GCP Vertex AI) plus <strong>Spark + Databricks</strong> experience and an M.S. in Computer Science. Comfortable advising customers and translating ambiguous problems into shipped GenAI.",
     ["Production GenAI Rollouts", "RAG + Multi-Agent + Text2SQL (SQL+NL)", "Fine-Tuning (QLoRA, LoRA, PEFT)", "HuggingFace + LangChain", "Multicloud (AWS, Azure, GCP)", "Spark + Databricks", "pandas / scikit-learn / PyTorch", "Customer-Facing Technical Advisory"],
     "Kent, OH (open to UK relocation) -- F-1 OPT; UK work auth via sponsorship",
     "US-based (F-1 OPT); UK right-to-work via relocation sponsorship if eligible"),
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
        print("FAIL", slug); print("STDERR:", r.stderr[-600:])
    else:
        print("OK:", out_pdf)
    try: os.remove(tmp_html)
    except OSError: pass
