/* =========================================================================
   SKOL AI — Podatki storitvenih podstrani (SSOT)
   Vir: content/subpages-copy.md. Cene `od €—` se zaklenejo ob launchu.
   ========================================================================= */

export interface ServicePackage {
  name: string;
  price: string; // npr. "od 690 €" ali "od 99 €/mes"
  note?: string; // drobna pojasnilna vrstica v kartici
  secondary?: boolean; // vizualno manjši/sekundarni paket (npr. Express)
}
export interface ServiceFaq {
  q: string;
  a: string;
}
export interface Service {
  slug: string;
  name: string; // ime storitve (Service.name, breadcrumb)
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  promise: string;
  tldr?: string; // direct-answer (GEO): 40–60 besed naravnost pod H1
  problem: string;
  solution: string;
  whatYouGet: string[];
  proof?: string; // opcijski "Naš dokaz" blok
  packages: ServicePackage[];
  faq: ServiceFaq[];
  cta: string;
}

export const services: Record<string, Service> = {
  "spletne-strani": {
    slug: "spletne-strani",
    name: "Premium spletne strani",
    metaTitle: "Izdelava premium spletnih strani | SKOL AI, Dolenjska",
    metaDescription:
      "Bliskovito hitre spletne strani po meri, ki obiskovalca spremenijo v kupca. Premium dizajn, AI in vibecoding. Sedež Trebnje, gradimo po vsej Sloveniji.",
    kicker: "[ Spletne strani ]",
    h1: "Spletne strani, ki obiskovalca spremenijo v kupca.",
    promise:
      "Premium izdelava spletnih strani za podjetja, ki nočejo še ene počasne, generične vizitke.",
    tldr:
      "Izdelujemo premium spletne strani po meri na sodobni statični arhitekturi (Astro): bliskovito hitre, brezhibne na mobilcu in optimizirane za Google in AI iskalnike. Premišljen UX vodi obiskovalca naravnost do dejanja — klic, povpraševanje ali nakup. Brez predlog, brez počasnega nalaganja, brez izgubljenih klikov.",
    problem:
      "Vaša trenutna stran je počasna in izgleda kot konkurenčna. Obiskovalec pride z oglasa, čaka, da se naloži, in odide. Vsak tak odhod je plačan klik v koš.",
    solution:
      "Gradimo bliskovito hitre strani na sodobni statični arhitekturi. Premišljen UX vodi obiskovalca naravnost do dejanja: klic, povpraševanje, nakup. Brez trenja, brez čakanja.",
    whatYouGet: [
      "Dizajn po meri, usklajen z znamko (nič predlog).",
      "Bliskovita hitrost in brezhibnost na mobilcu.",
      "Osnovni SEO in schema, da vas najdejo Google in AI asistenti.",
      "Pametni obrazci, ki povpraševanje pripeljejo naravnost do vas.",
      "Lasten sistem za urejanje vsebine, kjer je smiselno.",
    ],
    packages: [
      {
        name: "Express landing",
        price: "od 290 €",
        note: "Ena stran, naša predloga, hitra postavitev — brez custom dizajna.",
      },
      { name: "Predstavitvena", price: "od 490 €" },
      { name: "Landing / premium", price: "od 890 €" },
      { name: "E-commerce / po meri", price: "od 1.890 €" },
    ],
    faq: [
      {
        q: "Na kateri tehnologiji gradite?",
        a: "Na sodobni statični arhitekturi (Astro). Pomeni hitrost, varnost in dobro berljivost za Google in AI iskalnike.",
      },
      {
        q: "Lahko stran kasneje sam urejam?",
        a: "Kjer je smiselno, dobiš preprost admin za urejanje vsebine. Drugače poskrbim jaz.",
      },
      {
        q: "Koliko časa traja?",
        a: "Predstavitvena običajno en do dva tedna, večji projekti dlje.",
      },
    ],
    cta: "Naročite premium stran →",
  },

  "ai-agenti": {
    slug: "ai-agenti",
    name: "AI agenti & avtomatizacije",
    metaTitle: "AI agenti in avtomatizacije za podjetja | SKOL AI",
    metaDescription:
      "AI glasovni in chat agent, ki sprejema klice, rezervira termine in odgovarja 24/7. Avtomatizacije, ki odpravijo ročno delo. Trebnje, Slovenija.",
    kicker: "[ AI agenti & avtomatizacije ]",
    h1: "Asistent, ki nikoli ne spi.",
    promise:
      "AI agenti in avtomatizacije, ki odpravijo ročno delo in ujamejo vsako priložnost.",
    tldr:
      "AI agent sprejme klic ali sporočilo, odgovori na pogosta vprašanja in rezervira termin — 24/7, v slovenščini in z vašim tonom. Avtomatizacije povežejo vaša orodja, da prijave, ponudbe in follow-up tečejo sami od sebe. Nič zamujenih klicev, nič ročnega dela in nobena priložnost ne uide.",
    problem:
      "Zamujen klic je zamujena stranka. Medtem ko delate, telefon zvoni v prazno, sporočila čakajo, follow-up se ne zgodi. Ročno delo vas drži pri tleh.",
    solution:
      "AI agent sprejme klic ali sporočilo, odgovori na pogosta vprašanja in rezervira termin, 24/7. Avtomatizacije povežejo vaša orodja, da procesi tečejo sami, brez vašega vmešavanja.",
    whatYouGet: [
      "AI glasovni in chat agent z vašim tonom in informacijami o vašem poslu.",
      "Sprejem klicev, odgovore na pogosta vprašanja, rezervacije.",
      "Workflowi: prijava do CRM do samodejnega follow-upa.",
      "Avtomatski računi, ponudbe in prošnje za Google ocene po storitvi.",
      "Email in SMS sekvence.",
    ],
    packages: [
      { name: "AI agent — setup", price: "od 690 €" },
      { name: "AI agent — mesečno", price: "od 99 €/mes" },
      { name: "Avtomatizacija (workflow)", price: "od 290 €" },
    ],
    faq: [
      {
        q: "Ali agent govori slovensko?",
        a: "Da, naravno, z vašim tonom in podatki o vašem poslu.",
      },
      {
        q: "Se poveže z mojim koledarjem ali sistemom?",
        a: "Da, prek avtomatizacij ga povežemo z orodji, ki jih že uporabljate.",
      },
      {
        q: "Kaj če agent ne zna odgovoriti?",
        a: "Preda klic vam ali zabeleži povpraševanje, da stranke ne izgubite.",
      },
    ],
    cta: "Postavite svojega AI agenta →",
  },

  geo: {
    slug: "geo",
    name: "GEO / AI vidnost",
    metaTitle: "GEO optimizacija: da vas priporoči ChatGPT, Gemini, Perplexity | SKOL AI",
    metaDescription:
      "Generative Engine Optimization poskrbi, da vas AI asistenti najdejo, razumejo in priporočijo. Bodite vidni tam, kjer stranke že sprašujejo.",
    kicker: "[ GEO / AI vidnost ]",
    h1: "Da vas priporoči ChatGPT.",
    promise:
      "GEO (optimizacija za AI iskalnike) poskrbi, da vas umetna inteligenca najde, razume in priporoči.",
    tldr:
      "GEO (Generative Engine Optimization) poskrbi, da vas AI asistenti — ChatGPT, Gemini in Perplexity — najdejo, razumejo in priporočijo po imenu. S strukturiranimi podatki, jasno entiteto in citabilno vsebino postavimo temelj, da postanete odgovor, ko vaša stranka vpraša. Sorodno SEO-ju, a usmerjeno na AI odgovore.",
    problem:
      "Vaše stranke vse manj guglajo in vse več sprašujejo. „Kdo dela dobre spletne strani na Dolenjskem?“ danes vprašajo ChatGPT, Gemini ali Perplexity. Če vas AI ne pozna, vas ne priporoči. Nevidni ste v kanalu, ki raste najhitreje.",
    solution:
      "GEO optimizira vašo prisotnost za generativne iskalnike. Poskrbimo, da AI razume, kdo ste, kaj delate in zakaj ste pravi odgovor. Da vas asistent, ko nekdo vpraša, navede po imenu.",
    whatYouGet: [
      "Tehnični GEO temelj: strukturirani podatki (schema), llms.txt, dostop za AI robote, hitra in berljiva stran.",
      "Jasna entiteta: konsistentni podatki (ime, lokacija, storitve) po vsem spletu, da vas AI poveže kot eno znamko.",
      "Citabilna vsebina: jasni, dejstveni odgovori in FAQ, ki jih AI rad navaja.",
      "Off-site prisotnost: Google Business, imeniki, omembe in viri, ki jim AI zaupa.",
      "Merjenje: spremljamo, kje in kako vas AI omenja.",
    ],
    proof:
      "Tega ne pridigamo. Delamo na lastni strani. Ko nas LLM-ji začnejo navajati, je to živi dokaz, ki ga dobite tudi vi.",
    packages: [
      { name: "GEO audit", price: "od 290 €" },
      { name: "GEO postavitev", price: "od 490 €" },
      { name: "Mesečni GEO", price: "od 149 €/mes" },
    ],
    faq: [
      {
        q: "Kaj je GEO?",
        a: "Generative Engine Optimization: optimizacija, da vas priporočajo AI asistenti (ChatGPT, Gemini, Perplexity), podobno kot SEO za Google.",
      },
      {
        q: "Je to isto kot SEO?",
        a: "Sorodno, a drugačno. SEO cilja na Google rezultate, GEO na odgovore AI asistentov. Najmočnejše deluje skupaj.",
      },
      {
        q: "Kako merite uspeh?",
        a: "Spremljamo omembe in priporočila v AI odgovorih za vaše ključne poizvedbe.",
      },
    ],
    cta: "Postanite vidni za AI →",
  },
};

/* JSON-LD: Service + FAQPage + BreadcrumbList za posamezno storitev. */
export function serviceJsonLd(service: Service, siteUrl: string) {
  const url = `${siteUrl}/${service.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.name,
      url,
      description: service.metaDescription,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Slovenija" },
      audience: { "@type": "BusinessAudience", audienceType: "Mala in srednja podjetja" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domov", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: service.name, item: url },
      ],
    },
  ];
}
