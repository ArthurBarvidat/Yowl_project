import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(req, context) {
  const { id } = await context.params;

  await connectDB();

  const post = await Post.findByIdAndUpdate(
    id,
    { $inc: { reposts: 1 } },
    { new: true },
  );

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
