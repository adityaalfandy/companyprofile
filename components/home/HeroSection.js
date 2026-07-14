"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient bg-grid-pattern overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-magenta-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-32 md:py-40 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-teal-100 mb-8 animate-[fadeUp_0.6s_var(--ease-out)_0.2s_both]">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Training · Consulting · Research
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight animate-[fadeUp_0.8s_var(--ease-out)_0.3s_both]">
          Agility &
          <br />
          <span className="bg-gradient-to-r from-teal-500 via-teal-100 to-gold-500 bg-clip-text text-transparent">
            Transformation
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed animate-[fadeUp_0.8s_var(--ease-out)_0.5s_both]">
          Pioneer in Agility Assessment & National Soft Skill Certification.
          <br className="hidden md:block" />
          Determine for Execution Deliveries.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeUp_0.6s_var(--ease-out)_0.7s_both]">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-200 hover:bg-teal-700 hover:shadow-glow hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Mulai Diskusi
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto justify-center"
          >
            Lihat Framework Kami
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 md:mt-24 animate-[fadeUp_0.6s_var(--ease-out)_1s_both]">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 mx-auto flex justify-center">
            <div className="w-1 h-2.5 bg-white/40 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Fade into next section */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
