"use client";

import { motion } from "framer-motion";

export default function MagazineStyle({ onNext }: { onNext?: () => void }) {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center p-0 md:p-10 overflow-hidden font-sans">
            {/* Full Height Magazine Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative w-full h-full min-h-screen bg-[#060606] flex flex-col pt-14 pb-12 overflow-hidden"
            >
                {/* Consistently styled Magazine Header */}
                <div className="px-6 flex justify-between items-end border-b border-wedding-gold/30 pb-4 mb-6 z-40">
                    <div className="flex flex-col">
                        <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/60">Edición Especial de Boda</span>
                        <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/40">No. 01 / 2026</span>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/60 italic font-serif">Arkansas / USA</span>
                    </div>
                </div>

                {/* Gold Inner Border with Shimmer Option A */}
                <div className="absolute inset-4 md:inset-8 border border-wedding-gold/20 pointer-events-none z-10 gold-shimmer-border" />

                {/* Massive Title - Spanish */}
                <div className="relative z-40 text-center mb-6">
                    <h1 className="font-serif text-[12vw] md:text-[110px] leading-[0.8] text-wedding-gold tracking-tighter uppercase font-light italic">
                        Nuestra <br /> <span className="not-italic font-normal">Boda</span>
                    </h1>
                </div>

                {/* Main Photo Container */}
                <div className="relative flex-grow overflow-hidden group border border-wedding-gold/20">
                    {/* Centered Overlays in the Sky Area */}
                    <div className="absolute top-[15%] left-0 right-0 z-40 flex flex-col items-center text-center space-y-4 px-4 pointer-events-none">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold text-white shadow-black drop-shadow-lg"
                        >
                            Una Vida Juntos
                        </motion.span>

                        <div className="flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold text-wedding-gold mb-2"
                            >
                                Reserva la Fecha
                            </motion.span>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="font-serif text-4xl md:text-6xl italic text-white shadow-black drop-shadow-2xl"
                            >
                                20 de Marzo
                            </motion.p>
                        </div>
                    </div>

                    <img
                        src="/WV1/magazine.jpg?v=4"
                        alt="José & Abigail"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none z-30" />

                    {/* Left Bottom: Names (Option A: Shimmer) */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        <motion.h2
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="font-serif text-3xl md:text-6xl italic leading-none gold-shimmer-text py-2"
                        >
                            José & <br /> Abigail
                        </motion.h2>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-[10px] md:text-xs tracking-[0.4em] uppercase mt-4 font-bold border-l-2 border-wedding-gold pl-4 text-white/90"
                        >
                            Nuestra Historia de Amor
                        </motion.p>
                    </div>
                    {/* JUMPING ACTION BUTTON */}
                    <motion.div
                        onClick={onNext}
                        animate={{
                            scale: [1, 1.1, 1],
                            y: [0, -8, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-8 right-6 z-30 cursor-pointer"
                    >
                        <div className="flex flex-col items-center gap-1 group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-wedding-gold text-black shadow-[0_0_25px_rgba(197,160,89,0.3)] border-2 border-white/20">
                                <span className="text-[10px] font-black uppercase tracking-tighter">ABRIR</span>
                            </div>
                            <span className="text-[7px] tracking-[0.2em] text-white/50 font-bold uppercase py-1">Toca Aquí</span>
                        </div>
                    </motion.div>
                </div>

                {/* 4. Footer Verse */}
                <div className="px-6 py-6 text-center z-40">
                    <p className="text-[9px] md:text-[11px] tracking-[0.3em] uppercase font-bold text-wedding-gold italic font-serif opacity-60">
                        "Lo que Dios une, no lo separa el hombre"
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
