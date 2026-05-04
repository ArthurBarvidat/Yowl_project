export const runtime = "nodejs";

import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author", "name username avatar");

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("GET POSTS ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { text, mediaUrl, mediaType } = body;
    const userId = "69788d609ce3ddf4ffc15473";

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    if (!text && !mediaUrl) {
      return NextResponse.json(
        { error: "Post must have text or media" },
        { status: 400 },
      );
    }

    const post = await Post.create({
      text,
      mediaUrl,
      mediaType,
      author: userId,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("CREATE POST ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}
