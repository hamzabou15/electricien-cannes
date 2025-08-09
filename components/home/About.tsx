import React from 'react';
import { FaCheck, FaTools, FaUserTie, FaShieldAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const features = [
    { icon: <FaTools className="text-2xl" />, title: "Équipements professionnels", description: "Outils de diagnostic et matériel haut de gamme" },
    { icon: <FaUserTie className="text-2xl" />, title: "Électriciens certifiés", description: "Formation continue aux dernières normes" },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Garantie 2 ans", description: "Sur tous nos travaux et installations" },
    { icon: <FaClock className="text-2xl" />, title: "Disponibilité 24h/24", description: "7j/7 pour les urgences électriques" }
  ];

  return (
    <section
      className="w-full py-16 bg-white"
      id="a-propos"
      aria-label="Présentation de l'entreprise d'électricité à Cannes"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 bg-[#FFD600] text-[#aa4100] text-sm font-bold rounded-full mb-4"

          >
            NOTRE EXPERTISE
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-6"

          >
            Votre électricien de confiance à <span className="text-[#FFD600]">Cannes</span>
          </h2>
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto"

          >
            Spécialiste en dépannage électrique et mise aux normes NF C 15-100
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div

          >
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
              <Image
                src="/images/electricien-cannes-equipe.webp"
                alt="Équipe d'électriciens professionnels à Cannes"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#aa4100] to-transparent p-6 text-white">
                <p className="font-bold">Intervention rapide sur Cannes et sa région</p>
              </div>
            </div>
          </div>

          <div

          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#aa4100]">
                Plus de 22 ans d&apos;expertise électrique à Cannes
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Depuis plus d&apos;une décennie, notre équipe d&apos;électriciens certifiés intervient à Cannes et dans toute la région PACA pour résoudre tous types de problèmes électriques :
                <span className="font-semibold"> pannes soudaines</span>,
                <span className="font-semibold"> coupures générales ou partielles</span>,
                <span className="font-semibold"> remplacement de tableaux électriques</span>, et
                <span className="font-semibold"> mise aux normes NF C 15-100</span>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Chaque intervention commence par un <span className="font-semibold">diagnostic complet</span> et des <span className="font-semibold">tests approfondis de vos circuits électriques</span>.
                Nous identifions précisément la source du problème avant de procéder aux réparations, remplacements ou mises en conformité nécessaires.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-[#F5F8FF] rounded-lg"

                  >
                    <div className="text-[#aa4100]">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#aa4100]">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#aa4100] to-[#663500] rounded-xl text-white">
                <div className="flex items-start gap-3">
                  <FaCheck className="text-[#FFD600] mt-1 text-xl" />
                  <p>
                    <span className="font-bold">Ne laissez pas une panne électrique mettre votre sécurité en danger.</span> Contactez dès maintenant votre électricien expert à Cannes pour un <span className="font-bold">devis gratuit</span> ou une <span className="font-bold">intervention rapide</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;