import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://inter-rh.com"),
  title: {
    default: "INTER-RH — Gestion des talents, pilotage de projets & immigration",
    template: "%s | INTER-RH",
  },
  description:
    "INTER-RH (Inter Human Ressources) accompagne les entreprises et les particuliers dans la gestion des talents et le recrutement, la gestion et le pilotage de projets multisectoriels, et les démarches d'immigration. Basé à Yaoundé, Cameroun.",
  keywords: [
    "cabinet de gestion des ressources humaines",
    "recrutement et gestion des talents",
    "gestion et pilotage de projets",
    "accompagnement de projets d'entreprise",
    "immigration",
    "accompagnement des organisations",
    "cabinet RH Cameroun",
    "recrutement Yaoundé",
    "immigration Canada",
    "INTER-RH",
    "Inter Human Ressources",
  ],
  authors: [{ name: "INTER-RH — Inter Human Ressources" }],
  creator: "INTER-RH",
  publisher: "INTER-RH",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://inter-rh.com",
    siteName: "INTER-RH — Inter Human Ressources",
    title: "INTER-RH — Gestion des talents, pilotage de projets & immigration",
    description:
      "Votre partenaire en gestion des talents, gestion et pilotage de projets et démarches d'immigration. Cabinet basé à Yaoundé, Cameroun.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INTER-RH — Inter Human Ressources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTER-RH — Gestion des talents, pilotage de projets & immigration",
    description:
      "Votre partenaire en gestion des talents, pilotage de projets et démarches d'immigration.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
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
