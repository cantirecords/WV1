import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const cursive = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--font-cursive" });

export const metadata: Metadata = {
    title: "José & Abigail | Nuestra Boda",
    description: "Una experiencia interactiva para nuestra boda íntima.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${playfair.variable} ${cursive.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
