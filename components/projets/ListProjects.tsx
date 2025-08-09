import Link from 'next/link';
import { listItems } from '@/lib/projetcs';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const ListProjects = () => {
  return (
    <section
      aria-label="Nos projets d'électricité réalisés à Cannes"
      className="w-full py-16 px-4 xl:max-w-[1300px] xl:mx-auto"
    >
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-[#aa4100] text-white text-sm font-bold rounded-full mb-4">
          RÉALISATIONS
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#4c4c4c] mb-6">
          Nos Projets Électriques à <span className="text-[#FFD600]">Cannes</span>
        </h1>
        <p className="text-xl text-[#2E2937] max-w-3xl mx-auto">
          Découvrez des exemples concrets de nos interventions pour particuliers et professionnels dans la région d&apos;Cannes
        </p>
      </div>


      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listItems.map((item) => (
          <Link 
            key={item.slug} 
            href={`/projets/${item.slug}`}
            aria-label={`Voir le projet: ${item.title}`}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={`Projet: ${item.title} à ${item.subtitle}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#FFD600] text-[#aa4100] px-3 py-1 rounded-full text-sm font-bold">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4c4c4c] mb-2">{item.title}</h3>
                <p className="text-[#aa4100] mb-4">{item.subtitle}</p>
                <p className="text-gray-600 mb-6 line-clamp-3">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-[#aa4100] font-medium group">
                    <span className="mr-2 group-hover:underline">Voir le projet</span>
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Section d'appel à l'action */}
      <div className="mt-20 bg-gradient-to-r from-[#aa4100] to-[#663500] rounded-2xl p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Un projet électrique à Cannes ?
        </h3>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Notre équipe d&apos;électriciens certifiés vous accompagne pour toutes vos installations, rénovations et dépannages urgents.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="/contact" 
            className="bg-[#FFD600] hover:bg-[#FFC400] text-[#aa4100] font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Demander un devis
          </a>
          <a 
            href="tel:+33756935200" 
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            07 56 93 52 00
          </a>
        </div>
      </div>
    </section>
  );
};

export default ListProjects;