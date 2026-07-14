"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";

const frameworkElements = [
  { label: "Customer", color: "bg-teal-500", desc: "Memahami kebutuhan pelanggan sebagai titik awal transformasi." },
  { label: "Team", color: "bg-gold-500", desc: "Membangun kapabilitas dan agility tim di seluruh level." },
  { label: "Leader", color: "bg-magenta-500", desc: "Kepemimpinan yang siap menghadapi realitas dan mendorong perubahan." },
  { label: "Big Data", color: "bg-navy-500", desc: "Pengambilan keputusan berbasis data dan evidence." },
  { label: "Digitalization", color: "bg-teal-700", desc: "Transformasi digital yang selaras dengan strategi organisasi." },
  { label: "Disruption", color: "bg-gold-500", desc: "Kesiapan menghadapi gangguan dan perubahan pasar." },
  { label: "Global Competition", color: "bg-magenta-500", desc: "Daya saing di tingkat global melalui agility." },
  { label: "Goals & Objective", color: "bg-navy-500", desc: "Fokus pada pencapaian tujuan terukur organisasi." },
];

const icebergLevels = [
  { level: "Executives", pct: "4%", width: "20%", color: "bg-navy-900", text: "text-white" },
  { level: "Managers", pct: "9%", width: "40%", color: "bg-navy-800", text: "text-white" },
  { level: "Leaders", pct: "74%", width: "70%", color: "bg-navy-500", text: "text-white" },
  { level: "Staff", pct: "100%", width: "100%", color: "bg-teal-500", text: "text-white" },
];

export default function FrameworkPage() {
  const fwRef = useScrollAnimation();
  const iceRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Framework
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            PASS Business Agility Framework
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Pendekatan berbasis Empathy, System, dan Result untuk mendiagnosis
            dan mentransformasi organisasi secara menyeluruh.
          </p>
        </div>
      </section>

      {/* Framework Visualization */}
      <Section>
        <SectionHeader
          badge="Framework"
          title="Elemen Business Agility"
          subtitle="Delapan elemen yang saling terhubung dalam ekosistem organisasi yang agile."
        />

        <div ref={fwRef} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {frameworkElements.map((el, i) => (
            <div
              key={el.label}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${el.color} flex items-center justify-center text-white text-sm font-bold mb-4`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading text-base font-bold text-navy-500 mb-2">{el.label}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{el.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Iceberg of Ignorance */}
      <Section className="bg-neutral-50">
        <SectionHeader
          badge="Iceberg of Ignorance"
          title="Mengapa Transformasi Dimulai dari Atas?"
          subtitle="Sidney Yoshida menemukan bahwa hanya 4% masalah organisasi yang diketahui oleh eksekutif."
        />

        <div ref={iceRef} className="animate-on-scroll max-w-2xl mx-auto space-y-3">
          {icebergLevels.map((lvl) => (
            <div key={lvl.level} className="flex items-center gap-4">
              <div className="w-28 text-right">
                <span className="text-sm font-heading font-semibold text-navy-500">{lvl.level}</span>
              </div>
              <div className="flex-1">
                <div
                  className={`${lvl.color} ${lvl.text} rounded-xl px-4 py-3 font-heading font-bold text-lg transition-all duration-700`}
                  style={{ width: lvl.width }}
                >
                  {lvl.pct}
                </div>
              </div>
            </div>
          ))}
          <p className="text-center text-sm text-neutral-500 mt-8 italic">
            &ldquo;Problems known to staff but invisible to executives create the biggest organizational risks.&rdquo;
            <br />— Sidney Yoshida
          </p>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
