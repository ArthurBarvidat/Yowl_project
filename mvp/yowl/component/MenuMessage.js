"use client";
import { useRouter } from "next/navigation";

export default function Conv({
  avatar,
  name,
  lastMessage,
  time,
  unread = false,
  onClick,
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/page/message")}
      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition border-b-2 border-[#A742EE] bg-transparent hover:bg-[#A742EE] transition
      `}
    >
      <div className="relative shrink-0">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        {unread && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white truncate">{name}</span>
          <span className="text-xs text-white/40">{time}</span>
        </div>

        <p className="text-sm text-white/60 truncate">{lastMessage}</p>
      </div>
    </button>
  );
}
