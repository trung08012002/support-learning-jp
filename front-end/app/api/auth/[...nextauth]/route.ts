import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import http from "utils/http";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const res = await http.post("login", {
          email: credentials?.email,
          password: credentials?.password,
        });
        const user = res.data;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
     
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
