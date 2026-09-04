import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "../utils/cn";
import { profile } from "../data/portfolio";
import { scrollToId, startScroll, stopScroll } from "../lib/scroll";

gsap.registerPlugin(useGSAP);

const links = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Work", href: "#work" },
  { index: "03", label: "Experience", href: "#experience" },
  { index: "04", label: "Education", href: "#education" },
  { index: "05", label: "Contact", href: "#contact" },
];

export default function Navbar({ ready }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const tl = useRef(null);

  /* entrance once the preloader is done */
  useGSAP(
    () => {
      if (!ready) {
        gsap.set(root.current, { y: -90, autoAlpha: 0 });
        return;
      }
      gsap.to(root.current, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" });
    },
    { scope: root, dependencies: [ready], revertOnUpdate: true }
  );

  /* menu overlay timeline */
  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      tl.current = gsap
        .timeline({ paused: true })
        .to(q(".menu-overlay"), {
          clipPath: "inset(0% 0 0% 0)",
          duration: 0.8,
          ease: "power4.inOut",
        })
        .fromTo(
          q(".menu-link-inner"),
          { yPercent: 120 },
          { yPercent: 0, duration: 0.7, ease: "power3.out", stagger: 0.07 },
          "-=0.3"
        )
        .fromTo(
          q(".menu-meta"),
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06 },
          "-=0.45"
        );
    },
    { scope: root }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (open) {
      stopScroll();
      tl.current.timeScale(1).play();
    } else {
      tl.current.timeScale(1.4).reverse();
      const t = setTimeout(() => startScroll(), 600);
      return () => clearTimeout(t);
    }
  }, [open]);

  const goTo = (href) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(href), 450);
  };

  return (
    <div ref={root}>
      {/* bar */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[85] px-5 py-4 md:px-10 md:py-5",
          !open && "bg-gradient-to-b from-ink/70 to-transparent"
        )}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => (open ? goTo("#top") : scrollToId("#top"))}
            className={cn(
              "font-syne text-lg font-extrabold uppercase tracking-tight transition-colors duration-300",
              open ? "text-ink" : "text-paper"
            )}
            aria-label="Home"
          >
            Ishita<span className={cn(open ? "text-ink/60" : "text-acid")}>.</span>Dey
          </button>

          <div className="flex items-center gap-6">
            <span
              className={cn(
                "hidden font-jbmono text-[11px] uppercase tracking-[0.3em] transition-colors duration-300 md:block",
                open ? "text-ink/60" : "text-mute"
              )}
            >
              Kolkata — {new Date().getFullYear()}
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "group flex items-center gap-2 font-jbmono text-[11px] uppercase tracking-[0.3em] transition-colors duration-300",
                open ? "text-ink" : "text-paper"
              )}
              aria-expanded={open}
            >
              {open ? "Close" : "Menu"}
              <Plus
                className={cn(
                  "size-4 transition-transform duration-500",
                  open && "rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* full-screen overlay */}
      <div
        className="menu-overlay fixed inset-0 z-[80] bg-acid text-ink"
        style={{ clipPath: "inset(0% 0 100% 0)" }}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-8 pt-24 md:px-10 md:pt-28">
          <nav className="flex flex-col">
            {links.map((link) => (
              <div key={link.href} className="overflow-hidden border-b border-ink/15">
                <button
                  onClick={() => goTo(link.href)}
                  className="menu-link-inner group flex w-full items-baseline gap-4 py-2 text-left md:gap-8"
                >
                  <span className="font-jbmono text-xs tracking-[0.2em] text-ink/50">
                    {link.index}
                  </span>
                  <span className="font-syne text-[11vw] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-4 md:text-[6.5vw]">
                    {link.label}
                  </span>
                  <ArrowUpRight className="ml-auto size-6 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:size-10" />
                </button>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="menu-meta">
              <p className="font-jbmono text-[11px] uppercase tracking-[0.3em] text-ink/50">
                Say hello
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 inline-block font-serifd text-2xl italic underline-offset-4 hover:underline md:text-3xl"
              >
                {profile.email}
              </a>
            </div>
            <div className="menu-meta flex gap-6">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-jbmono text-[11px] uppercase tracking-[0.25em] hover:underline"
                >
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
