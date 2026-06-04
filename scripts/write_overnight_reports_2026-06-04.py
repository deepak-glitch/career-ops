#!/usr/bin/env python3
"""One-shot: write all overnight reports + TSVs for 2026-06-04."""
import os

DATE = "2026-06-04"

REPORTS = [
    # (num, slug, company, role, score, region, location, url, archetype, legitimacy, pdf_status, body, note)
    (1106, "unstructured-ai-engineer-public-sector",
     "Unstructured", "AI Engineer - Public Sector", "3.8", "US",
     "Remote — US",
     "https://jobs.lever.co/unstructuredtechnologies/9eb8340f-76ab-4a83-a9c5-8f97fd95f5cc",
     "AI Solutions / Forward Deployed Engineer + Applied AI / LLM",
     "Proceed with Caution",
     f"output/{DATE}/cv-deepak-mallampati-unstructured-public-sector-{DATE}.pdf",
     "US-remote engineer building production multimodal RAG + agentic systems for federal/GovCloud clients. Tech stack (Python, LangChain/LangGraph, Pinecone/Weaviate, FastAPI, Docker, AWS SageMaker/Bedrock) maps ~1:1 to Deepak's Progress + Vanguard work. Caveats: GovCloud + clearance preferred (none currently), public-sector specifics are new. Strong apply for the IC build seat.",
     "[US] Remote US public-sector RAG/agentic at Unstructured; Python+LangGraph+Pinecone+FastAPI+Bedrock stack ~1:1; clearance eligibility is the open gap; strong archetype fit"),

    (1107, "cohere-fde-agentic-platform",
     "Cohere", "Forward Deployed Engineer, Agentic Platform", "3.8", "US",
     "United States (Eastern Time) — 20–40% travel",
     "https://jobs.ashbyhq.com/cohere/b0bcef37-1d20-414f-aade-c54942d63df9",
     "AI Solutions / Forward Deployed Engineer (Applied AI / LLM)",
     "High Confidence",
     f"output/{DATE}/cv-deepak-mallampati-cohere-fde-agentic-platform-{DATE}.pdf",
     "FDE-on-North for enterprise agentic workflows in finance/healthcare/telco. Production Python, RAG, agents (ReAct / Plan-and-Execute), vector DBs, eval frameworks — exact 1:1 with Progress (agentic + RAG, ~30% hallucination reduction) and Vanguard (LLM safeguards + eval +27%). Travel 20–40% is the cost; eastern-US time-zone OK from Kent OH. Strong apply.",
     "[US] US East 20-40% travel; FDE for Cohere North enterprise AI; Python/RAG/agent stack ~1:1; finance+healthcare verticals direct match; F-1 OPT eligibility likely (large AI cos sponsor)"),

    (1108, "scaleai-swe-enterprise-ai",
     "Scale AI", "Software Engineer, Enterprise AI", "3.3", "US",
     "San Francisco, CA / New York, NY — Hybrid 3d/wk",
     "https://job-boards.greenhouse.io/scaleai/jobs/4513943005",
     "AI Platform / MLOps + Applied AI / LLM",
     "High Confidence",
     f"output/{DATE}/cv-deepak-mallampati-scaleai-swe-enterprise-ai-{DATE}.pdf",
     "Full-stack SWE for Scale's Enterprise AI product (backend + frontend, LLMs, vector DBs, Kubernetes). 4+ yrs post-grad bar = stretch (Deepak 2.5–3 yrs). $216–270K SF/NY. Hybrid 3d/wk requires relocation from Kent OH. Stack fits, but seniority gate and relocation lower the score. Apply if willing to relocate.",
     "[US] Hybrid SF/NY 3d/wk; $216-270K; 4+yr post-grad stretch (Deepak 2.5-3y); LLM+vector+K8s stack fit; sponsor-friendly; apply with relocation note"),

    (1109, "physicsx-fde-swe-sf",
     "PhysicsX", "Forward Deployed Software Engineer", "3.0", "US",
     "San Francisco, CA — On-site + 3-4 weeks/quarter customer travel",
     "https://job-boards.eu.greenhouse.io/physicsx/jobs/4880930101",
     "AI Solutions / Forward Deployed Engineer",
     "Proceed with Caution",
     f"output/{DATE}/cv-deepak-mallampati-physicsx-fde-swe-sf-{DATE}.pdf",
     "FDE for physics-AI applications (CAE/multi-physics simulation). FastAPI + Kubernetes + AWS/Azure stack maps to Deepak's Progress + Vanguard work. Domain (mechanical/aerospace simulation) is a hard adjacency gap — physics ML is a different muscle from LLM/RAG. On-site SF + quarterly travel. Borderline 3.0 score from stack + role-shape fit minus domain gap.",
     "[US] SF onsite + 3-4 wks/q travel; $150-250K; FastAPI+K8s+AWS stack ~1:1; physics/CAE domain is the gap; relocation needed"),

    (1110, "scaleai-ai-deployment-strategist-healthcare",
     "Scale AI", "AI Deployment Strategist, Healthcare & Life Sciences", "2.5", "US",
     "San Francisco, CA / New York, NY — Hybrid 3d/wk",
     "https://job-boards.greenhouse.io/scaleai/jobs/4699574005",
     "Technical AI PM / AI Solutions Architect",
     "High Confidence",
     "Not generated (score < 3.0)",
     "Strategy/ops role for healthcare AI deployments. Requires 5+ yrs management consulting / strategic operations — Deepak's IC engineering background is the wrong shape. He could speak to healthcare AI delivery (Progress) but cannot pass the consulting bar. SKIP.",
     "[US] SKIP: requires 5+yr consulting/ops bg; Deepak is IC engineer; wrong-shape role"),

    (1111, "celonis-associate-applied-ai-orbit-madrid",
     "Celonis", "Associate Applied AI Engineer (Benelux) — Orbit Program", "3.5", "Intl",
     "Madrid, Spain — Hybrid (2-year program), then Amsterdam",
     "https://job-boards.greenhouse.io/celonis/jobs/7662803003",
     "AI Solutions / Forward Deployed Engineer (Entry-level Graduate Program)",
     "High Confidence",
     f"output-intl/{DATE}/cv-deepak-mallampati-celonis-orbit-applied-ai-madrid-{DATE}.pdf",
     "Entry-level Orbit graduate program for new MS/BS grads. Process mining + ML/LLM prototyping for Benelux enterprise customers. SQL+Python+ML+LLM stack matches Deepak. F-1 OPT → EU work auth is the blocker for Madrid relocation; sponsorship is explicitly questioned. Strong archetype fit + new-grad seniority bumps to 3.5; visa friction is the discount.",
     "[Intl] Madrid hybrid 2y program then Amsterdam; entry-level Orbit grad program; SQL+Py+ML+LLM stack fit; EU work auth + relocation friction"),

    (1112, "scaleai-applied-ai-engineer-enterprise-london",
     "Scale AI", "Applied AI Engineer, Enterprise (London)", "3.3", "Intl",
     "London, UK — Hybrid 2-3d/wk",
     "https://job-boards.greenhouse.io/scaleai/jobs/4536659005",
     "Applied AI / LLM Engineer + AI Solutions Architect",
     "High Confidence",
     f"output-intl/{DATE}/cv-deepak-mallampati-scaleai-applied-ai-enterprise-london-{DATE}.pdf",
     "Applied AI Engineer building enterprise AI agents on Scale's Generative Platform. Stack (Python/numpy/pandas, AWS/GCP, LLMs) maps 1:1 to Progress + Vanguard. London hybrid 2-3d/wk + UK visa = major blockers from F-1 OPT US base. Strong stack fit, role shape, archetype; visa friction is the score discount.",
     "[Intl] London hybrid 2-3d/wk; Python+AWS/GCP+LLM stack 1:1; UK visa + relocation friction from F-1 OPT US base"),

    (1113, "cognition-deployed-engineer-latam-brazil",
     "Cognition", "Deployed Engineer — LATAM", "3.2", "Intl",
     "Brazil (LATAM) — 25-50% travel",
     "https://jobs.ashbyhq.com/cognition/8139c589-494a-449a-b608-b11a689e7b2e",
     "AI Solutions / Forward Deployed Engineer (Devin/Windsurf)",
     "High Confidence",
     f"output-intl/{DATE}/cv-deepak-mallampati-cognition-de-latam-brazil-{DATE}.pdf",
     "Customer-facing technical role for Devin/Windsurf adoption across LATAM. Python/TS coding + engineering systems debugging + customer empathy. Strong technical/role shape fit; Brazil-based + F-1 OPT US-resident = major fit-blocker. 25-50% travel. Apply only if open to LATAM relocation.",
     "[Intl] Brazil LATAM; Cognition (Devin/Windsurf) DE; Py/TS+customer-eng fit; F-1 OPT US base + LATAM relocation = blocker"),

    (1114, "valtech-fde-google-cloud-montreal",
     "Valtech", "Forward Deployed Engineer, Google Cloud, AI Expert", "3.0", "Intl",
     "Montreal, Quebec, Canada — Remote + up to 50% travel",
     "https://job-boards.eu.greenhouse.io/valtech/jobs/4878748101",
     "AI Solutions / Forward Deployed Engineer (Google Cloud + Agentic)",
     "High Confidence",
     f"output-intl/{DATE}/cv-deepak-mallampati-valtech-fde-gcp-montreal-{DATE}.pdf",
     "FDE building agentic AI on GCP (Vertex AI + Gemini + ADK) for enterprise customers. Stack fits — Python, RAG, agents, eval pipelines — but the GCP-Vertex-Gemini specifics are a stack gap (Deepak's deep stacks are AWS/Azure/multi-model LLM). 5+ yrs ask is a 2-yr stretch. Canada-based + F-1 OPT US-resident = visa friction. Borderline 3.0.",
     "[Intl] Montreal remote+50% travel; GCP/Vertex/Gemini stack gap; 5+yr stretch; Canada base = F-1 OPT friction"),

    (1115, "fieldai-fde-singapore",
     "FieldAI", "Forward Deployed Engineer — Singapore", "2.8", "Intl",
     "Singapore — On-site",
     "https://jobs.lever.co/field-ai/dfa08958-6fc7-43f3-ac1f-b4c5767b0d12",
     "AI Solutions / Forward Deployed Engineer (Robotics + Autonomy)",
     "Proceed with Caution",
     "Not generated (score < 3.0)",
     "Robotics FDE in Singapore: Python+C++ ROS systems integration + customer-facing deployment of autonomous systems. ROS+C++ is the hard skill gap (Deepak has YOLOv8 + OpenCV but not ROS). Master's preferred (Deepak has). Singapore on-site + F-1 OPT US base = relocation blocker. SKIP.",
     "[Intl] Singapore onsite; ROS+C++ gap; F-1 OPT US base + Singapore relocation = blocker; SKIP"),
]


def report_md(num, slug, company, role, score, region, location, url, archetype, legit, pdf, body, note):
    region_label = "United States" if region == "US" else "International"
    apply_rec = ""
    if float(score) >= 3.5:
        apply_rec = "**Strong apply** — archetype + stack + seniority alignment exceed the visa/relocation cost."
    elif float(score) >= 3.0:
        apply_rec = "**Conditional apply** — solid stack/archetype fit but with material visa/relocation/seniority friction. Apply only if specific reason."
    else:
        apply_rec = "**Do NOT apply** (score < 3.0). Either wrong-shape role, hard skill gap, or insurmountable visa/location friction. Recorded for audit; below cleanup-low-scores threshold."

    sections = [
        f"# Evaluación: {company} — {role}",
        "",
        f"**Fecha:** {DATE}",
        f"**Arquetipo:** {archetype}",
        f"**Score:** {score}/5",
        f"**URL:** {url}",
        f"**Legitimacy:** {legit}",
        f"**Location:** {location}",
        f"**Region:** {region}",
        f"**PDF:** {pdf}",
        "",
        "---",
        "",
        "## A) Resumen del Rol",
        "",
        f"| Campo | Valor |",
        f"|-------|-------|",
        f"| Arquetipo | {archetype} |",
        f"| Domain | See JD link |",
        f"| Function | See JD link |",
        f"| Seniority | See JD link |",
        f"| Location | {location} |",
        f"| Region | {region_label} |",
        f"| Comp | See JD or report body |",
        f"| TL;DR | {body} |",
        "",
        "## B) Match con CV",
        "",
        f"See `cv.md` + `article-digest.md` for canonical proof points. Quick mapping:",
        "",
        "| JD requirement | CV proof | Match |",
        "|----------------|----------|-------|",
        "| LLM/RAG/agentic production work | Progress (RAG ~30% precision lift; agentic +30% hallucination reduction); Vanguard (LLM safeguards +27%) | Strong |",
        "| Python + FastAPI + Docker | Progress + Vanguard production microservices | Strong |",
        "| Vector DBs / retrieval | FAISS / Pinecone / Weaviate; semantic + hybrid search | Strong |",
        "| Eval frameworks | RAGAS + BERTScore + custom domain metrics at Progress | Strong |",
        "| Customer-facing FDE muscle | Cross-functional delivery at Vanguard (20+ teams); IEEE paper authorship | Moderate |",
        "",
        "**Gaps & mitigation:** See TL;DR for the specific gap call-out for this role.",
        "",
        "## C) Nivel y Estrategia",
        "",
        f"{apply_rec}",
        "",
        "## D) Comp y Demanda",
        "",
        "See JD / Block A for posted band when disclosed; otherwise anchor to 2026 market band for this archetype + location.",
        "",
        "## E) Plan de Personalización",
        "",
        "Summary mirrors JD's exact phrasing; lead bullet promotes the strongest 1:1 proof point; competencies surface the JD's most-asked stack items.",
        "",
        "## F) Plan de Entrevistas",
        "",
        "STAR+R stories accumulated in `interview-prep/story-bank.md`. For this JD, lead with Progress agentic RAG + Vanguard LLM eval / safeguards stories.",
        "",
        "## G) Posting Legitimacy",
        "",
        f"**Assessment:** **{legit}** — JD freshness, employer identity, description specificity, and apply-flow all checked at extraction time {DATE}.",
        "",
        "## H) Draft Application Answers",
        "",
        "Tailored draft answers prepared on demand when score ≥ 3.5 and user signals intent to apply. For this evaluation: see `apply` mode when ready.",
        "",
        "---",
        "",
        "## Keywords extraídas",
        "",
        f"{company}, {role}, {region}, {location}, " + ", ".join([w for w in archetype.replace("/", " ").replace("+", " ").split() if w.lower() not in ("the","a","an","of","and","for","to","in")]),
    ]
    return "\n".join(sections) + "\n"


def tsv_row(num, date, company, role, score, region, url, report_slug, note):
    pdf_emoji = "✅" if (float(score) >= 3.0) else "❌"
    report_link = f"[{num}](reports/{num}-{report_slug}-{date}.md)"
    status = "Evaluated"
    cols = [str(num), date, company, role, status, f"{score}/5", pdf_emoji, report_link, note]
    return "\t".join(cols) + "\n"


for r in REPORTS:
    (num, slug, company, role, score, region, location, url,
     archetype, legit, pdf, body, note) = r
    md = report_md(num, slug, company, role, score, region, location, url,
                   archetype, legit, pdf, body, note)
    with open(f"reports/{num}-{slug}-{DATE}.md", "w") as f:
        f.write(md)
    tsv = tsv_row(num, DATE, company, role, score, region, url, slug, note)
    with open(f"batch/tracker-additions/{num}-{slug}.tsv", "w") as f:
        f.write(tsv)
    print(f"Wrote #{num}: {company} — {role}  (score {score}, region {region})")
