"use client";

import { useTrends } from "@/app/context/TrendContext";
import Link from "next/link";

export default function HomePage() {
  const { trends, loading } = useTrends();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">🔥 Популярные тренды</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {trends.map((trend) => (
            <li key={trend.id} className="border p-4 rounded-lg bg-gray-800">
              <Link href={`/trend/${trend.id}`} className="text-xl font-semibold hover:underline">
                {trend.title}
              </Link>
              <p className="text-gray-400">Платформа: {trend.platform}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
