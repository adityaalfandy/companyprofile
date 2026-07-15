"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";
import PageHero from "@/components/PageHero";

const clientCategories = [
  { label: "Korporasi", clients: ["BNI", "BNI Corporate University", "Indosat Ooredoo Hutchison"] },
  { label: "BUMN / Pemerintah", clients: ["Kemenkes RI", "OJK", "LKPP", "Pos Indonesia"] },
  { label: "Pendidikan", clients: ["ITB", "UNPAD", "FTUI"] },
  { label: "Internasional", clients: ["Klien Internasional"] },
];

const strengths = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    title: "Lintas Industri",
    desc: "Pengalaman di berbagai sektor — korporasi, BUMN, pemerintah, pendidikan, hingga UMKM & bisnis keluarga.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 17 4-8 4 4 6-10" /></svg>,
    title: "Berbasis Sistem & Data",
    desc: "Pendekatan diagnostik yang terukur, didukung framework dan assessment tools yang teruji.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>,
    title: "Fokus Hasil",
    desc: "Deliverables nyata dan kuantitatif — dari impact report hingga peningkatan revenue yang terukur.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
    title: "Humanis & Adaptif",
    desc: "Pendekatan empati yang menempatkan manusia di pusat perubahan — disesuaikan dengan konteks organisasi.",
  },
];

export default function TentangKami() {
  const triangleRef = useScrollAnimation();
  const clientRef = useScrollAnimation();

  return (
    <>
      <PageHero
        badge="Tentang Kami"
        title="Not every organization needs PASS."
        subtitle="PASS works when leadership is ready to face uncomfortable realities — and transform them into measurable results."
      />

      {/* Empathy–System–Result Triangle */}
      <Section>
        <div ref={triangleRef} className="animate-on-scroll max-w-4xl mx-auto text-center">
          <SectionHeader
            badge="Framework Inti"
            title="Empathy · System · Result"
            subtitle="Tiga elemen fundamental yang menjadi landasan setiap engagement PASSOLVING."
          />
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 380" className="w-full h-full">
              <defs>
                <linearGradient id="triGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5A0" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0B1633" stopOpacity="0.03" />
                </linearGradient>
              </defs>
              <polygon points="200,40 50,340 350,340" fill="url(#triGrad)" stroke="#E2E6ED" strokeWidth="1.5" />
              <circle cx="200" cy="40" r="26" fill="#0EA5A0" />
              <text x="200" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">E</text>
              <text x="200" y="16" textAnchor="middle" fill="#0B1633" fontSize="12" fontWeight="600">Empathy</text>
              <circle cx="50" cy="340" r="26" fill="#F2A900" />
              <text x="50" y="345" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">S</text>
              <text x="50" y="375" textAnchor="middle" fill="#0B1633" fontSize="12" fontWeight="600">System</text>
              <circle cx="350" cy="340" r="26" fill="#E8127A" />
              <text x="350" y="345" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">R</text>
              <text x="350" y="375" textAnchor="middle" fill="#0B1633" fontSize="12" fontWeight="600">Result</text>
              <text x="200" y="205" textAnchor="middle" fill="#64748B" fontSize="11">PASS Business</text>
              <text x="200" y="222" textAnchor="middle" fill="#64748B" fontSize="11">Agility Framework</text>
            </svg>
          </div>
        </div>
      </Section>

      {/* Legal Info */}
      <section className="py-10 bg-canvas-muted border-y border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-navy-800 flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /></svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>PT Palsindo Utama</p>
              <p className="text-[13px] text-ink-500">Berdiri di Jakarta sejak 2023</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-border-subtle" />
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-ink-900" style={{ fontFamily: "var(--font-display)" }}>PASSOLVING</p>
              <p className="text-[13px] text-ink-500">Agility & Transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Footprint */}
      <Section>
        <SectionHeader badge="Client Footprint" title="Organisasi yang Telah Kami Dampingi" subtitle="Dari korporasi besar hingga institusi pendidikan, kami berpengalaman lintas sektor." />
        <div ref={clientRef} className="animate-on-scroll grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clientCategories.map((cat) => (
            <div key={cat.label} className="card-base">
              <h3 className="overline text-teal-600 mb-4">{cat.label}</h3>
              <ul className="space-y-2">
                {cat.clients.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[14px] text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Mengapa PASS */}
      <Section className="bg-canvas-muted">
        <SectionHeader badge="Keunggulan" title="Mengapa PASS?" subtitle="Empat alasan organisasi memilih PASSOLVING sebagai mitra transformasi." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((s, i) => {
            return <StrengthCard key={s.title} s={s} index={i} />;
          })}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}

function StrengthCard({ s, index }) {
  const r = useScrollAnimation();
  return (
    <div ref={r} className={`animate-on-scroll delay-${index + 1} card-elevated`}>
      <div className="w-10 h-10 rounded-lg bg-canvas-muted text-ink-700 flex items-center justify-center mb-4">{s.icon}</div>
      <h3 className="text-[16px] font-semibold text-ink-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
      <p className="text-[14px] text-ink-500 leading-relaxed">{s.desc}</p>
    </div>
  );
}
