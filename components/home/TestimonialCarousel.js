"use client";

import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section } from "@/components/Section";

const testimonials = [
  {
    quote: "Dengan pendekatan sistematis PASSOLVING, kami berhasil meningkatkan akurasi stok hingga 92% dan efisiensi operasional yang signifikan. Transformasi yang kami butuhkan selama bertahun-tahun, terwujud dalam hitungan bulan.",
    name: "Manager Retail Chain",
    role: "Manager, Retail Chain",
    badge: "92%",
    badgeLabel: "Akurasi Stok",
  },
  {
    quote: "Revenue meningkat hingga 1000% setelah menerapkan framework agility dari PASSOLVING. Pendekatan mereka yang humanis dan berbasis data membuat seluruh tim committed terhadap perubahan.",
    name: "Founder Food Processing",
    role: "Founder, Food Processing Manufacturer",
    badge: "1000%",
    badgeLabel: "Kinerja Naik",
  },
  {
    quote: "PASSOLVING membantu kami melihat permasalahan dari perspektif sistem yang menyeluruh. Revenue trajectory mencapai 800M dalam 6 bulan pertama kolaborasi. Hasil yang melampaui ekspektasi.",
    name: "COO Agroindustry",
    role: "COO, Agroindustry",
    badge: "800M+",
    badgeLabel: "Revenue",
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const ref = useScrollAnimation();

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <Section>
      <SectionHeader
        badge="What Leaders Say about PASS"
        title="Testimoni Klien"
        subtitle="Hasil nyata dari kolaborasi dengan organisasi lintas industri."
      />

      <div ref={ref} className="animate-on-scroll max-w-3xl mx-auto">
        {/* Card-inverse for testimonials (as per design.md) */}
        <div className="card-inverse p-8 md:p-12 min-h-[280px] relative">
          {/* Gold quote mark */}
          <div className="absolute top-6 right-8 text-[72px] leading-none text-gold-500/20 select-none" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
            &ldquo;
          </div>

          <div key={active} className="animate-[slideInRight_0.4s_ease-out]">
            <blockquote className="relative z-10 text-[16px] md:text-[18px] text-white/90 leading-relaxed font-medium mb-8" style={{ fontFamily: "var(--font-body)" }}>
              {t.quote}
            </blockquote>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-[12px]" style={{ fontFamily: "var(--font-display)" }}>
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white text-[14px]" style={{ fontFamily: "var(--font-display)" }}>{t.name}</cite>
                  <p className="text-[12px] text-white/40">{t.role}</p>
                </div>
              </div>

              {/* Gold badge — display font for numbers */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/8 border border-white/8">
                <span className="text-[28px] font-bold text-gold-500 leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                  {t.badge}
                </span>
                <span className="text-[11px] font-medium text-white/50 uppercase tracking-wider">{t.badgeLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} aria-label="Sebelumnya"
            className="w-9 h-9 rounded-lg border border-border-subtle bg-surface text-ink-500 hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Testimoni ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300
                  ${i === active ? "bg-teal-600 w-7" : "bg-border-default w-2 hover:bg-ink-300"}`}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Berikutnya"
            className="w-9 h-9 rounded-lg border border-border-subtle bg-surface text-ink-500 hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-6">
          <a href="/testimoni" className="btn-ghost inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-600 group">
            Lihat Semua Testimoni
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
