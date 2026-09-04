import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import { useParallax, useReveal } from "../lib/anim";
import { profile, projects } from "../data/portfolio";
import { cn } from "../utils/cn";

export default function Projects() {
  const root = useRef(null);
  useReveal(root);
  useParallax(root);

  return (
    <section ref={root} id="work" className="px-5 py-28 md:px-10 md:py-44">
      <SectionHeading index="03" eyebrow={`Selected work (0${projects.length})`}>
        Work that{" "}
        <span className="font-serifd font-normal lowercase italic text-acid">ships</span>
      </SectionHeading>

      <div className="mt-16 space-y-24 md:mt-28 md:space-y-36">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="group grid items-end gap-8 md:grid-cols-12"
          >
            {/* image */}
            <div
              className={cn(
                "md:col-span-7",
                i % 2 === 1 && "md:order-2"
              )}
              data-reveal
            >
              <a
                href={profile.socials[1].href}
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden rounded-2xl border border-line"
                data-parallax-wrap
              >
                <div className="aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <img
                    src={project.image}
                    alt={`${project.title} — interface preview`}
                    data-parallax
                    className="h-full w-full scale-[1.18] object-cover"
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-ink/70 px-4 py-2 font-jbmono text-[10px] uppercase tracking-[0.25em] text-paper backdrop-blur-sm">
                  PRJ — {project.id}
                </div>
                
              </a>
            </div>

            {/* meta */}
            <div
              className={cn("md:col-span-5", i % 2 === 1 && "md:order-1")}
            >
              <div
                className="flex items-center justify-between font-jbmono text-[11px] uppercase tracking-[0.25em] text-mute"
                data-reveal
              >
                <span>{project.period}</span>
                <span>{project.year}</span>
              </div>
              <h3
                className="mt-4 font-syne text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl"
                data-reveal
              >
                {project.title}
              </h3>
              <p className="mt-2 font-serifd text-2xl italic text-acid" data-reveal>
                {project.subtitle}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-mute md:text-base" data-reveal>
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5" data-reveal>
                {project.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-paper/85">
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-acid" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2" data-reveal>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1.5 font-jbmono text-[10px] tracking-[0.1em] text-mute"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* more on github */}
      <a
        href={profile.socials[1].href}
        target="_blank"
        rel="noreferrer"
        className="group mt-24 flex items-center justify-between border-t border-line pt-8 md:mt-36"
        data-reveal
      >
        <span className="font-syne text-2xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-acid md:text-4xl">
          More experiments & open source
        </span>
        <Magnetic>
          <span className="flex items-center gap-2 font-jbmono text-[11px] uppercase tracking-[0.25em] text-mute transition-colors duration-300 group-hover:text-paper">
            GitHub
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </Magnetic>
      </a>
    </section>
  );
}
