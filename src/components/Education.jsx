import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/anim";
import { education } from "../data/portfolio";

export default function Education() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section ref={root} id="education" className="px-5 py-28 md:px-10 md:py-44">
      <SectionHeading index="05" eyebrow="Education">
        Learning{" "}
        <span className="font-serifd font-normal lowercase italic text-acid">journey</span>
      </SectionHeading>

      <div className="mt-16 md:mt-24">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="group grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-3 border-t border-line px-2 py-8 transition-colors duration-300 last:border-b hover:bg-ink-2 md:grid-cols-[160px_1fr_auto_auto] md:items-center md:px-4 md:py-10"
            data-reveal
          >
            <span className="font-jbmono text-[11px] uppercase tracking-[0.22em] text-mute">
              {entry.years}
            </span>
            <div>
              <h3 className="font-syne text-xl font-bold uppercase tracking-tight md:text-3xl">
                {entry.degree}
              </h3>
              <p className="mt-1.5 font-jbmono text-[11px] uppercase tracking-[0.2em] text-mute">
                {entry.institution}
              </p>
            </div>
            <span className="hidden font-jbmono text-[11px] uppercase tracking-[0.2em] text-mute md:block">
              {entry.location}
            </span>
            <span className="justify-self-end rounded-full border border-acid/40 px-4 py-2 font-jbmono text-[11px] tracking-[0.12em] text-acid">
              {entry.score}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
