"use client"

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface TrendCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  mentions: number;
  likes: number;
  shares: number;
}

export default function TrendCard({ id, title, description, image, mentions, likes, shares }: TrendCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-4 bg-background border border-border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
      onClick={() => router.push(`/trend/${id}`)}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold text-text mb-2">{title}</h2>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>🔹 {mentions} упоминаний</span>
        <span>❤️ {likes} лайков</span>
        <span>🔁 {shares} репостов</span>
      </div>
    </motion.div>
  );
}
