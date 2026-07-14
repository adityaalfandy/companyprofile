"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

const clients = [
  "Kemenkes RI",
  "BNI",
  "LKPP",
  "OJK",
  "Pos Indonesia",
  "Indosat Ooredoo Hutchison",
  "ITB",
  "UNPAD",
  "FTUI",
  "BNI Corporate University",
];

function ClientLogo({ name }) {
  return (
    <div className="flex items-center justify-center px-8 py-3 mx-3 rounded-xl bg-neutral-100/60 border border-neutral-200/50 min-w-[180px] h-[60px] hover:bg-white hover:border-teal-200 hover:shadow-md transition-all duration-300 group">
      <span className="text-sm font-semibold text-neutral-400 group-hover:text-navy-500 transition-colors duration-300 whitespace-nowrap font-heading tracking-tight">
        {name}
      </span>
    </div>
  );
}

export default function ClientMarquee() {
  const ref = useScrollAnimation();

  return (
    <section className="py-12 md:py-16 bg-neutral-50 border-y border-neutral-200/50 overflow-hidden">
      <div ref={ref} className="animate-on-scroll">
        <p className="text-center text-sm font-medium text-neutral-500 mb-8 tracking-wide uppercase">
          Dipercaya oleh organisasi di seluruh Indonesia
        </p>

        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="marquee-track">
              {/* Duplicate for seamless loop */}
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
