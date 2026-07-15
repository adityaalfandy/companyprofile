export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PASSOLVING",
    legalName: "PT Palsindo Utama",
    url: "https://passolving.com",
    foundingDate: "2023",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
    },
    email: "bersama@passolving.com",
    telephone: "+628979515205",
    sameAs: ["https://instagram.com/passolving"],
    description:
      "Training, Consulting, dan Research untuk Business Agility Assessment & Sertifikasi Soft Skill BNSP",
    knowsAbout: [
      "Business Agility Assessment",
      "Sertifikasi Soft Skill BNSP",
      "Leadership Agility Training",
      "Organizational Transformation",
      "LEGO Serious Play",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan PASSOLVING",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Training",
          description: "Program pelatihan berbasis 80% aktivitas dan 20% insight",
        },
        {
          "@type": "OfferCatalog",
          name: "Consulting",
          description: "Pendampingan transformasi organisasi melalui siklus SCAN–SHIFT–SCALE–SCRIBE",
        },
        {
          "@type": "OfferCatalog",
          name: "Research",
          description: "Riset dan pengukuran dampak berbasis data dan bukti empiris",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
