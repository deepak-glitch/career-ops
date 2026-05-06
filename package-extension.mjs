#!/usr/bin/env node
// package-extension: zip the extension/ folder into a distributable archive.
// Output: career-ops-auto-apply-extension-v{manifest.version}.zip in project root.
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const EXT_DIR = join(ROOT, "extension");
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
