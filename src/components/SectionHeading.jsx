export default function SectionHeading({ index, eyebrow, children }) {
  return (
    <div>
      <div
        className="flex items-center justify-between border-t border-line pt-4 font-jbmono text-[11px] uppercase tracking-[0.3em] text-mute"
        data-reveal
      >
        <span>( {index} )</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-8 font-syne text-[clamp(2.7rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] md:mt-12">
        <span className="block overflow-hidden">
          <span className="block" data-reveal-line>
            {children}
          </span>
        </span>
      </h2>
    </div>
  );
}
