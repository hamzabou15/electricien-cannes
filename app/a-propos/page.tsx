import AboutCompany from '@/components/aboutUs/About-company'
import AboutSince from '@/components/aboutUs/About-since'
import AboutStats from '@/components/aboutUs/AboutStats'
import Companies from '@/components/aboutUs/Companies'
import Hero from '@/components/aboutUs/Hero'
import Specification from '@/components/aboutUs/Specification'
import Reviews from '@/components/home/reviews'
import ServiceCard from '@/components/home/ServiceCard'
import SchemaLocalBusiness from '@/components/schema-local-business'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Électricien Cannes | Expert Dépannage 24/7 depuis 2003",
  description: "Société d'électricité à Cannes : 22 ans d'expérience en dépannage urgent, installations sécurisées et mise aux normes NF C15-100. Intervention rapide 7j/7, devis gratuit.",
  keywords: [
    "électricien cannes",
    "dépannage électrique urgence cannes",
    "électricien pas cher cannes",
    "entreprise électricien cannes",
    "artisan électricien certifié cannes",
    "réparation tableau électrique cannes",
    "mise aux normes électrique cannes",
    "électricien 24/24 cannes",
    "expert électricien cannes",
    "urgence électricité cannes"
  ],
  alternates: {
    canonical: "https://electriciencannes-expert.fr/a-propos",
  },
  openGraph: {
    title: "À Propos - Électricien Expert à Cannes depuis 2003",
    description: "Découvrez notre histoire et expertise en dépannage électrique urgent sur Cannes et sa région. Plus de 3500 interventions réussies.",
    url: "https://electriciencannes-expert.fr/a-propos",
    siteName: "Expert Électricien Cannes",
    images: [
      {
        url: "/images/og-about-electricien-cannes.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe d'électriciens professionnels intervenant à Cannes",
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien Cannes | Expert Dépannage 24/7 depuis 2003",
    description: "22 ans d'expérience en électricité sur Cannes et sa région. Interventions urgentes 24h/24",
    images: ["/images/twitter-about-electricien-cannes.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
    yandex: "votre-code-verification-yandex",
  },
  category: "services",
};

const page = () => {
  return (
    <>
      {/* Schema.org LocalBusiness JSON-LD */}
      <SchemaLocalBusiness />

      <header>
        <Hero />
      </header>

      <main className="flex flex-col items-center justify-center w-full">

        {/* SECTION À PROPOS */}
        <section id="a-propos" aria-label="Présentation de l'entreprise à Cannes" className='bg-white w-full'>
          <AboutCompany />
        </section>

        {/* SERVICES */}
        <section id="services" aria-label="Présentation des services électriques à Cannes" className='bg-white w-full'>
          <ServiceCard />
        </section>

        {/* STATISTIQUES */}
        <section id="stats" aria-label="Statistiques de l'entreprise à Cannes" className='w-full'>
          <AboutStats />
        </section>

        {/* EXPERIENCE DEPUIS */}
        <section id="since" aria-label="Expérience et histoire de l'entreprise à Cannes" className='w-full bg-white'>
          <AboutSince />
        </section>

        {/* SPÉCIFICATIONS TECHNIQUES */}
        <section id="specification" aria-label="Spécifications techniques de l'entreprise" className='w-full'>
          <Specification />
        </section>

        {/* AVIS CLIENTS */}
        <section id="reviews" aria-label="Avis clients électriciens à Cannes" className="w-full overflow-hidden">
          <Reviews />
        </section>

        {/* ENTREPRISES PARTENAIRES */}
        <section id="companies" aria-label="Partenaires et clients professionnels à Cannes" className="w-full overflow-hidden">
          <Companies />
        </section>

      </main>
    </>
  )
}

export default page
