# SKOL AI — Build paket (priročnik za gradnjo v Claude Code)

> Cilj: vrhunsko narejena, bliskovito hitra, SEO/AEO-ready stran, ki služi tudi kot ad landing.
> Vse vsebine so že napisane (brand-kit + copy datoteke). Ta dokument pove, KAKO jih sestaviš.

---

## 1. Tech stack & zakaj

- **Astro** (SSG) — vnaprej zgeneriran HTML: hiter prvi izris, odlična SEO/AEO berljivost.
- **Tailwind CSS** — tokeni iz brand-kit; Pro Max in frontend-design oba delata s Tailwindom.
- **GSAP + ScrollTrigger** — scroll reveals, count-up, clip/mask razkritja.
- **Lenis** — gladek inercijski skrol.
- **Fonti self-hosted** prek `@fontsource` (Fraunces, Hanken Grotesk, JetBrains Mono) — boljši Core Web Vitals kot Google CDN.
- **Cloudinary** — slike (`f_auto,q_auto` + responsive).
- **Globina (showroom)** — čisti CSS transformi, brez WebGL. Spline hero objekt opcijsko kasneje.

## 2. Struktura projekta

```
skol-ai/
  design-system/MASTER.md        <- iz brand-kit/MASTER.md (Pro Max seed)
  src/
    layouts/BaseLayout.astro      <- <head>, GTM, schema, consent, nav, footer
    components/                   <- glej sekcijo 4
    pages/
      index.astro                 <- domača (homepage-copy.md)
      spletne-strani.astro
      ai-agenti.astro
      ai-fotografija.astro
      oglasne-kreative.astro
      virtualni-vplivnezi.astro
      showroom.astro
      projekti/solimat.astro
      projekti/bar-bazencek.astro
      manifest.astro
      kontakt.astro
      404.astro
    styles/tokens.css             <- barve, fonti iz brand-kit
    lib/motion.js                 <- Lenis + GSAP init, reveal helper
  public/                         <- favicon, og slike, robots.txt
  astro.config.mjs
```

EN (`/en/...`) se doda kasneje brez prezidave (Astro i18n).

## 3. Strani & routing

Domača `/`, 5 storitev (sekcija 1 v subpages-copy.md), `/showroom`, `/projekti/solimat`, `/projekti/bar-bazencek`, `/manifest`, `/kontakt`, `/404`. `/blog` rezerviran za Fazo 6.

## 4. Komponente za zgraditi

- **Layout:** Nav (sticky, minimal, scroll-progress linija), Footer (aktivna tel:/mailto:, IG/FB).
- **Globalno:** Loader (00→100 + zavesa), CustomCursor (desktop), Reveal wrapper.
- **Domača:** Hero, ProofBar, ServicesOverview (2 diviziji), Protokol (3 koraki, count-up), ShowroomTeaser, FeaturedProject (Solimat, parallax mockup), Manifest/Vizija blok, FAQ (akordeon), CTAContact.
- **Podstran storitve (predloga):** Hero, ProblemResolution (PROBLEM → REŠITEV), WhatYouGet, Packages (`od €—`), MiniFAQ, CTA.
- **Showroom:** ProjectsGrid (case kartice), VisualsGallery (4-6 kosov, Z-scroll "vstop v prostor", hover razkritje), AIModelFeature.
- **Case study (predloga):** Hero, Izziv, Pristop, KajSmoZgradili, Rezultat, LiveCTA.
- **Obrazec:** ContactForm (ime, e-mail, podjetje, izbor storitve, sporočilo) → POST na n8n webhook.

## 5. Animacijski brief (iz motion-interaction.md)

| Kje | Efekt | Parametri |
|---|---|---|
| Load (enkrat) | loader 00→100 + zavesa gor | easing cubic-bezier(.76,0,.24,1), 1s |
| Hero | stopničasto razkritje (kicker→naslov po vrsticah→sub→CTA) | stagger 0.1s, expo-out 1s |
| Vse sekcije | reveal (translateY 40px + fade) ob vstopu | ScrollTrigger, 0.6-1s, stagger 80ms |
| Protokol | count-up številk 01/02/03 | ob vstopu v viewport |
| Featured (Solimat) | parallax na mockupu | scroll-linked, faktor ~0.2 |
| Showroom | "vstop v prostor" Z-scale galerije | CSS transform, scroll-linked |
| Naslovi (veliki) | clip/mask razkritje | overflow hidden + translateY |
| Desktop | custom kazalec + magnetni gumbi | lerp 0.18 |

Pravila: nikoli scroll-jacking; vse lazy-loadano; mobilni fallback; poln `prefers-reduced-motion`.

## 6. Integracije & TRACKING (analitika + Google Ads + Meta)

Temelj se položi v build, globlja nastavitev v Fazi 6 (analitika-vodic).

- **GTM** — en kontejner upravlja vse oznake (lahko obstoječi GTM-5PNH39GD ali nov za novo stran).
- **dataLayer** — potiskaj evente iz kode: `form_submit`, `cta_click`, `tel_click`, `mailto_click`, `showroom_view`, `scroll_75`.
- **GA4** — prek GTM. Key events (konverzije): oddaja obrazca, klik na telefon/email, klik glavnih CTA.
- **Google Ads** — conversion tracking prek GTM (uvoz GA4 konverzij ali Ads conversion tag). Tako veš, kateri oglas pripelje povpraševanje, in znižaš ceno klika. To je za promet, ki ga kupiš.
- **Meta Pixel** — za FB/IG oglase + retargeting obiskovalcev. Standard event `Lead` ob oddaji obrazca.
- **Consent Mode v2 + CookieYes** — GDPR; isti vzorec kot na solimat.si (default denied → granted ob privolitvi; GTM sekvenciranje). Brez tega oglasi v EU ne merijo pravilno.
- *Opomba: "AdSense" (prikaz tujih oglasov NA tvoji strani) ne sodi na portfolio. Ti rabiš Google Ads conversion tracking, kar je pokrito zgoraj.*

## 7. SEO & AEO temelj (da te najde Google IN AI asistenti)

- Semantična HTML struktura, en H1 na stran, smiselni H2/H3.
- **Schema.org (JSON-LD):** Organization + LocalBusiness (Trebnje, tel, območje) sitewide; WebSite; Service na podstraneh; FAQPage na domači + podstraneh; BreadcrumbList; case studyji kot CreativeWork/Article.
- Jasna, dejstvena vsebina v stavkih, ki jih AI zna izluščiti (FAQ je idealen).
- `sitemap.xml` (Astro plugin), `robots.txt`, čisti slovenski slugi.
- OG slike za vsako stran (lahko canvas-design / Cloudinary).
- IndexNow ping ob objavi (kot na solimat.si).
- Pripravljeno za hreflang, ko pride EN.

## 8. Performance budget

- Cilj: LCP < 2.0s, CLS ~0, gladkih 60fps.
- Slike: Cloudinary `f_auto,q_auto`, responsive `srcset`, lazy pod gibom, eksplicitne dimenzije (brez CLS).
- JS: GSAP/Lenis samo kjer treba; težko/3D lazy. Astro pošlje minimalen JS.
- Fonti self-hosted, `font-display:swap`, preload ključnih.
- Lighthouse pred vsako "gotovo" stranjo.

## 9. Kako sestaviš projekt v Claude Code

1. `npm create astro@latest skol-ai` → dodaj Tailwind, sitemap, `@fontsource` fonte.
2. Namesti UI/UX Pro Max (uipro CLI / Claude marketplace, rabi Python 3) in frontend-design.
3. V repo prilepi: `design-system/MASTER.md` (iz brand-kit/MASTER.md) + vse copy datoteke v mapo `content/`.
4. Poženi prvi prompt (spodaj). Gradi po vrstnem redu iz sekcije 10.
5. Git push → Cloudflare Pages (že povezan) zbilda in postavi v živo.

## 10. Vrstni red gradnje

Scaffold → tokeni (barve/fonti iz brand-kit) → BaseLayout (nav, footer, head, schema, consent, GTM) → motion.js (Lenis+GSAP) → domača sekcijo po sekcijo → predloga podstrani → 5 podstrani → showroom + 2 case studyja → manifest + kontakt → obrazec (n8n) → tracking evente → perf pass → 404/OG/favicon → deploy.

## 11. Prvi prompt za Claude Code

```
Gradimo premium spletno stran za SKOL AI (kreativni studio).
Stack: Astro + Tailwind + GSAP/ScrollTrigger + Lenis, self-hosted fonti (@fontsource: Fraunces, Hanken Grotesk, JetBrains Mono).

Aktiviraj UI/UX Pro Max in uporabi design-system/MASTER.md kot edini vir resnice za barve, tipografijo, motion in glas. Kombiniraj stile: Editorial Grid/Magazine + Kinetic Typography + Motion-Driven + Parallax Storytelling + Interactive Cursor Design. Drži se frontend-design načel (distinctivno, ne generično).

Vsa besedila so v mapi content/ (homepage-copy, subpages-copy, showroom-and-cases, extra-pages). Ne izmišljaj vsebine, uporabi to.

Začni korak 1: postavi Astro projekt, tokene iz MASTER.md (barve/fonti), in BaseLayout z navigacijo, footerjem (aktivna tel:/mailto:), <head> meta, JSON-LD schema (Organization + LocalBusiness), GTM in CookieYes Consent Mode v2 placeholderji. Temna baza, gold accent, en kohezivni sistem. Ko je korak 1 gotov, se ustavi in mi pokaži, preden gremo na domačo stran.

Pred vsako "gotovo" stranjo poženi Pro Max pre-delivery checklist (cursor-pointer, hover prehodi, prefers-reduced-motion, kontrast, responsive breakpointi).
```

## 12. Pre-launch checklist

- [ ] Responsive na mobilcu, tablici, desktopu
- [ ] `prefers-reduced-motion` izklopi animacije, stran uporabna
- [ ] Kontrast prestane (Bone na Ink AAA; gold ni body)
- [ ] Lighthouse: performance/SEO/accessibility/best-practices
- [ ] Vse povezave in slugi delujejo, ni 404 (razen namernega)
- [ ] Obrazec pošlje na n8n, pride notifikacija + autoresponder
- [ ] GA4 evente vidi v DebugView; Meta Pixel Helper potrdi; Google Ads konverzija registrira
- [ ] Consent banner dela, Consent Mode v2 sekvencira
- [ ] Schema prestane Google Rich Results Test
- [ ] sitemap.xml + robots.txt živa, oddana v Search Console; IndexNow ping
- [ ] OG slike, favicon, 404 stran
- [ ] tel:/mailto: aktivna v footerju in kontaktu

## 13. Kateri SKILL kje (vse upoštevano)

**Že vgrajeno v ta paket:**
- frontend-design — dizajn craft v buildu
- brand-kit-generator — brand-kit/ datoteke
- landing-page-pomocnik — struktura strani in podstrani
- humanizer — ves copy
- lijak-graditelj — tok od heroja do CTA, ad landing logika
- prvi-klient-sprint — pakiranje ponudbe (storitve, paketi)
- cowork-project-prompt — prvi prompt in projektna navodila (sekcija 11)
- app-graditelj — build + GitHub + Cloudflare deploy veriga
- domena-setup — domena Namecheap → Cloudflare (deploy)
- canvas-design — OG slike, grafike za case studije
- docx/pdf/pptx — ponudbe in case study dokumenti za stranke (off-site dokazi)

**Pripravljeno za Fazo 6 (po launchu):**
- analitika-vodic — poglobljena GA4/Ads/Meta nastavitev (temelj je v sekciji 6)
- seo-article-generator — /blog vsebina za uvrstitve in AEO citiranje
- email-sekvenca — autoresponder + lead follow-up (povezan z obrazcem/n8n)
- ai-agent-setup — opcijski glasovni/chat agent na strani kot "wow" (in tvoja storitev)
- higgsfield-client-acquisition, video-ad-reverse-engineer, seedance, ai-cinematography-prompt — produkcija ad kreativ za FB/Google kampanje

## 14. Deploy

Lokalno (Claude Code) → `git push` → Cloudflare Pages (povezan) zbilda in objavi → domena na Namecheapu usmerjena na Cloudflare (nameserverji + custom domain). SSL samodejno. Brez SSH.
