"use client";

import { useRouter } from "next/navigation"; 
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrendChart from "@/app/components/TrendChart/TrendChart";
import { getTrendById } from "@/app/lib/api";

export default function TrendDetailPage() {
  const router = useRouter();
  const [trend, setTrend] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Получаем ID тренда из URL
  const id =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("id")
      : null;

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    // Определяем платформу (можно передавать через URL)
    const platform = "tiktok"; // 🔹 Если платформа передаётся в URL, бери её оттуда

    getTrendById(platform, id)
      .then((data) => {
        if (!data) throw new Error("Тренд не найден");
        setTrend(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl text-gray-400">Загрузка...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500">
        Ошибка: {error}
      </div>
    );
  }

  if (!trend) {
    return (
      <div className="text-center text-xl text-gray-400">
        Данные о тренде отсутствуют.
      </div>
    );
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
      <h1 className="text-3xl font-bold mb-4">{trend.title || "Без названия"}</h1>
      <p className="text-lg text-gray-300 mb-6">
        {trend.description || "Описание отсутствует"}
      </p>

      {/* График тренда */}
      {trend.analytics ? <TrendChart data={trend.analytics} /> : <p>Нет данных для графика.</p>}

      {/* Блок с ключевыми метриками */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-6 p-4 border border-border rounded-lg bg-background"
      >
        <h2 className="text-xl font-semibold mb-2">Ключевые метрики</h2>
        <p>🔹 Упоминания: {trend.mentions ?? "—"}</p>
        <p>❤️ Лайки: {trend.likes ?? "—"}</p>
        <p>🔁 Репосты: {trend.shares ?? "—"}</p>
      </motion.div>
    </motion.div>
  );
}
