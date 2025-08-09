import Hero from '@/components/projets/Hero';
import ListProjects from '@/components/projets/ListProjects';
import SchemaLocalBusiness from '@/components/schema-local-business';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Nos Réalisations Électriques à Cannes | Électricien Expert",
  description: "Découvrez nos projets d'électricité à Cannes : installations neuves, rénovations, dépannages urgents et mises aux normes NFC 15-100. 22 ans d'expertise locale.",
  keywords: [
    "réalisations électricien Cannes",
    "projets électriques Cannes",
    "installation électrique maison",
    "rénovation tableau électrique",
    "mise aux normes NFC 15-100",
    "dépannage électrique urgence",
    "électricien certifié Cannes"
  ],
  openGraph: {
    title: "Projets Réalisés - Électricien Expert à Cannes",
    description: "Exemples concrets de nos interventions électriques sur Cannes et sa région. Plus de 3500 projets réussis depuis 2003.",
    url: "https://electriciencannes-expert.fr/projets",
    images: [{
      url: "/images/og-projets-electricien-cannes.jpg",
      width: 1200,
      height: 630,
      alt: "Projets électriques réalisés par notre électricien à Cannes",
    }],
  },
  alternates: {
    canonical: "https://electriciencannes-expert.fr/projets",
  }
};

export default function ProjetsPage() {
    return (
        <>
            <SchemaLocalBusiness />
            <header>
                <Hero />
            </header>
            <main className="flex flex-col items-center justify-center w-full">
                <section id="list-projects" aria-label="Nos réalisations" className="w-full bg-white">
                    <ListProjects />
                </section>
            </main>
        </>
    );
}
