import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/utils/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { GetTokenParams } from "next-auth/jwt";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account, profile }: any) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.id = profile.id;
  //     }
  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
