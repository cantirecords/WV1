"use client";

import { motion } from "framer-motion";

export default function MagazineStyle({ onNext }: { onNext?: () => void }) {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start py-8 px-4 md:p-10 overflow-y-auto overflow-x-hidden font-sans">
            {/* Magazine Frame - Now Dark Theme */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative w-full max-w-4xl bg-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-wedding-gold/10 flex flex-col p-4 md:p-8 mb-12"
            >
                {/* Gold Inner Border */}
                <div className="absolute inset-2 md:inset-8 border border-wedding-gold/20 pointer-events-none z-10" />

                {/* Top Header - Spanish */}
                <div className="flex justify-between items-end border-b border-wedding-gold/30 pb-3 mb-4 md:mb-6 z-20">
                    <div className="flex flex-col">
                        <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-wedding-gold/60">Edición Especial de Boda</span>
                        <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-wedding-gold/40">No. 01 / 2026</span>
                    </div>
                    <div className="text-right">
                        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-wedding-gold/60 italic font-serif">Arkansas / USA</span>
                    </div>
                </div>

                {/* Massive Title - Spanish */}
                <div className="relative z-20 text-center mb-4 md:mb-6">
                    <h1 className="font-serif text-[14vw] md:text-[110px] leading-[0.8] text-wedding-gold tracking-tighter uppercase font-light italic">
                        Nuestra <br /> <span className="not-italic font-normal">Boda</span>
                    </h1>
                </div>

                {/* Main Photo Container */}
                <div className="relative aspect-[3/4] md:flex-grow overflow-hidden group border border-wedding-gold/20">
                    <img
                        src="/WV1/magazine.jpg?v=4"
                        alt="José & Abigail"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                    />

                    {/* Sky Overlay Text (Elegant and Minimalist) */}
                    <div className="absolute top-8 left-0 w-full z-30 text-center pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="space-y-2"
                        >
                            <span className="block text-[8px] md:text-[10px] tracking-[0.8em] text-white font-bold drop-shadow-lg">UNA VIDA JUNTOS</span>
                            <div className="w-6 h-px bg-wedding-gold mx-auto opacity-50" />
                        </motion.div>
                    </div>

                    {/* Overlay Text elements - Bottom Left */}
                    <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-30 text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
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
                            className="text-[9px] md:text-[12px] tracking-[0.2em] uppercase mt-3 font-bold border-l-2 border-wedding-gold pl-3 text-white/90"
                        >
                            Nuestra Historia de Amor
                        </motion.p>
                    </div>

                    {/* Overlay Text elements - Top Right */}
                    <div className="absolute top-4 right-4 md:top-10 md:right-10 z-30 text-white text-right drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
                        <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-wedding-gold/80">RESERVA LA FECHA</span>
                        <p className="font-serif text-lg md:text-2xl italic text-white leading-tight">20 de Marzo</p>
                    </div>
                </div>

                {/* Bottom Footer Tags */}
                <div className="flex justify-between items-center mt-4 md:mt-6 z-20 pt-3 border-t border-wedding-gold/20">
                    <span className="text-[8px] md:text-[10px] tracking-[0.1em] uppercase font-bold text-wedding-gold/80 italic font-serif">"Lo que Dios une, no lo separa el hombre"</span>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="w-6 md:w-16 h-px bg-wedding-gold/30" />
                        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-wedding-gold/60">2026</span>
                    </div>
                </div>
            </motion.div>

            {/* Navigation Button - Now consistent and ALWAYS visible below the magazine */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-full max-w-md pb-12"
            >
                <button
                    onClick={onNext}
                    className="w-full flex flex-col items-center gap-4 group"
                >
                    <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-wedding-gold font-black group-hover:text-white transition-colors duration-300">
                        Abrir Invitación Oficial
                    </span>
                    <div className="w-14 h-14 rounded-full border border-wedding-gold/30 flex items-center justify-center group-hover:bg-wedding-gold group-hover:border-wedding-gold transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.1)]">
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-wedding-gold group-hover:text-black"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                        </motion.div>
                    </div>
                </button>
            </motion.div>
        </section>
    );
}
