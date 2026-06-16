import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inter-rh.com"),
  title: {
    default: "INTER-RH — Cabinet de conseil RH, stratégie & immigration",
    template: "%s | INTER-RH",
  },
  description:
    "INTER-RH est votre cabinet spécialisé en gestion des talents, conseil stratégique, gestion de projets, formation & coaching et immigration au Canada. Basé à Yaoundé, Cameroun.",
  keywords: [
    "cabinet RH Cameroun",
    "recrutement Yaoundé",
    "gestion des talents",
    "immigration Canada",
    "conseil stratégique",
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
    title: "INTER-RH — Votre Cabinet de Conseil en RH",
    description:
      "Votre partenaire en gestion des talents, conseil stratégique et immigration au Canada. Cabinet RH basé à Yaoundé, Cameroun.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INTER-RH — Cabinet de Conseil en RH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INTER-RH — Cabinet de Conseil en RH",
    description:
      "Votre partenaire en gestion des talents, conseil stratégique et immigration au Canada.",
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
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
