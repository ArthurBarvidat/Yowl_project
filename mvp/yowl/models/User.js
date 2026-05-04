// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    avatar: String,
    bio: String,
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
