"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, UtensilsCrossed } from "lucide-react";
import Gallery from "./Gallery";
import confetti from "canvas-confetti";

export default function Invitation() {
    const weddingDate = new Date("2026-03-20T11:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = weddingDate - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const countdownItems = [
        { label: "Días", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Seg", value: timeLeft.seconds },
    ];

    const details = [
        {
            icon: MapPin,
            label: "Lugar",
            value: "City Hall (Boda Civil)",
            sub: "Arkansas, USA"
        },
        {
            icon: Clock,
            label: "Ceremonia",
            value: "11:00 AM",
            sub: "Licencia y Firma"
        },
        {
            icon: UtensilsCrossed,
            label: "Almuerzo",
            value: "12:00 PM",
            sub: "Celebración Íntima"
        }
    ];

    const triggerConfetti = () => {
        const duration = 4000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#c5a059', '#ffffff', '#8e6d31', '#f3e7ad']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#c5a059', '#ffffff', '#8e6d31', '#f3e7ad']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
    const dayLabels = ["D", "L", "M", "M", "J", "V", "S"];

    return (
        <section className="relative w-full bg-black py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-32 relative z-10">

                {/* Visual Header */}
                <div className="text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="space-y-6"
                    >
                        <h2 className="font-serif text-6xl md:text-[140px] text-white font-extralight tracking-tight leading-none">
                            Te <em className="gold-text not-italic">invitamos.</em>
                        </h2>
                        <div className="flex items-center justify-center gap-6">
                            <div className="h-px w-24 bg-wedding-gold/30" />
                            <span className="font-sans text-white/50 tracking-[0.5em] text-[10px] uppercase font-bold">Nuestra Boda Civil</span>
                            <div className="h-px w-24 bg-wedding-gold/30" />
                        </div>
                    </motion.div>

                    <p className="font-serif italic text-white/60 text-xl md:text-3xl font-light max-w-2xl mx-auto">
                        "Es un momento pequeño e íntimo, pero el más grande de nuestras vidas."
                    </p>
                </div>

                {/* ANIMATED COUNTDOWN */}
                <div className="flex justify-center gap-4 md:gap-8 pt-10">
                    {countdownItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                            className="text-center"
                        >
                            <div className="glass w-20 h-24 md:w-32 md:h-40 flex flex-col items-center justify-center rounded-2xl mb-4 border-wedding-gold/20 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-wedding-gold/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="font-serif text-3xl md:text-6xl text-white font-light relative z-10">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </div>
                            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.6em] text-wedding-gold/60 uppercase font-bold">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* ANIMATED CALENDAR: March 2026 */}
                <div className="max-w-md mx-auto pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="glass p-8 md:p-12 rounded-[40px] border border-wedding-gold/20 shadow-2xl space-y-8"
                    >
                        <div className="text-center">
                            <h3 className="font-serif text-3xl text-white font-light tracking-wide uppercase">Marzo <span className="gold-text italic">2026</span></h3>
                        </div>

                        <div className="grid grid-cols-7 gap-2 text-center">
                            {dayLabels.map((day, idx) => (
                                <div key={idx} className="font-sans text-wedding-gold/50 text-xs font-bold md:mb-4">{day}</div>
                            ))}
                            {calendarDays.map(day => {
                                const isTargetDate = day === 20;
                                return (
                                    <div key={day} className="relative aspect-square flex items-center justify-center">
                                        {isTargetDate ? (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.8 }}
                                                className="absolute inset-0 m-1 rounded-full bg-wedding-gold flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.5)]"
                                            >
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="absolute inset-0 rounded-full border border-wedding-gold/50"
                                                />
                                                <span className="font-serif text-black font-bold text-lg md:text-xl z-10">{day}</span>
                                            </motion.div>
                                        ) : (
                                            <span className="font-serif text-white/40 text-sm md:text-base font-light">{day}</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                    {details.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="glass p-10 rounded-[30px] text-center space-y-6 hover:translate-y-[-10px] hover:border-wedding-gold/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto">
                                <item.icon className="text-wedding-gold" size={20} />
                            </div>
                            <div className="space-y-2">
                                <span className="font-sans text-wedding-gold/60 tracking-[0.4em] text-[9px] uppercase font-bold">{item.label}</span>
                                <h3 className="font-serif text-2xl text-white font-light">{item.value}</h3>
                                <p className="font-sans text-white/40 text-[11px] tracking-widest uppercase">{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Title */}
                <div className="text-center space-y-8 pt-20">
                    <span className="font-sans text-wedding-gold/40 tracking-[0.8em] text-[10px] uppercase font-bold">GALERÍA</span>
                    <h3 className="font-serif text-4xl md:text-7xl text-white font-extralight italic">Instantes previos.</h3>
                </div>

                <Gallery />

                {/* Closing signature with Confetti */}
                <motion.div
                    onViewportEnter={triggerConfetti}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-center space-y-16 py-32 border-t border-white/5 relative z-50"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex justify-center mb-16"
                        >
                            <div className="relative w-48 md:w-64 aspect-[4/5] md:aspect-video rounded-[30px] overflow-hidden glass shadow-2xl p-2 group">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-[22px] grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                                >
                                    <source src="/WV1/propuesta.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 border border-wedding-gold/20 rounded-[30px] pointer-events-none" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="font-sans text-white/20 tracking-[1em] text-[10px] uppercase"
                        >
                            CON TODO NUESTRO AMOR
                        </motion.div>
                        <motion.h4
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, type: "spring" }}
                            className="font-cursive text-7xl md:text-[150px] gold-shimmer-text"
                        >
                            José & Abigail
                        </motion.h4>
                        <div className="font-sans text-white/40 tracking-[0.6em] text-[9px] md:text-[10px] uppercase flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-4">
                            <span>Arkansas</span>
                            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-wedding-gold/30" />
                            <span>Marzo 2026</span>
                            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-wedding-gold/30" />
                            <span>Boda Civil</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mascots Container - Fun but Subtle */}
            <div className="absolute bottom-10 inset-x-0 h-20 pointer-events-none overflow-hidden z-20">
                {/* Abigail's Turtle - Walking along the bottom */}
                <motion.div
                    animate={{ x: ["-10vw", "110vw"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-2 text-2xl"
                >
                    🐢
                </motion.div>

                {/* Jose's Soccer Ball - Bouncing slightly across */}
                <motion.div
                    animate={{
                        x: ["-20vw", "120vw"],
                        y: [0, -20, 0],
                        rotate: 360
                    }}
                    transition={{
                        x: { duration: 18, repeat: Infinity, ease: "linear" },
                        y: { duration: 0.8, repeat: Infinity, ease: "easeOut" },
                        rotate: { duration: 1.5, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute bottom-4 text-xl"
                >
                    ⚽
                </motion.div>

                {/* Subtle Waves - Fixed floating */}
                <motion.div
                    animate={{ y: [0, 5, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-2 left-1/4 text-2xl opacity-30"
                >
                    🌊
                </motion.div>
                <motion.div
                    animate={{ y: [0, -5, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-6 right-1/4 text-2xl opacity-30"
                >
                    🌊
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-wedding-gold/10 via-transparent to-transparent pointer-events-none" />
        </section>
    );
}
