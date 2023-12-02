import { Schema, model, models } from "mongoose";

export interface INewsLetter extends Document {
  users: Schema.Types.ObjectId[];
}
const newsLetterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

const NewsLetter = models?.NewsLetter || model("NewsLetter", newsLetterSchema);

export default NewsLetter;
