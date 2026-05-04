"use client";

import { useRouter } from "next/navigation";
import { IconBack } from "./discussion";

export function TopBarGlobalLol() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
      <div className="h-14 px-3 flex items-center">
        <button onClick={() => router.back()} className="cursor-pointer">
          <IconBack className="fixed top-7 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
        </button>
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold text-white leading-none">
            Global Chat LOL
          </div>
        </div>
      </div>
    </div>
  );
}
