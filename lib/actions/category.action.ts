"use server";
import Category from "@/models/category.model";
import connectToDatabase from "@/utils/connectDb";
import { NextResponse } from "next/server";

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

export async function getAllCategories() {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return categories;
  } catch (error) {
    console.log(error);
  }
}
