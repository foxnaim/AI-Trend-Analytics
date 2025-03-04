"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface Trend {
  id: number;
  title: string;
  platform: "TikTok" | "YouTube" | "Twitter";
  growth: number;
}

interface TrendContextType {
  trends: Trend[];
  loading: boolean;
  fetchTrends: () => void;
}

export const TrendContext = createContext<TrendContextType | undefined>(undefined);

export function TrendProvider({ children }: { children: React.ReactNode }) {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrends = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Эмуляция задержки
      setTrends([
        { id: 1, title: "Viral Dance Challenge", platform: "TikTok", growth: 80 },
        { id: 2, title: "AI Art Generator", platform: "Twitter", growth: 65 },
        { id: 3, title: "New Music Trend", platform: "YouTube", growth: 90 },
      ]);
    } catch (error) {
      console.error("Ошибка загрузки трендов:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <TrendContext.Provider value={{ trends, loading, fetchTrends }}>
      {children}
    </TrendContext.Provider>
  );
}

export function useTrends() {
  const context = useContext(TrendContext);
  if (!context) {
    throw new Error("useTrends must be used within a TrendProvider");
  }
  return context;
}
