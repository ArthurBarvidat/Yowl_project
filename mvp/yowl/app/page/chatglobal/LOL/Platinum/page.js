"use client";

import { TopBarLolPlatinium } from "@/component/TopBarRank";
import SendMessage from "@/component/SendBar";

export default function ChatGlobalPage() {
  return (
    <main className="min-h-screen w-full max-w-xl mx-auto">
      <TopBarLolPlatinium />
      <SendMessage />
    </main>
  );
}
