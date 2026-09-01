---
title: "118 strani, ki jih Google ni videl"
description: "Pri prenovi ene spletne strani sem našel 118 podstrani, ki jih Google ni indeksiral. Trije vzroki, ki jih ima marsikatera stran, in kako jih preveriš sam."
pubDate: 2026-09-02
updatedDate: 2026-09-02
author: "Rok Skol"
tags: ["SEO", "prenova", "iz prakse"]
image: ""
draft: false
---

Ko sem prevzel spletno stran s 73 podstranmi, sem v Search Console našel 118 naslovov, ki jih Google ni indeksiral. Stran je bila v živo, vsebina je bila tam, lastnik je bil prepričan, da vse deluje. Za Google pa velik del strani preprosto ni obstajal. Vzroki so bili trije, in vsi trije so tako pogosti, da jih verjetno imaš tudi ti.

## Kako sploh pride do tega

Nihče ne naredi tega namerno. Stran raste več let, nekdo doda podstran, drug popravi povezavo, tretji naredi prevod. Vsaka sprememba je majhna in nedolžna. Po nekaj letih pa imaš na desetine naslovov, ki vodijo v nič ali se med sabo podvajajo.

Najbolj zoprno je, da tega ne vidiš. Stran v brskalniku izgleda povsem normalno. Problem se pokaže samo v Search Console, kamor večina lastnikov nikoli ne pogleda.

## Vzrok 1: poševnica na koncu naslova

To je bil največji krivec. Strani so se strežile z naslovom, ki se konča s poševnico, na primer `/kontakt/`, notranje povezave pa so kazale na različico brez nje, torej `/kontakt`.

Za obiskovalca je razlika neopazna, ker ga strežnik samodejno preusmeri. Za Google pa sta to dva različna naslova. Eden vrne preusmeritev, drug pravo vsebino, in vsak klik gre po ovinku. Ko se to ponovi čez desetine strani, dobiš točno to, kar sem videl: kup naslovov v poročilu, ki niso indeksirani, ker so v resnici le preusmeritve.

Popravek je preprost. Odločiš se za eno obliko in vse notranje povezave popraviš tako, da kažejo naravnost nanjo.

## Vzrok 2: pokvarjene notranje povezave

Klasika. Nekdo preimenuje stran ali izbriše staro podstran, povezave nanjo pa ostanejo v menijih in besedilu. Obiskovalec pristane na napaki, Google pa naslov obravnava kot slepo ulico.

Pri tej strani jih je bilo dovolj, da so vplivale na to, kako Google razume strukturo strani. Če polovica povezav vodi v nič, iskalnik težje sklepa, katere strani so pomembne.

## Vzrok 3: napačne dvojezične oznake

Stran je bila v slovenščini in angleščini, oznake, ki povedo, katera različica pripada kateri, pa so bile napačno postavljene. Namesto da bi Googlu pomagale, so ga zmedle. Slovenska in angleška različica sta se med sabo obravnavali kot podvojena vsebina.

To je napaka, ki jo vidim pogosto. Dvojezična stran brez pravilnih oznak je za iskalnik pogosto slabša kot enojezična.

## Kako preveriš svojo stran

Dobra novica je, da za osnovni pregled ne potrebuješ nobenega plačljivega orodja.

1. **Odpri Google Search Console** in pojdi v poročilo o indeksiranju strani. Poglej razdelek, kjer piše, katere strani niso indeksirane in zakaj.
2. **V Google vpiši `site:tvojadomena.si`.** Dobiš približen seznam strani, ki jih Google pozna. Če jih je bistveno manj, kot jih ima stran, imaš problem.
3. **Preveri, ali se ista stran odpre na več naslovov.** Poskusi z www in brez, s poševnico in brez. Če vse odprejo isto vsebino brez preusmeritve, se podvajaš.

Če v prvi točki vidiš številke v desetinah, ni panike. Večina teh napak je tehničnih in se popravi enkrat, ne vsak mesec.

## Kaj se je spremenilo

Po popravkih so se strani začele indeksirati normalno. Stran zdaj dosega 96 od 100 na Googlovem merilu hitrosti, dvojezične različice se pravilno ločijo, notranje povezave pa kažejo naravnost na cilj.

Zanimivo pri tem je, da lastnik ni dobil nobene nove vsebine. Isti teksti, iste slike, ista ponudba. Razlika je bila samo v tem, da je Google končno lahko videl, kar je že obstajalo.

## Nauk, ki ga vzemi s sabo

Preden vlagaš v novo vsebino ali oglase, preveri, ali iskalnik sploh vidi tisto, kar že imaš. Pogosto je najcenejši dvig vidnosti ravno v popravljanju stvari, ki so že napisane.

## Pogosta vprašanja

**Kako vem, ali moje strani niso indeksirane?**
V Google Search Console odpri poročilo o indeksiranju. Tam piše, koliko strani je indeksiranih in koliko ne, skupaj z razlogom.

**Ali je poševnica na koncu naslova res pomembna?**
Sama po sebi ne. Pomembno je, da si dosleden. Težava nastane, ko se stran streže na eno obliko, povezave pa kažejo na drugo.

**Koliko časa traja, da se strani ponovno indeksirajo?**
Po popravku običajno nekaj dni do nekaj tednov. Postopek lahko pospešiš tako, da v Search Console zahtevaš ponovno indeksiranje ključnih strani.

**Ali to lahko popravim sam?**
Osnovne stvari da, sploh če imaš dostop do strani. Pri večjih straneh z več sto naslovi se hitro splača pomoč, ker je treba popraviti vzrok, ne posameznih primerov.

---

Če te zanima, kaj se skriva na tvoji strani, [povej, kaj gradiš](/kontakt/). Pogledam in ti povem, kaj sem našel, tudi če je odgovor, da je vse v redu.
