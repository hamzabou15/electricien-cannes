'use client';

import React from 'react';

interface HeroPagesProps {
    previous: string;
    actual: string;
    title: string;
    link: string;
}

const HeroPages = ({ previous, actual, title, link }: HeroPagesProps) => {
    return (
        <section
            className='w-full h-screen max-h-[550px] bg-[url("/images/HeroImage.webp")] bg-cover bg-center relative bg-fixed'
            aria-label={`En-tête de la page : ${title}`}
        >
            <div className='px-8 py-2 flex justify-center items-center h-full text-white bg-[#00000062]'>
                <div className='flex flex-col items-center gap-7 justify-center text-center max-w-2xl'>
                    <h1 className='text-7xl font-bold mb-4 max-md:text-5xl'>{title}</h1>

                    {/* Fil d’Ariane SEO-friendly */}
                    <nav
                        aria-label="Fil d’Ariane"
                        className="text-[18px] font-semibold"
                        itemScope
                        itemType="https://schema.org/BreadcrumbList"
                    >
                        <ol className="flex items-center gap-3">
                            <li
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                                className="flex items-center gap-2"
                            >
                                <a href={link} itemProp="item">
                                    <span itemProp="name" className=" hover:text-[#c1121f] font-medium  hover:font-medium">
                                        {previous}
                                    </span>
                                </a>
                                <meta itemProp="position" content="1" />
                            </li>

                            <div className="w-[3px] h-4 bg-[#b0b0b0] mx-2" />

                            <li
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <span itemProp="name" className=" font-medium">
                                    {actual}
                                </span>
                                <meta itemProp="position" content="2" />
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default HeroPages;
