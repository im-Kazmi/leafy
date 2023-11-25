import { Schema, model, models } from "mongoose";

export interface IComment extends Document {
  name: string;
  posts: Schema.Types.ObjectId[];
}
const categorySchema = new Schema(
  {
    name: String,
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

const Category = models?.Category || model("Category", categorySchema);

export default Category;
