"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";

const testimonials = [
  {
    quote: "Dengan pendekatan sistematis PASSOLVING, kami berhasil meningkatkan akurasi stok hingga 92% dan efisiensi operasional yang signifikan. Transformasi yang kami butuhkan selama bertahun-tahun, terwujud dalam hitungan bulan.",
    name: "Manager Retail Chain",
    role: "Manager",
    industry: "Retail Chain",
    badge: "92%",
    badgeLabel: "Accuracy",
  },
  {
    quote: "Revenue meningkat hingga 1000% setelah menerapkan framework agility dari PASSOLVING. Pendekatan mereka yang humanis dan berbasis data membuat seluruh tim committed terhadap perubahan. Ini bukan sekadar training, tapi transformasi nyata.",
    name: "Founder Food Processing Manufacturer",
    role: "Founder",
    industry: "Food Processing Manufacturer",
    badge: "1000%",
    badgeLabel: "Kinerja Naik",
  },
  {
    quote: "PASSOLVING memahami bahwa setiap bisnis punya konteks unik. Mereka tidak datang dengan solusi template, tapi benar-benar mendengar, memahami, dan merancang pendekatan yang pas untuk kami. Hasilnya, klinik kami bertransformasi secara menyeluruh.",
    name: "Founder Beauty Clinic",
    role: "Founder",
    industry: "Beauty Clinic",
    badge: "100%",
    badgeLabel: "Transformasi",
  },
  {
    quote: "Sebagai bisnis keluarga di sektor agribisnis, kami skeptis terhadap konsultan. Namun PASSOLVING membuktikan bahwa pendekatan mereka berbeda — berbasis data, sistematis, dan yang terpenting, menghormati nilai-nilai yang sudah ada di organisasi kami.",
    name: "Founder Integrated Farm",
    role: "Founder",
    industry: "Integrated Farm",
    badge: "800M+",
    badgeLabel: "Revenue",
  },
  {
    quote: "PASSOLVING membantu kami melihat permasalahan dari perspektif sistem yang menyeluruh. Revenue trajectory mencapai 800M dalam 6 bulan pertama kolaborasi. Yang lebih penting, tim kami kini mampu berpikir dan bertindak secara agile secara mandiri.",
    name: "COO Agroindustry",
    role: "COO",
    industry: "Agroindustry",
    badge: "6 bln",
    badgeLabel: "Quick Win",
  },
];

const tags = ["Adaptasi", "Kolaborasi", "Optimalisasi", "Inovasi", "Pertumbuhan"];

export default function TestimoniPage() {
  const ref = useScrollAnimation();
  const tagRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Testimoni
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Apa Kata Pemimpin Tentang PASS
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed italic">
            What Leaders Say about PASS
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <Section>
        <div ref={ref} className="animate-on-scroll grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300
                ${i === 0 ? "md:col-span-2" : ""}`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl font-heading font-extrabold text-gold-500/15 leading-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10 text-base md:text-lg text-navy-500 leading-relaxed font-medium mb-6">
                {t.quote}
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-navy-500 flex items-center justify-center text-white font-heading font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <cite className="not-italic font-heading font-semibold text-navy-500 text-sm">{t.role}</cite>
                    <p className="text-xs text-neutral-500">{t.industry}</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gold-50 border border-gold-100">
                  <span className="text-xl md:text-2xl font-heading font-extrabold text-gold-500">
                    {t.badge}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">{t.badgeLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tags */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200/50">
        <div ref={tagRef} className="animate-on-scroll mx-auto max-w-[1280px] px-6 text-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-sm font-semibold text-navy-500 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
