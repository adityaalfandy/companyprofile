"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section } from "@/components/Section";

const steps = [
  {
    code: "SCAN",
    title: "Diagnosis",
    description: "Memetakan kondisi organisasi melalui assessment mendalam untuk memahami akar permasalahan.",
    tagColor: "bg-teal-100 text-teal-600",
    accentColor: "bg-teal-600",
  },
  {
    code: "SHIFT",
    title: "Behavior & Way of Working",
    description: "Menggeser pola pikir dan perilaku kerja tim melalui program pelatihan dan intervensi terarah.",
    tagColor: "bg-info-bg text-blue-accent",
    accentColor: "bg-blue-accent",
  },
  {
    code: "SCALE",
    title: "Strategy Implementation",
    description: "Mengimplementasikan strategi transformasi secara terukur di seluruh lini organisasi.",
    tagColor: "bg-error-bg text-magenta-600",
    accentColor: "bg-magenta-500",
  },
  {
    code: "SCRIBE",
    title: "Research & Impact",
    description: "Mendokumentasikan dan mengukur dampak perubahan untuk keberlanjutan dan peningkatan.",
    tagColor: "bg-gold-100 text-gold-600",
    accentColor: "bg-gold-500",
  },
];

export default function FrameworkPreview() {
  const ref = useScrollAnimation();

  return (
    <Section className="bg-canvas-muted">
      <SectionHeader
        badge="Pendekatan Kami"
        title="Siklus Engagement"
        subtitle="Empat tahap pendampingan yang dirancang untuk menghasilkan dampak nyata dan terukur."
      />

      <div ref={ref} className="animate-on-scroll">
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={step.code} className="card-base hover:shadow-md hover:-translate-y-1 transition-all duration-200 group relative overflow-hidden">
              {/* Tag pillar */}
              <span className={`tag-pillar ${step.tagColor} mb-5`}>
                {step.code}
              </span>

              {/* Step number */}
              <div className="text-[11px] font-semibold text-ink-300 tracking-wider uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Tahap {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="text-[16px] font-semibold text-ink-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>

              <p className="text-[14px] text-ink-500 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {step.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${step.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/layanan" className="btn-ghost inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-600 group">
            Selengkapnya tentang Proses Kami
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </Section>
  );
}
