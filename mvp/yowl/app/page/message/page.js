"use client";

import { useRouter } from "next/navigation";
import { IconBack } from "@/component/discussion";
import { ReportButton } from "@/component/ReportButton";
import { useEffect, useMemo, useState, useRef } from "react";
import { IconImage } from "@/component/discussion";
import { MessageBubble } from "@/component/discussion";

export default function ChatGlobalPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const listRef = useRef(null);
  const isTextValid = input.trim().length > 0;
  const [messages, setMessages] = useState(() => [
    {
      id: 2,
      me: false,
      name: "fugu_fps",
      text: "Tu joues ce soir ?",
      time: "12:02",
    },
    { id: 3, me: true, name: "Moi", text: "Je suis chaud 😄", time: "12:03" },
  ]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const nowTime = useMemo(() => {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }, [messages.length]);

  function Message() {
    const value = input.trim();
    if (input.trim() === "" && !selectedImage) return;

    const newMessage = {
      id: Date.now(),
      me: true,
      text: value,
      time: nowTime,
      image: imagePreview,
    };

    setMessages([...messages, newMessage]);
    setInput("");
    setSelectedImage(null);
    setImagePreview(null);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function removeImage() {
    setSelectedImage(null);
    setImagePreview(null);
  }

  return (
    <main className="min-h-screen w-full max-w-xl mx-auto">
      <div className="h-15 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
        <div className="h-14 px-3 flex items-center">
          <button onClick={() => router.back()} className="cursor-pointer">
            <IconBack className="top-7 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <div className="text-lg font-semibold text-white leading-none">
              fugu_fps
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <ReportButton />
          </div>
        </div>
      </div>
      <div
        ref={listRef}
        className="px-4 space-y-3 overflow-y-auto pt-5 pb-20"
        style={{ height: "100vh" }}
      >
        {messages.map((m) => (
          <MessageBubble
            key={m.id}
            me={m.me}
            name={m.name}
            text={m.text}
            time={m.time}
            image={m.image}
          />
        ))}
      </div>

      {/* CREATION MESSAGE */}
      <div className="fixed pb-5 w-full max-w-xl mx-auto bottom-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-50">
        {imagePreview && (
          <div className="flex items-center justify-between bg-gray-200 p-2 rounded">
            <img src={imagePreview} className="max-w-[70%] rounded" />
            <button
              onClick={removeImage}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        )}
        <div className="px-4 flex items-center gap-2 text-black">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                Message();
              }
            }}
            placeholder="Type a message…"
            className="flex-1 h-11 px-4 rounded-2xl border border-[#7029B0] bg-white/90 outline-none focus:bg-white focus:border-black/20"
          />
          <label className="cursor-pointer p-2">
            <IconImage className="w-7 h-7 text-white" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>
          <button
            onClick={Message}
            disabled={!isTextValid}
            className={`px-5 h-10 rounded-xl font-semibold transition
                ${
                  isTextValid
                    ? "border border-[#A742EE] text-white active:scale-[0.98]"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }
              `}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
