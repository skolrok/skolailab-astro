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
      "Kako smo počasno, polovično delujočo stran spremenili v hitro, zanesljivo in dvojezično prodajno orodje. Case study SKOL AI.",
    h1: "Solimat. Celovita digitalna prenova.",
    teaser:
      "Migracija s počasne strani na čisto, statično in bliskovito hitro dvojezično prodajno orodje.",
    tags: ["UI/UX dizajn", "Avtomatizacija", "Premium web"],
    challenge:
      "Stara stran je bila počasna in marsikaj na njej ni delalo. Zastarela osnova, ki je obiskovalca ovirala namesto vodila do povpraševanja.",
    approach:
      "Namesto krpanja smo zgradili od tal. Migracija na čisto, statično in bliskovito hitro arhitekturo, z lastnim sistemom za vsebino.",
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
    metaTitle: "Bar Bazenček: nova spletna stran za gostinski lokal | SKOL AI",
    metaDescription:
      "Hitra, cenovno ugodna in profesionalna spletna prisotnost za gostinski lokal. Case study SKOL AI.",
    h1: "Bar Bazenček. Nova spletna prisotnost.",
    teaser:
      "Hitra, cenovno ugodna in profesionalna spletna prisotnost za gostinski lokal.",
    tags: ["Gostinstvo", "Mobile-first", "Premium web"],
    challenge:
      "Lokal je potreboval pravo spletno stran, hitro in cenovno ugodno. Profesionalno prisotnost, kjer gost takoj najde, kar išče.",
    approach:
      "Fokusirano in učinkovito. Brez pretiravanja, brez nepotrebnih stroškov. Stran, ki opravi delo in deluje brezhibno na telefonu, kjer gostje dejansko gledajo.",
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
        { "@type": "ListItem", position: 2, name: "Reference", item: `${siteUrl}/reference` },
        { "@type": "ListItem", position: 3, name: cs.name, item: url },
      ],
    },
  ];
}
