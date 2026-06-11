/* =========================================================================
   SKOL AI — Podatki storitvenih podstrani (SSOT)
   Vir: content/subpages-copy.md. Cene `od €—` se zaklenejo ob launchu.
   ========================================================================= */

export interface ServicePackage {
  name: string;
  price: string; // npr. "od €—" ali "mesečno od €—"
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
  problem: string;
  solution: string;
  whatYouGet: string[];
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
      { name: "Predstavitvena", price: "od €—" },
      { name: "Landing / premium", price: "od €—" },
      { name: "E-commerce / po meri", price: "od €—" },
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
      { name: "AI agent — setup", price: "od €—" },
      { name: "AI agent — mesečno", price: "od €—" },
      { name: "Avtomatizacije", price: "od €—" },
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

  "ai-fotografija": {
    slug: "ai-fotografija",
    name: "AI fotografija & stock po meri",
    metaTitle: "AI fotografija in stock po meri | SKOL AI",
    metaDescription:
      "100 % unikatne, hiper-realistične vizualije za vašo znamko. Brez fotografa, brez studia, brez stock klišejev. Za splet, oglase in tisk.",
    kicker: "[ AI fotografija & stock ]",
    h1: "Vizualije, ki ne obstajajo nikjer drugje.",
    promise: "AI fotografija in stock po meri, narejena samo za vašo znamko.",
    problem:
      "Vaša stran izgleda enako kot konkurenčna, ker kupujete iste fotografije na istih stock portalih. Vsi vidijo iste obraze, iste pisarne, iste nasmehe.",
    solution:
      "Zgeneriramo serijo 100 % unikatnih, hiper-realističnih vizualij po meri vaše znamke. Brez fotografa, brez studia, brez ponavljanja. Osebno, prilagojeno, brez stroškov klasične produkcije.",
    whatYouGet: [
      "Brand in produktni shoti po meri.",
      "Serija unikatnih slik za splet, družbena omrežja in tisk.",
      "Enoten vizualni koncept, ki ga prepozna vsak, kdor vidi vašo znamko.",
      "Polna komercialna uporaba.",
    ],
    packages: [
      { name: "Brand & produktni shoti", price: "od €—" },
      { name: "Stock paket po meri", price: "od €—" },
      { name: "Vizualni koncept", price: "od €—" },
    ],
    faq: [
      {
        q: "So slike pravno moje?",
        a: "Da, v polno komercialno uporabo, brez mesečnih licenčnin.",
      },
      {
        q: "Lahko slike ujamejo moj produkt natančno?",
        a: "Da, delamo po vaših referencah, dokler ni ujeto.",
      },
      {
        q: "Kje jih lahko uporabim?",
        a: "Povsod: splet, oglasi, družbena omrežja, tisk.",
      },
    ],
    cta: "Naročite vizualije po meri →",
  },

  "oglasne-kreative": {
    slug: "oglasne-kreative",
    name: "High-performance oglasne kreative",
    metaTitle: "High-performance oglasne kreative | SKOL AI",
    metaDescription:
      "Scroll-stopping vizualije in video za Meta in Google oglase. Narejene za A/B testiranje in nižjo ceno klika.",
    kicker: "[ Oglasne kreative ]",
    h1: "Estetika, ki ustavi palec.",
    promise:
      "Oglasne kreative z enim ciljem: ustaviti drsenje in znižati ceno klika.",
    problem:
      "Vaši Facebook in Instagram oglasi se izgubijo v morju povprečnosti. Ljudje jih prelistajo, vaš proračun pa izgine v prazno.",
    solution:
      "Ustvarjamo agresivno, scroll-stopping estetiko, narejeno za A/B testiranje. Več variant, da najdemo zmagovalca. Ustavimo drsenje in znižamo ceno vašega klika.",
    whatYouGet: [
      "Scroll-stopping ad variante (statika) za Meta in Google.",
      "Kratki ad video in motion za FB, Instagram, YouTube.",
      "Več variant za A/B testiranje.",
      "Mesečni creative paket, da oglasi ne izgorijo.",
    ],
    packages: [
      { name: "Ad variante (statika)", price: "od €—" },
      { name: "Ad video / motion", price: "od €—" },
      { name: "Creative paket", price: "mesečno od €—" },
    ],
    faq: [
      {
        q: "Koliko variant dobim?",
        a: "Odvisno od paketa, vedno dovolj za pošteno A/B testiranje.",
      },
      {
        q: "Delate tudi video?",
        a: "Da, kratke dinamične oglase za vse platforme.",
      },
      {
        q: "Pomagate pri postavitvi oglasov?",
        a: "Lahko, ali pa dostavimo kreative, ki jih vaš oglaševalec uporabi.",
      },
    ],
    cta: "Dvignite svoje oglase →",
  },

  "virtualni-vplivnezi": {
    slug: "virtualni-vplivnezi",
    name: "Virtualni vplivneži & AI modeli",
    metaTitle: "Virtualni vplivneži in AI modeli za znamke | SKOL AI",
    metaDescription:
      "Zgradimo popolnega digitalnega ambasadorja vaše znamke. 24/7 prisoten, popolnoma konsistenten, brez dram.",
    kicker: "[ Virtualni vplivneži ]",
    h1: "Obraz vaše znamke, ki nikoli ne odpove.",
    promise: "Virtualni vplivnež ali AI model, zgrajen samo za vašo znamko.",
    problem:
      "Klasični vplivneži so dragi, nezanesljivi in lahko z enim spodrsljajem uničijo vaš ugled. Vaša znamka je talec njihovih muh.",
    solution:
      "Zgradimo edinstven digitalni obraz znamke. 100 % vaš, brez tveganja za ugled. Predstavlja točno to, kar želite, kjer želite, brez nehanja.",
    whatYouGet: [
      "Edinstven AI persona ali model.",
      "UGC-stil vsebina brez snemanja.",
      "Mesečni paket objav z vašim ambasadorjem.",
      "Popolna konsistentnost in nadzor nad sporočilom.",
    ],
    packages: [
      { name: "AI persona / model", price: "od €—" },
      { name: "UGC-stil vsebina", price: "od €—" },
      { name: "Mesečni paket vsebine", price: "mesečno od €—" },
    ],
    faq: [
      {
        q: "Je videti realistično?",
        a: "Da, hiper-realistično, prilagojeno tonu vaše znamke.",
      },
      {
        q: "Imam popoln nadzor?",
        a: "Da, model je vaš in predstavlja točno to, kar določite.",
      },
      {
        q: "Kako pogosto dobim vsebino?",
        a: "Po mesečnem paketu, z rednim dotokom objav.",
      },
    ],
    cta: "Ustvarite svojega ambasadorja →",
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
