import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Split an element's text into word spans (for scroll-scrubbed opacity reveals). */
export function splitWords(el) {
  const text = el.textContent ?? "";
  el.textContent = "";
  const spans = [];
  text
    .split(/\s+/)
    .filter(Boolean)
    .forEach((word) => {
      const s = document.createElement("span");
      s.textContent = word;
      s.style.display = "inline-block";
      s.style.willChange = "opacity";
      el.appendChild(s);
      el.appendChild(document.createTextNode(" "));
      spans.push(s);
    });
  return spans;
}

/**
 * Shared scroll-reveal behaviour.
 *  - [data-reveal]       fade + rise into view
 *  - [data-reveal-line]  masked line that slides up out of an overflow-hidden parent
 */
export function useReveal(scope) {
  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);

      gsap.utils.toArray(q("[data-reveal]")).forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      gsap.utils.toArray(q("[data-reveal-line]")).forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 1.25,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top 92%",
            },
          }
        );
      });
    },
    { scope }
  );
}

/** Parallax drift for [data-parallax] images inside a scoped section. */
export function useParallax(scope) {
  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      gsap.utils.toArray(q("[data-parallax]")).forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -9 },
          {
            yPercent: 9,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("[data-parallax-wrap]") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope }
  );
}
