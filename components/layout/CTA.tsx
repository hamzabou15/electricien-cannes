import React from 'react';
import { Button } from '../ui/button';
import { MdLocalPhone } from 'react-icons/md';
import { IoNewspaperOutline } from 'react-icons/io5';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="fixed bottom-16 right-8 flex flex-col items-end z-50 space-y-4 max-md:w-full max-md:lef-0 max-md:p-6 max-md:bottom-4 max-md:left-0">
      {/* Bouton téléphone */}
      <Button
        asChild
        variant="submit"
        size="xlg"
        className="group flex items-center overflow-hidden rounded-md shadow-md bg-gradient-to-r from-[#aa4100] to-[#FFD600] hover:from-[#004080] hover:to-[#e6c200] transition-all duration-300"
      >
        <a
          href="tel:+33756935200"
          aria-label="Appeler le numéro +33 7 56 93 52 00"
          className="flex items-center gap-3 px-4 py-3 max-md:w-full "
        >
          <MdLocalPhone
            className="text-white flex-shrink-0"
            style={{ height: 24, width: 24 }}
          />
          <span className="text-white font-semibold text-base max-w-0 opacity-0 
            transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100
             whitespace-nowrap overflow-hidden max-md:max-w-full max-md:opacity-100 max-md:w-[max-content]
             
             ">
            Appelez-nous
          </span>
        </a>
      </Button>

      {/* Bouton devis */}
      <Link href="/contact" passHref className='max-md:w-full'>
        <Button
          variant="send"
          size="xlg"
          className="group flex  items-center overflow-hidden 
          rounded-md shadow-md bg-gradient-to-r from-[#aa4100] to-[#FFD600]
           hover:from-[#004080] hover:to-[#e6c200] transition-all duration-300 max-md:w-full"
        >
          <IoNewspaperOutline
            className="text-white flex-shrink-0 ml-4"
            style={{ height: 24, width: 24 }}
          />
          <span className="text-white font-semibold text-base max-w-0 opacity-0
           transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 
           whitespace-nowrap overflow-hidden mr-4
           max-md:max-w-full max-md:opacity-100 max-md:w-[max-content]
           ">
            Un devis ?
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default CTA;
