import { createAuthClient } from 'better-auth/react'
import { hc } from 'hono/client'
import type { ApiRoutes } from '@/server/main'

// hono rpc client
export const api = hc<ApiRoutes>('/').api

// auth client
export const { signIn, signUp, useSession } = createAuthClient()
