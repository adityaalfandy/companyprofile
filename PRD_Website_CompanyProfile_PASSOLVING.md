# PRODUCT REQUIREMENTS DOCUMENT
## Website Company Profile — PASSOLVING (Agility & Transformation)
**Perusahaan:** PT Palsindo Utama | Training | Consulting | Research
**Versi:** 1.0 | **Tanggal:** 14 Juli 2026 | **Status:** Draft untuk Review

---

## Riwayat Revisi

| Versi | Tanggal | Deskripsi Perubahan | Penulis |
|---|---|---|---|
| 1.0 | 14 Jul 2026 | Draf awal PRD berdasarkan materi Company Profile PASSOLVING 2026 | Product Team |

---

## 1. Latar Belakang

PASSOLVING (beroperasi di bawah PT Palsindo Utama, berdiri di Jakarta sejak 2023) adalah lembaga Training, Consulting, dan Research yang berfokus pada Business Agility Assessment dan Sertifikasi Soft Skill Nasional (BNSP). PASSOLVING telah dipercaya oleh berbagai organisasi lintas sektor — termasuk Kemenkes, LKPP, OJK, BNI, Pos Indonesia, Indosat Ooredoo Hutchison, hingga institusi pendidikan seperti ITB, UNPAD, dan FTUI.

Saat ini, materi profil perusahaan hanya tersedia dalam bentuk company profile digital (PDF/slide) yang dibagikan manual via QR code/WhatsApp/email. Belum ada kanal digital resmi (website) yang dapat diakses publik secara mandiri.

Dokumen ini mendefinisikan kebutuhan pembuatan **Website Company Profile PASSOLVING** sebagai kanal digital utama untuk membangun kredibilitas, menjelaskan framework & layanan (Training–Consulting–Research), menampilkan portofolio klien, dan menjadi entry point kolaborasi (Discovery Session).

---

## 2. Tujuan Produk

- Menyediakan kanal digital resmi yang merepresentasikan identitas brand PASSOLVING secara profesional, konsisten dengan materi company profile 2026.
- Mengomunikasikan proposisi nilai — PASS Business Agility Framework (Empathy–System–Result) dan siklus engagement SCAN–SHIFT–SCALE–SCRIBE — secara jelas.
- Menampilkan bukti kredibilitas (client footprint, testimoni, studi kasus) untuk membangun trust.
- Menjadi kanal lead generation menuju form kontak / Discovery Session, WhatsApp, atau email.
- Menyediakan informasi program unggulan 2026 dan skema Sertifikasi Soft Skill BNSP.
- Mudah diperbarui (maintainable) oleh tim non-teknis untuk menambah portofolio, testimoni, dan program baru.

---

## 3. Target Pengguna (User Persona)

| Persona | Deskripsi | Kebutuhan Utama di Website |
|---|---|---|
| **Decision Maker / Eksekutif** | C-level, Direktur, Head of HR/OD di perusahaan/lembaga pemerintah | Kredibilitas cepat terlihat (logo klien, angka hasil), ringkasan framework, cara mulai kolaborasi |
| **Manajer HR / L&D / Corporate University** | Penanggung jawab program pelatihan internal | Detail program training, metodologi, skema sertifikasi BNSP, studi kasus relevan |
| **Founder / Owner UMKM & Bisnis Keluarga** | Menghadapi masalah operasional (efisiensi, inventory, margin) | Studi kasus bisnis serupa, hasil kuantitatif, kemudahan kontak |
| **Calon Mitra / Media / Institusi Pendidikan** | Menjajaki kolaborasi riset/akademik | Info pilar Research, kontak resmi, legalitas perusahaan |

---

## 4. Ruang Lingkup (Scope)

### 4.1 In-Scope
- Website company profile multi-halaman, responsif desktop & mobile.
- Konten statis bersumber dari materi Company Profile PASSOLVING 2026 (PDF terlampir).
- Form kontak / Discovery Session dengan notifikasi ke email dan/atau WhatsApp.
- Halaman portofolio/studi kasus yang dapat ditambah tanpa mengubah kode (CMS/data terstruktur).
- Optimasi SEO dasar (meta tag, sitemap.xml, struktur heading, Open Graph).
- Integrasi tautan ke Instagram (@passolving) dan WhatsApp Business.

### 4.2 Out-of-Scope (Fase 1)
- Sistem login/portal klien, e-learning/LMS, atau pembayaran online.
- Multi-bahasa (Fase 1 hanya Bahasa Indonesia; struktur konten disiapkan untuk EN di fase berikutnya).
- Blog/artikel panjang dengan sistem komentar (dapat menjadi Fase 2).
- Integrasi CRM otomatis (Fase 1 cukup notifikasi email/WhatsApp).

---

## 5. Rekomendasi Arsitektur & Tech Stack

### 5.1 Rekomendasi Utama

| Layer | Rekomendasi | Alasan |
|---|---|---|
| Frontend Framework | **Next.js (React)** dengan Static Site Generation (SSG)/ISR | Performa loading cepat, SEO-friendly (server-rendered), ekosistem luas, mudah di-deploy ke Vercel/Netlify |
| Styling | **Tailwind CSS** | Mempercepat implementasi desain sesuai brand guideline, konsisten dan mudah dipelihara |
| Content Management | **Headless CMS ringan** (mis. Sanity.io / Notion-as-CMS / JSON-Markdown terstruktur) | Tim non-teknis dapat menambah portofolio & testimoni tanpa developer |
| Form Handling | Form endpoint (Resend/Formspree) + notifikasi WhatsApp API (Fonnte/WA Business API) | Lead langsung masuk ke email & WhatsApp tanpa backend kompleks |
| Hosting/Deployment | **Vercel atau Netlify** (CDN global) | Deployment cepat, auto-scaling, integrasi CI/CD dari Git |
| Analytics | Google Analytics 4 + Google Search Console | Mengukur trafik, sumber pengunjung, konversi form |

### 5.2 Alternatif (jika tim lebih familiar PHP)
**Laravel (Blade + Tailwind)** dengan panel admin sederhana (Filament) — setara secara fungsional, trade-off performa awal (TTFB) sedikit lebih lambat dibanding SSG Next.js, namun lebih mudah dipelihara oleh tim yang sudah familiar Laravel.

---

## 6. Sitemap / Struktur Halaman

| # | Halaman | Sumber Materi | Tujuan Halaman |
|---|---|---|---|
| 1 | **Home / Beranda** | Cover: "Agility & Transformation" | First impression, ringkasan value proposition, CTA utama |
| 2 | **Tentang Kami** | PASS at Glance, PASS Footprint, Mengapa PASS? | Membangun trust: siapa PASSOLVING, 3 pilar, legalitas, daftar klien |
| 3 | **Framework Kami** | PASS Business Agility Framework, Iceberg of Ignorance | Menjelaskan metodologi unik secara visual |
| 4 | **Layanan / Proses Engagement** | SCAN–SHIFT–SCALE–SCRIBE | Tahapan kolaborasi dari diagnosis hingga scale-up |
| 5 | **Program & Training 2026** | 2026 Highlight Topics (4 pilar), Training Methodology, Design Training, LEGO Serious Play | Katalog program & metodologi (80% activity/20% insight) |
| 6 | **Sertifikasi BNSP** | Skema 1–3, SKKNI Acuan | Info sertifikasi soft skill nasional |
| 7 | **Portofolio / Studi Kasus** | PASS Projects (BNI, IOH, LKPP, DoIT, Medical Centre, Agribisnis, Pos Indonesia, Kemenkes, dll.) | Bukti hasil nyata (data kuantitatif) — filterable by industri |
| 8 | **Testimoni** | What Leaders Say about PASS | Kutipan pemimpin lintas industri (social proof) |
| 9 | **Kontak / Mulai Kolaborasi** | Next Step (Discovery Session, Co-Design, Pilot & Impact Review) | Form kontak, WhatsApp, email, Instagram |
| 10 | **Footer (global)** | Working with Intent, Solving What Matters Scaling What Works | Navigasi ulang, tagline penutup, sosial media, copyright |

---

## 7. Kebutuhan Fungsional per Halaman

### 7.1 Home / Beranda
- Hero section: headline "Agility & Transformation", sub-headline "Pioneer in Agility Assessment & National Soft Skill Certification, Determine for Execution Deliveries", CTA button ("Mulai Diskusi"/"Discovery Session").
- Ringkasan 3 pilar: Training, Consulting, Research (ikon + deskripsi + tautan).
- Strip logo klien (auto-scroll/marquee) — Kemenkes, BNI, LKPP, OJK, Indosat, dll.
- Cuplikan statistik hasil (mis. "Revenue trajectory 800M dalam 6 bulan", "Akurasi stok 98%").
- Preview framework SCAN–SHIFT–SCALE–SCRIBE dengan tautan "Selengkapnya".
- Carousel testimoni singkat (3 kutipan).
- CTA akhir halaman ke halaman Kontak.

### 7.2 Tentang Kami
- Narasi "Not every organization needs PASS. PASS works when leadership is ready to face uncomfortable realities."
- Ilustrasi segitiga Empathy–System–Result sesuai desain asli.
- Info legal: PT Palsindo Utama, berdiri Jakarta sejak 2023.
- Daftar client footprint dikelompokkan per kategori (Korporasi, BUMN/Pemerintah, Pendidikan, Internasional) — dari data terstruktur agar mudah ditambah.
- Section "Mengapa PASS?" — 4 kartu keunggulan (lintas industri, berbasis sistem & data, fokus hasil, humanis & adaptif).

### 7.3 Framework Kami
- Visualisasi PASS Business Agility Framework (direplikasi sebagai SVG/HTML, bukan hanya gambar PNG, agar tajam di semua resolusi).
- Penjelasan elemen: Customer, Team, Leader, Big Data, Digitalization, Disruption, Global Competition, Goals/Objective.
- Section "Iceberg of Ignorance" (kutipan Sidney Yoshida) — diagram interaktif (Executives 4%, Managers 9%, Leaders 74%, Staff 100%).

### 7.4 Layanan / Proses Engagement
- Diagram siklus 4 tahap: SCAN (Diagnosis) → SHIFT (Behavior & Way of Working) → SCALE (Strategy Implementation) → SCRIBE (Research & Impact), masing-masing dengan daftar deliverables.
- Tiap tahap dapat di-expand untuk detail deliverables (Level Report, Learning Sessions, Transformation Roadmap, Impact Report, dsb.).
- Catatan: "Setiap fase disesuaikan dengan konteks organisasi dan tingkat kesiapan perubahan."

### 7.5 Program & Training 2026
- 4 kategori program sebagai accordion/tab: Leadership Agility & Organizational Readiness, Productivity/Collaboration & Learning Agility, Innovation/Design & System Thinking, Self Leadership & Team Capability Development.
- Training Methodology: proporsi 80% Activity / 20% Insight (progress bar/donut chart).
- Design Training: 4 tahapan (Problem Identification → Action Development → Program Implementation → Evaluation).
- Section khusus LEGO® Serious Play® (durasi 1 hari, manfaat, deskripsi metode).
- CTA "Tanyakan Program Ini" per program → form kontak dengan subjek pre-filled.

### 7.6 Sertifikasi BNSP
- 3 kartu skema: Skema 1 (Problem Solving), Skema 2 (Pengembangan Kepemimpinan), Skema 3 (Komunikasi Efektif).
- Badge referensi SKKNI 2020-234.
- Logo LSP Softskill Indonesia Kompeten sebagai badge resmi.

### 7.7 Portofolio / Studi Kasus
- Grid/list dengan filter kategori: Training (BNI Corporate University, IOH, LKPP, DoIT) dan Transformation/Consulting (Medical Centre, Agribisnis, Pos Indonesia, Retail Warehouse, Resto & Catering, Kemenkes).
- Struktur konsisten per studi kasus: Client & Logo, Konteks/Kasus, Tantangan, Peran PASS/Solusi, Fokus, Hasil (angka kuantitatif ditonjolkan, mis. "Revenue meningkat hingga 1000%").
- Data disimpan sebagai konten terstruktur (CMS/JSON) agar mudah ditambah tanpa developer.

### 7.8 Testimoni
- Kutipan per persona (Manager Retail Chain, Founder Food Processing Manufacturer, Founder Beauty Clinic, Founder Integrated Farm, COO Agroindustry) lengkap jabatan & industri.
- Angka pencapaian dalam testimoni (92% Accuracy, kinerja naik 1000%, dll.) sebagai badge angka besar.
- Tag penutup: "Adaptasi, Kolaborasi, Optimalisasi, Inovasi, Pertumbuhan".

### 7.9 Kontak / Mulai Kolaborasi
- Diagram 3 langkah Next Step: Discovery Session → Co-Design Program → Pilot & Impact Review.
- Form kontak (minimum): Nama, Perusahaan/Instansi, Email, No. WhatsApp, Kebutuhan/Topik, Pesan.
- Validasi client-side & server-side (wajib isi, format email/telepon valid).
- Notifikasi ke email (bersama@passolving.com) dan/atau WhatsApp Business setelah submit, plus pesan konfirmasi ke user.
- Tombol "Chat via WhatsApp" langsung (wa.me link).
- Info kontak: +62897-9515-205, bersama@passolving.com, passolving.com, IG @passolving.

### 7.10 Navigasi & Footer Global
- Header sticky: Beranda, Tentang Kami, Framework, Layanan, Program & Training, Sertifikasi, Portofolio, Kontak.
- Footer: tagline "Solving What Matters, Scaling What Works" & "Working with Intent", kontak, sosial media, copyright "© 2026 PASSOLVING. All rights reserved."
- Floating WhatsApp button di seluruh halaman.

---

## 8. Kebutuhan Non-Fungsional

| Kategori | Kebutuhan |
|---|---|
| **Performa** | Skor PageSpeed/Core Web Vitals ≥ 85 (mobile & desktop); waktu muat halaman utama < 2.5 detik pada 4G |
| **Responsivitas** | Optimal pada breakpoint mobile (360px), tablet (768px), desktop (≥1280px) |
| **SEO** | Meta title/description unik per halaman, Organization schema, sitemap.xml, robots.txt, Open Graph image |
| **Aksesibilitas** | Kontras teks WCAG AA, alt text pada seluruh gambar, navigasi keyboard-accessible |
| **Keamanan** | HTTPS wajib, proteksi form dari spam (reCAPTCHA/honeypot), sanitasi input |
| **Kemudahan Pemeliharaan** | Konten portofolio, testimoni, program training dapat diperbarui via CMS tanpa perubahan kode |
| **Branding** | Navy `#12294B`, Teal `#0E9A93`, Gold `#F2B705`, Pink/Magenta `#EC1E79`; font sans-serif tebal untuk headline |
| **Kompatibilitas Browser** | 2 versi terbaru Chrome, Safari, Edge, Firefox |

---

## 9. Metrik Keberhasilan

- Jumlah pengunjung unik bulanan (target ditentukan bersama tim marketing pasca-launching).
- Jumlah pengajuan form kontak/Discovery Session per bulan (lead generation).
- Rasio konversi (visitor → form submission) dari traffic organik & sosial media.
- Waktu rata-rata di halaman Portofolio & Program Training (indikasi engagement).
- Peringkat SEO untuk kata kunci prioritas: "Business Agility Assessment Indonesia", "Sertifikasi Soft Skill BNSP", "konsultan agility Jakarta".

---

## 10. Asumsi & Batasan

- Seluruh materi konten mengacu pada dokumen "Compro PASS 2026" terlampir; validasi akhir konten tetap memerlukan persetujuan tim PASSOLVING sebelum publikasi.
- Foto/dokumentasi kegiatan pada materi asli (resolusi rendah) perlu diganti aset foto beresolusi tinggi, atau menggunakan ilustrasi kustom untuk elemen diagram (framework, iceberg, engagement cycle).
- Logo klien memerlukan izin penggunaan (brand permission) dari masing-masing klien sebelum dipublikasikan.
- Domain passolving.com diasumsikan sudah dimiliki dan dapat diarahkan (DNS) ke hosting baru.
- Bahasa utama Bahasa Indonesia; tagline berbahasa Inggris (mis. "Working with Intent") dipertahankan sesuai identitas brand.

---

## 11. Roadmap Implementasi (Usulan)

| Fase | Cakupan | Estimasi Durasi |
|---|---|---|
| **Fase 1 — Discovery & UI/UX Design** | Wireframe, moodboard/desain visual (Figma) untuk 10 halaman, review stakeholder | 1–2 minggu |
| **Fase 2 — Development** | Setup Next.js + Tailwind, implementasi seluruh halaman & komponen, integrasi CMS & form kontak | 3–4 minggu |
| **Fase 3 — Konten & QA** | Input konten final, uji fungsional (form, responsif, cross-browser), optimasi SEO & performa | 1 minggu |
| **Fase 4 — Launching** | Deployment ke domain produksi, setup Google Analytics/Search Console, monitoring pasca-launching | 3–5 hari |

---

## 12. Lampiran

Sumber utama seluruh konten pada dokumen ini: **Compro_PASS_2026.pdf** (Company Profile PASSOLVING, Profile 2026), mencakup PASS at Glance, PASS Footprint, PASS Business Agility Framework, Iceberg of Ignorance, PASS Engagement (SCAN–SHIFT–SCALE–SCRIBE), testimoni klien, Agility by PASS (Assessment, Training Methodology, Design Training), 2026 Highlight Topics, LEGO Serious Play, portofolio proyek Training & Transformation, Lingkup Sertifikasi BNSP, Next Step, dan Mengapa PASS.
