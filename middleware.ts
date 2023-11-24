import { authMiddleware } from "@clerk/nextjs";

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
  ],
  ignoredRoutes: ["/api/webhook", "api/chatgpt"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
