"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

export function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`animate-on-scroll mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4
          ${light ? "bg-white/10 text-teal-100" : "bg-teal-50 text-teal-700"}`}>
          {badge}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight
        ${light ? "text-white" : "text-navy-500"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed
          ${center ? "mx-auto" : ""}
          ${light ? "text-neutral-300" : "text-neutral-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Section({ children, className = "", dark = false, id }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${dark ? "bg-navy-800 text-white" : ""} ${className}`}>
      <div className="mx-auto max-w-[1280px] px-6">
        {children}
      </div>
    </section>
  );
}

export function CTABanner() {
  const ref = useScrollAnimation();

  return (
    <section className="bg-cta-gradient py-20 md:py-28">
      <div ref={ref} className="animate-on-scroll mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
          Siap Memulai Transformasi?
        </h2>
        <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          Jadwalkan Discovery Session untuk mendiskusikan kebutuhan organisasi Anda
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/kontak"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-teal-700 hover:shadow-glow hover:-translate-y-0.5"
          >
            Mulai Diskusi
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/628979515205?text=Halo%20PASSOLVING%2C%20saya%20ingin%20berdiskusi%20tentang..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-whatsapp-dark hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
