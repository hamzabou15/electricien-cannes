import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

interface ElectricianCardProps {
  image: string;
  title: string;
  subtitle: string;
  slug: string;
}

export default function ElectricianCard({ image, title, subtitle, slug }: ElectricianCardProps) {
  return (
    <Link href={`/projets/${slug}`} passHref>
      <div 
        className="relative group w-full h-[400px] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all"
        aria-label={`Voir le projet: ${title}`}
      >
        {/* Image avec effet de zoom */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={`Projet électrique: ${title} à ${subtitle}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#aa4100]/90 via-[#aa4100]/40 to-transparent" />

        {/* Contenu */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 group-hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm mb-4 opacity-90">{subtitle}</p>
          <div className="flex items-center font-medium">
            <span className="mr-2">Voir le projet</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}