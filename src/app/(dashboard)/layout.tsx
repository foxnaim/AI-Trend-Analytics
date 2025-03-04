import type { Metadata } from "next";
import "./globals.css";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}
