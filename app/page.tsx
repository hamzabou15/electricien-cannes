import { Metadata } from 'next';
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import About2 from "@/components/home/About2";
import StatsCard from "@/components/home/StatsCard";
// import Reviews from "@/components/home/Reviews";
import SchemaLocalBusiness from "@/components/schema-local-business";
import ServicesGrid from '@/components/home/ServiceGrid';
import FAQ from '@/components/home/FAQ';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import Reviews from '@/components/home/reviews';

export const metadata: Metadata = {
  title: "Électricien d'urgence à Cannes - Dépannage 24h/24",
  description: "Électricien certifié à Cannes pour dépannages, installations et mise aux normes NF C15-100. Intervention rapide 7j/7, devis gratuit. Urgence électrique 07 56 93 52 00.",
  keywords: "électricien Cannes, dépannage électrique, urgence électricité, électricien pas cher, mise aux normes électrique, tableau électrique, panne électrique",
  openGraph: {
    title: "Électricien Urgence à Cannes - Expert Dépannage 24/7",
    description: "Électricien certifié intervenant en moins de 30 minutes sur Cannes et ses environs",
    url: "https://electriciencannes-expert.fr",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Électricien professionnel à Cannes",
    }],
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaLocalBusiness />
      <Hero />
      <main className="flex flex-col items-center justify-center w-full">
        <About />
        <ServicesGrid />
        <About2 />
        <StatsCard />
        <ServicesCarousel />
        <Reviews />
        <FAQ />
      </main>
    </>
  );
}