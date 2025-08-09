import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "../../../lib/data";
import { FaCheckCircle, FaShareAlt } from "react-icons/fa";
import React from "react";

// Types
interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// 🆕 Fonction pour générer les meta dynamiques
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((p) => p.slug === slug);

  if (!service) {
    return {
      title: "Service introuvable - Électricien Cannes",
      description: "Le service que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${service.title} | Électricien Cannes`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | Électricien Cannes`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function DepannageElectricitePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((p) => p.slug === slug);

  if (!service) return notFound();

  return (
    <section className="w-full py-12 bg-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Fil d'Ariane */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#aa4100]">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-[#aa4100]">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-[#aa4100] font-medium">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={600}
              className="w-full rounded-xl object-cover h-auto max-h-[500px] shadow-md"
              priority
            />

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-4">
                {service.title}
              </h1>

              <p className="text-lg text-[#2E2937] leading-relaxed mb-6">
                {service.description}
              </p>

              <h2 className="text-2xl font-bold text-[#aa4100] mb-4 border-b border-[#FFD600] pb-2">
                Pourquoi nous choisir ?
              </h2>

              <ul className="space-y-4">
                {service.benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#FFD600] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-[#2E2937]">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[#aa4100] mt-8 mb-4 border-b border-[#FFD600] pb-2">
                Détails et avantages
              </h2>
              <p className="text-[#2E2937] leading-relaxed whitespace-pre-line">
                {service.serviceBenefitsDescription1}
              </p>
              <p className="text-[#2E2937] leading-relaxed mt-4 whitespace-pre-line">
                {service.serviceBenefitsDescription2}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#f7f9fc] p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
              <h2 className="text-xl font-bold text-[#aa4100] mb-4 pb-2 border-b border-[#FFD600]">
                Informations rapides
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#4c4c4c]">Service :</h3>
                  <p>{service.title}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#4c4c4c]">Zone d’intervention :</h3>
                  <p>{service.location}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                <button className="flex items-center gap-2 text-[#aa4100] font-medium hover:text-[#663500]">
                  <FaShareAlt className="text-xl" />
                  <span>Partager ce service</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#aa4100] to-[#663500] p-6 rounded-xl text-white">
              <h2 className="text-xl font-bold mb-4">Besoin d’une intervention ?</h2>
              <p className="mb-6">Nous intervenons rapidement dans toute la région.</p>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-[#FFD600] hover:bg-[#FFC400] text-[#aa4100] text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:+33756935200"
                  className="block w-full bg-white/10 hover:bg-white/20 text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  07 56 93 52 00
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
