import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Asterisk, MapPin } from "lucide-react";
import Marquee from "./Marquee";
import Magnetic from "./Magnetic";
import { marqueeItems, profile } from "../data/portfolio";
import { scrollToId } from "../lib/scroll";

gsap.registerPlugin(useGSAP);

export default function Hero({ start }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      /* scroll-out parallax on the name block — always armed */
      gsap.to(q(".hero-name"), {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* hidden states — re-applied every run so the intro always plays from scratch */
      gsap.set(q("[data-hero]"), { y: 56, autoAlpha: 0 });
      gsap.set(q("[data-hero-line]"), { yPercent: 120 });
      gsap.set(q(".hero-marquee"), { yPercent: 100, autoAlpha: 0 });

      if (!start) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 });
      tl.to(q("[data-hero-line]"), { yPercent: 0, duration: 1.35, stagger: 0.12 })
        .to(
          q("[data-hero]"),
          { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08 },
          "-=0.85"
        )
        .to(q(".hero-marquee"), { yPercent: 0, autoAlpha: 1, duration: 0.9 }, "-=0.6");
    },
    { scope: root, dependencies: [start], revertOnUpdate: true }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-acid/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -left-52 top-1/3 size-[28rem] rounded-full bg-paper/[0.04] blur-[100px]" />

      <div className="flex flex-1 flex-col justify-between px-5 pt-24 md:px-10 md:pt-28">
        {/* meta row */}
        <div
          className="flex items-center justify-between font-jbmono text-[11px] uppercase tracking-[0.3em] text-mute"
          data-hero
        >
          <span>PortFolio — {new Date().getFullYear()}</span>
          <span className="hidden md:block">{profile.role}</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-acid" />
            Kolkata, IN
          </span>
        </div>

        {/* giant name */}
        <div className="hero-name mt-8 md:mt-4">
          <h1 className="font-syne font-extrabold uppercase leading-[0.82] tracking-[-0.03em]">
            <span className="block overflow-hidden">
              <span data-hero-line className="block text-[clamp(4.5rem,17vw,19rem)]">
                Ishita
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                data-hero-line
                className="flex items-center gap-[0.08em] text-[clamp(4.5rem,20vw,19rem)]"
              >
                <span className="text-outline">Dey</span>
                <Asterisk
                  className="size-[0.3em] shrink-0 animate-spin-slow text-acid"
                  strokeWidth={2.5}
                />
              </span>
            </span>
          </h1>
        </div>

        {/* bottom block */}
        <div className="mt-10 grid items-end gap-10 pb-10 md:mt-6 md:grid-cols-12 md:pb-12">
          {/* rotating badge */}
          <div className="hidden md:col-span-3 md:block" data-hero>
            <div className="relative size-32">
              <svg viewBox="0 0 100 100" className="size-full animate-spin-slow">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text className="fill-mute font-jbmono text-[9px] uppercase" style={{ letterSpacing: "2.6px" }}>
                  <textPath href="#circlePath">
                    mern stack · open to work · mern stack ·
                  </textPath>
                </text>
              </svg>
              <ArrowDown className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-acid" />
            </div>
          </div>

          {/* blurb + ctas */}
          <div className="md:col-span-6" data-hero>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-acid" />
              <span className="font-jbmono text-[11px] uppercase tracking-[0.22em] text-mute">
                {profile.availability}
              </span>
            </div>
            <p className="max-w-md text-base leading-relaxed text-mute md:text-lg">
              Full-stack developer crafting fast, human-centered products with the
              MERN stack —{" "}
              <span className="font-serifd italic text-paper">from pixel to endpoint.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Magnetic>
                <button
                  onClick={() => scrollToId("#work")}
                  className="group flex items-center gap-3 rounded-full bg-acid px-7 py-3.5 font-jbmono text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-transform duration-300"
                >
                  Selected work
                  <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
                </button>
              </Magnetic>
              <a
                href={`mailto:${profile.email}`}
                className="font-jbmono text-[11px] uppercase tracking-[0.22em] text-paper underline decoration-acid/60 underline-offset-8 transition-colors hover:text-acid"
              >
                Email me
              </a>
            </div>
          </div>

          {/* right meta */}
          <div
            className="flex gap-8 font-jbmono text-[11px] uppercase tracking-[0.25em] text-mute md:col-span-3 md:flex-col md:items-end md:gap-3 md:text-right"
            data-hero
          >
            <span>GMT +5:30</span>
            <span>{profile.coordinates}</span>
            <span className="text-acid">© ID — 2025</span>
          </div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="hero-marquee border-y border-line py-4 md:py-5">
        <Marquee
          items={marqueeItems}
          speed={36}
          outlineEvery={2}
          itemClassName="font-syne text-2xl md:text-4xl font-bold uppercase tracking-tight"
        />
      </div>
    </section>
  );
}
