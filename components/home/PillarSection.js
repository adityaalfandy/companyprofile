"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section } from "@/components/Section";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Training",
    tag: "Empathy",
    tagColor: "bg-teal-100 text-teal-600",
    description: "Program pelatihan berbasis 80% aktivitas dan 20% insight, dirancang untuk membangun kapabilitas tim secara langsung dan terukur.",
    href: "/program-training",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="m16 12-4-4-4 4" /><path d="M12 16V8" />
      </svg>
    ),
    title: "Consulting",
    tag: "System",
    tagColor: "bg-gold-100 text-gold-600",
    description: "Pendampingan transformasi organisasi melalui siklus SCAN–SHIFT–SCALE–SCRIBE, disesuaikan dengan konteks dan kesiapan perubahan.",
    href: "/layanan",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m7 17 4-8 4 4 6-10" />
      </svg>
    ),
    title: "Research",
    tag: "Result",
    tagColor: "bg-error-bg text-magenta-600",
    description: "Riset dan pengukuran dampak yang menjadi dasar pengambilan keputusan strategis berbasis data dan bukti empiris.",
    href: "/framework",
  },
];

function PillarCard({ pillar, index }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll delay-${index + 1} card-elevated group relative
        ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Tag-pillar */}
      <span className={`tag-pillar ${pillar.tagColor} mb-5`}>
        {pillar.tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-canvas-muted text-ink-700 flex items-center justify-center mb-5 group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors duration-200">
        {pillar.icon}
      </div>

      <h3 className="text-[22px] font-semibold text-ink-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        {pillar.title}
      </h3>
      <p className="text-[14px] text-ink-500 leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
        {pillar.description}
      </p>

      <Link href={pillar.href} className="btn-ghost inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-600 group/link">
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

      {/* Bento grid: 1 large + 2 stacked */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pillars.map((pillar, i) => (
          <PillarCard key={pillar.title} pillar={pillar} index={i} />
        ))}
      </div>
    </Section>
  );
}
