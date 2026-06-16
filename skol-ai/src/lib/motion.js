/* =========================================================================
   SKOL AI — Motion sistem
   Lenis (gladek skrol) + GSAP/ScrollTrigger, globalni Loader, CustomCursor,
   in Reveal helper. Vir resnice: content/motion-interaction.md + build-package.md §5.

   Načelo: discipliniran wow. Poln prefers-reduced-motion fallback —
   stran mora biti popolnoma uporabna brez animacij.
   ========================================================================= */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* Tehnične vrednosti (motion-interaction.md) */
const EASE_REVEAL = "expo.out"; // ≈ cubic-bezier(.22,1,.36,1)
const EASE_CURTAIN = "power4.inOut"; // ≈ cubic-bezier(.76,0,.24,1)
const REVEAL_Y = 40; // translateY ob vstopu
const REVEAL_DUR = 0.8; // 0.6–1s
const REVEAL_STAGGER = 0.08; // 80ms
const CURSOR_LERP = 0.18;

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* Register persistent rAF callbacks tako, da jih lahko zamrznemo
   (debug / čisti posnetki). gsap.ticker sicer teče neprekinjeno. */
const tickers = [];
function addTicker(fn) {
  tickers.push(fn);
  gsap.ticker.add(fn);
}
function freezeMotion() {
  tickers.forEach((fn) => gsap.ticker.remove(fn));
  gsap.globalTimeline.pause();
}
function unfreezeMotion() {
  tickers.forEach((fn) => gsap.ticker.add(fn));
  gsap.globalTimeline.resume();
}

/* -------------------------------------------------------------------------
   1) Lenis — gladek inercijski skrol, povezan z GSAP ticker + ScrollTrigger
   ------------------------------------------------------------------------- */
function initLenis() {
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    autoRaf: false, // gsap.ticker je edini rAF gonilnik (brez podvojenega loopa)
  });

  // Lenis poganja ScrollTrigger; en sam rAF prek gsap.ticker (brez podvajanja)
  lenis.on("scroll", ScrollTrigger.update);
  addTicker((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Sidrne (#) povezave -> gladek skrol prek Lenis
  document.querySelectorAll('a[href^="#"], a[href*="/#"]').forEach((a) => {
    const hash = a.getAttribute("href")?.split("#")[1];
    if (!hash) return;
    a.addEventListener("click", (e) => {
      const target = document.getElementById(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    });
  });

  return lenis;
}

/* -------------------------------------------------------------------------
   2) Reveal helper — [data-reveal]: translateY 40px + fade, stagger 80ms
      Skupine: [data-reveal-group] stagger-a svoje [data-reveal] otroke.
      Pre-hide opravi CSS (html.js [data-reveal]); tu samo razkrijemo.
   ------------------------------------------------------------------------- */
function initReveals(reduce) {
  const items = gsap.utils.toArray("[data-reveal]");
  if (!items.length) return;

  if (reduce) {
    // Poln fallback: takoj vidno, brez premika, brez ScrollTriggerja
    gsap.set(items, { opacity: 1, y: 0, clearProps: "transform" });
    return;
  }

  // Začetno stanje (uskladi s CSS pre-hide, da ni preskoka)
  gsap.set(items, { opacity: 0, y: REVEAL_Y });

  // Batch: elementi se razkrivajo stopničasto, ko vstopijo v viewport
  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: REVEAL_DUR,
        ease: EASE_REVEAL,
        stagger: REVEAL_STAGGER,
        overwrite: true,
      }),
  });
}

/* -------------------------------------------------------------------------
   2b) Count-up — [data-count]: številka šteje 0 -> cilj ob vstopu v viewport.
       data-count-pad="2" doda vodilne ničle (npr. 01). reduced = takoj cilj.
   ------------------------------------------------------------------------- */
function initCountUp(reduce) {
  const els = gsap.utils.toArray("[data-count]");
  if (!els.length) return;

  els.forEach((el) => {
    const target = parseFloat(el.getAttribute("data-count")) || 0;
    const pad = parseInt(el.getAttribute("data-count-pad") || "0", 10);
    const fmt = (v) => {
      const n = String(Math.round(v));
      return pad ? n.padStart(pad, "0") : n;
    };

    if (reduce) {
      el.textContent = fmt(target);
      return;
    }

    el.textContent = fmt(0);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => (el.textContent = fmt(obj.v)),
        }),
    });
  });
}

/* -------------------------------------------------------------------------
   2c) Globinski moment — [data-depth]: "vstop v prostor".
       Scroll-scrubban Z-translate prek perspektive (čisti CSS transform).
       Mobilni / reduced-motion fallback: statično (brez Z), brez scroll-jackinga.
   ------------------------------------------------------------------------- */
function initDepth(reduce) {
  const stages = gsap.utils.toArray("[data-depth]");
  if (!stages.length) return;

  const mobile = window.matchMedia("(max-width: 767px)").matches;
  if (reduce || mobile) {
    gsap.set(stages, { clearProps: "transform,opacity" });
    return;
  }

  stages.forEach((stage) => {
    // od "daleč in zatemnjeno" (vstop) -> "prispelo" ko sekcija doseže sredino
    gsap.fromTo(
      stage,
      { z: -420, opacity: 0.55 },
      {
        z: 40,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "center center",
          scrub: 0.6,
        },
      }
    );
  });
}

/* -------------------------------------------------------------------------
   2e) Parallax — [data-parallax]: scroll-scrubban translateY (faktor ~0.2).
       Mobilni / reduced-motion fallback: statično.
   ------------------------------------------------------------------------- */
function initParallax(reduce) {
  const els = gsap.utils.toArray("[data-parallax]");
  if (!els.length) return;
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  if (reduce || mobile) {
    gsap.set(els, { clearProps: "transform" });
    return;
  }
  els.forEach((el) => {
    const amount = parseFloat(el.getAttribute("data-parallax")) || 12; // % premika
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("[data-parallax-trigger]") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
}

/* -------------------------------------------------------------------------
   2d) Lazy video — [data-lazy]: vir (data-src) se naloži šele ob približanju
       viewportu (preload="none"). reduced-motion: brez avtoplaya (prvi okvir).
   ------------------------------------------------------------------------- */
function initLazyVideo(reduce) {
  const vids = gsap.utils.toArray("video[data-lazy]");
  if (!vids.length) return;

  const load = (v) => {
    const s = v.querySelector("source[data-src]");
    if (s && !s.getAttribute("src")) {
      s.setAttribute("src", s.getAttribute("data-src"));
      v.load();
    }
    if (reduce) {
      v.autoplay = false;
      try { v.pause(); } catch (e) {}
    } else if (v.play) {
      v.play().catch(() => {}); // autoplay policy: muted -> dovoljeno
    }
  };

  if (!("IntersectionObserver" in window)) {
    vids.forEach(load);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          load(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "200px" }
  );
  vids.forEach((v) => io.observe(v));
}

/* -------------------------------------------------------------------------
   3) CustomCursor — samo desktop (hover+fine), lerp 0.18, večji nad linki.
      Skrit na dotik napravah in pri reduced-motion.
   ------------------------------------------------------------------------- */
function initCursor() {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;
  const root = document.documentElement;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx;
  let cy = my;

  // Nativni kazalec skrijemo ŠELE ko je gold obroč viden (po prvem premiku).
  // Tako po nalaganju strani / vračanju nazaj vedno vidiš vsaj nativni kazalec.
  const show = () => {
    cursor.classList.add("is-visible");
    root.classList.add("has-cursor");
  };
  const hide = () => {
    cursor.classList.remove("is-visible");
    root.classList.remove("has-cursor"); // vrni nativni kazalec
  };

  window.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!cursor.classList.contains("is-visible")) show();
    },
    { passive: true }
  );

  // Večji obroč nad interaktivnimi elementi
  const interactive = "a, button, input, textarea, select, label, [data-cursor]";
  document.addEventListener("mouseover", (e) => {
    if (e.target instanceof Element && e.target.closest(interactive))
      cursor.classList.add("is-active");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target instanceof Element && e.target.closest(interactive))
      cursor.classList.remove("is-active");
  });
  // Kazalec zapusti okno -> skrij obroč in vrni nativni kazalec
  document.addEventListener("mouseleave", hide);
  // Ob vrnitvi v okno (bfcache / back): pokaži, ko se kazalec spet premakne
  window.addEventListener("pageshow", hide);

  // Lerp sledenje na gsap.ticker (isti loop kot Lenis)
  addTicker(() => {
    cx += (mx - cx) * CURSOR_LERP;
    cy += (my - cy) * CURSOR_LERP;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
  });
}

/* -------------------------------------------------------------------------
   Vstopna točka
   ------------------------------------------------------------------------- */
export function initMotion() {
  const reduce = prefersReduced();
  const lenis = reduce ? null : initLenis();
  initReveals(reduce);
  initCountUp(reduce);
  initDepth(reduce);
  initParallax(reduce);
  initLazyVideo(reduce);
  if (!reduce && canHover()) initCursor();
  // Loader + hero razkritje poganja majhen inline skript v BaseLayout
  // (neodvisno od te težke datoteke -> hiter LCP). Tu le osvežimo pozicije.
  ScrollTrigger.refresh();

  // Debug ročka (samo dev): zamrzni/odmrzni rAF, dostop do lenis/gsap za posnetke
  if (import.meta.env.DEV) {
    window.__motion = { lenis, gsap, ScrollTrigger, freeze: freezeMotion, unfreeze: unfreezeMotion };
  }
}

export default initMotion;
