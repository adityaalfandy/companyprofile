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
  { href: "/kontak", label: "Kontak" },
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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const navBg = scrolled || !isHome
    ? "navbar-blur shadow-sm"
    : "navbar-transparent";

  const textColor = scrolled || !isHome
    ? "text-navy-500"
    : "text-white";

  const logoColor = scrolled || !isHome
    ? "text-navy-500"
    : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className={`font-heading text-xl font-extrabold tracking-tight ${logoColor} transition-colors duration-300`}>
          PASS<span className="text-teal-500">SOLVING</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-[15px] font-medium rounded-lg transition-colors duration-200
                    ${isActive
                      ? "text-teal-500"
                      : `${textColor} hover:text-teal-500`
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/kontak"
          className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-teal-700 hover:shadow-glow hover:-translate-y-0.5"
        >
          Mulai Diskusi
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${textColor}`}
          onClick={() => setMobileOpen((p) => !p)}
        >
          <span
            className={`block h-[2px] w-6 bg-current rounded transition-all duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-current rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-current rounded transition-all duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 bg-white z-40 flex flex-col transition-all duration-300 lg:hidden
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-xl font-extrabold tracking-tight text-navy-500"
          >
            PASS<span className="text-teal-500">SOLVING</span>
          </Link>
          <button
            type="button"
            aria-label="Tutup menu"
            className="w-10 h-10 flex items-center justify-center text-navy-500"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile links */}
        <ul className="flex flex-col px-6 pt-6 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} style={{ animationDelay: `${i * 50}ms` }}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-4 text-lg font-medium rounded-xl transition-colors duration-200
                    ${isActive
                      ? "text-teal-500 bg-teal-50"
                      : "text-navy-500 hover:bg-neutral-50"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile CTA */}
        <div className="px-6 pb-8 pt-4">
          <Link
            href="/kontak"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full rounded-xl bg-teal-500 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Mulai Diskusi
          </Link>
        </div>
      </div>
    </header>
  );
}
