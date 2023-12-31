"use server";
import Post from "@/models/post.model";
import connectToDatabase from "@/utils/connectDb";
import { auth } from "@clerk/nextjs";
import { getCurrentUser } from "./user.action";
import { revalidatePath } from "next/cache";
import NewsLetter from "@/models/newletter.model";
import { sendMail } from "@/utils/sendMail";

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
    // if (user.role !== "admin" || user.role !== "moderator") {
    //   throw new Error("only admin and moderator can create post");
    // }
    const newsLetterUsers = await NewsLetter.find();

    const { title, content, category, imageUrl } = params;
    const post = await Post.create({
      title,
      content,
      author: user._id,
      category,
      imageUrl,
    });

    for (let user of newsLetterUsers) {
      await sendMail({
        to: user.email,
        subject: "🌿 New Post Notification from Leafy",
        html: `
            <h1>${post.title}</h1>
            <p>${post.content}</p>
            <img src="${post.imageUrl}" alt="Post Image">
          `,
      });
    }

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deletePostById(id: string) {
  await connectToDatabase();
  try {
    const user = await getCurrentUser();
    if (user.role !== "admin" || user.role !== "moderator") {
      throw new Error("only admin and moderator can create post");
    }
    await Post.findByIdAndDelete(id);
    revalidatePath("/admin/dashboard/blogs");
  } catch (error) {
    console.log(error);
  }
}

export async function getPostById(id: string) {
  await connectToDatabase();
  try {
    const post = await Post.findById(id).populate("author");

    return post;
  } catch (error) {
    console.log(error);
  }
}
