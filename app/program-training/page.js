"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section, CTABanner } from "@/components/Section";
import PageHero from "@/components/PageHero";

const programCategories = [
  { id: "leadership", label: "Leadership Agility & Organizational Readiness", short: "Leadership",
    programs: ["Agile Leadership Mindset", "Organizational Change Readiness", "Strategic Decision Making", "Leading Through Disruption", "Executive Coaching for Agility"] },
  { id: "productivity", label: "Productivity/Collaboration & Learning Agility", short: "Productivity",
    programs: ["High-Performance Team Building", "Collaborative Problem Solving", "Learning Agility Workshop", "Cross-Functional Collaboration", "Continuous Improvement Culture"] },
  { id: "innovation", label: "Innovation/Design & System Thinking", short: "Innovation",
    programs: ["Design Thinking for Business", "System Thinking Fundamentals", "Innovation Sprint Workshop", "Creative Problem Solving", "Business Model Innovation"] },
  { id: "self-leadership", label: "Self Leadership & Team Capability Development", short: "Self Leadership",
    programs: ["Personal Effectiveness", "Emotional Intelligence at Work", "Growth Mindset Development", "Team Capability Assessment", "Talent Development Framework"] },
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
      <PageHero badge="Program & Training 2026" title="Program Training 2026" subtitle="Katalog program training untuk membangun organisasi yang agile, inovatif, dan berdampak." />

      <Section>
        <SectionHeader badge="Katalog Program" title="Highlight Topics 2026" subtitle="Empat kategori program yang dirancang untuk mengembangkan kapabilitas organisasi Anda." />
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {programCategories.map((cat, i) => (
            <button key={cat.id} onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-150
                ${activeTab === i ? "bg-navy-800 text-white shadow-sm" : "bg-canvas-muted text-ink-500 hover:bg-border-subtle"}`}
              style={{ fontFamily: "var(--font-display)" }}>
              {cat.short}
            </button>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <div key={activeTab} className="animate-[fadeIn_0.3s_ease-out] card-elevated">
            <h3 className="text-[18px] font-semibold text-ink-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{programCategories[activeTab].label}</h3>
            <ul className="mt-5 space-y-3">
              {programCategories[activeTab].programs.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                  <span className="text-ink-700 text-[15px]">{p}</span>
                </li>
              ))}
            </ul>
            <a href={`/kontak?topik=Program - ${programCategories[activeTab].label}`} className="btn btn-primary mt-6 text-[14px] py-2.5 px-6">
              Tanyakan Program Ini
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-canvas-muted">
        <div ref={methodRef} className="animate-on-scroll max-w-3xl mx-auto text-center">
          <SectionHeader badge="Metodologi" title="80% Activity · 20% Insight" subtitle="Pendekatan experiential learning yang memastikan peserta tidak hanya memahami, tetapi mengalami langsung." />
          <div className="card-base p-8">
            <div className="flex gap-1 h-8 rounded-lg overflow-hidden mb-4">
              <div className="bg-teal-600 rounded-l-lg flex items-center justify-center text-white text-[12px] font-bold" style={{ width: "80%" }}>80% Activity</div>
              <div className="bg-gold-500 rounded-r-lg flex items-center justify-center text-navy-900 text-[12px] font-bold" style={{ width: "20%" }}>20%</div>
            </div>
            <div className="flex justify-between text-[13px] text-ink-500"><span>Praktik · Simulasi · Workshop</span><span>Teori · Insight</span></div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader badge="Proses" title="Design Training" subtitle="Empat tahap perancangan program training yang sistematis." />
        <div ref={designRef} className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {designSteps.map((s) => (
            <div key={s.step} className="card-base text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-navy-800 text-white font-bold flex items-center justify-center mx-auto mb-4 text-[13px]" style={{ fontFamily: "var(--font-display)" }}>{s.step}</div>
              <h3 className="text-[14px] font-semibold text-ink-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
              <p className="text-[13px] text-ink-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-canvas-inverse py-24 md:py-[96px]">
        <div ref={legoRef} className="animate-on-scroll mx-auto max-w-[1200px] px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-gold mb-6">Program Spesial</span>
            <h2 className="text-display text-white mb-4">LEGO® Serious Play®</h2>
            <p className="text-[16px] text-white/60 leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Metode fasilitasi berbasis LEGO® yang mendorong pemikiran kreatif, komunikasi terbuka, dan problem solving kolaboratif. Durasi program: 1 hari penuh.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[{ label: "Durasi", value: "1 Hari" }, { label: "Metode", value: "Hands-on" }, { label: "Output", value: "Shared Vision" }].map((item) => (
                <div key={item.label} className="glass rounded-xl p-5">
                  <p className="text-[24px] font-bold text-gold-500" style={{ fontFamily: "var(--font-display)" }}>{item.value}</p>
                  <p className="micro text-white/40 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
            <a href="/kontak?topik=LEGO Serious Play" className="btn btn-accent px-8 py-3.5 text-[16px]">Tanyakan Program LEGO® Serious Play®</a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
