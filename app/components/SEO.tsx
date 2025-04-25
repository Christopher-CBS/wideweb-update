import { Metadata } from "next";
import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title,
  description = "Agence web spécialisée dans la création de sites web modernes, le référencement SEO et le développement web. Optimisez votre présence en ligne avec nos solutions sur mesure.",
  keywords = [
    "agence web",
    "création site web",
    "référencement SEO",
    "développement web",
    "web design",
    "marketing digital",
  ],
  image = "/og-image.jpg",
  url = "https://votre-site.com",
  type = "website",
  author = "Votre Agence Web",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Votre Agence Web`
    : "Votre Agence Web - Création de Sites Web Professionnels";
  const fullUrl = url.startsWith("http") ? url : `https://votre-site.com${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `https://votre-site.com${image}`;

  return (
    <Head>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Votre Agence Web" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article meta tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Theme color */}
      <meta name="theme-color" content="#000000" />
    </Head>
  );
}
