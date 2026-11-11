import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inter-rh.com"),
  title: {
    default:
      "INTER-RH — Cabinet RH, Recrutement, Pilotage de projets & Immigration au Cameroun",
    template: "%s | INTER-RH",
  },
  description:
    "INTER-RH (Inter Human Ressources) accompagne les entreprises et les particuliers dans la gestion des talents et le recrutement, la gestion et le pilotage de projets multisectoriels de A à Z, et les démarches d'immigration et d'études (Canada, Australie, Luxembourg, Europe, Maroc, Tunisie). Basé à Yaoundé, Cameroun.",
  keywords: [
    "INTER-RH",
    "Inter Human Ressources",
    "cabinet RH Cameroun",
    "recrutement Yaoundé",
    "recrutement Douala",
    "recrutement Cameroun",
    "gestion des talents Cameroun",
    "gestion et pilotage de projets",
    "pilotage de projets Afrique",
    "coordination de projets Cameroun",
    "immigration Canada Cameroun",
    "immigration Australie Luxembourg Europe",
    "études Maroc Tunisie Cameroun",
    "Entrée express Canada 2026",
    "résidence permanente Canada",
    "visa études Canada Europe Maroc Tunisie",
    "offres d'emploi Cameroun",
    "externalisation RH Cameroun",
  ],
  authors: [
    {
      name: "INTER-RH — Inter Human Ressources",
      url: "https://www.inter-rh.com",
    },
  ],
  creator: "INTER-RH — Inter Human Ressources",
  publisher: "INTER-RH — Inter Human Ressources",
  category: "Human Resources, Project Management & Immigration Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.inter-rh.com",
    languages: {
      "fr-FR": "https://www.inter-rh.com",
      "fr-CM": "https://www.inter-rh.com",
      "fr-CA": "https://www.inter-rh.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.inter-rh.com",
    siteName: "INTER-RH — Inter Human Ressources",
    title:
      "INTER-RH — Recrutement, Gestion et Pilotage de projets & Immigration Canada",
    description:
      "Votre partenaire en gestion des talents, pilotage de projets de A à Z et démarches d'immigration vers le Canada. Cabinet basé à Yaoundé, Cameroun.",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "INTER-RH — Inter Human Ressources Yaoundé Cameroun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "INTER-RH — Gestion des talents, pilotage de projets & immigration",
    description:
      "Votre partenaire en recrutement, pilotage de projets multisectoriels et démarches d'immigration au Cameroun et à l'international.",
    images: ["/images/hero-poster.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "EmploymentAgency"],
      "@id": "https://www.inter-rh.com/#organization",
      name: "INTER-RH — Inter Human Ressources",
      alternateName: "INTER-RH",
      url: "https://www.inter-rh.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.inter-rh.com/logo.png",
      },
      image: "https://www.inter-rh.com/images/hero-poster.jpg",
      description:
        "Cabinet spécialisé dans la gestion des talents et le recrutement, la gestion et le pilotage de projets multisectoriels de A à Z, et l'accompagnement dans les démarches d'immigration vers le Canada.",
      telephone: "+237 679 033 398",
      email: "contact@inter-rh.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue 2.365, Yaoundé-Tsinga (Derrière Tradex)",
        addressLocality: "Yaoundé",
        addressRegion: "Centre",
        addressCountry: "CM",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 3.8833,
        longitude: 11.5,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "13:00",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "Cameroun" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australie" },
        { "@type": "Country", name: "Luxembourg" },
        { "@type": "Country", name: "Maroc" },
        { "@type": "Country", name: "Tunisie" },
        { "@type": "Place", name: "Europe, Afrique et International" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "15",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Domaines d'expertise INTER-RH",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gestion des talents & recrutement",
              url: "https://www.inter-rh.com/services/gestion-des-talents",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gestion et pilotage de projets",
              url: "https://www.inter-rh.com/services/gestion-de-projets",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accompagnement en immigration",
              url: "https://www.inter-rh.com/services/immigration",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.inter-rh.com/#website",
      url: "https://www.inter-rh.com",
      name: "INTER-RH — Inter Human Ressources",
      publisher: {
        "@id": "https://www.inter-rh.com/#organization",
      },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7M4T1LD77D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7M4T1LD77D');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
