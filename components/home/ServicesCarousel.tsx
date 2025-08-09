'use client'

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { FaBolt, FaPlug, FaHome, FaTools } from 'react-icons/fa';

const ServicesCarousel = () => {
  const services = [
    {
      icon: <FaBolt className="text-3xl text-[#FFD600]" />,
      title: "Dépannage électrique urgent",
      description: "Intervention rapide 24h/24 pour coupures, courts-circuits et pannes électriques à Cannes",
      image: "/images/depannage-urgence-cannes.webp",
      keywords: ["urgence électricité", "dépannage électrique", "panne courant Cannes"]
    },
    {
      icon: <FaPlug className="text-3xl text-[#FFD600]" />,
      title: "Mise aux normes NF C15-100",
      description: "Remise en conformité de votre installation électrique pour une sécurité optimale à Cannes",
      image: "/images/mise-aux-normes-cannes.webp",
      keywords: ["norme électrique", "mise aux normes", "conformité électricité"]
    },
    {
      icon: <FaHome className="text-3xl text-[#FFD600]" />,
      title: "Rénovation électrique",
      description: "Modernisation complète de votre installation électrique pour plus de confort et d'efficacité à Cannes",
      image: "/images/renovation-electrique-cannes.webp",
      keywords: ["rénovation électrique", "remise à neuf", "électricité neuve"]
    },
    {
      icon: <FaTools className="text-3xl text-[#FFD600]" />,
      title: "Tableau électrique",
      description: "Installation et remplacement de tableau électrique à Cannes",
      image: "/images/tableau-electrique-cannes.webp",
      keywords: ["tableau électrique", "disjoncteur", "gaine technique"]
    }
  ];

  return (
    <section 
      className="w-full py-16 bg-[#F5F7FA]"
      id="services-carousel"
      aria-label="Carrousel de nos services d'électricien à Cannes"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#aa4100] uppercase tracking-[4px] mb-4">
            Nos Réalisations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-6">
            Exemples de nos travaux à <span className="text-[#FFD600]">Cannes</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez nos interventions d&apos;électricien à travers le pays d&apos;Cannes
          </p>
        </div>

        <Carousel 
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-60">
                      <Image
                        src={service.image}
                        alt={`Service d'électricien: ${service.title} à Cannes`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {service.icon}
                        <h3 className="text-xl font-bold text-[#aa4100]">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.keywords.map((keyword, i) => (
                          <span key={i} className="bg-[#aa4100]/10 text-[#aa4100] text-xs px-3 py-1 rounded-full">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;