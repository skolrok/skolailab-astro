/* Domača FAQ (homepage-copy.md §8) — vir za render + FAQPage schema.
   Odgovor lahko vsebuje [besedilo](/pot/): na strani je povezava, v schemi čisto besedilo. */
import { stripLinks } from "../lib/inlineLinks";

export interface Faq {
  q: string;
  a: string;
}

export const homeFaq: Faq[] = [
  {
    q: "Koliko časa traja izdelava strani?",
    a: "Odvisno od obsega. Predstavitvena je običajno gotova v enem do dveh tednih, večji projekti dlje. Z AI in vibecodingom gradim hitreje kot klasična agencija, brez padca kvalitete.",
  },
  {
    q: "Smem AI vizualije uporabljati komercialno?",
    a: "Da. Vse, kar zate ustvarim, dobiš v polno komercialno uporabo. Brez mesečnih licenčnin za fotografije. Asseti so tvoji, za splet, družbena omrežja in tisk.",
  },
  {
    q: "Kaj če nimam besedil ali fotografij?",
    a: "Točno zato sem tu. Besedila napišem, vizualije zgeneriram. Od tebe rabim samo pogovor in vpogled v tvoj posel.",
  },
  {
    q: "Koliko stane?",
    a: "Spletne strani od 290 €, AI agenti od 690 € postavitve, GEO audit od 290 €. Celoten cenik je na strani [Cenik](/cenik/).",
  },
  {
    q: "Delate samo za podjetja iz Dolenjske?",
    a: "Sedež imam v Trebnjem in rad delam lokalno, a gradim na daljavo za stranke po vsej Sloveniji in regiji.",
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
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };
}
