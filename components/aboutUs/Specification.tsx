// components/Expertise.tsx
'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Spesification = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#aa4100] mb-4">
            Notre Expertise Technique
          </h2>
          <p className="text-xl">
            Des solutions électriques conformes et sécurisées pour Cannes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sécurité Électrique",
              items: [
                "Diagnostic électricité",
                "Mise aux normes NFC 15-100",
                "Protection contre les surtensions",
                "Détection des défauts d'isolement"
              ]
            },
            {
              title: "Énergies Nouvelles",
              items: [
                "Installation bornes de recharge",
                "Solutions photovoltaïques",
                "Optimisation consommation",
                "Domotique intelligente"
              ]
            },
            {
              title: "Certifications",
              items: [
                "Qualifelec RGE",
                "Certibat électricité",
                "OPPQB niveau 3",
                "Garantie décennale"
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#4c4c4c] mb-6 pb-2 border-b-2 border-[#FFD600]">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-[#FFD600] mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Spesification;
