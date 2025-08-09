import SchemaLocalBusiness from '@/components/schema-local-business';
import Hero from '@/components/services/Hero';
import ListServices from '@/components/services/ListServices';
import Presentation from '@/components/services/Presentation';
import WhyUs from '@/components/services/WhyUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Électricien Cannes | Services Urgence, Installation & Normes",
    description: "Électricien certifié à Cannes pour dépannages 24h/24, installations électriques et mise aux normes NF C15-100. Intervention rapide sur toute la région.",
    keywords: [
        "électricien cannes ",
        "dépannage électrique urgence",
        "mise aux normes électrique",
        "installation tableau électrique",
        "réparation panne courant",
        "électricien certifié",
        "urgence électricité cannes"
    ],
    openGraph: {
        title: "Services Électriques à Cannes | Expert Électricien",
        description: "Dépannage, installation et mise aux normes par des électriciens certifiés sur Cannes et sa région. Intervention en moins de 30 minutes.",
        url: "https://electriciencannes-expert.fr/services",
        images: [{
            url: "/images/og-services-electricien-cannes.jpg",
            width: 1200,
            height: 630,
            alt: "Services d'électricien à Cannes",
        }],
    },
};

const ServicesPage = () => {
    return (
        <>
            <SchemaLocalBusiness />

            <header>
                <Hero />
            </header>

            <main className="flex flex-col items-center w-full">
                <Presentation />
                <ListServices />
                <WhyUs />

                {/* Section CTA */}
                <section className="w-full py-16 bg-gradient-to-r from-[#aa4100] to-[#663500] text-white">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Besoin d&apos;un électricien à Cannes ?
                        </h2>
                        <p className="text-xl max-w-2xl mx-auto mb-8">
                            Notre équipe intervient 24h/24 pour dépannages urgents, installations et mises aux normes
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="/contact"
                                className="bg-[#FFD600] hover:bg-[#FFC400] text-[#aa4100] font-bold py-3 px-8 rounded-lg text-lg"
                            >
                                Demander un devis
                            </a>
                            <a
                                href="tel:+33756935200"
                                className="bg-white/10 hover:bg-white/20 font-bold py-3 px-8 rounded-lg text-lg"
                            >
                                07 56 93 52 00
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServicesPage;