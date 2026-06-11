// Preveri vse JSON-LD bloke na vseh zgrajenih straneh (dist/**/*.html).
// Zagon: node scripts/verify-schema.mjs   (po `npm run build`)
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

const RX = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
const typesOf = (node) => {
  const items = node["@graph"] ? node["@graph"] : [node];
  return items.flatMap((it) => {
    const t = it["@type"];
    return Array.isArray(t) ? t : [t];
  });
};

let totalBlocks = 0;
let errors = 0;
const pages = htmlFiles(DIST).sort();

console.log(`\nJSON-LD preverjanje — ${pages.length} strani\n${"=".repeat(48)}`);

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const route = "/" + relative(DIST, file).replace(/\\/g, "/").replace(/index\.html$/, "");
  const blocks = [...html.matchAll(RX)];
  const types = [];
  let pageErr = 0;

  for (const [, raw] of blocks) {
    totalBlocks++;
    try {
      const json = JSON.parse(raw.trim());
      types.push(...typesOf(json).filter(Boolean));
    } catch (e) {
      pageErr++;
      errors++;
      console.log(`  ✗ ${route}  NEVELJAVEN JSON: ${e.message}`);
    }
  }

  const tag = pageErr ? "✗" : "✓";
  console.log(`${tag} ${route.padEnd(26)} ${blocks.length} blok(ov) · ${types.join(", ")}`);
}

console.log(`${"=".repeat(48)}`);
console.log(`Skupaj: ${pages.length} strani, ${totalBlocks} JSON-LD blokov, ${errors} napak.`);
process.exit(errors ? 1 : 0);
