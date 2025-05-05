import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import "next-auth";

declare module "next-auth" {
    interface Session {
      user?: {
        id: string;
        name?: string;
        email?: string;
      };
    }
  }
  export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub ?? "";
      }
      return session;
    },
  },
  
});
