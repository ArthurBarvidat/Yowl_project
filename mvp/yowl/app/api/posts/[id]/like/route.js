import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(req, context) {
  const { id } = await context.params;

  await connectDB();

  const post = await Post.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true },
  );

  return NextResponse.json(post);
}
