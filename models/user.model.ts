import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  imageUrl: string;
  email?: string;
  password?: string;
  role: "guest" | "moderator" | "admin";
  posts: Schema.Types.ObjectId[];
  viewedPosts: Schema.Types.ObjectId[];
}
const userSchema = new Schema(
  {
    clerkId: String,
    name: { type: String },
    imageUrl: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    role: {
      type: String,
      enum: ["admin", "moderator", "guest"],
      default: "guest",
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    viewedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "View",
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
