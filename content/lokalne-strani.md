# SKOL AI — Lokalni pristajalni strani (Novo mesto + Trebnje)

> Namen: ujeti lokalno komercialno iskanje ("izdelava spletnih strani Novo mesto"), ki konvertira bistveno bolje kot splošno.
> POMEMBNO: strani nista kopiji z zamenjanim imenom mesta. Vsaka ima svoj kot, svoj naslov, svoj FAQ. Google "doorway" strani kaznuje.
> PREVERI PRED OBJAVO: v kateri kraj sodita Solimat in Bar Bazenček, da je lokalni dokaz točen.

---

## `/izdelava-spletnih-strani-novo-mesto`

**Meta naslov:** Izdelava spletnih strani Novo mesto | SKOL AI
**Meta opis:** Premium spletne strani za podjetja v Novem mestu in okolici. Bliskovito hitre, po meri, brez predlog. Sedež v Trebnjem, 20 minut stran.

**H1:** Izdelava spletnih strani v Novem mestu

**Lead (direct answer):**
Delam spletne strani za podjetja v Novem mestu in okolici. Hitre, po meri in narejene tako, da obiskovalca pripeljejo do povpraševanja. Sedež imam v Trebnjem, dobra pol ure vožnje, zato se lahko dobiva v živo, kadar je to lažje od klica.

**Zakaj lokalno**
Spletno stran lahko naroči kdorkoli kjerkoli. Razlika je, ko lahko sedeš z nekom za mizo, mu poveš, kaj počneš, in on razume tvoj trg. Vem, kako izgleda konkurenca na Dolenjskem in kaj tukaj prepriča stranko. Kdaj se dobiva v živo, kdaj urediva na daljavo. Kakor je hitreje.

**Kaj dobiš**
Dizajn po meri, ne predloga, ki jo uporablja še sto drugih. Bliskovita hitrost (zadnji projekt je dosegel 96/100 na PageSpeed). Brezhibno na telefonu, kjer te stranke dejansko gledajo. Osnove SEO, da te najdejo. Pametni obrazci, ki povpraševanje pripeljejo naravnost do tebe.

**Reference z območja**
Solimat, celovita prenova in migracija na hitro statično infrastrukturo, dvojezično. Bar Bazenček, nova spletna prisotnost za gostinski lokal. Obe sta živi in ju lahko pogledaš.

**Cene**
Express landing od 290 €, predstavitvena stran od 690 €, premium landing od 1.290 €, spletna trgovina od 2.490 €. Brez DDV. Končna cena po obsegu, ki ga določiva v pogovoru.

**Vprašanja**
- *Se lahko dobiva v živo v Novem mestu?* Da. Trebnje je blizu in za resne projekte se rad usedem s stranko osebno.
- *Delaš samo za Novo mesto?* Ne. Sedež je v Trebnjem, delam po vsej Dolenjski in Sloveniji. Lokalno je samo lažje.
- *Koliko časa traja?* Predstavitvena stran običajno teden ali dva, večji projekti dlje.

**CTA:** Povej, kaj gradiš → (na /kontakt)

---

## `/izdelava-spletnih-strani-trebnje`

**Meta naslov:** Izdelava spletnih strani Trebnje | SKOL AI
**Meta opis:** Spletne strani po meri za podjetja v Trebnjem in okolici. Domač studio, hitre strani, AI agenti in avtomatizacije.

**H1:** Izdelava spletnih strani v Trebnjem

**Lead (direct answer):**
SKOL AI je kreativni studio s sedežem v Trebnjem. Delam spletne strani, AI agente in avtomatizacije za lokalna podjetja. Če si iz Trebnjega ali okolice, sva soseda in se lahko dobiva, kadar hočeš.

**Domači studio**
Trebnje ni veliko in to je prednost. Poznam okolje, poznam ljudi in vem, kako tukaj podjetja dobivajo stranke. Ko delaš z nekom iz domačega kraja, ni skrivanja za e-mailom. Vsak projekt nosi moje ime tam, kjer živim.

**Kaj delam**
Spletne strani, hitre in po meri, ne predloge. AI agente, ki sprejmejo klic in rezervirajo termin, ko ti delaš. Avtomatizacije, ki odpravijo ročno delo. In GEO, da te začnejo priporočati AI asistenti kot ChatGPT.

**Kako poteka**
Najprej se pogovoriva, v živo ali po telefonu, in ugotoviva, kaj sploh rabiš. Potem dobiš jasno ponudbo brez skritih postavk. Nato gradim, ti sproti vidiš napredek, in stran gre v živo. Predstavitvena stran je običajno gotova v tednu ali dveh.

**Cene**
Express landing od 290 €, predstavitvena od 690 €, premium landing od 1.290 €, trgovina od 2.490 €. Brez DDV.

**Vprašanja**
- *Kje si točno?* Rimska cesta 28, Trebnje.
- *Lahko prideš k meni v podjetje?* Da, v Trebnjem in okolici z veseljem pridem osebno.
- *Delaš tudi za manjše obrtnike?* Da. Express paket je narejen ravno za tiste, ki rabijo eno dobro stran brez velikega proračuna.

**CTA:** Pokliči ali piši → (tel: in mailto:, plus /kontakt)

---

## Tehnične zahteve za obe strani

- **Schema:** LocalBusiness (ime, naslov Rimska cesta 28 8210 Trebnje, telefon, `areaServed` = Novo mesto / Trebnje / Dolenjska) + Service + FAQPage + BreadcrumbList.
- **Notranje povezave:** iz /spletne-strani in iz footerja na obe lokalni strani; z lokalnih strani na /reference in /kontakt.
- **Ne dodajaj** dodatnih mest, dokler ti dve ne delujeta. Več tankih lokalnih strani škodi.

## Prompt za Claude Code

```
Dodaj dve lokalni pristajalni strani (vsebina v content/lokalne-strani.md):
- /izdelava-spletnih-strani-novo-mesto
- /izdelava-spletnih-strani-trebnje

Zahteve:
- Uporabi obstoječo predlogo storitvenih strani (isti stil, reveal animacije), a vsebina je lokalna, kot je v datoteki. NE kopiraj vsebine med stranema, vsaka ima svoje besedilo.
- Schema na vsaki: LocalBusiness (naslov Rimska cesta 28, 8210 Trebnje, telefon +386 31 295 869, areaServed ustrezno) + Service + FAQPage + BreadcrumbList.
- Lead odstavek naj bo stiliran kot direct-answer (kot na blogu).
- Dodaj notranje povezave: iz /spletne-strani in footerja na obe strani; z njiju na /reference in /kontakt.
- Dodaj v sitemap.
Preveri build, 0 mrtvih povezav, 0 schema napak. Commit + push.
```
