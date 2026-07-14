"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section } from "@/components/Section";

const steps = [
  {
    code: "SCAN",
    title: "Diagnosis",
    description: "Memetakan kondisi organisasi melalui assessment mendalam untuk memahami akar permasalahan.",
    color: "bg-teal-500",
    lightColor: "bg-teal-50 text-teal-700",
  },
  {
    code: "SHIFT",
    title: "Behavior & Way of Working",
    description: "Menggeser pola pikir dan perilaku kerja tim melalui program pelatihan dan intervensi terarah.",
    color: "bg-gold-500",
    lightColor: "bg-gold-50 text-gold-500",
  },
  {
    code: "SCALE",
    title: "Strategy Implementation",
    description: "Mengimplementasikan strategi transformasi secara terukur di seluruh lini organisasi.",
    color: "bg-magenta-500",
    lightColor: "bg-pink-50 text-magenta-500",
  },
  {
    code: "SCRIBE",
    title: "Research & Impact",
    description: "Mendokumentasikan dan mengukur dampak perubahan untuk keberlanjutan dan peningkatan.",
    color: "bg-navy-500",
    lightColor: "bg-navy-50 text-navy-500",
  },
];

export default function FrameworkPreview() {
  const ref = useScrollAnimation();

  return (
    <Section className="bg-neutral-50">
      <SectionHeader
        badge="Pendekatan Kami"
        title="Siklus Engagement"
        subtitle="Empat tahap pendampingan yang dirancang untuk menghasilkan dampak nyata dan terukur."
      />

      <div ref={ref} className="animate-on-scroll">
        {/* Desktop: horizontal timeline */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.code} className="relative group">
              {/* Connection line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-neutral-200 -z-0 translate-x-1/2" />
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 z-10">
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.lightColor} font-heading text-sm font-bold mb-5`}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Code */}
                <h3 className="font-heading text-xl font-bold text-navy-500 mb-1">
                  {step.code}
                </h3>
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                  {step.title}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-6 right-6 h-1 ${step.color} rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors group"
          >
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
