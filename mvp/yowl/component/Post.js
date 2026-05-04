"use client";
import { useState, useEffect, useRef } from "react";
import { likePost, commentPost, repostPost } from "@/lib/api/posts";
import { ReportButton } from "./ReportButton";
function IconComment({ className = "" }) {
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
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

export function IconReport({ className = "" }) {
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
      <path d="M4 22V4" />
      <path d="M4 4h12l-2 4 2 4H4" />
    </svg>
  );
}

function IconLike({ className = "" }) {
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
      <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />
    </svg>
  );
}

function IconRepost({ className = "" }) {
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
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />

      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

export default function Post({
  _id,
  content,
  mediaUrl,
  mediaType,
  likes,
  comments,
  reposts,
  author,
}) {
  const [likeCount, setLikeCount] = useState(likes ?? 0);
  const [commentCount, setCommentCount] = useState(comments ?? 0);
  const [repostCount, setRepostCount] = useState(reposts ?? 0);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(
        textRef.current.scrollHeight > textRef.current.clientHeight,
      );
    }
  }, [content]);

  return (
    <div className="border-b border-[#A742EE] pb-3 pr-3 pl-3 mb-3">
      <div className="flex gap-3">
        <img
          src={author?.avatar}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="grid">
          <span className="font-bold">{author?.name}</span>
          <span className="">@{author?.username}</span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {mediaType === "image" && (
          <img src={mediaUrl} className="mt-3 rounded-xl" />
        )}

        {mediaType === "video" && (
          <video src={mediaUrl} controls className="mt-3 rounded-xl" />
        )}
      </div>
      <p
        ref={textRef}
        className={`mt-3 text-basic break-words whitespace-pre-line transition-all ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {content}
      </p>
      {isOverflowing && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-sm text-white/60  hover:underline"
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}

      <div className="flex items-center justify-center gap-10 pt-4">
        <div
          className="flex items-center gap-1 p-1 cursor-pointer"
          onClick={async () => {
            const updated = await commentPost(_id);
            if (!updated) return;
            setCommentCount(updated.comments ?? commentCount);
          }}
        >
          <IconComment className="w-6 h-6" />
          <span>{commentCount}</span>
        </div>

        <div
          className="flex items-center gap-1 p-1 cursor-pointer"
          onClick={async () => {
            const updated = await repostPost(_id);
            if (!updated) return;
            setRepostCount(updated.reposts ?? repostCount);
          }}
        >
          <IconRepost className="w-6 h-6" />
          <span>{repostCount}</span>
        </div>

        <div
          className="flex items-center gap-1 p-2 cursor-pointer"
          onClick={async () => {
            const updated = await likePost(_id);
            console.log("UPDATED FROM API:", updated);
            setLikeCount(updated.likes);
          }}
        >
          <IconLike className="w-6 h-6 hover:red" />
          <span>{likeCount}</span>
        </div>
        <div className="flex items-center gap-1 p-2 cursor-pointer">
          <ReportButton className="h-5 w-5 " />
        </div>
      </div>
    </div>
  );
}
