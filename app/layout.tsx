import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/cannes-colors.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/layout/CTA";

export const metadata: Metadata = {
  title: "Électricien Cannes | Dépannage & Installation électrique 24h/24",
  description: "Besoin d’un électricien à Cannes ? Dépannage, installation, mise aux normes. Intervention rapide 24/7. Devis gratuit.",
  keywords: [
    "électricien Cannes", 
    "dépannage électrique urgence",
    "électricien pas cher Cannes",
    "mise aux normes électrique",
    "tableau électrique Cannes",
    "panne électrique",
    "électricien 24/7",
    "réparation électricité"
  ],
  authors: [{ name: "Expert Électricien Cannes", url: "https://electriciencannes-expert.fr" }],
  creator: "Expert Électricien Cannes",
  publisher: "Expert Électricien Cannes",
  metadataBase: new URL("https://electriciencannes-expert.fr"),
  openGraph: {
    title: "Électricien Cannes | Dépannage & Installation électrique 24h/24",
    description: "Besoin d’un électricien à Cannes ? Dépannage, installation, mise aux normes. Intervention rapide 24/7. Devis gratuit.",
    url: "https://electriciencannes-expert.fr",
    siteName: "Expert Électricien Cannes",
    locale: "fr_FR",
    type: "website",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Électricien professionnel intervenant à Cannes",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien Cannes | Dépannage & Installation électrique 24h/24",
    description: "Besoin d’un électricien à Cannes ? Dépannage, installation, mise aux normes. Intervention rapide 24/7. Devis gratuit.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#aa4100",
  alternates: {
    canonical: "/",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Chargement des polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 
      </head>
      <body className="antialiased">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}