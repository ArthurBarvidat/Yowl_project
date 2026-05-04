"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconBack } from "./discussion";

export default function Research({
  placeholder = "Search",
  onChange,
  className = "",
}) {
  const [q, setQ] = useState("");
  const router = useRouter();

  useEffect(() => {
    onChange?.(q);
  }, [q, onChange]);

  return (
    <main className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-xl">
      <div className="flex items-center gap-3">
        <button onClick={() => router.back()} className="cursor-pointer">
          <IconBack className="fixed ml-5 w-6 h-6 text-white top-1/2 -translate-y-1/2" />
        </button>
        <div className={`w-full pr-3 ${className}`}>
          <div className="flex items-center gap-3 rounded-2xl ml-10 top-5 bg-white/20 px-4 py-2 border border-[#A742EE]">
            <svg
              className="w-5 h-5 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent outline-none text-white placeholder:text-white"
              type="text"
              autoComplete="off"
            />

            {q.length > 0 && (
              <button
                onClick={() => setQ("")}
                className="text-white hover:text-black"
                aria-label="Clear search"
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
