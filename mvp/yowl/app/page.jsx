"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const DURATION = 2500; // durée de l'animation

    const timer = setTimeout(() => {
      router.replace("/page/global");
    }, DURATION);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="w-64 md:w-80">
        <Image
          src="/logo.png"
          alt="Next Level"
          width={320}
          height={180}
          priority
          className="reveal w-full h-auto"
        />
      </div>

      <style jsx>{`
        @keyframes revealLoop {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          60% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 0;
          }
        }

        .reveal {
          animation: revealLoop 2.5s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
