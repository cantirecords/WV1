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
    const [showEndingHeart, setShowEndingHeart] = React.useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            setHasDucked(false);
            setHasFadedUp(false);
            setShowEndingHeart(false);
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
    }, [isOpen, onDuck]);

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;

        const current = videoRef.current.currentTime;
        const duration = videoRef.current.duration || 100;

        if (onDuck) {
            // Fade UP 2 seconds before the specific heart transition starts
            if (duration > 0 && current >= duration - 2 && !hasFadedUp) {
                setHasFadedUp(true);
                onDuck(false); // Fades music back to 100%
            }
        }

        // Hide glitch by triggering the love transition 0.5s before end
        if (duration > 0 && current >= duration - 0.5) {
            if (!showEndingHeart) {
                setShowEndingHeart(true);
                // Manually trigger close after transition plays slightly
                setTimeout(() => {
                    onClose();
                }, 1000); // 1 second heart transiton before modal disappears
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
                            controls={!showEndingHeart}
                            preload="auto"
                            onCanPlay={() => setIsLoading(false)}
                            onTimeUpdate={handleTimeUpdate}
                        />

                        {/* Beautiful Heart / Cloud Ending Transition */}
                        <AnimatePresence>
                            {showEndingHeart && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: [1, 1.2], opacity: [0, 1, 0.8] }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="relative flex items-center justify-center w-full h-full"
                                    >
                                        <div className="absolute w-64 h-64 bg-wedding-gold/30 rounded-full blur-[100px]" />
                                        <svg
                                            className="w-40 h-40 text-wedding-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.5)]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

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
