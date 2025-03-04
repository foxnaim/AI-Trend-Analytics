import { useContext } from "react";
import { TrendContext } from "@/app/context/TrendContext";

export function useTrends() {
  const context = useContext(TrendContext);
  if (!context) {
    throw new Error("useTrends must be used within a TrendProvider");
  }
  return context;
}
