# Modo: pdf — Generación de PDF ATS-Optimizado

> **Canonical resume-tailoring spec lives in this file.** Other modes
> (`batch/batch-prompt.md`, `modes/auto-pipeline.md`, `modes/overnight.md`,
> `modes/apply.md`, etc.) MUST defer to the spec below and never restate
> diverging rules. Edit the spec here, not anywhere else.

## Resume-Tailoring Spec (canonical)

Every tailored CV — interactive, auto-pipeline, batch, overnight — MUST follow
this spec. The spec drives both the per-job prompt and the HTML the agent emits
to `templates/cv-template.html` placeholders.

### 1. Section order (top → bottom)

1. **NAME** (header `<h1>`)
2. **CONTACT** (phone | email | linkedin | portfolio | location)
3. **PROFESSIONAL SUMMARY** — 3-4 lines, JD-keyword-dense
4. **SKILLS** — JD-aligned competency phrases first, then categorized skills
5. **PROFESSIONAL EXPERIENCE** — reverse-chronological
6. **PROJECTS** — reordered so the most JD-relevant project leads
7. **RESEARCH** — publications, papers, conference talks, peer-reviewed work.
   **Omit the entire section** (leave `{{SECTION_RESEARCH}}` and `{{RESEARCH}}`
   unfilled — `generate-pdf.mjs` strips empty section divs) if the source CV
   has no research. **Never fabricate research.**
8. **EDUCATION**
9. **CERTIFICATIONS** (optional — omit if none in source CV)

PROJECTS and RESEARCH are the strongest assets and must be surfaced — earlier
template versions sometimes dropped them. They are now first-class sections.

### 2. Keyword optimization (no stuffing)

- Extract **15-20 hard skills, tools, and role-specific terms** from the JD
  (frameworks, languages, domains, methodologies — not soft fluff).
- Surface a keyword ONLY where the candidate's real CV/article-digest content
  supports it. If real experience exists → use the JD's exact phrasing.
- If a required JD skill is **missing** from the source CV:
  - Add it to **SKILLS** only when it plausibly belongs to the candidate's
    stated stack (e.g. JD asks "Pinecone" and CV lists embeddings + vector
    search → Pinecone may belong in their stack adjacency). When in doubt, omit.
  - Never add it to Summary/Experience/Projects bullets.
- Distribute keywords: Summary (top 5), first bullet of each role, SKILLS
  section, project descriptions. No keyword walls.

### 3. Role alignment

- **Reorder PROJECTS** so the most JD-relevant projects lead (top 3-4 shown).
- **Reframe (never invent) experience bullets** to emphasize work that maps
  to the JD's top requirements. Move the most relevant bullet to position 1.
- Reuse JD vocabulary in bullets where it accurately describes real work
  (e.g. "LLM workflows with retrieval" → "RAG pipeline design and orchestration"
  when the JD asks for "RAG pipelines"). Do not reuse vocabulary that
  misrepresents what was actually done.

### 4. Voice & bullets

- Strong action verbs: **Built, Led, Optimized, Deployed, Reduced, Increased,
  Shipped, Designed, Architected, Automated, Scaled.** No "Responsible for…",
  "Helped with…", "Worked on…".
- Each bullet = **action + what + measurable outcome where one exists**.
- **Preserve existing metrics exactly.** Never invent or alter numbers, dates,
  titles, company names, or scope. If the CV says "~35%", the bullet says
  "~35%" — no rounding up, no precision change.
- **Max 4-6 bullets per role**, **1-3 bullets per project**.
- Active voice; present tense for current role, past tense for prior roles.

### 5. Dates & length

- Normalize all dates to `Mon YYYY - Mon YYYY` or `Mon YYYY - Present`
  (e.g. `Jul 2025 - Present`, `Jun 2022 - Apr 2023`). No `2025-07/present`,
  no `07/2025`.
- Total length: **~1-2 pages**. If overflowing 2 pages, drop the least
  JD-relevant project or trim bullets — never shrink fonts/margins.

### 6. Hard constraints

- **Do not fabricate** facts, metrics, projects, skills, dates, or titles.
  Missing info = leave out.
- **Preserve the output format and render pipeline.** Emit HTML into the
  `templates/cv-template.html` placeholders; `generate-pdf.mjs` renders it
  unchanged. Do not switch to Markdown, plain text, or a different template.
- Single column, no sidebars, no images-with-text, no tables-with-text,
  selectable UTF-8 text only.

## Pipeline completo

1. Lee `cv.md` como fuente de verdad (+ `article-digest.md` si existe).
2. Pide al usuario el JD si no está en contexto (texto o URL).
3. Extrae **15-20 keywords** del JD (frameworks, tools, domain terms).
4. Detecta idioma del JD → idioma del CV (EN default).
5. Detecta ubicación empresa → formato papel:
   - US/Canada → `letter`
   - Resto del mundo → `a4`
6. Detecta arquetipo del rol → adapta framing (per `modes/_profile.md`).
7. Reescribe Professional Summary inyectando keywords del JD + exit narrative
   bridge (3-4 lines).
8. Reordena PROJECTS por relevancia al JD; selecciona top 3-4.
9. Reordena bullets de experiencia por relevancia al JD (most-relevant first).
10. Construye competency list desde requisitos del JD (6-8 keyword phrases) →
    primer subbloque del SKILLS section.
11. Inyecta keywords naturalmente en logros existentes (**NUNCA inventa**).
12. Llena RESEARCH si el CV tiene publicaciones/papers reales; si no, deja
    `{{SECTION_RESEARCH}}` y `{{RESEARCH}}` sin sustituir — `generate-pdf.mjs`
    elimina el div vacío.
13. Genera HTML completo desde `templates/cv-template.html` + contenido
    personalizado.
14. Lee `name` de `config/profile.yml` → normaliza a kebab-case lowercase
    (e.g. "John Doe" → "john-doe") → `{candidate}`.
15. Escribe HTML a `/tmp/cv-{candidate}-{company}.html`.
16. Ejecuta:
    `node generate-pdf.mjs /tmp/cv-{candidate}-{company}.html output/cv-{candidate}-{company}-{YYYY-MM-DD}.pdf --format={letter|a4}`
17. Reporta: ruta del PDF, nº páginas, % cobertura de keywords.

## Reglas ATS (parseo limpio)

- Layout single-column (sin sidebars, sin columnas paralelas).
- Headers estándar (en EN): **"Professional Summary", "Skills",
  "Professional Experience", "Projects", "Research", "Education",
  "Certifications"** — en este orden.
- Sin texto en imágenes/SVGs.
- Sin info crítica en headers/footers del PDF (ATS los ignora).
- UTF-8, texto seleccionable (no rasterizado).
- Sin tablas anidadas.
- Keywords del JD distribuidas: Summary (top 5), primer bullet de cada rol,
  SKILLS section, project descriptions.

## Diseño del PDF

- **Fonts**: Space Grotesk (headings, 600-700) + DM Sans (body, 400-500)
- **Fonts self-hosted**: `fonts/`
- **Header**: nombre en Space Grotesk 24px bold + línea gradiente `linear-gradient(to right, hsl(187,74%,32%), hsl(270,70%,45%))` 2px + fila de contacto
- **Section headers**: Space Grotesk 13px, uppercase, letter-spacing 0.05em, color cyan primary
- **Body**: DM Sans 11px, line-height 1.5
- **Company names**: color accent purple `hsl(270,70%,45%)`
- **Márgenes**: 0.6in
- **Background**: blanco puro

## Orden de secciones (per the Resume-Tailoring Spec above)

1. Header (NAME + CONTACT row)
2. Professional Summary (3-4 lines, keyword-dense)
3. **SKILLS** — 6-8 JD-aligned competency phrases inline, then categorized skills
4. Professional Experience (reverse-chronological)
5. Projects (top 3-4, JD-reordered)
6. **Research** (only if source CV has publications — otherwise omitted)
7. Education
8. Certifications (optional)

## Estrategia de keyword injection (ético, basado en verdad)

Ejemplos de reformulación legítima:
- JD dice "RAG pipelines" y CV dice "LLM workflows with retrieval" → cambiar a "RAG pipeline design and LLM orchestration workflows"
- JD dice "MLOps" y CV dice "observability, evals, error handling" → cambiar a "MLOps and observability: evals, error handling, cost monitoring"
- JD dice "stakeholder management" y CV dice "collaborated with team" → cambiar a "stakeholder management across engineering, operations, and business"

**NUNCA añadir skills que el candidato no tiene. Solo reformular experiencia real con el vocabulario exacto del JD.**

## Template HTML

Usar el template en `cv-template.html`. Reemplazar los placeholders `{{...}}` con contenido personalizado:

| Placeholder | Contenido |
|-------------|-----------|
| `{{LANG}}` | `en` o `es` |
| `{{PAGE_WIDTH}}` | `8.5in` (letter) o `210mm` (A4) |
| `{{NAME}}` | (from profile.yml) |
| `{{PHONE}}` | (from profile.yml — include with its separator only when `profile.yml` has a non-empty `phone` value; omit both `<span>` and `<span class="separator">` otherwise) |
| `{{EMAIL}}` | (from profile.yml) |
| `{{LINKEDIN_URL}}` | [from profile.yml] |
| `{{LINKEDIN_DISPLAY}}` | [from profile.yml] |
| `{{PORTFOLIO_URL}}` | [from profile.yml] (o /es según idioma) |
| `{{PORTFOLIO_DISPLAY}}` | [from profile.yml] (o /es según idioma) |
| `{{LOCATION}}` | [from profile.yml] |
| `{{SECTION_SUMMARY}}` | Professional Summary / Resumen Profesional |
| `{{SUMMARY_TEXT}}` | Summary personalizado con keywords (3-4 líneas) |
| `{{SECTION_SKILLS}}` | Skills / Competencias |
| `{{COMPETENCIES}}` | 6-8 JD-aligned competency phrases as `<span class="competency-tag">keyword</span>` (rendered inline at top of SKILLS section) |
| `{{SKILLS}}` | HTML de skills categorizados (Languages, ML, Infra, Domains…) |
| `{{SECTION_EXPERIENCE}}` | Professional Experience / Experiencia Profesional |
| `{{EXPERIENCE}}` | HTML de cada rol con bullets reordenados (4-6/rol) |
| `{{SECTION_PROJECTS}}` | Projects / Proyectos |
| `{{PROJECTS}}` | HTML de top 3-4 proyectos JD-reordenados (1-3 bullets c/u) |
| `{{SECTION_RESEARCH}}` | Research / Investigación — **leave unfilled when source CV has no research** (`generate-pdf.mjs` strips the empty section) |
| `{{RESEARCH}}` | HTML de publicaciones/papers/conferences. Leave unfilled to omit. |
| `{{SECTION_EDUCATION}}` | Education / Formación |
| `{{EDUCATION}}` | HTML de educación |
| `{{SECTION_CERTIFICATIONS}}` | Certifications / Certificaciones — leave unfilled to omit |
| `{{CERTIFICATIONS}}` | HTML de certificaciones. Leave unfilled to omit. |

## Canva CV Generation (optional)

If `config/profile.yml` has `canva_resume_design_id` set, offer the user a choice before generating:
- **"HTML/PDF (fast, ATS-optimized)"** — existing flow above
- **"Canva CV (visual, design-preserving)"** — new flow below

If the user has no `canva_resume_design_id`, skip this prompt and use the HTML/PDF flow.

### Canva workflow

#### Step 1 — Duplicate the base design

a. `export-design` the base design (using `canva_resume_design_id`) as PDF → get download URL
b. `import-design-from-url` using that download URL → creates a new editable design (the duplicate)
c. Note the new `design_id` for the duplicate

#### Step 2 — Read the design structure

a. `get-design-content` on the new design → returns all text elements (richtexts) with their content
b. Map text elements to CV sections by content matching:
   - Look for the candidate's name → header section
   - Look for "Summary" or "Professional Summary" → summary section
   - Look for company names from cv.md → experience sections
   - Look for degree/school names → education section
   - Look for skill keywords → skills section
c. If mapping fails, show the user what was found and ask for guidance

#### Step 3 — Generate tailored content

Same content generation as the HTML flow (Steps 1-11 above):
- Rewrite Professional Summary with JD keywords + exit narrative
- Reorder experience bullets by JD relevance
- Select top competencies from JD requirements
- Inject keywords naturally (NEVER invent)

**IMPORTANT — Character budget rule:** Each replacement text MUST be approximately the same length as the original text it replaces (within ±15% character count). If tailored content is longer, condense it. The Canva design has fixed-size text boxes — longer text causes overlapping with adjacent elements. Count the characters in each original element from Step 2 and enforce this budget when generating replacements.

#### Step 4 — Apply edits

a. `start-editing-transaction` on the duplicate design
b. `perform-editing-operations` with `find_and_replace_text` for each section:
   - Replace summary text with tailored summary
   - Replace each experience bullet with reordered/rewritten bullets
   - Replace competency/skills text with JD-matched terms
   - Replace project descriptions with top relevant projects
c. **Reflow layout after text replacement:**
   After applying all text replacements, the text boxes auto-resize but neighboring elements stay in place. This causes uneven spacing between work experience sections. Fix this:
   1. Read the updated element positions and dimensions from the `perform-editing-operations` response
   2. For each work experience section (top to bottom), calculate where the bullets text box ends: `end_y = top + height`
   3. The next section's header should start at `end_y + consistent_gap` (use the original gap from the template, typically ~30px)
   4. Use `position_element` to move the next section's date, company name, role title, and bullets elements to maintain even spacing
   5. Repeat for all work experience sections
d. **Verify layout before commit:**
   - `get-design-thumbnail` with the transaction_id and page_index=1
   - Visually inspect the thumbnail for: text overlapping, uneven spacing, text cut off, text too small
   - If issues remain, adjust with `position_element`, `resize_element`, or `format_text`
   - Repeat until layout is clean
d. Show the user the final preview and ask for approval
e. `commit-editing-transaction` to save (ONLY after user approval)

#### Step 5 — Export and download PDF

a. `export-design` the duplicate as PDF (format: a4 or letter based on JD location)
b. **IMMEDIATELY** download the PDF using Bash:
   ```bash
   curl -sL -o "output/cv-{candidate}-{company}-canva-{YYYY-MM-DD}.pdf" "{download_url}"
   ```
   The export URL is a pre-signed S3 link that expires in ~2 hours. Download it right away.
c. Verify the download:
   ```bash
   file output/cv-{candidate}-{company}-canva-{YYYY-MM-DD}.pdf
   ```
   Must show "PDF document". If it shows XML or HTML, the URL expired — re-export and retry.
d. Report: PDF path, file size, Canva design URL (for manual tweaking)

#### Error handling

- If `import-design-from-url` fails → fall back to HTML/PDF pipeline with message
- If text elements can't be mapped → warn user, show what was found, ask for manual mapping
- If `find_and_replace_text` finds no matches → try broader substring matching
- Always provide the Canva design URL so the user can edit manually if auto-edit fails

## Post-generación

Actualizar tracker si la oferta ya está registrada: cambiar PDF de ❌ a ✅.
