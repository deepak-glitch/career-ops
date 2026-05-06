#!/usr/bin/env node
// package-extension: rebuild the bundled data snapshot, then zip the
// extension/ folder into a distributable archive.
//
// Output: career-ops-auto-apply-extension-v{manifest.version}.zip in project root.
//
// Flags forwarded to bundle-data.mjs:
//   --min-score <N>   default 4.0
//   --max <N>
//   --all
//   --no-bundle       skip rebuilding extension/data (use whatever's there)
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const EXT_DIR = join(ROOT, "extension");

const argv = process.argv.slice(2);
const skipBundle = argv.includes("--no-bundle");
const bundleArgs = argv.filter((a) => a !== "--no-bundle");

if (!skipBundle) {
  console.log("→ rebuilding bundle (extension/data) ...");
  execFileSync("node", ["bundle-data.mjs", ...bundleArgs], { cwd: ROOT, stdio: "inherit" });
}

const manifest = JSON.parse(readFileSync(join(EXT_DIR, "manifest.json"), "utf8"));
const version = manifest.version;
const outName = `career-ops-auto-apply-extension-v${version}.zip`;
const outPath = join(ROOT, outName);

if (existsSync(outPath)) unlinkSync(outPath);

// Skip the test fixture in the packaged build; the user doesn't need it.
execFileSync(
  "zip",
  ["-r", outPath, "extension", "-x", "extension/test-fixture.html"],
  { cwd: ROOT, stdio: "inherit" }
);

console.log(`\n✓ packaged → ${outName}`);
