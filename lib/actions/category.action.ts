"use server";
import Category from "@/models/category.model";
import connectToDatabase from "@/utils/connectDb";

export async function createCategory(params: any) {
  try {
    await connectToDatabase();
    const { name } = params;
    await Category.create({
      name,
    });
  } catch (error) {
    console.log(error);
  }
}
