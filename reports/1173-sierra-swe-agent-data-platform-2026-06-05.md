# Evaluation: Sierra — Software Engineer, Agent Data Platform

**Fecha:** 2026-06-05
**Arquetipo:** AI Platform / MLOps Engineer (data-platform leaning)
**Score:** 3.0/5
**URL:** https://jobs.ashbyhq.com/sierra/78c5dce4-3670-4c9b-a666-98f435c56324
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — In-person
**Region:** US
**PDF:** output/2026-06-05/cv-deepak-mallampati-sierra-agent-data-platform-2026-06-05.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | AI Platform / MLOps Engineer (data-platform) |
| Domain | Platform / data infrastructure for AI agents |
| Function | Build (real-time pipelines, lakehouse, OLAP) |
| Seniority | IC "Software Engineer" (comp band implies mid–senior bar) |
| Remote | On-site SF (primarily in-person company) |
| Team | Platform Engineering — full-stack data team |
| Comp | $230K–$390K + equity |
| TL;DR | Build the streaming/batch data foundations (Iceberg lakehouse, real-time eventing, OLAP, experimentation) that make Sierra's AI agents measurably smarter every interaction. |

## B) Match con CV

| Requisito JD | Evidencia en cv.md | Fit |
|--------------|--------------------|-----|
| Streaming & batch ETL pipelines | Kafka, Spark, Databricks; fault-tolerant automation infra, batch orchestration, 60% fewer failed runs | Strong |
| Real-time eventing / data at scale, low latency | 99.9% uptime, enterprise-scale RAG over millions of documents; semantic caching, latency optimization | Medium-Strong |
| Iceberg-based lakehouse / OLAP querying | PostgreSQL, MongoDB, Redis, Spark, Databricks; data lineage & governance — no explicit Iceberg/lakehouse | Medium (adjacent) |
| Experimentation / evaluation systems | LLM eval framework (RAGAS, BERTScore), A/B testing, drift detection | Strong |
| Turn conversations into business outcomes (analytics products) | RAG analytics over regulated corpora; care-engagement/risk scoring | Medium |

**Gaps:**
1. **Iceberg/lakehouse + interactive OLAP at scale** — nice-to-have, not a hard blocker. Mitigation: lead with Spark/Databricks + Kafka streaming and frame lakehouse as a tooling delta, not a concept gap.
2. **Pure distributed-data-systems depth** — Deepak's core is LLM/RAG, not data-platform engineering. Adjacent, but this role is data-infra-first. Mitigation: emphasize the data-engineering half of his RAG pipelines (ingestion, chunking, vector + relational stores, observability).

## C) Nivel y Estrategia

- **JD level:** IC SWE, but $230–390K band signals a senior/high-bar hire at a top-tier lab.
- **Sell-senior-without-lying:** Position the conductor–subagent orchestration + production RAG over millions of docs as evidence of systems thinking at scale; quantify 42% token reduction and 60% reliability gains as platform-level wins.
- **If down-leveled:** Acceptable given comp floor is already strong; negotiate a 6-month review tied to platform ownership.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Posted band | $230K–$390K + equity | JD (Ashby) |
| Market (SF SWE, AI infra) | $200K–$350K base typical at top labs | Levels.fyi (general) |
| Demand | Very high — agent data platforms are a hot category | Qualitative |

Comp is at/above market; the trade-off is the in-person SF requirement and a data-platform focus slightly off Deepak's LLM core.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | Applied AI / LLM framing | Lead with "production data pipelines for AI systems at enterprise scale" | Mirror data-platform JD |
| 2 | Skills order | GenAI first | Surface Kafka/Spark/Databricks + observability earlier | Match Data Foundations bullet |
| 3 | Experience bullets | RAG-centric | Foreground batch orchestration + 60% reliability + caching/latency | OLAP/eventing relevance |
| 4 | Metrics | Hallucination/precision | Add 42% token + 99.9% uptime hero metrics | Scale signals |
| 5 | LinkedIn headline | "Applied AI Engineer" | Add "data platform / streaming" keyword | Recruiter search |

## F) Plan de Entrevistas

| # | Requisito JD | Historia STAR+R | S | T | A | R | Reflection |
|---|--------------|-----------------|---|---|---|---|------------|
| 1 | Pipelines at scale | Fault-tolerant batch infra | Flaky prod runs | Cut failures | Backoff retry + scheduling | 60% fewer failed runs | Reliability is a design property, not a patch |
| 2 | Low-latency serving | Inference cost/latency optimization | SLA pressure | Hold latency | Prompt compression + semantic caching + routing | SLA sustained, lower per-query cost | Caching beats scaling for repeat workloads |
| 3 | Experimentation | LLM eval framework | No regression signal | Benchmark iterations | RAGAS/BERTScore + dashboards | Caught regressions pre-release | Evals are the platform's safety net |

**Case study:** Healthcare RAG pipeline (ingestion → vector + relational stores → eval dashboards) as a data-platform narrative.
**Red-flag Qs:** "Have you owned a lakehouse?" → honest adjacency framing via Spark/Databricks.

## G) Posting Legitimacy

**Assessment:** High Confidence

| Signal | Finding | Weight |
|--------|---------|--------|
| Freshness | Live on Ashby API, active apply | Positive |
| Description quality | Specific stack (Iceberg, OLAP, eventing), clear scope | Positive |
| Comp transparency | Full band published | Positive |
| Company signals | Sierra well-funded, high-profile founders, hiring broadly | Positive |
| Reposting | First appearance in scan-history | Neutral |

**Context:** Top-tier, well-capitalized AI company; role is clearly scoped and legitimately open.

---

## Keywords extraídas

agent data platform, Iceberg lakehouse, streaming ETL, batch ETL, real-time eventing, OLAP, experimentation, data foundations, low latency, personalization, analytics, Kafka, Spark, Python, distributed systems
