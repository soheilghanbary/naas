import type { ApiRoutes } from '@/server/index'
import { hc } from 'hono/client'

// rpc client
export const api = hc<ApiRoutes>('/').api
