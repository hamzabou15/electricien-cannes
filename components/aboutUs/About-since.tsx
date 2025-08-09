'use client';

import Image from 'next/image';
import React from 'react';

const AboutSince = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-[#aa4100] mb-6">
            Notre Histoire à <span className="text-[#FFD600]">Cannes</span>
          </h2>
          
          <div className="space-y-4">
            <p>
              Fondée en 2003, notre entreprise familiale s&apos;est imposée comme <strong>référence en électricité sur Cannes</strong> grâce à notre engagement pour un service rapide et de qualité.
            </p>
            
            <p>
              De la simple prise défectueuse aux installations complexes, nous avons développé une expertise reconnue par les Cannesois pour résoudre <strong>tous types de problèmes électriques</strong>.
            </p>
            
            <p>
              Aujourd&apos;hui, notre équipe de 5 électriciens certifiés intervient dans tout le <strong>pays d&apos;Cannes : Luynes, Mandelieu-la-Napoule, Mougins, Vallauris</strong> et les communes alentours.
            </p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <Image 
            src="/images/electricien-cannes-equipe.webp" 
            alt="Équipe d'électriciens à Cannes"
            width={600}
            height={600}
            className="rounded-xl"
          />
          
          <div className="absolute -bottom-6 -right-6 bg-[#FFD600] text-[#aa4100] px-6 py-3 rounded-lg font-bold">
            <span>Depuis 2003 au service des Cannesois</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSince;
