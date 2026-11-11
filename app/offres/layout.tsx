import type { Metadata } from "next";
import { jobOffers } from "@/lib/data/offers";

export const metadata: Metadata = {
  title:
    "Offres d'emploi & Appels à candidatures au Cameroun et à l'international",
  description:
    "Consultez les offres d'emploi actives d'INTER-RH (CDI, CDD, Stage, Freelance) au Cameroun et à l'international, ou confiez-nous la gestion de vos appels d'offres et recrutements.",
  keywords: [
    "offres d'emploi Cameroun",
    "emploi Yaoundé Douala",
    "appels d'offres recrutement Cameroun",
    "recrutement ONG Cameroun",
    "offres CDI CDD Cameroun",
    "INTER-RH offres",
  ],
  alternates: { canonical: "https://www.inter-rh.com/offres" },
  openGraph: {
    title: "Offres d'emploi & Appels à candidatures | INTER-RH",
    description:
      "Découvrez les opportunités professionnelles de nos entreprises et institutions partenaires au Cameroun et à l'international.",
    url: "https://www.inter-rh.com/offres",
    type: "website",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Offres d'emploi et appels à candidatures INTER-RH",
      },
    ],
  },
};

export default function OffresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeOffers = jobOffers.filter((o) => o.isActive);

  const jobPostingsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: activeOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: offer.title,
        description: offer.description,
        datePosted: offer.publishedAt,
        validThrough: offer.deadline,
        employmentType:
          offer.type === "CDI"
            ? "FULL_TIME"
            : offer.type === "CDD"
            ? "CONTRACTOR"
            : offer.type === "Stage"
            ? "INTERN"
            : "OTHER",
        hiringOrganization: {
          "@type": "Organization",
          name: "INTER-RH — Inter Human Ressources",
          sameAs: "https://www.inter-rh.com",
          logo: "https://www.inter-rh.com/logo.png",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: offer.location,
            addressCountry: "CM",
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsJsonLd) }}
      />
      {children}
    </>
  );
}
