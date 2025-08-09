import React from 'react';
import { FaStar, FaCheck } from 'react-icons/fa';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
    return (
        <section
            className="w-full relative text-white overflow-hidden bg-gradient-to-br from-[#aa4100] to-[#663500] min-h-screen"
            id="hero-electricien-cannes"
            aria-label="Électricien urgence et dépannage à Cannes"
        >
            {/* Image de fond avec overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/electricien-a-cannes.webp"
                    alt="Électricien professionnel intervenant à Cannes"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#aa4100]/90 to-[#663500]/80" />
            </div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div

                    >
                        <div

                        >
                            <span className="inline-block px-4 py-2 bg-[#FFD600] text-[#aa4100] text-sm font-bold rounded-full mb-6">
                                URGENCE ÉLECTRICITÉ 24H/24
                            </span>
                        </div>

                        <h1

                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        >
                            Électricien d&apos;urgence à <span className="text-[#FFD600]">Cannes</span><br />
                            <span className="text-xl md:text-2xl font-normal block mt-4">Intervention rapide en moins de 30 minutes</span>
                        </h1>

                        <p

                            className="text-xl mb-8 max-w-2xl"
                        >
                            Votre expert en dépannage électrique, installations sécurisées et mise aux normes NF C15-100 sur Cannes et sa région.
                        </p>

                        <div

                            className="mb-8"
                        >
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "Dépannage immédiat",
                                    "Devis gratuit",
                                    "Électricien certifié",
                                    "7j/7 - 24h/24"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                        <FaCheck className="text-[#FFD600]" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div

                            className="flex flex-wrap gap-6 items-center"
                        >
                            <Link href="/contact">
                                <Button
                                    className="bg-[#FFD600] hover:bg-[#FFC400] text-[#aa4100] text-lg py-5 px-8 flex items-center gap-3 font-bold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#FFD600]/30"
                                >
                                    Demander un devis gratuit
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Button>
                            </Link>

                            <div className="flex items-center gap-3">
                                <div className="bg-white p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#aa4100]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm opacity-80">Appel non surtaxé</p>
                                    <a href="tel:+33756935200" className="text-xl font-bold hover:text-[#FFD600] transition-colors">
                                        07 56 93 52 00
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div

                        className="relative"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md mx-auto">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#aa4100] rounded-full mb-4">
                                    <FaStar className="text-3xl text-[#FFD600]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#aa4100]">Avis clients vérifiés</h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: "Marie L.", rating: 5, comment: "Intervention rapide et professionnelle sur mon tableau électrique à Cannes." },
                                    { name: "Pierre D.", rating: 5, comment: "Électricien très compétent, a résolu ma panne en 20 minutes." },
                                    { name: "Sophie T.", rating: 5, comment: "Service exceptionnel pour une urgence électrique à minuit !" }
                                ].map((review, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold">{review.name}</h4>
                                                <div className="flex text-[#FFD600] mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} className={i < review.rating ? "text-[#FFD600]" : "text-gray-300"} />
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-500">Cannes</span>
                                        </div>
                                        <p className="mt-2 text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <Button
                                    className="w-full bg-[#aa4100] hover:bg-[#885600] text-white py-3"
                                >
                                    Voir tous les avis
                                </Button>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-[#FFD600] text-[#aa4100] px-4 py-2 rounded-lg font-bold z-10">
                            Zones desservies : Cannes, Le Cannet, Vallauris, Antibes
                        </div>
                    </div>
                </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FFD600] opacity-20"></div>
        </section>
    );
};

export default Hero;