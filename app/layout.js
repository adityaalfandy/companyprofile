import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: {
    default: "PASSOLVING — Agility & Transformation | Training, Consulting, Research",
    template: "%s — PASSOLVING",
  },
  description:
    "PASSOLVING: Pioneer in Business Agility Assessment & Sertifikasi Soft Skill BNSP. Training, consulting, dan research untuk transformasi organisasi Anda.",
  keywords: [
    "Business Agility Assessment Indonesia",
    "Sertifikasi Soft Skill BNSP",
    "Konsultan Agility Jakarta",
    "Training leadership agility",
    "LEGO Serious Play Indonesia",
    "Konsultan transformasi organisasi",
  ],
  authors: [{ name: "PASSOLVING" }],
  creator: "PASSOLVING",
  metadataBase: new URL("https://passolving.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://passolving.com",
    siteName: "PASSOLVING",
    title: "PASSOLVING — Agility & Transformation",
    description:
      "Pioneer in Business Agility Assessment & Sertifikasi Soft Skill BNSP",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PASSOLVING — Agility & Transformation",
    description:
      "Pioneer in Business Agility Assessment & Sertifikasi Soft Skill BNSP",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <StructuredData />
        <a href="#main-content" className="skip-to-content">
          Langsung ke konten utama
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
