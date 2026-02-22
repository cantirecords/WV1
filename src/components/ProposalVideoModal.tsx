"use client";

import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProposalVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    onDuck?: (duck: boolean) => void;
}

export default function ProposalVideoModal({ isOpen, onClose, videoUrl, onDuck }: ProposalVideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasDucked, setHasDucked] = React.useState(false);
    const [hasFadedUp, setHasFadedUp] = React.useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            setHasDucked(false);
            setHasFadedUp(false);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => console.error("Video play failed", e));
                }
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
            if (onDuck) onDuck(false); // Ensure music restores if closed manually
        }
    }, [isOpen]);

    const handleTimeUpdate = () => {
        if (!videoRef.current || !onDuck) return;

        const current = videoRef.current.currentTime;

        // Exact timeline user requested for ducking: only between 6s and 10s
        if (current >= 6 && current <= 10) {
            if (!hasDucked) {
                setHasDucked(true);
                onDuck(true); // Fades music to 10%
            }
        } else if (current > 10) {
            if (!hasFadedUp) {
                setHasFadedUp(true);
                onDuck(false); // Fades music back to 100% slowly over 5s
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[1000] bg-black flex items-center justify-center lg:p-10"
                >
                    <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center bg-black overflow-hidden lg:rounded-2xl">
                        {isLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 pointer-events-none">
                                <div className="w-12 h-px bg-wedding-gold animate-pulse" />
                                <span className="font-sans text-[10px] tracking-[.4em] uppercase text-wedding-gold/60 animate-pulse">Cargando momento...</span>
                            </div>
                        )}

                        <video
                            ref={videoRef}
                            src={videoUrl}
                            className="w-full h-full object-contain"
                            playsInline
                            controls
                            preload="auto"
                            onCanPlay={() => setIsLoading(false)}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={onClose}
                        />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-3 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 transition-colors z-30"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
