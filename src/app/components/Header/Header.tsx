"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md">
      <Link href="/" className="text-xl font-bold text-white">
        TrendAI
      </Link>

      <nav className="flex gap-4">
        <Link href="/pages/Profile" className="text-white hover:underline">
          Профиль
        </Link>
        <button className="text-white hover:underline">Выход</button>
      </nav>
    </header>
  );
}
