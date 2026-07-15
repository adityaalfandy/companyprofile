"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

const clients = [
  "Kemenkes RI", "BNI", "LKPP", "OJK", "Pos Indonesia",
  "Indosat Ooredoo Hutchison", "ITB", "UNPAD", "FTUI", "BNI Corporate University",
];

function ClientLogo({ name }) {
  return (
    <div className="flex items-center justify-center px-6 py-2.5 mx-2 rounded-lg bg-surface border border-border-subtle min-w-[160px] h-[48px] hover:shadow-sm hover:border-border-brand transition-all duration-200 group">
      <span className="text-[13px] font-semibold text-ink-300 group-hover:text-ink-900 transition-colors duration-200 whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
        {name}
      </span>
    </div>
  );
}

export default function ClientMarquee() {
  const ref = useScrollAnimation();

  return (
    <section className="py-10 md:py-14 bg-canvas-muted border-y border-border-subtle overflow-hidden">
      <div ref={ref} className="animate-on-scroll">
        <p className="overline text-center text-ink-300 mb-7">
          Dipercaya oleh organisasi di seluruh Indonesia
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-canvas-muted to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-canvas-muted to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...clients, ...clients].map((name, i) => (
                <ClientLogo key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
