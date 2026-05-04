// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    text: String,
    mediaUrl: String,
    mediaType: String,

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    reposts: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
