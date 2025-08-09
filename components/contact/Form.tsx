'use client';

import React from 'react';
import { Button } from '../ui/button';
import { useForm, ValidationError } from '@formspree/react';
import { FaBolt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('mjkobgqo'); // Remplace par ton ID Formspree

    return (
        <section
            id="contact-electricien-cannes"
            aria-label="Formulaire de contact pour dépannage électrique à Cannes"
            className="w-full bg-white py-20 px-6 md:px-8"
        >
            <div className="max-w-5xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-[#FFD600] text-[#aa4100] text-sm font-bold rounded-full mb-4">
                        CONTACT RAPIDE
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#aa4100] mb-4">
                        Demandez votre devis <span className="text-[#FFD600]">gratuit</span>
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Intervention 24h/24 et 7j/7 à Cannes. Nos électriciens certifiés sont prêts à intervenir
                        rapidement pour toute urgence ou projet électrique.
                    </p>
                </div>

                {/* Coordonnées */}
                <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
                    <div className="flex flex-col items-center">
                        <FaPhoneAlt className="text-[#FFD600] text-2xl mb-2" />
                        <p className="font-bold text-[#aa4100]">Téléphone</p>
                        <p className="text-gray-600">04 90 00 00 00</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaEnvelope className="text-[#FFD600] text-2xl mb-2" />
                        <p className="font-bold text-[#aa4100]">Email</p>
                        <p className="text-gray-600">contact@electriciencannes-Expert.fr</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-[#FFD600] text-2xl mb-2" />
                        <p className="font-bold text-[#aa4100]">Adresse</p>
                        <p className="text-gray-600">Cannes & alentours</p>
                    </div>
                </div>

                {/* Formulaire */}
                {state.succeeded ? (
                    <p className="text-center text-green-600 font-semibold text-lg">
                        ✅ Merci pour votre demande. Nous vous contacterons sous peu.
                    </p>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#F5F8FF] p-8 rounded-xl shadow-lg max-w-3xl mx-auto flex flex-col gap-6 text-[#4c4c4c]"
                    >
                        <input type="hidden" name="_subject" value="Nouvelle demande – Formulaire Électricien Cannes" />

                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Votre nom complet"
                                className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Votre adresse email"
                                className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                            />
                        </div>
                        <ValidationError field="email" prefix="Email" errors={state.errors} />

                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Votre numéro de téléphone"
                            className="w-full border border-gray-300 px-5 py-4 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                        />

                        <textarea
                            name="message"
                            required
                            rows={6}
                            placeholder="Décrivez votre besoin (panne, devis, mise en conformité...)"
                            className="w-full border border-gray-300 px-5 py-4 text-sm rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                        ></textarea>
                        <ValidationError field="message" prefix="Message" errors={state.errors} />

                        <div className="flex justify-center mt-4">
                            <Button
                                type="submit"
                                variant="submit"
                                size="xlg"
                                disabled={state.submitting}
                                className="min-w-[220px] text-white bg-[#aa4100] hover:bg-[#003E7E]"
                            >
                                <FaBolt className="mr-2" /> Envoyer ma demande
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
