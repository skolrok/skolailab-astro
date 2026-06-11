/* Pregled vseh internih povezav v zgrajeni strani (dist/).
   Zagon: node scripts/check-links.mjs   (po `npm run build`)
   Najde href-e, ki kažejo na pot, ki ne obstaja (mrtve povezave / napačni slugi). */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith(".html"));

// pot obstaja, če: dir/index.html, ali file.html, ali statična datoteka v dist
function routeExists(p) {
  const clean = p.replace(/[?#].*$/, "").replace(/\/$/, "");
  if (clean === "" || clean === "/") return existsSync(join(DIST, "index.html"));
  const rel = clean.replace(/^\//, "");
  return (
    existsSync(join(DIST, rel, "index.html")) ||
    existsSync(join(DIST, rel + ".html")) ||
    existsSync(join(DIST, rel)) // statične datoteke (og png, favicon…)
  );
}

const broken = new Map(); // link -> [strani]
let totalLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = "/" + relative(DIST, file).replace(/\\/g, "/").replace(/index\.html$/, "");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    // samo interne poti
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    totalLinks++;
    const pathOnly = href.replace(/[?#].*$/, "");
    if (pathOnly === "" || pathOnly === "/") continue; // homepage anchor
    if (!routeExists(pathOnly)) {
      if (!broken.has(href)) broken.set(href, new Set());
      broken.get(href).add(route);
    }
  }
}

console.log(`\nPregled povezav — ${htmlFiles.length} strani, ${totalLinks} internih href-ov\n${"=".repeat(54)}`);
if (broken.size === 0) {
  console.log("✓ Vse interne povezave kažejo na obstoječe poti.");
} else {
  const sorted = [...broken.entries()].sort();
  for (const [href, pages] of sorted) {
    console.log(`✗ ${href.padEnd(26)} ← ${[...pages].join(", ")}`);
  }
  console.log(`\n${broken.size} unikatnih mrtvih povezav (še nezgrajene poti).`);
}
