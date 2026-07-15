"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";
import PageHero from "@/components/PageHero";

const stages = [
  { code: "SCAN", title: "Diagnosis", tagColor: "bg-teal-100 text-teal-600", borderColor: "border-teal-600",
    description: "Memetakan kondisi aktual organisasi melalui assessment mendalam, wawancara pemangku kepentingan, dan analisis data operasional.",
    deliverables: ["Level Report", "Assessment Results", "Gap Analysis", "Stakeholder Interview Summary"] },
  { code: "SHIFT", title: "Behavior & Way of Working", tagColor: "bg-info-bg text-blue-accent", borderColor: "border-blue-accent",
    description: "Menggeser pola pikir dan perilaku kerja tim melalui learning sessions, workshops, dan intervensi perilaku yang terarah.",
    deliverables: ["Learning Sessions", "Behavioral Workshops", "Mindset Shift Program", "Change Readiness Assessment"] },
  { code: "SCALE", title: "Strategy Implementation", tagColor: "bg-error-bg text-magenta-600", borderColor: "border-magenta-500",
    description: "Mengimplementasikan strategi transformasi secara terukur dan bertahap di seluruh lini organisasi.",
    deliverables: ["Transformation Roadmap", "Pilot Programs", "Implementation Guide", "Progress Tracking Dashboard"] },
  { code: "SCRIBE", title: "Research & Impact", tagColor: "bg-gold-100 text-gold-600", borderColor: "border-gold-500",
    description: "Mendokumentasikan proses dan mengukur dampak perubahan untuk memastikan keberlanjutan transformasi.",
    deliverables: ["Impact Report", "Research Documentation", "ROI Analysis", "Sustainability Framework"] },
];

export default function LayananPage() {
  const [openStage, setOpenStage] = useState(0);
  const ref = useScrollAnimation();

  return (
    <>
      <PageHero badge="Layanan" title="Proses Engagement" subtitle="Setiap fase disesuaikan dengan konteks organisasi dan tingkat kesiapan perubahan." />

      <Section>
        <SectionHeader badge="Siklus 4 Tahap" title="SCAN · SHIFT · SCALE · SCRIBE" subtitle="Dari diagnosis mendalam hingga pengukuran dampak nyata." />
        <div ref={ref} className="animate-on-scroll max-w-3xl mx-auto space-y-4">
          {stages.map((stage, i) => (
            <div key={stage.code} className={`rounded-2xl border-2 ${openStage === i ? stage.borderColor : "border-border-subtle"} bg-surface overflow-hidden transition-all duration-200`}>
              <button onClick={() => setOpenStage(openStage === i ? -1 : i)} className="w-full flex items-center gap-4 p-6 text-left hover:bg-canvas-muted/50 transition-colors">
                <span className={`tag-pillar ${stage.tagColor}`}>{stage.code}</span>
                <div className="flex-1">
                  <h3 className="text-[18px] font-semibold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>{stage.title}</h3>
                </div>
                <svg className={`w-5 h-5 text-ink-300 transition-transform duration-200 ${openStage === i ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openStage === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-6 border-t border-border-subtle pt-4">
                  <p className="text-ink-700 mb-4 leading-relaxed text-[15px]">{stage.description}</p>
                  <h4 className="overline text-ink-300 mb-3">Deliverables</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {stage.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[14px] text-ink-500">
                        <svg className="w-4 h-4 text-teal-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a href={`/kontak?topik=Layanan - ${stage.code}`} className="btn-ghost inline-flex items-center gap-2 mt-5 text-[14px] font-semibold text-teal-600">
                    Mulai dari {stage.code}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
