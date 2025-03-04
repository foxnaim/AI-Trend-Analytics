import axios from "axios";

const TIKTOK_API_URL = "https://api.tiktok.com/v2/trends";
const TWITTER_API_URL = "https://api.twitter.com/2/trends";
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/trending";

const CACHE: Record<string, any[]> = {}; // Простая кеш-система
const CACHE_TIMEOUT = 5 * 60 * 1000; // 5 минут

/**
 * Функция для установки кеша с таймером очистки
 */
function setCache(key: string, data: any[]) {
  CACHE[key] = data;
  setTimeout(() => delete CACHE[key], CACHE_TIMEOUT);
}

/**
 * Получение трендов из TikTok
 */
export async function getTikTokTrends(): Promise<any[]> {
  if (CACHE["tiktok"]) return CACHE["tiktok"];

  try {
    const response = await axios.get(TIKTOK_API_URL, {
      headers: { Authorization: `Bearer ${process.env.TIKTOK_API_KEY}` },
    });
    const trends = response.data.trends || [];
    setCache("tiktok", trends);
    return trends;
  } catch (error) {
    console.error("Ошибка при загрузке трендов TikTok:", error);
    return [];
  }
}

/**
 * Получение трендов из Twitter
 */
export async function getTwitterTrends(): Promise<any[]> {
  if (CACHE["twitter"]) return CACHE["twitter"];

  try {
    const response = await axios.get(TWITTER_API_URL, {
      headers: { Authorization: `Bearer ${process.env.TWITTER_API_KEY}` },
    });
    const trends = response.data.trends || [];
    setCache("twitter", trends);
    return trends;
  } catch (error) {
    console.error("Ошибка при загрузке трендов Twitter:", error);
    return [];
  }
}

/**
 * Получение трендов из YouTube
 */
export async function getYouTubeTrends(): Promise<any[]> {
  if (CACHE["youtube"]) return CACHE["youtube"];

  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        regionCode: "RU",
        key: process.env.YOUTUBE_API_KEY,
      },
    });
    const trends = response.data.items || [];
    setCache("youtube", trends);
    return trends;
  } catch (error) {
    console.error("Ошибка при загрузке трендов YouTube:", error);
    return [];
  }
}

/**
 * Получение конкретного тренда по ID
 * @param platform - платформа ("tiktok" | "twitter" | "youtube")
 * @param id - идентификатор тренда
 * @returns объект тренда или null
 */
export async function getTrendById(platform: "tiktok" | "twitter" | "youtube", id: string): Promise<any | null> {
  try {
    let trends: any[] = [];

    switch (platform) {
      case "tiktok":
        trends = await getTikTokTrends();
        break;
      case "twitter":
        trends = await getTwitterTrends();
        break;
      case "youtube":
        trends = await getYouTubeTrends();
        break;
      default:
        console.error(`Неизвестная платформа: ${platform}`);
        return null;
    }

    // Ищем тренд по ID
    const trend = trends.find((trend) => String(trend.id) === id);
    return trend || null;
  } catch (error) {
    console.error(`Ошибка при получении тренда (${platform}, ID: ${id}):`, error);
    return null;
  }
}
