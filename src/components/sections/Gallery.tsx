"use client";

import React from "react";
import { motion } from "framer-motion";

const PHOTOS = [
    "/WV1/IMG_0948.JPG",
    "/WV1/IMG_0950.JPG",
    "/WV1/IMG_0953.JPG",
    "/WV1/IMG_0957.JPG",
    "/WV1/IMG_0958.JPG",
    "/WV1/IMG_0961.JPG",
    "/WV1/IMG_0965.JPG",
    "/WV1/IMG_0975.JPG",
];

export default function Gallery() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {PHOTOS.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="relative group aspect-[3/4] overflow-hidden rounded-[20px] shadow-2xl glass border-white/5"
                    >
                        <img
                            src={src}
                            alt={`Memoria ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 border border-wedding-gold/20 opacity-0 group-hover:opacity-100 transition-all rounded-[20px] pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
