"use client";

import { useRouter } from "next/navigation";
import { IconBack } from "./discussion";

export function TopBarLolGold() {
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
          <div className="text-sm text-white leading-none mt-1">
            GOLD IV to GOLD I
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopBarLolPlatinium() {
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
          <div className="text-sm text-white leading-none mt-1">
            PLATINIUM IV to PLATINIUM I
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopBarValorantGold() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
      <div className="h-14 px-3 flex items-center">
        <button onClick={() => router.back()} className="cursor-pointer">
          <IconBack className="fixed top-7 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
        </button>
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold text-white leading-none">
            Global Chat VALORANT
          </div>
          <div className="text-sm text-white leading-none mt-1">
            GOLD I to GOLD III
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopBarValorantPlatinium() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
      <div className="h-14 px-3 flex items-center">
        <button onClick={() => router.back()} className="cursor-pointer">
          <IconBack className="fixed top-7 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
        </button>
        <div className="flex-1 text-center">
          <div className="text-lg font-semibold text-white leading-none">
            Global Chat VALORANT
          </div>
          <div className="text-sm text-white leading-none mt-1">
            PLATINIUM I to PLATINIUM III
          </div>
        </div>
      </div>
    </div>
  );
}
