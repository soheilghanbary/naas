import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { auth } from './lib/auth'

// initialize hono app
export const app = new Hono()
export type ApiRoutes = typeof apiRoutes

// middlewares
app.use('*', logger())
app.use(
  '*',
  cors({
    credentials: true,
    origin: (origin) => origin,
    allowHeaders: ['Content-Type'],
  })
)

// authentication
app.use(
  '/api/auth/*',
  cors({
    origin: process.env.NEXT_PUBLIC_URL!,
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  })
)

app.on(['POST', 'GET'], '/api/auth/*', (c) => {
  return auth.handler(c.req.raw)
})

// routes
const apiRoutes = app.basePath('/api').get('/hello', async (c) => {
  return c.json({
    message: 'Hello from Hono 🔥',
    date: new Date(),
  })
})
