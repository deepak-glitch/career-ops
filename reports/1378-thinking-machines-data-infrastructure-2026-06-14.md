# Thinking Machines Lab — Software Engineer, Data Infrastructure

**Fecha:** 2026-06-14
**Arquetipo:** AI Platform / MLOps Engineer + ML Engineer (Applied AI Systems)
**Score:** 3.2/5
**URL:** https://job-boards.greenhouse.io/thinkingmachines/jobs/5013919008
**Legitimacy:** Trustworthy
**Location:** San Francisco, CA — On-site
**Region:** US
**PDF:** output/2026-06-14/cv-deepak-mallampati-thinking-machines-data-infra-2026-06-14.pdf

## Block A — Context & Fit

Thinking Machines Lab (Mira Murati's AI lab — ex-OpenAI CTO; >$1B seed; top-tier research density) is hiring a Software Engineer for Data Infrastructure to "design and maintain scalable infrastructure for LLM research, including distributed compute and data orchestration." Comp band is $350K–$475K + sponsorship explicit ("We sponsor visas. While we can't guarantee success for every candidate or role, if you're the right fit, we're committed to working through the visa process together."). The role centres on high-throughput data ingestion/transformation, traceability, and platform reliability for LLM training pipelines. Required stack: Python or Rust, distributed compute (Apache Spark or Ray), cloud + data lakes, batch + streaming. Preferred: Kafka, dbt, Terraform, Airflow, web crawling, dedup/data mining, Parquet/Delta Lake. Bachelor's min, YoE unspecified (evergreen seat — open continuously). This is an LLM-training infra role, not Applied AI: Deepak's Python + FastAPI + monitoring/observability + 100K+ req/day Vanguard scale lines up partially, but Rust + Spark/Ray + data-lake architectures are real gaps. The seniority floor is implicit ("at scale" + frontier-lab bar) — likely Senior in practice even without the title.

## Block B — Match con CV

| JD Hook | CV/Proof Point | Strength |
|---|---|---|
| Backend proficiency in Python or Rust | Python primary, FastAPI/Flask production stack | Partial (Python yes; Rust no) |
| Distributed compute (Apache Spark or Ray) | Vanguard 100K+ req/day microservices; no Spark/Ray production experience | Gap |
| High-throughput ingestion + transformation pipelines | Progress fault-tolerant automation (−60% failed runs); Vanguard 12 APIs/microservices | Adjacent |
| Cloud + data lake architectures | AWS/Azure listed; Parquet/Delta Lake not in CV | Partial |
| Batch + streaming pipelines | Progress healthcare RAG pipelines (batch); no Kafka/Flink streaming in prod | Partial |
| Monitoring + alerting for platform reliability | Vanguard observability + Progress eval framework | Strong |
| Build systems for traceability + data quality | Progress eval framework with retrieval-precision tracking | Strong |
| Bonus: Kafka, dbt, Terraform, Airflow | None of these in CV at production depth | Gap |
| Bonus: dedup + data mining + web crawling | career-ops scrapers + scan-history dedup (personal project scale) | Partial |

**Gaps & mitigation:**
1. **Rust + Spark/Ray are first-class requirements.** *Mitigation:* lead with Python depth + observability discipline; honest "Rust learnable, Spark/Ray adjacent via microservices scaling" framing.
2. **Frontier-lab seniority bar.** *Mitigation:* the salary band ($350–475K) and "at scale" language suggest Staff/Senior in practice — Deepak's 2.5y is a stretch even though no explicit YoE floor.
3. **LLM-training-infra vs Applied AI focus.** *Mitigation:* if reviewed, lean on Progress production LLM observability + eval framework as transferable training-infra signal.

## Block C — North Star Alignment

3.2/5 — Thinking Machines is a top-tier brand and the sponsorship-explicit + $350–475K compensation is exceptional, but the role's centre of gravity (LLM-training data lakes with Rust + Spark/Ray) is adjacent rather than aligned to Deepak's production Applied-AI archetype. The seniority is implicit Senior+. Worth a shot only as a "stretch app" since visa sponsorship + comp are top decile.

## Block D — Compensation

**Disclosed: $350,000–$475,000 USD base** (annual). 5/5 — top quartile for SF SWE infra. No equity number disclosed but frontier-lab equity is typically meaningful. Anchor at top band ($425–475K) given Applied AI + ML observability differentiation.

## Block E — Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Applied AI generalist | Lead: "Production LLM observability + 100K+ req/day data services" | Mirror "scalable infrastructure for LLM research" |
| 2 | Skills order | Gen-AI first | Surface Python + AWS + Docker + monitoring at top; explicitly note "Rust: learning, Spark/Ray: adjacent" | Match required stack |
| 3 | Experience | Progress 1st | Keep Progress 1st (eval framework + observability + cost controls = data-infra adjacent) | Strongest infra-discipline signal |
| 4 | Proof metrics | Scattered | Hero: 100K+ req/day Vanguard, −42% tokens via Progress agent decomposition, eval framework with retrieval-precision tracking | Throughput + measurement + reliability |
| 5 | Projects | MangaLens | Lead with career-ops (Node + scrapers + dedup at portal scale) — closest hobby analogue to data-lake plumbing | Concrete personal data-infra evidence |
| 6 | Footer | Location | "US-based, F-1 OPT, authorized now; SF relocation ready; sponsorship welcome" | Sponsorship-explicit role — call it out |

## Block F — Plan de Entrevistas

| # | JD Requirement | STAR+R Story | Reflection |
|---|----------------|-------------|------------|
| 1 | Throughput + reliability at scale | Vanguard 12 APIs / 100K+ req/day; downtime budget + observability | Reliability is product, not afterthought |
| 2 | Traceability + data quality | Progress retrieval eval framework — every query logged, retrieval precision tracked, drift surfaced | Eval-as-data flips "did the model get worse?" debates |
| 3 | Distributed compute (Spark/Ray adjacent) | Vanguard microservices fanout for batch model evaluation across 20+ teams | Partition-by-team + idempotent jobs = Spark-shaped thinking, not Spark execution |
| 4 | Cloud + data lake | Progress healthcare RAG on AWS + structured logging; no Delta/Parquet prod work but understand the layering | Honest gap — learnable in weeks given existing AWS familiarity |
| 5 | Python or Rust depth | Python: production Flask/FastAPI + async pipelines + retry infra; Rust: not yet | Will learn Rust on the job if hired; not pretending |

**Case study to present:** Progress retrieval eval framework + Vanguard 100K+ req/day fanout — combined story of "measure what you ship, scale once you trust the measurement."

**Red-flag Qs:** "Rust experience?" → none, learning. "Spark/Ray in production?" → no, adjacent via microservices fanout, willing to ramp. "YoE?" → 2.5 yrs, will be on the junior end of the team.

## Block G — Posting Legitimacy

**Tier: Trustworthy.**

| Signal | Finding | Weight |
|--------|---------|--------|
| Description quality | Specific stack (Python/Rust + Spark/Ray + Delta/Parquet), clear scope | Positive |
| Comp transparency | $350K–$475K disclosed | Strong positive |
| Visa policy | Explicit sponsorship statement | Strong positive |
| Apply state | Live Greenhouse posting | Positive |
| Reposting | "Evergreen role" — open continuously by design, not a ghost-listing pattern | Neutral (disclosed) |
| Funding / traction | >$1B seed (Mira Murati, ex-OpenAI CTO); top-tier research signal | Positive |

## H) Draft Application Answers

Not generated (score 3.2 < 4.5 threshold).

## Keywords extraídas

LLM, distributed compute, Apache Spark, Ray, data lake, Delta Lake, Parquet, batch streaming, Python, Rust, Kafka, dbt, Terraform, Airflow, observability, data quality, traceability, sponsorship, San Francisco, frontier lab, Thinking Machines
