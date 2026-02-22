"use client";

import { motion } from "framer-motion";

export default function MagazineStyle({ onNext }: { onNext?: () => void }) {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-10 overflow-hidden font-sans">
            {/* Magazine Frame - Now Dark Theme */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/5] bg-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-wedding-gold/10 flex flex-col p-4 md:p-8"
            >
                {/* Gold Inner Border */}
                <div className="absolute inset-4 md:inset-8 border border-wedding-gold/20 pointer-events-none z-10" />

                {/* Top Header - Spanish */}
                <div className="flex justify-between items-end border-b border-wedding-gold/30 pb-4 mb-6 z-20">
                    <div className="flex flex-col">
                        <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/60">Edición Especial de Boda</span>
                        <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/40">No. 01 / 2026</span>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/60 italic font-serif">Arkansas / USA</span>
                    </div>
                </div>

                {/* Massive Title - Spanish */}
                <div className="relative z-20 text-center mb-6">
                    <h1 className="font-serif text-[12vw] md:text-[110px] leading-[0.8] text-wedding-gold tracking-tighter uppercase font-light italic">
                        Nuestra <br /> <span className="not-italic font-normal">Boda</span>
                    </h1>
                </div>

                {/* Main Photo Container */}
                <div className="relative flex-grow overflow-hidden group border border-wedding-gold/20">
                    <img
                        src="/WV1/magazine.JPG"
                        alt="José & Abigail"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                    />

                    {/* Overlay Text elements */}
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        <motion.h2
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="font-serif text-3xl md:text-6xl italic leading-none text-wedding-gold"
                        >
                            José & <br /> Abigail
                        </motion.h2>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase mt-4 font-bold border-l-2 border-wedding-gold pl-4 text-white/90"
                        >
                            Nuestra Historia de Amor
                        </motion.p>
                    </div>

                    <div className="absolute top-6 right-6 md:top-10 md:right-10 z-30 text-white text-right drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-wedding-gold/80">RESERVA LA FECHA</span>
                        <p className="font-serif text-xl md:text-2xl italic text-white">20 de Marzo</p>
                    </div>
                </div>

                {/* Bottom Footer Tags */}
                <div className="flex justify-between items-center mt-6 z-20 pt-4 border-t border-wedding-gold/20">
                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-wedding-gold/80 italic font-serif">"Lo que Dios une, no lo separa el hombre"</span>
                    <div className="flex items-center gap-4">
                        <div className="w-8 md:w-16 h-px bg-wedding-gold/30" />
                        <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-wedding-gold/60">2026</span>
                    </div>
                </div>
            </motion.div>

            {/* Navigation Button - Spanish */}
            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onClick={onNext}
                className="mt-12 px-12 py-4 bg-wedding-gold text-black text-[10px] tracking-[0.5em] uppercase font-black hover:bg-white transition-all duration-500 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.4)]"
            >
                Abrir Invitación
            </motion.button>
        </section>
    );
}
