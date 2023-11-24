import Post from "@/models/post.model";
import { auth } from "@clerk/nextjs";

export async function getPosts() {
  try {
    const users = await Post.find();
    return users;
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(params: any) {
  try {
    const { title, content, category } = params;
    const users = await Post.create({});
    return users;
  } catch (error) {
    console.log(error);
  }
}
