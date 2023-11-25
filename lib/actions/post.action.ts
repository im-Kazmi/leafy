"use server";
import Post from "@/models/post.model";
import connectToDatabase from "@/utils/connectDb";
import { auth } from "@clerk/nextjs";
import { getCurrentUser } from "./user.action";
import { revalidatePath } from "next/cache";

export async function getAllPosts() {
  await connectToDatabase();
  try {
    const posts = await Post.find().populate("author");
    return posts;
  } catch (error) {
    console.log(error);
  }
}

interface CreatePostParams {
  title: string;
  content: string;
  category: string;
  imageUrl: string;
}
export async function createPost(params: CreatePostParams) {
  await connectToDatabase();
  try {
    const user = await getCurrentUser();
    const { title, content, category, imageUrl } = params;
    const post = await Post.create({
      title,
      content,
      author: user._id,
      category,
      imageUrl,
    });

    console.log(post);

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
