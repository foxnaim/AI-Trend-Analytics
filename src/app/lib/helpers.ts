import bcrypt from "bcryptjs";

/**
 * Хэширование пароля
 * @param password - строка пароля
 * @returns хэшированный пароль
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

/**
 * Проверка пароля
 * @param password - введённый пароль
 * @param hashedPassword - хранимый хэш пароля
 * @returns true, если пароль верный
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

/**
 * Форматирование больших чисел (например, 1000 → 1K)
 * @param num - число
 * @returns отформатированное значение
 */
export function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
}

/**
 * Форматирование даты в читаемый вид
 * @param date - дата
 * @returns строка в формате "12 февраля 2024"
 */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Проверка валидности email
 * @param email - строка email
 * @returns true, если email корректный
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
