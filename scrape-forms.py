#!/usr/bin/env python3
"""scrape-forms.py — pre-scrape job application forms with Scrapling.

For every job in the career-ops pipeline, fetch the application page,
discover its form fields (labels, kinds, required, options for selects /
radios), and write a JSON schema file to data/auto-apply/forms/{slug}.json.

The follow-up step `prefill.mjs` reads these schemas, maps each field to
an answer using applicant + report context, and writes ready-to-use
answer files the extension consumes via the bridge.

Why Scrapling? Many portals (Workday, Greenhouse with embedded JD pages,
LinkedIn) ship forms behind anti-bot walls or JS-rendered shells.
StealthyFetcher (Camoufox-based) handles both transparently. We fall back
to plain Fetcher for static portals (Lever JD pages, simple Greenhouse).

Usage:
    source .venv/bin/activate
    python3 scrape-forms.py                  # all evaluated jobs
    python3 scrape-forms.py --portal lever   # one portal only
    python3 scrape-forms.py --max 20         # cap how many to scrape
    python3 scrape-forms.py --url <one-url>  # single URL
    python3 scrape-forms.py --force          # ignore cached schemas
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path
from typing import Any
from urllib.error import URLError
from urllib.request import Request, urlopen

PROJECT_ROOT = Path(__file__).resolve().parent
FORMS_DIR = PROJECT_ROOT / "data" / "auto-apply" / "forms"
BRIDGE = "http://127.0.0.1:7777"

# Portals that need full JS rendering before the form appears.
JS_PORTALS = {
    "ashby",         # SPA
    "workday",       # SPA + auth flow
    "smartrecruiters",
    "icims",
    "successfactors",
    "linkedin",
    "wellfound",
    "jobvite",
}
# Portals where Camoufox stealth helps avoid bot challenges.
STEALTH_PORTALS = {"greenhouse", "ashby", "lever", "workday", "linkedin"}

APPLY_BUTTON_TEXTS = [
    "Apply for this job",
    "Apply for this Job",
    "Apply for this position",
    "Apply Now",
    "Apply now",
    "Apply Online",
    "Easy Apply",
    "I'm interested",
    "Apply",
]


def fetch_jobs_from_bridge() -> list[dict[str, Any]]:
    try:
        with urlopen(f"{BRIDGE}/jobs", timeout=5) as r:
            data = json.load(r)
            return data.get("jobs", [])
    except URLError as e:
        print(f"bridge offline ({e}); falling back to applications.md", file=sys.stderr)
        return _fallback_jobs_from_tracker()


def _fallback_jobs_from_tracker() -> list[dict[str, Any]]:
    """If the bridge isn't running, parse data/applications.md ourselves."""
    tracker = PROJECT_ROOT / "data" / "applications.md"
    if not tracker.exists():
        return []
    out: list[dict[str, Any]] = []
    for line in tracker.read_text().splitlines():
        if not line.startswith("| "):
            continue
        cols = [c.strip() for c in line.split("|")]
        if len(cols) < 10 or cols[1] in ("#",) or cols[1].startswith("---"):
            continue
        if not re.match(r"(?i)evaluated", cols[6]):
            continue
        m = re.search(r"\(reports/([^)]+)\)", cols[8])
        if not m:
            continue
        report_file = m.group(1)
        report_path = PROJECT_ROOT / "reports" / report_file
        if not report_path.exists():
            continue
        url_m = re.search(r"\*\*URL:\*\*\s*(\S+)", report_path.read_text())
        if not url_m:
            continue
        slug_m = re.match(r"^\d+-(.+)-\d{4}-\d{2}-\d{2}\.md$", report_file)
        out.append({
            "num": int(cols[1]),
            "company": cols[3],
            "role": cols[4],
            "scoreLabel": cols[5],
            "score": float(cols[5].split("/")[0]) if "/" in cols[5] else None,
            "url": url_m.group(1),
            "slug": slug_m.group(1) if slug_m else None,
            "portal": detect_portal(url_m.group(1)),
        })
    return out


def detect_portal(url: str) -> str:
    if re.search(r"(?:^|\.)greenhouse\.io|gh_jid=", url): return "greenhouse"
    if re.search(r"jobs\.ashbyhq\.com|ashbyhq\.com", url): return "ashby"
    if re.search(r"jobs\.lever\.co|jobs\.eu\.lever\.co", url): return "lever"
    if re.search(r"\.myworkdayjobs\.com|workday\.com/.+/job", url): return "workday"
    if re.search(r"\.breezy\.hr", url): return "breezy"
    if re.search(r"smartrecruiters\.com", url): return "smartrecruiters"
    if re.search(r"workable\.com", url): return "workable"
    if re.search(r"\.icims\.com", url): return "icims"
    if re.search(r"taleo\.net", url): return "taleo"
    if re.search(r"jobvite\.com", url): return "jobvite"
    if re.search(r"bamboohr\.com|bamboohr\.co\.uk", url): return "bamboohr"
    if re.search(r"successfactors\.com|sapsf\.com", url): return "successfactors"
    if re.search(r"wellfound\.com|angel\.co", url): return "wellfound"
    if re.search(r"linkedin\.com/jobs|linkedin\.com/comm/jobs", url): return "linkedin"
    return "generic"


# --- field discovery via Scrapling --------------------------------------

def _label_for(node) -> str:
    """Best-effort label discovery for a field node."""
    raw_type = (node.attrib.get("type") or "").lower()
    is_group = raw_type in ("radio", "checkbox")
    if is_group:
        # Prefer fieldset > legend, then group container's heading.
        cur = node
        for _ in range(6):
            parent = cur.parent
            if parent is None:
                break
            if parent.tag == "fieldset":
                legend = parent.css(":scope > legend").first
                if legend is not None:
                    t = legend.text.clean()
                    if t:
                        return t
            cur = parent
    aria = node.attrib.get("aria-label")
    if aria:
        return aria.strip()
    labelledby = node.attrib.get("aria-labelledby")
    if labelledby:
        # Find any element by id and join its text.
        ids = labelledby.split()
        # Scrapling lets us query the parent doc via .below / .find.
        # Easier: walk up to root and query.
        root = node.find_ancestor(lambda x: x.tag == "html") or node
        parts = []
        for _id in ids:
            target = root.css(f'#{_id}').first
            if target is not None:
                parts.append(target.text.clean())
        joined = " ".join(p for p in parts if p).strip()
        if joined:
            return joined
    el_id = node.attrib.get("id", "")
    if el_id:
        root = node.find_ancestor(lambda x: x.tag == "html") or node
        # CSS-escape the id for the attribute selector.
        esc = el_id.replace('"', '\\"')
        lab = root.css(f'label[for="{esc}"]').first
        if lab is not None:
            t = lab.text.clean()
            if t:
                return t
    # Walk up: enclosing label, fieldset legend, sibling .label.
    cur = node
    for _ in range(6):
        parent = cur.parent
        if parent is None:
            break
        if parent.tag == "label":
            return parent.text.clean()
        legend = parent.css("legend").first
        if legend is not None:
            t = legend.text.clean()
            if t:
                return t
        sib = parent.css(":scope > label, :scope > .label").first
        if sib is not None:
            t = sib.text.clean()
            if t:
                return t
        cur = parent
    return (node.attrib.get("placeholder") or node.attrib.get("name") or "").strip()


def _field_kind(node) -> str:
    tag = node.tag.lower()
    if tag == "select":
        return "select"
    if tag == "textarea":
        return "textarea"
    raw = (node.attrib.get("type") or "text").lower()
    return {
        "text": "text", "email": "text", "tel": "text", "url": "text",
        "number": "text", "search": "text", "password": "text", "date": "date",
        "checkbox": "checkbox", "radio": "radio", "file": "file",
    }.get(raw, "text")


def _select_options(node) -> list[dict[str, str]]:
    out = []
    for opt in node.css("option"):
        out.append({
            "value": opt.attrib.get("value", "") or opt.text.clean(),
            "label": opt.text.clean(),
        })
    return out


def _radio_options(root, name: str) -> list[dict[str, str]]:
    out = []
    seen = set()
    for r in root.css(f'input[type="radio"][name="{name}"]'):
        v = r.attrib.get("value", "")
        if v in seen:
            continue
        seen.add(v)
        # Best-effort radio label.
        rid = r.attrib.get("id", "")
        label_text = ""
        if rid:
            esc = rid.replace('"', '\\"')
            lab = root.css(f'label[for="{esc}"]').first
            if lab is not None:
                label_text = lab.text.clean()
        if not label_text:
            parent = r.parent
            if parent is not None and parent.tag == "label":
                label_text = parent.text.clean()
        out.append({"value": v, "label": label_text or v})
    return out


def discover_form(page) -> list[dict[str, Any]]:
    """Walk every visible input/select/textarea on `page` (a Scrapling Selector)."""
    fields: list[dict[str, Any]] = []
    seen_groups: set[str] = set()
    seen_names: set[str] = set()
    for node in page.css("input, select, textarea"):
        tag = node.tag.lower()
        raw_type = (node.attrib.get("type") or tag).lower()
        if raw_type == "hidden":
            continue
        kind = _field_kind(node)
        name = node.attrib.get("name", "")
        if kind in ("radio", "checkbox") and name:
            gk = f"{kind}:{name}"
            if gk in seen_groups:
                continue
            seen_groups.add(gk)
        elif name and kind not in ("radio", "checkbox", "file"):
            # Greenhouse and other portals render mobile + desktop copies of
            # the same field side-by-side. Dedupe by name to keep the first
            # one (file inputs are sometimes legitimately duplicated for
            # primary + supplementary uploads, so leave them alone).
            if name in seen_names:
                continue
            seen_names.add(name)
        label = _label_for(node).replace("*", "").strip()
        field: dict[str, Any] = {
            "kind": kind,
            "label": label,
            "name": name,
            "id": node.attrib.get("id", ""),
            "required": (
                node.attrib.get("required") is not None
                or node.attrib.get("aria-required") == "true"
            ),
            "placeholder": node.attrib.get("placeholder", ""),
        }
        if kind == "select":
            field["options"] = _select_options(node)
        elif kind == "radio" and name:
            field["options"] = _radio_options(page, name)
        fields.append(field)
    return fields


# --- fetch -------------------------------------------------------------

def _stealthy_fetch(url: str, **kw):
    """Try StealthyFetcher (Camoufox); fall back to DynamicFetcher if Camoufox
    isn't installed. The user can `python3 -m camoufox fetch` later to enable
    full stealth."""
    from scrapling.fetchers import StealthyFetcher, DynamicFetcher
    try:
        return StealthyFetcher.fetch(url, **kw)
    except Exception as e:
        if "camoufox" in str(e).lower() or "403" in str(e):
            print(f"  [stealth unavailable: {e}] using DynamicFetcher")
            kw.pop("solve_cloudflare", None)
            return DynamicFetcher.fetch(url, **kw)
        raise


def fetch_page(url: str, portal: str):
    """Return a Scrapling Adaptor for the post-apply page (form visible).

    Strategy:
      1. JS-required portals → DynamicFetcher / StealthyFetcher.
      2. Static portals → plain Fetcher first (fast). On 403/429/503 or
         a too-empty response, fall back to a JS-rendering fetcher.
    """
    from scrapling.fetchers import Fetcher, DynamicFetcher

    if portal in JS_PORTALS:
        if portal in STEALTH_PORTALS:
            page = _stealthy_fetch(
                url, headless=True, network_idle=True, wait=2000,
                wait_selector="form, [data-automation-id]",
                solve_cloudflare=True,
            )
        else:
            page = DynamicFetcher.fetch(
                url, headless=True, network_idle=True, wait=2000,
                wait_selector="form",
            )
        if len(page.css("input, select, textarea")) < 3:
            page = _retry_with_apply_click(url, portal)
        return page

    # Static path: try plain HTTP first (fast, free).
    try:
        r = Fetcher.get(url, timeout=20)
        status = getattr(r, "status", 200)
        if status in (403, 429, 503):
            raise RuntimeError(f"http {status}")
        n_fields = len(r.css("input, select, textarea"))
        if n_fields < 3:
            raise RuntimeError(f"only {n_fields} fields, retrying with browser")
        return r
    except Exception as e:
        print(f"  [retry] {type(e).__name__}: {e} — falling back to DynamicFetcher")
        return DynamicFetcher.fetch(
            url, headless=True, network_idle=True, wait=2500,
        )


def _retry_with_apply_click(url: str, portal: str):
    def click_apply(page):
        for txt in APPLY_BUTTON_TEXTS:
            sel = page.locator(f"text={txt}").first
            try:
                if sel and sel.is_visible():
                    sel.click(timeout=3000)
                    page.wait_for_load_state("domcontentloaded")
                    page.wait_for_timeout(1500)
                    return
            except Exception:
                continue
    return _stealthy_fetch(
        url, headless=True, network_idle=True, wait=2500,
        page_action=click_apply, solve_cloudflare=True,
    )


# --- main loop ---------------------------------------------------------

def slug_for_url(url: str, fallback_slug: str | None) -> str:
    if fallback_slug:
        return fallback_slug
    # Synthesize a stable slug from host+path so we can save *something*.
    return re.sub(r"[^a-z0-9]+", "-", url.lower())[:80].strip("-")


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--portal")
    p.add_argument("--url")
    p.add_argument("--max", type=int, default=0)
    p.add_argument("--min-score", type=float, default=4.0)
    p.add_argument("--force", action="store_true")
    p.add_argument("--sleep", type=float, default=1.5,
                   help="seconds between requests (politeness)")
    args = p.parse_args()

    FORMS_DIR.mkdir(parents=True, exist_ok=True)

    if args.url:
        portal = detect_portal(args.url)
        jobs = [{
            "url": args.url, "portal": portal,
            "slug": None, "company": "?", "role": "?",
        }]
    else:
        jobs = fetch_jobs_from_bridge()
        if args.portal:
            jobs = [j for j in jobs if j.get("portal") == args.portal]
        jobs = [j for j in jobs if (j.get("score") or 0) >= args.min_score]
        if args.max:
            jobs = jobs[: args.max]

    if not jobs:
        print("no jobs to scrape")
        return 0

    ok = err = cached = 0
    for i, job in enumerate(jobs, 1):
        slug = slug_for_url(job["url"], job.get("slug"))
        out_path = FORMS_DIR / f"{slug}.json"
        if out_path.exists() and not args.force:
            cached += 1
            continue
        portal = job.get("portal") or detect_portal(job["url"])
        prefix = f"[{i}/{len(jobs)}]"
        print(f"{prefix} {portal:<14} {job.get('company','?'):<24} {job.get('role','?')[:50]}")
        try:
            page = fetch_page(job["url"], portal)
            fields = discover_form(page)
            payload = {
                "url": job["url"],
                "portal": portal,
                "company": job.get("company"),
                "role": job.get("role"),
                "slug": job.get("slug"),
                "scrapedAt": int(time.time()),
                "fieldCount": len(fields),
                "fields": fields,
            }
            out_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False))
            ok += 1
            print(f"  ✓ {len(fields)} fields → {out_path.relative_to(PROJECT_ROOT)}")
        except Exception as e:
            err += 1
            err_path = FORMS_DIR / f"{slug}.error.json"
            err_path.write_text(json.dumps({
                "url": job["url"], "portal": portal,
                "error": str(e), "scrapedAt": int(time.time()),
            }, indent=2))
            print(f"  ✗ {type(e).__name__}: {e}")
        time.sleep(args.sleep)

    print(f"\nscraped: {ok} ok · {cached} cached · {err} errors")
    return 0


if __name__ == "__main__":
    sys.exit(main())
