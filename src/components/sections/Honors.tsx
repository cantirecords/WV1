"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Honors({ onNext }: { onNext: () => void }) {
    return (
        <section className="relative min-h-[100dvh] w-full bg-[#030302] py-32 px-6 flex items-center justify-center overflow-hidden">
            <div className="max-w-6xl w-full space-y-24">

                {/* Header */}
                <div className="text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-sans text-wedding-gold/50 tracking-[0.8em] text-[10px] uppercase font-bold"
                    >
                        HONOR Y GRATITUD
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="font-serif text-5xl md:text-8xl text-white font-extralight italic"
                    >
                        A quienes <br /> <span className="gold-text not-italic">amamos de verdad.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ delay: 0.5 }}
                        className="font-sans text-white text-sm md:text-base tracking-widest leading-loose max-w-2xl mx-auto font-light"
                    >
                        Damos gracias a Dios por cada proceso vivido. Esta unión es especial porque ustedes están en ella.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0 }}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border border-wedding-gold/10"
                >
                    <img
                        src="/WV1/Padres.JPG"
                        alt="Nuestros Padres"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </motion.div>

                {/* Parents Column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6 text-center md:text-left">
                            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-wedding-gold font-bold">Padres del Novio</h3>
                            <div className="space-y-2 border-l-2 border-wedding-gold/20 pl-6">
                                <p className="font-serif text-2xl text-white font-light">José Ramón Cantillano</p>
                                <p className="font-serif text-2xl text-white font-light">Mayra Araceli Pineda</p>
                            </div>
                        </div>

                        <div className="space-y-6 text-center md:text-left">
                            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-wedding-gold font-bold">Padres de la Novia</h3>
                            <div className="space-y-2 border-l-2 border-wedding-gold/20 pl-6">
                                <p className="font-serif text-2xl text-white font-light">German Antonio Mejía</p>
                                <p className="font-serif text-2xl text-white font-light">Dilcia Abigail García</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Message/Sibs */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-wedding-gold font-bold text-center md:text-left">En Compañía de sus hermanos</h3>
                            <div className="space-y-4 border-l-2 border-wedding-gold/20 pl-6">
                                <p className="font-serif text-2xl text-white/80 font-light italic leading-relaxed">
                                    "Por caminar a nuestro lado siempre. Su presencia es el regalo más grande y el apoyo que nos ha permitido llegar hasta aquí."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Closing Message */}
                <div className="text-center pt-24">
                    <motion.button
                        onClick={onNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-6 mx-auto"
                    >
                        <span className="font-sans text-[10px] tracking-[0.6em] uppercase text-wedding-gold font-bold">
                            Toca para continuar →
                        </span>
                        <div className="w-12 h-12 rounded-full border border-wedding-gold/40 flex items-center justify-center group-hover:border-wedding-gold transition-colors shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <Heart size={20} className="text-wedding-gold" />
                            </motion.div>
                        </div>
                    </motion.button>
                </div>

            </div>

            {/* Corner Details */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-gold/5 blur-[100px] pointer-events-none" />
        </section>
    );
}
