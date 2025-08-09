import { servicesData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const ListServices = () => {

  return (
    <section
      id="services"
      aria-label="Nos services d'électricité à Cannes"
      className="w-full py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#aa4100] text-white text-sm font-bold rounded-full mb-4">
            NOS SERVICES
          </span>
          <h2 className="text-3xl font-bold text-[#4c4c4c] mb-6">
            Solutions Électriques à <span className="text-[#FFD600]">Cannes</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Interventions rapides et travaux soignés pour particuliers et professionnels,
            dans le respect des normes et de votre budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#aa4100] group-hover:text-[#663500] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <span className="inline-block mt-4 text-[#aa4100] font-medium group-hover:underline">
                  En savoir plus
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListServices;
