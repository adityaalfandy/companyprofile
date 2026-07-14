"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";

const programCategories = [
  {
    id: "leadership",
    label: "Leadership Agility & Organizational Readiness",
    programs: [
      "Agile Leadership Mindset",
      "Organizational Change Readiness",
      "Strategic Decision Making",
      "Leading Through Disruption",
      "Executive Coaching for Agility",
    ],
  },
  {
    id: "productivity",
    label: "Productivity/Collaboration & Learning Agility",
    programs: [
      "High-Performance Team Building",
      "Collaborative Problem Solving",
      "Learning Agility Workshop",
      "Cross-Functional Collaboration",
      "Continuous Improvement Culture",
    ],
  },
  {
    id: "innovation",
    label: "Innovation/Design & System Thinking",
    programs: [
      "Design Thinking for Business",
      "System Thinking Fundamentals",
      "Innovation Sprint Workshop",
      "Creative Problem Solving",
      "Business Model Innovation",
    ],
  },
  {
    id: "self-leadership",
    label: "Self Leadership & Team Capability Development",
    programs: [
      "Personal Effectiveness",
      "Emotional Intelligence at Work",
      "Growth Mindset Development",
      "Team Capability Assessment",
      "Talent Development Framework",
    ],
  },
];

const designSteps = [
  { step: "01", title: "Problem Identification", desc: "Memahami akar permasalahan dan kebutuhan spesifik organisasi." },
  { step: "02", title: "Action Development", desc: "Merancang program dan intervensi yang tepat sasaran." },
  { step: "03", title: "Program Implementation", desc: "Melaksanakan program dengan pendekatan experiential learning." },
  { step: "04", title: "Evaluation", desc: "Mengukur dampak dan efektivitas program secara kuantitatif." },
];

export default function ProgramTraining() {
  const [activeTab, setActiveTab] = useState(0);
  const methodRef = useScrollAnimation();
  const designRef = useScrollAnimation();
  const legoRef = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Program & Training 2026
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Program Training 2026
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Katalog program training untuk membangun organisasi yang agile, inovatif, dan berdampak.
          </p>
        </div>
      </section>

      {/* Program Categories (Tabs) */}
      <Section>
        <SectionHeader
          badge="Katalog Program"
          title="Highlight Topics 2026"
          subtitle="Empat kategori program yang dirancang untuk mengembangkan kapabilitas organisasi Anda."
        />

        {/* Tab Headers */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {programCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${activeTab === i
                  ? "bg-navy-500 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
            >
              {cat.label.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-2xl mx-auto">
          <div key={activeTab} className="animate-[fadeIn_0.3s_ease-out] rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-navy-500 mb-2">
              {programCategories[activeTab].label}
            </h3>
            <ul className="mt-6 space-y-3">
              {programCategories[activeTab].programs.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={`/kontak?topik=Program - ${programCategories[activeTab].label}`}
              className="inline-flex items-center gap-2 mt-6 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-glow"
            >
              Tanyakan Program Ini
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </Section>

      {/* Training Methodology */}
      <Section className="bg-neutral-50">
        <div ref={methodRef} className="animate-on-scroll max-w-3xl mx-auto text-center">
          <SectionHeader
            badge="Metodologi"
            title="80% Activity · 20% Insight"
            subtitle="Pendekatan experiential learning yang memastikan peserta tidak hanya memahami, tetapi mengalami langsung."
          />

          {/* Progress bar visualization */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex gap-1 h-8 rounded-full overflow-hidden mb-4">
              <div className="bg-teal-500 rounded-l-full flex items-center justify-center text-white text-xs font-bold" style={{ width: "80%" }}>
                80% Activity
              </div>
              <div className="bg-gold-500 rounded-r-full flex items-center justify-center text-white text-xs font-bold" style={{ width: "20%" }}>
                20%
              </div>
            </div>
            <div className="flex justify-between text-sm text-neutral-500">
              <span>Praktik · Simulasi · Workshop</span>
              <span>Teori · Insight</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Design Training */}
      <Section>
        <SectionHeader
          badge="Proses"
          title="Design Training"
          subtitle="Empat tahap perancangan program training yang sistematis."
        />

        <div ref={designRef} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {designSteps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connection line */}
              {i < designSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-neutral-200 translate-x-1/2 -z-0" />
              )}
              <div className="relative z-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-navy-500 text-white font-heading font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-heading text-sm font-bold text-navy-500 mb-2">{s.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* LEGO Serious Play */}
      <Section className="bg-navy-800">
        <div ref={legoRef} className="animate-on-scroll max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-500 text-xs font-semibold tracking-wider uppercase mb-6">
            Program Spesial
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            LEGO® Serious Play®
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-8">
            Metode fasilitasi berbasis LEGO® yang mendorong pemikiran kreatif, komunikasi terbuka,
            dan problem solving kolaboratif. Durasi program: 1 hari penuh.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Durasi", value: "1 Hari" },
              { label: "Metode", value: "Hands-on Building" },
              { label: "Output", value: "Shared Vision & Solutions" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-5">
                <p className="text-gold-500 font-heading text-2xl font-bold">{item.value}</p>
                <p className="text-neutral-400 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="/kontak?topik=LEGO Serious Play"
            className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-base font-semibold text-navy-900 shadow-lg transition-all hover:bg-gold-100 hover:-translate-y-0.5"
          >
            Tanyakan Program LEGO® Serious Play®
          </a>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
