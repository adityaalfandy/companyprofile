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

  const next = useCallback(() => {
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  /* Auto-play */
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <Section>
      <SectionHeader
        badge="Testimoni"
        title="Apa Kata Pemimpin Tentang PASS"
        subtitle="Hasil nyata dari kolaborasi dengan organisasi lintas industri."
      />

      <div ref={ref} className="animate-on-scroll max-w-4xl mx-auto">
        {/* Card */}
        <div className="relative bg-neutral-50 rounded-3xl border border-neutral-200 p-8 md:p-12 min-h-[320px]">
          {/* Quote mark */}
          <div className="absolute top-6 left-8 text-7xl font-heading font-extrabold text-gold-500/20 leading-none select-none">
            &ldquo;
          </div>

          {/* Testimonial content — use key for transition */}
          <div key={active} className="animate-[fadeIn_0.5s_ease-out]">
            <blockquote className="relative z-10 text-lg md:text-xl text-navy-500 leading-relaxed font-medium mb-8 pt-6">
              {t.quote}
            </blockquote>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-500 flex items-center justify-center text-white font-heading font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <cite className="not-italic font-heading font-semibold text-navy-500 text-sm">
                    {t.name}
                  </cite>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gold-50 border border-gold-100">
                <span className="text-2xl md:text-3xl font-heading font-extrabold text-gold-500">
                  {t.badge}
                </span>
                <span className="text-xs font-medium text-neutral-500">
                  {t.badgeLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Testimoni sebelumnya"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 hover:border-teal-500 hover:text-teal-500 transition-colors flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimoni ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-teal-500 w-8"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Testimoni berikutnya"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 hover:border-teal-500 hover:text-teal-500 transition-colors flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Link to all */}
        <div className="text-center mt-6">
          <a
            href="/testimoni"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors group"
          >
            Lihat Semua Testimoni
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </Section>
  );
}
