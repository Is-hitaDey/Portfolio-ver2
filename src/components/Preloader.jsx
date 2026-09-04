import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { stopScroll, startScroll } from "../lib/scroll";

gsap.registerPlugin(useGSAP);

export default function Preloader({ onComplete }) {
  const root = useRef(null);
  const finished = useRef(false);

  useGSAP(
    () => {
      stopScroll();

      const q = gsap.utils.selector(root);
      const num = q(".pre-num")[0];
      const counter = { v: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          if (finished.current) return;
          finished.current = true;
          startScroll();
          onComplete();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 2.1,
        ease: "power2.inOut",
        onUpdate: () => {
          num.textContent = String(Math.round(counter.v)).padStart(3, "0");
        },
      })
        .to(q(".pre-bar-fill"), { scaleX: 1, duration: 2.1, ease: "power2.inOut" }, 0)
        .to(
          q(".pre-fade"),
          { yPercent: -130, autoAlpha: 0, duration: 0.65, ease: "power3.in", stagger: 0.07 },
          "+=0.25"
        )
        .to(q(".pre-ink"), { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.15")
        .to(root.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.72")
        .set(root.current, { display: "none" });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="fixed inset-0 z-[90]">
      {/* acid layer revealed mid-exit */}
      <div className="absolute inset-0 bg-acid" />

      {/* main ink panel */}
      <div className="pre-ink absolute inset-0 flex flex-col justify-between bg-ink px-5 py-6 md:px-10 md:py-8">
        <div className="flex items-start justify-between overflow-hidden font-jbmono text-[11px] uppercase tracking-[0.3em] text-mute">
          <span className="pre-fade inline-block">Ishita Dey</span>
          <span className="pre-fade inline-block">Portfolio © 2025</span>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="overflow-hidden">
            <span className="pre-fade block font-jbmono text-[11px] uppercase tracking-[0.3em] text-mute">
              Assembling experience
            </span>
            <h1 className="pre-fade mt-3 font-syne text-[18vw] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-paper md:text-[13vw]">
              <span className="pre-num">000</span>
            </h1>
          </div>
          <div className="mb-4 hidden overflow-hidden md:block">
            <span className="pre-fade block text-right font-serifd text-3xl italic text-acid">
              react · node · express · mongo
            </span>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-line">
          <div className="pre-bar-fill h-full w-full origin-left scale-x-0 bg-acid" />
        </div>
      </div>
    </div>
  );
}
