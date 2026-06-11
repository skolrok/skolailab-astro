/* Domača FAQ (homepage-copy.md §8) — vir za render + FAQPage schema. */
export interface Faq {
  q: string;
  a: string;
}

export const homeFaq: Faq[] = [
  {
    q: "Koliko časa traja izdelava strani?",
    a: "Odvisno od obsega. Predstavitvena je običajno gotova v enem do dveh tednih, večji projekti dlje. Z AI in vibecodingom gradimo hitreje kot klasična agencija, brez padca kvalitete.",
  },
  {
    q: "Smem AI vizualije uporabljati komercialno?",
    a: "Da. Vse, kar zate ustvarimo, dobiš v polno komercialno uporabo. Brez mesečnih licenčnin za fotografije. Asseti so tvoji, za splet, družbena omrežja in tisk.",
  },
  {
    q: "Kaj če nimam besedil ali fotografij?",
    a: "Točno zato sva tu. Besedila napišemo, vizualije zgeneriramo. Od tebe rabimo samo pogovor in vpogled v tvoj posel.",
  },
  {
    q: "Koliko stane?",
    a: "Cena je odvisna od obsega. Skupaj določiva, kaj rabiš, in dobiš jasno ponudbo brez skritih presenečenj.",
  },
  {
    q: "Delate samo za podjetja iz Dolenjske?",
    a: "Sedež imamo v Trebnjem in radi delamo lokalno, a gradimo na daljavo za stranke po vsej Sloveniji in regiji.",
  },
];

/* FAQPage JSON-LD za domačo stran. */
export function homeFaqJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: homeFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
