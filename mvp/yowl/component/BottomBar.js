"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function IconMenu({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 10v9h4v-6h6v6h4v-9" />
    </svg>
  );
}

export function IconPost({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconProfile({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

export function IconMessage({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function BottomBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const cur = window.scrollY;

      if (Math.abs(cur - last) < 3) return;

      setShow(cur < last);

      last = cur;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = (path) =>
    pathname.startsWith(path)
      ? "text-[#A742EE] font-bold"
      : "text-white hover:text-[#A742EE] transition";

  return (
    <div
      className={`
        fixed bottom-4 left-1/2 -translate-x-1/2
        w-full max-w-xl px-3
        bg-black/20 backdrop-blur-md border border-[#A742EE] rounded-3xl shadow-md
        flex justify-around items-center py-3
        transition-transform duration-200
        ${show ? "translate-y-0" : "translate-y-24"}
      `}
    >
      <Link href="/page/global">
        <IconMenu className={`w-6 h-6 ${linkStyle("/page/global")}`} />
      </Link>
      <Link href="/page/post">
        <IconPost className={`w-6 h-6 ${linkStyle("/page/post")}`} />
      </Link>
      <Link href="/page/Menu_message">
        <IconMessage className={`w-6 h-6 ${linkStyle("/page/Menu_message")}`} />
      </Link>
      <Link href="/page/profil">
        <IconProfile className={`w-6 h-6 ${linkStyle("/page/profil")}`} />
      </Link>
    </div>
  );
}
