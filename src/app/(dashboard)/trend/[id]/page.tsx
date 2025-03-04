"use client"

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrendChart from "@/app/components/TrendChart/TrendChart";
import { getTrendById } from "@/lib/api";

export default function TrendDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [trend, setTrend] = useState(null);

  useEffect(() => {
    if (id) {
      getTrendById(id as string).then(setTrend);
    }
  }, [id]);

  if (!trend) {
    return <div className="text-center text-xl text-gray-400">Загрузка...</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.3 }}
      className="p-6 text-text"
    >
      <button onClick={() => router.back()} className="mb-4 text-primary underline">
        ← Назад
      </button>
      <h1 className="text-3xl font-bold mb-4">{trend.title}</h1>
      <p className="text-lg text-gray-300 mb-6">{trend.description}</p>
      <TrendChart data={trend.analytics} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.3 }}
        className="mt-6 p-4 border border-border rounded-lg bg-background"
      >
        <h2 className="text-xl font-semibold mb-2">Ключевые метрики</h2>
        <p>🔹 Упоминания: {trend.mentions}</p>
        <p>❤️ Лайки: {trend.likes}</p>
        <p>🔁 Репосты: {trend.shares}</p>
      </motion.div>
    </motion.div>
  );
}
