import Link from "next/link";

const footerLinks = {
  Navigasi: [
    { href: "/", label: "Beranda" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/framework", label: "Framework" },
    { href: "/portofolio", label: "Portofolio" },
    { href: "/testimoni", label: "Testimoni" },
  ],
  Layanan: [
    { href: "/program-training", label: "Training" },
    { href: "/layanan", label: "Consulting" },
    { href: "/framework", label: "Research" },
    { href: "/sertifikasi-bnsp", label: "Sertifikasi BNSP" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-neutral-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-extrabold text-white tracking-tight">
              PASS<span className="text-teal-500">SOLVING</span>
            </Link>
            <p className="mt-4 text-lg font-heading font-semibold text-white/90 leading-snug">
              Solving What Matters,
              <br />
              Scaling What Works
            </p>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
              Pioneer in Business Agility Assessment
              & National Soft Skill Certification.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/passolving"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram PASSOLVING"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-teal-500 transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/628979515205"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp PASSOLVING"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-whatsapp transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:bersama@passolving.com"
                aria-label="Email PASSOLVING"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-teal-500 transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-teal-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:bersama@passolving.com" className="hover:text-teal-500 transition-colors">
                  bersama@passolving.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="https://wa.me/628979515205" className="hover:text-teal-500 transition-colors">
                  +62 897-9515-205
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p className="font-heading font-medium text-neutral-400 italic">
            Working with Intent
          </p>
          <p>© 2026 PASSOLVING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
