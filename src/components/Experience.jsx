import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/anim";
import { scrollToId } from "../lib/scroll";
import { experience } from "../data/portfolio";

export default function Experience() {
  const root = useRef(null);
  useReveal(root);

  return (
    <section ref={root} id="experience" className="px-5 py-28 md:px-10 md:py-44">
      <SectionHeading index="04" eyebrow="Experience">
        Where I've{" "}
        <span className="font-serifd font-normal lowercase italic text-acid">worked</span>
      </SectionHeading>

      <div className="mt-16 md:mt-24">
        {experience.map((job) => (
          <div
            key={job.id}
            className="group relative overflow-hidden border-t border-line last:border-b"
            data-reveal
          >
            {/* hover sweep */}
            <div className="absolute inset-0 origin-bottom scale-y-0 bg-paper transition-transform duration-500 ease-out group-hover:scale-y-100" />

            <div className="relative grid gap-8 px-2 py-10 transition-colors duration-500 group-hover:text-ink md:grid-cols-12 md:px-4 md:py-14">
              <div className="md:col-span-3">
                <p className="font-jbmono text-[11px] uppercase tracking-[0.25em] text-mute transition-colors duration-500 group-hover:text-ink/60">
                  {job.period}
                </p>
                <p className="mt-2 font-jbmono text-[11px] uppercase tracking-[0.25em] text-mute transition-colors duration-500 group-hover:text-ink/60">
                  {job.location}
                </p>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-syne text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
                  {job.role}
                </h3>
                <p className="mt-3 font-serifd text-2xl italic text-acid transition-colors duration-500 group-hover:text-ink/80">
                  {job.company} — {job.type}
                </p>
                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-mute transition-colors duration-500 group-hover:text-ink/70 md:text-base"
                    >
                      <span className="mt-[8px] size-1.5 shrink-0 rounded-full bg-acid transition-colors duration-500 group-hover:bg-ink" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start justify-between gap-6 md:col-span-3 md:items-end">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1.5 font-jbmono text-[10px] tracking-[0.1em] text-mute transition-colors duration-500 group-hover:border-ink/30 group-hover:text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="size-8 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        className="mt-12 font-serifd text-2xl italic text-mute md:text-3xl"
        data-reveal
      >
        What's next? —{" "}
        <button
          onClick={() => scrollToId("#contact")}
          className="text-acid underline-offset-4 hover:underline"
        >
          maybe your team
        </button>
        .
      </p>
    </section>
  );
}
