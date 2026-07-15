"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/framework", label: "Framework" },
  { href: "/layanan", label: "Layanan" },
  { href: "/program-training", label: "Program & Training" },
  { href: "/sertifikasi-bnsp", label: "Sertifikasi" },
  { href: "/portofolio", label: "Portofolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const showSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolid ? "navbar-scrolled" : "navbar-transparent"}`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-8">
        {/* Logo with gold checkmark */}
        <Link
          href="/"
          className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${showSolid ? "text-ink-900" : "text-white"}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          PAS&thinsp;SOL
          <span className="text-gold-500">✓</span>
          ING
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-[14px] font-medium rounded-md transition-colors duration-150
                    ${isActive
                      ? "text-teal-600"
                      : `${showSolid ? "text-ink-700 hover:text-ink-900" : "text-white/80 hover:text-white"}`
                    }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-teal-600 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA — button-primary (navy) */}
        <Link
          href="/kontak"
          className="btn btn-primary hidden lg:inline-flex text-[14px] py-2.5 px-5"
        >
          Mulai Diskusi
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${showSolid ? "text-ink-900" : "text-white"}`}
          onClick={() => setMobileOpen((p) => !p)}
        >
          <span className={`block h-[2px] w-5 bg-current rounded transition-all duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-current rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-current rounded transition-all duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-0 bg-canvas z-40 flex flex-col transition-all duration-300 lg:hidden
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex items-center justify-between px-8 h-[72px] border-b border-border-subtle">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-display text-xl font-bold tracking-tight text-ink-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            PAS&thinsp;SOL<span className="text-gold-500">✓</span>ING
          </Link>
          <button
            type="button"
            aria-label="Tutup menu"
            className="w-10 h-10 flex items-center justify-center text-ink-900"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col px-6 pt-4 gap-0.5 flex-1 overflow-y-auto">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-4 text-[16px] font-semibold rounded-lg transition-colors duration-150
                    ${isActive
                      ? "text-teal-600 bg-teal-100/50"
                      : "text-ink-900 hover:bg-canvas-muted"
                    }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-6 pb-8 pt-4 space-y-3">
          <Link
            href="/kontak"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary w-full py-3.5"
          >
            Mulai Diskusi
          </Link>
        </div>
      </div>
    </header>
  );
}
