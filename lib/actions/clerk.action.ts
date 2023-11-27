import { clerkClient } from "@clerk/nextjs";

export async function getClerkUsers() {
  try {
    const clerkUsers = await clerkClient.users.getUserList();

    console.log(...clerkUsers);
    return clerkUsers;
  } catch (error) {}
}
