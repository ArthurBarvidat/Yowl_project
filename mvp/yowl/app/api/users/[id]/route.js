import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    // sécurité ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(null, { status: 400 });
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(null, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET USER ERROR:", error);
    return NextResponse.json(null, { status: 500 });
  }
}
