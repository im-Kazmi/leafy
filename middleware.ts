import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import User, { IUser } from "./models/user.model";
import { getClerkUser, getCurrentUser } from "./lib/actions/user.action";
import connectToDatabase from "./utils/connectDb";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhook",
    "/post/:id",
    "/blogs",
    "/podcasts",
    "/book-reviews",
    "/webinars",
    "/jobs",
    "/api/uploadthing",
  ],
  ignoredRoutes: ["/api/webhook", "api/chatgpt"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
