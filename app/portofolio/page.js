"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";

const portfolioData = [
  {
    slug: "bni-corporate-university",
    client: "BNI Corporate University",
    category: "Training",
    highlight: "Leadership & Culture Transformation",
    result: "Peningkatan Leadership Agility",
    desc: "Program pengembangan kepemimpinan untuk membangun budaya agile di seluruh lini BNI Corporate University.",
  },
  {
    slug: "indosat-ooredoo-hutchison",
    client: "Indosat Ooredoo Hutchison",
    category: "Training",
    highlight: "Team Capability Program",
    result: "Peningkatan Kolaborasi Tim",
    desc: "Program intensif pengembangan kapabilitas tim untuk mendukung transformasi digital Indosat Ooredoo Hutchison.",
  },
  {
    slug: "lkpp",
    client: "LKPP",
    category: "Training",
    highlight: "Public Sector Agility",
    result: "Agility di Sektor Publik",
    desc: "Pelatihan agility assessment untuk meningkatkan efisiensi dan kualitas layanan di Lembaga Kebijakan Pengadaan Barang/Jasa.",
  },
  {
    slug: "doit",
    client: "DoIT",
    category: "Training",
    highlight: "Innovation Sprint",
    result: "Framework Inovasi",
    desc: "Workshop innovation sprint untuk mendorong budaya inovasi dan problem solving di lingkungan teknologi.",
  },
  {
    slug: "medical-centre",
    client: "Medical Centre",
    category: "Transformation",
    highlight: "Operational Excellence",
    result: "Akurasi Stok 98%",
    desc: "Transformasi operasional komprehensif yang menghasilkan peningkatan akurasi stok hingga 98% dan efisiensi layanan.",
  },
  {
    slug: "agribisnis",
    client: "Agribisnis",
    category: "Transformation",
    highlight: "Revenue Growth",
    result: "Revenue +1000%",
    desc: "Transformasi menyeluruh dari sistem operasional hingga strategi revenue yang menghasilkan peningkatan kinerja 1000%.",
  },
  {
    slug: "pos-indonesia",
    client: "Pos Indonesia",
    category: "Transformation",
    highlight: "Digital Transformation",
    result: "Transformasi Layanan",
    desc: "Pendampingan transformasi layanan dan proses bisnis untuk meningkatkan daya saing di era digital.",
  },
  {
    slug: "kemenkes",
    client: "Kemenkes RI",
    category: "Transformation",
    highlight: "System & Process Improvement",
    result: "Efisiensi Proses",
    desc: "Peningkatan sistem dan proses kerja di lingkungan Kementerian Kesehatan untuk pelayanan publik yang lebih baik.",
  },
  {
    slug: "retail-warehouse",
    client: "Retail Warehouse",
    category: "Transformation",
    highlight: "Supply Chain Optimization",
    result: "Revenue 800M+",
    desc: "Optimasi supply chain dan operasional warehouse yang menghasilkan revenue trajectory hingga 800M dalam 6 bulan.",
  },
  {
    slug: "resto-catering",
    client: "Resto & Catering",
    category: "Transformation",
    highlight: "Business Turnaround",
    result: "Turnaround Bisnis",
    desc: "Transformasi model bisnis dan operasional untuk industri food & beverage yang menghadapi tantangan efisiensi.",
  },
];

const filters = ["Semua", "Training", "Transformation"];

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const ref = useScrollAnimation();

  const filtered = activeFilter === "Semua"
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Portofolio
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Portofolio & Studi Kasus
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Hasil nyata dari kolaborasi lintas industri — didukung data kuantitatif dan bukti transformasi.
          </p>
        </div>
      </section>

      <Section>
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${activeFilter === f
                  ? "bg-navy-500 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div ref={ref} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/portofolio/${p.slug}`}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4
                ${p.category === "Training" ? "bg-teal-50 text-teal-700" : "bg-gold-50 text-gold-500"}`}>
                {p.category}
              </span>

              <h3 className="font-heading text-lg font-bold text-navy-500 mb-2 group-hover:text-teal-500 transition-colors">
                {p.client}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                {p.desc}
              </p>

              {/* Result highlight */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-50">
                <svg className="w-4 h-4 text-gold-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-sm font-semibold text-navy-500">{p.result}</span>
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Lihat Detail
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-400">Tidak ada studi kasus untuk kategori ini.</p>
          </div>
        )}
      </Section>

      <CTABanner />
    </>
  );
}
