"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StoryAbigail({ onNext }: { onNext: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center py-24 px-6 overflow-hidden font-sans"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 border border-wedding-gold/20 rounded-2xl group-hover:border-wedding-gold/40 transition-colors duration-700" />
                    <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-neutral-900">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 5 }}
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                            alt="Abigail's Story"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8">
                            <span className="serif-font text-wedding-gold text-3xl md:text-5xl italic font-light">Abigail</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <span className="sans-font text-wedding-gold tracking-[0.5em] text-xs uppercase font-bold opacity-80">Capítulo I</span>
                        <h2 className="serif-font text-5xl md:text-7xl text-white leading-tight font-light">
                            Un Sueño en <br /> San Miguel.
                        </h2>
                    </div>

                    <div className="w-24 h-[0.5px] bg-wedding-gold/30" />

                    <div className="space-y-8">
                        <p className="serif-font text-white/90 text-2xl md:text-3xl italic font-light leading-snug">
                            "Crecí soñando con un amor que fuera tan vasto como el océano salvadoreño."
                        </p>
                        <div className="space-y-6 sans-font text-white/60 text-base md:text-lg leading-relaxed font-light">
                            <p>
                                Abigail siempre llevó consigo la calidez de su tierra y la profundidad de sus sueños. Su viaje la llevó a cruzar fronteras, pero su esencia permaneció intacta: una mujer de fe que sabía que el amor verdadero valía cada paso del camino.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onNext}
                            className="px-10 py-4 bg-wedding-gold text-black text-xs tracking-[0.3em] uppercase font-bold rounded-sm hover:bg-wedding-gold-light transition-colors"
                        >
                            Continuar
                        </motion.button>
                        <div className="w-16 h-px bg-wedding-gold/20" />
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-wedding-gold/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-wedding-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
    );
}
