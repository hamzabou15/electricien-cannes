"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { servicesData } from "@/lib/data";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <>
      {/* Barre sticky */}
      <header className=" right-0 bg-white/95 backdrop-blur-md shadow-md z-100 sticky top-0">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 md:px-8 py-4 ">
          {/* Logo */}
          <Link href="/" aria-label="Accueil">
            <Image
              src="/images/logo-electricien-cannes.png"
              alt="Logo Electricien Cannes"
              width={160}
              height={50}
              priority
              className="hover:opacity-80 transition-opacity duration-300 h-[80px] object-cover"
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden lg:flex items-center gap-10 text-[#4c4c4c] font-semibold tracking-wide">
            <Link
              href="/"
              className="relative group py-2"
            >
              Accueil
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#fdab78] transition-[width] group-hover:w-full"></span>
            </Link>

            <div className="relative group">
              <Link href={"/services"}>
              <button
                className="flex items-center gap-1 py-2 cursor-pointer select-none"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Services
                <svg
                  className="w-4 h-4 mt-[2px] stroke-[#4c4c4c] group-hover:stroke-[#fdab78] transition-colors"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              </Link>


              {/* Dropdown */}
              <ul className="absolute z-50 top-full left-0 mt-2 bg-[#F5F8FF] rounded-md shadow-lg py-3 w-64 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                {servicesData.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block px-5 py-2 hover:bg-[#fdab78] hover:text-[#4c4c4c] transition-colors rounded-md"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/projets"
              className="relative group py-2"
            >
              Projets
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#fdab78] transition-[width] group-hover:w-full"></span>
            </Link>

            <Link
              href="/a-propos"
              className="relative group py-2"
            >
              À propos
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#fdab78] transition-[width] group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="relative group py-2"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#fdab78] transition-[width] group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Contact & Devis desktop */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+33756935200"
              aria-label="Appeler +33 7 56 93 52 00"
              className="flex items-center gap-2 text-sm font-semibold text-[#4c4c4c] hover:text-[#c1121f] transition-colors"
            >
              <MdLocalPhone className="w-8 h-8 p-2 rounded-full bg-[#fdab78] text-[#4c4c4c]" />
              +33 7 56 93 52 00
            </a>
            <Link href="/contact" passHref>
              <button className="bg-gradient-to-r from-[#c1121f] to-[#e03a00] hover:from-[#e03a00] hover:to-[#c1121f] text-white py-2 px-5 rounded-md font-semibold transition-shadow shadow-md hover:shadow-lg">
                <IoNewspaperOutline className="inline-block mr-2" size={20} />
                Devis
              </button>
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden text-3xl text-[#4c4c4c] focus:outline-none focus:ring-2 focus:ring-[#fdab78] rounded"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-[101] transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-6 py-8 gap-6 text-[#4c4c4c] font-semibold">
          <Link
            href="/"
            className="text-lg hover:text-[#c1121f] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Accueil
          </Link>

          {/* Accordion services mobile */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-list"
            className="flex justify-between items-center w-full text-lg font-semibold hover:text-[#c1121f] transition-colors"
          >
            Services
            <svg
              className={`w-5 h-5 stroke-[#4c4c4c] transition-transform duration-300 ${
                mobileServicesOpen ? "rotate-180 stroke-[#fdab78]" : ""
              }`}
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <ul
              id="mobile-services-list"
              className="pl-4 border-l-4 border-[#fdab78] flex flex-col gap-2"
            >
              {servicesData.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block text-[#aa4100] hover:text-[#c1121f] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Link
            href="/projets"
            className="text-lg hover:text-[#c1121f] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Projets
          </Link>
          <Link
            href="/a-propos"
            className="text-lg hover:text-[#c1121f] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-[#c1121f] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          <a
            href="tel:+33756935200"
            className="flex items-center gap-3 mt-8 font-semibold text-[#c1121f]"
            onClick={() => setMobileOpen(false)}
          >
            <MdLocalPhone className="w-10 h-10 p-2 bg-[#fdab78] rounded-full text-[#4c4c4c]" />
            +33 7 56 93 52 00
          </a>

          <Link href="/contact" passHref>
            <button
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full bg-gradient-to-r from-[#c1121f] to-[#e03a00] hover:from-[#e03a00] hover:to-[#c1121f] text-white py-3 rounded-md font-semibold shadow-md transition-shadow"
            >
              <IoNewspaperOutline className="inline-block mr-2" size={20} />
              Devis
            </button>
          </Link>
        </nav>
      </div>

      {/* Overlay quand drawer ouvert */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;
