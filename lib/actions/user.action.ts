"use server";
import User from "@/models/user.model";
import connectToDatabase from "@/utils/connectDb";
import { auth } from "@clerk/nextjs";

export async function getUsers() {
  await connectToDatabase();
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
}

interface CreateUserParams {
  clerkId: string;
  fullname: string | null;
  username: string | null;
  email: string;
  password?: string;
  imageUrl: string;
  role?: string;
}

export async function getCurrentUser() {
  try {
    await connectToDatabase();
    const { userId } = auth();
    if (!userId) {
      throw new Error("UnAuthorized");
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(params: CreateUserParams) {
  try {
    await connectToDatabase();
    const user = await User.create(params);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

interface UpdateUserParams {
  clerkId: string;
  fullname: string | null;
  username: string | null;
  email: string;
  password?: string;
  imageUrl: string;
  role?: string;
}

export async function updateUser(params: UpdateUserParams) {
  try {
    await connectToDatabase();
    const user = await User.findOneAndUpdate(
      { clerkId: params.clerkId },
      params
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();
    const user = await User.findOneAndDelete({ clerkId });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
