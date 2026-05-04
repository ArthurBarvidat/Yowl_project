"use client";
import Research from "@/component/Research";
import Bottombar from "@/component/BottomBar";
import GameCategories from "@/component/GameCategories";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [card, setCard] = useState("");
  return (
    <main className="w-full max-w-xl mx-auto flex-col min-h-screen pt-2">
      <Research onChange={setSearch} />
      <div className="pt-15">
        <GameCategories search={search} />
      </div>
      <Bottombar />
    </main>
  );
}
