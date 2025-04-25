import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Votre Agence Web - Création de Sites Web Professionnels",
  description:
    "Agence web spécialisée dans la création de sites web modernes, le référencement SEO et le développement web. Optimisez votre présence en ligne avec nos solutions sur mesure.",
  keywords:
    "agence web, création site web, référencement SEO, développement web, web design, marketing digital",
  authors: [{ name: "Votre Nom" }],
  creator: "Votre Agence Web",
  publisher: "Votre Agence Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://votre-site.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://votre-site.com",
    title: "Votre Agence Web - Création de Sites Web Professionnels",
    description:
      "Agence web spécialisée dans la création de sites web modernes, le référencement SEO et le développement web.",
    siteName: "Votre Agence Web",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Votre Agence Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre Agence Web - Création de Sites Web Professionnels",
    description:
      "Agence web spécialisée dans la création de sites web modernes, le référencement SEO et le développement web.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "votre-code-verification-google",
    yandex: "votre-code-verification-yandex",
    yahoo: "votre-code-verification-yahoo",
  },
};
