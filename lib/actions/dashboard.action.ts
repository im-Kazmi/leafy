import Category from "@/models/category.model";
import Post, { IPost } from "@/models/post.model";
import User, { IUser } from "@/models/user.model";
import connectToDatabase from "@/utils/connectDb";
import { FilterQuery } from "mongoose";
import { Limelight } from "next/font/google";

export async function getModelsDocumentsCount() {
  try {
    await connectToDatabase();
    const usersCount = await User.countDocuments();
    const blogsCount = await Post.countDocuments();
    const categoriesCount = await Category.countDocuments();

    return { usersCount, blogsCount, categoriesCount };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts({
  page = 1,
  pageSize = 10,
}: {
  page: number;
  pageSize: number;
}) {
  try {
    await connectToDatabase();

    const skipLimit = (page - 1) * pageSize;
    const posts = await Post.find()
      .populate("author")
      .sort({ createdAt: -1 })
      .skip(skipLimit)
      .limit(pageSize);

    const allPosts = await Post.countDocuments();
    const isNext = allPosts > skipLimit + posts.length;
    return { posts, isNext };
  } catch (error) {
    console.log(error);
  }
}
