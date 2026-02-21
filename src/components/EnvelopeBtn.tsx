"use client";

import { motion } from "framer-motion";
import React from "react";

interface EnvelopeBtnProps {
    onClick: () => void;
    text: string;
    className?: string;
}

export default function EnvelopeBtn({ onClick, text, className = "" }: EnvelopeBtnProps) {
    return (
        <motion.button
            onClick={onClick}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            className={`group relative w-64 h-16 flex items-center justify-center ${className}`}
        >
            {/* Envelope Base (Back) */}
            <div className="absolute inset-0 bg-wedding-gold/10 border border-wedding-gold/30 rounded-lg transition-all duration-500 group-hover:border-wedding-gold/60 shadow-xl" />

            {/* The Letter (Inside) */}
            <div className="absolute inset-x-2 top-2 bottom-2 bg-white/5 rounded-md flex items-center justify-center z-0">
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-wedding-gold font-bold">
                    {text}
                </span>
            </div>

            {/* Envelope Flap (Front) */}
            <motion.div
                variants={{
                    initial: { rotateX: 0 },
                    hover: { rotateX: -110, y: -5 },
                    tap: { scale: 0.98 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute inset-x-0 top-0 h-1/2 bg-[#0a0a0a] border border-wedding-gold/40 rounded-t-lg origin-top z-10 flex items-center justify-center shadow-lg"
            >
                <div className="w-full h-full bg-gradient-to-b from-wedding-gold/10 to-transparent flex items-center justify-center">
                    {/* Sealed wax or subtle icon */}
                    <div className="w-6 h-6 rounded-full border border-wedding-gold/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-wedding-gold/40" />
                    </div>
                </div>
            </motion.div>

            {/* Shadow Bottom */}
            <div className="absolute -bottom-4 w-[90%] h-4 bg-wedding-gold/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
    );
}
