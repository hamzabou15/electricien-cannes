'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaUserCheck, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const StatsCard = () => {
    const stats = [
        {
            value: 2500,
            label: 'Interventions réalisées à Cannes',
            icon: <FaBolt className="text-3xl text-[#FFD600]" />,
            suffix: '+'
        },
        {
            value: 99,
            label: 'Clients satisfaits dans la région PACA',
            icon: <FaHeart className="text-3xl text-[#FFD600]" />,
            suffix: '%'
        },
        {
            value: 15,
            label: "Années d'expérience comme électricien",
            icon: <FaUserCheck className="text-3xl text-[#FFD600]" />,
            suffix: '+'
        },
        {
            value: 30,
            label: 'Minutes de réactivité moyenne sur Cannes',
            icon: <FaMapMarkerAlt className="text-3xl text-[#FFD600]" />,
            suffix: ''
        },
    ];

    return (
        <section
            className='w-full py-16 bg-gradient-to-r from-[#aa4100] to-[#663500] text-white'
            id="chiffres-electricien-cannes"
            aria-label="Statistiques de notre électricien à Cannes"
        >
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Notre impact à <span className="text-[#FFD600]">Cannes</span>
                </h2>
                <p className="text-xl max-w-2xl mx-auto">
                    Des chiffres qui témoignent de notre expertise et de notre engagement dans la région
                </p>
            </div>

            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4'>
                {stats.map((stat, index) => (
                    <StatItem
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        icon={stat.icon}
                        suffix={stat.suffix}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </section>
    );
};

const StatItem = ({
    value,
    label,
    icon,
    suffix,
    delay = 0
}: {
    value: number;
    label: string;
    icon: React.ReactNode;
    suffix: string;
    delay?: number;
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value]);

    return (
        <motion.div
            ref={ref}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay }}
        >
            <div className="flex justify-center mb-4">
                {icon}
            </div>

            <motion.div
                className="text-5xl md:text-6xl font-bold text-[#FFD600] mb-2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: delay + 1 }}
            >
                {count}{suffix}
            </motion.div>

            <div className="text-lg font-medium">
                {label}
            </div>

            <motion.div
                className="h-1 bg-[#FFD600] mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: delay + 1.5 }}
            />
        </motion.div>
    );
};

export default StatsCard;