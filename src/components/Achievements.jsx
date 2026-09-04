import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/anim";
import { achievements } from "../data/portfolio";

gsap.registerPlugin(useGSAP);

export default function Achievements() {
  const root = useRef(null);
  useReveal(root);

  /* count-up for the big numbers */
  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      q(".ach-num").forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const suffix = el.dataset.suffix || "";
        if (!target) return;
        const state = { v: 0 };
        gsap.to(state, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(state.v)}${suffix}`;
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="achievements" className="px-5 py-28 md:px-10 md:py-44">
      <SectionHeading index="06" eyebrow="Recognition">
        Proof of{" "}
        <span className="font-serifd font-normal lowercase italic text-acid">work</span>
      </SectionHeading>

      <div className="mt-16 md:mt-24">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group grid gap-4 border-t border-line px-2 py-10 transition-colors duration-300 last:border-b hover:bg-ink-2 md:grid-cols-12 md:items-center md:px-4 md:py-12"
            data-reveal
          >
            <div className="md:col-span-4">
              <span
                className="ach-num text-outline font-syne text-7xl font-extrabold leading-none transition-all duration-300 group-hover:text-acid md:text-8xl"
                style={{ WebkitTextStrokeWidth: "1.5px" }}
                data-count={item.count || undefined}
                data-suffix={item.suffix || undefined}
              >
                {item.count ? `0${item.suffix}` : item.display}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-syne text-2xl font-bold uppercase tracking-tight md:text-3xl">
                {item.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-mute md:col-span-4 md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
