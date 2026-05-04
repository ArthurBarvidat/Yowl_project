"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function IconSearch({ className = "" }) {
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
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export default function TopBar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    pathname.startsWith(path)
      ? "text-white text-xl font-black"
      : "text-white/80 hover:white";

  const iconClass = "w-6 h-6";

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-xl px-3 h-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
      <div className="text-lg flex justify-center gap-8 mt-3">
        <Link href="/page/mates" className={linkStyle("/page/mates")}>
          Mates
        </Link>
        <Link href="/page/categories" className={linkStyle("/page/categories")}>
          Categories
        </Link>
        <Link href="/page/follows" className={linkStyle("/page/follows")}>
          Follows
        </Link>
        <Link href="/page/search" className={linkStyle("/page/search")}>
          <IconSearch className={iconClass} />
        </Link>
      </div>
    </div>
  );
}
