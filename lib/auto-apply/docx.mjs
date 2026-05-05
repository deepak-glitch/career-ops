// Minimal docx text extractor. Reads word/document.xml from a .docx (zip)
// and returns the visible text with paragraphs preserved.
import { execFileSync } from "node:child_process";

export function extractDocxText(filePath) {
  const xml = execFileSync("unzip", ["-p", filePath, "word/document.xml"], {
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  const out = [];
  const re =
    /<w:p[\s>]|<\/w:p>|<w:br[^>]*\/>|<w:tab[^>]*\/>|<w:t[^>]*>([^<]*)<\/w:t>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    if (m[0].startsWith("<w:p") && !m[0].startsWith("</w:p")) out.push("\n");
    else if (m[0].startsWith("</w:p>")) out.push("\n");
    else if (m[0].startsWith("<w:br")) out.push("\n");
    else if (m[0].startsWith("<w:tab")) out.push("\t");
    else if (m[1] !== undefined) out.push(decodeXmlEntities(m[1]));
  }
  return out.join("").replace(/\n{3,}/g, "\n\n").trim();
}

function decodeXmlEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}
