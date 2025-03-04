"use client"

import { motion } from "framer-motion";
import TrendCard from "@/components/TrendCard";
import TrendChart from "@/components/TrendChart";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  useEffect(() => {
    // Заглушка для API-запроса трендов
    setTimeout(() => {
      setTrends([
        { id: 1, title: "Viral Dance Challenge", platform: "TikTok", growth: 80 },
        { id: 2, title: "AI Art Generator", platform: "Twitter", growth: 65 },
        { id: 3, title: "New Music Trend", platform: "YouTube", growth: 90 },
      ]);
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
      <div className="flex space-x-4">
        {["all", "TikTok", "YouTube", "Twitter"].map((platform) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
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
      <TrendChart data={filteredTrends} />
    </motion.div>
  );
};

export default Dashboard;
