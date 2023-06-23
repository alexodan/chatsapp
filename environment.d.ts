declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      EMAIL_SERVER: string
      EMAIL_FROM: string
      NEXT_PUBLIC_SUPABASE_URL: string
      SUPABASE_SERVICE_ROLE_KEY: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    }
  }
}

export {}
