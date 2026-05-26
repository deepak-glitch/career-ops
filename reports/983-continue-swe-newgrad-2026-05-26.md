# Evaluación: Continue — Software Engineer (New Grad)

**Fecha:** 2026-05-26
**Arquetipo:** Applied AI / LLM Engineer (híbrido: Full-stack Product Engineer)
**Score:** 3.6/5
**URL:** https://jobs.ashbyhq.com/continue/219fce3e-7af9-4b00-8fa7-87bf53db72f7
**Legitimacy:** High Confidence
**Location:** San Francisco, CA — On-site (new-grad, in-person implied)
**Region:** US
**PDF:** output/2026-05-26/cv-deepak-mallampati-continue-swe-newgrad-2026-05-26.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | Applied AI / LLM Engineer (híbrido full-stack product) |
| Domain | Developer tools / agentic coding (open-source AI code assistant) |
| Function | Build (product engineering) |
| Seniority | New grad / entry-level |
| Remote | San Francisco — on-site (new-grad role, in-person expected) |
| Team size | Startup pequeña (YC S23; producto OSS con 20k+ GitHub stars) |
| Comp | $100K – $150K + 0.1%–0.5% equity (declarado en el posting) |
| TL;DR | Ingeniero new-grad full-stack para construir features LLM en un IDE assistant open-source: autocomplete, chat, codebase retrieval y nuevas affordances de coding con LLMs. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Veredicto |
|---|---|---|
| Proficient en TypeScript, Node.js, React/Next.js | TypeScript + React listados en Skills; **Manga Lens** (Chrome extension Manifest V3, content scripts, service workers — TS); **Dream Decoder** (React/TypeScript/Vite/Tailwind full-stack) | ✅ Fuerte en TS/React; Node implícito vía extensión/full-stack |
| Track record de side projects | Manga Lens (shipped en Chrome Web Store), Agentic Pixel engine, Dream Decoder, Drowsiness Detection, Geospatial graph analysis | ✅ Muy fuerte — múltiples proyectos enviados |
| Interés en AI engineering / ML | RAG (~35% precision), agentic LLM workflows, structured outputs, eval pipelines, LangChain/LlamaIndex | ✅ Núcleo del perfil |
| Pensador algorítmico riguroso | Master's CS (Kent State); proyecto NetworkX (Dijkstra, betweenness centrality, Louvain, MST) | ✅ |
| Diseñar affordances de coding con LLMs a medida que emergen capacidades | Manga Lens integra 4 proveedores de visión AI (Claude/GPT-4o/Nano/Ollama) con payload handling por proveedor; orquestación LLM | ✅ Adyacente directo (tooling multi-LLM) |
| Experimentar y diseñar benchmarks para mejorar autocomplete y codebase retrieval | Retrieval precision ~35%, recursive semantic chunking, embeddings, eval pipelines, >90% grounding alignment | ✅ Transferencia directa (RAG retrieval → code retrieval) |
| Rol activo en comunidades GitHub/Discord | Producto OSS publicado (Manga Lens en Chrome Web Store con privacy policy, configs por dominio) | 🟡 Experiencia de shipping público; participación en comunidades por demostrar |

**Gaps y mitigación:**
1. **Next.js no explícito** (nice-to-have, no blocker). Mitigación: React + Vite + TS transfieren 1:1; ramp rápido. Frase para cover: "shipped production React/TS apps (Dream Decoder, Manga Lens); Next.js es un step adyacente".
2. **Dominio IDE/autocomplete** (no blocker). Mitigación: Manga Lens es una **browser extension** (arquitectura de plugin: content scripts, service workers, capture pipeline) — análogo cercano a una IDE extension.
3. **Codebase retrieval (código vs docs clínicos)** (no blocker). Mitigación: semantic chunking + embeddings + ANN search son agnósticos de dominio; el track record de retrieval precision aplica directo.

## C) Nivel y Estrategia

- **Nivel JD:** New grad / entry. **Nivel natural de Deepak:** recién egresado de Master's + 2.5 años aplicados → encaje natural, sin riesgo de over/under-leveling.
- **Vender sin mentir:** liderar con (a) productos **enviados** (Manga Lens en Chrome Web Store), (b) profundidad real en LLM/RAG poco común en new-grads, (c) rigor algorítmico (proyecto de grafos). Posicionar como "new-grad que ya shippeó tooling multi-LLM en producción".
- **Si downlevel:** no aplica — ya es rol entry. Enfocar negociación en equity y comp dentro de la banda declarada.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Banda declarada | $100K–$150K + 0.1%–0.5% equity | Job posting (Ashby) |
| Mercado new-grad SWE SF | ~$120K–$150K base (avg SWE startup ~$139K) | Wellfound hiring data 2026 |
| Demanda del rol | Alta — AI coding assistants es la categoría más caliente de YC 2026 (agentic AI) | YC / mercado |

La banda está alineada con mercado new-grad SF. Equity 0.1–0.5% es significativo para etapa temprana. No se inventan cifras: comp tomada del posting.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer building healthcare RAG..." | Abrir con "Full-stack AI engineer who ships LLM-powered developer tools" y mencionar Manga Lens (TS extension multi-LLM) + retrieval | Espeja el JD (TS/React + LLM affordances + retrieval) |
| 2 | Skills order | LLM/ML primero | Subir **TypeScript, React, Node** al frente de Languages & Frameworks | ATS + relevancia inmediata |
| 3 | Projects order | Manga Lens #1 ya | Mantener Manga Lens arriba; resaltar "Manifest V3, content scripts, service workers, multi-AI-provider" | Análogo de IDE extension |
| 4 | RAG bullet | Healthcare framing | Añadir frase de transferencia: "semantic chunking + embeddings retrieval (~35% precision) — directamente aplicable a codebase retrieval" | Conecta con "improve codebase retrieval" |
| 5 | LinkedIn headline | Applied AI | "AI Engineer • TypeScript/React + LLMs • Open-source dev tools" | Match con cultura OSS de Continue |

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Shippear producto multi-LLM | Manga Lens | Necesidad de traducción manga en tiempo real | Construir extension que integre varios proveedores AI | Manifest V3 + capture pipeline + 4 providers con payload handling por proveedor | Publicado en Chrome Web Store, cache 7-días, 29 sitios | Aprendí a aislar diferencias de proveedor detrás de una interfaz común — clave para "nuevas capabilities as they emerge" |
| 2 | Mejorar retrieval | RAG clínico | Retrieval impreciso en knowledge base | Subir precisión | Recursive semantic chunking + transformer embeddings | +35% precision, +90% grounding | Retrieval quality se gana en el chunking/eval, no solo el modelo — aplica a codebase retrieval |
| 3 | Diseñar benchmarks | Eval pipelines | Salidas inestables de agentes | Medir y estabilizar | Eval audit trails + grounding rules + thresholds | +25% estabilidad de respuesta | Sin benchmark no hay mejora reproducible — mentalidad para autocomplete benchmarks |
| 4 | Rigor algorítmico | Geospatial graph | Analizar red vial 20k nodos | Routing + community detection | Dijkstra + betweenness + Louvain + MST en NetworkX | ~30% menos runtime vía subgraph scoping | Elegir la estructura/algoritmo correcto domina el rendimiento |
| 5 | Iterar en detalles UX | Dream Decoder | Orquestación multimodal inconsistente | Mejorar alignment | Capas intermedias de structured prompt transformation | +30% alignment, +25-30% first-pass success | Los detalles de la capa de prompt mueven la aguja de la experiencia |

**Case study recomendado:** Manga Lens (browser extension multi-LLM enviada) — demuestra TS/React, arquitectura de plugin y orquestación multi-proveedor.
**Red-flag Q:** "¿Por qué new-grad con tanta profundidad LLM?" → "Hice un Master's mientras shippeaba proyectos AI reales; quiero construir tooling de developer a escala open-source."

## G) Posting Legitimacy

**Assessment: High Confidence**

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Freshness | Posting activo y recuperable vía Ashby API en tiempo real (no cache) | Positivo |
| Comp transparency | Banda salarial + equity declaradas explícitamente | Positivo |
| Description quality | Nombra tech específico (TS/Node/React/Next.js), responsabilidades concretas (autocomplete, codebase retrieval, comunidades) | Positivo |
| Producto real | Continue OSS, 20k+ GitHub stars, VSCode/JetBrains, YC S23 | Positivo |
| Hiring signals | Sin layoffs/hiring freeze encontrados; categoría AI coding en expansión | Neutral/Positivo |
| Reposting | No detectado en scan-history | Neutral |

**Context Notes:** Startup pequeña → JD relativamente conciso es normal. Rol new-grad on-site en SF: para F-1 OPT es **compatible** (empleo US-based); confirmar disposición de sponsorship a futuro durante el proceso.

## Keywords extraídas

TypeScript, Node.js, React, Next.js, LLM, autocomplete, codebase retrieval, RAG, embeddings, semantic retrieval, AI engineering, open-source, IDE extensions, benchmarks, evaluation pipelines, agentic, developer tools, prompt engineering, GitHub, Discord
