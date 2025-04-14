import type { ApiRoutes } from '@/server/main'
import { createAuthClient } from 'better-auth/react'
import { hc } from 'hono/client'

// hono rpc client
export const api = hc<ApiRoutes>('/').api

// auth client
export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_URL,
})
