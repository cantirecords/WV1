import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const cursive = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--font-cursive" });

export const metadata: Metadata = {
    title: "José & Abigail | Edición Especial de Boda",
    description: "Una edición especial para un día inolvidable. Abriendo nuestra invitación oficial.",
    openGraph: {
        title: "✨ LA BODA: José & Abigail",
        description: "Invitación Digital Oficial | Edición Especial",
        url: "https://cantirecords.github.io/WV1/",
        siteName: "Revista de Boda",
        images: [
            {
                url: "https://cantirecords.github.io/WV1/magazine.JPG",
                width: 1200,
                height: 630,
                alt: "José & Abigail Boda",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Boda de José & Abigail",
        description: "Nuestra invitación oficial.",
        images: ["https://cantirecords.github.io/WV1/magazine.JPG"],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Boda J&A"
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: '#000000',
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
