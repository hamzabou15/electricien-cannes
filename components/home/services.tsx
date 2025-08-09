'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const services = [
    {
        img: "/images/electricien-reaparation.webp",
        title: "Électricien urgence panne à Cannes ",
        description: "Intervention rapide 7j/7 en cas de panne électrique totale ou partielle, avec solution immédiate.",
    },
    {
        img: "/images/electricien-sur-cannes3.webp",
        title: "Remise aux normes NF C 15-100",
        description: "Mise en conformité de votre réseau électrique selon la norme NF C 15-100 pour votre sécurité.",
    },
    {
        img: "/images/electricien-sur-cannes2.webp",
        title: "Réparation de coupures générales ou partielles",
        description: "Traitement rapide des coupures de courant dans votre logement ou local professionnel à Cannes .",
    },
    {
        img: "/images/un-electricien-sur-cannes.webp",
        title: "Diagnostic de panne électrique à Cannes ",
        description: "Analyse complète et test des circuits pour localiser les défauts de votre installation.",
    },
    {
        img: "/images/electricien-sur-cannes2.webp",
        title: "Remplacement de tableau électrique à Cannes ",
        description: "Remplacement sécurisé et conforme des tableaux électriques obsolètes ou endommagés.",
    },


];

const Services = () => {
    return (
        <section
            id="services-electricien-Cannes "
            aria-label="Nos prestations électriques à Cannes "
            className="w-full py-24 px-16 bg-white max-md:px-8"
        >
            <div className="flex flex-col items-center justify-center mb-12 px-6 sm:px-20 gap-6 max-md:gap-5 xl:max-w-[1300px] xl:mx-auto">
                <p className="text-[14px] font-semibold text-[#c1121f] uppercase tracking-[7px] max-lg:text-[12px]">
                    Nos Services
                </p>

                <h2 className="text-[40px]  leading-[1.15em] font-bold tracking-[-1.5px] text-center text-[#4c4c4c] max-lg:text-[36px] max-md:text-[32px] ">
                    Électricien à <span className='text-[#c1121f]'>Cannes </span> : dépannage, mise aux normes, tableaux
                </h2>
                <p className="text-[17px] text-[#2E2937BF] text-center max-w-3xl leading-7 max-md:text-base" >
                    Interventions rapides à Cannes  pour tout type de besoin électrique : urgence, diagnostic, remise aux normes NF C 15-100, remplacement de tableaux et réparations.
                </p>
            </div>

            <Carousel
                opts={{ align: "start" }}
                orientation="horizontal"
                className="w-full max-w-7xl mx-auto max-sm:max-w-[92%] xl:max-w-[1300px]"
            >
                <CarouselContent className="-mt-1">
                    {services.map((service, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full sm:basis-1/2 md:basis-1/3 h-[600px]"
                        >
                            <div className="h-full">
                                <Card className="h-full w-full border-0 p-0 shadow-none bg-black group overflow-hidden relative cursor-pointer">
                                    <CardContent className="flex flex-col w-full justify-end items-center text-center gap-4 h-full relative p-0 text-[white]">
                                        <Image
                                            src={service.img}
                                            alt={service.title}
                                            width={1000}
                                            height={1000}
                                            className="object-cover absolute top-0 left-0 w-full h-full opacity-90 transition-transform duration-500 ease-out group-hover:scale-110"
                                        />
                                        <div className="relative z-10 flex flex-col items-start gap-2 bg-[#191c25d4] w-full p-6">
                                            <h3 className="text-[18px] text-start font-semibold text-[white]">
                                                {service.title}
                                            </h3>
                                            <p className="text-[12px] text-start text-[#e9e9e9bf] ml-[-3px] leading-6">
                                                {service.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};

export default Services;
