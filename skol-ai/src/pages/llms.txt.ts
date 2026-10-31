/* llms.txt — povzetek strani za AI asistente (llmstxt.org). Generira se ob buildu.
   Statični del je spodaj; seznam člankov se bere iz content collection, zato nov
   članek samodejno pristane tukaj. Opis članka: frontmatter `llms`, sicer `description`. */
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const site = (context.site ?? new URL("https://skolailab.com")).origin;
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => a.data.pubDate.getTime() - b.data.pubDate.getTime(),
  );
  const blog = posts
    .map((p) => `- [${p.data.title}](${site}/blog/${p.id}/): ${p.data.llms ?? p.data.description}`)
    .join("\n");

  const body = `# SKOL AI

> SKOL AI je slovenski AI kreativni studio iz Trebnjega (Dolenjska), ki ga vodi Rok Skol. Gradi bliskovito hitre premium spletne strani, postavlja AI agente in avtomatizacije ter izvaja GEO (optimizacijo za AI iskalnike), da podjetja priporočijo ChatGPT, Gemini in Perplexity. Dela po vsej Sloveniji.

Vodja: Rok Skol. Sedež: Rimska cesta 28, 8210 Trebnje, Slovenija. Telefon: +386 31 295 869. Domena: ${site}

## Storitve

- [Premium spletne strani](${site}/spletne-strani/): Bliskovito hitre spletne strani po meri na sodobni statični arhitekturi (Astro), ki obiskovalca brez trenja spremenijo v kupca. Paketi: Express landing od 290 €, predstavitvena od 490 €, premium landing od 890 €, e-commerce od 1.890 €.
- [AI agenti & avtomatizacije](${site}/ai-agenti/): AI glasovni in chat agent, ki 24/7 sprejema klice, odgovarja na vprašanja in rezervira termine; avtomatizacije, ki odpravijo ročno delo. Postavitev od 690 €, mesečno od 99 €, avtomatizacija od 290 €.
- [GEO / AI vidnost](${site}/geo/): Generative Engine Optimization: da vas AI asistenti (ChatGPT, Gemini, Perplexity) najdejo, razumejo in priporočijo. Tehnični GEO temelj, jasna entiteta, citabilna vsebina, off-site prisotnost in merjenje omemb. Audit od 290 €, postavitev od 490 €, mesečno od 149 €.
- [Cenik](${site}/cenik/): Odprt cenik vseh storitev s spodnjimi mejami cen (spletne strani od 290 €, AI agenti od 690 € postavitve in 99 € mesečno, GEO od 290 €); od česa je cena odvisna, kaj je vključeno in kaj se dogovori posebej, ter pogosta vprašanja o plačilu, rokih, besedilih, domeni in gostovanju.

Poleg tega po meri izdeluje AI vizualije, video in oglasne kreative.

## Lokalno

- [Izdelava spletnih strani Novo mesto](${site}/izdelava-spletnih-strani-novo-mesto/): Spletne strani po meri za podjetja v Novem mestu in okolici. Zakaj se lokalno izplača, kaj dobiš, reference z Dolenjske, cene in odgovori na pogosta vprašanja.
- [Izdelava spletnih strani Trebnje](${site}/izdelava-spletnih-strani-trebnje/): Domači studio v Trebnjem. Spletne strani, AI agenti, avtomatizacije in GEO za lokalna podjetja; kako poteka sodelovanje, zadnji projekti, cene in pogosta vprašanja.

## Reference

- [Reference](${site}/reference/): Pregled projektov v živo (Solimat, Bar Bazenček) in vizualij po meri.
- [Solimat — celovita digitalna prenova](${site}/projekti/solimat/): Migracija z WordPressa na čisto statično infrastrukturo, lasten admin, dvojezičnost (SI/EN), tracking in pametni obrazci. Rezultat: 96/100 PageSpeed.
- [Bar Bazenček — nova spletna prisotnost](${site}/projekti/bar-bazencek/): Hitra in cenovno ugodna spletna stran za gostinski lokal: galerija, jedilnik, kontaktni obrazec.

## Blog

- [Blog](${site}/blog/): Vpogledi o AI spletnih straneh, agentih in GEO vidnosti. Praktični nasveti za mala podjetja.
${blog}

## Več

- [Manifest](${site}/manifest/): Drža studia: konec povprečnosti, estetika kot nepravična prednost.
- [Kontakt](${site}/kontakt/): Povpraševanje in stik. Odgovor v 24 urah.
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
