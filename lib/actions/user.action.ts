import User from "@/models/user.model";

export async function getUsers() {
  try {
    const users = await User.find();
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
    const user = await User.create({
      data: {
        clerkId,
        name: name as string,
        email,
        imageUrl,
        role: "guest",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
