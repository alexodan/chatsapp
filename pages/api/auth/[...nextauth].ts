import NextAuth, { AuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { SupabaseAdapter } from '@auth/supabase-adapter'

export const authOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
} as AuthOptions

export default NextAuth(authOptions)
