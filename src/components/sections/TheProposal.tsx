"use client";

import React from "react";
import { motion } from "framer-motion";
import SwipeButton from "../SwipeButton";

export default function TheProposal({ onNext }: { onNext: () => void }) {
    return (
        <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
            {/* Dark Cinematic Photo Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/WV1/IMG_0961.JPG"
                    alt="The Proposal"
                    className="w-full h-full object-cover opacity-40 animate-kenburns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl space-y-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="space-y-4"
                >
                    <span className="font-sans text-wedding-gold tracking-[0.8em] text-[10px] uppercase font-bold">UNA FECHA PARA SIEMPRE</span>
                    <h2 className="font-serif text-5xl md:text-8xl text-white font-extralight tracking-tight leading-none">
                        Septiembre 21, <em className="gold-text not-italic">2025</em>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="space-y-12"
                >
                    <p className="font-serif text-2xl md:text-4xl text-white/90 italic font-light leading-relaxed">
                        "En ese momento, rodeados de promesas, le pedí matrimonio... <br className="hidden md:block" />
                        <span className="text-wedding-gold font-normal not-italic tracking-[0.2em] uppercase text-4xl md:text-6xl mt-6 block">y ella dijo que sí.</span>"
                    </p>

                    <div className="w-24 h-px bg-wedding-gold/30 mx-auto" />

                    <p className="font-sans text-white/50 text-xs md:text-sm tracking-[0.4em] leading-loose uppercase">
                        Un nuevo capítulo comenzó bajo la bendición de Dios.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center gap-8 justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-wedding-gold/60">Arrastra para abrir →</span>
                        </motion.div>
                        <SwipeButton
                            onOpen={onNext}
                            text="Nuestra Invitación"
                            variant="premium"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Subtle glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wedding-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
