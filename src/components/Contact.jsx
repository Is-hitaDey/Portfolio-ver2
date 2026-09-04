import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { useReveal } from "../lib/anim";
import { profile } from "../data/portfolio";
import { scrollToTop } from "../lib/scroll";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const root = useRef(null);
  const [time, setTime] = useState("");
  useReveal(root);

  /* ghost headline drifts on scroll */
  useGSAP(
    () => {
      gsap.fromTo(
        ".ghost-word",
        { yPercent: 34 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer ref={root} id="contact" className="relative overflow-hidden px-5 pt-32 md:px-10 md:pt-48">
      <div className="pointer-events-none absolute left-1/2 top-24 size-[30rem] -translate-x-1/2 rounded-full bg-acid/[0.06] blur-[130px]" />

      <div
        className="flex items-center justify-between border-t border-line pt-4 font-jbmono text-[11px] uppercase tracking-[0.3em] text-mute"
        data-reveal
      >
        <span>( 07 )</span>
        <span>Say hello</span>
      </div>

      <div className="mt-14 md:mt-20">
        <p className="font-serifd text-2xl italic text-mute md:text-3xl" data-reveal>
          have an idea in mind?
        </p>
        <a href={`mailto:${profile.email}`} className="group mt-4 block" data-reveal>
          <span className="block overflow-hidden">
            <span className="block" data-reveal-line>
              <span className="font-syne text-[clamp(3rem,11.5vw,11rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] transition-colors duration-300 group-hover:text-acid">
                Let's talk
              </span>
            </span>
          </span>
          <span className="mt-4 inline-flex items-center gap-3 font-jbmono text-[11px] uppercase tracking-[0.25em] text-mute">
            {profile.email}
            <ArrowUpRight className="size-4 text-acid transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </a>
      </div>

      <div className="mt-14 flex flex-wrap gap-3" data-reveal>
        {profile.phones.map((phone) => (
          <a
            key={phone}
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="rounded-full border border-line px-5 py-2.5 font-jbmono text-[11px] tracking-[0.15em] text-mute transition-colors duration-300 hover:border-acid/50 hover:text-paper"
          >
            {phone}
          </a>
        ))}
        <span className="rounded-full border border-line px-5 py-2.5 font-jbmono text-[11px] uppercase tracking-[0.15em] text-mute">
          {profile.location}
        </span>
      </div>

      {/* socials */}
      <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3" data-reveal>
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-ink px-6 py-8 transition-colors duration-300 hover:bg-acid hover:text-ink"
          >
            <span className="font-syne text-xl font-bold uppercase tracking-tight md:text-2xl">
              {social.label}
            </span>
            <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        ))}
      </div>

      {/* bottom bar */}
      <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 font-jbmono text-[11px] uppercase tracking-[0.22em] text-mute md:mt-28">
        <span>© {new Date().getFullYear()} Ishita Dey</span>
        <span className="hidden md:block">Kolkata — {profile.coordinates}</span>
        <span>
          Local time — <span className="text-paper">{time}</span>
        </span>
        <Magnetic>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-paper transition-colors hover:text-acid"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="size-4" />
          </button>
        </Magnetic>
      </div>

      {/* ghost headline */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden>
        <div className="ghost-word text-outline-faint whitespace-nowrap text-center font-syne text-[23vw] font-extrabold uppercase leading-[0.78]">
          Ishita
        </div>
      </div>
    </footer>
  );
}
