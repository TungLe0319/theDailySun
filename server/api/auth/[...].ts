
// import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
// import { usePrisma } from '@sidebase/nuxt-prisma'
import { NuxtAuthHandler } from '#auth'
// import { date } from 'zod'

// import { accountServerService } from '../../services/AccountsServerService'

const prisma = new PrismaClient()
const secret = process.env.AUTH_SECRET ? process.env.AUTH_SECRET : ''

export default NuxtAuthHandler({
  // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
  secret,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // @ts-expect-error
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    // @ts-ignore

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub
        const user = await prisma.user.findUnique({
          where: { id: session.user.id }
        })
        // @ts-ignore
        session.user.role = user.role
      }
      return await session
    }
  }
})
