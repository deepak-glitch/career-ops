"""Move processed entries from Pendientes to Procesadas in both pipelines."""
import sys

US_PROC_NEW = [
    "- [x] #1032 | https://job-boards.greenhouse.io/defenseunicorns/jobs/5132886007 | Defense Unicorns | Forward Deployed AI Engineer | United States — Remote (US citizenship required) | 2.5/5 | PDF ❌",
    "- [x] #1033 | https://job-boards.greenhouse.io/alphafmcroles/jobs/8521640002 | Alpha Financial Markets Consulting | Forward Deployed Engineer (AI) | United States — EST hours | 3.0/5 | PDF ✅",
]
INTL_PROC_NEW = [
    "- [x] #1034 | https://job-boards.greenhouse.io/diligentcorporation/jobs/5829760004 | Diligent Corporation | Forward Deployed Engineer - Agentic AI | London, UK — Hybrid 50%+ on-site + ~80% on-site client | 3.5/5 | PDF ✅",
    "- [x] #1035 | https://lightbend.applytojob.com/apply/78DmzAw9p6/Forward-Deployed-Engineer-Europe | Akka (Lightbend) | Forward Deployed Engineer (Europe) | Germany — Remote | 2.7/5 | PDF ❌",
]

PENDIENTES_BLOCK_US = (
    "\n### 2026-05-30\n"
    "- [ ] https://job-boards.greenhouse.io/defenseunicorns/jobs/5132886007 | Defense Unicorns | Forward Deployed AI Engineer | United States — Remote (US citizenship required)\n"
    "- [ ] https://job-boards.greenhouse.io/alphafmcroles/jobs/8521640002 | Alpha Financial Markets Consulting | Forward Deployed Engineer (AI) | United States — EST hours\n"
)
PENDIENTES_BLOCK_INTL = (
    "\n### 2026-05-30\n"
    "- [ ] https://job-boards.greenhouse.io/diligentcorporation/jobs/5829760004 | Diligent Corporation | Forward Deployed Engineer - Agentic AI | London, UK — Hybrid 50%+ on-site (80% on-site at client)\n"
    "- [ ] https://lightbend.applytojob.com/apply/78DmzAw9p6/Forward-Deployed-Engineer-Europe | Akka (Lightbend) | Forward Deployed Engineer (Europe) | Germany — Remote\n"
)

def update(path, pendientes_block, new_procesadas_lines):
    with open(path, encoding="utf-8") as f:
        s = f.read()
    # Remove the pendientes block we added (its content, leaving "## Pendientes\n## Procesadas" again)
    if pendientes_block in s:
        s = s.replace(pendientes_block, "", 1)
    else:
        print(f"WARNING: pendientes block not found verbatim in {path}", file=sys.stderr)
    # Insert new procesadas entries under the existing "### 2026-05-30" heading in Procesadas
    proc_marker = "## Procesadas\n\n### 2026-05-30\n"
    if proc_marker in s:
        injection = proc_marker + "\n".join(new_procesadas_lines) + "\n"
        s = s.replace(proc_marker, injection, 1)
    else:
        # Try without blank line between Procesadas and date header
        alt = "## Procesadas\n### 2026-05-30\n"
        if alt in s:
            injection = alt + "\n".join(new_procesadas_lines) + "\n"
            s = s.replace(alt, injection, 1)
        else:
            print(f"ERROR: Procesadas 2026-05-30 marker not found in {path}", file=sys.stderr)
            sys.exit(1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(s)
    print(f"updated {path}")

update("data/pipeline.md", PENDIENTES_BLOCK_US, US_PROC_NEW)
update("data/intl/pipeline.md", PENDIENTES_BLOCK_INTL, INTL_PROC_NEW)
