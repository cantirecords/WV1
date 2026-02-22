"use client";

import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProposalVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

export default function ProposalVideoModal({ isOpen, onClose, videoUrl }: ProposalVideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(e => console.error("Video play failed", e));
            }
        }
    }, [isOpen]);

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
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
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
