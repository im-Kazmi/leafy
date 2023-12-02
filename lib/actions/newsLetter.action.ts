"use server";

import NewsLetter from "@/models/newletter.model";
import User from "@/models/user.model";
import { auth } from "@clerk/nextjs";

export const addUsertoNewsletter = async (email: string) => {
  try {
    const { userId } = auth();

    if (!userId) {
      throw new Error("UnAuthorized");
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error("user not found!");
    }

    const userAlreadyExists = await NewsLetter.findOne({ email: user.email });

    if (userAlreadyExists) {
      throw new Error("user already exists in newsletter");
    }

    await NewsLetter.create({
      email,
    });
    return {
      success: true,
      message: "😄 User added to newsletter successfully",
    };
  } catch (error) {
    console.log(Error);
  }
};
