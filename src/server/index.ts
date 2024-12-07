import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

export const app = new Hono()
// middlewares
app.use('*', logger())
app.use(
  '*',
  cors({
    origin: (origin) => origin,
    allowHeaders: ['Content-Type'],
    credentials: true,
  })
)
// routes
const apiRoutes = app.basePath('/api').get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono 🔥',
  })
})

export type ApiRoutes = typeof apiRoutes
