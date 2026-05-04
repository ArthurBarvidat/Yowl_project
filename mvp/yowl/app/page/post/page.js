"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomBar from "@/component/BottomBar";

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
export function IconImage({ className = "" }) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
export default function PostCreatePage() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fileType, setFileType] = useState(null);

  const router = useRouter();

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));

    if (selectedFile.type.startsWith("video")) {
      setFileType("video");
    } else if (selectedFile.type.startsWith("image")) {
      setFileType("image");
    } else {
      setFileType(null);
    }
  }

  function removeImage() {
    setFile(null);
    setPreview(null);
  }

  async function publishPost() {
    if (!text.trim() && !file) return;

    let mediaUrl = null;
    let mediaType = null;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        console.error("Upload failed");
        return;
      }

      const uploadData = await uploadRes.json();
      mediaUrl = uploadData.url;
      mediaType = uploadData.type;
    }

    const postRes = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        mediaUrl,
        mediaType,
      }),
    });

    if (!postRes.ok) {
      const errorText = await postRes.text();
      console.error("Post creation failed:", errorText);
      return;
    }

    setText("");
    setFile(null);
    setPreview(null);
  }
  const isTextValid = text.trim().length > 0;

  return (
    <main className="min-h-screen w-full max-w-xl mx-auto">
      <div className="bg-gradient-to-b from-black/80 via-black/40 to-transparent z-50">
        <div className="h-14 px-3 flex items-center">
          <button onClick={() => router.back()} className="cursor-pointer">
            <IconBack className="fixed top-7 w-6 h-6 text-white absolute top-1/2 -translate-y-1/2" />
          </button>

          <div className="flex-1 text-center">
            <div className="text-lg font-semibold text-white leading-none">
              New Post
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 pt-5">
        <div className="bg-transparent backdrop-blur rounded-2xl p-3 space-y-3 text-white">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            rows={4}
            className="w-full resize-none p-3 rounded-xl border border-[#A742EE] bg-transparent text-white outline-none"
          />

          {preview && fileType === "image" && (
            <div className="relative grid text-center">
              <img
                src={preview}
                className="mt-3 rounded-xl max-h-[400px] object-cover"
              />
              <button
                onClick={removeImage}
                className="mt-5 px-5 py-1 mx-auto w-fit text-center bg-black text-white/90 text-base rounded-lg"
              >
                Delete
              </button>
            </div>
          )}

          {preview && fileType === "video" && (
            <div className="relative grid text-center">
              <video
                src={preview}
                controls
                className="mt-3 rounded-xl max-h-[400px] w-full"
              />
              <button
                onClick={removeImage}
                className="mt-5 px-5 py-1 mx-auto w-fit text-center bg-black text-white/90 text-base rounded-lg"
              >
                Delete
              </button>
            </div>
          )}

          <div className="flex items-center justify-between">
            <label className="cursor-pointer flex items-center gap-2 text-white/90">
              <IconImage className="w-6 h-6" />
              <span className="text-sm">Add image</span>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                hidden
              />
            </label>

            <button
              onClick={publishPost}
              disabled={!isTextValid}
              className={`px-5 h-10 rounded-xl font-semibold transition
            ${
              isTextValid
                ? "border border-[#A742EE] text-white active:scale-[0.98]"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }
          `}
            >
              Publish
            </button>
          </div>
        </div>
        <BottomBar />
      </div>
    </main>
  );
}
