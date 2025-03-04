import bcrypt from "bcryptjs";
import prisma from "./prisma"; // Импортируем Prisma

// ✅ Регистрация нового пользователя
export async function registerUser(name: string, email: string, password: string) {
  // Проверяем, есть ли такой email в базе
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("Пользователь уже существует");
  }

  // Хешируем пароль
  const hashedPassword = await bcrypt.hash(password, 10);

  // Создаём пользователя
  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return newUser;
}

// ✅ Авторизация пользователя
export async function loginUser(email: string, password: string) {
  // Ищем пользователя в базе
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Пользователь не найден");
  }

  // Проверяем пароль
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Неверный пароль");
  }

  return user;
}
