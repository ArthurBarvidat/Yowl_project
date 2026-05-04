"use client";
import { useState, useEffect } from "react";
import Bottombar from "@/component/BottomBar";
import { IconeTheme } from "@/component/IconeTheme";
import { IconeEdit } from "@/component/IconeEdit";
import Post from "@/component/Post";

export default function Profilpage() {
  const [avatar, setAvatar] = useState(null);
  const [followers] = useState(20);
  const [following] = useState(20);

  function changeAvatar(e) {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  }
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
      <div className="min-h-screen sm:p-6">
        <div className="w-full max-w-xl mx-auto border-b border-[#A742EE] p-3 font-bold text-lg">
          <div className="flex items-center justify-center relative">
            <div className="absolute left-0 flex items-center h-full">
              <IconeTheme className="w-7 h-7" />
            </div>
            <span>My Profile</span>
            <div className="absolute right-0 flex items-center h-full">
              <IconeEdit className="w-7 h-7" />
            </div>
          </div>

          <div className="flex flex-col items-center mt-4">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#A742EE] overflow-hidden flex items-center justify-center">
                <img
                  src={
                    avatar ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtNgU3TNKpmC-WilPqS8UWrjKGUywMJtmKQ&s"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </label>
            <input
              id="avatar-upload"
              type="file"
              onChange={changeAvatar}
              className="hidden"
            />
            <div>Leagueoflegendsfr</div>
            <div className="mt-2 font-bold text-lg">@LOL_fr</div>
          </div>

          <div className="mt-4 flex justify-center gap-10 text-sm font-medium">
            <div>
              <strong>{followers}</strong> Followers
            </div>
            <div>
              <strong>{following}</strong> Following
            </div>
          </div>

          <div className="w-full p-2 mt-4 text-sm resize-none bg-white/10 rounded-3xl border border-[#A742EE]">
            <div className="m-2">
              Compte officiel de League of Legends France.
              <br /> <br />
              Vous retrouverez ici toute l'actualité de League of Legends
              france.
              <br /> <br />
              Notes de patch :
              https://www.leagueoflegends.com/fr-fr/news/tags/patch-notes/
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto pt-4 px-3">
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
      </div>

      <div className="bg-white w-full">
        <Bottombar />
      </div>
    </main>
  );
}
