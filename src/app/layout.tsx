"use client";

import { AuthProvider } from "@/app/context/AuthContext";
import { TrendProvider } from "@/app/context/TrendContext";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { Inter } from "next/font/google";
import { Orbitron } from "next/font/google";
import Header from "@/app/components/Header/Header"
import "./globals.css";

// ✅ Основной шрифт
const neueMachina = Inter({ subsets: ["latin"], variable: "--font-neue-machina" });
// ✅ Акцентный шрифт
const monumentExtended = Inter({ subsets: ["latin"], variable: "--font-monument-extended" });
// ✅ Альтернативные шрифты
const clashDisplay = Orbitron({ subsets: ["latin"], variable: "--font-clash-display" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${neueMachina.variable} ${monumentExtended.variable} ${clashDisplay.variable} ${orbitron.variable}`}>
      <body className="bg-gray-950 text-gray-200 min-h-screen flex flex-col font-neue-machina">
       <Header/>
        <Sidebar />
        <AuthProvider>
          <TrendProvider>
            <main className="flex-1 flex justify-center p-6">{children}</main>
          </TrendProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
