import prisma from "@/prisma";
import { UserRole } from "@prisma/client";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}

interface CreateUserParams {
  clerkId: string;
  name: string | null;
  email: string;
  password?: string;
  imageUrl: string;
}
export async function createUser(params: CreateUserParams) {
  try {
    const { clerkId, name, email, password, imageUrl } = params;
    await prisma.user.create({
      data: {
        clerkId,
        name: name as string,
        email,
        imageUrl,
        role: UserRole.GUEST,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
