import {
    FaExclamationTriangle,
    FaRegCheckCircle,
    FaPlug,
    FaLightbulb
} from "react-icons/fa";

const AboutServices = () => {
    const services = [
        {
            title: "Dépannage Urgence 24h/24",
            description: "Intervention rapide sur Cannes pour toutes pannes électriques",
            icon: <FaExclamationTriangle className="text-white text-2xl" />
        },
        {
            title: "Mise aux Normes NFC 15-100",
            description: "Certification de vos installations électriques à Cannes",
            icon: <FaRegCheckCircle className="text-white text-2xl" />
        },
        {
            title: "Tableaux Électriques",
            description: "Installation et rénovation de tableaux électriques sécurisés",
            icon: <FaPlug className="text-white text-2xl" />
        },
        {
            title: "Éclairage & Automatismes",
            description: "Solutions d'éclairage moderne pour maisons et entreprises",
            icon: <FaLightbulb className="text-white text-2xl" />
        }
    ];

    return (
        <section
            className="py-16 bg-gray-50"
            id="services-electricien-cannes"
            aria-label="Nos services d'électricité à Cannes"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#aa4100] mb-4">
                        Nos Services Électriques à <span className="text-[#FFD600]">Cannes</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto">
                        Des solutions complètes pour particuliers et professionnels sur Cannes et sa région
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all group"
                        >
                            <div
                                className="w-16 h-16 bg-[#aa4100] rounded-full flex items-center justify-center mb-6
                                transition-all duration-300 group-hover:bg-[#FFD600] group-hover:text-[#aa4100]"
                            >
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#4c4c4c] mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#aa4100] hover:bg-[#885600] text-white py-3 px-8 rounded-lg font-bold text-lg transition-colors">
                        Voir tous nos services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;