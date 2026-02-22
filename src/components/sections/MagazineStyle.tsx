"use client";

import { motion } from "framer-motion";

export default function MagazineStyle({ onNext, guestName }: { onNext?: () => void, guestName?: string }) {
    return (
        <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center p-0 md:p-10 overflow-hidden font-sans">
            {/* Full Height Magazine Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative w-full h-full min-h-screen bg-[#060606] flex flex-col pt-14 pb-12 overflow-hidden"
            >
                {/* 1. Header: Minimalist and out of the way */}
                <div className="px-6 flex justify-between items-center mb-4 z-40">
                    <div className="flex flex-col">
                        <span className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase font-bold text-wedding-gold/40">Edición Especial No. 01</span>
                        {guestName && guestName !== "Familia" && (
                            <span className="text-[7px] md:text-[8px] tracking-[0.3em] uppercase text-wedding-gold font-bold">Para: {guestName}</span>
                        )}
                    </div>
                    <span className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase font-bold text-wedding-gold/80 italic font-serif pr-14 md:pr-0">Arkansas, USA</span>
                </div>

                {/* 2. Main Title: High placement */}
                <div className="relative z-40 text-center mb-2 px-4">
                    <h1 className="font-serif text-[12vw] md:text-[100px] leading-[0.8] text-wedding-gold tracking-tighter uppercase font-light italic drop-shadow-2xl">
                        Nuestra <br /> <span className="not-italic font-normal">Boda</span>
                    </h1>
                </div>

                {/* 3. The Visual Center (Photo + Overlays) */}
                <div
                    onClick={onNext}
                    className="relative flex-grow mx-4 overflow-hidden rounded-sm border border-wedding-gold/10 cursor-pointer group shadow-[0_30px_60px_-15px_rgba(0,0,0,1)]"
                >
                    <img
                        src="/WV1/magazine.jpg?v=4"
                        alt="José & Abigail"
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
                    />

                    {/* Shadow Gradients: Focused only on top/bottom edges to keep faces clear */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-[40%] via-transparent to-black/80 z-10" />

                    {/* Centered Sky Overlays: Una Vida Juntos -> Reserva la fecha -> 20 de Marzo */}
                    <div className="absolute top-10 left-0 w-full z-20 text-center px-4 flex flex-col gap-3">
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 0.8, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-[10px] md:text-[14px] tracking-[1.2em] uppercase text-white font-light drop-shadow-lg"
                        >
                            Una Vida Juntos
                        </motion.span>

                        <div className="space-y-1">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-[8px] tracking-[0.4em] uppercase font-bold text-wedding-gold/90 block drop-shadow-md"
                            >
                                Reserva la Fecha
                            </motion.span>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                                className="font-serif text-3xl md:text-5xl italic text-white drop-shadow-xl"
                            >
                                20 de Marzo
                            </motion.p>
                        </div>
                    </div>

                    {/* Names: Corner, avoiding faces */}
                    <div className="absolute bottom-6 left-6 z-20">
                        <div className="border-l-2 border-wedding-gold/50 pl-4">
                            <h2 className="font-serif text-3xl md:text-6xl italic leading-none text-white drop-shadow-lg">
                                <span className="gold-shimmer-text not-italic">José &</span> <br />
                                <span className="gold-shimmer-text">Abigail</span>
                            </h2>
                            <p className="text-[10px] tracking-[0.3em] uppercase mt-2 font-bold text-wedding-gold/60">
                                Nuestra Historia de Amor
                            </p>
                        </div>
                    </div>

                    {/* JUMPING ACTION BUTTON */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            y: [0, -8, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-8 right-6 z-30"
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
