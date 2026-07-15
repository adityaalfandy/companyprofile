"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { Section, CTABanner } from "@/components/Section";
import PageHero from "@/components/PageHero";

const portfolioData = [
  { slug: "bni-corporate-university", client: "BNI Corporate University", category: "Training", result: "Leadership Agility", desc: "Program pengembangan kepemimpinan untuk membangun budaya agile di seluruh lini BNI Corporate University." },
  { slug: "indosat-ooredoo-hutchison", client: "Indosat Ooredoo Hutchison", category: "Training", result: "Kolaborasi Tim", desc: "Program intensif pengembangan kapabilitas tim untuk mendukung transformasi digital." },
  { slug: "lkpp", client: "LKPP", category: "Training", result: "Agility Sektor Publik", desc: "Pelatihan agility assessment untuk meningkatkan efisiensi dan kualitas layanan." },
  { slug: "doit", client: "DoIT", category: "Training", result: "Framework Inovasi", desc: "Workshop innovation sprint untuk mendorong budaya inovasi dan problem solving." },
  { slug: "medical-centre", client: "Medical Centre", category: "Transformation", result: "Akurasi Stok 98%", desc: "Transformasi operasional komprehensif yang menghasilkan peningkatan akurasi stok hingga 98%." },
  { slug: "agribisnis", client: "Agribisnis", category: "Transformation", result: "Revenue +1000%", desc: "Transformasi menyeluruh dari sistem operasional hingga strategi revenue." },
  { slug: "pos-indonesia", client: "Pos Indonesia", category: "Transformation", result: "Transformasi Layanan", desc: "Pendampingan transformasi layanan dan proses bisnis untuk daya saing digital." },
  { slug: "kemenkes", client: "Kemenkes RI", category: "Transformation", result: "Efisiensi Proses", desc: "Peningkatan sistem dan proses kerja untuk pelayanan publik yang lebih baik." },
  { slug: "retail-warehouse", client: "Retail Warehouse", category: "Transformation", result: "Revenue 800M+", desc: "Optimasi supply chain dan operasional warehouse dengan revenue trajectory 800M." },
  { slug: "resto-catering", client: "Resto & Catering", category: "Transformation", result: "Turnaround Bisnis", desc: "Transformasi model bisnis dan operasional untuk industri food & beverage." },
];

const filters = ["Semua", "Training", "Transformation"];

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const ref = useScrollAnimation();
  const filtered = activeFilter === "Semua" ? portfolioData : portfolioData.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHero badge="Portofolio" title="Portofolio & Studi Kasus" subtitle="Hasil nyata dari kolaborasi lintas industri — didukung data kuantitatif dan bukti transformasi." />

      <Section>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-150
                ${activeFilter === f ? "bg-navy-800 text-white shadow-sm" : "bg-canvas-muted text-ink-500 hover:bg-border-subtle"}`}
              style={{ fontFamily: "var(--font-display)" }}>
              {f}
            </button>
          ))}
        </div>

        <div ref={ref} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/portofolio/${p.slug}`} className="card-base group hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className={`badge mb-4 ${p.category === "Training" ? "badge-brand" : "badge-gold"}`}>{p.category}</span>
              <h3 className="text-[18px] font-semibold text-ink-900 mb-2 group-hover:text-teal-600 transition-colors" style={{ fontFamily: "var(--font-display)" }}>{p.client}</h3>
              <p className="text-[14px] text-ink-500 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-canvas-muted">
                <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span className="text-[13px] font-semibold text-ink-900">{p.result}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
