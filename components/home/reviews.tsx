'use client'

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Reviews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const reviews = [
    {
      name: "Marie L.",
      location: "Cannes Centre",
      rating: 5,
      comment: "Intervention rapide et très professionnelle. L'électricien a résolu ma panne en moins d'une heure. Je recommande vivement !",
      date: "15 octobre 2023",
      img: "/images/femme1.webp"
    },
    {
      name: "Pierre D.",
      location: "Mandelieu-la-Napoule",
      rating: 5,
      comment: "Un service de qualité. Remplacement de mon tableau électrique effectué dans les règles de l'art. Devis respecté à la lettre.",
      date: "2 septembre 2023",
      img: "/images/homme1.webp"
    },
    {
      name: "Sophie T.",
      location: "Mougins",
      rating: 5,
      comment: "Urgence électrique traitée à 22h un dimanche. Merci pour votre réactivité et votre professionnalisme. À recommander sans hésiter.",
      date: "28 août 2023",
      img: "/images/femme2.webp"
    },
    {
      name: "Thomas G.",
      location: "Vallauris",
      rating: 4,
      comment: "Bonne intervention pour une mise aux normes. Travail propre et soigné. Petit bémol sur le délai d'intervention (2 jours).",
      date: "12 juillet 2023",
      img: "/images/homme2.webp"
    },
    {
      name: "Daniel R.",
      location: "Antibes",
      rating: 5,
      comment: "Électricien très compétent et sympathique. Installation de mes spots LED parfaitement réalisée. Je ferai appel à eux pour tous mes travaux électriques.",
      date: "25 juin 2023",
      img: "/images/homme3.webp"

    }
  ];

  return (
    <section
      className="w-full py-16 bg-white"
      id="avis-clients"
      aria-label="Avis de nos clients à Cannes"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#aa4100] uppercase tracking-[4px] mb-4">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-6">
            Ce que disent nos clients à <span className="text-[#FFD600]">Cannes</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez les retours d&apos;expérience de nos clients satisfaits
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="flex text-2xl text-[#FFD600]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} fill={i < review.rating ? "#FFD600" : "#e2e8f0"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-center text-lg italic mb-8">
                        {review.comment}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Image src={review.img} alt="" height={300} width={300} className="bg-gray-200 border-2 border-dashed object-cover rounded-xl w-16 h-16" />
                        <div className="text-center">
                          <h4 className="font-bold text-xl text-[#aa4100]">{review.name}</h4>
                          <p className="text-gray-500">{review.location}</p>
                          <p className="text-gray-400 text-sm">{review.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-[#aa4100]' : 'bg-gray-300'
                }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#aa4100] to-[#663500] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Vous aussi, donnez votre avis !</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Votre satisfaction est notre priorité. Partagez votre expérience avec notre service d&apos;électricien à Cannes.
          </p>
          <button className="bg-[#FFD600] hover:bg-[#FFC400] text-[#aa4100] font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Laisser un avis Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;