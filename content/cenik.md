# SKOL AI — Stran s cenikom (/cenik/)

> Cilja iskanja z najvišjim nakupnim namenom: "cena izdelave spletne strani", "cenik izdelave spletne strani",
> "koliko stane spletna stran". Večina slovenskih ponudnikov cene skriva, zato je odprt cenik razlikovalna prednost.
> PREVERI pred objavo: DDV status po odprtju s.p. (spodaj je zapis za nezavezanca).

---

## Meta

**Title:** Cenik izdelave spletnih strani in AI agentov | SKOL AI
**Meta description:** Jasne cene za spletne strani, AI agente in AI vidnost. Od 290 EUR za landing stran do 1.890 EUR za spletno trgovino. Brez skritih postavk.

---

## H1

Cenik

## Lead (direct answer, takoj pod H1)

Spletna stran pri nas stane od 290 evrov za preprosto landing stran do 1.890 evrov za spletno trgovino. AI agent se začne pri 690 evrih postavitve in 99 evrih mesečno. Spodaj je celoten cenik, brez zvezdic in brez skritih postavk. Končna cena je odvisna od obsega, ki ga določiva v pogovoru.

---

## Spletne strani

| Paket | Cena | Za koga |
|---|---|---|
| Express landing | od 290 € | Ena stran po naši predlogi. Za tiste, ki rabijo eno dobro stran brez velikega proračuna. |
| Predstavitvena | od 490 € | Do približno pet sekcij, kontaktni obrazec, osnove SEO. Klasična stran podjetja. |
| Landing / premium | od 890 € | Dizajn po meri, animacije, prodajni copy. Za oglasni promet in resne kampanje. |
| Spletna trgovina | od 1.890 € | Plačila, dostava, integracije. Odvisno od števila izdelkov. |
| Vzdrževanje | od 39 € / mesec | Posodobitve, varnost, manjše spremembe. Ni obvezno. |

## AI agenti in avtomatizacije

| Storitev | Cena | Kaj dobiš |
|---|---|---|
| AI glasovni ali chat agent | postavitev od 690 € + od 99 € / mesec | Agent, ki sprejme klic ali sporočilo, odgovarja in rezervira termine. Mesečni del pokriva porabo, gostovanje in izboljšave. |
| Avtomatizacija procesa | od 290 € | Povezava tvojih orodij, da procesi tečejo sami. Cena na proces. |

## GEO in AI vidnost

| Storitev | Cena | Kaj dobiš |
|---|---|---|
| GEO audit | od 290 € | Pregled, kako te vidijo AI iskalniki, in konkreten seznam popravkov. |
| GEO postavitev | od 490 € | Tehnični temelj in vsebinska struktura za AI vidnost. |
| Mesečni GEO | od 149 € / mesec | Vsebina, zunanja prisotnost in merjenje omemb. |

**Cene ne vključujejo DDV. DDV se ne obračuna po 1. odstavku 94. člena ZDDV-1.**

---

## Od česa je odvisna cena

Cena ni ugibanje. Premikajo jo štiri stvari.

**Obseg.** Ena stran ali dvajset podstrani. Več vsebine pomeni več dela.

**Koliko je po meri.** Predloga je hitrejša in cenejša. Dizajn po meri stane več, a te loči od konkurence.

**Funkcionalnosti.** Kontaktni obrazec je osnova. Trgovina, rezervacije, dvojezičnost ali povezave z drugimi orodji so bistveno več dela.

**Vsebina.** Če besedila in slike priskrbiš sam, prihraniš. Če jih naredim jaz, je cena višja, pogosto pa tudi rezultat boljši.

---

## Kaj je v ceni

Vsaka stran vključuje dizajn po meri brez kupljenih predlog, brezhibno delovanje na telefonu, osnove SEO in strukturirane podatke, postavitev v živo in osnovno merjenje obiska.

Kar ni vključeno in se dogovori posebej: domena in gostovanje, če ju še nimaš, fotografiranje, licence za posebne pisave ali orodja, in vzdrževanje po predaji.

---

## Kdaj me ne rabiš

Ne bom ti prodajal stvari, ki je ne potrebuješ.

Če rabiš samo eno stran z informacijami in imaš doma nekoga, ki to zna, prihrani denar. Če imaš stran, ki dela dobro in je hitra, je prenova morda nepotrebna in je smiselneje vlagati v vidnost. In če ti nekdo ponuja stran za sto evrov in ti to zadošča, je to povsem legitimna odločitev.

Pokliči me takrat, ko hočeš, da stran nekaj prinese, ne samo obstaja.

---

## Pogosta vprašanja

**Zakaj so cene navedene z "od"?**
Ker je vsak projekt drugačen. Spodnja meja velja za jasno določen obseg. Ko se pogovoriva o tem, kaj rabiš, dobiš fiksno ponudbo brez naknadnih postavk.

**Ali lahko plačam v obrokih?**
Običajno delam v dveh delih: del ob naročilu, preostanek ob predaji. Pri večjih projektih se lahko dogovoriva drugače.

**Koliko časa traja izdelava?**
Express landing nekaj dni, predstavitvena stran teden ali dva, večji projekti in trgovine dlje.

**Ali so v ceni tudi besedila in slike?**
Odvisno od dogovora. Lahko jih priskrbiš sam ali jih naredim jaz, kar se pozna v ceni.

**Kaj pa domena in gostovanje?**
Nista v ceni, sta pa poceni. Domena je okoli 15 evrov na leto, gostovanje pri statični strani pogosto brezplačno.

---

## CTA

**Povej, kaj gradiš** → /kontakt/
Podnaslov: Opiši projekt in dobiš jasno ceno v 24 urah. Brez obveznosti.

---

## Prompt za Claude Code

```
Dodaj novo stran /cenik/ (vsebina v content/cenik.md).

Zahteve:
- Uporabi obstoječo predlogo storitvenih strani (isti stil, reveal animacije, brand barve).
- Lead odstavek stiliraj kot direct-answer blok (kot na blogu in storitvenih straneh).
- Tri cenovne tabele (spletne strani, AI agenti, GEO) v .table-scroll ovoju, kot na blogu.
- Schema: Service + FAQPage + BreadcrumbList. Pri storitvah dodaj Offer s
  priceCurrency EUR in price kot spodnjo mejo (lowPrice), kjer je smiselno.
- Dodaj /cenik/ v glavno navigacijo (med Storitve in Reference) in v nogo.
- Notranje povezave: s /cenik/ na /spletne-strani/, /ai-agenti/, /geo/ in /kontakt/;
  z vseh treh storitvenih strani dodaj povezavo na /cenik/ pri paketih.
- Dodaj v sitemap in v llms.txt.

Preveri: build čist, 0 mrtvih povezav, 0 schema napak, tabele berljive na mobilcu.
Commit + push.
```
