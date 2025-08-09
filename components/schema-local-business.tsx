import Script from "next/script";

const SchemaLocalBusiness = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Expert Électricien Cannes",
    "image": "https://electriciencannes-expert.fr/images/electricien-cannes-expert.webp",
    "url": "https://electriciencannes-expert.fr",
    "telephone": "+33756935200",
    "priceRange": "€€",
    "description": "Expert Électricien à Cannes, spécialiste en dépannage électrique, installation, rénovation et mise aux normes NF C 15-100. Intervention rapide 7j/7 sur Cannes et environs. Services professionnels pour particuliers et entreprises, avec garantie qualité et respect des normes électriques.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Rue Masséna",
      "addressLocality": "Cannes",
      "addressRegion": "Provence-Alpes-Côte d’Azur",
      "postalCode": "06400",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.552847,
      "longitude": 7.017369
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Cannes"
      },
      {
        "@type": "Place",
        "name": "Mandelieu-la-Napoule"
      },
      {
        "@type": "Place",
        "name": "Le Cannet"
      },
      {
        "@type": "Place",
        "name": "La Bocca"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.95",
      "reviewCount": "320"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marie Lemoine"
        },
        "reviewBody": "Excellent service, électricien très professionnel à Cannes. Je recommande vivement !"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sofiane B."
        },
        "reviewBody": "Rapide, ponctuel et efficace. Intervention nickel dans mon appartement à Cannes centre."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Isabelle G."
        },
        "reviewBody": "Un excellent travail, électricien de confiance et très réactif. Merci pour l’installation électrique !"
      }
    ],
    "serviceType": [
      "Dépannage électrique",
      "Installation électrique complète",
      "Mise aux normes électriques NF C 15-100",
      "Rénovation de tableau électrique",
      "Installation d’éclairage intérieur et extérieur",
      "Installation de prises et interrupteurs",
      "Éclairage LED éco-responsable"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catalogue de services électriques à Cannes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dépannage électrique en urgence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation électrique neuve"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mise aux normes électriques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modernisation de tableau électrique"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation d’éclairage LED"
          }
        }
      ]
    }
  };

  return (
    <Script
      id="schema-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaLocalBusiness;
