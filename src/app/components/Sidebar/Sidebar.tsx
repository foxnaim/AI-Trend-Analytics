"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaHome, FaChartLine, FaUser } from "react-icons/fa";

const icons = [
  { id: "home", icon: <FaHome />, name: "Главная", link: "/dashboard" },
  { id: "trend", icon: <FaChartLine />, name: "Тренды", link: "/trend/1" },
  { id: "profile", icon: <FaUser />, name: "Профиль", link: "/profile" },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-6 bg-gray-900 p-4 rounded-full shadow-lg">
      {icons.map(({ id, icon, name, link }) => (
        <div
          key={id}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => router.push(link)}
          className="relative flex items-center justify-center w-12 h-12 cursor-pointer transition-all duration-300 hover:scale-110"
        >
          {hovered === id && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-10 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold"
            >
              {name}
            </motion.div>
          )}
          <div className="text-white text-3xl">{icon}</div>
        </div>
      ))}
    </div>
  );
}
