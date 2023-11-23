import { Schema, model, models } from "mongoose";

export interface IComment extends Document {
  postId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
}
const viewSchema = new Schema(
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

const View = models.View || model("View", viewSchema);

export default View;
