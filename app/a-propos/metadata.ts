import type { Metadata } from "next";

export const metadata: Metadata = {
    /* --- SEO de base --- */
    title: "À propos – Électricien Cannes  | Artisan certifié & expérience locale",
    description:
        "Découvrez l’équipe d’Électricien Cannes  Expert : plus de 15 ans d’expérience en dépannage, installation et mise aux normes électriques sur Cannes  et ses environs.",
    /* Facultatif : la balise keywords n’influence plus Google mais reste utile pour d’autres moteurs. */
    keywords: [
        "électricien Cannes ",
        "artisan électricien Cannes ",
        "dépannage électrique Cannes ",
        "mise aux normes installation électrique Cannes ",
        "expert électricité Cannes "
    ],
    alternates: {
        canonical: "https://electriciencannes-expert.fr/a-propos",
    },

    /* --- Open Graph (Facebook, LinkedIn…) --- */
    openGraph: {
        title: "Notre entreprise d’électricité à Cannes  – savoir‑faire & valeurs",
        description:
            "Électricien Cannes  Expert, c’est une équipe certifiée pour vos urgences et projets électriques depuis 2009. Transparence, sécurité et proximité.",
        url: "https://electriciencannes-expert.fr/a-propos",
        siteName: "Électricien Cannes  Expert",
        locale: "fr_FR",
        type: "article",
        images: [
            {
                url: "/images/un-ouvrier-du-batiment-en-combinaison-un-electricien-en-combinaison (1).webp",
                width: 1200,
                height: 630,
                alt: "Électricien Cannes  Expert – Équipe et véhicules d’intervention",
            },
        ],
    },

    /* --- Twitter Card --- */
    twitter: {
        card: "summary_large_image",
        title: "Qui sommes‑nous ? | Électricien Cannes  Expert",
        description:
            "15 ans d’expérience en électricité générale à Cannes  : dépannage 24h/24, installations conformes NF C 15‑100 et devis gratuits.",
        images: ["/images/un-ouvrier-du-batiment-en-combinaison-un-electricien-en-combinaison (1).webp"],
        creator: "@ElectricienCannes ",
    },

    /* --- Accessibilité & PWA --- */
    robots: { index: true, follow: true },
    themeColor: "#c1121f",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};
