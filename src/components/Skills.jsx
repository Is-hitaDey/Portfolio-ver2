import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/anim";
import { skills } from "../data/portfolio";

export default function Skills() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section ref={root} id="skills" className="px-5 py-28 md:px-10 md:py-44">
      <SectionHeading index="02" eyebrow="Capabilities">
        The <span className="text-outline">stack</span>
      </SectionHeading>

      <div className="mt-16 md:mt-24">
        {skills.map((group) => (
          <div
            key={group.id}
            className="group relative grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-4 border-t border-line px-2 py-8 transition-colors duration-300 last:border-b hover:bg-acid md:grid-cols-[70px_1.1fr_1.6fr_50px] md:px-4 md:py-10"
            data-reveal
            data-cursor
          >
            <span className="font-jbmono text-xs text-mute transition-colors duration-300 group-hover:text-ink/60">
              ({group.id})
            </span>
            <h3 className="font-syne text-3xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-ink md:text-5xl">
              {group.label}
            </h3>
            <div className="col-span-2 flex flex-wrap gap-2 md:col-span-1">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-3.5 py-1.5 font-jbmono text-[11px] tracking-[0.08em] text-mute transition-colors duration-300 group-hover:border-ink/30 group-hover:text-ink/75"
                >
                  {item}
                </span>
              ))}
            </div>
            <ArrowUpRight className="hidden size-7 -translate-x-2 translate-y-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:block" />
          </div>
        ))}
      </div>

      <p
        className="mt-10 max-w-xl font-serifd text-xl italic text-mute md:text-2xl"
        data-reveal
      >
        …and whatever the product needs next — I learn fast.
      </p>
    </section>
  );
}
