"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SwipeButton from "../SwipeButton";
import { Turtle } from "lucide-react";

interface IntroProps {
    onNext: () => void;
    guestName: string;
}

export default function Intro({ onNext, guestName }: IntroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isRevealed, setIsRevealed] = React.useState(false);
    const [touchStart, setTouchStart] = React.useState<number | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientY;
        const distance = touchStart - touchEnd;

        // If swiped up more than 50px
        if (distance > 50) {
            setIsRevealed(true);
        }
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            setIsRevealed(true);
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] bg-black overflow-hidden touch-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
        >
            {/* Background Layer */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <motion.video
                    ref={videoRef}
                    animate={{ opacity: isRevealed ? 0.4 : 1 }}
                    transition={{ duration: 1.5 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/WV1/propuesta.mp4" type="video/mp4" />
                </motion.video>

                {/* Darkening overlay when revealed */}
                <motion.div
                    animate={{ opacity: isRevealed ? 0.7 : 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-black pointer-events-none"
                />

                {/* Constant gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

                {/* Initial "Swipe Up" Prompt - Visible at start */}
                <AnimatePresence>
                    {!isRevealed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center z-30 pointer-events-none"
                        >
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-white" />
                                <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-white font-bold">
                                    Desliza hacia arriba ↑
                                </span>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content Layer - Revealed on swipe */}
                <div className="relative z-20 w-full flex flex-col items-center justify-center">
                    <AnimatePresence>
                        {isRevealed && (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-center px-6 max-w-5xl w-full flex flex-col items-center"
                            >
                                <span className="font-sans text-wedding-gold/80 tracking-[0.8em] text-[10px] md:text-xs uppercase mb-8 block font-bold">
                                    NUESTRA BODA CIVIL
                                </span>

                                <div className="relative mb-12">
                                    <h1 className="font-serif text-5xl md:text-[140px] text-white leading-none font-extralight tracking-tighter shadow-black drop-shadow-2xl">
                                        José <span className="gold-text">&</span> Abigail
                                    </h1>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-px bg-wedding-gold/30" />
                                </div>

                                <div className="space-y-4 mb-16">
                                    <p className="font-sans text-white/60 tracking-[0.6em] text-[10px] uppercase">
                                        Hola,
                                    </p>
                                    <h2 className="font-cursive text-6xl md:text-9xl gold-shimmer-text">
                                        {guestName}
                                    </h2>
                                </div>

                                <motion.div
                                    className="relative flex flex-col items-center gap-8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <span className="font-sans text-[8px] tracking-[0.4em] uppercase opacity-60 text-white/60">Arrastra para abrir →</span>

                                    <SwipeButton
                                        onOpen={onNext}
                                        text="Desliza para abrir"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
