const baseUrl = "https://passolving.com";

const caseStudySlugs = [
  "bni-corporate-university",
  "indosat-ooredoo-hutchison",
  "lkpp",
  "doit",
  "medical-centre",
  "agribisnis",
  "pos-indonesia",
  "kemenkes",
  "retail-warehouse",
  "resto-catering",
];

export default function sitemap() {
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/tentang-kami`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/framework`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/layanan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/program-training`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/sertifikasi-bnsp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portofolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/testimoni`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontak`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
  ];

  const caseStudyPages = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/portofolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages];
}
