/* Notranje povezave v kratkih besedilih iz data datotek: [besedilo](/pot/).
   linkify  -> deli za render (niz ali { text, href })
   stripLinks -> čisto besedilo za JSON-LD (schema ne sme vsebovati markdowna) */

const LINK = /(\[[^\]]+\]\([^)]+\))/g;
const ONE = /^\[([^\]]+)\]\(([^)]+)\)$/;

export type InlinePart = string | { text: string; href: string };

export function linkify(text: string): InlinePart[] {
  return text.split(LINK).map((part) => {
    const m = part.match(ONE);
    return m ? { text: m[1], href: m[2] } : part;
  });
}

export function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
