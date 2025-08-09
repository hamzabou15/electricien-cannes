"use client";
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About2 = () => {
  const features = [
    "Intervention en 30 minutes sur Cannes",
    "Devis gratuit et conseils professionnels",
    "Électricien certifié et assuré",
    "Service 24h/7j pour urgences électriques",
    "Clientèle satisfaite dans tout le pays d'Cannes",
    "Matériel haut de gamme et conforme aux normes"
  ];

  return (
    <section
      className="w-full py-16 bg-gradient-to-br from-[#fff7f0] to-[#fff1e6]"
      aria-label="Pourquoi choisir notre service d'électricien à Cannes"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image à gauche - Animation d'apparition */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            width={800}
            height={800}
            alt='Électricien professionnel intervenant à Cannes'
            src='/images/electricien-cannes-expert.webp'
            className="w-full object-cover aspect-square lg:aspect-video"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#aa4100] to-transparent p-6 text-white">
            <p className="font-bold text-lg">Intervention rapide 7j/7</p>
            <p className="text-sm mt-1">Sur Cannes et ses environs</p>
          </div>
        </motion.div>

        {/* Texte à droite */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block px-4 py-1 bg-[#FFD600] text-[#aa4100] text-sm font-bold rounded-full mb-4">
                EXPERT ÉLECTRICIEN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-4">
                Votre électricien de confiance à <span className="text-[#FFD600]">Cannes</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Artisan électricien certifié basé à Cannes, j&apos;interviens rapidement pour tous vos besoins électriques :
                dépannages urgents, installations sécurisées, mises aux normes NF C 15-100 et solutions domotiques.
                Bénéficiez d&apos;un travail certifié, d&apos;un devis gratuit et d&apos;une intervention possible le jour même.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheck className="text-[#FFD600] mt-1 flex-shrink-0 text-xl" />
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button className="bg-[#aa4100] hover:bg-[#885600] text-white py-4 px-8 flex items-center gap-2 font-bold text-lg">
                Demander un devis
                <FaArrowRight className="text-[#FFD600]" />
              </Button>

              <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-md">
                <div className="bg-[#aa4100] text-white p-3 rounded-full">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Urgence 24h/24</p>
                  <a
                    href="tel:+33756935200"
                    className="text-xl font-bold text-[#aa4100] hover:text-[#885600] transition-colors"
                  >
                    07 56 93 52 00
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white border-l-4 border-[#FFD600] rounded-r-lg shadow-sm">
              <p className="font-semibold text-gray-800">
                Une intervention rapide et professionnelle sur Cannes pour votre sécurité électrique.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About2;