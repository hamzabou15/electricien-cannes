'use client';

import React from 'react';

const AboutStats = () => {
  const stats = [
    { value: "22+", label: "Années d'expérience" },
    { value: "3500+", label: "Interventions" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "24/24", label: "Disponibilité" }
  ];

  return (
    <section className="py-16 bg-[#aa4100] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
