"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(name, email, password);
      router.push("/auth/login"); // После регистрации перенаправляем на вход
    } catch (err: any) {
      setError(err.message || "Ошибка регистрации");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <form className="p-6 bg-gray-900 rounded-lg shadow-md w-96" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 my-2 bg-gray-800 rounded-lg" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 my-2 bg-gray-800 rounded-lg" required />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 my-2 bg-gray-800 rounded-lg" required />

        <button type="submit" className="w-full bg-primary text-white p-2 rounded-lg hover:bg-opacity-80">Зарегистрироваться</button>
        <p className="text-sm mt-4">
          Уже есть аккаунт? <a href="/auth/login" className="text-primary hover:underline">Войти</a>
        </p>
      </form>
    </div>
  );
}
