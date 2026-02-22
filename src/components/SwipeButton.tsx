"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { ChevronRight, Heart } from "lucide-react";

interface SwipeButtonProps {
    onOpen: () => void;
    text: string;
    variant?: "default" | "premium";
    className?: string;
}

export default function SwipeButton({ onOpen, text, variant = "default", className = "" }: SwipeButtonProps) {
    const isPremium = variant === "premium";
    const [isUnlocked, setIsUnlocked] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // The width of the draggable thumb
    const THUMB_SIZE = 56;

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const x = useMotionValue(0);
    const controls = useAnimation();

    // Calculate progress from 0 to 1
    const progress = useTransform(x, [0, Math.max(0, containerWidth - THUMB_SIZE)], [0, 1]);

    // Visual transformations based on drag
    const textOpacity = useTransform(progress, [0, 0.5], [1, 0]);
    const trackBackground = useTransform(
        progress,
        [0, 1],
        isPremium
            ? ["rgba(197,160,89,0.1)", "rgba(197,160,89,0.3)"]
            : ["rgba(255,255,255,0.05)", "rgba(197,160,89,0.2)"]
    );

    const handleDragEnd = async () => {
        const currentX = x.get();
        const maxDrag = containerWidth - THUMB_SIZE;
        const threshold = maxDrag * 0.5; // Lower to 50% for easier unlock on mobile

        if (currentX >= threshold) {
            setIsUnlocked(true);

            // Fire event immediately
            onOpen();

            await controls.start({ x: maxDrag, transition: { type: "spring", stiffness: 300, damping: 20 } });

            // Reset quickly without animation behind the scene if they come back
            setTimeout(() => {
                setIsUnlocked(false);
                x.set(0);
            }, 500);
        } else {
            // Snap back
            controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
        }
    };

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {isPremium && (
                <div className="absolute inset-0 bg-wedding-gold/20 blur-[20px] rounded-full opacity-50 animate-pulse pointer-events-none" />
            )}

            <motion.div
                ref={containerRef}
                style={{ background: trackBackground }}
                className={`relative w-64 md:w-72 h-16 rounded-full flex items-center overflow-hidden shadow-2xl backdrop-blur-sm border
                    ${isPremium ? "border-wedding-gold/50" : "border-white/10"}
                `}
            >
                {/* Background Text */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-0 flex items-center justify-center pl-10 pointer-events-none"
                >
                    <span className={`font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold
                         ${isPremium ? "text-wedding-gold" : "text-white/60"}
                    `}>
                        {isUnlocked ? "Abriendo..." : text}
                    </span>
                </motion.div>

                {/* Draggable Thumb */}
                <motion.div
                    drag={isUnlocked ? false : "x"}
                    dragConstraints={containerRef}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    style={{
                        width: THUMB_SIZE - 8,
                        height: THUMB_SIZE - 8,
                        x
                    }}
                    animate={controls}
                    whileTap={{ scale: 0.95 }}
                    className={`absolute left-1 flex items-center justify-center rounded-full cursor-grab active:cursor-grabbing z-10 shadow-lg
                        ${isPremium ? "bg-wedding-gold" : "bg-white"}
                    `}
                >
                    {isUnlocked ? (
                        <Heart className={isPremium ? "text-black fill-black" : "text-wedding-gold fill-wedding-gold"} size={20} />
                    ) : (
                        <ChevronRight className={isPremium ? "text-black" : "text-black"} size={24} />
                    )}
                </motion.div>

                {/* Shimmer effect on track */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            </motion.div>
        </div>
    );
}
