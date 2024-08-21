import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { authConfig } from "./auth.config"
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [GitHub, Google],
})