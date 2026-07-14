"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";

const stages = [
  {
    code: "SCAN",
    title: "Diagnosis",
    color: "border-teal-500",
    accent: "bg-teal-500",
    lightBg: "bg-teal-50",
    description: "Memetakan kondisi aktual organisasi melalui assessment mendalam, wawancara pemangku kepentingan, dan analisis data operasional.",
    deliverables: ["Level Report", "Assessment Results", "Gap Analysis", "Stakeholder Interview Summary"],
  },
  {
    code: "SHIFT",
    title: "Behavior & Way of Working",
    color: "border-gold-500",
    accent: "bg-gold-500",
    lightBg: "bg-gold-50",
    description: "Menggeser pola pikir dan perilaku kerja tim melalui learning sessions, workshops, dan intervensi perilaku yang terarah.",
    deliverables: ["Learning Sessions", "Behavioral Workshops", "Mindset Shift Program", "Change Readiness Assessment"],
  },
  {
    code: "SCALE",
    title: "Strategy Implementation",
    color: "border-magenta-500",
    accent: "bg-magenta-500",
    lightBg: "bg-pink-50",
    description: "Mengimplementasikan strategi transformasi secara terukur dan bertahap di seluruh lini organisasi.",
    deliverables: ["Transformation Roadmap", "Pilot Programs", "Implementation Guide", "Progress Tracking Dashboard"],
  },
  {
    code: "SCRIBE",
    title: "Research & Impact",
    color: "border-navy-500",
    accent: "bg-navy-500",
    lightBg: "bg-navy-50",
    description: "Mendokumentasikan proses dan mengukur dampak perubahan untuk memastikan keberlanjutan transformasi.",
    deliverables: ["Impact Report", "Research Documentation", "ROI Analysis", "Sustainability Framework"],
  },
];

export default function LayananPage() {
  const [openStage, setOpenStage] = useState(0);
  const ref = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Layanan
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Proses Engagement
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Setiap fase disesuaikan dengan konteks organisasi dan tingkat kesiapan perubahan.
          </p>
        </div>
      </section>

      {/* Engagement Cycle */}
      <Section>
        <SectionHeader
          badge="Siklus 4 Tahap"
          title="SCAN · SHIFT · SCALE · SCRIBE"
          subtitle="Dari diagnosis mendalam hingga pengukuran dampak nyata."
        />

        <div ref={ref} className="animate-on-scroll max-w-3xl mx-auto space-y-4">
          {stages.map((stage, i) => (
            <div
              key={stage.code}
              className={`rounded-2xl border-2 ${openStage === i ? stage.color : "border-neutral-200"} bg-white shadow-sm overflow-hidden transition-all duration-300`}
            >
              {/* Header (clickable) */}
              <button
                onClick={() => setOpenStage(openStage === i ? -1 : i)}
                className="w-full flex items-center gap-4 p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${stage.lightBg} flex items-center justify-center font-heading text-sm font-bold ${openStage === i ? "text-navy-500" : "text-neutral-400"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-navy-500">{stage.code}</h3>
                  <p className="text-sm text-neutral-500">{stage.title}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${openStage === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Expandable content */}
              <div className={`transition-all duration-300 overflow-hidden ${openStage === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-6 border-t border-neutral-100 pt-4">
                  <p className="text-neutral-600 mb-4 leading-relaxed">{stage.description}</p>
                  <h4 className="text-sm font-semibold text-navy-500 mb-2 font-heading">Deliverables:</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {stage.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-neutral-500">
                        <svg className="w-4 h-4 text-teal-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/kontak?topik=Layanan - ${stage.code}`}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors"
                  >
                    Mulai dari {stage.code}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-400 mt-8 italic max-w-xl mx-auto">
          &ldquo;Setiap fase disesuaikan dengan konteks organisasi dan tingkat kesiapan perubahan.&rdquo;
        </p>
      </Section>

      <CTABanner />
    </>
  );
}
