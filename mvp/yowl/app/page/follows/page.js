"use client";

import { useEffect, useState } from "react";
import TopBar from "@/component/TopBar";
import BottomBar from "@/component/BottomBar";
import Post from "@/component/Post";

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
    <main className="min-h-screen pt-20 pb-5">
      <TopBar />

      <div className="w-full max-w-xl mx-auto px-3">
        {loading && (
          <p className="text-gray-400 text-center mt-10">
            Chargement des posts…
          </p>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-gray-400 text-center mt-10">
            Aucun post pour le moment
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

      <BottomBar />
    </main>
  );
}
