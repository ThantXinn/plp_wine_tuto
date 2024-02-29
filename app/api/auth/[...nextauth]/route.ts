
import { config } from "@/type"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
  providers: [
    GithubProvider({
      clientId: config.github_id,
      clientSecret: config.github_secret
    }),
    GoogleProvider({
        clientId: config.google_client_id,
        clientSecret: config.google_client_secret
    })
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
