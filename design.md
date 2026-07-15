---
version: "1.0.0"
name: "Passolving Design System"
description: >
  Sistem desain untuk Passolving — firma Training, Consulting & Research yang
  memosisikan diri sebagai "mitra transformasi", bukan sekadar lembaga
  pelatihan. Bahasa visualnya menggabungkan otoritas korporat (navy, tipografi
  geometris tegas, grid rapi) dengan energi progresif (teal, gold, magenta)
  yang merepresentasikan tiga pilar PASS Framework: Empathy, System, Result.
  Filosofi tokens ini adalah "clarity before decoration": setiap elemen
  disusun untuk membuat data dan argumen strategis terlihat jernih di
  hadapan audiens C-level, pemerintah, dan institusi regulator.

colors:
  brand:
    navy-900: "#0B1633"   # Deep navy — dominan logo, header, teks utama
    navy-800: "#10224E"
    navy-700: "#16306B"
    navy-600: "#1E3F8C"
    teal-600: "#0B8E88"   # Teal utama — energi "System", CTA sekunder
    teal-500: "#0EA5A0"
    teal-100: "#DFF6F4"
    gold-600: "#D98F00"
    gold-500: "#F2A900"   # Gold — checkmark logo, aksen "Result", highlight
    gold-100: "#FDEED0"
    magenta-600: "#C21569"
    magenta-500: "#E8127A" # Magenta — aksen "Scale", momen berani/kontras
    blue-accent-500: "#2D4FD6" # Biru terang — aksen "Shift", tautan interaktif

  canvas:
    canvas-default: "#F5F7FA"   # Latar halaman default
    canvas-muted: "#EEF1F6"     # Latar section alternatif / zebra
    canvas-inverse: "#0B1633"   # Latar section gelap (hero, footer, CTA block)

  surface:
    surface-base: "#FFFFFF"
    surface-raised: "#FFFFFF"       # dipakai bersama shadow.card
    surface-sunken: "#F0F2F7"
    surface-overlay: "rgba(11, 22, 51, 0.6)"  # modal/scrim
    surface-inverse: "#10224E"      # kartu di atas latar gelap

  text:
    ink-900: "#0B1633"   # Judul, heading utama
    ink-700: "#33415C"   # Body text utama
    ink-500: "#64748B"   # Body sekunder, deskripsi, caption
    ink-300: "#9AA5B8"   # Placeholder, disabled text
    ink-inverse: "#FFFFFF"
    ink-inverse-muted: "rgba(255,255,255,0.72)"
    ink-brand: "#0B8E88"
    ink-link: "#2D4FD6"

  semantic:
    success-bg: "#E5F7EF"
    success-fg: "#0F8A57"
    success-border: "#BCEBD3"
    warning-bg: "#FDF3DC"
    warning-fg: "#B4770A"
    warning-border: "#F6DFA0"
    error-bg: "#FDEAEC"
    error-fg: "#C11C2A"
    error-border: "#F5C1C6"
    info-bg: "#E9EEFC"
    info-fg: "#2D4FD6"
    info-border: "#C4D0F5"

  hairline:
    border-subtle: "#E2E6ED"
    border-default: "#CBD2DE"
    border-strong: "#9AA5B8"
    border-brand: "#0EA5A0"
    border-focus: "#2D4FD6"
    divider: "#E2E6ED"

typography:
  fontFamilies:
    display: "'Poppins', 'Segoe UI', sans-serif"   # heading, angka besar, label berjarak lebar
    body: "'Inter', 'Segoe UI', sans-serif"          # paragraf, UI, tabel, form
    mono: "'JetBrains Mono', 'SFMono-Regular', monospace" # kode, data teknis, token

  scale:
    hero-display:
      fontFamily: display
      fontSize: "64px"
      fontWeight: 700
      lineHeight: "1.05"
      letterSpacing: "-0.02em"
    display:
      fontFamily: display
      fontSize: "48px"
      fontWeight: 700
      lineHeight: "1.1"
      letterSpacing: "-0.015em"
    h1:
      fontFamily: display
      fontSize: "36px"
      fontWeight: 700
      lineHeight: "1.2"
      letterSpacing: "-0.01em"
    h2:
      fontFamily: display
      fontSize: "28px"
      fontWeight: 600
      lineHeight: "1.25"
      letterSpacing: "-0.005em"
    h3:
      fontFamily: display
      fontSize: "22px"
      fontWeight: 600
      lineHeight: "1.3"
      letterSpacing: "0em"
    h4:
      fontFamily: display
      fontSize: "18px"
      fontWeight: 600
      lineHeight: "1.35"
      letterSpacing: "0em"
    overline:
      fontFamily: display
      fontSize: "13px"
      fontWeight: 600
      lineHeight: "1.4"
      letterSpacing: "0.12em"
      textTransform: "uppercase"
    body-lg:
      fontFamily: body
      fontSize: "18px"
      fontWeight: 400
      lineHeight: "1.6"
      letterSpacing: "0em"
    body:
      fontFamily: body
      fontSize: "16px"
      fontWeight: 400
      lineHeight: "1.6"
      letterSpacing: "0em"
    body-sm:
      fontFamily: body
      fontSize: "14px"
      fontWeight: 400
      lineHeight: "1.55"
      letterSpacing: "0em"
    caption:
      fontFamily: body
      fontSize: "13px"
      fontWeight: 500
      lineHeight: "1.4"
      letterSpacing: "0.01em"
    micro:
      fontFamily: body
      fontSize: "11px"
      fontWeight: 500
      lineHeight: "1.4"
      letterSpacing: "0.04em"
      textTransform: "uppercase"

rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  pill: "999px"
  full: "50%"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  section: "96px"
  hero: "128px"

elevation:
  shadow-xs: "0 1px 2px rgba(11, 22, 51, 0.06)"
  shadow-sm: "0 2px 8px rgba(11, 22, 51, 0.08)"
  shadow-md: "0 8px 24px rgba(11, 22, 51, 0.10)"
  shadow-lg: "0 16px 40px rgba(11, 22, 51, 0.14)"
  shadow-focus: "0 0 0 4px rgba(45, 79, 214, 0.20)"
  shadow-inverse: "0 8px 24px rgba(0, 0, 0, 0.35)"

components:
  button-primary:
    background: colors.brand.navy-800
    backgroundHover: colors.brand.navy-900
    text: colors.text.ink-inverse
    fontFamily: typography.fontFamilies.display
    fontSize: "16px"
    fontWeight: 600
    paddingY: spacing.sm
    paddingX: spacing.lg
    borderRadius: rounded.sm
    border: "none"
    shadow: elevation.shadow-xs
    transition: "all 150ms ease-out"

  button-accent:
    background: colors.brand.gold-500
    backgroundHover: colors.brand.gold-600
    text: colors.brand.navy-900
    fontFamily: typography.fontFamilies.display
    fontSize: "16px"
    fontWeight: 600
    paddingY: spacing.sm
    paddingX: spacing.lg
    borderRadius: rounded.sm
    border: "none"
    shadow: elevation.shadow-xs

  button-secondary:
    background: "transparent"
    backgroundHover: colors.canvas.canvas-muted
    text: colors.brand.navy-800
    border: "1.5px solid ${colors.hairline.border-default}"
    borderRadius: rounded.sm
    fontFamily: typography.fontFamilies.display
    fontSize: "16px"
    fontWeight: 600
    paddingY: spacing.sm
    paddingX: spacing.lg

  button-ghost:
    background: "transparent"
    backgroundHover: "rgba(11,22,51,0.06)"
    text: colors.brand.teal-600
    border: "none"
    fontWeight: 600
    paddingY: spacing.xs
    paddingX: spacing.sm

  text-input:
    background: colors.surface.surface-base
    border: "1.5px solid ${colors.hairline.border-default}"
    borderRadius: rounded.sm
    text: colors.text.ink-900
    placeholderText: colors.text.ink-300
    paddingY: spacing.sm
    paddingX: spacing.md
    fontFamily: typography.fontFamilies.body
    fontSize: "16px"
    focusBorder: colors.hairline.border-focus
    focusShadow: elevation.shadow-focus
    errorBorder: colors.semantic.error-border
    errorText: colors.semantic.error-fg

  select:
    extends: text-input
    trailingIcon: colors.text.ink-500

  card-base:
    background: colors.surface.surface-base
    border: "1px solid ${colors.hairline.border-subtle}"
    borderRadius: rounded.lg
    padding: spacing.lg
    shadow: elevation.shadow-xs

  card-elevated:
    background: colors.surface.surface-raised
    border: "none"
    borderRadius: rounded.lg
    padding: spacing.xl
    shadow: elevation.shadow-md
    hoverShadow: elevation.shadow-lg

  card-inverse:
    background: colors.surface.surface-inverse
    text: colors.text.ink-inverse
    borderRadius: rounded.lg
    padding: spacing.xl
    shadow: elevation.shadow-inverse

  badge:
    borderRadius: rounded.pill
    paddingY: "4px"
    paddingX: spacing.sm
    fontFamily: typography.fontFamilies.body
    fontSize: "12px"
    fontWeight: 600
    variants:
      neutral:
        background: colors.canvas.canvas-muted
        text: colors.text.ink-700
      brand:
        background: colors.brand.teal-100
        text: colors.brand.teal-600
      gold:
        background: colors.brand.gold-100
        text: colors.brand.gold-600
      success:
        background: colors.semantic.success-bg
        text: colors.semantic.success-fg
      error:
        background: colors.semantic.error-bg
        text: colors.semantic.error-fg

  tag-pillar:
    description: "Untuk menandai keempat pilar PASS Framework (Scan/Shift/Scale/Scribe)"
    borderRadius: rounded.pill
    paddingY: spacing.xxs
    paddingX: spacing.md
    fontFamily: typography.fontFamilies.display
    fontWeight: 700
    letterSpacing: "0.04em"
    textTransform: "uppercase"

  nav-bar:
    background: colors.surface.surface-base
    borderBottom: "1px solid ${colors.hairline.border-subtle}"
    height: "72px"
    paddingX: spacing.2xl
    shadow: "none"

  table:
    headerBackground: colors.canvas.canvas-muted
    headerText: colors.text.ink-700
    rowBorder: colors.hairline.divider
    rowHoverBackground: colors.canvas.canvas-muted
    cellPaddingY: spacing.sm
    cellPaddingX: spacing.md

  alert-callout:
    borderRadius: rounded.md
    borderLeftWidth: "4px"
    paddingY: spacing.md
    paddingX: spacing.lg
    variants:
      info:
        background: colors.semantic.info-bg
        borderColor: colors.semantic.info-fg
        text: colors.semantic.info-fg
      success:
        background: colors.semantic.success-bg
        borderColor: colors.semantic.success-fg
        text: colors.semantic.success-fg
      warning:
        background: colors.semantic.warning-bg
        borderColor: colors.semantic.warning-fg
        text: colors.semantic.warning-fg
      error:
        background: colors.semantic.error-bg
        borderColor: colors.semantic.error-fg
        text: colors.semantic.error-fg
---

# Passolving Design System

**Working with Intent — Solving What Matters, Scaling What Works.**

Dokumen ini adalah *single source of truth* visual untuk seluruh produk digital Passolving: situs web korporat, dek proposal digital, portal klien, hingga materi kampanye. Token pada YAML frontmatter di atas adalah sumber kebenaran yang dapat langsung dikonsumsi oleh design tool (Figma Tokens, Style Dictionary) maupun codebase (Tailwind config, CSS variables).

---

## Overview

Passolving hadir bukan sebagai lembaga pelatihan konvensional, melainkan **mitra transformasi** yang bekerja berdampingan dengan pimpinan organisasi kompleks — bank, kementerian, agribisnis skala nasional, hingga korporasi multinasional. Identitas visual harus merepresentasikan dua kutub yang tampak berlawanan namun justru menjadi kekuatan unik merek ini:

1. **Otoritas & kepercayaan** — direpresentasikan oleh **navy** yang dalam, tipografi tegas berjarak huruf lebar (mengacu pada gaya headline "A G I L I T Y & T R A N S F O R M A T I O N" pada company profile), serta grid yang rapi dan simetris layaknya laporan korporat atau dokumen kebijakan publik.
2. **Progresivitas & agilitas** — direpresentasikan oleh trio warna aksen **teal, gold, dan magenta** yang diambil langsung dari *PASS Business Agility Framework* dan segitiga *Empathy–System–Result*. Warna-warna ini dipakai secara disiplin sebagai *aksen*, bukan dominasi, agar kesan tetap senior dan tepercaya — bukan playful.

Checkmark emas pada logo ("PAS SOL✓ING") adalah elemen paling khas dari merek: ia melambangkan *penyelesaian yang terverifikasi*, bukan sekadar aktivitas pelatihan. Prinsip ini diterjemahkan ke UI sebagai preferensi terhadap bukti terukur — angka, badge status, dan progress indicator — dibanding dekorasi kosong.

**Vibe kata kunci:** *authoritative, data-grounded, calm-confident, quietly progressive.* Bukan startup yang riang; bukan firma hukum yang kaku. Passolving berada di titik temu antara *McKinsey slide* dan *modern SaaS dashboard*.

---

## Colors

### Brand
- **Navy (`navy-900`–`navy-600`)** — warna identitas utama, diambil langsung dari latar logo. Dipakai untuk heading besar, navigasi, tombol primer, dan section gelap yang membawa bobot editorial (hero, CTA penutup, footer).
- **Teal (`teal-600`/`teal-500`)** — merepresentasikan pilar *"System"* pada segitiga PASS. Dipakai sebagai warna aksen sekunder: link interaktif, ikon proses, elemen "System" pada storytelling framework.
- **Gold (`gold-500`)** — diambil persis dari warna checkmark logo. Dipakai sangat selektif: highlight angka pencapaian (mis. "1000% growth"), badge premium/sertifikasi, dan elemen yang menandai *hasil terverifikasi*.
- **Magenta (`magenta-500`)** dan **Blue Accent (`blue-accent-500`)** — diambil dari elemen grafis *"Scale"* dan *"Shift"* pada diagram framework. Peran keduanya adalah aksen tersier untuk ilustrasi, chart multi-kategori, dan momen visual yang butuh kontras berani — dipakai dengan sangat hemat (maksimal satu elemen dominan per layar).

### Canvas & Surface
- `canvas-default` (`#F5F7FA`) adalah latar halaman standar — abu kebiruan lembut yang menghindari kontras tajam putih-hitam, konsisten dengan latar slide company profile.
- `surface-base` (putih murni) dipakai untuk kartu, form, dan modal agar konten "mengambang" jelas di atas canvas.
- `canvas-inverse` (navy) dipakai untuk section bernuansa pernyataan besar — kutipan klien, CTA penutup, hero statement — meniru gaya slide penutup *"Working with Intent"*.

### Text / Ink
Skala `ink-900` → `ink-300` memastikan hierarki teks tetap jelas tanpa perlu warna brand berulang. `ink-900` (navy pekat) dipakai untuk judul agar heading terasa menyatu dengan warna brand, bukan hitam generik.

### Semantic
Success, warning, error, dan info mengikuti konvensi umum namun **hue-nya diselaraskan dengan palet brand** (mis. warning memakai turunan gold, info memakai blue-accent) agar status/notifikasi tetap terasa "milik Passolving", bukan tempelan library UI generik.

---

## Typography

| Peran | Typeface | Alasan |
|---|---|---|
| Display / Heading | **Poppins** (700/600) | Geometris, tegas, dan memiliki karakter huruf blok yang selaras dengan gaya *letter-spaced headline* pada company profile ("A G I L I T Y & T R A N S F O R M A T I O N"). Terasa korporat namun tidak kaku seperti serif klasik. |
| Body / UI | **Inter** (400/500/600) | Dirancang khusus untuk keterbacaan layar pada ukuran kecil — krusial karena konten Passolving padat data (deliverables, hasil proyek, metrik). |
| Mono / Data | **JetBrains Mono** | Untuk menampilkan token, kode referensi dokumen, atau data tabular presisi tinggi. |

**Filosofi hierarki:** `hero-display` dan `display` dipakai sangat jarang — hanya untuk pernyataan tunggal per halaman (mis. judul hero, judul studi kasus). `overline` dan `micro` (uppercase, letter-spacing lebar) menggantikan peran "eyebrow text" seperti pada slide asli ("PASS at Glance", "PASS Projects") — elemen ini menjadi penanda navigasi kontekstual yang konsisten di setiap section.

Hindari lebih dari 3 tingkat heading aktif dalam satu viewport; gunakan `body-lg` untuk lead paragraph, bukan menaikkan heading.

---

## Layout & Spacing

Sistem spacing mengikuti skala geometris ringan (4 → 8 → 12 → 16 → 24 → 32 → 48 → 64 → 96 → 128px) agar ritme vertikal terasa disengaja, bukan acak.

- **Grid dasar:** 12 kolom, gutter `spacing.lg` (24px) pada desktop, `spacing.md` (16px) pada tablet/mobile.
- **Container max-width:** 1200px, dengan padding horizontal minimum `spacing.xl` (32px) di edge layar agar konten tidak menempel tepi — mengikuti proporsi margin lega yang konsisten di seluruh slide company profile.
- **Ritme section:** setiap blok konten besar (hero, fitur, studi kasus) dipisahkan oleh `spacing.section` (96px) pada desktop dan diperkecil ke `spacing.2xl` (48px) pada mobile.
- **Kepadatan konten:** karena Passolving menyajikan banyak data terstruktur (deliverables, hasil klien, metrik), gunakan `spacing.sm`–`spacing.md` secara konsisten di dalam kartu/list agar padat tapi tetap bernapas — jangan pernah lebih rapat dari `spacing.xs`.

---

## Shapes & Elevation

- **Rounded:** skala radius sengaja moderat (`sm`–`lg`, 8–16px) untuk elemen interaktif dan kartu — cukup lunak untuk terasa human-centered (selaras klaim "pendekatan humanis dan adaptif"), namun tidak se-bulat produk consumer-app agar tetap terasa profesional. `pill` (999px) khusus untuk badge/tag saja. Hindari sudut tajam (0px) kecuali pada elemen data tabular ketat.
- **Elevation:** shadow dipakai tipis dan halus (`shadow-xs`/`shadow-sm`) untuk kartu standar; `shadow-md`/`shadow-lg` direservasi untuk elemen yang butuh perhatian utama (modal, kartu unggulan, dropdown). Semua shadow memakai tint navy (`rgba(11,22,51,...)`), bukan hitam murni, agar tetap on-brand meski nyaris tak terlihat.
- **Kartu di atas latar gelap** (`card-inverse`) memakai shadow lebih pekat (`shadow-inverse`) agar tetap terbaca kedalamannya di atas `canvas-inverse`.

---

## Components

### Buttons
- **`button-primary`** (navy solid): aksi utama per halaman — submit, "Ajukan Konsultasi", "Discovery Session". Maksimal satu per viewport agar hierarki aksi jelas.
- **`button-accent`** (gold solid): dipakai *sangat selektif* untuk aksi bernilai tinggi/konversi (mis. "Unduh Company Profile", "Jadwalkan Assessment") — meniru fungsi checkmark emas sebagai penanda "tindakan yang menghasilkan".
- **`button-secondary`** (outline navy): aksi kedua/netral (mis. "Pelajari Lebih Lanjut").
- **`button-ghost`** (teal text-only): aksi tersier dalam konteks padat seperti tabel atau kartu kecil.

### Forms
`text-input` dan `select` memakai border 1.5px agar terlihat jelas di atas `canvas-default` yang lembut. Fokus state memakai `border-focus` (blue-accent) + `shadow-focus` — bukan warna brand navy, agar tidak tertukar dengan elemen non-interaktif berwarna navy.

### Cards
- **`card-base`**: default untuk daftar item, artikel, komponen ringan.
- **`card-elevated`**: studi kasus, highlight klien, paket program — objek yang perlu ditonjolkan dari layout sekitarnya.
- **`card-inverse`**: testimoni klien dan kutipan strategis, meniru gaya kartu teal solid pada slide "What Leaders Say about PASS".

### Badges & Tags
Gunakan `badge` varian `brand`/`gold` untuk status program (mis. "Ongoing", "Certified BNSP"), dan `tag-pillar` (uppercase, letter-spacing lebar) khusus untuk melabeli konten berdasarkan pilar Scan/Shift/Scale/Scribe atau Empathy/System/Result — menjaga konsistensi taksonomi framework di seluruh produk digital.

### Tables & Data
Tabel memakai header abu (`canvas-muted`) dengan teks navy, bukan header berwarna solid — menjaga fokus tetap pada data, konsisten dengan gaya laporan hasil proyek pada company profile (Kasus/Tantangan/Solusi/Hasil).

### Alerts / Callouts
`alert-callout` memakai border-left tebal 4px sebagai penanda cepat, dengan latar tint lembut — dipakai untuk menyorot insight, catatan metodologi, atau disclaimer di tengah teks panjang.

---

## Do's and Don'ts

**Do:**
- Gunakan navy sebagai warna dominan di atas 60% komposisi; teal/gold/magenta sebagai aksen di bawah 15% masing-masing.
- Selalu sandingkan klaim/metrik besar (mis. "+1000% revenue") dengan tipografi `display` warna `gold-600` di atas latar netral — biarkan angka menjadi hero visual, bukan ilustrasi dekoratif.
- Gunakan `overline`/`micro` uppercase sebagai penanda kontekstual section (meniru label "07 | What Leaders Say about PASS").
- Jaga rasio negative space tinggi — company profile asli sangat lega, jangan padatkan layout demi mengejar densitas informasi.

**Don't:**
- Jangan memakai gold dan magenta bersamaan sebagai warna dominan di satu layar — keduanya kompetitif secara visual dan akan terasa "ramai", bukan strategis.
- Jangan memakai sudut radius penuh (`full`) di luar avatar/ikon lingkaran.
- Jangan menaikkan body text di atas `body-lg` untuk paragraf panjang — merek ini bicara lewat kejelasan struktur, bukan ukuran huruf.
- Jangan memakai shadow gelap tajam (hitam murni) — selalu gunakan tint navy sesuai token `elevation`.
- Jangan mencampur `font-family: display` untuk body text panjang; Poppins hanya untuk unit teks pendek (judul, label, angka).

---

## Responsive Behavior

| Breakpoint | Lebar | Perilaku Utama |
|---|---|---|
| **Mobile** | < 640px | Grid 4 kolom, container padding `spacing.md`; `hero-display`/`display` diturunkan satu tingkat (mis. hero-display → ukuran `h1`) agar tidak overflow; navigasi menjadi drawer/hamburger; kartu bertumpuk 1 kolom penuh. |
| **Tablet** | 640–1024px | Grid 8 kolom, container padding `spacing.lg`; kartu studi kasus 2 kolom; tipografi heading tetap penuh mulai `h2` ke bawah. |
| **Desktop** | 1024–1440px | Grid 12 kolom penuh, container max-width 1200px; seluruh skala tipografi dan spacing token dipakai sesuai definisi dasar. |
| **Large Desktop** | > 1440px | Container tetap terkunci di 1200px (tidak melebar penuh) untuk menjaga panjang baris teks tetap nyaman dibaca; ruang ekstra diisi `canvas-default`/`canvas-muted`, bukan konten baru. |

**Prinsip lintas breakpoint:** hierarki warna dan tipografi tidak berubah antar perangkat — yang berubah hanya skala dan jumlah kolom. Elemen aksen (gold/magenta) yang bersifat dekoratif pada desktop boleh disembunyikan di mobile demi fokus konten, namun elemen aksen yang membawa makna (badge status, checkmark hasil) wajib tetap tampil di semua ukuran layar.
