"use client";

import { useTrends } from "@/context/TrendContext";
import { useParams } from "next/navigation";

export default function TrendDetailsPage() {
  const { id } = useParams();
  const { trends } = useTrends();

  const trend = trends.find((t) => t.id === Number(id));

  if (!trend) {
    return <p className="text-red-500">Тренд не найден</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{trend.title}</h1>
      <p className="text-gray-400">Платформа: {trend.platform}</p>
      <p className="text-gray-400">Рост популярности: {trend.growth}%</p>
    </div>
  );
}
