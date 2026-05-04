"use client";
import { useRouter } from "next/navigation";
import BottomBar from "@/component/BottomBar";
import Conv from "@/component/MenuMessage";

export function IconBack({ className = "" }) {
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
export default function convmenu() {
  const conversations = [
    {
      id: 1,
      name: "fugu_fps",
      avatar: "/fugu.jpg",
      lastMessage: "Je suis chaud 😄 ",
      time: "12:02",
      unread: true,
    },
    {
      id: 2,
      name: "Alex",
      avatar: "/users/alex.jpg",
      lastMessage: "Ok ça marche",
      time: "11:45",
    },
    {
      id: 3,
      name: "Arthur",
      avatar: "/users/alex.jpg",
      lastMessage: "Ca joue?",
      time: "09:45",
    },
  ];

  const router = useRouter();
  return (
    <main className="min-h-screen w-full max-w-xl mx-auto">
      <div className="h-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
        <div className="h-14 px-3 flex items-center">
          <button onClick={() => router.back()} className="cursor-pointer">
            <IconBack className="top-7 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
          </button>

          <div className="flex-1 text-center">
            <div className="text-lg font-semibold text-white leading-none">
              Chat
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full text-white pt-15">
        {conversations.map((c) => (
          <Conv
            key={c.id}
            avatar={c.avatar}
            name={c.name}
            lastMessage={c.lastMessage}
            time={c.time}
            unread={c.unread}
            active={c.id === 1}
            onClick={() => console.log("open", c.id)}
          />
        ))}
      </div>

      <BottomBar />
    </main>
  );
}
