# SKOL AI — Tipografija

Trojka. Serif display + grotesk body + mono labele. Vse Google Fonts, vse s podporo šumnikov (Latin Extended: č, š, ž).

## Fonti

### Fraunces — display / naslovi
- **Uteži:** 400 (regular), 500 (medium), 400 italic (poudarek).
- **Zakaj:** visok-kontrastni "old style" serif z značajem in optično velikostjo. Daje editorial luksuz in dušo — ni generičen. Italic v gold = "magazine" poudarek (npr. *nepravična*).
- **Uporaba:** H1–H3, hero, imena sekcij, velike citatne izjave.

### Hanken Grotesk — body / UI
- **Uteži:** 400 (body), 500 (poudarjen body / UI), 700 (gumbi, labele).
- **Zakaj:** čist, topel humanistični grotesk. Serif-display + grotesk-body je klasičen luksuzni par — kontrast med okrasnim naslovom in nevtralnim telesom.
- **Uporaba:** odstavki, opisi, navigacija, gumbi, obrazci.

### JetBrains Mono — mono / labele
- **Uteži:** 400, 500.
- **Zakaj:** subtilen "AI / engineering" signal brez cyberja. Daje tehnično natančnost mikro elementom.
- **Uporaba:** kicker labele `[ tako ]`, številke (01/02/03), oznake cen, footer meta. Vedno VELIKE ČRKE + širok razmik (+0.25em).

## Velikostna lestvica (desktop, clamp za responsive)

| Element | Font | Velikost | Line-height | Razmik |
|---|---|---|---|---|
| H1 / hero | Fraunces 500 | clamp(44px, 8.4vw, 128px) | 0.96 | -0.01em |
| H2 | Fraunces 500 | clamp(40px, 7vw, 92px) | 1.0 | -0.01em |
| H3 | Fraunces 500 | clamp(22px, 2.6vw, 34px) | 1.1 | 0 |
| Body | Hanken 400 | clamp(15px, 1.5vw, 18px) | 1.65 | 0 |
| Body large (sub) | Hanken 400 | 18–20px | 1.6 | 0 |
| Small / caption | Hanken 400 | 13–14px | 1.5 | 0 |
| Kicker / label | JetBrains Mono 500 | 11–12px | 1.4 | +0.25–0.32em, UPPERCASE |

## Pravila

- En naslovni font, en body font. Nikoli dva serifna naslova hkrati.
- Naslovi tesno (negativni razmik), labele široko. Kontrast razmika = del estetike.
- Italic Fraunces samo za **eno** poudarjeno besedo na naslov, v gold. Ne cele povedi.
- Body vedno Bone barva, nikoli gold.
