/* =========================================================================
   SKOL AI — Lokalne pristajalne strani (Novo mesto + Trebnje).
   Vir: content/lokalne-strani.md. Vsaka ima SVOJO vsebino (ne kopija).
   Schema na vsaki: LocalBusiness + Service + FAQPage + BreadcrumbList.
   ========================================================================= */

export interface LocalFaq {
  q: string;
  a: string;
}
export interface LocalSection {
  kicker: string;
  title: string;
  body: string;
}
export interface LocalPage {
  slug: string;
  town: string; // za breadcrumb / meta
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string; // direct-answer
  sections: LocalSection[];
  prices: string;
  faq: LocalFaq[];
  areaServed: string[];
  ctaTitle: string;
  ctaSub: string;
  ctaLabel: string;
}

export const localPages: Record<string, LocalPage> = {
  "izdelava-spletnih-strani-novo-mesto": {
    slug: "izdelava-spletnih-strani-novo-mesto",
    town: "Novo mesto",
    metaTitle: "Izdelava spletnih strani Novo mesto | SKOL AI",
    metaDescription:
      "Premium spletne strani za podjetja v Novem mestu in okolici. Bliskovito hitre, po meri, brez predlog. Sedež v Trebnjem, 20 minut stran.",
    kicker: "[ Lokalno · Novo mesto ]",
    h1: "Izdelava spletnih strani v Novem mestu",
    lead: "Delam spletne strani za podjetja v Novem mestu in okolici. Hitre, po meri in narejene tako, da obiskovalca pripeljejo do povpraševanja. Sedež imam v Trebnjem, dobra pol ure vožnje, zato se lahko dobiva v živo, kadar je to lažje od klica.",
    sections: [
      {
        kicker: "[ Zakaj lokalno ]",
        title: "Zakaj lokalno",
        body: "Spletno stran lahko naroči kdorkoli kjerkoli. Razlika je, ko lahko sedeš z nekom za mizo, mu poveš, kaj počneš, in on razume tvoj trg. Vem, kako izgleda konkurenca na Dolenjskem in kaj tukaj prepriča stranko. Kdaj se dobiva v živo, kdaj urediva na daljavo. Kakor je hitreje.",
      },
      {
        kicker: "[ Kaj dobiš ]",
        title: "Kaj dobiš",
        body: "Dizajn po meri, ne predloga, ki jo uporablja še sto drugih. Bliskovita hitrost (zadnji projekt je dosegel 96/100 na PageSpeed). Brezhibno na telefonu, kjer te stranke dejansko gledajo. Osnove SEO, da te najdejo. Pametni obrazci, ki povpraševanje pripeljejo naravnost do tebe.",
      },
      {
        kicker: "[ Reference z območja ]",
        title: "Reference z območja",
        body: "Solimat, celovita prenova in migracija na hitro statično infrastrukturo, dvojezično. Bar Bazenček, nova spletna prisotnost za gostinski lokal. Obe sta živi in ju lahko pogledaš.",
      },
    ],
    prices:
      "Express landing od 290 €, predstavitvena stran od 690 €, premium landing od 1.290 €, spletna trgovina od 2.490 €. Brez DDV. Končna cena po obsegu, ki ga določiva v pogovoru.",
    faq: [
      {
        q: "Se lahko dobiva v živo v Novem mestu?",
        a: "Da. Trebnje je blizu in za resne projekte se rad usedem s stranko osebno.",
      },
      {
        q: "Delaš samo za Novo mesto?",
        a: "Ne. Sedež je v Trebnjem, delam po vsej Dolenjski in Sloveniji. Lokalno je samo lažje.",
      },
      {
        q: "Koliko časa traja?",
        a: "Predstavitvena stran običajno teden ali dva, večji projekti dlje.",
      },
    ],
    areaServed: ["Novo mesto", "Dolenjska", "Slovenija"],
    ctaTitle: "Povej, kaj gradiš.",
    ctaSub: "Iz Novega mesta ali okolice? Povej, kaj rabiš — odgovorim v 24 urah.",
    ctaLabel: "Povej, kaj gradiš →",
  },

  "izdelava-spletnih-strani-trebnje": {
    slug: "izdelava-spletnih-strani-trebnje",
    town: "Trebnje",
    metaTitle: "Izdelava spletnih strani Trebnje | SKOL AI",
    metaDescription:
      "Spletne strani po meri za podjetja v Trebnjem in okolici. Domač studio, hitre strani, AI agenti in avtomatizacije.",
    kicker: "[ Lokalno · Trebnje ]",
    h1: "Izdelava spletnih strani v Trebnjem",
    lead: "SKOL AI je kreativni studio s sedežem v Trebnjem. Delam spletne strani, AI agente in avtomatizacije za lokalna podjetja. Če si iz Trebnjega ali okolice, sva soseda in se lahko dobiva, kadar hočeš.",
    sections: [
      {
        kicker: "[ Domači studio ]",
        title: "Domači studio",
        body: "Trebnje ni veliko in to je prednost. Poznam okolje, poznam ljudi in vem, kako tukaj podjetja dobivajo stranke. Ko delaš z nekom iz domačega kraja, ni skrivanja za e-mailom. Vsak projekt nosi moje ime tam, kjer živim.",
      },
      {
        kicker: "[ Kaj delam ]",
        title: "Kaj delam",
        body: "Spletne strani, hitre in po meri, ne predloge. AI agente, ki sprejmejo klic in rezervirajo termin, ko ti delaš. Avtomatizacije, ki odpravijo ročno delo. In GEO, da te začnejo priporočati AI asistenti kot ChatGPT.",
      },
      {
        kicker: "[ Kako poteka ]",
        title: "Kako poteka",
        body: "Najprej se pogovoriva, v živo ali po telefonu, in ugotoviva, kaj sploh rabiš. Potem dobiš jasno ponudbo brez skritih postavk. Nato gradim, ti sproti vidiš napredek, in stran gre v živo. Predstavitvena stran je običajno gotova v tednu ali dveh.",
      },
    ],
    prices:
      "Express landing od 290 €, predstavitvena od 690 €, premium landing od 1.290 €, trgovina od 2.490 €. Brez DDV.",
    faq: [
      { q: "Kje si točno?", a: "Rimska cesta 28, Trebnje." },
      {
        q: "Lahko prideš k meni v podjetje?",
        a: "Da, v Trebnjem in okolici z veseljem pridem osebno.",
      },
      {
        q: "Delaš tudi za manjše obrtnike?",
        a: "Da. Express paket je narejen ravno za tiste, ki rabijo eno dobro stran brez velikega proračuna.",
      },
    ],
    areaServed: ["Trebnje", "Dolenjska", "Slovenija"],
    ctaTitle: "Pokliči ali piši.",
    ctaSub: "Soseda iz Trebnjega? Pokliči ali piši — dobiva se, kadar ti paše.",
    ctaLabel: "Pokliči ali piši →",
  },
};

export const localPageList: LocalPage[] = Object.values(localPages);

/* JSON-LD: LocalBusiness + Service + FAQPage + BreadcrumbList za lokalno stran. */
export function localPageJsonLd(page: LocalPage, siteUrl: string) {
  const url = `${siteUrl}/${page.slug}`;
  const area = page.areaServed.map((name) => ({ "@type": "AdministrativeArea", name }));
  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${url}#localbusiness`,
      name: "SKOL AI",
      url,
      telephone: "+38631295869",
      email: "info@skolailab.com",
      priceRange: "€€",
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rimska cesta 28",
        postalCode: "8210",
        addressLocality: "Trebnje",
        addressCountry: "SI",
      },
      areaServed: area,
      knowsLanguage: ["sl", "en"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Izdelava spletnih strani — ${page.town}`,
      serviceType: "Izdelava spletnih strani",
      url,
      description: page.metaDescription,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: area,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faq.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Spletne strani", item: `${siteUrl}/spletne-strani` },
        { "@type": "ListItem", position: 3, name: page.town, item: url },
      ],
    },
  ];
}
