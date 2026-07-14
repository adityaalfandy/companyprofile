"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section } from "@/components/Section";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Training",
    description:
      "Program pelatihan berbasis 80% aktivitas dan 20% insight, dirancang untuk membangun kapabilitas tim secara langsung dan terukur.",
    href: "/program-training",
    color: "teal",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
    title: "Consulting",
    description:
      "Pendampingan transformasi organisasi melalui siklus SCAN–SHIFT–SCALE–SCRIBE, disesuaikan dengan konteks dan kesiapan perubahan.",
    href: "/layanan",
    color: "gold",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 17 4-8 4 4 6-10" />
      </svg>
    ),
    title: "Research",
    description:
      "Riset dan pengukuran dampak yang menjadi dasar pengambilan keputusan strategis berbasis data dan bukti empiris.",
    href: "/framework",
    color: "magenta",
  },
];

const colorMap = {
  teal: {
    bg: "bg-teal-50",
    icon: "text-teal-500",
    border: "hover:border-teal-300",
  },
  gold: {
    bg: "bg-gold-50",
    icon: "text-gold-500",
    border: "hover:border-gold-500/30",
  },
  magenta: {
    bg: "bg-pink-50",
    icon: "text-magenta-500",
    border: "hover:border-magenta-500/30",
  },
};

function PillarCard({ pillar, index }) {
  const ref = useScrollAnimation();
  const colors = colorMap[pillar.color];

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${index + 1} group relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 ${colors.border} hover:shadow-lg hover:-translate-y-1`}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.icon} mb-6 transition-transform duration-300 group-hover:scale-105`}>
        {pillar.icon}
      </div>

      {/* Content */}
      <h3 className="font-heading text-xl font-bold text-navy-500 mb-3">
        {pillar.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-6">
        {pillar.description}
      </p>

      {/* Link */}
      <Link
        href={pillar.href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors group/link"
      >
        Selengkapnya
        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

export default function PillarSection() {
  return (
    <Section>
      <SectionHeader
        badge="Tiga Pilar"
        title="Apa yang Kami Lakukan"
        subtitle="Solusi terintegrasi untuk membangun organisasi yang adaptif, inovatif, dan berdampak."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar, i) => (
          <PillarCard key={pillar.title} pillar={pillar} index={i} />
        ))}
      </div>
    </Section>
  );
}
