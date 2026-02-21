"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Meeting({ onNext }: { onNext: () => void }) {
    return (
        <section className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center py-32 px-6 overflow-hidden">
            <div className="max-w-4xl w-full text-center space-y-16">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="space-y-6"
                >
                    <span className="sans-font text-wedding-gold/60 tracking-[0.8em] text-[10px] uppercase font-bold">Nuestra Promesa</span>
                    <h2 className="serif-font text-5xl md:text-[100px] text-white leading-none font-light italic">
                        El Encuentro
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    <div className="space-y-4">
                        <div className="serif-font text-4xl text-wedding-gold font-light">7</div>
                        <div className="sans-font text-[10px] tracking-[0.5em] text-white/50 uppercase">Años Juntos</div>
                    </div>
                    <div className="space-y-4">
                        <div className="serif-font text-4xl text-wedding-gold font-light">Uno</div>
                        <div className="sans-font text-[10px] tracking-[0.5em] text-white/50 uppercase">Mismo Destino</div>
                    </div>
                    <div className="space-y-4">
                        <div className="serif-font text-4xl text-wedding-gold font-light">∞</div>
                        <div className="sans-font text-[10px] tracking-[0.5em] text-white/50 uppercase">Toda una Vida</div>
                    </div>
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="space-y-8"
                >
                    <p className="serif-font text-2xl md:text-4xl text-white/80 italic font-light leading-relaxed max-w-2xl mx-auto">
                        "Lo que Dios unió, nada en este mundo podrá jamás separarlo."
                    </p>
                    <footer className="sans-font text-wedding-gold tracking-[0.4em] text-xs uppercase font-bold opacity-70">
                        Nuestra Historia
                    </footer>
                </motion.blockquote>

                <motion.button
                    onClick={onNext}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-6 px-12 py-5 bg-white text-black text-xs tracking-[0.4em] uppercase font-heavy transition-all hover:bg-wedding-gold"
                >
                    <span>Ver Invitación</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </motion.button>
            </div>

            {/* Decorations */}
            <div className="absolute top-1/2 left-0 w-64 h-[1px] bg-gradient-to-r from-transparent to-wedding-gold/20" />
            <div className="absolute top-1/2 right-0 w-64 h-[1px] bg-gradient-to-l from-transparent to-wedding-gold/20" />
        </section>
    );
}
