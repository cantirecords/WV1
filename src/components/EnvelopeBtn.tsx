"use client";

import { motion } from "framer-motion";
import React from "react";
import { Heart } from "lucide-react";

interface EnvelopeBtnProps {
    onClick: () => void;
    text: string;
    className?: string;
    variant?: "default" | "premium";
}

export default function EnvelopeBtn({ onClick, text, className = "", variant = "default" }: EnvelopeBtnProps) {
    const isPremium = variant === "premium";

    return (
        <motion.button
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            className={`group relative w-64 h-16 flex items-center justify-center ${className}`}
        >
            {/* Glow effect for premium */}
            {isPremium && (
                <div className="absolute inset-0 bg-wedding-gold/20 blur-[20px] rounded-full opacity-50 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
            )}

            {/* Envelope Base (Back) */}
            <div className={`absolute inset-0 rounded-lg transition-all duration-500 shadow-xl 
                ${isPremium
                    ? "bg-wedding-gold/20 border-2 border-wedding-gold group-hover:shadow-[0_0_30px_rgba(197,160,89,0.4)]"
                    : "bg-wedding-gold/10 border border-wedding-gold/30 group-hover:border-wedding-gold/60"}
            `} />

            {/* The Letter (Inside) */}
            <div className={`absolute inset-x-2 top-2 bottom-2 rounded-md flex items-center justify-center z-0 transition-colors
                ${isPremium ? "bg-white/10" : "bg-white/5"}
            `}>
                <div className="flex flex-col items-center gap-1">
                    <motion.div
                        variants={{
                            initial: { opacity: 0, scale: 0.5 },
                            hover: { opacity: 1, scale: 1, y: -2 }
                        }}
                    >
                        <Heart size={16} className="text-wedding-gold fill-wedding-gold animate-pulse" />
                    </motion.div>
                    <span className={`font-sans text-[10px] tracking-[0.4em] uppercase font-bold 
                        ${isPremium ? "text-white" : "text-wedding-gold"}
                    `}>
                        {text}
                    </span>
                </div>
            </div>

            {/* Envelope Flap (Front) */}
            <motion.div
                variants={{
                    initial: { rotateX: 0 },
                    hover: { rotateX: -110, y: -5 },
                    tap: { scale: 0.98 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`absolute inset-x-0 top-0 h-1/2 border rounded-t-lg origin-top z-10 flex items-center justify-center shadow-lg transition-colors
                    ${isPremium
                        ? "bg-wedding-gold border-wedding-gold"
                        : "bg-[#0a0a0a] border-wedding-gold/40"}
                `}
            >
                <div className="w-full h-full bg-gradient-to-b from-white/10 to-transparent flex flex-col items-center justify-center gap-1">
                    <span className={`font-sans text-[8px] tracking-[0.3em] uppercase font-bold
                         ${isPremium ? "text-black" : "text-wedding-gold/40"}
                    `}>
                        Abrir
                    </span>
                    {/* Sealed wax or subtle icon */}
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center
                        ${isPremium ? "border-black/20" : "border-wedding-gold/20"}
                    `}>
                        <div className={`w-1 h-1 rounded-full 
                            ${isPremium ? "bg-black/40" : "bg-wedding-gold/40"}
                        `} />
                    </div>
                </div>
            </motion.div>

            {/* Shadow Bottom */}
            <div className={`absolute -bottom-4 w-[90%] h-4 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity
                ${isPremium ? "bg-wedding-gold/20" : "bg-wedding-gold/5"}
            `} />
        </motion.button>
    );
}
