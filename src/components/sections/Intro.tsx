"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SwipeButton from "../SwipeButton";
import { Turtle } from "lucide-react";

interface IntroProps {
    onNext: () => void;
    guestName: string;
}

export default function Intro({ onNext, guestName }: IntroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transformations (Faster reveals)
    const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
    const textY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const promptOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[200dvh] bg-black">
            {/* Background & Content Wrapper (Sticky) */}
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
                <motion.video
                    ref={videoRef}
                    style={{ opacity: videoOpacity }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/WV1/propuesta.mp4" type="video/mp4" />
                </motion.video>

                {/* The dynamic darkening overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black"
                />

                {/* Constant gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                {/* Initial "Swipe Up" Prompt - Visible at the very start, disappears on scroll */}
                <motion.div
                    style={{ opacity: promptOpacity }}
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

                {/* 2. Floating Content Layer - Revealed on scroll */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="relative z-20 text-center px-6 max-w-5xl w-full flex flex-col items-center pointer-events-none"
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
                        className="relative flex flex-col items-center gap-8 pointer-events-auto"
                    >
                        {/* Turtle Guide */}
                        <motion.div
                            animate={{
                                y: [10, 0, 10],
                            }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="text-wedding-gold/80 flex flex-col items-center gap-2"
                        >
                            <span className="font-sans text-[8px] tracking-[0.4em] uppercase opacity-60">Arrastra para abrir →</span>
                        </motion.div>

                        <SwipeButton
                            onOpen={onNext}
                            text="Desliza para abrir"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
