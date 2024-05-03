"use client";

import Header from "./_components/header";
import PlayerHls from "./_components/playertv";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 gap-20 bg-gray-800">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl w-full text-red-600 shadow-white">
          Ao Vivo
        </h1>
        <PlayerHls />
      </div>
    </main>
  );
}
