"use client";

import { motion } from "framer-motion";
import TrendCard from "@/app/components/TrendCard/TrendCard";
import TrendChart from "@/app/components/TrendChart/TrendChart";
import React, { useState, useEffect } from "react";

interface Trend {
  id: number;
  title: string;
  platform: "TikTok" | "YouTube" | "Twitter";
  growth: number;
}

const Dashboard = () => {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState<"all" | "TikTok" | "YouTube" | "Twitter">("all");

  useEffect(() => {
    setTimeout(() => {
      const mockTrends: Trend[] = [
        { id: 1, title: "Viral Dance Challenge", platform: "TikTok", growth: 80 },
        { id: 2, title: "AI Art Generator", platform: "Twitter", growth: 65 },
        { id: 3, title: "New Music Trend", platform: "YouTube", growth: 90 },
      ];
      setTrends(mockTrends);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredTrends = trends.filter((trend) =>
    selectedPlatform === "all" || trend.platform === selectedPlatform
  );

  return (
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      {/* Фильтры */}
      <div className="flex justify-center space-x-4">
        {["all", "TikTok", "YouTube", "Twitter"].map((platform) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform as "all" | "TikTok" | "YouTube" | "Twitter")}
            className={`px-4 py-2 rounded-lg transition ${
              selectedPlatform === platform ? "bg-primary text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* Карточки трендов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          filteredTrends.map((trend) => (
            <motion.div 
              key={trend.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <TrendCard trend={trend} />
            </motion.div>
          ))
        )}
      </div>

      {/* График трендов */}
      {filteredTrends.length > 0 && <TrendChart data={filteredTrends.map(({ title, growth }) => ({ date: title, value: growth }))} />}
    </motion.div>
  );
};

export default Dashboard;
