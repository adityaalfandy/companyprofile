"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";
import { SectionHeader, Section } from "@/components/Section";

const nextSteps = [
  {
    step: "01",
    title: "Discovery Session",
    desc: "Sesi diagnosa awal untuk memahami kebutuhan, tantangan, dan konteks organisasi Anda secara mendalam.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Co-Design Program",
    desc: "Merancang program dan intervensi bersama, disesuaikan dengan konteks, budaya, dan kesiapan organisasi Anda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Pilot & Impact Review",
    desc: "Implementasi program pilot dan review dampak secara berkala untuk memastikan hasil yang terukur.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
];

const topikOptions = [
  "Training",
  "Consulting",
  "Research",
  "Sertifikasi BNSP",
  "LEGO® Serious Play®",
  "Lainnya",
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    email: "",
    whatsapp: "",
    topik: "",
    pesan: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const stepsRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  // Read ?topik= from URL on client side
  useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const topik = params.get("topik");
      if (topik) {
        setFormData((prev) => ({ ...prev, topik }));
      }
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.nama.trim()) newErrors.nama = "Nama wajib diisi";
    if (!formData.perusahaan.trim()) newErrors.perusahaan = "Perusahaan/Instansi wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Nomor WhatsApp wajib diisi";
    } else if (!/^(\+62|62|08)\d{8,12}$/.test(formData.whatsapp.replace(/[\s-]/g, ""))) {
      newErrors.whatsapp = "Format nomor tidak valid (contoh: 0897xxx)";
    }
    if (!formData.topik) newErrors.topik = "Pilih kebutuhan/topik";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("sending");
    // Simulate send (replace with Formspree/Resend integration)
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient bg-grid-pattern pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-100 text-xs font-semibold tracking-wider uppercase mb-6">
            Kontak
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Mulai Kolaborasi
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Langkah pertama menuju transformasi organisasi Anda dimulai dari sebuah percakapan.
          </p>
        </div>
      </section>

      {/* 3 Steps */}
      <Section className="bg-neutral-50">
        <div ref={stepsRef} className="animate-on-scroll grid md:grid-cols-3 gap-6 lg:gap-8">
          {nextSteps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connection line */}
              {i < nextSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-full h-px bg-neutral-200 translate-x-1/2 -z-0" />
              )}
              <div className="relative z-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center mx-auto mb-5">
                  {s.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-500 text-white font-heading font-bold text-xs mb-3">
                  {s.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-500 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Form + Contact Info */}
      <Section>
        <SectionHeader
          badge="Hubungi Kami"
          title="Jadwalkan Discovery Session"
          subtitle="Isi formulir di bawah ini atau hubungi kami langsung melalui WhatsApp."
        />

        <div ref={formRef} className="animate-on-scroll grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form (3/5) */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              /* Success State */
              <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-500 mb-3">
                  Pesan Anda Telah Terkirim!
                </h3>
                <p className="text-neutral-500 mb-6">
                  Terima kasih! Tim kami akan menghubungi Anda dalam 1×24 jam.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ nama: "", perusahaan: "", email: "", whatsapp: "", topik: "", pesan: "" });
                  }}
                  className="text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors"
                >
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Nama */}
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Nama <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Nama lengkap Anda"
                    className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 bg-white placeholder:text-neutral-300 outline-none transition-all duration-200
                      ${errors.nama
                        ? "border-error focus:ring-2 focus:ring-error/20"
                        : "border-neutral-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/12"
                      }`}
                  />
                  {errors.nama && <p className="mt-1.5 text-xs text-error">{errors.nama}</p>}
                </div>

                {/* Perusahaan */}
                <div>
                  <label htmlFor="perusahaan" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Perusahaan / Instansi <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="perusahaan"
                    name="perusahaan"
                    value={formData.perusahaan}
                    onChange={handleChange}
                    placeholder="Nama perusahaan atau instansi"
                    className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 bg-white placeholder:text-neutral-300 outline-none transition-all duration-200
                      ${errors.perusahaan
                        ? "border-error focus:ring-2 focus:ring-error/20"
                        : "border-neutral-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/12"
                      }`}
                  />
                  {errors.perusahaan && <p className="mt-1.5 text-xs text-error">{errors.perusahaan}</p>}
                </div>

                {/* Email & WhatsApp row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@perusahaan.com"
                      className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 bg-white placeholder:text-neutral-300 outline-none transition-all duration-200
                        ${errors.email
                          ? "border-error focus:ring-2 focus:ring-error/20"
                          : "border-neutral-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/12"
                        }`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-error">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      No. WhatsApp <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="0897-9515-205"
                      className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 bg-white placeholder:text-neutral-300 outline-none transition-all duration-200
                        ${errors.whatsapp
                          ? "border-error focus:ring-2 focus:ring-error/20"
                          : "border-neutral-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/12"
                        }`}
                    />
                    {errors.whatsapp && <p className="mt-1.5 text-xs text-error">{errors.whatsapp}</p>}
                  </div>
                </div>

                {/* Topik */}
                <div>
                  <label htmlFor="topik" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Kebutuhan / Topik <span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="topik"
                      name="topik"
                      value={formData.topik}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-base text-neutral-900 bg-white appearance-none outline-none transition-all duration-200
                        ${errors.topik
                          ? "border-error focus:ring-2 focus:ring-error/20"
                          : "border-neutral-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/12"
                        }
                        ${!formData.topik ? "text-neutral-300" : ""}`}
                    >
                      <option value="" disabled>Pilih kebutuhan Anda</option>
                      {topikOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  {errors.topik && <p className="mt-1.5 text-xs text-error">{errors.topik}</p>}
                </div>

                {/* Pesan */}
                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Pesan <span className="text-neutral-400">(opsional)</span>
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ceritakan kebutuhan atau tantangan yang ingin Anda diskusikan..."
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 bg-white placeholder:text-neutral-300 outline-none transition-all duration-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/12 resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-teal-700 hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-navy-500 mb-4">Chat Langsung</h3>
              <a
                href="https://wa.me/628979515205?text=Halo%20PASSOLVING%2C%20saya%20ingin%20berdiskusi%20tentang..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-whatsapp px-5 py-4 text-white font-semibold transition-all hover:bg-whatsapp-dark hover:-translate-y-0.5 shadow-md"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat via WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-5">
              <h3 className="font-heading text-base font-bold text-navy-500">Info Kontak</h3>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Email</p>
                  <a href="mailto:bersama@passolving.com" className="text-sm text-navy-500 font-semibold hover:text-teal-500 transition-colors">
                    bersama@passolving.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Telepon / WhatsApp</p>
                  <a href="tel:+628979515205" className="text-sm text-navy-500 font-semibold hover:text-teal-500 transition-colors">
                    +62 897-9515-205
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Instagram</p>
                  <a href="https://instagram.com/passolving" target="_blank" rel="noopener noreferrer" className="text-sm text-navy-500 font-semibold hover:text-teal-500 transition-colors">
                    @passolving
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Website</p>
                  <span className="text-sm text-navy-500 font-semibold">
                    passolving.com
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-navy-500 mb-2">Lokasi</h3>
              <p className="text-sm text-neutral-500">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
