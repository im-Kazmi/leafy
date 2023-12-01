import { Schema, model, models } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  imageUrl: string;
  author: Schema.Types.ObjectId;
  categories: Schema.Types.ObjectId;
  comments: Schema.Types.ObjectId[];
  likes: Schema.Types.ObjectId[];
}
const postSchema = new Schema(
  {
    title: String,
    content: String,
    imageUrl: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: String,
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

const Post = models?.Post || model("Post", postSchema);

export default Post;
