import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/Section";

const caseStudies = {
  "bni-corporate-university": {
    client: "BNI Corporate University",
    category: "Training",
    context: "BNI Corporate University memerlukan program pengembangan kepemimpinan yang komprehensif untuk membangun budaya agile di seluruh organisasi.",
    challenge: "Resistensi terhadap perubahan di level manajerial, gap antara strategi korporat dengan eksekusi di lapangan, dan kebutuhan transformasi budaya organisasi.",
    solution: "PASSOLVING merancang program Leadership Agility Assessment dan training intensif yang mencakup LEGO® Serious Play®, behavioral workshops, dan executive coaching.",
    focus: "Leadership Agility, Culture Transformation, Executive Coaching",
    results: ["Peningkatan Leadership Agility Score", "Budaya agile terbangun di seluruh lini", "Engagement tim meningkat secara signifikan"],
  },
  "indosat-ooredoo-hutchison": {
    client: "Indosat Ooredoo Hutchison",
    category: "Training",
    context: "Indosat Ooredoo Hutchison membutuhkan program pengembangan kapabilitas tim untuk mendukung transformasi digital.",
    challenge: "Kebutuhan kolaborasi lintas fungsi yang efektif, adaptasi terhadap perubahan teknologi yang cepat, dan penguatan teamwork.",
    solution: "Program team capability development dengan pendekatan 80% activity / 20% insight, termasuk simulasi dan collaborative problem solving.",
    focus: "Team Capability, Cross-Functional Collaboration, Digital Readiness",
    results: ["Peningkatan kolaborasi tim lintas fungsi", "Kesiapan digital yang lebih baik", "Produktivitas tim meningkat"],
  },
  "medical-centre": {
    client: "Medical Centre",
    category: "Transformation",
    context: "Sebuah pusat medis menghadapi tantangan dalam manajemen inventory dan operasional yang mempengaruhi kualitas layanan.",
    challenge: "Akurasi stok yang rendah, proses operasional yang tidak efisien, dan kebutuhan standardisasi prosedur.",
    solution: "Transformasi operasional menyeluruh melalui siklus SCAN–SHIFT–SCALE–SCRIBE, mencakup assessment, behavioral change, dan implementasi sistem baru.",
    focus: "Operational Excellence, Inventory Management, Process Standardization",
    results: ["Akurasi stok mencapai 98%", "Efisiensi operasional meningkat signifikan", "Kualitas layanan naik secara terukur"],
    highlight: { value: "98%", label: "Akurasi Stok" },
  },
  "agribisnis": {
    client: "Agribisnis",
    category: "Transformation",
    context: "Sebuah perusahaan agribisnis yang menghadapi stagnasi pertumbuhan dan memerlukan transformasi menyeluruh.",
    challenge: "Revenue stagnan, sistem operasional yang tidak optimal, dan kurangnya strategi pertumbuhan yang terstruktur.",
    solution: "Pendampingan transformasi bisnis end-to-end: diagnosis (SCAN), perubahan pola kerja (SHIFT), implementasi strategi pertumbuhan (SCALE), dan dokumentasi dampak (SCRIBE).",
    focus: "Revenue Growth, Business Transformation, Strategic Planning",
    results: ["Revenue meningkat hingga 1000%", "Sistem operasional terstandarisasi", "Strategi pertumbuhan berkelanjutan terbentuk"],
    highlight: { value: "1000%", label: "Kinerja Naik" },
  },
  "lkpp": {
    client: "LKPP",
    category: "Training",
    context: "LKPP membutuhkan peningkatan agility di lingkungan sektor publik untuk meningkatkan efisiensi dan kualitas layanan.",
    challenge: "Birokrasi yang kaku, kebutuhan adaptasi terhadap perubahan regulasi, dan peningkatan kualitas SDM.",
    solution: "Training agility assessment dan behavioral workshop yang disesuaikan dengan konteks sektor publik.",
    focus: "Public Sector Agility, Government Transformation, Change Readiness",
    results: ["Peningkatan agility di lingkungan pemerintahan", "SDM lebih adaptif terhadap perubahan", "Efisiensi proses meningkat"],
  },
  "doit": {
    client: "DoIT",
    category: "Training",
    context: "DoIT memerlukan framework inovasi untuk mendorong budaya creative problem solving di lingkungan teknologi.",
    challenge: "Kurangnya metodologi inovasi yang terstruktur dan kebutuhan pengembangan mindset inovatif.",
    solution: "Innovation sprint workshop dan design thinking program yang mendorong pendekatan kreatif terhadap problem solving.",
    focus: "Innovation, Design Thinking, Creative Problem Solving",
    results: ["Framework inovasi terbangun", "Budaya creative problem solving berkembang", "Ide-ide baru tervalidasi melalui sprint"],
  },
  "pos-indonesia": {
    client: "Pos Indonesia",
    category: "Transformation",
    context: "Pos Indonesia menghadapi tantangan transformasi layanan di era digital.",
    challenge: "Kebutuhan modernisasi layanan, kompetisi digital yang ketat, dan transformasi proses bisnis.",
    solution: "Pendampingan transformasi layanan dan proses bisnis dengan pendekatan agility framework PASSOLVING.",
    focus: "Digital Transformation, Service Innovation, Process Improvement",
    results: ["Layanan termodernisasi", "Proses bisnis lebih efisien", "Daya saing di era digital meningkat"],
  },
  "kemenkes": {
    client: "Kemenkes RI",
    category: "Transformation",
    context: "Kementerian Kesehatan memerlukan peningkatan sistem dan proses kerja untuk pelayanan publik yang lebih baik.",
    challenge: "Sistem yang kompleks, kebutuhan standardisasi, dan peningkatan kualitas pelayanan kesehatan.",
    solution: "System & process improvement melalui assessment mendalam dan implementasi perubahan bertahap.",
    focus: "System Improvement, Public Service, Healthcare Operations",
    results: ["Efisiensi proses meningkat", "Standar pelayanan terbangun", "Kualitas layanan kesehatan lebih baik"],
  },
  "retail-warehouse": {
    client: "Retail Warehouse",
    category: "Transformation",
    context: "Operasi retail warehouse yang menghadapi tantangan efisiensi supply chain dan margin yang tipis.",
    challenge: "Supply chain yang tidak optimal, margin rendah, dan kebutuhan peningkatan revenue secara cepat.",
    solution: "Optimasi supply chain dan operasional warehouse melalui pendekatan data-driven dan transformasi proses.",
    focus: "Supply Chain Optimization, Revenue Growth, Operational Efficiency",
    results: ["Revenue trajectory mencapai 800M+ dalam 6 bulan", "Supply chain teroptimasi", "Margin meningkat signifikan"],
    highlight: { value: "800M+", label: "Revenue (6 bulan)" },
  },
  "resto-catering": {
    client: "Resto & Catering",
    category: "Transformation",
    context: "Bisnis resto & catering yang menghadapi tantangan efisiensi operasional dan kebutuhan turnaround bisnis.",
    challenge: "Operasional yang tidak efisien, food cost yang tinggi, dan kurangnya standardisasi proses.",
    solution: "Transformasi model bisnis dan operasional dengan fokus pada efisiensi, standardisasi, dan peningkatan kualitas.",
    focus: "Business Turnaround, F&B Operations, Process Standardization",
    results: ["Turnaround bisnis berhasil", "Food cost terkendali", "Operasional terstandarisasi"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const study = caseStudies[params.slug];
  if (!study) return { title: "Studi Kasus Tidak Ditemukan" };
  return {
    title: `Studi Kasus: ${study.client}`,
    description: study.context,
  };
}

export default function CaseStudyDetail({ params }) {
  const study = caseStudies[params.slug];
  if (!study) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/portofolio" className="hover:text-teal-100 transition-colors">Portofolio</Link>
            <span>/</span>
            <span className="text-white">{study.client}</span>
          </nav>

          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4
            ${study.category === "Training" ? "bg-teal-500/20 text-teal-100" : "bg-gold-500/20 text-gold-500"}`}>
            {study.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            {study.client}
          </h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl">{study.focus}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-6 space-y-12">
          {/* Highlight badge */}
          {study.highlight && (
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gold-50 border border-gold-100">
                <span className="text-4xl md:text-5xl font-heading font-extrabold text-gold-500">
                  {study.highlight.value}
                </span>
                <span className="text-sm font-medium text-neutral-500">{study.highlight.label}</span>
              </div>
            </div>
          )}

          {/* Context */}
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-500 mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-teal-500 rounded-full" />
              Konteks
            </h2>
            <p className="text-neutral-600 leading-relaxed">{study.context}</p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-500 mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-gold-500 rounded-full" />
              Tantangan
            </h2>
            <p className="text-neutral-600 leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-500 mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-magenta-500 rounded-full" />
              Peran PASS / Solusi
            </h2>
            <p className="text-neutral-600 leading-relaxed">{study.solution}</p>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-500 mb-3 flex items-center gap-2">
              <span className="w-8 h-1 bg-navy-500 rounded-full" />
              Hasil
            </h2>
            <ul className="space-y-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-neutral-600 font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-neutral-500 mb-4">Memiliki tantangan serupa?</p>
            <Link
              href={`/kontak?topik=Studi Kasus - ${study.client}`}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-glow hover:-translate-y-0.5"
            >
              Mulai Diskusi
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Navigation */}
          <div className="pt-8 border-t border-neutral-200">
            <Link href="/portofolio" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Kembali ke Portofolio
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
