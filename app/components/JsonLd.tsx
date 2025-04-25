import Script from "next/script";

interface JsonLdProps {
  data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Exemple d'utilisation pour une page d'accueil
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Votre Agence Web",
  url: "https://votre-site.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://votre-site.com/recherche?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Exemple pour une page de service
export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    name: "Votre Agence Web",
    url: "https://votre-site.com",
    logo: "https://votre-site.com/logo.png",
    sameAs: [
      "https://www.facebook.com/votreagenceweb",
      "https://www.linkedin.com/company/votreagenceweb",
      "https://twitter.com/votreagenceweb",
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
});

// Exemple pour un article de blog
export const articleSchema = (
  title: string,
  description: string,
  author: string,
  datePublished: string,
  image: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  image: image,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "Votre Agence Web",
    logo: {
      "@type": "ImageObject",
      url: "https://votre-site.com/logo.png",
    },
  },
  datePublished: datePublished,
  dateModified: new Date().toISOString(),
});
