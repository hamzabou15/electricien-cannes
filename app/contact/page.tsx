import { Metadata } from "next";
import ContactForm from "@/components/contact/Form";

// SEO spécifique à cette page
export const metadata: Metadata = {
    title: "Contactez votre Électricien à Cannes | Devis gratuit & Intervention rapide",
    description: "Besoin d'un dépannage électrique ou d'une mise aux normes à Cannes ? Contactez nos électriciens certifiés pour une intervention rapide 24h/24 et 7j/7. Devis gratuit.",
    keywords: [
        "contact électricien Cannes",
        "demande devis électricien Cannes",
        "dépannage urgent électricien Cannes",
        "mise aux normes électrique Cannes",
        "électricien certifié Cannes"
    ],
    openGraph: {
        title: "Contactez votre Électricien à Cannes | Devis gratuit & Intervention rapide",
        description: "Intervention électrique 24h/24 et 7j/7 à Cannes. Demandez votre devis gratuit dès maintenant.",
        url: "https://electriciencannes-expert.fr/contact",
        siteName: "Electricien Cannes Expert",
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contactez votre Électricien à Cannes | Devis gratuit & Intervention rapide",
        description: "Électricien certifié à Cannes – dépannage urgent et devis gratuit.",
    },
};

export default function ContactPage() {
    return (
        <main>
            <ContactForm />
        </main>
    );
}
