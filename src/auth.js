import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [GoogleProvider, FacebookProvider],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      if (account.provider === "facebook") {
        return Boolean(profile.email);
      }

      return true;
    },
    async redirect({baseUrl }) {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth, unstable_update } =
  NextAuth(options);
