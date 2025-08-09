import Image from "next/image";
import { notFound } from "next/navigation";
import { listItems } from "@/lib/projetcs";
import { FaCheckCircle, FaShareAlt } from "react-icons/fa";
import { Metadata } from "next";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = listItems.find((p) => p.slug === slug);

  if (!project) return {
    title: "Projet introuvable | Électricien Cannes",
    description: "Ce projet n'existe pas ou a été supprimé",
  };

  return {
    title: `${project.title} | Électricien Cannes`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Projet électrique à Cannes`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = listItems.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <section className="w-full py-12 bg-white px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb simplifié */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#aa4100]">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/projets" className="hover:text-[#aa4100]">Projets</Link>
          <span className="mx-2">/</span>
          <span className="text-[#aa4100] font-medium">{project.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full rounded-xl object-cover h-auto max-h-[500px] shadow-md"
              priority
            />

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#FFD600] text-[#aa4100] rounded-full text-sm font-bold">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-[#663500] text-white rounded-full text-sm font-bold">
                  {project.location}
                </span>
              </div>
              
              <p className="text-lg text-[#2E2937] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="bg-[#f0f8ff] p-6 rounded-lg border border-[#aa4100]/20 mb-8">
                <h3 className="text-xl font-bold text-[#aa4100] mb-3">
                  Témoignage du client
                </h3>
                <blockquote className="italic border-l-4 border-[#FFD600] pl-4 py-2 text-[#4c4c4c]">
                  &quot;Service professionnel et intervention rapide. Je recommande vivement cet électricien à Cannes !&quot;
                  <footer className="mt-2 not-italic font-bold">- {project.client}</footer>
                </blockquote>
              </div>

              <h2 className="text-2xl font-bold text-[#aa4100] mb-4 border-b border-[#FFD600] pb-2">
                Notre approche
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#FFD600] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#2E2937]">
                    <strong>Diagnostic complet :</strong> Analyse approfondie de vos besoins et de l&apos;existant
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#FFD600] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#2E2937]">
                    <strong>Solution sur mesure :</strong> Proposition adaptée à votre budget et contraintes
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#FFD600] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#2E2937]">
                    <strong>Réalisation professionnelle :</strong> Travail soigné conforme aux normes NFC 15-100
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#f7f9fc] p-6 rounded-xl border border-[#e2e8f0] shadow-sm">
              <h2 className="text-xl font-bold text-[#aa4100] mb-4 pb-2 border-b border-[#FFD600]">
                Détails du projet
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#4c4c4c]">Client :</h3>
                  <p>{project.client}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#4c4c4c]">Investissement :</h3>
                  <p className="text-xl font-bold text-[#aa4100]">{project.price}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#4c4c4c]">Date de réalisation :</h3>
                  <p>{project.date}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#4c4c4c]">Localisation :</h3>
                  <p>{project.location}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
                <button className="flex items-center gap-2 text-[#aa4100] font-medium hover:text-[#663500]">
                  <FaShareAlt className="text-xl" />
                  <span>Partager ce projet</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#aa4100] to-[#663500] p-6 rounded-xl text-white">
              <h2 className="text-xl font-bold mb-4">Un projet similaire ?</h2>
              <p className="mb-6">Notre équipe intervient rapidement dans tout Cannes.</p>
              
              <div className="space-y-3">
                <Link 
                  href="/contact" 
                  className="block w-full bg-[#FFD600] hover:bg-[#FFC400] text-[#aa4100] text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Demander un devis
                </Link>
                <a 
                  href="tel:+33756935200" 
                  className="block w-full bg-white/10 hover:bg-white/20 text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  07 56 93 52 00
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}