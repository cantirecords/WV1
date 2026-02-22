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

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play().catch(e => console.error("Video play failed", e));
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[1000] bg-black flex items-center justify-center p-0 md:p-10"
                >
                    <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center bg-black">
                        <video
                            ref={videoRef}
                            src={videoUrl}
                            className="w-full h-full object-contain md:rounded-2xl"
                            playsInline
                            controls
                            onEnded={onClose}
                        />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
                            <span className="font-sans text-[10px] tracking-[.3em] uppercase text-white/50">
                                El video se cerrará al terminar
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
