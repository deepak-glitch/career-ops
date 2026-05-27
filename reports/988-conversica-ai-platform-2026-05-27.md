# Evaluación: Conversica — Software Engineer (AI Platform)

**Fecha:** 2026-05-27
**Arquetipo:** AI Platform / MLOps Engineer (híbrido Applied AI backend)
**Score:** 3.8/5
**URL:** https://jobs.lever.co/conversica/765d2754-a07a-4a83-8a9d-fc25b80d73c3
**Legitimacy:** High Confidence
**Location:** United States — Remote
**Region:** US
**PDF:** output/2026-05-27/cv-deepak-mallampati-conversica-ai-platform-2026-05-27.pdf

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | AI Platform / MLOps backend (build) con superficie Applied AI |
| Domain | Conversational AI platform (email/SMS/chat customer engagement) |
| Function | Build — backend services, APIs e infraestructura para sistemas AI en producción |
| Seniority | Early-career IC (explícitamente "early-career engineers are encouraged to apply") |
| Remote | Fully remote (United States) |
| Team size | No especificado; trabaja "closely with experienced engineers" |
| Comp | No publicada en JD; mercado $123–177K (ver Bloque D) |
| TL;DR | Backend engineer para la plataforma de AI conversacional de Conversica. Python + APIs + AWS + Postgres + sistemas distribuidos, con superficie LLM. Rol genuinamente early-career — uno de los pocos roles AI-backend que invita explícitamente a perfiles junior. |

## B) Match con CV

| Requisito del JD | Evidencia en CV | Veredicto |
|---|---|---|
| Python backend | "Python, FastAPI, Flask"; "Packaged ML/LLM inference as FastAPI/Flask RESTful services" | Strong |
| Backend services / APIs / distributed systems | FastAPI/Flask RESTful services, structured logging, load simulation (Progress Solutions); Flask API (Suvidha) | Strong |
| AWS / cloud-ready deployment | "Docker… cloud-ready deployment, observability/logging" | Adjacent (Docker fuerte; AWS no nombrado explícitamente) |
| PostgreSQL / relational data | "SQL (T-SQL, PostgreSQL, SQLite)"; Patient Records (SQLite relational, FKs, joins) | Strong |
| Interest in AI / ML / intelligent systems | RAG systems, agentic LLM workflows, predictive ML pipelines | Strong |
| LLM tooling | "LLM application development, RAG, structured outputs, prompt engineering"; LangChain/LlamaIndex | Strong |
| BS CS or equivalent | Master's — Kent State University | Exceeds |
| Conversational AI (email/SMS/chat) | Agentic LLM workflows multi-step + RAG document Q&A | Adjacent |

**Gaps y mitigación:**
1. **AWS no nombrado explícitamente en el CV.** Es nice-to-have, no hard blocker. Mitigación: el CV lista "cloud-ready deployment" + Docker + CI/CD (Jenkins); en cover letter mapear Docker/observability a despliegue AWS y mencionar disposición a profundizar en servicios AWS específicos (ECS, Lambda, RDS).
2. **Sin experiencia explícita en mensajería a escala (SMS/email pipelines).** Adyacente vía RAG/agentic message handling. Mitigación: enmarcar agentic LLM workflows (eligibility checks, care navigation) como manejo de conversaciones multi-turno estructuradas.
3. **Sistemas distribuidos a gran escala.** Deepak tiene servicios contenedorizados + load simulation, no Kafka/streaming a escala masiva. Mitigación: honesto como growth area; el rol es early-career y entrena en el job.

## C) Nivel y Estrategia

- **Nivel JD:** Early-career IC — sin piso de años, BS+interés en AI. **Nivel natural de Deepak:** Mid-junior (2.5 años) — *por encima* del piso del rol. Este es uno de los mejores ajustes de nivel en el pipeline reciente.
- **Vender sin mentir:** liderar con servicios FastAPI/Flask en producción (~30% menos defectos post-deploy) + Python backend + Postgres. Posicionar como "backend engineer que ya ha enviado servicios de inferencia LLM en producción", lo cual excede el bar early-career.
- **Si downlevelan:** no aplica — el rol ya es early-career; aceptar nivel de entrada con comp justa de mercado ($120K+) es razonable.

## D) Comp y Demanda

| Dato | Valor | Fuente |
|------|-------|--------|
| Banda SWE AI Platform Conversica (remote US) | $122,800–$177,100 | ZipRecruiter 2026 |
| Total comp medio Conversica | $152,538 (mediana); $160,800 (avg SWE) | Levels.fyi 2026 |
| Rango salarial general Conversica US | $72K–$203K (308 reportes) | Glassdoor feb 2026 |
| Demanda backend AI-platform early-career | Media-alta; pocos roles AI-backend invitan junior | Mercado |

JD no publica banda — pedir en first call. La banda de mercado ($123–177K) es sólida para un rol early-career remoto. Conversica es empresa establecida de AI conversacional (no pre-revenue), señal de estabilidad.

## E) Plan de Personalización

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "Applied AI engineer healthcare RAG" | "Backend AI engineer who ships production FastAPI/Flask LLM inference services" | Match al rol AI-platform backend |
| 2 | Skills order | LLM/GenAI primero | Python/FastAPI/APIs/AWS/PostgreSQL primero; LLM después | Espejo de prioridades del JD |
| 3 | Hero bullet | RAG precision | "FastAPI/Flask RESTful services, Docker, structured logging, ~30% fewer post-deploy defects" primero | Backend-services es el core del rol |
| 4 | Add line | — | "Cloud-ready containerized deployment; comfortable extending to AWS (ECS/Lambda/RDS)" | Cubrir gap AWS honestamente |
| 5 | Footer | "US-based, F-1 OPT" | "US-based, F-1 OPT, fully remote-ready" | Rol US-remote |

**Top 5 LinkedIn:** headline "Backend / AI Platform Engineer"; destacar FastAPI/Docker; añadir "conversational AI / LLM application development"; fijar Manga Lens + Dream Decoder como shipped products; activar "Open to remote US".

## F) Plan de Entrevistas

| # | Requisito del JD | Historia STAR+R | S | T | A | R | Reflection |
|---|-----------------|-----------------|---|---|---|---|------------|
| 1 | Build backend services / APIs | Progress Solutions inference services | Modelos ML/LLM necesitaban servir en producción | Empaquetar como servicios RESTful confiables | FastAPI/Flask + Docker + structured logging + load simulation | ~30% menos defectos post-deploy | Logging estructurado desde el día 1 ahorra debugging después |
| 2 | LLM-powered systems | Healthcare RAG | Recuperación de conocimiento clínico imprecisa | Subir precisión de retrieval | Recursive semantic chunking + transformer embeddings | ~35% mejor precisión, >90% grounding | Chunking semántico > fixed-size para retrieval |
| 3 | Conversational / multi-turn AI | Agentic LLM workflows | Consultas healthcare multi-paso | Estructurar razonamiento + tool discipline | Grounding rules + structured reasoning | ~25% más estabilidad de respuesta | Disciplina de herramientas reduce deriva en conversaciones largas |
| 4 | PostgreSQL / data layer | Patient Records app | CRUD healthcare relacional | Esquema normalizado + integridad | FKs, cascade deletes, LEFT JOIN + GROUP_CONCAT | Recuperación paciente+diagnóstico en una query | Modelar integridad referencial temprano evita data drift |
| 5 | Distributed / pipelines | EHR preprocessing pipelines | Datos EHR ruidosos | Subir confiabilidad de dataset | Pandas/NumPy pipelines + validación | >98% confiabilidad, ~40% menos inestabilidad downstream | Validación de datos es el cimiento del sistema |
| 6 | Early-career growth posture | Manga Lens (shipped solo) | Querer enviar un producto AI completo | Construir y publicar | MV3 + 4 AI vision providers + cache + 29 sites | Live en Chrome Web Store | Enviar solo enseña el stack completo rápido |

**Case study a liderar:** Progress Solutions inference services (FastAPI/Flask + Docker en producción) — es el artefacto más alineado con un rol AI-platform backend.

**Preguntas red-flag:**
- "¿Experiencia con AWS?" → "Docker + cloud-ready deployment + CI/CD; me adapto rápido a ECS/Lambda/RDS. Aquí está mi trabajo de servicios contenedorizados."
- "¿Por qué early-career si tienes 2.5 años?" → "Quiero profundizar en backend AI-platform a escala; este equipo y plataforma son el lugar correcto para crecer."

## G) Posting Legitimacy

**Assessment: High Confidence**

| Señal | Hallazgo | Peso |
|-------|----------|------|
| Posting Freshness | Lever job activo, página pública, Apply funcional | Positivo |
| Description Quality | Stack específico (Python, AWS, PostgreSQL, sistemas distribuidos, LLM tooling); scope claro; invitación explícita a early-career | Positivo |
| Hiring signals | Conversica empresa establecida de AI conversacional; sin layoffs recientes notorios en eng | Neutro-Positivo |
| Reposting Detection | Primera vez en scan-history.tsv | Neutro |
| Comp transparency | No publicada en JD; banda de mercado disponible vía ZipRecruiter/Levels | Neutro |

**Context Notes:** Conversica es un vendor real y consolidado de AI conversacional (no pre-revenue, no anónimo). El rol early-career con stack concreto y scope definido es una señal positiva de legitimidad. Banda no publicada es común y no concerning.

---

## Keywords extraídas

Software Engineer, AI Platform, Backend, Python, FastAPI, APIs, AWS, PostgreSQL, Distributed Systems, LLM, Conversational AI, Machine Learning, Production Systems, Remote US, Docker, Microservices, Early-Career, Infrastructure, Email/SMS/Chat, Customer Engagement
