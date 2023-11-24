import Post from "@/models/post.model";
import connectToDatabase from "@/utils/connectDb";
import { auth } from "@clerk/nextjs";

export async function getPosts() {
  await connectToDatabase();
  try {
    const users = await Post.find();
    return users;
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(params: any) {
  await connectToDatabase();
  try {
    const { title, content, category } = params;
    const users = await Post.create({});
    return users;
  } catch (error) {
    console.log(error);
  }
}
