/* =========================================================================
   SKOL AI — Case studies (SSOT). Vir: content/showroom-and-cases.md
   ========================================================================= */

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  teaser: string; // kratka vrstica za showroom kartico
  tags: string[];
  challenge: string;
  approach: string;
  built: string[];
  result: string;
  liveLabel: string;
  liveUrl: string;
  featured?: boolean;
  image?: string; // Cloudinary public id (pot za /upload/, brez f_auto,q_auto)
  imageAlt?: string;
  screenshot?: string; // Cloudinary public id screenshota žive strani (za BrowserFrame)
}

export const cases: Record<string, CaseStudy> = {
  solimat: {
    slug: "solimat",
    name: "Solimat",
    category: "Celovita digitalna prenova",
    metaTitle: "Solimat: celovita prenova spletne strani | SKOL AI",
    metaDescription:
      "Kako sem počasno, polovično delujočo stran spremenil v hitro, zanesljivo in dvojezično prodajno orodje. Case study SKOL AI.",
    h1: "Solimat. Celovita digitalna prenova.",
    teaser:
      "Migracija s počasne strani na čisto, statično in bliskovito hitro dvojezično prodajno orodje.",
    tags: ["UI/UX dizajn", "Avtomatizacija", "Premium web"],
    challenge:
      "Stara stran je bila počasna in marsikaj na njej ni delalo. Zastarela osnova, ki je obiskovalca ovirala namesto vodila do povpraševanja.",
    approach:
      "Namesto krpanja sem zgradil od tal. Migracija na čisto, statično in bliskovito hitro arhitekturo, z lastnim sistemom za vsebino.",
    built: [
      "Hitra statična stran.",
      "Lasten admin za produkte in vsebino, brez WordPress kompleksnosti.",
      "Dvojezičnost SI in EN.",
      "Napredni tracking in schema.",
      "Pametni obrazci, ki obiskovalca pripeljejo do povpraševanja.",
      "Optimizirane slike prek Cloudinarja.",
    ],
    result:
      "Iz počasne, polovično delujoče strani v hitro, zanesljivo in dvojezično prodajno orodje. Vse, kar prej ni delalo, zdaj dela. In nalaga se bliskovito.",
    liveLabel: "solimat.si",
    liveUrl: "https://solimat.si",
    featured: true,
    image: "v1776931870/solimat-mockup-skolai.webp",
    imageAlt: "Mockup prenovljene spletne strani Solimat",
    screenshot: "v1782824928/solimat.si_.webp",
  },

  "bar-bazencek": {
    slug: "bar-bazencek",
    name: "Bar Bazenček",
    category: "Nova spletna prisotnost",
    metaTitle: "Bar Bazenček: spletna stran za gostinski lokal | SKOL AI",
    metaDescription:
      "Kako sem za gostinski lokal zgradil hitro in cenovno ugodno spletno stran z galerijo, jedilnikom in kontaktnim obrazcem. Case study SKOL AI.",
    h1: "Bar Bazenček. Nova spletna prisotnost.",
    teaser:
      "Hitra, cenovno ugodna in profesionalna spletna prisotnost za gostinski lokal.",
    tags: ["Gostinstvo", "Mobile-first", "Premium web"],
    challenge:
      "Lokal je potreboval pravo spletno stran, hitro in cenovno ugodno. Profesionalno prisotnost, kjer gost takoj najde, kar išče.",
    approach:
      "Fokusirano in učinkovito. Brez pretiravanja, brez nepotrebnih stroškov. Stran, ki opravi delo in dobro deluje na telefonu, kjer gostje dejansko gledajo.",
    built: [
      "Pregledna predstavitev lokala.",
      "Galerija.",
      "Jasen, pregleden jedilnik.",
      "Kontaktni in rezervacijski obrazec.",
      "GDPR in piškotki urejeno.",
      "Osnove SEO, da lokal najdejo.",
    ],
    result:
      "Profesionalna spletna prisotnost, ki gostu olajša pot do obiska. Dostavljeno hitro in v dogovorjenem proračunu, brez presenečenj.",
    liveLabel: "barbazencek.si",
    liveUrl: "https://barbazencek.si",
    screenshot: "v1782824928/barbazencek.si_.webp",
  },

  minime: {
    slug: "minime",
    name: "MiniMe",
    category: "Spletna trgovina",
    metaTitle: "MiniMe: spletna trgovina na WooCommerce | SKOL AI",
    metaDescription:
      "Spletna trgovina za MiniMe in otroške reči: WooCommerce, plačila s kartico in Flik prek slovenske banke, merjenje in izhodišče za GEO. Case study SKOL AI.",
    h1: "MiniMe. Spletna trgovina za otroške reči.",
    teaser: "WooCommerce trgovina s plačili s kartico in Flik prek slovenske banke.",
    tags: ["WooCommerce", "Plačila Flik", "Izhodišče za GEO"],
    challenge:
      "Petra je za MiniMe potrebovala trgovino, v kateri sama dodaja izdelke, kupci pa lahko plačajo tako, kot so navajeni v Sloveniji: s kartico ali s Flikom.",
    approach:
      "WooCommerce kot osnova, ker je preverjen in ga Petra ureja sama. Največ dela je bilo v plačilih: povezava z bančnim plačilnim sistemom za kartice in Flik, skupaj z vračili, preizkušena v produkciji.",
    built: [
      "Spletno trgovino na WooCommerce, prilagojeno znamki.",
      "Plačila s kartico in Flik prek NLB in Bankarta, z omogočenimi vračili.",
      "Dostop za upravljanje, da Petra izdelke, cene in zalogo ureja sama.",
      "Merjenje prek Google Tag Managerja s privolitvijo za piškotke (Consent Mode v2).",
      "Search Console in sitemap, da Google trgovino najde.",
      "Izhodiščno meritev vidnosti v Googlu in AI asistentih.",
    ],
    result:
      "Trgovina je v živo od novembra 2026, plačila s kartico in Flikom delujejo v produkciji, Petra trgovino upravlja sama. Kako se vidnost v Googlu in AI asistentih spreminja od odprtja, bom dodal tukaj, ko bodo na voljo prve meritve.",
    liveLabel: "minime-reci.si",
    liveUrl: "https://minime-reci.si/",
    screenshot: "v1794343235/minime-trgovina-skolai.png.png",
  },
};

export const caseList: CaseStudy[] = Object.values(cases);

/* JSON-LD: CreativeWork + BreadcrumbList za case study. */
export function caseJsonLd(cs: CaseStudy, siteUrl: string) {
  const url = `${siteUrl}/projekti/${cs.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${url}#case`,
      name: cs.h1,
      headline: cs.h1,
      url,
      description: cs.metaDescription,
      about: cs.name,
      keywords: cs.tags.join(", "),
      inLanguage: "sl-SI",
      creator: { "@id": `${siteUrl}/#organization` },
      sameAs: cs.liveUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Domov", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Reference", item: `${siteUrl}/reference/` },
        { "@type": "ListItem", position: 3, name: cs.name, item: url },
      ],
    },
  ];
}
