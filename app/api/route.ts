// import { NextResponse } from "next/server";
// import { auth, clerkClient } from "@clerk/nextjs";
// import { getClerkUser } from "@/lib/actions/user.action";

// export async function POST() {
//   const { userId } = auth();

//   if (!userId) return NextResponse.redirect("/sign-in");

//   const user: any = getClerkUser();
//   console.log(user);

//   return NextResponse.json({ user });
// }
