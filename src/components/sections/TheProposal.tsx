"use client";

import React from "react";
import { motion } from "framer-motion";
import SwipeButton from "../SwipeButton";
import { Play } from "lucide-react";
import ProposalVideoModal from "../ProposalVideoModal";

export default function TheProposal({ onNext, onDuck }: { onNext: () => void, onDuck: (duck: boolean) => void }) {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);
    const [hasWatchedVideo, setHasWatchedVideo] = React.useState(false);

    const handleOpenVideo = () => {
        setIsVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
        setHasWatchedVideo(true);
    };

    return (
        <section className="relative h-[100dvh] w-full bg-black flex items-center justify-center overflow-hidden">
            <ProposalVideoModal
                isOpen={isVideoOpen}
                onClose={handleCloseVideo}
                videoUrl="/WV1/ella-dijo-si.mp4"
                onDuck={onDuck}
            />

            {/* Dark Cinematic Photo Background - Simple and High Performance */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/WV1/IMG_0961.JPG"
                    alt="The Proposal"
                    className="w-full h-full object-cover opacity-30"
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
                    className="space-y-8"
                >
                    <p className="font-serif text-2xl md:text-3xl text-white/90 italic font-light leading-relaxed">
                        "En ese momento, rodeados de promesas, le pedí matrimonio... <br className="hidden md:block" />
                        <span className="text-wedding-gold font-normal not-italic tracking-[0.2em] uppercase text-2xl md:text-4xl mt-6 block">y ella dijo que sí.</span>"
                    </p>

                    {!hasWatchedVideo && (
                        <div className="flex justify-center">
                            <motion.button
                                onClick={handleOpenVideo}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-wedding-gold/10 hover:bg-wedding-gold/20 text-wedding-gold border border-wedding-gold/30 px-6 py-3 rounded-full flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                            >
                                <Play size={16} fill="currentColor" />
                                <span className="font-sans text-[10px] tracking-[.3em] uppercase font-bold text-white">Toca para ver el video</span>
                            </motion.button>
                        </div>
                    )}
                </motion.div>

                {hasWatchedVideo && (
                    <div className="flex flex-col items-center gap-8 justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-wedding-gold/60">Arrastra para abrir la invitación →</span>
                            </motion.div>
                            <SwipeButton
                                onOpen={onNext}
                                text="Abrir Invitación"
                                variant="premium"
                            />
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Subtle glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wedding-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}

