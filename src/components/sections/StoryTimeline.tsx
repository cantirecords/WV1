"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StoryTimeline({ onNext }: { onNext: () => void }) {
    const timeline = [
        {
            year: "Raíces",
            title: "Dos Caminos, Un Destino",
            text: "Él, de Honduras 🇭🇳, siempre llevando la pasión por el fútbol y el ritmo de la música en su corazón. Ella, de El Salvador 🇸🇻, con un espíritu sereno amante del mar y la belleza de las tortugas. Llegaron pequeños a este país, con sueños que apenas comenzaban a entrelazarse.",
            img: "/WV1/IMG_0948.JPG"
        },
        {
            year: "7 Años",
            title: "Desde Pequeños",
            text: "Crecieron de la mano, navegando diferentes etapas y aprendiendo a armonizar sus vidas. Su amor pasó de ser una ilusión de jóvenes a un propósito maduro, listo para construir su propio hogar.",
            img: "/WV1/IMG_0950.JPG"
        },
        {
            year: "Hoy",
            title: "Nuestros 20s",
            text: "Después de todo lo vivido, cada reto superado es una victoria de fe. Hoy más que nunca entienden que Dios, con una sabiduría infinita, dibujó un plan perfecto para unirlos para siempre.",
            img: "/WV1/IMG_0953.JPG"
        }
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#030302] py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Intro to story */}
                <div className="text-center max-w-3xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="h-px w-12 bg-wedding-gold/40" />
                        <span className="font-sans text-wedding-gold tracking-[0.6em] text-[10px] uppercase font-bold">Nuestra Historia</span>
                        <div className="h-px w-12 bg-wedding-gold/40" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="font-serif text-5xl md:text-8xl text-white font-extralight italic"
                    >
                        Siete años caminando juntos.
                    </motion.h2>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="group space-y-8"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl glass border-white/5">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute top-6 right-6 font-serif text-wedding-gold italic text-2xl opacity-60">
                                    {item.year}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-serif text-3xl text-white font-light gold-text">{item.title}</h3>
                                <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed font-light">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transition Button */}
                <div className="flex justify-center pt-20">
                    <motion.button
                        onClick={onNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-6"
                    >
                        <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-white/40 group-hover:text-wedding-gold transition-colors">
                            El momento de la verdad
                        </span>
                        <div className="w-12 h-12 rounded-full border border-wedding-gold/20 flex items-center justify-center group-hover:border-wedding-gold transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-wedding-gold">
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                            </svg>
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-wedding-gold/10 to-transparent z-0" />
        </section>
    );
}
