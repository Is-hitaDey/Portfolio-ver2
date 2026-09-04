import { Asterisk } from "lucide-react";
import { cn } from "../utils/cn";

/** Infinite seamless marquee — content is duplicated and translated -50%. */
export default function Marquee({
  items,
  className,
  itemClassName,
  speed = 32,
  outlineEvery = 0,
}) {
  const row = (ariaHidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span
            className={cn(
              "whitespace-nowrap px-5 md:px-8",
              outlineEvery > 0 && i % outlineEvery === outlineEvery - 1
                ? "text-outline"
                : "",
              itemClassName
            )}
          >
            {item}
          </span>
          <Asterisk className="size-[1em] shrink-0 text-acid" strokeWidth={2.5} />
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
