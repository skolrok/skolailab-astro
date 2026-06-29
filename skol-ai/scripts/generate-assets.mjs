/* =========================================================================
   SKOL AI — generator statičnih assetov (OG slike + favicon PNG-ji)
   Zagon: node scripts/generate-assets.mjs   (zapiše v public/)
   Uporablja sharp (rasterizira SVG -> PNG). Fraunces nadomesti Georgia serif
   v OG karticah (social preview; barve/postavitev znamke ostanejo).
   ========================================================================= */
import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(ROOT, "public");
const OG = join(PUB, "og");
mkdirSync(OG, { recursive: true });

const INK = "#0B0A09";
const INK2 = "#141210";
const BONE = "#EDE8DF";
const DIM = "#8A867E";
const GOLD = "#C8A96E";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Segoe UI', Arial, sans-serif";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// preprost word-wrap v vrstice (po približnem številu znakov)
function wrap(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines;
}

function ogSvg({ eyebrow, title }) {
  const lines = wrap(title, 24);
  const fs = lines.length > 3 ? 64 : 78;
  const lh = fs * 1.08;
  const blockH = lines.length * lh;
  const centerY = 330;
  const firstBaseline = centerY - blockH / 2 + fs * 0.78; // baseline prve vrstice
  const eyebrowY = centerY - blockH / 2 - 30; // kicker nad naslovom

  const tspans = lines
    .map((l, i) => {
      const y = Math.round(firstBaseline + i * lh);
      return `<text x="90" y="${y}" font-family="${SERIF}" font-weight="600" font-size="${fs}" fill="${BONE}">${esc(l)}</text>`;
    })
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="18%" cy="0%" r="80%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.10"/>
      <stop offset="55%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="${GOLD}" stroke-opacity="0.18"/>

  <text x="90" y="118" font-family="${SERIF}" font-weight="600" font-size="40" fill="${BONE}">SKOL<tspan fill="${GOLD}"> AI</tspan></text>

  <text x="92" y="${Math.round(eyebrowY)}" font-family="${SANS}" font-weight="600" font-size="22" letter-spacing="6" fill="${GOLD}">${esc("[ " + eyebrow.toUpperCase() + " ]")}</text>

  ${tspans}

  <line x1="90" y1="540" x2="1110" y2="540" stroke="${GOLD}" stroke-opacity="0.18"/>
  <text x="90" y="585" font-family="${SANS}" font-weight="600" font-size="22" letter-spacing="3" fill="${DIM}">skolailab.com</text>
  <text x="1110" y="585" text-anchor="end" font-family="${SANS}" font-size="22" letter-spacing="2" fill="${DIM}">Trebnje · Slovenija</text>
</svg>`;
}

function faviconSvg(size, letter = "S") {
  const r = Math.round(size * 0.22);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${INK}"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" fill="none" stroke="${GOLD}" stroke-opacity="0.25"/>
  <text x="32" y="45" text-anchor="middle" font-family="${SERIF}" font-weight="600" font-size="40" fill="${GOLD}">${letter}</text>
</svg>`;
}

// ---- OG strani (route -> datoteka) ----
const ogPages = [
  { file: "default", eyebrow: "AI kreativni studio · Trebnje", title: "Estetika kot nepravična prednost." },
  { file: "spletne-strani", eyebrow: "Storitev", title: "Spletne strani, ki obiskovalca spremenijo v kupca." },
  { file: "ai-agenti", eyebrow: "Storitev", title: "Asistent, ki nikoli ne spi." },
  { file: "geo", eyebrow: "GEO / AI vidnost", title: "Da vas priporoči ChatGPT." },
  { file: "reference", eyebrow: "Reference", title: "Kjer povprečje umre." },
  { file: "projekti-solimat", eyebrow: "Projekt", title: "Solimat. Celovita digitalna prenova." },
  { file: "projekti-bar-bazencek", eyebrow: "Projekt", title: "Bar Bazenček. Nova spletna prisotnost." },
  { file: "manifest", eyebrow: "Manifest", title: "Konec povprečnosti." },
  { file: "kontakt", eyebrow: "Kontakt", title: "Povej, kaj gradiš." },
  { file: "zasebnost", eyebrow: "Pravno", title: "Politika zasebnosti." },
  { file: "piskotki", eyebrow: "Pravno", title: "Politika piškotkov." },
  { file: "404", eyebrow: "404", title: "Stran ne obstaja." },
];

let n = 0;
for (const p of ogPages) {
  const png = await sharp(Buffer.from(ogSvg(p))).png().toBuffer();
  writeFileSync(join(OG, `${p.file}.png`), png);
  n++;
}

// ---- favicon PNG-ji + apple-touch ----
const icons = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
];
for (const ic of icons) {
  const png = await sharp(Buffer.from(faviconSvg(64)))
    .resize(ic.size, ic.size)
    .png()
    .toBuffer();
  writeFileSync(join(PUB, ic.name), png);
}

console.log(`OG slik: ${n} · favicon PNG: ${icons.length}  -> public/og/, public/`);
