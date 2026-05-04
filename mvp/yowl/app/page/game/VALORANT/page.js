"use client";

import TopBar from "@/component/TopBar";
import BottomBar from "@/component/BottomBar";
import Valorant from "@/component/VALORANT";

import { IconBack } from "@/component/LOL";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen w-full max-w-xl mx-auto">
      <TopBar />
      <div className="px-4 pt-15">
        <button onClick={() => router.back()} className="cursor-pointeur">
          <IconBack className="top-25 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
        </button>

        <h1 className="text-2xl font-semibold text-white leading-none text-center">
          Choose your rank
        </h1>

        <p className="mt-1 text-sm text-white text-center">Find your mates</p>
      </div>
      <div className="pt-1">
        <Valorant />
      </div>
      <BottomBar />
    </main>
  );
}
