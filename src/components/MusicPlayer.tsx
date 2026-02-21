"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ isPlaying: shouldPlay }: { isPlaying: boolean }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (shouldPlay && !isPlaying && !hasInteracted) {
            audioRef.current?.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                // Browser blocked autoplay
            });
        }
    }, [shouldPlay]);

    const togglePlay = () => {
        setHasInteracted(true);
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed top-6 right-6 z-[200]">
            <audio
                ref={audioRef}
                loop
                src="/cancion.mp3"
            />

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`group relative w-12 h-12 flex items-center justify-center rounded-full glass border transition-all duration-700 ${isPlaying ? 'border-wedding-gold/60' : 'border-white/10'}`}
            >
                {isPlaying && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0.3 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border border-wedding-gold"
                    />
                )}

                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="on"
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 45 }}
                        >
                            <Volume2 size={18} className="text-wedding-gold" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="off"
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 45 }}
                        >
                            <VolumeX size={18} className="text-white/40" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    <circle
                        cx="24"
                        cy="24"
                        r="23"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className={`${isPlaying ? 'text-wedding-gold/20' : 'text-white/5'}`}
                    />
                </svg>
            </motion.button>
        </div>
    );
}
