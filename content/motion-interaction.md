# SKOL AI — Motion & interakcija

Motion je tu zato, da ljudje **ostanejo** in da stran deluje premium — ne zaradi razkazovanja. Pravilo: discipliniran wow, ne wow povsod.

## Načela

1. **En orkestriran load.** Loader (wordmark + napredek 00→100, gold linija) → zavesa se dvigne → hero se sestavi v slojih (kicker → naslov po vrsticah → sub → CTA), stopničasto.
2. **Scroll-linked, nikoli scroll-jacked.** Animacije sledijo naravnemu skrolu. Nikoli ne ugrabi hitrosti/smeri skrola — to ubije konverzijo.
3. **Reveals.** Elementi se ob vstopu v viewport dvignejo (translateY ~40px) + fade-in. Stopničasto za skupine (stagger 60–100ms).
4. **En signature globinski moment.** Samo showroom: ob skrolu se galerija približa/zumira po Z-osi ("vstop v prostor"). Čisti CSS transformi, brez WebGL. Drugje navaden skrol.
5. **Custom kazalec (desktop).** Tanek gold obroč z lerp sledenjem; poveča se nad interaktivnimi elementi. Skrit na dotik napravah.

## Tehnične vrednosti

- **Easing:** `cubic-bezier(.22,1,.36,1)` (expo-out) za reveals; `cubic-bezier(.76,0,.24,1)` za zaveso loaderja.
- **Trajanja:** reveals 0.6–1s · mikro-interakcije (hover, gumbi) 0.25–0.35s · loader zavesa 1s.
- **Hover:** gumbi obrnejo barvo (gold fill ↔ outline); naslovi vrstic v gold; opacity 0.65 → 1 na navigaciji.

## Dostopnost — `prefers-reduced-motion`

Obvezen poln fallback: brez števca v loaderju (takoj 100), brez parallaxa, reveals se pojavijo takoj (opacity 1, brez premika), custom kazalec izklopljen. Stran mora biti popolnoma uporabna brez animacij.

## Perf budget (ker bo promet z oglasi + mobilni)

- Vse težko / 3D / globinski moment = **lazy-loadano** (naloži se šele ob približanju), da ne zavira prvega izrisa.
- **Mobilni fallback obvezen:** globinski efekt na telefonu poenostavljen ali statičen; nič scroll-jackinga.
- Prioriteta: hiter LCP, brez layout shifta, gladkih 60fps. Če efekt trza na sredini cenovnega telefona → poenostavi efekt, ne telefona.
- Slike prek Cloudinary z `f_auto,q_auto` + responsive velikosti (serviraj le velikost, ki jo res rabiš).
