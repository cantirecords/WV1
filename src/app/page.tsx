"use client";

import { useState, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "@/components/sections/Intro";
import StoryTimeline from "@/components/sections/StoryTimeline";
import TheProposal from "@/components/sections/TheProposal";
import Honors from "@/components/sections/Honors";
import Invitation from "@/components/sections/Invitation";
import MusicPlayer from "@/components/MusicPlayer";
import { useSearchParams } from "next/navigation";

function WeddingExperience() {
    const [step, setStep] = useState(0);
    const searchParams = useSearchParams();
    const guestName = searchParams.get("guest") || "Familia y Amigos";

    const next = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setStep(s => s + 1);
    };

    const steps = [
        <Intro key="intro" onNext={next} guestName={guestName} />,
        <StoryTimeline key="story" onNext={next} />,
        <TheProposal key="proposal" onNext={next} />,
        <Honors key="honors" onNext={next} />,
        <Invitation key="invitation" />
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Music starts playing after the first interaction or intro */}
            <MusicPlayer isPlaying={step > 0} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {steps[step]}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Progress Dots */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex gap-3 px-6 py-3 rounded-full glass border-wedding-gold/10">
                {steps.map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            width: step === i ? 24 : 8,
                            backgroundColor: step === i ? "#c5a059" : "rgba(197, 160, 89, 0.2)"
                        }}
                        className="h-2 rounded-full cursor-pointer transition-all duration-500"
                        onClick={() => setStep(i)}
                    />
                ))}
            </div>

            {/* Cinematic Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[150] border-[40px] md:border-[80px] border-black opacity-10" />
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <Suspense fallback={
                <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-6">
                    <div className="w-16 h-px bg-wedding-gold animate-pulse" />
                    <span className="font-sans text-wedding-gold/60 tracking-[0.8em] text-[10px] uppercase animate-pulse">Cargando Experiencia</span>
                </div>
            }>
                <WeddingExperience />
            </Suspense>
        </main>
    );
}
