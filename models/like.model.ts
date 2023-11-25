import { Schema, model, models } from "mongoose";

export interface ILike extends Document {
  userId: Schema.Types.ObjectId;
  postId: Schema.Types.ObjectId;
}
const likeSchema = new Schema(
  {
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

const Like = models?.Like || model("Like", likeSchema);

export default Like;
