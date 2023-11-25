import { Schema, model, models } from "mongoose";

export interface IComment extends Document {
  content: string;
  userId: Schema.Types.ObjectId;
  postId: Schema.Types.ObjectId;
}
const commentSchema = new Schema(
  {
    content: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

const Comment = models?.Comment || model("Comment", commentSchema);

export default Comment;
