import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Électricien à Cannes  – Dépannage 7j/7 | Devis gratuit",
    description:
        "Artisan électricien à Cannes . Intervention rapide pour dépannage, installation et mise aux normes. Devis gratuit, réactivité 24h/24.",
    keywords: [
        "électricien Cannes ",
        "dépannage électrique Cannes ",
        "installation électrique Cannes ",
        "mise aux normes Cannes ",
        "urgence électricien Cannes ",
    ],
    alternates: {
        canonical: "https://electriciencannes-expert.fr",
    },
    openGraph: {
        title: "Électricien à Cannes  – Dépannage rapide 7j/7",
        description:
            "Artisan local certifié. Dépannage électrique express à Cannes . Devis gratuit.",
        url: "https://electriciencannes-expert.fr",
        siteName: "Électricien Cannes  Expert",
        images: [
            {
                url: "/images/Electricien-Cannes V2.webp",
                width: 1200,
                height: 630,
                alt: "Électricien Cannes ",
            },
        ],
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Électricien à Cannes  – Dépannage rapide 7j/7",
        description: "Contactez un électricien certifié à Cannes , devis gratuit.",
        images: ["/images/Electricien-Cannes V2.webp"],
        creator: "@ElectricienCannes ",
    },
    robots: {
        index: true,
        follow: true,
    },
};
