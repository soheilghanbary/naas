import type { ApiRoutes } from '@/server/main'
import { createAuthClient } from 'better-auth/react'
import { hc } from 'hono/client'

// hono rpc client
export const api = hc<ApiRoutes>('/').api

export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: 'http://localhost:3000',
})
