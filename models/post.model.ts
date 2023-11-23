import { Schema, model, models } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  imageUrl: string;
  userId: Schema.Types.ObjectId;
  categoryId: Schema.Types.ObjectId;
  comments: Schema.Types.ObjectId[];
  likes: Schema.Types.ObjectId[];
}
const postSchema = new Schema(
  {
    title: String,
    content: String,
    imageUrl: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    views: [
      {
        type: Schema.Types.ObjectId,
        ref: "View",
      },
    ],
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
