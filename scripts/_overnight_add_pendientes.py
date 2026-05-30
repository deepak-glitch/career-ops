import sys

us_block = (
    "\n### 2026-05-30\n"
    "- [ ] https://job-boards.greenhouse.io/defenseunicorns/jobs/5132886007 | Defense Unicorns | Forward Deployed AI Engineer | United States — Remote (US citizenship required)\n"
    "- [ ] https://job-boards.greenhouse.io/alphafmcroles/jobs/8521640002 | Alpha Financial Markets Consulting | Forward Deployed Engineer (AI) | United States — EST hours\n"
)

intl_block = (
    "\n### 2026-05-30\n"
    "- [ ] https://job-boards.greenhouse.io/diligentcorporation/jobs/5829760004 | Diligent Corporation | Forward Deployed Engineer - Agentic AI | London, UK — Hybrid 50%+ on-site (80% on-site at client)\n"
    "- [ ] https://lightbend.applytojob.com/apply/78DmzAw9p6/Forward-Deployed-Engineer-Europe | Akka (Lightbend) | Forward Deployed Engineer (Europe) | Germany — Remote\n"
)

def patch(path, block):
    with open(path, encoding="utf-8") as f:
        s = f.read()
    needle = "## Pendientes\n## Procesadas"
    repl = "## Pendientes\n" + block + "\n## Procesadas"
    if needle in s:
        s = s.replace(needle, repl, 1)
        with open(path, "w", encoding="utf-8") as f:
            f.write(s)
        print(f"patched {path}")
    else:
        print(f"needle not found in {path}", file=sys.stderr)
        sys.exit(1)

patch("data/pipeline.md", us_block)
patch("data/intl/pipeline.md", intl_block)

us_history = (
    "https://job-boards.greenhouse.io/defenseunicorns/jobs/5132886007\t2026-05-30\tWebSearch — L3 overnight 2026-05-30\tForward Deployed AI Engineer\tDefense Unicorns\tadded\n"
    "https://job-boards.greenhouse.io/alphafmcroles/jobs/8521640002\t2026-05-30\tWebSearch — L3 overnight 2026-05-30\tForward Deployed Engineer (AI)\tAlpha Financial Markets Consulting\tadded\n"
)
intl_history = (
    "https://job-boards.greenhouse.io/diligentcorporation/jobs/5829760004\t2026-05-30\tWebSearch — L3 overnight 2026-05-30\tForward Deployed Engineer - Agentic AI\tDiligent Corporation\tadded\n"
    "https://lightbend.applytojob.com/apply/78DmzAw9p6/Forward-Deployed-Engineer-Europe\t2026-05-30\tWebSearch — L3 overnight 2026-05-30\tForward Deployed Engineer (Europe)\tAkka (Lightbend)\tadded\n"
)
with open("data/scan-history.tsv", "a", encoding="utf-8") as f:
    f.write(us_history)
with open("data/intl/scan-history.tsv", "a", encoding="utf-8") as f:
    f.write(intl_history)
print("history appended")
