"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-aurora bg-dot-grid overflow-hidden">
      {/* Aurora glow orbs */}
      <div className="absolute top-1/3 left-[15%] w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[20%] w-[400px] h-[400px] bg-magenta-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-accent/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-8 py-32 md:py-40 z-10">
        {/* Overline eyebrow */}
        <div className="animate-[fadeUp_0.6s_var(--ease-out)_0.2s_both]">
          <span className="overline text-teal-500 tracking-[0.12em]">
            Training · Consulting · Research
          </span>
        </div>

        {/* Letter-spaced signature headline */}
        <h1 className="mt-6 animate-[fadeUp_0.8s_var(--ease-out)_0.35s_both]">
          <span className="text-spaced-hero text-white text-[clamp(28px,5vw,56px)] leading-[1.1] block">
            A G I L I T Y
          </span>
          <span className="text-spaced-hero text-[clamp(28px,5vw,56px)] leading-[1.1] block mt-1" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-white/60">&</span>{" "}
            <span className="bg-gradient-to-r from-teal-500 via-gold-500 to-magenta-500 bg-clip-text text-transparent">
              T R A N S F O R M A T I O N
            </span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-[16px] md:text-[18px] text-white/60 max-w-xl leading-relaxed animate-[fadeUp_0.7s_var(--ease-out)_0.5s_both]" style={{ fontFamily: "var(--font-body)" }}>
          Pioneer in Agility Assessment & National Soft Skill Certification.
          <br className="hidden md:block" />
          Determine for Execution Deliveries.
        </p>

        {/* CTAs — navy primary + gold accent */}
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-[fadeUp_0.6s_var(--ease-out)_0.65s_both]">
          <Link href="/kontak" className="btn btn-accent px-8 py-3.5 text-[16px] shadow-md w-full sm:w-auto">
            Discovery Session
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link href="/framework" className="btn btn-secondary border-white/15 text-white/80 hover:bg-white/8 hover:border-white/25 hover:text-white px-8 py-3.5 text-[16px] w-full sm:w-auto">
            Lihat Framework Kami
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 md:mt-28 animate-[fadeUp_0.5s_var(--ease-out)_1s_both]">
          <div className="w-5 h-9 rounded-full border-[1.5px] border-white/15 flex justify-center">
            <div className="w-1 h-2 bg-white/30 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
