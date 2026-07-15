"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";
import PageHero from "@/components/PageHero";

const frameworkElements = [
  { label: "Customer", desc: "Memahami kebutuhan pelanggan sebagai titik awal transformasi." },
  { label: "Team", desc: "Membangun kapabilitas dan agility tim di seluruh level." },
  { label: "Leader", desc: "Kepemimpinan yang siap menghadapi realitas dan mendorong perubahan." },
  { label: "Big Data", desc: "Pengambilan keputusan berbasis data dan evidence." },
  { label: "Digitalization", desc: "Transformasi digital yang selaras dengan strategi organisasi." },
  { label: "Disruption", desc: "Kesiapan menghadapi gangguan dan perubahan pasar." },
  { label: "Global Competition", desc: "Daya saing di tingkat global melalui agility." },
  { label: "Goals & Objective", desc: "Fokus pada pencapaian tujuan terukur organisasi." },
];

const icebergLevels = [
  { level: "Executives", pct: "4%", width: "20%", color: "bg-navy-900" },
  { level: "Managers", pct: "9%", width: "40%", color: "bg-navy-800" },
  { level: "Leaders", pct: "74%", width: "70%", color: "bg-navy-700" },
  { level: "Staff", pct: "100%", width: "100%", color: "bg-teal-600" },
];

export default function FrameworkPage() {
  const fwRef = useScrollAnimation();
  const iceRef = useScrollAnimation();

  return (
    <>
      <PageHero
        badge="Framework"
        title="PASS Business Agility Framework"
        subtitle="Pendekatan berbasis Empathy, System, dan Result untuk mendiagnosis dan mentransformasi organisasi secara menyeluruh."
      />

      <Section>
        <SectionHeader badge="8 Elemen" title="Elemen Business Agility" subtitle="Delapan elemen yang saling terhubung dalam ekosistem organisasi yang agile." />
        <div ref={fwRef} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {frameworkElements.map((el, i) => (
            <div key={el.label} className="card-base hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="micro text-ink-300 mb-3">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-[16px] font-semibold text-ink-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{el.label}</h3>
              <p className="text-[14px] text-ink-500 leading-relaxed">{el.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-canvas-muted">
        <SectionHeader badge="Iceberg of Ignorance" title="Mengapa Transformasi Dimulai dari Atas?" subtitle="Sidney Yoshida menemukan bahwa hanya 4% masalah organisasi yang diketahui oleh eksekutif." />
        <div ref={iceRef} className="animate-on-scroll max-w-2xl mx-auto space-y-3">
          {icebergLevels.map((lvl) => (
            <div key={lvl.level} className="flex items-center gap-4">
              <div className="w-28 text-right">
                <span className="text-[14px] font-semibold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>{lvl.level}</span>
              </div>
              <div className="flex-1">
                <div className={`${lvl.color} text-white rounded-lg px-4 py-3 font-bold text-[18px] transition-all duration-700`} style={{ width: lvl.width, fontFamily: "var(--font-display)" }}>
                  {lvl.pct}
                </div>
              </div>
            </div>
          ))}
          <p className="text-center text-[14px] text-ink-500 mt-8 italic">&ldquo;Problems known to staff but invisible to executives create the biggest organizational risks.&rdquo;<br />— Sidney Yoshida</p>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
