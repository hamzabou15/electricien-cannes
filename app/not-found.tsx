// src/pages/404.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
            {/* Animation d'apparition */}
            <h1

                className="text-7xl font-bold text-primary"
            >
                404
            </h1>

            <p

                className="mt-4 text-lg text-gray-600"
            >
                Oups ! La page que vous recherchez n’existe pas.
            </p>

            {/* Bouton retour */}
            <div

                className="mt-6"
            >
                <Link href="/">
                    <Button className="rounded-2xl shadow-lg text-white">
                        Retour à l’accueil
                    </Button>
                </Link>
            </div>
        </div>
    );
}
