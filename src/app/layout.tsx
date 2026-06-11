import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankita Choudhury | Global Affairs & International Relations",
  description: "Portfolio website showcasing expertise in global affairs, international relations, academic partnerships, and higher education collaborations.",
  keywords: ["Global Affairs", "International Relations", "Academic Partnerships", "Higher Education", "International Collaboration", "Global Education"],
  authors: [{ name: "Ankita Choudhury" }],
  openGraph: {
    title: "Ankita Choudhury | Global Affairs & International Relations",
    description: "Portfolio website showcasing expertise in global affairs, international relations, academic partnerships, and higher education collaborations.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#020617] text-[#F8FAFC] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
