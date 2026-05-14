# Evaluación: Baseten — Software Engineer, Voice AI (Inference Runtime)

**Fecha:** 2026-05-13
**Arquetipo:** AI Platform / MLOps Engineer + Applied AI / LLM Engineer
**Score:** 3.4/5
**URL:** https://jobs.ashbyhq.com/baseten/6e396eb7-acb3-436a-89ec-05e755c477f2
**Legitimacy:** High Confidence
**Location:** San Francisco + (New York secondary)
**Region:** US
**PDF:** output/2026-05-13/cv-deepak-mallampati-baseten-swe-voice-ai-inference-runtime-2026-05-13.pdf

---

## A) Resumen del Rol

| Field | Value |
|---|---|
| Arquetipo | SWE on founding Baseten Voice AI team — own model serving stack for open-source voice models (STT/TTS/agents) |
| Domain | Voice AI inference — productivity, customer service, clinical conversation, creator tools, education |
| Function | Reduce p95/p99 tail latency, increase throughput, GPU profiling, runtime tuning, real-time multi-model voice orchestration |
| Seniority | "High-impact, high-ownership, primary owner of Baseten Voice AI" — implies senior/staff in practice |
| Remote | SF primary, NY secondary |
| Comp | $165K – $330K + equity |
| TL;DR | High-leverage but performance-engineering depth gap. Voice + GPU + p95/p99 + runtime tuning is below Deepak's current systems experience. CV has Docker/FastAPI but not GPU profiling. Apply only if Deepak prioritizes voice infra learning curve. Otherwise skip — Baseten #733 (Applied AI Inference) is the better Baseten pick. |

## B) Match con CV

| JD requirement | CV evidence |
|---|---|
| Develop world-class model serving stack for SOTA open-source voice models | FastAPI/Flask production services + Docker (cv.md L28); Manga Lens multi-provider AI serving (Claude/GPT/Ollama local) (cv.md L60) |
| Reduce e2e and tail latency (p95/p99) via profiling, runtime tuning, server-level opt | **Gap** — Driver drowsiness real-time YOLOv8 latency reduction ~30% (cv.md L68) is closest analog; not GPU profiling at production scale |
| Build large-scale real-time infra for multi-model voice agents (STT/TTS orchestration, streaming I/O) | Agentic Pixel Character LLM-based agent orchestrator decomposing prompts (cv.md L62); Agentic Healthcare Claims multi-agent pipeline (cv.md L72); not real-time voice |
| Design tight training+inference iteration loops for voice model customization | Stable Diffusion fine-tuning + LoRA + ControlNet (cv.md L63); not voice model training |
| GPU efficiency, profiling, runtime tuning, server-level optimizations | **Gap** — Driver drowsiness inference latency ~30% reduction via unified YOLOv8 (cv.md L68); not GPU/CUDA profiling |
| Voice agent / STT / TTS production | **Gap** — Suvidha audio transcript preprocessing adjacent (cv.md L44); no direct voice/STT/TTS |

**Gaps:**
1. **GPU profiling, p95/p99 tuning, runtime opt — direct gap.** Deepak's perf work is YOLOv8 latency + DB query opt (Emerson). Not CUDA/serving-stack-perf scale.
2. **Voice AI / STT / TTS engine — direct gap.**
3. "Primary owner / founding team" → senior/staff seniority bar; Deepak's 2.5+ yr Applied AI is below.

## C) Match con North Star

**AI Platform / MLOps Engineer** is the closest archetype but this role demands inference-engine-perf depth (CUDA/GPU profiling/runtime) Deepak doesn't have. Voice vertical compounds the divergence.

## D) Comp

$165K-$330K + equity. Same Baseten band. Voice-AI vertical premium implied at senior+.

## E) Cultural / Red Flags

**Positives:**
- $165-330K + equity at Series E
- "Founding team Baseten Voice AI" is high-leverage if direction matches
- Open-source voice (Whisper/Orpheus/etc.) is a strong ecosystem

**Red flags:**
- Performance engineering depth gap is large
- Voice AI specialty + GPU runtime depth = senior/staff hire pattern
- SF primary + F-1 OPT relocation

## F) Score breakdown

| Dim | Weight | Score | Notes |
|---|---|---|---|
| Archetype fit | 0.30 | 3.4 | Platform fit; voice-perf depth gap |
| CV evidence depth | 0.20 | 3.0 | Backend fits; GPU/runtime tuning gap |
| Comp fit | 0.15 | 4.2 | $165-330K but senior bar |
| Location/auth | 0.15 | 3.0 | SF primary; NY helps |
| Cultural | 0.10 | 4.0 | Voice + founding team |
| Trajectory | 0.10 | 4.3 | Series E + voice ecosystem |

**Weighted: 3.4/5**

## G) Posting Legitimacy

**High Confidence.** Ashby GraphQL confirmed listed; comp transparent; recent posting (2026-04-23); Series E + named open-source voice projects (Whisper/Orpheus).

## H) Recommended next step

**Apply selectively.** Better to apply to Baseten #733 (Applied AI Inference) as the priority. If applying here, lead with Driver drowsiness real-time inference latency reduction + multi-provider AI serving (Manga Lens) + Docker production patterns. Acknowledge GPU runtime depth as substantial ramp.
