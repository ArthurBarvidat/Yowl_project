"use client";

import { useEffect, useState } from "react";
import TopBar from "@/component/TopBar";
import BottomBar from "@/component/BottomBar";
import Post from "@/component/Post";
import Image from "next/image";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts", {
        cache: "no-store",
      });
      const data = await res.json();
      setPosts(Array.isArray(data.posts) ? data.posts : []);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <main>
      <TopBar />
      <div className="min-h-screen pt-20 pb-5">
        <div className="w-full max-w-xl mx-auto px-3">
          {loading && (
            <div className="flex flex-col items-center mt-40">
              <Image
                src="/logo.png"
                alt="Loading..."
                width={200}
                height={200}
                priority
              />
              <span className="mt-2 text-gray-400 text-lg">Loading...</span>
            </div>
          )}

          {!loading && posts.length === 0 && (
            <p className="text-gray-400 text-center mt-10">
              No posts for moments
            </p>
          )}

          {Array.isArray(posts) &&
            posts.map((post) => (
              <Post
                key={post._id}
                _id={post._id}
                content={post.text}
                mediaUrl={post.mediaUrl}
                mediaType={post.mediaType}
                likes={post.likes}
                comments={post.comments}
                reposts={post.reposts}
                author={post.author}
              />
            ))}
        </div>
      </div>

      <BottomBar />
    </main>
  );
}
