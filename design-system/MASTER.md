# SKOL AI — Design System (MASTER)

> Vir resnice za dizajn. V Claude Code ga uporabi kot seed za UI/UX Pro Max `design-system/MASTER.md`.
> Vse strani morajo biti konsistentne s tem dokumentom. Ob dvomu: ta dokument zmaga.

---

## 1. Brand v enem stavku

SKOL AI je kreativni studio, ki slovenskim/regionalnim SME-jem prodaja premium AI vizualije, oglasne kreative, virtualne vplivneže, spletne strani in AI agente/avtomatizacije.

- **Občinstvo:** lastniki malih in srednjih podjetij (Dolenjska, Slovenija) — avtoservisi, gostinstvo, storitvena podjetja. B2B, premium pozicioniranje, a dostopno.
- **Občutek ob stiku z znamko:** premium, drzno, dominantno, "narejeno po meri", malo izven povprečja.
- **Brand v treh besedah:** topla-temna · editorial · dominacija.

## 2. Dizajn smer

**Kinetic Editorial — "živa galerija."**
Editorial luksuz kot baza (velik prazen prostor, močna tipografija, hairline črte, slike kot muzejski kosi) + discipliniran motion kot sloj za "wow". Brez cyberja, brez neona.

- **Arhitektura:** Astro (SSG) — vnaprej zgeneriran HTML za hiter prvi izris in SEO; težke/3D dele kot lazy-loaded islands.
- **Baza:** TEMNA skozi celo stran. En kohezivni sistem, brez menjavanja palet po straneh.

## 3. Paleta (povzetek — detajli v color-palette.md)

| Token | HEX | Vloga |
|---|---|---|
| Ink | `#0B0A09` | primarno ozadje |
| Ink-2 | `#141210` | dvignjene površine, kartice |
| Bone | `#EDE8DF` | primarni tekst |
| Bone-dim | `#8A867E` | sekundarni tekst |
| Gold | `#C8A96E` | edini accent: CTA, ključne besede, hairline, številke |
| Hairline | `rgba(237,232,223,.12)` | ločilne črte |

Pravilo: Gold nikoli za daljši tekst. Body je vedno Bone.

## 4. Tipografija (povzetek — detajli v typography.md)

- **Display / naslovi:** Fraunces (serif, 400/500, italic za poudarke v gold)
- **Body / UI:** Hanken Grotesk (400/500/700)
- **Mono / labele, številke:** JetBrains Mono (400/500), velike črke + široki razmik

## 5. Motion (povzetek — detajli v motion-interaction.md)

- En orkestriran load (loader → stopničasto razkritje heroja)
- Scroll-linked reveals (dvig + fade). NIKOLI scroll-jacking.
- En signature globinski moment: showroom "vstop v prostor" (Z-scale)
- Easing `cubic-bezier(.22,1,.36,1)`; reveals 0.6–1s, mikro 0.25–0.35s
- Custom kazalec na desktopu; poln `prefers-reduced-motion` fallback
- Perf budget: 3D lazy-loadan, mobilni fallback obvezen, prioriteta hitrega LCP

## 6. Glas (povzetek — detajli v tone-of-voice.md)

Samozavesten, deklarativen, rahlo provokativen. Premium, ne korporativno-hladen.
Stalnice: "Orodje je umetno. Vizija je človeška." · "nepravična prednost" · "Ne delamo lepih vizitk — gradimo prodajne stroje."

## 7. Logo

**Status: ODLOŽEN (TBD).** Placeholder skozi dizajn in build = tipografski "SKOL AI" v Fraunces (AI lahko v gold). Finalni znak je kasnejši drop-in SVG; ne blokira gradnje.

## 8. Do / Don't

**Do:** velik prazen prostor · ena barva poudarka · velika tipografija · hairline črte · slika kot junak · gibanje z namenom.
**Don't:** neon/cyber · več accent barv hkrati · gold za body tekst · scroll-jacking · stock-abstrakt ozadja · zatrpane sekcije.

## 9. Kako naj Pro Max uporablja ta sistem

Kombiniraj stile: **Editorial Grid/Magazine + Kinetic Typography + Motion-Driven + Parallax Storytelling + Interactive Cursor Design.** Spoštuj paleto, tipografijo in motion principe zgoraj. Pre-delivery checklist (cursor-pointer, hover prehodi, reduced-motion, kontrast, responsive) je obvezen pred vsako "gotovo" stranjo.
