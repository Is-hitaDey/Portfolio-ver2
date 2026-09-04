import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";
import { useParallax, useReveal, splitWords } from "../lib/anim";
import { images, profile } from "../data/portfolio";

gsap.registerPlugin(useGSAP);

const facts = ["Based in Kolkata", "B.Tech CSE @ NSEC", "MERN + GenAI"];

export default function About() {
  const root = useRef(null);
  useReveal(root);
  useParallax(root);

  /* word-by-word scrub reveal for the manifesto paragraph */
  useGSAP(
    () => {
      const p = root.current?.querySelector("[data-words]");
      if (!p) return;
      const words = splitWords(p);
      gsap.fromTo(
        words,
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top 82%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} id="about" className="px-5 py-28 md:px-10 md:py-44">
      <SectionHeading index="01" eyebrow="About me">
        Design-minded <span className="font-serifd font-normal lowercase italic text-acid">developer</span>
      </SectionHeading>

      <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-8">
        {/* manifesto */}
        <div className="md:col-span-7">
          <p
            data-words
            className="font-grotesk text-2xl font-medium leading-snug text-paper md:text-[2.6rem] md:leading-[1.25]"
          >
            {profile.about}
          </p>
          <p className="mt-8 font-serifd text-xl italic text-mute md:text-2xl" data-reveal>
            ( currently 120+ problems deep into DSA — and counting )
          </p>

          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            {facts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-line px-4 py-2 font-jbmono text-[11px] uppercase tracking-[0.22em] text-mute"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>

        {/* portrait */}
        <div className="md:col-span-5" data-reveal>
          <div
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line"
            data-parallax-wrap
            data-cursor
          >
            <img
              src={images.portraitImg}
              alt="Ishita Dey — portrait"
              data-parallax
              className="h-full w-full scale-[1.18] object-cover transition-[filter] duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink/70 px-4 py-2 backdrop-blur-sm">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-acid" />
              <span className="font-jbmono text-[10px] uppercase tracking-[0.25em] text-paper">
                Ishita Dey — {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
