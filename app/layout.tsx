import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sidiadinoto Design Lab (SDL) | Arsitek Jakarta",
  description: "Sidiadinoto Design Lab is an architecture and interiors practice based in Jakarta, Indonesia, led by Ansel Sidiadinoto. Focused on thoughtful and contextual design.",
  keywords: ["sidiadinoto", "sidiadinoto design", "arsitek jakarta", "ansel sidiadinoto", "sdl jakarta", "sdl", "arsitektur", "architecture", "interiors"],
  verification: {
    google: "E3r62CnKBCiku_0_sy0s__-20gzKXny4U5lfArUXOp4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}