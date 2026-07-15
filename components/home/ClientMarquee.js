"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import Image from "next/image";

const row1 = [
  { name: "Kemenkes RI", logo: "/logos/kemenkes.png" },
  { name: "BNI", logo: "/logos/bni.png" },
  { name: "LKPP", logo: "/logos/lkpp.png" },
  { name: "OJK", logo: "/logos/ojk.png" },
  { name: "Pos Indonesia", logo: "/logos/posindonesia.png" },
];

const row2 = [
  { name: "Indosat Ooredoo Hutchison", logo: "/logos/indosat.svg" },
  { name: "ITB", logo: "/logos/itb.png" },
  { name: "UNPAD", logo: "/logos/unpad.png" },
  { name: "FTUI", logo: "/logos/ui.png" },
  { name: "BNI Corporate University", logo: "/logos/bni.png" },
];

function ClientLogo({ name, logo }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-3 mx-2 rounded-lg bg-surface border border-border-subtle min-w-[200px] h-[100px] hover:shadow-sm hover:border-border-brand transition-all duration-200 group">
      {logo && (
        <div className="flex-1 w-full flex items-center justify-center mb-1">
          <img
            src={logo}
            alt={`Logo ${name}`}
            className="object-scale-down max-h-[48px] max-w-[140px] opacity-70 group-hover:opacity-100 transition-all duration-200 grayscale group-hover:grayscale-0 group-hover:scale-110"
          />
        </div>
      )}
      <span className="text-[12px] font-semibold text-ink-500 group-hover:text-ink-900 transition-colors duration-200 whitespace-nowrap text-center mt-auto" style={{ fontFamily: "var(--font-body)" }}>
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
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-canvas-muted to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-canvas-muted to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden flex flex-col gap-4">
            <div className="marquee-track">
              {[...row1, ...row1, ...row1].map((client, i) => (
                <ClientLogo key={`r1-${client.name}-${i}`} name={client.name} logo={client.logo} width={client.width} height={client.height} />
              ))}
            </div>
            <div className="marquee-track" style={{ animationDirection: "reverse" }}>
              {[...row2, ...row2, ...row2].map((client, i) => (
                <ClientLogo key={`r2-${client.name}-${i}`} name={client.name} logo={client.logo} width={client.width} height={client.height} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
