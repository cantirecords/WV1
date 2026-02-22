"use client";

import { motion } from "framer-motion";

export default function MagazineStyle({ onNext }: { onNext?: () => void }) {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center p-0 md:p-10 overflow-hidden font-sans">
            {/* Full Height Magazine - 1080x1920 style aspect for mobile focus */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative w-full h-full min-h-screen bg-[#0a0a0a] flex flex-col pt-12 pb-6 px-4 md:p-8"
            >
                {/* 1. Header Fix: Move Arkansas away from the music icon z-index and spacing */}
                <div className="relative z-40 flex justify-between items-start border-b border-wedding-gold/30 pb-4 mb-4">
                    <div className="flex flex-col">
                        <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-wedding-gold/60">Edición Especial</span>
                    </div>
                    {/* Positioned away from the top-right music button */}
                    <div className="text-right pr-12 md:pr-0">
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/80 italic font-serif">Arkansas, USA</span>
                    </div>
                </div>

                {/* 2. Main Title */}
                <div className="relative z-40 text-center mb-4">
                    <h1 className="font-serif text-[15vw] md:text-[120px] leading-[0.8] text-wedding-gold tracking-tighter uppercase font-light italic drop-shadow-2xl">
                        Nuestra <br /> <span className="not-italic font-normal">Boda</span>
                    </h1>
                </div>

                {/* 3. The Visual Center (Photo + Overlays) */}
                <div
                    onClick={onNext}
                    className="relative flex-grow overflow-hidden border border-wedding-gold/20 cursor-pointer group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <img
                        src="/WV1/magazine.jpg?v=4"
                        alt="José & Abigail"
                        className="w-full h-full object-cover"
                    />

                    {/* Shadow Fade Overlay - Fixes visibility for the white sky and white shirts */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />

                    {/* Sky Overlay: "Reserva la fecha" at the top right, "Una vida juntos" lower and larger */}
                    <div className="absolute top-6 right-6 z-20 text-right">
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold drop-shadow-lg">RESERVA LA FECHA</span>
                        <p className="font-serif text-2xl italic text-white drop-shadow-lg">20 de Marzo</p>
                    </div>

                    <div className="absolute top-[25%] left-0 w-full z-20 text-center px-6">
                        <motion.h3
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="text-[14px] md:text-[18px] tracking-[1.2em] uppercase text-white font-light drop-shadow-[0_0_15px_rgba(0,0,0,1)] border-y border-white/20 py-4"
                        >
                            Una Vida Juntos
                        </motion.h3>
                    </div>

                    {/* Names + History: Enhanced with black glow for visibility on white background */}
                    <div className="absolute bottom-10 left-6 z-20 max-w-[70%]">
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-r-xl border-l-4 border-wedding-gold">
                            <h2 className="font-serif text-4xl md:text-6xl italic leading-none text-wedding-gold drop-shadow-lg">
                                José & <br /> Abigail
                            </h2>
                            <p className="text-[11px] md:text-[14px] tracking-[0.3em] uppercase mt-2 font-bold text-white drop-shadow-lg">
                                Nuestra Historia de Amor
                            </p>
                        </div>
                    </div>

                    {/* JUMPING ACTION BUTTON: On the right side/dress area as requested */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-[20%] right-6 z-30"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-wedding-gold text-black shadow-[0_0_30px_rgba(197,160,89,0.5)] border-4 border-white/20">
                                <span className="text-[11px] font-black uppercase tracking-tighter">ABRIR</span>
                            </div>
                            <span className="text-[8px] tracking-[0.3em] text-white font-bold bg-black/60 px-2 py-1 rounded">TOCA AQUÍ</span>
                        </div>
                    </motion.div>
                </div>

                {/* 4. Footer Message */}
                <div className="flex justify-between items-center py-4 z-40">
                    <span className="text-[9px] md:text-[11px] tracking-[0.1em] uppercase font-bold text-wedding-gold italic font-serif">"Lo que Dios une, no lo separa el hombre"</span>
                    <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-wedding-gold/60 ml-4">2026</span>
                </div>
            </motion.div>
        </section>
    );
}
