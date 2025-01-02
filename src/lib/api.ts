import type { ApiRoutes } from '@/server/main'
import axios from 'axios'
import { hc } from 'hono/client'

// hono rpc client
export const api = hc<ApiRoutes>('/').api

// axios configuration
export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
})
