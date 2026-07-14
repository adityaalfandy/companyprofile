"use client";

import { useCounter, useScrollAnimation } from "@/hooks/useAnimations";

const stats = [
  { value: 800, suffix: "M+", label: "Revenue Trajectory", sub: "dalam 6 bulan" },
  { value: 98, suffix: "%", label: "Akurasi Stok", sub: "tercapai" },
  { value: 1000, suffix: "%", label: "Kinerja Naik", sub: "peningkatan" },
  { value: 50, suffix: "+", label: "Organisasi", sub: "telah dilayani" },
];

function StatCard({ stat, index }) {
  const { ref, count } = useCounter(stat.value, 2000);

  return (
    <div
      ref={ref}
      className={`relative text-center p-6 md:p-8`}
    >
      {/* Vertical divider on desktop (not on first) */}
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/4 bottom-1/4 w-px bg-white/10" />
      )}

      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gold-500 leading-none">
        {count}{stat.suffix}
      </div>
      <div className="mt-3 text-sm md:text-base font-semibold text-white/90 font-heading">
        {stat.label}
      </div>
      <div className="mt-1 text-xs text-neutral-400">
        {stat.sub}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div ref={ref} className="animate-on-scroll mx-auto max-w-[1280px] px-6">
        {/* Accent bar */}
        <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
