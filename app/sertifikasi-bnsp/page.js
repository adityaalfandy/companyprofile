"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";
import PageHero from "@/components/PageHero";

const schemas = [
  { id: 1, title: "Problem Solving", borderColor: "border-t-teal-600",
    desc: "Sertifikasi kompetensi dalam mengidentifikasi, menganalisis, dan menyelesaikan masalah secara efektif dan sistematis.",
    competencies: ["Identifikasi Masalah", "Analisis Akar Penyebab", "Pengembangan Solusi", "Implementasi & Evaluasi"] },
  { id: 2, title: "Pengembangan Kepemimpinan", borderColor: "border-t-gold-500",
    desc: "Sertifikasi kompetensi kepemimpinan yang mencakup kemampuan memimpin tim, pengambilan keputusan, dan pemberdayaan.",
    competencies: ["Kepemimpinan Situasional", "Pengambilan Keputusan", "Pemberdayaan Tim", "Manajemen Konflik"] },
  { id: 3, title: "Komunikasi Efektif", borderColor: "border-t-magenta-500",
    desc: "Sertifikasi kompetensi komunikasi profesional, termasuk presentasi, negosiasi, dan komunikasi lintas fungsi.",
    competencies: ["Komunikasi Interpersonal", "Presentasi Efektif", "Negosiasi", "Active Listening"] },
];

export default function SertifikasiBNSP() {
  const ref = useScrollAnimation();

  return (
    <>
      <PageHero badge="Sertifikasi BNSP" title="Sertifikasi Soft Skill Nasional BNSP" subtitle="Pengakuan kompetensi resmi dari Badan Nasional Sertifikasi Profesi untuk profesional Indonesia.">
        <span className="badge badge-gold mt-4">BNSP Certified</span>
      </PageHero>

      <Section>
        <SectionHeader badge="3 Skema" title="Skema Sertifikasi" subtitle="Tiga skema sertifikasi yang dirancang untuk meningkatkan kompetensi soft skill profesional." />
        <div ref={ref} className="animate-on-scroll grid md:grid-cols-3 gap-5">
          {schemas.map((s) => (
            <div key={s.id} className={`card-base ${s.borderColor} border-t-[3px] hover:shadow-md hover:-translate-y-1 transition-all duration-200`}>
              <div className="w-9 h-9 rounded-lg bg-navy-800 text-white font-bold flex items-center justify-center mb-4 text-[12px]" style={{ fontFamily: "var(--font-display)" }}>{s.id}</div>
              <h3 className="text-[18px] font-semibold text-ink-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>Skema {s.id}: {s.title}</h3>
              <p className="text-[14px] text-ink-500 leading-relaxed mb-5">{s.desc}</p>
              <h4 className="overline text-ink-300 mb-3">Unit Kompetensi</h4>
              <ul className="space-y-2 mb-5">
                {s.competencies.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[14px] text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />{c}
                  </li>
                ))}
              </ul>
              <a href={`/kontak?topik=Sertifikasi BNSP - Skema ${s.id}`} className="btn-ghost inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-600">
                Tanyakan Sertifikasi Ini
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-10 bg-canvas-muted border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-surface border border-border-subtle shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-gold-100 flex items-center justify-center text-gold-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="M14 2v6h6" /></svg>
            </div>
            <div className="text-left">
              <p className="text-[14px] font-semibold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>Referensi SKKNI</p>
              <p className="text-[13px] text-ink-500">Beracuan SKKNI 2020-234 — Standar Kompetensi Kerja Nasional Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
