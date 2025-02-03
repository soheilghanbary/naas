import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

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

// routes
const apiRoutes = app.basePath('/api').get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono 🔥',
    date: new Date(),
  })
})
