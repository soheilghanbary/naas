import type { ApiRoutes } from '@/server/main'
import { hc } from 'hono/client'

// hono rpc client
export const api = hc<ApiRoutes>('/').api
