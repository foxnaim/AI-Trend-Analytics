"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Неверный email или пароль");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <form className="p-6 bg-gray-900 rounded-lg shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Вход</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 my-2 bg-gray-800 rounded-lg" required />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 my-2 bg-gray-800 rounded-lg" required />

        <button type="submit" className="w-full bg-primary text-white p-2 rounded-lg hover:bg-opacity-80">Войти</button>
        <p className="text-sm mt-4">
          Нет аккаунта? <a href="/auth/register" className="text-primary hover:underline">Зарегистрироваться</a>
        </p>
      </form>
    </div>
  );
}
