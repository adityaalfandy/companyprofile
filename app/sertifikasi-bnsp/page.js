"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";

const schemas = [
  {
    id: 1,
    title: "Problem Solving",
    desc: "Sertifikasi kompetensi dalam mengidentifikasi, menganalisis, dan menyelesaikan masalah secara efektif dan sistematis.",
    competencies: ["Identifikasi Masalah", "Analisis Akar Penyebab", "Pengembangan Solusi", "Implementasi & Evaluasi"],
    color: "border-t-teal-500",
  },
  {
    id: 2,
    title: "Pengembangan Kepemimpinan",
    desc: "Sertifikasi kompetensi kepemimpinan yang mencakup kemampuan memimpin tim, pengambilan keputusan, dan pemberdayaan.",
    competencies: ["Kepemimpinan Situasional", "Pengambilan Keputusan", "Pemberdayaan Tim", "Manajemen Konflik"],
    color: "border-t-gold-500",
  },
  {
    id: 3,
    title: "Komunikasi Efektif",
    desc: "Sertifikasi kompetensi komunikasi profesional, termasuk presentasi, negosiasi, dan komunikasi lintas fungsi.",
    competencies: ["Komunikasi Interpersonal", "Presentasi Efektif", "Negosiasi", "Active Listening"],
    color: "border-t-magenta-500",
  },
];

export default function SertifikasiBNSP() {
  const ref = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase">
              Sertifikasi
            </span>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-500 text-xs font-semibold tracking-wider uppercase">
              BNSP
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Sertifikasi Soft Skill Nasional BNSP
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Pengakuan kompetensi resmi dari Badan Nasional Sertifikasi Profesi untuk profesional Indonesia.
          </p>
        </div>
      </section>

      {/* Certification Schemes */}
      <Section>
        <SectionHeader
          badge="3 Skema"
          title="Skema Sertifikasi"
          subtitle="Tiga skema sertifikasi yang dirancang untuk meningkatkan kompetensi soft skill profesional."
        />

        <div ref={ref} className="animate-on-scroll grid md:grid-cols-3 gap-6 lg:gap-8">
          {schemas.map((s) => (
            <div
              key={s.id}
              className={`rounded-2xl border border-neutral-200 ${s.color} border-t-4 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-full bg-navy-500 text-white font-heading font-bold flex items-center justify-center mb-5">
                {s.id}
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-500 mb-3">
                Skema {s.id}: {s.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                {s.desc}
              </p>

              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Unit Kompetensi
              </h4>
              <ul className="space-y-2 mb-6">
                {s.competencies.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-neutral-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              <a
                href={`/kontak?topik=Sertifikasi BNSP - Skema ${s.id}: ${s.title}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors"
              >
                Tanyakan Sertifikasi Ini
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* SKKNI Reference */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200/50">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <path d="M14 2v6h6" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-navy-500 text-sm">Referensi SKKNI</p>
              <p className="text-xs text-neutral-500">Beracuan SKKNI 2020-234 — Standar Kompetensi Kerja Nasional Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
