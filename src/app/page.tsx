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
    const guestName = searchParams.get("guest") || "Familia";

    const next = () => {
        setStep(s => s + 1);
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    const steps = [
        <Intro key="intro" onNext={next} guestName={guestName} />,
        <StoryTimeline key="story" onNext={next} />,
        <Honors key="honors" onNext={next} />,
        <TheProposal key="proposal" onNext={next} />,
        <Invitation key="invitation" />
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Music starts playing after the first interaction or intro */}
            <MusicPlayer isPlaying={step > 0} />

            <div className="relative w-full">
                <motion.div
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full"
                >
                    {steps[step]}
                </motion.div>
            </div>

            {/* Simple vertical progress indicator on the right */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 px-2 py-4 rounded-full glass border-wedding-gold/10">
                {steps.map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            height: step === i ? 24 : 8,
                            backgroundColor: step === i ? "#c5a059" : "rgba(197, 160, 89, 0.2)"
                        }}
                        className="w-2 rounded-full cursor-pointer transition-all duration-500"
                        onClick={() => {
                            setStep(i);
                            window.scrollTo({ top: 0, behavior: "instant" });
                        }}
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
