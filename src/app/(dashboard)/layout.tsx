import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "AI Trend Analytics",
  description: "Аналитика трендов TikTok, YouTube, Twitter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Neue+Machina:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Monument+Extended:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;700&family=Orbitron:wght@400;700&display=swap"
        />
      </head>
      <body className="bg-background text-text font-sans">
        {children}
      </body>
    </html>
  );
}
