#!/usr/bin/env python3
"""Build tailored CV PDFs for the 2026-06-04 overnight Intl additions (#1116, #1117).
Reuses the HTML template constants from build_overnight_pdfs_2026-06-04.py without
re-running that file's job loop."""
import os, subprocess, re

DATE = "2026-06-04"
BASE = os.path.join(os.path.dirname(__file__), "build_overnight_pdfs_2026-06-04.py")
src = open(BASE).read()
# Exec only the prefix before the job loop so we reuse HEAD/SUMMARY/COMPETENCY/EXPERIENCE_AND_REST + tags()
prefix = src.split("# Per-job tailored content", 1)[0]
ns = {}
exec(prefix, ns)
HEAD = ns["HEAD"]; SUMMARY_BLOCK = ns["SUMMARY_BLOCK"]
COMPETENCY_BLOCK = ns["COMPETENCY_BLOCK"]; EXPERIENCE_AND_REST = ns["EXPERIENCE_AND_REST"]
tags = ns["tags"]

JOBS = [
    ("languagewire-ai-engineer", "Intl", "output-intl",
     "Applied AI / LLM engineer (4+ years) shipping production <strong>RAG, agentic, and LLMOps</strong> systems. Core strength is exactly what this role centers on: <strong>context engineering</strong> -- designing retrieval strategies, prompt structures, and input pipelines that maximize LLM output quality. At Progress Solutions: high-performance RAG pipelines (dense retrieval + cross-encoder re-ranking, ~35% precision lift, 40% hallucination reduction) and a conductor-subagent <strong>agentic</strong> framework (42% token reduction). Built a structured <strong>LLM evaluation framework</strong> (RAGAS, BERTScore, LLM-as-a-judge style scoring) with latency/accuracy dashboards. Translation-domain proof point: shipped MangaLens, a real-time AI translation product live across 29+ sites. Strong Python production discipline; comfortable moving fluidly between ML experimentation and production engineering.",
     ["Context Engineering (retrieval + prompt structures)", "Production RAG (dense + cross-encoder re-rank)", "Agentic Workflows (orchestration, self-correction)", "LLMOps (deploy, monitor, iterate)", "LLM Evaluation (RAGAS, BERTScore, LLM-as-a-judge)", "Python production systems", "Vector DBs (FAISS, Pinecone, Weaviate)", "Machine Translation tooling (MangaLens)", "Experiment design (baselines, measurable outcomes)"],
     "Kent, OH (US, F-1 OPT) -- open to EU remote / EOR / sponsorship",
     "US-based (F-1 OPT); EU work via EOR/contractor or sponsorship to be confirmed"),

    ("maia-applied-ai-engineer", "Intl", "output-intl",
     "Applied AI engineer (4+ years) combining <strong>backend service engineering</strong> with <strong>LLM application development</strong> -- the dual core this role asks for. Built production REST APIs and microservices (FastAPI; 12 services at Vanguard, p95 1.5s -> 800ms) and shipped a <strong>TypeScript</strong> product (MangaLens, Chrome Web Store, 29+ sites). Strong on the LLM axis: <strong>RAG systems and retrieval</strong> (dense + cross-encoder re-rank, ~35% precision lift), LLM frameworks (LangChain/LangGraph), and <strong>vector databases</strong> (FAISS/Pinecone/Weaviate). Production <strong>observability</strong> discipline -- logs, metrics, latency/accuracy dashboards, model monitoring -- plus cloud/DevOps fundamentals (AWS/Azure/GCP, Docker, Kubernetes, Terraform, CI/CD). Direct industrial-sector domain credibility from Emerson (equipment-failure prediction, anomaly detection on operational sensor data).",
     ["LLM Applications + RAG", "Backend REST APIs (FastAPI, microservices)", "TypeScript + Java production code", "Vector Databases (FAISS, Pinecone, Weaviate)", "Observability (logs, metrics, tracing)", "Cloud + DevOps (Docker, Kubernetes, Terraform, CI/CD)", "Industrial-sector ML (Emerson)", "LLM Eval + Monitoring", "High-ownership product delivery"],
     "Kent, OH (US, F-1 OPT) -- open to Germany remote / EOR / sponsorship",
     "US-based (F-1 OPT); Germany work via EOR/contractor or sponsorship to be confirmed"),
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
        print("FAIL", slug); print("STDOUT:", r.stdout[-400:]); print("STDERR:", r.stderr[-400:])
    else:
        print("OK:", out_pdf)
    try: os.remove(tmp_html)
    except: pass
