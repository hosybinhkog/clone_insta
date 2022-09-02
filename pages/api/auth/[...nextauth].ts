import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/dist/server/api-utils";

export default nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.WEB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect({ baseUrl, url }) {
      console.log(baseUrl, url);
      return baseUrl;
    },
  },
});
