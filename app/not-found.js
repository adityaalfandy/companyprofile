import Link from "next/link";

export const metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Illustration - Compass/Iceberg themed */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
            {/* Circle */}
            <circle cx="80" cy="80" r="70" className="stroke-neutral-200" strokeWidth="2" />
            <circle cx="80" cy="80" r="70" className="stroke-teal-500" strokeWidth="2" strokeDasharray="110 330" strokeLinecap="round" />

            {/* 404 text */}
            <text x="80" y="72" textAnchor="middle" className="fill-navy-500 text-[40px] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              404
            </text>
            <text x="80" y="96" textAnchor="middle" className="fill-neutral-400 text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
              Not Found
            </text>
          </svg>
        </div>

        <h1 className="font-heading text-2xl md:text-3xl font-bold text-navy-500 mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-neutral-500 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Mari kami bantu Anda menemukan apa yang Anda cari.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-glow hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Kembali ke Beranda
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-navy-500 shadow-sm transition-all hover:bg-neutral-50 hover:border-teal-300"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
