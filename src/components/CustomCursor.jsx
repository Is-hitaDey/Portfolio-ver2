import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    gsap.set([d, r], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const dotX = gsap.quickTo(d, "x", { duration: 0.12, ease: "power3" });
    const dotY = gsap.quickTo(d, "y", { duration: 0.12, ease: "power3" });
    const ringX = gsap.quickTo(r, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(r, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      gsap.to(r, {
        scale: target ? 2.6 : 1,
        opacity: target ? 0.85 : 1,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(d, { scale: target ? 0.4 : 1, duration: 0.35, ease: "power3.out" });
    };

    const onLeave = () => {
      gsap.to([d, r], { autoAlpha: 0, duration: 0.25 });
    };
    const onEnter = () => {
      gsap.to([d, r], { autoAlpha: 1, duration: 0.25 });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
