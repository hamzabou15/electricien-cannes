import Image from "next/image";
import { PiPhoneCallLight } from "react-icons/pi";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#aa4100] to-[#663500] min-h-[50vh]">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/electricien-urgence-cannes.webp"
                    alt="Électricien d'urgence intervenant à Cannes"
                    fill
                    className="object-cover opacity-20"
                />
            </div>

            <div className="container mx-auto px-4 py-24 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Électricien d&apos;Urgence à <span className="text-[#FFD600]">Cannes</span>
                </h1>
                <p className="text-xl text-white max-w-2xl mx-auto">
                    Plus de 22 ans d&apos;expertise en dépannage électrique sur Cannes et sa région
                </p>

                <div className="mt-8 flex justify-center">
                    <a href="tel:+33756935200"
                        className="bg-[#FFD600] text-[#aa4100] px-6 py-3 rounded-full font-bold flex items-center gap-2">
                        <PiPhoneCallLight className="text-xl" />
                        07 56 93 52 00
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero