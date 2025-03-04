"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Sidebar from "@/app/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-gray-950 text-gray-200 min-h-screen flex flex-col`}>
        <main className="flex-1 flex justify-center p-6">{children}</main>
        <Sidebar />
      </body>
    </html>
  );
}
