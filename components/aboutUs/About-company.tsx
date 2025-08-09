import Image from "next/image";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";

const AboutCompany = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-bold text-[#aa4100] mb-2">
                        Votre électricien de confiance à Cannes
                    </h2>
                    <h1 className="text-4xl font-bold text-[#4c4c4c] mb-6">
                        22 ans d&apos;expertise électrique <span className="text-[#FFD600]">locale</span>
                    </h1>

                    <p className="text-lg mb-6">
                        Depuis 2003, nous intervenons sur <strong>Cannes et sa région</strong> pour tous travaux d&apos;électricité :
                        dépannage d&apos;urgence, mise aux normes NFC 15-100, rénovation de tableaux électriques et installations sécurisées.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {[
                            "Intervention en moins de 30 min",
                            "Devis gratuit immédiat",
                            "Artisans certifiés Qualifelec",
                            "24h/24 - 7j/7",
                            "Matériel aux normes françaises",
                            "Garantie décennale"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center">
                                <FaCheck className="text-[#FFD600] mr-2" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <Button className="bg-[#aa4100] hover:bg-[#885600] text-white">
                        Demander un diagnostic gratuit
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 ">
                    <Image
                        src="/images/electricien-cannes-intervention.webp"
                        alt="Électricien professionnel intervenant à Cannes"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg h-[400px] object-cover"
                    />
                    <Image
                        src="/images/mise-aux-normes-cannes.webp"
                        alt="Mise aux normes électrique à Cannes"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg h-[400px] mt-8 object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutCompany