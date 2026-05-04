"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IconImage } from "@/component/discussion";
import { MessageBubble } from "@/component/discussion";

export default function SendMessage() {
  const BANNED_WORDS = ["con", "fdp", "pute", "tg"];
  const SPAM_DELAY = 2000;
  const [input, setInput] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const isTextValid = input.trim().length > 0;
  const [messages, setMessages] = useState([
    {
      id: 1,
      me: false,
      name: "Nass_Tazz",
      text: "Yo tout le monde 👋",
      time: "12:01",
    },
    {
      id: 2,
      me: false,
      name: "fugu_fps",
      text: "Qui joue ce soir ?",
      time: "12:02",
    },
    {
      id: 3,
      me: true,
      name: "Moi",
      text: "Je suis chaud 😄",
      time: "12:03",
    },
  ]);

  const listRef = useRef(null);
  const lastSentRef = useRef(0);

  const nowTime = useMemo(() => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }, [messages.length]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  function pushSystemMessage(text) {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        system: true,
        text: text,
        time: nowTime,
      },
    ]);
  }

  function Message() {
    const value = input.trim();
    const now = Date.now();
    if (!value && !selectedImage) return;

    if (now - lastSentRef.current < SPAM_DELAY) {
      pushSystemMessage("⏳ Slow Down.");
      return;
    }

    if (BANNED_WORDS.some((w) => value.toLowerCase().includes(w))) {
      pushSystemMessage("⚠️ Message forbidden!");
      setInput("");
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        me: true,
        text: value,
        time: nowTime,
        image: imagePreview,
      },
    ]);

    lastSentRef.current = now;
    setInput("");
    setSelectedImage(null);
    setImagePreview(null);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function removeImage() {
    setSelectedImage(null);
    setImagePreview(null);
  }
  return (
    <main>
      <div
        ref={listRef}
        className="px-4 space-y-3 overflow-y-auto pt-18 pb-20"
        style={{ height: "100vh" }}
      >
        {messages.map((m) =>
          m.system ? (
            <div
              key={m.id}
              className="text-center text-sm text-gray-400 italic select-none"
            >
              {m.text}
            </div>
          ) : (
            <MessageBubble
              key={m.id}
              me={m.me}
              name={m.name}
              text={m.text}
              time={m.time}
              image={m.image}
            />
          ),
        )}
      </div>

      <div className="fixed w-full max-w-xl mx-auto pb-5 bottom-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-50">
        {imagePreview && (
          <div className="flex items-center justify-between bg-gray-200 p-2 rounded mx-4 mb-2">
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
            className="flex-1 h-11 px-4 rounded-2xl border border-[#7353BA] bg-white/90 outline-none focus:bg-white focus:border-black/20"
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
