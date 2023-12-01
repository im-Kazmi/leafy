"use server";
import User from "@/models/user.model";
import connectToDatabase from "@/utils/connectDb";
import { auth, clerkClient } from "@clerk/nextjs";
import { connect } from "http2";
import { revalidatePath } from "next/cache";

export async function getUsers({
  pageSize = 10,
  page = 1,
}: {
  pageSize?: number;
  page?: number;
}) {
  await connectToDatabase();
  try {
    const skipLimit = (page - 1) * pageSize;
    const users = await User.find()
      .skip(skipLimit)
      .limit(pageSize)
      .sort({ role: -1, createdAt: -1 });

    const totalUsers = await User.countDocuments();
    const isNext = totalUsers > skipLimit + users.length;
    return { users, isNext };
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
    const isAdmin = await getAdmin();

    if (!isAdmin) {
      throw new Error("Only admin can modify users");
    }
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
export async function DeleteUserFromDatabase(userId: string, pathname: any) {
  try {
    await connectToDatabase();
    // const isAdmin = await getAdmin();

    // if (!isAdmin) {
    //   throw new Error("Only admin can modify users");
    // }
    const user = await User.findById(userId);
    await clerkClient.users.deleteUser(user.clerkId);

    await User.findByIdAndDelete(user._id);
    console.log(user);

    revalidatePath(pathname);
  } catch (error) {
    console.log(error);
  }
}

export async function getAdmin() {
  try {
    await connectToDatabase();
    const { userId } = auth();

    const admin = await User.findOne({ clerkId: userId, role: "admin" });

    if (!admin) {
      throw new Error("only admin can do this stuff");
    }

    return admin;
  } catch (error) {
    console.log(error);
  }
}

export const updateUserRole = async (
  userId: string,
  role: string,
  path: string
) => {
  try {
    await connectToDatabase();

    // const admin = await getAdmin();

    // if (!admin) {
    //   throw new Error("only admin can modify users!");
    // }

    const userToUpdate = await User.findByIdAndUpdate(userId, {
      role,
    });

    console.log(userToUpdate);
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
};

interface CreateUserWithSessionIfNotExist {
  clerkId: string;
}

export async function createUserWithSessionIfNotExist(
  params: CreateUserWithSessionIfNotExist
) {
  try {
    await connectToDatabase();

    const { clerkId } = params;

    const user = await clerkClient.users.getUser(clerkId);

    const userExists = await User.findOne({ clerkId: user.id });

    if (userExists) {
      throw new Error("User alread exits dont need to create one");
    }

    await User.create({
      clerkId: user.id,
      fullname: ` ${user.firstName} ${user.lastName ? user.lastName : ""}`,
      username: user.username!,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getClerkUser() {
  try {
    await connectToDatabase();
    const { userId } = auth();
    const user = await User.findOne({ clerkId: userId });
    console.log("clerk user = ", user);

    return user;
  } catch (error) {
    console.log(error);
  }
}
