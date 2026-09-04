import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Single Lenis instance driving buttery smooth scroll,
 * synced with GSAP's ticker so ScrollTrigger stays in lockstep.
 */
export const lenis = new Lenis({
  lerp: 0.09,
  smoothWheel: true,
});

lenis.on("scroll", ScrollTrigger.update);

const raf = (time) => {
  lenis.raf(time * 1000);
};

gsap.ticker.add(raf);
gsap.ticker.lagSmoothing(0);

export const stopScroll = () => lenis.stop();
export const startScroll = () => lenis.start();

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

export const scrollToId = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  lenis.scrollTo(el, { duration: 1.6, easing: easeOutQuart });
};

export const scrollToTop = () => {
  lenis.scrollTo(0, { duration: 1.6, easing: easeOutQuart });
};
