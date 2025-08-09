import Image from 'next/image';
import { PiPhoneCallLight } from 'react-icons/pi';

const Presentation = () => {
  return (
    <section 
      className="w-full bg-white py-16" 
      id="services-intro"
      aria-label="Présentation de nos services d'électricité"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <Image
            src={"/images/Electricien-proxmité-cannes.webp"}
            alt='Électriciens certifiés à Cannes'
            height={500}
            width={500}
            className='border-2 border-dashed rounded-xl w-full h-[400px] object-cover '
          ></Image>
        </div>
        
        <div className="order-1 md:order-2">
          <span className="text-sm font-semibold text-[#aa4100] uppercase tracking-[4px]">
            Expertise locale
          </span>
          <h2 className="text-3xl font-bold text-[#4c4c4c] mt-3 mb-6">
            Électriciens certifiés à Cannes
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Depuis plus de 20 ans, notre entreprise intervient sur Cannes et sa région pour tous travaux d&apos;électricité :
          </p>
          
          <ul className="space-y-3 mb-8">
            {[
              "Dépannage d'urgence 24h/24, 7j/7",
              "Mise aux normes NFC 15-100",
              "Installation et rénovation de tableaux électriques",
              "Diagnostic complet des installations",
              "Éclairage intérieur et extérieur"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-[#FFD600] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-[#aa4100] font-bold">✓</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="tel:+33756935200" 
              className="flex items-center gap-2 bg-[#aa4100] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#885600] transition-colors"
            >
              <PiPhoneCallLight className="text-xl" />
              <span>07 56 93 52 00</span>
            </a>
            <a 
              href="/contact" 
              className="text-[#aa4100] font-bold hover:underline"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;