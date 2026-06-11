# SKOL AI — Barvna paleta (temni sistem)

Šest jedrnih barv + dva funkcionalna stanja. Manj je več.

## Jedrne barve

### Ink — `#0B0A09` · rgb(11, 10, 9)
- **Vloga:** primarno ozadje cele strani.
- **Zakaj:** toplo skoraj-črno (ne čista #000, ne hladno modrikasto). Ustvari "nočno galerijo", kjer vizualije postanejo vir svetlobe. Toplota loči od cyber estetike.
- **Uporaba:** glavno ozadje. NE za tekst.

### Ink-2 — `#141210` · rgb(20, 18, 16)
- **Vloga:** dvignjene površine — kartice, vgnezdene sekcije, hover stanja.
- **Zakaj:** komaj zaznavna razlika od Ink daje globino brez črt; premium "slojevitost".
- **Uporaba:** kartice storitev, FAQ akordeoni, footer.

### Bone — `#EDE8DF` · rgb(237, 232, 223)
- **Vloga:** primarni tekst in pomembni elementi.
- **Zakaj:** topla off-white namesto ostre bele — mehkejše za oči, bolj luksuzno, manj "tehnično".
- **Dostopnost:** kontrast na Ink ≈ 15:1 → WCAG AAA. Brezskrbno za body tekst.

### Bone-dim — `#8A867E` · rgb(138, 134, 126)
- **Vloga:** sekundarni tekst, podnaslovi, opisi.
- **Dostopnost:** kontrast na Ink ≈ 5.5:1 → prestane AA za normalen tekst.

### Gold — `#C8A96E` · rgb(200, 169, 110)
- **Vloga:** EDINI accent — CTA gumbi, ključne besede v naslovih, hairline poudarki, številke (01/02), kicker labele, hover.
- **Zakaj:** tvoja obstoječa brand barva; na temnem žari kot zlato pod reflektorjem. Ena sama barva poudarka = premium disciplina.
- **Dostopnost:** na Ink prestane AA za **velik/naslovni** tekst (≈ 9:1). Za body NE — body ostane Bone. Kot ozadje gumba z Ink tekstom: odlično.

### Hairline — `rgba(237,232,223,.12)`
- **Vloga:** tanke ločilne črte med sekcijami/vrsticami.
- **Zakaj:** struktura brez teže; editorial "mreža".

## Funkcionalna stanja (obrazci)

- **Success** — `#7FA88A` (umirjena žajbelj zelena). Potrditev oddaje obrazca.
- **Error** — `#C46B5A` (umirjena terakota). Napake validacije.
- Oba sta zatajena, da se ne tepeta z gold accentom.

## Hitri kontrastni povzetek

| Kombinacija | Razmerje | Status |
|---|---|---|
| Bone na Ink | ~15:1 | AAA ✓ |
| Bone-dim na Ink | ~5.5:1 | AA ✓ |
| Gold na Ink (naslovi) | ~9:1 | AA large ✓ |
| Ink na Gold (gumb) | ~9:1 | AA ✓ |
| Gold na Ink (body) | — | ✗ ne uporabljaj |
