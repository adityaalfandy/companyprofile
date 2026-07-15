"use client";

import { useCounter, useScrollAnimation } from "@/hooks/useAnimations";

const stats = [
  { value: 800, suffix: "M+", label: "Revenue Trajectory", sub: "dalam 6 bulan" },
  { value: 98, suffix: "%", label: "Akurasi Stok", sub: "tercapai" },
  { value: 1000, suffix: "%", label: "Kinerja Naik", sub: "peningkatan" },
  { value: 50, suffix: "+", label: "Organisasi", sub: "telah dilayani" },
];

function StatCard({ stat }) {
  const { ref, count } = useCounter(stat.value, 2200);

  return (
    <div ref={ref} className="card-inverse p-8 text-center">
      <div className="text-[clamp(36px,5vw,56px)] font-bold leading-none text-gold-500" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
        {count}{stat.suffix}
      </div>
      <div className="mt-3 text-[14px] font-semibold text-white/90" style={{ fontFamily: "var(--font-display)" }}>
        {stat.label}
      </div>
      <div className="mt-1 micro text-white/40">
        {stat.sub}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="bg-canvas-inverse py-20 md:py-24">
      <div ref={ref} className="animate-on-scroll mx-auto max-w-[1200px] px-8">
        <p className="overline text-center text-teal-500 mb-10">Hasil Terukur</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
