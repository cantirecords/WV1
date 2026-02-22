"use client";

import { useState, Suspense, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "@/components/sections/Intro";
import StoryTimeline from "@/components/sections/StoryTimeline";
import TheProposal from "@/components/sections/TheProposal";
import Honors from "@/components/sections/Honors";
import Invitation from "@/components/sections/Invitation";
import MagazineStyle from "@/components/sections/MagazineStyle";
import MusicPlayer from "@/components/MusicPlayer";
import { useSearchParams } from "next/navigation";

function WeddingExperience() {
    const [step, setStep] = useState(0);
    const [isDucked, setIsDucked] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const searchParams = useSearchParams();
    const guestName = searchParams.get("guest") || "Familia";

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Persistent play enforcer: iOS pauses background audio when the video starts. 
        // This instantly resumes the background audio so it flows naturally with the video.
        const retryPlayInterval = setInterval(() => {
            if (audio.paused && audio.dataset.userPlaying === 'true') {
                audio.play().catch(() => { });
            }
        }, 300);

        const targetVolume = isDucked ? 0.25 : 1.0;
        const startVolume = audio.volume;
        // Duck quickly (1s), fade up slower (4s)
        const duration = isDucked ? 1000 : 4000;
        const startTime = performance.now();
        let animationFrame: number;

        const animateVolume = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - (1 - progress) * (1 - progress);

            audio.volume = startVolume + (targetVolume - startVolume) * ease;

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animateVolume);
            }
        };

        animationFrame = requestAnimationFrame(animateVolume);
        return () => {
            cancelAnimationFrame(animationFrame);
            if (retryPlayInterval) clearInterval(retryPlayInterval);
        };
    }, [isDucked]);

    const next = () => {
        setStep(s => s + 1);
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    const steps = [
        <Intro key="intro" onNext={next} guestName={guestName} />,
        <StoryTimeline key="story" onNext={next} />,
        <Honors key="honors" onNext={next} />,
        <TheProposal key="proposal" onNext={next} onDuck={setIsDucked} />,
        <MagazineStyle key="magazine" onNext={next} guestName={guestName} />,
        <Invitation key="invitation" />
    ];

    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* Option 2: Gold Dust Particles Atmosphere */}
            <div className="gold-dust-container">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="gold-dust"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

            {/* Music starts playing after the first interaction or intro */}
            <MusicPlayer isPlaying={step > 0} externalAudioRef={audioRef} />

            <div className="relative w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{
                            duration: 1.5,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                        className="w-full"
                    >
                        {steps[step]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Restoring Hearts Progress Indicator */}
            <div className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 px-1.5 py-6 rounded-full glass border-wedding-gold/10">
                {steps.map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: step === i ? 1.2 : 1,
                        }}
                        className="relative cursor-pointer flex items-center justify-center w-4 h-4"
                        onClick={() => {
                            setStep(i);
                            window.scrollTo({ top: 0, behavior: "instant" });
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {step === i ? (
                                <motion.div
                                    key="heart"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="text-wedding-gold text-xs"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 drop-shadow-[0_0_5px_rgba(197,160,89,0.8)]">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="dot"
                                    initial={{ opacity: 0.2 }}
                                    animate={{
                                        opacity: i < step ? 0.6 : 0.2,
                                        backgroundColor: i < step ? "#c5a059" : "rgba(197, 160, 89, 0.2)"
                                    }}
                                    className="w-1.5 h-1.5 rounded-full"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
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
