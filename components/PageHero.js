"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

/**
 * Shared hero section for all sub-pages.
 * Uses canvas-inverse bg (navy-900), overline badge, Poppins display heading.
 */
export default function PageHero({ badge, title, subtitle, children }) {
  const ref = useScrollAnimation();

  return (
    <section className="bg-section-hero bg-dot-grid pt-[128px] pb-20 md:pt-[144px] md:pb-24">
      <div ref={ref} className="animate-on-scroll mx-auto max-w-[1200px] px-8">
        {badge && (
          <span className="overline text-teal-500 mb-5 block">{badge}</span>
        )}
        <h1 className="text-hero-display text-white max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-[16px] md:text-[18px] text-white/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
