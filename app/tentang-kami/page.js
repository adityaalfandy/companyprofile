"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";
import Link from "next/link";

const clientCategories = [
  {
    label: "Korporasi",
    clients: ["BNI", "BNI Corporate University", "Indosat Ooredoo Hutchison"],
  },
  {
    label: "BUMN / Pemerintah",
    clients: ["Kemenkes RI", "OJK", "LKPP", "Pos Indonesia"],
  },
  {
    label: "Pendidikan",
    clients: ["ITB", "UNPAD", "FTUI"],
  },
  {
    label: "Internasional",
    clients: ["Klien Internasional"],
  },
];

const strengths = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Lintas Industri",
    desc: "Pengalaman di berbagai sektor — korporasi, BUMN, pemerintah, pendidikan, hingga UMKM & bisnis keluarga.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m7 17 4-8 4 4 6-10" />
      </svg>
    ),
    title: "Berbasis Sistem & Data",
    desc: "Pendekatan diagnostik yang terukur, didukung framework dan assessment tools yang teruji.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
      </svg>
    ),
    title: "Fokus Hasil",
    desc: "Deliverables nyata dan kuantitatif — dari impact report hingga peningkatan revenue yang terukur.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Humanis & Adaptif",
    desc: "Pendekatan empati yang menempatkan manusia di pusat perubahan — disesuaikan dengan konteks organisasi.",
  },
];

export default function TentangKami() {
  const heroRef = useScrollAnimation();
  const triangleRef = useScrollAnimation();
  const clientRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div ref={heroRef} className="animate-on-scroll mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Tentang Kami
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Not every organization needs PASS.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            PASS works when leadership is ready to face uncomfortable realities
            — and transform them into measurable results.
          </p>
        </div>
      </section>

      {/* Empathy–System–Result Triangle */}
      <Section>
        <div ref={triangleRef} className="animate-on-scroll max-w-4xl mx-auto text-center">
          <SectionHeader
            badge="Framework Inti"
            title="Empathy · System · Result"
            subtitle="Tiga elemen fundamental yang menjadi landasan setiap engagement PASSOLVING."
          />

          {/* Triangle SVG */}
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 380" className="w-full h-full">
              {/* Triangle */}
              <polygon
                points="200,40 50,340 350,340"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-navy-100"
              />
              {/* Fill with gradient */}
              <defs>
                <linearGradient id="triGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0E9A93" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#12294B" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <polygon points="200,40 50,340 350,340" fill="url(#triGrad)" />

              {/* Empathy (top) */}
              <circle cx="200" cy="40" r="28" className="fill-teal-500" />
              <text x="200" y="45" textAnchor="middle" className="fill-white text-[11px] font-bold">E</text>
              <text x="200" y="16" textAnchor="middle" className="fill-navy-500 text-[13px] font-semibold font-heading">Empathy</text>

              {/* System (bottom-left) */}
              <circle cx="50" cy="340" r="28" className="fill-gold-500" />
              <text x="50" y="345" textAnchor="middle" className="fill-white text-[11px] font-bold">S</text>
              <text x="50" y="375" textAnchor="middle" className="fill-navy-500 text-[13px] font-semibold font-heading">System</text>

              {/* Result (bottom-right) */}
              <circle cx="350" cy="340" r="28" className="fill-magenta-500" />
              <text x="350" y="345" textAnchor="middle" className="fill-white text-[11px] font-bold">R</text>
              <text x="350" y="375" textAnchor="middle" className="fill-navy-500 text-[13px] font-semibold font-heading">Result</text>

              {/* Center text */}
              <text x="200" y="210" textAnchor="middle" className="fill-navy-500/50 text-[11px] font-heading font-medium">PASS Business</text>
              <text x="200" y="228" textAnchor="middle" className="fill-navy-500/50 text-[11px] font-heading font-medium">Agility Framework</text>
            </svg>
          </div>
        </div>
      </Section>

      {/* Legal Info */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200/50">
        <div className="mx-auto max-w-[1280px] px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-navy-500 flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
              </svg>
            </div>
            <div>
              <p className="font-heading font-bold text-navy-500">PT Palsindo Utama</p>
              <p className="text-sm text-neutral-500">Berdiri di Jakarta sejak 2023</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-neutral-200" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <div>
              <p className="font-heading font-bold text-navy-500">PASSOLVING</p>
              <p className="text-sm text-neutral-500">Agility & Transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Footprint */}
      <Section>
        <SectionHeader
          badge="Client Footprint"
          title="Organisasi yang Telah Kami Dampingi"
          subtitle="Dari korporasi besar hingga institusi pendidikan, kami berpengalaman lintas sektor."
        />

        <div ref={clientRef} className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientCategories.map((cat) => (
            <div key={cat.label} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-sm font-semibold text-teal-500 uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.clients.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Mengapa PASS */}
      <Section className="bg-neutral-50">
        <SectionHeader
          badge="Keunggulan"
          title="Mengapa PASS?"
          subtitle="Empat alasan organisasi memilih PASSOLVING sebagai mitra transformasi."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => {
            const Ref = () => {
              const r = useScrollAnimation();
              return (
                <div ref={r} className={`animate-on-scroll delay-${i + 1} rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-5">
                    {s.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-navy-500 mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              );
            };
            return <Ref key={s.title} />;
          })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
