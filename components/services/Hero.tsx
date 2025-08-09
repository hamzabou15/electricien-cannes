import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative bg-gradient-to-br from-[#aa4100] to-[#663500] min-h-[60vh] flex items-center"
      id="hero-services"
      aria-label="Services d'électricien à Cannes"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="bg-[url('/images/electricien-services-hero.jpg')] bg-cover bg-center w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services Électriques à <span className="text-[#FFD600]">Cannes</span>
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-8">
          Dépannage urgent 24h/24, installations sécurisées et mise aux normes NF C15-100
        </p>
        
        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <a 
            href="tel:+33756935200" 
            className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors"
          >
            07 56 93 52 00
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;